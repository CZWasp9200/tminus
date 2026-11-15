(()=>{var xd=0,nh=1,_d=2;var la=1,vd=2,rr=3,ci=0,Gt=1,yn=2,Pi=0,ar=1,ih=2,sh=3,rh=4,jo=5;var Ss=100,yd=101,Md=102,Sd=103,bd=104,Ed=200,Qo=201,Td=202,wd=203,ah=204,ca=205,Ad=206,Rd=207,Cd=208,Pd=209,Id=210,Ld=211,Dd=212,Nd=213,Ud=214,po=0,mo=1,go=2,Js=3,xo=4,_o=5,vo=6,yo=7,oh=0,Fd=1,Od=2,Fn=0,lh=1,ch=2,hh=3,uh=4,dh=5,fh=6,ph=7;var mh=300,bs=301,or=302,el=303,tl=304,gs=1e3,ti=1001,Mo=1002,Zt=1003,Bd=1004;var ha=1005;var Jt=1006,nl=1007;var Ii=1008;var Ln=1009,gh=1010,xh=1011,lr=1012,il=1013,Zn=1014,On=1015,fn=1016,sl=1017,rl=1018,Es=1020,_h=35902,vh=35899,yh=1021,Mh=1022,Jn=1023,Ti=1026,Li=1027,al=1028,ol=1029,$i=1030,ll=1031;var cl=1033,ua=33776,da=33777,fa=33778,pa=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,xl=37488,_l=37489,ma=37490,vl=37491,yl=37808,Ml=37809,Sl=37810,bl=37811,El=37812,Tl=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,Nl=36492,Ul=36494,Fl=36495,Ol=36283,Bl=36284,ga=36285,kl=36286;var Lr=2300,So=2301,uo=2302,Xc=2303,qc=2400,Yc=2401,Zc=2402;var kd=3200;var Sh=0,zd=1,Di="",An="srgb",Rn="srgb-linear",Dr="linear",xt="srgb";var fo=7680;var Hd=519,Gd=512,Vd=513,Wd=514,bh=515,Xd=516,qd=517,Eh=518,Th=519,wh=35044,Ah=35048;var Rh="300 es",Un=2e3,Nr=2001;function nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function im(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yd(){let n=Ur("canvas");return n.style.display="block",n}var Ou={},Ks=null;function Fr(...n){let e="THREE."+n.shift();Ks?Ks("log",e,...n):console.log(e,...n)}function Zd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=Zd(n);let e="THREE."+n.shift();if(Ks)Ks("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Zd(n);let e="THREE."+n.shift();if(Ks)Ks("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Cr(...n){let e=n.join(" ");e in Ou||(Ou[e]=!0,Ve(...n))}function Jd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Kd={[po]:po,[go]:vo,[xo]:xo,[Js]:_o,[mo]:mo,[vo]:go,[yo]:yo,[_o]:Js},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yc=Math.PI/180,bo=180/Math.PI;function ji(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function sm(n,e){return(n%e+e)%e}function Mc(n,e,t){return(1-t)*n+t*e}function $d(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jd(n,e){if(e.constructor===Float32Array)return n;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Qd(n,e){if(e.constructor===Float32Array)return n;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Nh=class Nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;var se=Nh,Cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*y;p<0&&(d=-d,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),S=Math.sin(_);m=Math.sin(m*_)/S,o=Math.sin(o*_)/S,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uh=class Uh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;var L=Uh,Sc=new L,Bu=new Cn,Fh=class Fh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],_=s[1],S=s[4],v=s[7],A=s[2],w=s[5],x=s[8];return r[0]=a*y+o*_+l*A,r[3]=a*p+o*S+l*w,r[6]=a*m+o*v+l*x,r[1]=c*y+h*_+u*A,r[4]=c*p+h*S+u*w,r[7]=c*m+h*v+u*x,r[2]=d*y+f*_+g*A,r[5]=d*p+f*S+g*w,r[8]=d*m+f*v+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bc.makeScale(e,t)),this}rotate(e){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;var Ye=Fh,bc=new Ye,ku=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){let n={enabled:!0,workingColorSpace:Rn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rn]:{primaries:e,whitePoint:i,transfer:Dr,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}var ht=rm();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ps,Eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=Ur("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},am=0,$s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ec(s[a].image)):r.push(Ec(s[a]))}else r=Ec(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var om=0,Tc=new L,dn=class n extends ii{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ti,s=ti,r=Jt,a=Ii,o=Jn,l=Ln,c=n.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ji(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=mh;dn.DEFAULT_ANISOTROPY=1;var Oh=class Oh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,A=(m+1)/2,w=(h+d)/4,x=(u+y)/4,E=(g+p)/4;return S>v&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=x/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=E/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=E/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;var Lt=Oh,To=class extends ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends To{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Or=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $o=class $o{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,p)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lm,e,cm)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ki.crossVectors(i,Tn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ki.crossVectors(i,Tn)),ki.normalize(),Oa.crossVectors(Tn,ki),s[0]=ki.x,s[4]=Oa.x,s[8]=Tn.x,s[1]=ki.y,s[5]=Oa.y,s[9]=Tn.y,s[2]=ki.z,s[6]=Oa.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],_=i[3],S=i[7],v=i[11],A=i[15],w=s[0],x=s[4],E=s[8],U=s[12],I=s[1],R=s[5],D=s[9],z=s[13],P=s[2],F=s[6],X=s[10],H=s[14],ie=s[3],q=s[7],j=s[11],ee=s[15];return r[0]=a*w+o*I+l*P+c*ie,r[4]=a*x+o*R+l*F+c*q,r[8]=a*E+o*D+l*X+c*j,r[12]=a*U+o*z+l*H+c*ee,r[1]=h*w+u*I+d*P+f*ie,r[5]=h*x+u*R+d*F+f*q,r[9]=h*E+u*D+d*X+f*j,r[13]=h*U+u*z+d*H+f*ee,r[2]=g*w+y*I+p*P+m*ie,r[6]=g*x+y*R+p*F+m*q,r[10]=g*E+y*D+p*X+m*j,r[14]=g*U+y*z+p*H+m*ee,r[3]=_*w+S*I+v*P+A*ie,r[7]=_*x+S*R+v*F+A*q,r[11]=_*E+S*D+v*X+A*j,r[15]=_*U+S*z+v*H+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15],_=l*f-c*d,S=o*f-c*u,v=o*d-l*u,A=a*f-c*h,w=a*d-l*h,x=a*u-o*h;return t*(y*_-p*S+m*v)-i*(g*_-p*A+m*w)+s*(g*S-y*A+m*x)-r*(g*v-y*w+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],_=t*o-i*a,S=t*l-s*a,v=t*c-r*a,A=i*l-s*o,w=i*c-r*o,x=s*c-r*l,E=h*y-u*g,U=h*p-d*g,I=h*m-f*g,R=u*p-d*y,D=u*m-f*y,z=d*m-f*p,P=_*z-S*D+v*R+A*I-w*U+x*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return e[0]=(o*z-l*D+c*R)*F,e[1]=(s*D-i*z-r*R)*F,e[2]=(y*x-p*w+m*A)*F,e[3]=(d*w-u*x-f*A)*F,e[4]=(l*I-a*z-c*U)*F,e[5]=(t*z-s*I+r*U)*F,e[6]=(p*v-g*x-m*S)*F,e[7]=(h*x-d*v+f*S)*F,e[8]=(a*D-o*I+c*E)*F,e[9]=(i*I-t*D-r*E)*F,e[10]=(g*w-y*v+m*_)*F,e[11]=(u*v-h*w-f*_)*F,e[12]=(o*U-a*R-l*E)*F,e[13]=(t*R-i*U+s*E)*F,e[14]=(y*S-g*A-p*_)*F,e[15]=(h*A-u*S+d*_)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,p=a*u,m=o*u,_=l*c,S=l*h,v=l*u,A=i.x,w=i.y,x=i.z;return s[0]=(1-(y+m))*A,s[1]=(f+v)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+m))*w,s[6]=(p+_)*w,s[7]=0,s[8]=(g+S)*x,s[9]=(p-_)*x,s[10]=(1-(d+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let c=1/a,h=1/o,u=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Un)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Nr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Un)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Nr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};$o.prototype.isMatrix4=!0;var mt=$o,Is=new L,Gn=new mt,lm=new L(0,0,0),cm=new L(1,1,1),ki=new L,Oa=new L,Tn=new L,Hu=new mt,Gu=new Cn,Wi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hm=0,Vu=new L,Ls=new Cn,_i=new mt,Ba=new L,vr=new L,um=new L,dm=new Cn,Wu=new L(1,0,0),Xu=new L(0,1,0),qu=new L(0,0,1),Yu={type:"added"},fm={type:"removed"},Ds={type:"childadded",child:null},wc={type:"childremoved",child:null},_n=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Wi,i=new Cn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ye}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(vr,Ba,this.up):_i.lookAt(Ba,vr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(_i),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new L(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},pm={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=sm(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=An){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let i=ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return ht.workingToColorSpace(rn.copy(this),e),Math.round(it(rn.r*255,0,255))*65536+Math.round(it(rn.g*255,0,255))*256+Math.round(it(rn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(rn.copy(this),t);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=An){ht.workingToColorSpace(rn.copy(this),e);let t=rn.r,i=rn.g,s=rn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ka);let i=Mc(zi.h,ka.h,t),s=Mc(zi.s,ka.s,t),r=Mc(zi.l,ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new $e;$e.NAMES=ef;var kr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xs=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new L,vi=new L,Rc=new L,yi=new L,Ns=new L,Us=new L,Zu=new L,Cc=new L,Pc=new L,Ic=new L,Lc=new Lt,Dc=new Lt,Nc=new Lt,bi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),vi.subVectors(i,t),Rc.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(vi),l=Vn.dot(Rc),c=vi.dot(vi),h=vi.dot(Rc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Lc.setScalar(0),Dc.setScalar(0),Nc.setScalar(0),Lc.fromBufferAttribute(e,t),Dc.fromBufferAttribute(e,i),Nc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Lc,r.x),a.addScaledVector(Dc,r.y),a.addScaledVector(Nc,r.z),a}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),vi.subVectors(e,t),Vn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Vn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,i),Us.subVectors(r,i),Cc.subVectors(e,i);let l=Ns.dot(Cc),c=Us.dot(Cc);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,s);let h=Ns.dot(Pc),u=Us.dot(Pc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Ns,a);Ic.subVectors(e,r);let f=Ns.dot(Ic),g=Us.dot(Ic);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Us,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Zu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Zu,o);let m=1/(p+y+d);return a=y*m,o=d*m,t.copy(i).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Ha.subVectors(this.max,yr),Fs.subVectors(e.a,yr),Os.subVectors(e.b,yr),Bs.subVectors(e.c,yr),Hi.subVectors(Os,Fs),Gi.subVectors(Bs,Os),ds.subVectors(Fs,Bs);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-ds.z,ds.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,ds.z,0,-ds.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-ds.y,ds.x,0];return!Uc(t,Fs,Os,Bs,Ha)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Fs,Os,Bs,Ha))?!1:(Ga.crossVectors(Hi,Gi),t=[Ga.x,Ga.y,Ga.z],Uc(t,Fs,Os,Bs,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,za=new si,Fs=new L,Os=new L,Bs=new L,Hi=new L,Gi=new L,ds=new L,yr=new L,Ha=new L,Ga=new L,fs=new L;function Uc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fs.fromArray(n,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bt=new L,Va=new se,mm=0,xn=class extends ii{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wh,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?zl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qd(e,this.array)}};var zr=class extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Hr=class extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}},gm=new si,Mr=new L,Fc=new L,wi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Fc)),this.expandByPoint(Mr.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xm=0,Nn=new mt,Oc=new _n,ks=new L,wn=new si,Sr=new si,Yt=new L,Rt=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?Hr:zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(wn.min,Sr.min),wn.expandByPoint(Yt),Yt.addVectors(wn.max,Sr.max),wn.expandByPoint(Yt)):(wn.expandByPoint(Sr.min),wn.expandByPoint(Sr.max))}wn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),Yt.add(ks)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new L,l[U]=new L;let h=new L,u=new L,d=new L,f=new se,g=new se,y=new se,p=new L,m=new L;function _(U,I,R){c[U]=c[I]=c[R]=1,h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,R),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,R),u.sub(h),d.sub(h),g.sub(f),y.sub(f);let D=1/(g.x*y.y-y.x*g.y);isFinite(D)&&(p.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(D),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(D),o[U].add(p),o[I].add(p),o[R].add(p),l[U].add(m),l[I].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,I=S.length;U<I;++U){let R=S[U],D=R.start,z=R.count;for(let P=D,F=D+z;P<F;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new L,A=new L,w=new L,x=new L;function E(U){w.fromBufferAttribute(s,U),x.copy(w);let I=o[U];v.copy(I),v.sub(w.multiplyScalar(w.dot(I))).normalize(),A.crossVectors(x,I);let D=A.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,D)}for(let U=0,I=i.count;U<I;++U)c[U]&&E(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new xn(d,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ju(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ju(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Ju(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ji()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var un=new L,Gr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?zl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qd(e,this.data.array)}},Bc=new L,_m=new L,vm=new Ye,Xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Bc.subVectors(i,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||vm.getNormalMatrix(e),s=this.coplanarPoint(Bc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ym=0,Ai=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=ar,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=ca,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ri=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zs,br=new L,Hs=new L,Gs=new L,Vs=new se,Er=new se,tf=new mt,Wa=new L,Tr=new L,Xa=new L,Ku=new se,kc=new se,$u=new se,Xi=class extends _n{constructor(e=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ao(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Gr(i,3,0,!1)),zs.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=zs,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),tf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;qa(Wa.set(-.5,-.5,0),Gs,a,Hs,s,r),qa(Tr.set(.5,-.5,0),Gs,a,Hs,s,r),qa(Xa.set(.5,.5,0),Gs,a,Hs,s,r),Ku.set(0,0),kc.set(1,0),$u.set(1,1);let o=e.ray.intersectTriangle(Wa,Tr,Xa,!1,br);if(o===null&&(qa(Tr.set(-.5,.5,0),Gs,a,Hs,s,r),kc.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,Tr,!1,br),o===null))return;let l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:bi.getInterpolation(br,Wa,Tr,Xa,Ku,kc,$u,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function qa(n,e,t,i,s,r){Vs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Er.x=r*Vs.x-s*Vs.y,Er.y=s*Vs.x+r*Vs.y):Er.copy(Vs),n.copy(e),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(tf)}var Si=new L,zc=new L,Ya=new L,Za=new L,Vr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zc.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(zc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Za.dot(this.direction),l=-Za.dot(Ya),c=Za.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zc).addScaledVector(Ya,d),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,p=t.z-a.z,m=i.x-a.x,_=i.y-a.y,S=i.z-a.z,v=Math.abs(l),A=Math.abs(c),w=Math.abs(h),x,E,U,I,R,D,z,P,F,X,H,ie;if(v>=A&&v>=w?(U=l,D=u,F=g,ie=m,l>=0?(x=c,E=h,I=d,R=f,z=y,P=p,X=_,H=S):(x=h,E=c,I=f,R=d,z=p,P=y,X=S,H=_)):A>=w?(U=c,D=d,F=y,ie=_,c>=0?(x=h,E=l,I=f,R=u,z=p,P=g,X=S,H=m):(x=l,E=h,I=u,R=f,z=g,P=p,X=m,H=S)):(U=h,D=f,F=p,ie=S,h>=0?(x=l,E=c,I=u,R=d,z=g,P=y,X=m,H=_):(x=c,E=l,I=d,R=u,z=y,P=g,X=_,H=m)),U===0)return null;let q=x/U,j=E/U,ee=1/U,we=I-q*D,He=R-j*D,J=z-q*F,Me=P-j*F,Re=X-q*ie,Be=H-j*ie,Se=Re*Me-Be*J,ke=we*Be-He*Re,bt=J*He-Me*we;if(s){if(Se<0||ke<0||bt<0)return null}else if((Se<0||ke<0||bt<0)&&(Se>0||ke>0||bt>0))return null;let Ge=Se+ke+bt;if(Ge===0)return null;let tt=ee*(Se*D+ke*F+bt*ie);return(Ge>0?tt<0:tt>0)?null:this.at(tt/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qn=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ju=new mt,ps=new Vr,Ja=new wi,Qu=new L,Ka=new L,$a=new L,ja=new L,Hc=new L,Qa=new L,ed=new L,eo=new L,De=class extends _n{constructor(e=new Rt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Hc.fromBufferAttribute(u,e),a?Qa.addScaledVector(Hc,h):Qa.addScaledVector(Hc.sub(t),h))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Ja.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ja,Qu)===null||ps.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(ju.copy(r).invert(),ps.copy(e.ray).applyMatrix4(ju),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,A=S;v<A;v+=3){let w=o.getX(v),x=o.getX(v+1),E=o.getX(v+2);s=to(this,m,e,i,c,h,u,w,x,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let _=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);s=to(this,a,e,i,c,h,u,_,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,A=S;v<A;v+=3){let w=v,x=v+1,E=v+2;s=to(this,m,e,i,c,h,u,w,x,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let _=p,S=p+1,v=p+2;s=to(this,a,e,i,c,h,u,_,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Mm(n,e,t,i,s,r,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ci,o),l===null)return null;eo.copy(o),eo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ka),n.getVertexPosition(l,$a),n.getVertexPosition(c,ja);let h=Mm(n,e,t,i,Ka,$a,ja,ed);if(h){let u=new L;bi.getBarycoord(ed,Ka,$a,ja,u),s&&(h.uv=bi.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};bi.getNormal(Ka,$a,ja,d.normal),h.face=d,h.barycoord=u}return h}var Wr=class extends dn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Zt,h=Zt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xr=class extends xn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new mt,td=new mt,no=[],nd=new si,Sm=new mt,wr=new De,Ar=new wi,Qs=class extends De{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),nd.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),Ar.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),td.multiplyMatrices(i,Ws),wr.matrixWorld=td,wr.raycast(e,no);for(let a=0,o=no.length;a<o;a++){let l=no[a];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,al,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new wi,bm=new se(.5,.5),io=new L,_s=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],_=r[12],S=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-_).normalize(),s[1].setComponents(c+a,f+h,m+g,A+_).normalize(),s[2].setComponents(c+o,f+u,m+y,A+S).normalize(),s[3].setComponents(c-o,f-u,m-y,A-S).normalize(),i)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,f-d,m-p,A-v).normalize();else if(s[4].setComponents(c-l,f-d,m-p,A-v).normalize(),t===Un)s[5].setComponents(c+l,f+d,m+p,A+v).normalize();else if(t===Nr)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=bm.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},id=new mt,Ro=class n{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];id.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new _s),i[s].setFromProjectionMatrix(id,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Co=class extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sd=new mt,Jc=new Vr,so=new wi,ro=new L,qr=class extends _n{constructor(e=new Rt,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;sd.copy(s).invert(),Jc.copy(e.ray).applyMatrix4(sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let p=c.getX(g);ro.fromBufferAttribute(u,p),rd(ro,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)ro.fromBufferAttribute(u,g),rd(ro,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rd(n,e,t,i,s,r,a){let o=Jc.distanceSqToPoint(n);if(o<t){let l=new L;Jc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Yr=class extends dn{constructor(e=[],t=bs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yn=class extends dn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends dn{constructor(e,t,i=Zn,s,r,a,o=Zt,l=Zt,c,h=Ti,u=1){if(h!==Ti&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zr=class extends Ci{constructor(e,t=Zn,i=bs,s,r,a=Zt,o=Zt,l,c=Ti){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jr=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(y,p,m,_,S,v,A,w,x,E,U){let I=v/x,R=A/E,D=v/2,z=A/2,P=w/2,F=x+1,X=E+1,H=0,ie=0,q=new L;for(let j=0;j<X;j++){let ee=j*R-z;for(let we=0;we<F;we++){let He=we*I-D;q[y]=He*_,q[p]=ee*S,q[m]=P,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[m]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(we/x),u.push(1-j/E),H+=1}}for(let j=0;j<E;j++)for(let ee=0;ee<x;ee++){let we=d+ee+F*j,He=d+ee+F*(j+1),J=d+(ee+1)+F*(j+1),Me=d+(ee+1)+F*j;l.push(we,He,Me),l.push(He,J,Me),ie+=6}o.addGroup(f,ie,U),f+=ie,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ri=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],p=i/2,m=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function _(){let v=new L,A=new L,w=0,x=(t-e)/i;for(let E=0;E<=r;E++){let U=[],I=E/r,R=I*(t-e)+e;for(let D=0;D<=s;D++){let z=D/s,P=z*l+o,F=Math.sin(P),X=Math.cos(P);A.x=R*F,A.y=-I*i+p,A.z=R*X,u.push(A.x,A.y,A.z),v.set(F,x,X).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-I),U.push(g++)}y.push(U)}for(let E=0;E<s;E++)for(let U=0;U<r;U++){let I=y[U][E],R=y[U+1][E],D=y[U+1][E+1],z=y[U][E+1];(e>0||U!==0)&&(h.push(I,R,z),w+=3),(t>0||U!==r-1)&&(h.push(R,D,z),w+=3)}c.addGroup(m,w,0),m+=w}function S(v){let A=g,w=new se,x=new L,E=0,U=v===!0?e:t,I=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),g++;let R=g;for(let D=0;D<=s;D++){let P=D/s*l+o,F=Math.cos(P),X=Math.sin(P);x.x=U*X,x.y=p*I,x.z=U*F,u.push(x.x,x.y,x.z),d.push(0,I,0),w.x=F*.5+.5,w.y=X*.5*I+.5,f.push(w.x,w.y),g++}for(let D=0;D<s;D++){let z=A+D,P=R+D;v===!0?h.push(P,P+1,z):h.push(P+1,P,z),E+=3}c.addGroup(m,E,v===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ai=class n extends wt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Po=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new L,v=new L,A=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],v),f(t[w+2],A),l(S,v,A,_)}function l(_,S,v,A){let w=A+1,x=[];for(let E=0;E<=w;E++){x[E]=[];let U=_.clone().lerp(v,E/w),I=S.clone().lerp(v,E/w),R=w-E;for(let D=0;D<=R;D++)D===0&&E===w?x[E][D]=U:x[E][D]=U.clone().lerp(I,D/R)}for(let E=0;E<w;E++)for(let U=0;U<2*(w-E)-1;U++){let I=Math.floor(U/2);U%2===0?(d(x[E][I+1]),d(x[E+1][I]),d(x[E][I])):(d(x[E][I+1]),d(x[E+1][I+1]),d(x[E+1][I]))}}function c(_){let S=new L;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(_),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let _=new L;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let v=p(_)/2/Math.PI+.5,A=m(_)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let S=a[_+0],v=a[_+2],A=a[_+4],w=Math.max(S,v,A),x=Math.min(S,v,A);w>.9&&x<.1&&(S<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,S){let v=_*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){let _=new L,S=new L,v=new L,A=new L,w=new se,x=new se,E=new se;for(let U=0,I=0;U<r.length;U+=9,I+=6){_.set(r[U+0],r[U+1],r[U+2]),S.set(r[U+3],r[U+4],r[U+5]),v.set(r[U+6],r[U+7],r[U+8]),w.set(a[I+0],a[I+1]),x.set(a[I+2],a[I+3]),E.set(a[I+4],a[I+5]),A.copy(_).add(S).add(v).divideScalar(3);let R=p(A);y(w,I+0,_,R),y(x,I+2,S,R),y(E,I+4,v,R)}}function y(_,S,v,A){A<0&&_.x===1&&(a[S]=_.x-1),v.x===0&&v.z===0&&(a[S]=A/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],a=[],o=new L,l=new mt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},er=class extends Pn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Io=class extends er{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var ad=new L,od=new L,Gc=new Ch,Vc=new Ch,Wc=new Ch,Lo=class extends Pn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(od.subVectors(s[0],s[1]).add(s[0]),c=od);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ad.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ad),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Gc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,p),Vc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,p),Wc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Gc.calc(l),Vc.calc(l),Wc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ld(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Em(n,e){let t=1-n;return t*t*e}function Tm(n,e){return 2*(1-n)*n*e}function wm(n,e){return n*n*e}function Pr(n,e,t,i){return Em(n,e)+Tm(n,t)+wm(n,i)}function Am(n,e){let t=1-n;return t*t*t*e}function Rm(n,e){let t=1-n;return 3*t*t*n*e}function Cm(n,e){return 3*(1-n)*n*n*e}function Pm(n,e){return n*n*n*e}function Ir(n,e,t,i,s){return Am(n,e)+Rm(n,t)+Cm(n,i)+Pm(n,s)}var Kr=class extends Pn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Do=class extends Pn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y),Ir(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends Pn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends Pn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends Pn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y),Pr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ld(o,l.x,c.x,h.x,u.x),ld(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:Lo,CubicBezierCurve:Kr,CubicBezierCurve3:Do,EllipseCurve:er,LineCurve:$r,LineCurve3:No,QuadraticBezierCurve:jr,QuadraticBezierCurve3:Uo,SplineCurve:Qr}),Fo=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Kc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},vs=class extends Fo{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new $r(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new jr(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Kr(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new er(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},oi=class extends vs{constructor(e){super(e),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new vs().fromJSON(s))}return this}};function Im(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=nf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Fm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ea(r,a,t,o,l,c,0),a}function nf(n,e,t,i,s){let r;if(s===Ym(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=cd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=cd(a/i|0,n[a],n[a+1],r);return r&&tr(r,r.next)&&(na(r),r=r.next),r}function ys(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(tr(t,t.next)||It(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ea(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Hm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Dm(n,i,s,r):Lm(n)){e.push(l.i,n.i,c.i),na(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Nm(ys(n),e),ea(n,e,t,i,s,r,2)):a===2&&Um(n,e,t,i,s,r):ea(ys(n),e,t,i,s,r,1);break}}}function Lm(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Rr(s,o,r,l,a,c,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(It(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),p=Math.max(h,u,d),m=$c(f,g,e,t,i),_=$c(y,p,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=m&&v&&v.z<=_;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Rr(o,h,l,u,c,d,S.x,S.y)&&It(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Rr(o,h,l,u,c,d,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Rr(o,h,l,u,c,d,S.x,S.y)&&It(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Rr(o,h,l,u,c,d,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!tr(i,s)&&rf(i,t,t.next,s)&&ta(i,s)&&ta(s,i)&&(e.push(i.i,t.i,s.i),na(t),na(t.next),t=n=s),t=t.next}while(t!==n);return ys(t)}function Um(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wm(a,o)){let l=af(a,o);a=ys(a,a.next),l=ys(l,l.next),ea(a,e,t,i,s,r,0),ea(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Fm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=nf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Vm(c))}s.sort(Om);for(let r=0;r<s.length;r++)t=Bm(s[r],t);return t}function Om(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Bm(n,e){let t=km(n,e);if(!t)return e;let i=af(t,n);return ys(i,i.next),ys(t,t.next)}function km(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(tr(n,t))return t;do{if(tr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&sf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ta(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&zm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function zm(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function Hm(n,e,t,i){let s=n;do s.z===0&&(s.z=$c(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Gm(s)}function Gm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function $c(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Vm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function sf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Rr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&sf(n,e,t,i,s,r,a,o)}function Wm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Xm(n,e)&&(ta(n,e)&&ta(e,n)&&qm(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||tr(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function tr(n,e){return n.x===e.x&&n.y===e.y}function rf(n,e,t,i){let s=oo(It(n,e,t)),r=oo(It(n,e,i)),a=oo(It(t,i,n)),o=oo(It(t,i,e));return!!(s!==r&&a!==o||s===0&&ao(n,t,e)||r===0&&ao(n,i,e)||a===0&&ao(t,n,i)||o===0&&ao(t,e,i))}function ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function oo(n){return n>0?1:n<0?-1:0}function Xm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&rf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ta(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function qm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function af(n,e){let t=jc(n.i,n.x,n.y),i=jc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function cd(n,e,t,i){let s=jc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Qc=class{static triangulate(e,t,i=2){return Im(e,t,i)}},ni=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];hd(e),ud(i,e);let a=e.length;t.forEach(hd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ud(i,t[l]);let o=Qc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ud(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qi=class n extends Rt{constructor(e=new oi([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Zm,S,v=!1,A,w,x,E;if(m){S=m.getSpacedPoints(h),v=!0,d=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,ne),w=new L,x=new L,E=new L}d||(p=0,f=0,g=0,y=0);let U=o.extractPoints(c),I=U.shape,R=U.holes;if(!ni.isClockWise(I)){I=I.reverse();for(let ne=0,de=R.length;ne<de;ne++){let ce=R[ne];ni.isClockWise(ce)&&(R[ne]=ce.reverse())}}function z(ne){let ce=10000000000000001e-36,Ae=ne[0];for(let ye=1;ye<=ne.length;ye++){let Je=ye%ne.length,Ue=ne[Je],rt=Ue.x-Ae.x,ot=Ue.y-Ae.y,ft=rt*rt+ot*ot,B=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ae.x),Math.abs(Ae.y)),Ft=ce*B*B;if(ft<=Ft){ne.splice(Je,1),ye--;continue}Ae=Ue}}z(I),R.forEach(z);let P=R.length,F=I;for(let ne=0;ne<P;ne++){let de=R[ne];I=I.concat(de)}function X(ne,de,ce){return de||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(de,ce)}let H=I.length;function ie(ne,de,ce){let Ae,ye,Je,Ue=ne.x-de.x,rt=ne.y-de.y,ot=ce.x-ne.x,ft=ce.y-ne.y,B=Ue*Ue+rt*rt,Ft=Ue*ft-rt*ot;if(Math.abs(Ft)>Number.EPSILON){let nt=Math.sqrt(B),yt=Math.sqrt(ot*ot+ft*ft),ge=de.x-rt/nt,Ut=de.y+Ue/nt,ze=ce.x-ft/yt,qe=ce.y+ot/yt,C=((ze-ge)*ft-(qe-Ut)*ot)/(Ue*ft-rt*ot);Ae=ge+Ue*C-ne.x,ye=Ut+rt*C-ne.y;let M=Ae*Ae+ye*ye;if(M<=2)return new se(Ae,ye);Je=Math.sqrt(M/2)}else{let nt=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(nt=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(nt=!0):Math.sign(rt)===Math.sign(ft)&&(nt=!0),nt?(Ae=-rt,ye=Ue,Je=Math.sqrt(B)):(Ae=Ue,ye=rt,Je=Math.sqrt(B/2))}return new se(Ae/Je,ye/Je)}let q=[];for(let ne=0,de=F.length,ce=de-1,Ae=ne+1;ne<de;ne++,ce++,Ae++)ce===de&&(ce=0),Ae===de&&(Ae=0),q[ne]=ie(F[ne],F[ce],F[Ae]);let j=[],ee,we=q.concat();for(let ne=0,de=P;ne<de;ne++){let ce=R[ne];ee=[];for(let Ae=0,ye=ce.length,Je=ye-1,Ue=Ae+1;Ae<ye;Ae++,Je++,Ue++)Je===ye&&(Je=0),Ue===ye&&(Ue=0),ee[Ae]=ie(ce[Ae],ce[Je],ce[Ue]);j.push(ee),we=we.concat(ee)}let He;if(p===0)He=ni.triangulateShape(F,R);else{let ne=[],de=[];for(let ce=0;ce<p;ce++){let Ae=ce/p,ye=f*Math.cos(Ae*Math.PI/2),Je=g*Math.sin(Ae*Math.PI/2)+y;for(let Ue=0,rt=F.length;Ue<rt;Ue++){let ot=X(F[Ue],q[Ue],Je);ke(ot.x,ot.y,-ye),Ae===0&&ne.push(ot)}for(let Ue=0,rt=P;Ue<rt;Ue++){let ot=R[Ue];ee=j[Ue];let ft=[];for(let B=0,Ft=ot.length;B<Ft;B++){let nt=X(ot[B],ee[B],Je);ke(nt.x,nt.y,-ye),Ae===0&&ft.push(nt)}Ae===0&&de.push(ft)}}He=ni.triangulateShape(ne,de)}let J=He.length,Me=g+y;for(let ne=0;ne<H;ne++){let de=d?X(I[ne],we[ne],Me):I[ne];v?(x.copy(A.normals[0]).multiplyScalar(de.x),w.copy(A.binormals[0]).multiplyScalar(de.y),E.copy(S[0]).add(x).add(w),ke(E.x,E.y,E.z)):ke(de.x,de.y,0)}for(let ne=1;ne<=h;ne++)for(let de=0;de<H;de++){let ce=d?X(I[de],we[de],Me):I[de];v?(x.copy(A.normals[ne]).multiplyScalar(ce.x),w.copy(A.binormals[ne]).multiplyScalar(ce.y),E.copy(S[ne]).add(x).add(w),ke(E.x,E.y,E.z)):ke(ce.x,ce.y,u/h*ne)}for(let ne=p-1;ne>=0;ne--){let de=ne/p,ce=f*Math.cos(de*Math.PI/2),Ae=g*Math.sin(de*Math.PI/2)+y;for(let ye=0,Je=F.length;ye<Je;ye++){let Ue=X(F[ye],q[ye],Ae);ke(Ue.x,Ue.y,u+ce)}for(let ye=0,Je=R.length;ye<Je;ye++){let Ue=R[ye];ee=j[ye];for(let rt=0,ot=Ue.length;rt<ot;rt++){let ft=X(Ue[rt],ee[rt],Ae);v?ke(ft.x,ft.y+S[h-1].y,S[h-1].x+ce):ke(ft.x,ft.y,u+ce)}}}Re(),Be();function Re(){let ne=s.length/3;if(d){let de=0,ce=H*de;for(let Ae=0;Ae<J;Ae++){let ye=He[Ae];bt(ye[2]+ce,ye[1]+ce,ye[0]+ce)}de=h+p*2,ce=H*de;for(let Ae=0;Ae<J;Ae++){let ye=He[Ae];bt(ye[0]+ce,ye[1]+ce,ye[2]+ce)}}else{for(let de=0;de<J;de++){let ce=He[de];bt(ce[2],ce[1],ce[0])}for(let de=0;de<J;de++){let ce=He[de];bt(ce[0]+H*h,ce[1]+H*h,ce[2]+H*h)}}i.addGroup(ne,s.length/3-ne,0)}function Be(){let ne=s.length/3,de=0;Se(F,de),de+=F.length;for(let ce=0,Ae=R.length;ce<Ae;ce++){let ye=R[ce];Se(ye,de),de+=ye.length}i.addGroup(ne,s.length/3-ne,1)}function Se(ne,de){let ce=ne.length;for(;--ce>=0;){let Ae=ce,ye=ce-1;ye<0&&(ye=ne.length-1);for(let Je=0,Ue=h+p*2;Je<Ue;Je++){let rt=H*Je,ot=H*(Je+1),ft=de+Ae+rt,B=de+ye+rt,Ft=de+ye+ot,nt=de+Ae+ot;Ge(ft,B,Ft,nt)}}}function ke(ne,de,ce){l.push(ne),l.push(de),l.push(ce)}function bt(ne,de,ce){tt(ne),tt(de),tt(ce);let Ae=s.length/3,ye=_.generateTopUV(i,s,Ae-3,Ae-2,Ae-1);st(ye[0]),st(ye[1]),st(ye[2])}function Ge(ne,de,ce,Ae){tt(ne),tt(de),tt(Ae),tt(de),tt(ce),tt(Ae);let ye=s.length/3,Je=_.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);st(Je[0]),st(Je[1]),st(Je[3]),st(Je[1]),st(Je[2]),st(Je[3])}function tt(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function st(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Kc[s.type]().fromJSON(s)),new n(i,e.options)}},Zm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-g),new se(y,1-m)]:[new se(o,1-l),new se(h,1-u),new se(f,1-g),new se(p,1-m)]}};function Jm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ia=class n extends Po{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},li=class n extends Rt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new se,f=new L,g=new L,y=new L,p=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let _=0;_<=t;_++){let S=i+_*h*s,v=Math.sin(S),A=Math.cos(S);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=_/t,d.y=w/(e.length-1),o.push(d.x,d.y);let x=l[3*w+0]*v,E=l[3*w+1],U=l[3*w+0]*A;c.push(x,E,U)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let v=S+_*e.length,A=v,w=v+e.length,x=v+e.length+1,E=v+1;r.push(A,w,E),r.push(x,E,w)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Yi=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let _=m*d-a;for(let S=0;S<c;S++){let v=S*u-r;g.push(v,-_,0),y.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let S=_+c*m,v=_+c*(m+1),A=_+1+c*(m+1),w=_+1+c*m;f.push(S,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},nr=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new L,g=new se;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let p=y*(i+1);for(let m=0;m<i;m++){let _=m+p,S=_,v=_+i+1,A=_+i+2,w=_+1;o.push(S,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},sa=class n extends Rt{constructor(e=new oi([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;ni.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let _=g[p];ni.isClockWise(_)===!0&&(g[p]=_.reverse())}let y=ni.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){let _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let p=0,m=y.length;p<m;p++){let _=y[p],S=_[0]+u,v=_[1]+u,A=_[2]+u;i.push(S,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Km(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Km(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var vn=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let _=[],S=m/i,v=a+S*o,A=e*Math.cos(v),w=Math.sqrt(e*e-A*A),x=0;m===0&&a===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let U=E/t,I=s+U*r;u.x=-w*Math.cos(I),u.y=A,u.z=w*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(U+x,1-S),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let S=h[m][_+1],v=h[m][_],A=h[m+1][_],w=h[m+1][_+1];(m!==0||a>0)&&f.push(S,v,w),(m!==i-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ra=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let m=0;m<=s;m++){let _=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,_=(s+1)*(y-1)+p-1,S=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,_,v),l.push(_,S,v)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ts(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(dd(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(dd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Ts(n[t]);for(let s in i)e[s]=i[s]}return e}function dd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $m(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ph(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Hl={clone:Ts,merge:on},jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bo=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Zi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Zi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,o=2*t-i;break;case Zc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:a=e,l=2*i-t;break;case Zc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,_=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,S=(-1-f)*p+(1.5+f)*y+.5*g,v=f*p-f*y;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+_*a[c+A]+S*a[l+A]+v*a[u+A];return r}},Ho=class extends Zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Go=class extends Zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends Zi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*d+g*2,_=u[m],S=u[m+1],v=e*d+g*2,A=h[v],w=h[v+1],x=t0(i,t,_,A,s);r[g]=of(x,y,S,w,p)}return r}};function of(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function e0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function t0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=of(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=e0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var In=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),lo(e.settings)&&(i.settings={inTangents:Xs(e.settings.inTangents,Array),outTangents:Xs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;lo(this.settings)&&(fd(this.settings.inTangents,e),fd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;lo(this.settings)&&(pd(this.settings.inTangents,e),pd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&im(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,lo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function pd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=So;var Ji=class extends In{constructor(e,t,i){super(e,t,i)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Lr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends In{constructor(e,t,i,s){super(e,t,i,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends In{constructor(e,t,i,s){super(e,t,i,s)}};Xo.prototype.ValueTypeName="number";var qo=class extends Zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},aa=class extends In{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends In{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Lr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends In{constructor(e,t,i,s){super(e,t,i,s)}};Yo.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lf=new Zo,Jo=class{constructor(e){this.manager=e!==void 0?e:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=new L,ho=new Cn,ei=new L,Ms=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(co,ho,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(co,ho,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new L,md=new se,gd=new se,an=class extends Ms{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,md,gd),t.subVectors(gd,md)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ir=class extends Ms{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var qs=-90,Ys=1,sr=class extends _n{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new an(qs,Ys,e,t);r.layers=this.layers,this.add(r);let a=new an(qs,Ys,e,t);a.layers=this.layers,this.add(a);let o=new an(qs,Ys,e,t);o.layers=this.layers,this.add(o);let l=new an(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new an(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ko=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=n0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function n0(){this._document.hidden===!1&&this.reset()}var Ih="\\[\\]\\.:\\/",i0=new RegExp("["+Ih+"]","g"),Lh="[^"+Ih+"]",s0="[^"+Ih.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Lh),a0=/(WCOD+)?/.source.replace("WCOD",s0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),c0=new RegExp("^"+r0+a0+o0+l0+"$"),h0=["material","materials","bones","map"],eh=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){let t=c0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=eh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fM=new Float32Array(1);var Bh=class Bh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Bh.prototype.isMatrix2=!0;var th=Bh;function Dh(n,e,t,i){let s=u0(i);switch(t){case yh:return n*e;case al:return n*e/s.components*s.byteLength;case ol:return n*e/s.components*s.byteLength;case $i:return n*e*2/s.components*s.byteLength;case ll:return n*e*2/s.components*s.byteLength;case Mh:return n*e*3/s.components*s.byteLength;case Jn:return n*e*4/s.components*s.byteLength;case cl:return n*e*4/s.components*s.byteLength;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case fl:return Math.max(n,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:case xl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:case ma:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ga:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u0(n){switch(n){case Ln:case gh:return{byteLength:1,components:1};case lr:case xh:case fn:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case Zn:case il:case On:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function f0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,yx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ix=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
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
}`,Fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ox=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,kx=`#define TOON
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
}`,zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Hx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Wx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qx=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:y0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:b0,begin_vertex:E0,beginnormal_vertex:T0,bsdfs:w0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:N0,color_pars_vertex:U0,color_vertex:F0,common:O0,defaultnormal_vertex:B0,displacementmap_pars_vertex:k0,displacementmap_vertex:z0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rg,envmap_vertex:J0,fog_vertex:K0,fog_pars_vertex:$0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,lightprobes_pars_fragment:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:vg,map_fragment:yg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:bg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:wg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Pg,normal_fragment_begin:Ig,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:$g,shadowmask_pars_fragment:jg,skinbase_vertex:Qg,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ax,transmission_fragment:ox,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:xx,cube_frag:_x,depth_vert:vx,depth_frag:yx,distance_vert:Mx,distance_frag:Sx,equirect_vert:bx,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:wx,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Ix,meshmatcap_frag:Lx,meshnormal_vert:Dx,meshnormal_frag:Nx,meshphong_vert:Ux,meshphong_frag:Fx,meshphysical_vert:Ox,meshphysical_frag:Bx,meshtoon_vert:kx,meshtoon_frag:zx,points_vert:Hx,points_frag:Gx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},Ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ui={basic:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:on([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:on([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:on([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:on([Ee.points,Ee.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:on([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:on([Ee.common,Ee.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:on([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:on([Ee.sprite,Ee.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:on([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:on([Ee.lights,Ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Gl={r:0,b:0,g:0},Yx=new mt,If=new Ye;If.set(-1,0,0,0,1,0,0,0,1);function Zx(n,e,t,i,s,r){let a=new $e(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(_){let S=!1,v=f(_);v===null?p(a,o):v&&v.isColor&&(p(v,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new De(new Ht(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Ts(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(If),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new Yi(2,2),new Dt({name:"BackgroundMaterial",uniforms:Ts(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,S){_.getRGB(Gl,Ph(n)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:y,dispose:m}}function Jx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(R,D,z,P,F){let X=!1,H=u(R,P,z,D);r!==H&&(r=H,c(r.object)),X=f(R,P,z,F),X&&g(R,P,z,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(R,D,z,P),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function u(R,D,z,P){let F=P.wireframe===!0,X=i[D.id];X===void 0&&(X={},i[D.id]=X);let H=R.isInstancedMesh===!0?R.id:0,ie=X[H];ie===void 0&&(ie={},X[H]=ie);let q=ie[z.id];q===void 0&&(q={},ie[z.id]=q);let j=q[F];return j===void 0&&(j=d(l()),q[F]=j),j}function d(R){let D=[],z=[],P=[];for(let F=0;F<t;F++)D[F]=0,z[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:P,object:R,attributes:{},index:null}}function f(R,D,z,P){let F=r.attributes,X=D.attributes,H=0,ie=z.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=F[q],we=X[q];if(we===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(we=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(we=R.instanceColor)),ee===void 0||ee.attribute!==we||we&&ee.data!==we.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(R,D,z,P){let F={},X=D.attributes,H=0,ie=z.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=X[q];ee===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));let we={};we.attribute=ee,ee&&ee.data&&(we.data=ee.data),F[q]=we,H++}r.attributes=F,r.attributesNum=H,r.index=P}function y(){let R=r.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function p(R){m(R,0)}function m(R,D){let z=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;z[R]=1,P[R]===0&&(n.enableVertexAttribArray(R),P[R]=1),F[R]!==D&&(n.vertexAttribDivisor(R,D),F[R]=D)}function _(){let R=r.newAttributes,D=r.enabledAttributes;for(let z=0,P=D.length;z<P;z++)D[z]!==R[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function S(R,D,z,P,F,X,H){H===!0?n.vertexAttribIPointer(R,D,z,F,X):n.vertexAttribPointer(R,D,z,P,F,X)}function v(R,D,z,P){y();let F=P.attributes,X=z.getAttributes(),H=D.defaultAttributeValues;for(let ie in X){let q=X[ie];if(q.location>=0){let j=F[ie];if(j===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){let ee=j.normalized,we=j.itemSize,He=e.get(j);if(He===void 0)continue;let J=He.buffer,Me=He.type,Re=He.bytesPerElement,Be=Me===n.INT||Me===n.UNSIGNED_INT||j.gpuType===il;if(j.isInterleavedBufferAttribute){let Se=j.data,ke=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,bt=j.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ge=0;Ge<q.locationSize;Ge++)m(q.location+Ge,Se.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)p(q.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ge=0;Ge<q.locationSize;Ge++)S(q.location+Ge,we/q.locationSize,Me,ee,ke*Re,(bt+we/q.locationSize*Ge)*Re,Be)}else{if(j.isInstancedBufferAttribute){for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se,j.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<q.locationSize;Se++)p(q.location+Se);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Se=0;Se<q.locationSize;Se++)S(q.location+Se,we/q.locationSize,Me,ee,we*Re,we/q.locationSize*Se*Re,Be)}}else if(H!==void 0){let ee=H[ie];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(q.location,ee);break;case 3:n.vertexAttrib3fv(q.location,ee);break;case 4:n.vertexAttrib4fv(q.location,ee);break;default:n.vertexAttrib1fv(q.location,ee)}}}}_()}function A(){U();for(let R in i){let D=i[R];for(let z in D){let P=D[z];for(let F in P){let X=P[F];for(let H in X)h(X[H].object),delete X[H];delete P[F]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;let D=i[R.id];for(let z in D){let P=D[z];for(let F in P){let X=P[F];for(let H in X)h(X[H].object),delete X[H];delete P[F]}}delete i[R.id]}function x(R){for(let D in i){let z=i[D];for(let P in z){let F=z[P];if(F[R.id]===void 0)continue;let X=F[R.id];for(let H in X)h(X[H].object),delete X[H];delete F[R.id]}}}function E(R){for(let D in i){let z=i[D],P=R.isInstancedMesh===!0?R.id:0,F=z[P];if(F!==void 0){for(let X in F){let H=F[X];for(let ie in H)h(H[ie].object),delete H[ie];delete F[X]}delete z[P],Object.keys(z).length===0&&delete i[D]}}}function U(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function Kx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $x(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Jn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ln&&x!==On&&!E&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:A,samples:w}}function jx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Xn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,S=_*4,v=m.clippingState||null;l.value=v,v=h(g,d,S,f);for(let A=0;A!==S;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=f;S!==y;++S,v+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var va=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Pi});r.uniforms.tEquirect.value=t;let a=new De(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Jt),new sr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},cf=256,Qx=3,e_=20,Lf=256,Df=16,t_=3,n_=new L,i_=new $e,Wl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sr(1,10,null),this._boxMesh=new De(new Ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=n_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(i_));let p=new sr(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cf,$d(e))}_fromTexture(e,t){e.mapping===bs||e.mapping===or?this._setSize(e.image.length===0?cf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=hf(e,!1,!1),i=Math.log2(e)-Qx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=hf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===bs||e.mapping===or?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s_(),this._integrationMaterial=r_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Df);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-t_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Lf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=a_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function hf(n,e,t){return new va(n,{minFilter:Ii,generateMipmaps:e,type:fn,colorSpace:Rn,depthBuffer:t})}function ya(n,e,t){return new Dt({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Gt,blending:Pi,depthTest:!1,depthWrite:!1})}function s_(){return ya("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function r_(){return ya("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Df}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function a_(){return ya("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function uf(){return ya("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function df(){return ya("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===el||f===tl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new va(g.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===el||f===tl,y=f===bs||f===or;if(g||y){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Wl(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Wl(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===el?d.mapping=bs:f===tl&&(d.mapping=or),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function l_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Cr("WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function u(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=y!==null?y.array.length:p.array.length/3-1,S=p.count>=65535?Hr:zr,v=new S(Math.ceil(_/3)*6,1),A=v.array;if(y!==null){let x=y.array;m=y.version;for(let E=0,U=0;E<_;E+=3){let I=x[E+0],R=x[E+1],D=x[E+2];A[U++]=I,A[U++]=R,A[U++]=R,A[U++]=D,A[U++]=D,A[U++]=I}}else{m=p.version;for(let x=0,E=0;x<_;x+=3){let U=x+0,I=x+1,R=x+2;A[E++]=U,A[E++]=I,A[E++]=I,A[E++]=R,A[E++]=R,A[E++]=U}}v.version=m;let w=r.get(g);w&&e.remove(w),r.set(g,v)}function d(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function h_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let y=0;for(let p=0;p<f;p++)y+=d[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d_(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let U=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*A*4*u),x=new Or(w,v,A,u);x.type=On,x.needsUpdate=!0;let E=S*4;for(let I=0;I<u;I++){let R=p[I],D=m[I],z=_[I],P=v*A*4*I;for(let F=0;F<R.count;F++){let X=F*E;f===!0&&(s.fromBufferAttribute(R,F),w[P+X+0]=s.x,w[P+X+1]=s.y,w[P+X+2]=s.z,w[P+X+3]=0),g===!0&&(s.fromBufferAttribute(D,F),w[P+X+4]=s.x,w[P+X+5]=s.y,w[P+X+6]=s.z,w[P+X+7]=0),y===!0&&(s.fromBufferAttribute(z,F),w[P+X+8]=s.x,w[P+X+9]=s.y,w[P+X+10]=s.z,w[P+X+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new se(v,A)},i.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function f_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var p_={[lh]:"LINEAR_TONE_MAPPING",[ch]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[uh]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[dh]:"CUSTOM_TONE_MAPPING"};function m_(n,e,t,i,s,r){let a=new Kt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Rt;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let u=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new De(h,u),f=new ir(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,_=null,S=[],v=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(A,w)}},this.setEffects=function(A){S=A,v=S.length>0&&S[0].isRenderPass===!0;let w=a.width,x=a.height;S.length>0&&o===null&&(o=new Kt(w,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(w,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(U=>U.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ci(w,x),r===!0&&(c.format=Li,c.type=Es)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let U=0;U<S.length;U++){let I=S[U];I.setSize&&I.setSize(w,x),E&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,w){if(p||A.toneMapping===Fn&&S.length===0)return!1;if(_=w,w!==null){let x=w.width,E=w.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return v===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Fn,!0},this.hasRenderPass=function(){return v},this.end=function(A,w){A.toneMapping=m,p=!0;let x=a,E=o;for(let U=0;U<S.length;U++){let I=S[U];I.enabled!==!1&&(I.render(A,E,x,w),I.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,u.defines={},ht.getTransfer(g)===xt&&(u.defines.SRGB_TRANSFER="");let U=p_[y];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(_),A.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Nf=new dn,Uf=new Ci(1,1),Ff=new Zr(1),Of=new Or,Bf=new wo,kf=new Yr,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),xf=new Float32Array(4);function hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ql(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function y_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),Wt(t,i)}}function M_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),Wt(t,i)}}function S_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),Wt(t,i)}}function b_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function A_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function Yl(n){return n.version===0&&(n.compareFunction=Th,n.needsUpdate=!0),n}function I_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Yl(Uf):r=Nf,t.setTexture2D(e||r,s)}function L_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Bf,s)}function D_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Yl(Ff):r=kf,t.setTextureCube(e||r,s)}function N_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Of,s)}function U_(n){switch(n){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return v_;case 35674:return y_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return w_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(n,e){n.uniform1fv(this.addr,e)}function O_(n,e){let t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function B_(n,e){let t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function k_(n,e){let t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function z_(n,e){let t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H_(n,e){let t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G_(n,e){let t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function X_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function Y_(n,e){n.uniform1uiv(this.addr,e)}function Z_(n,e){n.uniform2uiv(this.addr,e)}function J_(n,e){n.uniform3uiv(this.addr,e)}function K_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Yl(Uf):a=Nf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function j_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bf,r[a])}function Q_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Yl(Ff):a=kf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ev(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Of,r[a])}function tv(n){switch(n){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return k_;case 35674:return z_;case 35675:return H_;case 35676:return G_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return Z_;case 36295:return J_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ev}}var Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tv(t.type)}},Vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},kh=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function nv(n,e,t){let i=n.name,s=i.length;for(kh.lastIndex=0;;){let r=kh.exec(i),a=kh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_f(t,c===void 0?new Hh(o,n,e):new Gh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Vh(o),_f(t,u)),t=u}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function vf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iv=37297,sv=0;function rv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var yf=new Ye;function av(n){ht._getMatrix(yf,ht.workingColorSpace,n);let e=`mat3( ${yf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Dr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rv(n.getShaderSource(e),o)}else return r}function ov(n,e){let t=av(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lv={[lh]:"Linear",[ch]:"Reinhard",[hh]:"Cineon",[uh]:"ACESFilmic",[fh]:"AgX",[ph]:"Neutral",[dh]:"Custom"};function cv(n,e){let t=lv[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vl=new L;function hv(){ht.getLuminanceCoefficients(Vl);let n=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function dv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _a(n){return n!==""}function Sf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(n){return n.replace(pv,mv)}function mv(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wh(t)}var gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(n){return n.replace(gv,xv)}function xv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _v={[la]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function vv(n){return _v[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yv={[or]:"ENVMAP_MODE_REFRACTION"};function Mv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sv={[oh]:"ENVMAP_BLENDING_MULTIPLY",[Fd]:"ENVMAP_BLENDING_MIX",[Od]:"ENVMAP_BLENDING_ADD"};function bv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sv[n.combine]||"ENVMAP_BLENDING_NONE"}function Ev(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mv(t),u=bv(t),d=uv(t),f=dv(r),g=s.createProgram(),y,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(y=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?et.tonemapping_pars_fragment:"",t.toneMapping!==Fn?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),a=Wh(a),a=Sf(a,t),a=bf(a,t),o=Wh(o),o=Sf(o,t),o=bf(o,t),a=Ef(a),o=Ef(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+y+a,S=m+p+o,v=vf(s,s.VERTEX_SHADER,_),A=vf(s,s.FRAGMENT_SHADER,S);s.attachShader(g,v),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(I){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(v)||"",z=s.getShaderInfoLog(A)||"",P=R.trim(),F=D.trim(),X=z.trim(),H=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,v,A);else{let q=Mf(s,v,"vertex"),j=Mf(s,A,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+q+`
`+j)}else P!==""?Ve("WebGLProgram: Program Info Log:",P):(F===""||X==="")&&(ie=!1);ie&&(I.diagnostics={runnable:H,programLog:P,vertexShader:{log:F,prefix:y},fragmentShader:{log:X,prefix:p}})}s.deleteShader(v),s.deleteShader(A),x=new cr(s,g),E=fv(s,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,iv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var Tv=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qh(e),t.set(e,i)),i}},qh=class{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}};function wv(n){return n===$i||n===ma||n===ga}function Av(n,e,t,i,s,r){let a=new Br,o=new Xh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,U,I,R,D){let z=I.fog,P=R.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||F,X),ie=d[x.type],q=i.precision;x.precision!==null&&(q=i.getMaxPrecision(x.precision),q!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=j!==void 0?j.length:0,we=0;P.morphAttributes.position!==void 0&&(we=1),P.morphAttributes.normal!==void 0&&(we=2),P.morphAttributes.color!==void 0&&(we=3);let He,J,Me,Re;if(ie){let be=ui[ie];He=be.vertexShader,J=be.fragmentShader}else{He=x.vertexShader,J=x.fragmentShader;let be=o.getVertexShaderStage(x),_t=o.getFragmentShaderStage(x);o.update(x,be,_t),Me=be.id,Re=_t.id}let Be=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),ke=R.isInstancedMesh===!0,bt=R.isBatchedMesh===!0,Ge=!!x.map,tt=!!x.matcap,st=!!H,ne=st&&H.isPMREMTexture===!0,de=!!x.aoMap,ce=!!x.lightMap,Ae=!!x.bumpMap&&x.wireframe===!1,ye=!!x.normalMap,Je=!!x.displacementMap,Ue=!!x.emissiveMap,rt=!!x.metalnessMap,ot=!!x.roughnessMap,ft=x.anisotropy>0,B=x.clearcoat>0,Ft=x.diffuseRoughness>0,nt=x.dispersion>0,yt=x.retroreflectivity>0,ge=x.iridescence>0,Ut=x.sheen>0,ze=x.transmission>0,qe=ft&&!!x.anisotropyMap,C=B&&!!x.clearcoatMap,M=B&&!!x.clearcoatNormalMap,V=B&&!!x.clearcoatRoughnessMap,re=Ft&&!!x.diffuseRoughnessMap,te=ge&&!!x.iridescenceMap,he=ge&&!!x.iridescenceThicknessMap,xe=Ut&&!!x.sheenColorMap,K=Ut&&!!x.sheenRoughnessMap,$=!!x.specularMap,fe=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=ze&&!!x.transmissionMap,Z=ze&&!!x.thicknessMap,pe=!!x.gradientMap,le=!!x.alphaMap,ue=x.alphaTest>0,Fe=!!x.alphaHash,Qe=!!x.extensions,ae=Fn;x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Oe=ne?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,je={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:J,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:bt,batchingColor:bt&&R._colorsTexture!==null,instancing:ke,instancingColor:ke&&R.instanceColor!==null,instancingMorph:ke&&R.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:tt,envMap:st,envMapMode:st&&H.mapping,envMapPMREM:ne,envMapMaxLod:ne?Oe.length-1:null,envMapSize:ne?Oe[0].width:null,aoMap:de,lightMap:ce,bumpMap:Ae,normalMap:ye,displacementMap:Je,emissiveMap:Ue,normalMapObjectSpace:ye&&x.normalMapType===zd,normalMapTangentSpace:ye&&x.normalMapType===Sh,packedNormalMap:ye&&x.normalMapType===Sh&&wv(x.normalMap.format),metalnessMap:rt,roughnessMap:ot,anisotropy:ft,anisotropyMap:qe,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:V,diffuseRoughness:Ft,diffuseRoughnessMap:re,dispersion:nt,retroreflection:yt,iridescence:ge,iridescenceMap:te,iridescenceThicknessMap:he,sheen:Ut,sheenColorMap:xe,sheenRoughnessMap:K,specularMap:$,specularColorMap:fe,specularIntensityMap:N,transmission:ze,transmissionMap:Q,thicknessMap:Z,gradientMap:pe,opaque:x.transparent===!1&&x.blending===ar&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Fe,combine:x.combine,mapUv:Ge&&f(x.map.channel),aoMapUv:de&&f(x.aoMap.channel),lightMapUv:ce&&f(x.lightMap.channel),bumpMapUv:Ae&&f(x.bumpMap.channel),normalMapUv:ye&&f(x.normalMap.channel),displacementMapUv:Je&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:rt&&f(x.metalnessMap.channel),roughnessMapUv:ot&&f(x.roughnessMap.channel),anisotropyMapUv:qe&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:$&&f(x.specularMap.channel),specularColorMapUv:fe&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:le&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ye||ft),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Ge||le),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function y(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(E,x),m(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function m(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let E=d[x.type],U;if(E){let I=ui[E];U=Hl.clone(I.uniforms)}else U=x.uniforms;return U}function S(x,E){let U=h.get(E);return U!==void 0?++U.usedTimes:(U=new Ev(n,E,x,s),c.push(U),h.set(E,U)),U}function v(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:S,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:w}}function Rv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,p,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=y,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function l(d,f,g,y,p,m,_){_.reversedDepth===!0&&(p=-p);let S=o(d,f,g,y,p,m);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(d,f,g,y,p,m){let _=o(d,f,g,y,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Cv),i.length>1&&i.sort(f||wf),s.length>1&&s.sort(f||wf)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Pv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Af,n.set(i,[a])):s>=r.length?(a=new Af,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Lv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Dv=0;function Nv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uv(n){let e=new Iv,t=Lv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new mt,a=new mt;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,_=0,S=0,v=0,A=0,w=0,x=0,E=0,U=0,I=0;c.sort(Nv);for(let D=0,z=c.length;D<z;D++){let P=c[D],F=P.color,X=P.intensity,H=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$i?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*X,u+=F.g*X,d+=F.b*X;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],X);I++}else if(P.isSunLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,ee=t.get(P);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=ie;let we=j.getViewportCount();for(let He=0;He<we;He++)i.sunShadowMatrix[y+He]=j.getMatrix(He),i.sunShadowCascade[y+He]=j._cascadeData[He];y+=we,g++}i.sun[f]=q,f++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,ee=t.get(P);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=q,p++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(X),q.distance=H,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;let j=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,j.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[_]=j.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=ie,x++}_++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(F).multiplyScalar(X),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=q,S++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let j=P.shadow,ee=t.get(P);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=P.shadow.matrix,w++}i.point[m]=q,m++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(X),q.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[v]=q,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.sunLength!==f||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==S||R.hemiLength!==v||R.numSunShadows!==g||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==x||R.numSpotMaps!==E||R.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=I,R.sunLength=f,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=S,R.hemiLength=v,R.numSunShadows=g,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=x,R.numSpotMaps=E,R.numLightProbes=I,i.version=Dv++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(v.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Rf(n){let e=new Uv(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rf(n),e.set(s,[o])):r>=a.length?(o=new Rf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],zv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Cf=new mt,xa=new L,zh=new L;function Hv(n,e,t){let i=new _s,s=new se,r=new se,a=new Lt,o=new Bo,l=new ko,c={},h=t.maxTextureSize,u={[ci]:Gt,[Gt]:ci,[yn]:yn},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new De(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let m=this.type;this.render=function(w,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===vd&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=la);let U=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=w.length;P<F;P++){let X=w[P],H=X.shadow;if(H===void 0){Ve("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ie=H.getFrameExtents();s.multiply(ie),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rr){if(X.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Kt(s.x,s.y,{format:$i,type:fn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Ci(s.x,s.y,On),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Ti,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt}else X.isPointLight?(H.map=new va(s.x),H.map.depthTexture=new Zr(s.x,Zn)):(H.map=new Kt(s.x,s.y),H.map.depthTexture=new Ci(s.x,s.y,Zn)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Ti,this.type===la?(H.map.depthTexture.compareFunction=q?Eh:bh,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,E);let ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:E.layers;for(let we=0;we<j;we++){let He=H.getCamera(we);if(X.isPointLight){let J=H.camera,Me=H.matrix,Re=X.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),xa.setFromMatrixPosition(X.matrixWorld),J.position.copy(xa),zh.copy(J.position),zh.add(kv[we]),J.up.copy(zv[we]),J.lookAt(zh),J.updateMatrixWorld(),Me.makeTranslation(-xa.x,-xa.y,-xa.z),Cf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cf,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,we),n.clear();else{we===0&&(n.setRenderTarget(H.map),n.clear());let J=H.getViewport(we);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(a)}i=H.getFrustum(we),v(x,E,He,X,ee,this.type)}H.isPointLightShadow!==!0&&this.type===rr&&_(H,E),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(U,I,R)};function _(w,x){let E=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Kt(s.x,s.y,{format:$i,type:fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,E,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,E,f,y,null)}function S(w,x,E,U){let I=null,R=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)I=R;else if(I=E.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=I.uuid,z=x.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let F=P[z];F===void 0&&(F=I.clone(),P[z]=F,x.addEventListener("dispose",A)),I=F}if(I.visible=x.visible,I.wireframe=x.wireframe,U===rr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:u[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let D=n.properties.get(I);D.light=E}return I}function v(w,x,E,U,I,R){if(w.visible===!1)return;if(w.layers.test(I)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===rr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let P=e.update(w),F=w.material;if(Array.isArray(F)){let X=P.groups;for(let H=0,ie=X.length;H<ie;H++){let q=X[H],j=F[q.materialIndex];if(j&&j.visible){let ee=S(w,j,U,R);w.onBeforeShadow(n,w,x,E,P,ee,q),n.renderBufferDirect(E,null,P,ee,w,q),w.onAfterShadow(n,w,x,E,P,ee,q)}}}else if(F.visible){let X=S(w,F,U,R);w.onBeforeShadow(n,w,x,E,P,X,null),n.renderBufferDirect(E,null,P,X,w,null),w.onAfterShadow(n,w,x,E,P,X,null)}}let z=w.children;for(let P=0,F=z.length;P<F;P++)v(z[P],x,E,U,I,R)}function A(w){w.target.removeEventListener("dispose",A);for(let E in c){let U=c[E],I=w.target.uuid;I in U&&(U[I].dispose(),delete U[I])}}}function Gv(n,e){function t(){let N=!1,Q=new Lt,Z=null,pe=new Lt(0,0,0,0);return{setMask:function(le){Z!==le&&!N&&(n.colorMask(le,le,le,le),Z=le)},setLocked:function(le){N=le},setClear:function(le,ue,Fe,Qe,ae){ae===!0&&(le*=Qe,ue*=Qe,Fe*=Qe),Q.set(le,ue,Fe,Qe),pe.equals(Q)===!1&&(n.clearColor(le,ue,Fe,Qe),pe.copy(Q))},reset:function(){N=!1,Z=null,pe.set(-1,0,0,0)}}}function i(){let N=!1,Q=!1,Z=null,pe=null,le=null;return{setReversed:function(ue){if(Q!==ue){let Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Q=ue;let Qe=le;le=null,this.setClear(Qe)}},getReversed:function(){return Q},setTest:function(ue){ue?Se(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!N&&(n.depthMask(ue),Z=ue)},setFunc:function(ue){if(Q&&(ue=Kd[ue]),pe!==ue){switch(ue){case po:n.depthFunc(n.NEVER);break;case mo:n.depthFunc(n.ALWAYS);break;case go:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case xo:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case vo:n.depthFunc(n.GREATER);break;case yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ue}},setLocked:function(ue){N=ue},setClear:function(ue){le!==ue&&(le=ue,Q&&(ue=1-ue),n.clearDepth(ue))},reset:function(){N=!1,Z=null,pe=null,le=null,Q=!1}}}function s(){let N=!1,Q=null,Z=null,pe=null,le=null,ue=null,Fe=null,Qe=null,ae=null;return{setTest:function(Oe){N||(Oe?Se(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Oe){Q!==Oe&&!N&&(n.stencilMask(Oe),Q=Oe)},setFunc:function(Oe,je,be){(Z!==Oe||pe!==je||le!==be)&&(n.stencilFunc(Oe,je,be),Z=Oe,pe=je,le=be)},setOp:function(Oe,je,be){(ue!==Oe||Fe!==je||Qe!==be)&&(n.stencilOp(Oe,je,be),ue=Oe,Fe=je,Qe=be)},setLocked:function(Oe){N=Oe},setClear:function(Oe){ae!==Oe&&(n.clearStencil(Oe),ae=Oe)},reset:function(){N=!1,Q=null,Z=null,pe=null,le=null,ue=null,Fe=null,Qe=null,ae=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,p=!1,m=null,_=null,S=null,v=null,A=null,w=null,x=null,E=new $e(0,0,0),U=0,I=!1,R=null,D=null,z=null,P=null,F=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ie=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=ie>=2);let j=null,ee={},we=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),J=new Lt().fromArray(we),Me=new Lt().fromArray(He);function Re(N,Q,Z,pe){let le=new Uint8Array(4),ue=n.createTexture();n.bindTexture(N,ue),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Z;Fe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(Q+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ue}let Be={};Be[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),a.setFunc(Js),Ae(!1),ye(nh),Se(n.CULL_FACE),de(Pi);function Se(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ke(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function bt(N,Q){return d[N]!==Q?(n.bindFramebuffer(N,Q),d[N]=Q,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Q),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ge(N,Q){let Z=g,pe=!1;if(N){Z=f.get(Q),Z===void 0&&(Z=[],f.set(Q,Z));let le=N.textures;if(Z.length!==le.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Fe=le.length;ue<Fe;ue++)Z[ue]=n.COLOR_ATTACHMENT0+ue;Z.length=le.length,pe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,pe=!0);pe&&n.drawBuffers(Z)}function tt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let st={[Ss]:n.FUNC_ADD,[yd]:n.FUNC_SUBTRACT,[Md]:n.FUNC_REVERSE_SUBTRACT};st[Sd]=n.MIN,st[bd]=n.MAX;let ne={[Ed]:n.ZERO,[Qo]:n.ONE,[Td]:n.SRC_COLOR,[ah]:n.SRC_ALPHA,[Id]:n.SRC_ALPHA_SATURATE,[Cd]:n.DST_COLOR,[Ad]:n.DST_ALPHA,[wd]:n.ONE_MINUS_SRC_COLOR,[ca]:n.ONE_MINUS_SRC_ALPHA,[Pd]:n.ONE_MINUS_DST_COLOR,[Rd]:n.ONE_MINUS_DST_ALPHA,[Ld]:n.CONSTANT_COLOR,[Dd]:n.ONE_MINUS_CONSTANT_COLOR,[Nd]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function de(N,Q,Z,pe,le,ue,Fe,Qe,ae,Oe){if(N===Pi){p===!0&&(ke(n.BLEND),p=!1);return}if(p===!1&&(Se(n.BLEND),p=!0),N!==jo){if(N!==m||Oe!==I){if((_!==Ss||A!==Ss)&&(n.blendEquation(n.FUNC_ADD),_=Ss,A=Ss),Oe)switch(N){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}S=null,v=null,w=null,x=null,E.set(0,0,0),U=0,m=N,I=Oe}return}le=le||Q,ue=ue||Z,Fe=Fe||pe,(Q!==_||le!==A)&&(n.blendEquationSeparate(st[Q],st[le]),_=Q,A=le),(Z!==S||pe!==v||ue!==w||Fe!==x)&&(n.blendFuncSeparate(ne[Z],ne[pe],ne[ue],ne[Fe]),S=Z,v=pe,w=ue,x=Fe),(Qe.equals(E)===!1||ae!==U)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ae),E.copy(Qe),U=ae),m=N,I=!1}function ce(N,Q){N.side===yn?ke(n.CULL_FACE):Se(n.CULL_FACE);let Z=N.side===Gt;Q&&(Z=!Z),Ae(Z),N.blending===ar&&N.transparent===!1?de(Pi):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function ye(N){N!==xd?(Se(n.CULL_FACE),N!==D&&(N===nh?n.cullFace(n.BACK):N===_d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),D=N}function Je(N){N!==z&&(H&&n.lineWidth(N),z=N)}function Ue(N,Q,Z){N?(Se(n.POLYGON_OFFSET_FILL),(P!==Q||F!==Z)&&(P=Q,F=Z,a.getReversed()&&(Q=-Q,Z=-Z),n.polygonOffset(Q,Z))):ke(n.POLYGON_OFFSET_FILL)}function rt(N){N?Se(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function ot(N){N===void 0&&(N=n.TEXTURE0+X-1),j!==N&&(n.activeTexture(N),j=N)}function ft(N,Q,Z){Z===void 0&&(j===null?Z=n.TEXTURE0+X-1:Z=j);let pe=ee[Z];pe===void 0&&(pe={type:void 0,texture:void 0},ee[Z]=pe),(pe.type!==N||pe.texture!==Q)&&(j!==Z&&(n.activeTexture(Z),j=Z),n.bindTexture(N,Q||Be[N]),pe.type=N,pe.texture=Q)}function B(){let N=ee[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ft(){try{n.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function yt(){try{n.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ge(){try{n.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function qe(){try{n.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function C(){try{n.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function M(){try{n.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function V(){try{n.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function re(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function te(N,Q){u[N]!==Q&&(n.pixelStorei(N,Q),u[N]=Q)}function he(N){J.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),J.copy(N))}function xe(N){Me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function K(N,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let pe=Z.get(N);pe===void 0&&(pe=n.getUniformBlockIndex(Q,N.name),n.uniformBlockBinding(Q,pe,pe),Z.set(N,pe))}function $(N,Q,Z){let le=c.get(Q).get(N);l[le]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,Z),l[le]=Z)}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,ee={},d={},l={},f=new WeakMap,g=[],y=null,p=!1,m=null,_=null,S=null,v=null,A=null,w=null,x=null,E=new $e(0,0,0),U=0,I=!1,R=null,D=null,z=null,P=null,F=null,J.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:ke,bindFramebuffer:bt,drawBuffers:Ge,useProgram:tt,setBlending:de,setMaterial:ce,setFlipSided:Ae,setCullFace:ye,setLineWidth:Je,setPolygonOffset:Ue,setScissorTest:rt,activeTexture:ot,bindTexture:ft,unbindTexture:B,compressedTexImage2D:Ft,compressedTexImage3D:nt,texImage2D:M,texImage3D:V,pixelStorei:te,getParameter:re,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:qe,texStorage3D:C,texSubImage2D:yt,texSubImage3D:ge,compressedTexSubImage2D:Ut,compressedTexSubImage3D:ze,scissor:he,viewport:xe,reset:fe}}function Vv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(C=>g.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return p?new OffscreenCanvas(C,M):Ur("canvas")}function _(C,M,V){let re=1,te=qe(C);if((te.width>V||te.height>V)&&(re=V/Math.max(te.width,te.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(re*te.width),xe=Math.floor(re*te.height);d===void 0&&(d=m(he,xe));let K=M?m(he,xe):d;return K.width=he,K.height=xe,K.getContext("2d").drawImage(C,0,0,he,xe),Ve("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+he+"x"+xe+")."),K}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function S(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,M,V,re,te,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;re&&(xe=e.get("EXT_texture_norm16"),xe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8),V===n.UNSIGNED_SHORT&&xe&&(K=xe.R16_EXT),V===n.SHORT&&xe&&(K=xe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),M===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8),V===n.UNSIGNED_SHORT&&xe&&(K=xe.RG16_EXT),V===n.SHORT&&xe&&(K=xe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_SHORT&&xe&&(K=xe.RGB16_EXT),V===n.SHORT&&xe&&(K=xe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){let $=he?Dr:ht.getTransfer(te);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=$===xt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&xe&&(K=xe.RGBA16_EXT),V===n.SHORT&&xe&&(K=xe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,M){let V;return C?M===null||M===Zn||M===Es?V=n.DEPTH24_STENCIL8:M===On?V=n.DEPTH32F_STENCIL8:M===lr&&(V=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zn||M===Es?V=n.DEPTH_COMPONENT24:M===On?V=n.DEPTH_COMPONENT32F:M===lr&&(V=n.DEPTH_COMPONENT16),V}function E(C,M){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function U(C){let M=new WeakRef(C);i.get(C).__ref=M,g.add(M),y.register(C,M,M)}function I(C){let M=i.get(C).__ref;M!==void 0&&(g.delete(M),y.unregister(M))}function R(C){z(C.target)}function D(C){P(C.target)}function z(C){C.removeEventListener("dispose",R),I(C),X(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function P(C){C.removeEventListener("dispose",D),I(C),ie(C)}function F(){for(let C of g){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):z(M))}g.clear(),u.clear()}function X(C){let M=i.get(C);if(M.__webglInit===void 0)return;let V=C.source,re=f.get(V);if(re){let te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&H(C),Object.keys(re).length===0&&f.delete(V)}i.remove(C)}function H(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let V=C.source,re=f.get(V);delete re[M.__cacheKey],a.memory.textures--}function ie(C){let M=i.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&z(V),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let he=0;he<M.__webglFramebuffer[te].length;he++)n.deleteFramebuffer(M.__webglFramebuffer[te][he]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let re=C.textures;for(let te=0,he=re.length;te<he;te++){let xe=i.get(re[te]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(re[te])}i.remove(C)}let q=0;function j(){q=0}function ee(){return q}function we(C){q=C}function He(){let C=q;return C>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,C}function J(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Me(C,M){let V=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let re=C.image;if(re===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function Re(C,M){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ce(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function Be(C,M){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ce(V,C,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function Se(C,M){let V=i.get(C);if(C.version>0&&V.__version!==C.version){Ae(V,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}let ke={[gs]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},bt={[Zt]:n.NEAREST,[Bd]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[nl]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ge={[Gd]:n.NEVER,[Th]:n.ALWAYS,[Vd]:n.LESS,[bh]:n.LEQUAL,[Wd]:n.EQUAL,[Eh]:n.GEQUAL,[Xd]:n.GREATER,[qd]:n.NOTEQUAL};function tt(C,M){if(M.type===On&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===nl||M.magFilter===ha||M.magFilter===Ii||M.minFilter===Jt||M.minFilter===nl||M.minFilter===ha||M.minFilter===Ii)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ke[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ke[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ke[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,bt[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==ha&&M.minFilter!==Ii||M.type===On&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function st(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R),U(M));let re=M.source,te=f.get(re);te===void 0&&(te={},f.set(re,te));let he=J(M);if(he!==C.__cacheKey){te[he]===void 0&&(te[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[he].usedTimes++;let xe=te[C.__cacheKey];xe!==void 0&&(te[C.__cacheKey].usedTimes--,xe.usedTimes===0&&H(M)),C.__cacheKey=he,C.__webglTexture=te[he].texture}return V}function ne(C,M,V){return Math.floor(Math.floor(C/V)/M)}function de(C,M,V,re){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,re,M.data);else{he.sort((N,Q)=>N.start-Q.start);let xe=0;for(let N=1;N<he.length;N++){let Q=he[xe],Z=he[N],pe=Q.start+Q.count,le=ne(Z.start,M.width,4),ue=ne(Q.start,M.width,4);Z.start<=pe+1&&le===ue&&ne(Z.start+Z.count-1,M.width,4)===le?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++xe,he[xe]=Z)}he.length=xe+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let N=0,Q=he.length;N<Q;N++){let Z=he[N],pe=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),ue=pe%M.width,Fe=Math.floor(pe/M.width),Qe=le,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,ue,Fe,Qe,ae,V,re,M.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function ce(C,M,V){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);let te=st(C,M),he=M.source;t.bindTexture(re,C.__webglTexture,n.TEXTURE0+V);let xe=i.get(he);if(he.version!==xe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=ht.getPrimaries(ht.workingColorSpace),Oe=M.colorSpace===Di?null:ht.getPrimaries(M.colorSpace),je=M.colorSpace===Di||ae===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let $=_(M.image,!1,s.maxTextureSize);$=ze(M,$);let fe=r.convert(M.format,M.colorSpace),N=r.convert(M.type),Q=w(M.internalFormat,fe,N,M.normalized,M.colorSpace,M.isVideoTexture);tt(re,M);let Z,pe=M.mipmaps,le=M.isVideoTexture!==!0,ue=xe.__version===void 0||te===!0,Fe=he.dataReady,Qe=E(M,$);if(M.isDepthTexture)Q=x(M.format===Li,M.type),ue&&(le?t.texStorage2D(n.TEXTURE_2D,1,Q,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,fe,N,null));else if(M.isDataTexture)if(pe.length>0){le&&ue&&t.texStorage2D(n.TEXTURE_2D,Qe,Q,pe[0].width,pe[0].height);for(let ae=0,Oe=pe.length;ae<Oe;ae++)Z=pe[ae],le?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,fe,N,Z.data):t.texImage2D(n.TEXTURE_2D,ae,Q,Z.width,Z.height,0,fe,N,Z.data);M.generateMipmaps=!1}else le?(ue&&t.texStorage2D(n.TEXTURE_2D,Qe,Q,$.width,$.height),Fe&&de(M,$,fe,N)):t.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,fe,N,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,Q,pe[0].width,pe[0].height,$.depth);for(let ae=0,Oe=pe.length;ae<Oe;ae++)if(Z=pe[ae],M.format!==Jn)if(fe!==null)if(le){if(Fe)if(M.layerUpdates.size>0){let je=Dh(Z.width,Z.height,M.format,M.type);for(let be of M.layerUpdates){let _t=Z.data.subarray(be*je/Z.data.BYTES_PER_ELEMENT,(be+1)*je/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,be,Z.width,Z.height,1,fe,_t)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,$.depth,fe,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Q,Z.width,Z.height,$.depth,0,Z.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,$.depth,fe,N,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Q,Z.width,Z.height,$.depth,0,fe,N,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(n.TEXTURE_2D,Qe,Q,pe[0].width,pe[0].height);for(let ae=0,Oe=pe.length;ae<Oe;ae++)Z=pe[ae],M.format!==Jn?fe!==null?le?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,fe,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Q,Z.width,Z.height,0,Z.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,fe,N,Z.data):t.texImage2D(n.TEXTURE_2D,ae,Q,Z.width,Z.height,0,fe,N,Z.data)}else if(M.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,Q,$.width,$.height,$.depth),Fe)if(M.layerUpdates.size>0){let ae=Dh($.width,$.height,M.format,M.type);for(let Oe of M.layerUpdates){let je=$.data.subarray(Oe*ae/$.data.BYTES_PER_ELEMENT,(Oe+1)*ae/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,$.width,$.height,1,fe,N,je)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,N,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,fe,N,$.data);else if(M.isData3DTexture)le?(ue&&t.texStorage3D(n.TEXTURE_3D,Qe,Q,$.width,$.height,$.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,N,$.data)):t.texImage3D(n.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,fe,N,$.data);else if(M.isFramebufferTexture){if(ue)if(le)t.texStorage2D(n.TEXTURE_2D,Qe,Q,$.width,$.height);else{let ae=$.width,Oe=$.height;for(let je=0;je<Qe;je++)t.texImage2D(n.TEXTURE_2D,je,Q,ae,Oe,0,fe,N,null),ae>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),$.parentNode!==ae){ae.appendChild($),u.add(M),ae.onpaint=Oe=>{let je=Oe.changedElements;for(let be of u)je.includes(be.image)&&(be.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let je=n.RGBA,be=n.RGBA,_t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,be,_t,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(le&&ue){let ae=qe(pe[0]);t.texStorage2D(n.TEXTURE_2D,Qe,Q,ae.width,ae.height)}for(let ae=0,Oe=pe.length;ae<Oe;ae++)Z=pe[ae],le?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,fe,N,Z):t.texImage2D(n.TEXTURE_2D,ae,Q,fe,N,Z);M.generateMipmaps=!1}else if(le){if(ue){let ae=qe($);t.texStorage2D(n.TEXTURE_2D,Qe,Q,ae.width,ae.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,N,$)}else t.texImage2D(n.TEXTURE_2D,0,Q,fe,N,$);S(M)&&M.mipmapsAutoUpdate===!0&&v(re),xe.__version=he.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ae(C,M,V){if(M.image.length!==6)return;let re=st(C,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);let he=i.get(te);if(te.version!==he.__version||re===!0){t.activeTexture(n.TEXTURE0+V);let xe=ht.getPrimaries(ht.workingColorSpace),K=M.colorSpace===Di?null:ht.getPrimaries(M.colorSpace),$=M.colorSpace===Di||xe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let fe=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let be=0;be<6;be++)!fe&&!N?Q[be]=_(M.image[be],!0,s.maxCubemapSize):Q[be]=N?M.image[be].image:M.image[be],Q[be]=ze(M,Q[be]);let Z=Q[0],pe=r.convert(M.format,M.colorSpace),le=r.convert(M.type),ue=w(M.internalFormat,pe,le,M.normalized,M.colorSpace),Fe=M.isVideoTexture!==!0,Qe=he.__version===void 0||re===!0,ae=te.dataReady,Oe=E(M,Z);tt(n.TEXTURE_CUBE_MAP,M);let je;if(M.isDepthTexture){if(ue=x(M.format===Li,M.type),Qe)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ue,Z.width,Z.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,Z.width,Z.height,0,pe,le,null)}else if(fe){Fe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,ue,Z.width,Z.height);for(let be=0;be<6;be++){je=Q[be].mipmaps;for(let _t=0;_t<je.length;_t++){let Xt=je[_t];M.format!==Jn?pe!==null?Fe?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,0,0,Xt.width,Xt.height,pe,Xt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,ue,Xt.width,Xt.height,0,Xt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,0,0,Xt.width,Xt.height,pe,le,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t,ue,Xt.width,Xt.height,0,pe,le,Xt.data)}}}else{if(je=M.mipmaps,Fe&&Qe){je.length>0&&Oe++;let be=qe(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,ue,be.width,be.height)}for(let be=0;be<6;be++)if(N){Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Q[be].width,Q[be].height,pe,le,Q[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,Q[be].width,Q[be].height,0,pe,le,Q[be].data);for(let _t=0;_t<je.length;_t++){let Oi=je[_t].image[be].image;Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,0,0,Oi.width,Oi.height,pe,le,Oi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,ue,Oi.width,Oi.height,0,pe,le,Oi.data)}}else{Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,pe,le,Q[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,pe,le,Q[be]);for(let _t=0;_t<je.length;_t++){let Xt=je[_t];Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,0,0,pe,le,Xt.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,_t+1,ue,pe,le,Xt.image[be])}}}S(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),he.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,V,re,te,he){let xe=r.convert(V.format,V.colorSpace),K=r.convert(V.type),$=w(V.internalFormat,xe,K,V.normalized,V.colorSpace),fe=i.get(M),N=i.get(V);if(N.__renderTarget=M,!fe.__hasExternalTextures){let Q=Math.max(1,M.width>>he),Z=Math.max(1,M.height>>he);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,he,$,Q,Z,M.depth,0,xe,K,null):t.texImage2D(te,he,$,Q,Z,0,xe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,N.__webglTexture,0,yt(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,te,N.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(C,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let re=M.depthTexture,te=re&&re.isDepthTexture?re.type:null,he=x(M.stencilBuffer,te),xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(M),he,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(M),he,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,he,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{let re=M.textures;for(let te=0;te<re.length;te++){let he=re[te],xe=r.convert(he.format,he.colorSpace),K=r.convert(he.type),$=w(he.internalFormat,xe,K,he.normalized,he.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(M),$,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(M),$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(C,M,V){let re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(M.depthTexture);te.__renderTarget=M;let he=re?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||he.width!==M.width||he.height!==M.height)&&(he.width=M.width,he.height=M.height,M.depthTexture.needsUpdate=!0),re?Se(M.depthTexture,0):Me(M.depthTexture,0);let xe=te.__webglTexture,K=yt(M),$=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,fe=M.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ti)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,$,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,fe,$,xe,0);else if(M.depthTexture.format===Li)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,$,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,fe,$,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){let M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let re=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",te)};re.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=re}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let re=0;re<6;re++)Ue(M.__webglFramebuffer[re],C,re);else C.texture.mipmaps.length>0?Ue(M.__webglFramebuffer[0],C,0):Ue(M.__webglFramebuffer,C,0);else if(V){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=n.createRenderbuffer(),Je(M.__webglDepthbuffer[re],C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,he)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Je(M.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(C,M,V){let re=i.get(C);M!==void 0&&ye(re.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&rt(C)}function ft(C){let M=C.texture,V=i.get(C),re=i.get(M);C.addEventListener("dispose",D),U(C);let te=C.textures,he=C.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let $=0;$<M.mipmaps.length;$++)V.__webglFramebuffer[K][$]=n.createFramebuffer()}else V.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(xe)for(let K=0,$=te.length;K<$;K++){let fe=i.get(te[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ge(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){let $=te[K];V.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let fe=r.convert($.format,$.colorSpace),N=r.convert($.type),Q=w($.internalFormat,fe,N,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),Z=yt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Q,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,V.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),tt(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)ye(V.__webglFramebuffer[K][$],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else ye(V.__webglFramebuffer[K],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let K=0,$=te.length;K<$;K++){let fe=te[K],N=i.get(fe),Q=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),tt(Q,fe),ye(V.__webglFramebuffer,C,fe,n.COLOR_ATTACHMENT0+K,Q,0),S(fe)&&v(Q)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,re.__webglTexture),tt(K,M),M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)ye(V.__webglFramebuffer[$],C,M,n.COLOR_ATTACHMENT0,K,$);else ye(V.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,K,0);S(M)?v(K):M.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&rt(C)}function B(C){let M=C.textures;for(let V=0,re=M.length;V<re;V++){let te=M[V];if(S(te)&&te.mipmapsAutoUpdate===!0){let he=A(C),xe=i.get(te).__webglTexture;t.bindTexture(he,xe),v(he),t.unbindTexture()}}}let Ft=[];function nt(C){if(C.samples>0){if(ge(C)===!1){let M=C.textures,V=C.width,re=C.height,te=n.COLOR_BUFFER_BIT,he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),K=M.length>1;if(K)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let N=i.get(M[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,V,re,0,0,V,re,te,n.NEAREST),l===!0&&(Ft.length=0,Ft.push(n.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ft.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let N=i.get(M[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function yt(C){return Math.min(s.maxSamples,C.samples)}function ge(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ze(C,M){let V=C.colorSpace,re=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Rn&&V!==Di&&(ht.getTransfer(V)===xt?(re!==Jn||te!==Ln)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",V)),M}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=we,this.setTexture2D=Me,this.setTexture2DArray=Re,this.setTexture3D=Be,this.setTextureCube=Se,this.rebindTextures=ot,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ge,this.dispose=F}function Wv(n,e){function t(i,s=Di){let r,a=ht.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===xh)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===fn)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===Mh)return n.RGB;if(i===Jn)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===ol)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===ll)return n.RG_INTEGER;if(i===cl)return n.RGBA_INTEGER;if(i===ua||i===da||i===fa||i===pa)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===ul||i===dl||i===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl||i===xl||i===_l||i===ma||i===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xl)return r.COMPRESSED_R11_EAC;if(i===_l)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ma)return r.COMPRESSED_RG11_EAC;if(i===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Ul||i===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nl)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===Bl||i===ga||i===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Dt({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zh=class extends ii{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new Yh,m={},_=t.getContextAttributes(),S=null,v=null,A=[],w=[],x=new se,E=null,U=null,I=new an;I.viewport=new Lt;let R=new an;R.viewport=new Lt;let D=[I,R],z=new Ko,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Me=A[J];return Me===void 0&&(Me=new js,A[J]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(J){let Me=A[J];return Me===void 0&&(Me=new js,A[J]=Me),Me.getGripSpace()},this.getHand=function(J){let Me=A[J];return Me===void 0&&(Me=new js,A[J]=Me),Me.getHandSpace()};function X(J){let Me=w.indexOf(J.inputSource);if(Me===-1)return;let Re=A[Me];Re!==void 0&&(Re.update(J.inputSource,J.frame,c||a),Re.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<A.length;J++){let Me=w[J];Me!==null&&(w[J]=null,A[J].disconnect(Me))}P=null,F=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),U!==null){let J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Be=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=_.stencil?Li:Ti,Be=_.stencil?Es:Zn);let ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kt(d.textureWidth,d.textureHeight,{format:Jn,type:Ln,depthTexture:new Ci(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(J){for(let Me=0;Me<J.removed.length;Me++){let Re=J.removed[Me],Be=w.indexOf(Re);Be>=0&&(w[Be]=null,A[Be].disconnect(Re))}for(let Me=0;Me<J.added.length;Me++){let Re=J.added[Me],Be=w.indexOf(Re);if(Be===-1){for(let ke=0;ke<A.length;ke++)if(ke>=w.length){w.push(Re),Be=ke;break}else if(w[ke]===null){w[ke]=Re,Be=ke;break}if(Be===-1)break}let Se=A[Be];Se&&Se.connect(Re)}}function q(J,Me){Me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Me=J.near,Re=J.far;p.texture!==null&&(p.depthNear>0&&(Me=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),z.near=R.near=I.near=Me,z.far=R.far=I.far=Re,(P!==z.near||F!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,F=z.far),z.layers.mask=J.layers.mask|6,I.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let Be=J.parent,Se=z.cameras;q(z,Be);for(let ke=0;ke<Se.length;ke++)q(Se[ke],Be);z.projectionMatrix.copy(I.projectionMatrix),z.projectionMatrixInverse.copy(I.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),j(J,z,Be)};function j(J,Me,Re){Re===null?J.matrix.copy(Me.matrixWorld):(J.matrix.copy(Re.matrixWorld),J.matrix.invert(),J.matrix.multiply(Me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Me.projectionMatrix),J.projectionMatrixInverse.copy(Me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let ee=null;function we(J,Me){if(h=Me.getViewerPose(c||a),g=Me,h!==null){let Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Be=!1;Re.length!==z.cameras.length&&(z.cameras.length=0,Be=!0);for(let Ge=0;Ge<Re.length;Ge++){let tt=Re[Ge],st=null;if(f!==null)st=f.getViewport(tt);else{let de=u.getViewSubImage(d,tt);st=de.viewport,Ge===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let ne=D[Ge];ne===void 0&&(ne=new an,ne.layers.enable(Ge),ne.viewport=new Lt,D[Ge]=ne),ne.matrix.fromArray(tt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(tt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(st.x,st.y,st.width,st.height),Ge===0&&(z.matrix.copy(ne.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Be===!0&&z.cameras.push(ne)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Ge=u.getDepthInformation(Re[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let Ge=0;Ge<Re.length;Ge++){let tt=Re[Ge].camera;if(tt){let st=m[tt];st||(st=new Jr,m[tt]=st);let ne=u.getCameraImage(tt);st.sourceTexture=ne}}}}for(let Re=0;Re<A.length;Re++){let Be=w[Re],Se=A[Re];Be!==null&&Se!==void 0&&Se.update(Be,Me,c||a)}ee&&ee(J,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),g=null}let He=new Pf;He.setAnimationLoop(we),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},Yv=new mt,zf=new Ye;zf.set(-1,0,0,0,1,0,0,0,1);function Zv(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ph(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),S=_.envMap,v=_.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(zf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jv(n,e,t,i){let s={},r={};function a(_,S){let v=S.program;i.uniformBlockBinding(_,v,s[_.id])}function o(_,S){let v=s[_.id];v===void 0&&(g(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",p));let A=S.program;i.updateUBOMapping(_,A);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let S=n.createBuffer(),v=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(_){let S=s[_.id],v=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,x=v.length;w<x;w++){let E=v[w];if(Array.isArray(E))for(let U=0,I=E.length;U<I;U++)h(E[U],w,U,A);else h(E,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,S,v,A){if(d(_,S,v,A)===!0){let w=_.__offset,x=_.value;if(Array.isArray(x)){let E=0;for(let U=0;U<x.length;U++){let I=x[U],R=y(I,!0);u(I,_.__data,E),E+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function u(_,S,v){typeof _=="number"||typeof _=="boolean"?S[v]=_:_.isMatrix3?(S[v]=_.elements[0],S[v+1]=_.elements[1],S[v+2]=_.elements[2],S[v+3]=0,S[v+4]=_.elements[3],S[v+5]=_.elements[4],S[v+6]=_.elements[5],S[v+7]=0,S[v+8]=_.elements[6],S[v+9]=_.elements[7],S[v+10]=_.elements[8],S[v+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-v),v):_.toArray(S,v)}function d(_,S,v,A){let w=_.value,x=S+"_"+v;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let E=A[x],U=!1;for(let I=0;I<w.length;I++)f(w[I],E,I)===!0&&(U=!0);return U}return f(w,A,x)}function f(_,S,v){if(S[v]===void 0)return typeof _=="number"||typeof _=="boolean"?S[v]=_:ArrayBuffer.isView(_)?S[v]=_.slice():S[v]=_.clone(),!0;{let A=S[v];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return S[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function g(_){let S=_.uniforms,v=0,A=16;for(let x=0,E=S.length;x<E;x++){let U=Array.isArray(S[x])?S[x]:[S[x]];for(let I=0,R=U.length;I<R;I++){let D=U[I],z=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(S[x])||Array.isArray(D.value),F=v;for(let H=0,ie=z.length;H<ie;H++){let q=z[H],j=y(q,P),ee=v%A,we=ee%j.boundary,He=ee+we;v+=we,He!==0&&A-He<j.storage&&(v+=A-He),H===0&&(F=v),v+=j.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((v-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}let w=v%A;return w>0&&(v+=A-w),_.__size=v,_.__cache={},this}function y(_,S){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(_){let S=_.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:m}}var Kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function $v(){return hi===null&&(hi=new Wr(Kv,16,16,$i,fn),hi.name="DFG_LUT",hi.minFilter=Jt,hi.magFilter=Jt,hi.wrapS=ti,hi.wrapT=ti,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Xl=class{constructor(e={}){let{canvas:t=Yd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,p=new Set([cl,ll,ol]),m=new Set([Ln,Zn,lr,Es,sl,rl]),_=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],E=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,R=!1,D=null,z=null,P=null,F=null;this._outputColorSpace=An;let X=0,H=0,ie=null,q=-1,j=null,ee=new Lt,we=new Lt,He=null,J=new $e(0),Me=0,Re=t.width,Be=t.height,Se=1,ke=null,bt=null,Ge=new Lt(0,0,Re,Be),tt=new Lt(0,0,Re,Be),st=!1,ne=new _s,de=new Ro,ce=!1,Ae=!1,ye=new mt,Je=new L,Ue=new Lt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function ft(){return ie===null?Se:1}let B=i;function Ft(b,O){return t.getContext(b,O)}let nt,yt,ge,Ut,ze,qe,C,M,V,re,te,he,xe,K,$,fe,N,Q,Z,pe,le,ue,Fe;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){let O="webgl2";if(B=Ft(O,b),B===null)throw Ft(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(b){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Xe("WebGLRenderer: "+b.message),b}function Qe(){nt=new l_(B),nt.init(),le=new Wv(B,nt),yt=new $x(B,nt,e,le),ge=new Gv(B,nt),yt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),z=B.createFramebuffer(),P=B.createFramebuffer(),F=B.createFramebuffer(),Ut=new u_(B),ze=new Rv,qe=new Vv(B,nt,ge,ze,yt,le,Ut),C=new o_(I),M=new f0(B),ue=new Jx(B,M),V=new c_(B,M,Ut,ue),re=new f_(B,V,M,ue,Ut),Q=new d_(B,yt,qe),$=new jx(ze),te=new Av(I,C,nt,yt,ue,$),he=new Zv(I,ze),xe=new Pv,K=new Fv(nt),N=new Zx(I,C,ge,re,g,l),fe=new Hv(I,re,yt),Fe=new Jv(B,Ut,yt,ge),Z=new Kx(B,nt,Ut),pe=new h_(B,nt,Ut),Ut.programs=te.programs,I.capabilities=yt,I.extensions=nt,I.properties=ze,I.renderLists=xe,I.shadowMap=fe,I.state=ge,I.info=Ut}y!==Ln&&(U=new m_(y,t.width,t.height,o,s,r));let ae=new Zh(I,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(b){b!==void 0&&(Se=b,this.setSize(Re,Be,!1))},this.getSize=function(b){return b.set(Re,Be)},this.setSize=function(b,O,Y=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=b,Be=O,t.width=Math.floor(b*Se),t.height=Math.floor(O*Se),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Re*Se,Be*Se).floor()},this.setDrawingBufferSize=function(b,O,Y){Re=b,Be=O,Se=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(y===Ln){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ee)},this.getViewport=function(b){return b.copy(Ge)},this.setViewport=function(b,O,Y,G){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,O,Y,G),ge.viewport(ee.copy(Ge).multiplyScalar(ft()).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,O,Y,G){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,O,Y,G),ge.scissor(we.copy(tt).multiplyScalar(ft()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){ge.setScissorTest(st=b)},this.setOpaqueSort=function(b){ke=b},this.setTransparentSort=function(b){bt=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let G=0;if(b){let W=!1;if(ie!==null){let _e=ie.texture.format;W=p.has(_e)}if(W){let _e=ie.texture.type,Ce=m.has(_e),me=N.getClearColor(),Te=N.getClearAlpha(),Le=me.r,Ze=me.g,lt=me.b;Ce?(_[0]=Le,_[1]=Ze,_[2]=lt,_[3]=Te,B.clearBufferuiv(B.COLOR,0,_)):(S[0]=Le,S[1]=Ze,S[2]=lt,S[3]=Te,B.clearBufferiv(B.COLOR,0,S))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",be,!1),N.dispose(),xe.dispose(),K.dispose(),qe.dispose(),ze.dispose(),C.dispose(),re.dispose(),V.dispose(),ue.dispose(),Fe.dispose(),te.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Au),ae.removeEventListener("sessionend",Ru),cs.stop()};function Oe(b){b.preventDefault(),Fr("WebGLRenderer: Context Lost."),R=!0}function je(){Fr("WebGLRenderer: Context Restored."),R=!1;let b=Ut.autoReset,O=fe.enabled,Y=fe.autoUpdate,G=fe.needsUpdate,W=fe.type;Qe(),Ut.autoReset=b,fe.enabled=O,fe.autoUpdate=Y,fe.needsUpdate=G,fe.type=W}function be(b){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){let O=b.target;O.removeEventListener("dispose",_t),Xt(O)}function Xt(b){Oi(b),ze.remove(b)}function Oi(b){let O=ze.get(b).programs;O!==void 0&&(O.forEach(function(Y){te.releaseProgram(Y)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,G,W,_e){O===null&&(O=rt);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=Qp(b,O,Y,G,W);ge.setMaterial(G,Ce);let Te=Y.index,Le=1;if(G.wireframe===!0){if(Te=V.getWireframeAttribute(Y),Te===void 0)return;Le=2}let Ze=Y.drawRange,lt=Y.attributes.position,Pe=Ze.start*Le,ct=(Ze.start+Ze.count)*Le;_e!==null&&(Pe=Math.max(Pe,_e.start*Le),ct=Math.min(ct,(_e.start+_e.count)*Le)),Te!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Te.count)):lt!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,lt.count));let Ot=ct-Pe;if(Ot<0||Ot===1/0)return;ue.setup(W,G,me,Y,Te);let St,Mt=Z;if(Te!==null&&(St=M.get(Te),Mt=pe,Mt.setIndex(St)),W.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*ft()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(W.isLine){let tn=G.linewidth;tn===void 0&&(tn=1),ge.setLineWidth(tn*ft()),W.isLineSegments?Mt.setMode(B.LINES):W.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else W.isPoints?Mt.setMode(B.POINTS):W.isSprite&&Mt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let tn=W._multiDrawStarts,Ie=W._multiDrawCounts,hn=W._multiDrawCount,pt=Te?M.get(Te).bytesPerElement:1,hs=ze.get(G).currentProgram.getUniforms();for(let nn=0;nn<hn;nn++)hs.setValue(B,"_gl_DrawID",nn),Mt.render(tn[nn]/pt,Ie[nn])}else if(W.isInstancedMesh)Mt.renderInstances(Pe,Ot,W.count);else if(Y.isInstancedBufferGeometry){let tn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ie=Math.min(Y.instanceCount,tn);Mt.renderInstances(Pe,Ot,Ie)}else Mt.render(Pe,Ot)};function wu(b,O,Y,G){D!==null&&b.isNodeMaterial&&D.setObject(G,b),ce===!0&&$.setState(b,Y,!1),b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=Gt,b.needsUpdate=!0,_r(b,O,G),b.side=ci,b.needsUpdate=!0,_r(b,O,G),b.side=yn):_r(b,O,G)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),D!==null&&D.renderStart(b,O,Y),w=K.get(Y),w.init(O),E.push(w),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==Y&&b.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Ae=this.localClippingEnabled,ce=$.init(this.clippingPlanes,Ae),ce===!0&&$.setGlobalState(this.clippingPlanes,O),D!==null&&fe.render(w.state.shadowsArray,Y,O);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _e=W.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let me=_e[Ce];wu(me,Y,O,W),G.add(me)}else wu(_e,Y,O,W),G.add(_e)}),w=E.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(b,O,Y=null){let G=this.compile(b,O,Y);return new Promise(W=>{function _e(){if(G.forEach(function(Ce){let Te=ze.get(Ce).currentProgram;(Te===void 0||Te.isReady())&&G.delete(Ce)}),G.size===0){W(b);return}setTimeout(_e,10)}nt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let _c=null;function $p(b){_c&&_c(b)}function Au(){cs.stop()}function Ru(){cs.start()}let cs=new Pf;cs.setAnimationLoop($p),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(b){_c=b,ae.setAnimationLoop(b),b===null?cs.stop():cs.start()},ae.addEventListener("sessionstart",Au),ae.addEventListener("sessionend",Ru),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(b,O);let Y=ae.enabled===!0&&ae.isPresenting===!0,G=U!==null&&(ie===null||Y)&&U.begin(I,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,O,ie),w=K.get(b,E.length),w.init(O),w.state.textureUnits=qe.getTextureUnits(),E.push(w),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?de.setFromArrayCamera(O):ne.setFromProjectionMatrix(ye,Un,O.reversedDepth),Ae=this.localClippingEnabled,ce=$.init(this.clippingPlanes,Ae),A=xe.get(b,x.length),A.init(),x.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ce=I.xr.getDepthSensingMesh();Ce!==null&&vc(Ce,O,-1/0,I.sortObjects)}vc(b,O,0,I.sortObjects),A.finish(),D!==null&&D.updateLights(w.state.lightsArray),I.sortObjects===!0&&A.sort(ke,bt),ot=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ot&&N.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),ce===!0&&$.beginShadows();let W=w.state.shadowsArray;if(fe.render(W,b,O),ce===!0&&$.endShadows(),(G&&U.hasRenderPass())===!1){let Ce=A.opaque,me=A.transmissive;if(w.setupLights(),O.isArrayCamera){let Te=O.cameras;if(me.length>0)for(let Le=0,Ze=Te.length;Le<Ze;Le++){let lt=Te[Le];Pu(Ce,me,b,lt)}ot&&N.render(b);for(let Le=0,Ze=Te.length;Le<Ze;Le++){let lt=Te[Le];Cu(A,b,lt,lt.viewport)}}else me.length>0&&Pu(Ce,me,b,O),ot&&N.render(b),Cu(A,b,O)}ie!==null&&H===0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie)),G&&U.end(I),b.isScene===!0&&b.onAfterRender(I,b,O),ue.resetDefaultState(),q=-1,j=null,E.pop(),E.length>0?(w=E[E.length-1],qe.setTextureUnits(w.state.textureUnits),ce===!0&&$.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,D!==null&&D.renderEnd()};function vc(b,O,Y,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ce=O.isArrayCamera?de:ne;if(!b.frustumCulled||b.intersectsFrustum(Ce)){G&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ye);let me=re.update(b),Te=b.material;Te.visible&&A.push(b,me,Te,Y,Ue.z,null,O)}}else if(b.isMesh||b.isLine||b.isPoints){let Ce=O.isArrayCamera?de:ne;if(!b.frustumCulled||b.intersectsFrustum(Ce)){let me=re.update(b),Te=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){let Le=me.groups;for(let Ze=0,lt=Le.length;Ze<lt;Ze++){let Pe=Le[Ze],ct=Te[Pe.materialIndex];ct&&ct.visible&&A.push(b,me,ct,Y,Ue.z,Pe,O)}}else Te.visible&&A.push(b,me,Te,Y,Ue.z,null,O)}}}let _e=b.children;for(let Ce=0,me=_e.length;Ce<me;Ce++)vc(_e[Ce],O,Y,G)}function Cu(b,O,Y,G){let{opaque:W,transmissive:_e,transparent:Ce}=b;w.setupLightsView(Y),ce===!0&&$.setGlobalState(I.clippingPlanes,Y),G&&ge.viewport(ee.copy(G)),W.length>0&&Ua(W,O,Y),_e.length>0&&Ua(_e,O,Y),Ce.length>0&&Ua(Ce,O,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Pu(b,O,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Pe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Kt(1,1,{generateMipmaps:!0,type:Pe?fn:Ln,minFilter:Ii,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let _e=w.state.transmissionRenderTarget[G.id],Ce=G.viewport||ee;_e.setSize(Ce.z*I.transmissionResolutionScale,Ce.w*I.transmissionResolutionScale);let me=I.getRenderTarget(),Te=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(_e),I.getClearColor(J),Me=I.getClearAlpha(),Me<1&&I.setClearColor(16777215,.5),I.clear(),ot&&N.render(Y);let Ze=I.toneMapping;I.toneMapping=Fn;let lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),ce===!0&&$.setGlobalState(I.clippingPlanes,G),Ua(b,Y,G),qe.updateMultisampleRenderTarget(_e),qe.updateRenderTargetMipmap(_e),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,Ot=O.length;ct<Ot;ct++){let St=O[ct],{object:Mt,geometry:tn,material:Ie,group:hn}=St;if(Ie.side===yn&&Mt.layers.test(G.layers)){let pt=Ie.side;Ie.side=Gt,Ie.needsUpdate=!0,Iu(Mt,Y,G,tn,Ie,hn),Ie.side=pt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(qe.updateMultisampleRenderTarget(_e),qe.updateRenderTargetMipmap(_e))}I.setRenderTarget(me,Te,Le),I.setClearColor(J,Me),lt!==void 0&&(G.viewport=lt),I.toneMapping=Ze}function Ua(b,O,Y){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,_e=b.length;W<_e;W++){let Ce=b[W],{object:me,geometry:Te,group:Le}=Ce,Ze=Ce.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),me.layers.test(Y.layers)&&Iu(me,O,Y,Te,Ze,Le)}}function Iu(b,O,Y,G,W,_e){D!==null&&W.isNodeMaterial&&D.setObject(b,W),b.onBeforeRender(I,O,Y,G,W,_e),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(I,O,Y,G,b,_e),W.transparent===!0&&W.side===yn&&W.forceSinglePass===!1?(W.side=Gt,W.needsUpdate=!0,I.renderBufferDirect(Y,O,G,W,b,_e),W.side=ci,W.needsUpdate=!0,I.renderBufferDirect(Y,O,G,W,b,_e),W.side=yn):I.renderBufferDirect(Y,O,G,W,b,_e),b.onAfterRender(I,O,Y,G,W,_e)}function Lu(b){let O=0;for(let Y of b)Y.texture!==null&&O++;return O}function _r(b,O,Y){O.isScene!==!0&&(O=rt);let G=ze.get(b),W=w.state.lights,_e=w.state.shadowsArray,Ce=W.state.version,me=te.getParameters(b,W.state,_e,O,Y,w.state.lightProbeGridArray),Te=te.getProgramCacheKey(me),Le=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=C.get(b.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",_t),Le=new Map,G.programs=Le,G.programVariants=new Map);let lt=Le.get(Te);if(lt!==void 0){if(G.currentProgram===lt&&G.lightsStateVersion===Ce)return Nu(b,me),lt}else me.uniforms=te.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,Y,me),b.onBeforeCompile(me,I),lt=te.acquireProgram(me,Te),Le.set(Te,lt),G.uniforms=me.uniforms;let Pe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=$.uniform),Nu(b,me),G.needsLights=tm(b),G.lightsStateVersion=Ce,G.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Lu(w.state.lightProbeGridArray),G.currentProgram=lt,G.uniformsList=null,lt}function jp(b,O,Y,G,W){let _e=ze.get(b),Ce=_e.currentProgram.id+","+G+","+W,me=_e.programVariants.get(Ce);return me===void 0?(me=_r(b,O,Y),_e.programVariants.set(Ce,me)):(_e.currentProgram=me,_e.uniformsList=null,_e.outputColorSpace=G,_e.toneMapping=W),me}function Du(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=cr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Nu(b,O){let Y=ze.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Qp(b,O,Y,G,W){O.isScene!==!0&&(O=rt),qe.resetTextureUnits();let _e=O.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,me=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ht.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=C.get(G.envMap||Ce,Te),Ze=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,lt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Ot=!!Y.morphAttributes.color,St=Fn;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=I.toneMapping);let Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tn=Mt!==void 0?Mt.length:0,Ie=ze.get(G),hn=w.state.lights;if(ce===!0&&(Ae===!0||b!==j)){let Pt=b===j&&G.id===q;$.setState(G,b,Pt)}let pt=!1,hs=!1;G.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==hn.state.version||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==Le||G.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==$.numPlanes||Ie.numIntersection!==$.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==lt||Ie.morphTargets!==Pe||Ie.morphNormals!==ct||Ie.morphColors!==Ot||Ie.morphTargetsCount!==tn||Ie.numLightProbeGrids!==Lu(w.state.lightProbeGridArray)?pt=!0:(Ie.outputColorSpace!==me||Ie.toneMapping!==St)&&(hs=!0):(pt=!0,Ie.__version=G.version);let nn=Ie.currentProgram;(pt===!0||hs===!0)&&(nn=hs===!0?jp(G,O,W,me,St):_r(G,O,W),D&&G.isNodeMaterial&&D.onUpdateProgram(G,nn,Ie));let Fa=!1,Bi=!1,us=!1,dt=nn.getUniforms(),$t=Ie.uniforms;if(ge.useProgram(nn.program)&&(Fa=!0,Bi=!0,us=!0),G.id!==q&&(q=G.id,Bi=!0),Fa||j!==b){ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(B,"projectionMatrix",b.projectionMatrix),dt.setValue(B,"viewMatrix",b.matrixWorldInverse);let qt=dt.map.cameraPosition;qt!==void 0&&qt.setValue(B,Je.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&dt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Bi=!0,us=!0)}if(Ie.needsLights&&(hn.state.sunShadowMap.length>0&&dt.setValue(B,"sunShadowMap",hn.state.sunShadowMap,qe),hn.state.directionalShadowMap.length>0&&dt.setValue(B,"directionalShadowMap",hn.state.directionalShadowMap,qe),hn.state.spotShadowMap.length>0&&dt.setValue(B,"spotShadowMap",hn.state.spotShadowMap,qe),hn.state.pointShadowMap.length>0&&dt.setValue(B,"pointShadowMap",hn.state.pointShadowMap,qe)),W.isSkinnedMesh){dt.setOptional(B,W,"bindMatrix"),dt.setOptional(B,W,"bindMatrixInverse");let Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(B,"boneTexture",Pt.boneTexture,qe))}W.isBatchedMesh&&(dt.setOptional(B,W,"batchingTexture"),dt.setValue(B,"batchingTexture",W._matricesTexture,qe),dt.setOptional(B,W,"batchingIdTexture"),dt.setValue(B,"batchingIdTexture",W._indirectTexture,qe),dt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(B,"batchingColorTexture",W._colorsTexture,qe));let Hn=Y.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Q.update(W,Y,nn),(Bi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,dt.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&($t.envMapIntensity.value=O.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=$v()),Bi){if(dt.setValue(B,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&em($t,us),_e&&G.fog===!0&&he.refreshFogUniforms($t,_e),he.refreshMaterialUniforms($t,G,Se,Be,w.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Pt=v,qt=0;for(let xi of w.state.lightProbeGridArray)xi.texture!==null&&(Pt.textures[qt]=xi.texture,Pt.min[qt]=xi.boundingBox.min,Pt.max[qt]=xi.boundingBox.max,Pt.resolution[qt]=xi.resolution,qt++);for(let xi in Pt)Pt[xi].length=qt;$t.probesSH.value=Pt.textures,$t.probesMin.value=Pt.min,$t.probesMax.value=Pt.max,$t.probesResolution.value=Pt.resolution}cr.upload(B,Du(Ie),$t,qe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(cr.upload(B,Du(Ie),$t,qe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(B,"center",W.center),dt.setValue(B,"modelViewMatrix",W.modelViewMatrix),dt.setValue(B,"normalMatrix",W.normalMatrix),dt.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Pt=G.uniformsGroups;for(let qt=0,xi=Pt.length;qt<xi;qt++){let Fu=Pt[qt];Fe.update(Fu,nn),Fe.bind(Fu,nn)}}return nn}function em(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function tm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,O,Y){let G=ze.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ze.get(b.texture).__webglTexture=O,ze.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let Y=ze.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){ie=b,X=O,H=Y;let G=null,W=!1,_e=!1;if(b){let me=ze.get(b);if(me.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,me.__webglFramebuffer),ee.copy(b.viewport),we.copy(b.scissor),He=b.scissorTest,ge.viewport(ee),ge.scissor(we),ge.setScissorTest(He),q=-1;return}else if(me.__webglFramebuffer===void 0)qe.setupRenderTarget(b);else if(me.__hasExternalTextures)qe.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ze=b.depthTexture;if(me.__boundDepthTexture!==Ze){if(Ze!==null&&ze.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);let Le=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?G=Le[O][Y]:G=Le[O],W=!0):b.samples>0&&qe.useMultisampledRTT(b)===!1?G=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[Y]:G=Le,ee.copy(b.viewport),we.copy(b.scissor),He=b.scissorTest}else ee.copy(Ge).multiplyScalar(Se).floor(),we.copy(tt).multiplyScalar(Se).floor(),He=st;if(Y!==0&&(G=z),ge.bindFramebuffer(B.FRAMEBUFFER,G)&&ge.drawBuffers(b,G),ge.viewport(ee),ge.scissor(we),ge.setScissorTest(He),W){let me=ze.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,Y)}else if(_e){let me=O;for(let Te=0;Te<b.textures.length;Te++){let Le=ze.get(b.textures[Te]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Te,Le.__webglTexture,Y,me)}}else if(b!==null&&Y!==0){let me=ze.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,me.__webglTexture,Y)}q=-1};function Uu(b){let O=ze.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=yt.textureFormatReadable(b.format),O.__typeReadable=yt.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Y,G,W,_e,Ce,me=0){if(!(b&&b.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te){ge.bindFramebuffer(B.FRAMEBUFFER,Te);try{let Le=b.textures[me],Ze=Le.format,lt=Le.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+me);let Pe=Uu(Le);if(Pe.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&Y>=0&&Y<=b.height-W&&B.readPixels(O,Y,G,W,le.convert(Ze),le.convert(lt),_e)}finally{let Le=ie!==null?ze.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,G,W,_e,Ce,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=b.width-G&&Y>=0&&Y<=b.height-W){ge.bindFramebuffer(B.FRAMEBUFFER,Te);let Le=b.textures[me],Ze=Le.format,lt=Le.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+me);let Pe=Uu(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,_e.byteLength,B.STREAM_READ),B.readPixels(O,Y,G,W,le.convert(Ze),le.convert(lt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ot=ie!==null?ze.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ot);let St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jd(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_e),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ct),B.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(b.image.width*G),_e=Math.floor(b.image.height*G),Ce=O!==null?O.x:0,me=O!==null?O.y:0;qe.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ce,me,W,_e),ge.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,G=null,W=0,_e=0){let Ce,me,Te,Le,Ze,lt,Pe,ct,Ot,St=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(Y!==null)Ce=Y.max.x-Y.min.x,me=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Ze=Y.min.y,lt=Y.isBox3?Y.min.z:0;else{let dt=Math.pow(2,-W);Ce=Math.floor(St.width*dt),me=Math.floor(St.height*dt),b.isDataArrayTexture?Te=St.depth:b.isData3DTexture?Te=Math.floor(St.depth*dt):Te=1,Le=0,Ze=0,lt=0}G!==null?(Pe=G.x,ct=G.y,Ot=G.z):(Pe=0,ct=0,Ot=0);let Mt=le.convert(O.format),tn=le.convert(O.type),Ie;O.isData3DTexture?(qe.setTexture3D(O,0),Ie=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qe.setTexture2DArray(O,0),Ie=B.TEXTURE_2D_ARRAY):(qe.setTexture2D(O,0),Ie=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let hn=ge.getParameter(B.UNPACK_ROW_LENGTH),pt=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),hs=ge.getParameter(B.UNPACK_SKIP_PIXELS),nn=ge.getParameter(B.UNPACK_SKIP_ROWS),Fa=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Le),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,lt);let Bi=b.isDataArrayTexture||b.isData3DTexture,us=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let dt=ze.get(b),$t=ze.get(O),Hn=ze.get(dt.__renderTarget),Pt=ze.get($t.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Hn.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<Te;qt++)Bi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,W,lt+qt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.get(O).__webglTexture,_e,Ot+qt)),B.blitFramebuffer(Le,Ze,Le+Ce,Ze+me,Pe,ct,Pe+Ce,ct+me,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||ze.has(b)){let dt=ze.get(b),$t=ze.get(O);ge.bindFramebuffer(B.READ_FRAMEBUFFER,P),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Hn=0;Hn<Te;Hn++)Bi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.__webglTexture,W,lt+Hn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,W),us?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,_e,Ot+Hn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,_e),W!==0?B.blitFramebuffer(Le,Ze,Le+Ce,Ze+me,Pe,ct,Pe+Ce,ct+me,B.COLOR_BUFFER_BIT,B.NEAREST):us?B.copyTexSubImage3D(Ie,_e,Pe,ct,Ot+Hn,Le,Ze,Ce,me):B.copyTexSubImage2D(Ie,_e,Pe,ct,Le,Ze,Ce,me);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else us?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ie,_e,Pe,ct,Ot,Ce,me,Te,Mt,tn,St.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,_e,Pe,ct,Ot,Ce,me,Te,Mt,St.data):B.texSubImage3D(Ie,_e,Pe,ct,Ot,Ce,me,Te,Mt,tn,St):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_e,Pe,ct,Ce,me,Mt,tn,St.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_e,Pe,ct,St.width,St.height,Mt,St.data):B.texSubImage2D(B.TEXTURE_2D,_e,Pe,ct,Ce,me,Mt,tn,St);ge.pixelStorei(B.UNPACK_ROW_LENGTH,hn),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,hs),ge.pixelStorei(B.UNPACK_SKIP_ROWS,nn),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,Fa),_e===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(Ie),ge.unbindTexture()},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qe.setTextureCube(b,0):b.isData3DTexture?qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qe.setTexture2DArray(b,0):qe.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){X=0,H=0,ie=null,ge.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Hf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qv=new ir(-1,1,1,-1,0,1),Jh=class extends Rt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},ey=new Jh,Zl=class{constructor(e){this._mesh=new De(ey,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ur=class extends Ni{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hl.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ma=class extends Ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jl=class extends Ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new se);this._width=i.width,this._height=i.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ur(Hf),this.copyPass.material.blending=Pi,this.timer=new oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ma!==void 0&&(a instanceof Ma?i=!0:a instanceof Jl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sa=class extends Ni{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var $l=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p,int oct){float s=0.0,a=0.5;for(int i=0;i<7;i++){if(i>=oct)break;s+=a*snoise(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=0.5;}return s;}
float hash13(vec3 p){p=fract(p*0.1031);p+=dot(p,p.zyx+31.32);return fract((p.x+p.y)*p.z);}
vec3 hash33(vec3 p){p=fract(p*vec3(0.1031,0.1030,0.0973));p+=dot(p,p.yxz+33.33);return fract((p.xxy+p.yxx)*p.zyx);}
`,ws=`#include <common>
#include <logdepthbuf_pars_vertex>
`,Qi=`#include <logdepthbuf_pars_fragment>
`,Gf=ws+`
varying vec3 vDir;
void main(){vec4 wp=modelMatrix*vec4(position,1.0);vDir=wp.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*wp;
#include <logdepthbuf_vertex>
}`,Vf=Qi+$l+`
uniform vec3 uSun;uniform float uAlt;uniform vec3 uUp;uniform float uNight;
uniform vec3 uZL,uML,uHL,uZM,uMM,uHM,uSpace;
varying vec3 vDir;
float bands(float x,float n){return floor(x*n+0.5)/n;}
void main(){
  #include <logdepthbuf_fragment>
  vec3 d=normalize(vDir);float h=dot(d,uUp);
  float t1=smoothstep(2.0,34.0,uAlt),t2=smoothstep(30.0,125.0,uAlt);
  vec3 zen=mix(mix(uZL,uZM,t1),uSpace,t2);
  vec3 mid=mix(mix(uML,uMM,t1),uSpace,t2);
  vec3 hor=mix(mix(uHL,uHM,t1),uSpace,t2);
  float k=pow(1.0-clamp(h,0.0,1.0),2.6);
  k=bands(k,8.0);
  vec3 ink=k<0.5?mix(zen,mid,k*2.0):mix(mid,hor,(k-0.5)*2.0);
  if(h<0.0)ink=hor;
  float sd=dot(d,uSun);
  // sun: concentric printed rings
  float ang=acos(clamp(sd,-1.0,1.0));
  float sunR=0.05;
  if(ang<sunR*3.2&&t2<0.99){
    float ring=floor(ang/sunR);
    vec3 halo=mix(vec3(0.0,0.35,0.85),vec3(0.0,0.0,0.6),t1);
    if(ring<1.0)ink=mix(vec3(0.0,0.08,1.0),vec3(0.0,0.0,0.0),t2);
    else if(ring<2.0)ink=mix(ink,halo,0.85*(1.0-t2));
    else ink=mix(ink,halo,0.45*(1.0-t2));
  }
  if(t2>0.0&&ang<sunR){ink=mix(ink,vec3(0.0),t2);}
  if(t2>0.0&&ang>=sunR&&ang<sunR*1.35){ink=mix(ink,vec3(0.0,0.0,1.0),t2);}
  // stars: paper cut-outs and little sparkles
  float sa=max(smoothstep(20.0,110.0,uAlt),uNight*step(0.08,h));
  if(sa>0.0){
    vec3 p=d*120.0;vec3 c=floor(p);float r=hash13(c);
    vec3 f=fract(p)-0.5-(hash33(c)-0.5)*0.5;
    float star=0.0;
    if(r>0.93){float s=0.06+0.08*hash13(c+3.1);star=step(length(f),s);}
    vec3 p2=d*34.0;vec3 c2=floor(p2);float r2=hash13(c2+9.0);
    if(r2>0.96){vec3 f2=fract(p2)-0.5;vec3 ax=normalize(cross(d,uUp+vec3(0.0001)));vec3 ay=cross(d,ax);
      float x=dot(f2,ax),y=dot(f2,ay);
      float sp=step(abs(x),0.03*(1.0-abs(y)*3.0))*step(abs(y),0.32)+step(abs(y),0.03*(1.0-abs(x)*3.0))*step(abs(x),0.32);
      star=max(star,clamp(sp,0.0,1.0));}
    vec3 sc=r>0.985||r2>0.985?vec3(0.0,0.0,1.0):vec3(0.0);
    ink=mix(ink,sc,star*sa);
  }
  gl_FragColor=vec4(ink,1.0);
}`,Kh=ws+`
varying vec3 vN;varying vec3 vW;
void main(){vN=normalize(position);vec4 wp=modelMatrix*vec4(position,1.0);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;
#include <logdepthbuf_vertex>
}`,Wf="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}",Xf=$l+`
uniform vec3 uSite;varying vec2 vUv;
void main(){
  float lon=(vUv.x-0.5)*6.2831853,lat=(vUv.y-0.5)*3.1415927;
  vec3 n=vec3(cos(lat)*sin(lon),sin(lat),cos(lat)*cos(lon));
  float h=fbm(n*1.8+vec3(4.0,1.0,2.0),5)+0.24*exp(-pow(distance(n,uSite)*3.0,2.0));
  float land=step(0.05,h);
  float coast=step(-0.02,h)*(1.0-land);
  float la=abs(dot(n,normalize(vec3(0.15,0.25,0.96))));
  float dry=step(0.22,fbm(n*2.6+7.0,3)+0.15-la*0.3);
  vec3 ink=vec3(0.9,0.12,0.0);
  ink=mix(ink,vec3(0.62,0.05,0.0),coast);
  vec3 lc=mix(vec3(0.62,0.0,0.92),vec3(0.0,0.3,0.85),dry);
  lc=mix(lc,vec3(0.8,0.1,0.85),step(0.3,h));
  ink=mix(ink,lc,land);
  float ice=step(0.86,la+0.04*snoise(n*10.0));
  ink=mix(ink,vec3(0.0),ice);
  float cl=fbm(n*3.6,5);
  float cloud=step(0.2,cl+0.06*snoise(n*16.0));
  ink=mix(ink,vec3(0.0),cloud);
  float city=step(0.78,snoise(n*60.0)*0.5+0.5)*step(0.55,snoise(n*8.0)*0.5+0.5)*land*(1.0-ice)*(1.0-cloud);
  gl_FragColor=vec4(ink,city);
}`,qf=Qi+`
uniform sampler2D uMap;uniform vec3 uSun;uniform float uAlt;uniform vec3 uHaze;
varying vec3 vN;varying vec3 vW;
void main(){
  #include <logdepthbuf_fragment>
  vec3 n=normalize(vN);vec3 V=normalize(cameraPosition-vW);
  vec2 uv=vec2(atan(n.x,n.z)/6.2831853+0.5,asin(clamp(n.y,-1.0,1.0))/3.1415927+0.5);
  vec4 tx=texture2D(uMap,uv);
  vec3 ink=tx.rgb;
  float NdL=dot(n,uSun);
  float dusk=step(NdL,0.12),night=step(NdL,-0.08);
  ink+=vec3(0.0,0.42,0.0)*dusk*(1.0-night);
  ink=mix(ink,ink*0.4+vec3(0.85,0.75,0.0),night);
  ink=mix(ink,vec3(0.0,0.1,1.0),step(0.5,tx.a)*night);
  float limb=1.0-max(dot(n,V),0.0);
  ink=mix(ink,vec3(0.0),step(0.965,limb)*smoothstep(80.0,600.0,uAlt));
  float dist=length(cameraPosition-vW);
  float haze=(1.0-exp(-dist/(300.0+uAlt*12.0)))*(1.0-smoothstep(25.0,140.0,uAlt));
  haze=floor(haze*5.0+0.5)/5.0;
  ink=mix(clamp(ink,0.0,1.0),uHaze,haze);
  gl_FragColor=vec4(ink,1.0);
}`,Yf=ws+`
varying vec3 vW;
void main(){vec4 wp=modelMatrix*vec4(position,1.0);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;
#include <logdepthbuf_vertex>
}`,Zf=Qi+`
uniform vec3 uSun;uniform float uRe;uniform float uRa;uniform float uFade;
varying vec3 vW;
void main(){
  #include <logdepthbuf_fragment>
  vec3 o=cameraPosition;vec3 d=normalize(vW-o);float b=-dot(o,d);if(b<0.0)discard;
  vec3 p=o+d*b;float hgt=(length(p)-uRe)/(uRa-uRe);if(hgt<0.0||hgt>1.0)discard;
  float l=dot(normalize(p),uSun);
  vec3 c;float a;
  if(hgt<0.33){c=l>0.0?vec3(0.0,0.0,0.0):vec3(0.0,0.55,0.9);a=1.0;}
  else if(hgt<0.66){c=vec3(0.35,0.0,0.0);a=0.9;}
  else{c=vec3(0.6,0.15,0.0);a=0.6;}
  if(l<-0.35)discard;
  gl_FragColor=vec4(c,a*uFade);
}`,Jf=Qi+$l+`
uniform vec3 uSun;
varying vec3 vN;varying vec3 vW;
void main(){
  #include <logdepthbuf_fragment>
  vec3 n=normalize(vN);
  vec3 ink=vec3(0.0,0.0,0.12);
  float mare=step(0.12,fbm(n*1.6+3.0,3));
  ink=mix(ink,vec3(0.32,0.1,0.0),mare);
  vec3 p=n*7.0;vec3 c=floor(p);vec3 f=fract(p)-0.5-(hash33(c)-0.5)*0.4;float r=hash13(c);
  float cr=0.12+0.16*hash13(c+1.0);float dd=length(f);
  if(r>0.55){ink=mix(ink,vec3(0.42,0.12,0.0),step(dd,cr)*step(cr-0.05,dd));}
  float NdL=dot(n,uSun);
  ink=mix(ink,vec3(1.0,0.75,0.0),step(NdL,0.0));
  ink=mix(ink,ink+vec3(0.3,0.15,0.0),step(NdL,0.25)*step(0.0,NdL));
  gl_FragColor=vec4(clamp(ink,0.0,1.0),1.0);
}`,Kf=ws+`
varying vec3 vNV;varying vec3 vVV;
void main(){vNV=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.0);vVV=-mv.xyz;gl_Position=projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,$f=Qi+`
uniform vec3 uBase;uniform vec3 uShade;uniform vec3 uDeep;uniform vec3 uL;uniform float uGlint;uniform vec3 uGlow;uniform float uGlowAmt;
varying vec3 vNV;varying vec3 vVV;
void main(){
  #include <logdepthbuf_fragment>
  vec3 n=normalize(vNV);if(!gl_FrontFacing)n=-n;
  float ndl=dot(n,uL);
  vec3 ink=uBase;
  if(ndl<0.32)ink=uBase+uShade;
  if(ndl<-0.18)ink=uBase+uDeep;
  vec3 V=normalize(vVV);
  float sp=pow(max(dot(reflect(-uL,n),V),0.0),28.0);
  if(uGlint>0.5&&sp>0.55)ink=vec3(0.0);
  // flame glow from below (view space y down)
  float gl=uGlowAmt*smoothstep(0.1,-0.9,n.y);
  ink=mix(ink,uGlow,step(0.55,gl)*0.8);
  gl_FragColor=vec4(clamp(ink,0.0,1.0),1.0);
}`,jf=ws+`
uniform float uThick;
void main(){vec4 mv=modelViewMatrix*vec4(position+normal*uThick,1.0);gl_Position=projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,Qf=Qi+`
uniform vec3 uInk;
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor=vec4(uInk,1.0);}`,ep=ws+$l+`
uniform float uTime;uniform float uFlick;uniform float uSeed;
void main(){
  vec3 p=position;
  float w=1.0+uFlick*0.18*snoise(vec3(p.y*1.1-uTime*11.0,uTime*4.0,uSeed));
  p.xz*=w;p.x+=0.12*uFlick*snoise(vec3(p.y*0.6-uTime*6.0,uSeed,0.0))*(-p.y*0.25);
  vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;
  #include <logdepthbuf_vertex>
}`,tp=Qi+`
uniform vec3 uInk;
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor=vec4(uInk,1.0);}`,np=ws+`
attribute float aSize;attribute float aAlpha;attribute vec3 aColor;attribute float aRot;
uniform float uScale;
varying float vA;varying vec3 vC;varying float vR;
void main(){vA=aAlpha;vC=aColor;vR=aRot;vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=aSize*uScale/max(-mv.z,0.1);gl_Position=projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,ip=Qi+`
uniform sampler2D uTex;
varying float vA;varying vec3 vC;varying float vR;
void main(){
  #include <logdepthbuf_fragment>
  vec2 uv=gl_PointCoord-0.5;float c=cos(vR),s=sin(vR);uv=mat2(c,-s,s,c)*uv+0.5;
  vec4 tx=texture2D(uTex,uv);
  float a=step(0.5,tx.a)*vA;
  if(a<0.004)discard;
  gl_FragColor=vec4(vC*tx.rgb*a,a);
}`,sp={uniforms:{tDiffuse:{value:null},uRes:{value:null},uCell:{value:5},uDpr:{value:1},uPaper:{value:null},uT0:{value:null},uT1:{value:null},uT2:{value:null},uSeed:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
uniform sampler2D tDiffuse;uniform vec2 uRes;uniform float uCell;uniform float uDpr;uniform vec3 uPaper,uT0,uT1,uT2;uniform float uSeed;
varying vec2 vUv;
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vnoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
float screen(vec2 px,float ang,float d,float cell){
  if(d<0.035)return 0.0;
  if(d>0.9)return 1.0;
  float s=sin(ang),c=cos(ang);
  vec2 p=mat2(c,-s,s,c)*px/cell;
  vec2 f=fract(p)-0.5;
  float r=sqrt(d)*0.74;
  float dist=length(f);
  float aa=0.75/cell;
  return 1.0-smoothstep(r-aa,r+aa,dist);
}
void main(){
  vec2 px=vUv*uRes;
  vec2 o1=vec2(0.35,-0.25)*uDpr, o2=vec2(-0.25,0.3)*uDpr;
  float grain=vnoise(px/(2.2*uDpr))*0.6+vnoise(px/(9.0*uDpr))*0.4;
  float d0=texture2D(tDiffuse,vUv).r;
  float d1=texture2D(tDiffuse,(px+o1)/uRes).g;
  float d2=texture2D(tDiffuse,(px+o2)/uRes).b;
  float j=(grain-0.5)*0.015;
  float c0=screen(px,0.2618,clamp(d0+j,0.0,1.0),uCell);
  float c1=screen(px+o1,1.309,clamp(d1+j,0.0,1.0),uCell);
  float c2=screen(px+o2,0.0,clamp(d2+j,0.0,1.0),uCell*0.92);
  // ink speckle: riso drums never cover perfectly
  float sp=vnoise(px/(1.4*uDpr)+uSeed);
  c0*=0.96+0.04*step(0.18,sp);c1*=0.96+0.04*step(0.2,1.0-sp);c2*=0.97+0.03*step(0.25,sp);
  // soften: blend the dot screen with continuous tone so it doesn't shimmer
  c0=mix(c0,clamp(d0,0.0,1.0),0.84);c1=mix(c1,clamp(d1,0.0,1.0),0.84);c2=mix(c2,clamp(d2,0.0,1.0),0.84);
  vec3 paper=uPaper*(0.99+0.012*grain);
  vec3 col=paper*mix(vec3(1.0),uT0,c0)*mix(vec3(1.0),uT1,c1)*mix(vec3(1.0),uT2,c2);
  vec2 q=vUv-0.5;col*=1.0-dot(q,q)*0.06;
  gl_FragColor=vec4(col,1.0);
}`};var k=n=>document.getElementById(n),Sn=(n,e,t)=>n<e?e:n>t?t:n,Kn=(n,e,t)=>n+(e-n)*t,kn=(n,e,t)=>{let i=Sn((t-n)/(e-n),0,1);return i*i*(3-2*i)};function os(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function gu(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function ny(){let n=new Date;return n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0")}function En(n){n=Math.max(0,n);let e;return n<10?e=n.toFixed(2):n<1e3?e=n.toFixed(1):e=Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"\u202F"),e.replace(".",",")}function at(n,e){try{if(e===void 0)return localStorage.getItem(n);localStorage.setItem(n,e)}catch{return null}}function en(n){return String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var Nt=ny(),ou=["P","S","K","M","B","T","V","D","R","Z","H","L","O","N"],Cs=ou[Math.floor(os(gu("slovoraketa-"+Nt))()*ou.length)],Mp=Cs.toLocaleLowerCase("cs"),is={L:Cs,ll:Mp},pi=[{at:0,name:"Troposf\xE9ra"},{at:12,name:"Stratosf\xE9ra"},{at:50,name:"Mezosf\xE9ra"},{at:85,name:"Termosf\xE9ra"},{at:100,name:"K\xE1rm\xE1nova hranice"},{at:400,name:"Dr\xE1ha ISS"},{at:2e3,name:"Vysok\xE1 ob\u011B\u017En\xE1 dr\xE1ha"},{at:20200,name:"Dr\xE1ha GPS"},{at:35786,name:"Geostacion\xE1rn\xED dr\xE1ha"},{at:1e5,name:"Hlubok\xFD vesm\xEDr"},{at:384400,name:"M\u011Bs\xEDc"}];document.querySelectorAll("[data-letter]").forEach(n=>n.textContent=Cs);var iy={P:["pivo","postel","poh\xE1dka","pol\u0161t\xE1\u0159","papou\u0161ek","pomeran\u010D","pern\xEDk","pohovka","pra\u010Dka","pastelka","pavouk","pala\u010Dinka"],S:["slunce","sklenice","sv\xED\u010Dka","sestra","strom","sn\xEDdan\u011B","se\u0161it","srdce","silnice","semafor","sal\xE1m","sn\u011Bhul\xE1k"],K:["kolo","ko\u010Dka","kniha","kytara","ka\u0161tan","kol\xE1\u010D","klobouk","kostel","krabice","kompas","kapsa","komin\xEDk"],M:["mrkev","mot\xFDl","ml\xE9ko","meloun","medv\u011Bd","most","mapa","mo\u0159e","marmel\xE1da","mrak","ma\u0161inka","muchom\u016Frka"],B:["babi\u010Dka","ban\xE1n","brambora","beru\u0161ka","bal\xF3n","bota","bou\u0159ka","bor\u016Fvka","buchta","bud\xEDk","br\xFDle","buben\xEDk"],T:["tr\xE1va","telefon","tu\u017Eka","traktor","tal\xED\u0159","tramvaj","t\u0159e\u0161n\u011B","tulip\xE1n","trubka","topinka","tygr","ta\u0161ka"],V:["voda","vlak","vesnice","vaj\xED\u010Dko","veverka","vlajka","vidli\u010Dka","v\xE1za","vosa","velbloud","v\xE1no\u010Dka","vrabec"],D:["dort","d\u011Bde\u010Dek","de\u0161tn\xEDk","d\xE1lnice","d\xE1rek","delf\xEDn","d\xFDn\u011B","divadlo","dopis","drak","dalekohled","dudl\xEDk"],R:["ryba","r\u016F\u017Ee","rohl\xEDk","rodina","raketa","radost","rybn\xEDk","ru\u010Dn\xEDk","robot","raj\u010De","rozinka","rukavice"],Z:["zahrada","zmrzlina","zebra","z\xE1mek","zima","zrcadlo","zelenina","zvonek","zaj\xEDc","zub","z\xE1vod","z\xE1palka"],H:["hrad","houba","hru\u0161ka","hv\u011Bzda","hodiny","hora","hra\u010Dka","husa","h\u0159eben","hrnek","hasi\u010D","housle"],L:["lampa","l\u017E\xEDce","letadlo","ledni\u010Dka","list","louka","lavi\u010Dka","lo\u010Fka","li\u0161ka","limon\xE1da","l\xEDz\xE1tko","lopata"],O:["okno","oblak","ovoce","o\u0159ech","opice","obraz","ostrov","ob\u011Bd","ohe\u0148","obchod","okurka","ove\u010Dka"],N:["nebe","noviny","n\u016F\u017Eky","n\xE1dra\u017E\xED","nosoro\u017Eec","nemocnice","nanuk","noha","n\xE1dob\xED","n\xE1u\u0161nice","n\xE1klad\xE1k","notes"]},Aa="";function Sp(){let n=(iy[Cs]||[]).filter(t=>ns.has(t));if(!n.length)return;Aa=n[Math.floor(os(gu("zlato-"+Nt))()*n.length)];let e=at("sr-goldDay")===Nt;k("goldHint").innerHTML=e?"zlat\xE9 slovo: <b>"+en(Aa)+"</b>":"zlat\xE9 slovo m\xE1 <b>"+Aa.length+" p\xEDsmen</b>"}function bp(n,e){let[t,i,s]=n.split("-").map(Number),r=new Date(t,i-1,s+e);return r.getFullYear()+"-"+String(r.getMonth()+1).padStart(2,"0")+"-"+String(r.getDate()).padStart(2,"0")}var lc=n=>n+(n===1?" den":n>1&&n<5?" dny":" dn\xED");function Ep(){let n=at("sr-lastDay"),e=+(at("sr-streak")||0);return n===Nt||n===bp(Nt,-1)?e:0}function sy(){let n=at("sr-lastDay"),e=+(at("sr-streak")||0);return n===Nt||(e=n===bp(Nt,-1)?e+1:1,at("sr-lastDay",Nt),at("sr-streak",String(e))),e}function Tp(){let n=Ep();k("streakTxt").textContent=n>0?"s\xE9rie "+lc(n):"za\u010Dni s\xE9rii"}(function(){let n=new Date,e=["Ned\u011Ble","Pond\u011Bl\xED","\xDAter\xFD","St\u0159eda","\u010Ctvrtek","P\xE1tek","Sobota"],t=["ledna","\xFAnora","b\u0159ezna","dubna","kv\u011Btna","\u010Dervna","\u010Dervence","srpna","z\xE1\u0159\xED","\u0159\xEDjna","listopadu","prosince"],i=Math.round((new Date(n.getFullYear(),n.getMonth(),n.getDate())-new Date(2026,10,14))/864e5)+1;k("todayInfo").textContent=e[n.getDay()]+" "+n.getDate()+". "+(n.getMonth()+1)+". \xB7 mise "+String(Math.max(1,i)).padStart(3,"0")})();var ns={ready:!1,failed:!1,blocks:null,heads:null,async load(){try{if(window.SLOVA_GZ||await new Promise((i,s)=>{let r=document.createElement("script");r.src="slova.js",r.onload=i,r.onerror=s,document.head.appendChild(r)}),!window.SLOVA_GZ||typeof DecompressionStream>"u")throw new Error("x");let n=Uint8Array.from(atob(window.SLOVA_GZ),i=>i.charCodeAt(0)),e=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),t=await new Response(e).text();this.blocks=t.split(""),this.heads=this.blocks.map(i=>{let s=i.indexOf(`
`);return s<0?i:i.slice(0,s)}),this.ready=!0,window.SLOVA_GZ=null}catch{this.failed=!0}},extra:new Set,has(n){if(this.extra.has(n))return!0;if(!this.ready)return/[aeiouyáéěíóúůý]/.test(n)&&!/(.)\1\1/.test(n);let e=this.heads,t=0,i=e.length-1,s=-1;for(;t<=i;){let o=t+i>>1;e[o]<=n?(s=o,t=o+1):i=o-1}if(s<0)return!1;let r=this.blocks[s].split(`
`),a="";for(let o=0;o<r.length;o++){let l=r[o],c=o===0?l:a.slice(0,l.charCodeAt(0)-48)+l.slice(1);if(c===n)return!0;if(c>n)return!1;a=c}return!1}},vt={ctx:null,eng:null,muted:at("sr-mute")==="1",init(){if(!this.ctx)try{let n=window.AudioContext||window.webkitAudioContext;this.ctx=new n;let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0),s=0;for(let u=0;u<e;u++){let d=Math.random()*2-1;s=(s+.02*d)/1.02,i[u]=s*3.2}let r=this.ctx.createBufferSource();r.buffer=t,r.loop=!0;let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=420;let o=this.ctx.createGain();o.gain.value=0,r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start();let l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.value=46;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=160;let h=this.ctx.createGain();h.gain.value=0,l.connect(c),c.connect(h),h.connect(this.ctx.destination),l.start(),this.eng={g:o,lp:a,rg:h,rum:l}}catch{this.ctx=null}},engine(n,e){if(!this.eng)return;let t=this.ctx.currentTime;this.eng.g.gain.setTargetAtTime(this.muted?0:n,t,.08),this.eng.rg.gain.setTargetAtTime(this.muted?0:n*(e?.25:.55),t,.1),this.eng.rum.frequency.setTargetAtTime(42+n*40,t,.2),this.eng.lp.frequency.setTargetAtTime(e?220:380+n*900,t,.1)},tone(n,e,t,i,s){if(!this.ctx||this.muted)return;let r=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=i||"triangle",a.frequency.setValueAtTime(n,r),a.frequency.exponentialRampToValueAtTime(e,r+t),o.gain.setValueAtTime(s||.1,r),o.gain.exponentialRampToValueAtTime(1e-4,r+t),a.connect(o),o.connect(this.ctx.destination),a.start(r),a.stop(r+t+.02)},ok(n){this.tone(520+n*30,880+n*40,.16,"sine",.1)},bad(){this.tone(180,120,.16,"triangle",.08)},beep(n){this.tone(n?880:560,n?880:560,.14,"sine",.12)},stage(){this.tone(440,660,.12,"sine",.09),setTimeout(()=>this.tone(660,990,.2,"sine",.09),120)},boom(){if(!this.ctx||this.muted)return;let n=this.ctx.currentTime,e=this.ctx.sampleRate*1.1,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.pow(1-o/e,2.4);let s=this.ctx.createBufferSource();s.buffer=t;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=600;let a=this.ctx.createGain();a.gain.value=.55,s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(n)}},ry='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',ay='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M16 10l4 4M20 10l-4 4"/></svg>';function wp(){k("muteBtn").innerHTML=vt.muted?ay:ry}wp();k("muteBtn").addEventListener("pointerdown",n=>n.preventDefault());k("muteBtn").addEventListener("click",()=>{vt.muted=!vt.muted,at("sr-mute",vt.muted?"1":"0"),wp(),vt.muted&&vt.engine(0)});var oy=k("gl"),ss=new Xl({canvas:oy,antialias:!1,powerPreference:"high-performance"});ss.toneMapping=Fn;ss.setClearColor(0,1);var Dn=Math.min(window.devicePixelRatio||1,2),Ap=matchMedia("(pointer:coarse)").matches||Math.min(screen.width,screen.height)<700,pr=at("sr-q2")?+at("sr-q2"):Ap&&Dn>1.5?.85:1;ss.setPixelRatio(Dn);var kt=(n,e,t)=>new $e().setRGB(n,e,t,Rn),Rs=6371,cc=new L(.62,.5,-.6).normalize(),ly=new L(.75,.42,.52).normalize(),cy=new L(0,1,0),dr=new Date().getHours()+new Date().getMinutes()/60,ic=dr>=5&&dr<8.5?"dawn":dr>=8.5&&dr<16.5?"day":dr>=16.5&&dr<20?"evening":"night",$h={dawn:[[.55,.3,0],[.05,.55,.3],[0,.22,.7]],day:[[.78,.06,0],[.42,0,.04],[.16,0,.14]],evening:[[.7,.2,0],[.18,.6,.12],[0,.42,.9]],night:[[1,.85,0],[.95,.62,0],[.72,.5,.12]]}[ic],hy=ic==="night"?1:0,Ui={uZL:kt(...$h[0]),uML:kt(...$h[1]),uHL:kt(...$h[2]),uZM:kt(.92,.32,0),uMM:kt(.72,.12,0),uHM:kt(.38,0,.12),uSpace:kt(1,.8,0)};function rp(n,e){let t=kn(2,34,n),i=kn(30,125,n),s=(l,c)=>l.clone().lerp(c,t).lerp(Ui.uSpace,i),r=s(Ui.uZL,Ui.uZM),a=s(Ui.uML,Ui.uMM),o=s(Ui.uHL,Ui.uHM);return e<.5?r.lerp(a,e*2):a.lerp(o,(e-.5)*2)}var La=new xs,Bn=new an(50,1,.5,12e5);Bn.rotation.order="YXZ";var Rp={uSun:{value:cc},uAlt:{value:0},uUp:{value:new L(0,1,0)},uNight:{value:hy}};for(let n in Ui)Rp[n]={value:Ui[n]};var Cp=new Dt({vertexShader:Gf,fragmentShader:Vf,side:Gt,depthWrite:!1,uniforms:Rp}),hc=new De(new vn(9e5,48,24),Cp);hc.renderOrder=-10;hc.frustumCulled=!1;La.add(hc);var sc=new Dt({vertexShader:Kh,fragmentShader:qf,uniforms:{uMap:{value:null},uSun:{value:cc},uAlt:{value:0},uHaze:{value:kt(0,.4,.8)}}});(function(){let e=new Kt(2048,1024,{wrapS:gs,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),t=new De(new Yi(2,2),new Dt({vertexShader:Wf,fragmentShader:Xf,uniforms:{uSite:{value:cy}},depthTest:!1,depthWrite:!1})),i=new xs;i.add(t);let s=new Ms;ss.setRenderTarget(e),ss.render(i,s),ss.setRenderTarget(null),t.geometry.dispose(),t.material.dispose(),sc.uniforms.uMap.value=e.texture})();var uy=new De(new vn(Rs,128,96),sc);La.add(uy);var Pp=new Dt({vertexShader:Yf,fragmentShader:Zf,side:Gt,transparent:!0,depthWrite:!1,uniforms:{uSun:{value:cc},uRe:{value:Rs},uRa:{value:Rs+260},uFade:{value:0}}}),dy=new De(new vn(Rs+260,128,96),Pp);La.add(dy);var lu=new De(new vn(1737,96,64),new Dt({vertexShader:Kh,fragmentShader:Jf,uniforms:{uSun:{value:cc}}}));La.add(lu);var cn=new xs,mn=new an(50,1,.1,9e3);cn.fog=new kr(new $e,90,2600);var Ip=new L,Lp={value:0};function jt(n,e,t,i={}){return new Dt({vertexShader:Kf,fragmentShader:$f,side:i.side||ci,uniforms:{uBase:{value:kt(...n)},uShade:{value:kt(...e)},uDeep:{value:kt(...t)},uL:{value:Ip},uGlint:{value:i.glint?1:0},uGlow:{value:kt(0,.5,1)},uGlowAmt:Lp}})}var ap=new Dt({vertexShader:jf,fragmentShader:Qf,side:Gt,uniforms:{uThick:{value:.045},uInk:{value:kt(1,.85,0)}}});function ln(n,e){let t=e?ap.clone():ap;e&&(t.uniforms.uThick.value=e);let i=new De(n.geometry,t);return i.position.copy(n.position),i.rotation.copy(n.rotation),i.scale.copy(n.scale),n.parent.add(i),i}var We=new Tt;cn.add(We);var uc=-.7,di=[{id:"klasik",name:"Klasik",need:0,body:[0,0,0],accent:[0,1,1],trim:[1,.85,0]},{id:"modrak",name:"Modr\xE1k",need:12,body:[.34,0,0],accent:[1,.85,0],trim:[0,0,1]},{id:"zvykacka",name:"\u017Dv\xFDka\u010Dka",need:50,body:[0,.32,0],accent:[1,.05,0],trim:[0,1,1]},{id:"citron",name:"Citron",need:100,body:[0,0,.7],accent:[1,.85,0],trim:[0,1,.15]},{id:"smrcek",name:"Smr\u010Dek",need:400,body:[.62,0,.9],accent:[0,1,1],trim:[0,0,0]},{id:"pulnoc",name:"P\u016Flnoc",need:2e3,body:[1,.85,0],accent:[0,0,1],trim:[0,1,1]},{id:"zlata",name:"Zlat\xE1",need:35786,body:[0,.35,1],accent:[1,.85,0],trim:[0,0,0]}],cu=n=>di.find(e=>e.id===n)||di[0],fy=[.42,.22,0],py=[.8,.5,0];function jh(n,e){n.uniforms.uBase.value.setRGB(e[0],e[1],e[2],Rn);let t=e[0]+e[1]*.6>1.2,i=t?[0,.15,.2]:fy,s=t?[0,.3,.35]:py;n.uniforms.uShade.value.setRGB(i[0],i[1],i[2],Rn),n.uniforms.uDeep.value.setRGB(s[0],s[1],s[2],Rn)}function dc(n,e){let t=n.userData.mats;if(t){jh(t.paper,e.body),jh(t.red,e.accent),jh(t.indigo,e.trim);for(let i of t.trimBasic)i.color.setRGB(e.trim[0],e.trim[1],e.trim[2],Rn)}}(function(){let e=jt([0,0,0],[.42,.22,0],[.8,.5,0],{glint:!0}),t=jt([0,1,1],[.45,.15,0],[.9,.5,0]),i=jt([1,.85,0],[1,.9,.2],[1,.95,.3]),s=jt([1,.05,0],[1,.4,0],[1,.7,0],{glint:!0}),r=jt([.55,.3,.1],[.85,.55,.1],[1,.8,.2],{glint:!0}),a=.62,o=new De(new wt(a,a*.94,4.6,64,1,!1),e);o.position.y=2.6,We.add(o),ln(o);let l=[],c=2.6;for(let P=0;P<=32;P++){let F=P/32,X=a*Math.sqrt(Math.max(0,1-Math.pow(F,1.9)))*(1-.06*F);l.push(new se(Math.max(X,1e-4),F*c))}let h=new De(new li(l,64),t);h.position.y=4.9,We.add(h),ln(h);let u=new De(new vn(.07,12,8),i);u.position.y=4.9+c-.02,We.add(u);let d=(P,F,X)=>{let H=new De(new wt(a+.015,a+.015,F,64,1,!0),X);H.position.y=P,We.add(H)};d(4.66,.14,i),d(1.02,.3,i),d(1.3,.07,t);let f=document.createElement("canvas");f.width=256,f.height=32;let g=f.getContext("2d");g.fillStyle="#fff";for(let P=0;P<8;P++)P%2===0&&g.fillRect(P*32,0,32,32);let y=new Yn(f);y.wrapS=gs;let p=new De(new wt(a+.016,a+.016,.34,64,1,!0),new qn({map:y,color:kt(1,.85,0),transparent:!0,alphaTest:.5,fog:!1}));p.position.y=4.2,We.add(p);let m=p.material;m.onBeforeCompile=P=>{P.fragmentShader=P.fragmentShader.replace("#include <map_fragment>","vec4 sampledDiffuseColor = texture2D( map, vMapUv ); diffuseColor.a *= sampledDiffuseColor.r;")};let _=new De(new ra(.29,.06,12,40),i);_.position.set(0,3.7,a-.01),We.add(_);let S=new De(new ri(.26,40),s);S.position.set(0,3.7,a+.005),We.add(S);let v=new De(new ri(.07,16),new qn({color:kt(0,0,0),fog:!1}));v.position.set(-.08,3.79,a+.012),We.add(v);let A=document.createElement("canvas");A.width=512,A.height=128;let w=A.getContext("2d");We.userData.labelDraw=()=>{w.clearRect(0,0,512,128),w.fillStyle="#fff",w.font="800 84px 'Bricolage Grotesque', sans-serif",w.textAlign="center",w.textBaseline="middle",w.fillText("TM\xCDNUS",256,68),x.needsUpdate=!0};let x=new Yn(A),E=new De(new wt(a+.008,a+.008,.62,48,1,!0,-.62,1.24),new qn({map:x,color:kt(1,.85,0),transparent:!0,alphaTest:.5,fog:!1}));E.material.onBeforeCompile=m.onBeforeCompile,E.position.y=2.5,E.rotation.y=Math.PI,We.add(E),We.userData.labelDraw();let U=new oi;U.moveTo(0,0),U.lineTo(0,2),U.bezierCurveTo(.35,1.5,.95,.75,1.05,-.15),U.lineTo(.95,-.42),U.lineTo(0,0);let I=new qi(U,{depth:.08,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:18});I.translate(0,0,-.04);for(let P=0;P<4;P++){let F=new Tt;F.rotation.y=P*Math.PI/2+Math.PI/4;let X=new De(I,t);X.position.set(a*.92,.25,0),F.add(X),We.add(F),ln(X,.03)}let R=[];for(let P=0;P<=16;P++){let F=P/16;R.push(new se(.24+Math.pow(F,1.6)*.28,-F*.62))}let D=new De(new li(R,48),r);D.material.side=yn,D.position.y=-.08,We.add(D),ln(D,.03);let z=new De(new wt(a*.94,a*.78,.36,48),i);z.position.y=.12,We.add(z),We.userData.mats={paper:e,red:t,indigo:i,trimBasic:[p.material,E.material]}})();var ba=(()=>{let e=[];for(let s=0;s<=16;s++){let r=s/16;e.push(new se(Math.max(1e-4,.62*Math.sqrt(Math.max(0,1-Math.pow(r,1.9)))),r*2.6))}let t=new oi;t.moveTo(0,0),t.lineTo(0,2),t.bezierCurveTo(.35,1.5,.95,.75,1.05,-.15),t.lineTo(.95,-.42),t.lineTo(0,0);let i=new qi(t,{depth:.1,bevelEnabled:!1});return i.translate(0,0,-.05),{body:new wt(.62,.62*.94,4.6,24),nose:new li(e,24),fin:i,band:new wt(.62+.02,.62+.02,.3,24,1,!0),flame:new ai(.5,3.4,16).rotateX(Math.PI).translate(0,-1.7,0)}})();function my(n){let e=new Tt,t=jt(n.body,[0,0,0],[0,0,0]),i=jt(n.accent,[0,0,0],[0,0,0]),s=jt(n.trim,[0,0,0],[0,0,0]);e.userData.mats={paper:t,red:i,indigo:s,trimBasic:[]},dc(e,n);let r=new De(ba.body,t);r.position.y=2.6,e.add(r),ln(r,.06);let a=new De(ba.nose,i);a.position.y=4.9,e.add(a),ln(a,.06);let o=new De(ba.band,s);o.position.y=1.02,e.add(o);for(let c=0;c<3;c++){let h=new Tt;h.rotation.y=c*Math.PI*2/3+.4;let u=new De(ba.fin,i);u.position.set(.56,.25,0),h.add(u),e.add(h)}let l=new De(ba.flame,new qn({color:kt(0,.9,1),fog:!1}));return l.position.y=-.1,e.add(l),e.userData.flame=l,e.scale.setScalar(.5),e.visible=!1,cn.add(e),e}function gy(n){let e=We.userData;We.userData={};let t=We.visible,i=We.rotation.clone();We.visible=!0,We.rotation.set(0,0,0);let s=We.clone(!0);We.userData=e,We.visible=t,We.rotation.copy(i);let r=new Map([[e.mats.paper,e.mats.paper.clone()],[e.mats.red,e.mats.red.clone()],[e.mats.indigo,e.mats.indigo.clone()]]);return s.traverse(a=>{a.material&&r.has(a.material)&&(a.material=r.get(a.material))}),s.userData={mats:{paper:r.get(e.mats.paper),red:r.get(e.mats.red),indigo:r.get(e.mats.indigo),trimBasic:[]},flame:s.children[We.children.indexOf(mr)],twin:!0},dc(s,n),s.position.set(0,0,0),s.visible=!1,cn.add(s),s}var Qn=[],op=[[-6.5,-4],[6.5,-5],[-10,-9],[10,-10],[-13,-14]];function Qh(n,e,t,i){let s=new li(n.map(o=>new se(o[0],o[1])),32),r=new Dt({vertexShader:ep,fragmentShader:tp,depthWrite:!1,transparent:!0,uniforms:{uTime:{value:0},uFlick:{value:1},uSeed:{value:t},uInk:{value:kt(...e)}}}),a=new De(s,r);return a.renderOrder=i,a.frustumCulled=!1,a}var mr=new Tt,Dp=[Qh([[.5,0],[.7,-.6],[.72,-1.6],[.55,-2.9],[.3,-4.1],[.02,-5.3]],[0,1,1],1,5),Qh([[.38,0],[.52,-.5],[.5,-1.4],[.34,-2.5],[.02,-3.6]],[0,.35,1],2,6),Qh([[.24,0],[.3,-.4],[.24,-1.1],[.02,-1.9]],[0,0,0],3,7)];Dp.forEach(n=>mr.add(n));mr.position.y=uc+.02;We.add(mr);function Np(n,e=256,t=256,i=!1){let s=document.createElement("canvas");s.width=e,s.height=t;let r=s.getContext("2d"),a=os(n),o=[];if(i){let c=7+Math.floor(a()*4),h=t*.78;for(let u=0;u<c;u++){let d=(u+.5)/c,f=Math.sin(d*Math.PI),g=t*(.13+f*.2+a()*.06);o.push([e*(.1+d*.8),h-g*(.4+f*.7),g])}}else{for(let c=0;c<5;c++){let h=c/5*Math.PI*2+a(),u=e*(.2+a()*.06);o.push([e/2+Math.cos(h)*e*.17,t/2+Math.sin(h)*t*.17,u])}o.push([e/2,t/2,e*.28])}let l=c=>{c.beginPath();for(let[h,u,d]of o)c.moveTo(h+d,u),c.arc(h,u,d,0,Math.PI*2);i&&c.rect(e*.08,t*.55,e*.84,t*.23)};r.fillStyle="rgb(72,52,0)",l(r),r.fill(),r.save(),l(r),r.clip(),r.fillStyle="rgb(0,0,0)",r.beginPath();for(let[c,h,u]of o){let d=c-e*.035,f=h-t*(i?.07:.05);r.moveTo(d+u*.9,f),r.arc(d,f,u*.9,0,Math.PI*2)}return r.fill(),r.restore(),new Yn(s)}function xy(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.fillStyle="#fff",e.beginPath(),e.arc(32,32,30,0,7),e.fill(),new Yn(n)}function _y(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=os(5),i=(s,r)=>{e.fillStyle=r,e.beginPath();let a=14;for(let o=0;o<a*2;o++){let l=o/(a*2)*Math.PI*2,c=o%2?s*(.45+t()*.15):s*(.85+t()*.15);e.lineTo(128+Math.cos(l)*c,128+Math.sin(l)*c)}e.closePath(),e.fill()};return i(126,"rgb(0,255,255)"),i(92,"rgb(0,90,255)"),i(50,"rgb(0,0,0)"),new Yn(n)}function Up(n,e){let t=new Rt,i=new Float32Array(n*3),s=new Float32Array(n),r=new Float32Array(n),a=new Float32Array(n*3),o=new Float32Array(n);for(let[h,u,d]of[["position",i,3],["aSize",s,1],["aAlpha",r,1],["aColor",a,3],["aRot",o,1]])t.setAttribute(h,new xn(u,d).setUsage(Ah));let l=new Dt({vertexShader:np,fragmentShader:ip,transparent:!0,depthWrite:!1,blending:jo,blendSrc:Qo,blendDst:ca,uniforms:{uTex:{value:e},uScale:{value:300}}}),c=new qr(t,l);return c.frustumCulled=!1,{pts:c,geo:t,mat:l,max:n,list:[],pos:i,size:s,alpha:r,col:a,rot:o}}var mi=Up(900,Np(7)),ls=Up(400,xy());cn.add(mi.pts,ls.pts);function As(n,e){n.list.length>=n.max&&n.list.shift(),n.list.push(e)}var tc=new Map;function vy(n){if(tc.has(n))return tc.get(n);let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.font="800 96px 'Bricolage Grotesque', sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineWidth=16,t.strokeStyle="rgb(255,215,0)",t.strokeText(n,64,70),t.fillStyle="rgb(0,40,255)",t.fillText(n,64,70);let i=new Yn(e);return tc.set(n,i),i}var Da=[];for(let n=0;n<90;n++){let e=new Xi(new Ri({color:16777215,transparent:!0,depthWrite:!1,fog:!1,alphaTest:.45}));e.visible=!1,e.userData={life:0},cn.add(e),Da.push(e)}var Ca=[],eu=0;function yy(n,e){let t=Da.find(s=>!s.visible);if(!t)return;t.material.map=vy(n.toLocaleUpperCase("cs")),t.material.needsUpdate=!0,t.visible=!0,t.position.copy(e);let i=Math.random()<.5?-1:1;t.userData={life:1,max:1.6+Math.random()*.6,v:new L(i*(1.5+Math.random()*2.5),-3-Math.random()*2.5,(Math.random()-.5)*2),spin:(Math.random()-.5)*4,size:2.6+Math.random()*.8},t.material.rotation=(Math.random()-.5)*.8}function es(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");return s.lineJoin="round",s.lineCap="round",t(s,n,e),new Yn(i)}var Ct={paper:"rgb(0,0,0)",ink:"rgb(255,215,0)",blue:"rgb(255,0,0)",red:"rgb(0,255,255)",yellow:"rgb(0,0,255)",pink:"rgb(0,255,0)",lblue:"rgb(110,0,0)",grey:"rgb(90,60,0)"},hu={birds:es(256,128,n=>{n.strokeStyle=Ct.ink,n.lineWidth=7;let e=(t,i,s)=>{n.beginPath(),n.moveTo(t-18*s,i-8*s),n.quadraticCurveTo(t-8*s,i-12*s,t,i),n.quadraticCurveTo(t+8*s,i-12*s,t+18*s,i-8*s),n.stroke()};e(128,50,1.4),e(80,80,1.1),e(176,78,1.1),e(40,104,.9),e(214,106,.9)}),plane:es(512,160,n=>{n.fillStyle=Ct.lblue,n.fillRect(0,70,300,10),n.fillRect(0,88,280,6),n.fillStyle=Ct.paper,n.strokeStyle=Ct.ink,n.lineWidth=6,n.beginPath(),n.moveTo(300,66),n.lineTo(470,66),n.quadraticCurveTo(505,72,470,92),n.lineTo(300,92),n.closePath(),n.fill(),n.stroke(),n.fillStyle=Ct.red,n.beginPath(),n.moveTo(310,66),n.lineTo(290,20),n.lineTo(330,20),n.lineTo(350,66),n.closePath(),n.fill(),n.stroke(),n.fillStyle=Ct.blue,n.beginPath(),n.moveTo(380,84),n.lineTo(350,140),n.lineTo(385,140),n.lineTo(420,84),n.closePath(),n.fill(),n.stroke(),n.fillStyle=Ct.ink;for(let e=0;e<6;e++)n.fillRect(370+e*14,72,7,7)}),balloon:es(160,320,n=>{n.strokeStyle=Ct.ink,n.lineWidth=5,n.fillStyle=Ct.paper,n.beginPath(),n.arc(80,90,70,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle=Ct.pink,n.beginPath(),n.ellipse(80,90,26,70,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(80,160),n.lineTo(80,270),n.stroke(),n.fillStyle=Ct.yellow,n.fillRect(64,268,32,26),n.strokeRect(64,268,32,26)}),sat:es(320,160,n=>{n.strokeStyle=Ct.ink,n.lineWidth=5,n.fillStyle=Ct.blue;for(let e of[10,210]){n.fillRect(e,50,100,60),n.strokeRect(e,50,100,60),n.beginPath();for(let t=1;t<4;t++)n.moveTo(e+t*25,50),n.lineTo(e+t*25,110);n.stroke()}n.fillStyle=Ct.yellow,n.fillRect(125,40,70,80),n.strokeRect(125,40,70,80),n.beginPath(),n.moveTo(160,40),n.lineTo(160,10),n.stroke(),n.fillStyle=Ct.paper,n.beginPath(),n.arc(160,12,9,0,7),n.fill(),n.stroke()}),iss:es(512,256,n=>{n.strokeStyle=Ct.ink,n.lineWidth=6,n.fillStyle=Ct.paper,n.fillRect(40,118,432,20),n.strokeRect(40,118,432,20),n.fillStyle=Ct.blue;for(let e of[50,140,312,402])for(let t of[20,146])n.fillRect(e,t,70,90),n.strokeRect(e,t,70,90);n.fillStyle=Ct.paper,n.fillRect(206,96,100,64),n.strokeRect(206,96,100,64),n.fillStyle=Ct.red,n.fillRect(226,108,60,12)}),debris:es(128,128,n=>{n.fillStyle=Ct.grey,n.strokeStyle=Ct.ink,n.lineWidth=4,n.beginPath(),n.moveTo(20,60),n.lineTo(70,20),n.lineTo(110,50),n.lineTo(90,100),n.lineTo(40,110),n.closePath(),n.fill(),n.stroke()}),comet:es(512,160,n=>{let e=n.createLinearGradient(40,0,430,0);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=e,n.beginPath(),n.moveTo(430,52),n.lineTo(20,70),n.lineTo(20,90),n.lineTo(430,108),n.closePath(),n.fill(),n.fillStyle=Ct.yellow,n.strokeStyle=Ct.ink,n.lineWidth=5,n.beginPath(),n.arc(450,80,32,0,7),n.fill(),n.stroke()})},Fp={};for(let n in hu){let e=hu[n].image;Fp[n]=es(e.width,e.height,(t,i)=>{t.translate(i,0),t.scale(-1,1),t.drawImage(e,0,0)})}var zt={paper:()=>jt([0,0,0],[.42,.22,0],[.8,.5,0],{glint:!0}),red:()=>jt([0,1,1],[.45,.15,0],[.9,.5,0]),blue:()=>jt([1,.05,0],[0,.4,.1],[0,.7,.2],{glint:!0}),indigo:()=>jt([1,.85,0],[1,.95,.3],[1,1,.5]),yellow:()=>jt([0,.05,1],[.35,.25,0],[.7,.5,0]),pink:()=>jt([0,.75,.1],[.4,.2,0],[.8,.4,0]),grey:()=>jt([.3,.2,.05],[.35,.25,0],[.6,.45,.1])};function gt(n,e,t,i,s,r){let a=new De(e,t);if(i&&a.position.set(...i),s&&a.rotation.set(...s),n.add(a),r){let o=ln(a,r);a.add(o),o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1)}return a}function Ra(n,e,t,i,s){let r=new oi;return r.moveTo(0,0),r.lineTo(e,0),r.lineTo(i+t,n),r.lineTo(i,n),r.closePath(),new qi(r,{depth:s,bevelEnabled:!1})}function My(){let n=new Tt,e=zt.paper(),t=zt.red(),i=zt.blue(),s=zt.indigo();gt(n,new wt(.07,.07,.78,20),e,[0,0,0],[0,0,Math.PI/2],.012),gt(n,new vn(.07,20,12),e,[.39,0,0],null,.012).scale.set(1.9,1,1),gt(n,new ai(.07,.22,20),e,[-.5,.012,0],[0,0,Math.PI/2],.012);for(let o of[1,-1]){let l=gt(n,Ra(.46,.2,.07,.17,.014),e,[.12,-.03,o*.06],[o*Math.PI/2,0,0]);l.scale.set(-1,1,1),ln(l,.01);let c=gt(n,new wt(.028,.032,.13,14),i,[.06,-.065,o*.2],[0,0,Math.PI/2],.008),h=gt(n,Ra(.15,.09,.04,.06,.01),e,[-.47,.02,o*.01],[o*Math.PI/2,0,0]);h.scale.set(-1,1,1),ln(h,.008);let u=gt(n,new ai(.03,2.6,10,1,!0),new qn({color:kt(0,0,0),fog:!1}),[-1.32,-.065,o*.2],[0,0,-Math.PI/2]);u.renderOrder=-1}let a=gt(n,Ra(.2,.17,.07,.1,.012),t,[-.32,.05,-.006]);a.scale.set(-1,1,1),ln(a,.01);for(let o=0;o<7;o++)for(let l of[1,-1])gt(n,new Ht(.025,.02,.004),s,[.22-o*.065,.03,l*.07]);return n}function Sy(){let n=new Tt,e=zt.paper(),t=zt.red(),i=zt.indigo(),s=zt.yellow(),r=[];for(let l=0;l<=24;l++){let c=l/24,h=-.1+c*1.05,u=c<.62?.09+.36*Math.sin(c/.62*Math.PI/2)**.8:.45*Math.sqrt(Math.max(0,1-((c-.62)/.38)**2));r.push(new se(Math.max(u,.001),h))}let a=10;for(let l=0;l<a;l++)gt(n,new li(r,4,l/a*Math.PI*2,Math.PI*2/a),l%2?e:t,[0,.12,0]);let o=new De(new li(r,24),e);o.position.y=.12,o.visible=!1,n.add(o),ln(o,.02),gt(n,new wt(.092,.092,.03,16),i,[0,.02,0]);for(let l=0;l<4;l++){let c=l/4*Math.PI*2+Math.PI/4;gt(n,new wt(.004,.004,.2,4),i,[Math.cos(c)*.065,-.09,Math.sin(c)*.065])}return gt(n,new Ht(.11,.09,.11),s,[0,-.23,0],null,.01),gt(n,new Ht(.115,.018,.115),i,[0,-.19,0]),n}function by(n,e){let t=new Tt;gt(t,new vn(.1,14,10),n,[0,0,0],null,.01).scale.set(1.7,.72,.72),gt(t,new vn(.06,12,8),n,[.17,.035,0],null,.008),gt(t,new ai(.02,.08,6),zt.yellow(),[.245,.03,0],[0,0,-Math.PI/2]),gt(t,new ai(.055,.15,4),e,[-.21,0,0],[0,0,Math.PI/2]).scale.set(1,1,.3);let s=[];for(let r of[1,-1]){let a=new Tt;a.position.set(.03,.03,r*.05),t.add(a);let o=new De(Ra(.26,.17,.12,.03,.012),n);o.rotation.set(r*Math.PI/2,0,0),o.scale.set(-1,1,1),o.position.x=.09,a.add(o),ln(o,.008);let l=new Tt;l.position.set(-.01,0,r*.25),a.add(l);let c=new De(Ra(.24,.12,.02,.1,.01),e);c.rotation.set(r*Math.PI/2,0,0),c.scale.set(-1,1,1),c.position.x=.06,l.add(c),ln(c,.008),s.push({piv:a,piv2:l,sgn:r})}return t.userData.wings=s,t}function Ey(){let n=new Tt,e=zt.paper(),t=zt.indigo(),i=[];return[[0,0,0],[-.55,-.05,.45],[-.55,.05,-.45],[-1.1,-.1,.9],[-1.1,.08,-.9]].forEach((r,a)=>{let o=by(e,t);o.position.set(...r),o.userData.phase=a*.7,n.add(o),i.push(o)}),n.userData.birds=i,n}function tu(n){let e=new Tt,t=zt.paper(),i=zt.blue(),s=zt.yellow(),r=zt.indigo();gt(e,new Ht(.3,.3,.3),s,[0,0,0],null,.012),gt(e,new wt(.012,.012,1.3,6),r,[0,0,0],[Math.PI/2,0,0]);for(let o of[1,-1]){gt(e,new Ht(.34,.012,.5),i,[0,0,o*.45],null,.008);for(let l=1;l<4;l++)gt(e,new Ht(.34,.016,.006),r,[0,0,o*(.2+l*.125)])}let a=gt(e,new vn(.14,16,8,0,Math.PI*2,0,Math.PI/2.4),t,[0,.22,0],[Math.PI,0,0],.008);return a.material.side=yn,gt(e,new wt(.008,.008,.14,4),r,[0,.27,0]),n&&e.scale.setScalar(1.2),e}function Ty(){let n=new Tt,e=zt.paper(),t=zt.blue(),i=zt.indigo(),s=zt.red();gt(n,new Ht(1.6,.05,.05),e,[0,0,0],null,.008);for(let r of[-.72,-.48,.48,.72])for(let a of[1,-1])gt(n,new Ht(.18,.008,.42),t,[r,0,a*.26],null,.006);return gt(n,new wt(.07,.07,.5,16),e,[0,-.08,0],[Math.PI/2,0,0],.008),gt(n,new wt(.06,.06,.34,16),e,[.12,-.08,0],[0,0,Math.PI/2],.008),gt(n,new wt(.061,.061,.06,16,1,!0),s,[.12,-.08,0],[0,0,Math.PI/2]),gt(n,new Ht(.22,.006,.12),e,[-.2,.06,0],null,.005),n}function wy(){let n=new Tt;return gt(n,new ia(.3,0),zt.grey(),[0,0,0],null,.03).scale.set(1,.6,.8),n}var Ay=[{make:Ey,from:.15,to:1.6,n:6,size:4.2,drift:6,kind:"birds"},{make:My,from:8.5,to:11.5,n:3,size:13,drift:24,kind:"plane"},{make:Sy,from:20,to:36,n:3,size:6,drift:.4,kind:"balloon"},{make:Ty,from:395,to:425,n:1,size:9,drift:1.4,kind:"space"},{make:()=>tu(!1),from:450,to:1900,n:9,size:4.5,drift:1,kind:"space"},{make:wy,from:600,to:1600,n:10,size:2.4,drift:3,kind:"debris"},{make:()=>tu(!0),from:2e4,to:20500,n:3,size:4.5,drift:1,kind:"space"},{make:()=>tu(!0),from:35700,to:35900,n:3,size:5,drift:.3,kind:"space"},{tex:"comet",from:12e4,to:26e4,n:2,size:38,aspect:.31,drift:4,kind:"comet"}],Op=[];(function(){let n=os(9090);for(let e of Ay)for(let t=0;t<e.n;t++){let i=n()<.5?-1:1,s=n()<.5?-1:1,r;e.make?(r=e.make(),r.scale.multiplyScalar(e.size*(.85+n()*.35)),r.rotation.y=s<0?Math.PI:0):(r=new Xi(new Ri({map:s<0?Fp[e.tex]:hu[e.tex],transparent:!0,alphaTest:.5,depthWrite:!1,fog:!1})),r.scale.set(e.size,e.size*e.aspect,1)),r.visible=!1,cn.add(r),Op.push({obj:r,kind:e.kind,alt:e.from+(e.to-e.from)*((t+n()*.8)/e.n),fx:i*(.3+n()*.55),z:-8-n()*34,drift:e.drift*s,phase:n()*6,spin:new L((n()-.5)*1.2,(n()-.5)*1.2,(n()-.5)*1.2),baseRotY:s<0?Math.PI:0})}})();var Ry=[11,22,33,44,55,66].map(n=>Np(n,512,256,!0)),Bp=[];(function(){let n=os(4242);for(let e=0;e<46;e++){let t=n()<.25,i=t?7.5+n()*4:1.3+Math.pow(n(),1.1)*4.5,s=n()<.14,r=(n()-.5)*(s?60:220);s&&Math.abs(r)<16&&(r+=Math.sign(r||1)*16);let a=s?-10-n()*8:-40-n()*170,o=new Ri({map:Ry[Math.floor(n()*6)],color:16777215,transparent:!0,depthWrite:!1,fog:!1,alphaTest:.5}),l=new Xi(o),c=(t?70:28)+n()*(t?60:34);l.scale.set(c,c*(t?.3:.5),1),cn.add(l),Bp.push({alt:i,x:r,z:a,sp:l,drift:(n()-.5)*.5})}})();var At=new Tt;cn.add(At);var nu=ic==="night"?[.35,.25,-.2]:ic==="dawn"?[.05,.12,0]:[0,0,0],pn=(n,e,t,i={})=>new qn(Object.assign({color:kt(Sn(n+nu[0],0,1),Sn(e+nu[1],0,1),Sn(t+nu[2],0,1))},i));function lp(n,e,t){let i=new Tt,s=pn(.05,1,.95,{fog:!0}),r=[],a=1.5,o=11.5,l=-.8,c=[[n-a/2,e-a/2],[n+a/2,e-a/2],[n+a/2,e+a/2],[n-a/2,e+a/2]],h=(S,v,A)=>r.push([S,v,A]);for(let[S,v]of c)h(new L(S,l,v),new L(S,l+o,v),.14);for(let S=0;S<=11;S++){let v=l+S*(o/11);for(let A=0;A<4;A++){let w=c[A],x=c[(A+1)%4];h(new L(w[0],v,w[1]),new L(x[0],v,x[1]),.08),S<11&&h(new L(w[0],v,w[1]),new L(x[0],v+o/11,x[1]),.05)}}let u=new Qs(new Ht(1,1,1),s,r.length),d=new mt,f=new Cn,g=new L(0,1,0);r.forEach(([S,v,A],w)=>{let x=v.clone().sub(S),E=x.length();f.setFromUnitVectors(g,x.normalize()),d.compose(S.clone().add(v).multiplyScalar(.5),f,new L(A,E,A)),u.setMatrixAt(w,d)}),i.add(u);let y=new De(new Ht(a+.5,.22,a+.5),pn(1,.85,0));y.position.set(n,l+o+.1,e),i.add(y);let p=new De(new wt(.04,.06,2.2,8),pn(1,.85,0));p.position.set(n,l+o+1.2,e),i.add(p);let m=new De(new vn(.16,12,8),pn(0,1,.3,{fog:!1}));m.position.set(n,l+o+2.35,e),i.add(m);let _=[];for(let S of[2.1,4.35]){let v=new Tt;v.position.set(n+t*a/2,l+S+.8,e+.4);let A=new De(new Ht(2.15,.2,.3),pn(1,.85,0));A.position.x=t*1.075,v.add(A),i.add(v),_.push(v)}return i.userData={beacon:m,arms:_,dir:t},i}(function(){let n=new De(new Yi(9e3,9e3),pn(.55,.05,.85));n.rotation.x=-Math.PI/2,n.position.y=-1.42,At.add(n);let e=new De(new ri(15,64),pn(.12,.08,.1));e.rotation.x=-Math.PI/2,e.position.y=-1.4,At.add(e);let t=new De(new nr(13.6,14.2,64),pn(0,.2,1));t.rotation.x=-Math.PI/2,t.position.y=-1.39,At.add(t);let i=jt([.08,.06,.05],[.4,.25,.05],[.7,.45,.1]),s=new De(new wt(5.9,6.6,.37,64),i);s.position.y=-1.235,At.add(s);let r=ln(s,.04),a=new De(new wt(4.5,4.8,.27,64),i);a.position.y=-.92,At.add(a);let o=ln(a,.04),l=new De(new nr(4.05,4.35,64),pn(0,.1,1));l.rotation.x=-Math.PI/2,l.position.y=-.782,At.add(l);let c=new De(new ri(1.7,40),pn(.5,.3,.1));c.rotation.x=-Math.PI/2,c.position.y=-.781,At.add(c);let h=new De(new wt(1.15,1.3,.25,32),jt([1,.85,0],[1,.9,.2],[1,.9,.2]));h.position.y=-.7,At.add(h);let u=lp(-3.2,-.6,1);At.add(u),At.userData.beacon=u.userData.beacon,At.userData.arms=u.userData.arms;let d=lp(5.6,-3.2,-1);d.visible=!1,At.add(d),At.userData.gantry2=d;{let _=[0,0],S=[4.3,-2.9],v=(I,R)=>{let D=_[0],z=-_[1],P=S[0],F=-S[1],X=Math.hypot(P-D,F-z),H=(P-D)/X,q=-((F-z)/X),j=H,ee=Math.atan2(j,q),we=R?new vs:new oi;return we.moveTo(D+q*I,z+j*I),we.lineTo(P+q*I,F+j*I),we.absarc(P,F,I,ee,ee-Math.PI,!0),we.lineTo(D-q*I,z-j*I),we.absarc(D,z,I,ee-Math.PI,ee-2*Math.PI,!0),we},A=(I,R,D,z)=>{let P=new qi(v(I),{depth:R-z,bevelEnabled:z>0,bevelThickness:z,bevelSize:z*1.6,bevelSegments:1,curveSegments:40}),F=new De(P,i);return F.rotation.x=-Math.PI/2,F.position.y=D,d.add(F),ln(F,.04),F};A(5.8,.37,-1.42,.12),A(4.45,.27,-1.055,.06);let w=v(4.35);w.holes.push(v(4.05,!0));let x=new De(new sa(w,40),pn(0,.1,1));x.rotation.x=-Math.PI/2,x.position.y=-.782,d.add(x);let E=new De(new ri(1.5,40),pn(.5,.3,.1));E.rotation.x=-Math.PI/2,E.position.set(2.9,-.7815,-2.6),d.add(E);let U=new De(new ri(1.7,40),pn(.5,.3,.1));U.rotation.x=-Math.PI/2,U.position.set(0,-.7815,0),d.add(U)}At.userData.singlePad=[s,a,l,c,r,o];let f=new mt,g=new ai(1,3,6);g.translate(0,1.5,0);let y=new Qs(g,pn(.95,.2,.8,{fog:!0}),260),p=os(12);for(let _=0;_<260;_++){let S=p()*Math.PI*2,v=30+Math.pow(p(),.7)*900,A=1.5+p()*3.5;f.compose(new L(Math.cos(S)*v,-1.42,Math.sin(S)*v),new Cn,new L(A,A*(1+p()),A)),y.setMatrixAt(_,f)}At.add(y);let m=(_,S,v,A,w)=>{let E=new Rt,U=[],I=[],R=os(A),D=[],z=0;for(let P=0;P<=200;P++)z=Sn(z+(R()-.5)*.5,0,1),D.push(S+v*(.35*z+.65*(.5+.5*Math.sin(P*.09+A)*Math.sin(P*.031+A*2))));D[200]=D[0];for(let P=0;P<=200;P++){let F=P/200*Math.PI*2;U.push(Math.cos(F)*_,-2,Math.sin(F)*_,Math.cos(F)*_,-2+D[P],Math.sin(F)*_)}for(let P=0;P<200;P++){let F=P*2;I.push(F,F+2,F+1,F+1,F+2,F+3)}return E.setAttribute("position",new Ke(U,3)),E.setIndex(I),new De(E,pn(...w,{side:yn,fog:!1}))};At.add(m(2600,90,260,3,[.42,.42,0])),At.add(m(1500,30,120,7,[.62,.25,.3])),At.add(m(800,10,50,11,[.85,.1,.75]))})();var jn=new Xi(new Ri({map:_y(),transparent:!0,alphaTest:.5,depthWrite:!1,fog:!1}));jn.visible=!1;jn.position.set(0,1.6,0);cn.add(jn);var Cy=new Kt(4,4,{type:fn,samples:Ap?0:4}),rs=new Kl(ss,Cy),Py=new Sa(La,Bn),xu=new Sa(cn,mn);xu.clear=!1;xu.clearDepth=!0;var fc=n=>{let e=new $e;return e.setRGB((n>>16&255)/255,(n>>8&255)/255,(n&255)/255,Rn),new L(e.r,e.g,e.b)},gi=new ur(sp);gi.uniforms.uPaper.value=fc(15985370);gi.uniforms.uT0.value=fc(30911);gi.uniforms.uT1.value=fc(16730288);gi.uniforms.uT2.value=fc(16771072);gi.uniforms.uRes.value=new se(1,1);gi.uniforms.uSeed.value=Math.random()*100;rs.addPass(Py);rs.addPass(xu);rs.addPass(gi);var uu=k("ov"),Ne=uu.getContext("2d"),$n=0,Qt=0,fi={hudBottom:110,dockH:150,menuTop:120,menuBottomH:300};function rc(){let n=k("app").getBoundingClientRect(),e=document.querySelector("#hud .alttag");e&&k("hud").classList.contains("on")&&(fi.hudBottom=e.getBoundingClientRect().bottom-n.top);let t=document.querySelector("#dock .dock-in");t&&k("dock").classList.contains("on")&&(fi.dockH=n.bottom-t.getBoundingClientRect().top);let i=k("logo");i&&(fi.menuTop=i.getBoundingClientRect().bottom-n.top);let s=k("console");s&&(fi.menuBottomH=n.bottom-s.getBoundingClientRect().top);let r=k("overMini");r&&k("over").classList.contains("on")&&(fi.overTop=r.getBoundingClientRect().top-n.top)}function ac(){let n=window.visualViewport,e=Math.round(n?n.height:window.innerHeight),t=Math.round(n?n.width:window.innerWidth),i=k("app");if(i.style.height=e+"px",i.style.width=t+"px",i.style.top=(n?n.offsetTop:0)+"px",k("app").classList.toggle("compact",e<560),setTimeout(rc,30),t===$n&&e===Qt)return;$n=t,Qt=e,ss.setSize(t,e,!1),rs.setPixelRatio(Dn*pr),rs.setSize(t,e),gi.uniforms.uRes.value.set(t*Dn,e*Dn),gi.uniforms.uDpr.value=Dn,gi.uniforms.uCell.value=2.6*Dn;let s=t/e,r=s<.8?52:s<1.3?44:36;for(let a of[mn,Bn])a.aspect=s,a.fov=r,a.updateProjectionMatrix();uu.width=Math.round(t*Dn),uu.height=Math.round(e*Dn),mi.mat.uniforms.uScale.value=ls.mat.uniforms.uScale.value=e*Dn/(2*Math.tan(r*Math.PI/360))}window.addEventListener("resize",ac);window.visualViewport&&(visualViewport.addEventListener("resize",ac),visualViewport.addEventListener("scroll",ac));ac();document.fonts&&document.fonts.load("800 100px 'Bricolage Grotesque'").then(()=>{tc.clear(),We.userData.labelDraw()}).catch(()=>{});var T={spin:{x:0,y:0,z:0},tumbleT:0,ft:0,path:[],pathT:0,gold:!1,state:"menu",alt:0,v:0,fuel:26,maxAlt:0,t:0,count:0,stage:0,used:new Set,list:[],words:0,longest:"",combo:0,lastWordT:-9,shake:0,boost:0,crashT:0,passed:new Set,launched:!1,armT:0,camBlend:0},oc=n=>.5+n*.035,Iy=n=>2.6+1.05*Math.log2(1+n/8),_u=n=>27/oc(n);function Ly(n){let[e,t,i]=n.split("-").map(Number),s=new Date(e,t-1,i),r=(s.getDay()+6)%7;return s.setDate(s.getDate()-r),"W"+s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0")}var du=Ly(Nt);async function Dy(n){let e="https://www.gstatic.com/firebasejs/10.12.2/",t=_=>import(_),[i,s,r]=await Promise.all([t(e+"firebase-app.js"),t(e+"firebase-firestore.js"),t(e+"firebase-auth.js")]),a=Object.assign({},n);delete a.adminUid;let o=i.initializeApp(a),l=s.getFirestore(o),c=r.getAuth(o),u=await new Promise(_=>{let S=r.onAuthStateChanged(c,v=>{S(),_(v)})})||(await r.signInAnonymously(c)).user,d=u.uid,f={google:!u.isAnonymous,name:u.displayName||"",email:u.email||"",async login(){let _=new r.GoogleAuthProvider;try{return{ok:!0,name:(c.currentUser&&c.currentUser.isAnonymous?await r.linkWithPopup(c.currentUser,_):await r.signInWithPopup(c,_)).user.displayName||"",switched:!1}}catch(S){if(S&&S.code==="auth/credential-already-in-use"){let v=r.GoogleAuthProvider.credentialFromError(S);if(v)return await r.signInWithCredential(c,v),{ok:!0,switched:!0}}return S&&S.code==="auth/popup-blocked"?(await r.signInWithRedirect(c,_),{ok:!1}):{ok:!1,code:S&&S.code||""}}},async logout(){await r.signOut(c)}},g=_=>({id:_.id,exists:_.exists(),data:()=>_.data(),metadata:{fromCache:_.metadata.fromCache}}),y=_=>{let S=s.doc(l,_);return{id:S.id,path:_,get:async()=>g(await s.getDoc(S)),set:v=>s.setDoc(S,v),update:v=>s.updateDoc(S,v),delete:()=>s.deleteDoc(S),onSnapshot:(v,A)=>s.onSnapshot(S,w=>v(g(w)),A)}},p=(_,S)=>({where:(v,A,w)=>p(_,[...S,s.where(v,A,w)]),orderBy:(v,A)=>p(_,[...S,s.orderBy(v,A||"asc")]),limit:v=>p(_,[...S,s.limit(v)]),get:async()=>{let v=await s.getDocs(s.query(s.collection(l,_),...S));return{docs:v.docs.map(g),size:v.size,empty:v.empty}},onSnapshot:(v,A)=>s.onSnapshot(s.query(s.collection(l,_),...S),w=>v({docs:w.docs.map(g),size:w.size,empty:w.empty}),A)});return{db:{doc:y,collection:_=>Object.assign(p(_,[]),{path:_,doc:S=>y(_+"/"+S)}),serverStamp:()=>s.serverTimestamp()},uid:d,canWrite:!0,owner:!!n.adminUid&&n.adminUid===d,standalone:!0,account:f}}async function Ny(){if(window.claude&&window.claude.use){let[n,e]=await Promise.all([claude.use("db"),claude.use("user")]);if(!n)return{status:"Pro online \u017Eeb\u0159\xED\u010Dek se p\u0159ihlas."};let t=null,i=!1,s=!1;if(e){t=await e.id(),i=await e.can("data.write")!==!1&&!!t;try{s=!!await e.isOwner()}catch{}}return{db:n,uid:t,canWrite:i,owner:s}}if(window.TMINUS_FIREBASE&&window.TMINUS_FIREBASE.apiKey)try{return await Dy(window.TMINUS_FIREBASE)}catch(n){let e=n&&(n.code||n.message)||"nezn\xE1m\xE1 chyba",t=/operation-not-allowed|admin-restricted/.test(e)?" Zapni ve Firebase p\u0159ihl\xE1\u0161en\xED Anonymous.":/api-key|invalid/.test(e)?" Zkontroluj kl\xED\u010D v firebase-config.js.":"";return{status:"Online \u017Eeb\u0159\xED\u010Dek se nep\u0159ipojil ("+e+")."+t}}return{status:"Online \u017Eeb\u0159\xED\u010Dek nen\xED nastaven\xFD."}}var Uy=["kurv","pica","pice","picu","kokot","debil","prdel","hovn","curak","mrd","suka","zmrd","buzn","negr","cigos","kreten","idiot","hajzl","sracka","jebat","jeb","fuck","shit","bitch","dick","cunt","nigg","fag","porn","sex","nazi","hitler","piss","kunda","vagin","penis"];function vu(n){let e=String(n||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/0/g,"o").replace(/1/g,"i").replace(/3/g,"e").replace(/4/g,"a").replace(/5/g,"s").replace(/7/g,"t").replace(/@/g,"a").replace(/\$/g,"s").replace(/[^a-z]/g,"");return Uy.some(t=>e.includes(t))}var as=n=>{let e=String(n||"Pilot").slice(0,18);return vu(e)?"Pilot":e},oe={db:null,uid:null,canWrite:!1,owner:!1,day:[],all:[],week:[],reports:[],tab:"day",ghosts:[],myBest:+(at("sr-best")||0),myDay:at("sr-day")===Nt?+(at("sr-dayBest")||0):0};function xr(){let n=k("nick").value.trim().replace(/\s+/g," ").slice(0,18);return n&&!vu(n)?n:"Pilot "+(gu(oe.uid||at("sr-lid")||"x")%900+100)}(function(){let n=at("sr-lid");n||(n=Math.random().toString(36).slice(2,10),at("sr-lid",n)),k("nick").value=at("sr-nick")||""})();k("nick").addEventListener("change",()=>at("sr-nick",k("nick").value.trim()));function iu(n,e,t,i,s,r,a){let o=document.createElement("li");t.id===oe.uid&&(o.className="me");let l=document.createElement("span");l.className="r",l.textContent=String(e+1).padStart(2,"0");let c=document.createElement("span");if(c.className="n",c.textContent=i,a){let f=document.createElement("em");f.className="goldtag",f.textContent="zlat\xE9",c.appendChild(f)}let h=document.createElement("span");h.className="w",h.textContent=s;let u=document.createElement("span");u.className="k",u.textContent=En(r);let d=document.createElement("small");d.textContent=" km",u.appendChild(d),o.append(l,c,h,u),n.appendChild(o)}function ts(){let n=k("lb");if(n.textContent="",k("lbCount").textContent=oe.day.length?String(oe.day.length):"",k("tabReports").hidden=!oe.owner,oe.tab==="reports")return zy(n);let e=oe.tab==="day"?oe.day:oe.tab==="week"?oe.week:oe.all;if(!e.length){let t=document.createElement("li");t.className="empty",t.textContent=oe.db?oe.tab==="day"?"Dnes je\u0161t\u011B nikdo nelet\u011Bl.":oe.tab==="week"?"Tento t\xFDden je\u0161t\u011B nikdo nelet\u011Bl.":"Zat\xEDm \u017E\xE1dn\xE9 lety.":"\u017Deb\u0159\xED\u010Dek nen\xED dostupn\xFD.",n.appendChild(t);return}e.slice(0,50).forEach((t,i)=>{if(oe.tab==="day")iu(n,i,t,as(t.nick),(t.dayWords||0)+" sl.",t.dayBest,t.dayGold);else if(oe.tab==="week"){let s=Object.keys(t.weekDays||{}).length;iu(n,i,t,as(t.nick),lc(s),t.weekTotal)}else iu(n,i,t,as(t.nick),(t.badges?t.badges.length:0)+" odz.",t.best)})}document.querySelectorAll(".seg button").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll(".seg button").forEach(e=>e.classList.toggle("on",e===n)),oe.tab=n.dataset.tab,ts()}));function pc(){let n=[];if(!T.training){for(let e of oe.day.slice(0,15))e.id!==oe.uid&&n.push({alt:+e.dayBest||0,name:as(e.nick).slice(0,14),key:"d"+e.id});oe.myDay>0&&n.push({alt:oe.myDay,name:"Tv\u016Fj dne\u0161n\xED let",key:"me",me:!0})}oe.ghosts=n.filter(e=>e.alt>.05).sort((e,t)=>e.alt-t.alt)}pc();ts();function Fy(){T.state==="over"&&Yp()}var jl=n=>n.docs.map(e=>Object.assign({id:e.id},e.data()));(async function(){let e=setTimeout(()=>{oe.db||(k("dbStatus").textContent="\u017Deb\u0159\xED\u010Dek se zat\xEDm nepoda\u0159ilo na\u010D\xEDst.")},1e4),t;try{t=await Ny()}catch{t={status:"\u017Deb\u0159\xED\u010Dek nen\xED dostupn\xFD."}}if(clearTimeout(e),!t.db){k("dbStatus").textContent=t.status||"";return}Object.assign(oe,{db:t.db,uid:t.uid,canWrite:t.canWrite,owner:t.owner}),t.standalone&&t.uid&&(k("pilotId").textContent="ID pilota: "+t.uid+" \xB7 verze "+Hp),t.account&&By(t.account),k("dbStatus").textContent=oe.canWrite?"":"\u017Deb\u0159\xED\u010Dek vid\xED\u0161, tvoje v\xFDsledky se ukl\xE1daj\xED jen u tebe.";let i=t.db;i.collection("best").orderBy("best","desc").limit(50).onSnapshot(s=>{oe.all=jl(s);let r=oe.all.find(a=>a.id===oe.uid);r&&+r.best>oe.myBest&&(oe.myBest=+r.best,mc()),ts()},()=>{}),i.collection("best").where("dayKey","==",Nt).limit(300).onSnapshot(s=>{oe.day=jl(s).sort((a,o)=>(+o.dayBest||0)-(+a.dayBest||0));let r=oe.day.find(a=>a.id===oe.uid);r&&+r.dayBest>oe.myDay&&(oe.myDay=+r.dayBest),pc(),ts(),Fy()},()=>{}),i.collection("best").where("weekKey","==",du).limit(300).onSnapshot(s=>{oe.week=jl(s).sort((r,a)=>(+a.weekTotal||0)-(+r.weekTotal||0)),ts()},()=>{}),i.doc("extra/words").onSnapshot(s=>{let r=s.exists?s.data():null;ns.extra=new Set(r&&Array.isArray(r.list)?r.list:[])},()=>{}),oe.owner&&i.collection("reports").onSnapshot(s=>{oe.reports=jl(s),ts()},()=>{}),ts()})();async function Oy(){let n=Math.round(T.maxAlt*100)/100,e=xr(),t=n>oe.myBest,i=n>oe.myDay,s=sy();i&&(T.path.push(0),at("sr-path",JSON.stringify({day:Nt,path:T.path,skin:Ia().id}))),t&&(oe.myBest=n,at("sr-best",String(n))),i&&(oe.myDay=n,at("sr-day",Nt),at("sr-dayBest",String(n)));let r=Hy(s);if(pc(),!oe.db||!oe.canWrite)return{newBest:t,newDay:i,streak:s,fresh:r};try{let a=oe.db.collection("best").doc(oe.uid),o=await a.get(),l=o.exists?Object.assign({},o.data()):{},c=l.dayKey===Nt,h=l.weekKey===du,u={nick:e,best:+l.best||0,bestWords:+l.bestWords||0,bestDate:l.bestDate||"",dayKey:l.dayKey||"",dayBest:+l.dayBest||0,dayWords:+l.dayWords||0,flights:(+l.flights||0)+1,updatedAt:new Date().toISOString(),skin:Ia().id,streak:s,lastDay:Nt,badges:[...yu()],dayAll:Array.from(new Set([...c&&Array.isArray(l.dayAll)?l.dayAll:[],...T.list])).slice(0,500),dayGold:c&&!!l.dayGold||T.gold,dayPath:c&&Array.isArray(l.dayPath)?l.dayPath:[],weekKey:du,weekDays:h&&l.weekDays&&typeof l.weekDays=="object"?Object.assign({},l.weekDays):{}};n>u.best&&(u.best=n,u.bestWords=T.words,u.bestDate=Nt),c?n>u.dayBest&&(u.dayBest=n,u.dayWords=T.words,u.dayPath=T.path.slice(0,1800)):(u.dayKey=Nt,u.dayBest=n,u.dayWords=T.words,u.dayPath=T.path.slice(0,1800)),u.weekDays[Nt]=Math.max(+u.weekDays[Nt]||0,u.dayBest),u.weekTotal=Math.round(Object.values(u.weekDays).reduce((d,f)=>d+(+f||0),0)*100)/100,await a.set(u)}catch(a){a&&a.code==="invalid_argument"&&(oe.canWrite=!1)}return{newBest:t,newDay:i,streak:s,fresh:r}}function By(n){let e=k("account");e.hidden=!1;let t=()=>{k("accText").textContent=n.google?"P\u0159ihl\xE1\u0161en p\u0159es Google"+(n.name?": "+n.name:"")+". V\xFDsledky m\xE1\u0161 i na jin\xFDch za\u0159\xEDzen\xEDch.":"Hraje\u0161 bez \xFA\u010Dtu. P\u0159ihlas se p\u0159es Google, a\u0165 o v\xFDsledky nep\u0159ijde\u0161 a m\xE1\u0161 je i na jin\xE9m za\u0159\xEDzen\xED.",k("accBtn").textContent=n.google?"Odhl\xE1sit":"P\u0159ihl\xE1sit p\u0159es Google"};t(),k("accBtn").onclick=async()=>{if(n.google){await n.logout(),location.reload();return}let i=await n.login();if(i.switched){location.reload();return}i.ok?(n.google=!0,n.name=i.name||n.name,!k("nick").value.trim()&&n.name&&(k("nick").value=n.name.split(" ")[0].slice(0,18),at("sr-nick",k("nick").value),Su()),t()):i.code&&(k("accText").textContent="P\u0159ihl\xE1\u0161en\xED se nepovedlo ("+i.code+").")}}var fu="";async function ky(n){if(!oe.db||!oe.canWrite){zn("Nahl\xE1sit jde jen s online \u017Eeb\u0159\xED\u010Dkem","bad");return}try{let e=oe.db.collection("reports").doc(oe.uid),t=await e.get(),i=t.exists?t.data():{},s=Array.from(new Set([...Array.isArray(i.words)?i.words:[],n])).slice(-60);await e.set({nick:xr(),words:s,at:new Date().toISOString()}),zn("\u201E"+en(n)+"\u201C nahl\xE1\u0161eno, d\xEDky","good")}catch{zn("Nahl\xE1\u0161en\xED se nepovedlo","bad")}}function zy(n){let e=new Map;for(let t of oe.reports)for(let i of t.words||[]){if(typeof i!="string")continue;let s=e.get(i)||{n:0,docs:[]};s.n++,s.docs.push(t.id),e.set(i,s)}if(!e.size){let t=document.createElement("li");t.className="empty",t.textContent="\u017D\xE1dn\xE1 nahl\xE1\u0161en\xE1 slova.",n.appendChild(t);return}for(let[t,i]of[...e.entries()].sort((s,r)=>r[1].n-s[1].n)){let s=document.createElement("li");s.className="rep";let r=document.createElement("span");r.className="n",r.textContent=t;let a=document.createElement("span");a.className="w",a.textContent=i.n+"\xD7";let o=document.createElement("button");o.className="mini-btn ok",o.textContent="Schv\xE1lit",o.onclick=()=>cp(t,i.docs,!0);let l=document.createElement("button");l.className="mini-btn",l.textContent="Zam\xEDtnout",l.onclick=()=>cp(t,i.docs,!1),s.append(r,a,o,l),n.appendChild(s)}}async function cp(n,e,t){try{if(t){let i=oe.db.doc("extra/words"),s=await i.get(),r=s.exists&&Array.isArray(s.data().list)?s.data().list:[];r.includes(n)||r.push(n),await i.set({list:r.slice(-3e3)})}for(let i of e){let s=oe.db.collection("reports").doc(i),r=await s.get();if(!r.exists)continue;let a=r.data(),o=(a.words||[]).filter(l=>l!==n);o.length?await s.set(Object.assign({},a,{words:o})):await s.delete()}}catch{zn("Ulo\u017Een\xED se nepovedlo","bad")}}var kp=[{id:"prvni",name:"Prvn\xED let",desc:"Dokon\u010Di prvn\xED let."},{id:"deset",name:"Deset slov",desc:"10 slov v jednom letu."},{id:"kanon",name:"Slovn\xED kan\xF3n",desc:"25 slov v jednom letu."},{id:"dlouhan",name:"Dlouh\xE1n",desc:"Slovo s 12 a v\xEDce p\xEDsmeny."},{id:"vesmir",name:"Ve vesm\xEDru",desc:"Dole\u0165 nad 100 km."},{id:"orbita",name:"Ob\u011B\u017En\xE1 dr\xE1ha",desc:"Dole\u0165 nad 400 km."},{id:"geo",name:"Geostacion\xE1r",desc:"Dole\u0165 nad 35 786 km."},{id:"mesic",name:"A\u017E na M\u011Bs\xEDc",desc:"Dole\u0165 do 384 400 km."},{id:"zlato",name:"Zlatokop",desc:"Najdi zlat\xE9 slovo dne."},{id:"serie3",name:"T\u0159i dny v kuse",desc:"Hraj t\u0159i dny po sob\u011B."},{id:"serie7",name:"T\xFDden v kuse",desc:"Hraj sedm dn\xED po sob\u011B."},{id:"roj",name:"P\u0159e\u017Eil jsem roj",desc:"Zvl\xE1dni meteorick\xFD roj."},{id:"souboj",name:"V\xEDt\u011Bz souboje",desc:"Vyhraj souboj 1 na 1."}];function yu(){try{return new Set(JSON.parse(at("sr-badges")||"[]"))}catch{return new Set}}function zp(n){let e=yu(),t=n.filter(i=>!e.has(i));return t.length&&(t.forEach(i=>e.add(i)),at("sr-badges",JSON.stringify([...e]))),t}function Hy(n){let e=["prvni"];return T.words>=10&&e.push("deset"),T.words>=25&&e.push("kanon"),T.list.some(t=>t.length>=12)&&e.push("dlouhan"),T.maxAlt>=100&&e.push("vesmir"),T.maxAlt>=400&&e.push("orbita"),T.maxAlt>=35786&&e.push("geo"),T.maxAlt>=384400&&e.push("mesic"),T.gold&&e.push("zlato"),n>=3&&e.push("serie3"),n>=7&&e.push("serie7"),T.meteorWin&&e.push("roj"),zp(e)}function Gy(n){let e=yu();n.textContent="";for(let t of kp){let i=document.createElement("div");i.className="badge"+(e.has(t.id)?" got":""),i.innerHTML="<b></b><span>"+en(t.name)+"</span><small>"+en(t.desc)+"</small>",n.appendChild(i)}}var gn=k("word"),hp=0;function zn(n,e){let t=k("msg");t.className="msg on "+(e||""),t.innerHTML="<span>"+n+"</span>",clearTimeout(hp),hp=setTimeout(()=>t.classList.remove("on"),1800)}function Vy(n){let e=k("recent"),t=document.createElement("span");for(t.textContent=n,e.prepend(t);e.children.length>6;)e.lastChild.remove()}var up=0;function Pa(n,e){let t=k("toast");t.innerHTML='<div class="in sheet"><div class="t1">'+en(n)+"</div>"+(e?'<div class="t2">'+en(e)+"</div>":"")+"</div>",t.classList.add("on"),clearTimeout(up),up=setTimeout(()=>t.classList.remove("on"),2300)}function dp(n){let e=k("count");e.textContent=n,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function gr(n){["menu","over","board"].forEach(t=>k(t).classList.toggle("on",t===n));let e=n===null;k("hud").classList.toggle("on",e),k("dock").classList.toggle("on",e),k("app").classList.toggle("playing",e),setTimeout(rc,60),setTimeout(rc,500)}function Wy(n){let e=new L(0,6.8,0);We.localToWorld(e),e.project(mn);let t=document.createElement("div");t.className="float",t.textContent=n,t.style.left=(e.x*.5+.5)*$n+34+(Math.random()-.5)*20+"px",t.style.top=(-e.y*.5+.5)*Qt+"px",k("floats").appendChild(t),setTimeout(()=>t.remove(),1300)}var Xy=[243,234,218],qy=[[0,120,191],[255,72,176],[255,232,0]];function fr(n){return"rgb("+Xy.map((t,i)=>t*qy.reduce((s,r,a)=>s*(1-n[a]+n[a]*r[i]/255),1)).map(t=>Math.round(t)).join(",")+")"}function Ia(){let n=cu(at("sr-skin"));return n.need<=oe.myBest?n:di[0]}function mc(){let n=Ia(),e=k("skinIcon");e.style.setProperty("--b",fr(n.body)),e.style.setProperty("--a",fr(n.accent)),e.style.setProperty("--t",fr(n.trim)),k("skinName").textContent=n.name;let t=k("skins");t.textContent="";for(let s of di){let r=s.need<=oe.myBest,a=document.createElement("button");a.type="button",a.className="skin"+(s.id===n.id?" on":"")+(r?"":" locked"),a.style.setProperty("--b",fr(s.body)),a.style.setProperty("--a",fr(s.accent)),a.style.setProperty("--t",fr(s.trim)),a.innerHTML='<i class="r"><i class="n"></i><i class="tr"></i></i><span>'+en(r?s.name:s.need.toLocaleString("cs-CZ")+" km")+"</span>",r&&a.addEventListener("click",()=>{at("sr-skin",s.id),mc()}),t.appendChild(a)}let i=di.find(s=>s.need>oe.myBest);k("skinHint").textContent=i?"Dal\u0161\xED vzhled se odemkne ve v\xFD\u0161ce "+i.need.toLocaleString("cs-CZ")+" km.":"M\xE1\u0161 odem\u010Den\xE9 v\u0161echny vzhledy.",dc(We,n)}function Mu(n){k("sheet").hidden=!1,k("sheetTitle").textContent={pilot:"Pilot",skin:"Raketa",duel:"Souboj 1 na 1"}[n],k("sheetPilotWrap").hidden=n!=="pilot",k("sheetSkin").hidden=n!=="skin",k("sheetDuel").hidden=n!=="duel",k("nickErr").textContent="",n==="pilot"&&Gy(k("badgeGrid")),n==="duel"&&ve.code&&!ve.started&&ve.doc&&ve.doc.guest?(bn(ve.host?"Soupe\u0159 <b>"+en(as(ve.doc.guestNick))+"</b> je p\u0159ipraven.":"P\u0159ipojeno do souboje <b>"+ve.code+"</b>. \u010Cekej, a\u017E soupe\u0159 odstartuje."),k("duelGo").hidden=!ve.host):n==="duel"&&ve.code&&!ve.started&&ve.host?bn('K\xF3d souboje: <b class="code">'+ve.code+"</b><br>Po\u0161li ho soupe\u0159i a \u010Dekej, a\u017E se p\u0159ipoj\xED."):n==="duel"&&bn(oe.db&&oe.canWrite?"Zalo\u017E souboj a po\u0161li k\xF3d soupe\u0159i, nebo zadej k\xF3d, kter\xFD ti poslal.":"Souboj pot\u0159ebuje online \u017Eeb\u0159\xED\u010Dek s pr\xE1vem z\xE1pisu.")}function Na(n){if(n===!0){k("sheet").hidden=!0;return}let e=k("nick").value.trim();if(e&&vu(e)){if(k("nickErr").textContent="Tuhle p\u0159ezd\xEDvku zvol pros\xEDm jinou.",k("sheetPilotWrap").hidden===!1)return;k("nick").value=""}k("sheet").hidden=!0,at("sr-nick",k("nick").value.trim()),Su()}function Su(){let n=k("nick").value.trim();k("pilotName").textContent=n||"Pilot"}k("openSkin").addEventListener("click",()=>Mu("skin"));k("openPilot").addEventListener("click",()=>Mu("pilot"));k("sheetClose").addEventListener("click",()=>Na());k("nickOk").addEventListener("click",Na);k("nick").addEventListener("keydown",n=>{n.key==="Enter"&&Na()});k("sheet").addEventListener("click",n=>{n.target===k("sheet")&&Na()});function Yy(){for(let e of Qn)cn.remove(e.mesh);Qn.length=0}function bu(){for(let n of Qn)cn.remove(n.mesh);Qn.length=0}function fp(n,e){if(n.live){let r=ve.opp;if(!r)return 0;if(r.crashed)return null;if(e!==T.ft)return n.smooth==null?+r.alt||0:n.smooth;let a=ve.synced&&r.sy&&r.ts?Math.min(2.5,Math.max(0,(gc()-r.ts)/1e3)):r.rx?Math.min(1,Math.max(0,(performance.now()-r.rx)/1e3)):0,o=+r.a||0,l=Math.max(0,(+r.alt||0)+(+r.v||0)*a+.5*o*Math.min(a,.5)**2),c=performance.now(),h=n.lastT?Math.min(.1,(c-n.lastT)/1e3):.016;return n.lastT=c,n.smooth=n.smooth==null?l:Kn(n.smooth,l,1-Math.exp(-h*22)),n.smooth}let t=e/.5,i=Math.floor(t);if(i>=n.path.length-1)return null;let s=t-i;return Kn(n.path[i],n.path[i+1],s)}var nc={meteor:{name:"Meteorick\xFD roj",hint:"Napi\u0161 slovo se 7+ p\xEDsmeny, jinak \u221220 paliva",dur:7},turb:{name:"Turbulence",hint:"Palivo te\u010F ho\u0159\xED rychleji",dur:6},hacky:{name:"H\xE1\u010Dkov\xE9 okno",hint:"Slova s h\xE1\u010Dkem nebo \u010D\xE1rkou daj\xED dvojn\xE1sob",dur:8}};function Zy(){let n=T.event,e=nc[n.type];k("evName").textContent=e.name,k("evHint").textContent=e.hint,k("event").className="event on "+n.type}function Eu(){k("event").className="event"}function Jy(n){if(T.event){let i=T.event;if(i.t+=n,k("evBar").style.transform="scaleX("+Math.max(0,1-i.t/nc[i.type].dur)+")",i.type==="turb"&&(T.shake=Math.max(T.shake,.22)),i.type==="meteor"&&Math.random()<n*14){let s=(Math.random()-.3)*30;As(ls,{p:new L(s,22+Math.random()*8,-6-Math.random()*10),v:new L(-9-Math.random()*5,-16-Math.random()*8,0),life:1,max:1.4,size:.5+Math.random()*.6,kind:"meteor",rot:0})}i.t>=nc[i.type].dur&&(i.type==="meteor"&&!i.done&&(T.fuel=Math.max(0,T.fuel-20),T.shake=.8,vt.bad(),Pa("Z\xE1sah meteoritem","\u221220 paliva"),T.fuel<=0&&!T.out&&Zp()),T.event=null,T.burnMul=1,Eu(),T.nextEvent=T.ft+22+Math.random()*18);return}if(T.out||T.fuel<=0||T.ft<T.nextEvent||T.alt<.6)return;let e=Object.keys(nc),t=e[Math.floor(Math.random()*e.length)];T.event={type:t,t:0,done:!1},T.burnMul=t==="turb"?1.6:1,Zy(),vt.stage()}var ve={code:"",host:!1,unsub:null,oppUnsub:null,opp:null,oppId:"",oppNick:"",started:!1,sendT:0,last:"",doc:null},pp="ABCDEFHJKLMNPRSTUVXYZ",Hp="21";async function Gp(){if(!oe.db||!oe.db.serverStamp||!ve.code)return;let n=oe.db.doc("duels/"+ve.code+"/live/"+oe.uid),e=null;for(let t=0;t<3;t++)try{let i=Date.now();await n.set({sync:oe.db.serverStamp(),crashed:!1,alt:0});let s=Date.now(),r=await n.get(),a=r.exists?r.data():null,o=a&&a.sync&&a.sync.toMillis?a.sync.toMillis():null;o!=null&&(!e||s-i<e.rtt)&&(e={rtt:s-i,off:o-(i+s)/2})}catch{break}e&&(ve.off=e.off,ve.synced=!0)}var gc=()=>Date.now()+(ve.off||0);function bn(n){k("duelState").innerHTML=n+'<br><small style="opacity:.55">verze '+Hp+"</small>"}async function Ky(){if(!oe.db||!oe.canWrite)return bn("Souboj pot\u0159ebuje online \u017Eeb\u0159\xED\u010Dek s pr\xE1vem z\xE1pisu.");Tu();let n="";for(let e=0;e<4;e++)n+=pp[Math.floor(Math.random()*pp.length)];try{await oe.db.doc("duels/"+n).set({host:oe.uid,hostNick:xr(),guest:"",guestNick:"",state:"wait",day:Nt,created:Date.now()}),Object.assign(ve,{code:n,host:!0}),Vp(),Gp(),bn('K\xF3d souboje: <b class="code">'+n+"</b><br>Po\u0161li ho soupe\u0159i a \u010Dekej, a\u017E se p\u0159ipoj\xED.")}catch{bn("Souboj se nepoda\u0159ilo zalo\u017Eit.")}}async function $y(){let n=k("duelCode").value.trim().toUpperCase();if(n.length!==4)return bn("K\xF3d m\xE1 4 p\xEDsmena.");if(!oe.db||!oe.canWrite)return bn("Souboj pot\u0159ebuje online \u017Eeb\u0159\xED\u010Dek s pr\xE1vem z\xE1pisu.");Tu();try{let e=oe.db.doc("duels/"+n),t=await e.get();if(!t.exists)return bn("Souboj s k\xF3dem "+en(n)+" neexistuje.");let i=t.data();if(i.state!=="wait"||i.day!==Nt)return bn("Tento souboj u\u017E nen\xED voln\xFD.");await e.update({guest:oe.uid,guestNick:xr(),state:"ready"}),Object.assign(ve,{code:n,host:!1}),Vp(),Gp(),bn("P\u0159ipojeno. \u010Cekej, a\u017E soupe\u0159 odstartuje.")}catch{bn("P\u0159ipojen\xED se nepovedlo.")}}function Vp(){let n=oe.db.doc("duels/"+ve.code),e=n.onSnapshot(mp,()=>{}),t=setInterval(()=>{if(!ve.code||ve.started)return clearInterval(t);n.get().then(mp).catch(()=>{})},1e3);ve.unsub=()=>{e(),clearInterval(t)}}function mp(n){if(!ve.code||!n||!n.exists)return;let e=n.data();if(ve.doc=e,ve.host&&e.state==="ready"&&(bn("Soupe\u0159 <b>"+en(as(e.guestNick))+"</b> je p\u0159ipraven."),k("duelGo").hidden=!1),e.state==="go"&&!ve.started){ve.started=!0,k("duelBtn").textContent="Souboj 1 na 1",ve.oppId=ve.host?e.guest:e.host,ve.oppNick=as(ve.host?e.guestNick:e.hostNick);let t=oe.db.doc("duels/"+ve.code+"/live/"+ve.oppId),i=o=>{if(!o)return;let l=o.exists?o.data():null;l&&ve.opp&&l.ts&&ve.opp.ts&&l.ts<ve.opp.ts||(l&&(!ve.opp||l.ts!==ve.opp.ts)?l.rx=performance.now():l&&ve.opp&&(l.rx=ve.opp.rx),ve.opp=l,T.state==="over"&&T.mode==="duel"&&Xp())},s=t.onSnapshot(i,()=>{}),r=setInterval(()=>{if(!ve.code||ve.opp&&ve.opp.crashed)return clearInterval(r);t.get().then(i).catch(()=>{})},900);ve.oppUnsub=()=>{s(),clearInterval(r)},xc("duel"),ut.on&&ut.available()&&(ut.want=!0,ut.armTap());let a=e.startAt?(gc()-e.startAt)/1e3:0;a>0&&a<3&&(T.count=Math.max(.25,T.count-a))}else e.guest&&!ve.started&&jy(e)}function jy(n){ve.oppNick=as(ve.host?n.guestNick:n.hostNick),Qn.some(t=>t.live)||Wp();let e=Qn.find(t=>t.live);e&&(e.name=ve.oppNick),k("duelBtn").textContent=ve.host?"Souboj: "+ve.oppNick+" \u010Dek\xE1, odstartuj":"Souboj: \u010Dek\xE1\u0161 na start soupe\u0159e"}async function Qy(){k("duelGo").hidden=!0;try{await oe.db.doc("duels/"+ve.code).update({state:"go",startAt:gc()})}catch{bn("Start se nepovedl.")}}function gp(n){if(ve.sendT-=n,ve.sendT>0||!ve.code)return;let e=ve.pv==null?T.v:ve.pv,t=ve.pt||performance.now(),i=(T.v-e)/Math.max(.05,(performance.now()-t)/1e3);ve.pv=T.v,ve.pt=performance.now(),ve.sendT=.15;let s={alt:Math.round(Math.max(0,T.alt)*1e4)/1e4,v:Math.round(T.v*1e4)/1e4,a:Math.round(Math.max(-3,Math.min(3,i))*1e3)/1e3,max:Math.round(T.maxAlt*100)/100,out:!!T.out,crashed:T.state!=="play",words:T.words,nick:xr()},r=JSON.stringify(s);r!==ve.last&&(ve.last=r,s.ts=gc(),s.sy=!!ve.synced,oe.db.doc("duels/"+ve.code+"/live/"+oe.uid).set(s).catch(()=>{}))}function Wp(){bu(),Qn.push({name:ve.oppNick||"Soupe\u0159",live:!0,skin:di[1],mesh:gy(di[1]===Ia()?di[2]||di[0]:di[1]),x:2.9,z:-2.6,done:!1})}function Xp(){ve.code&&oe.db.doc("duels/"+ve.code+"/live/"+oe.uid).set({alt:0,max:Math.round(T.maxAlt*100)/100,out:!0,crashed:!0,words:T.words,nick:xr()}).catch(()=>{});let n=ve.opp,e=k("duelResult");if(!n||!n.crashed){e.textContent="Souboj: "+(ve.oppNick||"soupe\u0159")+" je\u0161t\u011B let\xED\u2026";return}let t=T.maxAlt,i=+n.max||0;if(t>i){if(e.textContent="Vyhr\xE1l jsi souboj: "+En(t)+" km proti "+En(i)+" km",zp(["souboj"]).length){let r=document.createElement("span");r.className="chip badge-chip",r.textContent="V\xEDt\u011Bz souboje",k("newBadges").appendChild(r),k("badgeRow").hidden=!1}}else t<i?e.textContent="Souboj vyhr\xE1l "+ve.oppNick+": "+En(i)+" km proti tv\xFDm "+En(t)+" km":e.textContent="Rem\xEDza: oba "+En(t)+" km"}function Tu(){(T.mode!=="duel"||T.state==="menu")&&bu(),ve.unsub&&ve.unsub(),ve.oppUnsub&&ve.oppUnsub(),Object.assign(ve,{off:0,synced:!1,code:"",host:!1,unsub:null,oppUnsub:null,opp:null,oppId:"",started:!1,last:"",doc:null}),k("duelGo").hidden=!0,k("duelBtn").textContent="Souboj 1 na 1"}k("duelCreate").addEventListener("click",Ky);k("duelJoin").addEventListener("click",$y);k("duelGo").addEventListener("click",Qy);k("duelBtn").addEventListener("click",()=>{Mu("duel")});var qp=!!(window.claude&&window.claude.use),ut={ns:null,rec:null,on:at("sr-voice")==="1",listening:!1,want:!1,kind:"",needTap:!1,available(){return!!this.kind},async init(){if(qp){try{this.ns=await claude.use("dictation")}catch{this.ns=null}this.ns&&(this.kind="claude",this.ns.onFinal(({text:n})=>this.heard(n)),this.ns.onPartial(({text:n})=>this.partial(n)),this.ns.onState(({state:n,reason:e})=>{this.listening=n==="listening"||n==="starting"||n==="finishing",n==="idle"&&this.want&&this.active()&&(e==="not_granted"?(this.want=!1,zn("Mikrofon nen\xED povolen\xFD","bad")):e==="viewer_stopped"?this.want=!1:e!=="stopped"&&this.armTap()),Fi()}))}else{let n=window.SpeechRecognition||window.webkitSpeechRecognition;if(n){this.kind="web";let e=new n;e.lang="cs-CZ",e.continuous=!0,e.interimResults=!0,e.maxAlternatives=1,e.onresult=t=>{let i="";for(let s=t.resultIndex;s<t.results.length;s++){let r=t.results[s][0].transcript;t.results[s].isFinal?this.heard(r):i+=r}this.partial(i)},e.onstart=()=>{this.listening=!0,Fi()},e.onend=()=>{if(this.listening=!1,Fi(),this.want&&this.active())try{e.start()}catch{this.armTap()}},e.onerror=t=>{(t.error==="not-allowed"||t.error==="service-not-allowed")&&(this.want=!1,zn("Mikrofon nen\xED povolen\xFD","bad"))},this.rec=e}}Fi()},active(){return T.state==="play"||T.state==="count"},start(){if(!(!this.on||!this.kind)){if(this.want=!0,this.needTap=!1,this.ns){let n=at("sr-voice-lang")==="default";this.ns.start(n?void 0:{language:"cs"}).catch(e=>{let t=e&&e.code;t==="not_granted"?(this.want=!1,zn("Mikrofon nen\xED povolen\xFD","bad")):t==="unavailable"&&!n?(at("sr-voice-lang","default"),this.armTap()):t!=="stopped"&&this.armTap()})}else if(this.rec)try{this.rec.start()}catch{}this.sentPartial=new Set,Fi()}},armTap(){this.want&&(this.needTap=!0,zn("Klepni kamkoli na obrazovku a mluv d\xE1l","warn"),Fi())},stop(){if(this.want=!1,this.needTap=!1,this.ns)this.ns.stop().catch(()=>{});else if(this.rec)try{this.rec.stop()}catch{}k("voiceLive").textContent="",Fi()},partial(n){if(!this.on||!this.active())return;k("voiceLive").textContent=n?n.trim():"";let e=this.split(n);e.pop();for(let t of e)mu(t,!0,!0)},heard(n){if(!(!this.on||!this.active()))for(let e of this.split(n))mu(e,!0,!1)},split(n){return String(n||"").toLocaleLowerCase("cs").replace(/[^a-záčďéěíňóřšťúůýž\s]/g," ").split(/\s+/).filter(Boolean)}};k("app").addEventListener("pointerdown",()=>{ut.needTap&&ut.on&&ut.active()&&ut.start()},!0);function Fi(){let n=ut.available();k("voiceBtn").hidden=!n&&!qp,k("voiceBtn").textContent=n?ut.on?"Hlasem: zapnuto":"Hr\xE1t hlasem":"Hlas: jen v Chromu",k("voiceBtn").classList.toggle("na",!n),k("voiceBtn").classList.toggle("on",ut.on);let e=ut.on&&n;k("dock").classList.toggle("voice",e),k("micBtn").classList.toggle("live",ut.listening),k("micBtn").classList.toggle("tap",ut.needTap),gn.readOnly=e||!!T.out,e&&!T.out&&(gn.placeholder=ut.needTap?"klepni na obrazovku":ut.listening?"mluv: slova na "+is.L:"zap\xEDn\xE1m mikrofon\u2026")}k("voiceBtn").addEventListener("click",()=>{if(!ut.available()){k("voiceInfo").hidden=!k("voiceInfo").hidden;return}ut.on=!ut.on,at("sr-voice",ut.on?"1":"0"),Fi()});k("micBtn").addEventListener("pointerdown",n=>n.preventDefault());k("micBtn").addEventListener("click",()=>{ut.listening||ut.want?ut.stop():ut.start()});ut.init();var eM={timer:null,step:0,next:0,start(){!vt.ctx||this.timer||(this.next=vt.ctx.currentTime+.1,this.timer=setInterval(()=>this.tick(),70))},tick(){let n=vt.ctx;if(n)for(;this.next<n.currentTime+.25;)this.play(this.step,this.next),this.next+=this.dur(),this.step++},dur(){return T.state==="play"?.17:.26},note(n,e,t,i,s){let r=vt.ctx,a=r.createOscillator(),o=r.createGain();a.type=i,a.frequency.value=440*Math.pow(2,(n-69)/12),o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(s,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o),o.connect(r.destination),a.start(e),a.stop(e+t+.05)},play(n,e){if(vt.muted)return;let t=T.alt,i=t>100,s=T.state==="play",r=[0,2,4,7,9,12,14,16,19],a=i?52:t>12?55:57,o=[0,2,4,2,5,3,4,1,0,4,6,4,5,3,2,1];if(s||n%2===0){let l=a+r[o[n%16]+(i&&n%32>15?2:0)];this.note(l+12,e,s?.22:.4,"triangle",s?.035:.025)}n%8===0&&this.note(a-12+(n%32>=16?5:0),e,s?1.2:1.8,"sine",.06),i&&n%16===8&&this.note(a+24+7,e,1.6,"sine",.018)}};function xc(n){if(typeof n!="string"&&(n="daily"),vt.init(),vt.ctx&&vt.ctx.state==="suspended"&&vt.ctx.resume(),eM.start(),T.mode=n,T.training=n==="training",T.training){let e=ou.filter(i=>i!==Cs),t=e[Math.floor(Math.random()*e.length)];is={L:t,ll:t.toLocaleLowerCase("cs")}}else is={L:Cs,ll:Mp};document.querySelectorAll("#hud .stamp, #field .pre").forEach(e=>e.textContent=is.L),k("modeTag").textContent=T.training?"Tr\xE9nink":n==="duel"?"Souboj":"",k("modeTag").hidden=n==="daily",Na(!0),at("sr-nick",k("nick").value.trim()),Object.assign(T,{state:"count",alt:0,v:0,fuel:26,maxAlt:0,count:3.4,stage:0,used:new Set,list:[],words:0,longest:"",combo:0,lastWordT:-9,shake:0,boost:0,crashT:0,passed:new Set,launched:!1,armT:0}),mi.list.length=0,ls.list.length=0,k("recent").textContent="",We.visible=!0,Ca.length=0,T.out=!1,gn.readOnly=!1,gn.placeholder="dopi\u0161 slovo",k("dock").classList.remove("dead"),Da.forEach(e=>e.visible=!1),jn.visible=!1,Object.assign(T,{falling:!1,resultsShown:!1,outT:0,ft:0,path:[],pathT:0,gold:!1,event:null,nextEvent:16+Math.random()*10,meteorWin:!1,burnMul:1}),Eu(),k("reportBtn").hidden=!0,dc(We,Ia()),We.rotation.set(0,0,0),T.spin={x:0,y:0,z:0},T.tumbleT=0,T.mode==="daily"?Yy():bu(),T.mode==="duel"&&Wp(),pc(),gr(null),k("stageName").textContent=pi[0].name,gn.value="",k("voiceLive").textContent="",ut.on&&ut.available()||gn.focus(),Fi(),pu=9}var pu=9;function mu(n,e,t){if(T.state!=="play"&&T.state!=="count"||T.out)return;let i=n.trim().toLocaleLowerCase("cs");if(!i)return;let s=h=>{zn(h,"bad"),vt.bad();let u=k("field");u.classList.remove("shake"),u.offsetWidth,u.classList.add("shake")};if(!/^[a-záčďéěíňóřšťúůýž]+$/.test(i))return s("Jen p\xEDsmena, bez mezer");let r=is.ll+i;if(e){if(i[0]!==is.ll||i.length<3||(r=i,T.used.has(r))||!ns.has(r)&&t)return}else i[0]===is.ll&&!ns.has(r)&&ns.has(i)&&(r=i);if(r.length<3)return s("Aspo\u0148 3 p\xEDsmena");if(T.used.has(r))return s("\u201E"+en(r)+"\u201C u\u017E bylo");if(!ns.has(r)){fu=r;let h=k("reportBtn");return h.textContent="Nahl\xE1sit \u201E"+r+"\u201C",h.hidden=!1,clearTimeout(h._t),h._t=setTimeout(()=>h.hidden=!0,4500),s("\u201E"+en(r)+"\u201C ve slovn\xEDku nen\xED")}T.used.add(r);let a=Math.min(30,3+r.length*2.2),o=!1;for(let h of T.list){let u=0;for(;u<h.length&&u<r.length&&h[u]===r[u];)u++;if(u>=Math.max(3,Math.min(h.length,r.length)-1)){o=!0;break}}T.list.push(r),o&&(a*=.4),T.t-T.lastWordT<3.2&&T.state==="play"?T.combo++:T.combo=0,T.lastWordT=T.t,a=Math.round(a*(1+Math.min(T.combo,5)*.08));let l=!1,c="";T.event&&T.event.type==="hacky"&&/[áčďéěíňóřšťúůýž]/.test(r)&&(a*=2,c=" <i>h\xE1\u010Dek \xD72</i>"),T.event&&T.event.type==="meteor"&&!T.event.done&&r.length>=7&&(T.event.done=!0,T.meteorWin=!0,a+=12,c=" <i>roj odra\u017Een</i>",Pa("Roj odra\u017Een","+12 paliva")),!T.training&&Aa&&r===Aa&&!T.gold&&(l=!0,T.gold=!0,a+=60,at("sr-goldDay",Nt)),T.fuel=Math.min(100,T.fuel+a),T.words++,r.length>T.longest.length&&(T.longest=r),l&&(Pa("Zlat\xE9 slovo","+60 paliva"),k("toast").classList.add("gold"),setTimeout(()=>k("toast").classList.remove("gold"),2400),vt.stage(),T.shake=.6),T.boost=1,T.shake=Math.max(T.shake,.18),vt.ok(Math.min(T.combo,6)),zn(en(r)+" <b>+"+a+"</b>"+(c||(o?" <i>p\u0159\xEDbuzn\xE9 slovo</i>":T.combo>0?" <i>s\xE9rie \xD7"+(T.combo+1)+"</i>":"")),o?"warn":"good"),Vy(r),Wy("+"+a),nM(r),gn.value=""}k("wf").addEventListener("submit",n=>{n.preventDefault(),mu(gn.value),gn.focus()});k("sendBtn").addEventListener("pointerdown",n=>n.preventDefault());k("app").addEventListener("pointerdown",n=>{(T.state==="play"||T.state==="count")&&!n.target.closest("button")&&!(ut.on&&ut.available())&&(n.preventDefault(),gn.focus())});k("startBtn").addEventListener("click",()=>{ut.start(),xc("daily")});k("again").addEventListener("click",()=>{ut.start(),xc(T.mode==="duel"?"daily":T.mode||"daily")});k("trainBtn").addEventListener("click",()=>{ut.start(),xc("training")});k("againMini").addEventListener("click",()=>k("again").click());k("toFull").addEventListener("click",()=>{k("overMini").hidden=!0,k("overFull").hidden=!1});k("backMini").addEventListener("click",()=>{k("overFull").hidden=!0,k("overMini").hidden=!1,setTimeout(rc,30)});k("reportBtn").addEventListener("pointerdown",n=>n.preventDefault());k("reportBtn").addEventListener("click",()=>{fu&&ky(fu),k("reportBtn").hidden=!0,gn.focus()});k("toBoard").addEventListener("click",()=>{gr("board"),ts()});k("toMenu2").addEventListener("click",()=>k("toMenu").click());k("closeBoard").addEventListener("click",()=>{T.state==="over"?gr("over"):gr("menu")});k("toMenu").addEventListener("click",()=>{T.state="menu",Tu(),tM(),gr("menu")});function tM(){We.rotation.set(0,0,0),Object.assign(T,{falling:!1,resultsShown:!1,outT:0,alt:0,v:0,maxAlt:0,boost:0,shake:0,crashT:0,launched:!1,armT:0}),mi.list.length=0,ls.list.length=0,We.visible=!0,jn.visible=!1,Da.forEach(n=>n.visible=!1)}function nM(n){let e=k("field").getBoundingClientRect(),t=k("app").getBoundingClientRect(),i=new L(0,uc+.6,0);We.localToWorld(i),i.project(mn);let s=(i.x*.5+.5)*$n,r=(-i.y*.5+.5)*Qt;[...n].forEach((a,o)=>{let l=document.createElement("span");l.className="fly",l.textContent=a.toLocaleUpperCase("cs");let c=e.left-t.left+44+o*14,h=e.top-t.top+14;l.style.left=c+"px",l.style.top=h+"px",k("floats").appendChild(l);let u=s-c-10,d=r-h,f=l.animate([{transform:"translate(0,0) rotate(0deg) scale(1)"},{transform:`translate(${u*.35+(o-n.length/2)*16}px,${d*.6-30}px) rotate(${o%2?18:-18}deg) scale(1.15)`,offset:.55},{transform:`translate(${u}px,${d}px) rotate(${o%2?40:-40}deg) scale(.35)`}],{duration:560+o*55,easing:"cubic-bezier(.45,0,.7,1)",fill:"forwards"});f.onfinish=()=>{l.remove(),Ca.push(a)}})}async function xp(){ut.stop(),T.state="over",vt.engine(0),Eu();let n=T.training?{streak:Ep(),fresh:[],training:!0}:await Oy();T.mode==="duel"&&Xp(),k("oAlt").innerHTML=En(T.maxAlt)+"<small>km</small>",k("mAlt").innerHTML=En(T.maxAlt)+"<small>km</small>",k("overMini").hidden=!1,k("overFull").hidden=!0,k("oWords").textContent=T.words,k("oLong").textContent=T.longest||"\u2013";let e=pi.reduce((s,r,a)=>T.maxAlt>=r.at?a:s,0);k("overHead").textContent=n.training?"Tr\xE9nink \xB7 p\xEDsmeno "+is.L:n.newBest?"Nov\xFD osobn\xED rekord":n.newDay?"Tv\u016Fj nejlep\u0161\xED dne\u0161n\xED let":"Konec letu",k("shareBtn").hidden=!!n.training,k("rankCell").hidden=!!n.training,k("over").classList.toggle("training",!!n.training);let t=k("newBadges");t.textContent="";for(let s of n.fresh||[]){let r=kp.find(o=>o.id===s);if(!r)continue;let a=document.createElement("span");a.className="chip badge-chip",a.textContent=r.name,t.appendChild(a)}k("badgeRow").hidden=!(n.fresh&&n.fresh.length),k("duelResult").hidden=T.mode!=="duel",k("mHead").textContent=k("overHead").textContent,k("overStage").textContent=pi[e].name,k("mStage").textContent=pi[e].name;let i=()=>{if(!oe.db)return"\u2013";let s=oe.day.findIndex(r=>r.id===oe.uid);return oe.canWrite&&s>=0?s+1+".":oe.day.filter(r=>+r.dayBest>T.maxAlt).length+1+"."};k("oRank").textContent=i(),setTimeout(()=>{T.state==="over"&&(k("oRank").textContent=i())},1500),T.lastResult={streak:n.streak,stage:e},k("oStreak").textContent=lc(n.streak),Yp(),Tp(),mc(),Sp(),k("shareBtn").textContent="Zkop\xEDrovat v\xFDsledek",k("shareFallback").hidden=!0,gr("over"),gn.blur()}function _p(n,e,t){if(n.textContent="",!e.length){let i=document.createElement("span");i.className="none",i.textContent="\u2013",n.appendChild(i);return}for(let i of e){let s=document.createElement("span");s.className="chip "+(t||""),s.textContent=i,n.appendChild(s)}}function Yp(){_p(k("myWords"),T.list.slice(),"mine");let n=new Set(T.list),e=new Map;for(let s of oe.day)if(Array.isArray(s.dayAll))for(let r of new Set(s.dayAll))typeof r!="string"||r.length>24||e.set(r,(e.get(r)||0)+1);for(let s of n)oe.day.some(r=>r.id===oe.uid)||e.set(s,(e.get(s)||0)+1);let t=[...e.entries()].filter(([s])=>!n.has(s)).sort((s,r)=>r[1]-s[1]||s[0].localeCompare(r[0],"cs")).slice(0,14).map(s=>s[0]);_p(k("otherWords"),t,"other"),k("otherNote").textContent=oe.db?t.length?"":"Zat\xEDm nikdo jin\xFD dnes nenapsal nic, co bys nem\u011Bl.":"Bez online \u017Eeb\u0159\xED\u010Dku nevid\xED\u0161 slova ostatn\xEDch.";let i=[...e.entries()].sort((s,r)=>r[1]-s[1])[0];k("wordOfDay").innerHTML=i&&i[1]>=2?"Slovo dne: <b>"+en(i[0])+"</b> \xB7 napsalo ho "+i[1]+(i[1]<5?" piloti":" pilot\u016F"):""}function iM(){let n=new Date,e=T.lastResult?T.lastResult.stage:0,t=pi.map((r,a)=>a<=e?"\u25B0":"\u25B1").join(""),i=["TM\xCDNUS \xB7 "+n.getDate()+". "+(n.getMonth()+1)+". \xB7 p\xEDsmeno "+Cs,En(T.maxAlt)+" km \xB7 "+pi[e].name,T.words+" "+(T.words===1?"slovo":T.words<5&&T.words>0?"slova":"slov")+(T.longest?" \xB7 nejdel\u0161\xED: "+T.longest:""),t],s=[];return T.lastResult&&T.lastResult.streak>1&&s.push("s\xE9rie "+lc(T.lastResult.streak)),T.gold&&s.push("zlat\xE9 slovo nalezeno"),s.length&&i.splice(3,0,s.join(" \xB7 ")),i.join(`
`)}k("shareBtn").addEventListener("click",async()=>{let n=iM();try{await navigator.clipboard.writeText(n),k("shareBtn").textContent="Zkop\xEDrov\xE1no"}catch{let t=k("shareFallback");t.hidden=!1,t.value=n,t.focus(),t.select(),k("shareBtn").textContent="Ozna\u010D a zkop\xEDruj text"}});function Zp(){ut.stop(),T.out=!0,Ca.length=0,T.tumbleT=0;let n=()=>Math.random()<.5?-1:1;T.spin={z:n()*(1.4+Math.random()*1.6),x:n()*(.4+Math.random()*1.2),y:n()*(.5+Math.random())},gn.value="",gn.readOnly=!0,gn.placeholder="do\u0161lo palivo",k("dock").classList.add("dead"),zn("Do\u0161lo palivo \u2014 raketa pad\xE1","bad"),vt.bad()}function sM(){T.state="crash",Jp(),Pa("Dopad","")}function Jp(){T.crashT=0,T.v=0,T.shake=1,vt.boom(),vt.engine(0),We.visible=!1,jn.visible=!0;for(let n=0;n<60;n++){let e=Math.random()*Math.PI*2,t=Math.random()*1.2,i=3+Math.random()*14,s=new L(Math.cos(e)*Math.cos(t),Math.sin(t)+.2,Math.sin(e)*Math.cos(t));As(ls,{p:new L(0,1.5,0),v:s.multiplyScalar(i),life:1,max:.6+Math.random()*.9,size:.35+Math.random()*.5,kind:"boom",rot:Math.random()*6}),n%2&&As(mi,{p:new L((Math.random()-.5)*2,1+Math.random()*2,(Math.random()-.5)*2),v:s.clone().multiplyScalar(.35).add(new L(0,1.5,0)),life:1,max:2.5+Math.random()*2,size:2+Math.random()*2.5,grow:1.4,kind:"boom",rot:Math.random()*6,rs:(Math.random()-.5)*.6})}}function rM(n){if(T.t+=n,T.state==="count"){T.count-=n;let e=Math.ceil(T.count);e!==pu&&e>=0&&e<=3&&(pu=e,e>0?(dp("T\u2013"+e),vt.beep(!1)):(dp("Start"),vt.beep(!0))),T.count<=0&&(T.state="play",T.launched=!0)}if(T.state==="play"){let e=oc(T.alt),t=T.fuel>0;for(t?(T.fuel=Math.max(0,T.fuel-Iy(T.alt)*T.burnMul*n),T.fuel<=0&&!T.out&&Zp(),T.v=Math.min(e*(1+T.boost*.25),T.v+(.8+e*1.1)*n)):T.v=Math.max(-e*1.2,T.v-(.35+e*.45)*n),T.alt+=T.v*n,T.alt>T.maxAlt&&(T.maxAlt=T.alt),T.ft+=n,T.pathT+=n,Jy(n),T.mode==="duel"&&gp(n),T.pathT>=.5&&T.path.length<1800&&(T.pathT-=.5,T.path.push(Math.round(Math.max(0,T.alt)*100)/100));T.stage+1<pi.length&&T.maxAlt>=pi[T.stage+1].at;){T.stage++;let i=T.fuel>0;i&&(T.fuel=Math.min(100,T.fuel+10)),k("stageName").textContent=pi[T.stage].name,vt.stage(),Pa(T.stage===4?"Jsi ve vesm\xEDru":pi[T.stage].name,(T.stage===4?"K\xE1rm\xE1nova hranice \xB7 100 km":"")+(i?(T.stage===4?" \xB7 ":"")+"+10 paliva":""))}for(let i of oe.ghosts)!T.passed.has(i.key)&&T.maxAlt>i.alt&&(T.passed.add(i.key),zn(i.me?"P\u0159ekonal jsi sv\u016Fj dne\u0161n\xED let":"P\u0159edlet\u011Bl jsi pilota "+en(i.name),"good"));T.alt<=0&&T.v<0?(T.alt=0,sM()):T.out&&T.v<=0&&!T.resultsShown&&(T.outT+=n,T.outT>.6&&(T.resultsShown=!0,T.falling=T.alt>.02,xp())),vt.engine(t?.15+.1*T.boost:0,T.alt>100)}if(T.state==="crash"&&T.mode==="duel"&&gp(n),T.state==="crash"&&(T.crashT+=n,T.crashT>1.6&&!T.resultsShown&&(T.resultsShown=!0,xp())),T.state==="over"&&(jn.visible&&(T.crashT+=n),T.falling)){let e=oc(T.alt);T.v=Math.max(-e*1.2,T.v-(.35+e*.45)*n),T.alt+=T.v*n,T.alt<=0&&(T.alt=0,T.falling=!1,Jp())}T.launched&&(T.armT=Math.min(1,T.armT+n*.8)),T.boost=Math.max(0,T.boost-n*1.6),T.shake=Math.max(0,T.shake-n*1.8)}var Mn=new L,aM=new L(-.3,.38,-1).normalize(),Ea=.5,Ql=.6,Ta=0;function oM(n){let e=T.alt,t=_u(e),i=kn(2,34,e),s=kn(30,125,e),r=T.state==="play"||T.state==="count"||T.state==="crash"||T.falling,a=T.state==="play"&&T.fuel>0||T.state==="count"&&T.count<1.3,o=r||T.state==="over"?.42:.5+Math.sin(T.t*.09)*.55;Ea=Kn(Ea,o,1-Math.exp(-n*1.2));let l=Math.tan(mn.fov*Math.PI/360),c=(R,D,z,P,F)=>{let X=Math.max(80,P-z),ie=(D-R)*Qt/(2*l*X)*F,q=Qt/(2*ie*l),j=(z+P)/2-Qt/2;return[ie,(R+D)/2+j/q]},h=26,u=.6;if(T.state==="over"&&T.falling)[h,u]=c(-2.5,8.5,10,Math.max(130,(fi.overTop||Qt*.3)-10),1.7),h=Sn(h,14,120);else if(r){let R=fi.hudBottom+6,D=Qt-fi.dockH-6;[h,u]=c(-5.5,8,R,D,1.12+Sn(T.v/oc(e),0,1)*.08),h=Sn(h,14,70)}else T.state==="menu"&&([h,u]=c(-1.6,13,fi.menuTop+8,Qt-fi.menuBottomH-8,1.06),h=Sn(h,18,140));let d=T.state==="over"&&!T.falling?1.2:Ql+(r?2.2:2.5),f=T.shake*T.shake*.35;Ta=Kn(Ta||h,h,1-Math.exp(-n*2.2)),mn.position.set(Math.sin(Ea)*Ta+(Math.random()-.5)*f,d+(Math.random()-.5)*f,Math.cos(Ea)*Ta),Ql=Kn(Ql,u,1-Math.exp(-n*2)),mn.lookAt(0,Ql,0),mn.updateMatrixWorld(),Ip.copy(ly).transformDirection(mn.matrixWorldInverse);let g=Math.max(e,.002),y=Math.asin(Rs/(Rs+g)),p=Math.atan(.3*Math.tan(Bn.fov*Math.PI/360));Bn.position.set(0,Rs+g,0),Bn.rotation.set(p-(Math.PI/2-y),Ea,0,"YXZ"),hc.position.copy(Bn.position),Cp.uniforms.uAlt.value=e,sc.uniforms.uAlt.value=e;let m=Sn(e*.25,.3,2e3);Math.abs(Bn.near-m)>.01&&(Bn.near=m,Bn.updateProjectionMatrix()),sc.uniforms.uHaze.value.copy(rp(e,1)),Pp.uniforms.uFade.value=kn(40,300,e);let _=aM.clone().applyEuler(Bn.rotation);if(lu.position.copy(Bn.position).addScaledVector(_,Sn(390400-e,7e3,4e5)),lu.visible=e>2e3,cn.fog.color.copy(rp(e,.92)),cn.fog.near=Kn(90,400,i),cn.fog.far=Kn(2600,9e3,i),T.launched&&(T.state==="play"||T.state==="count")&&(We.rotation.y+=n*.35),T.state==="play"&&T.out||T.state==="over"&&T.falling){T.tumbleT+=n;let R=Math.min(1,T.tumbleT/2.2);We.rotation.z+=T.spin.z*R*n,We.rotation.x+=T.spin.x*R*n,We.rotation.y+=T.spin.y*n}else We.rotation.z=Kn(We.rotation.z,Math.sin(T.t*1.3)*.015,.05),We.rotation.x=Kn(We.rotation.x,Math.cos(T.t*1.1)*.009,.05);let v=3;Mn.set(0,v,0).applyEuler(We.rotation),We.position.set((T.state==="count"&&T.count<.4?(Math.random()-.5)*.04:0)-Mn.x,v-Mn.y,-Mn.z);let A=a?T.state==="count"?kn(1.3,.2,T.count)*.75:.85+T.boost*.5:0;mr.visible=A>.02;let w=kn(40,160,e),x=.9+Math.random()*.16;mr.scale.set((1+w*.7)*(.9+T.boost*.25),(.5+A*.75)*x*(1+w*.3),(1+w*.7)*(.9+T.boost*.25));for(let R of Dp)R.material.uniforms.uTime.value=T.t,R.material.uniforms.uFlick.value=.8+T.boost;Lp.value=A;for(let R of Qn){let D=R.mesh;if(!(T.state==="play"||T.state==="crash")){D.visible=!T.launched&&T.state==="count"||!!R.live&&T.state==="menu"&&!!ve.code&&!ve.started,D.visible&&D.position.set(R.x,D.userData.twin?0:-.2,R.z),D.userData.flame.visible=!1;continue}let z=fp(R,T.ft);if(z===null){D.visible=!1,R.cur=null;continue}let P=fp(R,Math.max(0,T.ft-.5)),F=(z-e)*t;D.visible=F>-45&&F<45,D.position.set(R.x,F,R.z),D.userData.twin||(D.rotation.y+=n*.5),D.userData.flame.visible=z>.002&&(P===null||z>=P-5e-4),D.userData.twin||D.userData.flame.scale.set(1,.75+Math.random()*.45,1),R.cur=z,R.y=F}At.position.y=-e*t,At.visible=e<1.8,At.userData.arms.forEach((R,D)=>{R.rotation.y=Kn(0,-1.3-D*.2,kn(0,1,T.armT))}),At.userData.beacon.visible=Math.sin(T.t*3)>.1;let E=At.userData.gantry2;E.visible=Qn.some(R=>R.live);for(let R of At.userData.singlePad)R.visible=!E.visible;E.visible&&(E.userData.arms.forEach((R,D)=>{R.rotation.y=Kn(0,1.3+D*.2,kn(0,1,T.state==="menu"?0:T.armT))}),E.userData.beacon.visible=Math.sin(T.t*3+1.5)>.1);for(let R of Op){let D=(R.alt-e)*t,z=D>-60&&D<70;if(R.obj.visible=z,!z)continue;R.fx+=R.drift*n*.012,R.fx>1.3&&(R.fx=-1.3),R.fx<-1.3&&(R.fx=1.3);let P=(Ta-R.z)*Math.tan(mn.fov*Math.PI/360)*mn.aspect,F=T.t+R.phase,X=R.obj;if(X.position.set(R.fx*P,D+Math.sin(F*1.3)*.3,R.z),R.kind==="plane")X.rotation.set(Math.sin(F*.5)*.06,R.baseRotY+.35*(R.drift>0?-1:1),Math.sin(F*.7)*.03);else if(R.kind==="birds"){X.rotation.set(.45,R.baseRotY+.35,0);for(let H of X.userData.birds){let ie=F*5.5+H.userData.phase,q=Math.sin(ie),j=Math.sin(ie-.9);for(let ee of H.userData.wings)ee.piv.rotation.x=-ee.sgn*(q*.55+.1),ee.piv2.rotation.x=-ee.sgn*(j*.45-.15);H.position.y=Math.sin(F*2+H.userData.phase)*.06+(H.userData.y0??(H.userData.y0=H.position.y))}}else R.kind==="balloon"?X.rotation.set(Math.sin(F*.8)*.08,F*.2,Math.cos(F*.6)*.08):R.kind==="space"?X.rotation.set(.35+Math.sin(F*.2)*.1,R.baseRotY+F*.15,.2):R.kind==="debris"&&X.rotation.set(F*R.spin.x,F*R.spin.y,F*R.spin.z)}for(let R of Bp){let D=(R.alt-e)*t,z=D>-260&&D<320&&R.alt<13;if(R.sp.visible=z,!z)continue;R.sp.position.set(R.x+T.t*R.drift,D,R.z);let P=mn.position.distanceTo(R.sp.position);R.sp.material.opacity=kn(6,22,P),R.sp.material.alphaTest=.5+(1-R.sp.material.opacity)*.45}if(jn.visible){let R=T.crashT,D=R<.3?R/.3*15:15*Math.max(0,1-(R-.3)/1.1);jn.scale.set(D,D,1),jn.material.rotation=R*.6,D<=0&&(jn.visible=!1)}let U=T.v*t*n;lM(n,A,e),vp(mi,n,U,e),vp(ls,n,U,e);let I=new L(0,uc-.6,0);We.localToWorld(I),eu-=n,Ca.length&&eu<=0&&(A>.02||T.state==="count")&&(yy(Ca.shift(),I),eu=.09);for(let R of Da){if(!R.visible)continue;let D=R.userData;if(D.life-=n/D.max,D.life<=0){R.visible=!1;continue}R.position.addScaledVector(D.v,n),R.position.y-=Math.min(U,.5*n*60)*.35,D.v.multiplyScalar(Math.exp(-.8*n)),R.material.rotation+=D.spin*n;let z=1-D.life,P=D.size*Math.min(1,z*8)*Math.min(1,D.life*3);R.scale.set(P,P,1);let F=z<.55?1:1-(z-.55)*1.3;R.material.color.setRGB(F,Math.min(1,F+.15),1,Rn)}}function lM(n,e,t){let i=kn(50,160,t),s=new L(0,uc-.3,0);We.localToWorld(s);let r=t<.03;if(T.out&&(T.state==="play"||T.falling)&&Math.random()<n*9*(1-i)&&As(mi,{p:s.clone(),v:new L((Math.random()-.5)*1.5,1+Math.random(),(Math.random()-.5)*1.5),life:1,max:1.4+Math.random(),size:.9+Math.random()*.7,grow:1.5,kind:"trail",rot:Math.random()*6,rs:.4,drag:.4}),e<=.02)return;let a=(10+e*16)*n;for(let l=0;l<a;l++)As(ls,{p:s.clone().add(new L((Math.random()-.5)*.8,-1-Math.random()*2,(Math.random()-.5)*.8)),v:new L((Math.random()-.5)*3,-7-Math.random()*6,(Math.random()-.5)*3),life:1,max:.35+Math.random()*.35,size:.25+Math.random()*.3,kind:"spark",rot:0});let o=(r?40:16)*e*(1-i*.95)*n;for(let l=0;l<o;l++)if(r){let c=Math.random()*Math.PI*2,h=4+Math.random()*9;As(mi,{p:new L(Math.cos(c)*1.5,-.8+Math.random()*.6,Math.sin(c)*1.5),v:new L(Math.cos(c)*h,.3+Math.random()*1.4,Math.sin(c)*h),life:1,max:3+Math.random()*3.5,size:3+Math.random()*3,grow:1.8,kind:"pad",rot:Math.random()*6,rs:(Math.random()-.5)*.3,drag:.6})}else As(mi,{p:s.clone().add(new L((Math.random()-.5)*.6,-2.5-Math.random()*2.5,(Math.random()-.5)*.6)),v:new L((Math.random()-.5)*1.6,-4-Math.random()*3,(Math.random()-.5)*1.6),life:1,max:(1.6+Math.random()*1.8)*(1-i*.75),size:1.8+Math.random()*1.2,grow:1.6+i*2,kind:"trail",rot:Math.random()*6,rs:(Math.random()-.5)*.5,drag:.15})}function vp(n,e,t,i){let s=n.list;for(let o=s.length-1;o>=0;o--){let l=s[o];if(l.life-=e/l.max,l.life<=0){s.splice(o,1);continue}l.drag&&l.v.multiplyScalar(Math.exp(-l.drag*e)),l.p.addScaledVector(l.v,e),l.p.y-=t,(l.kind==="pad"||l.kind==="boom")&&(l.v.y+=.4*e)}let r=kn(30,125,i),a=Math.min(s.length,n.max);for(let o=0;o<a;o++){let l=s[o],c=o*3,h=1-l.life;if(n.pos[c]=l.p.x,n.pos[c+1]=l.p.y,n.pos[c+2]=l.p.z,n===mi){n.size[o]=l.size*(1+h*(l.grow||1.6))*Math.min(1,l.life*2.2),n.alpha[o]=1;let u=1-r*.6;n.col[c]=u,n.col[c+1]=u,n.col[c+2]=u,r>0&&(n.col[c]=1,n.col[c+1]=1,n.col[c+2]=1),l.rot+=(l.rs||0)*e}else{n.size[o]=l.size*(l.kind==="boom"?1+h:1),n.alpha[o]=1;let u=l.life;n.col[c]=0,n.col[c+1]=u>.55?.15:1,n.col[c+2]=1,l.life<.2&&(n.size[o]*=l.life*5)}n.rot[o]=l.rot||0}n.geo.setDrawRange(0,a);for(let o of["position","aSize","aAlpha","aColor","aRot"])n.geo.attributes[o].needsUpdate=!0}function cM(n){let e=Math.pow(10,Math.floor(Math.log10(n))),t=n/e;return(t<1.5?1:t<3.5?2:t<7.5?5:10)*e}function wa(n){return Mn.set(0,(n-T.alt)*_u(T.alt)+3.2,0),Mn.project(mn),(-Mn.y*.5+.5)*Qt}function hM(){if(Ne.setTransform(Dn,0,0,Dn,0,0),Ne.clearRect(0,0,$n,Qt),!(T.state==="play"||T.state==="count"||T.state==="crash"))return;let e=T.alt,t=_u(e),i=wa(e),s=wa(e+1/t),r=Math.max(1e-6,(i-s)*t),a=cM(70/r),o=Math.max(0,e-(Qt-i)/r),l=e+i/r,c=$n-14;Ne.font="600 10.5px 'Bricolage Grotesque', sans-serif",Ne.textAlign="right",Ne.textBaseline="middle";let h=120,u=Qt-150;for(let g=Math.floor(o/a)*a;g<=l;g+=a){if(g<0)continue;let y=wa(g);if(y<h||y>u)continue;let p=Math.min(1,(y-h)/40,(u-y)/40);Ne.fillStyle="rgba(243,239,232,"+.55*p+")",Ne.fillRect(c-10,y,10,1),Ne.fillText(En(g),c-15,y);for(let m=1;m<5;m++){let _=wa(g+m*a/5);_<h||_>u||(Ne.fillStyle="rgba(243,239,232,"+.2*p+")",Ne.fillRect(c-5,_,5,1))}}Ne.fillStyle="#FFE800",Ne.beginPath(),Ne.moveTo(c+4,i),Ne.lineTo(c-4,i-4),Ne.lineTo(c-4,i+4),Ne.fill();let d=null;Ne.textAlign="left",Ne.font="700 11px 'Bricolage Grotesque', sans-serif";for(let g of oe.ghosts){g.alt>e&&(!d||g.alt<d.alt)&&(d=g);let y=wa(g.alt);if(y<h-10||y>u+10)continue;let p=g.me?"#FFE800":"#F3EADA";Ne.strokeStyle=p,Ne.globalAlpha=.85,Ne.lineWidth=1.5,Ne.setLineDash([6,5]),Ne.beginPath(),Ne.moveTo(0,y),Ne.lineTo($n-70,y),Ne.stroke(),Ne.setLineDash([]);let m=g.name.toUpperCase(),_=Ne.measureText(m).width+12;Ne.fillStyle=p,Ne.fillRect(14,y-19,_,16),Ne.fillStyle="#001F71",Ne.fillText(m,20,y-10.5),Ne.globalAlpha=1}k("next").textContent=T.state==="play"&&d?"Dal\u0161\xED: "+d.name+" \xB7 "+En(d.alt)+" km":"",Ne.font="700 10.5px 'Bricolage Grotesque', sans-serif",Ne.textAlign="center";let f=0;for(let g of Qn)if(g.cur!=null){if(g.mesh.visible){Mn.set(g.x,g.y+(g.mesh.userData.twin?6.6:3.4),g.z),Mn.project(mn);let y=(Mn.x*.5+.5)*$n,p=(-Mn.y*.5+.5)*Qt;if(p<110||p>Qt-150)continue;let m=g.name.toUpperCase(),_=Ne.measureText(m).width+10;Ne.fillStyle=g.me?"#FFE800":"#F3EADA",Ne.fillRect(y-_/2,p-14,_,14),Ne.fillStyle="#0E2470",Ne.fillText(m,y,p-6.5)}else if(g.y>0){Mn.set(g.x,0,g.z),Mn.project(mn);let y=Sn((Mn.x*.5+.5)*$n,40,$n-60),p=g.name.toUpperCase()+" +"+En(g.cur-e),m=Ne.measureText(p).width+10,_=150+f*18;f++,Ne.fillStyle="rgba(243,234,218,.88)",Ne.fillRect(y-m/2,_,m,14),Ne.fillStyle="#0E2470",Ne.fillText(p,y,_+7.5),Ne.beginPath(),Ne.moveTo(y-m/2-9,_+7),Ne.lineTo(y-m/2-3,_+2),Ne.lineTo(y-m/2-3,_+12),Ne.fillStyle="#F3EADA",Ne.save(),Ne.translate(y-m/2-6,_+7),Ne.restore(),Ne.beginPath(),Ne.moveTo(y-m/2-7,_+11),Ne.lineTo(y-m/2-3.5,_+3),Ne.lineTo(y-m/2,_+11),Ne.fill()}}Ne.textAlign="left"}var su=null;function uM(){if(!su){let n=k("fuelTrack");for(let e=0;e<14;e++){let t=document.createElement("i");n.appendChild(t)}su=[...n.children]}return su}function dM(){let n=En(T.alt).split(",");k("altV").innerHTML=en(n[0])+(n[1]!==void 0?'<span class="dec">,'+en(n[1])+"</span>":"");let e=Math.abs(T.v);k("spdV").textContent=(T.v<-.005?"\u2212":"")+(e<100?e.toFixed(2).replace(".",","):En(e))+" km/s";let t=Sn(T.fuel,0,100),i=uM(),s=t/100*i.length;i.forEach((r,a)=>{r.style.setProperty("--f",Sn(s-a,0,1))}),k("fuelPct").textContent=Math.round(t)+" %",k("dock").classList.toggle("low",t<15&&T.state==="play"),k("dock").classList.toggle("empty",t<=0&&T.state==="play")}var yp=performance.now(),ru=0,au=0,ec=0;function Kp(n){let e=(n-yp)/1e3,t=Math.min(.05,e);if(yp=n,T.state==="play"&&e<.5&&(au+=e,ec++,ec>=90)){let i=au/ec;au=0,ec=0,i>.024&&pr>.66&&(pr=Math.max(.65,pr-.1),at("sr-q2",String(pr)),rs.setPixelRatio(Dn*pr),rs.setSize($n,Qt))}(T.state==="menu"||T.state==="over")&&(T.t+=t),rM(t),oM(t),rs.render(t),hM(),ru+=t,ru>.05&&(ru=0,dM()),requestAnimationFrame(Kp)}requestAnimationFrame(Kp);Tp();mc();Su();ns.load().then(()=>{Sp();let n=k("startBtn");n.disabled=!1,n.querySelector("span").textContent="Spustit odpo\u010Det",ns.failed&&(k("dbStatus").textContent="Slovn\xEDk se nena\u010Detl, slova se kontroluj\xED jen zjednodu\u0161en\u011B.")});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
