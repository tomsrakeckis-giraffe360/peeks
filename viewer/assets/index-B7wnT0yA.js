(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="168",gs={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ap=0,Uh=1,lp=2,zd=1,cp=2,Fn=3,Wn=0,en=1,Ut=2,si=0,_s=1,Oh=2,Fh=3,Bh=4,hp=5,bi=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,_p=202,vp=203,Ll=204,Dl=205,xp=206,yp=207,Mp=208,bp=209,Sp=210,Ep=211,wp=212,Ap=213,Tp=214,Rp=0,Cp=1,Pp=2,Ho=3,Ip=4,Lp=5,Dp=6,Np=7,ha=0,Up=1,Op=2,ri=0,Fp=1,Bp=2,zp=3,kp=4,Vp=5,Gp=6,Hp=7,zh="attached",Wp="detached",Rc=300,Ti=301,Ri=302,Wo=303,$o=304,Nr=306,vr=1e3,zn=1001,xr=1002,Wt=1003,Cc=1004,ds=1005,Yt=1006,hr=1007,kn=1008,$n=1009,kd=1010,Vd=1011,yr=1012,Pc=1013,ui=1014,an=1015,Ur=1016,Ic=1017,Lc=1018,As=1020,Gd=35902,Hd=1021,Wd=1022,Kt=1023,$d=1024,Xd=1025,vs=1026,Ts=1027,Dc=1028,ua=1029,qd=1030,Nc=1031,Uc=1033,Lo=33776,Do=33777,No=33778,Uo=33779,Nl=35840,Ul=35841,Ol=35842,Fl=35843,Bl=36196,zl=37492,kl=37496,Vl=37808,Gl=37809,Hl=37810,Wl=37811,$l=37812,Xl=37813,ql=37814,Yl=37815,Kl=37816,jl=37817,Jl=37818,Zl=37819,Ql=37820,ec=37821,Oo=36492,tc=36494,nc=36495,Yd=36283,ic=36284,sc=36285,rc=36286,Mr=2300,Xo=2301,Pa=2302,kh=2400,Vh=2401,Gh=2402,$p=2500,Xp=3200,qp=3201,Li=0,Yp=1,Bn="",on="srgb",fi="srgb-linear",Oc="display-p3",da="display-p3-linear",qo="linear",vt="srgb",Yo="rec709",Ko="p3",zi=7680,Hh=519,Kp=512,jp=513,Jp=514,Kd=515,Zp=516,Qp=517,em=518,tm=519,oc=35044,Wh="300 es",Vn=2e3,jo=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $h=1234567;const xs=Math.PI/180,Rs=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Fc(s,e){return(s%e+e)%e}function nm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function im(s,e,t){return s!==e?(t-s)/(e-s):0}function ur(s,e,t){return(1-t)*s+t*e}function sm(s,e,t,n){return ur(s,e,1-Math.exp(-t*n))}function rm(s,e=1){return e-Math.abs(Fc(s,e*2)-e)}function om(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cm(s,e){return s+Math.random()*(e-s)}function hm(s){return s*(.5-Math.random())}function um(s){s!==void 0&&($h=s);let e=$h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(s){return s*xs}function fm(s){return s*Rs}function pm(s){return(s&s-1)===0&&s!==0}function mm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _m(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oi={DEG2RAD:xs,RAD2DEG:Rs,generateUUID:fn,clamp:At,euclideanModulo:Fc,mapLinear:nm,inverseLerp:im,lerp:ur,damp:sm,pingpong:rm,smoothstep:om,smootherstep:am,randInt:lm,randFloat:cm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:fm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:_m,normalize:ct,denormalize:yn};class K{constructor(e=0,t=0){K.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],v=i[4],y=i[7],P=i[2],S=i[5],T=i[8];return r[0]=o*_+a*x+l*P,r[3]=o*m+a*v+l*S,r[6]=o*g+a*y+l*T,r[1]=c*_+h*x+u*P,r[4]=c*m+h*v+u*S,r[7]=c*g+h*y+u*T,r[2]=f*_+d*x+p*P,r[5]=f*m+d*v+p*S,r[8]=f*g+d*y+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Ke;function jd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const vm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function fs(s,e){return new vm[s](e)}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xm(){const s=br("canvas");return s.style.display="block",s}const Xh={};function ys(s){s in Xh||(Xh[s]=!0,console.warn(s))}function ym(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qh=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[fi]:{transfer:qo,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[on]:{transfer:vt,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[da]:{transfer:qo,primaries:Ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Yh),fromReference:s=>s.applyMatrix3(qh)},[Oc]:{transfer:vt,primaries:Ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Yh),fromReference:s=>s.applyMatrix3(qh).convertLinearToSRGB()}},Mm=new Set([fi,da]),rt={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ws[e].toReference,i=Ws[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ws[s].primaries},getTransfer:function(s){return s===Bn?qo:Ws[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ws[e].luminanceCoefficients)}};function Ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function La(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ki;class bm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=br("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sm=0;class wi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Da(i[o].image)):r.push(Da(i[o]))}else r=Da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Em=0;class Pt extends Di{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=zn,i=zn,r=Yt,o=kn,a=Kt,l=$n,c=Pt.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=fn(),this.name="",this.source=new wi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Rc;Pt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,P=(g+1)/2,S=(h+f)/4,T=(u+_)/4,w=(p+m)/4;return v>y&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=S/n,r=T/n):y>P?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=w/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=w/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends wm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jd extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Am extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==p){let m=1-a;const g=l*f+c*d+h*p+u*_,x=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const P=Math.sqrt(v),S=Math.atan2(P,g*x);m=Math.sin(m*S)/P,a=Math.sin(a*S)/P}const y=a*x;if(l=l*m+f*y,c=c*m+d*y,h=h*m+p*y,u=u*m+_*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new R,Kh=new Tn;class Tt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),zr.subVectors(this.max,$s),Vi.subVectors(e.a,$s),Gi.subVectors(e.b,$s),Hi.subVectors(e.c,$s),Kn.subVectors(Gi,Vi),jn.subVectors(Hi,Gi),pi.subVectors(Vi,Hi);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!Ua(t,Vi,Gi,Hi,zr)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,Vi,Gi,Hi,zr))?!1:(kr.crossVectors(Kn,jn),t=[kr.x,kr.y,kr.z],Ua(t,Vi,Gi,Hi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,Br=new Tt,Vi=new R,Gi=new R,Hi=new R,Kn=new R,jn=new R,pi=new R,$s=new R,zr=new R,kr=new R,mi=new R;function Ua(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){mi.fromArray(s,r);const a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tm=new Tt,Xs=new R,Oa=new R;class jt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Oa)),this.expandByPoint(Xs.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new R,Fa=new R,Vr=new R,Jn=new R,Ba=new R,Gr=new R,za=new R;class Fs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Fa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vr),a=Jn.dot(this.direction),l=-Jn.dot(Vr),c=Jn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(Vr,f),d}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,r){Ba.subVectors(t,e),Gr.subVectors(n,e),za.crossVectors(Ba,Gr);let o=this.direction.dot(za),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Gr.crossVectors(Jn,Gr));if(l<0)return null;const c=a*this.direction.dot(Ba.cross(Jn));if(c<0||l+c>o)return null;const h=-a*Jn.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,p,_,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Zn.crossVectors(n,sn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Zn.crossVectors(n,sn)),Zn.normalize(),Hr.crossVectors(sn,Zn),i[0]=Zn.x,i[4]=Hr.x,i[8]=sn.x,i[1]=Zn.y,i[5]=Hr.y,i[9]=sn.y,i[2]=Zn.z,i[6]=Hr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],v=n[7],y=n[11],P=n[15],S=i[0],T=i[4],w=i[8],E=i[12],M=i[1],L=i[5],B=i[9],F=i[13],N=i[2],G=i[6],z=i[10],$=i[14],W=i[3],oe=i[7],ae=i[11],pe=i[15];return r[0]=o*S+a*M+l*N+c*W,r[4]=o*T+a*L+l*G+c*oe,r[8]=o*w+a*B+l*z+c*ae,r[12]=o*E+a*F+l*$+c*pe,r[1]=h*S+u*M+f*N+d*W,r[5]=h*T+u*L+f*G+d*oe,r[9]=h*w+u*B+f*z+d*ae,r[13]=h*E+u*F+f*$+d*pe,r[2]=p*S+_*M+m*N+g*W,r[6]=p*T+_*L+m*G+g*oe,r[10]=p*w+_*B+m*z+g*ae,r[14]=p*E+_*F+m*$+g*pe,r[3]=x*S+v*M+y*N+P*W,r[7]=x*T+v*L+y*G+P*oe,r[11]=x*w+v*B+y*z+P*ae,r[15]=x*E+v*F+y*$+P*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+g*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=u*m*c-_*f*c+_*l*d-a*m*d-u*l*g+a*f*g,v=p*f*c-h*m*c-p*l*d+o*m*d+h*l*g-o*f*g,y=h*_*c-p*u*c+p*a*d-o*_*d-h*a*g+o*u*g,P=p*u*l-h*_*l-p*a*f+o*_*f+h*a*m-o*u*m,S=t*x+n*v+i*y+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*g-n*f*g)*T,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*g+n*l*g)*T,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=v*T,e[5]=(h*m*r-p*f*r+p*i*d-t*m*d-h*i*g+t*f*g)*T,e[6]=(p*l*r-o*m*r-p*i*c+t*m*c+o*i*g-t*l*g)*T,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=y*T,e[9]=(p*u*r-h*_*r-p*n*d+t*_*d+h*n*g-t*u*g)*T,e[10]=(o*_*r-p*a*r+p*n*c-t*_*c-o*n*g+t*a*g)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*T,e[12]=P*T,e[13]=(h*_*i-p*u*i+p*n*f-t*_*f-h*n*m+t*u*m)*T,e[14]=(p*a*i-o*_*i-p*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,_=o*h,m=o*u,g=a*u,x=l*c,v=l*h,y=l*u,P=n.x,S=n.y,T=n.z;return i[0]=(1-(_+g))*P,i[1]=(d+y)*P,i[2]=(p-v)*P,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+g))*S,i[6]=(m+x)*S,i[7]=0,i[8]=(p+v)*T,i[9]=(m-x)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Wi.set(i[0],i[1],i[2]).length();const o=Wi.set(i[4],i[5],i[6]).length(),a=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/r,h=1/o,u=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===Vn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===jo)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h;let p,_;if(a===Vn)p=(o+r)*u,_=-2*u;else if(a===jo)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new R,_n=new We,Rm=new R(0,0,0),Cm=new R(1,1,1),Zn=new R,Hr=new R,sn=new R,jh=new We,Jh=new Tn;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pm=0;const Zh=new R,$i=new Tn,Ln=new We,Wr=new R,qs=new R,Im=new R,Lm=new Tn,Qh=new R(1,0,0),eu=new R(0,1,0),tu=new R(0,0,1),nu={type:"added"},Dm={type:"removed"},Xi={type:"childadded",child:null},ka={type:"childremoved",child:null};class mt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new R,t=new pn,n=new Tn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ke}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(qs,Wr,this.up):Ln.lookAt(Wr,qs,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Ln),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new R(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new R,Dn=new R,Va=new R,Nn=new R,qi=new R,Yi=new R,iu=new R,Ga=new R,Ha=new R,Wa=new R;class un{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Dn.subVectors(n,t),Va.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Dn),l=vn.dot(Va),c=Dn.dot(Dn),h=Dn.dot(Va),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Dn.subVectors(e,t),vn.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),vn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;qi.subVectors(i,n),Yi.subVectors(r,n),Ga.subVectors(e,n);const l=qi.dot(Ga),c=Yi.dot(Ga);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,i);const h=qi.dot(Ha),u=Yi.dot(Ha);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(qi,o);Wa.subVectors(e,r);const d=qi.dot(Wa),p=Yi.dot(Wa);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Yi,a);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return iu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(iu,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function $a(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Fc(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return rt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(At(Vt.r*255,0,255))*65536+Math.round(At(Vt.g*255,0,255))*256+Math.round(At(Vt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=on){rt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL($r);const n=ur(Qn.h,$r.h,t),i=ur(Qn.s,$r.s,t),r=ur(Qn.l,$r.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new De;De.NAMES=Zd;let Nm=0;class Jt extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=_s,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cs extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new R,Xr=new K;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ys("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}}class Qd extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ef extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Um=0;const hn=new We,Xa=new mt,Ki=new R,rn=new Tt,Ys=new Tt,Nt=new R;class dt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?ef:Qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(rn.min,Ys.min),rn.expandByPoint(Nt),Nt.addVectors(rn.max,Ys.max),rn.expandByPoint(Nt)):(rn.expandByPoint(Ys.min),rn.expandByPoint(Ys.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Nt.add(Ki)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new R,l[w]=new R;const c=new R,h=new R,u=new R,f=new K,d=new K,p=new K,_=new R,m=new R;function g(w,E,M){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[w].add(_),a[E].add(_),a[M].add(_),l[w].add(m),l[E].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,E=x.length;w<E;++w){const M=x[w],L=M.start,B=M.count;for(let F=L,N=L+B;F<N;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new R,y=new R,P=new R,S=new R;function T(w){P.fromBufferAttribute(i,w),S.copy(P);const E=a[w];v.copy(E),v.sub(P.multiplyScalar(P.dot(E))).normalize(),y.crossVectors(S,E);const L=y.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,L)}for(let w=0,E=x.length;w<E;++w){const M=x[w],L=M.start,B=M.count;for(let F=L,N=L+B;F<N;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new We,gi=new Fs,qr=new jt,ru=new R,ji=new R,Ji=new R,Zi=new R,qa=new R,Yr=new R,Kr=new K,jr=new K,Jr=new K,ou=new R,au=new R,lu=new R,Zr=new R,Qr=new R;class Bt extends mt{constructor(e=new dt,t=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(qa.fromBufferAttribute(u,e),o?Yr.addScaledVector(qa,h):Yr.addScaledVector(qa.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(qr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(qr,ru)===null||gi.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(r).invert(),gi.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,P=v;y<P;y+=3){const S=a.getX(y),T=a.getX(y+1),w=a.getX(y+2);i=eo(this,g,e,n,c,h,u,S,T,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=eo(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,P=v;y<P;y+=3){const S=y,T=y+1,w=y+2;i=eo(this,g,e,n,c,h,u,S,T,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,v=m+1,y=m+2;i=eo(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Om(s,e,t,n,i,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Wn,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:s}}function eo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ji),s.getVertexPosition(l,Ji),s.getVertexPosition(c,Zi);const h=Om(s,e,t,n,ji,Ji,Zi,Zr);if(h){i&&(Kr.fromBufferAttribute(i,a),jr.fromBufferAttribute(i,l),Jr.fromBufferAttribute(i,c),h.uv=un.getInterpolation(Zr,ji,Ji,Zi,Kr,jr,Jr,new K)),r&&(Kr.fromBufferAttribute(r,a),jr.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),h.uv1=un.getInterpolation(Zr,ji,Ji,Zi,Kr,jr,Jr,new K)),o&&(ou.fromBufferAttribute(o,a),au.fromBufferAttribute(o,l),lu.fromBufferAttribute(o,c),h.normal=un.getInterpolation(Zr,ji,Ji,Zi,ou,au,lu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};un.getNormal(ji,Ji,Zi,u.normal),h.face=u}return h}class Bs extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function p(_,m,g,x,v,y,P,S,T,w,E){const M=y/T,L=P/w,B=y/2,F=P/2,N=S/2,G=T+1,z=w+1;let $=0,W=0;const oe=new R;for(let ae=0;ae<z;ae++){const pe=ae*L-F;for(let Xe=0;Xe<G;Xe++){const te=Xe*M-B;oe[_]=te*x,oe[m]=pe*v,oe[g]=N,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[g]=S>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Xe/T),u.push(1-ae/w),$+=1}}for(let ae=0;ae<w;ae++)for(let pe=0;pe<T;pe++){const Xe=f+pe+G*ae,te=f+pe+G*(ae+1),q=f+(pe+1)+G*(ae+1),se=f+(pe+1)+G*ae;l.push(Xe,te,se),l.push(te,q,se),W+=6}a.addGroup(d,W,E),d+=W,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=Ps(s[t]);for(const i in n)e[i]=n[i]}return e}function Fm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Bm={clone:Ps,merge:Xt};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new R,cu=new K,hu=new K;class Ht extends nf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,cu,hu),t.subVectors(hu,cu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,es=1;class Vm extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Qi,es,e,t);i.layers=this.layers,this.add(i);const r=new Ht(Qi,es,e,t);r.layers=this.layers,this.add(r);const o=new Ht(Qi,es,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Qi,es,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Qi,es,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zc extends Pt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gm extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bs(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:si});r.uniforms.tEquirect.value=t;const o=new Bt(i,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Yt),new Vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ya=new R,Hm=new R,Wm=new Ke;class ii{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ya.subVectors(n,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new jt,to=new R;class fa{constructor(e=new ii,t=new ii,n=new ii,i=new ii,r=new ii,o=new ii){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],g=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-d,y-g).normalize(),n[1].setComponents(l+r,f+c,m+d,y+g).normalize(),n[2].setComponents(l+o,f+h,m+p,y+x).normalize(),n[3].setComponents(l-o,f-h,m-p,y-x).normalize(),n[4].setComponents(l-a,f-u,m-_,y-v).normalize(),t===Vn)n[5].setComponents(l+a,f+u,m+_,y+v).normalize();else if(t===jo)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $m(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(s.bindBuffer(c,a),u.count===-1&&f.length===0&&s.bufferSubData(c,0,h),f.length!==0){for(let d=0,p=f.length;d<p;d++){const _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class zs extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*f-o;for(let v=0;v<c;v++){const y=v*u-r;p.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const v=x+c*g,y=x+c*(g+1),P=x+1+c*(g+1),S=x+1+c*g;d.push(v,y,S),d.push(y,P,S)}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$g=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Xm,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:Km,alphatest_fragment:jm,alphatest_pars_fragment:Jm,aomap_fragment:Zm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:dg,color_pars_vertex:fg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:yg,emissivemap_pars_fragment:Mg,colorspace_fragment:bg,colorspace_pars_fragment:Sg,envmap_fragment:Eg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Ag,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Bg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Ig,fog_pars_fragment:Lg,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Og,lights_pars_begin:Fg,lights_toon_fragment:zg,lights_toon_pars_fragment:kg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Wg,lights_fragment_begin:$g,lights_fragment_maps:Xg,lights_fragment_end:qg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Jg,map_fragment:Zg,map_pars_fragment:Qg,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:v0,opaque_fragment:x0,packing:y0,premultiplied_alpha_fragment:M0,project_vertex:b0,dithering_fragment:S0,dithering_pars_fragment:E0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:U0,specularmap_pars_fragment:O0,tonemapping_fragment:F0,tonemapping_pars_fragment:B0,transmission_fragment:z0,transmission_pars_fragment:k0,uv_pars_fragment:V0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:W0,background_vert:$0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:K0,cube_frag:j0,depth_vert:J0,depth_frag:Z0,distanceRGBA_vert:Q0,distanceRGBA_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:o_,meshlambert_vert:a_,meshlambert_frag:l_,meshmatcap_vert:c_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:f_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:__,meshtoon_frag:v_,points_vert:x_,points_frag:y_,shadow_vert:M_,shadow_frag:b_,sprite_vert:S_,sprite_frag:E_},ve={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},En={basic:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Xt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Xt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Xt([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Xt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Xt([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Xt([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Xt([ve.common,ve.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Xt([ve.lights,ve.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};En.physical={uniforms:Xt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const no={r:0,b:0,g:0},vi=new pn,w_=new We;function A_(s,e,t,n,i,r,o){const a=new De(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const y=p(x);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const y=p(v);y&&(y.isCubeTexture||y.mapping===Nr)?(h===void 0&&(h=new Bt(new Bs(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ps(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vi.copy(v.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(vi)),h.material.toneMapped=rt.getTransfer(y.colorSpace)!==vt,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Bt(new zs(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ps(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(no,tf(s)),n.buffers.color.setClear(no.r,no.g,no.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:_,addToRenderList:m}}function T_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,L,B,F,N){let G=!1;const z=u(F,B,L);r!==z&&(r=z,c(r.object)),G=d(M,F,B,N),G&&p(M,F,B,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(M,L,B,F),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,B){const F=B.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let G=N[L.id];G===void 0&&(G={},N[L.id]=G);let z=G[F];return z===void 0&&(z=f(l()),G[F]=z),z}function f(M){const L=[],B=[],F=[];for(let N=0;N<t;N++)L[N]=0,B[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,L,B,F){const N=r.attributes,G=L.attributes;let z=0;const $=B.getAttributes();for(const W in $)if($[W].location>=0){const ae=N[W];let pe=G[W];if(pe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function p(M,L,B,F){const N={},G=L.attributes;let z=0;const $=B.getAttributes();for(const W in $)if($[W].location>=0){let ae=G[W];ae===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),N[W]=pe,z++}r.attributes=N,r.attributesNum=z,r.index=F}function _(){const M=r.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){g(M,0)}function g(M,L){const B=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;B[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),N[M]!==L&&(s.vertexAttribDivisor(M,L),N[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let B=0,F=L.length;B<F;B++)L[B]!==M[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function v(M,L,B,F,N,G,z){z===!0?s.vertexAttribIPointer(M,L,B,N,G):s.vertexAttribPointer(M,L,B,F,N,G)}function y(M,L,B,F){_();const N=F.attributes,G=B.getAttributes(),z=L.defaultAttributeValues;for(const $ in G){const W=G[$];if(W.location>=0){let oe=N[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const ae=oe.normalized,pe=oe.itemSize,Xe=e.get(oe);if(Xe===void 0)continue;const te=Xe.buffer,q=Xe.type,se=Xe.bytesPerElement,Ae=q===s.INT||q===s.UNSIGNED_INT||oe.gpuType===Pc;if(oe.isInterleavedBufferAttribute){const de=oe.data,Ue=de.stride,Oe=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<W.locationSize;Ie++)g(W.location+Ie,de.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<W.locationSize;Ie++)m(W.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Ie=0;Ie<W.locationSize;Ie++)v(W.location+Ie,pe/W.locationSize,q,ae,Ue*se,(Oe+pe/W.locationSize*Ie)*se,Ae)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)g(W.location+de,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,te);for(let de=0;de<W.locationSize;de++)v(W.location+de,pe/W.locationSize,q,ae,pe*se,pe/W.locationSize*de*se,Ae)}}else if(z!==void 0){const ae=z[$];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(W.location,ae);break;case 3:s.vertexAttrib3fv(W.location,ae);break;case 4:s.vertexAttrib4fv(W.location,ae);break;default:s.vertexAttrib1fv(W.location,ae)}}}}x()}function P(){w();for(const M in n){const L=n[M];for(const B in L){const F=L[B];for(const N in F)h(F[N].object),delete F[N];delete L[B]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const B in L){const F=L[B];for(const N in F)h(F[N].object),delete F[N];delete L[B]}delete n[M.id]}function T(M){for(const L in n){const B=n[L];if(B[M.id]===void 0)continue;const F=B[M.id];for(const N in F)h(F[N].object),delete F[N];delete B[M.id]}}function w(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function R_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<f.length;_++)t.update(p,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==Kt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const T=S===Ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==$n&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==an&&!T)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:P}}function P_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ii,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let y=g.clippingState||null;l.value=y,y=h(p,f,v,d);for(let P=0;P!==v;++P)y[P]=t[P];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function I_(s){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=Ti:a===$o&&(o.mapping=Ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===$o)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gm(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pa extends nf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,uu=[.125,.215,.35,.446,.526,.582],Si=20,Ka=new pa,du=new De;let ja=null,Ja=0,Za=0,Qa=!1;const Mi=(1+Math.sqrt(5))/2,ts=1/Mi,fu=[new R(-Mi,ts,0),new R(Mi,ts,0),new R(-ts,0,Mi),new R(ts,0,Mi),new R(0,Mi,-ts),new R(0,Mi,ts),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ja=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Ja,Za),this._renderer.xr.enabled=Qa,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ur,format:Kt,colorSpace:fi,depthBuffer:!1},i=mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L_(r)),this._blurMaterial=D_(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(du),h.toneMapping=ri,h.autoClear=!1;const d=new Cs({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new Bt(new Bs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(du),_=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;io(i,x*v,g>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ti||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fu[(i-r-1)%fu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const g=[];let x=0;for(let T=0;T<Si;++T){const w=T/_,E=Math.exp(-w*w/2);g.push(E),T===0?x+=E:T<m&&(x+=2*E)}for(let T=0;T<g.length;T++)g[T]=g[T]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const y=this._sizeLods[i],P=3*y*(i>v-ps?i-v+ps:0),S=4*(this._cubeSize-y);io(t,P,S,3*y,2*y),l.setRenderTarget(t),l.render(u,Ka)}}function L_(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+uu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ps?l=uu[o-s+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),v=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let S=0;S<d;S++){const T=S%3*2/3-1,w=S>2?0:-1,E=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];x.set(E,_*p*S),v.set(f,m*p*S);const M=[S,S,S,S,S,S];y.set(M,g*p*S)}const P=new dt;P.setAttribute("position",new pt(x,_)),P.setAttribute("uv",new pt(v,m)),P.setAttribute("faceIndex",new pt(y,g)),e.push(P),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mu(s,e,t){const n=new Ci(s,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function D_(s,e,t){const n=new Float32Array(Si),i=new R(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function gu(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function _u(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wo||l===$o,h=l===Ti||l===Ri;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new pu(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new pu(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function U_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O_(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const P=x[v+0],S=x[v+1],T=x[v+2];f.push(P,S,S,T,T,P)}}else if(p!==void 0){const x=p.array;_=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const P=v+0,S=v+1,T=v+2;f.push(P,S,S,T,T,P)}}else return;const m=new(jd(f)?ef:Qd)(f,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function F_(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function u(f,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];for(let x=0;x<_.length;x++)t.update(g,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function z_(s,e,t){const n=new WeakMap,i=new ht;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*P*4*u),T=new Jd(S,y,P,u);T.type=an,T.needsUpdate=!0;const w=v*4;for(let M=0;M<u;M++){const L=m[M],B=g[M],F=x[M],N=y*P*4*M;for(let G=0;G<L.count;G++){const z=G*w;d===!0&&(i.fromBufferAttribute(L,G),S[N+z+0]=i.x,S[N+z+1]=i.y,S[N+z+2]=i.z,S[N+z+3]=0),p===!0&&(i.fromBufferAttribute(B,G),S[N+z+4]=i.x,S[N+z+5]=i.y,S[N+z+6]=i.z,S[N+z+7]=0),_===!0&&(i.fromBufferAttribute(F,G),S[N+z+8]=i.x,S[N+z+9]=i.y,S[N+z+10]=i.z,S[N+z+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new K(y,P)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function k_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class rf extends Pt{constructor(e,t,n,i,r,o,a,l,c,h=vs){if(h!==vs&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=ui),n===void 0&&h===Ts&&(n=As),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const of=new Pt,vu=new rf(1,1),af=new Jd,lf=new Am,cf=new zc,xu=[],yu=[],Mu=new Float32Array(16),bu=new Float32Array(9),Su=new Float32Array(4);function ks(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=xu[i];if(r===void 0&&(r=new Float32Array(i),xu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ma(s,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function V_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function $_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Su.set(n),s.uniformMatrix2fv(this.addr,!1,Su),Lt(t,n)}}function X_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;bu.set(n),s.uniformMatrix3fv(this.addr,!1,bu),Lt(t,n)}}function q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Mu.set(n),s.uniformMatrix4fv(this.addr,!1,Mu),Lt(t,n)}}function Y_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function Z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function nv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vu.compareFunction=Kd,r=vu):r=of,t.setTexture2D(e||r,i)}function iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lf,i)}function sv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cf,i)}function rv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||af,i)}function ov(s){switch(s){case 5126:return V_;case 35664:return G_;case 35665:return H_;case 35666:return W_;case 35674:return $_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return K_;case 35668:case 35672:return j_;case 35669:case 35673:return J_;case 5125:return Z_;case 36294:return Q_;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}function av(s,e){s.uniform1fv(this.addr,e)}function lv(s,e){const t=ks(e,this.size,2);s.uniform2fv(this.addr,t)}function cv(s,e){const t=ks(e,this.size,3);s.uniform3fv(this.addr,t)}function hv(s,e){const t=ks(e,this.size,4);s.uniform4fv(this.addr,t)}function uv(s,e){const t=ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dv(s,e){const t=ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fv(s,e){const t=ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pv(s,e){s.uniform1iv(this.addr,e)}function mv(s,e){s.uniform2iv(this.addr,e)}function gv(s,e){s.uniform3iv(this.addr,e)}function _v(s,e){s.uniform4iv(this.addr,e)}function vv(s,e){s.uniform1uiv(this.addr,e)}function xv(s,e){s.uniform2uiv(this.addr,e)}function yv(s,e){s.uniform3uiv(this.addr,e)}function Mv(s,e){s.uniform4uiv(this.addr,e)}function bv(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||of,r[o])}function Sv(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lf,r[o])}function Ev(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||cf,r[o])}function wv(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||af,r[o])}function Av(s){switch(s){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return dv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return xv;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return wv}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Av(t.type)}}class Cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function Eu(s,e){s.seq.push(e),s.map[e.id]=e}function Pv(s,e,t){const n=s.name,i=n.length;for(el.lastIndex=0;;){const r=el.exec(n),o=el.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Eu(t,c===void 0?new Tv(a,s,e):new Rv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Cv(a),Eu(t,u)),t=u}}}class Fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Pv(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function wu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Iv=37297;let Lv=0;function Dv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Nv(s){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s);let n;switch(e===t?n="":e===Ko&&t===Yo?n="LinearDisplayP3ToLinearSRGB":e===Yo&&t===Ko&&(n="LinearSRGBToLinearDisplayP3"),s){case fi:case da:return[n,"LinearTransferOETF"];case on:case Oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Au(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dv(s.getShaderSource(e),o)}else return i}function Uv(s,e){const t=Nv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ov(s,e){let t;switch(e){case Fp:t="Linear";break;case Bp:t="Reinhard";break;case zp:t="Cineon";break;case kp:t="ACESFilmic";break;case Gp:t="AgX";break;case Hp:t="Neutral";break;case Vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new R;function Fv(){rt.getLuminanceCoefficients(so);const s=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function zv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rr(s){return s!==""}function Tu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(s){return s.replace(Vv,Hv)}const Gv=new Map;function Hv(s,e){let t=Je[e];if(t===void 0){const n=Gv.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(s){return s.replace(Wv,$v)}function $v(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function qv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case Ri:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Kv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ha:e="ENVMAP_BLENDING_MULTIPLY";break;case Up:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function jv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xv(t),c=qv(t),h=Yv(t),u=Kv(t),f=jv(t),d=Bv(t),p=zv(r),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rr).join(`
`),g.length>0&&(g+=`
`)):(m=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),g=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Je.tonemapping_pars_fragment:"",t.toneMapping!==ri?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),o=ac(o),o=Tu(o,t),o=Ru(o,t),a=ac(a),a=Tu(a,t),a=Ru(a,t),o=Cu(o),a=Cu(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=x+m+o,y=x+g+a,P=wu(i,i.VERTEX_SHADER,v),S=wu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,P),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(L){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(P).trim(),N=i.getShaderInfoLog(S).trim();let G=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,S);else{const $=Au(i,P,"vertex"),W=Au(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+$+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||N==="")&&(z=!1);z&&(L.diagnostics={runnable:G,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:N,prefix:g}})}i.deleteShader(P),i.deleteShader(S),w=new Fo(i,_),E=kv(i,_)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Iv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}let Zv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ex(e),t.set(e,n)),n}}class ex{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function tx(s,e,t,n,i,r,o){const a=new Bc,l=new Qv,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,B,F){const N=B.fog,G=F.geometry,z=E.isMeshStandardMaterial?B.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),W=$&&$.mapping===Nr?$.image.height:null,oe=p[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Xe=0;G.morphAttributes.position!==void 0&&(Xe=1),G.morphAttributes.normal!==void 0&&(Xe=2),G.morphAttributes.color!==void 0&&(Xe=3);let te,q,se,Ae;if(oe){const X=En[oe];te=X.vertexShader,q=X.fragmentShader}else te=E.vertexShader,q=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),Ae=l.getFragmentShaderID(E);const de=s.getRenderTarget(),Ue=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,Ie=!!E.map,Ze=!!E.matcap,C=!!$,ie=!!E.aoMap,ne=!!E.lightMap,fe=!!E.bumpMap,Y=!!E.normalMap,Fe=!!E.displacementMap,me=!!E.emissiveMap,be=!!E.metalnessMap,I=!!E.roughnessMap,b=E.anisotropy>0,k=E.clearcoat>0,Z=E.dispersion>0,j=E.iridescence>0,Q=E.sheen>0,Te=E.transmission>0,ue=b&&!!E.anisotropyMap,ge=k&&!!E.clearcoatMap,ke=k&&!!E.clearcoatNormalMap,re=k&&!!E.clearcoatRoughnessMap,Me=j&&!!E.iridescenceMap,et=j&&!!E.iridescenceThicknessMap,Be=Q&&!!E.sheenColorMap,we=Q&&!!E.sheenRoughnessMap,qe=!!E.specularMap,je=!!E.specularColorMap,gt=!!E.specularIntensityMap,D=Te&&!!E.transmissionMap,le=Te&&!!E.thicknessMap,J=!!E.gradientMap,ee=!!E.alphaMap,ce=E.alphaTest>0,ze=!!E.alphaHash,nt=!!E.extensions;let yt=ri;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(yt=s.toneMapping);const Rt={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:q,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:Ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:fi,alphaToCoverage:!!E.alphaToCoverage,map:Ie,matcap:Ze,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:W,aoMap:ie,lightMap:ne,bumpMap:fe,normalMap:Y,displacementMap:f&&Fe,emissiveMap:me,normalMapObjectSpace:Y&&E.normalMapType===Yp,normalMapTangentSpace:Y&&E.normalMapType===Li,metalnessMap:be,roughnessMap:I,anisotropy:b,anisotropyMap:ue,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:ke,clearcoatRoughnessMap:re,dispersion:Z,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:et,sheen:Q,sheenColorMap:Be,sheenRoughnessMap:we,specularMap:qe,specularColorMap:je,specularIntensityMap:gt,transmission:Te,transmissionMap:D,thicknessMap:le,gradientMap:J,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:ce,alphaHash:ze,combine:E.combine,mapUv:Ie&&_(E.map.channel),aoMapUv:ie&&_(E.aoMap.channel),lightMapUv:ne&&_(E.lightMap.channel),bumpMapUv:fe&&_(E.bumpMap.channel),normalMapUv:Y&&_(E.normalMap.channel),displacementMapUv:Fe&&_(E.displacementMap.channel),emissiveMapUv:me&&_(E.emissiveMap.channel),metalnessMapUv:be&&_(E.metalnessMap.channel),roughnessMapUv:I&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(E.sheenRoughnessMap.channel),specularMapUv:qe&&_(E.specularMap.channel),specularColorMapUv:je&&_(E.specularColorMap.channel),specularIntensityMapUv:gt&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:le&&_(E.thicknessMap.channel),alphaMapUv:ee&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Y||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ie||ee),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,decodeVideoTexture:Ie&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ut,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:nt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&E.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function g(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(x(M,E),v(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const M=p[E.type];let L;if(M){const B=En[M];L=Bm.clone(B.uniforms)}else L=E.uniforms;return L}function P(E,M){let L;for(let B=0,F=h.length;B<F;B++){const N=h[B];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new Jv(s,M,E,r),h.push(L)),L}function S(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:P,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:w}}function nx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ix(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Iu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function a(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function l(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||ix),n.length>1&&n.sort(f||Iu),i.length>1&&i.sort(f||Iu)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function sx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Lu,s.set(n,[o])):i>=r.length?(o=new Lu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new De};break;case"SpotLight":t={position:new R,direction:new R,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function ox(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ax=0;function lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cx(s){const e=new rx,t=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new We,o=new We;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,v=0,y=0,P=0,S=0,T=0;c.sort(lx);for(let E=0,M=c.length;E<M;E++){const L=c[E],B=L.color,F=L.intensity,N=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],F);T++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=z,d++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(B).multiplyScalar(F),z.distance=N,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[_]=z;const $=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,$.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[_]=$.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,y++}_++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(B).multiplyScalar(F),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const $=L.shadow,W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=z,p++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(F),z.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[g]=z,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==d||w.pointLength!==p||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==g||w.numDirectionalShadows!==x||w.numPointShadows!==v||w.numSpotShadows!==y||w.numSpotMaps!==P||w.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,w.directionalLength=d,w.pointLength=p,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=g,w.numDirectionalShadows=x,w.numPointShadows=v,w.numSpotShadows=y,w.numSpotMaps=P,w.numLightProbes=T,n.version=ax++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const v=c[g];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Du(s){const e=new cx(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function hx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Du(s),e.set(i,[a])):r>=o.length?(a=new Du(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class hf extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uf extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fx(s,e,t){let n=new fa;const i=new K,r=new K,o=new ht,a=new hf({depthPacking:qp}),l=new uf,c={},h=t.maxTextureSize,u={[Wn]:en,[en]:Wn,[Ut]:Ut},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new dt;p.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let g=this.type;this.render=function(S,T,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(si),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=g!==Fn&&this.type===Fn,N=g===Fn&&this.type!==Fn;for(let G=0,z=S.length;G<z;G++){const $=S[G],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const oe=W.getFrameExtents();if(i.multiply(oe),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,W.mapSize.y=r.y)),W.map===null||F===!0||N===!0){const pe=this.type!==Fn?{minFilter:Wt,magFilter:Wt}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(i.x,i.y,pe),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ae=W.getViewportCount();for(let pe=0;pe<ae;pe++){const Xe=W.getViewport(pe);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),B.viewport(o),W.updateMatrices($,pe),n=W.getFrustum(),y(T,w,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Fn&&x(W,w),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,L)};function x(S,T){const w=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,w,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,w,d,_,null)}function v(S,T,w,E){let M=null;const L=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)M=L;else if(M=w.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=M.uuid,F=T.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let G=N[F];G===void 0&&(G=M.clone(),N[F]=G,T.addEventListener("dispose",P)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Fn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=w}return M}function y(S,T,w,E,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Fn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const F=e.update(S),N=S.material;if(Array.isArray(N)){const G=F.groups;for(let z=0,$=G.length;z<$;z++){const W=G[z],oe=N[W.materialIndex];if(oe&&oe.visible){const ae=v(S,oe,E,M);S.onBeforeShadow(s,S,T,w,F,ae,W),s.renderBufferDirect(w,null,F,ae,S,W),S.onAfterShadow(s,S,T,w,F,ae,W)}}}else if(N.visible){const G=v(S,N,E,M);S.onBeforeShadow(s,S,T,w,F,G,null),s.renderBufferDirect(w,null,F,G,S,null),S.onAfterShadow(s,S,T,w,F,G,null)}}const B=S.children;for(let F=0,N=B.length;F<N;F++)y(B[F],T,w,E,M)}function P(S){S.target.removeEventListener("dispose",P);for(const w in c){const E=c[w],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function px(s){function e(){let D=!1;const le=new ht;let J=null;const ee=new ht(0,0,0,0);return{setMask:function(ce){J!==ce&&!D&&(s.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){D=ce},setClear:function(ce,ze,nt,yt,Rt){Rt===!0&&(ce*=yt,ze*=yt,nt*=yt),le.set(ce,ze,nt,yt),ee.equals(le)===!1&&(s.clearColor(ce,ze,nt,yt),ee.copy(le))},reset:function(){D=!1,J=null,ee.set(-1,0,0,0)}}}function t(){let D=!1,le=null,J=null,ee=null;return{setTest:function(ce){ce?Ae(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(ce){le!==ce&&!D&&(s.depthMask(ce),le=ce)},setFunc:function(ce){if(J!==ce){switch(ce){case Rp:s.depthFunc(s.NEVER);break;case Cp:s.depthFunc(s.ALWAYS);break;case Pp:s.depthFunc(s.LESS);break;case Ho:s.depthFunc(s.LEQUAL);break;case Ip:s.depthFunc(s.EQUAL);break;case Lp:s.depthFunc(s.GEQUAL);break;case Dp:s.depthFunc(s.GREATER);break;case Np:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ee!==ce&&(s.clearDepth(ce),ee=ce)},reset:function(){D=!1,le=null,J=null,ee=null}}}function n(){let D=!1,le=null,J=null,ee=null,ce=null,ze=null,nt=null,yt=null,Rt=null;return{setTest:function(X){D||(X?Ae(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(X){le!==X&&!D&&(s.stencilMask(X),le=X)},setFunc:function(X,_e,xe){(J!==X||ee!==_e||ce!==xe)&&(s.stencilFunc(X,_e,xe),J=X,ee=_e,ce=xe)},setOp:function(X,_e,xe){(ze!==X||nt!==_e||yt!==xe)&&(s.stencilOp(X,_e,xe),ze=X,nt=_e,yt=xe)},setLocked:function(X){D=X},setClear:function(X){Rt!==X&&(s.clearStencil(X),Rt=X)},reset:function(){D=!1,le=null,J=null,ee=null,ce=null,ze=null,nt=null,yt=null,Rt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,x=null,v=null,y=null,P=null,S=new De(0,0,0),T=0,w=!1,E=null,M=null,L=null,B=null,F=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),G=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=z>=2);let W=null,oe={};const ae=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Xe=new ht().fromArray(ae),te=new ht().fromArray(pe);function q(D,le,J,ee){const ce=new Uint8Array(4),ze=s.createTexture();s.bindTexture(D,ze),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<J;nt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(le+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return ze}const se={};se[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ae(s.DEPTH_TEST),r.setFunc(Ho),fe(!1),Y(Uh),Ae(s.CULL_FACE),ie(si);function Ae(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function de(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Ue(D,le){return h[D]!==le?(s.bindFramebuffer(D,le),h[D]=le,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(D,le){let J=f,ee=!1;if(D){J=u.get(le),J===void 0&&(J=[],u.set(le,J));const ce=D.textures;if(J.length!==ce.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,nt=ce.length;ze<nt;ze++)J[ze]=s.COLOR_ATTACHMENT0+ze;J.length=ce.length,ee=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ee=!0);ee&&s.drawBuffers(J)}function Ie(D){return d!==D?(s.useProgram(D),d=D,!0):!1}const Ze={[bi]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[dp]:s.FUNC_REVERSE_SUBTRACT};Ze[fp]=s.MIN,Ze[pp]=s.MAX;const C={[mp]:s.ZERO,[gp]:s.ONE,[_p]:s.SRC_COLOR,[Ll]:s.SRC_ALPHA,[Sp]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[xp]:s.DST_ALPHA,[vp]:s.ONE_MINUS_SRC_COLOR,[Dl]:s.ONE_MINUS_SRC_ALPHA,[bp]:s.ONE_MINUS_DST_COLOR,[yp]:s.ONE_MINUS_DST_ALPHA,[Ep]:s.CONSTANT_COLOR,[wp]:s.ONE_MINUS_CONSTANT_COLOR,[Ap]:s.CONSTANT_ALPHA,[Tp]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(D,le,J,ee,ce,ze,nt,yt,Rt,X){if(D===si){p===!0&&(de(s.BLEND),p=!1);return}if(p===!1&&(Ae(s.BLEND),p=!0),D!==hp){if(D!==_||X!==w){if((m!==bi||v!==bi)&&(s.blendEquation(s.FUNC_ADD),m=bi,v=bi),X)switch(D){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oh:s.blendFunc(s.ONE,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,x=null,y=null,P=null,S.set(0,0,0),T=0,_=D,w=X}return}ce=ce||le,ze=ze||J,nt=nt||ee,(le!==m||ce!==v)&&(s.blendEquationSeparate(Ze[le],Ze[ce]),m=le,v=ce),(J!==g||ee!==x||ze!==y||nt!==P)&&(s.blendFuncSeparate(C[J],C[ee],C[ze],C[nt]),g=J,x=ee,y=ze,P=nt),(yt.equals(S)===!1||Rt!==T)&&(s.blendColor(yt.r,yt.g,yt.b,Rt),S.copy(yt),T=Rt),_=D,w=!1}function ne(D,le){D.side===Ut?de(s.CULL_FACE):Ae(s.CULL_FACE);let J=D.side===en;le&&(J=!J),fe(J),D.blending===_s&&D.transparent===!1?ie(si):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);const ee=D.stencilWrite;o.setTest(ee),ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(D){E!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),E=D)}function Y(D){D!==ap?(Ae(s.CULL_FACE),D!==M&&(D===Uh?s.cullFace(s.BACK):D===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),M=D}function Fe(D){D!==L&&(G&&s.lineWidth(D),L=D)}function me(D,le,J){D?(Ae(s.POLYGON_OFFSET_FILL),(B!==le||F!==J)&&(s.polygonOffset(le,J),B=le,F=J)):de(s.POLYGON_OFFSET_FILL)}function be(D){D?Ae(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function I(D){D===void 0&&(D=s.TEXTURE0+N-1),W!==D&&(s.activeTexture(D),W=D)}function b(D,le,J){J===void 0&&(W===null?J=s.TEXTURE0+N-1:J=W);let ee=oe[J];ee===void 0&&(ee={type:void 0,texture:void 0},oe[J]=ee),(ee.type!==D||ee.texture!==le)&&(W!==J&&(s.activeTexture(J),W=J),s.bindTexture(D,le||se[D]),ee.type=D,ee.texture=le)}function k(){const D=oe[W];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(D){Xe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function we(D){te.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function qe(D,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let ee=J.get(D);ee===void 0&&(ee=s.getUniformBlockIndex(le,D.name),J.set(D,ee))}function je(D,le){const ee=l.get(le).get(D);a.get(le)!==ee&&(s.uniformBlockBinding(le,ee,D.__bindingPointIndex),a.set(le,ee))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,oe={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,x=null,v=null,y=null,P=null,S=new De(0,0,0),T=0,w=!1,E=null,M=null,L=null,B=null,F=null,Xe.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Ae,disable:de,bindFramebuffer:Ue,drawBuffers:Oe,useProgram:Ie,setBlending:ie,setMaterial:ne,setFlipSided:fe,setCullFace:Y,setLineWidth:Fe,setPolygonOffset:me,setScissorTest:be,activeTexture:I,bindTexture:b,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:Me,texImage3D:et,updateUBOMapping:qe,uniformBlockBinding:je,texStorage2D:ke,texStorage3D:re,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Be,viewport:we,reset:gt}}function Nu(s,e,t,n){const i=mx(n);switch(t){case Hd:return s*e;case $d:return s*e;case Xd:return s*e*2;case Dc:return s*e/i.components*i.byteLength;case ua:return s*e/i.components*i.byteLength;case qd:return s*e*2/i.components*i.byteLength;case Nc:return s*e*2/i.components*i.byteLength;case Wd:return s*e*3/i.components*i.byteLength;case Kt:return s*e*4/i.components*i.byteLength;case Uc:return s*e*4/i.components*i.byteLength;case Lo:case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case No:case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(s,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(s,8)*Math.max(e,8)/2;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Oo:case tc:case nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yd:case ic:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mx(s){switch(s){case $n:case kd:return{byteLength:1,components:1};case yr:case Vd:case Ur:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case ui:case Pc:case an:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,b){return d?new OffscreenCanvas(I,b):br("canvas")}function _(I,b,k){let Z=1;const j=be(I);if((j.width>k||j.height>k)&&(Z=k/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(Z*j.width),Te=Math.floor(Z*j.height);u===void 0&&(u=p(Q,Te));const ue=b?p(Q,Te):u;return ue.width=Q,ue.height=Te,ue.getContext("2d").drawImage(I,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Q+"x"+Te+")."),ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==Wt&&I.minFilter!==Yt}function g(I){s.generateMipmap(I)}function x(I,b,k,Z,j=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=b;if(b===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),b===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RG8UI),k===s.UNSIGNED_SHORT&&(Q=s.RG16UI),k===s.UNSIGNED_INT&&(Q=s.RG32UI),k===s.BYTE&&(Q=s.RG8I),k===s.SHORT&&(Q=s.RG16I),k===s.INT&&(Q=s.RG32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),b===s.RGBA){const Te=j?qo:rt.getTransfer(Z);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=Te===vt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(I,b){let k;return I?b===null||b===ui||b===As?k=s.DEPTH24_STENCIL8:b===an?k=s.DEPTH32F_STENCIL8:b===yr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ui||b===As?k=s.DEPTH_COMPONENT24:b===an?k=s.DEPTH_COMPONENT32F:b===yr&&(k=s.DEPTH_COMPONENT16),k}function y(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Wt&&I.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),T(b),b.isVideoTexture&&h.delete(b)}function S(I){const b=I.target;b.removeEventListener("dispose",S),E(b)}function T(I){const b=n.get(I);if(b.__webglInit===void 0)return;const k=I.source,Z=f.get(k);if(Z){const j=Z[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(I),Object.keys(Z).length===0&&f.delete(k)}n.remove(I)}function w(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const k=I.source,Z=f.get(k);delete Z[b.__cacheKey],o.memory.textures--}function E(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let j=0;j<b.__webglFramebuffer[Z].length;j++)s.deleteFramebuffer(b.__webglFramebuffer[Z][j]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=I.textures;for(let Z=0,j=k.length;Z<j;Z++){const Q=n.get(k[Z]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(I)}let M=0;function L(){M=0}function B(){const I=M;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),M+=1,I}function F(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function N(I,b){const k=n.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(k,I,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function G(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){te(k,I,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function z(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){te(k,I,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function $(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){q(k,I,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const W={[vr]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[xr]:s.MIRRORED_REPEAT},oe={[Wt]:s.NEAREST,[Cc]:s.NEAREST_MIPMAP_NEAREST,[ds]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},ae={[Kp]:s.NEVER,[tm]:s.ALWAYS,[jp]:s.LESS,[Kd]:s.LEQUAL,[Jp]:s.EQUAL,[em]:s.GEQUAL,[Zp]:s.GREATER,[Qp]:s.NOTEQUAL};function pe(I,b){if(b.type===an&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yt||b.magFilter===hr||b.magFilter===ds||b.magFilter===kn||b.minFilter===Yt||b.minFilter===hr||b.minFilter===ds||b.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,W[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,W[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,W[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,oe[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wt||b.minFilter!==ds&&b.minFilter!==kn||b.type===an&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xe(I,b){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const Z=b.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const Q=F(b);if(Q!==I.__cacheKey){j[Q]===void 0&&(j[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Q].usedTimes++;const Te=j[I.__cacheKey];Te!==void 0&&(j[I.__cacheKey].usedTimes--,Te.usedTimes===0&&w(b)),I.__cacheKey=Q,I.__webglTexture=j[Q].texture}return k}function te(I,b,k){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);const j=Xe(I,b),Q=b.source;t.bindTexture(Z,I.__webglTexture,s.TEXTURE0+k);const Te=n.get(Q);if(Q.version!==Te.__version||j===!0){t.activeTexture(s.TEXTURE0+k);const ue=rt.getPrimaries(rt.workingColorSpace),ge=b.colorSpace===Bn?null:rt.getPrimaries(b.colorSpace),ke=b.colorSpace===Bn||ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let re=_(b.image,!1,i.maxTextureSize);re=me(b,re);const Me=r.convert(b.format,b.colorSpace),et=r.convert(b.type);let Be=x(b.internalFormat,Me,et,b.colorSpace,b.isVideoTexture);pe(Z,b);let we;const qe=b.mipmaps,je=b.isVideoTexture!==!0,gt=Te.__version===void 0||j===!0,D=Q.dataReady,le=y(b,re);if(b.isDepthTexture)Be=v(b.format===Ts,b.type),gt&&(je?t.texStorage2D(s.TEXTURE_2D,1,Be,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Be,re.width,re.height,0,Me,et,null));else if(b.isDataTexture)if(qe.length>0){je&&gt&&t.texStorage2D(s.TEXTURE_2D,le,Be,qe[0].width,qe[0].height);for(let J=0,ee=qe.length;J<ee;J++)we=qe[J],je?D&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,we.width,we.height,Me,et,we.data):t.texImage2D(s.TEXTURE_2D,J,Be,we.width,we.height,0,Me,et,we.data);b.generateMipmaps=!1}else je?(gt&&t.texStorage2D(s.TEXTURE_2D,le,Be,re.width,re.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Me,et,re.data)):t.texImage2D(s.TEXTURE_2D,0,Be,re.width,re.height,0,Me,et,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Be,qe[0].width,qe[0].height,re.depth);for(let J=0,ee=qe.length;J<ee;J++)if(we=qe[J],b.format!==Kt)if(Me!==null)if(je){if(D)if(b.layerUpdates.size>0){const ce=Nu(we.width,we.height,b.format,b.type);for(const ze of b.layerUpdates){const nt=we.data.subarray(ze*ce/we.data.BYTES_PER_ELEMENT,(ze+1)*ce/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ze,we.width,we.height,1,Me,nt,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,re.depth,Me,we.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Be,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,re.depth,Me,et,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Be,we.width,we.height,re.depth,0,Me,et,we.data)}else{je&&gt&&t.texStorage2D(s.TEXTURE_2D,le,Be,qe[0].width,qe[0].height);for(let J=0,ee=qe.length;J<ee;J++)we=qe[J],b.format!==Kt?Me!==null?je?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,we.width,we.height,Me,we.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?D&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,we.width,we.height,Me,et,we.data):t.texImage2D(s.TEXTURE_2D,J,Be,we.width,we.height,0,Me,et,we.data)}else if(b.isDataArrayTexture)if(je){if(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Be,re.width,re.height,re.depth),D)if(b.layerUpdates.size>0){const J=Nu(re.width,re.height,b.format,b.type);for(const ee of b.layerUpdates){const ce=re.data.subarray(ee*J/re.data.BYTES_PER_ELEMENT,(ee+1)*J/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,Me,et,ce)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,et,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,re.width,re.height,re.depth,0,Me,et,re.data);else if(b.isData3DTexture)je?(gt&&t.texStorage3D(s.TEXTURE_3D,le,Be,re.width,re.height,re.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,et,re.data)):t.texImage3D(s.TEXTURE_3D,0,Be,re.width,re.height,re.depth,0,Me,et,re.data);else if(b.isFramebufferTexture){if(gt)if(je)t.texStorage2D(s.TEXTURE_2D,le,Be,re.width,re.height);else{let J=re.width,ee=re.height;for(let ce=0;ce<le;ce++)t.texImage2D(s.TEXTURE_2D,ce,Be,J,ee,0,Me,et,null),J>>=1,ee>>=1}}else if(qe.length>0){if(je&&gt){const J=be(qe[0]);t.texStorage2D(s.TEXTURE_2D,le,Be,J.width,J.height)}for(let J=0,ee=qe.length;J<ee;J++)we=qe[J],je?D&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Me,et,we):t.texImage2D(s.TEXTURE_2D,J,Be,Me,et,we);b.generateMipmaps=!1}else if(je){if(gt){const J=be(re);t.texStorage2D(s.TEXTURE_2D,le,Be,J.width,J.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,et,re)}else t.texImage2D(s.TEXTURE_2D,0,Be,Me,et,re);m(b)&&g(Z),Te.__version=Q.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function q(I,b,k){if(b.image.length!==6)return;const Z=Xe(I,b),j=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);const Q=n.get(j);if(j.version!==Q.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const Te=rt.getPrimaries(rt.workingColorSpace),ue=b.colorSpace===Bn?null:rt.getPrimaries(b.colorSpace),ge=b.colorSpace===Bn||Te===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!ke&&!re?Me[ee]=_(b.image[ee],!0,i.maxCubemapSize):Me[ee]=re?b.image[ee].image:b.image[ee],Me[ee]=me(b,Me[ee]);const et=Me[0],Be=r.convert(b.format,b.colorSpace),we=r.convert(b.type),qe=x(b.internalFormat,Be,we,b.colorSpace),je=b.isVideoTexture!==!0,gt=Q.__version===void 0||Z===!0,D=j.dataReady;let le=y(b,et);pe(s.TEXTURE_CUBE_MAP,b);let J;if(ke){je&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,qe,et.width,et.height);for(let ee=0;ee<6;ee++){J=Me[ee].mipmaps;for(let ce=0;ce<J.length;ce++){const ze=J[ce];b.format!==Kt?Be!==null?je?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,ze.width,ze.height,Be,we,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,qe,ze.width,ze.height,0,Be,we,ze.data)}}}else{if(J=b.mipmaps,je&&gt){J.length>0&&le++;const ee=be(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,Be,we,Me[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Me[ee].width,Me[ee].height,0,Be,we,Me[ee].data);for(let ce=0;ce<J.length;ce++){const nt=J[ce].image[ee].image;je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,nt.width,nt.height,Be,we,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,qe,nt.width,nt.height,0,Be,we,nt.data)}}else{je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Be,we,Me[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Be,we,Me[ee]);for(let ce=0;ce<J.length;ce++){const ze=J[ce];je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,Be,we,ze.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,qe,Be,we,ze.image[ee])}}}m(b)&&g(s.TEXTURE_CUBE_MAP),Q.__version=j.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function se(I,b,k,Z,j,Q){const Te=r.convert(k.format,k.colorSpace),ue=r.convert(k.type),ge=x(k.internalFormat,Te,ue,k.colorSpace);if(!n.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>Q),Me=Math.max(1,b.height>>Q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,ge,re,Me,b.depth,0,Te,ue,null):t.texImage2D(j,Q,ge,re,Me,0,Te,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Y(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,j,n.get(k).__webglTexture,0,fe(b)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,j,n.get(k).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(I,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const Z=b.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Q=v(b.stencilBuffer,j),Te=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=fe(b);Y(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,Q,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,Q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,I)}else{const Z=b.textures;for(let j=0;j<Z.length;j++){const Q=Z[j],Te=r.convert(Q.format,Q.colorSpace),ue=r.convert(Q.type),ge=x(Q.internalFormat,Te,ue,Q.colorSpace),ke=fe(b);k&&Y(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,ge,b.width,b.height):Y(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const Z=n.get(b.depthTexture).__webglTexture,j=fe(b);if(b.depthTexture.format===vs)Y(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Ts)Y(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ue(I){const b=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Z}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");de(b.__webglFramebuffer,I)}else if(k){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ae(b.__webglDepthbuffer[Z],I,!1);else{const j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ae(b.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(I,b,k){const Z=n.get(I);b!==void 0&&se(Z.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ue(I)}function Ie(I){const b=I.texture,k=n.get(I),Z=n.get(b);I.addEventListener("dispose",S);const j=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ge=0;ge<b.mipmaps.length;ge++)k.__webglFramebuffer[ue][ge]=s.createFramebuffer()}else k.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)k.__webglFramebuffer[ue]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ue=0,ge=j.length;ue<ge;ue++){const ke=n.get(j[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&Y(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<j.length;ue++){const ge=j[ue];k.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const ke=r.convert(ge.format,ge.colorSpace),re=r.convert(ge.type),Me=x(ge.internalFormat,ke,re,ge.colorSpace,I.isXRRenderTarget===!0),et=fe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Me,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),pe(s.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)se(k.__webglFramebuffer[ue][ge],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else se(k.__webglFramebuffer[ue],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,ge=j.length;ue<ge;ue++){const ke=j[ue],re=n.get(ke);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),pe(s.TEXTURE_2D,ke),se(k.__webglFramebuffer,I,ke,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(ke)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),pe(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)se(k.__webglFramebuffer[ge],I,b,s.COLOR_ATTACHMENT0,ue,ge);else se(k.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,ue,0);m(b)&&g(ue),t.unbindTexture()}I.depthBuffer&&Ue(I)}function Ze(I){const b=I.textures;for(let k=0,Z=b.length;k<Z;k++){const j=b[k];if(m(j)){const Q=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=n.get(j).__webglTexture;t.bindTexture(Q,Te),g(Q),t.unbindTexture()}}}const C=[],ie=[];function ne(I){if(I.samples>0){if(Y(I)===!1){const b=I.textures,k=I.width,Z=I.height;let j=s.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(I),ue=b.length>1;if(ue)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const ke=n.get(b[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,j,s.NEAREST),l===!0&&(C.length=0,ie.length=0,C.push(s.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.resolveDepthBuffer===!1&&(C.push(Q),ie.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const ke=n.get(b[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function fe(I){return Math.min(i.maxSamples,I.samples)}function Y(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(I){const b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function me(I,b){const k=I.colorSpace,Z=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==fi&&k!==Bn&&(rt.getTransfer(k)===vt?(Z!==Kt||j!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function be(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Oe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Y}function _x(s,e){function t(n,i=Bn){let r;const o=rt.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===Ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return s.BYTE;if(n===Vd)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===Pc)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===Ur)return s.HALF_FLOAT;if(n===Hd)return s.ALPHA;if(n===Wd)return s.RGB;if(n===Kt)return s.RGBA;if(n===$d)return s.LUMINANCE;if(n===Xd)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===Dc)return s.RED;if(n===ua)return s.RED_INTEGER;if(n===qd)return s.RG;if(n===Nc)return s.RG_INTEGER;if(n===Uc)return s.RGBA_INTEGER;if(n===Lo||n===Do||n===No||n===Uo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ul||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===zl)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===$l||n===Xl||n===ql||n===Yl||n===Kl||n===jl||n===Jl||n===Zl||n===Ql||n===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===tc||n===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yd||n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class vx extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xx={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:yx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Di{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=new bx,m=t.getContextAttributes();let g=null,x=null;const v=[],y=[],P=new K;let S=null;const T=new Ht;T.layers.enable(1),T.viewport=new ht;const w=new Ht;w.layers.enable(2),w.viewport=new ht;const E=[T,w],M=new vx;M.layers.enable(1),M.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=v[q];return se===void 0&&(se=new tl,v[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=v[q];return se===void 0&&(se=new tl,v[q]=se),se.getGripSpace()},this.getHand=function(q){let se=v[q];return se===void 0&&(se=new tl,v[q]=se),se.getHandSpace()};function F(q){const se=y.indexOf(q.inputSource);if(se===-1)return;const Ae=v[se];Ae!==void 0&&(Ae.update(q.inputSource,q.frame,c||o),Ae.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",G);for(let q=0;q<v.length;q++){const se=y[q];se!==null&&(y[q]=null,v[q].disconnect(se))}L=null,B=null,_.reset(),e.setRenderTarget(g),d=null,f=null,u=null,i=null,x=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ci(d.framebufferWidth,d.framebufferHeight,{format:Kt,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,Ae=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Ts:vs,Ae=m.stencil?As:ui);const Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ci(f.textureWidth,f.textureHeight,{format:Kt,type:$n,depthTexture:new rf(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(q){for(let se=0;se<q.removed.length;se++){const Ae=q.removed[se],de=y.indexOf(Ae);de>=0&&(y[de]=null,v[de].disconnect(Ae))}for(let se=0;se<q.added.length;se++){const Ae=q.added[se];let de=y.indexOf(Ae);if(de===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=y.length){y.push(Ae),de=Oe;break}else if(y[Oe]===null){y[Oe]=Ae,de=Oe;break}if(de===-1)break}const Ue=v[de];Ue&&Ue.connect(Ae)}}const z=new R,$=new R;function W(q,se,Ae){z.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(Ae.matrixWorld);const de=z.distanceTo($),Ue=se.projectionMatrix.elements,Oe=Ae.projectionMatrix.elements,Ie=Ue[14]/(Ue[10]-1),Ze=Ue[14]/(Ue[10]+1),C=(Ue[9]+1)/Ue[5],ie=(Ue[9]-1)/Ue[5],ne=(Ue[8]-1)/Ue[0],fe=(Oe[8]+1)/Oe[0],Y=Ie*ne,Fe=Ie*fe,me=de/(-ne+fe),be=me*-ne;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(be),q.translateZ(me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ue[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const I=Ie+me,b=Ze+me,k=Y-be,Z=Fe+(de-be),j=C*Ze/b*I,Q=ie*Ze/b*I;q.projectionMatrix.makePerspective(k,Z,j,Q,I,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let se=q.near,Ae=q.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(Ae=_.depthFar)),M.near=w.near=T.near=se,M.far=w.far=T.far=Ae,(L!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,B=M.far);const de=q.parent,Ue=M.cameras;oe(M,de);for(let Oe=0;Oe<Ue.length;Oe++)oe(Ue[Oe],de);Ue.length===2?W(M,T,w):M.projectionMatrix.copy(T.projectionMatrix),ae(q,M,de)};function ae(q,se,Ae){Ae===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(Ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Rs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let pe=null;function Xe(q,se){if(h=se.getViewerPose(c||o),p=se,h!==null){const Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Oe=0;Oe<Ae.length;Oe++){const Ie=Ae[Oe];let Ze=null;if(d!==null)Ze=d.getViewport(Ie);else{const ie=u.getViewSubImage(f,Ie);Ze=ie.viewport,Oe===0&&(e.setRenderTargetTextures(x,ie.colorTexture,f.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(x))}let C=E[Oe];C===void 0&&(C=new Ht,C.layers.enable(Oe),C.viewport=new ht,E[Oe]=C),C.matrix.fromArray(Ie.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ie.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Oe===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(C)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Oe=u.getDepthInformation(Ae[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let Ae=0;Ae<v.length;Ae++){const de=y[Ae],Ue=v[Ae];de!==null&&Ue!==void 0&&Ue.update(de,se,c||o)}pe&&pe(q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),p=null}const te=new sf;te.setAnimationLoop(Xe),this.setAnimationLoop=function(q){pe=q},this.dispose=function(){}}}const xi=new pn,Ex=new We;function wx(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,tf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,xi.copy(y),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(xi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ax(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(p(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(x,P);const S=e.render.frame;r[x.id]!==S&&(f(x),r[x.id]=S)}function h(x){const v=u();x.__bindingPointIndex=v;const y=s.createBuffer(),P=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let S=0,T=y.length;S<T;S++){const w=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,M=w.length;E<M;E++){const L=w[E];if(d(L,S,E,P)===!0){const B=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let G=0;G<F.length;G++){const z=F[G],$=_(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,B+N,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,y,P){const S=x.value,T=v+"_"+y;if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:P[T]=S.clone(),!0;{const w=P[T];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return P[T]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function p(x){const v=x.uniforms;let y=0;const P=16;for(let T=0,w=v.length;T<w;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,L=E.length;M<L;M++){const B=E[M],F=Array.isArray(B.value)?B.value:[B.value];for(let N=0,G=F.length;N<G;N++){const z=F[N],$=_(z),W=y%P,oe=W%$.boundary,ae=W+oe;y+=oe,ae!==0&&P-ae<$.storage&&(y+=P-ae),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=$.storage}}}const S=y%P;return S>0&&(y+=P-S),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class df{constructor(e={}){const{canvas:t=xm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=ri,this.toneMappingExposure=1;const v=this;let y=!1,P=0,S=0,T=null,w=-1,E=null;const M=new ht,L=new ht;let B=null;const F=new De(0);let N=0,G=t.width,z=t.height,$=1,W=null,oe=null;const ae=new ht(0,0,G,z),pe=new ht(0,0,G,z);let Xe=!1;const te=new fa;let q=!1,se=!1;const Ae=new We,de=new R,Ue=new ht,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Ze(){return T===null?$:1}let C=n;function ie(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ca}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){const U="webgl2";if(C=ie(U,A),C===null)throw ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,fe,Y,Fe,me,be,I,b,k,Z,j,Q,Te,ue,ge,ke,re,Me,et,Be,we,qe,je,gt;function D(){ne=new U_(C),ne.init(),qe=new _x(C,ne),fe=new C_(C,ne,e,qe),Y=new px(C),Fe=new B_(C),me=new nx,be=new gx(C,ne,Y,me,fe,qe,Fe),I=new I_(v),b=new N_(v),k=new $m(C),je=new T_(C,k),Z=new O_(C,k,Fe,je),j=new k_(C,Z,k,Fe),et=new z_(C,fe,be),ke=new P_(me),Q=new tx(v,I,b,ne,fe,je,ke),Te=new wx(v,me),ue=new sx,ge=new hx(ne),Me=new A_(v,I,b,Y,j,f,l),re=new fx(v,j,fe),gt=new Ax(C,Fe,fe,Y),Be=new R_(C,ne,Fe),we=new F_(C,ne,Fe),Fe.programs=Q.programs,v.capabilities=fe,v.extensions=ne,v.properties=me,v.renderLists=ue,v.shadowMap=re,v.state=Y,v.info=Fe}D();const le=new Sx(v,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(G,z,!1))},this.getSize=function(A){return A.set(G,z)},this.setSize=function(A,U,V=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,z=U,t.width=Math.floor(A*$),t.height=Math.floor(U*$),V===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(G*$,z*$).floor()},this.setDrawingBufferSize=function(A,U,V){G=A,z=U,$=V,t.width=Math.floor(A*V),t.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,U,V,H){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,U,V,H),Y.viewport(M.copy(ae).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,U,V,H){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,U,V,H),Y.scissor(L.copy(pe).multiplyScalar($).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){Y.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(A=!0,U=!0,V=!0){let H=0;if(A){let O=!1;if(T!==null){const he=T.texture.format;O=he===Uc||he===Nc||he===ua}if(O){const he=T.texture.type,Ee=he===$n||he===ui||he===yr||he===As||he===Ic||he===Lc,Ce=Me.getClearColor(),Pe=Me.getClearAlpha(),Ge=Ce.r,He=Ce.g,Le=Ce.b;Ee?(d[0]=Ge,d[1]=He,d[2]=Le,d[3]=Pe,C.clearBufferuiv(C.COLOR,0,d)):(p[0]=Ge,p[1]=He,p[2]=Le,p[3]=Pe,C.clearBufferiv(C.COLOR,0,p))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),V&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),ge.dispose(),me.dispose(),I.dispose(),b.dispose(),j.dispose(),je.dispose(),gt.dispose(),Q.dispose(),le.dispose(),le.removeEventListener("sessionstart",xe),le.removeEventListener("sessionend",Re),Ve.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Fe.autoReset,U=re.enabled,V=re.autoUpdate,H=re.needsUpdate,O=re.type;D(),Fe.autoReset=A,re.enabled=U,re.autoUpdate=V,re.needsUpdate=H,re.type=O}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const U=A.target;U.removeEventListener("dispose",ze),nt(U)}function nt(A){yt(A),me.remove(A)}function yt(A){const U=me.get(A).programs;U!==void 0&&(U.forEach(function(V){Q.releaseProgram(V)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,H,O,he){U===null&&(U=Oe);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ce=ip(A,U,V,H,O);Y.setMaterial(H,Ee);let Pe=V.index,Ge=1;if(H.wireframe===!0){if(Pe=Z.getWireframeAttribute(V),Pe===void 0)return;Ge=2}const He=V.drawRange,Le=V.attributes.position;let ot=He.start*Ge,Mt=(He.start+He.count)*Ge;he!==null&&(ot=Math.max(ot,he.start*Ge),Mt=Math.min(Mt,(he.start+he.count)*Ge)),Pe!==null?(ot=Math.max(ot,0),Mt=Math.min(Mt,Pe.count)):Le!=null&&(ot=Math.max(ot,0),Mt=Math.min(Mt,Le.count));const bt=Mt-ot;if(bt<0||bt===1/0)return;je.setup(O,H,Ce,V,Pe);let tn,at=Be;if(Pe!==null&&(tn=k.get(Pe),at=we,at.setIndex(tn)),O.isMesh)H.wireframe===!0?(Y.setLineWidth(H.wireframeLinewidth*Ze()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(O.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),Y.setLineWidth(Ne*Ze()),O.isLineSegments?at.setMode(C.LINES):O.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else O.isPoints?at.setMode(C.POINTS):O.isSprite&&at.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,Ft=O._multiDrawCounts,lt=O._multiDrawCount,mn=Pe?k.get(Pe).bytesPerElement:1,Bi=me.get(H).currentProgram.getUniforms();for(let nn=0;nn<lt;nn++)Bi.setValue(C,"_gl_DrawID",nn),at.render(Ne[nn]/mn,Ft[nn])}else if(O.isInstancedMesh)at.renderInstances(ot,bt,O.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ft=Math.min(V.instanceCount,Ne);at.renderInstances(ot,bt,Ft)}else at.render(ot,bt)};function Rt(A,U,V){A.transparent===!0&&A.side===Ut&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,Fr(A,U,V),A.side=Wn,A.needsUpdate=!0,Fr(A,U,V),A.side=Ut):Fr(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),m=ge.get(V),m.init(U),x.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==V&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const H=new Set;return A.traverse(function(O){const he=O.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const Ce=he[Ee];Rt(Ce,V,O),H.add(Ce)}else Rt(he,V,O),H.add(he)}),x.pop(),m=null,H},this.compileAsync=function(A,U,V=null){const H=this.compile(A,U,V);return new Promise(O=>{function he(){if(H.forEach(function(Ee){me.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){O(A);return}setTimeout(he,10)}ne.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let X=null;function _e(A){X&&X(A)}function xe(){Ve.stop()}function Re(){Ve.start()}const Ve=new sf;Ve.setAnimationLoop(_e),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(A){X=A,le.setAnimationLoop(A),A===null?Ve.stop():Ve.start()},le.addEventListener("sessionstart",xe),le.addEventListener("sessionend",Re),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,T),m=ge.get(A,x.length),m.init(U),x.push(m),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(Ae),se=this.localClippingEnabled,q=ke.init(this.clippingPlanes,se),_=ue.get(A,g.length),_.init(),g.push(_),le.enabled===!0&&le.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&ft(he,U,-1/0,v.sortObjects)}ft(A,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,oe),Ie=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ie&&Me.addToRenderList(_,A),this.info.render.frame++,q===!0&&ke.beginShadows();const V=m.state.shadowsArray;re.render(V,A,U),q===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,O=_.transmissive;if(m.setupLights(),U.isArrayCamera){const he=U.cameras;if(O.length>0)for(let Ee=0,Ce=he.length;Ee<Ce;Ee++){const Pe=he[Ee];Qe(H,O,A,Pe)}Ie&&Me.render(A);for(let Ee=0,Ce=he.length;Ee<Ce;Ee++){const Pe=he[Ee];Ot(_,A,Pe,Pe.viewport)}}else O.length>0&&Qe(H,O,A,U),Ie&&Me.render(A),Ot(_,A,U);T!==null&&(be.updateMultisampleRenderTarget(T),be.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,U),je.resetDefaultState(),w=-1,E=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&ke.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function ft(A,U,V,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){H&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Ee=j.update(A),Ce=A.material;Ce.visible&&_.push(A,Ee,Ce,V,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Ee=j.update(A),Ce=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ce)){const Pe=Ee.groups;for(let Ge=0,He=Pe.length;Ge<He;Ge++){const Le=Pe[Ge],ot=Ce[Le.materialIndex];ot&&ot.visible&&_.push(A,Ee,ot,V,Ue.z,Le)}}else Ce.visible&&_.push(A,Ee,Ce,V,Ue.z,null)}}const he=A.children;for(let Ee=0,Ce=he.length;Ee<Ce;Ee++)ft(he[Ee],U,V,H)}function Ot(A,U,V,H){const O=A.opaque,he=A.transmissive,Ee=A.transparent;m.setupLightsView(V),q===!0&&ke.setGlobalState(v.clippingPlanes,V),H&&Y.viewport(M.copy(H)),O.length>0&&Dt(O,U,V),he.length>0&&Dt(he,U,V),Ee.length>0&&Dt(Ee,U,V),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Qe(A,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ur:$n,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const he=m.state.transmissionRenderTarget[H.id],Ee=H.viewport||M;he.setSize(Ee.z,Ee.w);const Ce=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(F),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Ie&&Me.render(V);const Pe=v.toneMapping;v.toneMapping=ri;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),q===!0&&ke.setGlobalState(v.clippingPlanes,H),Dt(A,V,H),be.updateMultisampleRenderTarget(he),be.updateRenderTargetMipmap(he),ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Le=0,ot=U.length;Le<ot;Le++){const Mt=U[Le],bt=Mt.object,tn=Mt.geometry,at=Mt.material,Ne=Mt.group;if(at.side===Ut&&bt.layers.test(H.layers)){const Ft=at.side;at.side=en,at.needsUpdate=!0,Ih(bt,V,H,tn,at,Ne),at.side=Ft,at.needsUpdate=!0,He=!0}}He===!0&&(be.updateMultisampleRenderTarget(he),be.updateRenderTargetMipmap(he))}v.setRenderTarget(Ce),v.setClearColor(F,N),Ge!==void 0&&(H.viewport=Ge),v.toneMapping=Pe}function Dt(A,U,V){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,he=A.length;O<he;O++){const Ee=A[O],Ce=Ee.object,Pe=Ee.geometry,Ge=H===null?Ee.material:H,He=Ee.group;Ce.layers.test(V.layers)&&Ih(Ce,U,V,Pe,Ge,He)}}function Ih(A,U,V,H,O,he){A.onBeforeRender(v,U,V,H,O,he),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,U,V,H,A,he),O.transparent===!0&&O.side===Ut&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,v.renderBufferDirect(V,U,H,O,A,he),O.side=Wn,O.needsUpdate=!0,v.renderBufferDirect(V,U,H,O,A,he),O.side=Ut):v.renderBufferDirect(V,U,H,O,A,he),A.onAfterRender(v,U,V,H,O,he)}function Fr(A,U,V){U.isScene!==!0&&(U=Oe);const H=me.get(A),O=m.state.lights,he=m.state.shadowsArray,Ee=O.state.version,Ce=Q.getParameters(A,O.state,he,U,V),Pe=Q.getProgramCacheKey(Ce);let Ge=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?b:I).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",ze),Ge=new Map,H.programs=Ge);let He=Ge.get(Pe);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===Ee)return Dh(A,Ce),He}else Ce.uniforms=Q.getUniforms(A),A.onBeforeCompile(Ce,v),He=Q.acquireProgram(Ce,Pe),Ge.set(Pe,He),H.uniforms=Ce.uniforms;const Le=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ke.uniform),Dh(A,Ce),H.needsLights=rp(A),H.lightsStateVersion=Ee,H.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function Lh(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Fo.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Dh(A,U){const V=me.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function ip(A,U,V,H,O){U.isScene!==!0&&(U=Oe),be.resetTextureUnits();const he=U.fog,Ee=H.isMeshStandardMaterial?U.environment:null,Ce=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:fi,Pe=(H.isMeshStandardMaterial?b:I).get(H.envMap||Ee),Ge=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,Mt=!!V.morphAttributes.color;let bt=ri;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(bt=v.toneMapping);const tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=tn!==void 0?tn.length:0,Ne=me.get(H),Ft=m.state.lights;if(q===!0&&(se===!0||A!==E)){const cn=A===E&&H.id===w;ke.setState(H,A,cn)}let lt=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ft.state.version||Ne.outputColorSpace!==Ce||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Pe||H.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ke.numPlanes||Ne.numIntersection!==ke.numIntersection)||Ne.vertexAlphas!==Ge||Ne.vertexTangents!==He||Ne.morphTargets!==Le||Ne.morphNormals!==ot||Ne.morphColors!==Mt||Ne.toneMapping!==bt||Ne.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Ne.__version=H.version);let mn=Ne.currentProgram;lt===!0&&(mn=Fr(H,U,O));let Bi=!1,nn=!1,Ta=!1;const Et=mn.getUniforms(),Yn=Ne.uniforms;if(Y.useProgram(mn.program)&&(Bi=!0,nn=!0,Ta=!0),H.id!==w&&(w=H.id,nn=!0),Bi||E!==A){Et.setValue(C,"projectionMatrix",A.projectionMatrix),Et.setValue(C,"viewMatrix",A.matrixWorldInverse);const cn=Et.map.cameraPosition;cn!==void 0&&cn.setValue(C,de.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,nn=!0,Ta=!0)}if(O.isSkinnedMesh){Et.setOptional(C,O,"bindMatrix"),Et.setOptional(C,O,"bindMatrixInverse");const cn=O.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Et.setValue(C,"boneTexture",cn.boneTexture,be))}O.isBatchedMesh&&(Et.setOptional(C,O,"batchingTexture"),Et.setValue(C,"batchingTexture",O._matricesTexture,be),Et.setOptional(C,O,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",O._indirectTexture,be),Et.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",O._colorsTexture,be));const Ra=V.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&et.update(O,V,mn),(nn||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,Et.setValue(C,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Yn.envMap.value=Pe,Yn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Yn.envMapIntensity.value=U.environmentIntensity),nn&&(Et.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&sp(Yn,Ta),he&&H.fog===!0&&Te.refreshFogUniforms(Yn,he),Te.refreshMaterialUniforms(Yn,H,$,z,m.state.transmissionRenderTarget[A.id]),Fo.upload(C,Lh(Ne),Yn,be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fo.upload(C,Lh(Ne),Yn,be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(C,"center",O.center),Et.setValue(C,"modelViewMatrix",O.modelViewMatrix),Et.setValue(C,"normalMatrix",O.normalMatrix),Et.setValue(C,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const cn=H.uniformsGroups;for(let Ca=0,op=cn.length;Ca<op;Ca++){const Nh=cn[Ca];gt.update(Nh,mn),gt.bind(Nh,mn)}}return mn}function sp(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function rp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,V){me.get(A.texture).__webglTexture=U,me.get(A.depthTexture).__webglTexture=V;const H=me.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const V=me.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){T=A,P=U,S=V;let H=!0,O=null,he=!1,Ee=!1;if(A){const Pe=me.get(A);if(Pe.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Pe.__webglFramebuffer===void 0)be.setupRenderTarget(A);else if(Pe.__hasExternalTextures)be.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&me.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const He=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[U])?O=He[U][V]:O=He[U],he=!0):A.samples>0&&be.useMultisampledRTT(A)===!1?O=me.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[V]:O=He,M.copy(A.viewport),L.copy(A.scissor),B=A.scissorTest}else M.copy(ae).multiplyScalar($).floor(),L.copy(pe).multiplyScalar($).floor(),B=Xe;if(Y.bindFramebuffer(C.FRAMEBUFFER,O)&&H&&Y.drawBuffers(A,O),Y.viewport(M),Y.scissor(L),Y.setScissorTest(B),he){const Pe=me.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,V)}else if(Ee){const Pe=me.get(A.texture),Ge=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.__webglTexture,V||0,Ge)}w=-1},this.readRenderTargetPixels=function(A,U,V,H,O,he,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Y.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const Pe=A.texture,Ge=Pe.format,He=Pe.type;if(!fe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&V>=0&&V<=A.height-O&&C.readPixels(U,V,H,O,qe.convert(Ge),qe.convert(He),he)}finally{const Pe=T!==null?me.get(T).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,U,V,H,O,he,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Y.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const Pe=A.texture,Ge=Pe.format,He=Pe.type;if(!fe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-H&&V>=0&&V<=A.height-O){const Le=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Le),C.bufferData(C.PIXEL_PACK_BUFFER,he.byteLength,C.STREAM_READ),C.readPixels(U,V,H,O,qe.convert(Ge),qe.convert(He),0),C.flush();const ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await ym(C,ot,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Le),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,he)}finally{C.deleteBuffer(Le),C.deleteSync(ot)}return he}}finally{const Pe=T!==null?me.get(T).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,U=null,V=0){A.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-V),O=Math.floor(A.image.width*H),he=Math.floor(A.image.height*H),Ee=U!==null?U.x:0,Ce=U!==null?U.y:0;be.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Ee,Ce,O,he),Y.unbindTexture()},this.copyTextureToTexture=function(A,U,V=null,H=null,O=0){A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,V=null);let he,Ee,Ce,Pe,Ge,He;V!==null?(he=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ce=V.min.x,Pe=V.min.y):(he=A.image.width,Ee=A.image.height,Ce=0,Pe=0),H!==null?(Ge=H.x,He=H.y):(Ge=0,He=0);const Le=qe.convert(U.format),ot=qe.convert(U.type);be.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Mt=C.getParameter(C.UNPACK_ROW_LENGTH),bt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),tn=C.getParameter(C.UNPACK_SKIP_PIXELS),at=C.getParameter(C.UNPACK_SKIP_ROWS),Ne=C.getParameter(C.UNPACK_SKIP_IMAGES),Ft=A.isCompressedTexture?A.mipmaps[O]:A.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ft.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Ge,He,he,Ee,Le,ot,Ft.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Ge,He,Ft.width,Ft.height,Le,Ft.data):C.texSubImage2D(C.TEXTURE_2D,O,Ge,He,he,Ee,Le,ot,Ft),C.pixelStorei(C.UNPACK_ROW_LENGTH,Mt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,tn),C.pixelStorei(C.UNPACK_SKIP_ROWS,at),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne),O===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V=null,H=null,O=0){A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0);let he,Ee,Ce,Pe,Ge,He,Le,ot,Mt;const bt=A.isCompressedTexture?A.mipmaps[O]:A.image;V!==null?(he=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ce=V.max.z-V.min.z,Pe=V.min.x,Ge=V.min.y,He=V.min.z):(he=bt.width,Ee=bt.height,Ce=bt.depth,Pe=0,Ge=0,He=0),H!==null?(Le=H.x,ot=H.y,Mt=H.z):(Le=0,ot=0,Mt=0);const tn=qe.convert(U.format),at=qe.convert(U.type);let Ne;if(U.isData3DTexture)be.setTexture3D(U,0),Ne=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)be.setTexture2DArray(U,0),Ne=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ft=C.getParameter(C.UNPACK_ROW_LENGTH),lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),mn=C.getParameter(C.UNPACK_SKIP_PIXELS),Bi=C.getParameter(C.UNPACK_SKIP_ROWS),nn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Ne,O,Le,ot,Mt,he,Ee,Ce,tn,at,bt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Ne,O,Le,ot,Mt,he,Ee,Ce,tn,bt.data):C.texSubImage3D(Ne,O,Le,ot,Mt,he,Ee,Ce,tn,at,bt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,nn),O===0&&U.generateMipmaps&&C.generateMipmap(Ne),Y.unbindTexture()},this.initRenderTarget=function(A){me.get(A).__webglFramebuffer===void 0&&be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),Y.unbindTexture()},this.resetState=function(){P=0,S=0,T=null,Y.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===da?"display-p3":"srgb"}}class Vc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new Vc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new Gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sr extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ff{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ys("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new R;class Is{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Is(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pf extends Jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ns;const Ks=new R,is=new R,ss=new R,rs=new K,js=new K,mf=new We,ro=new R,Js=new R,oo=new R,Uu=new K,nl=new K,Ou=new K;class Tx extends mt{constructor(e=new pf){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ff(t,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Is(n,3,0,!1)),ns.setAttribute("uv",new Is(n,2,3,!1))}this.geometry=ns,this.material=e,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ao(ro.set(-.5,-.5,0),ss,o,is,i,r),ao(Js.set(.5,-.5,0),ss,o,is,i,r),ao(oo.set(.5,.5,0),ss,o,is,i,r),Uu.set(0,0),nl.set(1,0),Ou.set(1,1);let a=e.ray.intersectTriangle(ro,Js,oo,!1,Ks);if(a===null&&(ao(Js.set(-.5,.5,0),ss,o,is,i,r),nl.set(0,1),a=e.ray.intersectTriangle(ro,oo,Js,!1,Ks),a===null))return;const l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||t.push({distance:l,point:Ks.clone(),uv:un.getInterpolation(Ks,ro,Js,oo,Uu,nl,Ou,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ao(s,e,t,n,i,r){rs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(js.x=r*rs.x-i*rs.y,js.y=i*rs.x+r*rs.y):js.copy(rs),s.copy(e),s.x+=js.x,s.y+=js.y,s.applyMatrix4(mf)}const lo=new R,Fu=new R;class Rx extends mt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){lo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(lo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){lo.setFromMatrixPosition(e.matrixWorld),Fu.setFromMatrixPosition(this.matrixWorld);const n=lo.distanceTo(Fu)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Bu=new R,zu=new ht,ku=new ht,Cx=new R,Vu=new We,co=new R,il=new jt,Gu=new We,sl=new Fs;class Px extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(i),e.ray.intersectsSphere(il)!==!1&&(Gu.copy(i).invert(),sl.copy(e.ray).applyMatrix4(Gu),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zu.fromBufferAttribute(i.attributes.skinIndex,e),ku.fromBufferAttribute(i.attributes.skinWeight,e),Bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ku.getComponent(r);if(o!==0){const a=zu.getComponent(r);Vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Cx.copy(Bu).applyMatrix4(Vu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ai extends Pt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Wt,h=Wt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=new We,Ix=new We;class Hc{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ix;Hu.multiplyMatrices(a,t[r]),Hu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Hc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ai(t,e,e,Kt,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gf),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Er extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new We,Wu=new We,ho=[],$u=new Tt,Lx=new We,Zs=new Bt,Qs=new jt;class Dx extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),$u.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union($u)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Qs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),Wu.multiplyMatrices(n,os),Zs.matrixWorld=Wu,Zs.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(i*this.count),i,this.count,Dc,an));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Nx(s,e){return s.z-e.z}function Ux(s,e){return e.z-s.z}class Ox{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const o=i[this.index];r.push(o),this.index++,o.start=e.start,o.count=e.count,o.z=t,o.index=n}reset(){this.list.length=0,this.index=0}}const ti=new We,rl=new We,Fx=new We,Bx=new De(1,1,1),Xu=new We,ol=new fa,uo=new Tt,yi=new jt,er=new R,qu=new R,zx=new R,al=new Ox,Gt=new Bt,fo=[];function kx(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class Vx extends Bt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new dt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ai(t,e,e,Kt,an);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ai(t,e,e,ua,ui);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ai(t,e,e,Kt,an);n.colorSpace=rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new pt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new pt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,ti),this.getBoundingBoxAt(r,uo).applyMatrix4(ti),e.union(uo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,ti),this.getBoundingSphereAt(r,yi).applyMatrix4(ti),e.union(yi)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;Fx.toArray(i,t*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(Bx.toArray(r.image.data,t*4),r.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._geometryCount;return this._geometryCount++,o.push(i),a.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Tt,sphereInitialized:!1,sphere:new jt}),this.setGeometryAt(u,e),u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.vertexCount;for(const d in n.attributes){const p=t.getAttribute(d),_=n.getAttribute(d);kx(p,_,l);const m=p.itemSize;for(let g=p.count,x=c;g<x;g++){const v=l+g;for(let y=0;y<m;y++)_.setComponent(v,y,0)}_.needsUpdate=!0,_.addUpdateRange(l*m,c*m)}if(i){const d=a.indexStart;for(let p=0;p<o.count;p++)r.setX(d+p,l+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(d+p,l);r.needsUpdate=!0,r.addUpdateRange(d,a.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?o.count:f.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const o=r.index,a=r.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let u=c;o&&(u=o.getX(u)),i.expandByPoint(er.fromBufferAttribute(a,u))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,uo),uo.getCenter(i.center);const o=r.index,a=r.attributes.position,l=this._drawRanges[e];let c=0;for(let h=l.start,u=l.start+l.count;h<u;h++){let f=h;o&&(f=o.getX(f)),er.fromBufferAttribute(a,f),c=Math.max(c,i.center.distanceToSquared(er))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,o=this.geometry;Gt.material=this.material,Gt.geometry.index=o.index,Gt.geometry.attributes=o.attributes,Gt.geometry.boundingBox===null&&(Gt.geometry.boundingBox=new Tt),Gt.geometry.boundingSphere===null&&(Gt.geometry.boundingSphere=new jt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];Gt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Gt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Gt.geometry.boundingBox),this.getBoundingSphereAt(c,Gt.geometry.boundingSphere),Gt.raycast(e,fo);for(let u=0,f=fo.length;u<f;u++){const d=fo[u];d.object=this,d.batchId=a,t.push(d)}fo.length=0}Gt.material=null,Gt.geometry.index=null,Gt.geometry.attributes={},Gt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;f&&(Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ol.setFromProjectionMatrix(Xu,e.coordinateSystem));let _=0;if(this.sortObjects){rl.copy(this.matrixWorld).invert(),er.setFromMatrixPosition(n.matrixWorld).applyMatrix4(rl),qu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(rl);for(let x=0,v=l.length;x<v;x++)if(l[x].visible&&l[x].active){const y=l[x].geometryIndex;this.getMatrixAt(x,ti),this.getBoundingSphereAt(y,yi).applyMatrix4(ti);let P=!1;if(f&&(P=!ol.intersectsSphere(yi)),!P){const S=zx.subVectors(yi.center,er).dot(qu);al.push(u[y],S,x)}}const m=al.list,g=this.customSort;g===null?m.sort(r.transparent?Ux:Nx):g.call(this,m,n);for(let x=0,v=m.length;x<v;x++){const y=m[x];c[_]=y.start*a,h[_]=y.count,p[_]=y.index,_++}al.reset()}else for(let m=0,g=l.length;m<g;m++)if(l[m].visible&&l[m].active){const x=l[m].geometryIndex;let v=!1;if(f&&(this.getMatrixAt(m,ti),this.getBoundingSphereAt(x,yi).applyMatrix4(ti),v=!ol.intersectsSphere(yi)),!v){const y=u[x];c[_]=y.start*a,h[_]=y.count,p[_]=m,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class Ls extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jo=new R,Zo=new R,Yu=new We,tr=new Fs,po=new jt,ll=new R,Ku=new R;class Wc extends mt{constructor(e=new dt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jo.fromBufferAttribute(t,i-1),Zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jo.distanceTo(Zo);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Yu.copy(i).invert(),tr.copy(e.ray).applyMatrix4(Yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=h.getX(_),x=h.getX(_+1),v=mo(this,e,tr,l,g,x);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=mo(this,e,tr,l,_,m);g&&t.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=mo(this,e,tr,l,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=mo(this,e,tr,l,p-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Jo.fromBufferAttribute(o,i),Zo.fromBufferAttribute(o,r),t.distanceSqToSegment(Jo,Zo,ll,Ku)>n)return;ll.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ll);if(!(l<e.near||l>e.far))return{distance:l,point:Ku.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const ju=new R,Ju=new R;class $c extends Wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ju.fromBufferAttribute(t,i),Ju.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ju.distanceTo(Ju);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gx extends Wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _f extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zu=new We,lc=new Fs,go=new jt,_o=new R;class Hx extends mt{constructor(e=new dt,t=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Zu.copy(i).invert(),lc.copy(e.ray).applyMatrix4(Zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=c.getX(p);_o.fromBufferAttribute(u,m),Qu(_o,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)_o.fromBufferAttribute(u,p),Qu(_o,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qu(s,e,t,n,i,r,o){const a=lc.distanceSqToPoint(s);if(a<t){const l=new R;lc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class cl extends Pt{constructor(e,t,n,i,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Wx extends Pt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new K:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],o=[],a=new R,l=new We;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(At(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(At(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xc extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new K){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $x extends Xc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const vo=new R,hl=new qc,ul=new qc,dl=new qc;class Xx extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(vo.subVectors(i[0],i[1]).add(i[0]),c=vo);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(vo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),hl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,m),ul.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,m),dl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),dl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(hl.calc(l),ul.calc(l),dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ed(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function qx(s,e){const t=1-s;return t*t*e}function Yx(s,e){return 2*(1-s)*s*e}function Kx(s,e){return s*s*e}function dr(s,e,t,n){return qx(s,e)+Yx(s,t)+Kx(s,n)}function jx(s,e){const t=1-s;return t*t*t*e}function Jx(s,e){const t=1-s;return 3*t*t*s*e}function Zx(s,e){return 3*(1-s)*s*s*e}function Qx(s,e){return s*s*s*e}function fr(s,e,t,n,i){return jx(s,e)+Jx(s,t)+Zx(s,n)+Qx(s,i)}class vf extends Rn{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(e,i.x,r.x,o.x,a.x),fr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ey extends Rn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(e,i.x,r.x,o.x,a.x),fr(e,i.y,r.y,o.y,a.y),fr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xf extends Rn{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ty extends Rn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yf extends Rn{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(dr(e,i.x,r.x,o.x),dr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mf extends Rn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(dr(e,i.x,r.x,o.x),dr(e,i.y,r.y,o.y),dr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bf extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ed(a,l.x,c.x,h.x,u.x),ed(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:$x,CatmullRomCurve3:Xx,CubicBezierCurve:vf,CubicBezierCurve3:ey,EllipseCurve:Xc,LineCurve:xf,LineCurve3:ty,QuadraticBezierCurve:yf,QuadraticBezierCurve3:Mf,SplineCurve:bf});class ny extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Qo[i.type]().fromJSON(i))}return this}}class cc extends ny{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new xf(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new yf(this.currentPoint.clone(),new K(e,t),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new vf(this.currentPoint.clone(),new K(e,t),new K(n,i),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Xc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ga extends dt{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=At(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new R,f=new K,d=new R,p=new R,_=new R;let m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let x=0;x<=t;x++){const v=n+x*h*i,y=Math.sin(v),P=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*P,o.push(u.x,u.y,u.z),f.x=x/t,f.y=S/(e.length-1),a.push(f.x,f.y);const T=l[3*S+0]*y,w=l[3*S+1],E=l[3*S+0]*P;c.push(T,w,E)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,P=y,S=y+e.length,T=y+e.length+1,w=y+1;r.push(P,S,w),r.push(T,w,S)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.points,e.segments,e.phiStart,e.phiLength)}}class Yc extends ga{constructor(e=1,t=1,n=4,i=8){const r=new cc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Yc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Kc extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new R,h=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _a extends dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function x(){const y=new R,P=new R;let S=0;const T=(t-e)/n;for(let w=0;w<=r;w++){const E=[],M=w/r,L=M*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,N=F*l+a,G=Math.sin(N),z=Math.cos(N);P.x=L*G,P.y=-M*n+m,P.z=L*z,u.push(P.x,P.y,P.z),y.set(G,T,z).normalize(),f.push(y.x,y.y,y.z),d.push(F,1-M),E.push(p++)}_.push(E)}for(let w=0;w<i;w++)for(let E=0;E<r;E++){const M=_[E][w],L=_[E+1][w],B=_[E+1][w+1],F=_[E][w+1];h.push(M,L,F),h.push(L,B,F),S+=6}c.addGroup(g,S,0),g+=S}function v(y){const P=p,S=new K,T=new R;let w=0;const E=y===!0?e:t,M=y===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),p++;const L=p;for(let B=0;B<=i;B++){const N=B/i*l+a,G=Math.cos(N),z=Math.sin(N);T.x=E*z,T.y=m*M,T.z=E*G,u.push(T.x,T.y,T.z),f.push(0,M,0),S.x=G*.5+.5,S.y=z*.5*M+.5,d.push(S.x,S.y),p++}for(let B=0;B<i;B++){const F=P+B,N=L+B;y===!0?h.push(N,N+1,F):h.push(N+1,N,F),w+=3}c.addGroup(g,w,y===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jc extends _a{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ni extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new R,y=new R,P=new R;for(let S=0;S<t.length;S+=3)d(t[S+0],v),d(t[S+1],y),d(t[S+2],P),l(v,y,P,x)}function l(x,v,y,P){const S=P+1,T=[];for(let w=0;w<=S;w++){T[w]=[];const E=x.clone().lerp(y,w/S),M=v.clone().lerp(y,w/S),L=S-w;for(let B=0;B<=L;B++)B===0&&w===S?T[w][B]=E:T[w][B]=E.clone().lerp(M,B/L)}for(let w=0;w<S;w++)for(let E=0;E<2*(S-w)-1;E++){const M=Math.floor(E/2);E%2===0?(f(T[w][M+1]),f(T[w+1][M]),f(T[w][M])):(f(T[w][M+1]),f(T[w+1][M+1]),f(T[w+1][M]))}}function c(x){const v=new R;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const x=new R;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=m(x)/2/Math.PI+.5,P=g(x)/Math.PI+.5;o.push(y,1-P)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],P=o[x+4],S=Math.max(v,y,P),T=Math.min(v,y,P);S>.9&&T<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){const x=new R,v=new R,y=new R,P=new R,S=new K,T=new K,w=new K;for(let E=0,M=0;E<r.length;E+=9,M+=6){x.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),w.set(o[M+4],o[M+5]),P.copy(x).add(v).add(y).divideScalar(3);const L=m(P);_(S,M+0,x,L),_(T,M+2,v,L),_(w,M+4,y,L)}}function _(x,v,y,P){P<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.vertices,e.indices,e.radius,e.details)}}class Jc extends Ni{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jc(e.radius,e.detail)}}const xo=new R,yo=new R,fl=new R,Mo=new un;class Zc extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(xs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=Mo;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Mo.getNormal(fl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=u[x],P=u[v],S=Mo[h[x]],T=Mo[h[v]],w=`${y}_${P}`,E=`${P}_${y}`;E in f&&f[E]?(fl.dot(f[E].normal)<=r&&(d.push(S.x,S.y,S.z),d.push(T.x,T.y,T.z)),f[E]=null):w in f||(f[w]={index0:c[x],index1:c[v],normal:fl.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];xo.fromBufferAttribute(a,_),yo.fromBufferAttribute(a,m),d.push(xo.x,xo.y,xo.z),d.push(yo.x,yo.y,yo.z)}this.setAttribute("position",new $e(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qc extends cc{constructor(e){super(e),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new cc().fromJSON(i))}return this}}const iy={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Sf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=ly(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return wr(r,o,t,a,l,d,0),o}};function Sf(s,e,t,n,i){let r,o;if(i===xy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=td(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=td(r,s[r],s[r+1],o);return o&&va(o,o.next)&&(Tr(o),o=o.next),o}function Pi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(va(t,t.next)||xt(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&fy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ry(s,n,i,r):sy(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Tr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=oy(Pi(s),e,t),wr(s,e,t,n,i,r,2)):o===2&&ay(s,e,t,n,i,r):wr(Pi(s),e,t,n,i,r,1);break}}}function sy(s){const e=s.prev,t=s,n=s.next;if(xt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ms(i,a,r,l,o,c,p.x,p.y)&&xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ry(s,e,t,n){const i=s.prev,r=s,o=s.next;if(xt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=hc(d,p,e,t,n),x=hc(_,m,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=g&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&ms(a,h,l,u,c,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&ms(a,h,l,u,c,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&ms(a,h,l,u,c,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&ms(a,h,l,u,c,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function oy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!va(i,r)&&Ef(i,n,n.next,r)&&Ar(i,r)&&Ar(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Tr(n),Tr(n.next),n=s=r),n=n.next}while(n!==s);return Pi(n)}function ay(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gy(o,a)){let l=wf(o,a);o=Pi(o,o.next),l=Pi(l,l.next),wr(o,e,t,n,i,r,0),wr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ly(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Sf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(my(c));for(i.sort(cy),r=0;r<i.length;r++)t=hy(i[r],t);return t}function cy(s,e){return s.x-e.x}function hy(s,e){const t=uy(s,e);if(!t)return e;const n=wf(t,s);return Pi(n,n.next),Pi(t,t.next)}function uy(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ms(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ar(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&dy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function dy(s,e){return xt(s.prev,s,e.prev)<0&&xt(e.next,s,s.next)<0}function fy(s,e,t,n){let i=s;do i.z===0&&(i.z=hc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,py(i)}function py(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function hc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function my(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ms(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function gy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!_y(s,e)&&(Ar(s,e)&&Ar(e,s)&&vy(s,e)&&(xt(s.prev,s,e.prev)||xt(s,e.prev,e))||va(s,e)&&xt(s.prev,s,s.next)>0&&xt(e.prev,e,e.next)>0)}function xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function va(s,e){return s.x===e.x&&s.y===e.y}function Ef(s,e,t,n){const i=So(xt(s,e,t)),r=So(xt(s,e,n)),o=So(xt(t,n,s)),a=So(xt(t,n,e));return!!(i!==r&&o!==a||i===0&&bo(s,t,e)||r===0&&bo(s,n,e)||o===0&&bo(t,s,n)||a===0&&bo(t,e,n))}function bo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function So(s){return s>0?1:s<0?-1:0}function _y(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ef(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ar(s,e){return xt(s.prev,s,s.next)<0?xt(s,e,s.next)>=0&&xt(s,s.prev,e)>=0:xt(s,e,s.prev)<0||xt(s,s.next,e)<0}function vy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function wf(s,e){const t=new uc(s.i,s.x,s.y),n=new uc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function td(s,e,t,n){const i=new uc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function uc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class li{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return li.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];nd(e),id(n,e);let o=e.length;t.forEach(nd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,id(n,t[l]);const a=iy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function nd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function id(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class eh extends dt{constructor(e=new Qc([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new $e(i,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:yy;let v,y=!1,P,S,T,w;g&&(v=g.getSpacedPoints(h),y=!0,f=!1,P=g.computeFrenetFrames(h,!1),S=new R,T=new R,w=new R),f||(m=0,d=0,p=0,_=0);const E=a.extractPoints(c);let M=E.shape;const L=E.holes;if(!li.isClockWise(M)){M=M.reverse();for(let C=0,ie=L.length;C<ie;C++){const ne=L[C];li.isClockWise(ne)&&(L[C]=ne.reverse())}}const F=li.triangulateShape(M,L),N=M;for(let C=0,ie=L.length;C<ie;C++){const ne=L[C];M=M.concat(ne)}function G(C,ie,ne){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ie,ne)}const z=M.length,$=F.length;function W(C,ie,ne){let fe,Y,Fe;const me=C.x-ie.x,be=C.y-ie.y,I=ne.x-C.x,b=ne.y-C.y,k=me*me+be*be,Z=me*b-be*I;if(Math.abs(Z)>Number.EPSILON){const j=Math.sqrt(k),Q=Math.sqrt(I*I+b*b),Te=ie.x-be/j,ue=ie.y+me/j,ge=ne.x-b/Q,ke=ne.y+I/Q,re=((ge-Te)*b-(ke-ue)*I)/(me*b-be*I);fe=Te+me*re-C.x,Y=ue+be*re-C.y;const Me=fe*fe+Y*Y;if(Me<=2)return new K(fe,Y);Fe=Math.sqrt(Me/2)}else{let j=!1;me>Number.EPSILON?I>Number.EPSILON&&(j=!0):me<-Number.EPSILON?I<-Number.EPSILON&&(j=!0):Math.sign(be)===Math.sign(b)&&(j=!0),j?(fe=-be,Y=me,Fe=Math.sqrt(k)):(fe=me,Y=be,Fe=Math.sqrt(k/2))}return new K(fe/Fe,Y/Fe)}const oe=[];for(let C=0,ie=N.length,ne=ie-1,fe=C+1;C<ie;C++,ne++,fe++)ne===ie&&(ne=0),fe===ie&&(fe=0),oe[C]=W(N[C],N[ne],N[fe]);const ae=[];let pe,Xe=oe.concat();for(let C=0,ie=L.length;C<ie;C++){const ne=L[C];pe=[];for(let fe=0,Y=ne.length,Fe=Y-1,me=fe+1;fe<Y;fe++,Fe++,me++)Fe===Y&&(Fe=0),me===Y&&(me=0),pe[fe]=W(ne[fe],ne[Fe],ne[me]);ae.push(pe),Xe=Xe.concat(pe)}for(let C=0;C<m;C++){const ie=C/m,ne=d*Math.cos(ie*Math.PI/2),fe=p*Math.sin(ie*Math.PI/2)+_;for(let Y=0,Fe=N.length;Y<Fe;Y++){const me=G(N[Y],oe[Y],fe);de(me.x,me.y,-ne)}for(let Y=0,Fe=L.length;Y<Fe;Y++){const me=L[Y];pe=ae[Y];for(let be=0,I=me.length;be<I;be++){const b=G(me[be],pe[be],fe);de(b.x,b.y,-ne)}}}const te=p+_;for(let C=0;C<z;C++){const ie=f?G(M[C],Xe[C],te):M[C];y?(T.copy(P.normals[0]).multiplyScalar(ie.x),S.copy(P.binormals[0]).multiplyScalar(ie.y),w.copy(v[0]).add(T).add(S),de(w.x,w.y,w.z)):de(ie.x,ie.y,0)}for(let C=1;C<=h;C++)for(let ie=0;ie<z;ie++){const ne=f?G(M[ie],Xe[ie],te):M[ie];y?(T.copy(P.normals[C]).multiplyScalar(ne.x),S.copy(P.binormals[C]).multiplyScalar(ne.y),w.copy(v[C]).add(T).add(S),de(w.x,w.y,w.z)):de(ne.x,ne.y,u/h*C)}for(let C=m-1;C>=0;C--){const ie=C/m,ne=d*Math.cos(ie*Math.PI/2),fe=p*Math.sin(ie*Math.PI/2)+_;for(let Y=0,Fe=N.length;Y<Fe;Y++){const me=G(N[Y],oe[Y],fe);de(me.x,me.y,u+ne)}for(let Y=0,Fe=L.length;Y<Fe;Y++){const me=L[Y];pe=ae[Y];for(let be=0,I=me.length;be<I;be++){const b=G(me[be],pe[be],fe);y?de(b.x,b.y+v[h-1].y,v[h-1].x+ne):de(b.x,b.y,u+ne)}}}q(),se();function q(){const C=i.length/3;if(f){let ie=0,ne=z*ie;for(let fe=0;fe<$;fe++){const Y=F[fe];Ue(Y[2]+ne,Y[1]+ne,Y[0]+ne)}ie=h+m*2,ne=z*ie;for(let fe=0;fe<$;fe++){const Y=F[fe];Ue(Y[0]+ne,Y[1]+ne,Y[2]+ne)}}else{for(let ie=0;ie<$;ie++){const ne=F[ie];Ue(ne[2],ne[1],ne[0])}for(let ie=0;ie<$;ie++){const ne=F[ie];Ue(ne[0]+z*h,ne[1]+z*h,ne[2]+z*h)}}n.addGroup(C,i.length/3-C,0)}function se(){const C=i.length/3;let ie=0;Ae(N,ie),ie+=N.length;for(let ne=0,fe=L.length;ne<fe;ne++){const Y=L[ne];Ae(Y,ie),ie+=Y.length}n.addGroup(C,i.length/3-C,1)}function Ae(C,ie){let ne=C.length;for(;--ne>=0;){const fe=ne;let Y=ne-1;Y<0&&(Y=C.length-1);for(let Fe=0,me=h+m*2;Fe<me;Fe++){const be=z*Fe,I=z*(Fe+1),b=ie+fe+be,k=ie+Y+be,Z=ie+Y+I,j=ie+fe+I;Oe(b,k,Z,j)}}}function de(C,ie,ne){l.push(C),l.push(ie),l.push(ne)}function Ue(C,ie,ne){Ie(C),Ie(ie),Ie(ne);const fe=i.length/3,Y=x.generateTopUV(n,i,fe-3,fe-2,fe-1);Ze(Y[0]),Ze(Y[1]),Ze(Y[2])}function Oe(C,ie,ne,fe){Ie(C),Ie(ie),Ie(fe),Ie(ie),Ie(ne),Ie(fe);const Y=i.length/3,Fe=x.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);Ze(Fe[0]),Ze(Fe[1]),Ze(Fe[3]),Ze(Fe[1]),Ze(Fe[2]),Ze(Fe[3])}function Ie(C){i.push(l[C*3+0]),i.push(l[C*3+1]),i.push(l[C*3+2])}function Ze(C){r.push(C.x),r.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return My(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qo[i.type]().fromJSON(i)),new eh(n,e.options)}}const yy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(f,1-p),new K(_,1-g)]:[new K(a,1-l),new K(h,1-u),new K(d,1-p),new K(m,1-g)]}};function My(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class th extends Ni{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new th(e.radius,e.detail)}}class nh extends Ni{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nh(e.radius,e.detail)}}class ih extends dt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new R,p=new K;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,v=x,y=x+n+1,P=x+n+2,S=x+1;a.push(v,y,S),a.push(y,P,S)}}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sh extends dt{constructor(e=new Qc([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new $e(i,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;li.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const x=p[m];li.isClockWise(x)===!0&&(p[m]=x.reverse())}const _=li.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const x=p[m];d=d.concat(x)}for(let m=0,g=d.length;m<g;m++){const x=d[m];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){const x=_[m],v=x[0]+u,y=x[1]+u,P=x[2]+u;n.push(v,y,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return by(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new sh(n,e.curveSegments)}}function by(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class rh extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],v=g/n;let y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){const S=P/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+y,1-v),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const v=h[g][x+1],y=h[g][x],P=h[g+1][x],S=h[g+1][x+1];(g!==0||o>0)&&d.push(v,y,S),(g!==n-1||l<Math.PI)&&d.push(y,P,S)}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oh extends Ni{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oh(e.radius,e.detail)}}class ah extends dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,x=(i+1)*d+p;o.push(_,m,x),o.push(m,g,x)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lh extends dt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new R,f=new R,d=new R,p=new R,_=new R,m=new R,g=new R;for(let v=0;v<=n;++v){const y=v/n*r*Math.PI*2;x(y,r,o,e,d),x(y+.01,r,o,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let P=0;P<=i;++P){const S=P/i*Math.PI*2,T=-t*Math.cos(S),w=t*Math.sin(S);u.x=d.x+(T*g.x+w*_.x),u.y=d.y+(T*g.y+w*_.y),u.z=d.z+(T*g.z+w*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(v/n),h.push(P/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const P=(i+1)*(v-1)+(y-1),S=(i+1)*v+(y-1),T=(i+1)*v+y,w=(i+1)*(v-1)+y;a.push(P,S,w),a.push(S,T,w)}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2));function x(v,y,P,S,T){const w=Math.cos(v),E=Math.sin(v),M=P/y*v,L=Math.cos(M);T.x=S*(2+L)*.5*w,T.y=S*(2+L)*E*.5,T.z=S*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ch extends dt{constructor(e=new Mf(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new K;let h=new R;const u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function _(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),x(),g()}function m(v){h=e.getPointAt(v/t,h);const y=o.normals[v],P=o.binormals[v];for(let S=0;S<=i;S++){const T=S/i*Math.PI*2,w=Math.sin(T),E=-Math.cos(T);l.x=E*y.x+w*P.x,l.y=E*y.y+w*P.y,l.z=E*y.z+w*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const P=(i+1)*(v-1)+(y-1),S=(i+1)*v+(y-1),T=(i+1)*v+y,w=(i+1)*(v-1)+y;p.push(P,S,w),p.push(S,T,w)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ch(new Qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Sy extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),x=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),sd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),sd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new $e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function sd(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var rd=Object.freeze({__proto__:null,BoxGeometry:Bs,CapsuleGeometry:Yc,CircleGeometry:Kc,ConeGeometry:jc,CylinderGeometry:_a,DodecahedronGeometry:Jc,EdgesGeometry:Zc,ExtrudeGeometry:eh,IcosahedronGeometry:th,LatheGeometry:ga,OctahedronGeometry:nh,PlaneGeometry:zs,PolyhedronGeometry:Ni,RingGeometry:ih,ShapeGeometry:sh,SphereGeometry:rh,TetrahedronGeometry:oh,TorusGeometry:ah,TorusKnotGeometry:lh,TubeGeometry:ch,WireframeGeometry:Sy});class Ey extends Jt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class wy extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Af extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ay extends Af{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ty extends Jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ry extends Jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Cy extends Jt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Py extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iy extends Jt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ly extends Ls{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Eo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Dy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ny(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function od(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Tf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class xa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Uy extends xa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=e,a=2*t-n;break;case Gh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:o=e,l=2*n-t;break;case Gh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let P=0;P!==a;++P)r[P]=g*o[h+P]+x*o[c+P]+v*o[l+P]+y*o[u+P];return r}}class Oy extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class Fy extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Dy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Xo;class Vs extends Cn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Mr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rf extends Cn{}Rf.prototype.ValueTypeName="color";class ea extends Cn{}ea.prototype.ValueTypeName="number";class By extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ya extends Cn{InterpolantFactoryMethodLinear(e){return new By(this.times,this.values,this.getValueSize(),e)}}ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Cn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Mr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ta extends Cn{}ta.prototype.ValueTypeName="vector";class zy{constructor(e="",t=-1,n=[],i=$p){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Vy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Ny(l);l=od(l,1,h),c=od(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ea(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const m=[],g=[];Tf(d,m,g,p),m.length!==0&&_.push(new u(f,m,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==f[p].morphTargets.length;++x){const v=f[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new ea(".morphTargetInfluence["+_+"]",m,g))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(ta,d+".position",f,"pos",i),n(ya,d+".quaternion",f,"rot",i),n(ta,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ky(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return ta;case"color":return Rf;case"quaternion":return ya;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Vy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ky(s.type);if(s.times===void 0){const t=[],n=[];Tf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const na={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const Gy=new Cf;class Ui{constructor(e){this.manager=e!==void 0?e:Gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Hy extends Error{constructor(e,t){super(e),this.response=t}}class ia extends Ui{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=na.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Un[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:v,value:y})=>{if(v)g.close();else{_+=y.byteLength;const P=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let S=0,T=h.length;S<T;S++){const w=h[S];w.onProgress&&w.onProgress(P)}g.enqueue(y),x()}},v=>{g.error(v)})}}});return new Response(m)}else throw new Hy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{na.add(e,c);const h=Un[e];delete Un[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Un[e];if(h===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dc extends Ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=na.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=br("img");function l(){h(),na.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Wy extends Ui{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,o=new dc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Oi extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $y extends Oi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pl=new We,ad=new R,ld=new R;class hh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xy extends hh{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qy extends Oi{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cd=new We,nr=new R,ml=new R;class Yy extends hh{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),ml.copy(n.position),ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ml),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}}class Ky extends Oi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jy extends hh{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pf extends Oi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new jy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class If extends Oi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jy extends Oi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Zy{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Qy extends Oi{constructor(e=new Zy,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class uh extends Ui{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new ia(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=uh.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new De().setHex(o.value);break;case"v2":i.uniforms[r].value=new K().fromArray(o.value);break;case"v3":i.uniforms[r].value=new R().fromArray(o.value);break;case"v4":i.uniforms[r].value=new ht().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Ke().fromArray(o.value);break;case"m4":i.uniforms[r].value=new We().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new K().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Ey,SpriteMaterial:pf,RawShaderMaterial:wy,ShaderMaterial:Sn,PointsMaterial:_f,MeshPhysicalMaterial:Ay,MeshStandardMaterial:Af,MeshPhongMaterial:Ty,MeshToonMaterial:Ry,MeshNormalMaterial:Cy,MeshLambertMaterial:Py,MeshDepthMaterial:hf,MeshDistanceMaterial:uf,MeshBasicMaterial:Cs,MeshMatcapMaterial:Iy,LineDashedMaterial:Ly,LineBasicMaterial:Ls,Material:Jt};return new t[e]}}class hd{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class eM extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class tM extends Ui{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ia(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=r(d,m.buffer),x=fs(m.type,g),v=new ff(x,m.stride);return v.uuid=m.uuid,t[p]=v,v}function r(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new eM:new dt,a=e.data.index;if(a!==void 0){const d=fs(a.type,a.array);o.setIndex(new pt(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Is(m,p.itemSize,p.offset,p.normalized)}else{const m=fs(p.type,p.array),g=p.isInstancedBufferAttribute?Er:pt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],_=[];for(let m=0,g=p.length;m<g;m++){const x=p[m];let v;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);v=new Is(y,x.itemSize,x.offset,x.normalized)}else{const y=fs(x.type,x.array);v=new pt(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}o.morphAttributes[d]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const _=u[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new R;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new jt(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class sa extends Ui{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?hd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new ia(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?hd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new ia(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Qc().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new Hc().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new tM;for(let r=0,o=e.length;r<o;r++){let a;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in rd?a=rd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new uh;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=zy.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:fs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Cf(t);r=new dc(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new ai(g.data,g.width,g.height)))}i[u.uuid]=new wi(d)}else{const d=a(u.url);i[u.uuid]=new wi(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:fs(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new dc(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ai(p.data,p.width,p.height)))}n[l.uuid]=new wi(h)}else{const h=await r(l.url);n[l.uuid]=new wi(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new zc,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ai:h=new Pt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,nM)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],ud),h.wrapT=n(a.wrap[1],ud)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,dd)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,dd)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,r){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":o=new Sr,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new De(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Gc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Vc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Ht(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new pa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new If(e.color,e.intensity);break;case"DirectionalLight":o=new Pf(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Ky(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Jy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new qy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new $y(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Qy().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=l(e.material),o=new Px(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=l(e.material),o=new Bt(h,u);break;case"InstancedMesh":h=a(e.geometry),u=l(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;o=new Dx(h,u,f),o.instanceMatrix=new Er(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new Er(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=l(e.material),o=new Vx(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const m=new Tt;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const g=new jt;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:g}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":o=new Rx;break;case"Line":o=new Wc(a(e.geometry),l(e.material));break;case"LineLoop":o=new Gx(a(e.geometry),l(e.material));break;case"LineSegments":o=new $c(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Hx(a(e.geometry),l(e.material));break;case"Sprite":o=new Tx(l(e.material));break;case"Group":o=new wn;break;case"Bone":o=new gf;break;default:o=new mt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new mt}})}}const nM={UVMapping:Rc,CubeReflectionMapping:Ti,CubeRefractionMapping:Ri,EquirectangularReflectionMapping:Wo,EquirectangularRefractionMapping:$o,CubeUVReflectionMapping:Nr},ud={RepeatWrapping:vr,ClampToEdgeWrapping:zn,MirroredRepeatWrapping:xr},dd={NearestFilter:Wt,NearestMipmapNearestFilter:Cc,NearestMipmapLinearFilter:ds,LinearFilter:Yt,LinearMipmapNearestFilter:hr,LinearMipmapLinearFilter:kn},dh="\\[\\]\\.:\\/",iM=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",sM="[^"+dh.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",fh),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),lM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),cM=new RegExp("^"+rM+oM+aM+lM+"$"),hM=["material","materials","bones","map"];class uM{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){const t=cM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=uM;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ph{constructor(e){this.value=e}clone(){return new ph(this.value.clone===void 0?this.value:this.value.clone())}}const fd=new We;class dM{constructor(e,t,n=0,i=1/0){this.ray=new Fs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,n=[]){return fc(e,this,n,t),n.sort(pd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)fc(e[i],this,n,t);return n.sort(pd),n}}function pd(s,e){return s.distance-e.distance}function fc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)fc(r[o],e,t,!0)}}class pc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fM extends Di{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);let ir,gl,as,wo;function _l(s,e=1/0,t=null){gl||(gl=new zs(2,2,1,1)),as||(as=new Sn({uniforms:{blitTexture:new ph(s)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = sRGBTransferOETF( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),as.uniforms.blitTexture.value=s,as.defines.IS_SRGB=s.colorSpace==on,as.needsUpdate=!0,wo||(wo=new Bt(gl,as),wo.frustumCulled=!1);const n=new Ht,i=new Sr;i.add(wo),t===null&&(t=ir=new df({antialias:!1}));const r=Math.min(s.image.width,e),o=Math.min(s.image.height,e);t.setSize(r,o),t.clear(),t.render(i,n);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=r,a.height=o,l.drawImage(t.domElement,0,0,r,o);const c=new Wx(a);return c.minFilter=s.minFilter,c.magFilter=s.magFilter,c.wrapS=s.wrapS,c.wrapT=s.wrapT,c.name=s.name,ir&&(ir.forceContextLoss(),ir.dispose(),ir=null),c}const md={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Ma{constructor(){this.pluginCallbacks=[],this.register(function(e){return new SM(e)}),this.register(function(e){return new EM(e)}),this.register(function(e){return new RM(e)}),this.register(function(e){return new CM(e)}),this.register(function(e){return new PM(e)}),this.register(function(e){return new IM(e)}),this.register(function(e){return new wM(e)}),this.register(function(e){return new AM(e)}),this.register(function(e){return new TM(e)}),this.register(function(e){return new LM(e)}),this.register(function(e){return new DM(e)}),this.register(function(e){return new NM(e)}),this.register(function(e){return new UM(e)}),this.register(function(e){return new OM(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const r=new bM,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const tt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},vl="KHR_mesh_quantization",ln={};ln[Wt]=tt.NEAREST;ln[Cc]=tt.NEAREST_MIPMAP_NEAREST;ln[ds]=tt.NEAREST_MIPMAP_LINEAR;ln[Yt]=tt.LINEAR;ln[hr]=tt.LINEAR_MIPMAP_NEAREST;ln[kn]=tt.LINEAR_MIPMAP_LINEAR;ln[zn]=tt.CLAMP_TO_EDGE;ln[vr]=tt.REPEAT;ln[xr]=tt.MIRRORED_REPEAT;const gd={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},pM=new De,_d=12,mM=1179937895,gM=2,vd=8,_M=1313821514,vM=5130562;function or(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function xM(s){return new TextEncoder().encode(s).buffer}function yM(s){return or(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function MM(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=oi.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Lf(s){return Math.ceil(s/4)*4}function xl(s,e=0){const t=Lf(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function xd(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function yd(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class bM{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+ca}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,r=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){const d=xl(f.result),p=new DataView(new ArrayBuffer(vd));p.setUint32(0,d.byteLength,!0),p.setUint32(4,vM,!0);const _=xl(xM(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(vd));m.setUint32(0,_.byteLength,!0),m.setUint32(4,_M,!0);const g=new ArrayBuffer(_d),x=new DataView(g);x.setUint32(0,mM,!0),x.setUint32(4,gM,!0);const v=_d+m.byteLength+_.byteLength+p.byteLength+d.byteLength;x.setUint32(8,v,!0);const y=new Blob([g,m,_,p,d],{type:"application/octet-stream"}),P=new FileReader;P.readAsArrayBuffer(y),P.onloadend=function(){t(P.result)}}}else if(o.buffers&&o.buffers.length>0){const f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){const d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new R;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new R;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(d){return d.colorSpace===on?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof cl&&(e=_l(e)),t instanceof cl&&(t=_l(t));const i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=xd();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);const d=n(e),p=c.getImageData(0,0,o,a).data;for(let _=2;_<p.length;_+=4)h.data[_]=d(p[_]/256)*256}if(r){c.drawImage(r,0,0,o,a);const d=n(t),p=c.getImageData(0,0,o,a).data;for(let _=1;_<p.length;_+=4)h.data[_]=d(p[_]/256)*256}c.putImageData(h,0,0);const f=(e||t).clone();return f.source=new wi(l),f.colorSpace=Bn,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),f}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case tt.BYTE:case tt.UNSIGNED_BYTE:a=1;break;case tt.SHORT:case tt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===tt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Lf(i*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let p=n;p<n+i;p++){for(let _=0;_<e.itemSize;_++){let m;e.itemSize>4?m=e.array[p*e.itemSize+_]:(_===0?m=e.getX(p):_===1?m=e.getY(p):_===2?m=e.getZ(p):_===3&&(m=e.getW(p)),e.normalized===!0&&(m=oi.normalize(m,e.array))),t===tt.FLOAT?h.setFloat32(u,m,!0):t===tt.INT?h.setInt32(u,m,!0):t===tt.UNSIGNED_INT?h.setUint32(u,m,!0):t===tt.SHORT?h.setInt16(u,m,!0):t===tt.UNSIGNED_SHORT?h.setUint16(u,m,!0):t===tt.BYTE?h.setInt8(u,m):t===tt.UNSIGNED_BYTE&&h.setUint8(u,m),u+=a}u%l!==0&&(u+=l-u%l)}const f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===tt.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=xl(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=tt.FLOAT;else if(e.array.constructor===Int32Array)a=tt.INT;else if(e.array.constructor===Uint32Array)a=tt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=tt.SHORT;else if(e.array.constructor===Uint16Array)a=tt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=tt.BYTE;else if(e.array.constructor===Uint8Array)a=tt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const l=MM(e,n,i);let c;t!==void 0&&(c=e===t.index?tt.ELEMENT_ARRAY_BUFFER:tt.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const f={mimeType:i},d=xd();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);const p=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(p.translate(0,d.height),p.scale(1,-1)),e.data!==void 0){t!==Kt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let g=0;g<m.length;g+=4)m[g+0]=e.data[g+0],m[g+1]=e.data[g+1],m[g+2]=e.data[g+2],m[g+3]=e.data[g+3];p.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)p.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(yd(d,i).then(m=>r.processBufferViewImage(m)).then(m=>{f.bufferView=m})):d.toDataURL!==void 0?f.uri=d.toDataURL(i):c.push(yd(d,i).then(m=>new FileReader().readAsDataURL(m)).then(m=>{f.uri=m}));const _=a.images.push(f)-1;return h[u]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:ln[e.magFilter],minFilter:ln[e.minFilter],wrapS:ln[e.wrapS],wrapT:ln[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof cl&&(e=_l(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),this._invokeAll(function(c){c.writeTexture&&c.writeTexture(e,a)});const l=r.textures.push(a)-1;return i.textures.set(e,l),l}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(or(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(a),channel:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const a={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){const a={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Ut&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,i)});const o=n.materials.push(i)-1;return t.materials.set(e,o),o}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,P=e.material.length;y<P;y++)i.push(e.material[y].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=tt.LINES:e.isLineLoop?a=tt.LINE_LOOP:e.isLine?a=tt.LINE_STRIP:e.isPoints?a=tt.POINTS:a=e.material.wireframe?tt.LINES:tt.TRIANGLES;const l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let p=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;const P=o.attributes[y];if(y=f[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(P))){c[y]=t.attributes.get(this.getUID(P));continue}p=null;const T=P.array;y==="JOINTS_0"&&!(T instanceof Uint16Array)&&!(T instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new pt(new Uint16Array(T),P.itemSize,P.normalized));const w=this.processAccessor(p||P,o);w!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,P),c[y]=w,t.attributes.set(this.getUID(P),w))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const y=[],P=[],S={};if(e.morphTargetDictionary!==void 0)for(const T in e.morphTargetDictionary)S[e.morphTargetDictionary[T]]=T;for(let T=0;T<e.morphTargetInfluences.length;++T){const w={};let E=!1;for(const M in o.morphAttributes){if(M!=="position"&&M!=="normal"){E||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),E=!0);continue}const L=o.morphAttributes[M][T],B=M.toUpperCase(),F=o.attributes[M];if(t.attributes.has(this.getUID(L,!0))){w[B]=t.attributes.get(this.getUID(L,!0));continue}const N=L.clone();if(!o.morphTargetsRelative)for(let G=0,z=L.count;G<z;G++)for(let $=0;$<L.itemSize;$++)$===0&&N.setX(G,L.getX(G)-F.getX(G)),$===1&&N.setY(G,L.getY(G)-F.getY(G)),$===2&&N.setZ(G,L.getZ(G)-F.getZ(G)),$===3&&N.setW(G,L.getW(G)-F.getW(G));w[B]=this.processAccessor(N,o),t.attributes.set(this.getUID(F,!0),w[B])}u.push(w),y.push(e.morphTargetInfluences[T]),e.morphTargetDictionary!==void 0&&P.push(S[T])}l.weights=y,P.length>0&&(l.extras={},l.extras.targetNames=P)}const _=Array.isArray(e.material);if(_&&o.groups.length===0)return null;let m=!1;if(_&&o.index===null){const y=[];for(let P=0,S=o.attributes.position.count;P<S;P++)y[P]=P;o.setIndex(y),m=!0}const g=_?e.material:[e.material],x=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,P=x.length;y<P;y++){const S={mode:a,attributes:c};if(this.serializeUserData(o,S),u.length>0&&(S.targets=u),o.index!==null){let w=this.getUID(o.index);(x[y].start!==void 0||x[y].count!==void 0)&&(w+=":"+x[y].start+":"+x[y].count),t.attributes.has(w)?S.indices=t.attributes.get(w):(S.indices=this.processAccessor(o.index,o,x[y].start,x[y].count),t.attributes.set(w,S.indices)),S.indices===null&&delete S.indices}const T=this.processMaterial(g[x[y].materialIndex]);T!==null&&(S.material=T),h.push(S)}m===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(y){y.writeMesh&&y.writeMesh(e,l)});const v=n.meshes.push(l)-1;return t.meshes.set(r,v),v}detectMeshQuantization(e,t){if(this.extensionsUsed[vl])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];md[i]&&md[i].includes(n)&&(this.extensionsUsed[vl]=!0,this.extensionsRequired[vl]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:oi.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Ma.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){const c=r[l],h=st.parseTrackName(c.name);let u=st.findNode(t,h.nodeName);const f=gd[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const d=1;let p=c.values.length/c.times.length;f===gd.morphTargetInfluences&&(p/=u.morphTargetInfluences.length);let _;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",p/=3):c.getInterpolation()===Mr?_="STEP":_="LINEAR",a.push({input:this.processAccessor(new pt(c.times,d)),output:this.processAccessor(new pt(c.values,p)),interpolation:_}),o.push({sampler:a.length-1,target:{node:i.get(u),path:f}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new We;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new pt(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();or(a,[0,0,0,1])||(r.rotation=a),or(l,[0,0,0])||(r.translation=l),or(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),yM(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=this.processMesh(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,r)});const o=t.nodes.push(r)-1;return i.set(e,o),o}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}processObjects(e){const t=new Sr;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Sr?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class SM{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class EM{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class wM{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class AM{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class TM{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class RM{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class CM{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class PM{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class IM{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(pM)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class LM{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class DM{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class NM{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class UM{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const o={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class OM{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new We,c=new R,h=new Tn,u=new R;for(let d=0;d<i.count;d++)i.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);const f={TRANSLATION:n.processAccessor(new pt(r,3)),ROTATION:n.processAccessor(new pt(o,4)),SCALE:n.processAccessor(new pt(a,3))};i.instanceColor&&(f._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Ma.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n));let a;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r];const a=st.parseTrackName(o.name),l=st.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Xo)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();const d=new u.ValueBufferType(c*u.times.length);for(let p=0;p<u.times.length;p++)d[p*c+h]=u.values[p];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,n[l.uuid]=u,t.push(u);continue}const f=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){const p=this.insertKeyframe(u,o.times[d]);u.values[p*c+h]=o.values[d]}}return s.tracks=t,s}};const Md={type:"change"},mh={type:"start"},Df={type:"end"},Ao=new Fs,bd=new ii,FM=Math.cos(70*oi.DEG2RAD),Ct=new R,Zt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yl=1e-6;class BM extends fM{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Tn,this._lastTargetPosition=new R,this._quat=new Tn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pc,this._sphericalDelta=new pc,this._scale=1,this._panOffset=new R,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new R,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kM.bind(this),this._onPointerDown=zM.bind(this),this._onPointerUp=VM.bind(this),this._onContextMenu=YM.bind(this),this._onMouseWheel=WM.bind(this),this._onKeyDown=$M.bind(this),this._onTouchStart=XM.bind(this),this._onTouchMove=qM.bind(this),this._onMouseDown=GM.bind(this),this._onMouseMove=HM.bind(this),this._interceptControlDown=KM.bind(this),this._interceptControlUp=jM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Md),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ao.origin.copy(this.object.position),Ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ao.direction))<FM?this.object.lookAt(this.target):(bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ao.intersectPlane(bd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yl||this._lastTargetPosition.distanceToSquared(this.target)>yl?(this.dispatchEvent(Md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ct.copy(i).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function kM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function VM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Df),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case gs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case gs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(mh)}function HM(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function WM(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Df))}function $M(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function XM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(mh)}function qM(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function YM(s){this.enabled!==!1&&s.preventDefault()}function KM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Nf={"CAM06149G6-PR0009-PAN001":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN002":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN003":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN004":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN005":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN006":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN007":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN008":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN009":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN010":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN011":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN012":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN013":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN014":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN015":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN016":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN017":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN018":{label:"Kitchen",area:"36.6 m²",roomId:"mergedRoom-5"},"CAM06149G6-PR0009-PAN019":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN020":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN021":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN022":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN023":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN024":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN025":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN026":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN027":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN028":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN029":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN030":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN031":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN032":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN033":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN034":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN035":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN036":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN037":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN038":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN039":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN040":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN041":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN042":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN043":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN044":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN045":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN046":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN047":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN048":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN051":{label:"Hallway",area:"7.1 m²",roomId:"mergedRoom-1"},"CAM06149G6-PR0009-PAN051-SUB0":{label:"Room",area:"1.2 m²",roomId:"subRoom-CAM06149G6-PR0009-PAN051-SUB0"},"CAM06149G6-PR0009-PAN052":{label:"Hallway",area:"7.1 m²",roomId:"mergedRoom-1"},"CAM06149G6-PR0009-PAN053":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN054":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN055":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN056":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN057":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN058":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN059":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN060":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN061":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN062":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN063":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN063-SUB0":{label:"Room",area:"1.6 m²",roomId:"subRoom-CAM06149G6-PR0009-PAN063-SUB0"},"CAM06149G6-PR0009-PAN064":{label:"Bedroom",area:"14.1 m²",roomId:"mergedRoom-6"},"CAM06149G6-PR0009-PAN065":{label:"Hallway",area:"7.1 m²",roomId:"mergedRoom-1"},"CAM06149G6-PR0009-PAN066":{label:"Hallway",area:"7.1 m²",roomId:"mergedRoom-1"},"CAM06149G6-PR0009-PAN067":{label:"Hallway",area:"7.1 m²",roomId:"mergedRoom-1"},"CAM06149G6-PR0009-PAN068":{label:"Hallway",area:"7.1 m²",roomId:"mergedRoom-1"},"CAM06149G6-PR0009-PAN069":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN070":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN071":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN072":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN073":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN074":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN075":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN076":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN077":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN078":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN079":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN080":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN081":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN082":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN083":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN083-SUB0":{label:"Room",area:"1 m²",roomId:"subRoom-CAM06149G6-PR0009-PAN083-SUB0"},"CAM06149G6-PR0009-PAN084":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN085":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN086":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN087":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN088":{label:"Bedroom",area:"9.5 m²",roomId:"mergedRoom-2"},"CAM06149G6-PR0009-PAN089":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN090":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN091":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN092":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN093":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN094":{label:"Living Area",area:"53.1 m²",roomId:"mergedRoom-3"},"CAM06149G6-PR0009-PAN103":{label:"Garage",area:"25.9 m²",roomId:"mergedRoom-0"},"CAM06149G6-PR0009-PAN104":{label:"Garage",area:"25.9 m²",roomId:"mergedRoom-0"},"CAM06149G6-PR0009-PAN105":{label:"Garage",area:"25.9 m²",roomId:"mergedRoom-0"},"CAM06149G6-PR0009-PAN106":{label:"Garage",area:"25.9 m²",roomId:"mergedRoom-0"},"CAM06149G6-PR0009-PAN107":{label:"Laundry Room",area:"10.7 m²",roomId:"mergedRoom-4"},"CAM06149G6-PR0009-PAN108":{label:"Laundry Room",area:"10.7 m²",roomId:"mergedRoom-4"},"CAM06149G6-PR0009-PAN111":{label:"Laundry Room",area:"10.7 m²",roomId:"mergedRoom-4"},"CAM06149G6-PR0009-PAN112":{label:"Laundry Room",area:"10.7 m²",roomId:"mergedRoom-4"},"CAM06149G6-PR0009-PAN114":{label:"Bedroom",area:"13.5 m²",roomId:"mergedRoom-7"},"CAM06149G6-PR0009-PAN114-SUB0":{label:"Room",area:"0.9 m²",roomId:"subRoom-CAM06149G6-PR0009-PAN114-SUB0"},"CAM06149G6-PR0009-PAN116":{label:"Bathroom",area:"3.9 m²",roomId:"singleRoom-CAM06149G6-PR0009-PAN116"},"CAM06149G6-PR0009-PAN117":{label:"Bathroom",area:"3.6 m²",roomId:"singleRoom-CAM06149G6-PR0009-PAN117"}};function Uf(s){let e=null;for(const t of s||[]){const n=Nf[t];if(n){if(n.label!=="Room")return n;e||(e=n)}}return e}const JM={},ZM={};function Of(s){var n;if(!s)return null;const e=s.match(/\/([0-9a-f]{20,})\//i);if(e)return e[1];const t=(n=String(s).match(/\/3dflp\/([^/?#]+)/i))==null?void 0:n[1];return t&&ZM[t]||null}const On=Math.PI/4,To=20;class QM{constructor(e,t){this.canvas=e,this.viewport=t,this.meshes=[],this.lines=[],this.modelRadius=800,this.topWalls=[],this.botWalls=[],this.allCeilings=[],this.allFloors=[],this.wallLines=[],this.botCaps=[],this.doorMeshes=new Set,this.symbolLines=[],this.furniture3D=[],this.furniture3DOutlines=[],this.portals=[],this.doors=[],this.linesVisible=!0,this.symbolsIn3D=!1,this.show3DFurniture=!0,this.allFurniture3D=!1,this.wallHidingEnabled=!1,this.selectedRoomId=null,this._anim=null,this.azimuth=0,this.debugMode=!1,this.noDim=!1,this.onAfterVisibility=null,this._manualCam=!1,this._exporting=!1,this._safeAspect=null,this._exportAspect=null,this._initRenderer(),this._initScene(),this._initCameras(),this._initControls(),this._initResize(),this._loop()}_initRenderer(){this.renderer=new df({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(16777215,1),this.renderer.setSize(this.viewport.clientWidth,this.viewport.clientHeight),this.renderer.setTransparentSort((e,t)=>e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?e.z-t.z:e.id-t.id)}_initScene(){this.scene=new Sr,this.scene.add(new If(16777215,1));const e=new Pf(16777215,.5);e.position.set(200,800,300),this.scene.add(e)}_initCameras(){this.useOrtho=!0,this.ortho=this._makeOrtho(),this.persp=this._makePersp(),this.camera=this.ortho}_makeOrtho(e=900){var i;const t=this.viewport.clientWidth/this.viewport.clientHeight,n=new pa(-e*t,e*t,e,-e,-9e3,9e3);return this._placeTopDown(n,((i=this.controls)==null?void 0:i.target)??new R,this.azimuth),n}_placeTopDown(e,t,n=this.azimuth,i=1e3){const o=i*Math.sin(.01),a=i*Math.cos(.01);e.up.set(0,1,0),e.position.set(t.x+o*Math.sin(n),t.y+a,t.z+o*Math.cos(n)),e.lookAt(t)}_makePersp(){const e=new Ht(To,this.viewport.clientWidth/this.viewport.clientHeight,10,8e4);return this._setPerspPosition(e),e.lookAt(0,0,0),e}_setPerspPosition(e){const t=To/2*Math.PI/180,n=this.modelRadius/Math.tan(t)*1.15;e.position.set(0,n*Math.cos(On),n*Math.sin(On))}_initControls(){this.controls=new BM(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.screenSpacePanning=!0,this._applyControlLimits(),this.controls.addEventListener("end",()=>{if(!this.useOrtho||this._anim)return;const e=this.controls.getAzimuthalAngle(),t=Math.PI*2,n=Math.PI/2;let r=Math.round(e/n)*n-e;r=((r+Math.PI)%t+t)%t-Math.PI,!(Math.abs(r)<.001)&&(this._anim={t0:performance.now(),dur:250,snap2D:!0,fromAz:e,toAz:e+r})})}_applyControlLimits(){this.controls.enablePan=!1,this.useOrtho?(this.controls.enableDamping=!1,this.controls.enableZoom=!1,this.controls.enableRotate=!0,this.controls.minPolarAngle=.01,this.controls.maxPolarAngle=.01,this.controls.minAzimuthAngle=-1/0,this.controls.maxAzimuthAngle=1/0,this.controls.minDistance=0,this.controls.maxDistance=1/0):(this.controls.enableDamping=!0,this.controls.enableZoom=!1,this.controls.enableRotate=!0,this.controls.minPolarAngle=On,this.controls.maxPolarAngle=On,this.controls.minAzimuthAngle=-1/0,this.controls.maxAzimuthAngle=1/0)}_initResize(){new ResizeObserver(()=>{this._exporting||this._resizeToViewport()}).observe(this.viewport)}_resizeToViewport(){const e=this.viewport.clientWidth,t=this.viewport.clientHeight;this.renderer.setSize(e,t),this._applyAspect(e/t)}_applyAspect(e){if(this.useOrtho){const t=this.camera.top;this.camera.left=-t*e,this.camera.right=t*e}else this.camera.aspect=e;this.camera.updateProjectionMatrix()}loadObject(e){var m,g,x,v,y,P,S,T;const t=(w,E)=>{let M=w.parent;for(;M;){if(M.name===E)return!0;M=M.parent}return!1};e.traverse(w=>{var E;if(w.isMesh){if((E=w.userData)!=null&&E.furniture3d){w.material=new Cs({color:16777215,side:Ut,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const N=new $c(new Zc(w.geometry,30),new Ls({color:1710638}));N.raycast=()=>{},w.add(N),w.visible=!1,this.furniture3D.push({mesh:w,rawRids:w.userData.room_ids||[],roomIdSet:new Set});return}w.geometry=w.geometry.toNonIndexed();const M=w.geometry.attributes.normal,L=M.count,B=new Float32Array(L*3),F=t(w,"floors");for(let N=0;N<L;N++){const G=!F&&Math.abs(M.getY(N))>.5?0:1;B[N*3]=G,B[N*3+1]=G,B[N*3+2]=G}if(w.geometry.setAttribute("color",new pt(B,3)),w.material=new Cs({vertexColors:!0,side:Ut,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.meshes.push(w),F){const N=w.geometry.attributes.position,G=w.geometry.attributes.normal,z=[],$=[];for(let oe=0;oe<N.count;oe+=3)if(G.getY(oe)>.5)for(let ae=0;ae<3;ae++)z.push(N.getX(oe+ae),N.getY(oe+ae),N.getZ(oe+ae)),$.push(G.getX(oe+ae),G.getY(oe+ae),G.getZ(oe+ae));const W=new dt;W.setAttribute("position",new $e(z,3)),W.setAttribute("normal",new $e($,3)),W.setAttribute("color",new pt(new Float32Array(z.length).fill(1),3)),w.userData.fullGeo=w.geometry,w.userData.topGeo=W}}else(w.isLine||w.isLineSegments)&&(w.material=new Ls({color:1710638}),this.lines.push(w))}),this._alignModelToAxes(e),this.modelRoot=e,this.scene.add(e);const n=(w,E,M)=>{var B,F;const L=(B=e.children)==null?void 0:B.find(N=>N.name===w);(F=L==null?void 0:L.children)==null||F.forEach(N=>{var $;const G=(($=N.userData)==null?void 0:$.roomDirections)??{},z={};Object.entries(G).forEach(([W,oe])=>{z[W]=oe.map(([ae,pe,Xe])=>new R(ae,pe,Xe))}),E.push({node:N,roomDirMap:z}),N.traverse(W=>{W.isLine||W.isLineSegments?this.wallLines.push({line:W,roomDirMap:z}):W.isMesh&&(W.name||"").startsWith("cap")&&(M==null||M.push({mesh:W,roomDirMap:z}))})})};n("top_walls",this.topWalls,null),n("bot_walls",this.botWalls,this.botCaps),this._inheritWallDirectionsFromTop(e),this._tagTopRingOutlines(e);const i=(m=e.children)==null?void 0:m.find(w=>w.name==="svg_shapes");i==null||i.traverse(w=>{var M,L;if(!(w.isLine||w.isLineSegments))return;const E={line:w,rawRids:((M=w.userData)==null?void 0:M.room_ids)||[],roomIdSet:new Set};(L=w.userData)!=null&&L.furniture3dOutline?(w.visible=!1,this.furniture3DOutlines.push(E)):this.symbolLines.push(E)});const r=(g=e.children)==null?void 0:g.find(w=>w.name==="portals");r==null||r.traverse(w=>{var M;const E=w.userData||{};E.name==="window"&&((M=E.room_ids)!=null&&M.length)&&this.portals.push({node:w,rawRids:E.room_ids,roomIdSet:new Set})});const o=w=>{let E=!1;return w.traverse(M=>{var L,B;M.isMesh&&((B=(L=M.geometry)==null?void 0:L.attributes)!=null&&B.uv)&&(E=!0)}),E},a=(x=r==null?void 0:r.children)==null?void 0:x.find(w=>w.name==="doors");(v=a==null?void 0:a.children)==null||v.forEach(w=>{var B,F,N,G;if(((B=w.userData)==null?void 0:B.name)!=="door")return;const E=(F=w.children)==null?void 0:F.find(z=>{var $;return(($=z.userData)==null?void 0:$.name)==="door_open"}),M=(N=w.children)==null?void 0:N.find(z=>{var $;return(($=z.userData)==null?void 0:$.name)==="door_closed"});if(!E||!M)return;[E,M].forEach(z=>z.traverse($=>{$.isMesh&&(this.doorMeshes.add($),$.material.vertexColors=!1,$.material.color.set(16777215),$.material.transparent=!1,$.material.opacity=1,$.material.depthWrite=!0,$.material.needsUpdate=!0)}));const L=o(E)?E:o(M)?M:E;this.doors.push({openNode:E,closedNode:M,bakedNode:L,rawRids:((G=w.userData)==null?void 0:G.room_ids)||[],roomIdSet:new Set}),E.visible=!0,M.visible=!1});const l=(y=e.children)==null?void 0:y.find(w=>w.name==="ceilings");(P=l==null?void 0:l.children)==null||P.forEach(w=>{w.isMesh&&this.allCeilings.push(w)});const c=(S=e.children)==null?void 0:S.find(w=>w.name==="floors");(T=c==null?void 0:c.children)==null||T.forEach(w=>{w.isMesh&&this.allFloors.push(w)});const h=new Tt().setFromObject(e),u=h.getCenter(new R);e.position.sub(u);const f=h.getSize(new R);this.modelRadius=Math.max(f.x,f.z)*.55,this.modelSize=f.clone(),e.updateMatrixWorld(!0);const d=new Tt,p={};this.botCaps.forEach(w=>{d.setFromObject(w.mesh),w.y=(d.min.y+d.max.y)/2;const E=Math.round(w.y/5)*5;p[E]=(p[E]||0)+1});const _=Object.keys(p).reduce((w,E)=>p[E]>(p[w]||0)?E:w,0);this.botCaps.forEach(w=>{w.isJunction=Math.abs(w.y-_)<12}),this.revealCaps=new Set(this.botCaps.filter(w=>!w.isJunction).map(w=>w.mesh)),this.cutFaces=this.meshes.filter(w=>(w.name||"").startsWith("wall_face_cut")),this.fit()}_alignModelToAxes(e){const n=new Float64Array(360);e.updateMatrixWorld(!0);const i=new R,r=new R,o=["top_walls","bot_walls"].map(f=>{var d;return(d=e.children)==null?void 0:d.find(p=>p.name===f)}).filter(Boolean);(o.length?o:[e]).forEach(f=>f.traverse(d=>{var _,m;if(!d.isLineSegments)return;const p=(m=(_=d.geometry)==null?void 0:_.attributes)==null?void 0:m.position;if(p)for(let g=0;g+1<p.count;g+=2){i.fromBufferAttribute(p,g).applyMatrix4(d.matrixWorld),r.fromBufferAttribute(p,g+1).applyMatrix4(d.matrixWorld);const x=r.x-i.x,v=r.z-i.z,y=x*x+v*v;if(y<1e-4)continue;let P=Math.atan2(v,x);P=(P%(Math.PI/2)+Math.PI/2)%(Math.PI/2);const S=Math.min(359,Math.floor(P/(Math.PI/2)*360));n[S]+=Math.sqrt(y)}}));let l=0,c=-1;for(let f=0;f<360;f++)n[f]>c&&(c=n[f],l=f);if(c<=0)return;const h=(l+.5)/360*(Math.PI/2),u=h<Math.PI/4?h:h-Math.PI/2;e.rotation.y+=u,e.updateMatrixWorld(!0)}_inheritWallDirectionsFromTop(e){if(!this.topWalls.length||!this.botWalls.length)return;e.updateMatrixWorld(!0);const t=new Tt,n=new R,i=this.topWalls.filter(o=>Object.keys(o.roomDirMap).length>0).map(o=>(t.setFromObject(o.node),{center:t.getCenter(new R),roomDirMap:o.roomDirMap})),r=25;this.botWalls.forEach(o=>{if(Object.keys(o.roomDirMap).length>0)return;t.setFromObject(o.node);const a=t.getCenter(n);let l=null,c=r;for(const h of i){const u=Math.hypot(h.center.x-a.x,h.center.z-a.z);u<c&&(c=u,l=h)}l&&Object.entries(l.roomDirMap).forEach(([h,u])=>{o.roomDirMap[h]=u.map(f=>f.clone())})})}resolvePortalRooms(e){const t=n=>{const i=new Set;(n.rawRids||[]).forEach(r=>{const o=e(r);o&&i.add(o)}),n.roomIdSet=i};this.portals.forEach(t),this.doors.forEach(t)}resolveSymbolRooms(e){const t=n=>{const i=new Set;return(n||[]).forEach(r=>{const o=e(r);o&&i.add(o)}),i};this.symbolLines.forEach(n=>{n.roomIdSet=t(n.rawRids)}),this.furniture3D.forEach(n=>{n.roomIdSet=t(n.rawRids)}),this.furniture3DOutlines.forEach(n=>{n.roomIdSet=t(n.rawRids)})}_hideFlatSeamOutlines(e){e.updateMatrixWorld(!0);const t=p=>Math.round(p/2)*2,n=(p,_,m)=>`${t(p)},${t(_)},${t(m)}`,i=(p,_,m,g,x,v)=>{const y=n(p,_,m),P=n(g,x,v);return y<P?y+"|"+P:P+"|"+y},r=new Map,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;e.traverse(p=>{if(!(p.isMesh&&(p.name||"").startsWith("wall_face_visible")))return;const _=p.geometry.getAttribute("position"),m=p.matrixWorld;for(let g=0;g<_.count;g+=3){if(o.fromBufferAttribute(_,g).applyMatrix4(m),a.fromBufferAttribute(_,g+1).applyMatrix4(m),l.fromBufferAttribute(_,g+2).applyMatrix4(m),u.crossVectors(c.subVectors(a,o),h.subVectors(l,o)),u.lengthSq()<1e-6)continue;u.normalize();const x=[o,a,l];for(let v=0;v<3;v++){const y=x[v],P=x[(v+1)%3],S=i(y.x,y.y,y.z,P.x,P.y,P.z);let T=r.get(S);T||(T=[],r.set(S,T)),T.push(u.x,u.y,u.z)}}});const f=new R,d=new R;this.wallLines.forEach(({line:p})=>{const _=p.geometry.getAttribute("position");if(!_||_.count<2)return;p.updateWorldMatrix(!0,!1),f.fromBufferAttribute(_,0).applyMatrix4(p.matrixWorld),d.fromBufferAttribute(_,1).applyMatrix4(p.matrixWorld);const m=r.get(i(f.x,f.y,f.z,d.x,d.y,d.z));if(!m||m.length<6)return;let g=!1;const x=m.length/3;for(let v=0;v<x&&!g;v++)for(let y=v+1;y<x;y++)if(Math.abs(m[v*3]*m[y*3]+m[v*3+1]*m[y*3+1]+m[v*3+2]*m[y*3+2])>.94){g=!0;break}g&&(p.visible=!1,p.userData.seam=!0)})}_tagTopRingOutlines(e){var a,l;e.updateMatrixWorld(!0);const t=new Tt;let n=-1/0;if((l=(a=e.children)==null?void 0:a.find(c=>c.name==="top_walls"))==null||l.traverse(c=>{c.isMesh&&(c.name||"").replace(/_\d+$/,"")==="cap"&&(t.setFromObject(c),t.max.y>n&&(n=t.max.y))}),!Number.isFinite(n))return;const i=5,r=new R,o=new R;this.wallLines.forEach(({line:c})=>{const h=c.geometry.getAttribute("position");!h||h.count<2||(c.updateWorldMatrix(!0,!1),r.fromBufferAttribute(h,0).applyMatrix4(c.matrixWorld),o.fromBufferAttribute(h,1).applyMatrix4(c.matrixWorld),Math.abs(r.y-n)<i&&Math.abs(o.y-n)<i&&(c.userData._topRing=!0))})}fit(){if(this.useOrtho){const e=this.viewport.clientWidth/this.viewport.clientHeight,t=this.modelRadius*1.15;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t,this.camera.bottom=-t,this.camera.position.set(0,1e3,.01),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}else this._setPerspPosition(this.camera),this.camera.lookAt(0,0,0);this.controls.target.set(0,0,0),this.controls.update()}show3D(){this.azimuth=-33*Math.PI/180,this.useOrtho=!1,this.persp=this._makePersp(),this.camera=this.persp,this.controls.object=this.camera,this.controls.target.set(0,0,0);const e=this._scaleForRadius(this.modelRadius),t=Math.sin(On),n=Math.cos(On),i=Math.sin(this.azimuth),r=Math.cos(this.azimuth);this.camera.position.set(e*t*i,e*n,e*t*r),this.camera.lookAt(0,0,0),this._applyControlLimits(),this.controls.update()}setPeeksSpatialProgress(e){var h;const t=Math.max(0,Math.min(1,Number(e)||0));((h=this.camera)!=null&&h.isOrthographicCamera||this.useOrtho)&&(this.useOrtho=!1,this.persp=this._makePersp(),this.camera=this.persp,this.controls.object=this.camera,this._applyControlLimits()),this._anim=null,this._manualCam=!0,this.controls.enabled=!1;const n=new R(0,0,0),i=this._scaleForRadius(this.modelRadius)*1.38,r=-33*Math.PI/180+t*Math.PI*2,o=Math.sin(On),a=Math.cos(On),l=Math.sin(r),c=Math.cos(r);this.azimuth=r,this.controls.target.copy(n),this.camera.position.set(i*o*l,i*a,i*o*c),this.camera.lookAt(n),this.camera.updateProjectionMatrix()}_scaleForRadius(e){const t=this._exporting?this._exportAspect:this._safeAspect,n=t?Math.min(t,1):1;if(this.useOrtho)return e*1.3/n;const i=To/2*Math.PI/180;return e/Math.tan(i)*1.4/n}focusRoom(e){if(!(e!=null&&e.length))return;const t=new Tt;if(e.forEach(l=>{l.updateWorldMatrix(!0,!1),t.expandByObject(l)}),t.isEmpty())return;const n=t.getCenter(new R),i=t.getSize(new R),r=this.modelSize?this.modelSize.y:Math.max(i.x,i.z),o=new R(n.x,0,n.z),a=this.useOrtho?Math.hypot(i.x,i.z)*.5:Math.hypot(i.x,i.z,r)*.5;this._animateView(o,this._scaleForRadius(a))}resetView(){this._animateView(new R(0,0,0),this._scaleForRadius(this.modelRadius))}_animateView(e,t){const n=this.useOrtho;this.controls.enableRotate=!1,this.controls.enableZoom=!1,this._anim={t0:performance.now(),dur:650,ortho:n,fromTarget:this.controls.target.clone(),toTarget:e.clone(),fromScale:n?this.camera.top:this.camera.position.distanceTo(this.controls.target),toScale:t,dir:n?null:this.camera.position.clone().sub(this.controls.target).normalize()}}_applyAnim(){if(!this._anim)return;const e=this._anim;let t=(performance.now()-e.t0)/e.dur;const n=t>=1;n&&(t=1);const i=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;if(e.snap2D){const a=e.fromAz+(e.toAz-e.fromAz)*i;this._placeTopDown(this.camera,this.controls.target,a),n&&(this.azimuth=e.toAz,this._anim=null);return}if(e.projection){const a=e.fromPhi+(e.toPhi-e.fromPhi)*i,l=e.fromTheta+(e.toTheta-e.fromTheta)*i,c=Math.sin(a),h=Math.cos(a),u=Math.sin(l),f=Math.cos(l),d=e.center;this.camera.position.set(d.x+e.radius*c*u,d.y+e.radius*h,d.z+e.radius*c*f),this.camera.lookAt(d),this.controls.target.copy(d),n&&(this.useOrtho=e.targetOrtho,this.azimuth=e.toTheta,e.targetOrtho&&(this.ortho=this._makeOrtho(e.orthoTop),this.camera=this.ortho,this.controls.object=this.camera),this._applyControlLimits(),this._anim=null);return}const r=e.fromTarget.clone().lerp(e.toTarget,i),o=e.fromScale+(e.toScale-e.fromScale)*i;if(e.ortho&&this.useOrtho){const a=this.viewport.clientWidth/this.viewport.clientHeight;this.camera.top=o,this.camera.bottom=-o,this.camera.left=-o*a,this.camera.right=o*a,this._placeTopDown(this.camera,r,this.azimuth),this.camera.updateProjectionMatrix()}else!e.ortho&&!this.useOrtho&&this.camera.position.copy(r).addScaledVector(e.dir,o);this.controls.target.copy(r),n&&(this._anim=null,this._applyControlLimits())}topView(){this.controls.target.set(0,0,0),this._placeTopDown(this.camera,this.controls.target,this.azimuth),this.controls.update()}toggleProjection(){const e=!this.useOrtho;return this._animateProjection(e),e}_animateProjection(e){var h;const t=To/2*Math.PI/180,n=this.controls.target.clone();let i,r,o;if((h=this.camera)!=null&&h.isOrthographicCamera)o=this.camera.top,i=Math.max(o/Math.tan(t),1),this.persp=this._makePersp(),this._placeTopDown(this.persp,n,this.azimuth,i),this.camera=this.persp,this.controls.object=this.camera,r=.01;else{const u=this.camera.position.clone().sub(n);i=Math.max(u.length(),1),r=Math.atan2(Math.hypot(u.x,u.z),u.y),o=i*Math.tan(t)}const a=this.azimuth,l=e?Math.round(this.azimuth/(Math.PI/2))*(Math.PI/2):this.azimuth,c=e?.01:On;this.useOrtho=!1,this.controls.enableRotate=!1,this.controls.enableZoom=!1,this._anim={t0:performance.now(),dur:800,projection:!0,radius:i,fromPhi:r,toPhi:c,fromTheta:a,toTheta:l,center:n,orthoTop:o,targetOrtho:e}}zoom(e){this.useOrtho?(this.camera.left*=e,this.camera.right*=e,this.camera.top*=e,this.camera.bottom*=e,this.camera.updateProjectionMatrix()):this.camera.position.multiplyScalar(e)}hideCeilings(e){e.forEach(t=>{t.visible=!1})}showAllCeilings(){this.allCeilings.forEach(e=>{e.visible=!0})}_updateWallVisibility(){var l;if(!this.topWalls.length&&!this.botWalls.length)return;const e=this.selectedRoomId;if(this.cutFaces){const c=((l=this.sunpath)==null?void 0:l.enabled)&&!e;for(const h of this.cutFaces)h.visible=!c}this.symbolLines.forEach(({line:c,roomIdSet:h})=>{if(!this.linesVisible){c.visible=!1;return}if(this.useOrtho){c.visible=!0;const u=!!e&&h.size>0&&!h.has(e);c.material.transparent=u,c.material.opacity=u?.15:1,c.material.needsUpdate=!0}else this.symbolsIn3D&&e&&h.has(e)?(c.visible=!0,c.material.transparent=!1,c.material.opacity=1,c.material.needsUpdate=!0):c.visible=!1});const t=this.show3DFurniture&&!this.useOrtho,n=t&&this.allFurniture3D&&!e,i=c=>t&&(n||!!e&&c.has(e));if(this.furniture3D.forEach(({mesh:c,roomIdSet:h})=>{c.visible=i(h)}),this.furniture3DOutlines.forEach(({line:c,roomIdSet:h})=>{c.visible=i(h)}),this.portals.forEach(({node:c,roomIdSet:h})=>{var f,d;if(!this.useOrtho){const _=!!e&&h.has(e)||((f=this.sunpath)==null?void 0:f.enabled)&&!e;c.visible=_,_&&((d=this.sunpath)!=null&&d.enabled)&&c.traverse(m=>{m.material&&(m.material.transparent=!1,m.material.opacity=1)});return}c.visible=!0;const u=!!e&&h.size>0&&!h.has(e);c.traverse(p=>{p.material&&(p.material.transparent=u,p.material.opacity=u?.2:1,p.material.needsUpdate=!0)})}),this.doors.forEach(({openNode:c,closedNode:h,bakedNode:u,roomIdSet:f})=>{var d;if((d=this.sunpath)!=null&&d.enabled&&!this.useOrtho){const p=!e||f.has(e);c.visible=p&&u===c,h.visible=p&&u===h,p&&u.traverse(_=>{_.material&&(_.material.transparent=!1,_.material.opacity=1)});return}if(h.visible=!1,!this.useOrtho)c.visible=!!e&&f.has(e);else{c.visible=!0;const p=!!e&&f.size>0&&!f.has(e);c.traverse(_=>{_.material&&(_.material.transparent=p,_.material.opacity=p?.2:1,_.material.needsUpdate=!0)})}}),this.useOrtho){this.topWalls.forEach(({node:c})=>{c.visible=!1}),this.botWalls.forEach(({node:c})=>{c.visible=!0}),this.botCaps.forEach(({mesh:c})=>{c.visible=!0});return}if(!this.wallHidingEnabled||!this.selectedRoomId){this.topWalls.forEach(({node:c})=>{c.visible=!0}),this.botWalls.forEach(({node:c})=>{c.visible=!0}),this.botCaps.forEach(({mesh:c,isJunction:h})=>{c.visible=!h});return}const r=this.selectedRoomId,o=new R().subVectors(this.controls.target,this.camera.position);if(o.y=0,o.lengthSq()<1e-8){const c=this.controls.getAzimuthalAngle();o.setFromSphericalCoords(1,Math.PI/2,c).multiplyScalar(-1)}o.normalize();const a=oi.radToDeg;this.topWalls.forEach(({node:c,roomDirMap:h})=>{const u=h[r];if(!(u!=null&&u.length)){c.visible=!0;return}c.visible=!u.some(f=>a(f.angleTo(o))<85)}),this.botCaps.forEach(({mesh:c,roomDirMap:h,isJunction:u})=>{if(!u){c.visible=!0;return}const f=h[r];c.visible=!!(f!=null&&f.length)&&f.some(d=>a(d.angleTo(o))<85)}),this.botWalls.forEach(({node:c})=>{c.visible=!0})}_meshWorldNormal(e){if(e.userData._nrm)return e.userData._nrm;const t=e.geometry.getAttribute("normal"),n=new R,i=new R;for(let r=0;r<t.count;r++)i.fromBufferAttribute(t,r),n.add(i);return n.normalize(),e.updateWorldMatrix(!0,!1),n.transformDirection(e.matrixWorld).normalize(),e.userData._nrm=n,n}highlightRoom(e,t){const n=new Set(e),i=new Set(this.allFloors),r=new Set(this.allCeilings),o=new Map;[...this.topWalls,...this.botWalls].forEach(({node:a,roomDirMap:l})=>{const c=l[t];c&&a.traverse(h=>{h.isMesh&&o.set(h,c)})}),this.meshes.forEach(a=>{var l,c;if(!r.has(a)&&!this.doorMeshes.has(a)){if(a.material.userData.spDimmed=!this.noDim&&!(n.has(a)||o.has(a)||this.revealCaps.has(a)),this.revealCaps.has(a)){a.material.vertexColors=!1,a.material.color.set(16777215),a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1,a.material.needsUpdate=!0;return}if((a.name||"").startsWith("wall_face_cut")&&(a.visible=!0),i.has(a))a.material.vertexColors=!1,a.material.side=Ut,n.has(a)?(a.userData.fullGeo&&(a.geometry=a.userData.fullGeo),a.material.color.set((l=this.sunpath)!=null&&l.enabled?16777215:16773072),a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1):this.noDim?(a.userData.fullGeo&&(a.geometry=a.userData.fullGeo),a.material.color.set(16777215),a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1):(a.userData.topGeo&&(a.geometry=a.userData.topGeo),a.material.color.set(16185078),a.material.transparent=!0,a.material.depthWrite=!0,a.material.opacity=.25);else if(o.has(a)){const h=o.get(a),u=a.name||"",f=u.startsWith("wall_face_visible"),d=u.startsWith("wall_face_cut");let p=!1;if(f&&(h!=null&&h.length)){const m=this._meshWorldNormal(a);p=h.some(g=>m.dot(g)>.3)}a.material.vertexColors=!0,a.material.side=Ut;const _=(c=this.sunpath)==null?void 0:c.enabled;a.material.color.set(d?0:p&&!_?16762368:16777215),a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1,d?(a.material.polygonOffsetFactor=3,a.material.polygonOffsetUnits=3):(a.material.polygonOffsetFactor=1,a.material.polygonOffsetUnits=1)}else this.noDim?(a.material.vertexColors=!0,a.material.side=Ut,a.material.color.set(16777215),a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1,a.material.polygonOffset=!0,a.material.polygonOffsetFactor=1,a.material.polygonOffsetUnits=1):(a.name||"").startsWith("wall_face_cut")?(a.material.vertexColors=!1,a.material.side=Ut,a.material.color.set(0),a.material.transparent=!0,a.material.depthWrite=!0,a.material.opacity=.25,a.material.polygonOffset=!0,a.material.polygonOffsetFactor=3,a.material.polygonOffsetUnits=3,a.renderOrder=1):(a.material.vertexColors=!0,a.material.side=Wn,a.material.color.set(12632256),a.material.transparent=!0,a.material.depthWrite=!0,a.material.opacity=.25,a.material.polygonOffset=!0,a.material.polygonOffsetFactor=1,a.material.polygonOffsetUnits=1,a.renderOrder=0);a.material.needsUpdate=!0}}),this.wallLines.forEach(({line:a,roomDirMap:l})=>{var h;if((h=a.userData)!=null&&h._topRing){a.visible=!1;return}const c=a.userData._section==="bot_walls"&&a.userData._matColor===65280;t in l?(a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1,c&&a.material.color.set(0)):this.noDim?(a.material.transparent=!1,a.material.depthWrite=!0,a.material.opacity=1):(a.material.transparent=!0,a.material.depthWrite=!1,a.material.opacity=.25),a.material.needsUpdate=!0})}clearRoomHighlight(){this.meshes.forEach(e=>{this.doorMeshes.has(e)||(e.material.userData.spDimmed=!1,(e.name||"").startsWith("wall_face_cut")&&(e.visible=!0),e.userData.fullGeo&&(e.geometry=e.userData.fullGeo),e.material.vertexColors=!0,e.material.side=Ut,e.material.color.set(16777215),e.material.transparent=!1,e.material.depthWrite=!0,e.material.opacity=1,e.material.polygonOffset=!0,e.material.polygonOffsetFactor=1,e.material.polygonOffsetUnits=1,e.renderOrder=0,e.material.needsUpdate=!0)}),this.wallLines.forEach(({line:e})=>{var t,n,i;(t=e.userData)!=null&&t._topRing&&!((n=e.userData)!=null&&n.seam)&&(e.visible=!0),e.material.transparent=!1,e.material.depthWrite=!0,e.material.opacity=1,e.material.color.set((i=this.sunpath)!=null&&i.enabled?0:1710638),e.material.needsUpdate=!0})}setFillColor(e){this.meshes.forEach(t=>t.material.color.set(e==="#ffffff"||e===16777215?16777215:e))}setLineColor(e){this.lines.forEach(t=>t.material.color.set(e))}setLineWidth(e){this.lines.forEach(t=>t.material.linewidth=e)}setFillVisible(e){this.meshes.forEach(t=>t.visible=e)}setLinesVisible(e){this.linesVisible=e,this.lines.forEach(t=>t.visible=e&&!t.userData.seam)}setWireframe(e){this.meshes.forEach(t=>t.material.wireframe=e)}getZoomPercent(){return this.useOrtho?Math.round(900/this.camera.top*100):Math.round(1500/this.camera.position.length()*100)}async initSunpath(e,t,n=!1,i=null){if(!(e!=null&&e.length))return!1;const r=new Wy,o=u=>Promise.all(u.map(async f=>{const d=await r.loadAsync(f.url);return d.flipY=n,d.colorSpace=on,d.minFilter=Yt,d.magFilter=Yt,d.generateMipmaps=!1,this.renderer.initTexture(d),{time:f.time,texture:d}})).then(f=>f.sort((d,p)=>d.time-p.time)),a=await o(e),l=i!=null&&i.length?await o(i):null,c=((t==null?void 0:t.positions)||[]).map(u=>{const[f,d]=String(u.time).split(":"),p=u.sun_object_location||[0,0,1];return{time:(parseInt(f,10)||0)+(parseFloat(d)||0)/60,dir:new R(p[1],p[2],p[0]).normalize()}}).sort((u,f)=>u.time-f.time),h=Math.PI;return this.sunpath={frames:a,framesFull:a,framesNoFurn:l,sunPos:c,materials:null,uniforms:{uTex2:{value:a[0].texture},uBlend:{value:0},uSunDir:{value:new R(.5,.8,.3).normalize()},uSunCol:{value:new De(15716776).multiplyScalar(2.209/h)},uAmb:{value:new De(16777215).multiplyScalar(.764/h)}},sunriseTime:a[0].time,sunsetTime:a[a.length-1].time,activeTime:(a[0].time+a[a.length-1].time)/2,enabled:!1,litCurrent:0,litTarget:0},!0}sunpathReady(){return!!this.sunpath}sunpathRange(){return this.sunpath?{sunrise:this.sunpath.sunriseTime,sunset:this.sunpath.sunsetTime}:null}_ensureSunpathMaterials(){const e=this.sunpath;if(!e||e.materials)return;const t=e.uniforms;function n(a){a.uniforms.uTex2=t.uTex2,a.uniforms.uBlend=t.uBlend,a.uniforms.uLit=this.userData.spLit,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uTex2;
uniform float uBlend;
uniform float uLit;`).replace("#include <map_fragment>",`
          #ifdef USE_MAP
            vec3 spA = texture2D( map,   vMapUv ).rgb;
            vec3 spB = texture2D( uTex2, vMapUv ).rgb;
            diffuseColor.rgb *= mix(vec3(1.0), mix(spA, spB, uBlend), uLit);
          #endif
        `)}function i(a){a.uniforms.uSunDir=t.uSunDir,a.uniforms.uSunCol=t.uSunCol,a.uniforms.uAmb=t.uAmb,a.uniforms.uLit=this.userData.spLit,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSunN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vSunN = mat3(modelMatrix) * normal;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSunN;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uAmb;
uniform float uLit;`).replace("#include <map_fragment>",`
          float spNdl  = max(dot(normalize(vSunN), uSunDir), 0.0);
          // Fade the direct sun out as it reaches/drops below the horizon
          // (uSunDir.y = sin(elevation)). Keeps the exterior in sync with the
          // interior bake, which has no sun once the sun has set (e.g. 16:30,
          // elev -1.3°) — without this the near-horizontal sun grazes the
          // vertical walls and they stay bright while the interior goes flat.
          float spElev = smoothstep(0.0, 0.15, uSunDir.y);
          diffuseColor.rgb *= mix(vec3(1.0), uAmb + uSunCol * spNdl * spElev, uLit);
        `)}const r=[];[...this.meshes,...this.furniture3D.map(a=>a.mesh)].forEach(a=>{var u;const l=a.userData.fullGeo||a.geometry,c=!!((u=l==null?void 0:l.attributes)!=null&&u.uv),h=a.material;h.userData.spLit={value:0},h.userData.spDimmed=!1,c?(h.map=e.frames[0].texture,h.onBeforeCompile=n):h.onBeforeCompile=i,h.customProgramCacheKey=()=>c?"sp-baked":"sp-lit",h.needsUpdate=!0,r.push(h)}),e.materials=r,this.setSunpathTime(e.activeTime)}setSunpathTime(e){const t=this.sunpath;if(!t||!t.materials){t&&(t.activeTime=e);return}t.activeTime=e;const n=t.frames;let i=0;for(let c=0;c<n.length&&n[c].time<=e;c++)i=c;const r=n[i],o=n[Math.min(i+1,n.length-1)],a=o.time-r.time,l=a>1e-6?oi.clamp((e-r.time)/a,0,1):0;for(const c of t.materials)c.map&&(c.map=r.texture);t.uniforms.uTex2.value=o.texture,t.uniforms.uBlend.value=l,this._updateSunDir(e)}setSunpathFurniture(e){const t=this.sunpath;if(!t||!t.framesNoFurn)return;const n=e?t.framesFull:t.framesNoFurn;t.frames!==n&&(t.frames=n,this.setSunpathTime(t.activeTime))}_updateSunDir(e){const t=this.sunpath,n=t.sunPos;if(!(n!=null&&n.length))return;let i=0;for(let h=0;h<n.length&&n[h].time<=e;h++)i=h;const r=n[i],o=n[Math.min(i+1,n.length-1)],a=o.time-r.time,l=a>1e-6?oi.clamp((e-r.time)/a,0,1):0,c=r.dir.clone().lerp(o.dir,l).normalize();this.modelRoot&&c.applyQuaternion(this.modelRoot.getWorldQuaternion(this._tmpQ||(this._tmpQ=new Tn))),t.uniforms.uSunDir.value.copy(c)}setSunpathEnabled(e){this.sunpath&&(e&&this._ensureSunpathMaterials(),this.sunpath.enabled=e,this.sunpath.litTarget=e?1:0,this.lines.forEach(t=>t.material.color.set(e?0:1710638)))}_updateSunpathFade(){const e=this.sunpath;if(!(!e||!e.materials)){if(e.litCurrent!==e.litTarget){const t=e.litTarget-e.litCurrent;e.litCurrent=Math.abs(t)<.01?e.litTarget:e.litCurrent+Math.sign(t)*Math.min(Math.abs(t),.08)}else if(e.litCurrent===0)return;for(const t of e.materials)t.userData.spLit.value=t.userData.spDimmed?0:e.litCurrent}}beginManualCamera(){this._manualCam=!0,this.controls.enabled=!1}endManualCamera(){this._manualCam=!1,this.controls.enabled=!0,this._applyControlLimits()}setSafeFrame(e){this._safeAspect=e||null,this._safeAspect||this._resizeToViewport()}safeFrameRect(){const e=this.viewport.clientWidth,t=this.viewport.clientHeight;if(!this._safeAspect)return{x:0,y:0,w:e,h:t};let n=e,i=e/this._safeAspect;return i>t&&(i=t,n=t*this._safeAspect),{x:(e-n)/2,y:(t-i)/2,w:n,h:i}}beginExport(e,t){this._exporting=!0,this._exportAspect=e/t,this.controls.enabled=!1,this._exportPR=this.renderer.getPixelRatio(),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this._applyAspect(this._exportAspect)}endExport(){this._exporting=!1,this._exportAspect=null,this.renderer.setPixelRatio(this._exportPR??Math.min(devicePixelRatio,2)),this._resizeToViewport(),this.controls.enabled=!0}renderExportFrame(){this._updateWallVisibility(),this.onAfterVisibility&&this.onAfterVisibility();const e=this.sunpath;if(e&&e.materials){e.litCurrent=e.litTarget;for(const t of e.materials)t.userData.spLit.value=t.userData.spDimmed?0:e.litCurrent}this.renderer.render(this.scene,this.camera)}getCameraPose(){return{ortho:this.useOrtho,position:this.camera.position.clone(),target:this.controls.target.clone(),top:this.useOrtho?this.camera.top:null}}applyCameraPose(e){if(this.controls.target.copy(e.target),this.camera.position.copy(e.position),this.useOrtho&&e.top!=null){const t=this._exporting?this._exportAspect:this._safeAspect||this.viewport.clientWidth/this.viewport.clientHeight;this.camera.top=e.top,this.camera.bottom=-e.top,this.camera.left=-e.top*t,this.camera.right=e.top*t,this.camera.updateProjectionMatrix()}this.camera.lookAt(e.target)}_renderScene(){const e=this.renderer;if(!this._safeAspect){e.render(this.scene,this.camera);return}const t=e.getSize(new K),n=t.x,i=t.y;let r=n,o=n/this._safeAspect;o>i&&(o=i,r=i*this._safeAspect);const a=(n-r)/2,l=(i-o)/2;this._applyAspect(r/o),e.setScissorTest(!1),e.setViewport(0,0,n,i),e.setScissor(0,0,n,i),e.clear(),e.setScissorTest(!0),e.setViewport(a,l,r,o),e.setScissor(a,l,r,o),e.render(this.scene,this.camera),e.setScissorTest(!1),e.setViewport(0,0,n,i)}_loop(){requestAnimationFrame(()=>this._loop()),!this._exporting&&(this._manualCam||(this.controls.update(),this._applyAnim(),this._anim||(this.azimuth=this.controls.getAzimuthalAngle())),this._updateWallVisibility(),this.onAfterVisibility&&this.onAfterVisibility(),this._updateSunpathFade(),this._renderScene())}}const eb="modulepreload",tb=function(s,e){return new URL(s,e).href},Sd={},mc=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=tb(c,n),c in Sd)return;Sd[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const _=o[p];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":eb,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Ed={"16:9":{w:1920,h:1080},"9:16":{w:1080,h:1920}},Ml=30,nb=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,it=s=>document.getElementById(s);function ib(s){const{viewer:e}=s,t=it("render-panel"),n=it("render-bar"),i=it("render-safeframe"),r=it("render-progress");if(!t||!n)return{enter(){},leave(){},refreshRooms(){}};const o=it("rs-aspect"),a=it("rs-mode"),l=it("rs-mode-sun"),c=it("rs-traj"),h=it("rs-interp"),u=it("rs-room"),f=it("rs-sun-opts"),d=it("rs-sun-mode"),p=it("rs-sun-time-wrap"),_=it("rs-sun-time"),m=it("rs-sun-time-label"),g=it("rs-orbit-opts"),x=it("rs-orbit-deg"),v=it("rs-orbit-deg-label"),y=it("rs-ab-opts"),P=it("rs-set-a"),S=it("rs-set-b"),T=it("rs-goto-a"),w=it("rs-goto-b"),E=it("rs-ab-status"),M=it("rs-length"),L=it("rs-length-label"),B=it("rs-render"),F=it("rs-encoder-note"),N=it("rb-play"),G=N==null?void 0:N.querySelector(".rb-play-icon"),z=N==null?void 0:N.querySelector(".rb-pause-icon"),$=it("rb-scrub"),W=it("rb-time"),oe=it("rpro-title"),ae=it("rpro-fill"),pe=it("rpro-msg"),Xe=it("rpro-cancel"),te={aspect:"16:9",mode:"3d",traj:"orbit",interp:"ease",orbitDeg:360,length:8,sunSweep:!0,sunFixed01:.5,roomSequence:[]};let q=!1,se=!1,Ae=!1,de=null,Ue=0,Oe=0,Ie=null,Ze=null,C=null,ie=null,ne=!1,fe=!1,Y=null;const Fe=()=>{const X=Ed[te.aspect];return X.w/X.h},me=()=>{var X;return!!((X=s.canEnableSun)!=null&&X.call(s))};function be(X,_e){X&&X.addEventListener("click",xe=>{const Re=xe.target.closest(".rs-seg-btn");!Re||Re.disabled||([...X.querySelectorAll(".rs-seg-btn")].forEach(Ve=>Ve.classList.toggle("is-active",Ve===Re)),_e(Re.dataset.v))})}const I=(X,_e)=>X&&[...X.querySelectorAll(".rs-seg-btn")].forEach(xe=>xe.classList.toggle("is-active",xe.dataset.v===_e));function b(){g&&(g.hidden=te.traj!=="orbit"),y&&(y.hidden=te.traj!=="ab"),f&&(f.hidden=te.mode!=="sun"),p&&(p.hidden=!(te.mode==="sun"&&!te.sunSweep))}function k(X){var xe;const _e=te.interp==="ease"?nb(X):X;if(D(X),te.mode==="sun"&&me()){const Re=(xe=e.sunpathRange)==null?void 0:xe.call(e);if(Re){const Ve=te.sunSweep?X:te.sunFixed01;e.setSunpathTime(Re.sunrise+(Re.sunset-Re.sunrise)*Ve)}}if(te.traj==="static")Ie&&e.applyCameraPose(Ie);else if(te.traj==="orbit"){if(!Ie||!Ze)return;const Re=Ze.clone();Re.theta=Ze.theta+oi.degToRad(te.orbitDeg)*_e;const Ve=new R().setFromSpherical(Re).add(Ie.target);e.applyCameraPose({ortho:e.useOrtho,position:Ve,target:Ie.target.clone(),top:Ie.top})}else{const Re=C,Ve=ie;if(!Re||!Ve){(Re||Ve)&&e.applyCameraPose(Re||Ve);return}const ft=Re.position.clone().lerp(Ve.position,_e),Ot=Re.target.clone().lerp(Ve.target,_e),Qe=Re.top!=null&&Ve.top!=null?Re.top+(Ve.top-Re.top)*_e:Re.top;e.applyCameraPose({ortho:e.useOrtho,position:ft,target:Ot,top:Qe})}}function Z(){if(te.traj==="ab"){Ie=null,Ze=null;return}Ie=e.getCameraPose(),Ze=te.traj==="orbit"?new pc().setFromVector3(Ie.position.clone().sub(Ie.target)):null}function j(X){X!==se&&(se=X,X?(Z(),e.beginManualCamera()):(e.endManualCamera(),Ie&&e.applyCameraPose(Ie)))}function Q(X){if(Ae=X,G&&(G.hidden=X),z&&(z.hidden=!X),de&&(cancelAnimationFrame(de),de=null),!X)return;j(!0),Oe>=1&&(Oe=0),Ue=performance.now()-Oe*te.length*1e3;const _e=()=>{const xe=Math.min(1,(performance.now()-Ue)/(te.length*1e3));if(Oe=xe,k(xe),Te(xe),xe>=1){Q(!1);return}de=requestAnimationFrame(_e)};de=requestAnimationFrame(_e)}function Te(X){$&&($.value=String(Math.round(X*1e3))),W&&(W.textContent=`${(X*te.length).toFixed(1)}s / ${te.length.toFixed(1)}s`)}function ue(){var X;Q(!1),Oe=0,j(!1),Y=null,te.roomSequence.length&&(u&&(u.value=""),(X=s.clearRoom)==null||X.call(s)),Te(0)}function ge(){q&&ue()}be(o,X=>{var _e;te.aspect=X,ge(),C=ie=null,ke(),Me(),(_e=s.reframe)==null||_e.call(s)}),be(a,X=>{var _e;ge(),te.mode=X,(_e=s.applyMode)==null||_e.call(s,X),C=ie=null,ke(),b()}),be(c,X=>{ge(),te.traj=X,b()}),be(h,X=>{ge(),te.interp=X}),be(d,X=>{ge(),te.sunSweep=X==="sweep",b(),re()}),x==null||x.addEventListener("input",()=>{ge(),te.orbitDeg=+x.value,v&&(v.textContent=`${te.orbitDeg}°`)}),M==null||M.addEventListener("input",()=>{ge(),te.length=+M.value,L&&(L.textContent=`${te.length.toFixed(1)}s`),Te(0)}),_==null||_.addEventListener("input",()=>{ge(),te.sunFixed01=+_.value/100,re()}),u==null||u.addEventListener("change",()=>{var xe,Re;ge(),te.roomSequence=[],Y=null;const X=u.value;if(!X){(xe=s.clearRoom)==null||xe.call(s);return}const _e=Be.find(Ve=>Ve.roomId===X);_e&&((Re=s.showRoom)==null||Re.call(s,_e.roomId,{label:_e.label,area:_e.area},{toggle:!1}))}),P==null||P.addEventListener("click",()=>{ue(),C=e.getCameraPose(),ke()}),S==null||S.addEventListener("click",()=>{ue(),ie=e.getCameraPose(),ke()}),T==null||T.addEventListener("click",()=>{C&&(j(!0),e.applyCameraPose(C),Oe=0,Te(0))}),w==null||w.addEventListener("click",()=>{ie&&(j(!0),e.applyCameraPose(ie),Oe=1,Te(1))});function ke(){P==null||P.classList.toggle("is-set",!!C),S==null||S.classList.toggle("is-set",!!ie),T&&(T.disabled=!C),w&&(w.disabled=!ie),E&&(E.textContent=C&&ie?"A and B set — preview or render.":C?"A set. Frame the end, then Set B.":ie?"B set. Frame the start, then Set A.":"Frame the camera, then Set A and Set B.")}function re(){var Ot;if(!m)return;const X=(Ot=e.sunpathRange)==null?void 0:Ot.call(e);if(!X){m.textContent="—";return}const _e=X.sunrise+(X.sunset-X.sunrise)*te.sunFixed01;let xe=Math.floor(_e),Re=Math.round((_e-xe)*60);Re===60&&(Re=0,xe+=1);const Ve=xe>=12?"PM":"AM",ft=(xe+11)%12+1;m.textContent=`${ft}:${String(Re).padStart(2,"0")} ${Ve}`}N==null||N.addEventListener("click",()=>Q(!Ae)),$==null||$.addEventListener("input",()=>{Q(!1);const X=+$.value/1e3;if(Oe=X,X===0&&!ne){Y=null,D(0),j(!1),Te(0);return}j(!0),k(X),Te(X)});function Me(){e.setSafeFrame(Fe()),et()}function et(){if(!i||!q)return;const X=e.viewport,_e=X.clientWidth,xe=X.clientHeight,Re=Fe();let Ve=_e,ft=_e/Re;ft>xe&&(ft=xe,Ve=xe*Re),i.style.left=`${Math.round((_e-Ve)/2)}px`,i.style.top=`${Math.round((xe-ft)/2)}px`,i.style.width=`${Math.round(Ve)}px`,i.style.height=`${Math.round(ft)}px`}window.addEventListener("resize",()=>{q&&et()});let Be=[];function we(){var _e;if(Be=((_e=s.getRooms)==null?void 0:_e.call(s))||[],!u)return;const X=u.value;u.innerHTML='<option value="">Whole floor (no room)</option>',Be.forEach(xe=>{const Re=document.createElement("option");Re.value=xe.roomId,Re.textContent=xe.area?`${xe.label} · ${xe.area}`:xe.label,u.appendChild(Re)}),[...u.options].some(xe=>xe.value===X)&&(u.value=X)}function qe(X){if(!X||!Be.length)return"";const _e=String(X).toLowerCase().split(/\s+/).filter(Boolean);let xe=null,Re=0;for(const Ve of Be){const ft=`${Ve.label||""} ${Ve.area||""} ${Ve.roomId||""}`.toLowerCase(),Ot=_e.reduce((Qe,Dt)=>Qe+(ft.includes(Dt)?1:0),0);Ot>Re&&(xe=Ve,Re=Ot)}return Re>0?xe.roomId:""}function je(X){const _e=(X==null?void 0:X.roomId)||qe(X==null?void 0:X.roomHint);if(!_e)return null;const xe=Be.find(Re=>Re.roomId===_e);return xe?{roomId:_e,room:xe}:null}function gt(X,_e=[]){const xe=Array.isArray(_e)&&_e.length?_e:[X],Re=[],Ve=new Set;for(const Qe of xe){const Dt=je(Qe);!Dt||Ve.has(Dt.roomId)||(Ve.add(Dt.roomId),Re.push(Dt))}if(!Re.length)return[];const ft=Math.min(.28,Math.max(.14,2/Math.max(te.length,1))),Ot=(1-ft)/Re.length;return[{at:0,roomId:"",room:null},...Re.map((Qe,Dt)=>({at:ft+Ot*Dt,roomId:Qe.roomId,room:Qe.room}))]}function D(X){var Re,Ve;if(!te.roomSequence.length)return;let _e=te.roomSequence[0];for(const ft of te.roomSequence)if(X+1e-4>=ft.at)_e=ft;else break;const xe=(_e==null?void 0:_e.roomId)||"";if(xe!==Y){if(Y=xe,!xe){u&&(u.value=""),(Re=s.clearRoom)==null||Re.call(s);return}u&&(u.value=xe),(Ve=s.showRoom)==null||Ve.call(s,xe,{label:_e.room.label,area:_e.room.area},{toggle:!1})}}function le(X={}){var Re,Ve,ft;const _e=X.shot||X;ue(),we(),te.aspect=_e.aspect||te.aspect,te.mode=_e.mode||te.mode,te.traj=_e.trajectory||te.traj;const xe=Array.isArray(X.sequence)?X.sequence:[];if(xe.length>1){const Ot=xe.reduce((Qe,Dt)=>Qe+(Number(Dt.duration)||0),0);te.length=Math.min(24,Math.max(8,Number(_e.duration)||Ot||te.length))}else te.length=Number(_e.duration)||te.length;te.mode==="sun"&&!me()&&(te.mode="3d"),I(o,te.aspect),I(a,te.mode),I(c,te.traj),M&&(M.value=String(te.length)),L&&(L.textContent=`${te.length.toFixed(1)}s`),te.roomSequence=gt(_e,xe),Y=null,u&&(u.value=""),(Re=s.clearRoom)==null||Re.call(s),(Ve=s.applyMode)==null||Ve.call(s,te.mode),b(),Me(),(ft=s.reframe)==null||ft.call(s),Te(0)}async function J(){var Ve,ft,Ot;if(ne)return;if(te.traj==="ab"&&(!C||!ie)){ke();return}ne=!0,fe=!1,ue(),Z();const{w:X,h:_e}=Ed[te.aspect],xe=Math.max(2,Math.round(te.length*Ml));ce("Rendering…",0,`0 / ${xe} frames`),e.beginExport(X,_e);let Re;try{Re=await sb(e.canvas,X,_e,Ml)}catch(Qe){console.error("[render] encoder init failed:",Qe),e.endExport(),ce("Render failed",0,String((Qe==null?void 0:Qe.message)||Qe)),setTimeout(ze,2500),ee();return}try{for(let Qe=0;Qe<xe&&!fe;Qe++)k(xe===1?0:Qe/(xe-1)),e.renderExportFrame(),await Re.addFrame(Qe),(Qe%5===0||Qe===xe-1)&&(ce("Rendering…",(Qe+1)/xe*.9,`${Qe+1} / ${xe} frames`),await nt())}catch(Qe){console.error("[render] frame loop failed:",Qe),fe=!0}finally{e.endExport()}if(fe){await((Ve=Re.abort)==null?void 0:Ve.call(Re)),ze(),ee();return}ce("Encoding…",.95,"Finalizing MP4…");try{const Qe=await Re.finalize(),Dt=`${((ft=s.slug)==null?void 0:ft.call(s))||"floorplan"}-${te.mode}-${te.aspect.replace(":","x")}.mp4`;(Ot=s.download)==null||Ot.call(s,Qe,Dt),ce("Done",1,`Saved ${Dt}`),setTimeout(ze,1200)}catch(Qe){console.error("[render] finalize failed:",Qe),ce("Encoding failed",1,String((Qe==null?void 0:Qe.message)||Qe)),setTimeout(ze,2500)}ee()}function ee(){ne=!1;const X=te.traj==="ab"?C:Ie;X&&e.applyCameraPose(X),Oe=0,Te(0)}B==null||B.addEventListener("click",J),Xe==null||Xe.addEventListener("click",()=>{fe=!0});function ce(X,_e,xe){r&&(r.hidden=!1,oe&&(oe.textContent=X),ae&&(ae.style.width=`${Math.round(_e*100)}%`),pe&&(pe.textContent=xe||""))}function ze(){r&&(r.hidden=!0)}const nt=()=>new Promise(X=>requestAnimationFrame(()=>X()));function yt(){var X;if(q=!0,we(),u&&s.currentRoomId){const _e=s.currentRoomId();_e&&[...u.options].some(xe=>xe.value===_e)&&(u.value=_e)}l&&(l.disabled=!me()),(X=s.applyMode)==null||X.call(s,te.mode),re(),b(),ke(),t&&(t.hidden=!1),n&&(n.hidden=!1),i&&(i.hidden=!1),Me(),Te(0),F&&(F.textContent=`1080p · ${Ml} fps · H.264 MP4 · ${Ff()?"WebCodecs":"ffmpeg.wasm"}`)}function Rt(){ue(),q=!1,t&&(t.hidden=!0),n&&(n.hidden=!0),i&&(i.hidden=!0),e.setSafeFrame(null)}return I(o,te.aspect),I(a,te.mode),I(c,te.traj),I(h,te.interp),I(d,te.sunSweep?"sweep":"fixed"),v&&(v.textContent=`${te.orbitDeg}°`),L&&(L.textContent=`${te.length.toFixed(1)}s`),b(),{enter:yt,leave:Rt,refreshRooms:we,applyPreset:le}}const Ff=()=>typeof window<"u"&&"VideoEncoder"in window;async function sb(s,e,t,n){if(Ff())try{return await rb(s,e,t,n)}catch(i){console.warn("[render] Mediabunny/WebCodecs failed, falling back to ffmpeg.wasm:",i)}return ob(s,e,t,n)}async function rb(s,e,t,n){const{Output:i,Mp4OutputFormat:r,BufferTarget:o,CanvasSource:a,QUALITY_HIGH:l}=await mc(async()=>{const{Output:u,Mp4OutputFormat:f,BufferTarget:d,CanvasSource:p,QUALITY_HIGH:_}=await import("./index-CYG7dTWC.js");return{Output:u,Mp4OutputFormat:f,BufferTarget:d,CanvasSource:p,QUALITY_HIGH:_}},[],import.meta.url),c=new i({format:new r,target:new o}),h=new a(s,{codec:"avc",bitrate:l});return c.addVideoTrack(h,{frameRate:n}),await c.start(),{async addFrame(u){await h.add(u/n,1/n)},async finalize(){var u;return await c.finalize(),(u=h.close)==null||u.call(h),new Blob([c.target.buffer],{type:"video/mp4"})},async abort(){var u,f;try{(u=h.close)==null||u.call(h),await((f=c.cancel)==null?void 0:f.call(c))}catch{}}}}async function ob(s,e,t,n){const{FFmpeg:i}=await mc(async()=>{const{FFmpeg:c}=await import("./index-Bsyy57cj.js");return{FFmpeg:c}},[],import.meta.url),{toBlobURL:r}=await mc(async()=>{const{toBlobURL:c}=await import("./index-CfUyQe6l.js");return{toBlobURL:c}},[],import.meta.url),o=new i;await o.load({coreURL:await r("/vendor/ffmpeg/ffmpeg-core.js","text/javascript"),wasmURL:await r("/vendor/ffmpeg/ffmpeg-core.wasm","application/wasm")});const a=()=>new Promise(c=>s.toBlob(c,"image/jpeg",.92));let l=0;return{async addFrame(c){const h=await a(),u=new Uint8Array(await h.arrayBuffer());await o.writeFile(`f${String(c).padStart(5,"0")}.jpg`,u),l=c+1},async finalize(){await o.exec(["-framerate",String(n),"-i","f%05d.jpg","-c:v","libx264","-pix_fmt","yuv420p","-movflags","+faststart","out.mp4"]);const c=await o.readFile("out.mp4");for(let h=0;h<l;h++)try{await o.deleteFile(`f${String(h).padStart(5,"0")}.jpg`)}catch{}try{await o.deleteFile("out.mp4")}catch{}return new Blob([c.buffer],{type:"video/mp4"})},async abort(){try{o.terminate()}catch{}}}}const Ye={properties:[],selected:null,activeVo:"full",activeVoProperty:null,manualVo:!1,query:""},_t=s=>document.querySelector(s),ab="g360_pending_render_preset_v1";function Rr(s){return`/api/file?path=${encodeURIComponent(s)}`}async function Bo(s,e={}){const t=await fetch(s,e),n=await t.json();if(!t.ok)throw new Error(n.error||"Request failed");return n}function Se(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ii(s){return s.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function pr(s,e){var t;for(const n of e)if((t=s.facts)!=null&&t[n])return s.facts[n];return""}function ni(s,e){return`<span class="plan-pill ${s?"ok":"warn"}">${Se(e)}</span>`}function dn(s,e=s){const t=["ready","completed","pass",!0].includes(s),n=["missing","blocked","needs_review","needs_visual_review","needs_revision",!1].includes(s);return`<span class="plan-mini-pill ${t?"ok":n?"warn":""}">${Se(e||"")}</span>`}function Ro(s,e=5){const t=(s||[]).filter(Boolean);if(!t.length)return"";const n=t.slice(0,e),i=t.length-n.length;return`
    <ul>${n.map(r=>`<li>${Se(r)}</li>`).join("")}${i>0?`<li class="plan-muted">+${i} more</li>`:""}</ul>
  `}function lb(s,e=6){const t=(s||[]).filter(r=>(r==null?void 0:r.observation)||(r==null?void 0:r.sentence));if(!t.length)return'<p class="plan-muted">No observations yet.</p>';const n=Number.isFinite(e)?t.slice(0,e):t,i=t.length-n.length;return`
    <div class="plan-evidence-list">
      ${n.map(r=>`
        <div class="plan-evidence-item">
          <div>${Se(r.observation||r.sentence||"")}</div>
          <div class="plan-evidence-meta">
            ${r.type?dn(null,r.type):""}
            ${r.confidence?dn(r.confidence==="high",r.confidence):""}
            ${r.evidence||r.selectedAsset?`<span>${Se(r.evidence||r.selectedAsset)}</span>`:""}
          </div>
        </div>
      `).join("")}
      ${i>0?`<div class="plan-muted">+${i} more observations</div>`:""}
    </div>
  `}function cb(s=[]){return s.map(e=>(e==null?void 0:e.name)||(e==null?void 0:e.type)).filter(Boolean).filter(e=>!["layout","general"].includes(String(e).trim().toLowerCase()))}function hb(s={}){const e=Object.entries(s).filter(([,t])=>typeof t!="object");return e.length?`<div class="plan-chip-row">${e.map(([t,n])=>dn(!!n,`${Ii(t)}: ${n}`)).join("")}</div>`:""}function ub(s={}){const e=Object.entries(s);return e.length?`
    <div class="plan-validation-grid">
      ${e.map(([t,n])=>{var i;return`
        <div class="plan-validation-item">
          <b>${Se(ci[t]||t)}</b>
          ${dn(n.status==="pass",n.status||"")}
          <span>${Se(n.wordCount??"")}${n.targetWords?` / ${Se(n.targetWords.join("-"))} words`:""}</span>
          ${(i=n.issues)!=null&&i.length?`<em>${Se(n.issues.join("; "))}</em>`:""}
        </div>
      `}).join("")}
    </div>
  `:""}function wd(s={}){var e,t,n,i,r;return((t=(e=s.buyerRead)==null?void 0:e.zonePlan)==null?void 0:t.openingAnchorDecision)||((i=(n=s.voiceoverInputs)==null?void 0:n.zonePlan)==null?void 0:i.openingAnchorDecision)||((r=s.zonePlan)==null?void 0:r.openingAnchorDecision)||s.openingAnchorDecision||null}function bl(s){var e;return s?`
    <div class="plan-info-grid">
      <div>
        <div class="plan-read-subhead">Opening</div>
        <p>${dn(s.useAnchor,s.useAnchor?"Anchor used":"Facts first")} ${s.confidence?dn(null,`confidence: ${s.confidence}`):""}</p>
      </div>
      <div>
        <div class="plan-read-subhead">Reason</div>
        <p>${Se(s.reason||"")}</p>
      </div>
    </div>
    ${s.candidateSentence?`
      <div class="plan-read-subhead">Candidate</div>
      <p>${Se(s.candidateSentence)}</p>
    `:""}
    ${(e=s.signals)!=null&&e.length?`
      <div class="plan-read-subhead">Buyer-impact signals</div>
      <div class="plan-chip-row">${s.signals.map(t=>dn(!0,t)).join("")}</div>
    `:""}
  `:'<p class="plan-muted">No anchor decision generated yet.</p>'}function db(s){var t,n;if(!s)return'<p class="plan-muted">No voiceover strategy generated yet.</p>';const e=s.zoneOrder||((t=s.zonePlan)==null?void 0:t.zones)||[];return`
    <div class="plan-info-grid">
      <div>
        <div class="plan-read-subhead">Facts position</div>
        <p>${Se(Ii(s.factsPosition||"not selected"))}</p>
      </div>
      <div>
        <div class="plan-read-subhead">Length guidance</div>
        <p>${Se(((n=s.lengthGuidance)==null?void 0:n.guidance)||"")}</p>
      </div>
    </div>
    ${e.length?`
      <div class="plan-read-subhead">Zone plan</div>
      <div class="plan-evidence-list">
        ${e.map((i,r)=>`
          <div class="plan-evidence-item">
            <div><b>${r+1}. ${Se(Ii(i.type||"zone"))}</b>: ${Se(i.purpose||"")}</div>
            <p>${Se(i.sentence||"")}</p>
            <div class="plan-evidence-meta">
              ${(i.visualHooks||[]).slice(0,3).map(o=>`<span>${Se(o)}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `:""}
  `}function Ad(s){var n,i,r,o,a,l;const e=(s==null?void 0:s.voiceoverStrategy)||((n=s==null?void 0:s.voiceoverInputs)==null?void 0:n.strategy)||s,t=(e==null?void 0:e.zoneOrder)||((r=(i=s==null?void 0:s.buyerRead)==null?void 0:i.zonePlan)==null?void 0:r.zones)||((a=(o=s==null?void 0:s.voiceoverInputs)==null?void 0:o.zonePlan)==null?void 0:a.zones)||((l=s==null?void 0:s.zonePlan)==null?void 0:l.zones)||[];return t.length?`
    <div class="plan-evidence-list">
      ${t.map((c,h)=>`
        <div class="plan-evidence-item">
          <div><b>${h+1}. ${Se(Ii(c.type||"beat"))}</b></div>
          <p>${Se(c.sentence||c.purpose||"")}</p>
          <div class="plan-evidence-meta">
            ${c.role?dn(null,c.role):""}
            ${(c.visualHooks||[]).slice(0,3).map(u=>`<span>${Se(u)}</span>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `:'<p class="plan-muted">No buyer beats generated yet.</p>'}function ls(s,e="View JSON"){return`<button class="plan-json-button" type="button" data-json-kind="${Se(s)}">${Se(e)}</button>`}function fb(s,e){var n,i,r,o,a,l,c,h;return s&&{observations:{title:"property_observations.json",file:(n=s.files)==null?void 0:n.propertyObservations,data:s.propertyObservations},intelligence:{title:"property_intelligence.json",file:(i=s.files)==null?void 0:i.propertyIntelligence,data:s.propertyIntelligence},read:{title:"property_read.json",file:(r=s.files)==null?void 0:r.propertyRead,data:s.propertyRead},voiceoverPlan:{title:"voiceover_plan.json",file:(o=s.files)==null?void 0:o.voiceoverPlan,data:s.voiceoverPlan},voiceoverStrategy:{title:"voiceover_strategy.json",file:(a=s.files)==null?void 0:a.voiceoverStrategy,data:s.voiceoverStrategy||((l=s.propertyIntelligence)==null?void 0:l.voiceoverStrategy)||((c=s.voiceoverPlan)==null?void 0:c.voiceoverStrategy)},voiceoverReview:{title:"voiceover_review.json",file:(h=s.files)==null?void 0:h.voiceoverReview,data:s.voiceoverReview}}[e]||null}function pb(s,e){var r,o;const t=fb(s,e);if(!(t!=null&&t.data))return;const n=document.querySelector(".plan-json-drawer");n&&n.remove();const i=document.createElement("aside");i.className="plan-json-drawer",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.innerHTML=`
    <div class="plan-json-head">
      <div>
        <span>JSON</span>
        <h3>${Se(t.title)}</h3>
        ${t.file?`<p>${Se(t.file)}</p>`:""}
      </div>
      <div class="plan-json-actions">
        ${t.file?`<a href="${Rr(t.file)}" target="_blank" rel="noreferrer">Open file</a>`:""}
        <button type="button" data-json-copy>Copy</button>
        <button type="button" data-json-close>Close</button>
      </div>
    </div>
    <pre class="plan-json-code"><code>${Se(JSON.stringify(t.data,null,2))}</code></pre>
  `,document.body.appendChild(i),(r=i.querySelector("[data-json-close]"))==null||r.addEventListener("click",()=>i.remove()),(o=i.querySelector("[data-json-copy]"))==null||o.addEventListener("click",async a=>{var l;await((l=navigator.clipboard)==null?void 0:l.writeText(JSON.stringify(t.data,null,2))),a.currentTarget.textContent="Copied",setTimeout(()=>{a.currentTarget.textContent="Copy"},1200)})}function Cr(s){var t,n;const e=((n=(t=s.propertyRead)==null?void 0:t.summary)==null?void 0:n.voiceovers)||"";return String(e).startsWith("blocked")}function gh(s){var e;return Cr(s)?{}:(e=s.voiceovers)!=null&&e.full?{full:s.voiceovers.full}:{}}function ba(s){var n;const e=((n=s.voiceoverReview)==null?void 0:n.status)||(s.hasVoiceovers?"generated":"missing");return{generated:"Generated",reviewed:"Reviewed",rewritten:"Rewritten",needs_revision:"Needs revision",needs_manual_review:"Needs manual review",missing:"Missing"}[e]||Ii(e)}const ci={full:"Full"};function Sa(s,e){const t=pr(s,e),n=String(t||"").match(/[\d,.]+/);return n?Number(n[0].replace(/,/g,"")):0}function Td(s){const e=pr(s,["total_area","gla","main_building_gla","main_building_total"]),t=Sa(s,["total_area","gla","main_building_gla","main_building_total"]),n=String(e||"").toLowerCase();return t?/\bm2\b|\bm²\b|square meters?|sq\.?\s*m/.test(n)?t:/\bft2\b|\bft²\b|square feet|sq\.?\s*ft/.test(n)?t*.092903:t:0}function mb(s){const e={one:1,two:2,three:3,four:4,five:5,six:6},t=String(s||"").toLowerCase();return e[t]||Number(t.replace(/,/g,""))||0}function Bf(s,e){const n=[s.factsText,...Object.values(gh(s))].filter(Boolean).join(" ").toLowerCase().match(new RegExp(`\\b(\\d+|one|two|three|four|five|six)\\s+${e}s?\\b`,"i"));return n?mb(n[1]):0}function Rd(s){return Sa(s,["bedrooms"])||Bf(s,"bedroom")}function Cd(s){return Sa(s,["bathrooms"])||Bf(s,"bathroom")}function Pd(s){var n,i;if((i=(n=s.propertyProfile)==null?void 0:n.floors)!=null&&i.length)return s.propertyProfile.floors.length;const e=Sa(s,["floor_count","floors"]);if(e)return e;const t=[s.factsText,...Object.values(gh(s))].filter(Boolean).join(" ").toLowerCase();return/\b(single-level|single level|one floor|one-floor)\b/.test(t)?1:/\b(ground floor|main floor|first floor)\b/.test(t)&&/\b(upper floor|top floor|second floor|upstairs)\b/.test(t)?2:0}function _h(s){return"full"}function gb(s){var m,g,x,v,y,P,S;const e=s.propertyProfile,t=s.facts||{},n=t.type||"Residential property",i=t.price||"Price not provided",r=t.total_area||t.gla||t.main_building_gla||t.main_building_total||"Area not provided",o=t.bedrooms||((m=e==null?void 0:e.derived)!=null&&m.bedrooms?`${e.derived.bedrooms} from profile`:Rd(s)?`${Rd(s)} inferred`:"Not provided"),a=t.bathrooms||((g=e==null?void 0:e.derived)!=null&&g.bathrooms?`${e.derived.bathrooms} from profile`:Cd(s)?`${Cd(s)} inferred`:"Not provided"),l=t.floor_count||((x=e==null?void 0:e.floors)!=null&&x.length?`${e.floors.length} from 3D source`:Pd(s)?`${Pd(s)} inferred`:"Not provided"),c=!!Xn(s),h=Td(s)>0&&Td(s)<=75,u=((v=s.counts)==null?void 0:v.videos)||0,f=[["Type",n],["Price",i],["Area",r],["Bedrooms",o],["Bathrooms",a],["Floors",l],["Rooms from 3D",(y=e==null?void 0:e.rooms)!=null&&y.length?`${e.rooms.length}`:"Not generated"],["Assets",`${s.counts.images} images / ${s.counts.panoramas} panoramas / ${u} videos`],["3D",c?"Linked":"Missing"],["Profile",s.hasProfile?"Saved in folder":"Missing"]];let d=((P=e==null?void 0:e.planning)==null?void 0:P.voFocus)||[],p=((S=e==null?void 0:e.planning)==null?void 0:S.visualPlan)||[];d.length||(d=[],h&&d.push("Compact property: lead with the clearest layout or outdoor-space advantage, then keep the VO concise."),Number(l)>1&&d.push("Multi-floor property: explain the floor split early so buyers understand where daily living and bedrooms sit."),d.length||d.push("Generate a property profile to use factsheet data, 3D room labels, and asset counts as the source of truth.")),p.length||(p=[],c&&p.push("Use 3D as an orientation clip near the beginning, with one render per floor."),u&&p.push("Use video clips for room detail after the layout has been established."),p.push("Show the rooms and transitions that explain how the home works day to day."));const _=((e==null?void 0:e.visualEvidence)||[]).filter(T=>(T==null?void 0:T.sentence)&&!/^listed\b/i.test(T.sentence)).slice(0,5);return{facts:f,focus:d,visualPlan:p,visualEvidence:_}}function _b(s){const e=s==null?void 0:s.linked_3d_floorplan;return e?`${(Array.isArray(e.floors)?e.floors.length:0)||0} floors with sunpath source`:"No linked 3D source"}function vb(s){var t,n;if(!Xn(s))return"No linked 3D source";const e=((n=(t=s.propertyProfile)==null?void 0:t.floors)==null?void 0:n.length)||0;if(e){const i=(s.propertyProfile.floors||[]).filter(r=>r.has_sunpath).length;return`${e} floor${e===1?"":"s"}${i?` / ${i} with sunpath`:""}`}return _b(s.sources)}function Xn(s){var e,t;return((t=(e=s.sources)==null?void 0:e.linked_3d_floorplan)==null?void 0:t.source_url)||""}function Id(s){if(!(s!=null&&s.sourceUrl))return"";try{const e=new URL(s.sourceUrl);return Number.isFinite(s.floor)&&(e.searchParams.set("g360Building","1"),e.searchParams.set("g360Floor",String(s.floor))),e.toString()}catch{return s.sourceUrl}}function zf(s){return s===0?"Ground floor":s===1?"Upper floor":`Floor ${Number(s)+1}`}function xb(s){const e=new Map;for(const t of s){if(t.mode!=="3d"||!Number.isFinite(t.floor))continue;const n=String(t.floor);e.has(n)||e.set(n,{floor:t.floor,shots:[]}),e.get(n).shots.push(t)}return[...e.values()].sort((t,n)=>t.floor-n.floor).map(t=>{const n=t.shots.find(a=>!a.roomHint)||t.shots.find(a=>/overview|facts|layout/i.test(a.subject||""))||t.shots[0],i=new Set,r=t.shots.filter(a=>{const l=String(a.roomHint||"").toLowerCase();return!l||i.has(l)?!1:(i.add(l),!0)}),o=Math.min(24,Math.max(8,t.shots.reduce((a,l)=>a+(Number(l.duration)||0),0)));return{id:`${n.section}-floor-${t.floor}`,kind:"floor",floor:t.floor,shot:{...n,id:`${n.section}-floor-${t.floor}`,subject:`${zf(t.floor)} 3D floor render`,roomHint:"",duration:o,trajectory:n.trajectory||"orbit"},sequence:r,lines:t.shots.map(a=>a.voLine)}})}function yb(s){return s.filter(e=>e.mode==="sun"&&Number.isFinite(e.floor)).map(e=>({id:`${e.id}-sun`,kind:"sun",floor:e.floor,shot:e,sequence:[e],lines:[e.voLine]}))}function gc(s){const e=Ye.query.trim().toLowerCase(),t=Ye.properties.filter(n=>n.name.toLowerCase().includes(e));s.summary.textContent=`${t.length} properties shown / ${Ye.properties.length} total`,s.list.innerHTML=t.map(n=>{var r;const i=[pr(n,["price"]),pr(n,["bedrooms"]),pr(n,["bathrooms"])].filter(Boolean);return`
      <article class="plan-property-card ${((r=Ye.selected)==null?void 0:r.name)===n.name?"active":""}" data-name="${Se(n.name)}">
        <div class="plan-property-title">${Se(n.name)}</div>
        <div class="plan-card-meta">
          ${i.map(o=>`<span class="plan-pill">${Se(o)}</span>`).join("")}
          <span class="plan-pill">${n.counts.images} images</span>
          <span class="plan-pill">${n.counts.videos} videos</span>
        </div>
        <div class="plan-card-meta">
          ${ni(n.hasVoiceovers&&!Cr(n),Cr(n)?"VO blocked":n.hasVoiceovers?ba(n):"No VO")}
          ${ni(n.hasProfile,n.hasProfile?"profile":"No profile")}
          ${ni(n.hasPropertyRead,n.hasPropertyRead?"read":"No read")}
          ${ni(n.hasPropertyObservations,n.hasPropertyObservations?"observed":"No observations")}
          ${ni(n.hasPropertyIntelligence,n.hasPropertyIntelligence?"intel":"No intel")}
          ${ni(n.hasAssetAnalysis,n.hasAssetAnalysis?"analysis":"No analysis")}
          ${ni(n.hasClipSelection,n.hasClipSelection?"clips":"No clips")}
          ${ni(!!Xn(n),Xn(n)?"3D":"No 3D")}
        </div>
      </article>
    `}).join("")}function Mb(s,e){var i,r,o,a;const t=Cr(e),n=[["Property read",((i=e.propertyRead)==null?void 0:i.status)||"Missing"],["Property observations",((r=e.propertyObservations)==null?void 0:r.status)||"Missing"],["Property intelligence",((o=e.propertyIntelligence)==null?void 0:o.status)||"Missing"],["Profile",e.hasProfile?"Ready":"Missing"],["Asset manifest",e.hasAssetManifest?"Ready":"Missing"],["Asset analysis",((a=e.assetAnalysisSummary)==null?void 0:a.status)||"Missing"],["Voiceovers",t?"Blocked":e.hasVoiceovers?"Ready":"Missing"],["VO review",ba(e)],["Clips",e.hasClipSelection?"Ready":"Missing"],["3D source",Xn(e)?"Linked":"Missing"],["Recommended VO",ci[_h()]]];s.status.innerHTML=n.map(([l,c])=>`
    <div class="plan-status-item">
      <span>${Se(l)}</span>
      <b>${Se(c)}</b>
    </div>
  `).join("")}function bb(s,e){var u,f,d,p,_,m,g,x,v,y,P,S,T,w,E,M,L,B,F,N,G,z,$,W,oe;const t=gb(e),n=e.propertyRead,i=e.propertyObservations||(n==null?void 0:n.propertyObservations),r=e.propertyIntelligence||(n==null?void 0:n.propertyIntelligence),o=e.voiceoverStrategy||(r==null?void 0:r.voiceoverStrategy)||((u=r==null?void 0:r.voiceoverInputs)==null?void 0:u.strategy),a=e.voiceoverPlan||(n==null?void 0:n.voiceoverPlan),l=(n==null?void 0:n.status)==="ready",c=n&&!l,h=(n==null?void 0:n.blockers)||((f=n==null?void 0:n.reasoning)==null?void 0:f.needsReview)||["Review the visual assets before generating buyer-facing reasoning."];if(s.recommendation&&(s.recommendation.textContent=n!=null&&n.status?`Status: ${n.status.replace(/_/g," ")}`:`Recommended: ${ci[_h()]}`),c){s.read.innerHTML=`
      <div class="plan-read-block plan-read-wide">
        <h5>Read not generated yet</h5>
        <p class="plan-muted">The app has collected facts, assets, and 3D data, but buyer-facing reasoning is blocked until visual evidence has been reviewed.</p>
        <dl class="plan-read-facts">
          <dt>Status</dt><dd>${Se(n.status||"")}</dd>
          <dt>3D</dt><dd>${Se(((d=n.summary)==null?void 0:d.threeDSource)||"")}</dd>
          <dt>Voiceovers</dt><dd>${Se(((p=n.summary)==null?void 0:p.voiceovers)||"")}</dd>
        </dl>
      </div>
      <div class="plan-read-block">
        <h5>Collected inputs</h5>
        <dl class="plan-read-facts">
          ${t.facts.map(([ae,pe])=>`<dt>${Se(ae)}</dt><dd>${Se(pe)}</dd>`).join("")}
        </dl>
      </div>
      <div class="plan-read-block">
        <h5>Next step</h5>
        <ul>${h.map(ae=>`<li>${Se(ae)}</li>`).join("")}</ul>
      </div>
    `;return}s.read.innerHTML=`
    ${n?`
      <div class="plan-read-block plan-read-wide">
        <div class="plan-block-head">
          <h5>Generated read</h5>
          ${ls("read")}
        </div>
        <dl class="plan-read-facts">
          <dt>Status</dt><dd>${Se(n.status||"")}</dd>
          <dt>3D</dt><dd>${Se(((_=n.summary)==null?void 0:_.threeDSource)||"")}</dd>
          <dt>Voiceovers</dt><dd>${Se(((m=n.summary)==null?void 0:m.voiceovers)||"")}</dd>
        </dl>
      </div>
    `:""}
    <div class="plan-read-block">
      <h5>Facts</h5>
      <dl class="plan-read-facts">
        ${t.facts.map(([ae,pe])=>`<dt>${Se(ae)}</dt><dd>${Se(pe)}</dd>`).join("")}
      </dl>
    </div>
    ${i?`
      <div class="plan-read-block plan-read-wide">
        <div class="plan-block-head">
          <h5>Property observations</h5>
          <div class="plan-block-actions">
            ${dn(i.status==="ready",i.status||"")}
            ${ls("observations")}
          </div>
        </div>
        ${hb(i.sourceInventory||{})}
        ${(x=(g=i.observations)==null?void 0:g.summary)!=null&&x.length?`
          <div class="plan-read-subhead">Summary</div>
          ${Ro(i.observations.summary,4)}
        `:(v=i.layout)!=null&&v.summary?`<p class="plan-muted">${Se(i.layout.summary)}</p>`:""}
        <div class="plan-info-grid">
          <div>
            <div class="plan-read-subhead">Spaces</div>
            <p>${Se(cb(i.spaces).join(", ")||"Not generated")}</p>
          </div>
          <div>
            <div class="plan-read-subhead">Layout / 3D</div>
            <p>${Se([(y=i.layout)!=null&&y.floorCount?`${i.layout.floorCount} floor${i.layout.floorCount===1?"":"s"}`:"",(P=i.threeDModel)!=null&&P.available?`${((S=i.threeDModel.rooms)==null?void 0:S.length)||0} rooms from 3D`:"No 3D",(T=i.sunpath)!=null&&T.available?"sunpath available":""].filter(Boolean).join(" / ")||"Not generated")}</p>
          </div>
        </div>
        <div class="plan-read-subhead">Key observations</div>
        ${lb(((w=i.observations)==null?void 0:w.keyObservations)||i.assetObservations,1/0)}
        ${(E=i.uncertainties)!=null&&E.length?`
          <div class="plan-read-subhead">Uncertainties</div>
          ${Ro(i.uncertainties,5)}
        `:""}
      </div>
    `:""}
    ${r?`
      <div class="plan-read-block plan-read-wide">
        <div class="plan-block-head">
          <h5>Property intelligence</h5>
          <div class="plan-block-actions">
            ${dn(r.status==="ready",r.status||"")}
            ${ls("intelligence")}
          </div>
        </div>
        <div class="plan-info-grid">
          <div>
            <div class="plan-read-subhead">USP</div>
            <p>${Se(((M=r.usp)==null?void 0:M.sentence)||((B=(L=r.buyerRead)==null?void 0:L.usp)==null?void 0:B.sentence)||"No USP selected")}</p>
          </div>
          <div>
            <div class="plan-read-subhead">Recommended VO</div>
            <p>${Se(ci[(F=r.voiceoverInputs)==null?void 0:F.recommendedVoiceover]||((N=r.voiceoverInputs)==null?void 0:N.recommendedVoiceover)||"Not selected")}</p>
          </div>
        </div>
        ${bl(wd(r))}
        <div class="plan-read-subhead">Selected buyer points</div>
        ${Ad(r)}
        <div class="plan-read-subhead">Quality gate</div>
        <div class="plan-chip-row">
          ${Object.entries(((G=r.qualityGate)==null?void 0:G.checked)||{}).map(([ae,pe])=>dn(!!pe,`${Ii(ae)}: ${pe}`)).join("")}
        </div>
        ${($=(z=r.qualityGate)==null?void 0:z.blockers)!=null&&$.length?`
          <div class="plan-read-subhead">Blockers</div>
          ${Ro(r.qualityGate.blockers,5)}
        `:""}
        ${(oe=(W=r.qualityGate)==null?void 0:W.warnings)!=null&&oe.length?`
          <div class="plan-read-subhead">Warnings</div>
          ${Ro(r.qualityGate.warnings,5)}
        `:""}
      </div>
    `:""}
    ${o?`
      <div class="plan-read-block plan-read-wide">
        <div class="plan-block-head">
          <h5>Voiceover strategy</h5>
          ${ls("voiceoverStrategy")}
        </div>
        ${bl(o.opening)}
        ${db(o)}
      </div>
    `:""}
    ${a?`
      <div class="plan-read-block plan-read-wide">
        <div class="plan-block-head">
          <h5>Voiceover plan</h5>
          ${ls("voiceoverPlan")}
        </div>
        <div class="plan-read-subhead">Recommended</div>
        <p>${Se(ci[a.recommendedVoiceover]||a.recommendedVoiceover||"")}</p>
        ${a.recommendationReason?`<p class="plan-muted">${Se(a.recommendationReason)}</p>`:""}
        ${bl(wd(a))}
        <div class="plan-read-subhead">Talking points</div>
        ${Ad(a.voiceoverStrategy||o||r)}
        ${a.validation?`
          <div class="plan-read-subhead">Rule check</div>
          ${ub(a.validation)}
        `:""}
      </div>
    `:""}
    ${e.voiceoverReview?`
      <div class="plan-read-block plan-read-wide">
        <div class="plan-block-head">
          <h5>Voiceover review</h5>
          <div class="plan-block-actions">
            ${dn(e.voiceoverReview.status==="reviewed"||e.voiceoverReview.status==="rewritten",ba(e))}
            ${ls("voiceoverReview")}
          </div>
        </div>
        <p>${Se(e.voiceoverReview.summary||"")}</p>
        ${e.voiceoverReview.rewriteCount?`<p class="plan-muted">Rewritten versions: ${Se(e.voiceoverReview.rewriteCount)}</p>`:""}
      </div>
    `:""}
  `}function Sb(s,e){const t=Object.entries(e.facts||{});s.facts.innerHTML=t.length?t.map(([n,i])=>`<dt>${Se(Ii(n))}</dt><dd>${Se(i)}</dd>`).join(""):"<dt>Status</dt><dd>No factsheet found</dd>"}function Eb(s,e){const t=[["Images",e.counts.images],["Panoramas",e.counts.panoramas],["Floorplans",e.counts.floorplans],["Videos",e.counts.videos]],n=e.assetAnalysisSummary,i=(n==null?void 0:n.contactSheets)||[],r=n==null?void 0:n.autoVisualReview;s.assets.innerHTML=t.map(([o,a])=>`
    <div class="plan-asset">
      <b>${a}</b>
      <span>${Se(o)}</span>
    </div>
  `).join("")+(n?`
    <div class="plan-asset-analysis">
      <b>Asset analysis</b>
      <span>${Se(n.status||"unknown")} / ${n.visualEvidenceCount||0} visual evidence item${n.visualEvidenceCount===1?"":"s"}</span>
      ${r?`<span>${Se(r.status||"")}${r.reason?`: ${Se(r.reason)}`:""}</span>`:""}
      ${i.length?`
        <div class="plan-sheet-links">
          ${i.map(o=>{const a=`${e.path}\\${o.path.replace(/\//g,"\\")}`;return`<a href="${Rr(a)}" target="_blank">${Se(o.type)} sheet</a>`}).join("")}
        </div>
      `:""}
      ${n.reviewBrief?`<a class="plan-brief-link" href="${Rr(`${e.path}\\${n.reviewBrief.replace(/\//g,"\\")}`)}" target="_blank">Deep review brief</a>`:""}
    </div>
  `:"")}function wb(s,e){var i,r;const t=(i=e.sources)==null?void 0:i.linked_3d_floorplan,n=((r=e.propertyProfile)==null?void 0:r.floors)||[];if(s.sourceStatus.textContent=vb(e),!t){s.sources.innerHTML='<div class="plan-muted">Add 3dmodel.txt or property_sources.json to connect 3D floorplan and sunpath data.</div>';return}s.sources.innerHTML=`
    <div class="plan-source-main">
      <div><span class="plan-muted">Project</span><b>${Se(t.project_id||"")}</b></div>
      <div><span class="plan-muted">Source</span><b>${Se(t.source_url||"")}</b></div>
    </div>
    <div class="plan-floor-list">
      ${(n.length?n:t.floors||[]).map(o=>`
        <div class="plan-floor-row">
          <span>${Se(o.label||`Floor ${Number(o.floor||0)+1}`)}</span>
          <span>${o.floorplan_json?"3D JSON":"No 3D JSON"}</span>
          <span>${o.has_sunpath||o.sun_path?"Sunpath":"No sunpath"}</span>
        </div>
      `).join("")}
    </div>
  `}function Ab(s,e){var a,l,c,h,u;const t=Cr(e),n=gh(e),i=Object.keys(n).filter(f=>n[f]),r=_h();if(t){s.voStatus.textContent="Blocked: needs confirmed visual evidence",s.voTabs.forEach(f=>{const d=f.dataset.planVo;f.classList.toggle("active",!1),f.classList.toggle("recommended",d===r),f.title="Voiceovers are blocked until the property read has confirmed visual evidence.",f.disabled=!0,f.textContent=ci[d]||d}),s.voText.textContent="Run the property read process after visual evidence has been reviewed. Existing VO versions are kept below as backups/history, but they are not treated as current output.",Ld(s,e);return}Ye.activeVoProperty!==e.name&&!Ye.manualVo&&(Ye.activeVo=i.includes("full")?"full":i[0]||r,Ye.activeVoProperty=e.name),i.includes(Ye.activeVo)||(Ye.activeVo=i.includes("full")?"full":i[0]||r);const o=((l=(a=e.voiceoverPlan)==null?void 0:a.validation)==null?void 0:l[Ye.activeVo])||((u=(h=(c=e.propertyRead)==null?void 0:c.voiceoverPlan)==null?void 0:h.validation)==null?void 0:u[Ye.activeVo]);s.voStatus.textContent=i.length?`Auto selected: ${ci[Ye.activeVo]||Ye.activeVo} / ${ba(e)}${o?` / Rules: ${o.status}`:""}`:"No voiceovers.txt",s.voTabs.forEach(f=>{const d=f.dataset.planVo;f.classList.toggle("active",d===Ye.activeVo),f.classList.toggle("recommended",d===r),f.title=d===r?"Current generated voiceover":"",f.disabled=!n[d],f.textContent=ci[d]||d}),s.voText.textContent=n[Ye.activeVo]||"No text available for this voiceover type.",Ld(s,e)}function Tb(s){const e=new Date(s);return Number.isNaN(e.getTime())?"":e.toLocaleString([],{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Ld(s,e){const t=e.voiceoverBackups||[];if(s.voBackups){if(!t.length){s.voBackups.innerHTML="";return}s.voBackups.innerHTML=`
    <div class="plan-vo-backups-head">VO versions</div>
    ${t.slice(0,8).map(n=>`
      <div class="plan-vo-backup-row">
        <a href="${Rr(n.path)}" target="_blank">${Se(Tb(n.updatedAt)||n.name)}</a>
        <button type="button" data-restore-vo="${Se(n.name)}">Restore</button>
      </div>
    `).join("")}
  `,s.voBackups.querySelectorAll("[data-restore-vo]").forEach(n=>{n.addEventListener("click",async()=>{if(Ye.selected){n.disabled=!0,n.textContent="Restoring...";try{const i=n.dataset.restoreVo,r=await Bo(`/api/properties/${encodeURIComponent(Ye.selected.name)}/voiceovers-restore?backup=${encodeURIComponent(i)}`,{method:"POST"});await zo(s,r.property),s.summary.textContent=`Restored VO from ${i}`}catch(i){s.summary.textContent=i.message,n.disabled=!1,n.textContent="Restore"}}})})}}async function Rb(s,e){if(!e.files.clipSelection){s.clipStatus.textContent="No clip_selection.json",s.clips.innerHTML='<div class="plan-muted">Clip selection has not been generated for this property yet.</div>';return}try{const n=await(await fetch(Rr(e.files.clipSelection))).json(),i=Ye.activeVo==="reel"?"reel_vo_clip_plan":"buyer_vo_clip_plan",r=n[i]||n.buyer_vo_clip_plan||n.reel_vo_clip_plan||[];s.clipStatus.textContent=`${r.length} planned segments`,s.clips.innerHTML=r.slice(0,10).map(o=>{const a=o.selected_asset?o.selected_asset.split(/[\\/]/).pop():"";return`
        <div class="plan-clip-row">
          <div class="plan-clip-type">${Se(o.selected_visual_type||"visual")}</div>
          <div class="plan-clip-line">${Se(o.vo_line||"")}</div>
          <div class="plan-clip-asset">${Se(a)}<span>${Se(o.reason||"")}</span></div>
        </div>
      `}).join("")}catch(t){s.clipStatus.textContent="Could not read clip selection",s.clips.textContent=t.message}}function Cb(s,e){var a;const n=(((a=e.modelRenderPlan)==null?void 0:a.shots)||[]).filter(l=>l.section===Ye.activeVo),i=xb(n),r=yb(n),o=[...i,...r];if(s.modelStatus.textContent=o.length?`${i.length} floor render${i.length===1?"":"s"}${r.length?` + ${r.length} sunpath render${r.length===1?"":"s"}`:""} for this VO`:"No 3D floor renders suggested",!o.length){s.modelRenders.innerHTML='<div class="plan-muted">Add linked 3D data and VO lines with layout, light, or floor relationships.</div>';return}s.modelRenders.innerHTML=o.map(l=>`
    <div class="plan-model-row">
      <div class="plan-model-meta">
        <b>${Se(l.shot.subject)}</b>
        <span>${Se(l.shot.section)} · ${Se(l.shot.mode)} · ${zf(l.floor)} · ${l.shot.duration}s · ${l.sequence.length} room cue${l.sequence.length===1?"":"s"}</span>
      </div>
      <div class="plan-model-line">${l.lines.map(c=>Se(c)).join("<br>")}</div>
      <div class="plan-model-actions">
        <button type="button" data-model-render="${Se(l.id)}">${l.kind==="sun"?"Open Sunpath Render":"Open Floor Render"}</button>
      </div>
      <div class="plan-model-reason">${l.kind==="sun"?"Separate light simulation render.":l.sequence.length?"Starts with the whole floor, then highlights rooms mentioned on this floor.":"Whole-floor orientation render."}</div>
    </div>
  `).join(""),s.modelRenders.querySelectorAll("[data-model-render]").forEach(l=>{l.addEventListener("click",()=>{var h;const c=o.find(u=>u.id===l.dataset.modelRender);c&&(localStorage.setItem(ab,JSON.stringify({sourceUrl:Id(c.shot),shot:c.shot,sequence:c.sequence,createdAt:Date.now()})),(h=s.loadSource)==null||h.call(s,Id(c.shot)))})})}async function zo(s,e){Ye.selected=e,s.empty.hidden=!0,s.property.hidden=!1,s.title.textContent=e.name,s.path.textContent=e.path,s.open3d.disabled=!Xn(e),s.process.textContent=e.hasPropertyRead?"Regenerate property read":"Generate property read",s.process.title="Scan assets, update the profile/read, and generate voiceovers when confirmed visual evidence exists.",Mb(s,e),bb(s,e),Sb(s,e),Eb(s,e),wb(s,e),Ab(s,e),await Rb(s,e),Cb(s,e),gc(s)}function Pb(s){var t;const e=decodeURIComponent(location.hash.slice(1));return e&&((t=s.find(n=>Xn(n)&&e.startsWith(Xn(n))))==null?void 0:t.name)||null}function Ib({loadSource:s}={}){const e=_t("#plan-panel");if(!e)return null;const t={root:e,search:_t("#plan-search"),refresh:_t("#plan-refresh"),summary:_t("#plan-summary"),list:_t("#plan-list"),empty:_t("#plan-empty"),property:_t("#plan-property"),title:_t("#plan-title"),path:_t("#plan-path"),status:_t("#plan-status"),read:_t("#plan-read"),recommendation:_t("#plan-recommendation"),facts:_t("#plan-facts"),assets:_t("#plan-assets"),sources:_t("#plan-sources"),sourceStatus:_t("#plan-source-status"),voStatus:_t("#plan-vo-status"),voText:_t("#plan-vo-text"),voBackups:_t("#plan-vo-backups"),voTabs:Array.from(document.querySelectorAll("[data-plan-vo]")),clips:_t("#plan-clips"),clipStatus:_t("#plan-clip-status"),modelRenders:_t("#plan-model-renders"),modelStatus:_t("#plan-model-status"),open3d:_t("#plan-open-3d"),process:_t("#plan-process"),loadSource:s};async function n(){var a,l;t.summary.textContent="Loading properties...";const r=await Bo("/api/properties");Ye.properties=r.properties,gc(t);const o=((a=Ye.selected)==null?void 0:a.name)||Pb(Ye.properties)||((l=Ye.properties[0])==null?void 0:l.name);o&&await i(o)}async function i(r){var a;((a=Ye.selected)==null?void 0:a.name)!==r&&(Ye.manualVo=!1,Ye.activeVoProperty=null);const o=await Bo(`/api/properties/${encodeURIComponent(r)}`);await zo(t,o)}return t.list.addEventListener("click",r=>{const o=r.target.closest(".plan-property-card");o&&i(o.dataset.name).catch(a=>{t.summary.textContent=a.message})}),t.root.addEventListener("click",r=>{const o=r.target.closest("[data-json-kind]");o&&pb(Ye.selected,o.dataset.jsonKind)}),document.addEventListener("keydown",r=>{var o;r.key==="Escape"&&((o=document.querySelector(".plan-json-drawer"))==null||o.remove())}),t.search.addEventListener("input",r=>{Ye.query=r.target.value,gc(t)}),t.refresh.addEventListener("click",()=>n().catch(r=>{t.summary.textContent=r.message})),t.voTabs.forEach(r=>{r.addEventListener("click",()=>{var o;Ye.activeVo=r.dataset.planVo,Ye.manualVo=!0,Ye.activeVoProperty=((o=Ye.selected)==null?void 0:o.name)||null,Ye.selected&&zo(t,Ye.selected)})}),t.open3d.addEventListener("click",()=>{const r=Ye.selected&&Xn(Ye.selected);r&&s&&s(r)}),t.process.addEventListener("click",async()=>{var r,o,a,l;if(Ye.selected){t.process.disabled=!0,t.process.textContent="Processing...";try{const c=await Bo(`/api/properties/${encodeURIComponent(Ye.selected.name)}/process`,{method:"POST"});await zo(t,c.property);const h=((r=c.property.propertyRead)==null?void 0:r.status)||"processed",u=((a=(o=c.property.propertyRead)==null?void 0:o.summary)==null?void 0:a.voiceovers)||"";t.summary.textContent=`Property read ${h.replace(/_/g," ")}${u?` / VO ${u.replace(/_/g," ")}`:""}`}catch(c){t.summary.textContent=c.message}finally{t.process.disabled=!1,t.process.textContent=(l=Ye.selected)!=null&&l.hasPropertyRead?"Regenerate property read":"Generate property read"}}}),{enter(){e.hidden=!1,Ye.properties.length||n().catch(r=>{t.summary.textContent=r.message})},leave(){e.hidden=!0},reload:n}}new URLSearchParams(location.search).has("peeks")&&(document.documentElement.classList.add("peeks-embed"),document.body.classList.add("peeks-embed"));const _c=[["Project 1 (405cfed921bc45449d1162e4db09ebc2)","/data/405cfed921bc45449d1162e4db09ebc2/floor_plan_3d_base_1_0.json"],["Project 1 w/Furniture","/data/405cfed921bc45449d1162e4db09ebc2/floor_plan_project1_furniture.json"],["Project 2 (85e2a194465e4ee59703d591cda2d000)","/data/85e2a194465e4ee59703d591cda2d000/floor_plan_3d_base_1_1.json"],["Project 3","/data/93196bb2e389415cba95fd7ebaf98731/floor_plan_3d_base_1_0.json"],["Blender floorplan","/data/405cfed921bc45449d1162e4db09ebc2/floor_plan_blender_edited.json"]],Ai=s=>s.replace(/^https?:\/\/3dfloorplans\.giraffe360\.com/,"/api/floorplan").replace(/^https?:\/\/my\.giraffe360\.com/,"/api/my-giraffe"),kf=s=>/^https?:\/\/my\.giraffe360\.com\/3dflp\//.test(s)||/^\/api\/my-giraffe\/3dflp\//.test(s),Vf="g360_floorplan_saved_properties_v1",Sl="g360_pending_render_preset_v1";let vh=[];function An(s){try{const e=new URL(s);return e.searchParams.delete("g360Building"),e.searchParams.delete("g360Floor"),e.hash="",e.toString()}catch{return String(s||"").trim()}}function Lb(s){const e=An(s),t=vh.find(([,n])=>An(n)===e);if(t!=null&&t[0])return t[0];try{const n=new URL(s),i=n.pathname.split("/").filter(Boolean).pop();return i?`Property ${i}`:n.hostname}catch{return"Saved property"}}function Gf(){try{const s=JSON.parse(localStorage.getItem(Vf)||"[]");return Array.isArray(s)?s.filter(e=>(e==null?void 0:e.url)&&(e==null?void 0:e.label)):[]}catch{return[]}}function Db(s){localStorage.setItem(Vf,JSON.stringify(s.slice(0,50)))}function Hf(s,e=Lb(s)){if(!kf(s))return;const t=An(s),n=Gf().filter(i=>An(i.url)!==t);Db([{label:e,url:t},...n])}const Wf="/data/405cfed921bc45449d1162e4db09ebc2/floor_plan_blender_edited.json",ko=(localStorage.getItem("g360_bridge_url")||"http://localhost:7531").replace(/\/$/,""),St=decodeURIComponent(location.hash.slice(1))||Wf,hs=Ai(St),mr=Of(St),xh=St===Wf;Hf(St);const Hn=document.getElementById("canvas"),Ea=document.getElementById("viewport"),ye=new QM(Hn,Ea);let Ds=[],Mn={},El={},zt=null;const gr=new dM,bs=new K,$f=document.getElementById("room-info"),Nb=document.getElementById("room-name"),Ub=document.getElementById("room-area"),Ob='<svg viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="el_door_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19"><rect y="0.820312" width="18" height="18" fill="#D9D9D9"/></mask><g mask="url(#el_door_mask)"><path d="M2.62305 16.1953V15.0703H4.12305V4.80112C4.12305 4.42225 4.2543 4.10156 4.5168 3.83906C4.7793 3.57656 5.09998 3.44531 5.47886 3.44531H12.5172C12.8961 3.44531 13.2168 3.57656 13.4793 3.83906C13.7418 4.10156 13.873 4.42225 13.873 4.80112V15.0703H15.373V16.1953H2.62305ZM12.748 15.0703V4.80112C12.748 4.74337 12.724 4.6905 12.6759 4.6425C12.6279 4.59437 12.575 4.57031 12.5172 4.57031H5.47886C5.42111 4.57031 5.36823 4.59437 5.32023 4.6425C5.27211 4.6905 5.24805 4.74337 5.24805 4.80112V15.0703H12.748ZM10.5847 10.4837C10.7683 10.4837 10.9247 10.4191 11.054 10.2898C11.1834 10.1604 11.248 10.0039 11.248 9.82031C11.248 9.63669 11.1834 9.48019 11.054 9.35081C10.9247 9.22156 10.7683 9.15694 10.5847 9.15694C10.4009 9.15694 10.2444 9.22156 10.1152 9.35081C9.9858 9.48019 9.92111 9.63669 9.92111 9.82031C9.92111 10.0039 9.9858 10.1604 10.1152 10.2898C10.2444 10.4191 10.4009 10.4837 10.5847 10.4837Z" fill="currentColor"/></g></svg>',Dd=document.getElementById("entrance-labels");let ra=[];const Fb=90,wl=new R,Al=new R,Co=new R;function Bb(s){var o,a,l,c;Dd.innerHTML="",ra=[];const e=(o=s.children)==null?void 0:o.find(h=>h.name==="entrances");if(!e)return;s.updateMatrixWorld(!0);let t=0,n=0;const i=(a=s.children)==null?void 0:a.find(h=>h.name==="floors");if(i){const h=new Tt().setFromObject(i);h.isEmpty()||(t=h.max.y)}const r=(l=s.children)==null?void 0:l.find(h=>h.name==="ceilings");if(r){const h=new Tt().setFromObject(r);h.isEmpty()||(n=h.max.y)}n<=t&&(n=t+(((c=ye.modelSize)==null?void 0:c.y)||300)),e.children.forEach(h=>{h.updateWorldMatrix(!0,!1);const u=new R().setFromMatrixPosition(h.matrixWorld),f=new R(u.x,0,u.z);f.lengthSq()>1e-6&&f.normalize();const d=u.clone().addScaledVector(f,Fb);d.y=t;const p=d.clone();p.y=n;const _=document.createElement("div");_.className="entrance-label el-side-right",_.title="Entrance",_.innerHTML=`<div class="el-circle">${Ob}</div><div class="el-text">Entrance</div>`,Dd.appendChild(_),ra.push({el:_,floorPos:d,ceilPos:p,outward:f})})}const zb=["el-side-left","el-side-right","el-side-top","el-side-bottom"];function kb(){if(!ra.length)return;const s=ye.safeFrameRect(),e=ye.camera;e.updateMatrixWorld();const t=ye.useOrtho;for(const n of ra){wl.copy(n.floorPos).project(e),Al.copy(n.floorPos).addScaledVector(n.outward,100).project(e);const i=Al.x-wl.x,r=-(Al.y-wl.y),o=!t&&r<0;Co.copy(o?n.ceilPos:n.floorPos).project(e);const a=Co.z>1;if(n.el.classList.toggle("el-hidden",a),a)continue;const l=s.x+(Co.x*.5+.5)*s.w,c=s.y+(-Co.y*.5+.5)*s.h;n.el.style.transform=`translate(${l}px, ${c}px) translate(-50%, -50%)`;let h;t&&Math.abs(r)>Math.abs(i)?h=r>0?"el-side-bottom":"el-side-top":h=i>=0?"el-side-right":"el-side-left",n.el.classList.contains(h)||(n.el.classList.remove(...zb),n.el.classList.add(h))}}function yh(s,e,t={}){if(zt===s&&t.toggle!==!1){Hs();return}zt=s,ye.selectedRoomId=s,ye.highlightRoom(Mn[s]||[],s),ye.wallHidingEnabled=!0,Nb.textContent=e.label,Ub.textContent=e.area,$f.classList.remove("hidden"),ep(e)}function Hs(){zt=null,ye.selectedRoomId=null,ye.clearRoomHighlight(),ye.wallHidingEnabled=!1,$f.classList.add("hidden"),ep(null)}let ar=null;Hn.addEventListener("pointerdown",s=>{ar={x:s.clientX,y:s.clientY}});Hn.addEventListener("click",s=>{if(!Ds.length)return;if(ar){const n=Math.hypot(s.clientX-ar.x,s.clientY-ar.y);if(ar=null,n>5)return}const e=Hn.getBoundingClientRect();if(bs.x=(s.clientX-e.left)/e.width*2-1,bs.y=-((s.clientY-e.top)/e.height)*2+1,gr.setFromCamera(bs,ye.camera),ye.debugMode){const n=gr.intersectObjects(ye.meshes,!1);n.length?US(n[0].object,n[0]):Ph();return}const t=gr.intersectObjects(Ds);if(t.length){const n=t[0].object,i=Lr(n.userData.room_ids);i&&yh(i.roomId,i)}else Hs()});Hn.addEventListener("mousemove",s=>{if(!Ds.length||zt)return;const e=Hn.getBoundingClientRect();bs.x=(s.clientX-e.left)/e.width*2-1,bs.y=-((s.clientY-e.top)/e.height)*2+1,gr.setFromCamera(bs,ye.camera);const t=gr.intersectObjects(Ds);Hn.style.cursor=t.length?"pointer":""});Hn.addEventListener("mouseleave",()=>{zt||(Hn.style.cursor="")});document.getElementById("room-close").addEventListener("click",Hs);function vc(){location.reload()}function Ns(s){s&&(Hf(s),location.hash=encodeURIComponent(s.trim()),vc())}const Mh=document.getElementById("g-project-select"),Vb=document.getElementById("g-project-btn"),Pr=document.getElementById("g-project-list"),Gb=document.getElementById("g-project-btn-label");function bh(s){["g-mode-select","g-project-select","g-room-select"].forEach(e=>{if(e===s)return;const t=document.getElementById(e);if(!t)return;t.classList.remove("open");const n=t.querySelector("ul");n&&(n.hidden=!0)})}function Xf(){Pr.innerHTML="";const s=hs;let e=null;const t=Gf(),n=new Set;[...vh,...t.map(r=>[r.label,r.url]),..._c].filter(([,r])=>{const o=An(r);return n.has(o)?!1:(n.add(o),!0)}).forEach(([r,o])=>{const a=document.createElement("li");(Ai(An(o))===Ai(An(St))||Ai(o)===s)&&(a.classList.add("active"),e=r);const c=document.createElement("span");c.textContent=r,a.appendChild(c),a.addEventListener("click",()=>{Ns(o),Sh()}),Pr.appendChild(a)}),Gb.textContent=e||"Custom URL"}async function Hb(){try{const s=await fetch("/api/properties");if(!s.ok)return;vh=((await s.json()).properties||[]).map(t=>{var n,i;return[t.name,(i=(n=t.sources)==null?void 0:n.linked_3d_floorplan)==null?void 0:i.source_url]}).filter(([,t])=>t),Xf()}catch{}}function Wb(){bh("g-project-select"),Mh.classList.add("open"),Pr.hidden=!1}function Sh(){Mh.classList.remove("open"),Pr.hidden=!0}Vb.addEventListener("click",s=>{s.stopPropagation(),Pr.hidden?Wb():Sh()});document.addEventListener("click",s=>{Mh.contains(s.target)||Sh()});Xf();Hb();const Po=document.getElementById("g-mode-select");if(Po){const s=document.getElementById("g-mode-btn"),e=document.getElementById("g-mode-list"),t=()=>{Po.classList.remove("open"),e.hidden=!0},n=()=>{bh("g-mode-select"),Po.classList.add("open"),e.hidden=!1};s.addEventListener("click",i=>{i.stopPropagation(),e.hidden?n():t()}),e.querySelectorAll("li:not(.disabled)").forEach(i=>i.addEventListener("click",t)),document.addEventListener("click",i=>{Po.contains(i.target)||t()})}const xc=document.getElementById("fp-url");document.getElementById("fp-load").addEventListener("click",()=>Ns(xc.value));xc.addEventListener("keydown",s=>{s.key==="Enter"&&Ns(xc.value)});let Ss=null,Gn=null;const xn=document.getElementById("fp-export");xn.disabled=!0;function $b(){const e=(decodeURIComponent(location.hash.slice(1))||St).match(/\/([0-9a-f]{6,})\/([^/]+)\.json$/i);return e?`${e[1].slice(0,8)}-${e[2]}.glb`:"floorplan.glb"}xn.addEventListener("click",()=>{if(!Ss)return;xn.disabled=!0;const s=xn.textContent;xn.textContent="Exporting…";const e=new sa().parse(Ss);new Ma().parse(e,t=>{const n=new Blob([t],{type:"model/gltf-binary"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=$b(),document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i),xn.textContent=s,xn.disabled=!1},t=>{console.error("GLB export failed:",t),xn.textContent="Export failed",setTimeout(()=>{xn.textContent=s,xn.disabled=!1},1500)},{binary:!0})});let Ir={};function Xb(s){var i,r;const e={},t=[];["top_walls","bot_walls"].forEach(o=>{var a,l,c;(c=(l=(a=s.children)==null?void 0:a.find(h=>h.name===o))==null?void 0:l.children)==null||c.forEach(h=>{var d,p;const u=(d=h.userData)==null?void 0:d.room_ids,f=Object.keys(((p=h.userData)==null?void 0:p.roomDirections)||{});u!=null&&u.length&&f.length&&t.push({rids:u,keys:f})})}),t.forEach(o=>o.keys.forEach(a=>{a.startsWith("singleRoom-")?e[a.slice(11)]=a:a.startsWith("subRoom-")&&(e[a.slice(8).replace(/-SUB\d+$/,"")]=a)}));for(let o=0;o<25;o++){let a=!1;if(t.forEach(l=>{const c=l.rids.filter(u=>!e[u]);if(!c.length)return;const h=l.keys.filter(u=>!l.rids.some(f=>e[f]===u));h.length===1&&c.forEach(u=>{e[u]=h[0],a=!0})}),!a)break}const n=(i=s.children)==null?void 0:i.find(o=>o.name==="floors");return(r=n==null?void 0:n.children)==null||r.forEach(o=>{var c;if(!o.isMesh)return;const a=((c=o.userData)==null?void 0:c.room_ids)||[];if(!a.length)return;let l=null;for(const h of a)if(e[h]){l=e[h];break}if(!l)for(const h of a){const u=h.replace(/-SUB\d+$/,"");if(u!==h&&e[u]){l=e[u];break}}l||(l=`floor:${a[0]}`),a.forEach(h=>{e[h]||(e[h]=l)})}),e}const qb=s=>{const e=s.match(/mergedRoom-(\d+)/);return e?`Room ${+e[1]+1}`:"Room"};let _r=null,Es=null;function Yb(){Es=new Map,Object.entries(Nf||{}).forEach(([s,e])=>{const t=Ir[s];if(!t)return;const n=Es.get(t);(!n||n.label==="Room"&&e.label!=="Room")&&Es.set(t,{label:e.label,area:e.area})})}function Lr(s){var r;let e=null;for(const o of s||[])if(Ir[o]){e=Ir[o];break}if(!e){const o=Uf(s);return o||null}const t=_r==null?void 0:_r.get(e);if(t&&t.label!=="Room")return{label:t.label,area:t.area,roomId:e};const n=(r=JM[mr])==null?void 0:r[e];if(n&&n.label!=="?")return{label:n.label,area:n.area,roomId:e};Es||Yb();const i=Es.get(e);return i?{label:i.label,area:i.area,roomId:e}:{label:qb(e),area:"",roomId:e}}let bn=new Map;function Kb(s){const e=new Map,t=n=>{for(;n;){if(n.name==="top_walls"||n.name==="bot_walls")return n.name;n=n.parent}return null};return s.traverse(n=>{if(!(n.isMesh||n.isLine||n.isLineSegments))return;const i=((n.name||n.type)+"").replace(/_\d+$/,""),r=Number.isInteger(n.userData._matIdx)?n.userData._matIdx:-1,o=t(n);n.userData._section=o;const a=`${o||"-"}|${i}#${r}`;let l=e.get(a);if(!l){const c=o?`${o} / `:"",h=r>=0?`${c}${i} · mat ${r+1}`:`${c}${i}`,u=n.isMesh?"#ffffff":"#1a1a2e";l={label:h,section:o,baseName:i,matIdx:r,objects:[],origColor:u},e.set(a,l)}l.objects.push(n)}),e}const jb=[s=>{var e;return(s.section==="top_walls"||s.section==="bot_walls")&&s.baseName==="cap"&&((e=s.objects[0])==null?void 0:e.userData._matColor)===65280}],Jb=[s=>{var e;return s.section==="bot_walls"&&s.baseName==="cap"&&((e=s.objects[0])==null?void 0:e.userData._matColor)===65280},s=>{var e;return s.section==="bot_walls"&&s.baseName==="cap"&&((e=s.objects[0])==null?void 0:e.userData._matColor)===16777215}],Zb=[s=>{var e;return(s.section==="top_walls"||s.section==="bot_walls")&&s.baseName==="outline"&&((e=s.objects[0])==null?void 0:e.userData._matColor)===16711680}];let yc=[],Mc=[],bc=[];function Qb(){yc=[...bn.values()].filter(s=>jb.some(e=>e(s))),Mc=[...bn.values()].filter(s=>Jb.some(e=>e(s))),bc=[...bn.values()].filter(s=>Zb.some(e=>e(s)))}function eS(s){const e=[],t={__next_f:{push:n=>e.push(n)}};for(const n of s.matchAll(/<script>([\s\S]*?)<\/script>/g)){const i=n[1];if(i.includes("__next_f"))try{Function("self",i)(t)}catch(r){console.warn("Skipping Next flight script:",r)}}return e.map(n=>Array.isArray(n)&&typeof n[1]=="string"?n[1]:"").join("")}function Eh(s,e){if(s[e]!=="{")return null;let t=0,n=!1,i=!1;for(let r=e;r<s.length;r++){const o=s[r];if(n)i?i=!1:o==="\\"?i=!0:o==='"'&&(n=!1);else if(o==='"')n=!0;else if(o==="{")t++;else if(o==="}"&&(t--,t===0))return s.slice(e,r+1)}return null}function tS(s,e){const t=`"${e}":`,n=s.indexOf(t);if(n<0)return null;let i=n+t.length;for(;/\s/.test(s[i]);)i++;return Eh(s,i)}function nS(s){var o;const e=eS(s),t=rS(e);let n=null;const i=tS(e,"floorPlan3dConfigJson");if(i)try{const a=JSON.parse(i);(o=a==null?void 0:a.floorPlans3d)!=null&&o.length&&(n=a)}catch{}const r=e.indexOf('"buildings":{');if(r<0)return{config:n,tour:null,roomMap:t};for(let a=r;a>=0;a--){if(e[a]!=="{")continue;const l=Eh(e,a);if(!(!l||a+l.length<=r))try{const c=JSON.parse(l);if(c!=null&&c.buildings&&(c!=null&&c.scenes))return{config:n,tour:c,roomMap:t}}catch{}}return{config:n,tour:null,roomMap:t}}function iS(s){return String(s||"Room").replace(/\s*\n\s*/g," ").replace(/\s+/g," ").trim()||"Room"}function sS(s){return s&&(s.mSq||s.ftSq)||""}function rS(s){const e={},t=/\["([^"]*PAN\d+(?:-SUB\d+)?)",/g;let n;for(;n=t.exec(s);){let i=n.index+n[0].length;for(;/\s/.test(s[i]);)i++;const r=Eh(s,i);if(r)try{const o=JSON.parse(r);if(!(o!=null&&o.roomId)||!(o!=null&&o.label))continue;e[n[1]]={roomId:o.roomId,label:iS(o.label),area:sS(o.areaText),parentPanID:o.parentPanID||null}}catch{}}return e}function oS(s){const e=new Map;return Object.values(s||{}).forEach(t=>{const n=e.get(t.roomId);(!n||n.label==="Room"&&t.label!=="Room")&&e.set(t.roomId,{label:t.label,area:t.area})}),e}function qt(s){return Number.parseFloat(s)}function aS(){try{const s=new URL(St),e=s.searchParams.get("g360Building"),t=s.searchParams.get("g360Floor");return{building:e==null?null:qt(e),floor:t==null?null:qt(t)}}catch{return{building:null,floor:null}}}function lS(s){const e=wa(s);return e!=null&&e.filename?`https://3dfloorplans.giraffe360.com/${e.filename}`:null}function wa(s){var r,o,a,l;const e=((r=s.config)==null?void 0:r.floorPlans3d)||[];if(!e.length)return null;const t=aS();if(t.building!=null||t.floor!=null){const c=e.find(h=>(t.building==null||qt(h.building)===t.building)&&(t.floor==null||qt(h.floor)===t.floor));if(c)return c}const n=((a=(o=s.tour)==null?void 0:o.scenes)==null?void 0:a[s.tour.defaultFirstScene||s.tour.firstScene])||Object.values(((l=s.tour)==null?void 0:l.scenes)||{})[0];return(n?e.find(c=>qt(c.building)===qt(n.building)&&qt(c.floor)===qt(n.floor)):null)||e[0]}function Nd(s){try{const e=new URL(An(St));return e.searchParams.set("g360Building",String(qt(s.building))),e.searchParams.set("g360Floor",String(qt(s.floor))),e.toString()}catch{return St}}function cS(s){const[e,t]=String(s).split(":").map(n=>Number.parseInt(n,10));return(e||0)+(t||0)/60}function hS(s){const e=wa(s),t=(e==null?void 0:e.sun_path_images)||{},n=Object.entries(t);return n.length?n.map(([i,r])=>({time:cS(i),url:Ai(`https://3dfloorplans.giraffe360.com/${r}`)})).sort((i,r)=>i.time-r.time):null}function uS(s){const e=wa(s),t=Object.values((e==null?void 0:e.sun_path_images)||{})[0];if(!t)return null;const n=String(t).replace(/\/[^/]+$/,"");return Ai(`https://3dfloorplans.giraffe360.com/${n}/sun_positions_1_0.json`)}function Sc(s){if(typeof s[0]=="number"){const e=[];for(let t=0;t+2<s.length;t+=3)e.push([s[t],s[t+1],s[t+2]]);return e}return s}function dS(s){const[[e,t],[n,i],[r,o]]=s;return Math.abs((e*(i-o)+n*(o-t)+r*(t-i))/2)}function fS(s){return s.every(e=>Math.abs(e[2]-s[0][2])<.01)&&dS(s)>5e3}function qf(s,e,t=16777215,n={}){const i=[];if(e.forEach(l=>{const c=Sc(l);n.dropLargeHorizontal&&fS(c)||c.forEach(([h,u,f])=>{i.push(h,f,-u)})}),!i.length)return null;const r=new dt;r.setAttribute("position",new $e(i,3)),r.computeVertexNormals(),r.computeBoundingSphere();const o=new Bt(r,new Cs({color:t,side:Ut}));o.name=s;const a=new $c(new Zc(r,30),new Ls({color:1710638}));return a.name=`${s}_edges`,a.raycast=()=>{},o.add(a),o}function pS(s,e){const t=[];e.forEach(a=>Sc(a).forEach(l=>t.push(l[2])));const n=Math.min(...t),i=e.filter(a=>Sc(a).every(c=>Math.abs(c[2]-n)<.01)),r=qf(s,i);if(!r)return null;const o=r.children.find(a=>a.isLineSegments);return o.removeFromParent(),o.name=`${s}_outline`,o}function mS(s){var h,u,f,d,p,_,m;const e=((h=s.scenes)==null?void 0:h[s.defaultFirstScene||s.firstScene])||Object.values(s.scenes||{})[0],t=(e==null?void 0:e.building)||Object.keys(s.buildings||{})[0],n=(e==null?void 0:e.floor)||Object.keys(((f=(u=s.buildings)==null?void 0:u[t])==null?void 0:f.floors)||{})[0],i=(_=(p=(d=s.buildings)==null?void 0:d[t])==null?void 0:p.floors)==null?void 0:_[n];if(!((m=i==null?void 0:i.geometry)!=null&&m.length))throw new Error("No geometry found for the default floor");const r=new wn;r.name=`standalone_3dflp_${s.projectId||"project"}_${t}_${n}`,r.userData.standalone3dflp={projectId:s.projectId,building:t,floor:n,firstScene:s.defaultFirstScene||s.firstScene};const o=new wn;o.name="top_walls";const a=new wn;a.name="bot_walls";const l=new wn;l.name="floors";const c=new wn;return c.name="ceilings",i.geometry.forEach((g,x)=>{if(x===i.geometry.length-1&&i.geometry.length>1){const P=pS(`live_floor_${x}`,g);P&&l.add(P);return}const y=qf(`live_walls_${x}`,g,16777215,{dropLargeHorizontal:!0});y&&(y.userData.room_ids=[`standalone:${t}:${n}:${x}`],o.add(y))}),r.add(o,a,l,c),r}const Ud=s=>{var e;return Ir[s]??((e=Uf([s]))==null?void 0:e.roomId)??null};function gS(s,e){s.objects.forEach(t=>{t.material&&(t.isMesh&&(t.material.vertexColors=!1),t.material.color.set(e),t.material.needsUpdate=!0)})}function Yf(){bn.forEach(s=>{s.objects.forEach(e=>{e.material&&(e.isMesh&&(e.material.vertexColors=!0),e.material.color.set(s.origColor),e.material.needsUpdate=!0)}),s.cp&&(s.cp.value=s.origColor)})}function _S(){const s=document.getElementById("debug-groups");s.innerHTML="";const e=n=>n==="top_walls"?0:n==="bot_walls"?1:2;[...bn.values()].sort((n,i)=>e(n.section)-e(i.section)||n.baseName.localeCompare(i.baseName)||n.matIdx-i.matIdx).forEach(n=>{const i=document.createElement("label");i.className="dbg-row";const r=document.createElement("input");r.type="checkbox",r.checked=!0,r.addEventListener("change",()=>{Os=!0,n.objects.forEach(c=>c.visible=r.checked),Rh()}),n.cb=r;const o=document.createElement("input");o.type="color",o.value=n.origColor,o.addEventListener("input",()=>gS(n,o.value)),o.title="Pick material colour",n.cp=o;const a=document.createElement("span");a.className="dbg-label",a.textContent=n.label;const l=document.createElement("span");l.className="dbg-count",l.textContent=n.objects.length,i.appendChild(r),i.appendChild(o),i.appendChild(a),i.appendChild(l),s.appendChild(i)})}async function vS(){var c,h,u,f,d,p,_,m,g;let s,e=null;Gn=null,_r=null;const t="t="+Date.now();try{if(kf(St)){let x=null;if(/^https?:\/\//.test(St))try{const P=await fetch(St+(St.includes("?")?"&":"?")+t,{credentials:"include"});P.ok&&(x=await P.text())}catch{}if(!x){const P=await fetch(hs+(hs.includes("?")?"&":"?")+t);if(!P.ok)throw new Error(`HTTP ${P.status} â€” ${P.statusText}`);x=await P.text()}const v=nS(x);Gn=v,_r=oS(v.roomMap);const y=lS(v);if(y){const P=Ai(y),S=await fetch(P+(P.includes("?")?"&":"?")+t);if(!S.ok)throw new Error(`HTTP ${S.status} â€” ${S.statusText}`);s=await S.json(),e=new sa().parse(s)}else if(v.tour)e=mS(v.tour),s=e.toJSON();else throw new Error("No usable 3D floorplan data found")}else if(xh)try{const x=await fetch(`${ko}/floorplan?${t}`);if(!x.ok)throw new Error(`bridge ${x.status}`);s=await x.json()}catch{const v=await fetch(hs+"?"+t);if(!v.ok)throw new Error(`HTTP ${v.status} — ${v.statusText}`);s=await v.json()}else{const x=await fetch(hs+(hs.includes("?")?"&":"?")+t);if(!x.ok)throw new Error(`HTTP ${x.status} — ${x.statusText}`);s=await x.json()}}catch(x){document.getElementById("loading").classList.add("gone");const v=document.getElementById("error");v.style.display="flex",document.getElementById("err-msg").textContent=x.message,document.getElementById("status-text").textContent="Load failed";return}Ss=s,xn.disabled=!1,e||(e=new sa().parse(s)),e.traverse(x=>{var y;if(!((y=x.material)!=null&&y.uuid))return;const v=(s.materials||[]).find(P=>P.uuid===x.material.uuid);v&&(x.userData._matIdx=(s.materials||[]).indexOf(v),x.userData._matColor=v.color)}),Ir=Xb(e),Es=null;let n=0,i=0,r=0,o=0;e.traverse(x=>{var v;x.isMesh?(n++,r+=((v=x.geometry.attributes.position)==null?void 0:v.count)??0,o+=x.geometry.index?x.geometry.index.count/3:0):(x.isLine||x.isLineSegments)&&i++}),ye.loadObject(e),ye.hideCeilings(ye.allCeilings),ye.resolvePortalRooms(Ud),ye.resolveSymbolRooms(Ud),bn=Kb(e),_S(),Qb();const a=(c=e.children)==null?void 0:c.find(x=>x.name==="floors");a&&a.children.forEach(x=>{if(x.isMesh){Ds.push(x);const v=Lr(x.userData.room_ids);v&&(Mn[v.roomId]||(Mn[v.roomId]=[]),Mn[v.roomId].push(x))}});const l=(h=e.children)==null?void 0:h.find(x=>x.name==="ceilings");l&&l.children.forEach(x=>{if(x.isMesh){const v=Lr(x.userData.room_ids);v&&(El[v.roomId]||(El[v.roomId]=[]),El[v.roomId].push(x))}}),document.getElementById("i-gen").textContent=((f=(u=s.metadata)==null?void 0:u.generator)==null?void 0:f.replace("Object3D.",""))??"—",document.getElementById("i-ver").textContent=String(((d=s.metadata)==null?void 0:d.version)??"—"),document.getElementById("i-geo").textContent=(((p=s.geometries)==null?void 0:p.length)??0).toLocaleString(),document.getElementById("i-mesh").textContent=n.toLocaleString(),document.getElementById("i-line").textContent=i.toLocaleString(),document.getElementById("i-vert").textContent=r.toLocaleString(),document.getElementById("i-tri").textContent=Math.round(o).toLocaleString(),document.getElementById("status-text").textContent=`${n+i} objects · ${((_=s.geometries)==null?void 0:_.length)??0} geometries`,xS(),yS(),Bb(e),ye.show3D(),Fi(),document.getElementById("loading").classList.add("gone"),HS(),await AS(),((m=cr==null?void 0:cr.shot)==null?void 0:m.mode)==="sun"&&((g=hi.applyPreset)==null||g.call(hi,cr))}function xS(){const s=document.getElementById("g-room-list");s.innerHTML="";const e=[];if(Object.keys(Mn).forEach(n=>{var o;const i=(o=Mn[n])==null?void 0:o[0],r=i?Lr(i.userData.room_ids):null;e.push({roomId:n,label:(r==null?void 0:r.label)||"Room",area:(r==null?void 0:r.area)||""})}),e.sort((n,i)=>{const r=/^Room( \d+)?$/.test(n.label)?1:0,o=/^Room( \d+)?$/.test(i.label)?1:0;return r!==o?r-o:n.label.localeCompare(i.label)}),!e.length){const n=document.createElement("li");n.className="disabled",n.textContent="No rooms found",s.appendChild(n);return}e.forEach(n=>{const i=document.createElement("li"),r=document.createElement("span");r.textContent=n.label;const o=document.createElement("span");o.className="area",o.textContent=n.area,i.appendChild(r),i.appendChild(o),i.addEventListener("click",()=>{yh(n.roomId,{label:n.label,area:n.area}),la()}),s.appendChild(i)});const t=document.createElement("li");t.className="reset",t.textContent="Reset",t.addEventListener("click",()=>{Hs(),la()}),s.appendChild(t)}function yS(){var f;const s=document.getElementById("g-floor-pill"),e=document.getElementById("g-floor-num"),t=document.getElementById("g-floor-up"),n=document.getElementById("g-floor-down");if(!s||!e||!t||!n)return;const i=((f=Gn==null?void 0:Gn.config)==null?void 0:f.floorPlans3d)||[];if(i.length<=1){s.hidden=!0;return}const r=[...i].sort((d,p)=>qt(d.building)-qt(p.building)||qt(d.floor)-qt(p.floor)),o=wa(Gn),a=r.findIndex(d=>d.filename===(o==null?void 0:o.filename)),l=a>=0?a:0,c=r[l]||o||r[0],h=qt(c.floor),u=Number.isFinite(h)?String(h+1):String(l+1);e.textContent=u,s.title=`Floor ${u} of ${r.length}`,s.hidden=!1,t.disabled=l>=r.length-1,n.disabled=l<=0,t.onclick=()=>{const d=r[Math.min(r.length-1,l+1)];d&&d!==c&&Ns(Nd(d))},n.onclick=()=>{const d=r[Math.max(0,l-1)];d&&d!==c&&Ns(Nd(d))}}const Kf=document.getElementById("g-2d"),jf=document.getElementById("g-3d");let qn=!1;function Fi(){var e;const s=(e=ye._anim)!=null&&e.projection?ye._anim.targetOrtho:ye.useOrtho;Kf.classList.toggle("active",!qn&&s),jf.classList.toggle("active",!qn&&!s)}const Aa=()=>{var s;return(s=ye._anim)!=null&&s.projection?ye._anim.targetOrtho:ye.useOrtho};Kf.addEventListener("click",()=>{qn&&di(!1),Aa()||ye.toggleProjection(),Fi()});jf.addEventListener("click",()=>{qn&&di(!1),Aa()&&ye.toggleProjection(),Fi()});Fi();const Jf={"405cfed921bc45449d1162e4db09ebc2":"/data/project1/sun_path_1_0",c2b5124c88e94053999c40a4dd05d0b5:"data/c2b5124c88e94053999c40a4dd05d0b5/sun_path_1_0","76882d0571014d7d8ec8e06b8ac18b2b":"data/76882d0571014d7d8ec8e06b8ac18b2b/sun_path_1_0","03f59758c8fa451d9da4295d82c25dea":"data/03f59758c8fa451d9da4295d82c25dea/sun_path_1_0"},MS={"405cfed921bc45449d1162e4db09ebc2":"/data/405cfed921bc45449d1162e4db09ebc2/sun_path_edited"},bS={"405cfed921bc45449d1162e4db09ebc2":"/data/405cfed921bc45449d1162e4db09ebc2/sun_path_edited_nofurn"},oa=document.getElementById("g-sun"),SS=document.getElementById("sunpath-bar"),Qt=document.getElementById("sunpath-range"),Ec=document.getElementById("sunpath-time"),Od=document.getElementById("sunpath-date"),wc=document.getElementById("sunpath-play"),ES=document.getElementById("sunpath-close"),Fd=document.querySelector(".g-view-pill");function Ac(s){let e=Math.floor(s),t=Math.round((s-e)*60);t===60&&(t=0,e+=1);const n=e>=12?"PM":"AM";return`${(e+11)%12+1}:${String(t).padStart(2,"0")} ${n}`}function Tl(s,e="webp"){const t=[];let n=1;for(let i=6*60+30;i<=16*60+30;i+=15,n++){const r=Math.floor(i/60),o=i%60,a=String(n).padStart(4,"0"),l=e==="webp-idx"?`${s}/${a}.webp`:e==="png"?`${s}/bake_frame_${a}.png`:`${s}/bake_frame_${String(r).padStart(2,"0")}${String(o).padStart(2,"0")}.webp`;t.push({time:r+o/60,url:l})}return t}let Us=!1,sr=null;function wh(s){ye.setSunpathTime(s),Qt.value=String(Math.round(s*60)),Ec.textContent=Ac(s);const{sunrise:e,sunset:t}=ye.sunpathRange(),n=(s-e)/(t-e)*100;Qt.style.setProperty("--sp-fill",`${n}%`)}function Dr(s){if(Us=s,wc.querySelector(".sp-play-icon").hidden=s,wc.querySelector(".sp-pause-icon").hidden=!s,sr&&(cancelAnimationFrame(sr),sr=null),!s)return;const{sunrise:e,sunset:t}=ye.sunpathRange(),n=()=>{let i=+Qt.value/60+(Or()?.0135:.016666666666666666);i>t&&(i=e),wh(i),sr=requestAnimationFrame(n)};sr=requestAnimationFrame(n)}function di(s){qn=s,oa.classList.toggle("active",s),SS.hidden=!s,Fd&&(Fd.hidden=s),ye.setSunpathEnabled(s),s?Aa()&&ye.toggleProjection():Us&&Dr(!1),zt&&ye.highlightRoom(Mn[zt]||[],zt),Fi()}oa.addEventListener("click",()=>{ye.sunpathReady()&&di(!qn)});Qt.addEventListener("input",()=>{Us&&Dr(!1),wh(+Qt.value/60)});wc.addEventListener("click",()=>Dr(!Us));ES.addEventListener("click",()=>di(!1));let ws=0,Tc=0;const Ei=.7;let aa=0;const Or=()=>document.body.classList.contains("peeks-embed");function wS(){var s;(s=window.parent)==null||s.postMessage({type:"peeks-spatial-progress-sync",progress:ws},"*")}function Zf(s){var i;const e=Math.max(0,Math.min(1,Number(s)||0)),t=ws;ws=e,t<Ei&&e>=Ei&&(aa=Date.now()),e<Ei&&(aa=0);const n=Math.min(1,e/Ei);if((i=ye.setPeeksSpatialProgress)==null||i.call(ye,n),e>=Ei&&ye.sunpathReady()){if(!qn){di(!0);const r=ye.sunpathRange();r&&wh(r.sunrise)}Us||Dr(!0)}else qn?di(!1):Us&&Dr(!1)}window.addEventListener("message",s=>{const e=s.data||{};e.type==="peeks-spatial-progress"&&Zf(e.progress)});function Qf(s,e="wheel"){var a,l;if(!Or())return!1;const t=Math.sign(s);if(t<0&&ws<=.015)return(a=window.parent)==null||a.postMessage({type:"peeks-spatial-back"},"*"),!0;if(t>0&&ws>=Ei)return(!aa||Date.now()-aa>650)&&((l=window.parent)==null||l.postMessage({type:"peeks-spatial-next"},"*")),!0;const n=e==="touch"?42:46,i=42e-5,r=Math.max(-n,Math.min(n,s)),o=ws+r*i;return Zf(t>0?Math.min(Ei,o):o),wS(),!0}Ea.addEventListener("wheel",s=>{Or()&&(s.preventDefault(),Qf(s.deltaY,"wheel"))},{passive:!1});Ea.addEventListener("touchstart",s=>{var e;!Or()||!((e=s.touches)!=null&&e.length)||(Tc=s.touches[0].clientY)},{passive:!0});Ea.addEventListener("touchmove",s=>{var n;if(!Or()||!((n=s.touches)!=null&&n.length))return;const e=s.touches[0].clientY,t=Tc-e;Math.abs(t)>1&&(s.preventDefault(),Qf(t,"touch"),Tc=e)},{passive:!1});async function AS(){var t,n;const s=Gn?hS(Gn):null;if(s!=null&&s.length)try{let i=null;const r=uS(Gn);if(r)try{i=await(await fetch(r)).json()}catch{}if(!await ye.initSunpath(s,i,!1))return;const{sunrise:a,sunset:l}=ye.sunpathRange();Qt.min=String(Math.round(a*60)),Qt.max=String(Math.round(l*60));const c=(a+l)/2;if(Qt.value=String(Math.round(c*60)),Ec.textContent=Ac(c),Qt.style.setProperty("--sp-fill","50%"),(t=i==null?void 0:i.metadata)!=null&&t.date){const h=new Date(i.metadata.date+"T00:00:00");Od.textContent=h.toLocaleDateString(void 0,{month:"short",day:"2-digit",year:"numeric"})}oa.hidden=!1;return}catch(i){console.warn("Remote sun path unavailable:",i)}const e=Jf[mr];if(e)try{const i=MS[mr],r=xh&&!!i,o=r?Tl(i,"webp-idx"):Tl(e,"webp"),a=r?bS[mr]:null,l=a?Tl(a,"webp-idx"):null;let c=null;try{c=await(await fetch(`${e}/sun_positions_1_0.json`)).json()}catch{}const h=await ye.initSunpath(o,c,r,l);if(h&&ye.setSunpathFurniture(ye.show3DFurniture!==!1),!h)return;const{sunrise:u,sunset:f}=ye.sunpathRange();Qt.min=String(Math.round(u*60)),Qt.max=String(Math.round(f*60));const d=(u+f)/2;if(Qt.value=String(Math.round(d*60)),Ec.textContent=Ac(d),Qt.style.setProperty("--sp-fill","50%"),(n=c==null?void 0:c.metadata)!=null&&n.date){const p=new Date(c.metadata.date+"T00:00:00");Od.textContent=p.toLocaleDateString(void 0,{month:"short",day:"2-digit",year:"numeric"})}oa.hidden=!1}catch(i){console.warn("Sun path unavailable:",i)}}const Rl=document.getElementById("blender-bar");if(xh){const s=document.getElementById("bb-src"),e=document.getElementById("bb-generate"),t=document.getElementById("bb-status"),n=document.getElementById("bb-port"),i=document.getElementById("bb-reload"),r=document.getElementById("bb-info"),o=document.getElementById("bb-help");r.addEventListener("click",S=>{S.stopPropagation();const T=o.hidden;if(o.hidden=!T,T){const w=o.getBoundingClientRect().top;o.style.maxHeight=Math.max(160,Math.floor(window.innerHeight-w-16))+"px"}}),document.addEventListener("click",S=>{!o.hidden&&!o.contains(S.target)&&S.target!==r&&(o.hidden=!0)});const a=document.getElementById("bb-toggle"),l=S=>{Rl.classList.toggle("collapsed",!S),a.setAttribute("aria-expanded",String(S)),localStorage.setItem("g360_blender_open",S?"1":"0")};l(localStorage.getItem("g360_blender_open")==="1"),a.addEventListener("click",()=>l(Rl.classList.contains("collapsed"))),a.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),a.click())});const c=localStorage.getItem("g360_blender_port");c&&(n.value=c);const h=()=>{const S=parseInt(n.value,10);return S>=1&&S<=65535?S:9876};n.addEventListener("change",()=>localStorage.setItem("g360_blender_port",String(h())));const u=(S,T)=>{const w=document.createElement("option");w.value=T,w.textContent=S,s.appendChild(w)},f=_c.find(([,S])=>S===St);f&&u(`${f[0]} (in viewer)`,f[1]),_c.filter(([,S])=>S!==St).forEach(([S,T])=>u(S,T)),Rl.hidden=!1;const d=S=>{const T=Jf[Of(S)];return T?`${T}/sun_positions_1_0.json`:null},p=document.getElementById("bb-sun");d(St)||(p.disabled=!0,p.title="No baked sun data for this project"),e.addEventListener("click",async()=>{e.disabled=!0,t.className="bb-status",t.textContent="Generating…";try{const S=await fetch(`${ko}/api/blender-import`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({src:s.value,port:h()})}),T=await S.json().catch(()=>({}));S.ok&&T.imported?(t.className="bb-status ok",t.textContent=`Generated (${T.objects} objects) — edit, then ⟳`):(t.className="bb-status err",t.textContent=T.message||"Blender not reachable")}catch{t.className="bb-status err",t.textContent="Dev server / Blender offline"}finally{e.disabled=!1}});const _=async(S,T)=>{const w=d(St);if(!w)return;S.disabled=!0,t.className="bb-status",t.textContent=T?"Prepping empty-room bake (import without 3D furniture + sun)…":"Prepping for bake (import + sun + interior bake prep)…";const E=ye.sunpathReady()?+Qt.value/60:12;try{const M=await fetch(`${ko}/api/blender-sun`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({src:St,sunPositions:w,port:h(),time:E,excludeFurniture:T})}),L=await M.json().catch(()=>({}));if(M.ok&&L.prep){t.className="bb-status ok";const B=T?" (empty room — no furniture)":"";t.textContent=`Ready to bake: interior "${L.interior}" (${L.faces} faces)${B}, sun on "${L.sun}"`}else t.className="bb-status err",t.textContent=L.message||"Blender not reachable"}catch{t.className="bb-status err",t.textContent="Dev server / Blender offline"}finally{S.disabled=!1}};p.addEventListener("click",()=>_(p,!1));const m=document.getElementById("bb-sun-nofurn");m&&(d(St)||(m.disabled=!0,m.title="No baked sun data for this project"),m.addEventListener("click",()=>_(m,!0)));const g=async(S,T,w={})=>{S&&S.classList.add("g-spin"),t.className="bb-status",t.textContent="Syncing…";let E;try{E=await fetch(`${ko}/api/${T}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({port:h(),...w})})}catch{vc();return}if(!E.ok){const M=await E.json().catch(()=>({}));S&&S.classList.remove("g-spin"),t.className="bb-status err",t.textContent=M.message||`Sync failed (${E.status}) — is the bridge up to date?`;return}vc()};i.addEventListener("click",()=>g(i,"blender-sync"));const x=document.getElementById("bb-reload-sun");x.addEventListener("click",()=>g(x,"blender-sync-sun",{project:mr}));const v=document.getElementById("bb-fmt"),y=document.getElementById("bb-save"),P=(S,T)=>{const w=URL.createObjectURL(S),E=document.createElement("a");E.href=w,E.download=T,document.body.appendChild(E),E.click(),E.remove(),URL.revokeObjectURL(w)};y.addEventListener("click",()=>{if(!Ss){t.className="bb-status err",t.textContent="Nothing loaded yet";return}if(v.value==="json"){P(new Blob([JSON.stringify(Ss)],{type:"application/json"}),"blender-floorplan.json"),t.className="bb-status ok",t.textContent="Saved .json";return}y.disabled=!0,t.className="bb-status",t.textContent="Exporting .glb…";const S=new sa().parse(Ss);new Ma().parse(S,T=>{P(new Blob([T],{type:"model/gltf-binary"}),"blender-floorplan.glb"),t.className="bb-status ok",t.textContent="Saved .glb",y.disabled=!1},T=>{console.error("GLB export failed:",T),t.className="bb-status err",t.textContent="GLB export failed",y.disabled=!1},{binary:!0})})}const Ah=document.getElementById("g-room-select"),TS=document.getElementById("g-room-btn"),Th=document.getElementById("g-room-list"),RS=document.getElementById("g-room-btn-label");function CS(){bh("g-room-select"),Ah.classList.add("open"),Th.hidden=!1}function la(){Ah.classList.remove("open"),Th.hidden=!0}TS.addEventListener("click",s=>{s.stopPropagation(),Th.hidden?CS():la()});document.addEventListener("click",s=>{Ah.contains(s.target)||la()});function ep(s){RS.textContent=(s==null?void 0:s.label)||"Select a room"}const Cl=document.getElementById("tog-debug"),Vo=document.getElementById("tog-nodim"),Pl=document.getElementById("tog-sym3d"),Il=document.getElementById("tog-furn3d");Pl.addEventListener("click",()=>{Pl.classList.toggle("on"),ye.symbolsIn3D=Pl.classList.contains("on")});Il.addEventListener("click",()=>{var e;Il.classList.toggle("on");const s=Il.classList.contains("on");ye.show3DFurniture=s,(e=ye.setSunpathFurniture)==null||e.call(ye,s)});const Go=document.getElementById("tog-allfurn3d");Go.classList.add("on");ye.allFurniture3D=!0;Go.addEventListener("click",()=>{Go.classList.toggle("on"),ye.allFurniture3D=Go.classList.contains("on")});const PS=document.getElementById("row-nodim"),IS=document.getElementById("debug-groups"),LS=document.getElementById("debug-footer"),tp=document.getElementById("dbg-toggle-all"),DS=document.getElementById("dbg-reset-colors");let Os=!1;function Rh(){const s=[...bn.values()],e=s.length>0&&s.every(t=>{var n;return(n=t.cb)==null?void 0:n.checked});tp.textContent=e?"Hide all":"Show all"}tp.addEventListener("click",()=>{Os=!0;const s=[...bn.values()],t=!(s.length>0&&s.every(n=>{var i;return(i=n.cb)==null?void 0:i.checked}));s.forEach(n=>{n.cb&&(n.cb.checked=t),n.objects.forEach(i=>i.visible=t)}),Rh()});DS.addEventListener("click",()=>{Os=!0,Yf()});const Ch=document.getElementById("inspect-panel"),NS=document.getElementById("inspect-body");document.getElementById("inspect-close").addEventListener("click",()=>{Ch.hidden=!0});function Ph(){Ch.hidden=!0}function US(s,e){var _,m,g,x,v;if(!s){Ph();return}const t=((s.name||s.type)+"").replace(/_\d+$/,""),n=Number.isInteger((_=s.userData)==null?void 0:_._matIdx)?s.userData._matIdx:-1,i=((m=s.userData)==null?void 0:m._section)||"-",r=`${i}|${t}#${n}`,o=bn.get(r),a=[];let l=s;for(;l&&l.parent;)a.push(l.name||l.type),l=l.parent;const c=((g=s.userData)==null?void 0:g._matColor)!=null?"0x"+s.userData._matColor.toString(16).padStart(6,"0"):"—",h=((x=s.userData)==null?void 0:x._matColor)!=null?`<span class="swatch" style="background:#${s.userData._matColor.toString(16).padStart(6,"0")}"></span>`:"",u=(v=s.userData)==null?void 0:v.room_ids,f=u!=null&&u.length?u.length===1?u[0]:`${u.length} panels: ${u.slice(0,3).join(", ")}${u.length>3?"…":""}`:"—",d=[];s.visible===!1&&d.push("hidden"),o!=null&&o.cb&&!o.cb.checked&&d.push("group toggle off");const p=[["Name",s.name||"(unnamed)"],["Type",s.type],["Section",i],["Base name",t],["Material",n>=0?`mat ${n+1}`:"—"],["Colour",`${h}${c}`],["Group label",(o==null?void 0:o.label)||"— (no group)"],["Group size",o?`${o.objects.length} objects`:"—"],["Room ids",f],["Visibility",d.length?d.join(" · "):"visible"],["Parent chain",a.slice(0,5).join(" › ")],["Hit distance",(e==null?void 0:e.distance)!=null?e.distance.toFixed(1):"—"]];NS.innerHTML=p.map(([y,P])=>`<tr><td>${y}</td><td>${P}</td></tr>`).join(""),Ch.hidden=!1}Cl.addEventListener("click",()=>{Cl.classList.toggle("on");const s=Cl.classList.contains("on");ye.debugMode=s,IS.hidden=!s,LS.hidden=!s,PS.hidden=!s,s?(Os=!1,bn.forEach(e=>{var t;e.cb&&(e.cb.checked=!!((t=e.objects[0])!=null&&t.visible))}),Rh()):(Os=!1,ye.noDim=!1,Vo.classList.remove("on"),zt?Hs():ye.resetView(),Yf(),ye.hideCeilings(ye.allCeilings),Ph())});Vo.addEventListener("click",()=>{Vo.classList.toggle("on"),ye.noDim=Vo.classList.contains("on"),zt&&ye.highlightRoom(Mn[zt]||[],zt)});ye.onAfterVisibility=()=>{zt&&yc.length&&yc.forEach(s=>s.objects.forEach(e=>e.visible=!1)),ye.useOrtho&&Mc.length&&Mc.forEach(s=>s.objects.forEach(e=>e.visible=!1)),!ye.useOrtho&&!zt&&bc.length&&bc.forEach(s=>s.objects.forEach(e=>e.visible=!1)),ye.debugMode&&Os&&bn.forEach(s=>{s.cb&&!s.cb.checked&&s.objects.forEach(e=>e.visible=!1)}),kb()};const OS=["#ffffff","#e8e4da","#d4e8d4","#d4d4e8","#e8d4d4","#c4d8e8","#ffe4b5","#2a2a2a"],FS=["#1a1a2e","#000000","#c8f062","#62d4f0","#f87171","#ffffff","#888888","#3a2a1a"];function np(s,e,t){const n=document.getElementById(e);s.forEach((i,r)=>{const o=document.createElement("div");o.className="sw"+(r===0?" active":""),o.style.background=i,o.addEventListener("click",()=>{n.querySelectorAll(".sw").forEach(a=>a.classList.remove("active")),o.classList.add("active"),t(i)}),n.appendChild(o)})}np(OS,"fill-sw",s=>{zt?ye.highlightRoom(Mn[zt]||[],Ds):ye.setFillColor(s)});np(FS,"line-sw",s=>ye.setLineColor(s));document.querySelectorAll(".panel.collapsible .panel-header").forEach(s=>{s.addEventListener("click",()=>s.closest(".panel.collapsible").classList.toggle("collapsed"))});const Io=document.getElementById("debug-toggle");Io==null||Io.addEventListener("click",()=>Io.closest("aside").classList.toggle("closed"));var Bd;(Bd=document.getElementById("g-info"))==null||Bd.addEventListener("click",()=>{var s;return(s=document.getElementById("debug-bar"))==null?void 0:s.classList.toggle("closed")});function BS(s,e,t){const n=document.getElementById(s);if(!n)return;const i=220,r=640,o=document.documentElement,a=c=>o.style.setProperty(e,Math.max(i,Math.min(r,c))+"px"),l=parseFloat(localStorage.getItem(e));l&&a(l),n.addEventListener("pointerdown",c=>{c.preventDefault(),n.classList.add("dragging"),document.body.classList.add("resizing"),n.setPointerCapture(c.pointerId);const h=f=>a(f.clientX),u=()=>{n.releasePointerCapture(c.pointerId),n.classList.remove("dragging"),document.body.classList.remove("resizing"),n.removeEventListener("pointermove",h),n.removeEventListener("pointerup",u),localStorage.setItem(e,parseFloat(getComputedStyle(o).getPropertyValue(e)))};n.addEventListener("pointermove",h),n.addEventListener("pointerup",u)})}BS("debug-resize","--debug-w");function zS(s){if(s==="sun"){ye.sunpathReady()&&di(!0);return}qn&&di(!1);const e=s==="2d";Aa()!==e&&ye.toggleProjection(),Fi()}function kS(){return Object.keys(Mn).map(s=>{var n;const e=(n=Mn[s])==null?void 0:n[0],t=e?Lr(e.userData.room_ids):null;return{roomId:s,label:(t==null?void 0:t.label)||"Room",area:(t==null?void 0:t.area)||""}}).sort((s,e)=>s.label.localeCompare(e.label))}function VS(s,e){const t=URL.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(t)}function GS(){const e=(decodeURIComponent(location.hash.slice(1))||St).match(/\/([0-9a-f]{6,})\/([^/]+)\.json$/i);return e?`${e[1].slice(0,8)}-${e[2]}`:"floorplan"}const hi=ib({viewer:ye,applyMode:zS,canEnableSun:()=>ye.sunpathReady(),getRooms:kS,currentRoomId:()=>zt,showRoom:yh,clearRoom:Hs,reframe:()=>{ye.resetView()},download:VS,slug:GS}),cs=Ib({loadSource:Ns});let lr=()=>{},cr=null;function HS(){var i;let s=null;try{s=JSON.parse(localStorage.getItem(Sl)||"null")}catch{}if(!(s!=null&&s.shot))return;if(Date.now()-Number(s.createdAt||0)>2*60*1e3){localStorage.removeItem(Sl);return}const t=An(s.sourceUrl||s.shot.sourceUrl||""),n=An(St);t&&n&&t!==n||(localStorage.removeItem(Sl),cr=s,lr("render"),(i=hi.applyPreset)==null||i.call(hi,s))}(function(){const e=document.getElementById("tab-explore"),t=document.getElementById("tab-plan"),n=document.getElementById("tab-render");!e||!t||!n||(lr=function(r){const o=r==="plan",a=r==="render";document.body.classList.toggle("mode-plan",o),document.body.classList.toggle("mode-render",a),e.classList.toggle("is-active",r==="explore"),t.classList.toggle("is-active",o),n.classList.toggle("is-active",a),e.setAttribute("aria-selected",String(r==="explore")),t.setAttribute("aria-selected",String(o)),n.setAttribute("aria-selected",String(a)),a?hi.enter():(hi.leave(),Fi()),o?cs==null||cs.enter():cs==null||cs.leave()},e.addEventListener("click",()=>lr("explore")),t.addEventListener("click",()=>lr("plan")),n.addEventListener("click",()=>lr("render")))})();vS();
