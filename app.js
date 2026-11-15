(()=>{var md=0,eh=1,gd=2;var oa=1,_d=2,sr=3,si=0,Gt=1,vn=2,Ai=0,rr=1,th=2,nh=3,ih=4,$o=5;var Ms=100,xd=101,vd=102,yd=103,Md=104,Sd=200,jo=201,bd=202,Ed=203,sh=204,la=205,Td=206,wd=207,Ad=208,Rd=209,Cd=210,Pd=211,Id=212,Ld=213,Dd=214,fo=0,po=1,mo=2,Zs=3,go=4,_o=5,xo=6,vo=7,rh=0,Nd=1,Ud=2,Un=0,ah=1,oh=2,lh=3,ch=4,hh=5,uh=6,dh=7;var fh=300,Ss=301,ar=302,Qo=303,el=304,ms=1e3,Qn=1001,yo=1002,Zt=1003,Fd=1004;var ca=1005;var Jt=1006,tl=1007;var Ri=1008;var In=1009,ph=1010,mh=1011,or=1012,nl=1013,Yn=1014,Fn=1015,dn=1016,il=1017,sl=1018,bs=1020,gh=35902,_h=35899,xh=1021,vh=1022,Zn=1023,Si=1026,Ci=1027,rl=1028,al=1029,Ji=1030,ol=1031;var ll=1033,ha=33776,ua=33777,da=33778,fa=33779,cl=35840,hl=35841,ul=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37488,_l=37489,pa=37490,xl=37491,vl=37808,yl=37809,Ml=37810,Sl=37811,bl=37812,El=37813,Tl=37814,wl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Il=37820,Ll=37821,Dl=36492,Nl=36494,Ul=36495,Fl=36283,Ol=36284,ma=36285,Bl=36286;var Ir=2300,Mo=2301,ho=2302,Vc=2303,Wc=2400,Xc=2401,qc=2402;var Od=3200;var yh=0,Bd=1,Pi="",wn="srgb",An="srgb-linear",Lr="linear",gt="srgb";var uo=7680;var kd=519,zd=512,Hd=513,Gd=514,Mh=515,Vd=516,Wd=517,Sh=518,bh=519,Eh=35044,Th=35048;var wh="300 es",Nn=2e3,Dr=2001;function jp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xd(){let n=Nr("canvas");return n.style.display="block",n}var Uu={},Js=null;function Ur(...n){let e="THREE."+n.shift();Js?Js("log",e,...n):console.log(e,...n)}function qd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=qd(n);let e="THREE."+n.shift();if(Js)Js("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=qd(n);let e="THREE."+n.shift();if(Js)Js("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rr(...n){let e=n.join(" ");e in Uu||(Uu[e]=!0,Ve(...n))}function Yd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Zd={[fo]:fo,[mo]:xo,[go]:go,[Zs]:_o,[po]:po,[xo]:mo,[vo]:vo,[_o]:Zs},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xc=Math.PI/180,So=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function em(n,e){return(n%e+e)%e}function vc(n,e,t){return(1-t)*n+t*e}function Jd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kd(n,e){if(e.constructor===Float32Array)return n;let t=kl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function $d(n,e){if(e.constructor===Float32Array)return n;let t=kl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Lh=class Lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;var se=Lh,Rn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let x=Math.acos(m),E=Math.sin(x);p=Math.sin(p*x)/E,o=Math.sin(o*x)/E,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;var L=Dh,yc=new L,Fu=new Rn,Nh=class Nh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],x=s[1],E=s[4],v=s[7],R=s[2],A=s[5],_=s[8];return r[0]=a*y+o*x+l*R,r[3]=a*m+o*E+l*A,r[6]=a*p+o*v+l*_,r[1]=c*y+h*x+u*R,r[4]=c*m+h*E+u*A,r[7]=c*p+h*v+u*_,r[2]=d*y+f*x+g*R,r[5]=d*m+f*E+g*A,r[8]=d*p+f*v+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;var Ye=Nh,Mc=new Ye,Ou=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){let n={enabled:!0,workingColorSpace:An,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[An]:{primaries:e,whitePoint:i,transfer:Lr,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}var ht=tm();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cs,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=Nr("canvas")),Cs.width=e.width,Cs.height=e.height;let s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nm=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sc(s[a].image)):r.push(Sc(s[a]))}else r=Sc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var im=0,bc=new L,un=class n extends ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=Jt,a=Ri,o=Zn,l=In,c=n.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Ki(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=fh;un.DEFAULT_ANISOTROPY=1;var Uh=class Uh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(f+1)/2,R=(p+1)/2,A=(h+d)/4,_=(u+y)/4,b=(g+m)/4;return E>v&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=_/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=b/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=_/r,s=b/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;var It=Uh,Eo=class extends ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Eo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fr=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ko=class Ko{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,i){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Fi.crossVectors(i,En),Fi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Fi.crossVectors(i,En)),Fi.normalize(),Fa.crossVectors(En,Fi),s[0]=Fi.x,s[4]=Fa.x,s[8]=En.x,s[1]=Fi.y,s[5]=Fa.y,s[9]=En.y,s[2]=Fi.z,s[6]=Fa.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],x=i[3],E=i[7],v=i[11],R=i[15],A=s[0],_=s[4],b=s[8],N=s[12],w=s[1],I=s[5],O=s[9],X=s[13],C=s[2],B=s[6],H=s[10],z=s[14],ie=s[3],Y=s[7],j=s[11],ne=s[15];return r[0]=a*A+o*w+l*C+c*ie,r[4]=a*_+o*I+l*B+c*Y,r[8]=a*b+o*O+l*H+c*j,r[12]=a*N+o*X+l*z+c*ne,r[1]=h*A+u*w+d*C+f*ie,r[5]=h*_+u*I+d*B+f*Y,r[9]=h*b+u*O+d*H+f*j,r[13]=h*N+u*X+d*z+f*ne,r[2]=g*A+y*w+m*C+p*ie,r[6]=g*_+y*I+m*B+p*Y,r[10]=g*b+y*O+m*H+p*j,r[14]=g*N+y*X+m*z+p*ne,r[3]=x*A+E*w+v*C+R*ie,r[7]=x*_+E*I+v*B+R*Y,r[11]=x*b+E*O+v*H+R*j,r[15]=x*N+E*X+v*z+R*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],x=l*f-c*d,E=o*f-c*u,v=o*d-l*u,R=a*f-c*h,A=a*d-l*h,_=a*u-o*h;return t*(y*x-m*E+p*v)-i*(g*x-m*R+p*A)+s*(g*E-y*R+p*_)-r*(g*v-y*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=t*o-i*a,E=t*l-s*a,v=t*c-r*a,R=i*l-s*o,A=i*c-r*o,_=s*c-r*l,b=h*y-u*g,N=h*m-d*g,w=h*p-f*g,I=u*m-d*y,O=u*p-f*y,X=d*p-f*m,C=x*X-E*O+v*I+R*w-A*N+_*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(o*X-l*O+c*I)*B,e[1]=(s*O-i*X-r*I)*B,e[2]=(y*_-m*A+p*R)*B,e[3]=(d*A-u*_-f*R)*B,e[4]=(l*w-a*X-c*N)*B,e[5]=(t*X-s*w+r*N)*B,e[6]=(m*v-g*_-p*E)*B,e[7]=(h*_-d*v+f*E)*B,e[8]=(a*O-o*w+c*b)*B,e[9]=(i*w-t*O-r*b)*B,e[10]=(g*A-y*v+p*x)*B,e[11]=(u*v-h*A-f*x)*B,e[12]=(o*N-a*I-l*b)*B,e[13]=(t*I-i*N+s*b)*B,e[14]=(y*E-g*R-m*x)*B,e[15]=(h*R-u*E+d*x)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,x=l*c,E=l*h,v=l*u,R=i.x,A=i.y,_=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+v)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(g+E)*_,s[9]=(m-x)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,h=1/o,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Nn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ko.prototype.isMatrix4=!0;var _t=Ko,Ps=new L,Hn=new _t,sm=new L(0,0,0),rm=new L(1,1,1),Fi=new L,Fa=new L,En=new L,ku=new _t,zu=new Rn,Hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},am=0,Hu=new L,Is=new Rn,mi=new _t,Oa=new L,xr=new L,om=new L,lm=new Rn,Gu=new L(1,0,0),Vu=new L(0,1,0),Wu=new L(0,0,1),Xu={type:"added"},cm={type:"removed"},Ls={type:"childadded",child:null},Ec={type:"childremoved",child:null},_n=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Hi,i=new Rn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ye}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(xr,Oa,this.up):mi.lookAt(Oa,xr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(mi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new L(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=em(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Tc(a,r,e+1/3),this.g=Tc(a,r,e),this.b=Tc(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=wn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){let i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return ht.workingToColorSpace(rn.copy(this),e),Math.round(it(rn.r*255,0,255))*65536+Math.round(it(rn.g*255,0,255))*256+Math.round(it(rn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(rn.copy(this),t);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=wn){ht.workingToColorSpace(rn.copy(this),e);let t=rn.r,i=rn.g,s=rn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Ba);let i=vc(Oi.h,Ba.h,t),s=vc(Oi.s,Ba.s,t),r=vc(Oi.l,Ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ke;Ke.NAMES=jd;var Br=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gs=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new L,gi=new L,wc=new L,_i=new L,Ds=new L,Ns=new L,qu=new L,Ac=new L,Rc=new L,Cc=new L,Pc=new It,Ic=new It,Lc=new It,yi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),gi.subVectors(i,t),wc.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(gi),l=Gn.dot(wc),c=gi.dot(gi),h=gi.dot(wc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Pc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,i),Lc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Pc,r.x),a.addScaledVector(Ic,r.y),a.addScaledVector(Lc,r.z),a}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),gi.subVectors(e,t),Gn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,i),Ns.subVectors(r,i),Ac.subVectors(e,i);let l=Ds.dot(Ac),c=Ns.dot(Ac);if(l<=0&&c<=0)return t.copy(i);Rc.subVectors(e,s);let h=Ds.dot(Rc),u=Ns.dot(Rc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Ds,a);Cc.subVectors(e,r);let f=Ds.dot(Cc),g=Ns.dot(Cc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ns,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return qu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(qu,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(i).addScaledVector(Ds,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),za.subVectors(this.max,vr),Us.subVectors(e.a,vr),Fs.subVectors(e.b,vr),Os.subVectors(e.c,vr),Bi.subVectors(Fs,Us),ki.subVectors(Os,Fs),hs.subVectors(Us,Os);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-hs.z,hs.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,hs.z,0,-hs.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-hs.y,hs.x,0];return!Dc(t,Us,Fs,Os,za)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,Us,Fs,Os,za))?!1:(Ha.crossVectors(Bi,ki),t=[Ha.x,Ha.y,Ha.z],Dc(t,Us,Fs,Os,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new L,new L,new L,new L,new L,new L,new L,new L],Vn=new L,ka=new ti,Us=new L,Fs=new L,Os=new L,Bi=new L,ki=new L,hs=new L,vr=new L,za=new L,Ha=new L,us=new L;function Dc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){us.fromArray(n,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=i.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bt=new L,Ga=new se,um=0,gn=class extends ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?kl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$d(e,this.array)}};var kr=class extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zr=class extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qe=class extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},dm=new ti,yr=new L,Nc=new L,bi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Nc)),this.expandByPoint(yr.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fm=0,Dn=new _t,Uc=new _n,Bs=new L,Tn=new ti,Mr=new ti,Yt=new L,Lt=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?zr:kr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Tn.min,Mr.min),Tn.expandByPoint(Yt),Yt.addVectors(Tn.max,Mr.max),Tn.expandByPoint(Yt)):(Tn.expandByPoint(Mr.min),Tn.expandByPoint(Mr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),Yt.add(Bs)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new L,l[N]=new L;let h=new L,u=new L,d=new L,f=new se,g=new se,y=new se,m=new L,p=new L;function x(N,w,I){c[N]=c[w]=c[I]=1,h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,w),y.fromBufferAttribute(r,I),u.sub(h),d.sub(h),g.sub(f),y.sub(f);let O=1/(g.x*y.y-y.x*g.y);isFinite(O)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(O),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(O),o[N].add(m),o[w].add(m),o[I].add(m),l[N].add(p),l[w].add(p),l[I].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,w=E.length;N<w;++N){let I=E[N],O=I.start,X=I.count;for(let C=O,B=O+X;C<B;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new L,R=new L,A=new L,_=new L;function b(N){A.fromBufferAttribute(s,N),_.copy(A);let w=o[N];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),R.crossVectors(_,w);let O=R.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,O)}for(let N=0,w=i.count;N<w;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new gn(d,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Yu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ki()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var hn=new L,Hr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?kl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$d(e,this.data.array)}},Fc=new L,pm=new L,mm=new Ye,Wn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Fc.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mm.getNormalMatrix(e),s=this.coplanarPoint(Fc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gm=0,Ei=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=rr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=la,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Wn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ti=class extends Ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,Sr=new L,zs=new L,Hs=new L,Gs=new se,br=new se,Qd=new _t,Va=new L,Er=new L,Wa=new L,Zu=new se,Oc=new se,Ju=new se,Gi=class extends _n{constructor(e=new Ti){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wo(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Hr(i,3,0,!1)),ks.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Qd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Hs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Xa(Va.set(-.5,-.5,0),Hs,a,zs,s,r),Xa(Er.set(.5,-.5,0),Hs,a,zs,s,r),Xa(Wa.set(.5,.5,0),Hs,a,zs,s,r),Zu.set(0,0),Oc.set(1,0),Ju.set(1,1);let o=e.ray.intersectTriangle(Va,Er,Wa,!1,Sr);if(o===null&&(Xa(Er.set(-.5,.5,0),Hs,a,zs,s,r),Oc.set(0,1),o=e.ray.intersectTriangle(Va,Wa,Er,!1,Sr),o===null))return;let l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:yi.getInterpolation(Sr,Va,Er,Wa,Zu,Oc,Ju,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Xa(n,e,t,i,s,r){Gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(br.x=r*Gs.x-s*Gs.y,br.y=s*Gs.x+r*Gs.y):br.copy(Gs),n.copy(e),n.x+=br.x,n.y+=br.y,n.applyMatrix4(Qd)}var vi=new L,Bc=new L,qa=new L,Ya=new L,Gr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(Bc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bc).addScaledVector(qa,d),f}intersectSphere(e,t){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=i.x-a.x,x=i.y-a.y,E=i.z-a.z,v=Math.abs(l),R=Math.abs(c),A=Math.abs(h),_,b,N,w,I,O,X,C,B,H,z,ie;if(v>=R&&v>=A?(N=l,O=u,B=g,ie=p,l>=0?(_=c,b=h,w=d,I=f,X=y,C=m,H=x,z=E):(_=h,b=c,w=f,I=d,X=m,C=y,H=E,z=x)):R>=A?(N=c,O=d,B=y,ie=x,c>=0?(_=h,b=l,w=f,I=u,X=m,C=g,H=E,z=p):(_=l,b=h,w=u,I=f,X=g,C=m,H=p,z=E)):(N=h,O=f,B=m,ie=E,h>=0?(_=l,b=c,w=u,I=d,X=g,C=y,H=p,z=x):(_=c,b=l,w=d,I=u,X=y,C=g,H=x,z=p)),N===0)return null;let Y=_/N,j=b/N,ne=1/N,we=w-Y*O,Be=I-j*O,J=X-Y*B,ge=C-j*B,ye=H-Y*ie,Re=z-j*ie,Se=ye*ge-Re*J,ze=we*Re-Be*ye,bt=J*Be-ge*we;if(s){if(Se<0||ze<0||bt<0)return null}else if((Se<0||ze<0||bt<0)&&(Se>0||ze>0||bt>0))return null;let Ge=Se+ze+bt;if(Ge===0)return null;let tt=ne*(Se*O+ze*B+bt*ie);return(Ge>0?tt<0:tt>0)?null:this.at(tt/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ku=new _t,ds=new Gr,Za=new bi,$u=new L,Ja=new L,Ka=new L,$a=new L,kc=new L,ja=new L,ju=new L,Qa=new L,Oe=class extends _n{constructor(e=new Lt,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(kc.fromBufferAttribute(u,e),a?ja.addScaledVector(kc,h):ja.addScaledVector(kc.sub(t),h))}t.add(ja)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Za.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Za,$u)===null||ds.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=E;v<R;v+=3){let A=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);s=eo(this,p,e,i,c,h,u,A,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=eo(this,a,e,i,c,h,u,x,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=E;v<R;v+=3){let A=v,_=v+1,b=v+2;s=eo(this,p,e,i,c,h,u,A,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,E=m+1,v=m+2;s=eo(this,a,e,i,c,h,u,x,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _m(n,e,t,i,s,r,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===si,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:n}}function eo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ja),n.getVertexPosition(l,Ka),n.getVertexPosition(c,$a);let h=_m(n,e,t,i,Ja,Ka,$a,ju);if(h){let u=new L;yi.getBarycoord(ju,Ja,Ka,$a,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};yi.getNormal(Ja,Ka,$a,d.normal),h.face=d,h.barycoord=u}return h}var Vr=class extends un{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Zt,h=Zt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class extends gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new _t,Qu=new _t,to=[],ed=new ti,xm=new _t,Tr=new Oe,wr=new bi,js=class extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),ed.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),wr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(i),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Qu.multiplyMatrices(i,Vs),Tr.matrixWorld=Qu,Tr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,rl,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new bi,vm=new se(.5,.5),no=new L,_s=class{constructor(e=new Wn,t=new Wn,i=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],x=r[12],E=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,p-g,R-x).normalize(),s[1].setComponents(c+a,f+h,p+g,R+x).normalize(),s[2].setComponents(c+o,f+u,p+y,R+E).normalize(),s[3].setComponents(c-o,f-u,p-y,R-E).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,R-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-v).normalize(),t===Nn)s[5].setComponents(c+l,f+d,p+m,R+v).normalize();else if(t===Dr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=vm.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},td=new _t,Ao=class n{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];td.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new _s),i[s].setFromProjectionMatrix(td,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ro=class extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nd=new _t,Yc=new Gr,io=new bi,so=new L,Xr=class extends _n{constructor(e=new Lt,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;nd.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);so.fromBufferAttribute(u,m),id(so,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)so.fromBufferAttribute(u,g),id(so,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function id(n,e,t,i,s,r,a){let o=Yc.distanceSqToPoint(n);if(o<t){let l=new L;Yc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qr=class extends un{constructor(e=[],t=Ss,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends un{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends un{constructor(e,t,i=Yn,s,r,a,o=Zt,l=Zt,c,h=Si,u=1){if(h!==Si&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yr=class extends wi{constructor(e,t=Yn,i=Ss,s,r,a=Zt,o=Zt,l,c=Si){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class n extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(y,m,p,x,E,v,R,A,_,b,N){let w=v/_,I=R/b,O=v/2,X=R/2,C=A/2,B=_+1,H=b+1,z=0,ie=0,Y=new L;for(let j=0;j<H;j++){let ne=j*I-X;for(let we=0;we<B;we++){let Be=we*w-O;Y[y]=Be*x,Y[m]=ne*E,Y[p]=C,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(we/_),u.push(1-j/b),z+=1}}for(let j=0;j<b;j++)for(let ne=0;ne<_;ne++){let we=d+ne+B*j,Be=d+ne+B*(j+1),J=d+(ne+1)+B*(j+1),ge=d+(ne+1)+B*j;l.push(we,Be,ge),l.push(Be,J,ge),ie+=6}o.addGroup(f,ie,N),f+=ie,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vi=class n extends Lt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class n extends Lt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function x(){let v=new L,R=new L,A=0,_=(t-e)/i;for(let b=0;b<=r;b++){let N=[],w=b/r,I=w*(t-e)+e;for(let O=0;O<=s;O++){let X=O/s,C=X*l+o,B=Math.sin(C),H=Math.cos(C);R.x=I*B,R.y=-w*i+m,R.z=I*H,u.push(R.x,R.y,R.z),v.set(B,_,H).normalize(),d.push(v.x,v.y,v.z),f.push(X,1-w),N.push(g++)}y.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let w=y[N][b],I=y[N+1][b],O=y[N+1][b+1],X=y[N][b+1];(e>0||N!==0)&&(h.push(w,I,X),A+=3),(t>0||N!==r-1)&&(h.push(I,O,X),A+=3)}c.addGroup(p,A,0),p+=A}function E(v){let R=g,A=new se,_=new L,b=0,N=v===!0?e:t,w=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let I=g;for(let O=0;O<=s;O++){let C=O/s*l+o,B=Math.cos(C),H=Math.sin(C);_.x=N*H,_.y=m*w,_.z=N*B,u.push(_.x,_.y,_.z),d.push(0,w,0),A.x=B*.5+.5,A.y=H*.5*w+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let X=R+O,C=I+O;v===!0?h.push(C,C+1,X):h.push(C+1,C,X),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ni=class n extends Tt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class n extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new L,v=new L,R=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],E),f(t[A+1],v),f(t[A+2],R),l(E,v,R,x)}function l(x,E,v,R){let A=R+1,_=[];for(let b=0;b<=A;b++){_[b]=[];let N=x.clone().lerp(v,b/A),w=E.clone().lerp(v,b/A),I=A-b;for(let O=0;O<=I;O++)O===0&&b===A?_[b][O]=N:_[b][O]=N.clone().lerp(w,O/I)}for(let b=0;b<A;b++)for(let N=0;N<2*(A-b)-1;N++){let w=Math.floor(N/2);N%2===0?(d(_[b][w+1]),d(_[b+1][w]),d(_[b][w])):(d(_[b][w+1]),d(_[b+1][w+1]),d(_[b+1][w]))}}function c(x){let E=new L;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(x),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let x=new L;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let v=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(v,1-R)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let E=a[x+0],v=a[x+2],R=a[x+4],A=Math.max(E,v,R),_=Math.min(E,v,R);A>.9&&_<.1&&(E<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,E){let v=x*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){let x=new L,E=new L,v=new L,R=new L,A=new se,_=new se,b=new se;for(let N=0,w=0;N<r.length;N+=9,w+=6){x.set(r[N+0],r[N+1],r[N+2]),E.set(r[N+3],r[N+4],r[N+5]),v.set(r[N+6],r[N+7],r[N+8]),A.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),b.set(a[w+4],a[w+5]),R.copy(x).add(E).add(v).divideScalar(3);let I=m(R);y(A,w+0,x,I),y(_,w+2,E,I),y(b,w+4,v,I)}}function y(x,E,v,R){R<0&&x.x===1&&(a[E]=x.x-1),v.x===0&&v.z===0&&(a[E]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],a=[],o=new L,l=new _t;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Qs=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends Qs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var sd=new L,rd=new L,zc=new Ah,Hc=new Ah,Gc=new Ah,Io=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rd.subVectors(s[0],s[1]).add(s[0]),c=rd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),zc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Hc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Gc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(zc.calc(l),Hc.calc(l),Gc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function ym(n,e){let t=1-n;return t*t*e}function Mm(n,e){return 2*(1-n)*n*e}function Sm(n,e){return n*n*e}function Cr(n,e,t,i){return ym(n,e)+Mm(n,t)+Sm(n,i)}function bm(n,e){let t=1-n;return t*t*t*e}function Em(n,e){let t=1-n;return 3*t*t*n*e}function Tm(n,e){return 3*(1-n)*n*n*e}function wm(n,e){return n*n*n*e}function Pr(n,e,t,i,s){return bm(n,e)+Em(n,t)+Tm(n,i)+wm(n,s)}var Jr=class extends Cn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends Cn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y),Pr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kr=class extends Cn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends Cn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Cn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Cn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ad(o,l.x,c.x,h.x,u.x),ad(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Zc=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Io,CubicBezierCurve:Jr,CubicBezierCurve3:Lo,EllipseCurve:Qs,LineCurve:Kr,LineCurve3:Do,QuadraticBezierCurve:$r,QuadraticBezierCurve3:No,SplineCurve:jr}),Uo=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Zc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Qr=class extends Uo{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Kr(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new $r(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Jr(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Qs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wi=class extends Qr{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Qr().fromJSON(s))}return this}};function Am(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ef(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Lm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ea(r,a,t,o,l,c,0),a}function ef(n,e,t,i,s){let r;if(s===Vm(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=od(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=od(a/i|0,n[a],n[a+1],r);return r&&er(r,r.next)&&(na(r),r=r.next),r}function xs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(er(t,t.next)||Pt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ea(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Om(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Cm(n,i,s,r):Rm(n)){e.push(l.i,n.i,c.i),na(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Pm(xs(n),e),ea(n,e,t,i,s,r,2)):a===2&&Im(n,e,t,i,s,r):ea(xs(n),e,t,i,s,r,1);break}}}function Rm(n){let e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ar(s,o,r,l,a,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Pt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),p=Jc(f,g,e,t,i),x=Jc(y,m,e,t,i),E=n.prevZ,v=n.nextZ;for(;E&&E.z>=p&&v&&v.z<=x;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ar(o,h,l,u,c,d,E.x,E.y)&&Pt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ar(o,h,l,u,c,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ar(o,h,l,u,c,d,E.x,E.y)&&Pt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ar(o,h,l,u,c,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!er(i,s)&&nf(i,t,t.next,s)&&ta(i,s)&&ta(s,i)&&(e.push(i.i,t.i,s.i),na(t),na(t.next),t=n=s),t=t.next}while(t!==n);return xs(t)}function Im(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zm(a,o)){let l=sf(a,o);a=xs(a,a.next),l=xs(l,l.next),ea(a,e,t,i,s,r,0),ea(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Lm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=ef(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(km(c))}s.sort(Dm);for(let r=0;r<s.length;r++)t=Nm(s[r],t);return t}function Dm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Nm(n,e){let t=Um(n,e);if(!t)return e;let i=sf(t,n);return xs(i,i.next),xs(t,t.next)}function Um(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(er(n,t))return t;do{if(er(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&tf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ta(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Fm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Fm(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function Om(n,e,t,i){let s=n;do s.z===0&&(s.z=Jc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bm(s)}function Bm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Jc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function km(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function tf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Ar(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&tf(n,e,t,i,s,r,a,o)}function zm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Hm(n,e)&&(ta(n,e)&&ta(e,n)&&Gm(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||er(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function er(n,e){return n.x===e.x&&n.y===e.y}function nf(n,e,t,i){let s=ao(Pt(n,e,t)),r=ao(Pt(n,e,i)),a=ao(Pt(t,i,n)),o=ao(Pt(t,i,e));return!!(s!==r&&a!==o||s===0&&ro(n,t,e)||r===0&&ro(n,i,e)||a===0&&ro(t,n,i)||o===0&&ro(t,e,i))}function ro(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ao(n){return n>0?1:n<0?-1:0}function Hm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&nf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ta(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function Gm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function sf(n,e){let t=Kc(n.i,n.x,n.y),i=Kc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function od(n,e,t,i){let s=Kc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vm(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var $c=class{static triangulate(e,t,i=2){return Am(e,t,i)}},ps=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ld(e),cd(i,e);let a=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,cd(i,t[l]);let o=$c.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ld(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function cd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var vs=class n extends Lt{constructor(e=new Wi([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Wm,E,v=!1,R,A,_,b;if(p){E=p.getSpacedPoints(h),v=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(h,te),A=new L,_=new L,b=new L}d||(m=0,f=0,g=0,y=0);let N=o.extractPoints(c),w=N.shape,I=N.holes;if(!ps.isClockWise(w)){w=w.reverse();for(let te=0,de=I.length;te<de;te++){let ce=I[te];ps.isClockWise(ce)&&(I[te]=ce.reverse())}}function X(te){let ce=10000000000000001e-36,Ae=te[0];for(let Me=1;Me<=te.length;Me++){let Je=Me%te.length,Ue=te[Je],rt=Ue.x-Ae.x,ot=Ue.y-Ae.y,ft=rt*rt+ot*ot,F=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ae.x),Math.abs(Ae.y)),Ft=ce*F*F;if(ft<=Ft){te.splice(Je,1),Me--;continue}Ae=Ue}}X(w),I.forEach(X);let C=I.length,B=w;for(let te=0;te<C;te++){let de=I[te];w=w.concat(de)}function H(te,de,ce){return de||Xe("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(de,ce)}let z=w.length;function ie(te,de,ce){let Ae,Me,Je,Ue=te.x-de.x,rt=te.y-de.y,ot=ce.x-te.x,ft=ce.y-te.y,F=Ue*Ue+rt*rt,Ft=Ue*ft-rt*ot;if(Math.abs(Ft)>Number.EPSILON){let nt=Math.sqrt(F),yt=Math.sqrt(ot*ot+ft*ft),_e=de.x-rt/nt,Ut=de.y+Ue/nt,He=ce.x-ft/yt,qe=ce.y+ot/yt,P=((He-_e)*ft-(qe-Ut)*ot)/(Ue*ft-rt*ot);Ae=_e+Ue*P-te.x,Me=Ut+rt*P-te.y;let M=Ae*Ae+Me*Me;if(M<=2)return new se(Ae,Me);Je=Math.sqrt(M/2)}else{let nt=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(nt=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(nt=!0):Math.sign(rt)===Math.sign(ft)&&(nt=!0),nt?(Ae=-rt,Me=Ue,Je=Math.sqrt(F)):(Ae=Ue,Me=rt,Je=Math.sqrt(F/2))}return new se(Ae/Je,Me/Je)}let Y=[];for(let te=0,de=B.length,ce=de-1,Ae=te+1;te<de;te++,ce++,Ae++)ce===de&&(ce=0),Ae===de&&(Ae=0),Y[te]=ie(B[te],B[ce],B[Ae]);let j=[],ne,we=Y.concat();for(let te=0,de=C;te<de;te++){let ce=I[te];ne=[];for(let Ae=0,Me=ce.length,Je=Me-1,Ue=Ae+1;Ae<Me;Ae++,Je++,Ue++)Je===Me&&(Je=0),Ue===Me&&(Ue=0),ne[Ae]=ie(ce[Ae],ce[Je],ce[Ue]);j.push(ne),we=we.concat(ne)}let Be;if(m===0)Be=ps.triangulateShape(B,I);else{let te=[],de=[];for(let ce=0;ce<m;ce++){let Ae=ce/m,Me=f*Math.cos(Ae*Math.PI/2),Je=g*Math.sin(Ae*Math.PI/2)+y;for(let Ue=0,rt=B.length;Ue<rt;Ue++){let ot=H(B[Ue],Y[Ue],Je);ze(ot.x,ot.y,-Me),Ae===0&&te.push(ot)}for(let Ue=0,rt=C;Ue<rt;Ue++){let ot=I[Ue];ne=j[Ue];let ft=[];for(let F=0,Ft=ot.length;F<Ft;F++){let nt=H(ot[F],ne[F],Je);ze(nt.x,nt.y,-Me),Ae===0&&ft.push(nt)}Ae===0&&de.push(ft)}}Be=ps.triangulateShape(te,de)}let J=Be.length,ge=g+y;for(let te=0;te<z;te++){let de=d?H(w[te],we[te],ge):w[te];v?(_.copy(R.normals[0]).multiplyScalar(de.x),A.copy(R.binormals[0]).multiplyScalar(de.y),b.copy(E[0]).add(_).add(A),ze(b.x,b.y,b.z)):ze(de.x,de.y,0)}for(let te=1;te<=h;te++)for(let de=0;de<z;de++){let ce=d?H(w[de],we[de],ge):w[de];v?(_.copy(R.normals[te]).multiplyScalar(ce.x),A.copy(R.binormals[te]).multiplyScalar(ce.y),b.copy(E[te]).add(_).add(A),ze(b.x,b.y,b.z)):ze(ce.x,ce.y,u/h*te)}for(let te=m-1;te>=0;te--){let de=te/m,ce=f*Math.cos(de*Math.PI/2),Ae=g*Math.sin(de*Math.PI/2)+y;for(let Me=0,Je=B.length;Me<Je;Me++){let Ue=H(B[Me],Y[Me],Ae);ze(Ue.x,Ue.y,u+ce)}for(let Me=0,Je=I.length;Me<Je;Me++){let Ue=I[Me];ne=j[Me];for(let rt=0,ot=Ue.length;rt<ot;rt++){let ft=H(Ue[rt],ne[rt],Ae);v?ze(ft.x,ft.y+E[h-1].y,E[h-1].x+ce):ze(ft.x,ft.y,u+ce)}}}ye(),Re();function ye(){let te=s.length/3;if(d){let de=0,ce=z*de;for(let Ae=0;Ae<J;Ae++){let Me=Be[Ae];bt(Me[2]+ce,Me[1]+ce,Me[0]+ce)}de=h+m*2,ce=z*de;for(let Ae=0;Ae<J;Ae++){let Me=Be[Ae];bt(Me[0]+ce,Me[1]+ce,Me[2]+ce)}}else{for(let de=0;de<J;de++){let ce=Be[de];bt(ce[2],ce[1],ce[0])}for(let de=0;de<J;de++){let ce=Be[de];bt(ce[0]+z*h,ce[1]+z*h,ce[2]+z*h)}}i.addGroup(te,s.length/3-te,0)}function Re(){let te=s.length/3,de=0;Se(B,de),de+=B.length;for(let ce=0,Ae=I.length;ce<Ae;ce++){let Me=I[ce];Se(Me,de),de+=Me.length}i.addGroup(te,s.length/3-te,1)}function Se(te,de){let ce=te.length;for(;--ce>=0;){let Ae=ce,Me=ce-1;Me<0&&(Me=te.length-1);for(let Je=0,Ue=h+m*2;Je<Ue;Je++){let rt=z*Je,ot=z*(Je+1),ft=de+Ae+rt,F=de+Me+rt,Ft=de+Me+ot,nt=de+Ae+ot;Ge(ft,F,Ft,nt)}}}function ze(te,de,ce){l.push(te),l.push(de),l.push(ce)}function bt(te,de,ce){tt(te),tt(de),tt(ce);let Ae=s.length/3,Me=x.generateTopUV(i,s,Ae-3,Ae-2,Ae-1);st(Me[0]),st(Me[1]),st(Me[2])}function Ge(te,de,ce,Ae){tt(te),tt(de),tt(Ae),tt(de),tt(ce),tt(Ae);let Me=s.length/3,Je=x.generateSideWallUV(i,s,Me-6,Me-3,Me-2,Me-1);st(Je[0]),st(Je[1]),st(Je[3]),st(Je[1]),st(Je[2]),st(Je[3])}function tt(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function st(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Xm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zc[s.type]().fromJSON(s)),new n(i,e.options)}},Wm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-g),new se(y,1-p)]:[new se(o,1-l),new se(h,1-u),new se(f,1-g),new se(m,1-p)]}};function Xm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ia=class n extends Co{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ii=class n extends Lt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new se,f=new L,g=new L,y=new L,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=t;x++){let E=i+x*h*s,v=Math.sin(E),R=Math.cos(E);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*v,u.y=e[A].y,u.z=e[A].x*R,a.push(u.x,u.y,u.z),d.x=x/t,d.y=A/(e.length-1),o.push(d.x,d.y);let _=l[3*A+0]*v,b=l[3*A+1],N=l[3*A+0]*R;c.push(_,b,N)}}for(let x=0;x<t;x++)for(let E=0;E<e.length-1;E++){let v=E+x*e.length,R=v,A=v+e.length,_=v+e.length+1,b=v+1;r.push(R,A,b),r.push(_,b,A)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Xi=class n extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*d-a;for(let E=0;E<c;E++){let v=E*u-r;g.push(v,-x,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let E=x+c*p,v=x+c*(p+1),R=x+1+c*(p+1),A=x+1+c*p;f.push(E,v,A),f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},tr=class n extends Lt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new L,g=new se;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let x=p+m,E=x,v=x+i+1,R=x+i+2,A=x+1;o.push(E,v,A),o.push(v,R,A)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xn=class n extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let x=[],E=p/i,v=a+E*o,R=e*Math.cos(v),A=Math.sqrt(e*e-R*R),_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let N=b/t,w=s+N*r;u.x=-A*Math.cos(w),u.y=R,u.z=A*Math.sin(w),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(N+_,1-E),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let E=h[p][x+1],v=h[p][x],R=h[p+1][x],A=h[p+1][x+1];(p!==0||a>0)&&f.push(E,v,A),(p!==i-1||l<Math.PI)&&f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sa=class n extends Lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,x,v),l.push(x,E,v)}this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(hd(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(hd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Es(n[t]);for(let s in i)e[s]=i[s]}return e}function hd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var zl={clone:Es,merge:on},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new It().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fo=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Oo=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function oo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var qi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends qi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:r=e,o=2*t-i;break;case qc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:a=e,l=2*i-t;break;case qc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[c+R]+E*a[l+R]+v*a[u+R];return r}},zo=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ho=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Go=class extends qi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,x=u[p],E=u[p+1],v=e*d+g*2,R=h[v],A=h[v+1],_=Km(i,t,x,R,s);r[g]=rf(_,y,E,A,m)}return r}};function rf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Jm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Km(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=rf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Jm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),oo(e.settings)&&(i.settings={inTangents:Ws(e.settings.inTangents,Array),outTangents:Ws(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case Vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;oo(this.settings)&&(ud(this.settings.inTangents,e),ud(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;oo(this.settings)&&(dd(this.settings.inTangents,e),dd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Qp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,oo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ud(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function dd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Mo;var Yi=class extends Pn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ir;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Pn{constructor(e,t,i,s){super(e,t,i,s)}};Vo.prototype.ValueTypeName="color";var Wo=class extends Pn{constructor(e,t,i,s){super(e,t,i,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ra=class extends Pn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Pn{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ir;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Pn{constructor(e,t,i,s){super(e,t,i,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},af=new Yo,Zo=class{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=new L,co=new Rn,jn=new L,ys=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,co,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(lo,co,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new L,fd=new se,pd=new se,an=class extends ys{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,fd,pd),t.subVectors(pd,fd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var nr=class extends ys{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Xs=-90,qs=1,ir=class extends _n{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new an(Xs,qs,e,t);r.layers=this.layers,this.add(r);let a=new an(Xs,qs,e,t);a.layers=this.layers,this.add(a);let o=new an(Xs,qs,e,t);o.layers=this.layers,this.add(o);let l=new an(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new an(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jo=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},aa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$m.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $m(){this._document.hidden===!1&&this.reset()}var Ch="\\[\\]\\.:\\/",jm=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",Qm="[^"+Ch.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",Ph),t0=/(WCOD+)?/.source.replace("WCOD",Qm),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),s0=new RegExp("^"+e0+t0+n0+i0+"$"),r0=["material","materials","bones","map"],jc=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);r0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=jc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lM=new Float32Array(1);var Fh=class Fh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Fh.prototype.isMatrix2=!0;var Qc=Fh;function Ih(n,e,t,i){let s=a0(i);switch(t){case xh:return n*e;case rl:return n*e/s.components*s.byteLength;case al:return n*e/s.components*s.byteLength;case Ji:return n*e*2/s.components*s.byteLength;case ol:return n*e*2/s.components*s.byteLength;case vh:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case ll:return n*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:case dl:return Math.max(n,16)*Math.max(e,8)/4;case cl:case ul:return Math.max(n,8)*Math.max(e,8)/2;case fl:case pl:case gl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ml:case pa:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Nl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ma:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a0(n){switch(n){case In:case ph:return{byteLength:1,components:1};case or:case mh:case dn:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Yn:case nl:case Fn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Rf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,L0=`#define PI 3.141592653589793
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
} // validated`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,ag=`uniform sampler2D dfgLUT;
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
}`,og=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
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
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform float backgroundBlurriness;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
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
}`,m_=`#if DEPTH_PACKING == 3200
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
}`,g_=`#define DISTANCE
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
}`,__=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,b_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
}`,T_=`#define LAMBERT
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
}`,w_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,R_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,P_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,L_=`#define STANDARD
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
}`,D_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,U_=`#define TOON
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
}`,F_=`uniform float size;
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,H_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:c0,alphahash_pars_fragment:h0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:_0,batching_vertex:x0,begin_vertex:v0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:b0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:I0,common:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:N0,displacementmap_vertex:U0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:B0,colorspace_pars_fragment:k0,envmap_fragment:z0,envmap_common_pars_fragment:H0,envmap_pars_fragment:G0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:eg,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:K0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:j0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:zg,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:Kg,skinnormal_vertex:$g,specularmap_fragment:jg,specularmap_pars_fragment:Qg,tonemapping_fragment:e_,tonemapping_pars_fragment:t_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:r_,uv_vertex:a_,worldpos_vertex:o_,background_vert:l_,background_frag:c_,backgroundCube_vert:h_,backgroundCube_frag:u_,cube_vert:d_,cube_frag:f_,depth_vert:p_,depth_frag:m_,distance_vert:g_,distance_frag:__,equirect_vert:x_,equirect_frag:v_,linedashed_vert:y_,linedashed_frag:M_,meshbasic_vert:S_,meshbasic_frag:b_,meshlambert_vert:E_,meshlambert_frag:T_,meshmatcap_vert:w_,meshmatcap_frag:A_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:P_,meshphong_frag:I_,meshphysical_vert:L_,meshphysical_frag:D_,meshtoon_vert:N_,meshtoon_frag:U_,points_vert:F_,points_frag:O_,shadow_vert:B_,shadow_frag:k_,sprite_vert:z_,sprite_frag:H_},Ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ai={basic:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:on([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:on([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:on([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:on([Ee.points,Ee.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:on([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:on([Ee.common,Ee.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:on([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:on([Ee.sprite,Ee.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:on([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:on([Ee.lights,Ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ai.physical={uniforms:on([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Hl={r:0,b:0,g:0},G_=new _t,Cf=new Ye;Cf.set(-1,0,0,0,1,0,0,0,1);function V_(n,e,t,i,s,r){let a=new Ke(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let v=x.backgroundBlurriness>0;E=e.get(E,v)}return E}function g(x){let E=!1,v=f(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),E=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,E){let v=f(E);v&&v.isCubeTexture?(c===void 0&&(c=new Oe(new Ht(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Es(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cf),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Oe(new Xi(2,2),new Dt({name:"BackgroundMaterial",uniforms:Es(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(Hl,Rh(n)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:y,dispose:p}}function W_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(I,O,X,C,B){let H=!1,z=u(I,C,X,O);r!==z&&(r=z,c(r.object)),H=f(I,C,X,B),H&&g(I,C,X,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(I,O,X,C),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function u(I,O,X,C){let B=C.wireframe===!0,H=i[O.id];H===void 0&&(H={},i[O.id]=H);let z=I.isInstancedMesh===!0?I.id:0,ie=H[z];ie===void 0&&(ie={},H[z]=ie);let Y=ie[X.id];Y===void 0&&(Y={},ie[X.id]=Y);let j=Y[B];return j===void 0&&(j=d(l()),Y[B]=j),j}function d(I){let O=[],X=[],C=[];for(let B=0;B<t;B++)O[B]=0,X[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,O,X,C){let B=r.attributes,H=O.attributes,z=0,ie=X.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let ne=B[Y],we=H[Y];if(we===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(we=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(we=I.instanceColor)),ne===void 0||ne.attribute!==we||we&&ne.data!==we.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function g(I,O,X,C){let B={},H=O.attributes,z=0,ie=X.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let ne=H[Y];ne===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));let we={};we.attribute=ne,ne&&ne.data&&(we.data=ne.data),B[Y]=we,z++}r.attributes=B,r.attributesNum=z,r.index=C}function y(){let I=r.newAttributes;for(let O=0,X=I.length;O<X;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){let X=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;X[I]=1,C[I]===0&&(n.enableVertexAttribArray(I),C[I]=1),B[I]!==O&&(n.vertexAttribDivisor(I,O),B[I]=O)}function x(){let I=r.newAttributes,O=r.enabledAttributes;for(let X=0,C=O.length;X<C;X++)O[X]!==I[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function E(I,O,X,C,B,H,z){z===!0?n.vertexAttribIPointer(I,O,X,B,H):n.vertexAttribPointer(I,O,X,C,B,H)}function v(I,O,X,C){y();let B=C.attributes,H=X.getAttributes(),z=O.defaultAttributeValues;for(let ie in H){let Y=H[ie];if(Y.location>=0){let j=B[ie];if(j===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let ne=j.normalized,we=j.itemSize,Be=e.get(j);if(Be===void 0)continue;let J=Be.buffer,ge=Be.type,ye=Be.bytesPerElement,Re=ge===n.INT||ge===n.UNSIGNED_INT||j.gpuType===nl;if(j.isInterleavedBufferAttribute){let Se=j.data,ze=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,bt=j.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ge=0;Ge<Y.locationSize;Ge++)p(Y.location+Ge,Se.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<Y.locationSize;Ge++)m(Y.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ge=0;Ge<Y.locationSize;Ge++)E(Y.location+Ge,we/Y.locationSize,ge,ne,ze*ye,(bt+we/Y.locationSize*Ge)*ye,Re)}else{if(j.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)p(Y.location+Se,j.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Se=0;Se<Y.locationSize;Se++)E(Y.location+Se,we/Y.locationSize,ge,ne,we*ye,we/Y.locationSize*Se*ye,Re)}}else if(z!==void 0){let ne=z[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}x()}function R(){N();for(let I in i){let O=i[I];for(let X in O){let C=O[X];for(let B in C){let H=C[B];for(let z in H)h(H[z].object),delete H[z];delete C[B]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;let O=i[I.id];for(let X in O){let C=O[X];for(let B in C){let H=C[B];for(let z in H)h(H[z].object),delete H[z];delete C[B]}}delete i[I.id]}function _(I){for(let O in i){let X=i[O];for(let C in X){let B=X[C];if(B[I.id]===void 0)continue;let H=B[I.id];for(let z in H)h(H[z].object),delete H[z];delete B[I.id]}}}function b(I){for(let O in i){let X=i[O],C=I.isInstancedMesh===!0?I.id:0,B=X[C];if(B!==void 0){for(let H in B){let z=B[H];for(let ie in z)h(z[ie].object),delete z[ie];delete B[H]}delete X[C],Object.keys(X).length===0&&delete i[O]}}}function N(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function X_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Zn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==In&&_!==Fn&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:v,maxSamples:R,samples:A}}function Y_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Wn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,E=x*4,v=p.clippingState||null;l.value=v,v=h(g,d,E,f);for(let R=0;R!==E;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=f;E!==y;++E,v+=4)a.copy(u[E]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var xa=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Ai});r.uniforms.tEquirect.value=t;let a=new Oe(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Jt),new ir(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},of=256,Z_=3,J_=20,Pf=256,If=16,K_=3,$_=new L,j_=new Ke,Vl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ir(1,10,null),this._boxMesh=new Oe(new Ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=$_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(j_));let m=new ir(i,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(of,Jd(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===ar?this._setSize(e.image.length===0?of:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=lf(e,!1,!1),i=Math.log2(e)-Z_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=lf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=cf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Q_(),this._integrationMaterial=ex());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/If);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-K_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Pf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=tx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function lf(n,e,t){return new xa(n,{minFilter:Ri,generateMipmaps:e,type:dn,colorSpace:An,depthBuffer:t})}function va(n,e,t){return new Dt({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Gt,blending:Ai,depthTest:!1,depthWrite:!1})}function Q_(){return va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pf}u

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
	`)}function ex(){return va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:If}},`

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
	`)}function tx(){return va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${J_}
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
	`)}function cf(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function hf(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Qo||f===el)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new xa(g.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Qo||f===el,y=f===Ss||f===ar;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Vl(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||y&&x&&l(x)?(i===null&&(i=new Vl(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Qo?d.mapping=Ss:f===el&&(d.mapping=ar),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function ix(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Rr("WebGLRenderer: "+i+" extension not supported."),s}}}function sx(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function u(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=y!==null?y.array.length:m.array.length/3-1,E=m.count>=65535?zr:kr,v=new E(Math.ceil(x/3)*6,1),R=v.array;if(y!==null){let _=y.array;p=y.version;for(let b=0,N=0;b<x;b+=3){let w=_[b+0],I=_[b+1],O=_[b+2];R[N++]=w,R[N++]=I,R[N++]=I,R[N++]=O,R[N++]=O,R[N++]=w}}else{p=m.version;for(let _=0,b=0;_<x;_+=3){let N=_+0,w=_+1,I=_+2;R[b++]=N,R[b++]=w,R[b++]=w,R[b++]=I,R[b++]=I,R[b++]=N}}v.version=p;let A=r.get(g);A&&e.remove(A),r.set(g,v)}function d(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function rx(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ax(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ox(n,e,t){let i=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let v=o.attributes.position.count*E,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*R*4*u),_=new Fr(A,v,R,u);_.type=Fn,_.needsUpdate=!0;let b=E*4;for(let w=0;w<u;w++){let I=m[w],O=p[w],X=x[w],C=v*R*4*w;for(let B=0;B<I.count;B++){let H=B*b;f===!0&&(s.fromBufferAttribute(I,B),A[C+H+0]=s.x,A[C+H+1]=s.y,A[C+H+2]=s.z,A[C+H+3]=0),g===!0&&(s.fromBufferAttribute(O,B),A[C+H+4]=s.x,A[C+H+5]=s.y,A[C+H+6]=s.z,A[C+H+7]=0),y===!0&&(s.fromBufferAttribute(X,B),A[C+H+8]=s.x,A[C+H+9]=s.y,A[C+H+10]=s.z,A[C+H+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new se(v,R)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function lx(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var cx={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function hx(n,e,t,i,s,r){let a=new Kt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Lt;h.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let u=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(h,u),f=new nr(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,x=null,E=[],v=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),l!==null&&l.setSize(R,A);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(R,A)}},this.setEffects=function(R){E=R,v=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new Kt(A,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(A,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new wi(A,_),r===!0&&(c.format=Ci,c.type=bs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<E.length;N++){let w=E[N];w.setSize&&w.setSize(A,_),b&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(R,A){if(m||R.toneMapping===Un&&E.length===0)return!1;if(x=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return v===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=Un,!0},this.hasRenderPass=function(){return v},this.end=function(R,A){R.toneMapping=p,m=!0;let _=a,b=o;for(let N=0;N<E.length;N++){let w=E[N];w.enabled!==!1&&(w.render(R,b,_,A),w.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,u.defines={},ht.getTransfer(g)===gt&&(u.defines.SRGB_TRANSFER="");let N=cx[y];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(x),R.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Lf=new un,Df=new wi(1,1),Nf=new Yr(1),Uf=new Fr,Ff=new To,Of=new qr,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function cr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xl(n,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function mx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;mf.set(i),n.uniformMatrix2fv(this.addr,!1,mf),Wt(t,i)}}function gx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;pf.set(i),n.uniformMatrix3fv(this.addr,!1,pf),Wt(t,i)}}function _x(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;ff.set(i),n.uniformMatrix4fv(this.addr,!1,ff),Wt(t,i)}}function xx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function Mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function Sx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function ql(n){return n.version===0&&(n.compareFunction=bh,n.needsUpdate=!0),n}function wx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ql(Df):r=Lf,t.setTexture2D(e||r,s)}function Ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ff,s)}function Rx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ql(Nf):r=Of,t.setTextureCube(e||r,s)}function Cx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Uf,s)}function Px(n){switch(n){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return bx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Ix(n,e){n.uniform1fv(this.addr,e)}function Lx(n,e){let t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dx(n,e){let t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nx(n,e){let t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ux(n,e){let t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fx(n,e){let t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ox(n,e){let t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bx(n,e){n.uniform1iv(this.addr,e)}function kx(n,e){n.uniform2iv(this.addr,e)}function zx(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function Gx(n,e){n.uniform1uiv(this.addr,e)}function Vx(n,e){n.uniform2uiv(this.addr,e)}function Wx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function qx(n,e,t){let i=this.cache,s=e.length,r=Xl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ql(Df):a=Lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Yx(n,e,t){let i=this.cache,s=e.length,r=Xl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ff,r[a])}function Zx(n,e,t){let i=this.cache,s=e.length,r=Xl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ql(Nf):a=Of;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Jx(n,e,t){let i=this.cache,s=e.length,r=Xl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uf,r[a])}function Kx(n){switch(n){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Ux;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}var kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}},zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}},Hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function gf(n,e){n.seq.push(e),n.map[e.id]=e}function $x(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),a=Oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gf(t,c===void 0?new kh(o,n,e):new zh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Hh(o),gf(t,u)),t=u}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$x(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function _f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var jx=37297,Qx=0;function ev(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var xf=new Ye;function tv(n){ht._getMatrix(xf,ht.workingColorSpace,n);let e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Lr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ev(n.getShaderSource(e),o)}else return r}function nv(n,e){let t=tv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iv={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function sv(n,e){let t=iv[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gl=new L;function rv(){ht.getLuminanceCoefficients(Gl);let n=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function ov(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _a(n){return n!==""}function yf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(cv,hv)}function hv(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gh(t)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(n){return n.replace(uv,dv)}function dv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var fv={[oa]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function pv(n){return fv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mv={[ar]:"ENVMAP_MODE_REFRACTION"};function gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _v={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function xv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_v[n.combine]||"ENVMAP_BLENDING_NONE"}function vv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=pv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gv(t),u=xv(t),d=av(t),f=ov(r),g=s.createProgram(),y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(y=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?et.tonemapping_pars_fragment:"",t.toneMapping!==Un?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,nv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),a=Gh(a),a=yf(a,t),a=Mf(a,t),o=Gh(o),o=yf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+y+a,E=p+m+o,v=_f(s,s.VERTEX_SHADER,x),R=_f(s,s.FRAGMENT_SHADER,E);s.attachShader(g,v),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(w){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(R)||"",C=I.trim(),B=O.trim(),H=X.trim(),z=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,v,R);else{let Y=vf(s,v,"vertex"),j=vf(s,R,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+Y+`
`+j)}else C!==""?Ve("WebGLProgram: Program Info Log:",C):(B===""||H==="")&&(ie=!1);ie&&(w.diagnostics={runnable:z,programLog:C,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:m}})}s.deleteShader(v),s.deleteShader(R),_=new lr(s,g),b=lv(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,jx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=R,this}var yv=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wh(e),t.set(e,i)),i}},Wh=class{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}};function Mv(n){return n===Ji||n===pa||n===ma}function Sv(n,e,t,i,s,r){let a=new Or,o=new Vh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,N,w,I,O){let X=w.fog,C=I.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||B,H),ie=d[_.type],Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let j=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=j!==void 0?j.length:0,we=0;C.morphAttributes.position!==void 0&&(we=1),C.morphAttributes.normal!==void 0&&(we=2),C.morphAttributes.color!==void 0&&(we=3);let Be,J,ge,ye;if(ie){let be=ai[ie];Be=be.vertexShader,J=be.fragmentShader}else{Be=_.vertexShader,J=_.fragmentShader;let be=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,be,xt),ge=be.id,ye=xt.id}let Re=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),ze=I.isInstancedMesh===!0,bt=I.isBatchedMesh===!0,Ge=!!_.map,tt=!!_.matcap,st=!!z,te=st&&z.isPMREMTexture===!0,de=!!_.aoMap,ce=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Je=!!_.displacementMap,Ue=!!_.emissiveMap,rt=!!_.metalnessMap,ot=!!_.roughnessMap,ft=_.anisotropy>0,F=_.clearcoat>0,Ft=_.diffuseRoughness>0,nt=_.dispersion>0,yt=_.retroreflectivity>0,_e=_.iridescence>0,Ut=_.sheen>0,He=_.transmission>0,qe=ft&&!!_.anisotropyMap,P=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,V=F&&!!_.clearcoatRoughnessMap,re=Ft&&!!_.diffuseRoughnessMap,ee=_e&&!!_.iridescenceMap,he=_e&&!!_.iridescenceThicknessMap,xe=Ut&&!!_.sheenColorMap,K=Ut&&!!_.sheenRoughnessMap,$=!!_.specularMap,fe=!!_.specularColorMap,D=!!_.specularIntensityMap,Q=He&&!!_.transmissionMap,Z=He&&!!_.thicknessMap,pe=!!_.gradientMap,oe=!!_.alphaMap,ue=_.alphaTest>0,Fe=!!_.alphaHash,je=!!_.extensions,ae=Un;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ae=n.toneMapping);let ke=te?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,$e={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:J,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:bt,batchingColor:bt&&I._colorsTexture!==null,instancing:ze,instancingColor:ze&&I.instanceColor!==null,instancingMorph:ze&&I.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:tt,envMap:st,envMapMode:st&&z.mapping,envMapPMREM:te,envMapMaxLod:te?ke.length-1:null,envMapSize:te?ke[0].width:null,aoMap:de,lightMap:ce,bumpMap:Ae,normalMap:Me,displacementMap:Je,emissiveMap:Ue,normalMapObjectSpace:Me&&_.normalMapType===Bd,normalMapTangentSpace:Me&&_.normalMapType===yh,packedNormalMap:Me&&_.normalMapType===yh&&Mv(_.normalMap.format),metalnessMap:rt,roughnessMap:ot,anisotropy:ft,anisotropyMap:qe,clearcoat:F,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:V,diffuseRoughness:Ft,diffuseRoughnessMap:re,dispersion:nt,retroreflection:yt,iridescence:_e,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:Ut,sheenColorMap:xe,sheenRoughnessMap:K,specularMap:$,specularColorMap:fe,specularIntensityMap:D,transmission:He,transmissionMap:Q,thicknessMap:Z,gradientMap:pe,opaque:_.transparent===!1&&_.blending===rr&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:ue,alphaHash:Fe,combine:_.combine,mapUv:Ge&&f(_.map.channel),aoMapUv:de&&f(_.aoMap.channel),lightMapUv:ce&&f(_.lightMap.channel),bumpMapUv:Ae&&f(_.bumpMap.channel),normalMapUv:Me&&f(_.normalMap.channel),displacementMapUv:Je&&f(_.displacementMap.channel),emissiveMapUv:Ue&&f(_.emissiveMap.channel),metalnessMapUv:rt&&f(_.metalnessMap.channel),roughnessMapUv:ot&&f(_.roughnessMap.channel),anisotropyMapUv:qe&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:fe&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:oe&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Me||ft),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(Ge||oe),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:we,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function y(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(b,_),p(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let b=d[_.type],N;if(b){let w=ai[b];N=zl.clone(w.uniforms)}else N=_.uniforms;return N}function E(_,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new vv(n,b,_,s),c.push(N),h.set(b,N)),N}function v(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:x,acquireProgram:E,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:A}}function bv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},n[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=m,x.group=p),e++,x}function l(d,f,g,y,m,p,x){x.reversedDepth===!0&&(m=-m);let E=o(d,f,g,y,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(d,f,g,y,m,p){let x=o(d,f,g,y,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||Ev),i.length>1&&i.sort(f||Ef),s.length>1&&s.sort(f||Ef)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Tv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Tf,n.set(i,[a])):s>=r.length?(a=new Tf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ke};break;case"SpotLight":t={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Av(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Rv=0;function Cv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pv(n){let e=new wv,t=Av(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new _t,a=new _t;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,E=0,v=0,R=0,A=0,_=0,b=0,N=0,w=0;c.sort(Cv);for(let O=0,X=c.length;O<X;O++){let C=c[O],B=C.color,H=C.intensity,z=C.distance,ie=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ji?ie=C.shadow.map.texture:ie=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*H,u+=B.g*H,d+=B.b*H;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],H);w++}else if(C.isSunLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,ne=t.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=ie;let we=j.getViewportCount();for(let Be=0;Be<we;Be++)i.sunShadowMatrix[y+Be]=j.getMatrix(Be),i.sunShadowCascade[y+Be]=j._cascadeData[Be];y+=we,g++}i.sun[f]=Y,f++}else if(C.isDirectionalLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,ne=t.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=C.shadow.matrix,R++}i.directional[m]=Y,m++}else if(C.isSpotLight){let Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(B).multiplyScalar(H),Y.distance=z,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[x]=Y;let j=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,j.updateMatrices(C),C.castShadow&&N++),i.spotLightMatrix[x]=j.matrix,C.castShadow){let ne=t.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.spotShadow[x]=ne,i.spotShadowMap[x]=ie,_++}x++}else if(C.isRectAreaLight){let Y=e.get(C);Y.color.copy(B).multiplyScalar(H),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=Y,E++}else if(C.isPointLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let j=C.shadow,ne=t.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=C.shadow.matrix,A++}i.point[p]=Y,p++}else if(C.isHemisphereLight){let Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(H),Y.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[v]=Y,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==E||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==R||I.numPointShadows!==A||I.numSpotShadows!==_||I.numSpotMaps!==b||I.numLightProbes!==w)&&(i.sun.length=f,i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=w,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=x,I.rectAreaLength=E,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=R,I.numPointShadows=A,I.numSpotShadows=_,I.numSpotMaps=b,I.numLightProbes=w,i.version=Rv++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let v=c[x];if(v.isSunLight){let R=i.sun[u];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(v.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let R=i.rectArea[y];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function wf(n){let e=new Pv(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Iv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wf(n),e.set(s,[o])):r>=a.length?(o=new wf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`,Nv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Uv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Af=new _t,ga=new L,Bh=new L;function Fv(n,e,t){let i=new _s,s=new se,r=new se,a=new It,o=new Oo,l=new Bo,c={},h=t.maxTextureSize,u={[si]:Gt,[Gt]:si,[vn]:vn},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let p=this.type;this.render=function(A,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===_d&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let N=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=p!==this.type;X&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=A.length;C<B;C++){let H=A[C],z=H.shadow;if(z===void 0){Ve("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ie=z.getFrameExtents();s.multiply(ie),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,z.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===sr){if(H.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Kt(s.x,s.y,{format:Ji,type:dn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new wi(s.x,s.y,Fn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=Si,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt}else H.isPointLight?(z.map=new xa(s.x),z.map.depthTexture=new Yr(s.x,Yn)):(z.map=new Kt(s.x,s.y),z.map.depthTexture=new wi(s.x,s.y,Yn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=Si,this.type===oa?(z.map.depthTexture.compareFunction=Y?Sh:Mh,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();H.isPointLight!==!0&&z.updateMatrices(H,b);let ne=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let we=0;we<j;we++){let Be=z.getCamera(we);if(H.isPointLight){let J=z.camera,ge=z.matrix,ye=H.distance||J.far;ye!==J.far&&(J.far=ye,J.updateProjectionMatrix()),ga.setFromMatrixPosition(H.matrixWorld),J.position.copy(ga),Bh.copy(J.position),Bh.add(Nv[we]),J.up.copy(Uv[we]),J.lookAt(Bh),J.updateMatrixWorld(),ge.makeTranslation(-ga.x,-ga.y,-ga.z),Af.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Af,J.coordinateSystem,J.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,we),n.clear();else{we===0&&(n.setRenderTarget(z.map),n.clear());let J=z.getViewport(we);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}i=z.getFrustum(we),v(_,b,Be,H,ne,this.type)}z.isPointLightShadow!==!0&&this.type===sr&&x(z,b),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(N,w,I)};function x(A,_){let b=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Kt(s.x,s.y,{format:Ji,type:dn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(_,null,b,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(_,null,b,f,y,null)}function E(A,_,b,N){let w=null,I=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)w=I;else if(w=b.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=w.uuid,X=_.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let B=C[X];B===void 0&&(B=w.clone(),C[X]=B,_.addEventListener("dispose",R)),w=B}if(w.visible=_.visible,w.wireframe=_.wireframe,N===sr?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=n.properties.get(w);O.light=b}return w}function v(A,_,b,N,w,I){if(A.visible===!1)return;if(A.layers.test(w)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===sr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let C=e.update(A),B=A.material;if(Array.isArray(B)){let H=C.groups;for(let z=0,ie=H.length;z<ie;z++){let Y=H[z],j=B[Y.materialIndex];if(j&&j.visible){let ne=E(A,j,N,I);A.onBeforeShadow(n,A,_,b,C,ne,Y),n.renderBufferDirect(b,null,C,ne,A,Y),A.onAfterShadow(n,A,_,b,C,ne,Y)}}}else if(B.visible){let H=E(A,B,N,I);A.onBeforeShadow(n,A,_,b,C,H,null),n.renderBufferDirect(b,null,C,H,A,null),A.onAfterShadow(n,A,_,b,C,H,null)}}let X=A.children;for(let C=0,B=X.length;C<B;C++)v(X[C],_,b,N,w,I)}function R(A){A.target.removeEventListener("dispose",R);for(let b in c){let N=c[b],w=A.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}function Ov(n,e){function t(){let D=!1,Q=new It,Z=null,pe=new It(0,0,0,0);return{setMask:function(oe){Z!==oe&&!D&&(n.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){D=oe},setClear:function(oe,ue,Fe,je,ae){ae===!0&&(oe*=je,ue*=je,Fe*=je),Q.set(oe,ue,Fe,je),pe.equals(Q)===!1&&(n.clearColor(oe,ue,Fe,je),pe.copy(Q))},reset:function(){D=!1,Z=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,Q=!1,Z=null,pe=null,oe=null;return{setReversed:function(ue){if(Q!==ue){let Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Q=ue;let je=oe;oe=null,this.setClear(je)}},getReversed:function(){return Q},setTest:function(ue){ue?Se(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!D&&(n.depthMask(ue),Z=ue)},setFunc:function(ue){if(Q&&(ue=Zd[ue]),pe!==ue){switch(ue){case fo:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case xo:n.depthFunc(n.GREATER);break;case vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ue}},setLocked:function(ue){D=ue},setClear:function(ue){oe!==ue&&(oe=ue,Q&&(ue=1-ue),n.clearDepth(ue))},reset:function(){D=!1,Z=null,pe=null,oe=null,Q=!1}}}function s(){let D=!1,Q=null,Z=null,pe=null,oe=null,ue=null,Fe=null,je=null,ae=null;return{setTest:function(ke){D||(ke?Se(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(ke){Q!==ke&&!D&&(n.stencilMask(ke),Q=ke)},setFunc:function(ke,$e,be){(Z!==ke||pe!==$e||oe!==be)&&(n.stencilFunc(ke,$e,be),Z=ke,pe=$e,oe=be)},setOp:function(ke,$e,be){(ue!==ke||Fe!==$e||je!==be)&&(n.stencilOp(ke,$e,be),ue=ke,Fe=$e,je=be)},setLocked:function(ke){D=ke},setClear:function(ke){ae!==ke&&(n.clearStencil(ke),ae=ke)},reset:function(){D=!1,Q=null,Z=null,pe=null,oe=null,ue=null,Fe=null,je=null,ae=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,E=null,v=null,R=null,A=null,_=null,b=new Ke(0,0,0),N=0,w=!1,I=null,O=null,X=null,C=null,B=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ie=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=ie>=2);let j=null,ne={},we=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),J=new It().fromArray(we),ge=new It().fromArray(Be);function ye(D,Q,Z,pe){let oe=new Uint8Array(4),ue=n.createTexture();n.bindTexture(D,ue),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Z;Fe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(Q+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ue}let Re={};Re[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),a.setFunc(Zs),Ae(!1),Me(eh),Se(n.CULL_FACE),de(Ai);function Se(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ze(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function bt(D,Q){return d[D]!==Q?(n.bindFramebuffer(D,Q),d[D]=Q,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Q),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ge(D,Q){let Z=g,pe=!1;if(D){Z=f.get(Q),Z===void 0&&(Z=[],f.set(Q,Z));let oe=D.textures;if(Z.length!==oe.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Fe=oe.length;ue<Fe;ue++)Z[ue]=n.COLOR_ATTACHMENT0+ue;Z.length=oe.length,pe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,pe=!0);pe&&n.drawBuffers(Z)}function tt(D){return y!==D?(n.useProgram(D),y=D,!0):!1}let st={[Ms]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[vd]:n.FUNC_REVERSE_SUBTRACT};st[yd]=n.MIN,st[Md]=n.MAX;let te={[Sd]:n.ZERO,[jo]:n.ONE,[bd]:n.SRC_COLOR,[sh]:n.SRC_ALPHA,[Cd]:n.SRC_ALPHA_SATURATE,[Ad]:n.DST_COLOR,[Td]:n.DST_ALPHA,[Ed]:n.ONE_MINUS_SRC_COLOR,[la]:n.ONE_MINUS_SRC_ALPHA,[Rd]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Pd]:n.CONSTANT_COLOR,[Id]:n.ONE_MINUS_CONSTANT_COLOR,[Ld]:n.CONSTANT_ALPHA,[Dd]:n.ONE_MINUS_CONSTANT_ALPHA};function de(D,Q,Z,pe,oe,ue,Fe,je,ae,ke){if(D===Ai){m===!0&&(ze(n.BLEND),m=!1);return}if(m===!1&&(Se(n.BLEND),m=!0),D!==$o){if(D!==p||ke!==w){if((x!==Ms||R!==Ms)&&(n.blendEquation(n.FUNC_ADD),x=Ms,R=Ms),ke)switch(D){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFunc(n.ONE,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",D);break}else switch(D){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",D);break}E=null,v=null,A=null,_=null,b.set(0,0,0),N=0,p=D,w=ke}return}oe=oe||Q,ue=ue||Z,Fe=Fe||pe,(Q!==x||oe!==R)&&(n.blendEquationSeparate(st[Q],st[oe]),x=Q,R=oe),(Z!==E||pe!==v||ue!==A||Fe!==_)&&(n.blendFuncSeparate(te[Z],te[pe],te[ue],te[Fe]),E=Z,v=pe,A=ue,_=Fe),(je.equals(b)===!1||ae!==N)&&(n.blendColor(je.r,je.g,je.b,ae),b.copy(je),N=ae),p=D,w=!1}function ce(D,Q){D.side===vn?ze(n.CULL_FACE):Se(n.CULL_FACE);let Z=D.side===Gt;Q&&(Z=!Z),Ae(Z),D.blending===rr&&D.transparent===!1?de(Ai):de(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(D){I!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),I=D)}function Me(D){D!==md?(Se(n.CULL_FACE),D!==O&&(D===eh?n.cullFace(n.BACK):D===gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),O=D}function Je(D){D!==X&&(z&&n.lineWidth(D),X=D)}function Ue(D,Q,Z){D?(Se(n.POLYGON_OFFSET_FILL),(C!==Q||B!==Z)&&(C=Q,B=Z,a.getReversed()&&(Q=-Q,Z=-Z),n.polygonOffset(Q,Z))):ze(n.POLYGON_OFFSET_FILL)}function rt(D){D?Se(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function ot(D){D===void 0&&(D=n.TEXTURE0+H-1),j!==D&&(n.activeTexture(D),j=D)}function ft(D,Q,Z){Z===void 0&&(j===null?Z=n.TEXTURE0+H-1:Z=j);let pe=ne[Z];pe===void 0&&(pe={type:void 0,texture:void 0},ne[Z]=pe),(pe.type!==D||pe.texture!==Q)&&(j!==Z&&(n.activeTexture(Z),j=Z),n.bindTexture(D,Q||Re[D]),pe.type=D,pe.texture=Q)}function F(){let D=ne[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ft(){try{n.compressedTexImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function yt(){try{n.texSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function _e(){try{n.texSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function qe(){try{n.texStorage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function P(){try{n.texStorage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function M(){try{n.texImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function V(){try{n.texImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function re(D){return u[D]!==void 0?u[D]:n.getParameter(D)}function ee(D,Q){u[D]!==Q&&(n.pixelStorei(D,Q),u[D]=Q)}function he(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function xe(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function K(D,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let pe=Z.get(D);pe===void 0&&(pe=n.getUniformBlockIndex(Q,D.name),n.uniformBlockBinding(Q,pe,pe),Z.set(D,pe))}function $(D,Q,Z){let oe=c.get(Q).get(D);l[oe]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,Z),l[oe]=Z)}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,ne={},d={},l={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,E=null,v=null,R=null,A=null,_=null,b=new Ke(0,0,0),N=0,w=!1,I=null,O=null,X=null,C=null,B=null,J.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:ze,bindFramebuffer:bt,drawBuffers:Ge,useProgram:tt,setBlending:de,setMaterial:ce,setFlipSided:Ae,setCullFace:Me,setLineWidth:Je,setPolygonOffset:Ue,setScissorTest:rt,activeTexture:ot,bindTexture:ft,unbindTexture:F,compressedTexImage2D:Ft,compressedTexImage3D:nt,texImage2D:M,texImage3D:V,pixelStorei:ee,getParameter:re,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:qe,texStorage3D:P,texSubImage2D:yt,texSubImage3D:_e,compressedTexSubImage2D:Ut,compressedTexSubImage3D:He,scissor:he,viewport:xe,reset:fe}}function Bv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(P=>g.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,M){return m?new OffscreenCanvas(P,M):Nr("canvas")}function x(P,M,V){let re=1,ee=qe(P);if((ee.width>V||ee.height>V)&&(re=V/Math.max(ee.width,ee.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(re*ee.width),xe=Math.floor(re*ee.height);d===void 0&&(d=p(he,xe));let K=M?p(he,xe):d;return K.width=he,K.height=xe,K.getContext("2d").drawImage(P,0,0,he,xe),Ve("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+he+"x"+xe+")."),K}else return"data"in P&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function E(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,M,V,re,ee,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe;re&&(xe=e.get("EXT_texture_norm16"),xe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8),V===n.UNSIGNED_SHORT&&xe&&(K=xe.R16_EXT),V===n.SHORT&&xe&&(K=xe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),M===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8),V===n.UNSIGNED_SHORT&&xe&&(K=xe.RG16_EXT),V===n.SHORT&&xe&&(K=xe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_SHORT&&xe&&(K=xe.RGB16_EXT),V===n.SHORT&&xe&&(K=xe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){let $=he?Lr:ht.getTransfer(ee);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=$===gt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&xe&&(K=xe.RGBA16_EXT),V===n.SHORT&&xe&&(K=xe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(P,M){let V;return P?M===null||M===Yn||M===bs?V=n.DEPTH24_STENCIL8:M===Fn?V=n.DEPTH32F_STENCIL8:M===or&&(V=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yn||M===bs?V=n.DEPTH_COMPONENT24:M===Fn?V=n.DEPTH_COMPONENT32F:M===or&&(V=n.DEPTH_COMPONENT16),V}function b(P,M){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function N(P){let M=new WeakRef(P);i.get(P).__ref=M,g.add(M),y.register(P,M,M)}function w(P){let M=i.get(P).__ref;M!==void 0&&(g.delete(M),y.unregister(M))}function I(P){X(P.target)}function O(P){C(P.target)}function X(P){P.removeEventListener("dispose",I),w(P),H(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function C(P){P.removeEventListener("dispose",O),w(P),ie(P)}function B(){for(let P of g){let M=P.deref();M!==void 0&&(M.isRenderTarget===!0?C(M):X(M))}g.clear(),u.clear()}function H(P){let M=i.get(P);if(M.__webglInit===void 0)return;let V=P.source,re=f.get(V);if(re){let ee=re[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(P),Object.keys(re).length===0&&f.delete(V)}i.remove(P)}function z(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let V=P.source,re=f.get(V);delete re[M.__cacheKey],a.memory.textures--}function ie(P){let M=i.get(P);M.__depthDisposeCallback&&M.__depthDisposeCallback();let V=P.depthTexture;if(V&&V.renderTarget===P&&X(V),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let he=0;he<M.__webglFramebuffer[ee].length;he++)n.deleteFramebuffer(M.__webglFramebuffer[ee][he]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let re=P.textures;for(let ee=0,he=re.length;ee<he;ee++){let xe=i.get(re[ee]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(re[ee])}i.remove(P)}let Y=0;function j(){Y=0}function ne(){return Y}function we(P){Y=P}function Be(){let P=Y;return P>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,P}function J(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ge(P,M){let V=i.get(P);if(P.isVideoTexture&&Ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let re=P.image;if(re===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,P,M);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function ye(P,M){let V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){ce(V,P,M);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function Re(P,M){let V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){ce(V,P,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function Se(P,M){let V=i.get(P);if(P.version>0&&V.__version!==P.version){Ae(V,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}let ze={[ms]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},bt={[Zt]:n.NEAREST,[Fd]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[tl]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Ge={[zd]:n.NEVER,[bh]:n.ALWAYS,[Hd]:n.LESS,[Mh]:n.LEQUAL,[Gd]:n.EQUAL,[Sh]:n.GEQUAL,[Vd]:n.GREATER,[Wd]:n.NOTEQUAL};function tt(P,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===tl||M.magFilter===ca||M.magFilter===Ri||M.minFilter===Jt||M.minFilter===tl||M.minFilter===ca||M.minFilter===Ri)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ze[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ze[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ze[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,bt[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==ca&&M.minFilter!==Ri||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function st(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",I),N(M));let re=M.source,ee=f.get(re);ee===void 0&&(ee={},f.set(re,ee));let he=J(M);if(he!==P.__cacheKey){ee[he]===void 0&&(ee[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[he].usedTimes++;let xe=ee[P.__cacheKey];xe!==void 0&&(ee[P.__cacheKey].usedTimes--,xe.usedTimes===0&&z(M)),P.__cacheKey=he,P.__webglTexture=ee[he].texture}return V}function te(P,M,V){return Math.floor(Math.floor(P/V)/M)}function de(P,M,V,re){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,re,M.data);else{he.sort((D,Q)=>D.start-Q.start);let xe=0;for(let D=1;D<he.length;D++){let Q=he[xe],Z=he[D],pe=Q.start+Q.count,oe=te(Z.start,M.width,4),ue=te(Q.start,M.width,4);Z.start<=pe+1&&oe===ue&&te(Z.start+Z.count-1,M.width,4)===oe?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++xe,he[xe]=Z)}he.length=xe+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let D=0,Q=he.length;D<Q;D++){let Z=he[D],pe=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),ue=pe%M.width,Fe=Math.floor(pe/M.width),je=oe,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,ue,Fe,je,ae,V,re,M.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function ce(P,M,V){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);let ee=st(P,M),he=M.source;t.bindTexture(re,P.__webglTexture,n.TEXTURE0+V);let xe=i.get(he);if(he.version!==xe.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=ht.getPrimaries(ht.workingColorSpace),ke=M.colorSpace===Pi?null:ht.getPrimaries(M.colorSpace),$e=M.colorSpace===Pi||ae===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let $=x(M.image,!1,s.maxTextureSize);$=He(M,$);let fe=r.convert(M.format,M.colorSpace),D=r.convert(M.type),Q=A(M.internalFormat,fe,D,M.normalized,M.colorSpace,M.isVideoTexture);tt(re,M);let Z,pe=M.mipmaps,oe=M.isVideoTexture!==!0,ue=xe.__version===void 0||ee===!0,Fe=he.dataReady,je=b(M,$);if(M.isDepthTexture)Q=_(M.format===Ci,M.type),ue&&(oe?t.texStorage2D(n.TEXTURE_2D,1,Q,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,fe,D,null));else if(M.isDataTexture)if(pe.length>0){oe&&ue&&t.texStorage2D(n.TEXTURE_2D,je,Q,pe[0].width,pe[0].height);for(let ae=0,ke=pe.length;ae<ke;ae++)Z=pe[ae],oe?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,fe,D,Z.data):t.texImage2D(n.TEXTURE_2D,ae,Q,Z.width,Z.height,0,fe,D,Z.data);M.generateMipmaps=!1}else oe?(ue&&t.texStorage2D(n.TEXTURE_2D,je,Q,$.width,$.height),Fe&&de(M,$,fe,D)):t.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,fe,D,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Q,pe[0].width,pe[0].height,$.depth);for(let ae=0,ke=pe.length;ae<ke;ae++)if(Z=pe[ae],M.format!==Zn)if(fe!==null)if(oe){if(Fe)if(M.layerUpdates.size>0){let $e=Ih(Z.width,Z.height,M.format,M.type);for(let be of M.layerUpdates){let xt=Z.data.subarray(be*$e/Z.data.BYTES_PER_ELEMENT,(be+1)*$e/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,be,Z.width,Z.height,1,fe,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,$.depth,fe,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Q,Z.width,Z.height,$.depth,0,Z.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,$.depth,fe,D,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Q,Z.width,Z.height,$.depth,0,fe,D,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{oe&&ue&&t.texStorage2D(n.TEXTURE_2D,je,Q,pe[0].width,pe[0].height);for(let ae=0,ke=pe.length;ae<ke;ae++)Z=pe[ae],M.format!==Zn?fe!==null?oe?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,fe,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Q,Z.width,Z.height,0,Z.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,fe,D,Z.data):t.texImage2D(n.TEXTURE_2D,ae,Q,Z.width,Z.height,0,fe,D,Z.data)}else if(M.isDataArrayTexture)if(oe){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Q,$.width,$.height,$.depth),Fe)if(M.layerUpdates.size>0){let ae=Ih($.width,$.height,M.format,M.type);for(let ke of M.layerUpdates){let $e=$.data.subarray(ke*ae/$.data.BYTES_PER_ELEMENT,(ke+1)*ae/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,$.width,$.height,1,fe,D,$e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,D,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,fe,D,$.data);else if(M.isData3DTexture)oe?(ue&&t.texStorage3D(n.TEXTURE_3D,je,Q,$.width,$.height,$.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,D,$.data)):t.texImage3D(n.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,fe,D,$.data);else if(M.isFramebufferTexture){if(ue)if(oe)t.texStorage2D(n.TEXTURE_2D,je,Q,$.width,$.height);else{let ae=$.width,ke=$.height;for(let $e=0;$e<je;$e++)t.texImage2D(n.TEXTURE_2D,$e,Q,ae,ke,0,fe,D,null),ae>>=1,ke>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),$.parentNode!==ae){ae.appendChild($),u.add(M),ae.onpaint=ke=>{let $e=ke.changedElements;for(let be of u)$e.includes(be.image)&&(be.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let $e=n.RGBA,be=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$e,be,xt,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(oe&&ue){let ae=qe(pe[0]);t.texStorage2D(n.TEXTURE_2D,je,Q,ae.width,ae.height)}for(let ae=0,ke=pe.length;ae<ke;ae++)Z=pe[ae],oe?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,fe,D,Z):t.texImage2D(n.TEXTURE_2D,ae,Q,fe,D,Z);M.generateMipmaps=!1}else if(oe){if(ue){let ae=qe($);t.texStorage2D(n.TEXTURE_2D,je,Q,ae.width,ae.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,D,$)}else t.texImage2D(n.TEXTURE_2D,0,Q,fe,D,$);E(M)&&M.mipmapsAutoUpdate===!0&&v(re),xe.__version=he.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ae(P,M,V){if(M.image.length!==6)return;let re=st(P,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);let he=i.get(ee);if(ee.version!==he.__version||re===!0){t.activeTexture(n.TEXTURE0+V);let xe=ht.getPrimaries(ht.workingColorSpace),K=M.colorSpace===Pi?null:ht.getPrimaries(M.colorSpace),$=M.colorSpace===Pi||xe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let fe=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let be=0;be<6;be++)!fe&&!D?Q[be]=x(M.image[be],!0,s.maxCubemapSize):Q[be]=D?M.image[be].image:M.image[be],Q[be]=He(M,Q[be]);let Z=Q[0],pe=r.convert(M.format,M.colorSpace),oe=r.convert(M.type),ue=A(M.internalFormat,pe,oe,M.normalized,M.colorSpace),Fe=M.isVideoTexture!==!0,je=he.__version===void 0||re===!0,ae=ee.dataReady,ke=b(M,Z);tt(n.TEXTURE_CUBE_MAP,M);let $e;if(M.isDepthTexture){if(ue=_(M.format===Ci,M.type),je)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ue,Z.width,Z.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,Z.width,Z.height,0,pe,oe,null)}else if(fe){Fe&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ue,Z.width,Z.height);for(let be=0;be<6;be++){$e=Q[be].mipmaps;for(let xt=0;xt<$e.length;xt++){let Xt=$e[xt];M.format!==Zn?pe!==null?Fe?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,0,0,Xt.width,Xt.height,pe,Xt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,ue,Xt.width,Xt.height,0,Xt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,0,0,Xt.width,Xt.height,pe,oe,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,ue,Xt.width,Xt.height,0,pe,oe,Xt.data)}}}else{if($e=M.mipmaps,Fe&&je){$e.length>0&&ke++;let be=qe(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ue,be.width,be.height)}for(let be=0;be<6;be++)if(D){Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Q[be].width,Q[be].height,pe,oe,Q[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,Q[be].width,Q[be].height,0,pe,oe,Q[be].data);for(let xt=0;xt<$e.length;xt++){let Ni=$e[xt].image[be].image;Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,0,0,Ni.width,Ni.height,pe,oe,Ni.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,ue,Ni.width,Ni.height,0,pe,oe,Ni.data)}}else{Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,pe,oe,Q[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,pe,oe,Q[be]);for(let xt=0;xt<$e.length;xt++){let Xt=$e[xt];Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,0,0,pe,oe,Xt.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,ue,pe,oe,Xt.image[be])}}}E(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),he.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Me(P,M,V,re,ee,he){let xe=r.convert(V.format,V.colorSpace),K=r.convert(V.type),$=A(V.internalFormat,xe,K,V.normalized,V.colorSpace),fe=i.get(M),D=i.get(V);if(D.__renderTarget=M,!fe.__hasExternalTextures){let Q=Math.max(1,M.width>>he),Z=Math.max(1,M.height>>he);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,he,$,Q,Z,M.depth,0,xe,K,null):t.texImage2D(ee,he,$,Q,Z,0,xe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),_e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,D.__webglTexture,0,yt(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,D.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(P,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){let re=M.depthTexture,ee=re&&re.isDepthTexture?re.type:null,he=_(M.stencilBuffer,ee),xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(M),he,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(M),he,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,he,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,P)}else{let re=M.textures;for(let ee=0;ee<re.length;ee++){let he=re[ee],xe=r.convert(he.format,he.colorSpace),K=r.convert(he.type),$=A(he.internalFormat,xe,K,he.normalized,he.colorSpace);_e(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(M),$,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(M),$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(P,M,V){let re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(M.depthTexture);ee.__renderTarget=M;let he=re?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||he.width!==M.width||he.height!==M.height)&&(he.width=M.width,he.height=M.height,M.depthTexture.needsUpdate=!0),re?Se(M.depthTexture,0):ge(M.depthTexture,0);let xe=ee.__webglTexture,K=yt(M),$=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,fe=M.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Si)_e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,$,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,fe,$,xe,0);else if(M.depthTexture.format===Ci)_e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,$,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,fe,$,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(P){let M=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let re=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",ee)};re.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=re}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let re=0;re<6;re++)Ue(M.__webglFramebuffer[re],P,re);else P.texture.mipmaps.length>0?Ue(M.__webglFramebuffer[0],P,0):Ue(M.__webglFramebuffer,P,0);else if(V){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=n.createRenderbuffer(),Je(M.__webglDepthbuffer[re],P,!1);else{let ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Je(M.__webglDepthbuffer,P,!1);else{let ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(P,M,V){let re=i.get(P);M!==void 0&&Me(re.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&rt(P)}function ft(P){let M=P.texture,V=i.get(P),re=i.get(M);P.addEventListener("dispose",O),N(P);let ee=P.textures,he=P.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let $=0;$<M.mipmaps.length;$++)V.__webglFramebuffer[K][$]=n.createFramebuffer()}else V.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(xe)for(let K=0,$=ee.length;K<$;K++){let fe=i.get(ee[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&_e(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){let $=ee[K];V.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let fe=r.convert($.format,$.colorSpace),D=r.convert($.type),Q=A($.internalFormat,fe,D,$.normalized,$.colorSpace,P.isXRRenderTarget===!0),Z=yt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Q,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,V.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),tt(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)Me(V.__webglFramebuffer[K][$],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else Me(V.__webglFramebuffer[K],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let K=0,$=ee.length;K<$;K++){let fe=ee[K],D=i.get(fe),Q=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,D.__webglTexture),tt(Q,fe),Me(V.__webglFramebuffer,P,fe,n.COLOR_ATTACHMENT0+K,Q,0),E(fe)&&v(Q)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,re.__webglTexture),tt(K,M),M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)Me(V.__webglFramebuffer[$],P,M,n.COLOR_ATTACHMENT0,K,$);else Me(V.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,K,0);E(M)?v(K):M.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&rt(P)}function F(P){let M=P.textures;for(let V=0,re=M.length;V<re;V++){let ee=M[V];if(E(ee)&&ee.mipmapsAutoUpdate===!0){let he=R(P),xe=i.get(ee).__webglTexture;t.bindTexture(he,xe),v(he),t.unbindTexture()}}}let Ft=[];function nt(P){if(P.samples>0){if(_e(P)===!1){let M=P.textures,V=P.width,re=P.height,ee=n.COLOR_BUFFER_BIT,he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(P),K=M.length>1;if(K)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let D=i.get(M[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,V,re,0,0,V,re,ee,n.NEAREST),l===!0&&(Ft.length=0,Ft.push(n.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ft.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let D=i.get(M[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function yt(P){return Math.min(s.maxSamples,P.samples)}function _e(P){let M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function He(P,M){let V=P.colorSpace,re=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==An&&V!==Pi&&(ht.getTransfer(V)===gt?(re!==Zn||ee!==In)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",V)),M}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=j,this.getTextureUnits=ne,this.setTextureUnits=we,this.setTexture2D=ge,this.setTexture2DArray=ye,this.setTexture3D=Re,this.setTextureCube=Se,this.rebindTextures=ot,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=_e,this.dispose=B}function kv(n,e){function t(i,s=Pi){let r,a=ht.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===nl)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===vh)return n.RGB;if(i===Zn)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===rl)return n.RED;if(i===al)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===ha||i===ua||i===da||i===fa)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===hl||i===ul||i===dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fl||i===pl||i===ml||i===gl||i===_l||i===pa||i===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fl||i===pl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ml)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===gl)return r.COMPRESSED_R11_EAC;if(i===_l)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vl||i===yl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Nl||i===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Dl)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fl||i===Ol||i===ma||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Dt({vertexShader:zv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends ei{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Xh,p={},x=t.getContextAttributes(),E=null,v=null,R=[],A=[],_=new se,b=null,N=null,w=new an;w.viewport=new It;let I=new an;I.viewport=new It;let O=[w,I],X=new Jo,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=R[J];return ge===void 0&&(ge=new $s,R[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=R[J];return ge===void 0&&(ge=new $s,R[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=R[J];return ge===void 0&&(ge=new $s,R[J]=ge),ge.getHandSpace()};function H(J){let ge=A.indexOf(J.inputSource);if(ge===-1)return;let ye=R[ge];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<R.length;J++){let ge=A[J];ge!==null&&(A[J]=null,R[J].disconnect(ge))}C=null,B=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),N!==null){let J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Ci:Si,Re=x.stencil?bs:Yn);let ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kt(d.textureWidth,d.textureHeight,{format:Zn,type:In,depthTexture:new wi(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let ge=0;ge<J.removed.length;ge++){let ye=J.removed[ge],Re=A.indexOf(ye);Re>=0&&(A[Re]=null,R[Re].disconnect(ye))}for(let ge=0;ge<J.added.length;ge++){let ye=J.added[ge],Re=A.indexOf(ye);if(Re===-1){for(let ze=0;ze<R.length;ze++)if(ze>=A.length){A.push(ye),Re=ze;break}else if(A[ze]===null){A[ze]=ye,Re=ze;break}if(Re===-1)break}let Se=R[Re];Se&&Se.connect(ye)}}function Y(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ge=J.near,ye=J.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),X.near=I.near=w.near=ge,X.far=I.far=w.far=ye,(C!==X.near||B!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),C=X.near,B=X.far),X.layers.mask=J.layers.mask|6,w.layers.mask=X.layers.mask&-5,I.layers.mask=X.layers.mask&-3;let Re=J.parent,Se=X.cameras;Y(X,Re);for(let ze=0;ze<Se.length;ze++)Y(Se[ze],Re);X.projectionMatrix.copy(w.projectionMatrix),X.projectionMatrixInverse.copy(w.projectionMatrixInverse),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),j(J,X,Re)};function j(J,ge,ye){ye===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=So*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(J){return p[J]};let ne=null;function we(J,ge){if(h=ge.getViewerPose(c||a),g=ge,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Re=!1;ye.length!==X.cameras.length&&(X.cameras.length=0,Re=!0);for(let Ge=0;Ge<ye.length;Ge++){let tt=ye[Ge],st=null;if(f!==null)st=f.getViewport(tt);else{let de=u.getViewSubImage(d,tt);st=de.viewport,Ge===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let te=O[Ge];te===void 0&&(te=new an,te.layers.enable(Ge),te.viewport=new It,O[Ge]=te),te.matrix.fromArray(tt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(tt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(st.x,st.y,st.width,st.height),Ge===0&&(X.matrix.copy(te.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Re===!0&&X.cameras.push(te)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Ge=u.getDepthInformation(ye[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let Ge=0;Ge<ye.length;Ge++){let tt=ye[Ge].camera;if(tt){let st=p[tt];st||(st=new Zr,p[tt]=st);let te=u.getCameraImage(tt);st.sourceTexture=te}}}}for(let ye=0;ye<R.length;ye++){let Re=A[ye],Se=R[ye];Re!==null&&Se!==void 0&&Se.update(Re,ge,c||a)}ne&&ne(J,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}let Be=new Rf;Be.setAnimationLoop(we),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}},Gv=new _t,Bf=new Ye;Bf.set(-1,0,0,0,1,0,0,0,1);function Vv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),E=x.envMap,v=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wv(n,e,t,i){let s={},r={};function a(x,E){let v=E.program;i.uniformBlockBinding(x,v,s[x.id])}function o(x,E){let v=s[x.id];v===void 0&&(g(x),v=l(x),s[x.id]=v,x.addEventListener("dispose",m));let R=E.program;i.updateUBOMapping(x,R);let A=e.render.frame;r[x.id]!==A&&(c(x),r[x.id]=A)}function l(x){let E=n.createBuffer(),v=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,v,R),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(x){let E=s[x.id],v=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,_=v.length;A<_;A++){let b=v[A];if(Array.isArray(b))for(let N=0,w=b.length;N<w;N++)h(b[N],A,N,R);else h(b,A,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,E,v,R){if(d(x,E,v,R)===!0){let A=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let N=0;N<_.length;N++){let w=_[N],I=y(w,!0);u(w,x.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,x.__data)}}function u(x,E,v){typeof x=="number"||typeof x=="boolean"?E[v]=x:x.isMatrix3?(E[v]=x.elements[0],E[v+1]=x.elements[1],E[v+2]=x.elements[2],E[v+3]=0,E[v+4]=x.elements[3],E[v+5]=x.elements[4],E[v+6]=x.elements[5],E[v+7]=0,E[v+8]=x.elements[6],E[v+9]=x.elements[7],E[v+10]=x.elements[8],E[v+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-v),v):x.toArray(E,v)}function d(x,E,v,R){let A=x.value,_=E+"_"+v;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let b=R[_],N=!1;for(let w=0;w<A.length;w++)f(A[w],b,w)===!0&&(N=!0);return N}return f(A,R,_)}function f(x,E,v){if(E[v]===void 0)return typeof x=="number"||typeof x=="boolean"?E[v]=x:ArrayBuffer.isView(x)?E[v]=x.slice():E[v]=x.clone(),!0;{let R=E[v];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(x){let E=x.uniforms,v=0,R=16;for(let _=0,b=E.length;_<b;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let w=0,I=N.length;w<I;w++){let O=N[w],X=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(E[_])||Array.isArray(O.value),B=v;for(let z=0,ie=X.length;z<ie;z++){let Y=X[z],j=y(Y,C),ne=v%R,we=ne%j.boundary,Be=ne+we;v+=we,Be!==0&&R-Be<j.storage&&(v+=R-Be),z===0&&(B=v),v+=j.storage}let H=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new H((v-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let A=v%R;return A>0&&(v+=R-A),x.__size=v,x.__cache={},this}function y(x,E){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(x){let E=x.target;E.removeEventListener("dispose",m),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}var Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function qv(){return ri===null&&(ri=new Vr(Xv,16,16,Ji,dn),ri.name="DFG_LUT",ri.minFilter=Jt,ri.magFilter=Jt,ri.wrapS=Qn,ri.wrapT=Qn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Wl=class{constructor(e={}){let{canvas:t=Xd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([ll,ol,al]),p=new Set([In,Yn,or,bs,il,sl]),x=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],b=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1,O=null,X=null,C=null,B=null;this._outputColorSpace=wn;let H=0,z=0,ie=null,Y=-1,j=null,ne=new It,we=new It,Be=null,J=new Ke(0),ge=0,ye=t.width,Re=t.height,Se=1,ze=null,bt=null,Ge=new It(0,0,ye,Re),tt=new It(0,0,ye,Re),st=!1,te=new _s,de=new Ao,ce=!1,Ae=!1,Me=new _t,Je=new L,Ue=new It,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function ft(){return ie===null?Se:1}let F=i;function Ft(S,U){return t.getContext(S,U)}let nt,yt,_e,Ut,He,qe,P,M,V,re,ee,he,xe,K,$,fe,D,Q,Z,pe,oe,ue,Fe;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){let U="webgl2";if(F=Ft(U,S),F===null)throw Ft(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(S){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Xe("WebGLRenderer: "+S.message),S}function je(){nt=new ix(F),nt.init(),oe=new kv(F,nt),yt=new q_(F,nt,e,oe),_e=new Ov(F,nt),yt.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),X=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),Ut=new ax(F),He=new bv,qe=new Bv(F,nt,_e,He,yt,oe,Ut),P=new nx(w),M=new l0(F),ue=new W_(F,M),V=new sx(F,M,Ut,ue),re=new lx(F,V,M,ue,Ut),Q=new ox(F,yt,qe),$=new Y_(He),ee=new Sv(w,P,nt,yt,ue,$),he=new Vv(w,He),xe=new Tv,K=new Iv(nt),D=new V_(w,P,_e,re,g,l),fe=new Fv(w,re,yt),Fe=new Wv(F,Ut,yt,_e),Z=new X_(F,nt,Ut),pe=new rx(F,nt,Ut),Ut.programs=ee.programs,w.capabilities=yt,w.extensions=nt,w.properties=He,w.renderLists=xe,w.shadowMap=fe,w.state=_e,w.info=Ut}y!==In&&(N=new hx(y,t.width,t.height,o,s,r));let ae=new qh(w,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(S){S!==void 0&&(Se=S,this.setSize(ye,Re,!1))},this.getSize=function(S){return S.set(ye,Re)},this.setSize=function(S,U,q=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=S,Re=U,t.width=Math.floor(S*Se),t.height=Math.floor(U*Se),q===!0&&(t.style.width=S+"px",t.style.height=U+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ye*Se,Re*Se).floor()},this.setDrawingBufferSize=function(S,U,q){ye=S,Re=U,Se=q,t.width=Math.floor(S*q),t.height=Math.floor(U*q),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(y===In){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Ge)},this.setViewport=function(S,U,q,G){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,U,q,G),_e.viewport(ne.copy(Ge).multiplyScalar(ft()).round())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,U,q,G){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,U,q,G),_e.scissor(we.copy(tt).multiplyScalar(ft()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){_e.setScissorTest(st=S)},this.setOpaqueSort=function(S){ze=S},this.setTransparentSort=function(S){bt=S},this.getClearColor=function(S){return S.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,q=!0){let G=0;if(S){let W=!1;if(ie!==null){let ve=ie.texture.format;W=m.has(ve)}if(W){let ve=ie.texture.type,Ce=p.has(ve),me=D.getClearColor(),Te=D.getClearAlpha(),De=me.r,Ze=me.g,lt=me.b;Ce?(x[0]=De,x[1]=Ze,x[2]=lt,x[3]=Te,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=De,E[1]=Ze,E[2]=lt,E[3]=Te,F.clearBufferiv(F.COLOR,0,E))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",be,!1),D.dispose(),xe.dispose(),K.dispose(),qe.dispose(),He.dispose(),P.dispose(),re.dispose(),V.dispose(),ue.dispose(),Fe.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Tu),ae.removeEventListener("sessionend",wu),os.stop()};function ke(S){S.preventDefault(),Ur("WebGLRenderer: Context Lost."),I=!0}function $e(){Ur("WebGLRenderer: Context Restored."),I=!1;let S=Ut.autoReset,U=fe.enabled,q=fe.autoUpdate,G=fe.needsUpdate,W=fe.type;je(),Ut.autoReset=S,fe.enabled=U,fe.autoUpdate=q,fe.needsUpdate=G,fe.type=W}function be(S){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function xt(S){let U=S.target;U.removeEventListener("dispose",xt),Xt(U)}function Xt(S){Ni(S),He.remove(S)}function Ni(S){let U=He.get(S).programs;U!==void 0&&(U.forEach(function(q){ee.releaseProgram(q)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,q,G,W,ve){U===null&&(U=rt);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=Jp(S,U,q,G,W);_e.setMaterial(G,Ce);let Te=q.index,De=1;if(G.wireframe===!0){if(Te=V.getWireframeAttribute(q),Te===void 0)return;De=2}let Ze=q.drawRange,lt=q.attributes.position,Pe=Ze.start*De,ct=(Ze.start+Ze.count)*De;ve!==null&&(Pe=Math.max(Pe,ve.start*De),ct=Math.min(ct,(ve.start+ve.count)*De)),Te!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Te.count)):lt!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,lt.count));let Ot=ct-Pe;if(Ot<0||Ot===1/0)return;ue.setup(W,G,me,q,Te);let St,Mt=Z;if(Te!==null&&(St=M.get(Te),Mt=pe,Mt.setIndex(St)),W.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*ft()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(W.isLine){let tn=G.linewidth;tn===void 0&&(tn=1),_e.setLineWidth(tn*ft()),W.isLineSegments?Mt.setMode(F.LINES):W.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else W.isPoints?Mt.setMode(F.POINTS):W.isSprite&&Mt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let tn=W._multiDrawStarts,Ie=W._multiDrawCounts,cn=W._multiDrawCount,pt=Te?M.get(Te).bytesPerElement:1,ls=He.get(G).currentProgram.getUniforms();for(let nn=0;nn<cn;nn++)ls.setValue(F,"_gl_DrawID",nn),Mt.render(tn[nn]/pt,Ie[nn])}else if(W.isInstancedMesh)Mt.renderInstances(Pe,Ot,W.count);else if(q.isInstancedBufferGeometry){let tn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,tn);Mt.renderInstances(Pe,Ot,Ie)}else Mt.render(Pe,Ot)};function Eu(S,U,q,G){O!==null&&S.isNodeMaterial&&O.setObject(G,S),ce===!0&&$.setState(S,q,!1),S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,_r(S,U,G),S.side=si,S.needsUpdate=!0,_r(S,U,G),S.side=vn):_r(S,U,G)}this.compile=function(S,U,q=null){q===null&&(q=S),O!==null&&O.renderStart(S,U,q),A=K.get(q),A.init(U),b.push(A),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),S!==q&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),Ae=this.localClippingEnabled,ce=$.init(this.clippingPlanes,Ae),ce===!0&&$.setGlobalState(this.clippingPlanes,U),O!==null&&fe.render(A.state.shadowsArray,q,U);let G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ve=W.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){let me=ve[Ce];Eu(me,q,U,W),G.add(me)}else Eu(ve,q,U,W),G.add(ve)}),A=b.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(S,U,q=null){let G=this.compile(S,U,q);return new Promise(W=>{function ve(){if(G.forEach(function(Ce){let Te=He.get(Ce).currentProgram;(Te===void 0||Te.isReady())&&G.delete(Ce)}),G.size===0){W(S);return}setTimeout(ve,10)}nt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let gc=null;function Yp(S){gc&&gc(S)}function Tu(){os.stop()}function wu(){os.start()}let os=new Rf;os.setAnimationLoop(Yp),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(S){gc=S,ae.setAnimationLoop(S),S===null?os.stop():os.start()},ae.addEventListener("sessionstart",Tu),ae.addEventListener("sessionend",wu),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(S,U);let q=ae.enabled===!0&&ae.isPresenting===!0,G=N!==null&&(ie===null||q)&&N.begin(w,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,U,ie),A=K.get(S,b.length),A.init(U),A.state.textureUnits=qe.getTextureUnits(),b.push(A),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?de.setFromArrayCamera(U):te.setFromProjectionMatrix(Me,Nn,U.reversedDepth),Ae=this.localClippingEnabled,ce=$.init(this.clippingPlanes,Ae),R=xe.get(S,_.length),R.init(),_.push(R),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ce=w.xr.getDepthSensingMesh();Ce!==null&&_c(Ce,U,-1/0,w.sortObjects)}_c(S,U,0,w.sortObjects),R.finish(),O!==null&&O.updateLights(A.state.lightsArray),w.sortObjects===!0&&R.sort(ze,bt),ot=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ot&&D.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),ce===!0&&$.beginShadows();let W=A.state.shadowsArray;if(fe.render(W,S,U),ce===!0&&$.endShadows(),(G&&N.hasRenderPass())===!1){let Ce=R.opaque,me=R.transmissive;if(A.setupLights(),U.isArrayCamera){let Te=U.cameras;if(me.length>0)for(let De=0,Ze=Te.length;De<Ze;De++){let lt=Te[De];Ru(Ce,me,S,lt)}ot&&D.render(S);for(let De=0,Ze=Te.length;De<Ze;De++){let lt=Te[De];Au(R,S,lt,lt.viewport)}}else me.length>0&&Ru(Ce,me,S,U),ot&&D.render(S),Au(R,S,U)}ie!==null&&z===0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie)),G&&N.end(w),S.isScene===!0&&S.onAfterRender(w,S,U),ue.resetDefaultState(),Y=-1,j=null,b.pop(),b.length>0?(A=b[b.length-1],qe.setTextureUnits(A.state.textureUnits),ce===!0&&$.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,O!==null&&O.renderEnd()};function _c(S,U,q,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Ce=U.isArrayCamera?de:te;if(!S.frustumCulled||S.intersectsFrustum(Ce)){G&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Me);let me=re.update(S),Te=S.material;Te.visible&&R.push(S,me,Te,q,Ue.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let Ce=U.isArrayCamera?de:te;if(!S.frustumCulled||S.intersectsFrustum(Ce)){let me=re.update(S),Te=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Me)),Array.isArray(Te)){let De=me.groups;for(let Ze=0,lt=De.length;Ze<lt;Ze++){let Pe=De[Ze],ct=Te[Pe.materialIndex];ct&&ct.visible&&R.push(S,me,ct,q,Ue.z,Pe,U)}}else Te.visible&&R.push(S,me,Te,q,Ue.z,null,U)}}}let ve=S.children;for(let Ce=0,me=ve.length;Ce<me;Ce++)_c(ve[Ce],U,q,G)}function Au(S,U,q,G){let{opaque:W,transmissive:ve,transparent:Ce}=S;A.setupLightsView(q),ce===!0&&$.setGlobalState(w.clippingPlanes,q),G&&_e.viewport(ne.copy(G)),W.length>0&&Na(W,U,q),ve.length>0&&Na(ve,U,q),Ce.length>0&&Na(Ce,U,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ru(S,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){let Pe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Kt(1,1,{generateMipmaps:!0,type:Pe?dn:In,minFilter:Ri,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ve=A.state.transmissionRenderTarget[G.id],Ce=G.viewport||ne;ve.setSize(Ce.z*w.transmissionResolutionScale,Ce.w*w.transmissionResolutionScale);let me=w.getRenderTarget(),Te=w.getActiveCubeFace(),De=w.getActiveMipmapLevel();w.setRenderTarget(ve),w.getClearColor(J),ge=w.getClearAlpha(),ge<1&&w.setClearColor(16777215,.5),w.clear(),ot&&D.render(q);let Ze=w.toneMapping;w.toneMapping=Un;let lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),ce===!0&&$.setGlobalState(w.clippingPlanes,G),Na(S,q,G),qe.updateMultisampleRenderTarget(ve),qe.updateRenderTargetMipmap(ve),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,Ot=U.length;ct<Ot;ct++){let St=U[ct],{object:Mt,geometry:tn,material:Ie,group:cn}=St;if(Ie.side===vn&&Mt.layers.test(G.layers)){let pt=Ie.side;Ie.side=Gt,Ie.needsUpdate=!0,Cu(Mt,q,G,tn,Ie,cn),Ie.side=pt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(qe.updateMultisampleRenderTarget(ve),qe.updateRenderTargetMipmap(ve))}w.setRenderTarget(me,Te,De),w.setClearColor(J,ge),lt!==void 0&&(G.viewport=lt),w.toneMapping=Ze}function Na(S,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ve=S.length;W<ve;W++){let Ce=S[W],{object:me,geometry:Te,group:De}=Ce,Ze=Ce.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),me.layers.test(q.layers)&&Cu(me,U,q,Te,Ze,De)}}function Cu(S,U,q,G,W,ve){O!==null&&W.isNodeMaterial&&O.setObject(S,W),S.onBeforeRender(w,U,q,G,W,ve),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(w,U,q,G,S,ve),W.transparent===!0&&W.side===vn&&W.forceSinglePass===!1?(W.side=Gt,W.needsUpdate=!0,w.renderBufferDirect(q,U,G,W,S,ve),W.side=si,W.needsUpdate=!0,w.renderBufferDirect(q,U,G,W,S,ve),W.side=vn):w.renderBufferDirect(q,U,G,W,S,ve),S.onAfterRender(w,U,q,G,W,ve)}function Pu(S){let U=0;for(let q of S)q.texture!==null&&U++;return U}function _r(S,U,q){U.isScene!==!0&&(U=rt);let G=He.get(S),W=A.state.lights,ve=A.state.shadowsArray,Ce=W.state.version,me=ee.getParameters(S,W.state,ve,U,q,A.state.lightProbeGridArray),Te=ee.getProgramCacheKey(me),De=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=P.get(S.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",xt),De=new Map,G.programs=De,G.programVariants=new Map);let lt=De.get(Te);if(lt!==void 0){if(G.currentProgram===lt&&G.lightsStateVersion===Ce)return Lu(S,me),lt}else me.uniforms=ee.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,q,me),S.onBeforeCompile(me,w),lt=ee.acquireProgram(me,Te),De.set(Te,lt),G.uniforms=me.uniforms;let Pe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=$.uniform),Lu(S,me),G.needsLights=$p(S),G.lightsStateVersion=Ce,G.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Pu(A.state.lightProbeGridArray),G.currentProgram=lt,G.uniformsList=null,lt}function Zp(S,U,q,G,W){let ve=He.get(S),Ce=ve.currentProgram.id+","+G+","+W,me=ve.programVariants.get(Ce);return me===void 0?(me=_r(S,U,q),ve.programVariants.set(Ce,me)):(ve.currentProgram=me,ve.uniformsList=null,ve.outputColorSpace=G,ve.toneMapping=W),me}function Iu(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=lr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Lu(S,U){let q=He.get(S);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Jp(S,U,q,G,W){U.isScene!==!0&&(U=rt),qe.resetTextureUnits();let ve=U.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,me=ie===null?w.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ht.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=P.get(G.envMap||Ce,Te),Ze=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,lt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color,St=Un;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=w.toneMapping);let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tn=Mt!==void 0?Mt.length:0,Ie=He.get(G),cn=A.state.lights;if(ce===!0&&(Ae===!0||S!==j)){let Ct=S===j&&G.id===Y;$.setState(G,S,Ct)}let pt=!1,ls=!1;G.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==cn.state.version||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==De||G.fog===!0&&Ie.fog!==ve||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==$.numPlanes||Ie.numIntersection!==$.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==lt||Ie.morphTargets!==Pe||Ie.morphNormals!==ct||Ie.morphColors!==Ot||Ie.morphTargetsCount!==tn||Ie.numLightProbeGrids!==Pu(A.state.lightProbeGridArray)?pt=!0:(Ie.outputColorSpace!==me||Ie.toneMapping!==St)&&(ls=!0):(pt=!0,Ie.__version=G.version);let nn=Ie.currentProgram;(pt===!0||ls===!0)&&(nn=ls===!0?Zp(G,U,W,me,St):_r(G,U,W),O&&G.isNodeMaterial&&O.onUpdateProgram(G,nn,Ie));let Ua=!1,Ui=!1,cs=!1,dt=nn.getUniforms(),$t=Ie.uniforms;if(_e.useProgram(nn.program)&&(Ua=!0,Ui=!0,cs=!0),G.id!==Y&&(Y=G.id,Ui=!0),Ua||j!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",S.projectionMatrix),dt.setValue(F,"viewMatrix",S.matrixWorldInverse);let qt=dt.map.cameraPosition;qt!==void 0&&qt.setValue(F,Je.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Ui=!0,cs=!0)}if(Ie.needsLights&&(cn.state.sunShadowMap.length>0&&dt.setValue(F,"sunShadowMap",cn.state.sunShadowMap,qe),cn.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",cn.state.directionalShadowMap,qe),cn.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",cn.state.spotShadowMap,qe),cn.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",cn.state.pointShadowMap,qe)),W.isSkinnedMesh){dt.setOptional(F,W,"bindMatrix"),dt.setOptional(F,W,"bindMatrixInverse");let Ct=W.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),dt.setValue(F,"boneTexture",Ct.boneTexture,qe))}W.isBatchedMesh&&(dt.setOptional(F,W,"batchingTexture"),dt.setValue(F,"batchingTexture",W._matricesTexture,qe),dt.setOptional(F,W,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",W._indirectTexture,qe),dt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",W._colorsTexture,qe));let zn=q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Q.update(W,q,nn),(Ui||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,dt.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&($t.envMapIntensity.value=U.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=qv()),Ui){if(dt.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ie.needsLights&&Kp($t,cs),ve&&G.fog===!0&&he.refreshFogUniforms($t,ve),he.refreshMaterialUniforms($t,G,Se,Re,A.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Ct=v,qt=0;for(let pi of A.state.lightProbeGridArray)pi.texture!==null&&(Ct.textures[qt]=pi.texture,Ct.min[qt]=pi.boundingBox.min,Ct.max[qt]=pi.boundingBox.max,Ct.resolution[qt]=pi.resolution,qt++);for(let pi in Ct)Ct[pi].length=qt;$t.probesSH.value=Ct.textures,$t.probesMin.value=Ct.min,$t.probesMax.value=Ct.max,$t.probesResolution.value=Ct.resolution}lr.upload(F,Iu(Ie),$t,qe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(F,Iu(Ie),$t,qe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(F,"center",W.center),dt.setValue(F,"modelViewMatrix",W.modelViewMatrix),dt.setValue(F,"normalMatrix",W.normalMatrix),dt.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ct=G.uniformsGroups;for(let qt=0,pi=Ct.length;qt<pi;qt++){let Nu=Ct[qt];Fe.update(Nu,nn),Fe.bind(Nu,nn)}}return nn}function Kp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function $p(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,U,q){let G=He.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),He.get(S.texture).__webglTexture=U,He.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let q=He.get(S);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,q=0){ie=S,H=U,z=q;let G=null,W=!1,ve=!1;if(S){let me=He.get(S);if(me.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(S.viewport),we.copy(S.scissor),Be=S.scissorTest,_e.viewport(ne),_e.scissor(we),_e.setScissorTest(Be),Y=-1;return}else if(me.__webglFramebuffer===void 0)qe.setupRenderTarget(S);else if(me.__hasExternalTextures)qe.rebindTextures(S,He.get(S.texture).__webglTexture,He.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ze=S.depthTexture;if(me.__boundDepthTexture!==Ze){if(Ze!==null&&He.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(S)}}let Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);let De=He.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[U])?G=De[U][q]:G=De[U],W=!0):S.samples>0&&qe.useMultisampledRTT(S)===!1?G=He.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[q]:G=De,ne.copy(S.viewport),we.copy(S.scissor),Be=S.scissorTest}else ne.copy(Ge).multiplyScalar(Se).floor(),we.copy(tt).multiplyScalar(Se).floor(),Be=st;if(q!==0&&(G=X),_e.bindFramebuffer(F.FRAMEBUFFER,G)&&_e.drawBuffers(S,G),_e.viewport(ne),_e.scissor(we),_e.setScissorTest(Be),W){let me=He.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,q)}else if(ve){let me=U;for(let Te=0;Te<S.textures.length;Te++){let De=He.get(S.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,De.__webglTexture,q,me)}}else if(S!==null&&q!==0){let me=He.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,q)}Y=-1};function Du(S){let U=He.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=yt.textureFormatReadable(S.format),U.__typeReadable=yt.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,q,G,W,ve,Ce,me=0){if(!(S&&S.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=He.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te){_e.bindFramebuffer(F.FRAMEBUFFER,Te);try{let De=S.textures[me],Ze=De.format,lt=De.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);let Pe=Du(De);if(Pe.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&q>=0&&q<=S.height-W&&F.readPixels(U,q,G,W,oe.convert(Ze),oe.convert(lt),ve)}finally{let De=ie!==null?He.get(ie).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,U,q,G,W,ve,Ce,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=He.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te)if(U>=0&&U<=S.width-G&&q>=0&&q<=S.height-W){_e.bindFramebuffer(F.FRAMEBUFFER,Te);let De=S.textures[me],Ze=De.format,lt=De.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);let Pe=Du(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(U,q,G,W,oe.convert(Ze),oe.convert(lt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ot=ie!==null?He.get(ie).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Ot);let St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Yd(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ct),F.deleteSync(St),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,q=0){let G=Math.pow(2,-q),W=Math.floor(S.image.width*G),ve=Math.floor(S.image.height*G),Ce=U!==null?U.x:0,me=U!==null?U.y:0;qe.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Ce,me,W,ve),_e.unbindTexture()},this.copyTextureToTexture=function(S,U,q=null,G=null,W=0,ve=0){let Ce,me,Te,De,Ze,lt,Pe,ct,Ot,St=S.isCompressedTexture?S.mipmaps[ve]:S.image;if(q!==null)Ce=q.max.x-q.min.x,me=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ze=q.min.y,lt=q.isBox3?q.min.z:0;else{let dt=Math.pow(2,-W);Ce=Math.floor(St.width*dt),me=Math.floor(St.height*dt),S.isDataArrayTexture?Te=St.depth:S.isData3DTexture?Te=Math.floor(St.depth*dt):Te=1,De=0,Ze=0,lt=0}G!==null?(Pe=G.x,ct=G.y,Ot=G.z):(Pe=0,ct=0,Ot=0);let Mt=oe.convert(U.format),tn=oe.convert(U.type),Ie;U.isData3DTexture?(qe.setTexture3D(U,0),Ie=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(qe.setTexture2DArray(U,0),Ie=F.TEXTURE_2D_ARRAY):(qe.setTexture2D(U,0),Ie=F.TEXTURE_2D),_e.activeTexture(F.TEXTURE0),_e.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),_e.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_e.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let cn=_e.getParameter(F.UNPACK_ROW_LENGTH),pt=_e.getParameter(F.UNPACK_IMAGE_HEIGHT),ls=_e.getParameter(F.UNPACK_SKIP_PIXELS),nn=_e.getParameter(F.UNPACK_SKIP_ROWS),Ua=_e.getParameter(F.UNPACK_SKIP_IMAGES);_e.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,De),_e.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);let Ui=S.isDataArrayTexture||S.isData3DTexture,cs=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let dt=He.get(S),$t=He.get(U),zn=He.get(dt.__renderTarget),Ct=He.get($t.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,zn.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let qt=0;qt<Te;qt++)Ui&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(S).__webglTexture,W,lt+qt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(U).__webglTexture,ve,Ot+qt)),F.blitFramebuffer(De,Ze,De+Ce,Ze+me,Pe,ct,Pe+Ce,ct+me,F.DEPTH_BUFFER_BIT,F.NEAREST);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||He.has(S)){let dt=He.get(S),$t=He.get(U);_e.bindFramebuffer(F.READ_FRAMEBUFFER,C),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let zn=0;zn<Te;zn++)Ui?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dt.__webglTexture,W,lt+zn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,W),cs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,ve,Ot+zn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,ve),W!==0?F.blitFramebuffer(De,Ze,De+Ce,Ze+me,Pe,ct,Pe+Ce,ct+me,F.COLOR_BUFFER_BIT,F.NEAREST):cs?F.copyTexSubImage3D(Ie,ve,Pe,ct,Ot+zn,De,Ze,Ce,me):F.copyTexSubImage2D(Ie,ve,Pe,ct,De,Ze,Ce,me);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else cs?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ie,ve,Pe,ct,Ot,Ce,me,Te,Mt,tn,St.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,ve,Pe,ct,Ot,Ce,me,Te,Mt,St.data):F.texSubImage3D(Ie,ve,Pe,ct,Ot,Ce,me,Te,Mt,tn,St):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Pe,ct,Ce,me,Mt,tn,St.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Pe,ct,St.width,St.height,Mt,St.data):F.texSubImage2D(F.TEXTURE_2D,ve,Pe,ct,Ce,me,Mt,tn,St);_e.pixelStorei(F.UNPACK_ROW_LENGTH,cn),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,ls),_e.pixelStorei(F.UNPACK_SKIP_ROWS,nn),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,Ua),ve===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ie),_e.unbindTexture()},this.initRenderTarget=function(S){He.get(S).__webglFramebuffer===void 0&&qe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?qe.setTextureCube(S,0):S.isData3DTexture?qe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?qe.setTexture2DArray(S,0):qe.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){H=0,z=0,ie=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var kf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Zv=new nr(-1,1,1,-1,0,1),Yh=class extends Lt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},Jv=new Yh,Yl=class{constructor(e){this._mesh=new Oe(Jv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var hr=class extends Ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zl.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ya=class extends Ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zl=class extends Ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Jl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new se);this._width=i.width,this._height=i.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hr(kf),this.copyPass.material.blending=Ai,this.timer=new aa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(a instanceof ya?i=!0:a instanceof Zl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ma=class extends Ii{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ke}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Kl=`
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
`,Ts=`#include <common>
#include <logdepthbuf_pars_vertex>
`,$i=`#include <logdepthbuf_pars_fragment>
`,zf=Ts+`
varying vec3 vDir;
void main(){vec4 wp=modelMatrix*vec4(position,1.0);vDir=wp.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*wp;
#include <logdepthbuf_vertex>
}`,Hf=$i+Kl+`
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
}`,Zh=Ts+`
varying vec3 vN;varying vec3 vW;
void main(){vN=normalize(position);vec4 wp=modelMatrix*vec4(position,1.0);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;
#include <logdepthbuf_vertex>
}`,Gf="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}",Vf=Kl+`
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
}`,Wf=$i+`
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
}`,Xf=Ts+`
varying vec3 vW;
void main(){vec4 wp=modelMatrix*vec4(position,1.0);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;
#include <logdepthbuf_vertex>
}`,qf=$i+`
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
}`,Yf=$i+Kl+`
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
}`,Zf=Ts+`
varying vec3 vNV;varying vec3 vVV;
void main(){vNV=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.0);vVV=-mv.xyz;gl_Position=projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,Jf=$i+`
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
}`,Kf=Ts+`
uniform float uThick;
void main(){vec4 mv=modelViewMatrix*vec4(position+normal*uThick,1.0);gl_Position=projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,$f=$i+`
uniform vec3 uInk;
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor=vec4(uInk,1.0);}`,jf=Ts+Kl+`
uniform float uTime;uniform float uFlick;uniform float uSeed;
void main(){
  vec3 p=position;
  float w=1.0+uFlick*0.18*snoise(vec3(p.y*1.1-uTime*11.0,uTime*4.0,uSeed));
  p.xz*=w;p.x+=0.12*uFlick*snoise(vec3(p.y*0.6-uTime*6.0,uSeed,0.0))*(-p.y*0.25);
  vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;
  #include <logdepthbuf_vertex>
}`,Qf=$i+`
uniform vec3 uInk;
void main(){
  #include <logdepthbuf_fragment>
  gl_FragColor=vec4(uInk,1.0);}`,ep=Ts+`
attribute float aSize;attribute float aAlpha;attribute vec3 aColor;attribute float aRot;
uniform float uScale;
varying float vA;varying vec3 vC;varying float vR;
void main(){vA=aAlpha;vC=aColor;vR=aRot;vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=aSize*uScale/max(-mv.z,0.1);gl_Position=projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,tp=$i+`
uniform sampler2D uTex;
varying float vA;varying vec3 vC;varying float vR;
void main(){
  #include <logdepthbuf_fragment>
  vec2 uv=gl_PointCoord-0.5;float c=cos(vR),s=sin(vR);uv=mat2(c,-s,s,c)*uv+0.5;
  vec4 tx=texture2D(uTex,uv);
  float a=step(0.5,tx.a)*vA;
  if(a<0.004)discard;
  gl_FragColor=vec4(vC*tx.rgb*a,a);
}`,np={uniforms:{tDiffuse:{value:null},uRes:{value:null},uCell:{value:5},uDpr:{value:1},uPaper:{value:null},uT0:{value:null},uT1:{value:null},uT2:{value:null},uSeed:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
}`};var k=n=>document.getElementById(n),Mn=(n,e,t)=>n<e?e:n>t?t:n,oi=(n,e,t)=>n+(e-n)*t,Jn=(n,e,t)=>{let i=Mn((t-n)/(e-n),0,1);return i*i*(3-2*i)};function rs(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pu(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function $v(){let n=new Date;return n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0")}function bn(n){n=Math.max(0,n);let e;return n<10?e=n.toFixed(2):n<1e3?e=n.toFixed(1):e=Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"\u202F"),e.replace(".",",")}function at(n,e){try{if(e===void 0)return localStorage.getItem(n);localStorage.setItem(n,e)}catch{return null}}function en(n){return String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var Nt=$v(),ru=["P","S","K","M","B","T","V","D","R","Z","H","L","O","N"],Rs=ru[Math.floor(rs(pu("slovoraketa-"+Nt))()*ru.length)],xp=Rs.toLocaleLowerCase("cs"),ts={L:Rs,ll:xp},hi=[{at:0,name:"Troposf\xE9ra"},{at:12,name:"Stratosf\xE9ra"},{at:50,name:"Mezosf\xE9ra"},{at:85,name:"Termosf\xE9ra"},{at:100,name:"K\xE1rm\xE1nova hranice"},{at:400,name:"Dr\xE1ha ISS"},{at:2e3,name:"Vysok\xE1 ob\u011B\u017En\xE1 dr\xE1ha"},{at:20200,name:"Dr\xE1ha GPS"},{at:35786,name:"Geostacion\xE1rn\xED dr\xE1ha"},{at:1e5,name:"Hlubok\xFD vesm\xEDr"},{at:384400,name:"M\u011Bs\xEDc"}];document.querySelectorAll("[data-letter]").forEach(n=>n.textContent=Rs);var jv={P:["pivo","postel","poh\xE1dka","pol\u0161t\xE1\u0159","papou\u0161ek","pomeran\u010D","pern\xEDk","pohovka","pra\u010Dka","pastelka","pavouk","pala\u010Dinka"],S:["slunce","sklenice","sv\xED\u010Dka","sestra","strom","sn\xEDdan\u011B","se\u0161it","srdce","silnice","semafor","sal\xE1m","sn\u011Bhul\xE1k"],K:["kolo","ko\u010Dka","kniha","kytara","ka\u0161tan","kol\xE1\u010D","klobouk","kostel","krabice","kompas","kapsa","komin\xEDk"],M:["mrkev","mot\xFDl","ml\xE9ko","meloun","medv\u011Bd","most","mapa","mo\u0159e","marmel\xE1da","mrak","ma\u0161inka","muchom\u016Frka"],B:["babi\u010Dka","ban\xE1n","brambora","beru\u0161ka","bal\xF3n","bota","bou\u0159ka","bor\u016Fvka","buchta","bud\xEDk","br\xFDle","buben\xEDk"],T:["tr\xE1va","telefon","tu\u017Eka","traktor","tal\xED\u0159","tramvaj","t\u0159e\u0161n\u011B","tulip\xE1n","trubka","topinka","tygr","ta\u0161ka"],V:["voda","vlak","vesnice","vaj\xED\u010Dko","veverka","vlajka","vidli\u010Dka","v\xE1za","vosa","velbloud","v\xE1no\u010Dka","vrabec"],D:["dort","d\u011Bde\u010Dek","de\u0161tn\xEDk","d\xE1lnice","d\xE1rek","delf\xEDn","d\xFDn\u011B","divadlo","dopis","drak","dalekohled","dudl\xEDk"],R:["ryba","r\u016F\u017Ee","rohl\xEDk","rodina","raketa","radost","rybn\xEDk","ru\u010Dn\xEDk","robot","raj\u010De","rozinka","rukavice"],Z:["zahrada","zmrzlina","zebra","z\xE1mek","zima","zrcadlo","zelenina","zvonek","zaj\xEDc","zub","z\xE1vod","z\xE1palka"],H:["hrad","houba","hru\u0161ka","hv\u011Bzda","hodiny","hora","hra\u010Dka","husa","h\u0159eben","hrnek","hasi\u010D","housle"],L:["lampa","l\u017E\xEDce","letadlo","ledni\u010Dka","list","louka","lavi\u010Dka","lo\u010Fka","li\u0161ka","limon\xE1da","l\xEDz\xE1tko","lopata"],O:["okno","oblak","ovoce","o\u0159ech","opice","obraz","ostrov","ob\u011Bd","ohe\u0148","obchod","okurka","ove\u010Dka"],N:["nebe","noviny","n\u016F\u017Eky","n\xE1dra\u017E\xED","nosoro\u017Eec","nemocnice","nanuk","noha","n\xE1dob\xED","n\xE1u\u0161nice","n\xE1klad\xE1k","notes"]},wa="";function vp(){let n=(jv[Rs]||[]).filter(t=>es.has(t));if(!n.length)return;wa=n[Math.floor(rs(pu("zlato-"+Nt))()*n.length)];let e=at("sr-goldDay")===Nt;k("goldHint").innerHTML=e?"zlat\xE9 slovo: <b>"+en(wa)+"</b>":"zlat\xE9 slovo m\xE1 <b>"+wa.length+" p\xEDsmen</b>"}function yp(n,e){let[t,i,s]=n.split("-").map(Number),r=new Date(t,i-1,s+e);return r.getFullYear()+"-"+String(r.getMonth()+1).padStart(2,"0")+"-"+String(r.getDate()).padStart(2,"0")}var oc=n=>n+(n===1?" den":n>1&&n<5?" dny":" dn\xED");function Mp(){let n=at("sr-lastDay"),e=+(at("sr-streak")||0);return n===Nt||n===yp(Nt,-1)?e:0}function Qv(){let n=at("sr-lastDay"),e=+(at("sr-streak")||0);return n===Nt||(e=n===yp(Nt,-1)?e+1:1,at("sr-lastDay",Nt),at("sr-streak",String(e))),e}function Sp(){let n=Mp();k("streakTxt").textContent=n>0?"s\xE9rie "+oc(n):"za\u010Dni s\xE9rii"}(function(){let n=new Date,e=["Ned\u011Ble","Pond\u011Bl\xED","\xDAter\xFD","St\u0159eda","\u010Ctvrtek","P\xE1tek","Sobota"],t=["ledna","\xFAnora","b\u0159ezna","dubna","kv\u011Btna","\u010Dervna","\u010Dervence","srpna","z\xE1\u0159\xED","\u0159\xEDjna","listopadu","prosince"],i=Math.round((new Date(n.getFullYear(),n.getMonth(),n.getDate())-new Date(2026,10,14))/864e5)+1;k("todayInfo").textContent=e[n.getDay()]+" "+n.getDate()+". "+(n.getMonth()+1)+". \xB7 mise "+String(Math.max(1,i)).padStart(3,"0")})();var es={ready:!1,failed:!1,blocks:null,heads:null,async load(){try{if(window.SLOVA_GZ||await new Promise((i,s)=>{let r=document.createElement("script");r.src="slova.js",r.onload=i,r.onerror=s,document.head.appendChild(r)}),!window.SLOVA_GZ||typeof DecompressionStream>"u")throw new Error("x");let n=Uint8Array.from(atob(window.SLOVA_GZ),i=>i.charCodeAt(0)),e=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),t=await new Response(e).text();this.blocks=t.split(""),this.heads=this.blocks.map(i=>{let s=i.indexOf(`
`);return s<0?i:i.slice(0,s)}),this.ready=!0,window.SLOVA_GZ=null}catch{this.failed=!0}},extra:new Set,has(n){if(this.extra.has(n))return!0;if(!this.ready)return/[aeiouyáéěíóúůý]/.test(n)&&!/(.)\1\1/.test(n);let e=this.heads,t=0,i=e.length-1,s=-1;for(;t<=i;){let o=t+i>>1;e[o]<=n?(s=o,t=o+1):i=o-1}if(s<0)return!1;let r=this.blocks[s].split(`
`),a="";for(let o=0;o<r.length;o++){let l=r[o],c=o===0?l:a.slice(0,l.charCodeAt(0)-48)+l.slice(1);if(c===n)return!0;if(c>n)return!1;a=c}return!1}},vt={ctx:null,eng:null,muted:at("sr-mute")==="1",init(){if(!this.ctx)try{let n=window.AudioContext||window.webkitAudioContext;this.ctx=new n;let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0),s=0;for(let u=0;u<e;u++){let d=Math.random()*2-1;s=(s+.02*d)/1.02,i[u]=s*3.2}let r=this.ctx.createBufferSource();r.buffer=t,r.loop=!0;let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=420;let o=this.ctx.createGain();o.gain.value=0,r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start();let l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.value=46;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=160;let h=this.ctx.createGain();h.gain.value=0,l.connect(c),c.connect(h),h.connect(this.ctx.destination),l.start(),this.eng={g:o,lp:a,rg:h,rum:l}}catch{this.ctx=null}},engine(n,e){if(!this.eng)return;let t=this.ctx.currentTime;this.eng.g.gain.setTargetAtTime(this.muted?0:n,t,.08),this.eng.rg.gain.setTargetAtTime(this.muted?0:n*(e?.25:.55),t,.1),this.eng.rum.frequency.setTargetAtTime(42+n*40,t,.2),this.eng.lp.frequency.setTargetAtTime(e?220:380+n*900,t,.1)},tone(n,e,t,i,s){if(!this.ctx||this.muted)return;let r=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=i||"triangle",a.frequency.setValueAtTime(n,r),a.frequency.exponentialRampToValueAtTime(e,r+t),o.gain.setValueAtTime(s||.1,r),o.gain.exponentialRampToValueAtTime(1e-4,r+t),a.connect(o),o.connect(this.ctx.destination),a.start(r),a.stop(r+t+.02)},ok(n){this.tone(520+n*30,880+n*40,.16,"sine",.1)},bad(){this.tone(180,120,.16,"triangle",.08)},beep(n){this.tone(n?880:560,n?880:560,.14,"sine",.12)},stage(){this.tone(440,660,.12,"sine",.09),setTimeout(()=>this.tone(660,990,.2,"sine",.09),120)},boom(){if(!this.ctx||this.muted)return;let n=this.ctx.currentTime,e=this.ctx.sampleRate*1.1,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.pow(1-o/e,2.4);let s=this.ctx.createBufferSource();s.buffer=t;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=600;let a=this.ctx.createGain();a.gain.value=.55,s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(n)}},ey='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',ty='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M16 10l4 4M20 10l-4 4"/></svg>';function bp(){k("muteBtn").innerHTML=vt.muted?ty:ey}bp();k("muteBtn").addEventListener("pointerdown",n=>n.preventDefault());k("muteBtn").addEventListener("click",()=>{vt.muted=!vt.muted,at("sr-mute",vt.muted?"1":"0"),bp(),vt.muted&&vt.engine(0)});var ny=k("gl"),ns=new Wl({canvas:ny,antialias:!1,powerPreference:"high-performance"});ns.toneMapping=Un;ns.setClearColor(0,1);var Ln=Math.min(window.devicePixelRatio||1,2),Ep=matchMedia("(pointer:coarse)").matches||Math.min(screen.width,screen.height)<700,fr=at("sr-q2")?+at("sr-q2"):Ep&&Ln>1.5?.85:1;ns.setPixelRatio(Ln);var kt=(n,e,t)=>new Ke().setRGB(n,e,t,An),As=6371,lc=new L(.62,.5,-.6).normalize(),iy=new L(.75,.42,.52).normalize(),sy=new L(0,1,0),ur=new Date().getHours()+new Date().getMinutes()/60,nc=ur>=5&&ur<8.5?"dawn":ur>=8.5&&ur<16.5?"day":ur>=16.5&&ur<20?"evening":"night",Jh={dawn:[[.55,.3,0],[.05,.55,.3],[0,.22,.7]],day:[[.78,.06,0],[.42,0,.04],[.16,0,.14]],evening:[[.7,.2,0],[.18,.6,.12],[0,.42,.9]],night:[[1,.85,0],[.95,.62,0],[.72,.5,.12]]}[nc],ry=nc==="night"?1:0,Li={uZL:kt(...Jh[0]),uML:kt(...Jh[1]),uHL:kt(...Jh[2]),uZM:kt(.92,.32,0),uMM:kt(.72,.12,0),uHM:kt(.38,0,.12),uSpace:kt(1,.8,0)};function ip(n,e){let t=Jn(2,34,n),i=Jn(30,125,n),s=(l,c)=>l.clone().lerp(c,t).lerp(Li.uSpace,i),r=s(Li.uZL,Li.uZM),a=s(Li.uML,Li.uMM),o=s(Li.uHL,Li.uHM);return e<.5?r.lerp(a,e*2):a.lerp(o,(e-.5)*2)}var Ia=new gs,Bn=new an(50,1,.5,12e5);Bn.rotation.order="YXZ";var Tp={uSun:{value:lc},uAlt:{value:0},uUp:{value:new L(0,1,0)},uNight:{value:ry}};for(let n in Li)Tp[n]={value:Li[n]};var wp=new Dt({vertexShader:zf,fragmentShader:Hf,side:Gt,depthWrite:!1,uniforms:Tp}),cc=new Oe(new xn(9e5,48,24),wp);cc.renderOrder=-10;cc.frustumCulled=!1;Ia.add(cc);var ic=new Dt({vertexShader:Zh,fragmentShader:Wf,uniforms:{uMap:{value:null},uSun:{value:lc},uAlt:{value:0},uHaze:{value:kt(0,.4,.8)}}});(function(){let e=new Kt(2048,1024,{wrapS:ms,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),t=new Oe(new Xi(2,2),new Dt({vertexShader:Gf,fragmentShader:Vf,uniforms:{uSite:{value:sy}},depthTest:!1,depthWrite:!1})),i=new gs;i.add(t);let s=new ys;ns.setRenderTarget(e),ns.render(i,s),ns.setRenderTarget(null),t.geometry.dispose(),t.material.dispose(),ic.uniforms.uMap.value=e.texture})();var ay=new Oe(new xn(As,128,96),ic);Ia.add(ay);var Ap=new Dt({vertexShader:Xf,fragmentShader:qf,side:Gt,transparent:!0,depthWrite:!1,uniforms:{uSun:{value:lc},uRe:{value:As},uRa:{value:As+260},uFade:{value:0}}}),oy=new Oe(new xn(As+260,128,96),Ap);Ia.add(oy);var au=new Oe(new xn(1737,96,64),new Dt({vertexShader:Zh,fragmentShader:Yf,uniforms:{uSun:{value:lc}}}));Ia.add(au);var ln=new gs,fn=new an(50,1,.1,9e3);ln.fog=new Br(new Ke,90,2600);var Rp=new L,Cp={value:0};function jt(n,e,t,i={}){return new Dt({vertexShader:Zf,fragmentShader:Jf,side:i.side||si,uniforms:{uBase:{value:kt(...n)},uShade:{value:kt(...e)},uDeep:{value:kt(...t)},uL:{value:Rp},uGlint:{value:i.glint?1:0},uGlow:{value:kt(0,.5,1)},uGlowAmt:Cp}})}var sp=new Dt({vertexShader:Kf,fragmentShader:$f,side:Gt,uniforms:{uThick:{value:.045},uInk:{value:kt(1,.85,0)}}});function pn(n,e){let t=e?sp.clone():sp;e&&(t.uniforms.uThick.value=e);let i=new Oe(n.geometry,t);return i.position.copy(n.position),i.rotation.copy(n.rotation),i.scale.copy(n.scale),n.parent.add(i),i}var We=new wt;ln.add(We);var hc=-.7,li=[{id:"klasik",name:"Klasik",need:0,body:[0,0,0],accent:[0,1,1],trim:[1,.85,0]},{id:"modrak",name:"Modr\xE1k",need:12,body:[.34,0,0],accent:[1,.85,0],trim:[0,0,1]},{id:"zvykacka",name:"\u017Dv\xFDka\u010Dka",need:50,body:[0,.32,0],accent:[1,.05,0],trim:[0,1,1]},{id:"citron",name:"Citron",need:100,body:[0,0,.7],accent:[1,.85,0],trim:[0,1,.15]},{id:"smrcek",name:"Smr\u010Dek",need:400,body:[.62,0,.9],accent:[0,1,1],trim:[0,0,0]},{id:"pulnoc",name:"P\u016Flnoc",need:2e3,body:[1,.85,0],accent:[0,0,1],trim:[0,1,1]},{id:"zlata",name:"Zlat\xE1",need:35786,body:[0,.35,1],accent:[1,.85,0],trim:[0,0,0]}],ou=n=>li.find(e=>e.id===n)||li[0],ly=[.42,.22,0],cy=[.8,.5,0];function Kh(n,e){n.uniforms.uBase.value.setRGB(e[0],e[1],e[2],An);let t=e[0]+e[1]*.6>1.2,i=t?[0,.15,.2]:ly,s=t?[0,.3,.35]:cy;n.uniforms.uShade.value.setRGB(i[0],i[1],i[2],An),n.uniforms.uDeep.value.setRGB(s[0],s[1],s[2],An)}function uc(n,e){let t=n.userData.mats;if(t){Kh(t.paper,e.body),Kh(t.red,e.accent),Kh(t.indigo,e.trim);for(let i of t.trimBasic)i.color.setRGB(e.trim[0],e.trim[1],e.trim[2],An)}}(function(){let e=jt([0,0,0],[.42,.22,0],[.8,.5,0],{glint:!0}),t=jt([0,1,1],[.45,.15,0],[.9,.5,0]),i=jt([1,.85,0],[1,.9,.2],[1,.95,.3]),s=jt([1,.05,0],[1,.4,0],[1,.7,0],{glint:!0}),r=jt([.55,.3,.1],[.85,.55,.1],[1,.8,.2],{glint:!0}),a=.62,o=new Oe(new Tt(a,a*.94,4.6,64,1,!1),e);o.position.y=2.6,We.add(o),pn(o);let l=[],c=2.6;for(let C=0;C<=32;C++){let B=C/32,H=a*Math.sqrt(Math.max(0,1-Math.pow(B,1.9)))*(1-.06*B);l.push(new se(Math.max(H,1e-4),B*c))}let h=new Oe(new ii(l,64),t);h.position.y=4.9,We.add(h),pn(h);let u=new Oe(new xn(.07,12,8),i);u.position.y=4.9+c-.02,We.add(u);let d=(C,B,H)=>{let z=new Oe(new Tt(a+.015,a+.015,B,64,1,!0),H);z.position.y=C,We.add(z)};d(4.66,.14,i),d(1.02,.3,i),d(1.3,.07,t);let f=document.createElement("canvas");f.width=256,f.height=32;let g=f.getContext("2d");g.fillStyle="#fff";for(let C=0;C<8;C++)C%2===0&&g.fillRect(C*32,0,32,32);let y=new qn(f);y.wrapS=ms;let m=new Oe(new Tt(a+.016,a+.016,.34,64,1,!0),new Xn({map:y,color:kt(1,.85,0),transparent:!0,alphaTest:.5,fog:!1}));m.position.y=4.2,We.add(m);let p=m.material;p.onBeforeCompile=C=>{C.fragmentShader=C.fragmentShader.replace("#include <map_fragment>","vec4 sampledDiffuseColor = texture2D( map, vMapUv ); diffuseColor.a *= sampledDiffuseColor.r;")};let x=new Oe(new sa(.29,.06,12,40),i);x.position.set(0,3.7,a-.01),We.add(x);let E=new Oe(new Vi(.26,40),s);E.position.set(0,3.7,a+.005),We.add(E);let v=new Oe(new Vi(.07,16),new Xn({color:kt(0,0,0),fog:!1}));v.position.set(-.08,3.79,a+.012),We.add(v);let R=document.createElement("canvas");R.width=512,R.height=128;let A=R.getContext("2d");We.userData.labelDraw=()=>{A.clearRect(0,0,512,128),A.fillStyle="#fff",A.font="800 84px 'Bricolage Grotesque', sans-serif",A.textAlign="center",A.textBaseline="middle",A.fillText("TM\xCDNUS",256,68),_.needsUpdate=!0};let _=new qn(R),b=new Oe(new Tt(a+.008,a+.008,.62,48,1,!0,-.62,1.24),new Xn({map:_,color:kt(1,.85,0),transparent:!0,alphaTest:.5,fog:!1}));b.material.onBeforeCompile=p.onBeforeCompile,b.position.y=2.5,b.rotation.y=Math.PI,We.add(b),We.userData.labelDraw();let N=new Wi;N.moveTo(0,0),N.lineTo(0,2),N.bezierCurveTo(.35,1.5,.95,.75,1.05,-.15),N.lineTo(.95,-.42),N.lineTo(0,0);let w=new vs(N,{depth:.08,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:18});w.translate(0,0,-.04);for(let C=0;C<4;C++){let B=new wt;B.rotation.y=C*Math.PI/2+Math.PI/4;let H=new Oe(w,t);H.position.set(a*.92,.25,0),B.add(H),We.add(B),pn(H,.03)}let I=[];for(let C=0;C<=16;C++){let B=C/16;I.push(new se(.24+Math.pow(B,1.6)*.28,-B*.62))}let O=new Oe(new ii(I,48),r);O.material.side=vn,O.position.y=-.08,We.add(O),pn(O,.03);let X=new Oe(new Tt(a*.94,a*.78,.36,48),i);X.position.y=.12,We.add(X),We.userData.mats={paper:e,red:t,indigo:i,trimBasic:[m.material,b.material]}})();var Sa=(()=>{let e=[];for(let s=0;s<=16;s++){let r=s/16;e.push(new se(Math.max(1e-4,.62*Math.sqrt(Math.max(0,1-Math.pow(r,1.9)))),r*2.6))}let t=new Wi;t.moveTo(0,0),t.lineTo(0,2),t.bezierCurveTo(.35,1.5,.95,.75,1.05,-.15),t.lineTo(.95,-.42),t.lineTo(0,0);let i=new vs(t,{depth:.1,bevelEnabled:!1});return i.translate(0,0,-.05),{body:new Tt(.62,.62*.94,4.6,24),nose:new ii(e,24),fin:i,band:new Tt(.62+.02,.62+.02,.3,24,1,!0),flame:new ni(.5,3.4,16).rotateX(Math.PI).translate(0,-1.7,0)}})();function hy(n){let e=new wt,t=jt(n.body,[0,0,0],[0,0,0]),i=jt(n.accent,[0,0,0],[0,0,0]),s=jt(n.trim,[0,0,0],[0,0,0]);e.userData.mats={paper:t,red:i,indigo:s,trimBasic:[]},uc(e,n);let r=new Oe(Sa.body,t);r.position.y=2.6,e.add(r),pn(r,.06);let a=new Oe(Sa.nose,i);a.position.y=4.9,e.add(a),pn(a,.06);let o=new Oe(Sa.band,s);o.position.y=1.02,e.add(o);for(let c=0;c<3;c++){let h=new wt;h.rotation.y=c*Math.PI*2/3+.4;let u=new Oe(Sa.fin,i);u.position.set(.56,.25,0),h.add(u),e.add(h)}let l=new Oe(Sa.flame,new Xn({color:kt(0,.9,1),fog:!1}));return l.position.y=-.1,e.add(l),e.userData.flame=l,e.scale.setScalar(.5),e.visible=!1,ln.add(e),e}function uy(n){let e=We.userData;We.userData={};let t=We.visible,i=We.rotation.clone();We.visible=!0,We.rotation.set(0,0,0);let s=We.clone(!0);We.userData=e,We.visible=t,We.rotation.copy(i);let r=new Map([[e.mats.paper,e.mats.paper.clone()],[e.mats.red,e.mats.red.clone()],[e.mats.indigo,e.mats.indigo.clone()]]);return s.traverse(a=>{a.material&&r.has(a.material)&&(a.material=r.get(a.material))}),s.userData={mats:{paper:r.get(e.mats.paper),red:r.get(e.mats.red),indigo:r.get(e.mats.indigo),trimBasic:[]},flame:s.children[We.children.indexOf(pr)],twin:!0},uc(s,n),s.position.set(0,0,0),s.visible=!1,ln.add(s),s}var ui=[],rp=[[-6.5,-4],[6.5,-5],[-10,-9],[10,-10],[-13,-14]];function $h(n,e,t,i){let s=new ii(n.map(o=>new se(o[0],o[1])),32),r=new Dt({vertexShader:jf,fragmentShader:Qf,depthWrite:!1,transparent:!0,uniforms:{uTime:{value:0},uFlick:{value:1},uSeed:{value:t},uInk:{value:kt(...e)}}}),a=new Oe(s,r);return a.renderOrder=i,a.frustumCulled=!1,a}var pr=new wt,Pp=[$h([[.5,0],[.7,-.6],[.72,-1.6],[.55,-2.9],[.3,-4.1],[.02,-5.3]],[0,1,1],1,5),$h([[.38,0],[.52,-.5],[.5,-1.4],[.34,-2.5],[.02,-3.6]],[0,.35,1],2,6),$h([[.24,0],[.3,-.4],[.24,-1.1],[.02,-1.9]],[0,0,0],3,7)];Pp.forEach(n=>pr.add(n));pr.position.y=hc+.02;We.add(pr);function Ip(n,e=256,t=256,i=!1){let s=document.createElement("canvas");s.width=e,s.height=t;let r=s.getContext("2d"),a=rs(n),o=[];if(i){let c=7+Math.floor(a()*4),h=t*.78;for(let u=0;u<c;u++){let d=(u+.5)/c,f=Math.sin(d*Math.PI),g=t*(.13+f*.2+a()*.06);o.push([e*(.1+d*.8),h-g*(.4+f*.7),g])}}else{for(let c=0;c<5;c++){let h=c/5*Math.PI*2+a(),u=e*(.2+a()*.06);o.push([e/2+Math.cos(h)*e*.17,t/2+Math.sin(h)*t*.17,u])}o.push([e/2,t/2,e*.28])}let l=c=>{c.beginPath();for(let[h,u,d]of o)c.moveTo(h+d,u),c.arc(h,u,d,0,Math.PI*2);i&&c.rect(e*.08,t*.55,e*.84,t*.23)};r.fillStyle="rgb(72,52,0)",l(r),r.fill(),r.save(),l(r),r.clip(),r.fillStyle="rgb(0,0,0)",r.beginPath();for(let[c,h,u]of o){let d=c-e*.035,f=h-t*(i?.07:.05);r.moveTo(d+u*.9,f),r.arc(d,f,u*.9,0,Math.PI*2)}return r.fill(),r.restore(),new qn(s)}function dy(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.fillStyle="#fff",e.beginPath(),e.arc(32,32,30,0,7),e.fill(),new qn(n)}function fy(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=rs(5),i=(s,r)=>{e.fillStyle=r,e.beginPath();let a=14;for(let o=0;o<a*2;o++){let l=o/(a*2)*Math.PI*2,c=o%2?s*(.45+t()*.15):s*(.85+t()*.15);e.lineTo(128+Math.cos(l)*c,128+Math.sin(l)*c)}e.closePath(),e.fill()};return i(126,"rgb(0,255,255)"),i(92,"rgb(0,90,255)"),i(50,"rgb(0,0,0)"),new qn(n)}function Lp(n,e){let t=new Lt,i=new Float32Array(n*3),s=new Float32Array(n),r=new Float32Array(n),a=new Float32Array(n*3),o=new Float32Array(n);for(let[h,u,d]of[["position",i,3],["aSize",s,1],["aAlpha",r,1],["aColor",a,3],["aRot",o,1]])t.setAttribute(h,new gn(u,d).setUsage(Th));let l=new Dt({vertexShader:ep,fragmentShader:tp,transparent:!0,depthWrite:!1,blending:$o,blendSrc:jo,blendDst:la,uniforms:{uTex:{value:e},uScale:{value:300}}}),c=new Xr(t,l);return c.frustumCulled=!1,{pts:c,geo:t,mat:l,max:n,list:[],pos:i,size:s,alpha:r,col:a,rot:o}}var di=Lp(900,Ip(7)),as=Lp(400,dy());ln.add(di.pts,as.pts);function ws(n,e){n.list.length>=n.max&&n.list.shift(),n.list.push(e)}var ec=new Map;function py(n){if(ec.has(n))return ec.get(n);let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.font="800 96px 'Bricolage Grotesque', sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineWidth=16,t.strokeStyle="rgb(255,215,0)",t.strokeText(n,64,70),t.fillStyle="rgb(0,40,255)",t.fillText(n,64,70);let i=new qn(e);return ec.set(n,i),i}var La=[];for(let n=0;n<90;n++){let e=new Gi(new Ti({color:16777215,transparent:!0,depthWrite:!1,fog:!1,alphaTest:.45}));e.visible=!1,e.userData={life:0},ln.add(e),La.push(e)}var Ra=[],jh=0;function my(n,e){let t=La.find(s=>!s.visible);if(!t)return;t.material.map=py(n.toLocaleUpperCase("cs")),t.material.needsUpdate=!0,t.visible=!0,t.position.copy(e);let i=Math.random()<.5?-1:1;t.userData={life:1,max:1.6+Math.random()*.6,v:new L(i*(1.5+Math.random()*2.5),-3-Math.random()*2.5,(Math.random()-.5)*2),spin:(Math.random()-.5)*4,size:2.6+Math.random()*.8},t.material.rotation=(Math.random()-.5)*.8}function ji(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");return s.lineJoin="round",s.lineCap="round",t(s,n,e),new qn(i)}var At={paper:"rgb(0,0,0)",ink:"rgb(255,215,0)",blue:"rgb(255,0,0)",red:"rgb(0,255,255)",yellow:"rgb(0,0,255)",pink:"rgb(0,255,0)",lblue:"rgb(110,0,0)",grey:"rgb(90,60,0)"},lu={birds:ji(256,128,n=>{n.strokeStyle=At.ink,n.lineWidth=7;let e=(t,i,s)=>{n.beginPath(),n.moveTo(t-18*s,i-8*s),n.quadraticCurveTo(t-8*s,i-12*s,t,i),n.quadraticCurveTo(t+8*s,i-12*s,t+18*s,i-8*s),n.stroke()};e(128,50,1.4),e(80,80,1.1),e(176,78,1.1),e(40,104,.9),e(214,106,.9)}),plane:ji(512,160,n=>{n.fillStyle=At.lblue,n.fillRect(0,70,300,10),n.fillRect(0,88,280,6),n.fillStyle=At.paper,n.strokeStyle=At.ink,n.lineWidth=6,n.beginPath(),n.moveTo(300,66),n.lineTo(470,66),n.quadraticCurveTo(505,72,470,92),n.lineTo(300,92),n.closePath(),n.fill(),n.stroke(),n.fillStyle=At.red,n.beginPath(),n.moveTo(310,66),n.lineTo(290,20),n.lineTo(330,20),n.lineTo(350,66),n.closePath(),n.fill(),n.stroke(),n.fillStyle=At.blue,n.beginPath(),n.moveTo(380,84),n.lineTo(350,140),n.lineTo(385,140),n.lineTo(420,84),n.closePath(),n.fill(),n.stroke(),n.fillStyle=At.ink;for(let e=0;e<6;e++)n.fillRect(370+e*14,72,7,7)}),balloon:ji(160,320,n=>{n.strokeStyle=At.ink,n.lineWidth=5,n.fillStyle=At.paper,n.beginPath(),n.arc(80,90,70,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle=At.pink,n.beginPath(),n.ellipse(80,90,26,70,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(80,160),n.lineTo(80,270),n.stroke(),n.fillStyle=At.yellow,n.fillRect(64,268,32,26),n.strokeRect(64,268,32,26)}),sat:ji(320,160,n=>{n.strokeStyle=At.ink,n.lineWidth=5,n.fillStyle=At.blue;for(let e of[10,210]){n.fillRect(e,50,100,60),n.strokeRect(e,50,100,60),n.beginPath();for(let t=1;t<4;t++)n.moveTo(e+t*25,50),n.lineTo(e+t*25,110);n.stroke()}n.fillStyle=At.yellow,n.fillRect(125,40,70,80),n.strokeRect(125,40,70,80),n.beginPath(),n.moveTo(160,40),n.lineTo(160,10),n.stroke(),n.fillStyle=At.paper,n.beginPath(),n.arc(160,12,9,0,7),n.fill(),n.stroke()}),iss:ji(512,256,n=>{n.strokeStyle=At.ink,n.lineWidth=6,n.fillStyle=At.paper,n.fillRect(40,118,432,20),n.strokeRect(40,118,432,20),n.fillStyle=At.blue;for(let e of[50,140,312,402])for(let t of[20,146])n.fillRect(e,t,70,90),n.strokeRect(e,t,70,90);n.fillStyle=At.paper,n.fillRect(206,96,100,64),n.strokeRect(206,96,100,64),n.fillStyle=At.red,n.fillRect(226,108,60,12)}),debris:ji(128,128,n=>{n.fillStyle=At.grey,n.strokeStyle=At.ink,n.lineWidth=4,n.beginPath(),n.moveTo(20,60),n.lineTo(70,20),n.lineTo(110,50),n.lineTo(90,100),n.lineTo(40,110),n.closePath(),n.fill(),n.stroke()}),comet:ji(512,160,n=>{let e=n.createLinearGradient(40,0,430,0);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=e,n.beginPath(),n.moveTo(430,52),n.lineTo(20,70),n.lineTo(20,90),n.lineTo(430,108),n.closePath(),n.fill(),n.fillStyle=At.yellow,n.strokeStyle=At.ink,n.lineWidth=5,n.beginPath(),n.arc(450,80,32,0,7),n.fill(),n.stroke()})},Dp={};for(let n in lu){let e=lu[n].image;Dp[n]=ji(e.width,e.height,(t,i)=>{t.translate(i,0),t.scale(-1,1),t.drawImage(e,0,0)})}var zt={paper:()=>jt([0,0,0],[.42,.22,0],[.8,.5,0],{glint:!0}),red:()=>jt([0,1,1],[.45,.15,0],[.9,.5,0]),blue:()=>jt([1,.05,0],[0,.4,.1],[0,.7,.2],{glint:!0}),indigo:()=>jt([1,.85,0],[1,.95,.3],[1,1,.5]),yellow:()=>jt([0,.05,1],[.35,.25,0],[.7,.5,0]),pink:()=>jt([0,.75,.1],[.4,.2,0],[.8,.4,0]),grey:()=>jt([.3,.2,.05],[.35,.25,0],[.6,.45,.1])};function mt(n,e,t,i,s,r){let a=new Oe(e,t);if(i&&a.position.set(...i),s&&a.rotation.set(...s),n.add(a),r){let o=pn(a,r);a.add(o),o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1)}return a}function Aa(n,e,t,i,s){let r=new Wi;return r.moveTo(0,0),r.lineTo(e,0),r.lineTo(i+t,n),r.lineTo(i,n),r.closePath(),new vs(r,{depth:s,bevelEnabled:!1})}function gy(){let n=new wt,e=zt.paper(),t=zt.red(),i=zt.blue(),s=zt.indigo();mt(n,new Tt(.07,.07,.78,20),e,[0,0,0],[0,0,Math.PI/2],.012),mt(n,new xn(.07,20,12),e,[.39,0,0],null,.012).scale.set(1.9,1,1),mt(n,new ni(.07,.22,20),e,[-.5,.012,0],[0,0,Math.PI/2],.012);for(let o of[1,-1]){let l=mt(n,Aa(.46,.2,.07,.17,.014),e,[.12,-.03,o*.06],[o*Math.PI/2,0,0]);l.scale.set(-1,1,1),pn(l,.01);let c=mt(n,new Tt(.028,.032,.13,14),i,[.06,-.065,o*.2],[0,0,Math.PI/2],.008),h=mt(n,Aa(.15,.09,.04,.06,.01),e,[-.47,.02,o*.01],[o*Math.PI/2,0,0]);h.scale.set(-1,1,1),pn(h,.008);let u=mt(n,new ni(.03,2.6,10,1,!0),new Xn({color:kt(0,0,0),fog:!1}),[-1.32,-.065,o*.2],[0,0,-Math.PI/2]);u.renderOrder=-1}let a=mt(n,Aa(.2,.17,.07,.1,.012),t,[-.32,.05,-.006]);a.scale.set(-1,1,1),pn(a,.01);for(let o=0;o<7;o++)for(let l of[1,-1])mt(n,new Ht(.025,.02,.004),s,[.22-o*.065,.03,l*.07]);return n}function _y(){let n=new wt,e=zt.paper(),t=zt.red(),i=zt.indigo(),s=zt.yellow(),r=[];for(let l=0;l<=24;l++){let c=l/24,h=-.1+c*1.05,u=c<.62?.09+.36*Math.sin(c/.62*Math.PI/2)**.8:.45*Math.sqrt(Math.max(0,1-((c-.62)/.38)**2));r.push(new se(Math.max(u,.001),h))}let a=10;for(let l=0;l<a;l++)mt(n,new ii(r,4,l/a*Math.PI*2,Math.PI*2/a),l%2?e:t,[0,.12,0]);let o=new Oe(new ii(r,24),e);o.position.y=.12,o.visible=!1,n.add(o),pn(o,.02),mt(n,new Tt(.092,.092,.03,16),i,[0,.02,0]);for(let l=0;l<4;l++){let c=l/4*Math.PI*2+Math.PI/4;mt(n,new Tt(.004,.004,.2,4),i,[Math.cos(c)*.065,-.09,Math.sin(c)*.065])}return mt(n,new Ht(.11,.09,.11),s,[0,-.23,0],null,.01),mt(n,new Ht(.115,.018,.115),i,[0,-.19,0]),n}function xy(n,e){let t=new wt;mt(t,new xn(.1,14,10),n,[0,0,0],null,.01).scale.set(1.7,.72,.72),mt(t,new xn(.06,12,8),n,[.17,.035,0],null,.008),mt(t,new ni(.02,.08,6),zt.yellow(),[.245,.03,0],[0,0,-Math.PI/2]),mt(t,new ni(.055,.15,4),e,[-.21,0,0],[0,0,Math.PI/2]).scale.set(1,1,.3);let s=[];for(let r of[1,-1]){let a=new wt;a.position.set(.03,.03,r*.05),t.add(a);let o=new Oe(Aa(.26,.17,.12,.03,.012),n);o.rotation.set(r*Math.PI/2,0,0),o.scale.set(-1,1,1),o.position.x=.09,a.add(o),pn(o,.008);let l=new wt;l.position.set(-.01,0,r*.25),a.add(l);let c=new Oe(Aa(.24,.12,.02,.1,.01),e);c.rotation.set(r*Math.PI/2,0,0),c.scale.set(-1,1,1),c.position.x=.06,l.add(c),pn(c,.008),s.push({piv:a,piv2:l,sgn:r})}return t.userData.wings=s,t}function vy(){let n=new wt,e=zt.paper(),t=zt.indigo(),i=[];return[[0,0,0],[-.55,-.05,.45],[-.55,.05,-.45],[-1.1,-.1,.9],[-1.1,.08,-.9]].forEach((r,a)=>{let o=xy(e,t);o.position.set(...r),o.userData.phase=a*.7,n.add(o),i.push(o)}),n.userData.birds=i,n}function Qh(n){let e=new wt,t=zt.paper(),i=zt.blue(),s=zt.yellow(),r=zt.indigo();mt(e,new Ht(.3,.3,.3),s,[0,0,0],null,.012),mt(e,new Tt(.012,.012,1.3,6),r,[0,0,0],[Math.PI/2,0,0]);for(let o of[1,-1]){mt(e,new Ht(.34,.012,.5),i,[0,0,o*.45],null,.008);for(let l=1;l<4;l++)mt(e,new Ht(.34,.016,.006),r,[0,0,o*(.2+l*.125)])}let a=mt(e,new xn(.14,16,8,0,Math.PI*2,0,Math.PI/2.4),t,[0,.22,0],[Math.PI,0,0],.008);return a.material.side=vn,mt(e,new Tt(.008,.008,.14,4),r,[0,.27,0]),n&&e.scale.setScalar(1.2),e}function yy(){let n=new wt,e=zt.paper(),t=zt.blue(),i=zt.indigo(),s=zt.red();mt(n,new Ht(1.6,.05,.05),e,[0,0,0],null,.008);for(let r of[-.72,-.48,.48,.72])for(let a of[1,-1])mt(n,new Ht(.18,.008,.42),t,[r,0,a*.26],null,.006);return mt(n,new Tt(.07,.07,.5,16),e,[0,-.08,0],[Math.PI/2,0,0],.008),mt(n,new Tt(.06,.06,.34,16),e,[.12,-.08,0],[0,0,Math.PI/2],.008),mt(n,new Tt(.061,.061,.06,16,1,!0),s,[.12,-.08,0],[0,0,Math.PI/2]),mt(n,new Ht(.22,.006,.12),e,[-.2,.06,0],null,.005),n}function My(){let n=new wt;return mt(n,new ia(.3,0),zt.grey(),[0,0,0],null,.03).scale.set(1,.6,.8),n}var Sy=[{make:vy,from:.15,to:1.6,n:6,size:4.2,drift:6,kind:"birds"},{make:gy,from:8.5,to:11.5,n:3,size:13,drift:24,kind:"plane"},{make:_y,from:20,to:36,n:3,size:6,drift:.4,kind:"balloon"},{make:yy,from:395,to:425,n:1,size:9,drift:1.4,kind:"space"},{make:()=>Qh(!1),from:450,to:1900,n:9,size:4.5,drift:1,kind:"space"},{make:My,from:600,to:1600,n:10,size:2.4,drift:3,kind:"debris"},{make:()=>Qh(!0),from:2e4,to:20500,n:3,size:4.5,drift:1,kind:"space"},{make:()=>Qh(!0),from:35700,to:35900,n:3,size:5,drift:.3,kind:"space"},{tex:"comet",from:12e4,to:26e4,n:2,size:38,aspect:.31,drift:4,kind:"comet"}],Np=[];(function(){let n=rs(9090);for(let e of Sy)for(let t=0;t<e.n;t++){let i=n()<.5?-1:1,s=n()<.5?-1:1,r;e.make?(r=e.make(),r.scale.multiplyScalar(e.size*(.85+n()*.35)),r.rotation.y=s<0?Math.PI:0):(r=new Gi(new Ti({map:s<0?Dp[e.tex]:lu[e.tex],transparent:!0,alphaTest:.5,depthWrite:!1,fog:!1})),r.scale.set(e.size,e.size*e.aspect,1)),r.visible=!1,ln.add(r),Np.push({obj:r,kind:e.kind,alt:e.from+(e.to-e.from)*((t+n()*.8)/e.n),fx:i*(.3+n()*.55),z:-8-n()*34,drift:e.drift*s,phase:n()*6,spin:new L((n()-.5)*1.2,(n()-.5)*1.2,(n()-.5)*1.2),baseRotY:s<0?Math.PI:0})}})();var by=[11,22,33,44,55,66].map(n=>Ip(n,512,256,!0)),Up=[];(function(){let n=rs(4242);for(let e=0;e<46;e++){let t=n()<.25,i=t?7.5+n()*4:1.3+Math.pow(n(),1.1)*4.5,s=n()<.14,r=(n()-.5)*(s?60:220);s&&Math.abs(r)<16&&(r+=Math.sign(r||1)*16);let a=s?-10-n()*8:-40-n()*170,o=new Ti({map:by[Math.floor(n()*6)],color:16777215,transparent:!0,depthWrite:!1,fog:!1,alphaTest:.5}),l=new Gi(o),c=(t?70:28)+n()*(t?60:34);l.scale.set(c,c*(t?.3:.5),1),ln.add(l),Up.push({alt:i,x:r,z:a,sp:l,drift:(n()-.5)*.5})}})();var Rt=new wt;ln.add(Rt);var eu=nc==="night"?[.35,.25,-.2]:nc==="dawn"?[.05,.12,0]:[0,0,0],On=(n,e,t,i={})=>new Xn(Object.assign({color:kt(Mn(n+eu[0],0,1),Mn(e+eu[1],0,1),Mn(t+eu[2],0,1))},i));(function(){let n=new Oe(new Xi(9e3,9e3),On(.55,.05,.85));n.rotation.x=-Math.PI/2,n.position.y=-1.42,Rt.add(n);let e=new Oe(new Vi(15,64),On(.12,.08,.1));e.rotation.x=-Math.PI/2,e.position.y=-1.4,Rt.add(e);let t=new Oe(new tr(13.6,14.2,64),On(0,.2,1));t.rotation.x=-Math.PI/2,t.position.y=-1.39,Rt.add(t);let i=jt([.08,.06,.05],[.4,.25,.05],[.7,.45,.1]),s=new Oe(new Tt(5.9,6.6,.37,64),i);s.position.y=-1.235,Rt.add(s),pn(s,.04);let r=new Oe(new Tt(4.5,4.8,.27,64),i);r.position.y=-.92,Rt.add(r),pn(r,.04);let a=new Oe(new tr(4.05,4.35,64),On(0,.1,1));a.rotation.x=-Math.PI/2,a.position.y=-.782,Rt.add(a);let o=new Oe(new Vi(1.7,40),On(.5,.3,.1));o.rotation.x=-Math.PI/2,o.position.y=-.781,Rt.add(o);let l=new Oe(new Tt(1.15,1.3,.25,32),jt([1,.85,0],[1,.9,.2],[1,.9,.2]));l.position.y=-.7,Rt.add(l);let c=On(.05,1,.95,{fog:!0}),h=[],u=-3.2,d=-.6,f=1.5,g=11.5,y=-.8,m=[[u-f/2,d-f/2],[u+f/2,d-f/2],[u+f/2,d+f/2],[u-f/2,d+f/2]],p=(C,B,H)=>h.push([C,B,H]);for(let[C,B]of m)p(new L(C,y,B),new L(C,y+g,B),.14);for(let C=0;C<=11;C++){let B=y+C*(g/11);for(let H=0;H<4;H++){let z=m[H],ie=m[(H+1)%4];p(new L(z[0],B,z[1]),new L(ie[0],B,ie[1]),.08),C<11&&p(new L(z[0],B,z[1]),new L(ie[0],B+g/11,ie[1]),.05)}}let x=new js(new Ht(1,1,1),c,h.length),E=new _t,v=new Rn,R=new L(0,1,0);h.forEach(([C,B,H],z)=>{let ie=B.clone().sub(C),Y=ie.length();v.setFromUnitVectors(R,ie.normalize()),E.compose(C.clone().add(B).multiplyScalar(.5),v,new L(H,Y,H)),x.setMatrixAt(z,E)}),Rt.add(x);let A=new Oe(new Ht(f+.5,.22,f+.5),On(1,.85,0));A.position.set(u,y+g+.1,d),Rt.add(A);let _=new Oe(new Tt(.04,.06,2.2,8),On(1,.85,0));_.position.set(u,y+g+1.2,d),Rt.add(_);let b=new Oe(new xn(.16,12,8),On(0,1,.3,{fog:!1}));b.position.set(u,y+g+2.35,d),Rt.add(b),Rt.userData.beacon=b;let N=[];for(let C of[2.1,4.35]){let B=new wt;B.position.set(u+f/2,y+C+.8,d+.4);let H=new Oe(new Ht(2.15,.2,.3),On(1,.85,0));H.position.x=1.075,B.add(H),Rt.add(B),N.push(B)}Rt.userData.arms=N;let w=new ni(1,3,6);w.translate(0,1.5,0);let I=new js(w,On(.95,.2,.8,{fog:!0}),260),O=rs(12);for(let C=0;C<260;C++){let B=O()*Math.PI*2,H=30+Math.pow(O(),.7)*900,z=1.5+O()*3.5;E.compose(new L(Math.cos(B)*H,-1.42,Math.sin(B)*H),new Rn,new L(z,z*(1+O()),z)),I.setMatrixAt(C,E)}Rt.add(I);let X=(C,B,H,z,ie)=>{let j=new Lt,ne=[],we=[],Be=rs(z),J=[],ge=0;for(let ye=0;ye<=200;ye++)ge=Mn(ge+(Be()-.5)*.5,0,1),J.push(B+H*(.35*ge+.65*(.5+.5*Math.sin(ye*.09+z)*Math.sin(ye*.031+z*2))));J[200]=J[0];for(let ye=0;ye<=200;ye++){let Re=ye/200*Math.PI*2;ne.push(Math.cos(Re)*C,-2,Math.sin(Re)*C,Math.cos(Re)*C,-2+J[ye],Math.sin(Re)*C)}for(let ye=0;ye<200;ye++){let Re=ye*2;we.push(Re,Re+2,Re+1,Re+1,Re+2,Re+3)}return j.setAttribute("position",new Qe(ne,3)),j.setIndex(we),new Oe(j,On(...ie,{side:vn,fog:!1}))};Rt.add(X(2600,90,260,3,[.42,.42,0])),Rt.add(X(1500,30,120,7,[.62,.25,.3])),Rt.add(X(800,10,50,11,[.85,.1,.75]))})();var $n=new Gi(new Ti({map:fy(),transparent:!0,alphaTest:.5,depthWrite:!1,fog:!1}));$n.visible=!1;$n.position.set(0,1.6,0);ln.add($n);var Ey=new Kt(4,4,{type:dn,samples:Ep?0:4}),is=new Jl(ns,Ey),Ty=new Ma(Ia,Bn),mu=new Ma(ln,fn);mu.clear=!1;mu.clearDepth=!0;var dc=n=>{let e=new Ke;return e.setRGB((n>>16&255)/255,(n>>8&255)/255,(n&255)/255,An),new L(e.r,e.g,e.b)},fi=new hr(np);fi.uniforms.uPaper.value=dc(15985370);fi.uniforms.uT0.value=dc(30911);fi.uniforms.uT1.value=dc(16730288);fi.uniforms.uT2.value=dc(16771072);fi.uniforms.uRes.value=new se(1,1);fi.uniforms.uSeed.value=Math.random()*100;is.addPass(Ty);is.addPass(mu);is.addPass(fi);var cu=k("ov"),Ne=cu.getContext("2d"),Kn=0,Qt=0,ci={hudBottom:110,dockH:150,menuTop:120,menuBottomH:300};function sc(){let n=k("app").getBoundingClientRect(),e=document.querySelector("#hud .alttag");e&&k("hud").classList.contains("on")&&(ci.hudBottom=e.getBoundingClientRect().bottom-n.top);let t=document.querySelector("#dock .dock-in");t&&k("dock").classList.contains("on")&&(ci.dockH=n.bottom-t.getBoundingClientRect().top);let i=k("logo");i&&(ci.menuTop=i.getBoundingClientRect().bottom-n.top);let s=k("console");s&&(ci.menuBottomH=n.bottom-s.getBoundingClientRect().top);let r=k("overMini");r&&k("over").classList.contains("on")&&(ci.overTop=r.getBoundingClientRect().top-n.top)}function rc(){let n=window.visualViewport,e=Math.round(n?n.height:window.innerHeight),t=Math.round(n?n.width:window.innerWidth),i=k("app");if(i.style.height=e+"px",i.style.width=t+"px",i.style.top=(n?n.offsetTop:0)+"px",k("app").classList.toggle("compact",e<560),setTimeout(sc,30),t===Kn&&e===Qt)return;Kn=t,Qt=e,ns.setSize(t,e,!1),is.setPixelRatio(Ln*fr),is.setSize(t,e),fi.uniforms.uRes.value.set(t*Ln,e*Ln),fi.uniforms.uDpr.value=Ln,fi.uniforms.uCell.value=2.6*Ln;let s=t/e,r=s<.8?52:s<1.3?44:36;for(let a of[fn,Bn])a.aspect=s,a.fov=r,a.updateProjectionMatrix();cu.width=Math.round(t*Ln),cu.height=Math.round(e*Ln),di.mat.uniforms.uScale.value=as.mat.uniforms.uScale.value=e*Ln/(2*Math.tan(r*Math.PI/360))}window.addEventListener("resize",rc);window.visualViewport&&(visualViewport.addEventListener("resize",rc),visualViewport.addEventListener("scroll",rc));rc();document.fonts&&document.fonts.load("800 100px 'Bricolage Grotesque'").then(()=>{ec.clear(),We.userData.labelDraw()}).catch(()=>{});var T={spin:{x:0,y:0,z:0},tumbleT:0,ft:0,path:[],pathT:0,gold:!1,state:"menu",alt:0,v:0,fuel:26,maxAlt:0,t:0,count:0,stage:0,used:new Set,list:[],words:0,longest:"",combo:0,lastWordT:-9,shake:0,boost:0,crashT:0,passed:new Set,launched:!1,armT:0,camBlend:0},ac=n=>.5+n*.035,wy=n=>2.6+1.05*Math.log2(1+n/8),gu=n=>27/ac(n);function Ay(n){let[e,t,i]=n.split("-").map(Number),s=new Date(e,t-1,i),r=(s.getDay()+6)%7;return s.setDate(s.getDate()-r),"W"+s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0")}var hu=Ay(Nt);async function Ry(n){let e="https://www.gstatic.com/firebasejs/10.12.2/",t=x=>import(x),[i,s,r]=await Promise.all([t(e+"firebase-app.js"),t(e+"firebase-firestore.js"),t(e+"firebase-auth.js")]),a=Object.assign({},n);delete a.adminUid;let o=i.initializeApp(a),l=s.getFirestore(o),c=r.getAuth(o),u=await new Promise(x=>{let E=r.onAuthStateChanged(c,v=>{E(),x(v)})})||(await r.signInAnonymously(c)).user,d=u.uid,f={google:!u.isAnonymous,name:u.displayName||"",email:u.email||"",async login(){let x=new r.GoogleAuthProvider;try{return{ok:!0,name:(c.currentUser&&c.currentUser.isAnonymous?await r.linkWithPopup(c.currentUser,x):await r.signInWithPopup(c,x)).user.displayName||"",switched:!1}}catch(E){if(E&&E.code==="auth/credential-already-in-use"){let v=r.GoogleAuthProvider.credentialFromError(E);if(v)return await r.signInWithCredential(c,v),{ok:!0,switched:!0}}return E&&E.code==="auth/popup-blocked"?(await r.signInWithRedirect(c,x),{ok:!1}):{ok:!1,code:E&&E.code||""}}},async logout(){await r.signOut(c)}},g=x=>({id:x.id,exists:x.exists(),data:()=>x.data(),metadata:{fromCache:x.metadata.fromCache}}),y=x=>{let E=s.doc(l,x);return{id:E.id,path:x,get:async()=>g(await s.getDoc(E)),set:v=>s.setDoc(E,v),update:v=>s.updateDoc(E,v),delete:()=>s.deleteDoc(E),onSnapshot:(v,R)=>s.onSnapshot(E,A=>v(g(A)),R)}},m=(x,E)=>({where:(v,R,A)=>m(x,[...E,s.where(v,R,A)]),orderBy:(v,R)=>m(x,[...E,s.orderBy(v,R||"asc")]),limit:v=>m(x,[...E,s.limit(v)]),get:async()=>{let v=await s.getDocs(s.query(s.collection(l,x),...E));return{docs:v.docs.map(g),size:v.size,empty:v.empty}},onSnapshot:(v,R)=>s.onSnapshot(s.query(s.collection(l,x),...E),A=>v({docs:A.docs.map(g),size:A.size,empty:A.empty}),R)});return{db:{doc:y,collection:x=>Object.assign(m(x,[]),{path:x,doc:E=>y(x+"/"+E)})},uid:d,canWrite:!0,owner:!!n.adminUid&&n.adminUid===d,standalone:!0,account:f}}async function Cy(){if(window.claude&&window.claude.use){let[n,e]=await Promise.all([claude.use("db"),claude.use("user")]);if(!n)return{status:"Pro online \u017Eeb\u0159\xED\u010Dek se p\u0159ihlas."};let t=null,i=!1,s=!1;if(e){t=await e.id(),i=await e.can("data.write")!==!1&&!!t;try{s=!!await e.isOwner()}catch{}}return{db:n,uid:t,canWrite:i,owner:s}}if(window.TMINUS_FIREBASE&&window.TMINUS_FIREBASE.apiKey)try{return await Ry(window.TMINUS_FIREBASE)}catch(n){let e=n&&(n.code||n.message)||"nezn\xE1m\xE1 chyba",t=/operation-not-allowed|admin-restricted/.test(e)?" Zapni ve Firebase p\u0159ihl\xE1\u0161en\xED Anonymous.":/api-key|invalid/.test(e)?" Zkontroluj kl\xED\u010D v firebase-config.js.":"";return{status:"Online \u017Eeb\u0159\xED\u010Dek se nep\u0159ipojil ("+e+")."+t}}return{status:"Online \u017Eeb\u0159\xED\u010Dek nen\xED nastaven\xFD."}}var Py=["kurv","pica","pice","picu","kokot","debil","prdel","hovn","curak","mrd","suka","zmrd","buzn","negr","cigos","kreten","idiot","hajzl","sracka","jebat","jeb","fuck","shit","bitch","dick","cunt","nigg","fag","porn","sex","nazi","hitler","piss","kunda","vagin","penis"];function _u(n){let e=String(n||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/0/g,"o").replace(/1/g,"i").replace(/3/g,"e").replace(/4/g,"a").replace(/5/g,"s").replace(/7/g,"t").replace(/@/g,"a").replace(/\$/g,"s").replace(/[^a-z]/g,"");return Py.some(t=>e.includes(t))}var ss=n=>{let e=String(n||"Pilot").slice(0,18);return _u(e)?"Pilot":e},le={db:null,uid:null,canWrite:!1,owner:!1,day:[],all:[],week:[],reports:[],tab:"day",ghosts:[],myBest:+(at("sr-best")||0),myDay:at("sr-day")===Nt?+(at("sr-dayBest")||0):0};function gr(){let n=k("nick").value.trim().replace(/\s+/g," ").slice(0,18);return n&&!_u(n)?n:"Pilot "+(pu(le.uid||at("sr-lid")||"x")%900+100)}(function(){let n=at("sr-lid");n||(n=Math.random().toString(36).slice(2,10),at("sr-lid",n)),k("nick").value=at("sr-nick")||""})();k("nick").addEventListener("change",()=>at("sr-nick",k("nick").value.trim()));function tu(n,e,t,i,s,r,a){let o=document.createElement("li");t.id===le.uid&&(o.className="me");let l=document.createElement("span");l.className="r",l.textContent=String(e+1).padStart(2,"0");let c=document.createElement("span");if(c.className="n",c.textContent=i,a){let f=document.createElement("em");f.className="goldtag",f.textContent="zlat\xE9",c.appendChild(f)}let h=document.createElement("span");h.className="w",h.textContent=s;let u=document.createElement("span");u.className="k",u.textContent=bn(r);let d=document.createElement("small");d.textContent=" km",u.appendChild(d),o.append(l,c,h,u),n.appendChild(o)}function Qi(){let n=k("lb");if(n.textContent="",k("lbCount").textContent=le.day.length?String(le.day.length):"",k("tabReports").hidden=!le.owner,le.tab==="reports")return Uy(n);let e=le.tab==="day"?le.day:le.tab==="week"?le.week:le.all;if(!e.length){let t=document.createElement("li");t.className="empty",t.textContent=le.db?le.tab==="day"?"Dnes je\u0161t\u011B nikdo nelet\u011Bl.":le.tab==="week"?"Tento t\xFDden je\u0161t\u011B nikdo nelet\u011Bl.":"Zat\xEDm \u017E\xE1dn\xE9 lety.":"\u017Deb\u0159\xED\u010Dek nen\xED dostupn\xFD.",n.appendChild(t);return}e.slice(0,50).forEach((t,i)=>{if(le.tab==="day")tu(n,i,t,ss(t.nick),(t.dayWords||0)+" sl.",t.dayBest,t.dayGold);else if(le.tab==="week"){let s=Object.keys(t.weekDays||{}).length;tu(n,i,t,ss(t.nick),oc(s),t.weekTotal)}else tu(n,i,t,ss(t.nick),(t.badges?t.badges.length:0)+" odz.",t.best)})}document.querySelectorAll(".seg button").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll(".seg button").forEach(e=>e.classList.toggle("on",e===n)),le.tab=n.dataset.tab,Qi()}));function fc(){let n=[];if(!T.training){for(let e of le.day.slice(0,15))e.id!==le.uid&&n.push({alt:+e.dayBest||0,name:ss(e.nick).slice(0,14),key:"d"+e.id});le.myDay>0&&n.push({alt:le.myDay,name:"Tv\u016Fj dne\u0161n\xED let",key:"me",me:!0})}le.ghosts=n.filter(e=>e.alt>.05).sort((e,t)=>e.alt-t.alt)}fc();Qi();function Iy(){T.state==="over"&&Vp()}var $l=n=>n.docs.map(e=>Object.assign({id:e.id},e.data()));(async function(){let e=setTimeout(()=>{le.db||(k("dbStatus").textContent="\u017Deb\u0159\xED\u010Dek se zat\xEDm nepoda\u0159ilo na\u010D\xEDst.")},1e4),t;try{t=await Cy()}catch{t={status:"\u017Deb\u0159\xED\u010Dek nen\xED dostupn\xFD."}}if(clearTimeout(e),!t.db){k("dbStatus").textContent=t.status||"";return}Object.assign(le,{db:t.db,uid:t.uid,canWrite:t.canWrite,owner:t.owner}),t.standalone&&t.uid&&(k("pilotId").textContent="ID pilota: "+t.uid+" \xB7 verze "+Bp),t.account&&Dy(t.account),k("dbStatus").textContent=le.canWrite?"":"\u017Deb\u0159\xED\u010Dek vid\xED\u0161, tvoje v\xFDsledky se ukl\xE1daj\xED jen u tebe.";let i=t.db;i.collection("best").orderBy("best","desc").limit(50).onSnapshot(s=>{le.all=$l(s);let r=le.all.find(a=>a.id===le.uid);r&&+r.best>le.myBest&&(le.myBest=+r.best,pc()),Qi()},()=>{}),i.collection("best").where("dayKey","==",Nt).limit(300).onSnapshot(s=>{le.day=$l(s).sort((a,o)=>(+o.dayBest||0)-(+a.dayBest||0));let r=le.day.find(a=>a.id===le.uid);r&&+r.dayBest>le.myDay&&(le.myDay=+r.dayBest),fc(),Qi(),Iy()},()=>{}),i.collection("best").where("weekKey","==",hu).limit(300).onSnapshot(s=>{le.week=$l(s).sort((r,a)=>(+a.weekTotal||0)-(+r.weekTotal||0)),Qi()},()=>{}),i.doc("extra/words").onSnapshot(s=>{let r=s.exists?s.data():null;es.extra=new Set(r&&Array.isArray(r.list)?r.list:[])},()=>{}),le.owner&&i.collection("reports").onSnapshot(s=>{le.reports=$l(s),Qi()},()=>{}),Qi()})();async function Ly(){let n=Math.round(T.maxAlt*100)/100,e=gr(),t=n>le.myBest,i=n>le.myDay,s=Qv();i&&(T.path.push(0),at("sr-path",JSON.stringify({day:Nt,path:T.path,skin:Pa().id}))),t&&(le.myBest=n,at("sr-best",String(n))),i&&(le.myDay=n,at("sr-day",Nt),at("sr-dayBest",String(n)));let r=Fy(s);if(fc(),!le.db||!le.canWrite)return{newBest:t,newDay:i,streak:s,fresh:r};try{let a=le.db.collection("best").doc(le.uid),o=await a.get(),l=o.exists?Object.assign({},o.data()):{},c=l.dayKey===Nt,h=l.weekKey===hu,u={nick:e,best:+l.best||0,bestWords:+l.bestWords||0,bestDate:l.bestDate||"",dayKey:l.dayKey||"",dayBest:+l.dayBest||0,dayWords:+l.dayWords||0,flights:(+l.flights||0)+1,updatedAt:new Date().toISOString(),skin:Pa().id,streak:s,lastDay:Nt,badges:[...xu()],dayAll:Array.from(new Set([...c&&Array.isArray(l.dayAll)?l.dayAll:[],...T.list])).slice(0,500),dayGold:c&&!!l.dayGold||T.gold,dayPath:c&&Array.isArray(l.dayPath)?l.dayPath:[],weekKey:hu,weekDays:h&&l.weekDays&&typeof l.weekDays=="object"?Object.assign({},l.weekDays):{}};n>u.best&&(u.best=n,u.bestWords=T.words,u.bestDate=Nt),c?n>u.dayBest&&(u.dayBest=n,u.dayWords=T.words,u.dayPath=T.path.slice(0,1800)):(u.dayKey=Nt,u.dayBest=n,u.dayWords=T.words,u.dayPath=T.path.slice(0,1800)),u.weekDays[Nt]=Math.max(+u.weekDays[Nt]||0,u.dayBest),u.weekTotal=Math.round(Object.values(u.weekDays).reduce((d,f)=>d+(+f||0),0)*100)/100,await a.set(u)}catch(a){a&&a.code==="invalid_argument"&&(le.canWrite=!1)}return{newBest:t,newDay:i,streak:s,fresh:r}}function Dy(n){let e=k("account");e.hidden=!1;let t=()=>{k("accText").textContent=n.google?"P\u0159ihl\xE1\u0161en p\u0159es Google"+(n.name?": "+n.name:"")+". V\xFDsledky m\xE1\u0161 i na jin\xFDch za\u0159\xEDzen\xEDch.":"Hraje\u0161 bez \xFA\u010Dtu. P\u0159ihlas se p\u0159es Google, a\u0165 o v\xFDsledky nep\u0159ijde\u0161 a m\xE1\u0161 je i na jin\xE9m za\u0159\xEDzen\xED.",k("accBtn").textContent=n.google?"Odhl\xE1sit":"P\u0159ihl\xE1sit p\u0159es Google"};t(),k("accBtn").onclick=async()=>{if(n.google){await n.logout(),location.reload();return}let i=await n.login();if(i.switched){location.reload();return}i.ok?(n.google=!0,n.name=i.name||n.name,!k("nick").value.trim()&&n.name&&(k("nick").value=n.name.split(" ")[0].slice(0,18),at("sr-nick",k("nick").value),yu()),t()):i.code&&(k("accText").textContent="P\u0159ihl\xE1\u0161en\xED se nepovedlo ("+i.code+").")}}var uu="";async function Ny(n){if(!le.db||!le.canWrite){kn("Nahl\xE1sit jde jen s online \u017Eeb\u0159\xED\u010Dkem","bad");return}try{let e=le.db.collection("reports").doc(le.uid),t=await e.get(),i=t.exists?t.data():{},s=Array.from(new Set([...Array.isArray(i.words)?i.words:[],n])).slice(-60);await e.set({nick:gr(),words:s,at:new Date().toISOString()}),kn("\u201E"+en(n)+"\u201C nahl\xE1\u0161eno, d\xEDky","good")}catch{kn("Nahl\xE1\u0161en\xED se nepovedlo","bad")}}function Uy(n){let e=new Map;for(let t of le.reports)for(let i of t.words||[]){if(typeof i!="string")continue;let s=e.get(i)||{n:0,docs:[]};s.n++,s.docs.push(t.id),e.set(i,s)}if(!e.size){let t=document.createElement("li");t.className="empty",t.textContent="\u017D\xE1dn\xE1 nahl\xE1\u0161en\xE1 slova.",n.appendChild(t);return}for(let[t,i]of[...e.entries()].sort((s,r)=>r[1].n-s[1].n)){let s=document.createElement("li");s.className="rep";let r=document.createElement("span");r.className="n",r.textContent=t;let a=document.createElement("span");a.className="w",a.textContent=i.n+"\xD7";let o=document.createElement("button");o.className="mini-btn ok",o.textContent="Schv\xE1lit",o.onclick=()=>ap(t,i.docs,!0);let l=document.createElement("button");l.className="mini-btn",l.textContent="Zam\xEDtnout",l.onclick=()=>ap(t,i.docs,!1),s.append(r,a,o,l),n.appendChild(s)}}async function ap(n,e,t){try{if(t){let i=le.db.doc("extra/words"),s=await i.get(),r=s.exists&&Array.isArray(s.data().list)?s.data().list:[];r.includes(n)||r.push(n),await i.set({list:r.slice(-3e3)})}for(let i of e){let s=le.db.collection("reports").doc(i),r=await s.get();if(!r.exists)continue;let a=r.data(),o=(a.words||[]).filter(l=>l!==n);o.length?await s.set(Object.assign({},a,{words:o})):await s.delete()}}catch{kn("Ulo\u017Een\xED se nepovedlo","bad")}}var Fp=[{id:"prvni",name:"Prvn\xED let",desc:"Dokon\u010Di prvn\xED let."},{id:"deset",name:"Deset slov",desc:"10 slov v jednom letu."},{id:"kanon",name:"Slovn\xED kan\xF3n",desc:"25 slov v jednom letu."},{id:"dlouhan",name:"Dlouh\xE1n",desc:"Slovo s 12 a v\xEDce p\xEDsmeny."},{id:"vesmir",name:"Ve vesm\xEDru",desc:"Dole\u0165 nad 100 km."},{id:"orbita",name:"Ob\u011B\u017En\xE1 dr\xE1ha",desc:"Dole\u0165 nad 400 km."},{id:"geo",name:"Geostacion\xE1r",desc:"Dole\u0165 nad 35 786 km."},{id:"mesic",name:"A\u017E na M\u011Bs\xEDc",desc:"Dole\u0165 do 384 400 km."},{id:"zlato",name:"Zlatokop",desc:"Najdi zlat\xE9 slovo dne."},{id:"serie3",name:"T\u0159i dny v kuse",desc:"Hraj t\u0159i dny po sob\u011B."},{id:"serie7",name:"T\xFDden v kuse",desc:"Hraj sedm dn\xED po sob\u011B."},{id:"roj",name:"P\u0159e\u017Eil jsem roj",desc:"Zvl\xE1dni meteorick\xFD roj."},{id:"souboj",name:"V\xEDt\u011Bz souboje",desc:"Vyhraj souboj 1 na 1."}];function xu(){try{return new Set(JSON.parse(at("sr-badges")||"[]"))}catch{return new Set}}function Op(n){let e=xu(),t=n.filter(i=>!e.has(i));return t.length&&(t.forEach(i=>e.add(i)),at("sr-badges",JSON.stringify([...e]))),t}function Fy(n){let e=["prvni"];return T.words>=10&&e.push("deset"),T.words>=25&&e.push("kanon"),T.list.some(t=>t.length>=12)&&e.push("dlouhan"),T.maxAlt>=100&&e.push("vesmir"),T.maxAlt>=400&&e.push("orbita"),T.maxAlt>=35786&&e.push("geo"),T.maxAlt>=384400&&e.push("mesic"),T.gold&&e.push("zlato"),n>=3&&e.push("serie3"),n>=7&&e.push("serie7"),T.meteorWin&&e.push("roj"),Op(e)}function Oy(n){let e=xu();n.textContent="";for(let t of Fp){let i=document.createElement("div");i.className="badge"+(e.has(t.id)?" got":""),i.innerHTML="<b></b><span>"+en(t.name)+"</span><small>"+en(t.desc)+"</small>",n.appendChild(i)}}var mn=k("word"),op=0;function kn(n,e){let t=k("msg");t.className="msg on "+(e||""),t.innerHTML="<span>"+n+"</span>",clearTimeout(op),op=setTimeout(()=>t.classList.remove("on"),1800)}function By(n){let e=k("recent"),t=document.createElement("span");for(t.textContent=n,e.prepend(t);e.children.length>6;)e.lastChild.remove()}var lp=0;function Ca(n,e){let t=k("toast");t.innerHTML='<div class="in sheet"><div class="t1">'+en(n)+"</div>"+(e?'<div class="t2">'+en(e)+"</div>":"")+"</div>",t.classList.add("on"),clearTimeout(lp),lp=setTimeout(()=>t.classList.remove("on"),2300)}function cp(n){let e=k("count");e.textContent=n,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function mr(n){["menu","over","board"].forEach(t=>k(t).classList.toggle("on",t===n));let e=n===null;k("hud").classList.toggle("on",e),k("dock").classList.toggle("on",e),k("app").classList.toggle("playing",e),setTimeout(sc,60),setTimeout(sc,500)}function ky(n){let e=new L(0,6.8,0);We.localToWorld(e),e.project(fn);let t=document.createElement("div");t.className="float",t.textContent=n,t.style.left=(e.x*.5+.5)*Kn+34+(Math.random()-.5)*20+"px",t.style.top=(-e.y*.5+.5)*Qt+"px",k("floats").appendChild(t),setTimeout(()=>t.remove(),1300)}var zy=[243,234,218],Hy=[[0,120,191],[255,72,176],[255,232,0]];function dr(n){return"rgb("+zy.map((t,i)=>t*Hy.reduce((s,r,a)=>s*(1-n[a]+n[a]*r[i]/255),1)).map(t=>Math.round(t)).join(",")+")"}function Pa(){let n=ou(at("sr-skin"));return n.need<=le.myBest?n:li[0]}function pc(){let n=Pa(),e=k("skinIcon");e.style.setProperty("--b",dr(n.body)),e.style.setProperty("--a",dr(n.accent)),e.style.setProperty("--t",dr(n.trim)),k("skinName").textContent=n.name;let t=k("skins");t.textContent="";for(let s of li){let r=s.need<=le.myBest,a=document.createElement("button");a.type="button",a.className="skin"+(s.id===n.id?" on":"")+(r?"":" locked"),a.style.setProperty("--b",dr(s.body)),a.style.setProperty("--a",dr(s.accent)),a.style.setProperty("--t",dr(s.trim)),a.innerHTML='<i class="r"><i class="n"></i><i class="tr"></i></i><span>'+en(r?s.name:s.need.toLocaleString("cs-CZ")+" km")+"</span>",r&&a.addEventListener("click",()=>{at("sr-skin",s.id),pc()}),t.appendChild(a)}let i=li.find(s=>s.need>le.myBest);k("skinHint").textContent=i?"Dal\u0161\xED vzhled se odemkne ve v\xFD\u0161ce "+i.need.toLocaleString("cs-CZ")+" km.":"M\xE1\u0161 odem\u010Den\xE9 v\u0161echny vzhledy.",uc(We,n)}function vu(n){k("sheet").hidden=!1,k("sheetTitle").textContent={pilot:"Pilot",skin:"Raketa",duel:"Souboj 1 na 1"}[n],k("sheetPilotWrap").hidden=n!=="pilot",k("sheetSkin").hidden=n!=="skin",k("sheetDuel").hidden=n!=="duel",k("nickErr").textContent="",n==="pilot"&&Oy(k("badgeGrid")),n==="duel"&&Le.code&&!Le.started&&Le.doc&&Le.doc.guest?(Sn(Le.host?"Soupe\u0159 <b>"+en(ss(Le.doc.guestNick))+"</b> je p\u0159ipraven.":"P\u0159ipojeno do souboje <b>"+Le.code+"</b>. \u010Cekej, a\u017E soupe\u0159 odstartuje."),k("duelGo").hidden=!Le.host):n==="duel"&&Le.code&&!Le.started&&Le.host?Sn('K\xF3d souboje: <b class="code">'+Le.code+"</b><br>Po\u0161li ho soupe\u0159i a \u010Dekej, a\u017E se p\u0159ipoj\xED."):n==="duel"&&Sn(le.db&&le.canWrite?"Zalo\u017E souboj a po\u0161li k\xF3d soupe\u0159i, nebo zadej k\xF3d, kter\xFD ti poslal.":"Souboj pot\u0159ebuje online \u017Eeb\u0159\xED\u010Dek s pr\xE1vem z\xE1pisu.")}function Da(n){if(n===!0){k("sheet").hidden=!0;return}let e=k("nick").value.trim();if(e&&_u(e)){if(k("nickErr").textContent="Tuhle p\u0159ezd\xEDvku zvol pros\xEDm jinou.",k("sheetPilotWrap").hidden===!1)return;k("nick").value=""}k("sheet").hidden=!0,at("sr-nick",k("nick").value.trim()),yu()}function yu(){let n=k("nick").value.trim();k("pilotName").textContent=n||"Pilot"}k("openSkin").addEventListener("click",()=>vu("skin"));k("openPilot").addEventListener("click",()=>vu("pilot"));k("sheetClose").addEventListener("click",()=>Da());k("nickOk").addEventListener("click",Da);k("nick").addEventListener("keydown",n=>{n.key==="Enter"&&Da()});k("sheet").addEventListener("click",n=>{n.target===k("sheet")&&Da()});function Gy(){for(let e of ui)ln.remove(e.mesh);ui.length=0}function Mu(){for(let n of ui)ln.remove(n.mesh);ui.length=0}function hp(n,e){if(n.live){let r=Le.opp;if(!r)return 0;if(r.crashed)return null;if(e!==T.ft)return n.smooth==null?+r.alt||0:n.smooth;let a=r.ts?Math.min(1.2,Math.max(0,(Date.now()-r.ts)/1e3)):0,o=Math.max(0,(+r.alt||0)+(+r.v||0)*a);return n.smooth=n.smooth==null?o:oi(n.smooth,o,.18),n.smooth}let t=e/.5,i=Math.floor(t);if(i>=n.path.length-1)return null;let s=t-i;return oi(n.path[i],n.path[i+1],s)}var tc={meteor:{name:"Meteorick\xFD roj",hint:"Napi\u0161 slovo se 7+ p\xEDsmeny, jinak \u221220 paliva",dur:7},turb:{name:"Turbulence",hint:"Palivo te\u010F ho\u0159\xED rychleji",dur:6},hacky:{name:"H\xE1\u010Dkov\xE9 okno",hint:"Slova s h\xE1\u010Dkem nebo \u010D\xE1rkou daj\xED dvojn\xE1sob",dur:8}};function Vy(){let n=T.event,e=tc[n.type];k("evName").textContent=e.name,k("evHint").textContent=e.hint,k("event").className="event on "+n.type}function Su(){k("event").className="event"}function Wy(n){if(T.event){let i=T.event;if(i.t+=n,k("evBar").style.transform="scaleX("+Math.max(0,1-i.t/tc[i.type].dur)+")",i.type==="turb"&&(T.shake=Math.max(T.shake,.22)),i.type==="meteor"&&Math.random()<n*14){let s=(Math.random()-.3)*30;ws(as,{p:new L(s,22+Math.random()*8,-6-Math.random()*10),v:new L(-9-Math.random()*5,-16-Math.random()*8,0),life:1,max:1.4,size:.5+Math.random()*.6,kind:"meteor",rot:0})}i.t>=tc[i.type].dur&&(i.type==="meteor"&&!i.done&&(T.fuel=Math.max(0,T.fuel-20),T.shake=.8,vt.bad(),Ca("Z\xE1sah meteoritem","\u221220 paliva"),T.fuel<=0&&!T.out&&Wp()),T.event=null,T.burnMul=1,Su(),T.nextEvent=T.ft+22+Math.random()*18);return}if(T.out||T.fuel<=0||T.ft<T.nextEvent||T.alt<.6)return;let e=Object.keys(tc),t=e[Math.floor(Math.random()*e.length)];T.event={type:t,t:0,done:!1},T.burnMul=t==="turb"?1.6:1,Vy(),vt.stage()}var Le={code:"",host:!1,unsub:null,oppUnsub:null,opp:null,oppId:"",oppNick:"",started:!1,sendT:0,last:"",doc:null},up="ABCDEFHJKLMNPRSTUVXYZ",Bp="18";function Sn(n){k("duelState").innerHTML=n+'<br><small style="opacity:.55">verze '+Bp+"</small>"}async function Xy(){if(!le.db||!le.canWrite)return Sn("Souboj pot\u0159ebuje online \u017Eeb\u0159\xED\u010Dek s pr\xE1vem z\xE1pisu.");bu();let n="";for(let e=0;e<4;e++)n+=up[Math.floor(Math.random()*up.length)];try{await le.db.doc("duels/"+n).set({host:le.uid,hostNick:gr(),guest:"",guestNick:"",state:"wait",day:Nt,created:Date.now()}),Object.assign(Le,{code:n,host:!0}),kp(),Sn('K\xF3d souboje: <b class="code">'+n+"</b><br>Po\u0161li ho soupe\u0159i a \u010Dekej, a\u017E se p\u0159ipoj\xED.")}catch{Sn("Souboj se nepoda\u0159ilo zalo\u017Eit.")}}async function qy(){let n=k("duelCode").value.trim().toUpperCase();if(n.length!==4)return Sn("K\xF3d m\xE1 4 p\xEDsmena.");if(!le.db||!le.canWrite)return Sn("Souboj pot\u0159ebuje online \u017Eeb\u0159\xED\u010Dek s pr\xE1vem z\xE1pisu.");bu();try{let e=le.db.doc("duels/"+n),t=await e.get();if(!t.exists)return Sn("Souboj s k\xF3dem "+en(n)+" neexistuje.");let i=t.data();if(i.state!=="wait"||i.day!==Nt)return Sn("Tento souboj u\u017E nen\xED voln\xFD.");await e.update({guest:le.uid,guestNick:gr(),state:"ready"}),Object.assign(Le,{code:n,host:!1}),kp(),Sn("P\u0159ipojeno. \u010Cekej, a\u017E soupe\u0159 odstartuje.")}catch{Sn("P\u0159ipojen\xED se nepovedlo.")}}function kp(){let n=le.db.doc("duels/"+Le.code),e=n.onSnapshot(dp,()=>{}),t=setInterval(()=>{if(!Le.code||Le.started)return clearInterval(t);n.get().then(dp).catch(()=>{})},1e3);Le.unsub=()=>{e(),clearInterval(t)}}function dp(n){if(!Le.code||!n||!n.exists)return;let e=n.data();if(Le.doc=e,Le.host&&e.state==="ready"&&(Sn("Soupe\u0159 <b>"+en(ss(e.guestNick))+"</b> je p\u0159ipraven."),k("duelGo").hidden=!1),e.state==="go"&&!Le.started){Le.started=!0,k("duelBtn").textContent="Souboj 1 na 1",Le.oppId=Le.host?e.guest:e.host,Le.oppNick=ss(Le.host?e.guestNick:e.hostNick);let t=le.db.doc("duels/"+Le.code+"/live/"+Le.oppId),i=o=>{o&&(Le.opp=o.exists?o.data():null,T.state==="over"&&T.mode==="duel"&&Hp())},s=t.onSnapshot(i,()=>{}),r=setInterval(()=>{if(!Le.code||Le.opp&&Le.opp.crashed)return clearInterval(r);t.get().then(i).catch(()=>{})},900);Le.oppUnsub=()=>{s(),clearInterval(r)},mc("duel"),ut.on&&ut.available()&&(ut.want=!0,ut.armTap());let a=e.startAt?(Date.now()-e.startAt)/1e3:0;a>0&&a<3&&(T.count=Math.max(.25,T.count-a))}else e.guest&&!Le.started&&Yy(e)}function Yy(n){Le.oppNick=ss(Le.host?n.guestNick:n.hostNick),ui.some(t=>t.live)||zp();let e=ui.find(t=>t.live);e&&(e.name=Le.oppNick),k("duelBtn").textContent=Le.host?"Souboj: "+Le.oppNick+" \u010Dek\xE1, odstartuj":"Souboj: \u010Dek\xE1\u0161 na start soupe\u0159e"}async function Zy(){k("duelGo").hidden=!0;try{await le.db.doc("duels/"+Le.code).update({state:"go",startAt:Date.now()})}catch{Sn("Start se nepovedl.")}}function fp(n){if(Le.sendT-=n,Le.sendT>0||!Le.code)return;Le.sendT=.3;let e={alt:Math.round(Math.max(0,T.alt)*1e3)/1e3,v:Math.round(T.v*1e3)/1e3,max:Math.round(T.maxAlt*100)/100,out:!!T.out,crashed:T.state!=="play",words:T.words,nick:gr()},t=JSON.stringify(e);t!==Le.last&&(Le.last=t,e.ts=Date.now(),le.db.doc("duels/"+Le.code+"/live/"+le.uid).set(e).catch(()=>{}))}function zp(){Mu(),ui.push({name:Le.oppNick||"Soupe\u0159",live:!0,skin:li[1],mesh:uy(li[1]===Pa()?li[2]||li[0]:li[1]),x:3.1,z:-2.5,done:!1})}function Hp(){Le.code&&le.db.doc("duels/"+Le.code+"/live/"+le.uid).set({alt:0,max:Math.round(T.maxAlt*100)/100,out:!0,crashed:!0,words:T.words,nick:gr()}).catch(()=>{});let n=Le.opp,e=k("duelResult");if(!n||!n.crashed){e.textContent="Souboj: "+(Le.oppNick||"soupe\u0159")+" je\u0161t\u011B let\xED\u2026";return}let t=T.maxAlt,i=+n.max||0;if(t>i){if(e.textContent="Vyhr\xE1l jsi souboj: "+bn(t)+" km proti "+bn(i)+" km",Op(["souboj"]).length){let r=document.createElement("span");r.className="chip badge-chip",r.textContent="V\xEDt\u011Bz souboje",k("newBadges").appendChild(r),k("badgeRow").hidden=!1}}else t<i?e.textContent="Souboj vyhr\xE1l "+Le.oppNick+": "+bn(i)+" km proti tv\xFDm "+bn(t)+" km":e.textContent="Rem\xEDza: oba "+bn(t)+" km"}function bu(){(T.mode!=="duel"||T.state==="menu")&&Mu(),Le.unsub&&Le.unsub(),Le.oppUnsub&&Le.oppUnsub(),Object.assign(Le,{code:"",host:!1,unsub:null,oppUnsub:null,opp:null,oppId:"",started:!1,last:"",doc:null}),k("duelGo").hidden=!0,k("duelBtn").textContent="Souboj 1 na 1"}k("duelCreate").addEventListener("click",Xy);k("duelJoin").addEventListener("click",qy);k("duelGo").addEventListener("click",Zy);k("duelBtn").addEventListener("click",()=>{vu("duel")});var Gp=!!(window.claude&&window.claude.use),ut={ns:null,rec:null,on:at("sr-voice")==="1",listening:!1,want:!1,kind:"",needTap:!1,available(){return!!this.kind},async init(){if(Gp){try{this.ns=await claude.use("dictation")}catch{this.ns=null}this.ns&&(this.kind="claude",this.ns.onFinal(({text:n})=>this.heard(n)),this.ns.onPartial(({text:n})=>this.partial(n)),this.ns.onState(({state:n,reason:e})=>{this.listening=n==="listening"||n==="starting"||n==="finishing",n==="idle"&&this.want&&this.active()&&(e==="not_granted"?(this.want=!1,kn("Mikrofon nen\xED povolen\xFD","bad")):e==="viewer_stopped"?this.want=!1:e!=="stopped"&&this.armTap()),Di()}))}else{let n=window.SpeechRecognition||window.webkitSpeechRecognition;if(n){this.kind="web";let e=new n;e.lang="cs-CZ",e.continuous=!0,e.interimResults=!0,e.maxAlternatives=1,e.onresult=t=>{let i="";for(let s=t.resultIndex;s<t.results.length;s++){let r=t.results[s][0].transcript;t.results[s].isFinal?this.heard(r):i+=r}this.partial(i)},e.onstart=()=>{this.listening=!0,Di()},e.onend=()=>{if(this.listening=!1,Di(),this.want&&this.active())try{e.start()}catch{this.armTap()}},e.onerror=t=>{(t.error==="not-allowed"||t.error==="service-not-allowed")&&(this.want=!1,kn("Mikrofon nen\xED povolen\xFD","bad"))},this.rec=e}}Di()},active(){return T.state==="play"||T.state==="count"},start(){if(!(!this.on||!this.kind)){if(this.want=!0,this.needTap=!1,this.ns){let n=at("sr-voice-lang")==="default";this.ns.start(n?void 0:{language:"cs"}).catch(e=>{let t=e&&e.code;t==="not_granted"?(this.want=!1,kn("Mikrofon nen\xED povolen\xFD","bad")):t==="unavailable"&&!n?(at("sr-voice-lang","default"),this.armTap()):t!=="stopped"&&this.armTap()})}else if(this.rec)try{this.rec.start()}catch{}this.sentPartial=new Set,Di()}},armTap(){this.want&&(this.needTap=!0,kn("Klepni kamkoli na obrazovku a mluv d\xE1l","warn"),Di())},stop(){if(this.want=!1,this.needTap=!1,this.ns)this.ns.stop().catch(()=>{});else if(this.rec)try{this.rec.stop()}catch{}k("voiceLive").textContent="",Di()},partial(n){if(!this.on||!this.active())return;k("voiceLive").textContent=n?n.trim():"";let e=this.split(n);e.pop();for(let t of e)fu(t,!0,!0)},heard(n){if(!(!this.on||!this.active()))for(let e of this.split(n))fu(e,!0,!1)},split(n){return String(n||"").toLocaleLowerCase("cs").replace(/[^a-záčďéěíňóřšťúůýž\s]/g," ").split(/\s+/).filter(Boolean)}};k("app").addEventListener("pointerdown",()=>{ut.needTap&&ut.on&&ut.active()&&ut.start()},!0);function Di(){let n=ut.available();k("voiceBtn").hidden=!n&&!Gp,k("voiceBtn").textContent=n?ut.on?"Hlasem: zapnuto":"Hr\xE1t hlasem":"Hlas: jen v Chromu",k("voiceBtn").classList.toggle("na",!n),k("voiceBtn").classList.toggle("on",ut.on);let e=ut.on&&n;k("dock").classList.toggle("voice",e),k("micBtn").classList.toggle("live",ut.listening),k("micBtn").classList.toggle("tap",ut.needTap),mn.readOnly=e||!!T.out,e&&!T.out&&(mn.placeholder=ut.needTap?"klepni na obrazovku":ut.listening?"mluv: slova na "+ts.L:"zap\xEDn\xE1m mikrofon\u2026")}k("voiceBtn").addEventListener("click",()=>{if(!ut.available()){k("voiceInfo").hidden=!k("voiceInfo").hidden;return}ut.on=!ut.on,at("sr-voice",ut.on?"1":"0"),Di()});k("micBtn").addEventListener("pointerdown",n=>n.preventDefault());k("micBtn").addEventListener("click",()=>{ut.listening||ut.want?ut.stop():ut.start()});ut.init();var Jy={timer:null,step:0,next:0,start(){!vt.ctx||this.timer||(this.next=vt.ctx.currentTime+.1,this.timer=setInterval(()=>this.tick(),70))},tick(){let n=vt.ctx;if(n)for(;this.next<n.currentTime+.25;)this.play(this.step,this.next),this.next+=this.dur(),this.step++},dur(){return T.state==="play"?.17:.26},note(n,e,t,i,s){let r=vt.ctx,a=r.createOscillator(),o=r.createGain();a.type=i,a.frequency.value=440*Math.pow(2,(n-69)/12),o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(s,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o),o.connect(r.destination),a.start(e),a.stop(e+t+.05)},play(n,e){if(vt.muted)return;let t=T.alt,i=t>100,s=T.state==="play",r=[0,2,4,7,9,12,14,16,19],a=i?52:t>12?55:57,o=[0,2,4,2,5,3,4,1,0,4,6,4,5,3,2,1];if(s||n%2===0){let l=a+r[o[n%16]+(i&&n%32>15?2:0)];this.note(l+12,e,s?.22:.4,"triangle",s?.035:.025)}n%8===0&&this.note(a-12+(n%32>=16?5:0),e,s?1.2:1.8,"sine",.06),i&&n%16===8&&this.note(a+24+7,e,1.6,"sine",.018)}};function mc(n){if(typeof n!="string"&&(n="daily"),vt.init(),vt.ctx&&vt.ctx.state==="suspended"&&vt.ctx.resume(),Jy.start(),T.mode=n,T.training=n==="training",T.training){let e=ru.filter(i=>i!==Rs),t=e[Math.floor(Math.random()*e.length)];ts={L:t,ll:t.toLocaleLowerCase("cs")}}else ts={L:Rs,ll:xp};document.querySelectorAll("#hud .stamp, #field .pre").forEach(e=>e.textContent=ts.L),k("modeTag").textContent=T.training?"Tr\xE9nink":n==="duel"?"Souboj":"",k("modeTag").hidden=n==="daily",Da(!0),at("sr-nick",k("nick").value.trim()),Object.assign(T,{state:"count",alt:0,v:0,fuel:26,maxAlt:0,count:3.4,stage:0,used:new Set,list:[],words:0,longest:"",combo:0,lastWordT:-9,shake:0,boost:0,crashT:0,passed:new Set,launched:!1,armT:0}),di.list.length=0,as.list.length=0,k("recent").textContent="",We.visible=!0,Ra.length=0,T.out=!1,mn.readOnly=!1,mn.placeholder="dopi\u0161 slovo",k("dock").classList.remove("dead"),La.forEach(e=>e.visible=!1),$n.visible=!1,Object.assign(T,{falling:!1,resultsShown:!1,outT:0,ft:0,path:[],pathT:0,gold:!1,event:null,nextEvent:16+Math.random()*10,meteorWin:!1,burnMul:1}),Su(),k("reportBtn").hidden=!0,uc(We,Pa()),We.rotation.set(0,0,0),T.spin={x:0,y:0,z:0},T.tumbleT=0,T.mode==="daily"?Gy():Mu(),T.mode==="duel"&&zp(),fc(),mr(null),k("stageName").textContent=hi[0].name,mn.value="",k("voiceLive").textContent="",ut.on&&ut.available()||mn.focus(),Di(),du=9}var du=9;function fu(n,e,t){if(T.state!=="play"&&T.state!=="count"||T.out)return;let i=n.trim().toLocaleLowerCase("cs");if(!i)return;let s=h=>{kn(h,"bad"),vt.bad();let u=k("field");u.classList.remove("shake"),u.offsetWidth,u.classList.add("shake")};if(!/^[a-záčďéěíňóřšťúůýž]+$/.test(i))return s("Jen p\xEDsmena, bez mezer");let r=ts.ll+i;if(e){if(i[0]!==ts.ll||i.length<3||(r=i,T.used.has(r))||!es.has(r)&&t)return}else i[0]===ts.ll&&!es.has(r)&&es.has(i)&&(r=i);if(r.length<3)return s("Aspo\u0148 3 p\xEDsmena");if(T.used.has(r))return s("\u201E"+en(r)+"\u201C u\u017E bylo");if(!es.has(r)){uu=r;let h=k("reportBtn");return h.textContent="Nahl\xE1sit \u201E"+r+"\u201C",h.hidden=!1,clearTimeout(h._t),h._t=setTimeout(()=>h.hidden=!0,4500),s("\u201E"+en(r)+"\u201C ve slovn\xEDku nen\xED")}T.used.add(r);let a=Math.min(30,3+r.length*2.2),o=!1;for(let h of T.list){let u=0;for(;u<h.length&&u<r.length&&h[u]===r[u];)u++;if(u>=Math.max(3,Math.min(h.length,r.length)-1)){o=!0;break}}T.list.push(r),o&&(a*=.4),T.t-T.lastWordT<3.2&&T.state==="play"?T.combo++:T.combo=0,T.lastWordT=T.t,a=Math.round(a*(1+Math.min(T.combo,5)*.08));let l=!1,c="";T.event&&T.event.type==="hacky"&&/[áčďéěíňóřšťúůýž]/.test(r)&&(a*=2,c=" <i>h\xE1\u010Dek \xD72</i>"),T.event&&T.event.type==="meteor"&&!T.event.done&&r.length>=7&&(T.event.done=!0,T.meteorWin=!0,a+=12,c=" <i>roj odra\u017Een</i>",Ca("Roj odra\u017Een","+12 paliva")),!T.training&&wa&&r===wa&&!T.gold&&(l=!0,T.gold=!0,a+=60,at("sr-goldDay",Nt)),T.fuel=Math.min(100,T.fuel+a),T.words++,r.length>T.longest.length&&(T.longest=r),l&&(Ca("Zlat\xE9 slovo","+60 paliva"),k("toast").classList.add("gold"),setTimeout(()=>k("toast").classList.remove("gold"),2400),vt.stage(),T.shake=.6),T.boost=1,T.shake=Math.max(T.shake,.18),vt.ok(Math.min(T.combo,6)),kn(en(r)+" <b>+"+a+"</b>"+(c||(o?" <i>p\u0159\xEDbuzn\xE9 slovo</i>":T.combo>0?" <i>s\xE9rie \xD7"+(T.combo+1)+"</i>":"")),o?"warn":"good"),By(r),ky("+"+a),$y(r),mn.value=""}k("wf").addEventListener("submit",n=>{n.preventDefault(),fu(mn.value),mn.focus()});k("sendBtn").addEventListener("pointerdown",n=>n.preventDefault());k("app").addEventListener("pointerdown",n=>{(T.state==="play"||T.state==="count")&&!n.target.closest("button")&&!(ut.on&&ut.available())&&(n.preventDefault(),mn.focus())});k("startBtn").addEventListener("click",()=>{ut.start(),mc("daily")});k("again").addEventListener("click",()=>{ut.start(),mc(T.mode==="duel"?"daily":T.mode||"daily")});k("trainBtn").addEventListener("click",()=>{ut.start(),mc("training")});k("againMini").addEventListener("click",()=>k("again").click());k("toFull").addEventListener("click",()=>{k("overMini").hidden=!0,k("overFull").hidden=!1});k("backMini").addEventListener("click",()=>{k("overFull").hidden=!0,k("overMini").hidden=!1,setTimeout(sc,30)});k("reportBtn").addEventListener("pointerdown",n=>n.preventDefault());k("reportBtn").addEventListener("click",()=>{uu&&Ny(uu),k("reportBtn").hidden=!0,mn.focus()});k("toBoard").addEventListener("click",()=>{mr("board"),Qi()});k("toMenu2").addEventListener("click",()=>k("toMenu").click());k("closeBoard").addEventListener("click",()=>{T.state==="over"?mr("over"):mr("menu")});k("toMenu").addEventListener("click",()=>{T.state="menu",bu(),Ky(),mr("menu")});function Ky(){We.rotation.set(0,0,0),Object.assign(T,{falling:!1,resultsShown:!1,outT:0,alt:0,v:0,maxAlt:0,boost:0,shake:0,crashT:0,launched:!1,armT:0}),di.list.length=0,as.list.length=0,We.visible=!0,$n.visible=!1,La.forEach(n=>n.visible=!1)}function $y(n){let e=k("field").getBoundingClientRect(),t=k("app").getBoundingClientRect(),i=new L(0,hc+.6,0);We.localToWorld(i),i.project(fn);let s=(i.x*.5+.5)*Kn,r=(-i.y*.5+.5)*Qt;[...n].forEach((a,o)=>{let l=document.createElement("span");l.className="fly",l.textContent=a.toLocaleUpperCase("cs");let c=e.left-t.left+44+o*14,h=e.top-t.top+14;l.style.left=c+"px",l.style.top=h+"px",k("floats").appendChild(l);let u=s-c-10,d=r-h,f=l.animate([{transform:"translate(0,0) rotate(0deg) scale(1)"},{transform:`translate(${u*.35+(o-n.length/2)*16}px,${d*.6-30}px) rotate(${o%2?18:-18}deg) scale(1.15)`,offset:.55},{transform:`translate(${u}px,${d}px) rotate(${o%2?40:-40}deg) scale(.35)`}],{duration:560+o*55,easing:"cubic-bezier(.45,0,.7,1)",fill:"forwards"});f.onfinish=()=>{l.remove(),Ra.push(a)}})}async function pp(){ut.stop(),T.state="over",vt.engine(0),Su();let n=T.training?{streak:Mp(),fresh:[],training:!0}:await Ly();T.mode==="duel"&&Hp(),k("oAlt").innerHTML=bn(T.maxAlt)+"<small>km</small>",k("mAlt").innerHTML=bn(T.maxAlt)+"<small>km</small>",k("overMini").hidden=!1,k("overFull").hidden=!0,k("oWords").textContent=T.words,k("oLong").textContent=T.longest||"\u2013";let e=hi.reduce((s,r,a)=>T.maxAlt>=r.at?a:s,0);k("overHead").textContent=n.training?"Tr\xE9nink \xB7 p\xEDsmeno "+ts.L:n.newBest?"Nov\xFD osobn\xED rekord":n.newDay?"Tv\u016Fj nejlep\u0161\xED dne\u0161n\xED let":"Konec letu",k("shareBtn").hidden=!!n.training,k("rankCell").hidden=!!n.training,k("over").classList.toggle("training",!!n.training);let t=k("newBadges");t.textContent="";for(let s of n.fresh||[]){let r=Fp.find(o=>o.id===s);if(!r)continue;let a=document.createElement("span");a.className="chip badge-chip",a.textContent=r.name,t.appendChild(a)}k("badgeRow").hidden=!(n.fresh&&n.fresh.length),k("duelResult").hidden=T.mode!=="duel",k("mHead").textContent=k("overHead").textContent,k("overStage").textContent=hi[e].name,k("mStage").textContent=hi[e].name;let i=()=>{if(!le.db)return"\u2013";let s=le.day.findIndex(r=>r.id===le.uid);return le.canWrite&&s>=0?s+1+".":le.day.filter(r=>+r.dayBest>T.maxAlt).length+1+"."};k("oRank").textContent=i(),setTimeout(()=>{T.state==="over"&&(k("oRank").textContent=i())},1500),T.lastResult={streak:n.streak,stage:e},k("oStreak").textContent=oc(n.streak),Vp(),Sp(),pc(),vp(),k("shareBtn").textContent="Zkop\xEDrovat v\xFDsledek",k("shareFallback").hidden=!0,mr("over"),mn.blur()}function mp(n,e,t){if(n.textContent="",!e.length){let i=document.createElement("span");i.className="none",i.textContent="\u2013",n.appendChild(i);return}for(let i of e){let s=document.createElement("span");s.className="chip "+(t||""),s.textContent=i,n.appendChild(s)}}function Vp(){mp(k("myWords"),T.list.slice(),"mine");let n=new Set(T.list),e=new Map;for(let s of le.day)if(Array.isArray(s.dayAll))for(let r of new Set(s.dayAll))typeof r!="string"||r.length>24||e.set(r,(e.get(r)||0)+1);for(let s of n)le.day.some(r=>r.id===le.uid)||e.set(s,(e.get(s)||0)+1);let t=[...e.entries()].filter(([s])=>!n.has(s)).sort((s,r)=>r[1]-s[1]||s[0].localeCompare(r[0],"cs")).slice(0,14).map(s=>s[0]);mp(k("otherWords"),t,"other"),k("otherNote").textContent=le.db?t.length?"":"Zat\xEDm nikdo jin\xFD dnes nenapsal nic, co bys nem\u011Bl.":"Bez online \u017Eeb\u0159\xED\u010Dku nevid\xED\u0161 slova ostatn\xEDch.";let i=[...e.entries()].sort((s,r)=>r[1]-s[1])[0];k("wordOfDay").innerHTML=i&&i[1]>=2?"Slovo dne: <b>"+en(i[0])+"</b> \xB7 napsalo ho "+i[1]+(i[1]<5?" piloti":" pilot\u016F"):""}function jy(){let n=new Date,e=T.lastResult?T.lastResult.stage:0,t=hi.map((r,a)=>a<=e?"\u25B0":"\u25B1").join(""),i=["TM\xCDNUS \xB7 "+n.getDate()+". "+(n.getMonth()+1)+". \xB7 p\xEDsmeno "+Rs,bn(T.maxAlt)+" km \xB7 "+hi[e].name,T.words+" "+(T.words===1?"slovo":T.words<5&&T.words>0?"slova":"slov")+(T.longest?" \xB7 nejdel\u0161\xED: "+T.longest:""),t],s=[];return T.lastResult&&T.lastResult.streak>1&&s.push("s\xE9rie "+oc(T.lastResult.streak)),T.gold&&s.push("zlat\xE9 slovo nalezeno"),s.length&&i.splice(3,0,s.join(" \xB7 ")),i.join(`
`)}k("shareBtn").addEventListener("click",async()=>{let n=jy();try{await navigator.clipboard.writeText(n),k("shareBtn").textContent="Zkop\xEDrov\xE1no"}catch{let t=k("shareFallback");t.hidden=!1,t.value=n,t.focus(),t.select(),k("shareBtn").textContent="Ozna\u010D a zkop\xEDruj text"}});function Wp(){ut.stop(),T.out=!0,Ra.length=0,T.tumbleT=0;let n=()=>Math.random()<.5?-1:1;T.spin={z:n()*(1.4+Math.random()*1.6),x:n()*(.4+Math.random()*1.2),y:n()*(.5+Math.random())},mn.value="",mn.readOnly=!0,mn.placeholder="do\u0161lo palivo",k("dock").classList.add("dead"),kn("Do\u0161lo palivo \u2014 raketa pad\xE1","bad"),vt.bad()}function Qy(){T.state="crash",Xp(),Ca("Dopad","")}function Xp(){T.crashT=0,T.v=0,T.shake=1,vt.boom(),vt.engine(0),We.visible=!1,$n.visible=!0;for(let n=0;n<60;n++){let e=Math.random()*Math.PI*2,t=Math.random()*1.2,i=3+Math.random()*14,s=new L(Math.cos(e)*Math.cos(t),Math.sin(t)+.2,Math.sin(e)*Math.cos(t));ws(as,{p:new L(0,1.5,0),v:s.multiplyScalar(i),life:1,max:.6+Math.random()*.9,size:.35+Math.random()*.5,kind:"boom",rot:Math.random()*6}),n%2&&ws(di,{p:new L((Math.random()-.5)*2,1+Math.random()*2,(Math.random()-.5)*2),v:s.clone().multiplyScalar(.35).add(new L(0,1.5,0)),life:1,max:2.5+Math.random()*2,size:2+Math.random()*2.5,grow:1.4,kind:"boom",rot:Math.random()*6,rs:(Math.random()-.5)*.6})}}function eM(n){if(T.t+=n,T.state==="count"){T.count-=n;let e=Math.ceil(T.count);e!==du&&e>=0&&e<=3&&(du=e,e>0?(cp("T\u2013"+e),vt.beep(!1)):(cp("Start"),vt.beep(!0))),T.count<=0&&(T.state="play",T.launched=!0)}if(T.state==="play"){let e=ac(T.alt),t=T.fuel>0;for(t?(T.fuel=Math.max(0,T.fuel-wy(T.alt)*T.burnMul*n),T.fuel<=0&&!T.out&&Wp(),T.v=Math.min(e*(1+T.boost*.25),T.v+(.8+e*1.1)*n)):T.v=Math.max(-e*1.2,T.v-(.35+e*.45)*n),T.alt+=T.v*n,T.alt>T.maxAlt&&(T.maxAlt=T.alt),T.ft+=n,T.pathT+=n,Wy(n),T.mode==="duel"&&fp(n),T.pathT>=.5&&T.path.length<1800&&(T.pathT-=.5,T.path.push(Math.round(Math.max(0,T.alt)*100)/100));T.stage+1<hi.length&&T.maxAlt>=hi[T.stage+1].at;){T.stage++;let i=T.fuel>0;i&&(T.fuel=Math.min(100,T.fuel+10)),k("stageName").textContent=hi[T.stage].name,vt.stage(),Ca(T.stage===4?"Jsi ve vesm\xEDru":hi[T.stage].name,(T.stage===4?"K\xE1rm\xE1nova hranice \xB7 100 km":"")+(i?(T.stage===4?" \xB7 ":"")+"+10 paliva":""))}for(let i of le.ghosts)!T.passed.has(i.key)&&T.maxAlt>i.alt&&(T.passed.add(i.key),kn(i.me?"P\u0159ekonal jsi sv\u016Fj dne\u0161n\xED let":"P\u0159edlet\u011Bl jsi pilota "+en(i.name),"good"));T.alt<=0&&T.v<0?(T.alt=0,Qy()):T.out&&T.v<=0&&!T.resultsShown&&(T.outT+=n,T.outT>.6&&(T.resultsShown=!0,T.falling=T.alt>.02,pp())),vt.engine(t?.15+.1*T.boost:0,T.alt>100)}if(T.state==="crash"&&T.mode==="duel"&&fp(n),T.state==="crash"&&(T.crashT+=n,T.crashT>1.6&&!T.resultsShown&&(T.resultsShown=!0,pp())),T.state==="over"&&($n.visible&&(T.crashT+=n),T.falling)){let e=ac(T.alt);T.v=Math.max(-e*1.2,T.v-(.35+e*.45)*n),T.alt+=T.v*n,T.alt<=0&&(T.alt=0,T.falling=!1,Xp())}T.launched&&(T.armT=Math.min(1,T.armT+n*.8)),T.boost=Math.max(0,T.boost-n*1.6),T.shake=Math.max(0,T.shake-n*1.8)}var yn=new L,tM=new L(-.3,.38,-1).normalize(),ba=.5,jl=.6,Ea=0;function nM(n){let e=T.alt,t=gu(e),i=Jn(2,34,e),s=Jn(30,125,e),r=T.state==="play"||T.state==="count"||T.state==="crash"||T.falling,a=T.state==="play"&&T.fuel>0||T.state==="count"&&T.count<1.3,o=r||T.state==="over"?.42:.5+Math.sin(T.t*.09)*.55;ba=oi(ba,o,1-Math.exp(-n*1.2));let l=Math.tan(fn.fov*Math.PI/360),c=(w,I,O,X,C)=>{let B=Math.max(80,X-O),z=(I-w)*Qt/(2*l*B)*C,ie=Qt/(2*z*l),Y=(O+X)/2-Qt/2;return[z,(w+I)/2+Y/ie]},h=26,u=.6;if(T.state==="over"&&T.falling)[h,u]=c(-2.5,8.5,10,Math.max(130,(ci.overTop||Qt*.3)-10),1.7),h=Mn(h,14,120);else if(r){let w=ci.hudBottom+6,I=Qt-ci.dockH-6;[h,u]=c(-5.5,8,w,I,1.12+Mn(T.v/ac(e),0,1)*.08),h=Mn(h,14,70)}else T.state==="menu"&&([h,u]=c(-1.6,13,ci.menuTop+8,Qt-ci.menuBottomH-8,1.06),h=Mn(h,18,140));let d=T.state==="over"&&!T.falling?1.2:jl+(r?2.2:2.5),f=T.shake*T.shake*.35;Ea=oi(Ea||h,h,1-Math.exp(-n*2.2)),fn.position.set(Math.sin(ba)*Ea+(Math.random()-.5)*f,d+(Math.random()-.5)*f,Math.cos(ba)*Ea),jl=oi(jl,u,1-Math.exp(-n*2)),fn.lookAt(0,jl,0),fn.updateMatrixWorld(),Rp.copy(iy).transformDirection(fn.matrixWorldInverse);let g=Math.max(e,.002),y=Math.asin(As/(As+g)),m=Math.atan(.3*Math.tan(Bn.fov*Math.PI/360));Bn.position.set(0,As+g,0),Bn.rotation.set(m-(Math.PI/2-y),ba,0,"YXZ"),cc.position.copy(Bn.position),wp.uniforms.uAlt.value=e,ic.uniforms.uAlt.value=e;let p=Mn(e*.25,.3,2e3);Math.abs(Bn.near-p)>.01&&(Bn.near=p,Bn.updateProjectionMatrix()),ic.uniforms.uHaze.value.copy(ip(e,1)),Ap.uniforms.uFade.value=Jn(40,300,e);let x=tM.clone().applyEuler(Bn.rotation);if(au.position.copy(Bn.position).addScaledVector(x,Mn(390400-e,7e3,4e5)),au.visible=e>2e3,ln.fog.color.copy(ip(e,.92)),ln.fog.near=oi(90,400,i),ln.fog.far=oi(2600,9e3,i),T.launched&&(T.state==="play"||T.state==="count")&&(We.rotation.y+=n*.35),T.state==="play"&&T.out||T.state==="over"&&T.falling){T.tumbleT+=n;let w=Math.min(1,T.tumbleT/2.2);We.rotation.z+=T.spin.z*w*n,We.rotation.x+=T.spin.x*w*n,We.rotation.y+=T.spin.y*n}else We.rotation.z=oi(We.rotation.z,Math.sin(T.t*1.3)*.015,.05),We.rotation.x=oi(We.rotation.x,Math.cos(T.t*1.1)*.009,.05);let v=3;yn.set(0,v,0).applyEuler(We.rotation),We.position.set((T.state==="count"&&T.count<.4?(Math.random()-.5)*.04:0)-yn.x,v-yn.y,-yn.z);let R=a?T.state==="count"?Jn(1.3,.2,T.count)*.75:.85+T.boost*.5:0;pr.visible=R>.02;let A=Jn(40,160,e),_=.9+Math.random()*.16;pr.scale.set((1+A*.7)*(.9+T.boost*.25),(.5+R*.75)*_*(1+A*.3),(1+A*.7)*(.9+T.boost*.25));for(let w of Pp)w.material.uniforms.uTime.value=T.t,w.material.uniforms.uFlick.value=.8+T.boost;Cp.value=R;for(let w of ui){let I=w.mesh;if(!(T.state==="play"||T.state==="crash")){I.visible=!T.launched&&T.state==="count"||!!w.live&&T.state==="menu"&&!!Le.code&&!Le.started,I.visible&&I.position.set(w.x,I.userData.twin?0:-.2,w.z),I.userData.flame.visible=!1;continue}let O=hp(w,T.ft);if(O===null){I.visible=!1,w.cur=null;continue}let X=hp(w,Math.max(0,T.ft-.5)),C=(O-e)*t;I.visible=C>-45&&C<45,I.position.set(w.x,C,w.z),I.userData.twin||(I.rotation.y+=n*.5),I.userData.flame.visible=O>.002&&(X===null||O>=X-5e-4),I.userData.twin||I.userData.flame.scale.set(1,.75+Math.random()*.45,1),w.cur=O,w.y=C}Rt.position.y=-e*t,Rt.visible=e<1.8,Rt.userData.arms.forEach((w,I)=>{w.rotation.y=oi(0,-1.3-I*.2,Jn(0,1,T.armT))}),Rt.userData.beacon.visible=Math.sin(T.t*3)>.1;for(let w of Np){let I=(w.alt-e)*t,O=I>-60&&I<70;if(w.obj.visible=O,!O)continue;w.fx+=w.drift*n*.012,w.fx>1.3&&(w.fx=-1.3),w.fx<-1.3&&(w.fx=1.3);let X=(Ea-w.z)*Math.tan(fn.fov*Math.PI/360)*fn.aspect,C=T.t+w.phase,B=w.obj;if(B.position.set(w.fx*X,I+Math.sin(C*1.3)*.3,w.z),w.kind==="plane")B.rotation.set(Math.sin(C*.5)*.06,w.baseRotY+.35*(w.drift>0?-1:1),Math.sin(C*.7)*.03);else if(w.kind==="birds"){B.rotation.set(.45,w.baseRotY+.35,0);for(let H of B.userData.birds){let z=C*5.5+H.userData.phase,ie=Math.sin(z),Y=Math.sin(z-.9);for(let j of H.userData.wings)j.piv.rotation.x=-j.sgn*(ie*.55+.1),j.piv2.rotation.x=-j.sgn*(Y*.45-.15);H.position.y=Math.sin(C*2+H.userData.phase)*.06+(H.userData.y0??(H.userData.y0=H.position.y))}}else w.kind==="balloon"?B.rotation.set(Math.sin(C*.8)*.08,C*.2,Math.cos(C*.6)*.08):w.kind==="space"?B.rotation.set(.35+Math.sin(C*.2)*.1,w.baseRotY+C*.15,.2):w.kind==="debris"&&B.rotation.set(C*w.spin.x,C*w.spin.y,C*w.spin.z)}for(let w of Up){let I=(w.alt-e)*t,O=I>-260&&I<320&&w.alt<13;if(w.sp.visible=O,!O)continue;w.sp.position.set(w.x+T.t*w.drift,I,w.z);let X=fn.position.distanceTo(w.sp.position);w.sp.material.opacity=Jn(6,22,X),w.sp.material.alphaTest=.5+(1-w.sp.material.opacity)*.45}if($n.visible){let w=T.crashT,I=w<.3?w/.3*15:15*Math.max(0,1-(w-.3)/1.1);$n.scale.set(I,I,1),$n.material.rotation=w*.6,I<=0&&($n.visible=!1)}let b=T.v*t*n;iM(n,R,e),gp(di,n,b,e),gp(as,n,b,e);let N=new L(0,hc-.6,0);We.localToWorld(N),jh-=n,Ra.length&&jh<=0&&(R>.02||T.state==="count")&&(my(Ra.shift(),N),jh=.09);for(let w of La){if(!w.visible)continue;let I=w.userData;if(I.life-=n/I.max,I.life<=0){w.visible=!1;continue}w.position.addScaledVector(I.v,n),w.position.y-=Math.min(b,.5*n*60)*.35,I.v.multiplyScalar(Math.exp(-.8*n)),w.material.rotation+=I.spin*n;let O=1-I.life,X=I.size*Math.min(1,O*8)*Math.min(1,I.life*3);w.scale.set(X,X,1);let C=O<.55?1:1-(O-.55)*1.3;w.material.color.setRGB(C,Math.min(1,C+.15),1,An)}}function iM(n,e,t){let i=Jn(50,160,t),s=new L(0,hc-.3,0);We.localToWorld(s);let r=t<.03;if(T.out&&(T.state==="play"||T.falling)&&Math.random()<n*9*(1-i)&&ws(di,{p:s.clone(),v:new L((Math.random()-.5)*1.5,1+Math.random(),(Math.random()-.5)*1.5),life:1,max:1.4+Math.random(),size:.9+Math.random()*.7,grow:1.5,kind:"trail",rot:Math.random()*6,rs:.4,drag:.4}),e<=.02)return;let a=(10+e*16)*n;for(let l=0;l<a;l++)ws(as,{p:s.clone().add(new L((Math.random()-.5)*.8,-1-Math.random()*2,(Math.random()-.5)*.8)),v:new L((Math.random()-.5)*3,-7-Math.random()*6,(Math.random()-.5)*3),life:1,max:.35+Math.random()*.35,size:.25+Math.random()*.3,kind:"spark",rot:0});let o=(r?40:16)*e*(1-i*.95)*n;for(let l=0;l<o;l++)if(r){let c=Math.random()*Math.PI*2,h=4+Math.random()*9;ws(di,{p:new L(Math.cos(c)*1.5,-.8+Math.random()*.6,Math.sin(c)*1.5),v:new L(Math.cos(c)*h,.3+Math.random()*1.4,Math.sin(c)*h),life:1,max:3+Math.random()*3.5,size:3+Math.random()*3,grow:1.8,kind:"pad",rot:Math.random()*6,rs:(Math.random()-.5)*.3,drag:.6})}else ws(di,{p:s.clone().add(new L((Math.random()-.5)*.6,-2.5-Math.random()*2.5,(Math.random()-.5)*.6)),v:new L((Math.random()-.5)*1.6,-4-Math.random()*3,(Math.random()-.5)*1.6),life:1,max:(1.6+Math.random()*1.8)*(1-i*.75),size:1.8+Math.random()*1.2,grow:1.6+i*2,kind:"trail",rot:Math.random()*6,rs:(Math.random()-.5)*.5,drag:.15})}function gp(n,e,t,i){let s=n.list;for(let o=s.length-1;o>=0;o--){let l=s[o];if(l.life-=e/l.max,l.life<=0){s.splice(o,1);continue}l.drag&&l.v.multiplyScalar(Math.exp(-l.drag*e)),l.p.addScaledVector(l.v,e),l.p.y-=t,(l.kind==="pad"||l.kind==="boom")&&(l.v.y+=.4*e)}let r=Jn(30,125,i),a=Math.min(s.length,n.max);for(let o=0;o<a;o++){let l=s[o],c=o*3,h=1-l.life;if(n.pos[c]=l.p.x,n.pos[c+1]=l.p.y,n.pos[c+2]=l.p.z,n===di){n.size[o]=l.size*(1+h*(l.grow||1.6))*Math.min(1,l.life*2.2),n.alpha[o]=1;let u=1-r*.6;n.col[c]=u,n.col[c+1]=u,n.col[c+2]=u,r>0&&(n.col[c]=1,n.col[c+1]=1,n.col[c+2]=1),l.rot+=(l.rs||0)*e}else{n.size[o]=l.size*(l.kind==="boom"?1+h:1),n.alpha[o]=1;let u=l.life;n.col[c]=0,n.col[c+1]=u>.55?.15:1,n.col[c+2]=1,l.life<.2&&(n.size[o]*=l.life*5)}n.rot[o]=l.rot||0}n.geo.setDrawRange(0,a);for(let o of["position","aSize","aAlpha","aColor","aRot"])n.geo.attributes[o].needsUpdate=!0}function sM(n){let e=Math.pow(10,Math.floor(Math.log10(n))),t=n/e;return(t<1.5?1:t<3.5?2:t<7.5?5:10)*e}function Ta(n){return yn.set(0,(n-T.alt)*gu(T.alt)+3.2,0),yn.project(fn),(-yn.y*.5+.5)*Qt}function rM(){if(Ne.setTransform(Ln,0,0,Ln,0,0),Ne.clearRect(0,0,Kn,Qt),!(T.state==="play"||T.state==="count"||T.state==="crash"))return;let e=T.alt,t=gu(e),i=Ta(e),s=Ta(e+1/t),r=Math.max(1e-6,(i-s)*t),a=sM(70/r),o=Math.max(0,e-(Qt-i)/r),l=e+i/r,c=Kn-14;Ne.font="600 10.5px 'Bricolage Grotesque', sans-serif",Ne.textAlign="right",Ne.textBaseline="middle";let h=120,u=Qt-150;for(let g=Math.floor(o/a)*a;g<=l;g+=a){if(g<0)continue;let y=Ta(g);if(y<h||y>u)continue;let m=Math.min(1,(y-h)/40,(u-y)/40);Ne.fillStyle="rgba(243,239,232,"+.55*m+")",Ne.fillRect(c-10,y,10,1),Ne.fillText(bn(g),c-15,y);for(let p=1;p<5;p++){let x=Ta(g+p*a/5);x<h||x>u||(Ne.fillStyle="rgba(243,239,232,"+.2*m+")",Ne.fillRect(c-5,x,5,1))}}Ne.fillStyle="#FFE800",Ne.beginPath(),Ne.moveTo(c+4,i),Ne.lineTo(c-4,i-4),Ne.lineTo(c-4,i+4),Ne.fill();let d=null;Ne.textAlign="left",Ne.font="700 11px 'Bricolage Grotesque', sans-serif";for(let g of le.ghosts){g.alt>e&&(!d||g.alt<d.alt)&&(d=g);let y=Ta(g.alt);if(y<h-10||y>u+10)continue;let m=g.me?"#FFE800":"#F3EADA";Ne.strokeStyle=m,Ne.globalAlpha=.85,Ne.lineWidth=1.5,Ne.setLineDash([6,5]),Ne.beginPath(),Ne.moveTo(0,y),Ne.lineTo(Kn-70,y),Ne.stroke(),Ne.setLineDash([]);let p=g.name.toUpperCase(),x=Ne.measureText(p).width+12;Ne.fillStyle=m,Ne.fillRect(14,y-19,x,16),Ne.fillStyle="#001F71",Ne.fillText(p,20,y-10.5),Ne.globalAlpha=1}k("next").textContent=T.state==="play"&&d?"Dal\u0161\xED: "+d.name+" \xB7 "+bn(d.alt)+" km":"",Ne.font="700 10.5px 'Bricolage Grotesque', sans-serif",Ne.textAlign="center";let f=0;for(let g of ui)if(g.cur!=null){if(g.mesh.visible){yn.set(g.x,g.y+(g.mesh.userData.twin?6.6:3.4),g.z),yn.project(fn);let y=(yn.x*.5+.5)*Kn,m=(-yn.y*.5+.5)*Qt;if(m<110||m>Qt-150)continue;let p=g.name.toUpperCase(),x=Ne.measureText(p).width+10;Ne.fillStyle=g.me?"#FFE800":"#F3EADA",Ne.fillRect(y-x/2,m-14,x,14),Ne.fillStyle="#0E2470",Ne.fillText(p,y,m-6.5)}else if(g.y>0){yn.set(g.x,0,g.z),yn.project(fn);let y=Mn((yn.x*.5+.5)*Kn,40,Kn-60),m=g.name.toUpperCase()+" +"+bn(g.cur-e),p=Ne.measureText(m).width+10,x=150+f*18;f++,Ne.fillStyle="rgba(243,234,218,.88)",Ne.fillRect(y-p/2,x,p,14),Ne.fillStyle="#0E2470",Ne.fillText(m,y,x+7.5),Ne.beginPath(),Ne.moveTo(y-p/2-9,x+7),Ne.lineTo(y-p/2-3,x+2),Ne.lineTo(y-p/2-3,x+12),Ne.fillStyle="#F3EADA",Ne.save(),Ne.translate(y-p/2-6,x+7),Ne.restore(),Ne.beginPath(),Ne.moveTo(y-p/2-7,x+11),Ne.lineTo(y-p/2-3.5,x+3),Ne.lineTo(y-p/2,x+11),Ne.fill()}}Ne.textAlign="left"}var nu=null;function aM(){if(!nu){let n=k("fuelTrack");for(let e=0;e<14;e++){let t=document.createElement("i");n.appendChild(t)}nu=[...n.children]}return nu}function oM(){let n=bn(T.alt).split(",");k("altV").innerHTML=en(n[0])+(n[1]!==void 0?'<span class="dec">,'+en(n[1])+"</span>":"");let e=Math.abs(T.v);k("spdV").textContent=(T.v<-.005?"\u2212":"")+(e<100?e.toFixed(2).replace(".",","):bn(e))+" km/s";let t=Mn(T.fuel,0,100),i=aM(),s=t/100*i.length;i.forEach((r,a)=>{r.style.setProperty("--f",Mn(s-a,0,1))}),k("fuelPct").textContent=Math.round(t)+" %",k("dock").classList.toggle("low",t<15&&T.state==="play"),k("dock").classList.toggle("empty",t<=0&&T.state==="play")}var _p=performance.now(),iu=0,su=0,Ql=0;function qp(n){let e=(n-_p)/1e3,t=Math.min(.05,e);if(_p=n,T.state==="play"&&e<.5&&(su+=e,Ql++,Ql>=90)){let i=su/Ql;su=0,Ql=0,i>.024&&fr>.66&&(fr=Math.max(.65,fr-.1),at("sr-q2",String(fr)),is.setPixelRatio(Ln*fr),is.setSize(Kn,Qt))}(T.state==="menu"||T.state==="over")&&(T.t+=t),eM(t),nM(t),is.render(t),rM(),iu+=t,iu>.05&&(iu=0,oM()),requestAnimationFrame(qp)}requestAnimationFrame(qp);Sp();pc();yu();es.load().then(()=>{vp();let n=k("startBtn");n.disabled=!1,n.querySelector("span").textContent="Spustit odpo\u010Det",es.failed&&(k("dbStatus").textContent="Slovn\xEDk se nena\u010Detl, slova se kontroluj\xED jen zjednodu\u0161en\u011B.")});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
