import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4174);

const proxyTargets = [
  { prefix: '/api/floorplan/', origin: 'https://3dfloorplans.giraffe360.com/' },
  { prefix: '/api/my-giraffe/', origin: 'https://my.giraffe360.com/' },
];

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.wasm': 'application/wasm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function send(res, status, headers, body = '') {
  res.writeHead(status, headers);
  res.end(body);
}

function proxyRequest(req, res, target) {
  if (req.method === 'OPTIONS') {
    send(res, 204, {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, HEAD, OPTIONS',
      'access-control-allow-headers': '*',
    });
    return;
  }

  const incomingUrl = new URL(req.url, `http://${req.headers.host}`);
  const upstreamPath = incomingUrl.pathname.slice(target.prefix.length);
  const upstreamUrl = new URL(upstreamPath + incomingUrl.search, target.origin);

  const upstreamReq = https.request(
    upstreamUrl,
    {
      method: req.method,
      headers: {
        accept: req.headers.accept || '*/*',
        'accept-encoding': req.headers['accept-encoding'] || 'identity',
        'user-agent': req.headers['user-agent'] || 'Peeks local preview',
      },
    },
    (upstreamRes) => {
      const headers = { ...upstreamRes.headers };
      headers['access-control-allow-origin'] = '*';
      delete headers['content-security-policy'];
      delete headers['x-frame-options'];
      res.writeHead(upstreamRes.statusCode || 502, headers);
      upstreamRes.pipe(res);
    },
  );

  upstreamReq.on('error', (error) => {
    send(res, 502, { 'content-type': 'text/plain; charset=utf-8' }, `Proxy error: ${error.message}`);
  });

  req.pipe(upstreamReq);
}

function safeFilePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath);
  const requestedPath = decodedPath.endsWith('/') ? `${decodedPath}index.html` : decodedPath;
  const resolvedPath = path.normalize(path.join(root, requestedPath));
  return resolvedPath.startsWith(root) ? resolvedPath : null;
}

function serveFile(req, res, filePath) {
  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      send(res, 404, { 'content-type': 'text/plain; charset=utf-8' }, 'Not found');
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || 'application/octet-stream';
    const range = req.headers.range;

    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (match) {
        const start = match[1] ? Number(match[1]) : 0;
        const end = match[2] ? Number(match[2]) : stat.size - 1;
        if (start <= end && end < stat.size) {
          res.writeHead(206, {
            'accept-ranges': 'bytes',
            'content-type': contentType,
            'content-length': end - start + 1,
            'content-range': `bytes ${start}-${end}/${stat.size}`,
          });
          fs.createReadStream(filePath, { start, end }).pipe(res);
          return;
        }
      }
    }

    res.writeHead(200, {
      'accept-ranges': 'bytes',
      'content-type': contentType,
      'content-length': stat.size,
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const proxyTarget = proxyTargets.find((target) => req.url.startsWith(target.prefix));
  if (proxyTarget) {
    proxyRequest(req, res, proxyTarget);
    return;
  }

  const incomingUrl = new URL(req.url, `http://${req.headers.host}`);
  const filePath = safeFilePath(incomingUrl.pathname);
  if (!filePath) {
    send(res, 403, { 'content-type': 'text/plain; charset=utf-8' }, 'Forbidden');
    return;
  }

  serveFile(req, res, filePath);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Peeks local preview running at http://127.0.0.1:${port}/`);
});
