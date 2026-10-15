(()=>{var zh=0,ku=1,Hh=2;var wa=1,El=2,ur=3,ns=0,Xt=1,on=2,Un=0,dr=1,is=2,Vu=3,Gu=4,kh=5;var Ts=100,Vh=101,Gh=102,Wh=103,qh=104,Xh=200,Yh=201,Qh=202,Jh=203,Wu=204,qu=205,jh=206,Zh=207,Kh=208,$h=209,ef=210,tf=211,nf=212,sf=213,rf=214,Go=0,Wo=1,qo=2,Ks=3,Xo=4,Yo=5,Qo=6,Jo=7,Tl=0,af=1,of=2,Qn=0,Ca=1,Ra=2,Pa=3,Pi=4,Ia=5,La=6,Da=7;var Xu=300,ss=301,As=302,Al=303,wl=304,Na=306,$s=1e3,ii=1001,jo=1002,Ht=1003,lf=1004;var Ua=1005;var kt=1006,Cl=1007;var di=1008;var bn=1009,Yu=1010,Qu=1011,hr=1012,Rl=1013,Jn=1014,On=1015,Dt=1016,Pl=1017,Il=1018,fr=1020,Ju=35902,ju=35899,Zu=1021,Ku=1022,Fn=1023,ri=1026,rs=1027,Ll=1028,Dl=1029,as=1030,Nl=1031;var Ul=1033,Oa=33776,Fa=33777,Ba=33778,za=33779,Ol=35840,Fl=35841,Bl=35842,zl=35843,Hl=36196,kl=37492,Vl=37496,Gl=37488,Wl=37489,Ha=37490,ql=37491,Xl=37808,Yl=37809,Ql=37810,Jl=37811,jl=37812,Zl=37813,Kl=37814,$l=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,uc=36284,ka=36285,dc=36286;var $r=2300,Zo=2301,ko=2302,Cu=2303,Ru=2400,Pu=2401,Iu=2402;var cf=3200;var Va=0,uf=1,Ii="",ln="srgb",ea="srgb-linear",ta="linear",xt="srgb";var Vo=7680;var df=519,hf=512,ff=513,pf=514,hc=515,mf=516,gf=517,fc=518,xf=519,pr=35044,Ga=35048;var $u="300 es",Xn=2e3,er=2001;function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vf(){let n=na("canvas");return n.style.display="block",n}var uh={},tr=null;function ed(...n){let e="THREE."+n.shift();tr?tr("log",e,...n):console.log(e,...n)}function _f(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=_f(n);let e="THREE."+n.shift();if(tr)tr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function nt(...n){n=_f(n);let e="THREE."+n.shift();if(tr)tr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function _s(...n){let e=n.join(" ");e in uh||(uh[e]=!0,tt(...n))}function yf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Mf={[Go]:Wo,[qo]:Qo,[Xo]:Jo,[Ks]:Yo,[Wo]:Go,[Qo]:qo,[Jo]:Xo,[Yo]:Ks},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nu=Math.PI/180,ia=180/Math.PI;function mr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function mm(n,e){return(n%e+e)%e}function iu(n,e,t){return(1-t)*n+t*e}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ad=class ad{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ad.prototype.isVector2=!0;var fe=ad,cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(h!==_||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+_*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+_*o;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},od=class od{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};od.prototype.isVector3=!0;var N=od,su=new N,dh=new cn,ld=class ld{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],w=s[4],y=s[7],T=s[2],E=s[5],R=s[8];return r[0]=a*_+o*M+c*T,r[3]=a*m+o*w+c*E,r[6]=a*p+o*y+c*R,r[1]=l*_+u*M+h*T,r[4]=l*m+u*w+h*E,r[7]=l*p+u*y+h*R,r[2]=d*_+f*M+g*T,r[5]=d*m+f*w+g*E,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ld.prototype.isMatrix3=!0;var st=ld,ru=new st,hh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gm(){let n={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ea]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:hh,fromXYZ:fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:hh,fromXYZ:fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var ht=gm();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fs,Ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=na("canvas")),Fs.width=e.width,Fs.height=e.height;let s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xm=0,nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(au(s[a].image)):r.push(au(s[a]))}else r=au(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function au(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var vm=0,ou=new N,jt=class n extends ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=kt,a=di,o=Fn,c=bn,l=n.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=mr(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Xu;jt.DEFAULT_ANISOTROPY=1;var cd=class cd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,T=(p+1)/2,E=(u+d)/4,R=(h+_)/4,x=(g+m)/4;return w>y&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=R/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cd.prototype.isVector4=!0;var At=cd,$o=class extends ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new jt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wt=class extends $o{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},sa=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sl=class Sl{constructor(e,t,i,s,r,a,o,c,l,u,h,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,i,s,r,a,o,c,l,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,ym)}lookAt(e,t,i){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ki.crossVectors(i,Sn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ki.crossVectors(i,Sn)),ki.normalize(),_o.crossVectors(Sn,ki),s[0]=ki.x,s[4]=_o.x,s[8]=Sn.x,s[1]=ki.y,s[5]=_o.y,s[9]=Sn.y,s[2]=ki.z,s[6]=_o.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],w=i[7],y=i[11],T=i[15],E=s[0],R=s[4],x=s[8],S=s[12],C=s[1],D=s[5],L=s[9],O=s[13],I=s[2],F=s[6],X=s[10],W=s[14],ue=s[3],$=s[7],re=s[11],ce=s[15];return r[0]=a*E+o*C+c*I+l*ue,r[4]=a*R+o*D+c*F+l*$,r[8]=a*x+o*L+c*X+l*re,r[12]=a*S+o*O+c*W+l*ce,r[1]=u*E+h*C+d*I+f*ue,r[5]=u*R+h*D+d*F+f*$,r[9]=u*x+h*L+d*X+f*re,r[13]=u*S+h*O+d*W+f*ce,r[2]=g*E+_*C+m*I+p*ue,r[6]=g*R+_*D+m*F+p*$,r[10]=g*x+_*L+m*X+p*re,r[14]=g*S+_*O+m*W+p*ce,r[3]=M*E+w*C+y*I+T*ue,r[7]=M*R+w*D+y*F+T*$,r[11]=M*x+w*L+y*X+T*re,r[15]=M*S+w*O+y*W+T*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*f-l*d,w=o*f-l*h,y=o*d-c*h,T=a*f-l*u,E=a*d-c*u,R=a*h-o*u;return t*(_*M-m*w+p*y)-i*(g*M-m*T+p*E)+s*(g*w-_*T+p*R)-r*(g*y-_*E+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-i*a,w=t*c-s*a,y=t*l-r*a,T=i*c-s*o,E=i*l-r*o,R=s*l-r*c,x=u*_-h*g,S=u*m-d*g,C=u*p-f*g,D=h*m-d*_,L=h*p-f*_,O=d*p-f*m,I=M*O-w*L+y*D+T*C-E*S+R*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(o*O-c*L+l*D)*F,e[1]=(s*L-i*O-r*D)*F,e[2]=(_*R-m*E+p*T)*F,e[3]=(d*E-h*R-f*T)*F,e[4]=(c*C-a*O-l*S)*F,e[5]=(t*O-s*C+r*S)*F,e[6]=(m*y-g*R-p*w)*F,e[7]=(u*R-d*y+f*w)*F,e[8]=(a*L-o*C+l*x)*F,e[9]=(i*C-t*L-r*x)*F,e[10]=(g*E-_*y+p*M)*F,e[11]=(h*y-u*E-f*M)*F,e[12]=(o*S-a*D-c*x)*F,e[13]=(t*D-i*S+s*x)*F,e[14]=(_*w-g*T-m*M)*F,e[15]=(u*T-h*w+d*M)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,M=c*l,w=c*u,y=c*h,T=i.x,E=i.y,R=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+y)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),c=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let l=1/a,u=1/o,h=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Xn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===er)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Xn,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===er)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sl.prototype.isMatrix4=!0;var ct=Sl,Bs=new N,Gn=new ct,_m=new N(0,0,0),ym=new N(1,1,1),ki=new N,_o=new N,Sn=new N,ph=new ct,mh=new cn,Mn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mm=0,gh=new N,zs=new cn,_i=new ct,yo=new N,Wr=new N,bm=new N,Sm=new cn,xh=new N(1,0,0),vh=new N(0,1,0),_h=new N(0,0,1),yh={type:"added"},Em={type:"removed"},Hs={type:"childadded",child:null},lu={type:"childremoved",child:null},Zt=class n extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new Mn,i=new cn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new st}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yo.copy(e):yo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Wr,yo,this.up):_i.lookAt(yo,Wr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(_i),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Em),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new N(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tm={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function cu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=mm(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=cu(a,r,e+1/3),this.g=cu(a,r,e),this.b=cu(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let i=bf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ht.workingToColorSpace(fn.copy(this),e),Math.round(dt(fn.r*255,0,255))*65536+Math.round(dt(fn.g*255,0,255))*256+Math.round(dt(fn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ln){ht.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Mo);let i=iu(Vi.h,Mo.h,t),s=iu(Vi.s,Mo.s,t),r=iu(Vi.l,Mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Re;Re.NAMES=bf;var aa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ys=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new N,yi=new N,uu=new N,Mi=new N,ks=new N,Vs=new N,Mh=new N,du=new N,hu=new N,fu=new N,pu=new At,mu=new At,gu=new At,Xi=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),yi.subVectors(i,t),uu.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(yi),c=Wn.dot(uu),l=yi.dot(yi),u=yi.dot(uu),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,t),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pu,r.x),a.addScaledVector(mu,r.y),a.addScaledVector(gu,r.z),a}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),yi.subVectors(e,t),Wn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Wn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ks.subVectors(s,i),Vs.subVectors(r,i),du.subVectors(e,i);let c=ks.dot(du),l=Vs.dot(du);if(c<=0&&l<=0)return t.copy(i);hu.subVectors(e,s);let u=ks.dot(hu),h=Vs.dot(hu);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ks,a);fu.subVectors(e,r);let f=ks.dot(fu),g=Vs.dot(fu);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Vs,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Mh.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Mh,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(ks,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),So.subVectors(this.max,qr),Gs.subVectors(e.a,qr),Ws.subVectors(e.b,qr),qs.subVectors(e.c,qr),Gi.subVectors(Ws,Gs),Wi.subVectors(qs,Ws),ms.subVectors(Gs,qs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ms.z,ms.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ms.z,0,-ms.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ms.y,ms.x,0];return!xu(t,Gs,Ws,qs,So)||(t=[1,0,0,0,1,0,0,0,1],!xu(t,Gs,Ws,qs,So))?!1:(Eo.crossVectors(Gi,Wi),t=[Eo.x,Eo.y,Eo.z],xu(t,Gs,Ws,qs,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,bo=new oi,Gs=new N,Ws=new N,qs=new N,Gi=new N,Wi=new N,ms=new N,qr=new N,So=new N,Eo=new N,gs=new N;function xu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gs.fromArray(n,r);let o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Jt=new N,To=new fe,Am=0,wn=class extends ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Am++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pr,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var oa=class extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var la=class extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}},wm=new oi,Xr=new N,vu=new N,Yi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(vu)),this.expandByPoint(Xr.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cm=0,Dn=new ct,_u=new Zt,Xs=new N,En=new oi,Yr=new oi,sn=new N,Vt=class n extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?la:oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(En.min,Yr.min),En.expandByPoint(sn),sn.addVectors(En.max,Yr.max),En.expandByPoint(sn)):(En.expandByPoint(Yr.min),En.expandByPoint(Yr.max))}En.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)sn.fromBufferAttribute(o,l),c&&(Xs.fromBufferAttribute(e,l),sn.add(Xs)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new wn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new N,c[x]=new N;let l=new N,u=new N,h=new N,d=new fe,f=new fe,g=new fe,_=new N,m=new N;function p(x,S,C){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,C),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(_),o[S].add(_),o[C].add(_),c[x].add(m),c[S].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,S=M.length;x<S;++x){let C=M[x],D=C.start,L=C.count;for(let O=D,I=D+L;O<I;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new N,y=new N,T=new N,E=new N;function R(x){T.fromBufferAttribute(s,x),E.copy(T);let S=o[x];w.copy(S),w.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(E,S);let D=y.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,D)}for(let x=0,S=M.length;x<S;++x){let C=M[x],D=C.start,L=C.count;for(let O=D,I=D+L;O<I;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new wn(d,u,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yu=new N,Rm=new N,Pm=new st,Tn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=yu.subVectors(i,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(yu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pm.getNormalMatrix(e),s=this.coplanarPoint(yu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Im=0,Ti=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=dr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=qu,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Tn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new N,Mu=new N,Ao=new N,wo=new N,tl=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mu.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),wo.copy(this.origin).sub(Mu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ao),o=wo.dot(this.direction),c=-wo.dot(Ao),l=wo.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mu).addScaledVector(Ao,d),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,M=i.y-a.y,w=i.z-a.z,y=Math.abs(c),T=Math.abs(l),E=Math.abs(u),R,x,S,C,D,L,O,I,F,X,W,ue;if(y>=T&&y>=E?(S=c,L=h,F=g,ue=p,c>=0?(R=l,x=u,C=d,D=f,O=_,I=m,X=M,W=w):(R=u,x=l,C=f,D=d,O=m,I=_,X=w,W=M)):T>=E?(S=l,L=d,F=_,ue=M,l>=0?(R=u,x=c,C=f,D=h,O=m,I=g,X=w,W=p):(R=c,x=u,C=h,D=f,O=g,I=m,X=p,W=w)):(S=u,L=f,F=m,ue=w,u>=0?(R=c,x=l,C=h,D=d,O=g,I=_,X=p,W=M):(R=l,x=c,C=d,D=h,O=_,I=g,X=M,W=p)),S===0)return null;let $=R/S,re=x/S,ce=1/S,De=C-$*L,z=D-re*L,V=O-$*F,Y=I-re*F,de=X-$*ue,P=W-re*ue,k=de*Y-P*V,ee=De*P-z*de,K=V*z-Y*De;if(s){if(k<0||ee<0||K<0)return null}else if((k<0||ee<0||K<0)&&(k>0||ee>0||K>0))return null;let te=k+ee+K;if(te===0)return null;let xe=ce*(k*L+ee*F+K*ue);return(te>0?xe<0:xe>0)?null:this.at(xe/te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bh=new ct,xs=new tl,Co=new Yi,Sh=new N,Ro=new N,Po=new N,Io=new N,bu=new N,Lo=new N,Eh=new N,Do=new N,ve=class extends Zt{constructor(e=new Vt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(bu.fromBufferAttribute(h,e),a?Lo.addScaledVector(bu,u):Lo.addScaledVector(bu.sub(t),u))}t.add(Lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(Co.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Co,Sh)===null||xs.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(bh.copy(r).invert(),xs.copy(e.ray).applyMatrix4(bh),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=w;y<T;y+=3){let E=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);s=No(this,p,e,i,l,u,h,E,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=No(this,a,e,i,l,u,h,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=w;y<T;y+=3){let E=y,R=y+1,x=y+2;s=No(this,p,e,i,l,u,h,E,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,w=m+1,y=m+2;s=No(this,a,e,i,l,u,h,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Lm(n,e,t,i,s,r,a,o){let c;if(e.side===Xt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ns,o),c===null)return null;Do.copy(o),Do.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Do);return l<t.near||l>t.far?null:{distance:l,point:Do.clone(),object:n}}function No(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Ro),n.getVertexPosition(c,Po),n.getVertexPosition(l,Io);let u=Lm(n,e,t,i,Ro,Po,Io,Eh);if(u){let h=new N;Xi.getBarycoord(Eh,Ro,Po,Io,h),s&&(u.uv=Xi.getInterpolatedAttribute(s,o,c,l,h,new fe)),r&&(u.uv1=Xi.getInterpolatedAttribute(r,o,c,l,h,new fe)),a&&(u.normal=Xi.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};Xi.getNormal(Ro,Po,Io,d.normal),u.face=d,u.barycoord=h}return u}var ca=class extends jt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ht,u=Ht,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ua=class extends wn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new ct,Th=new ct,Uo=[],Ah=new oi,Dm=new ct,Qr=new ve,Jr=new Yi,Nn=class extends ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Dm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ys),Ah.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ys),Jr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(i),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Th.multiplyMatrices(i,Ys),Qr.matrixWorld=Th,Qr.raycast(e,Uo);for(let a=0,o=Uo.length;a<o;a++){let c=Uo[a];c.instanceId=r,c.object=this,t.push(c)}Uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(s*this.count),s,this.count,Ll,On));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new Yi,Nm=new fe(.5,.5),Oo=new N,sr=class{constructor(e=new Tn,t=new Tn,i=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],w=r[13],y=r[14],T=r[15];if(s[0].setComponents(l-a,f-u,p-g,T-M).normalize(),s[1].setComponents(l+a,f+u,p+g,T+M).normalize(),s[2].setComponents(l+o,f+h,p+_,T+w).normalize(),s[3].setComponents(l-o,f-h,p-_,T-w).normalize(),i)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,f-d,p-m,T-y).normalize();else if(s[4].setComponents(l-c,f-d,p-m,T-y).normalize(),t===Xn)s[5].setComponents(l+c,f+d,p+m,T+y).normalize();else if(t===er)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=Nm.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var da=class extends jt{constructor(e=[],t=ss,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ms=class extends jt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends jt{constructor(e,t,i=Jn,s,r,a,o=Ht,c=Ht,l,u=ri,h=1){if(u!==ri&&u!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends Qi{constructor(e,t=Jn,i=ss,s,r,a=Ht,o=Ht,c,l=ri){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function g(_,m,p,M,w,y,T,E,R,x,S){let C=y/R,D=T/x,L=y/2,O=T/2,I=E/2,F=R+1,X=x+1,W=0,ue=0,$=new N;for(let re=0;re<X;re++){let ce=re*D-O;for(let De=0;De<F;De++){let z=De*C-L;$[_]=z*M,$[m]=ce*w,$[p]=I,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(De/R),h.push(1-re/x),W+=1}}for(let re=0;re<x;re++)for(let ce=0;ce<R;ce++){let De=d+ce+F*re,z=d+ce+F*(re+1),V=d+(ce+1)+F*(re+1),Y=d+(ce+1)+F*re;c.push(De,z,Y),c.push(z,V,Y),ue+=6}o.addGroup(f,ue,S),f+=ue,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},an=class n extends Vt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=i*2+r,_=s+1,m=new N,p=new N;for(let M=0;M<=g;M++){let w=0,y=0,T=0,E=0;if(M<=i){let S=M/i,C=S*Math.PI/2;y=-u-e*Math.cos(C),T=e*Math.sin(C),E=-e*Math.cos(C),w=S*h}else if(M<=i+r){let S=(M-i)/r;y=-u+S*t,T=e,E=0,w=h+S*d}else{let S=(M-i-r)/i,C=S*Math.PI/2;y=u+e*Math.sin(C),T=e*Math.cos(C),E=e*Math.sin(C),w=h+d+S*h}let R=Math.max(0,Math.min(1,w/f)),x=0;M===0?x=.5/s:M===g&&(x=-.5/s);for(let S=0;S<=s;S++){let C=S/s,D=C*Math.PI*2,L=Math.sin(D),O=Math.cos(D);p.x=-T*O,p.y=y,p.z=T*L,o.push(p.x,p.y,p.z),m.set(-T*O,E,T*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+x,R)}if(M>0){let S=(M-1)*_;for(let C=0;C<s;C++){let D=S+C,L=S+C+1,O=M*_+C,I=M*_+C+1;a.push(D,L,O),a.push(L,I,O)}}}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ai=class n extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new N,u=new fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class n extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,_=[],m=i/2,p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function M(){let y=new N,T=new N,E=0,R=(t-e)/i;for(let x=0;x<=r;x++){let S=[],C=x/r,D=C*(t-e)+e;for(let L=0;L<=s;L++){let O=L/s,I=O*c+o,F=Math.sin(I),X=Math.cos(I);T.x=D*F,T.y=-C*i+m,T.z=D*X,h.push(T.x,T.y,T.z),y.set(F,R,X).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-C),S.push(g++)}_.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){let C=_[S][x],D=_[S+1][x],L=_[S+1][x+1],O=_[S][x+1];(e>0||S!==0)&&(u.push(C,D,O),E+=3),(t>0||S!==r-1)&&(u.push(D,L,O),E+=3)}l.addGroup(p,E,0),p+=E}function w(y){let T=g,E=new fe,R=new N,x=0,S=y===!0?e:t,C=y===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let L=0;L<=s;L++){let I=L/s*c+o,F=Math.cos(I),X=Math.sin(I);R.x=S*X,R.y=m*C,R.z=S*F,h.push(R.x,R.y,R.z),d.push(0,C,0),E.x=F*.5+.5,E.y=X*.5*C+.5,f.push(E.x,E.y),g++}for(let L=0;L<s;L++){let O=T+L,I=D+L;y===!0?u.push(I,I+1,O):u.push(I+1,I,O),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ji=class n extends Wt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new N,s=[],r=[],a=[],o=new N,c=new ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rr=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},il=class extends rr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function td(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var wh=new N,Ch=new N,Su=new td,Eu=new td,Tu=new td,sl=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Ch.subVectors(s[0],s[1]).add(s[0]),l=Ch);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(wh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Su.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Eu.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Tu.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Su.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Eu.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Tu.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Su.calc(c),Eu.calc(c),Tu.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rh(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function Um(n,e){let t=1-n;return t*t*e}function Om(n,e){return 2*(1-n)*n*e}function Fm(n,e){return n*n*e}function Zr(n,e,t,i){return Um(n,e)+Om(n,t)+Fm(n,i)}function Bm(n,e){let t=1-n;return t*t*t*e}function zm(n,e){let t=1-n;return 3*t*t*n*e}function Hm(n,e){return 3*(1-n)*n*n*e}function km(n,e){return n*n*n*e}function Kr(n,e,t,i,s){return Bm(n,e)+zm(n,t)+Hm(n,i)+km(n,s)}var fa=class extends Cn{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Cn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y),Kr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends Cn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Cn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Cn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Zr(e,s.x,r.x,a.x),Zr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Cn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Zr(e,s.x,r.x,a.x),Zr(e,s.y,r.y,a.y),Zr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wi=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Rh(o,c.x,l.x,u.x,h.x),Rh(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Lu=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:sl,CubicBezierCurve:fa,CubicBezierCurve3:rl,EllipseCurve:rr,LineCurve:pa,LineCurve3:al,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ol,SplineCurve:wi}),ll=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Lu[s.type]().fromJSON(s))}return this}},li=class extends ll{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new pa(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ma(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new fa(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wi(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new rr(e,t,i,s,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ci=class extends li{constructor(e){super(e),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new li().fromJSON(s))}return this}};function Vm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Sf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Ym(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let u=o,h=c;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return ga(r,a,t,o,c,l,0),a}function Sf(n,e,t,i,s){let r;if(s===s0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Ph(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Ph(a/i|0,n[a],n[a+1],r);return r&&ar(r,r.next)&&(va(r),r=r.next),r}function bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ar(t,t.next)||Ot(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ga(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Km(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Wm(n,i,s,r):Gm(n)){e.push(c.i,n.i,l.i),va(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=qm(bs(n),e),ga(n,e,t,i,s,r,2)):a===2&&Xm(n,e,t,i,s,r):ga(bs(n),e,t,i,s,r,1);break}}}function Gm(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(s,r,a),h=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&jr(s,o,r,c,a,l,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ot(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(u,h,d),_=Math.max(o,c,l),m=Math.max(u,h,d),p=Du(f,g,e,t,i),M=Du(_,m,e,t,i),w=n.prevZ,y=n.nextZ;for(;w&&w.z>=p&&y&&y.z<=M;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&jr(o,u,c,h,l,d,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&jr(o,u,c,h,l,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&jr(o,u,c,h,l,d,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&jr(o,u,c,h,l,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ar(i,s)&&Tf(i,t,t.next,s)&&xa(i,s)&&xa(s,i)&&(e.push(i.i,t.i,s.i),va(t),va(t.next),t=n=s),t=t.next}while(t!==n);return bs(t)}function Xm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&t0(a,o)){let c=Af(a,o);a=bs(a,a.next),c=bs(c,c.next),ga(a,e,t,i,s,r,0),ga(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Ym(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=Sf(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(e0(l))}s.sort(Qm);for(let r=0;r<s.length;r++)t=Jm(s[r],t);return t}function Qm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Jm(n,e){let t=jm(n,e);if(!t)return e;let i=Af(t,n);return bs(i,i.next),bs(t,t.next)}function jm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(ar(n,t))return t;do{if(ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Ef(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);xa(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Zm(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Zm(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function Km(n,e,t,i){let s=n;do s.z===0&&(s.z=Du(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$m(s)}function $m(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Du(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function e0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ef(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function jr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Ef(n,e,t,i,s,r,a,o)}function t0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!n0(n,e)&&(xa(n,e)&&xa(e,n)&&i0(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||ar(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ar(n,e){return n.x===e.x&&n.y===e.y}function Tf(n,e,t,i){let s=Bo(Ot(n,e,t)),r=Bo(Ot(n,e,i)),a=Bo(Ot(t,i,n)),o=Bo(Ot(t,i,e));return!!(s!==r&&a!==o||s===0&&Fo(n,t,e)||r===0&&Fo(n,i,e)||a===0&&Fo(t,n,i)||o===0&&Fo(t,e,i))}function Fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bo(n){return n>0?1:n<0?-1:0}function n0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function xa(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function i0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Af(n,e){let t=Nu(n.i,n.x,n.y),i=Nu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ph(n,e,t,i){let s=Nu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function s0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Uu=class{static triangulate(e,t,i=2){return Vm(e,t,i)}},si=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ih(e),Lh(i,e);let a=e.length;t.forEach(Ih);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Lh(i,t[c]);let o=Uu.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ih(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var or=class n extends Vt{constructor(e=new Ci([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:r0,w,y=!1,T,E,R,x;if(p){w=p.getSpacedPoints(u),y=!0,d=!1;let se=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,se),E=new N,R=new N,x=new N}d||(m=0,f=0,g=0,_=0);let S=o.extractPoints(l),C=S.shape,D=S.holes;if(!si.isClockWise(C)){C=C.reverse();for(let se=0,q=D.length;se<q;se++){let Z=D[se];si.isClockWise(Z)&&(D[se]=Z.reverse())}}function O(se){let Z=10000000000000001e-36,ae=se[0];for(let pe=1;pe<=se.length;pe++){let we=pe%se.length,Ue=se[we],Ve=Ue.x-ae.x,Oe=Ue.y-ae.y,U=Ve*Ve+Oe*Oe,$e=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ae.x),Math.abs(ae.y)),rt=Z*$e*$e;if(U<=rt){se.splice(we,1),pe--;continue}ae=Ue}}O(C),D.forEach(O);let I=D.length,F=C;for(let se=0;se<I;se++){let q=D[se];C=C.concat(q)}function X(se,q,Z){return q||nt("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(q,Z)}let W=C.length;function ue(se,q,Z){let ae,pe,we,Ue=se.x-q.x,Ve=se.y-q.y,Oe=Z.x-se.x,U=Z.y-se.y,$e=Ue*Ue+Ve*Ve,rt=Ue*U-Ve*Oe;if(Math.abs(rt)>Number.EPSILON){let A=Math.sqrt($e),v=Math.sqrt(Oe*Oe+U*U),G=q.x-Ve/A,Q=q.y+Ue/A,ie=Z.x-U/v,_e=Z.y+Oe/v,ye=((ie-G)*U-(_e-Q)*Oe)/(Ue*U-Ve*Oe);ae=G+Ue*ye-se.x,pe=Q+Ve*ye-se.y;let oe=ae*ae+pe*pe;if(oe<=2)return new fe(ae,pe);we=Math.sqrt(oe/2)}else{let A=!1;Ue>Number.EPSILON?Oe>Number.EPSILON&&(A=!0):Ue<-Number.EPSILON?Oe<-Number.EPSILON&&(A=!0):Math.sign(Ve)===Math.sign(U)&&(A=!0),A?(ae=-Ve,pe=Ue,we=Math.sqrt($e)):(ae=Ue,pe=Ve,we=Math.sqrt($e/2))}return new fe(ae/we,pe/we)}let $=[];for(let se=0,q=F.length,Z=q-1,ae=se+1;se<q;se++,Z++,ae++)Z===q&&(Z=0),ae===q&&(ae=0),$[se]=ue(F[se],F[Z],F[ae]);let re=[],ce,De=$.concat();for(let se=0,q=I;se<q;se++){let Z=D[se];ce=[];for(let ae=0,pe=Z.length,we=pe-1,Ue=ae+1;ae<pe;ae++,we++,Ue++)we===pe&&(we=0),Ue===pe&&(Ue=0),ce[ae]=ue(Z[ae],Z[we],Z[Ue]);re.push(ce),De=De.concat(ce)}let z;if(m===0)z=si.triangulateShape(F,D);else{let se=[],q=[];for(let Z=0;Z<m;Z++){let ae=Z/m,pe=f*Math.cos(ae*Math.PI/2),we=g*Math.sin(ae*Math.PI/2)+_;for(let Ue=0,Ve=F.length;Ue<Ve;Ue++){let Oe=X(F[Ue],$[Ue],we);ee(Oe.x,Oe.y,-pe),ae===0&&se.push(Oe)}for(let Ue=0,Ve=I;Ue<Ve;Ue++){let Oe=D[Ue];ce=re[Ue];let U=[];for(let $e=0,rt=Oe.length;$e<rt;$e++){let A=X(Oe[$e],ce[$e],we);ee(A.x,A.y,-pe),ae===0&&U.push(A)}ae===0&&q.push(U)}}z=si.triangulateShape(se,q)}let V=z.length,Y=g+_;for(let se=0;se<W;se++){let q=d?X(C[se],De[se],Y):C[se];y?(R.copy(T.normals[0]).multiplyScalar(q.x),E.copy(T.binormals[0]).multiplyScalar(q.y),x.copy(w[0]).add(R).add(E),ee(x.x,x.y,x.z)):ee(q.x,q.y,0)}for(let se=1;se<=u;se++)for(let q=0;q<W;q++){let Z=d?X(C[q],De[q],Y):C[q];y?(R.copy(T.normals[se]).multiplyScalar(Z.x),E.copy(T.binormals[se]).multiplyScalar(Z.y),x.copy(w[se]).add(R).add(E),ee(x.x,x.y,x.z)):ee(Z.x,Z.y,h/u*se)}for(let se=m-1;se>=0;se--){let q=se/m,Z=f*Math.cos(q*Math.PI/2),ae=g*Math.sin(q*Math.PI/2)+_;for(let pe=0,we=F.length;pe<we;pe++){let Ue=X(F[pe],$[pe],ae);ee(Ue.x,Ue.y,h+Z)}for(let pe=0,we=D.length;pe<we;pe++){let Ue=D[pe];ce=re[pe];for(let Ve=0,Oe=Ue.length;Ve<Oe;Ve++){let U=X(Ue[Ve],ce[Ve],ae);y?ee(U.x,U.y+w[u-1].y,w[u-1].x+Z):ee(U.x,U.y,h+Z)}}}de(),P();function de(){let se=s.length/3;if(d){let q=0,Z=W*q;for(let ae=0;ae<V;ae++){let pe=z[ae];K(pe[2]+Z,pe[1]+Z,pe[0]+Z)}q=u+m*2,Z=W*q;for(let ae=0;ae<V;ae++){let pe=z[ae];K(pe[0]+Z,pe[1]+Z,pe[2]+Z)}}else{for(let q=0;q<V;q++){let Z=z[q];K(Z[2],Z[1],Z[0])}for(let q=0;q<V;q++){let Z=z[q];K(Z[0]+W*u,Z[1]+W*u,Z[2]+W*u)}}i.addGroup(se,s.length/3-se,0)}function P(){let se=s.length/3,q=0;k(F,q),q+=F.length;for(let Z=0,ae=D.length;Z<ae;Z++){let pe=D[Z];k(pe,q),q+=pe.length}i.addGroup(se,s.length/3-se,1)}function k(se,q){let Z=se.length;for(;--Z>=0;){let ae=Z,pe=Z-1;pe<0&&(pe=se.length-1);for(let we=0,Ue=u+m*2;we<Ue;we++){let Ve=W*we,Oe=W*(we+1),U=q+ae+Ve,$e=q+pe+Ve,rt=q+pe+Oe,A=q+ae+Oe;te(U,$e,rt,A)}}}function ee(se,q,Z){c.push(se),c.push(q),c.push(Z)}function K(se,q,Z){xe(se),xe(q),xe(Z);let ae=s.length/3,pe=M.generateTopUV(i,s,ae-3,ae-2,ae-1);it(pe[0]),it(pe[1]),it(pe[2])}function te(se,q,Z,ae){xe(se),xe(q),xe(ae),xe(q),xe(Z),xe(ae);let pe=s.length/3,we=M.generateSideWallUV(i,s,pe-6,pe-3,pe-2,pe-1);it(we[0]),it(we[1]),it(we[3]),it(we[1]),it(we[2]),it(we[3])}function xe(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function it(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return a0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lu[s.type]().fromJSON(s)),new n(i,e.options)}},r0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-h),new fe(d,1-g),new fe(_,1-p)]:[new fe(o,1-c),new fe(u,1-h),new fe(f,1-g),new fe(m,1-p)]}};function a0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ss=class n extends Vt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=dt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new N,d=new fe,f=new N,g=new N,_=new N,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){let w=i+M*u*s,y=Math.sin(w),T=Math.cos(w);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*T,a.push(h.x,h.y,h.z),d.x=M/t,d.y=E/(e.length-1),o.push(d.x,d.y);let R=c[3*E+0]*y,x=c[3*E+1],S=c[3*E+0]*T;l.push(R,x,S)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let y=w+M*e.length,T=y,E=y+e.length,R=y+e.length+1,x=y+1;r.push(T,E,x),r.push(R,x,E)}this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var ci=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*d-a;for(let w=0;w<l;w++){let y=w*h-r;g.push(y,-M,0),_.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let w=M+l*p,y=M+l*(p+1),T=M+1+l*(p+1),E=M+1+l*p;f.push(w,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ui=class n extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new N,g=new fe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let M=p+m,w=M,y=M+i+1,T=M+i+2,E=M+1;o.push(w,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ji=class n extends Vt{constructor(e=new Ci([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(a,2));function l(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];si.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=si.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){let M=_[m],w=M[0]+h,y=M[1]+h,T=M[2]+h;i.push(w,y,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return o0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function o0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var pn=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new N,d=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let M=[],w=p/i,y=a+w*o,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T),R=0;p===0&&a===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let S=x/t,C=s+S*r;h.x=-E*Math.cos(C),h.y=T,h.z=E*Math.sin(C),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(S+R,1-w),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let w=u[p][M+1],y=u[p][M],T=u[p+1][M],E=u[p+1][M+1];(p!==0||a>0)&&f.push(w,y,E),(p!==i-1||c<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yn=class n extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],h=[],d=new N,f=new N,g=new N;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(p/s),h.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,y=(s+1)*_+m;c.push(p,M,y),c.push(M,w,y)}this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Dh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=ws(n[t]);for(let s in i)e[s]=i[s]}return e}function Dh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function l0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var xn={clone:ws,merge:mn},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Re().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lr=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zi=class extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _a=class extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cl=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Au(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pu:r=e,o=2*t-i;break;case Iu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pu:a=e,c=2*i-t;break;case Iu:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+M*a[l+T]+w*a[c+T]+y*a[h+T];return r}},hl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},fl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pl=class extends Ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*_+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],p=f*d+g*2,M=h[p],w=h[p+1],y=e*d+g*2,T=u[y],E=u[y+1],R=h0(i,t,M,T,s);r[g]=wf(R,_,w,E,m)}return r}};function wf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function d0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function h0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=wf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=d0(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Au(e.settings)&&(i.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Zo:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break;case Cu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return tt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return Cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Au(this.settings)&&(Nh(this.settings.inTangents,e),Nh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){nt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){nt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&pm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){nt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Au(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Zo;var $i=class extends Rn{constructor(e,t,i){super(e,t,i)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=$r;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};ml.prototype.ValueTypeName="color";var gl=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};gl.prototype.ValueTypeName="number";var xl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)cn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ya=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Rn{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=$r;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};vl.prototype.ValueTypeName="vector";var _l=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cf=new _l,yl=class{constructor(e){this.manager=e!==void 0?e:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends Es{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wu=new ct,Uh=new N,Oh=new N,cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zo=new N,Ho=new cn,ni=new N,ba=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,Ho,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Ho,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zo,Ho,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Ho,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new N,Fh=new fe,Bh=new fe,rn=class extends ba{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Bh),t.subVectors(Bh,Fh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ou=class extends cr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ia*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Sa=class extends Es{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fu=class extends cr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Ri=class extends Es{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends ba{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bu=class extends cr{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Js=-90,js=1,Ml=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Js,js,e,t);s.layers=this.layers,this.add(s);let r=new rn(Js,js,e,t);r.layers=this.layers,this.add(r);let a=new rn(Js,js,e,t);a.layers=this.layers,this.add(a);let o=new rn(Js,js,e,t);o.layers=this.layers,this.add(o);let c=new rn(Js,js,e,t);c.layers=this.layers,this.add(c);let l=new rn(Js,js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},bl=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=f0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function f0(){this._document.hidden===!1&&this.reset()}var id="\\[\\]\\.:\\/",p0=new RegExp("["+id+"]","g"),sd="[^"+id+"]",m0="[^"+id.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",sd),x0=/(WCOD+)?/.source.replace("WCOD",m0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),y0=new RegExp("^"+g0+x0+v0+_0+"$"),M0=["material","materials","bones","map"],zu=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p0,"")}static parseTrackName(e){let t=y0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);M0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=zu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sM=new Float32Array(1);var Aa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ud=class ud{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};ud.prototype.isMatrix2=!0;var Hu=ud;function rd(n,e,t,i){let s=b0(i);switch(t){case Zu:return n*e;case Ll:return n*e/s.components*s.byteLength;case Dl:return n*e/s.components*s.byteLength;case as:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Ku:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case Ul:return n*e*4/s.components*s.byteLength;case Oa:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:case zl:return Math.max(n,16)*Math.max(e,8)/4;case Ol:case Bl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case kl:case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Ha:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b0(n){switch(n){case bn:case Yu:return{byteLength:1,components:1};case hr:case Qu:case Dt:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case Jn:case Rl:case On:return{byteLength:4,components:1};case Ju:case ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function E0(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Sg=`uniform sampler2D dfgLUT;
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
	vec3 f0 = material.specularColorBlended;
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Eg=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Lx=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Qx=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,Jx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Zx=`#define TOON
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
}`,Kx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,nv=`uniform vec3 color;
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
}`,iv=`uniform float rotation;
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
}`,sv=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:w0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:O0,bsdfs:F0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:q0,color_pars_vertex:X0,color_vertex:Y0,common:Q0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Z0,displacementmap_vertex:K0,emissivemap_fragment:$0,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:xg,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:ug,fog_pars_fragment:dg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:vg,lights_toon_pars_fragment:_g,lights_phong_fragment:yg,lights_phong_pars_fragment:Mg,lights_physical_fragment:bg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:Ag,lightprobes_pars_fragment:wg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Ig,map_fragment:Lg,map_pars_fragment:Dg,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Bg,morphcolor_vertex:zg,morphnormal_vertex:Hg,morphtarget_pars_vertex:kg,morphtarget_vertex:Vg,normal_fragment_begin:Gg,normal_fragment_maps:Wg,normal_pars_fragment:qg,normal_pars_vertex:Xg,normal_vertex:Yg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Kg,opaque_fragment:$g,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:dx,skinning_pars_vertex:hx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:vx,transmission_fragment:_x,transmission_pars_fragment:yx,uv_pars_fragment:Mx,uv_pars_vertex:bx,uv_vertex:Sx,worldpos_vertex:Ex,background_vert:Tx,background_frag:Ax,backgroundCube_vert:wx,backgroundCube_frag:Cx,cube_vert:Rx,cube_frag:Px,depth_vert:Ix,depth_frag:Lx,distance_vert:Dx,distance_frag:Nx,equirect_vert:Ux,equirect_frag:Ox,linedashed_vert:Fx,linedashed_frag:Bx,meshbasic_vert:zx,meshbasic_frag:Hx,meshlambert_vert:kx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:qx,meshnormal_frag:Xx,meshphong_vert:Yx,meshphong_frag:Qx,meshphysical_vert:Jx,meshphysical_frag:jx,meshtoon_vert:Zx,meshtoon_frag:Kx,points_vert:$x,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:sv},Ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},fi={basic:{uniforms:mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:mn([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:mn([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:mn([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:mn([Ae.lights,Ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};fi.physical={uniforms:mn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var pc={r:0,b:0,g:0},rv=new ct,Zf=new st;Zf.set(-1,0,0,0,1,0,0,0,1);function av(n,e,t,i,s,r){let a=new Re(0),o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(M){let w=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===Na)?(l===void 0&&(l=new ve(new Gt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:ws(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zf),l.material.toneMapped=ht.getTransfer(y.colorSpace)!==xt,(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ve(new ci(2,2),new yt({name:"BackgroundMaterial",uniforms:ws(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(pc,nd(n)),t.buffers.color.setClear(pc.r,pc.g,pc.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function ov(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,L,O,I,F){let X=!1,W=h(D,I,O,L);r!==W&&(r=W,l(r.object)),X=f(D,I,O,F),X&&g(D,I,O,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(D,L,O,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,L,O,I){let F=I.wireframe===!0,X=i[L.id];X===void 0&&(X={},i[L.id]=X);let W=D.isInstancedMesh===!0?D.id:0,ue=X[W];ue===void 0&&(ue={},X[W]=ue);let $=ue[O.id];$===void 0&&($={},ue[O.id]=$);let re=$[F];return re===void 0&&(re=d(c()),$[F]=re),re}function d(D){let L=[],O=[],I=[];for(let F=0;F<t;F++)L[F]=0,O[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,L,O,I){let F=r.attributes,X=L.attributes,W=0,ue=O.getAttributes();for(let $ in ue)if(ue[$].location>=0){let ce=F[$],De=X[$];if(De===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(De=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(De=D.instanceColor)),ce===void 0||ce.attribute!==De||De&&ce.data!==De.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function g(D,L,O,I){let F={},X=L.attributes,W=0,ue=O.getAttributes();for(let $ in ue)if(ue[$].location>=0){let ce=X[$];ce===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));let De={};De.attribute=ce,ce&&ce.data&&(De.data=ce.data),F[$]=De,W++}r.attributes=F,r.attributesNum=W,r.index=I}function _(){let D=r.newAttributes;for(let L=0,O=D.length;L<O;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){let O=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;O[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),F[D]!==L&&(n.vertexAttribDivisor(D,L),F[D]=L)}function M(){let D=r.newAttributes,L=r.enabledAttributes;for(let O=0,I=L.length;O<I;O++)L[O]!==D[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function w(D,L,O,I,F,X,W){W===!0?n.vertexAttribIPointer(D,L,O,F,X):n.vertexAttribPointer(D,L,O,I,F,X)}function y(D,L,O,I){_();let F=I.attributes,X=O.getAttributes(),W=L.defaultAttributeValues;for(let ue in X){let $=X[ue];if($.location>=0){let re=F[ue];if(re===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){let ce=re.normalized,De=re.itemSize,z=e.get(re);if(z===void 0)continue;let V=z.buffer,Y=z.type,de=z.bytesPerElement,P=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===Rl;if(re.isInterleavedBufferAttribute){let k=re.data,ee=k.stride,K=re.offset;if(k.isInstancedInterleavedBuffer){for(let te=0;te<$.locationSize;te++)p($.location+te,k.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let te=0;te<$.locationSize;te++)m($.location+te);n.bindBuffer(n.ARRAY_BUFFER,V);for(let te=0;te<$.locationSize;te++)w($.location+te,De/$.locationSize,Y,ce,ee*de,(K+De/$.locationSize*te)*de,P)}else{if(re.isInstancedBufferAttribute){for(let k=0;k<$.locationSize;k++)p($.location+k,re.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let k=0;k<$.locationSize;k++)m($.location+k);n.bindBuffer(n.ARRAY_BUFFER,V);for(let k=0;k<$.locationSize;k++)w($.location+k,De/$.locationSize,Y,ce,De*de,De/$.locationSize*k*de,P)}}else if(W!==void 0){let ce=W[ue];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv($.location,ce);break;case 3:n.vertexAttrib3fv($.location,ce);break;case 4:n.vertexAttrib4fv($.location,ce);break;default:n.vertexAttrib1fv($.location,ce)}}}}M()}function T(){S();for(let D in i){let L=i[D];for(let O in L){let I=L[O];for(let F in I){let X=I[F];for(let W in X)u(X[W].object),delete X[W];delete I[F]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let L=i[D.id];for(let O in L){let I=L[O];for(let F in I){let X=I[F];for(let W in X)u(X[W].object),delete X[W];delete I[F]}}delete i[D.id]}function R(D){for(let L in i){let O=i[L];for(let I in O){let F=O[I];if(F[D.id]===void 0)continue;let X=F[D.id];for(let W in X)u(X[W].object),delete X[W];delete F[D.id]}}}function x(D){for(let L in i){let O=i[L],I=D.isInstancedMesh===!0?D.id:0,F=O[I];if(F!==void 0){for(let X in F){let W=F[X];for(let ue in W)u(W[ue].object),delete W[ue];delete F[X]}delete O[I],Object.keys(O).length===0&&delete i[L]}}}function S(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function lv(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Dt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&R!==On&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(tt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function uv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Tn,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let M=r?0:i,w=M*4,y=p.clippingState||null;c.value=y,y=u(g,d,w,f);for(let T=0;T!==w;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==_;++w,y+=4)a.copy(h[w]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var xr=4,dv=6,hv=20,fv=256,Wa=new ts,Rf=new Re,dd=null,hd=0,fd=0,pd=!1,pv=new N,Cs=new N,_r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=pv}=r;dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,hd,fd),this._renderer.xr.enabled=pd,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Dt,format:Fn,colorSpace:ea,depthBuffer:!1},s=Pf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mv(r)),this._blurMaterial=xv(r,e,t),this._ggxMaterial=gv(r,e,t)}return s}_compileMaterial(e){let t=new ve(new Vt,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,i,s,r){let c=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rf),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Gt,new Et({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Rf),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));let T=this._cubeSize;gr(s,y*T,w>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ss||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;gr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Wa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-xr?i-g+xr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,gr(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Wa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,gr(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Wa)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-xr?s-this._lodMax+xr:0),d=4*(this._cubeSize-u);gr(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Wa)}};function mv(n){let e=[],t=[],i=n,s=n-xr+1+dv;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,g=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,w=p>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(y,f*d*p);for(let T=0;T<d;T++){let E=u[T*2]*2-1,R=u[T*2+1]*2-1;p===0?Cs.set(1,R,E):p===1?Cs.set(-E,1,-R):p===2?Cs.set(-E,R,1):p===3?Cs.set(-1,R,-E):p===4?Cs.set(-E,-1,R):Cs.set(E,R,-1),Cs.toArray(_,(p*d+T)*f)}}let m=new Vt;m.setAttribute("position",new wn(g,f)),m.setAttribute("outputDirection",new wn(_,f)),t.push(new ve(m,null)),i>xr&&i--}return{lodMeshes:t,sizeLods:e}}function Pf(n,e,t){let i=new wt(n,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function gv(n,e,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xv(n,e,t){return new yt({name:"SphericalGaussianBlur",defines:{SAMPLES:hv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function If(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Lf(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Un});r.uniforms.tEquirect.value=t;let a=new ve(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=kt),new Ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function vv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Al||f===wl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new gc(g.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Al||f===wl,_=f===ss||f===As;if(g||_){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new _r(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new _r(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Al?d.mapping=ss:f===wl&&(d.mapping=As),d}function c(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function _v(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&_s("WebGLRenderer: "+i+" extension not supported."),s}}}function yv(n,e,t,i){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let w=0,y=M.length;w<y;w+=3){let T=M[w+0],E=M[w+1],R=M[w+2];d.push(T,E,E,R,R,T)}}else{let M=g.array;_=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let T=w+0,E=w+1,R=w+2;d.push(T,E,E,R,R,T)}}let m=new(g.count>=65535?la:oa)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Mv(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sv(n,e,t){let i=new WeakMap,s=new At;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*h),R=new sa(E,y,T,h);R.type=On,R.needsUpdate=!0;let x=w*4;for(let C=0;C<h;C++){let D=m[C],L=p[C],O=M[C],I=y*T*4*C;for(let F=0;F<D.count;F++){let X=F*x;f===!0&&(s.fromBufferAttribute(D,F),E[I+X+0]=s.x,E[I+X+1]=s.y,E[I+X+2]=s.z,E[I+X+3]=0),g===!0&&(s.fromBufferAttribute(L,F),E[I+X+4]=s.x,E[I+X+5]=s.y,E[I+X+6]=s.z,E[I+X+7]=0),_===!0&&(s.fromBufferAttribute(O,F),E[I+X+8]=s.x,E[I+X+9]=s.y,E[I+X+10]=s.z,E[I+X+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new fe(y,T)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ev(n,e,t,i,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Tv={[Ca]:"LINEAR_TONE_MAPPING",[Ra]:"REINHARD_TONE_MAPPING",[Pa]:"CINEON_TONE_MAPPING",[Pi]:"ACES_FILMIC_TONE_MAPPING",[La]:"AGX_TONE_MAPPING",[Da]:"NEUTRAL_TONE_MAPPING",[Ia]:"CUSTOM_TONE_MAPPING"};function Av(n,e,t,i,s,r){let a=new wt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Vt;l.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ot([0,2,0,0,2,0],2));let u=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ve(l,u),d=new ts(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,M=[],w=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),c!==null&&c.setSize(y,T);for(let E=0;E<M.length;E++){let R=M[E];R.setSize&&R.setSize(y,T)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;let T=a.width,E=a.height;M.length>0&&o===null&&(o=new wt(T,E,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),c=new wt(T,E,{type:Dt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(T,E)}},this.begin=function(y,T){if(_||y.toneMapping===Qn&&M.length===0)return!1;if(p=T,T!==null){let E=T.width,R=T.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return w},this.end=function(y,T){y.toneMapping=m,_=!0;let E=a,R=o;for(let x=0;x<M.length;x++){let S=M[x];S.enabled!==!1&&(S.render(y,R,E,T),S.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},ht.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let x=Tv[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(h,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Kf=new jt,xd=new Qi(1,1),$f=new sa,ep=new el,tp=new da,Df=[],Nf=[],Uf=new Float32Array(16),Of=new Float32Array(9),Ff=new Float32Array(4);function yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _c(n,e){let t=Nf[e];t===void 0&&(t=new Int32Array(e),Nf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function Iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if($t(t,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),en(t,i)}}function Lv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if($t(t,i))return;Of.set(i),n.uniformMatrix3fv(this.addr,!1,Of),en(t,i)}}function Dv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if($t(t,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),en(t,i)}}function Nv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function Fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function Bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function Hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function Vv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xd.compareFunction=t.isReversedDepthBuffer()?fc:hc,r=xd):r=Kf,t.setTexture2D(e||r,s)}function Gv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ep,s)}function Wv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||tp,s)}function qv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$f,s)}function Xv(n){switch(n){case 5126:return wv;case 35664:return Cv;case 35665:return Rv;case 35666:return Pv;case 35674:return Iv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Ov;case 35669:case 35673:return Fv;case 5125:return Bv;case 36294:return zv;case 36295:return Hv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return qv}}function Yv(n,e){n.uniform1fv(this.addr,e)}function Qv(n,e){let t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Jv(n,e){let t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function jv(n,e){let t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zv(n,e){let t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kv(n,e){let t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $v(n,e){let t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function s_(n,e){n.uniform1uiv(this.addr,e)}function r_(n,e){n.uniform2uiv(this.addr,e)}function a_(n,e){n.uniform3uiv(this.addr,e)}function o_(n,e){n.uniform4uiv(this.addr,e)}function l_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=xd:a=Kf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function c_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ep,r[a])}function u_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tp,r[a])}function d_(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$f,r[a])}function h_(n){switch(n){case 5126:return Yv;case 35664:return Qv;case 35665:return Jv;case 35666:return jv;case 35674:return Zv;case 35675:return Kv;case 35676:return $v;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}var vd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xv(t.type)}},_d=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}},yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},md=/(\w+)(\])?(\[|\.)?/g;function Bf(n,e){n.seq.push(e),n.map[e.id]=e}function f_(n,e,t){let i=n.name,s=i.length;for(md.lastIndex=0;;){let r=md.exec(i),a=md.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bf(t,l===void 0?new vd(o,n,e):new _d(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new yd(o),Bf(t,h)),t=h}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);f_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function zf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var p_=37297,m_=0;function g_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Hf=new st;function x_(n){ht._getMatrix(Hf,ht.workingColorSpace,n);let e=`mat3( ${Hf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g_(n.getShaderSource(e),o)}else return r}function v_(n,e){let t=x_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var __={[Ca]:"Linear",[Ra]:"Reinhard",[Pa]:"Cineon",[Pi]:"ACESFilmic",[La]:"AgX",[Da]:"Neutral",[Ia]:"Custom"};function y_(n,e){let t=__[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new N;function M_(){ht.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function S_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xa(n){return n!==""}function Vf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(n){return n.replace(T_,w_)}var A_=new Map;function w_(n,e){let t=ut[e];if(t===void 0){let i=A_.get(e);if(i!==void 0)t=ut[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Md(t)}var C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(C_,R_)}function R_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var P_={[wa]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function I_(n){return P_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L_={[ss]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function D_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":L_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var N_={[As]:"ENVMAP_MODE_REFRACTION"};function U_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":N_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O_={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[of]:"ENVMAP_BLENDING_ADD"};function F_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":O_[n.combine]||"ENVMAP_BLENDING_NONE"}function B_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function z_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=I_(t),l=D_(t),u=U_(t),h=F_(t),d=B_(t),f=b_(t),g=S_(r),_=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),p.length>0&&(p+=`
`)):(m=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),p=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ut.tonemapping_pars_fragment:"",t.toneMapping!==Qn?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),a=Md(a),a=Vf(a,t),a=Gf(a,t),o=Md(o),o=Vf(o,t),o=Gf(o,t),a=Wf(a),o=Wf(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+a,y=M+p+o,T=zf(s,s.VERTEX_SHADER,w),E=zf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,T),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",F=L.trim(),X=O.trim(),W=I.trim(),ue=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,E);else{let re=kf(s,T,"vertex"),ce=kf(s,E,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+re+`
`+ce)}else F!==""?tt("WebGLProgram: Program Info Log:",F):(X===""||W==="")&&($=!1);$&&(D.diagnostics={runnable:ue,programLog:F,vertexShader:{log:X,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(T),s.deleteShader(E),x=new vr(s,_),S=E_(s,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,p_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var H_=0,bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sd(e),t.set(e,i)),i}},Sd=class{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}};function k_(n){return n===as||n===Ha||n===ka}function V_(n,e,t,i,s,r){let a=new ra,o=new bd,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,S,C,D,L,O){let I=D.fog,F=L.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ue=e.get(x.envMap||X,W),$=ue&&ue.mapping===Na?ue.image.height:null,re=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&tt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,De=ce!==void 0?ce.length:0,z=0;F.morphAttributes.position!==void 0&&(z=1),F.morphAttributes.normal!==void 0&&(z=2),F.morphAttributes.color!==void 0&&(z=3);let V,Y,de,P;if(re){let Ct=fi[re];V=Ct.vertexShader,Y=Ct.fragmentShader}else{V=x.vertexShader,Y=x.fragmentShader;let Ct=o.getVertexShaderStage(x),vt=o.getFragmentShaderStage(x);o.update(x,Ct,vt),de=Ct.id,P=vt.id}let k=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),K=L.isInstancedMesh===!0,te=L.isBatchedMesh===!0,xe=!!x.map,it=!!x.matcap,se=!!ue,q=!!x.aoMap,Z=!!x.lightMap,ae=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,we=!!x.displacementMap,Ue=!!x.emissiveMap,Ve=!!x.metalnessMap,Oe=!!x.roughnessMap,U=x.anisotropy>0,$e=x.clearcoat>0,rt=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,G=x.sheen>0,Q=x.transmission>0,ie=U&&!!x.anisotropyMap,_e=$e&&!!x.clearcoatMap,ye=$e&&!!x.clearcoatNormalMap,oe=$e&&!!x.clearcoatRoughnessMap,he=v&&!!x.iridescenceMap,Me=v&&!!x.iridescenceThicknessMap,Qe=G&&!!x.sheenColorMap,Te=G&&!!x.sheenRoughnessMap,be=!!x.specularMap,Je=!!x.specularColorMap,et=!!x.specularIntensityMap,at=Q&&!!x.transmissionMap,H=Q&&!!x.thicknessMap,Se=!!x.gradientMap,le=!!x.alphaMap,Ee=x.alphaTest>0,Le=!!x.alphaHash,me=!!x.extensions,je=Qn;x.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=n.toneMapping);let Xe={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Y,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:P,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:te,batchingColor:te&&L._colorsTexture!==null,instancing:K,instancingColor:K&&L.instanceColor!==null,instancingMorph:K&&L.morphTexture!==null,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:it,envMap:se,envMapMode:se&&ue.mapping,envMapCubeUVHeight:$,aoMap:q,lightMap:Z,bumpMap:ae,normalMap:pe,displacementMap:we,emissiveMap:Ue,normalMapObjectSpace:pe&&x.normalMapType===uf,normalMapTangentSpace:pe&&x.normalMapType===Va,packedNormalMap:pe&&x.normalMapType===Va&&k_(x.normalMap.format),metalnessMap:Ve,roughnessMap:Oe,anisotropy:U,anisotropyMap:ie,clearcoat:$e,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:oe,dispersion:rt,retroreflection:A,iridescence:v,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:G,sheenColorMap:Qe,sheenRoughnessMap:Te,specularMap:be,specularColorMap:Je,specularIntensityMap:et,transmission:Q,transmissionMap:at,thicknessMap:H,gradientMap:Se,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Ee,alphaHash:Le,combine:x.combine,mapUv:xe&&g(x.map.channel),aoMapUv:q&&g(x.aoMap.channel),lightMapUv:Z&&g(x.lightMap.channel),bumpMapUv:ae&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:we&&g(x.displacementMap.channel),emissiveMapUv:Ue&&g(x.emissiveMap.channel),metalnessMapUv:Ve&&g(x.metalnessMap.channel),roughnessMapUv:Oe&&g(x.roughnessMap.channel),anisotropyMapUv:ie&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:Je&&g(x.specularColorMap.channel),specularIntensityMapUv:et&&g(x.specularIntensityMap.channel),transmissionMapUv:at&&g(x.transmissionMap.channel),thicknessMapUv:H&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||U),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(xe||le),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),M(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let S=f[x.type],C;if(S){let D=fi[S];C=xn.clone(D.uniforms)}else C=x.uniforms;return C}function y(x,S){let C=u.get(S);return C!==void 0?++C.usedTimes:(C=new z_(n,S,x,s),l.push(C),u.set(S,C)),C}function T(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:R}}function G_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function W_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function c(d,f,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);let w=o(d,f,g,_,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(d,f,g,_,m,p){let M=o(d,f,g,_,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||W_),i.length>1&&i.sort(f||Xf),s.length>1&&s.sort(f||Xf)}function h(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function q_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Yf,n.set(i,[a])):s>=r.length?(a=new Yf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function X_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Re};break;case"SpotLight":t={position:new N,direction:new N,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Y_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Q_=0;function J_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j_(n){let e=new X_,t=Y_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new ct,a=new ct;function o(l){let u=0,h=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,w=0,y=0,T=0,E=0,R=0,x=0,S=0,C=0;l.sort(J_);for(let L=0,O=l.length;L<O;L++){let I=l[L],F=I.color,X=I.intensity,W=I.distance,ue=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===as?ue=I.shadow.map.texture:ue=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*X,h+=F.g*X,d+=F.b*X;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],X);C++}else if(I.isSunLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,ce=t.get(I);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),i.sunShadow[g]=ce,i.sunShadowMap[g]=ue;let De=re.getViewportCount();for(let z=0;z<De;z++)i.sunShadowMatrix[_+z]=re.getMatrix(z),i.sunShadowCascade[_+z]=re._cascadeData[z];_+=De,g++}i.sun[f]=$,f++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,ce=t.get(I);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,i.directionalShadow[m]=ce,i.directionalShadowMap[m]=ue,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=$,m++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(F).multiplyScalar(X),$.distance=W,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[M]=$;let re=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,re.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[M]=re.matrix,I.castShadow){let ce=t.get(I);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,i.spotShadow[M]=ce,i.spotShadowMap[M]=ue,R++}M++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(F).multiplyScalar(X),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=$,w++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let re=I.shadow,ce=t.get(I);ce.shadowIntensity=re.intensity,ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,ce.shadowCameraNear=re.camera.near,ce.shadowCameraFar=re.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=ue,i.pointShadowMatrix[p]=I.shadow.matrix,E++}i.point[p]=$,p++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(X),$.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[y]=$,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==R||D.numSpotMaps!==x||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=R,D.numSpotMaps=x,D.numLightProbes=C,i.version=Q_++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){let y=l[M];if(y.isSunLight){let T=i.sun[h];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),h++}else if(y.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(y.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Qf(n){let e=new j_(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Z_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Qf(n),e.set(s,[o])):r>=a.length?(o=new Qf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`,ey=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],ty=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Jf=new ct,qa=new N,gd=new N;function ny(n,e,t){let i=new sr,s=new fe,r=new fe,a=new At,o=new cl,c=new ul,l={},u=t.maxTextureSize,h={[ns]:Xt,[Xt]:ns,[on]:on},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:K_,fragmentShader:$_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(E,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===El&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);let S=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Un),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=p!==this.type;O&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){let X=E[I],W=X.shadow;if(W===void 0){tt("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ue=W.getFrameExtents();s.multiply(ue),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ur){if(X.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new wt(s.x,s.y,{format:as,type:Dt,minFilter:kt,magFilter:kt,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Qi(s.x,s.y,On),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht}else X.isPointLight?(W.map=new gc(s.x),W.map.depthTexture=new nl(s.x,Jn)):(W.map=new wt(s.x,s.y),W.map.depthTexture=new Qi(s.x,s.y,Jn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=ri,this.type===wa?(W.map.depthTexture.compareFunction=$?fc:hc,W.map.depthTexture.minFilter=kt,W.map.depthTexture.magFilter=kt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let re=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,x);for(let ce=0;ce<re;ce++){let De=W.getCamera(ce);if(X.isPointLight){let z=W.camera,V=W.matrix,Y=X.distance||z.far;Y!==z.far&&(z.far=Y,z.updateProjectionMatrix()),qa.setFromMatrixPosition(X.matrixWorld),z.position.copy(qa),gd.copy(z.position),gd.add(ey[ce]),z.up.copy(ty[ce]),z.lookAt(gd),z.updateMatrixWorld(),V.makeTranslation(-qa.x,-qa.y,-qa.z),Jf.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Jf,z.coordinateSystem,z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(W.map),n.clear());let z=W.getViewport(ce);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),L.viewport(a)}i=W.getFrustum(ce),y(R,x,De,X,this.type)}W.isPointLightShadow!==!0&&this.type===ur&&M(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,C,D)};function M(E,R){let x=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new wt(s.x,s.y,{format:as,type:Dt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,x,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,x,f,_,null)}function w(E,R,x,S){let C=null,D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=C.uuid,O=R.uuid,I=l[L];I===void 0&&(I={},l[L]=I);let F=I[O];F===void 0&&(F=C.clone(),I[O]=F,R.addEventListener("dispose",T)),C=F}if(C.visible=R.visible,C.wireframe=R.wireframe,S===ur?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=n.properties.get(C);L.light=x}return C}function y(E,R,x,S,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ur)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let O=e.update(E),I=E.material;if(Array.isArray(I)){let F=O.groups;for(let X=0,W=F.length;X<W;X++){let ue=F[X],$=I[ue.materialIndex];if($&&$.visible){let re=w(E,$,S,C);E.onBeforeShadow(n,E,R,x,O,re,ue),n.renderBufferDirect(x,null,O,re,E,ue),E.onAfterShadow(n,E,R,x,O,re,ue)}}}else if(I.visible){let F=w(E,I,S,C);E.onBeforeShadow(n,E,R,x,O,F,null),n.renderBufferDirect(x,null,O,F,E,null),E.onAfterShadow(n,E,R,x,O,F,null)}}let L=E.children;for(let O=0,I=L.length;O<I;O++)y(L[O],R,x,S,C)}function T(E){E.target.removeEventListener("dispose",T);for(let x in l){let S=l[x],C=E.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function iy(n,e){function t(){let H=!1,Se=new At,le=null,Ee=new At(0,0,0,0);return{setMask:function(Le){le!==Le&&!H&&(n.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){H=Le},setClear:function(Le,me,je,Xe,Ct){Ct===!0&&(Le*=Xe,me*=Xe,je*=Xe),Se.set(Le,me,je,Xe),Ee.equals(Se)===!1&&(n.clearColor(Le,me,je,Xe),Ee.copy(Se))},reset:function(){H=!1,le=null,Ee.set(-1,0,0,0)}}}function i(){let H=!1,Se=!1,le=null,Ee=null,Le=null;return{setReversed:function(me){if(Se!==me){let je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Se=me;let Xe=Le;Le=null,this.setClear(Xe)}},getReversed:function(){return Se},setTest:function(me){me?k(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(me){le!==me&&!H&&(n.depthMask(me),le=me)},setFunc:function(me){if(Se&&(me=Mf[me]),Ee!==me){switch(me){case Go:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case qo:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=me}},setLocked:function(me){H=me},setClear:function(me){Le!==me&&(Le=me,Se&&(me=1-me),n.clearDepth(me))},reset:function(){H=!1,le=null,Ee=null,Le=null,Se=!1}}}function s(){let H=!1,Se=null,le=null,Ee=null,Le=null,me=null,je=null,Xe=null,Ct=null;return{setTest:function(vt){H||(vt?k(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(vt){Se!==vt&&!H&&(n.stencilMask(vt),Se=vt)},setFunc:function(vt,Vn,ei){(le!==vt||Ee!==Vn||Le!==ei)&&(n.stencilFunc(vt,Vn,ei),le=vt,Ee=Vn,Le=ei)},setOp:function(vt,Vn,ei){(me!==vt||je!==Vn||Xe!==ei)&&(n.stencilOp(vt,Vn,ei),me=vt,je=Vn,Xe=ei)},setLocked:function(vt){H=vt},setClear:function(vt){Ct!==vt&&(n.clearStencil(vt),Ct=vt)},reset:function(){H=!1,Se=null,le=null,Ee=null,Le=null,me=null,je=null,Xe=null,Ct=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,w=null,y=null,T=null,E=null,R=null,x=new Re(0,0,0),S=0,C=!1,D=null,L=null,O=null,I=null,F=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ue=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec($)[1]),W=ue>=1):$.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=ue>=2);let re=null,ce={},De=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),V=new At().fromArray(De),Y=new At().fromArray(z);function de(H,Se,le,Ee){let Le=new Uint8Array(4),me=n.createTexture();n.bindTexture(H,me),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<le;je++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Se+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return me}let P={};P[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),P[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),P[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(n.DEPTH_TEST),a.setFunc(Ks),ae(!1),pe(ku),k(n.CULL_FACE),q(Un);function k(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ee(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function K(H,Se){return d[H]!==Se?(n.bindFramebuffer(H,Se),d[H]=Se,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function te(H,Se){let le=g,Ee=!1;if(H){le=f.get(Se),le===void 0&&(le=[],f.set(Se,le));let Le=H.textures;if(le.length!==Le.length||le[0]!==n.COLOR_ATTACHMENT0){for(let me=0,je=Le.length;me<je;me++)le[me]=n.COLOR_ATTACHMENT0+me;le.length=Le.length,Ee=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(le)}function xe(H){return _!==H?(n.useProgram(H),_=H,!0):!1}let it={[Ts]:n.FUNC_ADD,[Vh]:n.FUNC_SUBTRACT,[Gh]:n.FUNC_REVERSE_SUBTRACT};it[Wh]=n.MIN,it[qh]=n.MAX;let se={[Xh]:n.ZERO,[Yh]:n.ONE,[Qh]:n.SRC_COLOR,[Wu]:n.SRC_ALPHA,[ef]:n.SRC_ALPHA_SATURATE,[Kh]:n.DST_COLOR,[jh]:n.DST_ALPHA,[Jh]:n.ONE_MINUS_SRC_COLOR,[qu]:n.ONE_MINUS_SRC_ALPHA,[$h]:n.ONE_MINUS_DST_COLOR,[Zh]:n.ONE_MINUS_DST_ALPHA,[tf]:n.CONSTANT_COLOR,[nf]:n.ONE_MINUS_CONSTANT_COLOR,[sf]:n.CONSTANT_ALPHA,[rf]:n.ONE_MINUS_CONSTANT_ALPHA};function q(H,Se,le,Ee,Le,me,je,Xe,Ct,vt){if(H===Un){m===!0&&(ee(n.BLEND),m=!1);return}if(m===!1&&(k(n.BLEND),m=!0),H!==kh){if(H!==p||vt!==C){if((M!==Ts||T!==Ts)&&(n.blendEquation(n.FUNC_ADD),M=Ts,T=Ts),vt)switch(H){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.ONE,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",H);break}else switch(H){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vu:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",H);break}w=null,y=null,E=null,R=null,x.set(0,0,0),S=0,p=H,C=vt}return}Le=Le||Se,me=me||le,je=je||Ee,(Se!==M||Le!==T)&&(n.blendEquationSeparate(it[Se],it[Le]),M=Se,T=Le),(le!==w||Ee!==y||me!==E||je!==R)&&(n.blendFuncSeparate(se[le],se[Ee],se[me],se[je]),w=le,y=Ee,E=me,R=je),(Xe.equals(x)===!1||Ct!==S)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Ct),x.copy(Xe),S=Ct),p=H,C=!1}function Z(H,Se){H.side===on?ee(n.CULL_FACE):k(n.CULL_FACE);let le=H.side===Xt;Se&&(le=!le),ae(le),H.blending===dr&&H.transparent===!1?q(Un):q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ee=H.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(H){D!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),D=H)}function pe(H){H!==zh?(k(n.CULL_FACE),H!==L&&(H===ku?n.cullFace(n.BACK):H===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),L=H}function we(H){H!==O&&(W&&n.lineWidth(H),O=H)}function Ue(H,Se,le){H?(k(n.POLYGON_OFFSET_FILL),(I!==Se||F!==le)&&(I=Se,F=le,a.getReversed()&&(Se=-Se),n.polygonOffset(Se,le))):ee(n.POLYGON_OFFSET_FILL)}function Ve(H){H?k(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function Oe(H){H===void 0&&(H=n.TEXTURE0+X-1),re!==H&&(n.activeTexture(H),re=H)}function U(H,Se,le){le===void 0&&(re===null?le=n.TEXTURE0+X-1:le=re);let Ee=ce[le];Ee===void 0&&(Ee={type:void 0,texture:void 0},ce[le]=Ee),(Ee.type!==H||Ee.texture!==Se)&&(re!==le&&(n.activeTexture(le),re=le),n.bindTexture(H,Se||P[H]),Ee.type=H,Ee.texture=Se)}function $e(){let H=ce[re];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(H){nt("WebGLState:",H)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(H){nt("WebGLState:",H)}}function v(){try{n.texSubImage2D(...arguments)}catch(H){nt("WebGLState:",H)}}function G(){try{n.texSubImage3D(...arguments)}catch(H){nt("WebGLState:",H)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(H){nt("WebGLState:",H)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(H){nt("WebGLState:",H)}}function _e(){try{n.texStorage2D(...arguments)}catch(H){nt("WebGLState:",H)}}function ye(){try{n.texStorage3D(...arguments)}catch(H){nt("WebGLState:",H)}}function oe(){try{n.texImage2D(...arguments)}catch(H){nt("WebGLState:",H)}}function he(){try{n.texImage3D(...arguments)}catch(H){nt("WebGLState:",H)}}function Me(H){return h[H]!==void 0?h[H]:n.getParameter(H)}function Qe(H,Se){h[H]!==Se&&(n.pixelStorei(H,Se),h[H]=Se)}function Te(H){V.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),V.copy(H))}function be(H){Y.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Y.copy(H))}function Je(H,Se){let le=l.get(Se);le===void 0&&(le=new WeakMap,l.set(Se,le));let Ee=le.get(H);Ee===void 0&&(Ee=n.getUniformBlockIndex(Se,H.name),le.set(H,Ee))}function et(H,Se){let Ee=l.get(Se).get(H);c.get(Se)!==Ee&&(n.uniformBlockBinding(Se,Ee,H.__bindingPointIndex),c.set(Se,Ee))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},re=null,ce={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,w=null,y=null,T=null,E=null,R=null,x=new Re(0,0,0),S=0,C=!1,D=null,L=null,O=null,I=null,F=null,V.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:ee,bindFramebuffer:K,drawBuffers:te,useProgram:xe,setBlending:q,setMaterial:Z,setFlipSided:ae,setCullFace:pe,setLineWidth:we,setPolygonOffset:Ue,setScissorTest:Ve,activeTexture:Oe,bindTexture:U,unbindTexture:$e,compressedTexImage2D:rt,compressedTexImage3D:A,texImage2D:oe,texImage3D:he,pixelStorei:Qe,getParameter:Me,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:_e,texStorage3D:ye,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:Q,compressedTexSubImage3D:ie,scissor:Te,viewport:be,reset:at}}function sy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,u=new WeakMap,h=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return g?new OffscreenCanvas(A,v):na("canvas")}function m(A,v,G){let Q=1,ie=rt(A);if((ie.width>G||ie.height>G)&&(Q=G/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let _e=Math.floor(Q*ie.width),ye=Math.floor(Q*ie.height);d===void 0&&(d=_(_e,ye));let oe=v?_(_e,ye):d;return oe.width=_e,oe.height=ye,oe.getContext("2d").drawImage(A,0,0,_e,ye),tt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+_e+"x"+ye+")."),oe}else return"data"in A&&tt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,v,G,Q,ie,_e=!1){if(A!==null){if(n[A]!==void 0)return n[A];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ye;Q&&(ye=e.get("EXT_texture_norm16"),ye||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=v;if(v===n.RED&&(G===n.FLOAT&&(oe=n.R32F),G===n.HALF_FLOAT&&(oe=n.R16F),G===n.UNSIGNED_BYTE&&(oe=n.R8),G===n.UNSIGNED_SHORT&&ye&&(oe=ye.R16_EXT),G===n.SHORT&&ye&&(oe=ye.R16_SNORM_EXT)),v===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.R8UI),G===n.UNSIGNED_SHORT&&(oe=n.R16UI),G===n.UNSIGNED_INT&&(oe=n.R32UI),G===n.BYTE&&(oe=n.R8I),G===n.SHORT&&(oe=n.R16I),G===n.INT&&(oe=n.R32I)),v===n.RG&&(G===n.FLOAT&&(oe=n.RG32F),G===n.HALF_FLOAT&&(oe=n.RG16F),G===n.UNSIGNED_BYTE&&(oe=n.RG8),G===n.UNSIGNED_SHORT&&ye&&(oe=ye.RG16_EXT),G===n.SHORT&&ye&&(oe=ye.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.RG8UI),G===n.UNSIGNED_SHORT&&(oe=n.RG16UI),G===n.UNSIGNED_INT&&(oe=n.RG32UI),G===n.BYTE&&(oe=n.RG8I),G===n.SHORT&&(oe=n.RG16I),G===n.INT&&(oe=n.RG32I)),v===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),G===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),G===n.UNSIGNED_INT&&(oe=n.RGB32UI),G===n.BYTE&&(oe=n.RGB8I),G===n.SHORT&&(oe=n.RGB16I),G===n.INT&&(oe=n.RGB32I)),v===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),G===n.UNSIGNED_INT&&(oe=n.RGBA32UI),G===n.BYTE&&(oe=n.RGBA8I),G===n.SHORT&&(oe=n.RGBA16I),G===n.INT&&(oe=n.RGBA32I)),v===n.RGB&&(G===n.UNSIGNED_SHORT&&ye&&(oe=ye.RGB16_EXT),G===n.SHORT&&ye&&(oe=ye.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),v===n.RGBA){let he=_e?ta:ht.getTransfer(ie);G===n.FLOAT&&(oe=n.RGBA32F),G===n.HALF_FLOAT&&(oe=n.RGBA16F),G===n.UNSIGNED_BYTE&&(oe=he===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ye&&(oe=ye.RGBA16_EXT),G===n.SHORT&&ye&&(oe=ye.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function T(A,v){let G;return A?v===null||v===Jn||v===fr?G=n.DEPTH24_STENCIL8:v===On?G=n.DEPTH32F_STENCIL8:v===hr&&(G=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===fr?G=n.DEPTH_COMPONENT24:v===On?G=n.DEPTH_COMPONENT32F:v===hr&&(G=n.DEPTH_COMPONENT16),G}function E(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){let v=A.target;v.removeEventListener("dispose",R),S(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function x(A){let v=A.target;v.removeEventListener("dispose",x),D(v)}function S(A){let v=i.get(A);if(v.__webglInit===void 0)return;let G=A.source,Q=f.get(G);if(Q){let ie=Q[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(A),Object.keys(Q).length===0&&f.delete(G)}i.remove(A)}function C(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let G=A.source,Q=f.get(G);delete Q[v.__cacheKey],a.memory.textures--}function D(A){let v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ie=0;ie<v.__webglFramebuffer[Q].length;ie++)n.deleteFramebuffer(v.__webglFramebuffer[Q][ie]);else n.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=A.textures;for(let Q=0,ie=G.length;Q<ie;Q++){let _e=i.get(G[Q]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(G[Q])}i.remove(A)}let L=0;function O(){L=0}function I(){return L}function F(A){L=A}function X(){let A=L;return A>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function W(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ue(A,v){let G=i.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let Q=A.image;if(Q===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,A,v);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+v)}function $(A,v){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ee(G,A,v);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+v)}function re(A,v){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ee(G,A,v);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+v)}function ce(A,v){let G=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&G.__version!==A.version){K(G,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+v)}let De={[$s]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},z={[Ht]:n.NEAREST,[lf]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},V={[hf]:n.NEVER,[xf]:n.ALWAYS,[ff]:n.LESS,[hc]:n.LEQUAL,[pf]:n.EQUAL,[fc]:n.GEQUAL,[mf]:n.GREATER,[gf]:n.NOTEQUAL};function Y(A,v){if(v.type===On&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kt||v.magFilter===Cl||v.magFilter===Ua||v.magFilter===di||v.minFilter===kt||v.minFilter===Cl||v.minFilter===Ua||v.minFilter===di)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,De[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,De[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,De[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,z[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,z[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,V[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ht||v.minFilter!==Ua&&v.minFilter!==di||v.type===On&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function de(A,v){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));let Q=v.source,ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));let _e=W(v);if(_e!==A.__cacheKey){ie[_e]===void 0&&(ie[_e]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[_e].usedTimes++;let ye=ie[A.__cacheKey];ye!==void 0&&(ie[A.__cacheKey].usedTimes--,ye.usedTimes===0&&C(v)),A.__cacheKey=_e,A.__webglTexture=ie[_e].texture}return G}function P(A,v,G){return Math.floor(Math.floor(A/G)/v)}function k(A,v,G,Q){let _e=A.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,G,Q,v.data);else{_e.sort((Qe,Te)=>Qe.start-Te.start);let ye=0;for(let Qe=1;Qe<_e.length;Qe++){let Te=_e[ye],be=_e[Qe],Je=Te.start+Te.count,et=P(be.start,v.width,4),at=P(Te.start,v.width,4);be.start<=Je+1&&et===at&&P(be.start+be.count-1,v.width,4)===et?Te.count=Math.max(Te.count,be.start+be.count-Te.start):(++ye,_e[ye]=be)}_e.length=ye+1;let oe=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Qe=0,Te=_e.length;Qe<Te;Qe++){let be=_e[Qe],Je=Math.floor(be.start/4),et=Math.ceil(be.count/4),at=Je%v.width,H=Math.floor(Je/v.width),Se=et,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,at),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,at,H,Se,le,G,Q,v.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function ee(A,v,G){let Q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=n.TEXTURE_3D);let ie=de(A,v),_e=v.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+G);let ye=i.get(_e);if(_e.version!==ye.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let le=ht.getPrimaries(ht.workingColorSpace),Ee=v.colorSpace===Ii?null:ht.getPrimaries(v.colorSpace),Le=v.colorSpace===Ii||le===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let he=m(v.image,!1,s.maxTextureSize);he=$e(v,he);let Me=r.convert(v.format,v.colorSpace),Qe=r.convert(v.type),Te=y(v.internalFormat,Me,Qe,v.normalized,v.colorSpace,v.isVideoTexture);Y(Q,v);let be,Je=v.mipmaps,et=v.isVideoTexture!==!0,at=ye.__version===void 0||ie===!0,H=_e.dataReady,Se=E(v,he);if(v.isDepthTexture)Te=T(v.format===rs,v.type),at&&(et?t.texStorage2D(n.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,Me,Qe,null));else if(v.isDataTexture)if(Je.length>0){et&&at&&t.texStorage2D(n.TEXTURE_2D,Se,Te,Je[0].width,Je[0].height);for(let le=0,Ee=Je.length;le<Ee;le++)be=Je[le],et?H&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,be.width,be.height,Me,Qe,be.data):t.texImage2D(n.TEXTURE_2D,le,Te,be.width,be.height,0,Me,Qe,be.data);v.generateMipmaps=!1}else et?(at&&t.texStorage2D(n.TEXTURE_2D,Se,Te,he.width,he.height),H&&k(v,he,Me,Qe)):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,Me,Qe,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Te,Je[0].width,Je[0].height,he.depth);for(let le=0,Ee=Je.length;le<Ee;le++)if(be=Je[le],v.format!==Fn)if(Me!==null)if(et){if(H)if(v.layerUpdates.size>0){let Le=rd(be.width,be.height,v.format,v.type);for(let me of v.layerUpdates){let je=be.data.subarray(me*Le/be.data.BYTES_PER_ELEMENT,(me+1)*Le/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,me,be.width,be.height,1,Me,je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,he.depth,Me,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Te,be.width,be.height,he.depth,0,be.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,he.depth,Me,Qe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Te,be.width,be.height,he.depth,0,Me,Qe,be.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{et&&at&&t.texStorage2D(n.TEXTURE_2D,Se,Te,Je[0].width,Je[0].height);for(let le=0,Ee=Je.length;le<Ee;le++)be=Je[le],v.format!==Fn?Me!==null?et?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Te,be.width,be.height,0,be.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?H&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,be.width,be.height,Me,Qe,be.data):t.texImage2D(n.TEXTURE_2D,le,Te,be.width,be.height,0,Me,Qe,be.data)}else if(v.isDataArrayTexture)if(et){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Te,he.width,he.height,he.depth),H)if(v.layerUpdates.size>0){let le=rd(he.width,he.height,v.format,v.type);for(let Ee of v.layerUpdates){let Le=he.data.subarray(Ee*le/he.data.BYTES_PER_ELEMENT,(Ee+1)*le/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,he.width,he.height,1,Me,Qe,Le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Qe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,Me,Qe,he.data);else if(v.isData3DTexture)et?(at&&t.texStorage3D(n.TEXTURE_3D,Se,Te,he.width,he.height,he.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Qe,he.data)):t.texImage3D(n.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,Me,Qe,he.data);else if(v.isFramebufferTexture){if(at)if(et)t.texStorage2D(n.TEXTURE_2D,Se,Te,he.width,he.height);else{let le=he.width,Ee=he.height;for(let Le=0;Le<Se;Le++)t.texImage2D(n.TEXTURE_2D,Le,Te,le,Ee,0,Me,Qe,null),le>>=1,Ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),he.parentNode!==le){le.appendChild(he),h.add(v),le.onpaint=Ee=>{let Le=Ee.changedElements;for(let me of h)Le.includes(me.image)&&(me.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{let Le=n.RGBA,me=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,me,je,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&at){let le=rt(Je[0]);t.texStorage2D(n.TEXTURE_2D,Se,Te,le.width,le.height)}for(let le=0,Ee=Je.length;le<Ee;le++)be=Je[le],et?H&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,Qe,be):t.texImage2D(n.TEXTURE_2D,le,Te,Me,Qe,be);v.generateMipmaps=!1}else if(et){if(at){let le=rt(he);t.texStorage2D(n.TEXTURE_2D,Se,Te,le.width,le.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Qe,he)}else t.texImage2D(n.TEXTURE_2D,0,Te,Me,Qe,he);p(v)&&M(Q),ye.__version=_e.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function K(A,v,G){if(v.image.length!==6)return;let Q=de(A,v),ie=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let _e=i.get(ie);if(ie.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);let ye=ht.getPrimaries(ht.workingColorSpace),oe=v.colorSpace===Ii?null:ht.getPrimaries(v.colorSpace),he=v.colorSpace===Ii||ye===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Qe=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let me=0;me<6;me++)!Me&&!Qe?Te[me]=m(v.image[me],!0,s.maxCubemapSize):Te[me]=Qe?v.image[me].image:v.image[me],Te[me]=$e(v,Te[me]);let be=Te[0],Je=r.convert(v.format,v.colorSpace),et=r.convert(v.type),at=y(v.internalFormat,Je,et,v.normalized,v.colorSpace),H=v.isVideoTexture!==!0,Se=_e.__version===void 0||Q===!0,le=ie.dataReady,Ee=E(v,be);Y(n.TEXTURE_CUBE_MAP,v);let Le;if(Me){H&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,at,be.width,be.height);for(let me=0;me<6;me++){Le=Te[me].mipmaps;for(let je=0;je<Le.length;je++){let Xe=Le[je];v.format!==Fn?Je!==null?H?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,Xe.width,Xe.height,Je,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,at,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,Xe.width,Xe.height,Je,et,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,at,Xe.width,Xe.height,0,Je,et,Xe.data)}}}else{if(Le=v.mipmaps,H&&Se){Le.length>0&&Ee++;let me=rt(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,at,me.width,me.height)}for(let me=0;me<6;me++)if(Qe){H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Te[me].width,Te[me].height,Je,et,Te[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Te[me].width,Te[me].height,0,Je,et,Te[me].data);for(let je=0;je<Le.length;je++){let Ct=Le[je].image[me].image;H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Ct.width,Ct.height,Je,et,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,at,Ct.width,Ct.height,0,Je,et,Ct.data)}}else{H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,et,Te[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Je,et,Te[me]);for(let je=0;je<Le.length;je++){let Xe=Le[je];H?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Je,et,Xe.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,at,Je,et,Xe.image[me])}}}p(v)&&M(n.TEXTURE_CUBE_MAP),_e.__version=ie.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function te(A,v,G,Q,ie,_e){let ye=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),he=y(G.internalFormat,ye,oe,G.normalized,G.colorSpace),Me=i.get(v),Qe=i.get(G);if(Qe.__renderTarget=v,!Me.__hasExternalTextures){let Te=Math.max(1,v.width>>_e),be=Math.max(1,v.height>>_e);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,_e,he,Te,be,v.depth,0,ye,oe,null):t.texImage2D(ie,_e,he,Te,be,0,ye,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Oe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ie,Qe.__webglTexture,0,Ve(v)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ie,Qe.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(A,v,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let Q=v.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,_e=T(v.stencilBuffer,ie),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Oe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(v),_e,v.width,v.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(v),_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,A)}else{let Q=v.textures;for(let ie=0;ie<Q.length;ie++){let _e=Q[ie],ye=r.convert(_e.format,_e.colorSpace),oe=r.convert(_e.type),he=y(_e.internalFormat,ye,oe,_e.normalized,_e.colorSpace);Oe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(v),he,v.width,v.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(v),he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(A,v,G){let Q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(v.depthTexture);if(ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(n.TEXTURE_CUBE_MAP,v.depthTexture);let Me=r.convert(v.depthTexture.format),Qe=r.convert(v.depthTexture.type),Te;v.depthTexture.format===ri?Te=n.DEPTH_COMPONENT24:v.depthTexture.format===rs&&(Te=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,v.width,v.height,0,Me,Qe,null)}}else ue(v.depthTexture,0);let _e=ie.__webglTexture,ye=Ve(v),oe=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,he=v.depthTexture.format===rs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ri)Oe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,oe,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,he,oe,_e,0);else if(v.depthTexture.format===rs)Oe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,oe,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,he,oe,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(A){let v=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){let ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=Q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let Q=0;Q<6;Q++)it(v.__webglFramebuffer[Q],A,Q);else{let Q=A.texture.mipmaps;Q&&Q.length>0?it(v.__webglFramebuffer[0],A,0):it(v.__webglFramebuffer,A,0)}else if(G){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=n.createRenderbuffer(),xe(v.__webglDepthbuffer[Q],A,!1);else{let ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,_e)}}else{let Q=A.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),xe(v.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(A,v,G){let Q=i.get(A);v!==void 0&&te(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&se(A)}function Z(A){let v=A.texture,G=i.get(A),Q=i.get(v);A.addEventListener("dispose",x);let ie=A.textures,_e=A.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,a.memory.textures++),_e){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let he=0;he<v.mipmaps.length;he++)G.__webglFramebuffer[oe][he]=n.createFramebuffer()}else G.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)G.__webglFramebuffer[oe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ye)for(let oe=0,he=ie.length;oe<he;oe++){let Me=i.get(ie[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Oe(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){let he=ie[oe];G.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let Me=r.convert(he.format,he.colorSpace),Qe=r.convert(he.type),Te=y(he.internalFormat,Me,Qe,he.normalized,he.colorSpace,A.isXRRenderTarget===!0),be=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Y(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)te(G.__webglFramebuffer[oe][he],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else te(G.__webglFramebuffer[oe],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(v)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,he=ie.length;oe<he;oe++){let Me=ie[oe],Qe=i.get(Me),Te=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,Qe.__webglTexture),Y(Te,Me),te(G.__webglFramebuffer,A,Me,n.COLOR_ATTACHMENT0+oe,Te,0),p(Me)&&M(Te)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Y(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)te(G.__webglFramebuffer[he],A,v,n.COLOR_ATTACHMENT0,oe,he);else te(G.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,oe,0);p(v)&&M(oe),t.unbindTexture()}A.depthBuffer&&se(A)}function ae(A){let v=A.textures;for(let G=0,Q=v.length;G<Q;G++){let ie=v[G];if(p(ie)){let _e=w(A),ye=i.get(ie).__webglTexture;t.bindTexture(_e,ye),M(_e),t.unbindTexture()}}}let pe=[],we=[];function Ue(A){if(A.samples>0){if(Oe(A)===!1){let v=A.textures,G=A.width,Q=A.height,ie=n.COLOR_BUFFER_BIT,_e=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(A),oe=v.length>1;if(oe)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let he=A.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Me]);let Qe=i.get(v[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,ie,n.NEAREST),c===!0&&(pe.length=0,we.length=0,pe.push(n.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pe.push(_e),we.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Me]);let Qe=i.get(v[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ve(A){return Math.min(s.maxSamples,A.samples)}function Oe(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function $e(A,v){let G=A.colorSpace,Q=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ea&&G!==Ii&&(ht.getTransfer(G)===xt?(Q!==Fn||ie!==bn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",G)),v}function rt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=ue,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=q,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ry(n,e){function t(i,s=Ii){let r,a=ht.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ju)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yu)return n.BYTE;if(i===Qu)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===Dt)return n.HALF_FLOAT;if(i===Zu)return n.ALPHA;if(i===Ku)return n.RGB;if(i===Fn)return n.RGBA;if(i===ri)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===Ll)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===as)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===Oa||i===Fa||i===Ba||i===za)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Fl||i===Bl||i===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===kl||i===Vl||i===Gl||i===Wl||i===Ha||i===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===kl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gl)return r.COMPRESSED_R11_EAC;if(i===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ha)return r.COMPRESSED_RG11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xl||i===Yl||i===Ql||i===Jl||i===jl||i===Zl||i===Kl||i===$l||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ql)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===oc||i===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===uc||i===ka||i===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`,Ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yt({vertexShader:ay,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Td=class extends ai{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Ed,p={},M=t.getContextAttributes(),w=null,y=null,T=[],E=[],R=new fe,x=null,S=null,C=new rn;C.viewport=new At;let D=new rn;D.viewport=new At;let L=[C,D],O=new bl,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let k=T[P];return k===void 0&&(k=new ir,T[P]=k),k.getTargetRaySpace()},this.getControllerGrip=function(P){let k=T[P];return k===void 0&&(k=new ir,T[P]=k),k.getGripSpace()},this.getHand=function(P){let k=T[P];return k===void 0&&(k=new ir,T[P]=k),k.getHandSpace()};function X(P){let k=E.indexOf(P.inputSource);if(k===-1)return;let ee=T[k];ee!==void 0&&(ee.update(P.inputSource,P.frame,l||a),ee.dispatchEvent({type:P.type,data:P.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ue);for(let P=0;P<T.length;P++){let k=E[P];k!==null&&(E[P]=null,T[P].disconnect(k))}I=null,F=null,m.reset();for(let P in p)delete p[P];if(e.setRenderTarget(w),f=null,d=null,h=null,s=null,y=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),S!==null){let P=S.camera;P.fov=S.fov,P.zoom=S.zoom,P.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ue),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,K=null,te=null;M.depth&&(te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?rs:ri,K=M.stencil?fr:Jn);let xe={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new wt(d.textureWidth,d.textureHeight,{format:Fn,type:bn,depthTexture:new Qi(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new wt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(P){for(let k=0;k<P.removed.length;k++){let ee=P.removed[k],K=E.indexOf(ee);K>=0&&(E[K]=null,T[K].disconnect(ee))}for(let k=0;k<P.added.length;k++){let ee=P.added[k],K=E.indexOf(ee);if(K===-1){for(let xe=0;xe<T.length;xe++)if(xe>=E.length){E.push(ee),K=xe;break}else if(E[xe]===null){E[xe]=ee,K=xe;break}if(K===-1)break}let te=T[K];te&&te.connect(ee)}}let $=new N,re=new N;function ce(P,k,ee){$.setFromMatrixPosition(k.matrixWorld),re.setFromMatrixPosition(ee.matrixWorld);let K=$.distanceTo(re),te=k.projectionMatrix.elements,xe=ee.projectionMatrix.elements,it=te[14]/(te[10]-1),se=te[14]/(te[10]+1),q=(te[9]+1)/te[5],Z=(te[9]-1)/te[5],ae=(te[8]-1)/te[0],pe=(xe[8]+1)/xe[0],we=it*ae,Ue=it*pe,Ve=K/(-ae+pe),Oe=Ve*-ae;if(k.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Oe),P.translateZ(Ve),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),te[10]===-1)P.projectionMatrix.copy(k.projectionMatrix),P.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let U=it+Ve,$e=se+Ve,rt=we-Oe,A=Ue+(K-Oe),v=q*se/$e*U,G=Z*se/$e*U;P.projectionMatrix.makePerspective(rt,A,v,G,U,$e),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function De(P,k){k===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(k.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let k=P.near,ee=P.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),O.near=D.near=C.near=k,O.far=D.far=C.far=ee,(I!==O.near||F!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,F=O.far),O.layers.mask=P.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let K=P.parent,te=O.cameras;De(O,K);for(let xe=0;xe<te.length;xe++)De(te[xe],K);te.length===2?ce(O,C,D):O.projectionMatrix.copy(C.projectionMatrix),S===null&&P.isPerspectiveCamera&&(S={camera:P,fov:P.fov,zoom:P.zoom}),z(P,O,K)};function z(P,k,ee){ee===null?P.matrix.copy(k.matrixWorld):(P.matrix.copy(ee.matrixWorld),P.matrix.invert(),P.matrix.multiply(k.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(k.projectionMatrix),P.projectionMatrixInverse.copy(k.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=ia*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(P){c=P,d!==null&&(d.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(P){return p[P]};let V=null;function Y(P,k){if(u=k.getViewerPose(l||a),g=k,u!==null){let ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let K=!1;ee.length!==O.cameras.length&&(O.cameras.length=0,K=!0);for(let se=0;se<ee.length;se++){let q=ee[se],Z=null;if(f!==null)Z=f.getViewport(q);else{let pe=h.getViewSubImage(d,q);Z=pe.viewport,se===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let ae=L[se];ae===void 0&&(ae=new rn,ae.layers.enable(se),ae.viewport=new At,L[se]=ae),ae.matrix.fromArray(q.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(q.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Z.x,Z.y,Z.width,Z.height),se===0&&(O.matrix.copy(ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),K===!0&&O.cameras.push(ae)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let se=h.getDepthInformation(ee[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(te&&te.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let se=0;se<ee.length;se++){let q=ee[se].camera;if(q){let Z=p[q];Z||(Z=new ha,p[q]=Z);let ae=h.getCameraImage(q);Z.sourceTexture=ae}}}}for(let ee=0;ee<T.length;ee++){let K=E[ee],te=T[ee];K!==null&&te!==void 0&&te.update(K,k,l||a)}V&&V(P,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}let de=new jf;de.setAnimationLoop(Y),this.setAnimationLoop=function(P){V=P},this.dispose=function(){}}},ly=new ct,np=new st;np.set(-1,0,0,0,1,0,0,0,1);function cy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(np),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function l(y,T){let E=s[y.id];E===void 0&&(m(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",M));let R=T.program;i.updateUBOMapping(y,R);let x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function u(y){let T=h();y.__bindingPointIndex=T;let E=n.createBuffer(),R=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let T=s[y.id],E=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,S=E.length;x<S;x++){let C=E[x];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)f(C[D],x,D,R);else f(C,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,T,E,R){if(_(y,T,E,R)===!0){let x=y.__offset,S=y.value;if(Array.isArray(S)){let C=0;for(let D=0;D<S.length;D++){let L=S[D],O=p(L);g(L,y.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function g(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function _(y,T,E,R){let x=y.value,S=T+"_"+E;if(R[S]===void 0)return typeof x=="number"||typeof x=="boolean"?R[S]=x:ArrayBuffer.isView(x)?R[S]=x.slice():R[S]=x.clone(),!0;{let C=R[S];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let T=y.uniforms,E=0,R=16;for(let S=0,C=T.length;S<C;S++){let D=Array.isArray(T[S])?T[S]:[T[S]];for(let L=0,O=D.length;L<O;L++){let I=D[L],F=Array.isArray(I.value)?I.value:[I.value];for(let X=0,W=F.length;X<W;X++){let ue=F[X],$=p(ue),re=E%R,ce=re%$.boundary,De=re+ce;E+=ce,De!==0&&R-De<$.storage&&(E+=R-De),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=$.storage}}}let x=E%R;return x>0&&(E+=R-x),y.__size=E,y.__cache={},this}function p(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",y),T}function M(y){let T=y.target;T.removeEventListener("dispose",M);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function hy(){return hi===null&&(hi=new ca(dy,16,16,as,Dt),hi.name="DFG_LUT",hi.minFilter=kt,hi.magFilter=kt,hi.wrapS=ii,hi.wrapT=ii,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var xc=class{constructor(e={}){let{canvas:t=vf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Ul,Nl,Dl]),p=new Set([bn,Jn,hr,fr,Pl,Il]),M=new Uint32Array(4),w=new Int32Array(4),y=new N,T=null,E=null,R=[],x=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,L=null,O=null,I=null,F=null;this._outputColorSpace=ln;let X=0,W=0,ue=null,$=-1,re=null,ce=new At,De=new At,z=null,V=new Re(0),Y=0,de=t.width,P=t.height,k=1,ee=null,K=null,te=new At(0,0,de,P),xe=new At(0,0,de,P),it=!1,se=new sr,q=!1,Z=!1,ae=new ct,pe=new N,we=new At,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Oe(){return ue===null?k:1}let U=i;function $e(b,B){return t.getContext(b,B)}let rt,A,v,G,Q,ie,_e,ye,oe,he,Me,Qe,Te,be,Je,et,at,H,Se,le,Ee,Le,me;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),U===null){let B="webgl2";if(U=$e(B,b),U===null)throw $e(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(b){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),nt("WebGLRenderer: "+b.message),b}function je(){rt=new _v(U),rt.init(),Ee=new ry(U,rt),A=new cv(U,rt,e,Ee),v=new iy(U,rt),A.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),O=U.createFramebuffer(),I=U.createFramebuffer(),F=U.createFramebuffer(),G=new bv(U),Q=new G_,ie=new sy(U,rt,v,Q,A,Ee,G),_e=new vv(C),ye=new E0(U),Le=new ov(U,ye),oe=new yv(U,ye,G,Le),he=new Ev(U,oe,ye,Le,G),H=new Sv(U,A,ie),Je=new uv(Q),Me=new V_(C,_e,rt,A,Le,Je),Qe=new cy(C,Q),Te=new q_,be=new Z_(rt),at=new av(C,_e,v,he,g,c),et=new ny(C,he,A),me=new uy(U,G,A,v),Se=new lv(U,rt,G),le=new Mv(U,rt,G),G.programs=Me.programs,C.capabilities=A,C.extensions=rt,C.properties=Q,C.renderLists=Te,C.shadowMap=et,C.state=v,C.info=G}_!==bn&&(S=new Av(_,t.width,t.height,o,s,r));let Xe=new Td(C,U);this.xr=Xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(de,P,!1))},this.getSize=function(b){return b.set(de,P)},this.setSize=function(b,B,ne=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=b,P=B,t.width=Math.floor(b*k),t.height=Math.floor(B*k),ne===!0&&(t.style.width=b+"px",t.style.height=B+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(de*k,P*k).floor()},this.setDrawingBufferSize=function(b,B,ne){de=b,P=B,k=ne,t.width=Math.floor(b*ne),t.height=Math.floor(B*ne),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(_===bn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ce)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,B,ne,J){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,B,ne,J),v.viewport(ce.copy(te).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(xe)},this.setScissor=function(b,B,ne,J){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,B,ne,J),v.scissor(De.copy(xe).multiplyScalar(k).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(b){v.setScissorTest(it=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,ne=!0){let J=0;if(b){let j=!1;if(ue!==null){let Pe=ue.texture.format;j=m.has(Pe)}if(j){let Pe=ue.texture.type,ze=p.has(Pe),Ce=at.getClearColor(),Ge=at.getClearAlpha(),Ye=Ce.r,lt=Ce.g,ft=Ce.b;ze?(M[0]=Ye,M[1]=lt,M[2]=ft,M[3]=Ge,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=Ye,w[1]=lt,w[2]=ft,w[3]=Ge,U.clearBufferiv(U.COLOR,0,w))}else J|=U.COLOR_BUFFER_BIT}B&&(J|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),at.dispose(),Te.dispose(),be.dispose(),Q.dispose(),_e.dispose(),he.dispose(),Le.dispose(),me.dispose(),Me.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",th),Xe.removeEventListener("sessionend",nh),ps.stop()};function Ct(b){b.preventDefault(),ed("WebGLRenderer: Context Lost."),D=!0}function vt(){ed("WebGLRenderer: Context Restored."),D=!1;let b=G.autoReset,B=et.enabled,ne=et.autoUpdate,J=et.needsUpdate,j=et.type;je(),G.autoReset=b,et.enabled=B,et.autoUpdate=ne,et.needsUpdate=J,et.type=j}function Vn(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ei(b){let B=b.target;B.removeEventListener("dispose",ei),am(B)}function am(b){om(b),Q.remove(b)}function om(b){let B=Q.get(b).programs;B!==void 0&&(B.forEach(function(ne){Me.releaseProgram(ne)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,ne,J,j,Pe){B===null&&(B=Ue);let ze=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ce=um(b,B,ne,J,j);v.setMaterial(J,ze);let Ge=ne.index,Ye=1;if(J.wireframe===!0){if(Ge=oe.getWireframeAttribute(ne),Ge===void 0)return;Ye=2}let lt=ne.drawRange,ft=ne.attributes.position,We=lt.start*Ye,_t=(lt.start+lt.count)*Ye;Pe!==null&&(We=Math.max(We,Pe.start*Ye),_t=Math.min(_t,(Pe.start+Pe.count)*Ye)),Ge!==null?(We=Math.max(We,0),_t=Math.min(_t,Ge.count)):ft!=null&&(We=Math.max(We,0),_t=Math.min(_t,ft.count));let Qt=_t-We;if(Qt<0||Qt===1/0)return;Le.setup(j,J,Ce,ne,Ge);let It,Tt=Se;if(Ge!==null&&(It=ye.get(Ge),Tt=le,Tt.setIndex(It)),j.isMesh)J.wireframe===!0?(v.setLineWidth(J.wireframeLinewidth*Oe()),Tt.setMode(U.LINES)):Tt.setMode(U.TRIANGLES);else if(j.isLine){let dn=J.linewidth;dn===void 0&&(dn=1),v.setLineWidth(dn*Oe()),j.isLineSegments?Tt.setMode(U.LINES):j.isLineLoop?Tt.setMode(U.LINE_LOOP):Tt.setMode(U.LINE_STRIP)}else j.isPoints?Tt.setMode(U.POINTS):j.isSprite&&Tt.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let dn=j._multiDrawStarts,Fe=j._multiDrawCounts,gn=j._multiDrawCount,mt=Ge?ye.get(Ge).bytesPerElement:1,Ln=Q.get(J).currentProgram.getUniforms();for(let ti=0;ti<gn;ti++)Ln.setValue(U,"_gl_DrawID",ti),Tt.render(dn[ti]/mt,Fe[ti])}else if(j.isInstancedMesh)Tt.renderInstances(We,Qt,j.count);else if(ne.isInstancedBufferGeometry){let dn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Fe=Math.min(ne.instanceCount,dn);Tt.renderInstances(We,Qt,Fe)}else Tt.render(We,Qt)};function eh(b,B,ne,J){L!==null&&b.isNodeMaterial&&L.setObject(J,b),q===!0&&Je.setState(b,ne,!1),b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,vo(b,B,J),b.side=ns,b.needsUpdate=!0,vo(b,B,J),b.side=on):vo(b,B,J)}this.compile=function(b,B,ne=null){ne===null&&(ne=b),L!==null&&L.renderStart(b,B,ne),E=be.get(ne),E.init(B),x.push(E),ne.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),b!==ne&&b.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),Z=this.localClippingEnabled,q=Je.init(this.clippingPlanes,Z),q===!0&&Je.setGlobalState(this.clippingPlanes,B),L!==null&&et.render(E.state.shadowsArray,ne,B);let J=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){let Ce=Pe[ze];eh(Ce,ne,B,j),J.add(Ce)}else eh(Pe,ne,B,j),J.add(Pe)}),E=x.pop(),L!==null&&L.renderEnd(),J},this.compileAsync=function(b,B,ne=null){let J=this.compile(b,B,ne);return new Promise(j=>{function Pe(){if(J.forEach(function(ze){let Ge=Q.get(ze).currentProgram;(Ge===void 0||Ge.isReady())&&J.delete(ze)}),J.size===0){j(b);return}setTimeout(Pe,10)}rt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let eu=null;function lm(b){eu&&eu(b)}function th(){ps.stop()}function nh(){ps.start()}let ps=new jf;ps.setAnimationLoop(lm),typeof self!="undefined"&&ps.setContext(self),this.setAnimationLoop=function(b){eu=b,Xe.setAnimationLoop(b),b===null?ps.stop():ps.start()},Xe.addEventListener("sessionstart",th),Xe.addEventListener("sessionend",nh),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(b,B);let ne=Xe.enabled===!0&&Xe.isPresenting===!0,J=S!==null&&(ue===null||ne)&&S.begin(C,ue);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(B),B=Xe.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,B,ue),E=be.get(b,x.length),E.init(B),E.state.textureUnits=ie.getTextureUnits(),x.push(E),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),se.setFromProjectionMatrix(ae,Xn,B.reversedDepth),Z=this.localClippingEnabled,q=Je.init(this.clippingPlanes,Z),T=Te.get(b,R.length),T.init(),R.push(T),Xe.enabled===!0&&Xe.isPresenting===!0){let ze=C.xr.getDepthSensingMesh();ze!==null&&tu(ze,B,-1/0,C.sortObjects)}tu(b,B,0,C.sortObjects),T.finish(),L!==null&&L.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(ee,K),Ve=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ve&&at.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),q===!0&&Je.beginShadows();let j=E.state.shadowsArray;if(et.render(j,b,B),q===!0&&Je.endShadows(),(J&&S.hasRenderPass())===!1){let ze=T.opaque,Ce=T.transmissive;if(E.setupLights(),B.isArrayCamera){let Ge=B.cameras;if(Ce.length>0)for(let Ye=0,lt=Ge.length;Ye<lt;Ye++){let ft=Ge[Ye];sh(ze,Ce,b,ft)}Ve&&at.render(b);for(let Ye=0,lt=Ge.length;Ye<lt;Ye++){let ft=Ge[Ye];ih(T,b,ft,ft.viewport)}}else Ce.length>0&&sh(ze,Ce,b,B),Ve&&at.render(b),ih(T,b,B)}ue!==null&&W===0&&(ie.updateMultisampleRenderTarget(ue),ie.updateRenderTargetMipmap(ue)),J&&S.end(C),b.isScene===!0&&b.onAfterRender(C,b,B),Le.resetDefaultState(),$=-1,re=null,x.pop(),x.length>0?(E=x[x.length-1],ie.setTextureUnits(E.state.textureUnits),q===!0&&Je.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,L!==null&&L.renderEnd()};function tu(b,B,ne,J){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(se)){J&&we.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);let ze=he.update(b),Ce=b.material;Ce.visible&&T.push(b,ze,Ce,ne,we.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(se))){let ze=he.update(b),Ce=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),we.copy(b.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),we.copy(ze.boundingSphere.center)),we.applyMatrix4(b.matrixWorld).applyMatrix4(ae)),Array.isArray(Ce)){let Ge=ze.groups;for(let Ye=0,lt=Ge.length;Ye<lt;Ye++){let ft=Ge[Ye],We=Ce[ft.materialIndex];We&&We.visible&&T.push(b,ze,We,ne,we.z,ft,B)}}else Ce.visible&&T.push(b,ze,Ce,ne,we.z,null,B)}}let Pe=b.children;for(let ze=0,Ce=Pe.length;ze<Ce;ze++)tu(Pe[ze],B,ne,J)}function ih(b,B,ne,J){let{opaque:j,transmissive:Pe,transparent:ze}=b;E.setupLightsView(ne),q===!0&&Je.setGlobalState(C.clippingPlanes,ne),J&&v.viewport(ce.copy(J)),j.length>0&&xo(j,B,ne),Pe.length>0&&xo(Pe,B,ne),ze.length>0&&xo(ze,B,ne),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function sh(b,B,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[J.id]===void 0){let We=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[J.id]=new wt(1,1,{generateMipmaps:!0,type:We?Dt:bn,minFilter:di,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Pe=E.state.transmissionRenderTarget[J.id],ze=J.viewport||ce;Pe.setSize(ze.z*C.transmissionResolutionScale,ze.w*C.transmissionResolutionScale);let Ce=C.getRenderTarget(),Ge=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(V),Y=C.getClearAlpha(),Y<1&&C.setClearColor(16777215,.5),C.clear(),Ve&&at.render(ne);let lt=C.toneMapping;C.toneMapping=Qn;let ft=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),E.setupLightsView(J),q===!0&&Je.setGlobalState(C.clippingPlanes,J),xo(b,ne,J),ie.updateMultisampleRenderTarget(Pe),ie.updateRenderTargetMipmap(Pe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let _t=0,Qt=B.length;_t<Qt;_t++){let It=B[_t],{object:Tt,geometry:dn,material:Fe,group:gn}=It;if(Fe.side===on&&Tt.layers.test(J.layers)){let mt=Fe.side;Fe.side=Xt,Fe.needsUpdate=!0,rh(Tt,ne,J,dn,Fe,gn),Fe.side=mt,Fe.needsUpdate=!0,We=!0}}We===!0&&(ie.updateMultisampleRenderTarget(Pe),ie.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Ce,Ge,Ye),C.setClearColor(V,Y),ft!==void 0&&(J.viewport=ft),C.toneMapping=lt}function xo(b,B,ne){let J=B.isScene===!0?B.overrideMaterial:null;for(let j=0,Pe=b.length;j<Pe;j++){let ze=b[j],{object:Ce,geometry:Ge,group:Ye}=ze,lt=ze.material;lt.allowOverride===!0&&J!==null&&(lt=J),Ce.layers.test(ne.layers)&&rh(Ce,B,ne,Ge,lt,Ye)}}function rh(b,B,ne,J,j,Pe){L!==null&&j.isNodeMaterial&&L.setObject(b,j),b.onBeforeRender(C,B,ne,J,j,Pe),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(C,B,ne,J,b,Pe),j.transparent===!0&&j.side===on&&j.forceSinglePass===!1?(j.side=Xt,j.needsUpdate=!0,C.renderBufferDirect(ne,B,J,j,b,Pe),j.side=ns,j.needsUpdate=!0,C.renderBufferDirect(ne,B,J,j,b,Pe),j.side=on):C.renderBufferDirect(ne,B,J,j,b,Pe),b.onAfterRender(C,B,ne,J,j,Pe)}function vo(b,B,ne){B.isScene!==!0&&(B=Ue);let J=Q.get(b),j=E.state.lights,Pe=E.state.shadowsArray,ze=j.state.version,Ce=Me.getParameters(b,j.state,Pe,B,ne,E.state.lightProbeGridArray),Ge=Me.getProgramCacheKey(Ce),Ye=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,J.fog=B.fog;let lt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=_e.get(b.envMap||J.environment,lt),J.envMapRotation=J.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",ei),Ye=new Map,J.programs=Ye);let ft=Ye.get(Ge);if(ft!==void 0){if(J.currentProgram===ft&&J.lightsStateVersion===ze)return oh(b,Ce),ft}else Ce.uniforms=Me.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,ne,Ce),b.onBeforeCompile(Ce,C),ft=Me.acquireProgram(Ce,Ge),Ye.set(Ge,ft),J.uniforms=Ce.uniforms;let We=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Je.uniform),oh(b,Ce),J.needsLights=hm(b),J.lightsStateVersion=ze,J.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.sunLights.value=j.state.sun,We.sunLightShadows.value=j.state.sunShadow,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.sunShadowMatrix.value=j.state.sunShadowMatrix,We.sunShadowCascade.value=j.state.sunShadowCascade,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=E.state.lightProbeGridArray.length>0,J.currentProgram=ft,J.uniformsList=null,ft}function ah(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=vr.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function oh(b,B){let ne=Q.get(b);ne.outputColorSpace=B.outputColorSpace,ne.batching=B.batching,ne.batchingColor=B.batchingColor,ne.instancing=B.instancing,ne.instancingColor=B.instancingColor,ne.instancingMorph=B.instancingMorph,ne.skinning=B.skinning,ne.morphTargets=B.morphTargets,ne.morphNormals=B.morphNormals,ne.morphColors=B.morphColors,ne.morphTargetsCount=B.morphTargetsCount,ne.numClippingPlanes=B.numClippingPlanes,ne.numIntersection=B.numClipIntersection,ne.vertexAlphas=B.vertexAlphas,ne.vertexTangents=B.vertexTangents,ne.toneMapping=B.toneMapping}function cm(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let ne=0,J=b.length;ne<J;ne++){let j=b[ne];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function um(b,B,ne,J,j){B.isScene!==!0&&(B=Ue),ie.resetTextureUnits();let Pe=B.fog,ze=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?B.environment:null,Ce=ue===null?C.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ht.workingColorSpace,Ge=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ye=_e.get(J.envMap||ze,Ge),lt=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ft=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),We=!!ne.morphAttributes.position,_t=!!ne.morphAttributes.normal,Qt=!!ne.morphAttributes.color,It=Qn;J.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(It=C.toneMapping);let Tt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,dn=Tt!==void 0?Tt.length:0,Fe=Q.get(J),gn=E.state.lights;if(q===!0&&(Z===!0||b!==re)){let Rt=b===re&&J.id===$;Je.setState(J,b,Rt)}let mt=!1;J.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==gn.state.version||Fe.outputColorSpace!==Ce||j.isBatchedMesh&&Fe.batching===!1||!j.isBatchedMesh&&Fe.batching===!0||j.isBatchedMesh&&Fe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Fe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Fe.instancingMorph===!1&&j.morphTexture!==null||Fe.envMap!==Ye||J.fog===!0&&Fe.fog!==Pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Je.numPlanes||Fe.numIntersection!==Je.numIntersection)||Fe.vertexAlphas!==lt||Fe.vertexTangents!==ft||Fe.morphTargets!==We||Fe.morphNormals!==_t||Fe.morphColors!==Qt||Fe.toneMapping!==It||Fe.morphTargetsCount!==dn||!!Fe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Fe.__version=J.version);let Ln=Fe.currentProgram;mt===!0&&(Ln=vo(J,B,j),L&&J.isNodeMaterial&&L.onUpdateProgram(J,Ln,Fe));let ti=!1,Bi=!1,Us=!1,St=Ln.getUniforms(),zt=Fe.uniforms;if(v.useProgram(Ln.program)&&(ti=!0,Bi=!0,Us=!0),J.id!==$&&($=J.id,Bi=!0),Fe.needsLights){let Rt=cm(E.state.lightProbeGridArray,j);Fe.lightProbeGrid!==Rt&&(Fe.lightProbeGrid=Rt,Bi=!0)}if(ti||re!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),St.setValue(U,"projectionMatrix",b.projectionMatrix),St.setValue(U,"viewMatrix",b.matrixWorldInverse);let Hi=St.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,pe.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),re!==b&&(re=b,Bi=!0,Us=!0)}if(Fe.needsLights&&(gn.state.sunShadowMap.length>0&&St.setValue(U,"sunShadowMap",gn.state.sunShadowMap,ie),gn.state.directionalShadowMap.length>0&&St.setValue(U,"directionalShadowMap",gn.state.directionalShadowMap,ie),gn.state.spotShadowMap.length>0&&St.setValue(U,"spotShadowMap",gn.state.spotShadowMap,ie),gn.state.pointShadowMap.length>0&&St.setValue(U,"pointShadowMap",gn.state.pointShadowMap,ie)),j.isSkinnedMesh){St.setOptional(U,j,"bindMatrix"),St.setOptional(U,j,"bindMatrixInverse");let Rt=j.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),St.setValue(U,"boneTexture",Rt.boneTexture,ie))}j.isBatchedMesh&&(St.setOptional(U,j,"batchingTexture"),St.setValue(U,"batchingTexture",j._matricesTexture,ie),St.setOptional(U,j,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",j._indirectTexture,ie),St.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",j._colorsTexture,ie));let zi=ne.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&H.update(j,ne,Ln),(Bi||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,St.setValue(U,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&B.environment!==null&&(zt.envMapIntensity.value=B.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=hy()),Bi){if(St.setValue(U,"toneMappingExposure",C.toneMappingExposure),Fe.needsLights&&dm(zt,Us),Pe&&J.fog===!0&&Qe.refreshFogUniforms(zt,Pe),Qe.refreshMaterialUniforms(zt,J,k,P,E.state.transmissionRenderTarget[b.id]),Fe.needsLights&&Fe.lightProbeGrid){let Rt=Fe.lightProbeGrid;zt.probesSH.value=Rt.texture,zt.probesMin.value.copy(Rt.boundingBox.min),zt.probesMax.value.copy(Rt.boundingBox.max),zt.probesResolution.value.copy(Rt.resolution)}vr.upload(U,ah(Fe),zt,ie)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(vr.upload(U,ah(Fe),zt,ie),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(U,"center",j.center),St.setValue(U,"modelViewMatrix",j.modelViewMatrix),St.setValue(U,"normalMatrix",j.normalMatrix),St.setValue(U,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Rt=J.uniformsGroups;for(let Hi=0,Os=Rt.length;Hi<Os;Hi++){let ch=Rt[Hi];me.update(ch,Ln),me.bind(ch,Ln)}}return Ln}function dm(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function hm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(b,B,ne){let J=Q.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(b.texture).__webglTexture=B,Q.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ne,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let ne=Q.get(b);ne.__webglFramebuffer=B,ne.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,ne=0){ue=b,X=B,W=ne;let J=null,j=!1,Pe=!1;if(b){let Ce=Q.get(b);if(Ce.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,Ce.__webglFramebuffer),ce.copy(b.viewport),De.copy(b.scissor),z=b.scissorTest,v.viewport(ce),v.scissor(De),v.setScissorTest(z),$=-1;return}else if(Ce.__webglFramebuffer===void 0)ie.setupRenderTarget(b);else if(Ce.__hasExternalTextures)ie.rebindTextures(b,Q.get(b.texture).__webglTexture,Q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let lt=b.depthTexture;if(Ce.__boundDepthTexture!==lt){if(lt!==null&&Q.has(lt)&&(b.width!==lt.image.width||b.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(b)}}let Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);let Ye=Q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?J=Ye[B][ne]:J=Ye[B],j=!0):b.samples>0&&ie.useMultisampledRTT(b)===!1?J=Q.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?J=Ye[ne]:J=Ye,ce.copy(b.viewport),De.copy(b.scissor),z=b.scissorTest}else ce.copy(te).multiplyScalar(k).floor(),De.copy(xe).multiplyScalar(k).floor(),z=it;if(ne!==0&&(J=O),v.bindFramebuffer(U.FRAMEBUFFER,J)&&v.drawBuffers(b,J),v.viewport(ce),v.scissor(De),v.setScissorTest(z),j){let Ce=Q.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,ne)}else if(Pe){let Ce=B;for(let Ge=0;Ge<b.textures.length;Ge++){let Ye=Q.get(b.textures[Ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ge,Ye.__webglTexture,ne,Ce)}}else if(b!==null&&ne!==0){let Ce=Q.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ce.__webglTexture,ne)}$=-1};function lh(b){let B=Q.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=A.textureFormatReadable(b.format),B.__typeReadable=A.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,ne,J,j,Pe,ze,Ce=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){v.bindFramebuffer(U.FRAMEBUFFER,Ge);try{let Ye=b.textures[Ce],lt=Ye.format,ft=Ye.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce);let We=lh(Ye);if(We.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-J&&ne>=0&&ne<=b.height-j&&U.readPixels(B,ne,J,j,Ee.convert(lt),Ee.convert(ft),Pe)}finally{let Ye=ue!==null?Q.get(ue).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,B,ne,J,j,Pe,ze,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge)if(B>=0&&B<=b.width-J&&ne>=0&&ne<=b.height-j){v.bindFramebuffer(U.FRAMEBUFFER,Ge);let Ye=b.textures[Ce],lt=Ye.format,ft=Ye.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce);let We=lh(Ye);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,Pe.byteLength,U.STREAM_READ),U.readPixels(B,ne,J,j,Ee.convert(lt),Ee.convert(ft),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Qt=ue!==null?Q.get(ue).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Qt);let It=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await yf(U,It,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Pe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(_t),U.deleteSync(It),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,ne=0){let J=Math.pow(2,-ne),j=Math.floor(b.image.width*J),Pe=Math.floor(b.image.height*J),ze=B!==null?B.x:0,Ce=B!==null?B.y:0;ie.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,ne,0,0,ze,Ce,j,Pe),v.unbindTexture()},this.copyTextureToTexture=function(b,B,ne=null,J=null,j=0,Pe=0){let ze,Ce,Ge,Ye,lt,ft,We,_t,Qt,It=b.isCompressedTexture?b.mipmaps[Pe]:b.image;if(ne!==null)ze=ne.max.x-ne.min.x,Ce=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,Ye=ne.min.x,lt=ne.min.y,ft=ne.isBox3?ne.min.z:0;else{let zt=Math.pow(2,-j);ze=Math.floor(It.width*zt),Ce=Math.floor(It.height*zt),b.isDataArrayTexture?Ge=It.depth:b.isData3DTexture?Ge=Math.floor(It.depth*zt):Ge=1,Ye=0,lt=0,ft=0}J!==null?(We=J.x,_t=J.y,Qt=J.z):(We=0,_t=0,Qt=0);let Tt=Ee.convert(B.format),dn=Ee.convert(B.type),Fe;B.isData3DTexture?(ie.setTexture3D(B,0),Fe=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ie.setTexture2DArray(B,0),Fe=U.TEXTURE_2D_ARRAY):(ie.setTexture2D(B,0),Fe=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let gn=v.getParameter(U.UNPACK_ROW_LENGTH),mt=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=v.getParameter(U.UNPACK_SKIP_PIXELS),ti=v.getParameter(U.UNPACK_SKIP_ROWS),Bi=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),v.pixelStorei(U.UNPACK_SKIP_ROWS,lt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ft);let Us=b.isDataArrayTexture||b.isData3DTexture,St=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let zt=Q.get(b),zi=Q.get(B),Rt=Q.get(zt.__renderTarget),Hi=Q.get(zi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Rt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Os=0;Os<Ge;Os++)Us&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(b).__webglTexture,j,ft+Os),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(B).__webglTexture,Pe,Qt+Os)),U.blitFramebuffer(Ye,lt,ze,Ce,We,_t,ze,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Q.has(b)){let zt=Q.get(b),zi=Q.get(B);v.bindFramebuffer(U.READ_FRAMEBUFFER,I),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let Rt=0;Rt<Ge;Rt++)Us?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.__webglTexture,j,ft+Rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zt.__webglTexture,j),St?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zi.__webglTexture,Pe,Qt+Rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zi.__webglTexture,Pe),j!==0?U.blitFramebuffer(Ye,lt,ze,Ce,We,_t,ze,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):St?U.copyTexSubImage3D(Fe,Pe,We,_t,Qt+Rt,Ye,lt,ze,Ce):U.copyTexSubImage2D(Fe,Pe,We,_t,Ye,lt,ze,Ce);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else St?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Fe,Pe,We,_t,Qt,ze,Ce,Ge,Tt,dn,It.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Fe,Pe,We,_t,Qt,ze,Ce,Ge,Tt,It.data):U.texSubImage3D(Fe,Pe,We,_t,Qt,ze,Ce,Ge,Tt,dn,It):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Pe,We,_t,ze,Ce,Tt,dn,It.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Pe,We,_t,It.width,It.height,Tt,It.data):U.texSubImage2D(U.TEXTURE_2D,Pe,We,_t,ze,Ce,Tt,dn,It);v.pixelStorei(U.UNPACK_ROW_LENGTH,gn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),v.pixelStorei(U.UNPACK_SKIP_ROWS,ti),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Bi),Pe===0&&B.generateMipmaps&&U.generateMipmap(Fe),v.unbindTexture()},this.initRenderTarget=function(b){Q.get(b).__webglFramebuffer===void 0&&ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){X=0,W=0,ue=null,v.reset(),Le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Ya=location.search,wd=["auto","media","alta","ultra"],sp={auto:"Auto",media:"Rendimiento",alta:"Alta calidad",ultra:"Ultra (4K/5K)"},br=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,bc="gfx_quality",Cd={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}}},ke={level:"auto",texK:2,prMax:2,prMin:1,pr:1,aniso:4,adaptive:!0,shot:/[?&]shot=1/.test(Ya),touch:br,fps:0,renderer:null},fy=()=>window.devicePixelRatio||1;function py(n){let e=fy(),t=Math.max(screen.width||innerWidth,screen.height||innerHeight,innerWidth,innerHeight);switch(n){case"media":return{texK:1,prMax:Math.min(e,1),prMin:.75};case"alta":return{texK:2,prMax:Math.min(e,1.5),prMin:1};case"ultra":{let i=Math.max(1,Math.max(innerWidth,innerHeight)),s=Math.max(e,2.5,br?0:5120/i);return{texK:4,prMax:Math.min(3,s),prMin:br?.75:1}}default:return{texK:t*e>=3e3&&!br?3:2,prMax:Math.min(e,br?2:3),prMin:br?.75:1}}}function rp(n){n&&(bc=n);let e=(Ya.match(/[?&]q=(auto|media|alta|ultra)/)||[])[1]||Cd.get(bc)||(br?"media":"auto");/[?&]low=1/.test(Ya)&&(e="media"),wd.includes(e)||(e="auto"),ke.level=e,Object.assign(ke,py(e)),ke.pr=ke.prMax,ke.adaptive=!ke.shot&&!/[?&]fixq=1/.test(Ya);let t=Ya.match(/[?&]pr=([\d.]+)/);return t&&(ke.pr=ke.prMax=+t[1]),ke}function Rd(n){wd.includes(n)&&Cd.set(bc,n)}var Pd=()=>{let n=Cd.get(bc);return wd.includes(n)?n:"auto"};function ap(n={}){let e=new xc(Object.assign({antialias:ke.level!=="media",powerPreference:"high-performance",preserveDrawingBuffer:ke.shot},n));return ke.renderer=e,ke.aniso=e.capabilities.getMaxAnisotropy()||4,jt.DEFAULT_ANISOTROPY=ke.aniso,e.setPixelRatio(ke.pr),window.__quality=ke,e}function Id(n,e,{dynamic:t=!1,k:i=null}={}){let s=t?3072:4096,r=i!=null?i:ke.texK;r=Math.max(1,Math.min(r,s/Math.max(n,e)));let a=document.createElement("canvas");a.width=Math.round(n*r),a.height=Math.round(e*r);let o=a.getContext("2d");return o.scale(a.width/n,a.height/e),o.imageSmoothingQuality="high",a.logicalW=n,a.logicalH=e,a.scaleK=r,{c:a,g:o}}function my(n){return n.colorSpace=ln,n.anisotropy=ke.aniso,n.generateMipmaps=!0,n.minFilter=di,n.magFilter=kt,n}function op(n,e,t,i){let{c:s,g:r}=Id(n,e,i);t&&t(r,n,e);let a=my(new Ms(s));return a.userData.canvas=s,a.userData.c=s,a.userData.g=r,a}var yc=0,Ad=0,Mr=0,Mc=0,ip=0;function lp(n,e){if(!ke.renderer)return;let t=performance.now();yc||(yc=t),Ad++;let i=(t-yc)/1e3;if(i<1.5)return;let s=Ad/i;if(yc=t,Ad=0,ke.fps=Math.round(s),!ke.adaptive||document.hidden)return;let r=performance.now();if(s<40){if(Mc=0,Mr>=2&&ke.pr<=ke.prMin+.01&&s<32&&!ke.lowFx){ke.lowFx=!0,Mr=0,e&&e(ke.pr);return}++Mr>=2&&ke.pr>ke.prMin+.01&&(ke.pr=Math.max(ke.prMin,+(ke.pr*.8).toFixed(2)),ke.renderer.setPixelRatio(ke.pr),e&&e(ke.pr),Mr=0,ip=r)}else s>57?(Mr=0,++Mc>=4&&ke.pr<ke.prMax-.01&&r-ip>2e4&&(ke.pr=Math.min(ke.prMax,+(ke.pr*1.15).toFixed(2)),ke.renderer.setPixelRatio(ke.pr),e&&e(ke.pr),Mc=0)):(Mr=0,Mc=0)}function cp(){let n=ke.renderer;if(!n)return"";let e=new fe;return n.getDrawingBufferSize(e),`${e.x}\xD7${e.y} \xB7 ${ke.fps||"\u2013"} FPS`}var Qa=class n extends ve{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||n.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Tn,h=new N,d=new N,f=new N,g=new ct,_=new N(0,0,-1),m=new At,p=new N,M=new N,w=new At,y=new ct,T=new wt(r,a,{samples:l,type:Dt}),E=new yt({name:c.name!==void 0?c.name:"unspecified",uniforms:xn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});E.uniforms.tDiffuse.value=T.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(R,x,S){let C=this.getReflectionCamera(S);if(d.setFromMatrixPosition(i.matrixWorld),f.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),M.subVectors(d,_),M.reflect(h).negate(),M.add(d),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(h),C.lookAt(M),C.far=S.far,C.updateMatrixWorld(),C.projectionMatrix.copy(S.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(C.projectionMatrix),y.multiply(C.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let L=C.projectionMatrix;C.isOrthographicCamera?(w.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],w.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],w.z=-S.far,w.w=1):(w.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],w.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],w.z=-1,w.w=(1+L.elements[10])/L.elements[14]),m.multiplyScalar(2/m.dot(w)),L.elements[2]=m.x,L.elements[6]=m.y,C.isOrthographicCamera?(L.elements[10]=m.z-o,L.elements[14]=m.w-1):(L.elements[10]=m.z+1-o,L.elements[14]=m.w),i.visible=!1;let O=R.getRenderTarget(),I=R.xr.enabled,F=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(T),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(x,C),R.xr.enabled=I,R.shadowMap.autoUpdate=F,R.setRenderTarget(O);let X=S.viewport;X!==void 0&&R.state.viewport(X),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),i.material.dispose()},this.getReflectionCamera=function(R){let x=this._reflectionCameras.get(R);return x===void 0&&(x=R.clone(),this._reflectionCameras.set(R,x)),x}}};Qa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var up=Math.PI*2,Nt={};function gy(){if(Nt.ok)return Nt;Nt.leg=new an(.085,.62,8,20).translate(0,-.39,0),Nt.arm=new an(.058,.46,8,18).translate(0,-.29,0),Nt.hand=new pn(.062,20,14);let n=[[0,-.36],[.19,-.35],[.205,-.25],[.2,-.05],[.225,.14],[.245,.26],[.22,.32],[.12,.355],[0,.36]].map(([e,t])=>new fe(e,t));return Nt.torso=new Ss(new wi(n).getPoints(40),40),Nt.torso.scale(1,1,.78),Nt.head=new pn(.17,40,30),Nt.head.scale(.94,1.08,.98),Nt.hairShort=new pn(.182,40,24,0,up,0,Math.PI*.56),Nt.hairLong=new pn(.186,40,24,0,up,0,Math.PI*.78),Nt.hairBack=new an(.13,.16,8,20).scale(1.15,1,.55),Nt.neck=new Wt(.058,.066,.12,24),Nt.shoe=new an(.075,.14,8,16).rotateX(Math.PI/2).scale(1,.62,1),Nt.eye=new pn(.021,16,12),Nt.eyeW=new pn(.034,18,14),Nt.eyeW.scale(1,1.15,.5),Nt.brow=new an(.009,.045,4,8).rotateZ(Math.PI/2),Nt.mouth=new an(.012,.05,4,10).rotateZ(Math.PI/2),Nt.nose=new pn(.026,16,12),Nt.tie=new an(.03,.3,4,10).scale(1,1,.35),Nt.lapel=new an(.06,.32,4,12).scale(1,1,.25),Nt.ok=!0,Nt}var Ld=new Map;function Bn(n,e=.6,t={}){let i=n+":"+e+JSON.stringify(t);if(Ld.has(i)&&!t.unique)return Ld.get(i).clone();let s=new Zi(Object.assign({color:n,roughness:e,metalness:0},t));return Ld.set(i,s),s.clone()}function Ja({shirt:n=14540253,pants:e=3355460,skin:t=1578e4,hair:i=2824720,tie:s=null,jacket:r=null,glasses:a=!1,long:o=!1,scale:c=1}={}){let l=gy(),u=new An,h=r||n,d=Bn(t,.55,{sheen:.4,sheenColor:new Re(16767176),sheenRoughness:.6}),f=new ve(l.leg,Bn(e,.8));f.position.set(-.105,.82,0);let g=new ve(l.leg,f.material);g.position.x=.105;let _=new ve(l.torso,Bn(h,r?.55:.8,{sheen:.3,sheenRoughness:.8}));_.position.y=1.15;let m=new ve(l.arm,_.material);m.position.set(-.29,1.43,0),m.rotation.z=.12;let p=new ve(l.arm,_.material);p.position.set(.29,1.43,0),p.rotation.z=-.12,[m,p].forEach(D=>{let L=new ve(l.hand,d);L.position.y=-.62,D.add(L)});let M=new ve(l.head,d);M.position.y=1.7;let w=new ve(o?l.hairLong:l.hairShort,Bn(i,.45,{sheen:.6,sheenColor:new Re(16777215),sheenRoughness:.35}));if(w.position.set(0,.035,-.012),w.rotation.x=-.12,M.add(w),o){let D=new ve(l.hairBack,w.material);D.position.set(0,-.14,-.1),M.add(D)}let y=new ve(l.neck,d);y.position.y=1.53,u.add(f,g,_,m,p,M,y);let T=Bn(16777215,.25),E=Bn(1380622,.2,{clearcoat:1,clearcoatRoughness:.1}),R=Bn(i,.6);[-.058,.058].forEach(D=>{let L=new ve(l.eyeW,T);L.position.set(D,.025,.142),M.add(L);let O=new ve(l.eye,E);O.position.set(D,.022,.158),M.add(O);let I=new ve(l.brow,R);I.position.set(D,.075,.152),I.rotation.z=D<0?.12:-.12,M.add(I)});let x=new ve(l.nose,d);x.position.set(0,-.015,.165),x.scale.set(.8,1,.7),M.add(x);let S=new ve(l.mouth,Bn(9057332,.5));if(S.position.set(0,-.075,.158),M.add(S),r){let D=new ve(new an(.075,.34,6,14).scale(1,1,.3),Bn(n,.7));D.position.set(0,1.21,.168),u.add(D),[-1,1].forEach(L=>{let O=new ve(l.lapel,_.material);O.position.set(L*.09,1.27,.17),O.rotation.z=L*.35,u.add(O)})}if(s){let D=new ve(l.tie,Bn(s,.35,{sheen:.8,sheenColor:new Re(16777215)}));D.position.set(0,1.2,r?.19:.178),u.add(D),u.__tie=D}if(a){let D=Bn(1118481,.25,{metalness:.6});[-.058,.058].forEach(O=>{let I=new ve(new Yn(.044,.008,10,28),D);I.position.set(O,.025,.163),M.add(I)});let L=new ve(new an(.006,.03,4,8).rotateZ(Math.PI/2),D);L.position.set(0,.03,.168),M.add(L)}let C=Bn(1184274,.3,{clearcoat:.8,clearcoatRoughness:.25});return[f,g].forEach(D=>{let L=new ve(l.shoe,C);L.position.set(0,-.79,.05),D.add(L)}),u.scale.setScalar(c),u.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),u.userData={legL:f,legR:g,armL:m,armR:p,head:M,mouth:S,tie:u.__tie||null,t:Math.random()*10,mood:null},delete u.__tie,u}var ja=Math.PI*2,Ne={r0:1.95,r1:3.05,h:1.02,a0:-Math.PI/2-1.75,a1:-Math.PI/2+1.75,doorR:2.5,door:.66},dp=[-Math.PI/2-1.02,-Math.PI/2-.34,-Math.PI/2+.34,-Math.PI/2+1.02],zn=(n,e,t=0)=>new N(Math.cos(e)*n,t,-Math.sin(e)*n);function Sr(n,e,t,i){return op(n,e,t,i)}function Ec(n,e,t,i,s,{sub:r="",bg:a=!0,t:o=0}={}){if(n.save(),n.translate(e,t),a){let l=n.createLinearGradient(0,0,i,s);l.addColorStop(0,"#7a0c2a"),l.addColorStop(.5,"#c21839"),l.addColorStop(1,"#4a0a5a"),n.fillStyle=l,n.fillRect(0,0,i,s);let u=i/9,h=u*.55;for(let f=-1;f<s/h+1;f++)for(let g=-1;g<10;g++){let _=g*u+f%2*u*.5+o*20%u,m=f*h;n.fillStyle=(f+g)%3?"rgba(255,170,90,.18)":"rgba(255,255,255,.12)",n.fillRect(_+3,m+3,u-6,h-6),n.strokeStyle="rgba(255,255,255,.15)",n.strokeRect(_+3,m+3,u-6,h-6)}let d=n.createRadialGradient(i/2,s/2,s*.1,i/2,s/2,i*.7);d.addColorStop(0,"rgba(255,255,255,.25)"),d.addColorStop(1,"rgba(0,0,0,.45)"),n.fillStyle=d,n.fillRect(0,0,i,s)}let c=(l,u,h,d,f)=>{n.font=`900 ${d}px "Arial Black", Impact, sans-serif`,n.textAlign="center",n.textBaseline="middle";for(let _=10;_>0;_--)n.fillStyle=`rgb(${70+_*6},${70+_*6},${90+_*6})`,n.fillText(l,u+_*.9,h+_*1.1,f);let g=n.createLinearGradient(0,h-d/2,0,h+d/2);g.addColorStop(0,"#ffffff"),g.addColorStop(.55,"#e9ecf5"),g.addColorStop(1,"#aab2c8"),n.fillStyle=g,n.fillText(l,u,h,f),n.lineWidth=Math.max(2,d/40),n.strokeStyle="#5a6078",n.strokeText(l,u,h,f)};c("ATRAPA",i*.4,s*.27,s*.27,i*.62),n.save(),n.translate(i*.79,s*.25),n.rotate(-.12),c("UN",0,0,s*.2,i*.2),n.restore(),c("MILL\xD3N",i*.5,s*.64,s*.42,i*.9),r&&(n.fillStyle="#1aa0d8",n.fillRect(i*.3,s*.84,i*.4,s*.13),n.font=`900 ${s*.1}px "Arial Black", sans-serif`,n.fillStyle="#fff",n.textAlign="center",n.fillText(r,i/2,s*.905,i*.38)),n.restore()}function Sc(n,e,t,i){let s=new Ci,r=[-n/2,t/2],a=[n/2,t/2],o=[e/2,-t/2],c=[-e/2,-t/2],l=[r,a,o,c],u=l.length;for(let h=0;h<u;h++){let d=l[(h+u-1)%u],f=l[h],g=l[(h+1)%u],_=[d[0]-f[0],d[1]-f[1]],m=[g[0]-f[0],g[1]-f[1]],p=Math.hypot(..._),M=Math.hypot(...m),w=[f[0]+_[0]/p*i,f[1]+_[1]/p*i],y=[f[0]+m[0]/M*i,f[1]+m[1]/M*i];h===0?s.moveTo(...w):s.lineTo(...w),s.quadraticCurveTo(f[0],f[1],...y)}return s.closePath(),s}function xy(n){n.computeBoundingBox();let e=n.boundingBox,t=n.attributes.position,i=n.attributes.uv;for(let s=0;s<t.count;s++)i.setXY(s,(t.getX(s)-e.min.x)/(e.max.x-e.min.x),(t.getY(s)-e.min.y)/(e.max.y-e.min.y));return i.needsUpdate=!0,n}function hp(n,e,t,i,s=64){let r=new Ci;for(let a=0;a<=s;a++){let o=t+(i-t)*a/s,c=Math.cos(o)*e,l=Math.sin(o)*e;a?r.lineTo(c,l):r.moveTo(c,l)}for(let a=s;a>=0;a--){let o=t+(i-t)*a/s;r.lineTo(Math.cos(o)*n,Math.sin(o)*n)}return r.closePath(),r}function Dd(){let n=Sr(256,512,(e,t,i)=>{e.fillStyle="#05030c",e.fillRect(0,0,t,i);for(let s=6;s<i;s+=24){let r=e.createLinearGradient(0,0,t,0);r.addColorStop(0,"rgba(255,255,255,.15)"),r.addColorStop(.5,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,.15)"),e.fillStyle=r,e.fillRect(0,s,t,5)}});return n.wrapS=n.wrapT=$s,n}function fp(){return Sr(256,128,(n,e,t)=>{n.fillStyle="#e88a3a",n.fillRect(0,0,e,t),n.fillStyle="#f6b26b";for(let i=0;i<8;i++)n.fillRect(i*32,0,14,t);n.fillStyle="rgba(120,50,10,.5)";for(let i=4;i<t;i+=6)n.fillRect(0,i,e,1);n.fillStyle="#f4f1e8",n.fillRect(e*.42,0,e*.16,t),n.fillStyle="#7a1030",n.font="bold 22px sans-serif",n.textAlign="center",n.save(),n.translate(e/2,t/2),n.rotate(Math.PI/2),n.fillText("25.000 \u20AC",0,7),n.restore()})}function pp(){return Sr(256,128,(n,e,t)=>{n.fillStyle="#efa45a",n.fillRect(0,0,e,t),n.fillStyle="#d97a2b",n.fillRect(10,10,e-20,t-20),n.fillStyle="#f7c58d",n.beginPath(),n.arc(e*.75,t/2,34,0,ja),n.fill(),n.fillStyle="#8a3c0a",n.font="900 48px sans-serif",n.textAlign="left",n.fillText("50",24,58),n.font="bold 18px sans-serif",n.fillText("EURO",24,90),n.fillStyle="#f4f1e8",n.fillRect(e*.42,0,e*.16,t)})}function mp(n,e,t,i=!1){let s=n.userData;s.t+=e*(t?9:2);let r=t?Math.sin(s.t)*.5:0;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r*.8,s.armR.rotation.x=r*.8,s.armL.rotation.z=.12,s.armR.rotation.z=-.12,t||(s.armL.rotation.x=Math.sin(s.t)*.03,s.armR.rotation.x=i?-.9+Math.sin(s.t*3)*.35:Math.sin(s.t+1)*.03,s.mood==="cheer"?(s.armL.rotation.z=2.6+Math.sin(s.t*6)*.2,s.armR.rotation.z=-2.6-Math.sin(s.t*6)*.2):s.mood==="sad"?s.head.rotation.x=.35:s.mood==="think"?(s.armR.rotation.x=-2.2,s.armR.rotation.z=.5):s.mood==="point"&&(s.armR.rotation.x=-1.4)),s.mood!=="sad"&&(s.head.rotation.x=0),s.head.rotation.y=i?Math.sin(s.t*1.3)*.25:0,s.mouth.scale.y=i?1+Math.abs(Math.sin(s.t*9))*3:1}function gp(n,{lowQuality:e=!1}={}){let t=new ys;t.background=new Re(328204),t.fog=new aa(328204,22,48);let i={scene:t,seats:[],doors:[],monitors:[],colliders:[]},s=q=>new qt(q);t.add(new Ma(10124543,2099232,.9));let r=new Ea(16777215,1.4);r.position.set(3,10,8),t.add(r),i.key=r,i.spots=[];for(let q=0;q<6;q++){let Z=new Sa(16777215,0,30,.5,.7,1.2);t.add(Z,Z.target),i.spots.push(Z)}let a=new Zi({color:1182238,metalness:.55,roughness:.22,clearcoat:1,clearcoatRoughness:.08,transparent:!e,opacity:e?1:.8}),o=new Ci;o.absarc(0,0,24,0,ja);let c=new li;{let q=hp(Ne.r0+.05,Ne.r1-.05,Ne.a0+.04,Ne.a1-.04);c.setFromPoints(q.getPoints(64).reverse())}o.holes.push(c);let l=new ji(o,64),u=new ve(l,a);if(u.rotation.x=-Math.PI/2,t.add(u),i.floor=u,!e){let q=ke.texK>=3?2048:1024,Z=new Qa(l,{textureWidth:q,textureHeight:q,color:9076888});Z.rotation.x=-Math.PI/2,Z.position.y=-.004,t.add(Z),i.reflector=Z}i.floorLines=new ve(new ui(4.35,4.5,96),new Et({color:12078335})),i.floorLines.rotation.x=-Math.PI/2,i.floorLines.position.y=.012,t.add(i.floorLines);let h=new ve(new ui(5.6,5.75,96),new Et({color:16777215}));h.rotation.x=-Math.PI/2,h.position.y=.012,t.add(h),i.ring2=h;let d=new ve(new Ai(Ne.r0-.02,48),s({color:14275816,metalness:.2,roughness:.15}));d.rotation.x=-Math.PI/2,d.position.y=.01,t.add(d);let f=4.2;i.pitY=-f;let g=s({color:1706032,emissive:9054975,emissiveIntensity:.7,side:Xt,roughness:.6}),_=new ve(new Wt(Ne.r1,Ne.r1,f,64,1,!0,Math.PI/2+Ne.a0,Ne.a1-Ne.a0),g);_.position.y=-f/2,t.add(_);let m=Dd();m.repeat.set(6,1);let p=new ve(new Wt(Ne.r0,Ne.r0,f,64,1,!0),s({color:2230848,emissive:16722538,emissiveMap:m,emissiveIntensity:.5}));p.position.y=-f/2,t.add(p);let M=new ve(new ui(Ne.r0,Ne.r1,64),new Et({color:9059583}));M.rotation.x=-Math.PI/2,M.position.y=-f+.01,t.add(M),i.pitFloor=M,i.pitGlow=new Ri(12607743,30,9,1.2),i.pitGlow.position.set(0,-2.2,2.3),t.add(i.pitGlow);let w=new Ri(16726666,18,7,1.2);w.position.set(0,-3.6,2.6),t.add(w);let y=hp(Ne.r0,Ne.r1,Ne.a0,Ne.a1);dp.forEach(q=>{let Z=[Math.cos(q)*Ne.doorR,Math.sin(q)*Ne.doorR],ae=Ne.door/2+.02,pe=Math.cos(q),we=Math.sin(q),Ue=[[-ae,-ae],[-ae,ae],[ae,ae],[ae,-ae]].map(([Ve,Oe])=>new fe(Z[0]+Ve*pe-Oe*we,Z[1]+Ve*we+Oe*pe));y.holes.push(new li(Ue.reverse()))});let T=new or(y,{depth:.07,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:48}),E=s({color:15921399,metalness:.15,roughness:.12}),R=new ve(T,E);R.rotation.x=-Math.PI/2,R.position.y=Ne.h-.07,t.add(R);let x=new Et({color:14268671});i.edgeMat=x;for(let q of[Ne.r0,Ne.r1]){let Z=new Yn(q,.025,6,96,Ne.a1-Ne.a0),ae=new ve(Z,x);ae.rotation.x=Math.PI/2,ae.rotation.z=-Ne.a1+0,ae.position.y=Ne.h-.09,t.add(ae),ae.rotation.set(-Math.PI/2,0,Ne.a0)}let S=new Zi({color:13615359,metalness:0,roughness:.05,transparent:!0,opacity:.18,side:on,depthWrite:!1});for(let q of[Ne.r0+.04,Ne.r1-.04]){let Z=new Wt(q,q,Ne.h-.1,64,1,!0,Math.PI/2+Ne.a0,Ne.a1-Ne.a0),ae=new ve(Z,S);ae.position.y=(Ne.h-.1)/2,t.add(ae)}let C=s({color:13159128,metalness:.9,roughness:.25});for(let q=0;q<=10;q++){let Z=Ne.a0+(Ne.a1-Ne.a0)*q/10;for(let ae of[Ne.r0+.05,Ne.r1-.05]){let pe=new ve(new Wt(.03,.03,Ne.h-.1,8),C);pe.position.copy(zn(ae,Z,(Ne.h-.1)/2)),t.add(pe)}}let D=new Gt(Ne.door,.04,Ne.door);D.translate(0,0,Ne.door/2);for(let q=0;q<4;q++){let Z=dp[q],ae=zn(Ne.doorR,Z,Ne.h-.03),pe=new An,we=zn(1,Z).negate();pe.position.copy(ae).addScaledVector(we,-Ne.door/2*-1).addScaledVector(we,-Ne.door/2*0),pe.position.copy(ae).addScaledVector(we,-Ne.door/2),pe.rotation.order="YXZ",pe.rotation.y=Math.atan2(we.x,we.z);let Ue=new qt({color:16777215,emissive:16771316,emissiveIntensity:.9,roughness:.3}),Ve=new ve(D,Ue);pe.add(Ve),t.add(pe);let Oe=new ve(new ui(Ne.door*.5,Ne.door*.5+.03,4,1,Math.PI/4),new Et({color:10132138,side:on}));Oe.rotation.x=-Math.PI/2,Oe.scale.set(Math.SQRT2,Math.SQRT2,1),Oe.rotation.z=Z+Math.PI/2-Math.PI/2,Oe.position.copy(ae).setY(Ne.h+.005),Oe.rotation.set(-Math.PI/2,0,Z),t.add(Oe);let U=new Ri(16732064,0,3,2);U.position.copy(ae).setY(Ne.h-.4),t.add(U);let $e=new An,rt=zn(Ne.r1-.12,Z,Ne.h+.02);$e.position.copy(rt),$e.rotation.y=Math.atan2(we.x,we.z);let A=new ve(new Gt(.8,.46,.05),s({color:1381660,metalness:.6,roughness:.3}));A.position.y=.26,A.rotation.x=-.35,$e.add(A);let v=Sr(512,288,null,{dynamic:!0}),G=Sr(512,288,null,{dynamic:!0}),Q=new ve(new ci(.76,.42),new Et({map:v,toneMapped:!1}));Q.position.set(0,0,.027),A.add(Q);let ie=new ve(new ci(.76,.42),new Et({map:G,toneMapped:!1}));ie.position.set(0,0,-.027),ie.rotation.y=Math.PI,A.add(ie),t.add($e),i.doors.push({i:q,a:Z,center:ae,pivot:pe,door:Ve,mat:Ue,light:U,open:0,target:0,mon:$e,texF:v,texB:G,inward:we})}i.bankPos=zn((Ne.r0+Ne.r1)/2,Ne.a0+.3,Ne.h);let L=(q,Z,ae,pe=1.1)=>{let we=new ve(new Yn(q,.035,6,96,ae-Z),C);we.rotation.set(-Math.PI/2,0,Z),we.position.y=pe,t.add(we);let Ue=Math.max(2,Math.round((ae-Z)*q/1.2));for(let Oe=0;Oe<=Ue;Oe++){let U=Z+(ae-Z)*Oe/Ue,$e=new ve(new Wt(.03,.03,pe,6),C);$e.position.copy(zn(q,U,pe/2)),t.add($e)}let Ve=new ve(new Wt(q,q,pe*.85,64,1,!0,Math.PI/2+Z,ae-Z),S);Ve.position.y=pe*.45,t.add(Ve)};L(4.3,-Math.PI/2+.45,Math.PI*1.5-.45),L(7.2,.15,Math.PI-.15);let O=Dd();O.repeat.set(3,2),i.ledTex=O,i.lowWallMat=s({color:656914,emissive:16777215,emissiveMap:O,emissiveIntensity:.35});let I=new ve(new Wt(8.6,8.6,3.6,64,1,!0,Math.PI/2+.55,Math.PI-1.1),i.lowWallMat);I.material.side=Xt,I.position.y=1.8,t.add(I);let F=new Nn(new pn(.07,8,6),new Et({color:16773840}),42),X=new ct,W=0;for(let q=0;q<7;q++)for(let Z=0;Z<6;Z++)X.makeTranslation(-.75+Z*.3,.5+q*.42,-8.2),F.setMatrixAt(W++,X);t.add(F),i.bulbs=F;let ue=new ve(new Gt(2,3.3,.2),s({color:525838}));ue.position.set(0,1.75,-8.35),t.add(ue);let $=Sc(11.5,9.2,4.6,1.2),re=Sc(12.3,10,5.3,1.45);re.holes.push(new li($.getPoints(24).reverse()));let ce=new or(re,{depth:.35,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,curveSegments:24}),De=s({color:14210284,metalness:.4,roughness:.3}),z=new ve(ce,De),V=new An;V.position.set(0,6.6,-9.2),V.add(z);let Y=Sc(11.9,9.6,4.95,1.3);Y.holes.push(new li(Sc(11.6,9.3,4.68,1.22).getPoints(24).reverse())),i.screenGlow=new Et({color:14723327});let de=new ve(new ji(Y,24),i.screenGlow);de.position.z=.43,V.add(de),i.screenTex=Sr(1280,512,null,{dynamic:!0}),i.ledMat=new Et({map:i.screenTex,toneMapped:!1});let P=new ve(xy(new ji($,24)),i.ledMat);P.position.z=.2,V.add(P);let k=new ve(new ji(re,24),s({color:657938}));k.position.z=-.01,k.rotation.y=Math.PI,V.add(k),V.rotation.x=.06,t.add(V),i.screen=V;let ee=new ve(new Gt(.5,4.2,.4),s({color:1380894,metalness:.5}));ee.position.set(0,2.1+0,-9.4),t.add(ee),i.tierMats=[];let K=(q,Z,ae,pe,we)=>{for(let U=0;U<ae;U++){let $e=pe+U*.95,rt=we+U*.55,A=s({color:1314846,roughness:.8}),v=new ve(new ui($e-.45,$e+.5,32,1,q,Z-q),A);v.rotation.x=-Math.PI/2,v.position.y=rt+.06,t.add(v);let G=new ve(new Wt($e-.45,$e-.45,rt+.06,32,1,!0,Math.PI/2+q,Z-q),A);G.position.y=(rt+.06)/2,t.add(G);let Q=Math.floor((Z-q)*$e/.62);for(let ie=0;ie<Q;ie++)i.seats.push([$e,q+(Z-q)*(ie+.5)/Q,rt+.06])}let Ue=new Et({color:16777215});i.tierMats.push(Ue);let Ve=new ve(new Wt(pe-.42,pe-.42,.18,48,1,!0,Math.PI/2+q,Z-q),Ue);Ve.position.y=we+.3,t.add(Ve);let Oe=new ve(new Yn(pe-.42,.03,5,64,Z-q),C);Oe.rotation.set(-Math.PI/2,0,q),Oe.position.y=we+1.05,t.add(Oe)};K(.25,1.15,e?3:5,9.6,1.4),K(Math.PI-1.15,Math.PI-.25,e?3:5,9.6,1.4),K(-.45,.2,e?2:4,10.2,1.4),K(Math.PI-.2,Math.PI+.45,e?2:4,10.2,1.4);let te=new ve(new Yn(12.35,.12,6,96),C);te.rotation.x=Math.PI/2,te.position.y=10,t.add(te);let xe=new ve(new Yn(11.4,.1,6,96),C);xe.rotation.x=Math.PI/2,xe.position.y=9.95,t.add(xe),i.glowDisc=new ve(new ui(5.2,6.2,96),new Et({color:16777215,side:on})),i.glowDisc.rotation.x=Math.PI/2,i.glowDisc.position.y=10.6,t.add(i.glowDisc),i.ceilBase=new Re(12611839);let it=Dd();it.repeat.set(10,3),it.rotation=0;let se=new ve(new Wt(16,16,12,64,1,!0),s({color:459790,emissive:8006399,emissiveMap:it,emissiveIntensity:.25,side:Xt}));se.position.y=6,t.add(se),i.outerMat=se.material;for(let q=0;q<10;q++){let Z=.15+q*(Math.PI-.3)/9,ae=new ve(new Gt(.12,8,.12),new Et({color:q%2?16719952:10502399}));ae.position.copy(zn(15.5,Z,6)),t.add(ae)}return i.walkR=14.5,i}function xp(n,e){n.doors.forEach(t=>{t.open+=(t.target-t.open)*Math.min(1,e*7),t.pivot.rotation.x=t.open*1.45})}function Tc(n,e,t){let i=Math.hypot(e,t);if(i>n.walkR)return!0;let s=Math.atan2(-t,e),r=(a,o)=>{let c=(a-o)%ja;return c>Math.PI&&(c-=ja),c<-Math.PI&&(c+=ja),Math.abs(c)};return i>Ne.r0-.25&&i<Ne.r1+.25&&r(s,-Math.PI/2)<1.75+.08||Math.abs(i-4.3)<.2&&r(s,-Math.PI/2)>.45||Math.abs(i-7.2)<.2&&r(s,Math.PI/2)<Math.PI/2-.15||i>8.4&&r(s,Math.PI/2)<1.05}var Er=Math.PI*2,vy=["#ff0000","#ff5a00","#ff9a00","#ffd000","#a8ff00","#22ff22","#00ff9a","#00e5ff","#0090ff","#0030ff","#6a00ff","#b000ff","#ff00d0","#ff4f8a","#ffd6a0","#ffffff","rainbow"],vp={SSLOW:.06,SLOW:.15,MEDIUM:.35,FAST:.8};var _y="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",yy=`uniform vec3 color; uniform float inten; uniform float gobo; uniform float rot; varying vec2 vUv;
void main(){ float a = pow(vUv.y, 1.6) * inten; if (gobo > 0.5) a *= 0.25 + 0.75 * step(0.5, fract(vUv.x * 7.0 + rot)); gl_FragColor = vec4(color * a, 1.0); }`;function Nd(){return new yt({uniforms:{color:{value:new Re},inten:{value:0},gobo:{value:0},rot:{value:0}},vertexShader:_y,fragmentShader:yy,transparent:!0,blending:is,depthWrite:!1,side:on})}function My(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.6,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Ms(n)}var _p=n=>({auto:!0,sel:"ALL",colA:n==="leds"?"#ffffff":"#ff1040",colB:n==="leds"?"#ffffff":"#9a30ff",rbA:!1,rbB:!1,cmode:null,ccue:0,state:"O",stateT:0,prevState:"O",icue:0,bright:1,beam:"BEAM",thick:1,spread:1,tilt:n==="bars"?20:30,pan:0,tiltSign:1,panSign:1,form:n==="heads"?"WIDE":null,freeze:!1,speed:"MEDIUM",move:n==="heads"?"CIRCLE":null,goboRot:!1,cueSpeed:1,fadeSpeed:1,loop:!0,grand:!1,overshoot:!1});function yp(n,{lowQuality:e=!1}={}){let t=n.scene,i=My(),s={heads:{name:"Heads",fx:[]},bars:{name:"LineBars",fx:[]},washes:{name:"Washes",fx:[]},leds:{name:"LEDs",fx:[]}};for(let z in s)s[z].st=_p(z);let r=new qt({color:1710623,metalness:.7,roughness:.4}),a=e?12:16;for(let z=0;z<a;z++){let V=z/a*Er+.1,Y=new N(Math.cos(V)*12.35,9.75,-Math.sin(V)*12.35),de=new ve(new Gt(.35,.18,.35),r);de.position.copy(Y).setY(9.92),t.add(de);let P=new ve(new Wt(.16,.2,.38,10),r);P.position.copy(Y),t.add(P);let k=new Et({color:16777215}),ee=new ve(new Ai(.13,12),k);t.add(ee);let K=new Ji(1,1,20,1,!0);K.translate(0,-.5,0);let te=Nd(),xe=new ve(K,te);xe.position.copy(Y),xe.frustumCulled=!1,t.add(xe);let it=new ve(new Ai(1,20),new Et({map:i,transparent:!0,blending:is,depthWrite:!1}));it.rotation.x=-Math.PI/2,it.position.y=.02,t.add(it),s.heads.fx.push({i:z,sub:z%2?"B":"A",pos:Y,head:P,lens:ee,lensM:k,beam:xe,bm:te,hit:it,len:13,width:.55,down:!0,center:V,col:new Re,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}let o=e?10:14;for(let z=0;z<o;z++){let V=-Math.PI/2+.75+(Er-1.5)*(z/(o-1)),Y=new N(Math.cos(V)*14.6,.4,-Math.sin(V)*14.6),de=new Et({color:16777215}),P=new ve(new Gt(1.6,.1,.12),de);P.position.copy(Y),P.lookAt(0,Y.y,0),t.add(P);let k=new Wt(.8,.05,1,4,1,!0);k.translate(0,.5,0),k.scale(1,1,.08);let ee=Nd(),K=new ve(k,ee);K.position.copy(Y),K.frustumCulled=!1,t.add(K);let te=k.attributes.uv;for(let xe=0;xe<te.count;xe++)te.setY(xe,1-te.getY(xe));s.bars.fx.push({i:z,sub:z%2?"B":"A",pos:Y,lensM:de,beam:K,bm:ee,len:7,width:1,down:!1,center:V,col:new Re,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}let c=6;for(let z=0;z<c;z++){let V=z/c*Er+.3,Y=new N(Math.cos(V)*11.4,9.7,-Math.sin(V)*11.4),de=new ve(new Wt(.22,.25,.3,10),r);de.position.copy(Y),t.add(de);let P=new Et({color:16777215}),k=new ve(new Ai(.2,12),P);t.add(k);let ee=new Ji(1,1,20,1,!0);ee.translate(0,-.5,0);let K=Nd(),te=new ve(ee,K);te.position.copy(Y),te.frustumCulled=!1,t.add(te);let xe=n.spots[z];xe.position.copy(Y),xe.angle=.5,xe.penumbra=.7,s.washes.fx.push({i:z,sub:z%2?"B":"A",pos:Y,lens:k,lensM:P,beam:te,bm:K,spot:xe,len:12,width:1.6,down:!0,center:V,col:new Re,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}[{name:"Marco pantalla",sub:"A",apply:(z,V)=>{n.screenGlow.color.copy(z).multiplyScalar(.4+.6*V),n.edgeMat&&n.edgeMat.color.copy(z).multiplyScalar(.5+.5*V)}},{name:"Disco techo",sub:"B",apply(z,V){n.glowDisc.material.color.copy(n.ceilBase||z).multiply(z).multiplyScalar(V)}},{name:"Muro chevrones",sub:"A",apply:(z,V)=>{n.lowWallMat.emissive.copy(z),n.lowWallMat.emissiveIntensity=.35*V}},{name:"L\xEDneas suelo",sub:"B",apply:(z,V)=>{n.floorLines.material.color.copy(z).multiplyScalar(V)}}].forEach((z,V)=>s.leds.fx.push({i:V,sub:z.sub,apply:z.apply,col:new Re(1,1,1),int:1,rnd:Math.random(),rt:0}));let u=new Re,h=new Re,d=new Re,f=new Re(1,1,1),g=0,_=0,m={kind:null,until:0};function p(z,V,Y,de,P){let k=(de*.15*z.cueSpeed+V.i/Y)%1;z.rbA?h.setHSL(k,1,.5):h.set(z.colA),z.rbB?d.setHSL((k+.5)%1,1,.5):d.set(z.colB);let ee=1.2*z.cueSpeed,K=V.sub==="A"?h:d;switch(z.cmode){case"SECOND":K=V.i%2?d:h;break;case"SWITCH":K=Math.floor(de*ee)%2?d:h;break;case"SMOOTH":return P.copy(h).lerp(d,.5+.5*Math.sin(de*ee*2));case"GRADIENT":return P.copy(h).lerp(d,Y>1?V.i/(Y-1):0);case"FLASH":if(de*ee*2%1<.18)return P.copy(f);break}switch(z.ccue){case 1:K=Math.floor(de*ee*4+V.i)%2?d:h;break;case 2:return P.setHSL((de*.3*z.cueSpeed+V.i/Y)%1,1,.5);case 3:{let te=Math.floor(de*ee*2);return P.setHSL((Math.sin(te*12.9+V.i*78.2)*43758.5%1+1)%1,1,.5)}case 4:K=(V.i/Y+de*ee*.25)%1<.5?h:d;break;case 5:K=Math.floor(de*ee*8)%2?d:h;break}return P.copy(K)}function M(z,V,Y,de){let P=z.cueSpeed,k=Math.max(.1,z.fadeSpeed),ee=de-z.stateT,K=Math.floor(de*3*P),te=it=>(Math.sin(it*12.9898)*43758.5453%1+1)%1,xe;switch(z.state){case"X":xe=0;break;case"FO":xe=Math.min(1,ee/k);break;case"FX":xe=Math.max(0,1-ee/k);break;case"RAND":xe=te(K*7+V.i*3.1)>.5?1:0;break;case"FRAND":{let it=te(K*7+V.i),se=te((K+1)*7+V.i),q=de*3*P-K;xe=it+(se-it)*q;break}case"ORAND":xe=Math.floor(te(K*3.3)*Y)===V.i?1:0;break;case"BRAND":xe=te(K*5.7+V.i*1.3)>.8?1:.08;break;case"STROBE":xe=Math.floor(de*14)%2;break;case"FLASH":xe=Math.max(0,1-ee/.5),ee>.5&&(z.state=z.prevState==="FLASH"?"O":z.prevState,z.stateT=de);break;default:xe=1}if(z.icue){let it=z.icue,se=de*P*.8%1,q=Y>1?V.i/(Y-1):0,Z=1;if(!z.loop&&de-z.stateT>1/(P*.8))Z=1;else switch(it){case 1:Z=Math.max(0,1-Math.abs((q-se+1)%1-0)*4);break;case 2:Z=Math.floor(de*P*2)%2===V.i%2?1:0;break;case 3:{let ae=Math.abs(de*P*.8%2-1);Z=Math.max(0,1-Math.abs(q-ae)*5);break}case 4:Z=q<=se?1:0;break;case 5:Z=Math.abs(q-.5)*2<=se?1:0;break;case 6:Z=te(Math.floor(de*8*P)+V.i*9.1)>.7?1:.05;break;case 7:Z=(Math.floor(de*P*2)+Math.floor(V.i/2))%2?1:0;break;case 8:Z=.5+.5*Math.sin(de*P*6);break;case 9:Z=Math.max(0,1-Math.abs((1-q-se+1)%1)*4);break;case 10:Z=Math.floor(q*2.999)===Math.floor(de*P*1.5)%3?1:.05;break;case 11:Z=Math.max(0,1-Math.min(Math.abs((q-se+1)%1),Math.abs((q-se+1.5)%1))*5);break;case 12:Z=.5+.5*Math.sin(de*P*2+q*Er);break}xe*=Z}return xe*z.bright}function w(z,V,Y,de){let P=z.overshoot?1.6:1,k=vp[z.speed]*Er*z.cueSpeed,ee=z.grand?V.rnd*Er:V.i*.6,K=z.tilt*z.tiltSign,te=z.pan*z.panSign;switch(z.form){case"WIDE":te+=(V.i%2?1:-1)*18,K+=8;break;case"IN":te=0,K=V.down?38:25;break;case"CROSS":te+=(V.i%2?1:-1)*35;break;case"UD":K+=(V.i%2?1:-1)*20;break}let xe=_;switch(z.move){case"TILT":K+=25*P*Math.sin(xe*k+ee);break;case"SMTILT":K+=25*P*Math.sin(xe*k);break;case"SLTILT":K+=25*P*Math.sin(xe*k*.35+ee);break;case"PAN":te+=40*P*Math.sin(xe*k+ee);break;case"SMPAN":te+=40*P*Math.sin(xe*k);break;case"SLPAN":te+=40*P*Math.sin(xe*k*.35+ee);break;case"CIRCLE":K+=18*P*Math.sin(xe*k+ee),te+=30*P*Math.cos(xe*k+ee);break;case"RANDOM CIRCLE":K+=18*P*Math.sin(xe*k*(.7+V.rnd)+V.rnd*9),te+=30*P*Math.cos(xe*k*(.7+V.rnd)+V.rnd*9);break;case"RTILT":case"RPAN":{xe-V.rt>1/(vp[z.speed]*2*z.cueSpeed)&&(V.rt=xe,V.rTilt=(Math.random()-.5)*50*P,V.rPan=(Math.random()-.5)*80*P),V.sTilt=(V.sTilt||0)+(V.rTilt-(V.sTilt||0))*.05,V.sPan=(V.sPan||0)+(V.rPan-(V.sPan||0))*.05,z.move==="RTILT"?K+=V.sTilt:te+=V.sPan;break}}return[Math.max(-120,Math.min(130,K))*Math.PI/180,te*Math.PI/180]}let y=new N,T=new N(0,1,0),E=new N(0,-1,0),R=new cn,x={heads:1,bars:1,washes:1,leds:1};function S(z){g+=z,X(g);for(let Y in s){let de=s[Y],P=de.st,k=de.fx.length;P.freeze||(_+=0);let ee=Math.min(1,z*6/Math.max(.1,P.fadeSpeed));de.fx.forEach(K=>{p(P,K,k,g,u),K.col.lerp(u,ee);let te=x[Y],xe=te>=1?1:k>1?K.i/(k-1)<te-.001?1:0:te>0?1:0,it=M(P,K,k,g)*xe;if(K.int+=(it-K.int)*(P.state==="STROBE"||P.state==="FLASH"||P.state==="BRAND"||P.state==="RAND"?1:ee),Y==="leds"){K.apply(u.copy(K.col),(.25+.75*K.int)*xe);return}K.lensM.color.copy(K.col).multiplyScalar(.25+K.int*1.5);let se,q;!P.freeze||K.lastAim===void 0?([se,q]=w(P,K,k,g),K.lastAim=[se,q]):[se,q]=K.lastAim;let Z=new N(-K.pos.x,0,-K.pos.z).normalize(),ae=Math.cos(q),pe=Math.sin(q),we=Z.x*ae-Z.z*pe,Ue=Z.x*pe+Z.z*ae;K.down?y.set(we*Math.sin(se),-Math.cos(se),Ue*Math.sin(se)):y.set(we*Math.sin(se),Math.cos(se),Ue*Math.sin(se)),y.normalize(),R.setFromUnitVectors(K.down?E:T,y),K.beam.quaternion.copy(R),K.head&&K.head.quaternion.copy(R),K.lens&&(K.lens.position.copy(K.pos).addScaledVector(y,.21),K.lens.lookAt(K.lens.position.clone().add(y)));let Ve=P.beam!=="NO BEAM"&&K.int>.01;K.beam.visible=Ve;let Oe=K.len;K.down&&y.y<-.05&&(Oe=Math.min(K.len*1.6,K.pos.y/-y.y));let U=K.width*P.spread*(.5+.5*P.thick);if(K.beam.scale.set(U*Oe/10,Oe,U*Oe/10),K.bm.uniforms.color.value.copy(K.col),K.bm.uniforms.inten.value=K.int*(Y==="washes"?.12:.3)*P.thick,K.bm.uniforms.gobo.value=P.beam==="GOBO"?1:0,(P.goboRot||P.beam==="GOBO")&&(K.bm.uniforms.rot.value+=z*(P.goboRot?.6:.1)),K.hit){let $e=K.pos.y/Math.max(.05,-y.y);K.hit.visible=K.int>.02&&y.y<-.15&&$e<30,K.hit.position.set(K.pos.x+y.x*$e,.02,K.pos.z+y.z*$e),K.hit.scale.setScalar(Math.min(3,U*$e/10*1.1)),K.hit.material.color.copy(K.col).multiplyScalar(K.int*.8)}K.spot&&(K.spot.color.copy(K.col),K.spot.intensity=K.int*70,K.spot.target.position.copy(K.pos).addScaledVector(y,10))})}let V=!0;for(let Y in s)s[Y].st.freeze||(V=!1);V||(_+=z)}let C="menu",D=-99,L=0,O=[{heads:{move:"CIRCLE",form:"WIDE",cmode:null,ccue:0,icue:0,speed:"MEDIUM"},bars:{icue:1,cmode:null},washes:{cmode:"SMOOTH"}},{heads:{move:"PAN",form:"CROSS",cmode:"SWITCH",icue:0,speed:"SLOW"},bars:{icue:12,cmode:"GRADIENT"},washes:{cmode:null}},{heads:{move:"TILT",form:"UD",cmode:"GRADIENT",icue:1,speed:"MEDIUM"},bars:{icue:3,cmode:"SECOND"},washes:{cmode:"SWITCH"}},{heads:{move:"RANDOM CIRCLE",form:null,cmode:"SECOND",icue:0,speed:"SLOW"},bars:{icue:8,cmode:null},washes:{cmode:"SMOOTH"}}],I={colA:"#ff1040",colB:"#9a30ff",rbA:!1,rbB:!1,state:"O",bright:1,beam:"BEAM",tilt:30,pan:0};function F(z,V){let Y=s[z].st;Y.auto&&(V.state&&V.state!==Y.state&&(Y.prevState=Y.state,Y.stateT=g),Object.assign(Y,V))}function X(z){if(m.kind&&z>m.until&&(m.kind=null,D=-99),m.kind||z-D<(C==="question"?6:9))return;D=z,L=(L+1)%O.length;let V=O[L],Y=C==="final"?{colA:"#ffd000",colB:"#ffffff"}:I;for(let de of["heads","bars","washes"])F(de,{...I,...Y,...V[de],tilt:de==="bars"?20:30,bright:C==="question"?.75:1});C==="question"&&F("heads",{move:"SLTILT",speed:"SLOW",icue:0}),F("leds",{colA:"#ffffff",colB:"#ffffff",rbA:!1,rbB:!1,state:"O",icue:C==="menu"?12:0,cmode:null,bright:1,cueSpeed:.4})}function W(z){if(z==="menu"||z==="idle"||z==="question"||z==="final"){C=z,D=-99,m.kind=null;return}if(z==="fall"){m.kind="fall",m.until=g+2.6;for(let V of["heads","washes","bars"])F(V,{colA:"#ff0000",colB:"#ff0000",rbA:!1,rbB:!1,cmode:null,ccue:0,icue:0,state:"STROBE",stateT:g,move:V==="heads"?"RTILT":null,speed:"FAST"});F("leds",{colA:"#ff2020",colB:"#ff2020",state:"STROBE",icue:0})}if(z==="win"){m.kind="win",m.until=g+4;for(let V of["heads","washes","bars"])F(V,{rbA:!1,rbB:!1,colA:"#ffd000",colB:"#ff1040",cmode:"SWITCH",ccue:1,icue:0,state:"FLASH",prevState:"O",stateT:g,move:V==="heads"?"CIRCLE":null,speed:"FAST",form:"WIDE"});F("leds",{rbA:!1,rbB:!1,colA:"#ffd000",colB:"#ffffff",ccue:1,state:"O"})}if(z==="intro"){m.kind="intro",m.until=g+600;for(let V of["heads","washes","bars"])F(V,{colA:"#ff1040",colB:"#b040ff",rbA:!1,rbB:!1,cmode:"SECOND",ccue:1,icue:V==="bars"?1:0,state:"O",bright:1,move:V==="heads"?"CIRCLE":null,form:"WIDE",speed:"FAST",cueSpeed:1.5});F("leds",{colA:"#ffffff",colB:"#e0a8ff",state:"O",icue:12,cueSpeed:1.5})}if(z==="tension"){m.kind="tension",m.until=g+600;for(let V of["heads","washes","bars"])F(V,{colA:"#ff0030",colB:"#6a00ff",rbA:!1,rbB:!1,cmode:"SMOOTH",ccue:0,icue:V==="bars"?6:0,state:"O",bright:.55,move:V==="heads"?"SLTILT":null,form:V==="heads"?"IN":null,speed:"SSLOW"});F("leds",{colA:"#ff2050",colB:"#ff2050",state:"O",icue:8,cueSpeed:.6})}if(z==="release"&&(m.kind=null,D=-99),z==="correct"){m.kind="correct",m.until=g+1.2;for(let V of["heads","bars"])F(V,{colA:"#22ff22",colB:"#ffffff",state:"FLASH",prevState:"O",stateT:g,ccue:0})}}function ue(z){let V=(de,P,k="")=>`<button class="gl-b ${k}" data-a="${P}">${de}</button>`,Y=Object.entries(s).map(([de,P])=>{let k=de!=="leds",ee=de!=="leds",K=de==="bars";return`<div class="gl-panel" data-g="${de}">
      <div class="gl-head"><b>${P.name}</b><span class="gl-logo">GLIGHTS</span><span class="gl-ver">AUM3D</span><button class="gl-b gl-auto" data-a="auto">AUTO</button></div>
      <div class="gl-sec">Colours and functions</div>
      <div class="gl-sw">${vy.map(te=>`<button class="gl-c ${te==="rainbow"?"rb":""}" style="${te!=="rainbow"?"background:"+te:""}" data-a="col:${te}"></button>`).join("")}</div>
      <div class="gl-row g8">${V("A","sel:A")}${V("B","sel:B")}${V("ALL","sel:ALL")}${["SECOND","SWITCH","SMOOTH","GRADIENT","FLASH"].map(te=>V(te,"cmode:"+te)).join("")}</div>
      <div class="gl-row g6">${[1,2,3,4,5].map(te=>V("CUE"+te,"ccue:"+te)).join("")}${V("NONE","ccue:0")}</div>
      <div class="gl-ab"><div class="gl-a">A</div><div class="gl-bb">B</div></div>
      <div class="gl-sec">Light state</div>
      <div class="gl-row g10">${["O","X","FO","FX","RAND","FRAND","ORAND","BRAND","STROBE","FLASH"].map(te=>V(te,"state:"+te)).join("")}</div>
      <div class="gl-row g6">${Array.from({length:12},(te,xe)=>V("CUE"+(xe+1),"icue:"+(xe+1))).join("")}</div>
      <div class="gl-row g1">${V("CUE OFF","icue:0")}</div>
      <label class="gl-sl">BRIGHTNESS: <span data-v="bright">100%</span><input type="range" min="0" max="100" value="100" data-s="bright"></label>
      ${k?`<div class="gl-sec">Beam controls</div>
      <div class="gl-row g3">${de!=="bars"?V("GOBO","beam:GOBO"):""}${V("BEAM","beam:BEAM")}${V("NO BEAM","beam:NO BEAM")}</div>
      <label class="gl-sl">THICKNESS: <span data-v="thick">100%</span><input type="range" min="10" max="400" value="100" data-s="thick"></label>
      ${de!=="bars"?'<label class="gl-sl">SPREAD: <span data-v="spread">100%</span><input type="range" min="20" max="300" value="100" data-s="spread"></label>':""}`:""}
      ${ee?`<div class="gl-sec">Positions</div>
      <div class="gl-row g14">${V("+/-","tsign")}<span class="gl-l">Tilt</span>${[0,10,20,30,40,50,60,70,80,90,100,110,120].map(te=>V(te,"tilt:"+te)).join("")}</div>
      ${K?"":`<div class="gl-row g14">${V("+/-","psign")}<span class="gl-l">Pan</span>${[0,10,20,30,40,50,60,70,80,90,100,110,120].map(te=>V(te,"pan:"+te)).join("")}</div>`}
      <div class="gl-row g9">${(K?["UD"]:["WIDE","IN","CROSS","UD"]).map(te=>V(te==="UD"?"U/D":te,"form:"+te)).join("")}${V("FREEZE","freeze")}${["SSLOW","SLOW","MEDIUM","FAST"].map(te=>V(te,"speed:"+te)).join("")}</div>
      <div class="gl-row g8">${(K?["TILT","RTILT","SMTILT","SLTILT"]:["TILT","RTILT","SMTILT","SLTILT","PAN","RPAN","SMPAN","SLPAN"]).map(te=>V(te,"move:"+te)).join("")}</div>
      ${K?"":`<div class="gl-row g3">${V("CIRCLE","move:CIRCLE")}${V("RANDOM CIRCLE","move:RANDOM CIRCLE")}${V("GOBO ROTATE","gobor")}</div>`}
      <div class="gl-row g1">${V("STOP MOVEMENT","move:")}</div>`:""}
      <div class="gl-sec">Modifiers</div>
      <div class="gl-row g12"><span class="gl-l">Cue speed</span>${[.1,.25,.5,.75,1,1.25,1.5,2,2.5,3,5,10].map(te=>V(String(te).replace(/^0/,""),"cs:"+te)).join("")}</div>
      <div class="gl-row g12"><span class="gl-l">Fade speed</span>${[.1,.25,.33,.5,.66,.75,1,1.25,1.5,2,3,5].map(te=>V(String(te).replace(/^0/,""),"fs:"+te)).join("")}</div>
      <div class="gl-row g4"><span class="gl-l">Other</span>${V("LOOP CUES","loop")}${V("GROUP RANDOM","grand")}${V("OVERSHOOT","over")}${V("RESET","reset")}</div>
      </div>`}).join("");z.innerHTML=`<div class="gl-tabs">${Object.entries(s).map(([de,P],k)=>`<button data-tab="${de}" class="${k?"":"on"}">${P.name}</button>`).join("")}<button class="gl-close" data-close>\u2715</button></div><div class="gl-wrap">${Y}</div>`,z.querySelector(".gl-panel").classList.add("on"),z.querySelectorAll("[data-tab]").forEach(de=>de.onclick=()=>{z.querySelectorAll("[data-tab]").forEach(P=>P.classList.toggle("on",P===de)),z.querySelectorAll(".gl-panel").forEach(P=>P.classList.toggle("on",P.dataset.g===de.dataset.tab))}),z.querySelectorAll(".gl-panel").forEach(de=>{let P=de.dataset.g;de.addEventListener("click",k=>{let ee=k.target.closest("[data-a]");ee&&($(P,ee.dataset.a),re(de,P))}),de.querySelectorAll("[data-s]").forEach(k=>k.addEventListener("input",()=>{let ee=s[P].st;ee.auto=!1,ee[k.dataset.s]=k.value/100,re(de,P)})),re(de,P)}),["pointerdown","pointermove","wheel","touchstart"].forEach(de=>z.addEventListener(de,P=>P.stopPropagation(),{passive:!0})),setInterval(()=>z.querySelectorAll(".gl-panel.on").forEach(de=>re(de,de.dataset.g)),1e3)}function $(z,V){let Y=s[z].st,[de,P]=V.split(/:(.*)/s);if(de==="auto"){Y.auto=!Y.auto,D=-99;return}switch(Y.auto=!1,de){case"col":{let k=P==="rainbow";Y.sel!=="B"&&(Y.rbA=k,k||(Y.colA=P)),Y.sel!=="A"&&(Y.rbB=k,k||(Y.colB=P)),Y.ccue=0;break}case"sel":Y.sel=P;break;case"cmode":Y.cmode=Y.cmode===P?null:P;break;case"ccue":Y.ccue=+P;break;case"state":Y.prevState=Y.state,Y.state=P,Y.stateT=g;break;case"icue":Y.icue=+P,Y.stateT=g;break;case"beam":Y.beam=P;break;case"tilt":Y.tilt=+P;break;case"pan":Y.pan=+P;break;case"tsign":Y.tiltSign*=-1;break;case"psign":Y.panSign*=-1;break;case"form":Y.form=Y.form===P?null:P;break;case"freeze":Y.freeze=!Y.freeze;break;case"speed":Y.speed=P;break;case"move":Y.move=P||null;break;case"gobor":Y.goboRot=!Y.goboRot;break;case"cs":Y.cueSpeed=+P;break;case"fs":Y.fadeSpeed=+P;break;case"loop":Y.loop=!Y.loop;break;case"grand":Y.grand=!Y.grand;break;case"over":Y.overshoot=!Y.overshoot;break;case"reset":Object.assign(Y,_p(z),{auto:!1});break}}function re(z,V){let Y=s[V].st,de=P=>{let[k,ee]=P.split(/:(.*)/s);switch(k){case"auto":return Y.auto;case"sel":return Y.sel===ee;case"cmode":return Y.cmode===ee;case"ccue":return Y.ccue===+ee;case"state":return Y.state===ee;case"icue":return Y.icue===+ee;case"beam":return Y.beam===ee;case"tilt":return Y.tilt===+ee;case"pan":return Y.pan===+ee;case"tsign":return Y.tiltSign<0;case"psign":return Y.panSign<0;case"form":return Y.form===ee;case"freeze":return Y.freeze;case"speed":return Y.speed===ee;case"move":return(Y.move||"")===ee;case"gobor":return Y.goboRot;case"cs":return Y.cueSpeed===+ee;case"fs":return Y.fadeSpeed===+ee;case"loop":return Y.loop;case"grand":return Y.grand;case"over":return Y.overshoot;case"col":return!1}return!1};z.querySelectorAll("[data-a]").forEach(P=>P.classList.toggle("on",de(P.dataset.a))),z.querySelector(".gl-a").style.background=Y.rbA?"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta)":Y.colA,z.querySelector(".gl-bb").style.background=Y.rbB?"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta)":Y.colB;for(let P of["bright","thick","spread"]){let k=z.querySelector(`[data-s="${P}"]`);k&&(k.value=Math.round(Y[P]*100),z.querySelector(`[data-v="${P}"]`).textContent=Math.round(Y[P]*100)+"%")}}function ce(z,V){I.colA=z||"#ff1040",I.colB=V||"#9a30ff",D=-99}function De(z){for(let V of["heads","bars","washes","leds"])z[V]&&F(V,z[V]);z.hold&&(m.kind="cine",m.until=g+z.hold)}return{update:S,event:W,buildGUI:ue,groups:s,setPalette:ce,power:x,cine:De}}var Za=new N;function Hn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Za.copy(e),Za[i]=0,Za.normalize();let l=.5*a/(a+o),u=1-Za.angleTo(n)/c;return Math.sign(Za[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Ac=class n extends Gt{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new N,l=new N,u=new N(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new N,m=.5/a;for(let p=0,M=0;p<h.length;p+=3,M+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*r,h[p+1]=u.y*Math.sign(c.y)+l.y*r,h[p+2]=u.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[M+0]=Hn(_,l,"z","y",r,i),f[M+1]=1-Hn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[M+0]=1-Hn(_,l,"z","y",r,i),f[M+1]=1-Hn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[M+0]=1-Hn(_,l,"x","z",r,e),f[M+1]=Hn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),f[M+0]=1-Hn(_,l,"x","z",r,e),f[M+1]=1-Hn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),f[M+0]=1-Hn(_,l,"x","y",r,e),f[M+1]=1-Hn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[M+0]=Hn(_,l,"x","y",r,e),f[M+1]=1-Hn(_,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var by=[15087942,2792847,16032353,4553629,16777215,8599788,16760331,448160,3835647,16471559,2236962,13178954,9485933,6185166,14540253],Sy=[2236987,1914199,4014171,2829634,4869737,1118481,6045747],Ey=[15843965,14724201,13010498,9262372,16767916,16108455],Ty=[2824720,1118481,7029795,13934615,9118976,10066329,3877408],Ay={esp10:[16727972,3400191,16766474,8599788,3920239],esp1000:[16764928,15133951,13938487,12632256]},wy={esp10:[16727972,3400191,16766474,16777215,8599788,3920239],esp1000:[16764928,15133951,1118481,13938487,16777215],prime:[1118481,16777215,13938487,1908026,7016218]},Cy={clap:{p:.9,dl:.35},cheer:{p:.85,dl:.3},ooh:{p:.9,dl:.15},laugh:{p:.85,dl:.4},wave:{p:.6,dl:.6}};function Mp(n,{lowQuality:e=!1}={}){let t=(n.seats||[]).filter((L,O)=>!e||O%2===0),i=t.length,s=new qt({roughness:.72,metalness:0}),r=e?.5:1,a=L=>Math.max(6,Math.round(L*r)),o={seat:new Ac(.46,.4,.42,3,.06).translate(0,.2,-.02),thigh:new an(.075,.3,4,a(12)).rotateX(Math.PI/2).scale(2.1,1,1).translate(0,.47,.17),shin:new an(.065,.32,4,a(12)).scale(2.1,1,1).translate(0,.24,.36),torso:new Ss(new wi([[0,0],[.165,.01],[.175,.12],[.19,.4],[.2,.5],[.15,.57],[0,.58]].map(([L,O])=>new fe(L,O))).getPoints(a(20)),a(24)).scale(1,1,.8),head:new pn(.15,a(24),a(18)).scale(.95,1.08,1),hair:new pn(.16,a(24),a(12),0,Math.PI*2,0,Math.PI*.55),arm:new an(.048,.4,4,a(12)).translate(0,-.25,0),hat:new Ji(.1,.3,a(20)).translate(0,.15,0)},c=L=>{let O=new Nn(L,s,i);return O.instanceMatrix.setUsage(Ga),O.frustumCulled=!1,n.scene.add(O),O},l={seat:c(o.seat),thigh:c(o.thigh),shin:c(o.shin),torso:c(o.torso),head:c(o.head),hair:c(o.hair),armL:c(o.arm),armR:c(o.arm),hat:c(o.hat)};l.seat.instanceMatrix.setUsage(pr),l.thigh.instanceMatrix.setUsage(pr),l.shin.instanceMatrix.setUsage(pr);let u=L=>L[Math.floor(Math.random()*L.length)],h=new Re,d=t.map(([L,O,I],F)=>{let X=new ct,W=L-.25,ue=Math.cos(O)*W,$=-Math.sin(O)*W,re=Math.atan2(-ue,-$);return X.compose(new N(ue,I-.42,$),new cn().setFromAxisAngle(new N(0,1,0),re),new N(1,.92+Math.random()*.16,1)),{base:X,ph:Math.random()*6.28,sp:.7+Math.random()*.6,dl:Math.random(),pr:Math.random(),w:0,kind:null,hairOn:Math.random()<.85,hatOn:!1}}),f=L=>{let O=wy[L],I=Ay[L];d.forEach((F,X)=>{l.torso.setColorAt(X,h.setHex(O&&Math.random()<.6?u(O):u(by))),l.armL.setColorAt(X,h),l.armR.setColorAt(X,h),l.thigh.setColorAt(X,h.setHex(u(Sy))),l.shin.setColorAt(X,h),F.skin||(F.skin=u(Ey)),l.head.setColorAt(X,h.setHex(F.skin)),F.hc||(F.hc=u(Ty)),l.hair.setColorAt(X,h.setHex(F.hc)),l.seat.setColorAt(X,h.setHex(731770)),F.hatOn=!!I&&Math.random()<.8,l.hat.setColorAt(X,h.setHex(I?u(I):16777215))}),Object.values(l).forEach(F=>{F.instanceColor&&(F.instanceColor.needsUpdate=!0)}),l.hat.visible=!!I},g=new ct;d.forEach((L,O)=>{l.seat.setMatrixAt(O,L.base),l.thigh.setMatrixAt(O,L.base),l.shin.setMatrixAt(O,L.base)}),f(null);let _=null,m=[],p=new ct,M=new ct,w=new cn,y=new Mn,T=new N,E=new N(1,1,1),R=new ct().makeScale(0,0,0),x=(L,O,I,F,X,W,ue)=>(y.set(F,X,W),w.setFromEuler(y),T.set(L,O,I),ue.compose(T,w,E)),S=0,C=0;function D(L){if(S+=L,C++,!(e&&C%2)){_&&S>_.t0+_.dur+1.2&&(_=null),!_&&m.length&&(_=m.shift());for(let O=0;O<i;O++){let I=d[O],F=0,X=null;if(_){let k=Cy[_.kind],ee=S-_.t0-I.dl*k.dl;I.pr<k.p*_.amt&&ee>0&&(F=Math.min(1,ee/.25)*Math.min(1,Math.max(0,(_.dur-ee)/.5+1)),X=_.kind)}I.w+=(F-I.w)*Math.min(1,L*8),X&&(I.kind=X),I.w<.01&&(I.kind=null);let W=I.w,ue=S*I.sp+I.ph,$=Math.sin(ue*1.3)*.01,re=0,ce=Math.sin(ue*.6)*.04,De=Math.sin(ue*.9)*.05,z=Math.sin(ue*.37)*.3,V=-.35,Y=.12,de=-.35,P=-.12;if(W>0){let k=I.kind;if(k==="clap"){let ee=Math.sin(S*17+I.ph)*.5+.5;V+=-1*W,de+=-1*W,Y+=(.35+.35*ee)*W,P-=(.35+.35*ee)*W,$+=.02*ee*W,z*=1-W}else if(k==="cheer"||k==="wave"){let ee=Math.sin(S*9+I.ph);V+=-2.45*W,de+=-2.45*W,Y+=(-.35+.25*ee)*W,P-=(-.35-.25*ee)*W,$+=Math.abs(Math.sin(S*7+I.ph))*.12*W,re-=.12*W,De-=.2*W,z*=1-W}else if(k==="ooh")V+=-2.35*W,de+=-2.35*W,Y+=.38*W,P-=.38*W,re-=.18*W,De-=.15*W,z*=1-W;else if(k==="laugh"){let ee=Math.sin(S*14+I.ph);re+=(.15+.1*ee)*W,De+=.25*ee*W,V+=-.2*W,de+=-.2*W,Y+=.3*W,P-=.3*W,$+=.015*ee*W}}x(0,.5+$,0,re,0,ce,M),p.multiplyMatrices(I.base,M),l.torso.setMatrixAt(O,p),x(0,.74,0,De,z,0,M),g.multiplyMatrices(p,M),l.head.setMatrixAt(O,g),I.hairOn?(x(0,.77,-.01,De,z,0,M),g.multiplyMatrices(p,M),l.hair.setMatrixAt(O,g)):l.hair.setMatrixAt(O,R),I.hatOn&&(x(0,.86,0,De,z,-.15,M),g.multiplyMatrices(p,M),l.hat.setMatrixAt(O,g)),x(-.25,.52,0,V,0,Y,M),g.multiplyMatrices(p,M),l.armL.setMatrixAt(O,g),x(.25,.52,0,de,0,P,M),g.multiplyMatrices(p,M),l.armR.setMatrixAt(O,g)}l.torso.instanceMatrix.needsUpdate=l.head.instanceMatrix.needsUpdate=l.hair.instanceMatrix.needsUpdate=l.hat.instanceMatrix.needsUpdate=l.armL.instanceMatrix.needsUpdate=l.armR.instanceMatrix.needsUpdate=!0}}return{count:i,update:D,react(L,O=2.5,I=1,F=!1){let X={kind:L,dur:O,amt:I,t0:S};if(F&&_){m.push(X);return}m.length=0,_=X,d.forEach(W=>W.dl=Math.random())},theme(L){f(L)},meshes:l}}var Ry={abrirWav:"wav",laser:"wav",saltar:"wav"},vn=null,os=new Set,wc=!1,Pn=null,Ud=localStorage.getItem("aum3d_voice")!=="0",Tr=+(localStorage.getItem("aum3d_mvol")||.8),Py=/[?&]fast=1/.test(location.search);function Iy(n){let e=new Audio(`assets/snd/${n}.${Ry[n]||"mp3"}`);return e.preload="auto",e}var Ze={play(n,{loop:e=!1,volume:t=1}={}){let i=Iy(n);return i.loop=e,i.volume=Math.min(1,t),i.muted=wc,os.add(i),i.addEventListener("ended",()=>os.delete(i)),i.play().catch(()=>{}),i},voice(n,e){return new Promise(t=>{if(Py){setTimeout(t,60);return}if(!Ud||wc||!n){setTimeout(t,e||1500);return}Pn&&Pn.pause();let i=new Audio(`assets/voz/${n}.mp3`);Pn=i;let s=!1,r=()=>{s||(s=!0,vn&&(vn.volume=Tr),Pn===i&&(Pn=null),t())};vn&&(vn.volume=Tr*.35),i.onended=r,i.onerror=()=>{setTimeout(r,e||1500)},i.play().catch(()=>setTimeout(r,e||1500)),setTimeout(r,3e4)})},stopVoice(){Pn&&(Pn.pause(),Pn=null),vn&&(vn.volume=Tr)},get voiceOn(){return Ud},setVoice(n){Ud=n,localStorage.setItem("aum3d_voice",n?"1":"0"),n||this.stopVoice()},setMusicVol(n){Tr=n,localStorage.setItem("aum3d_mvol",n),vn&&(vn.volume=n)},get musicVol(){return Tr},music(n,e=!1){return this.stopMusic(),vn=this.play(n,{loop:e,volume:Tr}),vn},stopMusic(){vn&&(vn.pause(),os.delete(vn),vn=null)},stopAll(){os.forEach(n=>n.pause()),os.clear(),vn=null,Pn&&(Pn.pause(),Pn=null)},pauseAll(){os.forEach(n=>n.pause()),Pn&&Pn.pause()},resumeAll(){os.forEach(n=>n.play().catch(()=>{}))},setMuted(n){wc=n,os.forEach(e=>e.muted=n)},get muted(){return wc}};window.__audio=Ze;var bp={intro1:["\xA1Buenas noches y bienvenidos a Atrapa un mill\xF3n! El concurso en el que el dinero ya es vuestro... hasta que deja de serlo.","Boa noite e bem-vindos ao Atrapa un mill\xF3n! O programa em que o dinheiro j\xE1 \xE9 de voc\xEAs... at\xE9 deixar de ser."],intro2:["Esta noche hay en la mesa un mill\xF3n de euros en efectivo: cuarenta fajos de veinticinco mil euros.","Esta noite h\xE1 na mesa um milh\xE3o de euros em dinheiro: quarenta ma\xE7os de vinte e cinco mil euros."],intro2d:["En el diario empezamos con doscientos mil euros: cuarenta fajos de cinco mil.","No di\xE1rio come\xE7amos com duzentos mil euros: quarenta ma\xE7os de cinco mil."],intro2x:["Hoy es una noche especial: \xA1dos millones de euros! Cuarenta fajos de cincuenta mil.","Hoje \xE9 uma noite especial: dois milh\xF5es de euros! Quarenta ma\xE7os de cinquenta mil."],introAniv:["\xA1Esta noche celebramos el aniversario del programa! Y todas las preguntas ser\xE1n sobre Atrapa un mill\xF3n.","Esta noite celebramos o anivers\xE1rio do programa! E todas as perguntas ser\xE3o sobre o Atrapa un mill\xF3n."],introTele:["Bienvenidos a nuestro especial de concursos de la tele. Esta noche, todas las preguntas son sobre concursos.","Bem-vindos ao nosso especial de programas de audit\xF3rio. Esta noite, todas as perguntas s\xE3o sobre concursos."],pair:["Vamos a conocer a la pareja de esta noche. \xA1Un aplauso para ellos!","Vamos conhecer a dupla desta noite. Uma salva de palmas para eles!"],comp:["Y en la grada, sus dos acompa\xF1antes, que van a sufrir con cada trampilla. \xA1Saludad!","E na plateia, os dois acompanhantes, que v\xE3o sofrer a cada al\xE7ap\xE3o. Acenem!"],rules:["Las reglas son sencillas: ten\xE9is sesenta segundos para repartir el dinero en las trampillas. Pero ojo: al menos una tiene que quedar vac\xEDa.","As regras s\xE3o simples: voc\xEAs t\xEAm sessenta segundos para distribuir o dinheiro nos al\xE7ap\xF5es. Mas aten\xE7\xE3o: pelo menos um tem que ficar vazio."],money:["Aqu\xED ten\xE9is el dinero. Tocadlo, olerlo... que todav\xEDa es vuestro.","Aqui est\xE1 o dinheiro. Toquem, cheirem... que ainda \xE9 de voc\xEAs."],topics:["Elegid tema para la siguiente pregunta.","Escolham o tema da pr\xF3xima pergunta."],p1:["Pregunta n\xFAmero uno.","Pergunta n\xFAmero um."],p2:["Pregunta n\xFAmero dos.","Pergunta n\xFAmero dois."],p3:["Pregunta n\xFAmero tres.","Pergunta n\xFAmero tr\xEAs."],p4:["Pregunta n\xFAmero cuatro.","Pergunta n\xFAmero quatro."],p5:["Pregunta n\xFAmero cinco.","Pergunta n\xFAmero cinco."],p6:["Pregunta n\xFAmero seis.","Pergunta n\xFAmero seis."],p7:["Pregunta n\xFAmero siete.","Pergunta n\xFAmero sete."],p8:["Pregunta n\xFAmero ocho.","Pergunta n\xFAmero oito."],round3:["Empieza una nueva ronda: a partir de ahora, solo tres opciones.","Come\xE7a uma nova rodada: a partir de agora, s\xF3 tr\xEAs op\xE7\xF5es."],final:["Llegamos a la pregunta final. Solo dos opciones, y todo el dinero en una sola trampilla.","Chegamos \xE0 pergunta final. S\xF3 duas op\xE7\xF5es, e todo o dinheiro num s\xF3 al\xE7ap\xE3o."],go:["\xA1Tiempo! Repartid el dinero.","Valendo! Distribuam o dinheiro."],t30:["Quedan treinta segundos.","Faltam trinta segundos."],t10:["\xA1Diez segundos!","Dez segundos!"],stop:["Hab\xE9is parado el reloj. \xBFEst\xE1is seguros? Bueno, ya no hay vuelta atr\xE1s.","Voc\xEAs pararam o rel\xF3gio. T\xEAm certeza? Bom, agora n\xE3o tem volta."],timeUp:["Se acab\xF3 el tiempo. \xA1Manos fuera de la mesa!","Acabou o tempo. M\xE3os fora da mesa!"],unplaced:["El dinero que se ha quedado fuera de las trampillas, se pierde.","O dinheiro que ficou fora dos al\xE7ap\xF5es est\xE1 perdido."],open:["Vamos a abrir las trampillas de las respuestas incorrectas.","Vamos abrir os al\xE7ap\xF5es das respostas erradas."],open1:["Abrimos esta trampilla...","Abrimos este al\xE7ap\xE3o..."],safeAll:["\xA1Lo hab\xE9is salvado todo! \xA1Ni un solo billete al foso!","Voc\xEAs salvaram tudo! Nenhuma nota caiu!"],safe:["\xA1Correcta! Ese dinero sigue siendo vuestro.","Correta! Esse dinheiro continua sendo de voc\xEAs."],lostSome:["Eso se va al foso. Pero segu\xEDs en el juego.","Isso foi pro buraco. Mas voc\xEAs continuam no jogo."],lostAll:["Lo siento much\xEDsimo. Todo el dinero se ha ido al foso.","Sinto muit\xEDssimo. Todo o dinheiro caiu no buraco."],win:["\xA1Enhorabuena! \xA1Ese dinero es vuestro! \xA1Os lo llev\xE1is a casa!","Parab\xE9ns! Esse dinheiro \xE9 de voc\xEAs! V\xE3o levar para casa!"],empty:["\xA1Cuidado! Una trampilla tiene que quedar vac\xEDa.","Cuidado! Um al\xE7ap\xE3o tem que ficar vazio."],allIn:["En la \xFAltima pregunta, todo el dinero va a una sola trampilla.","Na \xFAltima pergunta, todo o dinheiro vai para um s\xF3 al\xE7ap\xE3o."],star:["\xA1Pregunta estrella! Os cambio la pregunta, pero el reloj vuelve a empezar.","Pergunta estrela! Troco a pergunta, mas o rel\xF3gio recome\xE7a."],solo:["Pregunta seis: Solo uno. Uno de vosotros baja al foso y el otro responde solo.","Pergunta seis: Solo uno. Um de voc\xEAs desce ao buraco e o outro responde sozinho."],soloBack:["Desde el foso, vuestro compa\xF1ero recupera cinco mil euros. \xA1Algo es algo!","L\xE1 do buraco, o parceiro recupera cinco mil euros. Melhor que nada!"],finChoice:["Para la \xFAltima pregunta pod\xE9is elegir: triplicar, con cuatro opciones; duplicar, con tres; o la cl\xE1sica, con dos.","Para a \xFAltima pergunta voc\xEAs podem escolher: triplicar, com quatro op\xE7\xF5es; dobrar, com tr\xEAs; ou a cl\xE1ssica, com duas."],finTriple:["\xA1Valientes! Si acert\xE1is, el dinero se multiplica por tres. Ten\xE9is veinte segundos.","Corajosos! Se acertarem, o dinheiro \xE9 multiplicado por tr\xEAs. Vinte segundos."],finDouble:["\xA1Duplicar! Tres opciones y diez segundos.","Dobrar! Tr\xEAs op\xE7\xF5es e dez segundos."],finClassic:["La cl\xE1sica: dos opciones, todo a una.","A cl\xE1ssica: duas op\xE7\xF5es, tudo numa s\xF3."],outro:["Esto ha sido Atrapa un mill\xF3n. \xA1Gracias por acompa\xF1arnos y hasta la pr\xF3xima!","Isto foi o Atrapa un mill\xF3n. Obrigado pela companhia e at\xE9 a pr\xF3xima!"],train:["Esto es un entrenamiento: aqu\xED no se pierde ni un euro. \xA1Practicad!","Isto \xE9 um treino: aqui n\xE3o se perde nem um euro. Pratiquem!"],hist:["Bienvenidos a la historia de Atrapa un mill\xF3n. Paseaos por el plat\xF3 y descubrid sus r\xE9cords.","Bem-vindos \xE0 hist\xF3ria do Atrapa un mill\xF3n. Passeiem pelo est\xFAdio e descubram os recordes."],j1:["\xBFSab\xE9is cu\xE1nto pesa un mill\xF3n en billetes de cincuenta? Unos veinte kilos. Hoy ven\xEDs al gimnasio gratis.","Sabem quanto pesa um milh\xE3o em notas de cinquenta? Uns vinte quilos. Hoje a academia \xE9 de gra\xE7a."],j2:["Tranquilos, que el foso no muerde. Solo se come el dinero.","Calma, o buraco n\xE3o morde. S\xF3 come o dinheiro."],j3:["Mi abuela dec\xEDa: no pongas todos los huevos en la misma cesta. Aqu\xED decimos: ni todos los fajos en la misma trampilla.","Minha av\xF3 dizia: n\xE3o ponha todos os ovos na mesma cesta. Aqui dizemos: nem todos os ma\xE7os no mesmo al\xE7ap\xE3o."],j4:["Debajo de la mesa hay un se\xF1or que cuenta los billetes que caen. Est\xE1 muy en forma.","Embaixo da mesa tem um senhor que conta as notas que caem. Ele est\xE1 em \xF3tima forma."],j5:["Si os tiembla el pulso, no pasa nada. Los fajos no se rompen.","Se a m\xE3o tremer, n\xE3o tem problema. Os ma\xE7os n\xE3o quebram."],j6:["P\xFAblico, \xBFvosotros lo sab\xE9is? Ya, claro, desde casa todo es m\xE1s f\xE1cil.","Plateia, voc\xEAs sabem? Pois \xE9, de casa tudo \xE9 mais f\xE1cil."],j7:["\xBFC\xF3mo vais? Respirad. Respirad, que el dinero no se mueve solo.","Como est\xE3o? Respirem. Respirem, que o dinheiro n\xE3o se mexe sozinho."],j8:["Me encanta esta pareja. Se nota que se quieren... hasta que uno elige mal.","Adoro esta dupla. D\xE1 para ver que se amam... at\xE9 um escolher errado."],sure1:["\xBFSeguro que no quer\xE9is mover nada?","T\xEAm certeza que n\xE3o querem mexer em nada?"],sure2:["Pensadlo bien, que esto no se puede deshacer.","Pensem bem, porque isso n\xE3o tem volta."],sure3:["Interesante reparto... muy interesante.","Distribui\xE7\xE3o interessante... muito interessante."],correctIs:["Y la respuesta correcta es...","E a resposta correta \xE9..."]},Ka=[["Luc\xEDa","F","Andr\xE9s","M","Hola, soy Luc\xEDa, de Zaragoza. Soy panadera y hoy vengo a por todas.","Y yo soy Andr\xE9s, su marido. Soy cartero y vengo a frenarla un poco.","matrimonio","casal"],["Marta","F","Elena","F","Hola, soy Marta, de C\xE1diz, y soy enfermera.","Y yo Elena, su hermana. Ella sabe de todo y yo s\xE9 de lo dem\xE1s.","hermanas","irm\xE3s"],["Javier","M","Pablo","M","Buenas, soy Javier, de Albacete. Trabajo de electricista.","Y yo soy Pablo, su mejor amigo desde el colegio. Soy cocinero.","amigos","amigos"],["Carmen","F","Sergio","M","Hola a todos, soy Carmen, de Murcia, profesora de m\xFAsica.","Y yo Sergio, su hijo. Estudio historia, as\xED que las fechas son m\xEDas.","madre e hijo","m\xE3e e filho"],["Nuria","F","Ra\xFAl","M","Hola, soy Nuria, de Tarragona. Soy veterinaria.","Yo soy Ra\xFAl, su pareja. Conduzco un autob\xFAs y me s\xE9 todas las calles.","pareja","casal"],["Diego","M","Roc\xEDo","F","Hola, soy Diego, de Burgos. Soy carpintero.","Y yo Roc\xEDo, su prima. Soy peluquera y en mi sal\xF3n se habla de todo.","primos","primos"],["Silvia","F","Laura","F","\xA1Hola! Soy Silvia, de Pamplona. Soy fisioterapeuta.","Y yo soy Laura, su compa\xF1era de piso. Soy arquitecta y muy cabezota.","amigas","amigas"],["\xD3scar","M","Hugo","M","Buenas, soy \xD3scar, de C\xE1ceres. Soy mec\xE1nico.","Y yo Hugo, su hermano peque\xF1o. Estudio ingenier\xEDa y hago los c\xE1lculos.","hermanos","irm\xE3os"]],Od=["Yo creo que es esta, la tengo bastante clara.","No lo tengo nada claro, vamos a repartir.","Pon m\xE1s ah\xED, f\xEDate de m\xED.","\xA1Ay, que me da algo!","Esa la he visto en un documental, seguro.","Madre m\xEDa, madre m\xEDa...","Quita de esa, que esa no es.","Vale, vale, dejamos esa vac\xEDa.","\xBFY si nos la jugamos?","Mejor ir a lo seguro.","Esto lo sab\xEDa mi abuelo de memoria.","\xA1No toques nada m\xE1s!"],Sp=["Eu acho que \xE9 esta, tenho quase certeza.","N\xE3o tenho certeza nenhuma, vamos dividir.","P\xF5e mais a\xED, confia em mim.","Ai, vou ter um tro\xE7o!","Vi isso num document\xE1rio, com certeza.","Minha nossa, minha nossa...","Tira dessa, que n\xE3o \xE9 essa.","Ok, ok, deixamos essa vazia.","E se a gente arriscar?","Melhor ir no seguro.","Isso meu av\xF4 sabia de cor.","N\xE3o mexe em mais nada!"],Fd={yes:["\xA1S\xED! \xA1S\xED! \xA1Lo sab\xEDa!","Sim! Sim! Eu sabia!"],no:["No puede ser... \xA1con lo claro que lo ten\xEDa!","N\xE3o pode ser... eu tinha tanta certeza!"],wow:["\xA1Ni un billete! \xA1Qu\xE9 nervios!","Nenhuma nota! Que nervoso!"]},Ep=["\xA1Vamos, chicos, que pod\xE9is!","Vamos, gente, voc\xEAs conseguem!"];var Cc={es:[["El formato","Atrapa un mill\xF3n es un concurso creado por Endemol, producido por Gestmusic (Endemol Shine Iberia) y emitido por Antena 3. Es la adaptaci\xF3n de The Million Pound Drop Live, de Channel 4 (Reino Unido). A diferencia del original brit\xE1nico, la versi\xF3n espa\xF1ola no se emit\xEDa en directo."],["Presentadores","Carlos Sobera (2011-2014). Manel Fuentes en la nueva etapa, estrenada el 11 de enero de 2023. Juanra Bonet present\xF3 varios programas desde febrero de 2024 por problemas de agenda de Fuentes."],["Estreno y \xE9xito","Se estren\xF3 el viernes 4 de febrero de 2011 en prime time. Por su \xE9xito, desde el 4 de abril de 2011 tambi\xE9n se emiti\xF3 de lunes a jueves por la tarde; los viernes lleg\xF3 a haber doble emisi\xF3n. La versi\xF3n semanal se cancel\xF3 el 6 de abril de 2012."],["El relevo","El diario sigui\xF3 emiti\xE9ndose despu\xE9s de \xA1Ahora caigo! hasta 2014. Fue sustituido por \xA1Boom!, con Juanra Bonet, el martes 9 de septiembre de 2014. El 19 de julio de 2021 se anunci\xF3 su regreso."],["Versi\xF3n semanal","Una pareja recibe 1.000.000 \u20AC en 40 fajos de 25.000 \u20AC (500 billetes de 50 \u20AC). 8 preguntas: 4 con cuatro opciones, 3 con tres y la final con dos. Antes de cada pregunta eligen entre 2 temas. Tienen 60 segundos para repartir el dinero, dejando al menos una trampilla vac\xEDa."],["Versi\xF3n diaria","200.000 \u20AC en 40 fajos de 5.000 \u20AC. Pase al Mill\xF3n (hasta noviembre de 2011). Pregunta estrella (desde noviembre de 2012). \xABSolo uno\xBB en la pregunta 6 (desde mayo de 2013). Desde septiembre de 2013, en la final se puede triplicar (4 opciones, 20 s), duplicar (3 opciones, 10 s) o jugar la cl\xE1sica."],["R\xE9cords","Mayor premio: 550.000 \u20AC (24/02/2024). Mayor p\xE9rdida: 1.900.000 \u20AC (Atrapa dos millones). Los hermanos Mar\xEDa y Pablo Ferrandis se llevaron el bote de 200.000 \u20AC del diario el 23/09/2013 sin dividir el dinero ni una vez."],["Premios","Premio Ondas 2011 y TP de Oro 2011 al mejor programa de entretenimiento."]],pt:[["O formato","Atrapa un mill\xF3n \xE9 um programa criado pela Endemol, produzido pela Gestmusic (Endemol Shine Iberia) e exibido pela Antena 3. \xC9 a adapta\xE7\xE3o de The Million Pound Drop Live, do Channel 4 (Reino Unido). Ao contr\xE1rio do original brit\xE2nico, a vers\xE3o espanhola n\xE3o era ao vivo."],["Apresentadores","Carlos Sobera (2011-2014). Manel Fuentes na nova fase, estreada em 11 de janeiro de 2023. Juanra Bonet apresentou v\xE1rios programas desde fevereiro de 2024."],["Estreia e sucesso","Estreou na sexta-feira, 4 de fevereiro de 2011, no hor\xE1rio nobre. Pelo sucesso, a partir de 4 de abril de 2011 passou a ser exibido tamb\xE9m \xE0 tarde. A vers\xE3o semanal foi cancelada em 6 de abril de 2012."],["A substitui\xE7\xE3o","O di\xE1rio continuou depois do \xA1Ahora caigo! at\xE9 2014, quando foi substitu\xEDdo pelo \xA1Boom!, em 9 de setembro de 2014. Em 19 de julho de 2021 foi anunciada a sua volta."],["Vers\xE3o semanal","Uma dupla recebe 1.000.000 \u20AC em 40 ma\xE7os de 25.000 \u20AC (500 notas de 50 \u20AC). 8 perguntas: 4 com quatro op\xE7\xF5es, 3 com tr\xEAs e a final com duas. Antes de cada pergunta escolhem entre 2 temas. T\xEAm 60 segundos para distribuir o dinheiro, deixando pelo menos um al\xE7ap\xE3o vazio."],["Vers\xE3o di\xE1ria","200.000 \u20AC em 40 ma\xE7os de 5.000 \u20AC. Pergunta estrela, \xABSolo uno\xBB na pergunta 6 e, na final, triplicar (4 op\xE7\xF5es, 20 s), dobrar (3 op\xE7\xF5es, 10 s) ou a cl\xE1ssica."],["Recordes","Maior pr\xEAmio: 550.000 \u20AC (24/02/2024). Maior perda: 1.900.000 \u20AC (Atrapa dos millones). Os irm\xE3os Mar\xEDa e Pablo Ferrandis levaram os 200.000 \u20AC do di\xE1rio em 23/09/2013 sem dividir o dinheiro nenhuma vez."],["Pr\xEAmios","Pr\xEAmio Ondas 2011 e TP de Oro 2011 de melhor programa de entretenimento."]]};var Tp={pools:{general:[{id:"Q1_1q",r:"1-3",c:0,es:["\xBFCu\xE1l de estas pel\xEDculas de animaci\xF3n se estren\xF3 en 2010?",["Megamind","Shrek, felices para siempre","Kung Fu Panda","Hormigaz"]],pt:["Qual destas anima\xE7\xF5es foi lan\xE7ada em 2010?",["Megamente","Shrek para sempre","Kung Fu Panda","FormiguinhaZ"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q2",r:"1-3",c:0,es:["\xBFEn qu\xE9 pa\xEDs se disput\xF3 el Mundial de f\xFAtbol de 2018?",["Rusia","Inglaterra","Espa\xF1a","Catar"]],pt:["Em qual pa\xEDs foi disputada a Copa do Mundo de 2018?",["R\xFAssia","Inglaterra","Espanha","Catar"]],t:["Deportes","Esportes"]},{id:"Q1_2q",r:"1-3",c:1,es:["\xBFQu\xE9 rey de los cuatro palos de la baraja no tiene bigote?",["Picas","Corazones","Diamantes","Tr\xE9boles"]],pt:["Qual rei dentre os quatro naipes de cartas n\xE3o possui bigode?",["Espadas","Copas","Ouros","Paus"]],t:["Variado","Variado"]},{id:"Q1_3q",r:"1-3",c:2,es:["La proclamaci\xF3n de la rep\xFAblica brasile\xF1a ocurri\xF3 en el a\xF1o:",["1822","1888","1889","1891"]],pt:["A proclama\xE7\xE3o da rep\xFAblica brasileira ocorreu no ano de:",["1822","1888","1889","1891"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_2q2",r:"1-3",c:1,es:["\xBFEn qu\xE9 siglo comenz\xF3 la Revoluci\xF3n Industrial?",["Siglo XVII","Siglo XVIII","Siglo XVI","Siglo XIX"]],pt:["Em qual s\xE9culo se iniciou a Revolu\xE7\xE3o Industrial?",["S\xE9culo XVII","S\xE9culo XVIII","S\xE9culo XVI","S\xE9culo XIX"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q3",r:"1-3",c:0,es:["La iguana es un tipo de:",["Reptil","Anfibio","Pez","Mam\xEDfero"]],pt:["A iguana \xE9 um tipo de:",["R\xE9ptil","Anf\xEDbio","Peixe","Mam\xEDfero"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q2",r:"1-3",c:2,es:["\xBFQu\xE9 actor sustituy\xF3 a Charlie Sheen como protagonista de la serie Dos hombres y medio?",["Matthew Perry","Bruce Willis","Ashton Kutcher","Will Smith"]],pt:["Qual ator substituiu Charlie Sheen como protagonista da s\xE9rie Two and a Half Men?",["Matthew Perry","Bruce Willis","Ashton Kutcher","Will Smith"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q3",r:"1-3",c:1,es:["La cadena de hamburgueser\xEDas Bob's es de origen:",["Estadounidense","Brasile\xF1o","Ingl\xE9s","Canadiense"]],pt:["A rede de lanchonetes Bob's \xE9 de origem:",["Americana","Brasileira","Inglesa","Canadense"]],t:["Variado","Variado"]},{id:"Q1_1q4",r:"1-3",c:0,es:["\xBFCu\xE1l de estos personajes es m\xE1s antiguo?",["Mickey Mouse","Superman","Scooby-Doo","Harry Potter"]],pt:["Qual destes personagens \xE9 o mais antigo?",["Mickey Mouse","Super-Homem","Scooby-Doo","Harry Potter"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_4q",r:"1-3",c:3,es:["\xBFCu\xE1l de estos pa\xEDses no pertenece al MERCOSUR?",["Ecuador","Colombia","Per\xFA","Cuba"]],pt:["Qual destes pa\xEDses n\xE3o faz parte do MERCOSUL?",["Equador","Col\xF4mbia","Peru","Cuba"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q5",r:"1-3",c:0,es:['\xBFCu\xE1l de estos personajes no pertenece a la serie "Los Simpson"?',["Peter Griffin","Julius Hibbert","Ned Flanders","Apu Nahasapeemapetilon"]],pt:['Qual destes personagens n\xE3o faz parte da s\xE9rie "Os Simpsons"?',["Peter Griffin","Julius Hibbert","Ned Flanders","Apu Nahasapeemapetilon"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q6",r:"1-3",c:0,es:["\xBFCu\xE1l de estas famosas construcciones es la m\xE1s antigua?",["Torre de Pisa","Torre Eiffel","Taj Mahal","Catedral de San Pablo"]],pt:["Qual destas constru\xE7\xF5es famosas \xE9 a mais antiga?",["Torre de Pisa","Torre Eiffel","Taj Mahal","Catedral de S\xE3o Paulo"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_3q3",r:"1-3",c:2,es:["\xBFA qu\xE9 filo pertenecen las lombrices?",["Celent\xE9reos","Moluscos","An\xE9lidos","Platelmintos"]],pt:["A que filo pertencem as minhocas?",["Celenterados","Moluscos","Anel\xEDdeos","Platelmintos"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q4",r:"1-3",c:2,es:["\xBFQu\xE9 deporte invent\xF3 James Naismith en 1891?",["Voleibol","F\xFAtbol","Baloncesto","Tenis"]],pt:["Qual esporte James Naismith inventou em 1891?",["V\xF4lei","Futebol","Basquete","T\xEAnis"]],t:["Deportes","Esportes"]},{id:"Q1_2q4",r:"1-3",c:1,es:["\xBFEn qu\xE9 a\xF1o gan\xF3 la selecci\xF3n brasile\xF1a de voleibol su primer oro ol\xEDmpico?",["1984","1992","1996","2004"]],pt:["Em que ano a sele\xE7\xE3o brasileira de v\xF4lei conquistou seu primeiro ouro ol\xEDmpico?",["1984","1992","1996","2004"]],t:["Deportes","Esportes"]},{id:"Q1_3q5",r:"1-3",c:2,es:["En 2011, \xBFhasta qu\xE9 edad o m\xE1s llegar\xEDa a vivir una de cada dos mil millones de personas?",["95","100","115","130"]],pt:["Em 2011, uma em cada dois bilh\xF5es de pessoas chegaria a viver at\xE9 que idade ou mais?",["95","100","115","130"]],t:["Variado","Variado"]},{id:"Q1_1q7",r:"1-3",c:0,es:["\xBFCu\xE1ntas veces fue campe\xF3n de la NBA Michael Jordan?",["6","5","4","3"]],pt:["Quantas vezes Michael Jordan foi campe\xE3o da NBA?",["6","5","4","3"]],t:["Deportes","Esportes"]},{id:"Q1_1q8",r:"1-3",c:0,es:["\xBFQu\xE9 pa\xEDs recibi\xF3 m\xE1s turistas en 2010?",["Francia","Brasil","Espa\xF1a","Estados Unidos"]],pt:["Qual pa\xEDs recebeu mais turistas em 2010?",["Fran\xE7a","Brasil","Espanha","Estados Unidos"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q2",r:"1-3",c:3,es:["\xBFC\xF3mo se llama el 44.\xBA presidente de los Estados Unidos?",["Jimmy Carter","Ronald Reagan","John Kennedy","Barack Obama"]],pt:["Qual \xE9 o nome do 44\xBA presidente dos Estados Unidos?",["Jimmy Carter","Ronald Reagan","John Kennedy","Barack Obama"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_4q3",r:"1-3",c:3,es:["\xBFEn qu\xE9 continente est\xE1n 9 de los 10 edificios m\xE1s altos del mundo?",["Am\xE9rica del Sur","Europa","Am\xE9rica del Norte","Asia"]],pt:["Em que continente est\xE3o 9 dos 10 pr\xE9dios mais altos do mundo?",["Am\xE9rica do Sul","Europa","Am\xE9rica do Norte","\xC1sia"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_2q5",r:"1-3",c:1,es:["\xBFCu\xE1l de estas razas es de perro?",["Persa","Pastor de Shetland","Scottish Fold","Siam\xE9s"]],pt:["Qual destas ra\xE7as \xE9 de cachorro?",["Persa","Pastor de Shetland","Scottish Fold","Siam\xEAs"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q6",r:"1-3",c:2,es:["Seg\xFAn la ley brasile\xF1a, \xBFcu\xE1nto tiempo como m\xE1ximo puede estar presa una persona?",["10 a\xF1os","25 a\xF1os","30 a\xF1os","40 a\xF1os"]],pt:["Pela lei brasileira, qual o tempo m\xE1ximo que uma pessoa pode ficar presa?",["10 anos","25 anos","30 anos","40 anos"]],t:["Variado","Variado"]},{id:"Q1_1q9",r:"1-3",c:0,es:["\xBFCu\xE1l fue la primera Spice Girl en sacar un single en solitario?",["Mel B","Mel C","Geri Halliwell","Emma Bunton"]],pt:["Qual foi a primeira Spice Girl a lan\xE7ar um single solo?",["Mel B","Mel C","Geri Halliwell","Emma Bunton"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_1q10",r:"1-3",c:0,es:["\xBFDe cu\xE1l de estas cantantes son las canciones Fallin' y Empire State of Mind?",["Alicia Keys","Mariah Carey","Lady Gaga","Fergie"]],pt:["De qual destas cantoras s\xE3o as m\xFAsicas Fallin' e Empire State of Mind?",["Alicia Keys","Mariah Carey","Lady Gaga","Fergie"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_3q7",r:"1-3",c:2,es:["\xBFEn qu\xE9 d\xE9cada se cre\xF3 la NASA (Administraci\xF3n Nacional de Aeron\xE1utica y del Espacio)?",["30","40","50","60"]],pt:["Em que d\xE9cada foi criada a NASA?",["30","40","50","60"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_2q6",r:"1-3",c:1,es:["\xBFCu\xE1l de estos n\xFAmeros no es primo?",["173","573","701","727"]],pt:["Qual destes n\xFAmeros n\xE3o \xE9 primo?",["173","573","701","727"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_1q11",r:"1-3",c:0,es:["El Monumento a las Banderas es obra de:",["Victor Brecheret","C\xE2ndido Caetano de Almeida Reis","Jackson Ribeiro","Franz Weissmann"]],pt:["O Monumento \xE0s Bandeiras \xE9 obra de:",["Victor Brecheret","C\xE2ndido Caetano de Almeida Reis","Jackson Ribeiro","Franz Weissmann"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_2q7",r:"1-3",c:1,es:["\xBFEn qu\xE9 d\xE9cada se cre\xF3 el disco compacto (CD)?",["60","70","80","90"]],pt:["Em que d\xE9cada foi criado o CD (disco compacto)?",["60","70","80","90"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_1q12",r:"1-3",c:0,es:["\xBFDe qu\xE9 ciudad fueron c\xF3nsules Craso, Pompeyo y Julio C\xE9sar?",["Roma","Viena","Mil\xE1n","Esparta"]],pt:["Crasso, Pompeu e J\xFAlio C\xE9sar foram c\xF4nsules de qual cidade?",["Roma","Viena","Mil\xE3o","Esparta"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q13",r:"1-3",c:0,es:["\xBFEl nacimiento de qu\xE9 web cuenta la pel\xEDcula La red social, de 2010?",["Facebook","Orkut","Twitter","MySpace"]],pt:["O filme A Rede Social, de 2010, conta o nascimento de qual site?",["Facebook","Orkut","Twitter","MySpace"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q8",r:"1-3",c:1,es:['\xBFDe qu\xE9 color es el pomp\xF3n del gorro de Wally en "\xBFD\xF3nde est\xE1 Wally?"?',["Blanco","Rojo","Amarillo","Marr\xF3n"]],pt:['De que cor \xE9 o pompom do gorro do Wally em "Onde est\xE1 Wally?"?',["Branco","Vermelho","Amarelo","Marrom"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_1q14",r:"1-3",c:0,es:["\xBFQu\xE9 significa la J del nombre de la autora J. K. Rowling?",["Joanne","Jane","Julie","Justine"]],pt:["O que significa o J do nome da autora J. K. Rowling?",["Joanne","Jane","Julie","Justine"]],t:["Variado","Variado"]},{id:"Q1_3q8",r:"1-3",c:2,es:["\xBFC\xF3mo se llama la primera pel\xEDcula de Harry Potter?",["Las Reliquias de la Muerte","La C\xE1mara Secreta","La Piedra Filosofal","La Orden del F\xE9nix"]],pt:["Qual \xE9 o nome do primeiro filme de Harry Potter?",["As Rel\xEDquias da Morte","A C\xE2mara Secreta","A Pedra Filosofal","A Ordem da F\xEAnix"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q9",r:"1-3",c:1,es:["\xBFCu\xE1l de estos nombres no es de los ping\xFCinos de Madagascar?",["Cabo","Maurice","Kowalski","Rico"]],pt:["Qual destes nomes n\xE3o \xE9 dos pinguins de Madagascar?",["Capit\xE3o","Maurice","Kowalski","Rico"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q15",r:"1-3",c:0,es:["\xBFEn qu\xE9 pa\xEDs naci\xF3 Pablo Picasso?",["Espa\xF1a","Italia","Francia","Suiza"]],pt:["Em que pa\xEDs nasceu Pablo Picasso?",["Espanha","It\xE1lia","Fran\xE7a","Su\xED\xE7a"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_3q9",r:"1-3",c:2,es:["\xBFEn qu\xE9 pa\xEDs est\xE1 Tombuct\xFA?",["Laos","Jordania","Mal\xED","Ruman\xEDa"]],pt:["Em que pa\xEDs fica Timbuktu?",["Laos","Jord\xE2nia","Mali","Rom\xEAnia"]],t:["Deportes","Esportes"]},{id:"Q1_3q10",r:"1-3",c:2,es:["\xBFQu\xE9 porcentaje del planeta Tierra est\xE1 cubierto de agua?",["25%","56%","71%","92%"]],pt:["Qual a porcentagem do planeta Terra coberta por \xE1gua?",["25%","56%","71%","92%"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4Q4",r:"1-3",c:3,es:["\xBFQu\xE9 n\xFAmero tiene la casa de Sherlock Holmes en Baker Street?",["21B","22B","211B","221B"]],pt:["Qual \xE9 o n\xFAmero da casa de Sherlock Holmes na Baker Street?",["21B","22B","211B","221B"]],t:["Variado","Variado"]},{id:"Q1_2q10",r:"1-3",c:1,es:["Sabamiki, Ishi Seki y Moyogi son t\xE9rminos relacionados con:",["Artes marciales","\xC1rboles bons\xE1i","Sushi","Origami"]],pt:["Sabamiki, Ishi Seki e Moyogi s\xE3o termos relacionados a:",["Artes marciais","\xC1rvores bonsai","Sushi","Origami"]],t:["Variado","Variado"]},{id:"Q1_4q5",r:"1-3",c:3,es:["La serie de televisi\xF3n El Chavo del 8 es originaria de:",["Colombia","Brasil","Argentina","M\xE9xico"]],pt:["A s\xE9rie de TV Chaves \xE9 origin\xE1ria do(a):",["Col\xF4mbia","Brasil","Argentina","M\xE9xico"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q11",r:"1-3",c:1,es:["\xBFCu\xE1l de estos personajes no sale en los dibujos de Scooby-Doo?",["Daphne","Barney","Velma","Fred"]],pt:["Qual destes personagens n\xE3o aparece no desenho Scooby-Doo?",["Daphne","Barney","Velma","Fred"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_2q12",r:"1-3",c:1,es:["\xBFCu\xE1l de estas personas no tiene un aeropuerto con su nombre?",["John Lennon","Diego Maradona","John F. Kennedy","Charles de Gaulle"]],pt:["Qual destas pessoas n\xE3o tem um aeroporto com seu nome?",["John Lennon","Diego Maradona","John F. Kennedy","Charles de Gaulle"]],t:["Variado","Variado"]},{id:"Q1_1q16",r:"1-3",c:0,es:["\xBFCu\xE1l es el nombre del Capit\xE1n Nascimento, personaje de la pel\xEDcula Tropa de \xE9lite?",["Roberto","Marcelo","Wagner","Ricardo"]],pt:["Qual \xE9 o nome do Capit\xE3o Nascimento, personagem do filme Tropa de Elite?",["Roberto","Marcelo","Wagner","Ricardo"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q13",r:"1-3",c:1,es:["\xBFCu\xE1ntos goles marc\xF3 Ronaldo Naz\xE1rio en los Mundiales?",["14","15","16","17"]],pt:["Quantos gols Ronaldo Naz\xE1rio marcou em Copas do Mundo?",["14","15","16","17"]],t:["Deportes","Esportes"]},{id:"Q1_1q17",r:"1-3",c:0,es:["\xBFCu\xE1l es el nombre de pila de la cantante Pitty?",["Priscilla","Paula","Fernanda","Patr\xEDcia"]],pt:["Qual \xE9 o primeiro nome da cantora Pitty?",["Priscilla","Paula","Fernanda","Patr\xEDcia"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_2q14",r:"1-3",c:1,es:["\xBFContra qu\xE9 equipo marc\xF3 Pel\xE9 su gol n\xFAmero mil?",["Corinthians","Vasco da Gama","Botafogo","Real Madrid"]],pt:["Contra qual time Pel\xE9 marcou seu mil\xE9simo gol?",["Corinthians","Vasco da Gama","Botafogo","Real Madrid"]],t:["Deportes","Esportes"]},{id:"Q1_2q15",r:"1-3",c:1,es:["\xBFCon cu\xE1l de estos pa\xEDses no tiene frontera Brasil?",["Guayana Francesa","Ecuador","Surinam","Venezuela"]],pt:["Com qual destes pa\xEDses o Brasil n\xE3o faz fronteira?",["Guiana Francesa","Equador","Suriname","Venezuela"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_2q16",r:"1-3",c:1,es:["\xBFEn qu\xE9 pa\xEDs est\xE1 el Taj Mahal?",["India","Marruecos","Egipto","Camer\xFAn"]],pt:["Em que pa\xEDs fica o Taj Mahal?",["\xCDndia","Marrocos","Egito","Camar\xF5es"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_2q17",r:"1-3",c:1,es:["\xBFCon cu\xE1l de estos famosos nunca tuvo una relaci\xF3n la modelo Gisele B\xFCndchen?",["Tom Brady","Ronaldo Naz\xE1rio","Kelly Slater","Leonardo DiCaprio"]],pt:["Com qual destes famosos a modelo Gisele B\xFCndchen nunca teve um relacionamento?",["Tom Brady","Ronaldo Naz\xE1rio","Kelly Slater","Leonardo DiCaprio"]],t:["Deportes","Esportes"]},{id:"Q1_2q18",r:"1-3",c:1,es:["\xBFC\xF3mo se llama la ciudad conocida como la Ciudad de la Luz?",["Londres","Par\xEDs","S\xE3o Paulo","Tokio"]],pt:["Qual cidade \xE9 conhecida como a Cidade Luz?",["Londres","Paris","S\xE3o Paulo","T\xF3quio"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q6",r:"1-3",c:3,es:["El futbolista Neymar naci\xF3 en:",["S\xE3o Paulo","Florian\xF3polis","Santos","Mogi das Cruzes"]],pt:["O jogador Neymar nasceu em:",["S\xE3o Paulo","Florian\xF3polis","Santos","Mogi das Cruzes"]],t:["Deportes","Esportes"]},{id:"Q1_2q19",r:"1-3",c:1,es:["\xBFCu\xE1ntos meses del a\xF1o tienen 31 d\xEDas?",["6","7","8","9"]],pt:["Quantos meses do ano t\xEAm 31 dias?",["6","7","8","9"]],t:["Variado","Variado"]},{id:"Q1_1q18",r:"1-3",c:0,es:["\xBFQu\xE9 lleva tatuado Popeye en el brazo?",["Un ancla","El nombre Olivia","Una calavera","Una lata de espinacas"]],pt:["O que o Popeye tem tatuado no bra\xE7o?",["Uma \xE2ncora","O nome Ol\xEDvia","Uma caveira","Uma lata de espinafre"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_2q20",r:"1-3",c:1,es:["\xBFCu\xE1l es la quinta letra del alfabeto griego?",["Delta","\xC9psilon","Sigma","Beta"]],pt:["Qual \xE9 a quinta letra do alfabeto grego?",["Delta","\xC9psilon","Sigma","Beta"]],t:["Variado","Variado"]},{id:"Q1_4Q7",r:"1-3",c:3,es:["\xBFQu\xE9 letra est\xE1 entre la Z y la C en el teclado de un ordenador?",["M","A","S","X"]],pt:["Que letra fica entre o Z e o C no teclado do computador?",["M","A","S","X"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_4q8",r:"1-3",c:3,es:["\xBFDe qu\xE9 color es la letra L del logo de Google?",["Azul","Amarillo","Rojo","Verde"]],pt:["De que cor \xE9 a letra L do logotipo do Google?",["Azul","Amarelo","Vermelho","Verde"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_2q21",r:"1-3",c:1,es:["\xBFDe qu\xE9 pa\xEDs es originario el krav mag\xE1?",["Jap\xF3n","Israel","Tailandia","Grecia"]],pt:["De qual pa\xEDs \xE9 origin\xE1rio o krav maga?",["Jap\xE3o","Israel","Tail\xE2ndia","Gr\xE9cia"]],t:["Deportes","Esportes"]},{id:"Q1_3q11",r:"1-3",c:2,es:["\xBFQui\xE9n gan\xF3 la primera edici\xF3n del reality American Idol?",["Jordin Sparks","Carrie Underwood","Kelly Clarkson","Jennifer Hudson"]],pt:["Quem venceu a primeira edi\xE7\xE3o do reality American Idol?",["Jordin Sparks","Carrie Underwood","Kelly Clarkson","Jennifer Hudson"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_1q19",r:"1-3",c:0,es:["\xBFC\xF3mo se llama el hijo de Gomez y Morticia, personajes de La familia Addams?",["Pugsley","Largo","Cosa","Chico"]],pt:["Qual \xE9 o nome do filho de Gomez e Mort\xEDcia, de A Fam\xEDlia Addams?",["Feioso","Trope\xE7o","M\xE3ozinha","Primo Itt"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_4q9",r:"1-3",c:3,es:["\xBFCu\xE1ntos estados forman la regi\xF3n Sudeste de Brasil?",["6","5","3","4"]],pt:["Quantos estados formam a regi\xE3o Sudeste do Brasil?",["6","5","3","4"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q10",r:"1-3",c:3,es:['\xBFC\xF3mo se llama el personaje "despistado" de la pel\xEDcula Buscando a Nemo?',["Darla","Doty","Boleta","Dory"]],pt:['Qual \xE9 o nome da personagem "esquecida" do filme Procurando Nemo?',["Darla","Doty","Boleta","Dory"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_3Q12",r:"1-3",c:2,es:["La creaci\xF3n del estado de Tocantins y el estallido de la Guerra de las Malvinas ocurrieron en la d\xE9cada de:",["60","70","80","90"]],pt:["A cria\xE7\xE3o do estado do Tocantins e a eclos\xE3o da Guerra das Malvinas ocorreram na d\xE9cada de:",["60","70","80","90"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q20",r:"1-3",c:0,es:["\xBFCu\xE1l es la lengua oficial de Angola?",["Portugu\xE9s","Franc\xE9s","Ingl\xE9s","Suajili"]],pt:["Qual \xE9 a l\xEDngua oficial de Angola?",["Portugu\xEAs","Franc\xEAs","Ingl\xEAs","Sua\xEDli"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q11",r:"1-3",c:3,es:["\xBFC\xF3mo se llamaba el cantante de los Mamonas Assassinas?",["Samuel","J\xFAlio","Bento","Dinho"]],pt:["Qual era o nome do vocalista dos Mamonas Assassinas?",["Samuel","J\xFAlio","Bento","Dinho"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_4q12",r:"1-3",c:3,es:["El \xD3scar a la mejor pel\xEDcula de 2009 fue para:",["Avatar","Mi nombre es Harvey Milk","El curioso caso de Benjamin Button","Slumdog Millionaire"]],pt:["O Oscar de melhor filme de 2009 ficou com:",["Avatar","Milk","O Curioso Caso de Benjamin Button","Quem Quer Ser um Milion\xE1rio?"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q21",r:"1-3",c:0,es:["\xBFQu\xE9 cargo ten\xEDa Dilma Rousseff antes de ser presidenta de Brasil?",["Ministra jefa de la Casa Civil","Ministra de Educaci\xF3n","Ministra de Ciencia y Tecnolog\xEDa","Ministra de Minas y Energ\xEDa"]],pt:["Qual cargo Dilma Rousseff ocupava antes de ser presidente do Brasil?",["Ministra-chefe da Casa Civil","Ministra da Educa\xE7\xE3o","Ministra da Ci\xEAncia e Tecnologia","Ministra de Minas e Energia"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_3q13",r:"1-3",c:2,es:["\xBFCu\xE1l de estos pa\xEDses no pertenece a la OTAN?",["Albania","Estados Unidos","Cuba","Turqu\xEDa"]],pt:["Qual destes pa\xEDses n\xE3o faz parte da OTAN?",["Alb\xE2nia","Estados Unidos","Cuba","Turquia"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_3q14",r:"1-3",c:2,es:["\xBFC\xF3mo se llama el cangrejo amigo de Ariel en La sirenita?",["Scuttle","Flounder","Sebasti\xE1n","Trit\xF3n"]],pt:["Qual \xE9 o nome do caranguejo amigo de Ariel em A Pequena Sereia?",["Sabid\xE3o","Linguado","Sebasti\xE3o","Trit\xE3o"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_3q15",r:"1-3",c:2,es:["\xBFC\xF3mo se llama la abuela del Pato Donald?",["Matilda","Linda","Donalda","Donilda"]],pt:["Qual \xE9 o nome da av\xF3 do Pato Donald?",["Matilda","Linda","Donalda","Donilda"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_1q22",r:"1-3",c:0,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 el billete de cien reales?",["1994","1996","1997","1999"]],pt:["Em que ano foi lan\xE7ada a nota de cem reais?",["1994","1996","1997","1999"]],t:["Variado","Variado"]},{id:"Q1_3Q16",r:"1-3",c:2,es:["\xBFCu\xE1l es la sigla del estado de Roraima?",["RA","RO","RR","RM"]],pt:["Qual \xE9 a sigla do estado de Roraima?",["RA","RO","RR","RM"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_3q17",r:"1-3",c:2,es:["\xBFEn qu\xE9 billete del real aparece el guacamayo?",["2 reales","5 reales","10 reales","50 reales"]],pt:["Em qual nota do real aparece a arara?",["2 reais","5 reais","10 reais","50 reais"]],t:["Variado","Variado"]},{id:"Q1_4q13",r:"1-3",c:3,es:["El andaluz y el mangalarga son razas de:",["Cerdo","Perro","Cabra","Caballo"]],pt:["Andaluz e mangalarga s\xE3o ra\xE7as de:",["Porco","Cachorro","Cabra","Cavalo"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q18",r:"1-3",c:2,es:["\xBFEn qu\xE9 a\xF1o naci\xF3 el cantante canadiense Justin Bieber?",["1996","1995","1994","1993"]],pt:["Em que ano nasceu o cantor canadense Justin Bieber?",["1996","1995","1994","1993"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_3q19",r:"1-3",c:2,es:["\xBFDe qu\xE9 superh\xE9roe es Hal Jordan el nombre verdadero?",["Lobezno","Flecha Verde","Linterna Verde","Hulk"]],pt:["Hal Jordan \xE9 o nome verdadeiro de qual super-her\xF3i?",["Wolverine","Arqueiro Verde","Lanterna Verde","Hulk"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_3q20",r:"1-3",c:2,es:["\xBFEn qu\xE9 mes se celebra la fiesta de San Juan?",["Agosto","Mayo","Junio","Julio"]],pt:["Em que m\xEAs se comemora a festa de S\xE3o Jo\xE3o?",["Agosto","Maio","Junho","Julho"]],t:["Variado","Variado"]},{id:"Q1_2q22",r:"1-3",c:1,es:["\xBFDel incendio de qu\xE9 ciudad fue responsable el emperador Ner\xF3n?",["Mil\xE1n","Roma","Venecia","Viena"]],pt:["O imperador Nero foi respons\xE1vel pelo inc\xEAndio de qual cidade?",["Mil\xE3o","Roma","Veneza","Viena"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_3q21",r:"1-3",c:2,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 la primera versi\xF3n del iPhone?",["2005","2006","2007","2008"]],pt:["Em que ano foi lan\xE7ada a primeira vers\xE3o do iPhone?",["2005","2006","2007","2008"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_1q23",r:"1-3",c:0,es:["\xBFCu\xE1ntos a\xF1os tiene Ben en los dibujos animados Ben 10?",["10","12","14","17"]],pt:["Quantos anos Ben tem no desenho Ben 10?",["10","12","14","17"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_3q22",r:"1-3",c:2,es:["\xBFCu\xE1ntos n\xFAmeros primos hay del 1 al 10?",["2","3","4","5"]],pt:["Quantos n\xFAmeros primos existem de 1 a 10?",["2","3","4","5"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q",r:"4-6",c:1,es:["\xBFDe qu\xE9 saga son personajes C-3PO y R2-D2?",["Star Trek","Star Wars","Metroid"]],pt:["C-3PO e R2-D2 s\xE3o personagens de qual saga?",["Star Trek","Star Wars","Metroid"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q",r:"4-6",c:0,es:["\xBFEn qu\xE9 pa\xEDs fue ejecutado el Che Guevara?",["Bolivia","Argentina","Chile"]],pt:["Em que pa\xEDs Che Guevara foi executado?",["Bol\xEDvia","Argentina","Chile"]],t:["Historia","Hist\xF3ria"]},{id:"Q4_2q2",r:"4-6",c:1,es:["\xBFCada cu\xE1nto tiempo se puede ver el cometa Halley?",["76 meses","76 a\xF1os","26 a\xF1os"]],pt:["De quanto em quanto tempo o cometa Halley pode ser visto?",["76 meses","76 anos","26 anos"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q3",r:"4-6",c:1,es:["\xBFCu\xE1l de estas razas de perro es originaria de Alemania?",["Pug","Caniche","Malt\xE9s"]],pt:["Qual destas ra\xE7as de cachorro \xE9 origin\xE1ria da Alemanha?",["Pug","Poodle","Malt\xEAs"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1Q2",r:"4-6",c:0,es:["\xBFQui\xE9n fue el rival de Barack Obama en las elecciones presidenciales de EE. UU. de 2008?",["John McCain","Sarah Palin","Al Gore"]],pt:["Quem foi o advers\xE1rio de Barack Obama nas elei\xE7\xF5es presidenciais dos EUA de 2008?",["John McCain","Sarah Palin","Al Gore"]],t:["Historia","Hist\xF3ria"]},{id:"Q4_3q",r:"4-6",c:2,es:["\xBFQu\xE9 selecci\xF3n de rugby es conocida como los All Blacks?",["Inglaterra","Sud\xE1frica","Nueva Zelanda"]],pt:["Qual sele\xE7\xE3o de r\xFAgbi \xE9 conhecida como All Blacks?",["Inglaterra","\xC1frica do Sul","Nova Zel\xE2ndia"]],t:["Deportes","Esportes"]},{id:"Q4_2Q4",r:"4-6",c:1,es:["\xBFC\xF3mo se escribe 1999 en n\xFAmeros romanos?",["MDMLXIX","MCMXCIX","MCMLCIX"]],pt:["Como se escreve 1999 em algarismos romanos?",["MDMLXIX","MCMXCIX","MCMLCIX"]],t:["Variado","Variado"]},{id:"Q4_3q2",r:"4-6",c:2,es:["\xBFCu\xE1ntas semanas fue n\xFAmero 1 del ranking mundial el extenista Gustavo Kuerten?",["13","23","43"]],pt:["Por quantas semanas o ex-tenista Gustavo Kuerten foi n\xFAmero 1 do ranking mundial?",["13","23","43"]],t:["Deportes","Esportes"]},{id:"Q4_3q3",r:"4-6",c:2,es:['\xBFEn honor a qu\xE9 jugador se le puso el apodo "Magic" a la exjugadora de baloncesto Paula?',["Larry Bird","Michael Jordan","Earvin Johnson"]],pt:['Em homenagem a qual jogador a ex-jogadora de basquete Paula ganhou o apelido "Magic"?',["Larry Bird","Michael Jordan","Earvin Johnson"]],t:["Deportes","Esportes"]},{id:"Q4_1q3",r:"4-6",c:0,es:["\xBFCu\xE1ntos estados forman la regi\xF3n Norte de Brasil?",["7","6","5"]],pt:["Quantos estados formam a regi\xE3o Norte do Brasil?",["7","6","5"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_1q4",r:"4-6",c:0,es:["\xBFC\xF3mo se llama el primer boxeador que derrot\xF3 a Mike Tyson en un combate profesional?",["James Douglas","Evander Holyfield","Lennox Lewis"]],pt:["Qual o nome do primeiro boxeador a derrotar Mike Tyson numa luta profissional?",["James Douglas","Evander Holyfield","Lennox Lewis"]],t:["Deportes","Esportes"]},{id:"Q4_3q4",r:"4-6",c:2,es:["\xBFDe qu\xE9 raza es Copito, el perro de M\xF3nica y su pandilla?",["Pequin\xE9s","Bich\xF3n fris\xE9","Lhasa apso"]],pt:["Qual \xE9 a ra\xE7a do Floquinho, cachorro da Turma da M\xF4nica?",["Pequin\xEAs","Bichon fris\xE9","Lhasa apso"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q5",r:"4-6",c:1,es:["\xBFCu\xE1l es el \xFAnico de los siete enanitos que lleva gafas?",["Mudito","Sabio","Gru\xF1\xF3n"]],pt:["Qual \xE9 o \xFAnico dos sete an\xF5es que usa \xF3culos?",["Dunga","Mestre","Zangado"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_1q5",r:"4-6",c:0,es:["\xBFCu\xE1l de estos nombres no es de las Tortugas Ninja?",["William","Donatello","Leonardo"]],pt:["Qual destes nomes n\xE3o \xE9 de uma Tartaruga Ninja?",["William","Donatello","Leonardo"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_1q6",r:"4-6",c:0,es:["\xBFCu\xE1l de estos animales se mueve m\xE1s despacio?",["Caracol","Tortuga","Perezoso"]],pt:["Qual destes animais se move mais devagar?",["Caracol","Tartaruga","Bicho-pregui\xE7a"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1q7",r:"4-6",c:0,es:["El nombre de pila del actor Will Smith es:",["Willard","Wilson","William"]],pt:["O primeiro nome do ator Will Smith \xE9:",["Willard","Wilson","William"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_3q5",r:"4-6",c:2,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 la primera versi\xF3n del iPod?",["2003","2002","2001"]],pt:["Em que ano foi lan\xE7ada a primeira vers\xE3o do iPod?",["2003","2002","2001"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q6",r:"4-6",c:1,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 el billete de veinte reales?",["1994","2002","2000"]],pt:["Em que ano foi lan\xE7ada a nota de vinte reais?",["1994","2002","2000"]],t:["Variado","Variado"]},{id:"Q4_1q8",r:"4-6",c:0,es:["\xBFC\xF3mo se llama el caballo del P\xE1jaro Loco en los dibujos animados?",["Pie de Trapo","Picolino","Percy Delicado"]],pt:["Qual \xE9 o nome do cavalo do Pica-Pau no desenho animado?",["P\xE9 de Pano","Picolino","Percy Delicado"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q7",r:"4-6",c:1,es:["\xBFA cu\xE1ntos \xD3scar fue nominada la pel\xEDcula Titanic?",["11","8","14"]],pt:["A quantos Oscars o filme Titanic foi indicado?",["11","8","14"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q9",r:"4-6",c:0,es:["La novela de Clarice Lispector La hora de la estrella ten\xEDa como protagonista a:",["Macab\xE9a","Macabela","Suzana"]],pt:["O romance A Hora da Estrela, de Clarice Lispector, tinha como protagonista:",["Macab\xE9a","Macabela","Suzana"]],t:["Variado","Variado"]},{id:"Q4_2q8",r:"4-6",c:1,es:["\xBFC\xF3mo se llama el peri\xF3dico en el que trabaja Clark Kent, Superman?",["Diario de Metr\xF3polis","El Planeta Diario","Diario de Manhattan"]],pt:["Qual \xE9 o nome do jornal onde Clark Kent, o Super-Homem, trabalha?",["Di\xE1rio de Metr\xF3polis","Planeta Di\xE1rio","Di\xE1rio de Manhattan"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_3q6",r:"4-6",c:2,es:["\xBFQu\xE9 empresa fabrica las armas que usa el Coyote para intentar cazar al Correcaminos?",["Ace","Acm","Acme"]],pt:["Qual empresa fabrica as armas que o Coiote usa para tentar pegar o Papa-L\xE9guas?",["Ace","Acm","Acme"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_1q10",r:"4-6",c:0,es:["Adem\xE1s de en Brasil, \xBFen qu\xE9 pa\xEDs de Am\xE9rica del Sur viven los ind\xEDgenas yanomamis?",["Venezuela","Ecuador","Colombia"]],pt:["Al\xE9m do Brasil, em que pa\xEDs da Am\xE9rica do Sul vivem os \xEDndios ianom\xE2mis?",["Venezuela","Equador","Col\xF4mbia"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_2q9",r:"4-6",c:1,es:["\xBFEn qu\xE9 pa\xEDs se celebra el Festival de Jazz de Montreux?",["Canad\xE1","Suiza","Francia"]],pt:["Em que pa\xEDs acontece o Festival de Jazz de Montreux?",["Canad\xE1","Su\xED\xE7a","Fran\xE7a"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_1q11",r:"4-6",c:0,es:["El villano del Chapul\xEDn Colorado, Tripaseca, lo interpretaba el actor que tambi\xE9n hac\xEDa de:",["Don Ram\xF3n","Quico","Profesor Jirafales"]],pt:["O vil\xE3o do Chapolin Colorado, Tripa Seca, era interpretado pelo ator que tamb\xE9m fazia o:",["Seu Madruga","Quico","Professor Girafales"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_3q7",r:"4-6",c:2,es:["\xBFQu\xE9 puede provocar el \xF3xido nitroso?",["Sue\xF1o","Hinchaz\xF3n de la piel","Risa"]],pt:["O que o \xF3xido nitroso pode provocar?",["Sono","Incha\xE7o da pele","Riso"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1q12",r:"4-6",c:0,es:["\xBFCu\xE1l de estos hechos ocurri\xF3 en 1914?",["Apertura del canal de Panam\xE1","Hundimiento del Titanic","Primer hombre en la Luna"]],pt:["Qual destes fatos ocorreu em 1914?",["Abertura do Canal do Panam\xE1","Naufr\xE1gio do Titanic","Primeiro homem na Lua"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q13",r:"4-6",c:0,es:["\xBFCu\xE1l es el s\xEDmbolo qu\xEDmico del oro?",["Au","Ou","Ag"]],pt:["Qual \xE9 o s\xEDmbolo qu\xEDmico do ouro?",["Au","Ou","Ag"]],t:["Variado","Variado"]},{id:"Q4_2q10",r:"4-6",c:1,es:["\xBFA qu\xE9 filo pertenece Patricio, la estrella de mar de Bob Esponja?",["Celent\xE9reos","Equinodermos","Cordados"]],pt:["A que filo pertence o Patrick, a estrela-do-mar do Bob Esponja?",["Celenterados","Equinodermos","Cordados"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q11",r:"4-6",c:1,es:["\xBFCu\xE1l de estas lenguas es oficial en m\xE1s de 50 pa\xEDses?",["Espa\xF1ol","Ingl\xE9s","Suajili"]],pt:["Qual destas l\xEDnguas \xE9 oficial em mais de 50 pa\xEDses?",["Espanhol","Ingl\xEAs","Sua\xEDli"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_3q8",r:"4-6",c:2,es:["\xBFCu\xE1l de estos huesos est\xE1 m\xE1s cerca de la cabeza?",["Peron\xE9","Tibia","F\xE9mur"]],pt:["Qual destes ossos fica mais perto da cabe\xE7a?",["F\xEDbula","T\xEDbia","F\xEAmur"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q12",r:"4-6",c:1,es:["\xBFEn qu\xE9 a\xF1o se lanz\xF3 YouTube?",["2003","2005","2007"]],pt:["Em que ano o YouTube foi lan\xE7ado?",["2003","2005","2007"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1q14",r:"4-6",c:0,es:["\xBFEn qu\xE9 ciudad se entrega la Palma de Oro?",["Cannes","Londres","Par\xEDs"]],pt:["Em que cidade \xE9 entregue a Palma de Ouro?",["Cannes","Londres","Paris"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q15",r:"4-6",c:0,es:["\xBFEn cu\xE1l de estos lugares es menos probable que llueva?",["Ant\xE1rtida","Desierto del Sahara","Desierto de Gobi"]],pt:["Em qual destes lugares \xE9 menos prov\xE1vel que chova?",["Ant\xE1rtida","Deserto do Saara","Deserto de Gobi"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_2q13",r:"4-6",c:1,es:["\xBFCu\xE1ntas hamburguesas vende McDonald's, aproximadamente, por segundo en todo el mundo?",["19","190","1900"]],pt:["Quantos hamb\xFArgueres o McDonald's vende, aproximadamente, por segundo no mundo?",["19","190","1900"]],t:["Variado","Variado"]},{id:"Q4_2q14",r:"4-6",c:1,es:["\xBFDe qu\xE9 arte marcial era cintur\xF3n negro Elvis Presley?",["Aikido","K\xE1rate","Judo"]],pt:["Elvis Presley era faixa preta em qual arte marcial?",["Aikido","Carat\xEA","Jud\xF4"]],t:["Deportes","Esportes"]},{id:"Q4_3q9",r:"4-6",c:2,es:["\xBFQu\xE9 personaje interpretaba Roberto G\xF3mez Bola\xF1os en El Chavo del 8?",["Don Ram\xF3n","Quico","El Chavo"]],pt:["Qual personagem Roberto G\xF3mez Bola\xF1os interpretava em Chaves?",["Seu Madruga","Quico","Chaves"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q15",r:"4-6",c:1,es:["\xBFCu\xE1l de estas personas naci\xF3 el 29 de agosto?",["Michael Jordan","Michael Jackson","Michael Schumacher"]],pt:["Qual destas pessoas nasceu em 29 de agosto?",["Michael Jordan","Michael Jackson","Michael Schumacher"]],t:["Deportes","Esportes"]},{id:"Q4_3q10",r:"4-6",c:2,es:["\xBFC\xF3mo se llama el inframundo en la mitolog\xEDa griega?",["Lucifer","Dante","Hades"]],pt:["Como se chama o mundo inferior na mitologia grega?",["L\xFAcifer","Dante","Hades"]],t:["Variado","Variado"]},{id:"Q4_1q16",r:"4-6",c:0,es:["\xBFEn qu\xE9 a\xF1o abri\xF3 McDonald's su primer restaurante en Brasil?",["1979","1985","1989"]],pt:["Em que ano o McDonald's abriu seu primeiro restaurante no Brasil?",["1979","1985","1989"]],t:["Variado","Variado"]},{id:"Q4_1q17",r:"4-6",c:0,es:["\xBFEn qu\xE9 a\xF1o se aprob\xF3 la primera Constituci\xF3n de Brasil?",["1824","1891","1934"]],pt:["Em que ano foi aprovada a primeira Constitui\xE7\xE3o do Brasil?",["1824","1891","1934"]],t:["Historia","Hist\xF3ria"]},{id:"Q7_2q",r:"7",c:0,es:["El rey Julien, de la pel\xEDcula Madagascar, es un:",["L\xE9mur","Aye-aye"]],pt:["O rei Julien, do filme Madagascar, \xE9 um:",["L\xEAmure","Aye-aye"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_2q2",r:"7",c:0,es:["\xBFCu\xE1l es el apellido de Jason, el asesino de la saga Viernes 13?",["Voorhees","Palmer"]],pt:["Qual \xE9 o sobrenome de Jason, o assassino da saga Sexta-Feira 13?",["Voorhees","Palmer"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_2q3",r:"7",c:0,es:["\xBFQui\xE9n naci\xF3 antes?",["Madonna","Michael Jackson"]],pt:["Quem nasceu primeiro?",["Madonna","Michael Jackson"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q7_2q4",r:"7",c:0,es:["\xBFEn qu\xE9 a\xF1o se celebr\xF3 el primer evento de UFC en Brasil?",["1998","2001"]],pt:["Em que ano aconteceu o primeiro evento do UFC no Brasil?",["1998","2001"]],t:["Deportes","Esportes"]},{id:"Q7_2q5",r:"7",c:0,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 el perfume femenino Chanel n.\xBA 5?",["1921","1931"]],pt:["Em que ano foi lan\xE7ado o perfume feminino Chanel n\xBA 5?",["1921","1931"]],t:["Variado","Variado"]},{id:"Q7_3q",r:"7",c:1,es:["\xBFCu\xE1ntos n\xFAmeros 5 aparecen al contar del 1 al 100?",["10","19"]],pt:["Quantos n\xFAmeros 5 aparecem contando de 1 a 100?",["10","19"]],t:["Variado","Variado"]},{id:"Q7_3q2",r:"7",c:1,es:['\xBFDe qu\xE9 color est\xE1 escrita la frase "Ordem e Progresso" en la bandera de Brasil?',["Blanco","Verde"]],pt:['De que cor est\xE1 escrita a frase "Ordem e Progresso" na bandeira do Brasil?',["Branco","Verde"]],t:["Variado","Variado"]},{id:"Q7_2q6",r:"7",c:0,es:["\xBFEn qu\xE9 mes se celebra el Oktoberfest de M\xFAnich?",["Septiembre","Octubre"]],pt:["Em que m\xEAs acontece a Oktoberfest de Munique?",["Setembro","Outubro"]],t:["Variado","Variado"]},{id:"Q7_3q3",r:"7",c:1,es:["\xBFQu\xE9 pesa m\xE1s?",["100 libras","50 kilogramos"]],pt:["O que pesa mais?",["100 libras","50 quilos"]],t:["Variado","Variado"]},{id:"Q7_2q7",r:"7",c:0,es:["\xBFQu\xE9 animal aparece en el billete de cien reales?",["Mero","Tortuga"]],pt:["Qual animal aparece na nota de cem reais?",["Garoupa","Tartaruga"]],t:["Variado","Variado"]},{id:"Q7_2q8",r:"7",c:0,es:["\xBFQui\xE9n naci\xF3 antes, del d\xFAo Victor & L\xE9o?",["Victor","L\xE9o"]],pt:["Quem nasceu primeiro, da dupla Victor & Leo?",["Victor","Leo"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q7_3q4",r:"7",c:1,es:["\xBFD\xF3nde viven los ping\xFCinos?",["Polo Norte","Polo Sur"]],pt:["Onde vivem os pinguins?",["Polo Norte","Polo Sul"]],t:["Variado","Variado"]},{id:"Q7_2q9",r:"7",c:0,es:["\xBFCu\xE1ntas franjas horizontales tiene la bandera de los Estados Unidos?",["13","21"]],pt:["Quantas listras horizontais tem a bandeira dos Estados Unidos?",["13","21"]],t:["Variado","Variado"]},{id:"Q7_3q5",r:"7",c:1,es:["\xBFQui\xE9n naci\xF3 antes?",["Beethoven","Mozart"]],pt:["Quem nasceu primeiro?",["Beethoven","Mozart"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q7_2q10",r:"7",c:0,es:["\xBFQu\xE9 d\xEDa de la semana fue el 11 de septiembre de 2001?",["Martes","Jueves"]],pt:["Em que dia da semana caiu o 11 de setembro de 2001?",["Ter\xE7a-feira","Quinta-feira"]],t:["Variado","Variado"]},{id:"Q7_2q11",r:"7",c:0,es:["\xBFEn qu\xE9 mes termin\xF3 la Segunda Guerra Mundial?",["Septiembre","Mayo"]],pt:["Em que m\xEAs terminou a Segunda Guerra Mundial?",["Setembro","Maio"]],t:["Deportes","Esportes"]},{id:"Q7_3q6",r:"7",c:1,es:["\xBFQu\xE9 tenemos m\xE1s en el cuerpo?",["Cromosomas","Huesos"]],pt:["O que temos mais no corpo?",["Cromossomos","Ossos"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_3q7",r:"7",c:1,es:["\xBFCu\xE1l es la moneda oficial de Vietnam?",["Ding","Dong"]],pt:["Qual \xE9 a moeda oficial do Vietn\xE3?",["Ding","Dong"]],t:["Geograf\xEDa","Geografia"]},{id:"Q7_3q8",r:"7",c:1,es:["\xBFFue 2009 un a\xF1o bisiesto?",["S\xED","No"]],pt:["2009 foi um ano bissexto?",["Sim","N\xE3o"]],t:["Variado","Variado"]},{id:"Q7_2q12",r:"7",c:0,es:["\xBFCu\xE1ntas veces gan\xF3 Ayrton Senna el Gran Premio de M\xF3naco de F\xF3rmula 1?",["6","7"]],pt:["Quantas vezes Ayrton Senna venceu o Grande Pr\xEAmio de M\xF4naco de F\xF3rmula 1?",["6","7"]],t:["Deportes","Esportes"]},{id:"Q7_2q13",r:"7",c:0,es:["Si hay un viernes 13, \xBFen qu\xE9 d\xEDa de la semana empieza el mes?",["Domingo","Jueves"]],pt:["Se h\xE1 uma sexta-feira 13, em que dia da semana come\xE7a o m\xEAs?",["Domingo","Quinta-feira"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_2q14",r:"7",c:0,es:["\xBFCu\xE1ntos puntos tendr\xEDa que ganar un tenista para vencer un partido individual en Wimbledon sin perder ning\xFAn punto?",["72","96"]],pt:["Quantos pontos um tenista teria de ganhar para vencer uma partida de simples em Wimbledon sem perder nenhum ponto?",["72","96"]],t:["Deportes","Esportes"]},{id:"Q7_2q15",r:"7",c:0,es:["\xBFC\xF3mo se llama el barco de Davy Jones en Piratas del Caribe: En el fin del mundo?",["The Flying Dutchman","The Black Pearl"]],pt:["Como se chama o navio de Davy Jones em Piratas do Caribe: No Fim do Mundo?",["The Flying Dutchman","The Black Pearl"]],t:["Cine y series","Cinema e s\xE9ries"]}],aniv:[{id:"aniv0",r:"any",c:2,es:["\xBFEn qu\xE9 cadena se emite Atrapa un mill\xF3n?",["Cuatro","Telecinco","Antena 3","La 1"]],pt:["Em que canal \xE9 exibido o Atrapa un mill\xF3n?",["Cuatro","Telecinco","Antena 3","La 1"]],t:["El programa","O programa"]},{id:"aniv1",r:"any",c:3,es:["\xBFQu\xE9 productora hace Atrapa un mill\xF3n?",["Globomedia","Boomerang TV","Zeppelin","Gestmusic"]],pt:["Qual produtora faz o Atrapa un mill\xF3n?",["Globomedia","Boomerang TV","Zeppelin","Gestmusic"]],t:["El programa","O programa"]},{id:"aniv2",r:"any",c:1,es:["\xBFDe qu\xE9 programa brit\xE1nico es adaptaci\xF3n Atrapa un mill\xF3n?",["The Chase","The Million Pound Drop Live","The Cube","Who Wants to Be a Millionaire?"]],pt:["De qual programa brit\xE2nico o Atrapa un mill\xF3n \xE9 adapta\xE7\xE3o?",["The Chase","The Million Pound Drop Live","The Cube","Who Wants to Be a Millionaire?"]],t:["Or\xEDgenes","Origens"]},{id:"aniv3",r:"any",c:2,es:["\xBFEn qu\xE9 cadena brit\xE1nica se emit\xEDa el formato original?",["Sky One","ITV","Channel 4","BBC One"]],pt:["Em qual canal brit\xE2nico era exibido o formato original?",["Sky One","ITV","Channel 4","BBC One"]],t:["Or\xEDgenes","Origens"]},{id:"aniv4",r:"any",c:1,es:["\xBFQu\xE9 empresa cre\xF3 el formato del programa?",["Disney","Endemol","Fremantle","Mediapro"]],pt:["Qual empresa criou o formato do programa?",["Disney","Endemol","Fremantle","Mediapro"]],t:["Or\xEDgenes","Origens"]},{id:"aniv5",r:"any",c:2,es:["\xBFQui\xE9n present\xF3 la primera etapa de Atrapa un mill\xF3n?",["Manel Fuentes","Roberto Leal","Carlos Sobera","Arturo Valls"]],pt:["Quem apresentou a primeira fase do Atrapa un mill\xF3n?",["Manel Fuentes","Roberto Leal","Carlos Sobera","Arturo Valls"]],t:["Presentadores","Apresentadores"]},{id:"aniv6",r:"any",c:3,es:["\xBFQui\xE9n presenta la nueva etapa estrenada en 2023?",["Carlos Sobera","Arturo Valls","Jorge Fern\xE1ndez","Manel Fuentes"]],pt:["Quem apresenta a nova fase estreada em 2023?",["Carlos Sobera","Arturo Valls","Jorge Fern\xE1ndez","Manel Fuentes"]],t:["Presentadores","Apresentadores"]},{id:"aniv7",r:"any",c:1,es:["\xBFQu\xE9 presentador se puso al frente de algunos programas en 2024?",["Jorge Fern\xE1ndez","Juanra Bonet","Carlos Sobera","Christian G\xE1lvez"]],pt:["Qual apresentador comandou alguns programas em 2024?",["Jorge Fern\xE1ndez","Juanra Bonet","Carlos Sobera","Christian G\xE1lvez"]],t:["Presentadores","Apresentadores"]},{id:"aniv8",r:"any",c:2,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 Atrapa un mill\xF3n?",["2009","2013","2011","2008"]],pt:["Em que ano estreou o Atrapa un mill\xF3n?",["2009","2013","2011","2008"]],t:["Fechas","Datas"]},{id:"aniv9",r:"any",c:3,es:["\xBFQu\xE9 d\xEDa de la semana se emit\xEDa al principio?",["Lunes","Mi\xE9rcoles","Domingo","Viernes"]],pt:["Em que dia da semana era exibido no in\xEDcio?",["Segunda-feira","Quarta-feira","Domingo","Sexta-feira"]],t:["Fechas","Datas"]},{id:"aniv10",r:"any",c:1,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 la nueva etapa del programa?",["2025","2023","2021","2019"]],pt:["Em que ano estreou a nova fase do programa?",["2025","2023","2021","2019"]],t:["Fechas","Datas"]},{id:"aniv11",r:"any",c:3,es:["\xBFQu\xE9 programa sustituy\xF3 a Atrapa un mill\xF3n en septiembre de 2014?",["La ruleta de la suerte","Pasapalabra","\xA1Ahora Caigo!","\xA1Boom!"]],pt:["Qual programa substituiu o Atrapa un mill\xF3n em setembro de 2014?",["La ruleta de la suerte","Pasapalabra","\xA1Ahora Caigo!","\xA1Boom!"]],t:["Fechas","Datas"]},{id:"aniv12",r:"any",c:2,es:["\xBFCu\xE1ntos fajos de billetes recibe la pareja en la versi\xF3n semanal?",["100","50","40","20"]],pt:["Quantos ma\xE7os de notas a dupla recebe na vers\xE3o semanal?",["100","50","40","20"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv13",r:"any",c:2,es:["\xBFCu\xE1nto vale cada fajo en la versi\xF3n semanal?",["10.000 \u20AC","5.000 \u20AC","25.000 \u20AC","50.000 \u20AC"]],pt:["Quanto vale cada ma\xE7o na vers\xE3o semanal?",["10.000 \u20AC","5.000 \u20AC","25.000 \u20AC","50.000 \u20AC"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv14",r:"any",c:3,es:["\xBFDe qu\xE9 valor son los billetes de los fajos?",["100 \u20AC","500 \u20AC","20 \u20AC","50 \u20AC"]],pt:["De que valor s\xE3o as notas dos ma\xE7os?",["100 \u20AC","500 \u20AC","20 \u20AC","50 \u20AC"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv15",r:"any",c:0,es:["\xBFCu\xE1ntos billetes tiene cada fajo?",["500","250","1.000","100"]],pt:["Quantas notas tem cada ma\xE7o?",["500","250","1.000","100"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv16",r:"any",c:0,es:["\xBFCu\xE1ntas preguntas hay en la versi\xF3n semanal?",["8","12","10","7"]],pt:["Quantas perguntas h\xE1 na vers\xE3o semanal?",["8","12","10","7"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv17",r:"any",c:1,es:["\xBFCu\xE1ntas opciones tiene la \xFAltima pregunta del semanal?",["5","2","3","4"]],pt:["Quantas op\xE7\xF5es tem a \xFAltima pergunta da vers\xE3o semanal?",["5","2","3","4"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv18",r:"any",c:1,es:["\xBFCu\xE1ntos segundos hay para repartir el dinero?",["120","60","90","30"]],pt:["Quantos segundos h\xE1 para distribuir o dinheiro?",["120","60","90","30"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv19",r:"any",c:3,es:["\xBFCu\xE1ntas trampillas hay que dejar vac\xEDas como m\xEDnimo?",["Tres","Ninguna","Dos","Una"]],pt:["Quantos al\xE7ap\xF5es \xE9 preciso deixar vazios, no m\xEDnimo?",["Tr\xEAs","Nenhum","Dois","Um"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv20",r:"any",c:0,es:["\xBFCon cu\xE1nto dinero empezaba la edici\xF3n diaria?",["200.000 \u20AC","100.000 \u20AC","1.000.000 \u20AC","500.000 \u20AC"]],pt:["Com quanto dinheiro come\xE7ava a edi\xE7\xE3o di\xE1ria?",["200.000 \u20AC","100.000 \u20AC","1.000.000 \u20AC","500.000 \u20AC"]],t:["El diario","O di\xE1rio"]},{id:"aniv21",r:"any",c:1,es:["\xBFCu\xE1nto val\xEDa cada fajo en el diario?",["25.000 \u20AC","5.000 \u20AC","10.000 \u20AC","1.000 \u20AC"]],pt:["Quanto valia cada ma\xE7o no di\xE1rio?",["25.000 \u20AC","5.000 \u20AC","10.000 \u20AC","1.000 \u20AC"]],t:["El diario","O di\xE1rio"]},{id:"aniv22",r:"any",c:3,es:["\xBFC\xF3mo se llamaba el comod\xEDn que cambiaba la pregunta en el diario?",["Pregunta extra","Pregunta bomba","Pregunta de oro","Pregunta estrella"]],pt:["Como se chamava o curinga que trocava a pergunta no di\xE1rio?",["Pergunta extra","Pergunta bomba","Pergunta de ouro","Pergunta estrela"]],t:["El diario","O di\xE1rio"]},{id:"aniv23",r:"any",c:1,es:["\xBFC\xF3mo se llamaba el tema en el que solo responde un concursante?",["En solitario","Solo uno","Uno para todos","Cara a cara"]],pt:["Como se chamava o tema em que s\xF3 um concorrente responde?",["Sozinho","Solo uno","Um por todos","Cara a cara"]],t:["El diario","O di\xE1rio"]},{id:"aniv24",r:"any",c:1,es:["\xBFEn qu\xE9 pregunta aparec\xEDa el tema \xABSolo uno\xBB?",["La 8","La 6","La 1","La 3"]],pt:["Em que pergunta aparecia o tema \xABSolo uno\xBB?",["A 8\xAA","A 6\xAA","A 1\xAA","A 3\xAA"]],t:["El diario","O di\xE1rio"]},{id:"aniv25",r:"any",c:3,es:["Al triplicar en la \xFAltima pregunta del diario, \xBFcu\xE1ntas opciones hab\xEDa?",["5","3","2","4"]],pt:["Ao triplicar na \xFAltima pergunta do di\xE1rio, quantas op\xE7\xF5es havia?",["5","3","2","4"]],t:["El diario","O di\xE1rio"]},{id:"aniv26",r:"any",c:0,es:["\xBFQu\xE9 permit\xEDa el \xABPase al Mill\xF3n\xBB tras la cuarta pregunta?",["Una pregunta extra pagando la mitad","Duplicar el dinero","Llamar a un amigo","Saltar una pregunta"]],pt:["O que permitia o \xABPase al Mill\xF3n\xBB depois da quarta pergunta?",["Uma pergunta extra pagando a metade","Dobrar o dinheiro","Ligar para um amigo","Pular uma pergunta"]],t:["El diario","O di\xE1rio"]},{id:"aniv27",r:"any",c:0,es:["\xBFTras qu\xE9 programa se emit\xEDa el diario por las tardes?",["\xA1Ahora Caigo!","Pasapalabra","Saber y ganar","El precio justo"]],pt:["Depois de qual programa era exibido o di\xE1rio \xE0 tarde?",["\xA1Ahora Caigo!","Pasapalabra","Saber y ganar","El precio justo"]],t:["El diario","O di\xE1rio"]},{id:"aniv28",r:"any",c:3,es:["\xBFCu\xE1l es el mayor premio repartido en el programa?",["325.000 \u20AC","1.000.000 \u20AC","750.000 \u20AC","550.000 \u20AC"]],pt:["Qual \xE9 o maior pr\xEAmio j\xE1 pago no programa?",["325.000 \u20AC","1.000.000 \u20AC","750.000 \u20AC","550.000 \u20AC"]],t:["R\xE9cords","Recordes"]},{id:"aniv29",r:"any",c:1,es:["\xBFCu\xE1nto dinero se perdi\xF3 en Atrapa dos millones, la mayor p\xE9rdida?",["2.000.000 \u20AC","1.900.000 \u20AC","950.000 \u20AC","1.500.000 \u20AC"]],pt:["Quanto dinheiro se perdeu no Atrapa dos millones, a maior perda?",["2.000.000 \u20AC","1.900.000 \u20AC","950.000 \u20AC","1.500.000 \u20AC"]],t:["R\xE9cords","Recordes"]},{id:"aniv30",r:"any",c:3,es:["\xBFQu\xE9 premio gan\xF3 el programa en 2011 junto al TP de Oro?",["Premio Max","Premio Goya","Premio Feroz","Premio Ondas"]],pt:["Que pr\xEAmio o programa ganhou em 2011, al\xE9m do TP de Oro?",["Pr\xEAmio Max","Pr\xEAmio Goya","Pr\xEAmio Feroz","Pr\xEAmio Ondas"]],t:["R\xE9cords","Recordes"]},{id:"aniv31",r:"any",c:0,es:["\xBFQu\xE9 parentesco ten\xEDan Mar\xEDa y Pablo, que se llevaron los 200.000 \u20AC del diario en 2013?",["Hermanos","Primos","Pareja","Padre e hija"]],pt:["Que parentesco tinham Mar\xEDa e Pablo, que levaram os 200.000 \u20AC do di\xE1rio em 2013?",["Irm\xE3os","Primos","Casal","Pai e filha"]],t:["R\xE9cords","Recordes"]}],tele:[{id:"tele0",r:"any",c:2,es:["\xBFQui\xE9n present\xF3 Pasapalabra en Telecinco?",["Carlos Sobera","Jaime Cantizano","Christian G\xE1lvez","Roberto Leal"]],pt:["Quem apresentou o Pasapalabra na Telecinco?",["Carlos Sobera","Jaime Cantizano","Christian G\xE1lvez","Roberto Leal"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele1",r:"any",c:2,es:["\xBFEn qu\xE9 cadena se estren\xF3 Pasapalabra en 2000?",["Telecinco","Cuatro","Antena 3","La 1"]],pt:["Em que canal estreou o Pasapalabra em 2000?",["Telecinco","Cuatro","Antena 3","La 1"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele2",r:"any",c:2,es:["\xBFCu\xE1ntas definiciones tiene el rosco de Pasapalabra?",["27","30","25","20"]],pt:["Quantas defini\xE7\xF5es tem o \xABrosco\xBB do Pasapalabra?",["27","30","25","20"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele3",r:"any",c:2,es:["\xBFCu\xE1nto sube el bote de Pasapalabra cada d\xEDa que no se gana?",["1.200 \u20AC","600 \u20AC","6.000 \u20AC","10.000 \u20AC"]],pt:["Quanto sobe o pr\xEAmio acumulado do Pasapalabra a cada dia sem vencedor?",["1.200 \u20AC","600 \u20AC","6.000 \u20AC","10.000 \u20AC"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele4",r:"any",c:0,es:["\xBFQu\xE9 se corta en las bombas de \xA1Boom!?",["Cables","Cintas","Cuerdas","Mechas"]],pt:["O que se corta nas bombas do \xA1Boom!?",["Fios","Fitas","Cordas","Pavios"]],t:["\xA1Boom!","\xA1Boom!"]},{id:"tele5",r:"any",c:3,es:["\xBFCu\xE1ntos programas estuvieron Los Lobos en \xA1Boom!?",["250","350","150","505"]],pt:["Em quantos programas Los Lobos participaram no \xA1Boom!?",["250","350","150","505"]],t:["\xA1Boom!","\xA1Boom!"]},{id:"tele6",r:"any",c:0,es:["\xBFDe qu\xE9 pa\xEDs es el formato original de \xA1Boom!?",["Israel","Jap\xF3n","Italia","M\xE9xico"]],pt:["De que pa\xEDs \xE9 o formato original do \xA1Boom!?",["Israel","Jap\xE3o","It\xE1lia","M\xE9xico"]],t:["\xA1Boom!","\xA1Boom!"]},{id:"tele7",r:"any",c:0,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 \xA1Ahora caigo!?",["2011","2014","2005","2008"]],pt:["Em que ano estreou o \xA1Ahora caigo!?",["2011","2014","2005","2008"]],t:["Antena 3","Antena 3"]},{id:"tele8",r:"any",c:0,es:["\xBFQui\xE9n present\xF3 El precio justo en 1988?",["Joaqu\xEDn Prat","Juan y Medio","Carlos Lozano","Jordi Hurtado"]],pt:["Quem apresentou o El precio justo em 1988?",["Joaqu\xEDn Prat","Juan y Medio","Carlos Lozano","Jordi Hurtado"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele9",r:"any",c:2,es:["\xBFEn qu\xE9 cadena se emite Saber y ganar?",["Telecinco","Antena 3","La 2","La 1"]],pt:["Em que canal \xE9 exibido o Saber y ganar?",["Telecinco","Antena 3","La 2","La 1"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele10",r:"any",c:2,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 Saber y ganar?",["1985","2003","1997","1991"]],pt:["Em que ano estreou o Saber y ganar?",["1985","2003","1997","1991"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele11",r:"any",c:2,es:["\xBFCu\xE1ntos concursantes compiten en Saber y ganar?",["4","6","3","2"]],pt:["Quantos concorrentes competem no Saber y ganar?",["4","6","3","2"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele12",r:"any",c:0,es:["\xBFQui\xE9n present\xF3 el Millonario en Antena 3 en 2009?",["Antonio Garrido","Juanra Bonet","Arturo Valls","Carlos Sobera"]],pt:["Quem apresentou o Milion\xE1rio na Antena 3 em 2009?",["Antonio Garrido","Juanra Bonet","Arturo Valls","Carlos Sobera"]],t:["Millonarios","Milion\xE1rios"]},{id:"tele13",r:"any",c:3,es:["\xBFCu\xE1l era el premio m\xE1ximo de 50 por 15?",["100 millones de pesetas","15 millones de pesetas","5 millones de pesetas","50 millones de pesetas"]],pt:["Qual era o pr\xEAmio m\xE1ximo do 50 por 15?",["100 milh\xF5es de pesetas","15 milh\xF5es de pesetas","5 milh\xF5es de pesetas","50 milh\xF5es de pesetas"]],t:["Millonarios","Milion\xE1rios"]},{id:"tele14",r:"any",c:0,es:["\xBFQu\xE9 comod\xEDn del Millonario elimina dos respuestas incorrectas?",["50:50","La llamada","El cambio","El p\xFAblico"]],pt:["Qual ajuda do Milion\xE1rio elimina duas respostas erradas?",["50:50","A liga\xE7\xE3o","A troca","A plateia"]],t:["Millonarios","Milion\xE1rios"]},{id:"tele15",r:"any",c:1,es:["\xBFDe qu\xE9 concurso estadounidense viene La ruleta de la suerte?",["Jeopardy!","Wheel of Fortune","The Chase","The Price is Right"]],pt:["De qual programa americano vem La ruleta de la suerte?",["Jeopardy!","Wheel of Fortune","The Chase","The Price is Right"]],t:["Formatos","Formatos"]},{id:"tele16",r:"any",c:0,es:["\xBFQu\xE9 concurso brit\xE1nico adaptaba El cazador?",["The Chase","The Alphabet Game","The Million Pound Drop","The Cube"]],pt:["Qual programa brit\xE2nico El cazador adaptava?",["The Chase","The Alphabet Game","The Million Pound Drop","The Cube"]],t:["Formatos","Formatos"]},{id:"tele17",r:"any",c:0,es:["\xBFQu\xE9 dos juegos mezclaba Lingo?",["Bingo y Master Mind","Domin\xF3 y Ajedrez","Parch\xEDs y Oca","Mus y Tute"]],pt:["Quais dois jogos o Lingo misturava?",["Bingo e Master Mind","Domin\xF3 e Xadrez","Ludo e Jogo do Ganso","Mus e Tute"]],t:["Formatos","Formatos"]},{id:"tele18",r:"any",c:3,es:["\xBFQui\xE9n presenta Tu cara me suena?",["Roberto Leal","Jes\xFAs V\xE1zquez","Arturo Valls","Manel Fuentes"]],pt:["Quem apresenta o Tu cara me suena?",["Roberto Leal","Jes\xFAs V\xE1zquez","Arturo Valls","Manel Fuentes"]],t:["Antena 3","Antena 3"]},{id:"tele19",r:"any",c:3,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 Tu cara me suena?",["2005","2016","2019","2011"]],pt:["Em que ano estreou o Tu cara me suena?",["2005","2016","2019","2011"]],t:["Antena 3","Antena 3"]},{id:"tele20",r:"any",c:1,es:["\xBFC\xF3mo se llamaba la calabaza del Un, dos, tres?",["Crack","Ruperta","Petra","Botilde"]],pt:["Como se chamava a ab\xF3bora do Un, dos, tres?",["Crack","Ruperta","Petra","Botilde"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele21",r:"any",c:3,es:["\xBFQui\xE9n interpretaba a Don Cicuta en el Un, dos, tres?",["Chicho Ib\xE1\xF1ez Serrador","Joaqu\xEDn Prat","Kiko Ledgard","Valent\xEDn Tornos"]],pt:["Quem interpretava Don Cicuta no Un, dos, tres?",["Chicho Ib\xE1\xF1ez Serrador","Joaqu\xEDn Prat","Kiko Ledgard","Valent\xEDn Tornos"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele22",r:"any",c:3,es:["\xBFQu\xE9 era el gallifante de Juego de ni\xF1os?",["Mitad gallina, mitad jirafa","Mitad gato, mitad elefante","Mitad gallo, mitad le\xF3n","Mitad gallo, mitad elefante"]],pt:["O que era o gallifante do Juego de ni\xF1os?",["Metade galinha, metade girafa","Metade gato, metade elefante","Metade galo, metade le\xE3o","Metade galo, metade elefante"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele23",r:"any",c:3,es:["\xBFQui\xE9n present\xF3 El precio justo en Telecinco en 2021?",["Agust\xEDn Bravo","Jorge Javier V\xE1zquez","Joaqu\xEDn Prat","Carlos Sobera"]],pt:["Quem apresentou o El precio justo na Telecinco em 2021?",["Agust\xEDn Bravo","Jorge Javier V\xE1zquez","Joaqu\xEDn Prat","Carlos Sobera"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele24",r:"any",c:3,es:["\xBFQui\xE9n present\xF3 \xA1All\xE1 t\xFA! en el verano de 2005?",["Jordi Hurtado","Christian G\xE1lvez","Manel Fuentes","Arturo Valls"]],pt:["Quem apresentou o \xA1All\xE1 t\xFA! no ver\xE3o de 2005?",["Jordi Hurtado","Christian G\xE1lvez","Manel Fuentes","Arturo Valls"]],t:["Formatos","Formatos"]},{id:"tele25",r:"any",c:0,es:["\xBFCon cu\xE1nto dinero empezaban las parejas de Atrapa un mill\xF3n semanal?",["1 mill\xF3n de euros","2 millones de euros","100.000 \u20AC","500.000 \u20AC"]],pt:["Com quanto dinheiro come\xE7avam as duplas do Atrapa un mill\xF3n semanal?",["1 milh\xE3o de euros","2 milh\xF5es de euros","100.000 \u20AC","500.000 \u20AC"]],t:["Antena 3","Antena 3"]}]}};var Dy=`
#tvCred{position:fixed;inset:0;z-index:40;pointer-events:none;font-family:"Helvetica Neue",Arial,sans-serif;color:#fff}
#tvCred.skippable{pointer-events:auto;cursor:pointer}
#tvCred .card{position:absolute;left:0;right:0;bottom:14vh;text-align:center;opacity:0;transform:translateY(2vh);transition:opacity .7s ease,transform .9s ease;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}
#tvCred .card.on{opacity:1;transform:none}
#tvCred .card.center{bottom:auto;top:50%;transform:translateY(-46%)}
#tvCred .card.center.on{transform:translateY(-50%)}
#tvCred .card small{display:block;font-size:clamp(13px,2.6vh,30px);letter-spacing:.32em;text-transform:uppercase;color:#e8eefc;text-shadow:0 2px 10px #000,0 0 2px #000;font-weight:600}
#tvCred .card b{display:block;margin-top:.8vh;font-size:clamp(24px,6.4vh,74px);font-weight:900;letter-spacing:.04em;background:linear-gradient(#fff,#fff 45%,#d7e1f5);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 3px 6px #000c)}
#tvCred .card i{display:block;margin-top:.6vh;font-style:normal;font-size:clamp(13px,2.4vh,26px);color:#ffd34d;letter-spacing:.12em;text-shadow:0 2px 8px #000}
#tvCred .card img{display:block;margin:0 auto 1.2vh;max-width:min(70vw,900px);max-height:34vh;filter:drop-shadow(0 6px 22px #000)}
#tvCred .card .line{width:min(40vw,420px);height:2px;margin:1.4vh auto 0;background:linear-gradient(90deg,#0000,var(--acc,#ffb000),#0000)}
#tvCred .bars{position:absolute;inset:0;pointer-events:none;background:linear-gradient(#000 0,#000 7vh,#0000 7vh,#0000 calc(100% - 7vh),#000 calc(100% - 7vh));opacity:0;transition:opacity .8s}
#tvCred.cine .bars{opacity:1}
#tvCred .rollBox{position:absolute;top:0;bottom:0;right:0;width:min(50vw,700px);overflow:hidden;background:linear-gradient(90deg,#0000 0,#000c 12%,#000e 30%,#000f);opacity:0;transition:opacity 1s}
#tvCred.full .rollBox{left:0;right:0;width:auto;background:radial-gradient(ellipse at center,#000a,#000e)}
#tvCred .rollBox.on{opacity:1}
#tvCred .roll{position:absolute;left:16%;right:5%;top:0;text-align:center;will-change:transform;text-shadow:0 2px 6px #000}
#tvCred .roll img{display:block;margin:0 auto 3vh;max-width:80%;max-height:22vh}
#tvCred .roll h2{font-size:clamp(20px,4.6vh,48px);font-weight:900;margin:0 0 4vh;color:#fff;letter-spacing:.06em}
#tvCred .roll h4{margin:4.2vh 0 .6vh;font-size:clamp(11px,2.1vh,22px);letter-spacing:.24em;text-transform:uppercase;color:var(--acc,#ffb000);font-weight:700}
#tvCred .roll p{margin:.2vh 0;font-size:clamp(15px,3vh,32px);font-weight:700;color:#fff}
#tvCred .roll p.sm{font-size:clamp(11px,2vh,20px);font-weight:400;color:#cfd6e6;line-height:1.45}
#tvCred .roll .end{margin-top:9vh}
#tvCred .roll .end b{display:block;font-size:clamp(18px,4vh,44px);font-weight:900;letter-spacing:.1em}
#tvCred .skip{position:absolute;right:14px;bottom:12px;background:#0009;border:1px solid #fff6;border-radius:16px;padding:5px 12px;font-size:clamp(11px,2.2vh,16px);opacity:.8}
`,ls=null;function Ap(){if(ls)return ls;let n=document.createElement("style");return n.textContent=Dy,document.head.appendChild(n),ls=document.createElement("div"),ls.id="tvCred",ls.innerHTML='<div class="bars"></div><div class="cards"></div><div class="rollBox"><div class="roll"></div></div><div class="skip"></div>',ls.style.display="none",document.body.appendChild(ls),ls}var Li=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Bd(n,e){return new Promise(t=>{let i=setTimeout(t,n);e.cancel.push(()=>{clearTimeout(i),t()})})}function wp(n,e,t){let i={skipped:!1,cancel:[],done:!1},s=()=>{i.skipped||(i.skipped=!0,i.cancel.forEach(o=>o()))},r=o=>{(o.key==="Escape"||o.key===" "||o.key==="Enter")&&s()};n.classList.add("skippable"),n.onclick=s,addEventListener("keydown",r),n.querySelector(".skip").textContent=e||"Saltar \u23ED";let a=setInterval(()=>{t&&t()&&s()},200);return i.end=()=>{removeEventListener("keydown",r),clearInterval(a),n.onclick=null,n.classList.remove("skippable")},i}async function Cp(n,{accent:e="#ffb000",skipText:t,aborted:i,letterbox:s=!0}={}){let r=Ap();r.style.display="",r.style.setProperty("--acc",e),r.classList.toggle("cine",s),r.classList.remove("full");let a=r.querySelector(".cards");a.innerHTML="";let o=wp(r,t,i);for(let c=0;c<n.length&&!o.skipped;c++){let l=n[c];l.cam&&l.cam(c);let u=document.createElement("div");u.className="card"+(l.center?" center":""),u.innerHTML=`${l.img?`<img src="${l.img}" alt="">`:""}${l.small?`<small>${Li(l.small)}</small>`:""}${l.big?`<b>${Li(l.big)}</b>`:""}${l.sub?`<i>${Li(l.sub)}</i>`:""}<div class="line"></div>`,a.appendChild(u),await Bd(60,o),u.classList.add("on"),await Bd((l.ms||2600)*(window.__credSlow||1)/(window.__cineSpeed||1),o),u.classList.remove("on"),await Bd(700,o),u.remove()}return a.innerHTML="",r.classList.remove("cine"),o.end(),await new Promise(c=>setTimeout(c,300)),r.style.display="none",!o.skipped}async function Rp({head:n={},sections:e=[],end:t={},accent:i="#ffb000",speed:s=1,full:r=!1,skipText:a,aborted:o,onFrame:c}={}){let l=Ap();l.style.display="",l.style.setProperty("--acc",i),l.classList.toggle("full",r),l.classList.add("cine");let u=l.querySelector(".rollBox"),h=l.querySelector(".roll");h.innerHTML=`${n.img?`<img src="${n.img}" alt="">`:""}${n.title?`<h2>${Li(n.title)}</h2>`:""}`+e.map(w=>`<h4>${Li(w.h)}</h4>${(w.p||[]).map(y=>`<p>${Li(y)}</p>`).join("")}${(w.sm||[]).map(y=>`<p class="sm">${Li(y)}</p>`).join("")}`).join("")+`<div class="end">${t.big?`<b>${Li(t.big)}</b>`:""}${(t.small||[]).map(w=>`<p class="sm">${Li(w)}</p>`).join("")}</div>`;let d=wp(l,a,o);u.classList.add("on");let f=u.clientHeight,g=h.scrollHeight,_=f*.085*s,m=f,p=Math.max(-g+f*.62,-g),M=m;return h.style.transform=`translateY(${M}px)`,await new Promise(w=>{let y=performance.now(),T=0,E=R=>{if(d.skipped)return w();let x=Math.min(.5,(R-y)/1e3);if(y=R,c&&c(x),M>p)M=Math.max(p,M-_*x*(window.__cineSpeed||1)),h.style.transform=`translateY(${M}px)`;else if((T+=x*(window.__cineSpeed||1))>3)return w();requestAnimationFrame(E)};requestAnimationFrame(E),d.cancel.push(w)}),u.classList.remove("on"),l.classList.remove("cine"),d.end(),await new Promise(w=>setTimeout(w,700)),l.style.display="none",h.innerHTML="",!d.skipped}var Ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ny=new ts(-1,1,1,-1,0,1),zd=class extends Vt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},Uy=new zd,pi=class{constructor(e){this._mesh=new ve(Uy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ny)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Rc=class extends _n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $a=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pc=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rc(Ar),this.copyPass.material.blending=Un,this.timer=new Ta}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$a!==void 0&&(a instanceof $a?i=!0:a instanceof Pc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends _n{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Pp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var wr=class n extends _n{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wt(r,a,{type:Dt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new wt(r,a,{type:Dt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new wt(r,a,{type:Dt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Pp;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xn.clone(Ar.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader,premultipliedAlpha:!0,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new Et,this._fsQuad=new pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new yt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};wr.BlurDirectionX=new fe(1,0);wr.BlurDirectionY=new fe(0,1);var eo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Dc=class extends _n{constructor(){super(),this.isOutputPass=!0,this.uniforms=xn.clone(eo.uniforms),this.material=new lr({name:eo.name,uniforms:this.uniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader}),this._fsQuad=new pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===La?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ia&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var to={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},no={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Nc={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Uc=class extends _n{constructor(){super(),this._edgesRT=new wt(1,1,{depthBuffer:!1,type:Dt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new wt(1,1,{depthBuffer:!1,type:Dt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new jt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=kt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new jt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Ht,this._searchTexture.minFilter=Ht,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=xn.clone(to.uniforms),this._materialEdges=new yt({defines:Object.assign({},to.defines),uniforms:this._uniformsEdges,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader}),this._uniformsWeights=xn.clone(no.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new yt({defines:Object.assign({},no.defines),uniforms:this._uniformsWeights,vertexShader:no.vertexShader,fragmentShader:no.fragmentShader}),this._uniformsBlend=xn.clone(Nc.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new yt({uniforms:this._uniformsBlend,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader}),this._fsQuad=new pi(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var Oc=class extends ys{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Gt;e.deleteAttribute("uv");let t=new qt({side:Xt}),i=new qt,s=new Ri(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Nn(e,i,6),o=new Zt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ve(e,Cr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ve(e,Cr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new ve(e,Cr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ve(e,Cr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new ve(e,Cr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ve(e,Cr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Cr(n){return new _a({color:0,emissive:16777215,emissiveIntensity:n})}function Ip(n,e,{envIntensity:t=.35,shadowLight:i=null,shadowCasters:s=[],shadowReceivers:r=[]}={}){n.outputColorSpace=ln,n.toneMapping=Pi;let a=new _r(n);e.environment=a.fromScene(new Oc,.04).texture,a.dispose(),"environmentIntensity"in e&&(e.environmentIntensity=t);let o=ke.level==="alta"||ke.level==="ultra"||ke.level==="auto"&&!ke.touch;if(o&&i){n.shadowMap.enabled=!0,n.shadowMap.type=El,i.castShadow=!0;let c=ke.level==="ultra"?4096:2048;i.shadow.mapSize.set(c,c),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=4,s.forEach(l=>l.traverse(u=>{u.isMesh&&(u.castShadow=!0)})),r.forEach(l=>l.traverse(u=>{u.isMesh&&(u.receiveShadow=!0)}))}return ke.shadows=o&&!!i,{shadows:ke.shadows}}function Lp(n,e,t,{strength:i=.55,radius:s=.45,threshold:r=.82}={}){let a=ke.level!=="media"&&!/[?&]nopost=1/.test(location.search),o={enabled:a,composer:null,bloom:null};if(!a)return o.render=()=>n.render(e,t),o.setSize=()=>{},o.setPixelRatio=()=>{},o;let c=n.getDrawingBufferSize(new fe),u=n.capabilities.isWebGL2?ke.level==="ultra"||ke.level==="alta"?4:ke.touch?2:4:0,h=new wt(c.x,c.y,{type:Dt,samples:u}),d=new Ic(n,h);d.addPass(new Lc(e,t));let f=new wr(new fe(c.x/2,c.y/2),i,s,r);return d.addPass(f),d.addPass(new Dc),u||d.addPass(new Uc(c.x,c.y)),o.composer=d,o.bloom=f,o.render=()=>{o.enabled?d.render():n.render(e,t)},o.setSize=(g,_)=>{d.setPixelRatio(n.getPixelRatio()),d.setSize(g,_)},o.setPixelRatio=()=>{ke.lowFx&&(o.enabled=!1),d.setPixelRatio(n.getPixelRatio());let g=n.getSize(new fe);d.setSize(g.x,g.y)},window.__post=o,o}var Be=n=>document.querySelector(n),Fr=location.search,jc=/[?&]fast=1/.test(Fr),cs=/[?&]bot=1/.test(Fr),Zc=jc?.04:1,In=n=>new Promise(e=>setTimeout(e,n*Zc)),co=n=>n[Math.floor(Math.random()*n.length)],Vp=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},He=(n,e,t)=>new N(n,e,t),Xd=["A","B","C","D"],Fc={es:{m_mini:"Minijuego",m_train:"Entrenamiento",m_tv:"Programa TV",m_hist:"Historia del programa",m_walk:"Pasear por el plat\xF3",m_custom:"\u2699 Personalizar",m_specials:"Programas especiales:",sp_tele:"Prime Time: Concursos TV",sp_diario:"Diario 200.000 \u20AC",sp_aniv:"Especial Aniversario",sp_dos:"Atrapa dos millones",disc:"Remake no oficial hecho por un fan, sin \xE1nimo de lucro. Atrapa un mill\xF3n es un formato de Endemol / Gestmusic emitido por Antena 3. Sin relaci\xF3n oficial con el programa. Presentador y concursantes son personajes ficticios.",wm:"Remake de fans \xB7 no oficial",h_play:"EN JUEGO",h_bank:"SIN COLOCAR",stop:"PARAR",star:"\u2605 PREGUNTA ESTRELLA",all:"TODO",q:"Pregunta",of:"de",topicT:"Elegid tema",host:"Presentador",lost:"PERDIDO",safe:"\xA1SALVADO!",youWin:"\xA1OS LLEV\xC1IS!",gameOver:"FIN DEL JUEGO",menu:"Men\xFA",again:"Jugar otra vez",next:"Otra pregunta",trainT:"Entrenamiento",trainS:"Practica una pregunta: aqu\xED no se pierde dinero.",opts:"opciones",unlimited:"Tiempo ilimitado",pool:"Preguntas",p_general:"Cultura general",p_tele:"Concursos de TV",p_aniv:"Atrapa un mill\xF3n",wouldKeep:"Habr\xEDas conservado",emptyRule:"\xA1Deja al menos una trampilla vac\xEDa!",allInRule:"\xDAltima pregunta: todo el dinero en una sola trampilla",placeAll:"Coloca todo el dinero antes de parar",finT:"Elegid la pregunta final",triple:"TRIPLICAR",tripleS:"4 opciones \xB7 20 s \xB7 \xD73",double:"DUPLICAR",doubleS:"3 opciones \xB7 10 s \xB7 \xD72",classic:"CL\xC1SICA",classicS:"2 opciones \xB7 60 s",soloT:"SOLO UNO",custT:"Personalizar programa",c_pair:"Pareja",c_random:"Aleatoria",c_nameA:"Nombre concursante 1",c_nameB:"Nombre concursante 2",c_time:"Tiempo por pregunta",c_voice:"Voces (espa\xF1ol)",c_chat:"Charla de la pareja",c_jokes:"Bromas del presentador",dl3d:"Descargar APK (3D)",dlOrig:"Descargar APK (minijuego original)",c_music:"Volumen m\xFAsica",c_low:"Calidad baja (m\xF3viles lentos)",c_quality:"Calidad de imagen",q_auto:"Auto (recomendada)",q_media:"Media (m\xF3viles lentos)",q_alta:"Alta",q_ultra:"Ultra (4K/5K)",q_now:"Ahora",q_tex:"texturas",q_note:"Auto usa la resoluci\xF3n nativa de la pantalla y baja sola si va a menos de 40 FPS. Ultra renderiza hasta 5120 px (4K/5K) con efectos completos. Al cambiarla, el juego se recarga.",c_save:"Guardar",c_lang:"Idioma",histT:"Historia de Atrapa un mill\xF3n",histWalk:"Pasear por el plat\xF3",back:"Volver",walkHint:"Mu\xE9vete con WASD / flechas o el joystick. Arrastra para mirar.",skip:"Saltar",minT:"Minijuego",minS:"7 preguntas \xB7 60 s \xB7 usa las flechas azules \xB7 deja una mesa vac\xEDa \xB7 en la \xFAltima, todo a una",start:"EMPEZAR",rulesT:"Reglas",rules:["Empiezas con 1 mill\xF3n en 40 fajos.","Tienes 60 segundos para repartir el dinero con las flechas.","Siempre debes dejar una de las trampillas vac\xEDa.","El dinero de las trampillas incorrectas cae al foso.","En la \xFAltima pregunta, todo a una."],mult:"multiplicado",noVoicePt:""},pt:{m_mini:"Minijogo",m_train:"Treino",m_tv:"Programa de TV",m_hist:"Hist\xF3ria do programa",m_walk:"Passear pelo est\xFAdio",m_custom:"\u2699 Personalizar",m_specials:"Programas especiais:",sp_tele:"Hor\xE1rio nobre: Concursos TV",sp_diario:"Di\xE1rio 200.000 \u20AC",sp_aniv:"Especial Anivers\xE1rio",sp_dos:"Atrapa dos millones",disc:"Remake n\xE3o oficial feito por um f\xE3, sem fins lucrativos. Atrapa un mill\xF3n \xE9 um formato da Endemol / Gestmusic exibido pela Antena 3. Sem rela\xE7\xE3o oficial com o programa. Apresentador e concorrentes s\xE3o personagens fict\xEDcios.",wm:"Remake de f\xE3 \xB7 n\xE3o oficial",h_play:"EM JOGO",h_bank:"SEM COLOCAR",stop:"PARAR",star:"\u2605 PERGUNTA ESTRELA",all:"TUDO",q:"Pergunta",of:"de",topicT:"Escolham o tema",host:"Apresentador",lost:"PERDEU",safe:"SALVO!",youWin:"VOC\xCAS LEVAM!",gameOver:"FIM DE JOGO",menu:"Menu",again:"Jogar de novo",next:"Outra pergunta",trainT:"Treino",trainS:"Pratique uma pergunta: aqui n\xE3o se perde dinheiro.",opts:"op\xE7\xF5es",unlimited:"Tempo ilimitado",pool:"Perguntas",p_general:"Conhecimentos gerais",p_tele:"Concursos de TV",p_aniv:"Atrapa un mill\xF3n",wouldKeep:"Voc\xEA teria mantido",emptyRule:"Deixe pelo menos um al\xE7ap\xE3o vazio!",allInRule:"\xDAltima pergunta: todo o dinheiro num s\xF3 al\xE7ap\xE3o",placeAll:"Coloque todo o dinheiro antes de parar",finT:"Escolham a pergunta final",triple:"TRIPLICAR",tripleS:"4 op\xE7\xF5es \xB7 20 s \xB7 \xD73",double:"DOBRAR",doubleS:"3 op\xE7\xF5es \xB7 10 s \xB7 \xD72",classic:"CL\xC1SSICA",classicS:"2 op\xE7\xF5es \xB7 60 s",soloT:"SOLO UNO",custT:"Personalizar programa",c_pair:"Dupla",c_random:"Aleat\xF3ria",c_nameA:"Nome do concorrente 1",c_nameB:"Nome do concorrente 2",c_time:"Tempo por pergunta",c_voice:"Vozes (s\xF3 espanhol)",c_chat:"Conversa da dupla",c_jokes:"Piadas do apresentador",dl3d:"Baixar APK (3D)",dlOrig:"Baixar APK (minijogo original)",c_music:"Volume da m\xFAsica",c_low:"Qualidade baixa (celulares lentos)",c_quality:"Qualidade de imagem",q_auto:"Auto (recomendada)",q_media:"M\xE9dia (celulares lentos)",q_alta:"Alta",q_ultra:"Ultra (4K/5K)",q_now:"Agora",q_tex:"texturas",q_note:"Auto usa a resolu\xE7\xE3o nativa da tela e reduz sozinha se ficar abaixo de 40 FPS. Ultra renderiza at\xE9 5120 px (4K/5K) com efeitos completos. Ao mudar, o jogo recarrega.",c_save:"Salvar",c_lang:"Idioma",histT:"Hist\xF3ria do Atrapa un mill\xF3n",histWalk:"Passear pelo est\xFAdio",back:"Voltar",walkHint:"Ande com WASD / setas ou o joystick. Arraste para olhar.",skip:"Pular",minT:"Minijogo",minS:"7 perguntas \xB7 60 s \xB7 use as setas azuis \xB7 deixe uma mesa vazia \xB7 na \xFAltima, tudo numa s\xF3",start:"COME\xC7AR",rulesT:"Regras",rules:["Voc\xEA come\xE7a com 1 milh\xE3o em 40 ma\xE7os.","Tem 60 segundos para distribuir o dinheiro com as setas.","Sempre deve deixar um dos al\xE7ap\xF5es vazio.","O dinheiro dos al\xE7ap\xF5es errados cai no buraco.","Na \xFAltima pergunta, tudo numa s\xF3."],mult:"multiplicado"}},nn=localStorage.getItem("aum3d_lang")||"es",Ie=n=>Fc[nn]&&Fc[nn][n]!==void 0?Fc[nn][n]:Fc.es[n],us=()=>nn==="pt"?1:0;function Gp(){document.querySelectorAll("[data-i]").forEach(n=>{n.textContent=Ie(n.dataset.i)}),document.documentElement.lang=nn}var Oy=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Zn=n=>Oy(n)+" \u20AC",Bt=Object.assign({pair:-1,nameA:"",nameB:"",time:60,chat:!0,jokes:!0,low:!1},JSON.parse(localStorage.getItem("aum3d_cfg")||"{}")),Fy=()=>localStorage.setItem("aum3d_cfg",JSON.stringify(Bt));Bt.low&&!localStorage.getItem("aum3d_quality")&&(Rd("media"),Bt.low=!1);rp("aum3d_quality");var Yd=ke.level==="media"||/[?&]low=1/.test(Fr),fs=ap();fs.toneMapping=Pi;fs.toneMappingExposure=1.15;Be("#app").appendChild(fs.domElement);var bt=gp(fs,{lowQuality:Yd}),Ni=bt.scene,Lr=new rn(60,1,.05,120);function Qd(){let n=innerWidth,e=innerHeight;fs.setSize(n,e),window.__post&&window.__post.setSize(n,e),Lr.aspect=n/e,Lr.fov=n/e<1.2?75:58,Lr.updateProjectionMatrix()}addEventListener("resize",Qd);Qd();var tn=yp(bt,{lowQuality:Yd});window.__lights=tn;Ip(fs,Ni,{envIntensity:.2,shadowLight:bt.key,shadowReceivers:[bt.floor]});if(ke.shadows){let n=bt.key.shadow.camera;n.left=n.bottom=-13,n.right=n.top=13,n.near=1,n.far=40,n.updateProjectionMatrix(),bt.key.shadow.radius=5}var Dp=Lp(fs,Ni,Lr,{strength:.4,radius:.45,threshold:.95});Qd();var Rr=Mp(bt,{lowQuality:Yd});tn.buildGUI(Be("#glights"));Be("#glights").addEventListener("click",n=>{n.target.closest("[data-close]")&&Be("#glights").classList.add("hidden")});var un=Ja({shirt:15790320,jacket:6949418,pants:1710626,tie:2105376,hair:1708560,skin:14726284,glasses:!0,scale:1.04}),Is=He(-3.45,0,-1.75);un.position.copy(Is);Ni.add(un);var Jd=[He(-.5,0,-.55),He(.5,0,-.55)],By=[3065014,16752412,10182117,15817653,48121,9095462,15146294,16704576],Xc=0,Yt=[],Ui=[];function Gd(n){Yt.forEach(t=>Ni.remove(t)),Ui.forEach(t=>Ni.remove(t));let e=Ka[n];Xc=n,Yt=[0,1].map(t=>{let i=e[t*2+1]==="F",s=Ja({shirt:By[(n*2+t)%8],pants:2236987,hair:[2824720,7029795,1118481,13934615][(n+t)%4],skin:[15911328,14264188,13010498,16176568][(n+t*3)%4],long:i});return s.position.copy(Jd[t]),s.userData.voice=e[t*2+1],s.userData.name=t?Bt.nameB||e[2]:Bt.nameA||e[0],Ni.add(s),s}),Ui=[0,1].map(t=>{let i=Ja({shirt:[16777215,16726634][t],pants:3355460,hair:3810322,skin:1578e4,long:t===1,scale:.95}),s=zn(9.15,t?Math.PI-.62:.62,1.42);return i.position.copy(s),i.lookAt(0,s.y,0),i.userData.voice=t?"F":"M",i.userData.name=nn==="pt"?"Acompanhante":"Acompa\xF1ante",Ni.add(i),i})}Gd(Bt.pair>=0?Bt.pair:Math.floor(Math.random()*Ka.length));var Dr=new Map,Ls=null;function ro(n,e,t=1.6){return new Promise(i=>Dr.set(n,{to:e.clone(),speed:t,res:i}))}function Vc(n,e){n.rotation.y=Math.atan2(e.x-n.position.x,e.z-n.position.z)}function uo(){Dr.clear(),Yt.forEach((n,e)=>{n.position.copy(Jd[e]),n.rotation.set(0,0,0),n.visible=!0,n.userData.mood=null,n.userData.sink=0}),un.position.copy(Is),Vc(un,He(0,0,-.3)),un.visible=!0}uo();var mo=40,zy=new Gt(.28,.062,.15),Bc=fp(),Np=pp(),Hy=[new qt({map:Bc,roughness:.7}),new qt({map:Bc,roughness:.7}),new qt({map:Np,roughness:.6}),new qt({map:Np,roughness:.6}),new qt({map:Bc,roughness:.7}),new qt({map:Bc,roughness:.7})],ho=new Nn(zy,Hy,mo);ho.instanceMatrix.setUsage(Ga);ho.frustumCulled=!1;Ni.add(ho);var Kn=Array.from({length:mo},()=>({loc:"bank",pos:bt.bankPos.clone(),tgt:bt.bankPos.clone(),yaw:0,ty:0,rx:0,rz:0,vel:null,vis:!0})),Up=Ne.a0+.3;function ky(n,e){let t,i,s;if(n==="bank")t=zn((Ne.r0+Ne.r1)/2,Up,Ne.h),i=zn(1,Up).negate(),s=Math.atan2(i.x,i.z);else{let l=bt.doors[n];t=l.center.clone().setY(Ne.h-.01),i=l.inward,s=l.pivot.rotation.y}let r=He(i.z,0,-i.x),a=Math.floor(e/4),o=e%4,c=t.clone().addScaledVector(r,o%2?.15:-.15).addScaledVector(i,o<2?-.085:.085);return c.y+=.035+a*.064,[c,s]}function jd(){let n={bank:0,0:0,1:0,2:0,3:0};Kn.forEach(e=>{if(e.loc==="pit"||e.loc==="gone"||e.loc==="fall")return;let[t,i]=ky(e.loc,n[e.loc]++);e.tgt.copy(t),e.ty=i})}var Ut=n=>Kn.filter(e=>e.loc===n).length;function hs(n,e,t){let i=0;for(let s=mo-1;s>=0&&i<t;s--)Kn[s].loc===n&&(Kn[s].loc=e,i++);return jd(),i}function Kc(n){Kn.forEach((e,t)=>{e.vis=t<n,e.loc=t<n?"bank":"gone",e.vel=null,e.rx=e.rz=0}),jd(),Kn.forEach(e=>e.pos.copy(e.tgt))}function Wp(n){let e=bt.doors[n];Kn.forEach(t=>{t.loc===n&&(t.loc="fall",t.vel=He((Math.random()-.5)*.4,-.5-Math.random()*1.2,(Math.random()-.5)*.4),t.spin=He(Math.random()*4,Math.random()*3,Math.random()*4),t.restY=bt.pitY+.04+Math.random()*.25,t.door=n)})}var Pr=new ct,ao=new cn,Yc=new Mn,qp=He(1,1,1),Xp=He(0,0,0);function Vy(n){Kn.forEach((e,t)=>{if(e.loc==="fall")e.vel.y-=9.8*n,e.pos.addScaledVector(e.vel,n),e.rx+=e.spin.x*n,e.rz+=e.spin.z*n,e.yaw+=e.spin.y*n,e.pos.y<e.restY&&(e.pos.y=e.restY,e.loc="pit",e.rx=(Math.random()-.5)*.6,e.rz=(Math.random()-.5)*.6);else if(e.loc!=="pit"&&e.loc!=="gone"){let s=e.tgt.clone().sub(e.pos).length();if(s>.002){let r=Math.min(1,n*9);e.pos.lerp(e.tgt,r),s>.3&&(e.pos.y+=n*2.2*Math.min(1,s))}e.yaw+=(e.ty-e.yaw)*Math.min(1,n*8),e.rx*=.9,e.rz*=.9}Yc.set(e.rx,e.yaw,e.rz,"YXZ"),ao.setFromEuler(Yc),Pr.compose(e.pos,ao,e.vis&&e.loc!=="gone"?qp:Xp),ho.setMatrixAt(t,Pr)}),ho.instanceMatrix.needsUpdate=!0}var Yp=350,Nr=new Nn(new ci(.09,.05),new Et({side:on}),Yp);Nr.frustumCulled=!1;Ni.add(Nr);var Qp=Array.from({length:Yp},(n,e)=>(Nr.setColorAt(e,new Re().setHSL(Math.random()<.5?.12:Math.random(),.9,.6)),{p:He(0,-50,0),v:He(),r:He(Math.random()*6,Math.random()*6,Math.random()*6),a:0}));function Jp(){Qp.forEach(n=>{n.p.set((Math.random()-.5)*12,9+Math.random()*4,(Math.random()-.5)*12),n.v.set((Math.random()-.5)*.6,-1-Math.random()*1.2,(Math.random()-.5)*.6)})}function Gy(n){Qp.forEach((e,t)=>{if(e.p.y<-1){Pr.compose(e.p,ao.identity(),Xp),Nr.setMatrixAt(t,Pr);return}e.p.addScaledVector(e.v,n),e.p.x+=Math.sin(gi*2+t)*n*.4,Yc.set(gi*e.r.x,gi*e.r.y,gi*e.r.z),ao.setFromEuler(Yc),Pr.compose(e.p,ao,qp),Nr.setMatrixAt(t,Pr)}),Nr.instanceMatrix.needsUpdate=!0}var Wy=bt.screenTex.userData.g,Kt=1280,Gc=512,Ke={mode:"logo",sub:"",q:null,topics:null,time:null,info:null,hist:0};function io(n,e,t,i,s,r,a=4){let o=String(e).split(" "),c=[],l="";for(let d of o){let f=l?l+" "+d:d;n.measureText(f).width>s&&l?(c.push(l),l=d):l=f}l&&c.push(l);let u=c.slice(0,a),h=i-(u.length-1)*r/2;return u.forEach((d,f)=>n.fillText(d,t,h+f*r)),u.length}function zc(n){let e=n.createLinearGradient(0,0,0,Gc);e.addColorStop(0,"#3a0a5a"),e.addColorStop(1,"#12021e"),n.fillStyle=e,n.fillRect(0,0,Kt,Gc),n.strokeStyle="rgba(255,255,255,.05)";for(let t=0;t<Kt;t+=40)n.beginPath(),n.moveTo(t,0),n.lineTo(t,Gc),n.stroke()}function Zd(){let n=Wy;if(n.save(),n.textAlign="center",n.textBaseline="middle",Ke.mode==="logo")Ec(n,0,0,Kt,Gc,{sub:Ke.sub,t:gi});else if(Ke.mode==="topics")zc(n),n.fillStyle="#ffd34d",n.font="900 54px Arial",n.fillText(Ie("topicT").toUpperCase(),Kt/2,90),Ke.topics.forEach((e,t)=>{let i=Kt/2+(t?270:-270);n.fillStyle=t===Ke.topicSel?"#ffd34d":"#ff2a6a",Hd(n,i-240,190,480,180,30),n.fill(),n.fillStyle=t===Ke.topicSel?"#3a1a00":"#fff",n.font="900 52px Arial",io(n,e.toUpperCase(),i,280,440,56,2)});else if(Ke.mode==="question"&&Ke.q){zc(n);let e=Ke.q;n.fillStyle="rgba(0,0,0,.35)",Hd(n,150,30,Kt-300,190,24),n.fill(),n.fillStyle="#fff",n.font="bold 46px Arial",io(n,e.text,Kt/2,125,Kt-360,52,3);let t=e.opts.length,i=Math.min(260,(Kt-260)/t-16);e.opts.forEach((s,r)=>{let a=Kt/2+(r-(t-1)/2)*(i+16),o=e.state?e.state[r]:null;n.fillStyle=o==="ok"?"#11a34a":o==="bad"?"#3a0a14":"#7a0a5a",Hd(n,a-i/2,250,i,150,18),n.fill(),n.strokeStyle="#e2c8ff",n.lineWidth=3,n.stroke(),n.fillStyle="#ffd34d",n.font="900 34px Arial",n.fillText(Xd[r],a,278),n.fillStyle="#fff",n.font="bold 26px Arial",io(n,s,a,325,i-16,28,2),n.fillStyle="#ffd34d",n.font="900 30px Arial",n.fillText(e.amounts?Zn(e.amounts[r]):"",a,378)}),n.font="900 40px Arial",n.fillStyle="#fff",n.fillText(`${Ie("h_play")}: ${Zn(e.total||0)}`,Kt/2-200,455),Ke.time!==null&&(n.fillStyle=Ke.time<=10?"#ff3a3a":"#ffd34d",n.beginPath(),n.arc(Kt/2+260,455,44,0,Math.PI*2),n.fill(),n.fillStyle="#1a0010",n.font="900 44px monospace",n.fillText(String(Math.ceil(Ke.time)),Kt/2+260,458))}else if(Ke.mode==="money")zc(n),n.fillStyle="#fff",n.font="900 52px Arial",n.fillText(Ke.info[0],Kt/2,140),n.fillStyle="#ffd34d",n.font="900 150px Arial",n.fillText(Ke.info[1],Kt/2,300,Kt-200),Ke.info[2]&&(n.fillStyle="#e2c8ff",n.font="bold 40px Arial",n.fillText(Ke.info[2],Kt/2,420));else if(Ke.mode==="hist"){zc(n);let e=Cc[nn][Ke.hist%Cc[nn].length];Ec(n,40,30,300,120,{bg:!1}),n.fillStyle="#ffd34d",n.font="900 56px Arial",n.fillText(e[0].toUpperCase(),Kt/2+120,90),n.fillStyle="#fff",n.font="bold 34px Arial",io(n,e[1],Kt/2,320,Kt-280,40,7)}n.restore(),bt.screenTex.needsUpdate=!0}function Hd(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Qc(n){let e=bt.doors[n],t=Br[n];for(let i of[e.texF,e.texB]){let s=i.userData.g,r=512,a=288,o=t.state==="ok"?["#18c45a","#04501e"]:t.state==="bad"?["#5a0a14","#200006"]:t.off?["#1a1a22","#08080c"]:["#a0207a","#3a0636"],c=s.createLinearGradient(0,0,0,a);c.addColorStop(0,o[0]),c.addColorStop(1,o[1]),s.fillStyle=c,s.fillRect(0,0,r,a),s.textAlign="center",s.textBaseline="middle",t.off?(s.strokeStyle="#ff2a4a",s.lineWidth=14,s.beginPath(),s.moveTo(170,60),s.lineTo(342,228),s.moveTo(342,60),s.lineTo(170,228),s.stroke()):(s.fillStyle="#fff",s.beginPath(),s.arc(52,52,36,0,Math.PI*2),s.fill(),s.fillStyle="#7a0040",s.font="900 46px Arial",s.fillText(Xd[n],52,55),s.fillStyle="#fff",s.font="bold 40px Arial",io(s,t.text||"",270,105,400,44,3),s.fillStyle="#ffd34d",s.font="900 56px Arial",s.fillText(t.amount!=null?Zn(t.amount):"",r/2,238)),i.needsUpdate=!0}e.mat.emissive.set(t.state==="ok"?4259712:t.state==="bad"?16719936:t.off?1052688:16771316),e.mat.emissiveIntensity=t.off?.1:.9}var Br=[0,1,2,3].map(()=>({text:"",amount:null,state:null,off:!0}));function Ps(n){Br.forEach((e,t)=>{n(e,t),Qc(t)})}Ps(n=>{n.off=!0,n.state=null});var qe={mode:"orbit",pos:He(0,6,14),look:He(0,1,0),tPos:He(0,6,14),tLook:He(0,1,0),yaw:0,pitch:.3,lerp:2.2};function kn(n,e,t=!1,i=2.2){t=t||window.__snap,qe.mode="show",qe.tPos.copy(n),qe.tLook.copy(e),qe.lerp=i,t&&(qe.pos.copy(n),qe.look.copy(e))}var pt={wide:()=>kn(He(0,5.2,10.5),He(0,2.2,-3)),overview:()=>kn(He(6.5,7.5,11),He(0,1.8,-2.5)),desk:()=>kn(He(0,3.05,-2.35),He(0,.8,2.7)),front:()=>kn(He(0,2.3,5.8),He(0,1.2,-.5)),pair:()=>kn(He(.2,1.75,1.35),He(0,1.45,-.55)),pairOne:n=>{let e=Yt[n].position;kn(He(e.x*1.4,1.7,.75),He(e.x,1.55,e.z))},host:()=>kn(Is.clone().add(He(1.7,1.7,1.6)),Is.clone().add(He(0,1.5,0))),screen:()=>kn(He(0,4.2,1.5),He(0,6.3,-9)),door:n=>{let e=bt.doors[n];kn(e.center.clone().addScaledVector(e.inward,1.15).add(He(0,1.55,0)),e.center.clone().add(He(0,-.4,0)))},pit:n=>{let e=bt.doors[n];kn(e.center.clone().addScaledVector(e.inward,.5).add(He(0,2.4,0)),e.center.clone().add(He(0,-3,0)).addScaledVector(e.inward,-.1),!1,3)},comps:(n=0)=>{let e=Ui[n].position,t=Math.atan2(-e.z,e.x);kn(zn(5.2,t+(n?-.25:.25),2.9),e.clone().add(He(0,1.2,0)))},aud:()=>kn(He(0,2.4,1),He(0,3,-9))},Op=["wide","desk","front","overview","pair","screen"],kd=0;Be("#tbCam").onclick=()=>{qe.mode==="walk"&&Vr(!1),kd=(kd+1)%Op.length,pt[Op[kd]]()};var Oi={x:0,y:0,keys:{}},mi=null,Ft=null,Hc=null;fs.domElement.addEventListener("pointerdown",n=>{mi={id:n.pointerId,x:n.clientX,y:n.clientY}});addEventListener("pointermove",n=>{if(!mi||mi.id!==n.pointerId)return;let e=n.clientX-mi.x,t=n.clientY-mi.y;mi.x=n.clientX,mi.y=n.clientY,qe.yaw-=e*.006,qe.pitch=Math.max(-.3,Math.min(1.1,qe.pitch+t*.004))});addEventListener("pointerup",n=>{mi&&mi.id===n.pointerId&&(mi=null)});var zr=Be("#joy"),jp=Be("#knob"),Jc=null;zr.addEventListener("pointerdown",n=>{Jc=n.pointerId,zr.setPointerCapture(n.pointerId),Kp(n),n.stopPropagation()});zr.addEventListener("pointermove",n=>{n.pointerId===Jc&&Kp(n)});var Zp=n=>{n.pointerId===Jc&&(Jc=null,Oi.x=Oi.y=0,jp.style.transform="")};zr.addEventListener("pointerup",Zp);zr.addEventListener("pointercancel",Zp);function Kp(n){let e=zr.getBoundingClientRect(),t=n.clientX-(e.left+e.width/2),i=n.clientY-(e.top+e.height/2),s=Math.hypot(t,i),r=e.width/2-10;s>r&&(t*=r/s,i*=r/s),jp.style.transform=`translate(${t}px,${i}px)`,Oi.x=t/r,Oi.y=i/r}addEventListener("keydown",n=>{Oi.keys[n.code]=!0,Zy(n)});addEventListener("keyup",n=>{Oi.keys[n.code]=!1});var qy=matchMedia("(pointer:coarse)").matches;function Vr(n){n?(Ft=Yt[0],Hc={pos:Ft.position.clone(),rot:Ft.rotation.y,cam:qe.mode},Ft.position.set(0,0,5.6),qe.mode="walk",qe.yaw=0,qe.pitch=.25,Be("#joy").classList.toggle("hidden",!qy),Ds(Ie("walkHint"),3500,"")):(Ft&&Hc&&(Ft.position.copy(Hc.pos),Ft.rotation.y=Hc.rot),Ft=null,Be("#joy").classList.add("hidden"),pt.wide())}Be("#tbWalk").onclick=()=>Vr(qe.mode!=="walk");var oo=Be("#sub"),Fp=0;function Ds(n,e,t=Ie("host")){oo.innerHTML=t?`<b>${t}:</b> ${n}`:n,oo.classList.remove("hidden"),clearTimeout(Fp),Fp=setTimeout(()=>oo.classList.add("hidden"),e*Zc)}var Hr=n=>Math.max(1400,n.length*60);async function gt(n,e=""){let t=bp[n];if(!t)return;let i=t[us()]+e;Ls=un,Ds(i,Hr(i)+800),await Ze.voice(nn==="es"?"h_"+n:null,Hr(i)),Ls=null}async function fo(n,e,t){Ls=n,Ds(e,Hr(e)+600,n.userData.name||""),await Ze.voice(nn==="es"?t:null,Hr(e)),Ls=null}var Di=n=>{n==="cheer"?(Rr.react("cheer",4),Ze.play("cheer",{volume:.7})):n==="clap"?(Rr.react("clap",3),Ze.play("aplausos",{volume:.6})):n==="ooh"?(Rr.react("ooh",2),Ze.play("ooh",{volume:.8})):n==="laugh"&&(Rr.react("laugh",2.5),Ze.play("risas",{volume:.5}))},Xy=new Aa,gi=0,Vd=0,AE=He(0,0,0);function $p(){let n=Math.min(.05,Xy.getDelta());gi+=n,lp(n,()=>Dp.setPixelRatio());let e=!1;if(qe.mode==="walk"&&Ft){let t=Oi.x,i=Oi.y,s=Oi.keys;(s.KeyW||s.ArrowUp)&&(i-=1),(s.KeyS||s.ArrowDown)&&(i+=1),(s.KeyA||s.ArrowLeft)&&(t-=1),(s.KeyD||s.ArrowRight)&&(t+=1);let r=Math.hypot(t,i);if(r>.1){let o=3.4*Math.min(1,r)*n/r,c=-Math.sin(qe.yaw),l=-Math.cos(qe.yaw),u=Math.cos(qe.yaw),h=-Math.sin(qe.yaw),d=(c*-i+u*t)*o,f=(l*-i+h*t)*o,g=Ft.position.x+d,_=Ft.position.z+f;Tc(bt,g,_)?Tc(bt,g,Ft.position.z)?Tc(bt,Ft.position.x,_)||(Ft.position.z=_):Ft.position.x=g:(Ft.position.x=g,Ft.position.z=_),Ft.rotation.y=Math.atan2(d,f),e=!0}let a=4*Math.cos(qe.pitch*.6);qe.tPos.set(Ft.position.x+Math.sin(qe.yaw)*a,1.7+qe.pitch*2.6,Ft.position.z+Math.cos(qe.yaw)*a),qe.tLook.set(Ft.position.x,1.4,Ft.position.z),qe.pos.lerp(qe.tPos,Math.min(1,n*10)),qe.look.lerp(qe.tLook,Math.min(1,n*10))}else if(qe.mode==="orbit"){let t=gi*.07;qe.pos.set(Math.sin(t)*12.5,5.6+Math.sin(gi*.2),Math.cos(t)*12.5+1),qe.look.set(0,2,-1)}else if(qe.mode==="path"&&qe.path){let t=qe.path;t.t+=n/t.dur;let i=Math.min(1,t.t),s=i*i*(3-2*i);qe.pos.copy(t.from).lerp(t.to,s),qe.look.copy(t.lfrom).lerp(t.lto,s),i>=1&&(qe.mode="show",qe.tPos.copy(t.to),qe.tLook.copy(t.lto),t.res())}else qe.pos.lerp(qe.tPos,Math.min(1,n*qe.lerp)),qe.look.lerp(qe.tLook,Math.min(1,n*qe.lerp));Lr.position.copy(qe.pos),Lr.lookAt(qe.look);for(let[t,i]of Dr){let s=i.to.clone().sub(t.position);s.y=0;let r=s.length();if(r<.05){t.position.x=i.to.x,t.position.z=i.to.z,Dr.delete(t),i.res();continue}s.normalize(),t.position.addScaledVector(s,Math.min(r,i.speed*n)),t.rotation.y=Math.atan2(s.x,s.z)}[un,...Yt,...Ui].forEach(t=>{mp(t,n,Dr.has(t)||t===Ft&&e,Ls===t),t.userData.sink!==void 0&&(t.position.y+=((t.userData.sink||0)-t.position.y)*Math.min(1,n*2))}),xp(bt,n),Vy(n),Gy(n),bt.ledTex.offset.y=(bt.ledTex.offset.y+n*.08)%1,bt.bulbs.material.color.setHSL(.1,.6,.55+.25*Math.sin(gi*3)),Rr.update(n),tn.update(n),Vd+=n,Vd>(Ke.mode==="logo"?.1:.25)&&(Vd=0,Zd()),Dp.render(),requestAnimationFrame($p)}function lo(n,e,t,i,s){return new Promise(r=>{qe.mode="path",qe.path={from:n,to:e,lfrom:t,lto:i,dur:s*Zc,t:0,res:r}})}var $n=0,Yy={abort:!0},Pt=n=>{if(n!==$n)throw Yy},Fi=Be("#overlay");function $c(n){return Fi.innerHTML=n,Fi.classList.remove("hidden"),Fi}function Ns(){Fi.classList.add("hidden"),Fi.innerHTML=""}function so(n){return $c(n),new Promise(e=>Fi.querySelectorAll("[data-z]").forEach(t=>t.addEventListener("click",()=>{Ns(),e(t.dataset.z)},{once:!0})))}var Wd=!1;Be("#skip").onclick=()=>{Wd=!0,Ze.stopVoice()};var vi=n=>{["#menu","#langsel"].forEach(e=>Be(e).classList.add("hidden")),n&&Be(n).classList.remove("hidden")};function kr(n){Be("#hud").classList.toggle("hidden",!n)}function xi(){$n++,Ze.stopAll(),Ns(),Be("#split").classList.add("hidden"),kr(!1),oo.classList.add("hidden"),Be("#skip").classList.add("hidden"),qe.mode==="walk"&&Vr(!1),qe.mode="orbit",Ke.mode="logo",Ke.sub="",tn.event("menu"),Kc(40),bt.doors.forEach(n=>n.target=0),Ps(n=>{n.off=!0,n.state=null}),uo(),Be("#topBtns").classList.add("hidden"),Gp(),vi("#menu"),Ze.music("abertura",!0)}Be("#tbHome").onclick=xi;Be("#tbLights").onclick=()=>Be("#glights").classList.toggle("hidden");Be("#tbMute").onclick=()=>{Ze.setMuted(!Ze.muted),Be("#tbMute").textContent=Ze.muted?"\u{1F507}":"\u{1F50A}"};location.protocol!=="https:"&&location.protocol!=="http:"&&(Be("#dlLinks").style.display="none");Be("#btnLang").onclick=()=>em().then(xi);function em(){return vi("#langsel"),new Promise(n=>Be("#langsel").querySelectorAll("button").forEach(e=>e.onclick=()=>{nn=e.dataset.l,localStorage.setItem("aum3d_lang",nn),Gp(),n()}))}var Wc=Tp.pools,Ir=new Set;function Qy(n){return nn==="pt"?n.pt:n.es}function Ur(n,e,{round:t=null,exclude:i=[]}={}){let s=Wc[n].filter(a=>!Ir.has(a.id)&&!i.includes(a.id));if(t){let a=s.filter(o=>o.r===t);a.length&&(s=a)}let r=s.filter(a=>a.es[1].length===e);return r.length&&n==="general"?s=r:s=s.filter(a=>a.es[1].length>=e),s.length?co(s):(Ir.clear(),Ur(n,e,{round:t,exclude:i}))}function qd(n,e){let[t,i]=Qy(n),s=i.map((r,a)=>a);if(i.length>e){let r=Vp(s.filter(a=>a!==n.c)).slice(0,e-1);s=s.filter(a=>a===n.c||r.includes(a))}return{id:n.id,text:t,opts:s.map(r=>i[r]),correct:s.indexOf(n.c),topic:n.t[us()]}}function Jy(n,e,t){let i=Ur(n,e,{round:t}),s=null;for(let r=0;r<30;r++){let a=Ur(n,e,{round:t,exclude:[i.id]});if(a.t[0]!==i.t[0]||r>25){s=a;break}}return[i,s||Ur(n,e,{round:t,exclude:[i.id]})]}var ge={n:4,packVal:25e3,sel:0,allIn:!1,active:!1,time:60,elapsed:0,unlimited:!1,stopRes:null,starRes:null,starOn:!1,q:null},go=()=>[0,1,2,3].map(n=>Ut(n));function jy(n){if(n>=ge.n||Ut("bank")===0)return!1;let e=go();return ge.allIn?e.every((i,s)=>s===n||i===0):e[n]>0?!0:e.slice(0,ge.n).filter(i=>i>0).length<ge.n-1}function Or(n,e=1){if(!ge.active)return;let t=0;for(;t<e&&jy(n);)hs("bank",n,1),t++;!t&&Ut("bank")>0?tm():t&&Ze.play("saltar",{volume:.4}),ds()}function Kd(n,e=1){if(!ge.active)return;hs(n,"bank",Math.min(e,Ut(n)))&&Ze.play("saltar",{volume:.3}),ds()}function $d(n){if(!ge.active||n>=ge.n)return;for(let t=0;t<4;t++)t!==n&&hs(t,"bank",Ut(t));let e=go();if(!ge.allIn&&e.slice(0,ge.n).filter((t,i)=>t>0||i===n).length>ge.n-1){tm();return}hs("bank",n,mo),Ze.play("saltar",{volume:.4}),ds()}var Bp=0;function tm(){performance.now()-Bp<2500||(Bp=performance.now(),Ds(ge.allIn?Ie("allInRule"):Ie("emptyRule"),2200,""),Ze.play("icon",{volume:.6}),ge.showHost&&nn==="es"&&Ze.voice(ge.allIn?"h_allIn":"h_empty"))}function nm(){let n=Be("#cols");n.innerHTML="";for(let e=0;e<ge.n;e++){let t=document.createElement("div");t.className="col",t.dataset.i=e,t.innerHTML=`<div class="op"><i>${Xd[e]}</i><span></span></div><div class="am"></div><div class="ar"><button data-a="dn">\u25BC</button><button data-a="up">\u25B2</button><button data-a="all" class="all">${Ie("all")}</button></div>`,t.querySelector("span").textContent=ge.q.opts[e],t.addEventListener("click",i=>{ge.sel=e;let s=i.target.closest("[data-a]");if(s){let r=s.dataset.a;r==="up"?Or(e):r==="dn"?Kd(e):$d(e)}ds()}),n.appendChild(t)}Be("#split").classList.remove("hidden"),ds()}function ds(){let n=go();document.querySelectorAll("#cols .col").forEach((t,i)=>{t.querySelector(".am").textContent=Zn(n[i]*ge.packVal),t.classList.toggle("sel",i===ge.sel)});let e=Ut("bank")*ge.packVal;Be("#hBank").textContent=Zn(e),Be("#hTotal").textContent=Zn((Ut("bank")+n.reduce((t,i)=>t+i,0))*ge.packVal),Be("#hBankRow").style.visibility=e>0?"visible":"hidden",ge.q&&(ge.q.amounts=n.slice(0,ge.n).map(t=>t*ge.packVal),ge.q.total=(Ut("bank")+n.reduce((t,i)=>t+i,0))*ge.packVal),Br.forEach((t,i)=>{i<ge.n&&(t.amount=n[i]*ge.packVal,Qc(i))}),Be("#btnStop").disabled=!ge.active||ge.elapsed<10||Ut("bank")>0}function Zy(n){if(!ge.active)return;let e=n.key;/^[1-4]$/.test(e)?(ge.sel=+e-1,ds()):e==="ArrowUp"||e==="+"?(Or(ge.sel),n.preventDefault()):e==="ArrowDown"||e==="-"?(Kd(ge.sel),n.preventDefault()):e==="ArrowRight"?(ge.sel=Math.min(ge.n-1,ge.sel+1),ds()):e==="ArrowLeft"?(ge.sel=Math.max(0,ge.sel-1),ds()):e==="Enter"&&!Be("#btnStop").disabled&&Be("#btnStop").click()}Be("#btnStop").onclick=()=>{ge.stopRes&&ge.stopRes("stop")};Be("#btnStar").onclick=()=>{ge.stopRes&&ge.starOn&&ge.stopRes("star")};function Ky(){let n=ge.q.correct;if(ge.allIn){$d(Math.random()<.8?n:(n+1)%ge.n);return}let e=(n+1)%ge.n;Or(n,28),Or(e,12),Ut("bank")&&Or(n,40)}async function zp(n,e,{voice:t=!0}={}){ge.active=!0,ge.elapsed=0,ge.sel=0,ge.time=e,nm(),Be("#timer").classList.toggle("off",!isFinite(e));let i=e>=60?"tempo60":"tempo30",s=isFinite(e)?Ze.music(i):null;s&&e<30&&(s.currentTime=Math.max(0,33-e)),s&&e>=60&&(s.currentTime=Math.max(0,64.5-e-1));let r=!1,a=!1,o=6+Math.random()*6,c=!1,l=await new Promise(u=>{ge.stopRes=u;let h=performance.now(),d=()=>{if(n!==$n){u("abort");return}let f=performance.now(),g=(f-h)/1e3/Zc;if(h=f,ge.elapsed+=g,isFinite(ge.time)&&(ge.time-=g),Be("#timer").textContent=isFinite(ge.time)?Math.max(0,Math.ceil(ge.time)):"\u221E",Be("#timer").classList.toggle("low",ge.time<=10),Ke.time=isFinite(ge.time)?Math.max(0,ge.time):null,Be("#btnStop").disabled=ge.elapsed<10||Ut("bank")>0,ge.showHost&&t){if(!r&&ge.time<=30&&e>=45&&(r=!0,gt("t30")),!a&&ge.time<=10&&e>10&&(a=!0,gt("t10")),o-=g,Bt.chat&&o<=0&&ge.time>12){o=9+Math.random()*8;let _=Math.floor(Math.random()*Od.length),m=co(Yt.filter(p=>p.visible&&!p.userData.inPit));m&&fo(m,(nn==="pt"?Sp:Od)[_],`c${_}${m.userData.voice}`)}Bt.jokes&&!c&&ge.time<40&&ge.time>22&&Math.random()<.004&&(c=!0,gt(co(["j1","j2","j3","j4","j5","j6","j7","j8"])).then(()=>Di("laugh")))}if(cs&&ge.elapsed>.5&&!ge.botDone&&(ge.botDone=!0,Ky()),cs&&ge.elapsed>10.5&&Ut("bank")===0){u("stop");return}if(isFinite(ge.time)&&ge.time<=0){u("time");return}requestAnimationFrame(d)};requestAnimationFrame(d)});return ge.stopRes=null,ge.active=!1,ge.botDone=!1,s&&Ze.stopMusic(),Ke.time=null,l}async function jn(n){let e=++$n;vi(null),Ns(),Ir.clear(),uo(),Be("#topBtns").classList.remove("hidden"),ge.packVal=n.packVal,ge.showHost=n.showHost,Kc(n.packs||40),bt.doors.forEach(c=>c.target=0),Ps(c=>{c.off=!0,c.state=null,c.amount=null}),Ke.mode="logo",Ke.sub=n.sub||"",Ze.stopAll(),tn.event("idle"),n.intro&&(await $y(e,n),Pt(e),Hp&&(await sm(e,n),Pt(e))),Pt(e),!n.intro&&!n.train&&(pt.wide(),Ze.play("introCurto"),await In(1500)),kr(!0);let t=n.rounds.length,i=1,s=!1,r=n.rounds[0];for(let c=0;c<t;c++){Pt(e);let l=n.rounds[c];ge.allIn=c===t-1&&!n.train&&n.allInLast!==!1;let u=n.train?n.trainTime:Bt.time===0?1/0:n.secs||Bt.time;if(n.time0&&(u=n.time0),Be("#hq").innerHTML=n.train?`<b>${Ie("trainT")}</b>`:`${Ie("q")} <b>${c+1}</b> ${Ie("of")} ${t}`,n.finChoice&&c===t-1){pt.host(),n.showHost&&await gt("finChoice"),Pt(e);let x=cs?"classic":await so(`<div class="txt">${Ie("finT")}</div><div class="ovb"><button class="ov-btn" data-z="triple">${Ie("triple")}<small>${Ie("tripleS")}</small></button><button class="ov-btn" data-z="double">${Ie("double")}<small>${Ie("doubleS")}</small></button><button class="ov-btn" data-z="classic">${Ie("classic")}<small>${Ie("classicS")}</small></button></div>`);Pt(e),x==="triple"?(l=4,u=20,i=3,await gt("finTriple")):x==="double"?(l=3,u=10,i=2,await gt("finDouble")):(l=2,u=60,await gt("finClassic")),ge.allIn=!0}else n.showHost&&l<r&&l===3?(pt.host(),await gt("round3")):n.showHost&&ge.allIn&&(pt.host(),await gt("final"));r=l,ge.n=l,Pt(e);let h=!1;if(n.solo&&c===5){h=!0,pt.wide(),await gt("solo"),Pt(e);let x=Yt[1];x.userData.inPit=!0,await ro(x,He(.9,0,1.2)),x.userData.sink=-2.2,Ds(Ie("soloT"),2e3,""),Ze.play("trampilla"),await In(1500)}let[d,f]=Jy(n.pool,l,n.kind==="mini"?["1-3","1-3","1-3","4-6","4-6","4-6","7"][c]:null),g=d.t[us()],_=f.t[us()];Ke.mode="topics",Ke.topics=[g,_],Ke.topicSel=-1,pt.screen(),n.showHost&&gt("topics"),Ze.play("categoria");let m=cs?"0":await so(`<div class="txt">${Ie("topicT")}</div><div class="ovb"><button class="ov-btn" data-z="0">${g}</button><button class="ov-btn" data-z="1">${_}</button></div>`);Pt(e),Ze.stopVoice(),Ke.topicSel=+m,Ze.play("categoria2"),await In(900);let p=m==="0"?d:f;Ir.add(d.id),Ir.add(f.id);let M=qd(p,l);ge.q=M;let w=async()=>{Ps((x,S)=>{x.off=S>=l,x.state=null,x.text=S<l?M.opts[S]:"",x.amount=S<l?0:null}),Ke.mode="question",Ke.q=M,M.state=null,pt.desk(),Ze.play("pergunta"),n.showHost?await gt("p"+(c+1)):await In(800),Pt(e),Ls=un,Ds(M.text,Hr(M.text)+1500,n.showHost?Ie("host"):""),Ze.play("alternativas",{volume:.6}),await Ze.voice(nn==="es"&&n.showHost?"q_"+M.id:null,Hr(M.text)),Ls=null,Pt(e)};await w(),n.showHost&&!n.train&&await gt("go"),Pt(e),ge.starOn=n.star&&!ge.starUsed&&c<t-1,Be("#btnStar").classList.toggle("hidden",!ge.starOn);let y=await zp(e,u);if(Pt(e),y==="star"){ge.starUsed=!0,Be("#btnStar").classList.add("hidden"),ge.starOn=!1,await gt("star");let x=Ur(n.pool,l);Ir.add(x.id),M=qd(x,l),ge.q=M,await w(),y=await zp(e,u),Pt(e)}if(Be("#split").classList.add("hidden"),y==="time"){Ze.play("tempoEsgotado"),n.showHost&&await gt("timeUp");let x=Ut("bank");x&&(n.showHost&&await gt("unplaced"),n.train||hs("bank","gone",x))}else n.showHost&&(Ze.play("icon"),await gt(co(["stop","sure1","sure2","sure3"])));Pt(e);let T=go().slice(0,l).reduce((x,S)=>x+S,0)*ge.packVal,E=Ut(M.correct)*ge.packVal;tn.event("tension"),n.showHost&&(pt.host(),await gt("open")),Pt(e);let R=Vp([...Array(l).keys()].filter(x=>x!==M.correct));R.sort((x,S)=>Ut(x)-Ut(S));for(let x of R){Pt(e),pt.door(x),Ze.play("resp",{volume:.5}),await In(jc?100:1800+Math.random()*1200),Ze.stopAll();let S=Ut(x);n.showHost&&S&&gt("open1"),bt.doors[x].target=1,Ze.play("trampilla"),Ze.play("abrir",{volume:.6}),tn.event("fall"),S?(pt.pit(x),await In(250),Wp(x),Ze.play("drop"),Di("ooh"),Yt.forEach(C=>C.userData.mood="sad")):Di("clap"),Br[x].state="bad",Qc(x),Ke.q.state=Ke.q.opts.map((C,D)=>D===x?"bad":Ke.q.state?Ke.q.state[D]:null),await In(S?2600:1200),Yt.forEach(C=>C.userData.mood=null),bt.doors[x].target=0}if(Pt(e),tn.event("release"),Br[M.correct].state="ok",Qc(M.correct),Ke.q.state=Ke.q.opts.map((x,S)=>S===M.correct?"ok":"bad"),document.querySelectorAll("#cols .col").forEach((x,S)=>x.classList.add(S===M.correct?"correct":"wrong")),n.train)return pt.door(M.correct),tn.event("correct"),Ze.play(E?"venceRodada":"perde"),(cs?"menu":await so(`<div class="txt">${Ie(E?"safe":"lost")}</div><div class="sub2">${Ie("wouldKeep")}: <b>${Zn(E)}</b> / ${Zn(T)}</div><div class="ovb"><button class="ov-btn" data-z="again">${Ie("next")}</button><button class="ov-btn alt" data-z="menu">${Ie("menu")}</button></div>`))==="again"?jn(n):xi();if(pt.door(M.correct),E>0){if(tn.event("correct"),Ze.play("venceRodada",{volume:.8}),Di("cheer"),Yt.forEach(x=>x.userData.mood="cheer"),n.showHost?await gt(E===T&&R.length?"safeAll":"safe"):await In(2500),Bt.chat&&n.showHost&&Math.random()<.6){let x=co(Yt.filter(S=>!S.userData.inPit));await fo(x,Fd.yes[us()],"r_yes"+x.userData.voice)}Yt.forEach(x=>x.userData.mood=null),n.showHost&&E<T&&await gt("lostSome")}else s=!0;if(Pt(e),h){let x=Yt[1];if(E<T&&Ut("pit")>0){await gt("soloBack");let S=Kn.find(C=>C.loc==="pit");S.loc="bank",S.rx=S.rz=0,jd(),Ze.play("fairydust"),Di("clap"),await In(800)}x.userData.sink=0,await In(1200),x.userData.inPit=!1,await ro(x,Jd[1]),x.rotation.y=0,Ut(M.correct)===0&&Ut("bank")>0&&(s=!1)}if(s)break;hs(M.correct,"bank",mo),Ps(x=>{x.state=null,x.amount=null,x.off=!0}),Ke.mode="money",Ke.info=[Ie("h_play"),Zn(Ut("bank")*ge.packVal),`${Ie("q")} ${c+1} / ${t}`],pt.screen(),await In(2200)}Pt(e),kr(!1),Be("#split").classList.add("hidden");let a=Ut("bank")*ge.packVal*(s?0:i);s||a===0?(Ke.mode="money",Ke.info=[Ie("gameOver"),"0 \u20AC",""],Ze.play("perde"),pt.pair(),Yt.forEach(c=>c.userData.mood="sad"),tn.event("fall"),n.showHost&&(await gt("lostAll"),Bt.chat&&await fo(Yt[0],Fd.no[us()],"r_no"+Yt[0].userData.voice))):(Ke.mode="money",Ke.info=[Ie("youWin"),Zn(a),i>1?`\xD7${i}`:""],Ze.play("vence"),Jp(),tn.event("win"),Di("cheer"),Yt.forEach(c=>c.userData.mood="cheer"),pt.screen(),await In(2500),pt.pair(),n.showHost&&await gt("win")),Pt(e),n.showHost&&(pt.wide(),await gt("outro")),n.intro&&Hp&&(Pt(e),await rm(e,n),Pt(e));let o=cs?"menu":await so(`<div class="txt">${a?Ie("youWin")+" "+Zn(a):Ie("gameOver")}</div><div class="ovb"><button class="ov-btn" data-z="again">${Ie("again")}</button><button class="ov-btn alt" data-z="menu">${Ie("menu")}</button></div>`);if(window.__lastResult={final:a,lostAll:s},o==="again")return jn(n);xi()}var qc="Iker Rodriguez Tejedor",Hp=!/[?&]creditos=0/.test(Fr),kp={es:{remake:"Un remake de",presented:"Presentado por",vhost:"Presentador virtual",withPair:"y una pareja de concursantes virtuales",skip:"Toca para saltar \u23ED",created:"Creado por",idea:"Idea, programaci\xF3n y realizaci\xF3n",hostH:"Presentador virtual",hostP:"Personaje generado por ordenador",hostS:"No representa a ninguna persona real",cast:"Concursantes virtuales",castS:"Personajes ficticios",audience:"P\xFAblico",audienceP:"Espectadores virtuales",voices:"Voces sintetizadas",voicesS:"Voces gen\xE9ricas es_ES (davefx, sharvard)",engine:"Motor gr\xE1fico",engineS:"Plat\xF3, luces y c\xE1maras generados en tiempo real",lights:"Iluminaci\xF3n",lightsP:"Mesa de luces virtual",music:"M\xFAsica y efectos",musicP:"Del juego original de Scratch",format:"Basado en el formato original",formatS:"The Million Pound Drop \xB7 emitido en Espa\xF1a por Antena 3 (Gestmusic / Endemol)",fan:"Un remake de fans",d1:"Remake no oficial hecho por un fan, sin \xE1nimo de lucro.",d2:"Sin afiliaci\xF3n ni relaci\xF3n con los titulares del formato ni con la cadena.",d3:"Todas las marcas pertenecen a sus respectivos propietarios."},pt:{remake:"Um remake de",presented:"Apresentado por",vhost:"Apresentador virtual",withPair:"e uma dupla de concorrentes virtuais",skip:"Toque para pular \u23ED",created:"Criado por",idea:"Ideia, programa\xE7\xE3o e realiza\xE7\xE3o",hostH:"Apresentador virtual",hostP:"Personagem gerado por computador",hostS:"N\xE3o representa nenhuma pessoa real",cast:"Concorrentes virtuais",castS:"Personagens fict\xEDcios",audience:"Plateia",audienceP:"Espectadores virtuais",voices:"Vozes sintetizadas",voicesS:"Vozes gen\xE9ricas es_ES (davefx, sharvard)",engine:"Motor gr\xE1fico",engineS:"Est\xFAdio, luzes e c\xE2meras gerados em tempo real",lights:"Ilumina\xE7\xE3o",lightsP:"Mesa de luz virtual",music:"M\xFAsica e efeitos",musicP:"Do jogo original do Scratch",format:"Baseado no formato original",formatS:"The Million Pound Drop \xB7 exibido na Espanha pela Antena 3 (Gestmusic / Endemol)",fan:"Um remake de f\xE3s",d1:"Remake n\xE3o oficial feito por um f\xE3, sem fins lucrativos.",d2:"Sem afilia\xE7\xE3o nem rela\xE7\xE3o com os detentores do formato nem com a emissora.",d3:"Todas as marcas pertencem aos seus respectivos propriet\xE1rios."}},Mt=n=>(kp[nn]||kp.es)[n],kc=null;function im(){if(kc)return kc;let{c:n,g:e}=Id(1280,512,{k:2});return Ec(e,0,0,1280,512,{bg:!1}),kc=n.toDataURL("image/png"),kc}async function sm(n,e){if(window.__mcSust)return;kr(!1),Ze.play("introCurto"),tn.event("intro");let t=Is,i=[{small:Mt("remake"),big:qc,ms:2800,cam:()=>lo(He(-10,6.5,9),He(-5.5,4.2,10.5),He(0,1.5,-2),He(0,1.8,-2),3.6)},{small:Mt("presented"),big:Mt("vhost"),sub:Mt("withPair"),ms:2800,cam:()=>lo(t.clone().add(He(2.4,1.8,2.2)),t.clone().add(He(1.5,1.7,1.4)),t.clone().add(He(0,1.4,0)),t.clone().add(He(0,1.5,0)),3.6)},{img:im(),sub:e.sub||"",center:!0,ms:3400,cam:()=>lo(He(0,2.4,9.5),He(0,3.6,4.2),He(0,4.4,-9),He(0,6.3,-9),4.2)}];jc&&i.forEach(s=>s.ms=900),await Cp(i,{accent:"#ff2a6a",skipText:Mt("skip"),aborted:()=>n!==$n}),qe.mode==="path"&&(qe.mode="show",qe.tPos.copy(qe.pos),qe.tLook.copy(qe.look)),Pt(n),tn.event("idle")}async function rm(n,e){kr(!1),oo.classList.add("hidden"),Ze.stopAll(),Ze.music("abertura",!0),tn.event("win"),setTimeout(()=>tn.event("menu"),4500),qe.mode="orbit",Ke.mode="logo";let t=Yt.map(i=>i.userData.name).filter(Boolean).join(" \xB7 ");await Rp({head:{img:im(),title:e.sub?"Atrapa un mill\xF3n \xB7 "+e.sub:""},sections:[{h:Mt("created"),p:[qc]},{h:Mt("idea"),p:[qc]},{h:Mt("hostH"),p:[Mt("hostP")],sm:[Mt("hostS")]},{h:Mt("cast"),p:[t||"\u2014"],sm:[Mt("castS")]},{h:Mt("audience"),p:[Mt("audienceP")]},{h:Mt("voices"),p:["Piper TTS"],sm:[Mt("voicesS")]},{h:Mt("engine"),p:["Three.js"],sm:[Mt("engineS")]},{h:Mt("lights"),p:[Mt("lightsP")]},{h:Mt("music"),p:[Mt("musicP")]},{h:Mt("format"),p:["Atrapa un mill\xF3n"],sm:[Mt("formatS")]}],end:{big:Mt("fan"),small:[Mt("d1"),Mt("d2"),Mt("d3"),"\xA9 2026 "+qc]},accent:"#ff2a6a",skipText:Mt("skip"),aborted:()=>n!==$n,speed:jc?6:1}),Ze.stopMusic(),n===$n&&(qe.mode="show",pt.wide())}async function $y(n,e){window.__mcSust=window.MC3D?await MC3D.introPrograma({atr:1}):!1;Wd=!1,Be("#skip").classList.remove("hidden"),Ze.music("abertura"),tn.event("intro");let t=[async()=>{await lo(He(0,12,16),He(0,7.5,6),He(0,4,-6),He(0,6.4,-9),4.5)},async()=>{Di("cheer"),await lo(He(-9,4.5,3),He(-4,2.6,4.5),He(0,2.5,-9),He(0,1.2,0),4)},async()=>{un.position.set(0,0,6.5),pt.front(),Ze.play("aplausos"),Rr.react("clap",5),await ro(un,He(-1.6,0,2.6))},async()=>{pt.host(),Vc(un,He(0,1,6)),await gt("intro1")},async()=>{pt.overview(),await gt(e.introLine||"intro2"),e.special&&(pt.screen(),await gt(e.special))},async()=>{ro(un,He(-3.9,0,1.2)).then(()=>ro(un,Is)),pt.pair(),await gt("pair"),Di("clap")},async()=>{for(let i=0;i<2;i++)pt.pairOne(i),await fo(Yt[i],Ka[Xc][4+i],`pa${Xc}${i?"b":"a"}`)},async()=>{pt.comps(0),Ui.forEach(i=>i.userData.mood="cheer"),await gt("comp"),Di("cheer"),pt.comps(1),Bt.chat?await fo(Ui[1],Ep[us()],"cheerF"):await In(1500),Ui.forEach(i=>i.userData.mood=null)},async()=>{pt.host(),Vc(un,He(0,0,0)),await gt("rules")},async()=>{pt.door(1),await gt("money")}];for(let i of t){if(Wd)break;Pt(n),await i()}Pt(n),Be("#skip").classList.add("hidden"),Ze.stopVoice(),Ze.stopMusic(),Dr.clear(),un.position.copy(Is),Vc(un,He(0,0,-.3)),Ui.forEach(i=>i.userData.mood=null),tn.event("idle")}var po={mini:()=>{eM().then(n=>n&&jn({kind:"mini",pool:"general",rounds:[4,4,4,3,3,3,2],packVal:25e3,showHost:!1,sub:""}))},tv:()=>jn({kind:"tv",pool:"general",rounds:[4,4,4,4,3,3,3,2],packVal:25e3,showHost:!0,intro:!0}),espTele:()=>jn({kind:"esp",pool:"tele",rounds:[4,4,4,4,3,3,3,2],packVal:25e3,showHost:!0,intro:!0,special:"introTele",sub:"PRIME TIME"}),espDiario:()=>jn({kind:"esp",pool:"general",rounds:[4,4,4,4,3,3,3,2],packVal:5e3,showHost:!0,intro:!0,introLine:"intro2d",star:!0,solo:!0,finChoice:!0,sub:"DIARIO"}),espAniv:()=>jn({kind:"esp",pool:"aniv",rounds:[4,4,4,4,3,3,3,2],packVal:25e3,showHost:!0,intro:!0,special:"introAniv",sub:"ANIVERSARIO"}),espDos:()=>jn({kind:"esp",pool:"tele",poolMix:!0,rounds:[4,4,4,4,3,3,3,2],packVal:5e4,showHost:!0,intro:!0,introLine:"intro2x",sub:"DOS MILLONES"}),entreno:()=>tM(),historia:()=>nM(),walk:()=>{vi(null),$n++,Be("#topBtns").classList.remove("hidden"),Ke.mode="logo",Vr(!0)}};Wc.mezcla=Wc.general.filter(n=>n.r!=="7").concat(Wc.tele);po.espDos=()=>jn({kind:"esp",pool:"mezcla",rounds:[4,4,4,4,3,3,3,2],packVal:5e4,showHost:!0,intro:!0,introLine:"intro2x",sub:"DOS MILLONES"});document.querySelectorAll("[data-mode]").forEach(n=>n.onclick=()=>{Ze.stopMusic();let e=po[n.dataset.mode];e&&e()});async function eM(){return vi(null),pt.wide(),(cs?"go":await so(`<div class="panel"><h3>${Ie("rulesT")} \xB7 ${Ie("minT")}</h3>${Ie("rules").map(e=>`<div class="hcard">${e}</div>`).join("")}<div class="sub2">${Ie("minS")}</div></div><div class="ovb"><button class="ov-btn" data-z="go">${Ie("start")}</button><button class="ov-btn alt" data-z="back">${Ie("back")}</button></div>`))!=="go"?(xi(),!1):!0}async function tM(){vi(null),pt.desk(),$c(`<div class="panel"><h3>${Ie("trainT")}</h3><div>${Ie("trainS")}</div>
  <label>${Ie("pool")}: <select id="trPool"><option value="general">${Ie("p_general")}</option><option value="tele">${Ie("p_tele")}</option><option value="aniv">${Ie("p_aniv")}</option></select></label>
  <label><input type="checkbox" id="trUnl"> ${Ie("unlimited")}</label></div>
  <div class="ovb"><button class="ov-btn" data-n="4">4 ${Ie("opts")}</button><button class="ov-btn" data-n="3">3 ${Ie("opts")}</button><button class="ov-btn" data-n="2">2 ${Ie("opts")}</button><button class="ov-btn alt" data-n="0">${Ie("back")}</button></div>`),Fi.querySelectorAll("[data-n]").forEach(n=>n.onclick=()=>{let e=+n.dataset.n,t=Be("#trPool").value,i=Be("#trUnl").checked;if(Ns(),!e)return xi();jn({kind:"train",pool:t,rounds:[e],packVal:25e3,showHost:!1,train:!0,trainTime:i?1/0:60})})}function nM(){vi(null),$n++,Be("#topBtns").classList.remove("hidden"),Ke.mode="hist",Ke.hist=0,pt.screen();let n=Cc[nn];nn==="es"&&Ze.voice("h_hist"),$c(`<div class="panel"><h3>${Ie("histT")}</h3>${n.map(t=>`<div class="hcard"><b>${t[0]}</b><br>${t[1]}</div>`).join("")}</div><div class="ovb"><button class="ov-btn" data-z="walk">${Ie("histWalk")}</button><button class="ov-btn alt" data-z="menu">${Ie("back")}</button></div>`);let e=setInterval(()=>{if(Ke.mode!=="hist"){clearInterval(e);return}Ke.hist++},7e3);Fi.querySelectorAll("[data-z]").forEach(t=>t.onclick=()=>{Ns(),t.dataset.z==="walk"?Vr(!0):(clearInterval(e),xi())})}Be("#btnCustom").onclick=()=>{vi(null),pt.pair(),$c(`<div class="panel"><h3>${Ie("custT")}</h3>
  <label>${Ie("c_pair")}: <select id="cPair"><option value="-1">${Ie("c_random")}</option>${Ka.map((n,e)=>`<option value="${e}" ${Bt.pair===e?"selected":""}>${n[0]} y ${n[2]} (${n[6+us()]})</option>`).join("")}</select></label>
  <label>${Ie("c_nameA")}: <input type="text" id="cNA" maxlength="14" value="${Bt.nameA}"></label>
  <label>${Ie("c_nameB")}: <input type="text" id="cNB" maxlength="14" value="${Bt.nameB}"></label>
  <label>${Ie("c_time")}: <select id="cTime">${[[60,"60 s"],[90,"90 s"],[30,"30 s"],[0,"\u221E"]].map(([n,e])=>`<option value="${n}" ${Bt.time===n?"selected":""}>${e}</option>`).join("")}</select></label>
  <label><input type="checkbox" id="cVoice" ${Ze.voiceOn?"checked":""}> ${Ie("c_voice")}</label>
  <label><input type="checkbox" id="cChat" ${Bt.chat?"checked":""}> ${Ie("c_chat")}</label>
  <label><input type="checkbox" id="cJokes" ${Bt.jokes?"checked":""}> ${Ie("c_jokes")}</label>
  <label>${Ie("c_music")}: <input type="range" id="cMus" min="0" max="100" value="${Math.round(Ze.musicVol*100)}"></label>
  <label>${Ie("c_quality")}: <select id="cQual">${["auto","media","alta","ultra"].map(n=>`<option value="${n}" ${Pd()===n?"selected":""}>${Ie("q_"+n)}</option>`).join("")}</select></label>
  <div class="qinfo" id="cQinfo">${Ie("q_now")}: ${sp[ke.level]} \xB7 ${cp()} \xB7 ${Ie("q_tex")} ${ke.texK}x</div><div class="qinfo">${Ie("q_note")}</div></div>
  <div class="ovb"><button class="ov-btn" data-z="save">${Ie("c_save")}</button><button class="ov-btn alt" data-z="back">${Ie("back")}</button></div>`),Be("#cPair").onchange=()=>{let n=+Be("#cPair").value;n>=0&&(Gd(n),uo())},Fi.querySelectorAll("[data-z]").forEach(n=>n.onclick=()=>{if(n.dataset.z==="save"){let e=Pd(),t=Be("#cQual").value;if(Object.assign(Bt,{pair:+Be("#cPair").value,nameA:Be("#cNA").value.trim(),nameB:Be("#cNB").value.trim(),time:+Be("#cTime").value,chat:Be("#cChat").checked,jokes:Be("#cJokes").checked,low:!1}),Ze.setVoice(Be("#cVoice").checked),Ze.setMusicVol(Be("#cMus").value/100),Fy(),Gd(Bt.pair>=0?Bt.pair:Xc),uo(),e!==t){Rd(t),location.reload();return}}Ns(),xi()})};function iM(n=[24,0,16,0],e="general",t=4){$n++,vi(null),Ns();let i=Ur(e,t),s=qd(i,t);return ge.q=s,ge.n=t,ge.packVal=25e3,Kc(40),n.forEach((r,a)=>hs("bank",a,r)),Kn.forEach(r=>r.pos.copy(r.tgt)),Ps((r,a)=>{r.off=a>=t,r.state=null,r.text=a<t?s.opts[a]:"",r.amount=a<t?Ut(a)*25e3:null}),Ke.mode="question",Ke.q=s,s.amounts=n.slice(0,t).map(r=>r*25e3),s.total=1e6,Ke.time=37,kr(!0),Be("#hq").innerHTML=`${Ie("q")} <b>1</b> ${Ie("of")} 8`,ge.active=!0,nm(),ge.active=!1,s}window.__aum={openingTitles:sm,endCredits:rm,get RUN(){return $n},addTo:Or,takeFrom:Kd,allTo:$d,placed:go,demo:iM,sub:Ds,say:gt,confetti:Jp,S:bt,cam:qe,views:pt,G:ge,playGame:jn,MODES:po,goMenu:xi,fajos:Kn,count:Ut,setFajoCount:Kc,moveFajos:hs,dropDoor:Wp,Lg:tn,scr:Ke,drawScreen:Zd,mon:Br,setMonitors:Ps,enterWalk:Vr,get pair(){return Yt},host:un,camera:Lr,comps:Ui,get T(){return gi}};requestAnimationFrame($p);Zd();setTimeout(async()=>{Be("#loading").classList.add("hidden"),!localStorage.getItem("aum3d_lang")&&!cs&&!/[?&]shot=1/.test(Fr)&&await em(),xi();let n=Fr.match(/[?&]mode=(\w+)/);n&&po[n[1]]&&(vi(null),po[n[1]]())},300);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
