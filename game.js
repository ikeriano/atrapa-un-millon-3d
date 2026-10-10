(()=>{var Gh=0,Jc=1,Wh=2;var aa=1,qh=2,qs=3,Bi=0,kt=1,Qt=2,ei=0,Xs=1,Ys=2,$c=3,Zc=4,Xh=5;var os=100,Yh=101,Qh=102,Jh=103,$h=104,Zh=200,jh=201,Kh=202,ed=203,jc=204,Kc=205,td=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,ao=0,oo=1,lo=2,Ds=3,co=4,uo=5,ho=6,fo=7,Wo=0,ud=1,hd=2,Un=0,eu=1,tu=2,nu=3,oa=4,iu=5,su=6,ru=7;var au=300,zi=301,ls=302,qo=303,Xo=304,la=306,Ns=1e3,Wn=1001,po=1002,qt=1003,dd=1004;var ca=1005;var $t=1006,Yo=1007;var ki=1008;var pn=1009,ou=1010,lu=1011,Qs=1012,Qo=1013,Fn=1014,Tn=1015,On=1016,Jo=1017,$o=1018,Js=1020,cu=35902,uu=35899,hu=1021,du=1022,An=1023,Xn=1026,Hi=1027,Zo=1028,jo=1029,Vi=1030,Ko=1031;var el=1033,ua=33776,ha=33777,da=33778,fa=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,pa=37490,ul=37491,hl=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,yl=37817,Ml=37818,Sl=37819,bl=37820,El=37821,Tl=36492,Al=36494,wl=36495,Cl=36283,Rl=36284,ma=36285,Pl=36286;var Pr=2300,mo=2301,so=2302,Fc=2303,Oc=2400,Bc=2401,zc=2402;var fd=3200;var ga=0,pd=1,_i="",an="srgb",Ir="srgb-linear",Lr="linear",xt="srgb";var ro=7680;var md=519,gd=512,_d=513,xd=514,Il=515,vd=516,yd=517,Ll=518,Md=519,$s=35044,_a=35048;var fu="300 es",Nn=2e3,Us=2001;function tp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=Dr("canvas");return i.style.display="block",i}var ph={},Fs=null;function pu(...i){let e="THREE."+i.shift();Fs?Fs("log",e,...i):console.log(e,...i)}function bd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=bd(i);let e="THREE."+i.shift();if(Fs)Fs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=bd(i);let e="THREE."+i.shift();if(Fs)Fs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ts(...i){let e=i.join(" ");e in ph||(ph[e]=!0,Ke(...i))}function Ed(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Td={[ao]:oo,[lo]:ho,[co]:fo,[Ds]:uo,[oo]:ao,[ho]:lo,[fo]:co,[uo]:Ds},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uc=Math.PI/180,Nr=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function ip(i,e){return(i%e+e)%e}function hc(i,e,t){return(1-t)*i+t*e}function yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yu=class yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yu.prototype.isVector2=!0;var _e=yu,Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==d||u!==_){let p=l*h+c*d+u*_+f*y;p<0&&(h=-h,d=-d,_=-_,y=-y,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+h*o,c=c*m+d*o,u=u*m+_*o,f=f*m+y*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+_*o,f=f*m+y*o;let S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mu=class Mu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mu.prototype.isVector3=!0;var F=Mu,dc=new F,mh=new Zt,Su=class Su{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],y=s[0],p=s[3],m=s[6],S=s[1],w=s[4],v=s[7],T=s[2],E=s[5],P=s[8];return r[0]=a*y+o*S+l*T,r[3]=a*p+o*w+l*E,r[6]=a*m+o*v+l*P,r[1]=c*y+u*S+f*T,r[4]=c*p+u*w+f*E,r[7]=c*m+u*v+f*P,r[2]=h*y+d*S+_*T,r[5]=h*p+d*w+_*E,r[8]=h*m+d*v+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=t*f+n*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Su.prototype.isMatrix3=!0;var it=Su,fc=new it,gh=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){let i={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ir]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var ht=sp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,go=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Dr("canvas")),xs.width=e.width,xs.height=e.height;let s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rp=0,Os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pc(s[a].image)):r.push(pc(s[a]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var ap=0,mc=new F,on=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=$t,a=ki,o=An,l=pn,c=i.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Zs(),this.name="",this.source=new Os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=au;on.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(d+1)/2,T=(m+1)/2,E=(u+h)/4,P=(f+y)/4,g=(_+p)/4;return w>v&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=P/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=g/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=g/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Pt=bu,_o=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new on(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends _o{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Go=class Go{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,_,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,_,y,p)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,_,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Go().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h+y*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-y*f}else if(e.order==="XZY"){let h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,lp)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ti.crossVectors(n,mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ti.crossVectors(n,mn)),Ti.normalize(),Fa.crossVectors(mn,Ti),s[0]=Ti.x,s[4]=Fa.x,s[8]=mn.x,s[1]=Ti.y,s[5]=Fa.y,s[9]=mn.y,s[2]=Ti.z,s[6]=Fa.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],y=n[6],p=n[10],m=n[14],S=n[3],w=n[7],v=n[11],T=n[15],E=s[0],P=s[4],g=s[8],b=s[12],C=s[1],I=s[5],U=s[9],H=s[13],D=s[2],N=s[6],j=s[10],Z=s[14],de=s[3],ne=s[7],ae=s[11],oe=s[15];return r[0]=a*E+o*C+l*D+c*de,r[4]=a*P+o*I+l*N+c*ne,r[8]=a*g+o*U+l*j+c*ae,r[12]=a*b+o*H+l*Z+c*oe,r[1]=u*E+f*C+h*D+d*de,r[5]=u*P+f*I+h*N+d*ne,r[9]=u*g+f*U+h*j+d*ae,r[13]=u*b+f*H+h*Z+d*oe,r[2]=_*E+y*C+p*D+m*de,r[6]=_*P+y*I+p*N+m*ne,r[10]=_*g+y*U+p*j+m*ae,r[14]=_*b+y*H+p*Z+m*oe,r[3]=S*E+w*C+v*D+T*de,r[7]=S*P+w*I+v*N+T*ne,r[11]=S*g+w*U+v*j+T*ae,r[15]=S*b+w*H+v*Z+T*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],y=e[7],p=e[11],m=e[15],S=l*d-c*h,w=o*d-c*f,v=o*h-l*f,T=a*d-c*u,E=a*h-l*u,P=a*f-o*u;return t*(y*S-p*w+m*v)-n*(_*S-p*T+m*E)+s*(_*w-y*T+m*P)-r*(_*v-y*E+p*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],y=e[13],p=e[14],m=e[15],S=t*o-n*a,w=t*l-s*a,v=t*c-r*a,T=n*l-s*o,E=n*c-r*o,P=s*c-r*l,g=u*y-f*_,b=u*p-h*_,C=u*m-d*_,I=f*p-h*y,U=f*m-d*y,H=h*m-d*p,D=S*H-w*U+v*I+T*C-E*b+P*g;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=(o*H-l*U+c*I)*N,e[1]=(s*U-n*H-r*I)*N,e[2]=(y*P-p*E+m*T)*N,e[3]=(h*E-f*P-d*T)*N,e[4]=(l*C-a*H-c*b)*N,e[5]=(t*H-s*C+r*b)*N,e[6]=(p*v-_*P-m*w)*N,e[7]=(u*P-h*v+d*w)*N,e[8]=(a*U-o*C+c*g)*N,e[9]=(n*C-t*U-r*g)*N,e[10]=(_*E-y*v+m*S)*N,e[11]=(f*v-u*E-d*S)*N,e[12]=(o*b-a*I-l*g)*N,e[13]=(t*I-n*b+s*g)*N,e[14]=(y*w-_*T-p*S)*N,e[15]=(u*T-f*w+h*S)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,y=a*u,p=a*f,m=o*f,S=l*c,w=l*u,v=l*f,T=n.x,E=n.y,P=n.z;return s[0]=(1-(y+m))*T,s[1]=(d+v)*T,s[2]=(_-w)*T,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(h+m))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(_+w)*P,s[9]=(p-S)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);let c=1/a,u=1/o,f=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===Nn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Us)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===Nn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Us)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Go.prototype.isMatrix4=!0;var ut=Go,vs=new F,Pn=new ut,op=new F(0,0,0),lp=new F(1,1,1),Ti=new F,Fa=new F,mn=new F,xh=new ut,vh=new Zt,fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cp=0,yh=new F,ys=new Zt,oi=new ut,Oa=new F,Mr=new F,up=new F,hp=new Zt,Mh=new F(1,0,0),Sh=new F(0,1,0),bh=new F(0,0,1),Eh={type:"added"},dp={type:"removed"},Ms={type:"childadded",child:null},gc={type:"childremoved",child:null},Xt=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new fn,n=new Zt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new it}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Mr,Oa,this.up):oi.lookAt(Oa,Mr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(oi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new F(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fp={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function _c(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=ip(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_c(a,r,e+1/3),this.g=_c(a,r,e),this.b=_c(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return ht.workingToColorSpace(nn.copy(this),e),Math.round(lt(nn.r*255,0,255))*65536+Math.round(lt(nn.g*255,0,255))*256+Math.round(lt(nn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=an){ht.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Ba);let n=hc(Ai.h,Ba.h,t),s=hc(Ai.s,Ba.s,t),r=hc(Ai.l,Ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ge;Ge.NAMES=Ad;var Or=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Br=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new F,li=new F,xc=new F,ci=new F,Ss=new F,bs=new F,Th=new F,vc=new F,yc=new F,Mc=new F,Sc=new Pt,bc=new Pt,Ec=new Pt,Pi=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),li.subVectors(n,t),xc.subVectors(e,t);let a=In.dot(In),o=In.dot(li),l=In.dot(xc),c=li.dot(li),u=li.dot(xc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sc.setScalar(0),bc.setScalar(0),Ec.setScalar(0),Sc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sc,r.x),a.addScaledVector(bc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),li.subVectors(e,t),In.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),bs.subVectors(r,n),vc.subVectors(e,n);let l=Ss.dot(vc),c=bs.dot(vc);if(l<=0&&c<=0)return t.copy(n);yc.subVectors(e,s);let u=Ss.dot(yc),f=bs.dot(yc);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ss,a);Mc.subVectors(e,r);let d=Ss.dot(Mc),_=bs.dot(Mc);if(_>=0&&d<=_)return t.copy(r);let y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(bs,o);let p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Th.subVectors(r,s),o=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(Th,o);let m=1/(p+y+h);return a=y*m,o=h*m,t.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ka.subVectors(this.max,Sr),Es.subVectors(e.a,Sr),Ts.subVectors(e.b,Sr),As.subVectors(e.c,Sr),wi.subVectors(Ts,Es),Ci.subVectors(As,Ts),Zi.subVectors(Es,As);let t=[0,-wi.z,wi.y,0,-Ci.z,Ci.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ci.z,0,-Ci.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ci.y,Ci.x,0,-Zi.y,Zi.x,0];return!Tc(t,Es,Ts,As,ka)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,Es,Ts,As,ka))?!1:(Ha.crossVectors(wi,Ci),t=[Ha.x,Ha.y,Ha.z],Tc(t,Es,Ts,As,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,za=new Qn,Es=new F,Ts=new F,As=new F,wi=new F,Ci=new F,Zi=new F,Sr=new F,ka=new F,Ha=new F,ji=new F;function Tc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ji.fromArray(i,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ot=new F,Va=new _e,pp=0,_n=class extends Yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$s,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var kr=class extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}},mp=new Qn,br=new F,Ac=new F,Ii=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Ac)),this.expandByPoint(br.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gp=0,bn=new ut,wc=new Xt,ws=new F,gn=new Qn,Er=new Qn,Gt=new F,Yt=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?kr:zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(gn.min,Er.min),gn.expandByPoint(Gt),Gt.addVectors(gn.max,Er.max),gn.expandByPoint(Gt)):(gn.expandByPoint(Er.min),gn.expandByPoint(Er.max))}gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Gt.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(e,c),Gt.add(ws)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new F,l[g]=new F;let c=new F,u=new F,f=new F,h=new _e,d=new _e,_=new _e,y=new F,p=new F;function m(g,b,C){c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,C),h.fromBufferAttribute(r,g),d.fromBufferAttribute(r,b),_.fromBufferAttribute(r,C),u.sub(c),f.sub(c),d.sub(h),_.sub(h);let I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(I),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(I),o[g].add(y),o[b].add(y),o[C].add(y),l[g].add(p),l[b].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let g=0,b=S.length;g<b;++g){let C=S[g],I=C.start,U=C.count;for(let H=I,D=I+U;H<D;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let w=new F,v=new F,T=new F,E=new F;function P(g){T.fromBufferAttribute(s,g),E.copy(T);let b=o[g];w.copy(b),w.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(E,b);let I=v.dot(l[g])<0?-1:1;a.setXYZW(g,w.x,w.y,w.z,I)}for(let g=0,b=S.length;g<b;++g){let C=S[g],I=C.start,U=C.count;for(let H=I,D=I+U;H<D;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){let _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new _n(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Cc=new F,_p=new F,xp=new it,Dn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Cc.subVectors(n,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Cc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xp.getNormalMatrix(e),s=this.coplanarPoint(Cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vp=0,fi=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Xs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Kc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var hi=new F,Rc=new F,Ga=new F,Wa=new F,vo=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Wa.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ga),o=Wa.dot(this.direction),l=-Wa.dot(Ga),c=Wa.lengthSq(),u=Math.abs(1-a*a),f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rc).addScaledVector(Ga,h),d}intersectSphere(e,t){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,y=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(u),P,g,b,C,I,U,H,D,N,j,Z,de;if(v>=T&&v>=E?(b=l,U=f,N=_,de=m,l>=0?(P=c,g=u,C=h,I=d,H=y,D=p,j=S,Z=w):(P=u,g=c,C=d,I=h,H=p,D=y,j=w,Z=S)):T>=E?(b=c,U=h,N=y,de=S,c>=0?(P=u,g=l,C=d,I=f,H=p,D=_,j=w,Z=m):(P=l,g=u,C=f,I=d,H=_,D=p,j=m,Z=w)):(b=u,U=d,N=p,de=w,u>=0?(P=l,g=c,C=f,I=h,H=_,D=y,j=m,Z=S):(P=c,g=l,C=h,I=f,H=y,D=_,j=S,Z=m)),b===0)return null;let ne=P/b,ae=g/b,oe=1/b,De=C-ne*U,O=I-ae*U,G=H-ne*N,X=D-ae*N,le=j-ne*de,R=Z-ae*de,W=le*X-R*G,ie=De*R-O*le,$=G*O-X*De;if(s){if(W<0||ie<0||$<0)return null}else if((W<0||ie<0||$<0)&&(W>0||ie>0||$>0))return null;let ee=W+ie+$;if(ee===0)return null;let ge=oe*(W*U+ie*N+$*de);return(ee>0?ge<0:ge>0)?null:this.at(ge/ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ah=new ut,Ki=new vo,qa=new Ii,wh=new F,Xa=new F,Ya=new F,Qa=new F,Pc=new F,Ja=new F,Ch=new F,$a=new F,Ee=class extends Xt{constructor(e=new Yt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Pc.fromBufferAttribute(f,e),a?Ja.addScaledVector(Pc,u):Ja.addScaledVector(Pc.sub(t),u))}t.add(Ja)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(qa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(qa,wh)===null||Ki.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Ah.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let p=h[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),w=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,T=w;v<T;v+=3){let E=o.getX(v),P=o.getX(v+1),g=o.getX(v+2);s=Za(this,m,e,n,c,u,f,E,P,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=_,m=y;p<m;p+=3){let S=o.getX(p),w=o.getX(p+1),v=o.getX(p+2);s=Za(this,a,e,n,c,u,f,S,w,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let p=h[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,T=w;v<T;v+=3){let E=v,P=v+1,g=v+2;s=Za(this,m,e,n,c,u,f,E,P,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=_,m=y;p<m;p+=3){let S=p,w=p+1,v=p+2;s=Za(this,a,e,n,c,u,f,S,w,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function yp(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bi,o),l===null)return null;$a.copy(o),$a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:i}}function Za(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Xa),i.getVertexPosition(l,Ya),i.getVertexPosition(c,Qa);let u=yp(i,e,t,n,Xa,Ya,Qa,Ch);if(u){let f=new F;Pi.getBarycoord(Ch,Xa,Ya,Qa,f),s&&(u.uv=Pi.getInterpolatedAttribute(s,o,l,c,f,new _e)),r&&(u.uv1=Pi.getInterpolatedAttribute(r,o,l,c,f,new _e)),a&&(u.normal=Pi.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Pi.getNormal(Xa,Ya,Qa,h.normal),u.face=h,u.barycoord=f}return u}var Hr=class extends on{constructor(e=null,t=1,n=1,s,r,a,o,l,c=qt,u=qt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends _n{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new ut,Rh=new ut,ja=[],Ph=new Qn,Mp=new ut,Tr=new Ee,Ar=new Ii,Jn=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Ph.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Ph)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Ar.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Rh.multiplyMatrices(n,Cs),Tr.matrixWorld=Rh,Tr.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=r,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(s*this.count),s,this.count,Zo,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new Ii,Sp=new _e(.5,.5),Ka=new F,zs=class{constructor(e=new Dn,t=new Dn,n=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],y=r[9],p=r[10],m=r[11],S=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,m-_,T-S).normalize(),s[1].setComponents(c+a,d+u,m+_,T+S).normalize(),s[2].setComponents(c+o,d+f,m+y,T+w).normalize(),s[3].setComponents(c-o,d-f,m-y,T-w).normalize(),n)s[4].setComponents(l,h,p,v).normalize(),s[5].setComponents(c-l,d-h,m-p,T-v).normalize();else if(s[4].setComponents(c-l,d-h,m-p,T-v).normalize(),t===Nn)s[5].setComponents(c+l,d+h,m+p,T+v).normalize();else if(t===Us)s[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);let t=Sp.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends on{constructor(e=[],t=zi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ns=class extends on{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends on{constructor(e,t,n=Fn,s,r,a,o=qt,l=qt,c,u=Xn,f=1){if(u!==Xn&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},yo=class extends Li{constructor(e,t=Fn,n=zi,s,r,a=qt,o=qt,l,c=Xn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wr=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mt=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function _(y,p,m,S,w,v,T,E,P,g,b){let C=v/P,I=T/g,U=v/2,H=T/2,D=E/2,N=P+1,j=g+1,Z=0,de=0,ne=new F;for(let ae=0;ae<j;ae++){let oe=ae*I-H;for(let De=0;De<N;De++){let O=De*C-U;ne[y]=O*S,ne[p]=oe*w,ne[m]=D,c.push(ne.x,ne.y,ne.z),ne[y]=0,ne[p]=0,ne[m]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(De/P),f.push(1-ae/g),Z+=1}}for(let ae=0;ae<g;ae++)for(let oe=0;oe<P;oe++){let De=h+oe+N*ae,O=h+oe+N*(ae+1),G=h+(oe+1)+N*(ae+1),X=h+(oe+1)+N*ae;l.push(De,O,X),l.push(O,G,X),de+=6}o.addGroup(d,de,b),d+=de,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pi=class i extends Yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,u=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],_=0,y=[],p=n/2,m=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function S(){let v=new F,T=new F,E=0,P=(t-e)/n;for(let g=0;g<=r;g++){let b=[],C=g/r,I=C*(t-e)+e;for(let U=0;U<=s;U++){let H=U/s,D=H*l+o,N=Math.sin(D),j=Math.cos(D);T.x=I*N,T.y=-C*n+p,T.z=I*j,f.push(T.x,T.y,T.z),v.set(N,P,j).normalize(),h.push(v.x,v.y,v.z),d.push(H,1-C),b.push(_++)}y.push(b)}for(let g=0;g<s;g++)for(let b=0;b<r;b++){let C=y[b][g],I=y[b+1][g],U=y[b+1][g+1],H=y[b][g+1];(e>0||b!==0)&&(u.push(C,I,H),E+=3),(t>0||b!==r-1)&&(u.push(I,U,H),E+=3)}c.addGroup(m,E,0),m+=E}function w(v){let T=_,E=new _e,P=new F,g=0,b=v===!0?e:t,C=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*C,0),h.push(0,C,0),d.push(.5,.5),_++;let I=_;for(let U=0;U<=s;U++){let D=U/s*l+o,N=Math.cos(D),j=Math.sin(D);P.x=b*j,P.y=p*C,P.z=b*N,f.push(P.x,P.y,P.z),h.push(0,C,0),E.x=N*.5+.5,E.y=j*.5*C+.5,d.push(E.x,E.y),_++}for(let U=0;U<s;U++){let H=T+U,D=I+U;v===!0?u.push(D,D+1,H):u.push(D+1,D,H),g+=3}c.addGroup(m,g,v===!0?1:2),m+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Di=class i extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class i extends Yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new F,v=new F,T=new F;for(let E=0;E<t.length;E+=3)d(t[E+0],w),d(t[E+1],v),d(t[E+2],T),l(w,v,T,S)}function l(S,w,v,T){let E=T+1,P=[];for(let g=0;g<=E;g++){P[g]=[];let b=S.clone().lerp(v,g/E),C=w.clone().lerp(v,g/E),I=E-g;for(let U=0;U<=I;U++)U===0&&g===E?P[g][U]=b:P[g][U]=b.clone().lerp(C,U/I)}for(let g=0;g<E;g++)for(let b=0;b<2*(E-g)-1;b++){let C=Math.floor(b/2);b%2===0?(h(P[g][C+1]),h(P[g+1][C]),h(P[g][C])):(h(P[g][C+1]),h(P[g+1][C+1]),h(P[g+1][C]))}}function c(S){let w=new F;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let S=new F;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=p(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;a.push(v,1-T)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){let w=a[S+0],v=a[S+2],T=a[S+4],E=Math.max(w,v,T),P=Math.min(w,v,T);E>.9&&P<.1&&(w<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,w){let v=S*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function _(){let S=new F,w=new F,v=new F,T=new F,E=new _e,P=new _e,g=new _e;for(let b=0,C=0;b<r.length;b+=9,C+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(a[C+0],a[C+1]),P.set(a[C+2],a[C+3]),g.set(a[C+4],a[C+5]),T.copy(S).add(w).add(v).divideScalar(3);let I=p(T);y(E,C+0,S,I),y(P,C+2,w,I),y(g,C+4,v,I)}}function y(S,w,v,T){T<0&&S.x===1&&(a[w]=S.x-1),v.x===0&&v.z===0&&(a[w]=T/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new _e:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new ut;for(let d=0;d<=e;d++){let _=d/e;s[d]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ks=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},So=class extends ks{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ih=new F,Lh=new F,Ic=new mu,Lc=new mu,Dc=new mu,bo=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Lh.subVectors(s[0],s[1]).add(s[0]),c=Lh);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ih.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ih),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),p<1e-4&&(p=y),Ic.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,p),Lc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,p),Dc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,p)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Lc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Dc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ic.calc(l),Lc.calc(l),Dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function bp(i,e){let t=1-i;return t*t*e}function Ep(i,e){return 2*(1-i)*i*e}function Tp(i,e){return i*i*e}function Cr(i,e,t,n){return bp(i,e)+Ep(i,t)+Tp(i,n)}function Ap(i,e){let t=1-i;return t*t*t*e}function wp(i,e){let t=1-i;return 3*t*t*i*e}function Cp(i,e){return 3*(1-i)*i*i*e}function Rp(i,e){return i*i*i*e}function Rr(i,e,t,n,s){return Ap(i,e)+wp(i,t)+Cp(i,n)+Rp(i,s)}var qr=class extends xn{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends xn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y),Rr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends xn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends xn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends xn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends xn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Dh(o,l.x,c.x,u.x,f.x),Dh(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},kc=Object.freeze({__proto__:null,ArcCurve:So,CatmullRomCurve3:bo,CubicBezierCurve:qr,CubicBezierCurve3:Eo,EllipseCurve:ks,LineCurve:Xr,LineCurve3:To,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:Ao,SplineCurve:Qr}),wo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new kc[s.type]().fromJSON(s))}return this}},$n=class extends wo{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xr(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Yr(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new qr(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ks(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mi=class extends $n{constructor(e){super(e),this.uuid=Zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $n().fromJSON(s))}return this}};function Pp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Up(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let h=t;h<s;h+=t){let d=i[h],_=i[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Jr(r,a,t,o,l,c,0),a}function wd(i,e,t,n,s){let r;if(s===Xp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Nh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Nh(a/n|0,i[a],i[a+1],r);return r&&Hs(r,r.next)&&(Zr(r),r=r.next),r}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&kp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Lp(i,n,s,r):Ip(i)){e.push(l.i,i.i,c.i),Zr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Dp(is(i),e),Jr(i,e,t,n,s,r,2)):a===2&&Np(i,e,t,n,s,r):Jr(is(i),e,t,n,s,r,1);break}}}function Ip(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&wr(s,o,r,l,a,c,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Lp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),y=Math.max(o,l,c),p=Math.max(u,f,h),m=Hc(d,_,e,t,n),S=Hc(y,p,e,t,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=S;){if(w.x>=d&&w.x<=y&&w.y>=_&&w.y<=p&&w!==s&&w!==a&&wr(o,u,l,f,c,h,w.x,w.y)&&Lt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=y&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&wr(o,u,l,f,c,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=y&&w.y>=_&&w.y<=p&&w!==s&&w!==a&&wr(o,u,l,f,c,h,w.x,w.y)&&Lt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=y&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&wr(o,u,l,f,c,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Hs(n,s)&&Rd(n,t,t.next,s)&&$r(n,s)&&$r(s,n)&&(e.push(n.i,t.i,s.i),Zr(t),Zr(t.next),t=i=s),t=t.next}while(t!==i);return is(t)}function Np(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gp(a,o)){let l=Pd(a,o);a=is(a,a.next),l=is(l,l.next),Jr(a,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Up(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=wd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vp(c))}s.sort(Fp);for(let r=0;r<s.length;r++)t=Op(s[r],t);return t}function Fp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Op(i,e){let t=Bp(i,e);if(!t)return e;let n=Pd(t,i);return is(n,n.next),is(t,t.next)}function Bp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Cd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);$r(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&zp(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function zp(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function kp(i,e,t,n){let s=i;do s.z===0&&(s.z=Hc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hp(s)}function Hp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Hc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function wr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Cd(i,e,t,n,s,r,a,o)}function Gp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wp(i,e)&&($r(i,e)&&$r(e,i)&&qp(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||Hs(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function Rd(i,e,t,n){let s=to(Lt(i,e,t)),r=to(Lt(i,e,n)),a=to(Lt(t,n,i)),o=to(Lt(t,n,e));return!!(s!==r&&a!==o||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||a===0&&eo(t,i,n)||o===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function Wp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function qp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Pd(i,e){let t=Vc(i.i,i.x,i.y),n=Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(i,e,t,n){let s=Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Gc=class{static triangulate(e,t,n=2){return Pp(e,t,n)}},qn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Uh(e),Fh(n,e);let a=e.length;t.forEach(Uh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fh(n,t[l]);let o=Gc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vs=class i extends Yt{constructor(e=new mi([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Yp,w,v=!1,T,E,P,g;if(m){w=m.getSpacedPoints(u),v=!0,h=!1;let k=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,k),E=new F,P=new F,g=new F}h||(p=0,d=0,_=0,y=0);let b=o.extractPoints(c),C=b.shape,I=b.holes;if(!qn.isClockWise(C)){C=C.reverse();for(let k=0,J=I.length;k<J;k++){let K=I[k];qn.isClockWise(K)&&(I[k]=K.reverse())}}function H(k){let K=10000000000000001e-36,ce=k[0];for(let pe=1;pe<=k.length;pe++){let Be=pe%k.length,Pe=k[Be],Ne=Pe.x-ce.x,He=Pe.y-ce.y,L=Ne*Ne+He*He,st=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(ce.x),Math.abs(ce.y)),nt=K*st*st;if(L<=nt){k.splice(Be,1),pe--;continue}ce=Pe}}H(C),I.forEach(H);let D=I.length,N=C;for(let k=0;k<D;k++){let J=I[k];C=C.concat(J)}function j(k,J,K){return J||et("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(J,K)}let Z=C.length;function de(k,J,K){let ce,pe,Be,Pe=k.x-J.x,Ne=k.y-J.y,He=K.x-k.x,L=K.y-k.y,st=Pe*Pe+Ne*Ne,nt=Pe*L-Ne*He;if(Math.abs(nt)>Number.EPSILON){let A=Math.sqrt(st),x=Math.sqrt(He*He+L*L),V=J.x-Ne/A,q=J.y+Pe/A,se=K.x-L/x,xe=K.y+He/x,ve=((se-V)*L-(xe-q)*He)/(Pe*L-Ne*He);ce=V+Pe*ve-k.x,pe=q+Ne*ve-k.y;let re=ce*ce+pe*pe;if(re<=2)return new _e(ce,pe);Be=Math.sqrt(re/2)}else{let A=!1;Pe>Number.EPSILON?He>Number.EPSILON&&(A=!0):Pe<-Number.EPSILON?He<-Number.EPSILON&&(A=!0):Math.sign(Ne)===Math.sign(L)&&(A=!0),A?(ce=-Ne,pe=Pe,Be=Math.sqrt(st)):(ce=Pe,pe=Ne,Be=Math.sqrt(st/2))}return new _e(ce/Be,pe/Be)}let ne=[];for(let k=0,J=N.length,K=J-1,ce=k+1;k<J;k++,K++,ce++)K===J&&(K=0),ce===J&&(ce=0),ne[k]=de(N[k],N[K],N[ce]);let ae=[],oe,De=ne.concat();for(let k=0,J=D;k<J;k++){let K=I[k];oe=[];for(let ce=0,pe=K.length,Be=pe-1,Pe=ce+1;ce<pe;ce++,Be++,Pe++)Be===pe&&(Be=0),Pe===pe&&(Pe=0),oe[ce]=de(K[ce],K[Be],K[Pe]);ae.push(oe),De=De.concat(oe)}let O;if(p===0)O=qn.triangulateShape(N,I);else{let k=[],J=[];for(let K=0;K<p;K++){let ce=K/p,pe=d*Math.cos(ce*Math.PI/2),Be=_*Math.sin(ce*Math.PI/2)+y;for(let Pe=0,Ne=N.length;Pe<Ne;Pe++){let He=j(N[Pe],ne[Pe],Be);ie(He.x,He.y,-pe),ce===0&&k.push(He)}for(let Pe=0,Ne=D;Pe<Ne;Pe++){let He=I[Pe];oe=ae[Pe];let L=[];for(let st=0,nt=He.length;st<nt;st++){let A=j(He[st],oe[st],Be);ie(A.x,A.y,-pe),ce===0&&L.push(A)}ce===0&&J.push(L)}}O=qn.triangulateShape(k,J)}let G=O.length,X=_+y;for(let k=0;k<Z;k++){let J=h?j(C[k],De[k],X):C[k];v?(P.copy(T.normals[0]).multiplyScalar(J.x),E.copy(T.binormals[0]).multiplyScalar(J.y),g.copy(w[0]).add(P).add(E),ie(g.x,g.y,g.z)):ie(J.x,J.y,0)}for(let k=1;k<=u;k++)for(let J=0;J<Z;J++){let K=h?j(C[J],De[J],X):C[J];v?(P.copy(T.normals[k]).multiplyScalar(K.x),E.copy(T.binormals[k]).multiplyScalar(K.y),g.copy(w[k]).add(P).add(E),ie(g.x,g.y,g.z)):ie(K.x,K.y,f/u*k)}for(let k=p-1;k>=0;k--){let J=k/p,K=d*Math.cos(J*Math.PI/2),ce=_*Math.sin(J*Math.PI/2)+y;for(let pe=0,Be=N.length;pe<Be;pe++){let Pe=j(N[pe],ne[pe],ce);ie(Pe.x,Pe.y,f+K)}for(let pe=0,Be=I.length;pe<Be;pe++){let Pe=I[pe];oe=ae[pe];for(let Ne=0,He=Pe.length;Ne<He;Ne++){let L=j(Pe[Ne],oe[Ne],ce);v?ie(L.x,L.y+w[u-1].y,w[u-1].x+K):ie(L.x,L.y,f+K)}}}le(),R();function le(){let k=s.length/3;if(h){let J=0,K=Z*J;for(let ce=0;ce<G;ce++){let pe=O[ce];$(pe[2]+K,pe[1]+K,pe[0]+K)}J=u+p*2,K=Z*J;for(let ce=0;ce<G;ce++){let pe=O[ce];$(pe[0]+K,pe[1]+K,pe[2]+K)}}else{for(let J=0;J<G;J++){let K=O[J];$(K[2],K[1],K[0])}for(let J=0;J<G;J++){let K=O[J];$(K[0]+Z*u,K[1]+Z*u,K[2]+Z*u)}}n.addGroup(k,s.length/3-k,0)}function R(){let k=s.length/3,J=0;W(N,J),J+=N.length;for(let K=0,ce=I.length;K<ce;K++){let pe=I[K];W(pe,J),J+=pe.length}n.addGroup(k,s.length/3-k,1)}function W(k,J){let K=k.length;for(;--K>=0;){let ce=K,pe=K-1;pe<0&&(pe=k.length-1);for(let Be=0,Pe=u+p*2;Be<Pe;Be++){let Ne=Z*Be,He=Z*(Be+1),L=J+ce+Ne,st=J+pe+Ne,nt=J+pe+He,A=J+ce+He;ee(L,st,nt,A)}}}function ie(k,J,K){l.push(k),l.push(J),l.push(K)}function $(k,J,K){ge(k),ge(J),ge(K);let ce=s.length/3,pe=S.generateTopUV(n,s,ce-3,ce-2,ce-1);tt(pe[0]),tt(pe[1]),tt(pe[2])}function ee(k,J,K,ce){ge(k),ge(J),ge(ce),ge(J),ge(K),ge(ce);let pe=s.length/3,Be=S.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);tt(Be[0]),tt(Be[1]),tt(Be[3]),tt(Be[1]),tt(Be[2]),tt(Be[3])}function ge(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function tt(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new kc[s.type]().fromJSON(s)),new i(n,e.options)}},Yp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new _e(r,a),new _e(o,l),new _e(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],_=e[s*3+2],y=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-f),new _e(h,1-_),new _e(y,1-m)]:[new _e(o,1-l),new _e(u,1-f),new _e(d,1-_),new _e(p,1-m)]}};function Qp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ss=class i extends Mo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Zn=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],y=[],p=[];for(let m=0;m<u;m++){let S=m*h-a;for(let w=0;w<c;w++){let v=w*f-r;_.push(v,-S,0),y.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let w=S+c*m,v=S+c*(m+1),T=S+1+c*(m+1),E=S+1+c*m;d.push(w,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jn=class i extends Yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new F,_=new _e;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let S=m+p,w=S,v=S+n+1,T=S+n+2,E=S+1;o.push(w,v,E),o.push(v,T,E)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ni=class i extends Yt{constructor(e=new mi([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function c(u){let f=s.length/3,h=u.extractPoints(t),d=h.shape,_=h.holes;qn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){let S=_[p];qn.isClockWise(S)===!0&&(_[p]=S.reverse())}let y=qn.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){let S=_[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){let S=d[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=y.length;p<m;p++){let S=y[p],w=S[0]+f,v=S[1]+f,T=S[2]+f;n.push(w,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Jp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var gi=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new F,h=new F,d=[],_=[],y=[],p=[];for(let m=0;m<=n;m++){let S=[],w=m/n,v=a+w*o,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T),P=0;m===0&&a===0?P=.5/t:m===n&&l===Math.PI&&(P=-.5/t);for(let g=0;g<=t;g++){let b=g/t,C=s+b*r;f.x=-E*Math.cos(C),f.y=T,f.z=E*Math.sin(C),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(b+P,1-w),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let w=u[m][S+1],v=u[m][S],T=u[m+1][S],E=u[m+1][S+1];(m!==0||a>0)&&d.push(w,v,E),(m!==n-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kn=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new F,d=new F,_=new F;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let m=0;m<=s;m++){let S=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(S),d.y=(e+t*Math.cos(p))*Math.sin(S),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),_.subVectors(d,h).normalize(),u.push(_.x,_.y,_.z),f.push(m/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,S=(s+1)*(y-1)+p-1,w=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,S,v),l.push(S,w,v)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Oh(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Oh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let s in n)e[s]=n[s]}return e}function Oh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $p(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Id={clone:cs,merge:sn},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Co=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jr=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Kr=class extends fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ro=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Po=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends Ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:r=e,o=2*t-n;break;case zc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:a=e,l=2*n-t;break;case zc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-t)/(s-t),y=_*_,p=y*_,m=-h*p+2*h*y-h*_,S=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*_+1,w=(-1-d)*p+(1.5+d)*y+.5*_,v=d*p-d*y;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+S*a[c+T]+w*a[l+T]+v*a[f+T];return r}},Lo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Do=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},No=class extends Ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-t)/(s-t),y=1-_;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*_;return r}let h=o*2,d=e-1;for(let _=0;_!==o;++_){let y=a[c+_],p=a[l+_],m=d*h+_*2,S=f[m],w=f[m+1],v=e*h+_*2,T=u[v],E=u[v+1],P=em(n,t,S,T,s);r[_]=Ld(P,y,w,E,p)}return r}};function Ld(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Kp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function em(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ld(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Kp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Nc(e.settings)&&(n.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new No(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break;case Fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Nc(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&np(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===so,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let _=0;_!==n;++_){let y=t[f+_];if(y!==t[h+_]||y!==t[d+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Nc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=mo;var Fi=class extends vn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Pr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Uo.prototype.ValueTypeName="color";var Fo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Fo.prototype.ValueTypeName="number";var Oo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},ea=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends vn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Pr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Bo.prototype.ValueTypeName="vector";var zo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dd=new zo,ko=class{constructor(e){this.manager=e!==void 0?e:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ta=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uc=new ut,zh=new F,kh=new F,Gs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},no=new F,io=new Zt,Gn=new F,na=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(no,io,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new F,Hh=new _e,Vh=new _e,Wt=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,Vh),t.subVectors(Vh,Hh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wc=class extends Gs{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ia=class extends rs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qc=class extends Gs{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},as=class extends rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ws=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xc=class extends Gs{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ps=-90,Is=1,Ho=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(Ps,Is,e,t);s.layers=this.layers,this.add(s);let r=new Wt(Ps,Is,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Ps,Is,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Ps,Is,e,t);o.layers=this.layers,this.add(o);let l=new Wt(Ps,Is,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Ps,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Vo=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _u="\\[\\]\\.:\\/",tm=new RegExp("["+_u+"]","g"),xu="[^"+_u+"]",nm="[^"+_u.replace("\\.","")+"]",im=/((?:WC+[\/:])*)/.source.replace("WC",xu),sm=/(WCOD+)?/.source.replace("WCOD",nm),rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),om=new RegExp("^"+im+sm+rm+am+"$"),lm=["material","materials","bones","map"],Yc=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){let t=om.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Yc;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);var ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ke("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Eu=class Eu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Eu.prototype.isMatrix2=!0;var Qc=Eu;function vu(i,e,t,n){let s=cm(n);switch(t){case hu:return i*e;case Zo:return i*e/s.components*s.byteLength;case jo:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case Ko:return i*e*2/s.components*s.byteLength;case du:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case el:return i*e*4/s.components*s.byteLength;case ua:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(e,8)/4;case tl:case il:return Math.max(i,8)*Math.max(e,8)/2;case rl:case al:case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ol:case pa:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ma:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cm(i){switch(i){case pn:case ou:return{byteLength:1,components:1};case Qs:case lu:case On:return{byteLength:2,components:1};case Jo:case $o:return{byteLength:2,components:4};case Fn:case Qo:case Tn:return{byteLength:4,components:1};case cu:case uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){let _=f[h],y=f[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){let y=f[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,Am=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
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
#endif`,u0=`uniform sampler2D dfgLUT;
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
}`,h0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,vg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,zg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:xm,aomap_pars_fragment:vm,batching_pars_vertex:ym,batching_vertex:Mm,begin_vertex:Sm,beginnormal_vertex:bm,bsdfs:Em,iridescence_fragment:Tm,bumpmap_pars_fragment:Am,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Pm,color_fragment:Im,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Nm,common:Um,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:km,emissivemap_pars_fragment:Hm,colorspace_fragment:Vm,colorspace_pars_fragment:Gm,envmap_fragment:Wm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:s0,envmap_vertex:Qm,fog_vertex:Jm,fog_pars_vertex:$m,fog_fragment:Zm,fog_pars_fragment:jm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:u0,lights_fragment_begin:h0,lights_fragment_maps:d0,lights_fragment_end:f0,lightprobes_pars_fragment:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:x0,map_fragment:v0,map_pars_fragment:y0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:E0,morphinstance_vertex:T0,morphcolor_vertex:A0,morphnormal_vertex:w0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:I0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:N0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:k0,packing:H0,premultiplied_alpha_fragment:V0,project_vertex:G0,dithering_fragment:W0,dithering_pars_fragment:q0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:J0,shadowmap_vertex:$0,shadowmask_pars_fragment:Z0,skinbase_vertex:j0,skinning_pars_vertex:K0,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:ug,worldpos_vertex:hg,background_vert:dg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:_g,depth_vert:xg,depth_frag:vg,distance_vert:yg,distance_frag:Mg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:Eg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:wg,meshlambert_vert:Cg,meshlambert_frag:Rg,meshmatcap_vert:Pg,meshmatcap_frag:Ig,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Fg,meshphysical_frag:Og,meshtoon_vert:Bg,meshtoon_frag:zg,points_vert:kg,points_frag:Hg,shadow_vert:Vg,shadow_frag:Gg,sprite_vert:Wg,sprite_frag:qg},Ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ni={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Dl={r:0,b:0,g:0},Xg=new ut,nf=new it;nf.set(-1,0,0,0,1,0,0,0,1);function Yg(i,e,t,n,s,r){let a=new Ge(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(S){let w=!1,v=d(S);v===null?p(a,o):v&&v.isColor&&(p(v,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===la)?(c===void 0&&(c=new Ee(new Mt(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:cs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nf),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ee(new Zn(2,2),new ln({name:"BackgroundMaterial",uniforms:cs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,w){S.getRGB(Dl,gu(i)),t.buffers.color.setClear(Dl.r,Dl.g,Dl.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:y,dispose:m}}function Qg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,U,H,D,N){let j=!1,Z=f(I,D,H,U);r!==Z&&(r=Z,c(r.object)),j=d(I,D,H,N),j&&_(I,D,H,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(I,U,H,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,U,H,D){let N=D.wireframe===!0,j=n[U.id];j===void 0&&(j={},n[U.id]=j);let Z=I.isInstancedMesh===!0?I.id:0,de=j[Z];de===void 0&&(de={},j[Z]=de);let ne=de[H.id];ne===void 0&&(ne={},de[H.id]=ne);let ae=ne[N];return ae===void 0&&(ae=h(l()),ne[N]=ae),ae}function h(I){let U=[],H=[],D=[];for(let N=0;N<t;N++)U[N]=0,H[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,U,H,D){let N=r.attributes,j=U.attributes,Z=0,de=H.getAttributes();for(let ne in de)if(de[ne].location>=0){let oe=N[ne],De=j[ne];if(De===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(De=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(De=I.instanceColor)),oe===void 0||oe.attribute!==De||De&&oe.data!==De.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function _(I,U,H,D){let N={},j=U.attributes,Z=0,de=H.getAttributes();for(let ne in de)if(de[ne].location>=0){let oe=j[ne];oe===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));let De={};De.attribute=oe,oe&&oe.data&&(De.data=oe.data),N[ne]=De,Z++}r.attributes=N,r.attributesNum=Z,r.index=D}function y(){let I=r.newAttributes;for(let U=0,H=I.length;U<H;U++)I[U]=0}function p(I){m(I,0)}function m(I,U){let H=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;H[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),N[I]!==U&&(i.vertexAttribDivisor(I,U),N[I]=U)}function S(){let I=r.newAttributes,U=r.enabledAttributes;for(let H=0,D=U.length;H<D;H++)U[H]!==I[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function w(I,U,H,D,N,j,Z){Z===!0?i.vertexAttribIPointer(I,U,H,N,j):i.vertexAttribPointer(I,U,H,D,N,j)}function v(I,U,H,D){y();let N=D.attributes,j=H.getAttributes(),Z=U.defaultAttributeValues;for(let de in j){let ne=j[de];if(ne.location>=0){let ae=N[de];if(ae===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){let oe=ae.normalized,De=ae.itemSize,O=e.get(ae);if(O===void 0)continue;let G=O.buffer,X=O.type,le=O.bytesPerElement,R=X===i.INT||X===i.UNSIGNED_INT||ae.gpuType===Qo;if(ae.isInterleavedBufferAttribute){let W=ae.data,ie=W.stride,$=ae.offset;if(W.isInstancedInterleavedBuffer){for(let ee=0;ee<ne.locationSize;ee++)m(ne.location+ee,W.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<ne.locationSize;ee++)p(ne.location+ee);i.bindBuffer(i.ARRAY_BUFFER,G);for(let ee=0;ee<ne.locationSize;ee++)w(ne.location+ee,De/ne.locationSize,X,oe,ie*le,($+De/ne.locationSize*ee)*le,R)}else{if(ae.isInstancedBufferAttribute){for(let W=0;W<ne.locationSize;W++)m(ne.location+W,ae.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let W=0;W<ne.locationSize;W++)p(ne.location+W);i.bindBuffer(i.ARRAY_BUFFER,G);for(let W=0;W<ne.locationSize;W++)w(ne.location+W,De/ne.locationSize,X,oe,De*le,De/ne.locationSize*W*le,R)}}else if(Z!==void 0){let oe=Z[de];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(ne.location,oe);break;case 3:i.vertexAttrib3fv(ne.location,oe);break;case 4:i.vertexAttrib4fv(ne.location,oe);break;default:i.vertexAttrib1fv(ne.location,oe)}}}}S()}function T(){b();for(let I in n){let U=n[I];for(let H in U){let D=U[H];for(let N in D){let j=D[N];for(let Z in j)u(j[Z].object),delete j[Z];delete D[N]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let H in U){let D=U[H];for(let N in D){let j=D[N];for(let Z in j)u(j[Z].object),delete j[Z];delete D[N]}}delete n[I.id]}function P(I){for(let U in n){let H=n[U];for(let D in H){let N=H[D];if(N[I.id]===void 0)continue;let j=N[I.id];for(let Z in j)u(j[Z].object),delete j[Z];delete N[I.id]}}}function g(I){for(let U in n){let H=n[U],D=I.isInstancedMesh===!0?I.id:0,N=H[D];if(N!==void 0){for(let j in N){let Z=N[j];for(let de in Z)u(Z[de].object),delete Z[de];delete N[j]}delete H[D],Object.keys(H).length===0&&delete n[U]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:g,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function Jg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $g(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let g=P===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==pn&&P!==Tn&&!g&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:E}}function Zg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Dn,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{let S=r?0:n,w=S*4,v=m.clippingState||null;l.value=v,v=u(_,h,w,d);for(let T=0;T!==w;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,_!==!0||p===null){let m=d+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,v=d;w!==y;++w,v+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Ks=4,jg=6,Kg=20,e_=256,xa=new Ws,Nd=new Ge,Tu=null,Au=0,wu=0,Cu=!1,t_=new F,us=new F,Ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=t_}=r;Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Au,wu),this._renderer.xr.enabled=Cu,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:On,format:An,colorSpace:Ir,depthBuffer:!1},s=Ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n_(r)),this._blurMaterial=s_(r,e,t),this._ggxMaterial=i_(r,e,t)}return s}_compileMaterial(e){let t=new Ee(new Yt,e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,s,r){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Nd),f.toneMapping=Un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new Mt,new Et({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Nd),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let T=this._cubeSize;js(s,v*T,w>2?T:0,T,T),f.setRenderTarget(s),m&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zi||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,y=this._sizeLods[n],p=3*y*(n>_-Ks?n-_+Ks:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,js(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(o,xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,js(e,p,m,3*y,2*y),s.setRenderTarget(e),s.render(o,xa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ks?s-this._lodMax+Ks:0),h=4*(this._cubeSize-u);js(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,xa)}};function n_(i){let e=[],t=[],n=i,s=i-Ks+1+jg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let m=0;m<f;m++){let S=m%3*2/3-1,w=m>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];_.set(v,d*h*m);for(let T=0;T<h;T++){let E=u[T*2]*2-1,P=u[T*2+1]*2-1;m===0?us.set(1,P,E):m===1?us.set(-E,1,-P):m===2?us.set(-E,P,1):m===3?us.set(-1,P,-E):m===4?us.set(-E,-1,P):us.set(E,P,-1),us.toArray(y,(m*h+T)*d)}}let p=new Yt;p.setAttribute("position",new _n(_,d)),p.setAttribute("outputDirection",new _n(y,d)),t.push(new Ee(p,null)),n>Ks&&n--}return{lodMeshes:t,sizeLods:e}}function Ud(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function i_(i,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function s_(i,e,t){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Fd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Od(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fl=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ei});r.uniforms.tEquirect.value=t;let a=new Ee(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=$t),new Ho(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function r_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===qo||d===Xo)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new Fl(_.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,_=d===qo||d===Xo,y=d===zi||d===ls;if(_||y){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Ul(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let S=h.image;return _&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Ul(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===qo?h.mapping=zi:d===Xo&&(h.mapping=ls),h}function l(h){let d=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&d++;return d===_}function c(h){let d=h.target;d.removeEventListener("dispose",c);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function a_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function o_(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,_=f.attributes.position,y=0;if(_===void 0)return;if(d!==null){let S=d.array;y=d.version;for(let w=0,v=S.length;w<v;w+=3){let T=S[w+0],E=S[w+1],P=S[w+2];h.push(T,E,E,P,P,T)}}else{let S=_.array;y=_.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let T=w+0,E=w+1,P=w+2;h.push(T,E,E,P,P,T)}}let p=new(_.count>=65535?kr:zr)(h,1);p.version=y;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function l_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=h[p];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function c_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function u_(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;d===!0&&(w=1),_===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*T*4*f),P=new Ur(E,v,T,f);P.type=Tn,P.needsUpdate=!0;let g=w*4;for(let C=0;C<f;C++){let I=p[C],U=m[C],H=S[C],D=v*T*4*C;for(let N=0;N<I.count;N++){let j=N*g;d===!0&&(s.fromBufferAttribute(I,N),E[D+j+0]=s.x,E[D+j+1]=s.y,E[D+j+2]=s.z,E[D+j+3]=0),_===!0&&(s.fromBufferAttribute(U,N),E[D+j+4]=s.x,E[D+j+5]=s.y,E[D+j+6]=s.z,E[D+j+7]=0),y===!0&&(s.fromBufferAttribute(H,N),E[D+j+8]=s.x,E[D+j+9]=s.y,E[D+j+10]=s.z,E[D+j+11]=H.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new _e(v,T)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function h_(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var d_={[eu]:"LINEAR_TONE_MAPPING",[tu]:"REINHARD_TONE_MAPPING",[nu]:"CINEON_TONE_MAPPING",[oa]:"ACES_FILMIC_TONE_MAPPING",[su]:"AGX_TONE_MAPPING",[ru]:"NEUTRAL_TONE_MAPPING",[iu]:"CUSTOM_TONE_MAPPING"};function f_(i,e,t,n,s,r){let a=new dn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Yt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new Co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ee(c,u),h=new Ws(-1,1,1,-1,0,1),d=null,_=null,y=!1,p,m=null,S=[],w=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let E=0;E<S.length;E++){let P=S[E];P.setSize&&P.setSize(v,T)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let T=a.width,E=a.height;S.length>0&&o===null&&(o=new dn(T,E,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new dn(T,E,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<S.length;P++){let g=S[P];g.setSize&&g.setSize(T,E)}},this.begin=function(v,T){if(y||v.toneMapping===Un&&S.length===0)return!1;if(m=T,T!==null){let E=T.width,P=T.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return w===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=p,y=!0;let E=a,P=o;for(let g=0;g<S.length;g++){let b=S[g];b.enabled!==!1&&(b.render(v,P,E,T),b.needsSwap!==!1&&(E=P,P=P===o?l:o))}if(d!==v.outputColorSpace||_!==v.toneMapping){d=v.outputColorSpace,_=v.toneMapping,u.defines={},ht.getTransfer(d)===xt&&(u.defines.SRGB_TRANSFER="");let g=d_[_];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(f,h),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var sf=new on,Iu=new Li(1,1),rf=new Ur,af=new xo,of=new Gr,Bd=[],zd=[],kd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bd[s];if(r===void 0&&(r=new Float32Array(s),Bd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=zd[e];t===void 0&&(t=new Int32Array(e),zd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),Vt(t,n)}}function v_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),Vt(t,n)}}function y_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;kd.set(n),i.uniformMatrix4fv(this.addr,!1,kd),Vt(t,n)}}function M_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=t.isReversedDepthBuffer()?Ll:Il,r=Iu):r=sf,t.setTexture2D(e||r,s)}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||af,s)}function I_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||of,s)}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rf,s)}function D_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return v_;case 35676:return y_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return A_;case 36295:return w_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}function N_(i,e){i.uniform1fv(this.addr,e)}function U_(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function F_(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function O_(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function B_(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function z_(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k_(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function H_(i,e){i.uniform1iv(this.addr,e)}function V_(i,e){i.uniform2iv(this.addr,e)}function G_(i,e){i.uniform3iv(this.addr,e)}function W_(i,e){i.uniform4iv(this.addr,e)}function q_(i,e){i.uniform1uiv(this.addr,e)}function X_(i,e){i.uniform2uiv(this.addr,e)}function Y_(i,e){i.uniform3uiv(this.addr,e)}function Q_(i,e){i.uniform4uiv(this.addr,e)}function J_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Iu:a=sf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function $_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||af,r[a])}function Z_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||of,r[a])}function j_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rf,r[a])}function K_(i){switch(i){case 5126:return N_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return B_;case 35675:return z_;case 35676:return k_;case 5124:case 35670:return H_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return q_;case 36294:return X_;case 36295:return Y_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return j_}}var Lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}},Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},Nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ru=/(\w+)(\])?(\[|\.)?/g;function Gd(i,e){i.seq.push(e),i.map[e.id]=e}function ex(i,e,t){let n=i.name,s=n.length;for(Ru.lastIndex=0;;){let r=Ru.exec(n),a=Ru.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gd(t,c===void 0?new Lu(o,i,e):new Du(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Nu(o),Gd(t,f)),t=f}}}var er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ex(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var tx=37297,nx=0;function ix(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var qd=new it;function sx(i){ht._getMatrix(qd,ht.workingColorSpace,i);let e=`mat3( ${qd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ix(i.getShaderSource(e),o)}else return r}function rx(i,e){let t=sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ax={[eu]:"Linear",[tu]:"Reinhard",[nu]:"Cineon",[oa]:"ACESFilmic",[su]:"AgX",[ru]:"Neutral",[iu]:"Custom"};function ox(i,e){let t=ax[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nl=new F;function lx(){ht.getLuminanceCoefficients(Nl);let i=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function ux(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ya(i){return i!==""}function Yd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(dx,px)}var fx=new Map;function px(i,e){let t=ot[e];if(t===void 0){let n=fx.get(e);if(n!==void 0)t=ot[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uu(t)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(i){return i.replace(mx,gx)}function gx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _x={[aa]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function xx(i){return _x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vx={[zi]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function yx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Mx={[ls]:"ENVMAP_MODE_REFRACTION"};function Sx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bx={[Wo]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function Ex(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bx[i.combine]||"ENVMAP_BLENDING_NONE"}function Tx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ax(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=xx(t),c=yx(t),u=Sx(t),f=Ex(t),h=Tx(t),d=cx(t),_=ux(r),y=s.createProgram(),p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ya).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ya).join(`
`),m.length>0&&(m+=`
`)):(p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?ot.tonemapping_pars_fragment:"",t.toneMapping!==Un?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Uu(a),a=Yd(a,t),a=Qd(a,t),o=Uu(o),o=Yd(o,t),o=Qd(o,t),a=Jd(a),o=Jd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+p+a,v=S+m+o,T=Wd(s,s.VERTEX_SHADER,w),E=Wd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,T),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(E)||"",N=U.trim(),j=H.trim(),Z=D.trim(),de=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,E);else{let ae=Xd(s,T,"vertex"),oe=Xd(s,E,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+ae+`
`+oe)}else N!==""?Ke("WebGLProgram: Program Info Log:",N):(j===""||Z==="")&&(ne=!1);ne&&(I.diagnostics={runnable:de,programLog:N,vertexShader:{log:j,prefix:p},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(T),s.deleteShader(E),g=new er(s,y),b=hx(s,y)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,tx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var wx=0,Fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ou(e),t.set(e,n)),n}},Ou=class{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}};function Cx(i){return i===Vi||i===pa||i===ma}function Rx(i,e,t,n,s,r){let a=new Fr,o=new Fu,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,C,I,U,H){let D=I.fog,N=U.geometry,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,de=e.get(g.envMap||j,Z),ne=de&&de.mapping===la?de.image.height:null,ae=d[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Ke("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,De=oe!==void 0?oe.length:0,O=0;N.morphAttributes.position!==void 0&&(O=1),N.morphAttributes.normal!==void 0&&(O=2),N.morphAttributes.color!==void 0&&(O=3);let G,X,le,R;if(ae){let St=ni[ae];G=St.vertexShader,X=St.fragmentShader}else{G=g.vertexShader,X=g.fragmentShader;let St=o.getVertexShaderStage(g),gt=o.getFragmentShaderStage(g);o.update(g,St,gt),le=St.id,R=gt.id}let W=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),$=U.isInstancedMesh===!0,ee=U.isBatchedMesh===!0,ge=!!g.map,tt=!!g.matcap,k=!!de,J=!!g.aoMap,K=!!g.lightMap,ce=!!g.bumpMap&&g.wireframe===!1,pe=!!g.normalMap,Be=!!g.displacementMap,Pe=!!g.emissiveMap,Ne=!!g.metalnessMap,He=!!g.roughnessMap,L=g.anisotropy>0,st=g.clearcoat>0,nt=g.dispersion>0,A=g.retroreflectivity>0,x=g.iridescence>0,V=g.sheen>0,q=g.transmission>0,se=L&&!!g.anisotropyMap,xe=st&&!!g.clearcoatMap,ve=st&&!!g.clearcoatNormalMap,re=st&&!!g.clearcoatRoughnessMap,he=x&&!!g.iridescenceMap,ye=x&&!!g.iridescenceThicknessMap,qe=V&&!!g.sheenColorMap,Te=V&&!!g.sheenRoughnessMap,Me=!!g.specularMap,Xe=!!g.specularColorMap,je=!!g.specularIntensityMap,rt=q&&!!g.transmissionMap,z=q&&!!g.thicknessMap,Se=!!g.gradientMap,ue=!!g.alphaMap,be=g.alphaTest>0,Re=!!g.alphaHash,fe=!!g.extensions,Ye=Un;g.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let Ve={shaderID:ae,shaderType:g.type,shaderName:g.name,vertexShader:G,fragmentShader:X,defines:g.defines,customVertexShaderID:le,customFragmentShaderID:R,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:ee,batchingColor:ee&&U._colorsTexture!==null,instancing:$,instancingColor:$&&U.instanceColor!==null,instancingMorph:$&&U.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ge,matcap:tt,envMap:k,envMapMode:k&&de.mapping,envMapCubeUVHeight:ne,aoMap:J,lightMap:K,bumpMap:ce,normalMap:pe,displacementMap:Be,emissiveMap:Pe,normalMapObjectSpace:pe&&g.normalMapType===pd,normalMapTangentSpace:pe&&g.normalMapType===ga,packedNormalMap:pe&&g.normalMapType===ga&&Cx(g.normalMap.format),metalnessMap:Ne,roughnessMap:He,anisotropy:L,anisotropyMap:se,clearcoat:st,clearcoatMap:xe,clearcoatNormalMap:ve,clearcoatRoughnessMap:re,dispersion:nt,retroreflection:A,iridescence:x,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:V,sheenColorMap:qe,sheenRoughnessMap:Te,specularMap:Me,specularColorMap:Xe,specularIntensityMap:je,transmission:q,transmissionMap:rt,thicknessMap:z,gradientMap:Se,opaque:g.transparent===!1&&g.blending===Xs&&g.alphaToCoverage===!1,alphaMap:ue,alphaTest:be,alphaHash:Re,combine:g.combine,mapUv:ge&&_(g.map.channel),aoMapUv:J&&_(g.aoMap.channel),lightMapUv:K&&_(g.lightMap.channel),bumpMapUv:ce&&_(g.bumpMap.channel),normalMapUv:pe&&_(g.normalMap.channel),displacementMapUv:Be&&_(g.displacementMap.channel),emissiveMapUv:Pe&&_(g.emissiveMap.channel),metalnessMapUv:Ne&&_(g.metalnessMap.channel),roughnessMapUv:He&&_(g.roughnessMap.channel),anisotropyMapUv:se&&_(g.anisotropyMap.channel),clearcoatMapUv:xe&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(g.sheenRoughnessMap.channel),specularMapUv:Me&&_(g.specularMap.channel),specularColorMapUv:Xe&&_(g.specularColorMap.channel),specularIntensityMapUv:je&&_(g.specularIntensityMap.channel),transmissionMapUv:rt&&_(g.transmissionMap.channel),thicknessMapUv:z&&_(g.thicknessMap.channel),alphaMapUv:ue&&_(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||L),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(ge||ue),fog:!!D,useFog:g.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&pe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:O,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ge&&g.map.isVideoTexture===!0&&ht.getTransfer(g.map.colorSpace)===xt,decodeVideoTextureEmissive:Pe&&g.emissiveMap.isVideoTexture===!0&&ht.getTransfer(g.emissiveMap.colorSpace)===xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Qt,flipSided:g.side===kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:fe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&g.extensions.multiDraw===!0||ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function p(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)b.push(C),b.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(m(b,g),S(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function S(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function w(g){let b=d[g.type],C;if(b){let I=ni[b];C=Id.clone(I.uniforms)}else C=g.uniforms;return C}function v(g,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new Ax(i,b,g,s),c.push(C),u.set(b,C)),C}function T(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function Px(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,y,p,m){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:m},i[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=_,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=p,S.group=m),e++,S}function l(h,d,_,y,p,m,S){S.reversedDepth===!0&&(p=-p);let w=o(h,d,_,y,p,m);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(h,d,_,y,p,m){let S=o(h,d,_,y,p,m);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,d){t.length>1&&t.sort(h||Ix),n.length>1&&n.sort(d||Zd),s.length>1&&s.sort(d||Zd)}function f(){for(let h=e,d=i.length;h<d;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Lx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new jd,i.set(n,[a])):s>=r.length?(a=new jd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ge};break;case"SpotLight":t={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Nx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ux=0;function Fx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ox(i){let e=new Dx,t=Nx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ut,a=new ut;function o(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,_=0,y=0,p=0,m=0,S=0,w=0,v=0,T=0,E=0,P=0,g=0,b=0,C=0;c.sort(Fx);for(let U=0,H=c.length;U<H;U++){let D=c[U],N=D.color,j=D.intensity,Z=D.distance,de=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vi?de=D.shadow.map.texture:de=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*j,f+=N.g*j,h+=N.b*j;else if(D.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(D.sh.coefficients[ne],j);C++}else if(D.isSunLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ae=D.shadow,oe=t.get(D);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[_]=oe,n.sunShadowMap[_]=de;let De=ae.getViewportCount();for(let O=0;O<De;O++)n.sunShadowMatrix[y+O]=ae.getMatrix(O),n.sunShadowCascade[y+O]=ae._cascadeData[O];y+=De,_++}n.sun[d]=ne,d++}else if(D.isDirectionalLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ae=D.shadow,oe=t.get(D);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,n.directionalShadow[p]=oe,n.directionalShadowMap[p]=de,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=ne,p++}else if(D.isSpotLight){let ne=e.get(D);ne.position.setFromMatrixPosition(D.matrixWorld),ne.color.copy(N).multiplyScalar(j),ne.distance=Z,ne.coneCos=Math.cos(D.angle),ne.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ne.decay=D.decay,n.spot[S]=ne;let ae=D.shadow;if(D.map&&(n.spotLightMap[g]=D.map,g++,ae.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[S]=ae.matrix,D.castShadow){let oe=t.get(D);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,n.spotShadow[S]=oe,n.spotShadowMap[S]=de,P++}S++}else if(D.isRectAreaLight){let ne=e.get(D);ne.color.copy(N).multiplyScalar(j),ne.halfWidth.set(D.width*.5,0,0),ne.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=ne,w++}else if(D.isPointLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),ne.distance=D.distance,ne.decay=D.decay,D.castShadow){let ae=D.shadow,oe=t.get(D);oe.shadowIntensity=ae.intensity,oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,oe.shadowCameraNear=ae.camera.near,oe.shadowCameraFar=ae.camera.far,n.pointShadow[m]=oe,n.pointShadowMap[m]=de,n.pointShadowMatrix[m]=D.shadow.matrix,E++}n.point[m]=ne,m++}else if(D.isHemisphereLight){let ne=e.get(D);ne.skyColor.copy(D.color).multiplyScalar(j),ne.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[v]=ne,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==_||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==P||I.numSpotMaps!==g||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+g-b,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=_,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=P,I.numSpotMaps=g,I.numLightProbes=C,n.version=Ux++)}function l(c,u){let f=0,h=0,d=0,_=0,y=0,p=0,m=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let v=c[S];if(v.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(v.isSpotLight){let T=n.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),_++}else if(v.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Kd(i){let e=new Ox(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Bx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Kd(i),e.set(s,[o])):r>=a.length?(o=new Kd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`,Hx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Vx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ef=new ut,va=new F,Pu=new F;function Gx(i,e,t){let n=new zs,s=new _e,r=new _e,a=new Pt,o=new Ro,l=new Po,c={},u=t.maxTextureSize,f={[Bi]:kt,[kt]:Bi,[Qt]:Qt},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:zx,fragmentShader:kx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let _=new Yt;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ee(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let m=this.type;this.render=function(E,P,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===qh&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ei),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(N=>N.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,N=E.length;D<N;D++){let j=E[D],Z=j.shadow;if(Z===void 0){Ke("WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let de=Z.getFrameExtents();s.multiply(de),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,Z.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ne,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===qs){if(j.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new dn(s.x,s.y,{format:Vi,type:On,minFilter:$t,magFilter:$t,generateMipmaps:!1}),Z.map.texture.name=j.name+".shadowMap",Z.map.depthTexture=new Li(s.x,s.y,Tn),Z.map.depthTexture.name=j.name+".shadowMapDepth",Z.map.depthTexture.format=Xn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=qt,Z.map.depthTexture.magFilter=qt}else j.isPointLight?(Z.map=new Fl(s.x),Z.map.depthTexture=new yo(s.x,Fn)):(Z.map=new dn(s.x,s.y),Z.map.depthTexture=new Li(s.x,s.y,Fn)),Z.map.depthTexture.name=j.name+".shadowMap",Z.map.depthTexture.format=Xn,this.type===aa?(Z.map.depthTexture.compareFunction=ne?Ll:Il,Z.map.depthTexture.minFilter=$t,Z.map.depthTexture.magFilter=$t):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=qt,Z.map.depthTexture.magFilter=qt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let ae=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();j.isPointLight!==!0&&Z.updateMatrices(j,g);for(let oe=0;oe<ae;oe++){let De=Z.getCamera(oe);if(j.isPointLight){let O=Z.camera,G=Z.matrix,X=j.distance||O.far;X!==O.far&&(O.far=X,O.updateProjectionMatrix()),va.setFromMatrixPosition(j.matrixWorld),O.position.copy(va),Pu.copy(O.position),Pu.add(Hx[oe]),O.up.copy(Vx[oe]),O.lookAt(Pu),O.updateMatrixWorld(),G.makeTranslation(-va.x,-va.y,-va.z),ef.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ef,O.coordinateSystem,O.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(Z.map),i.clear());let O=Z.getViewport(oe);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),U.viewport(a)}n=Z.getFrustum(oe),v(P,g,De,j,this.type)}Z.isPointLightShadow!==!0&&this.type===qs&&S(Z,g),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,C,I)};function S(E,P){let g=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new dn(s.x,s.y,{format:Vi,type:On}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,g,h,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,g,d,y,null)}function w(E,P,g,b){let C=null,I=g.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=g.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=C.uuid,H=P.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let N=D[H];N===void 0&&(N=C.clone(),D[H]=N,P.addEventListener("dispose",T)),C=N}if(C.visible=P.visible,C.wireframe=P.wireframe,b===qs?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:f[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=g}return C}function v(E,P,g,b,C){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===qs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,E.matrixWorld);let H=e.update(E),D=E.material;if(Array.isArray(D)){let N=H.groups;for(let j=0,Z=N.length;j<Z;j++){let de=N[j],ne=D[de.materialIndex];if(ne&&ne.visible){let ae=w(E,ne,b,C);E.onBeforeShadow(i,E,P,g,H,ae,de),i.renderBufferDirect(g,null,H,ae,E,de),E.onAfterShadow(i,E,P,g,H,ae,de)}}}else if(D.visible){let N=w(E,D,b,C);E.onBeforeShadow(i,E,P,g,H,N,null),i.renderBufferDirect(g,null,H,N,E,null),E.onAfterShadow(i,E,P,g,H,N,null)}}let U=E.children;for(let H=0,D=U.length;H<D;H++)v(U[H],P,g,b,C)}function T(E){E.target.removeEventListener("dispose",T);for(let g in c){let b=c[g],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Wx(i,e){function t(){let z=!1,Se=new Pt,ue=null,be=new Pt(0,0,0,0);return{setMask:function(Re){ue!==Re&&!z&&(i.colorMask(Re,Re,Re,Re),ue=Re)},setLocked:function(Re){z=Re},setClear:function(Re,fe,Ye,Ve,St){St===!0&&(Re*=Ve,fe*=Ve,Ye*=Ve),Se.set(Re,fe,Ye,Ve),be.equals(Se)===!1&&(i.clearColor(Re,fe,Ye,Ve),be.copy(Se))},reset:function(){z=!1,ue=null,be.set(-1,0,0,0)}}}function n(){let z=!1,Se=!1,ue=null,be=null,Re=null;return{setReversed:function(fe){if(Se!==fe){let Ye=e.get("EXT_clip_control");fe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Se=fe;let Ve=Re;Re=null,this.setClear(Ve)}},getReversed:function(){return Se},setTest:function(fe){fe?W(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!z&&(i.depthMask(fe),ue=fe)},setFunc:function(fe){if(Se&&(fe=Td[fe]),be!==fe){switch(fe){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=fe}},setLocked:function(fe){z=fe},setClear:function(fe){Re!==fe&&(Re=fe,Se&&(fe=1-fe),i.clearDepth(fe))},reset:function(){z=!1,ue=null,be=null,Re=null,Se=!1}}}function s(){let z=!1,Se=null,ue=null,be=null,Re=null,fe=null,Ye=null,Ve=null,St=null;return{setTest:function(gt){z||(gt?W(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(gt){Se!==gt&&!z&&(i.stencilMask(gt),Se=gt)},setFunc:function(gt,Rn,Hn){(ue!==gt||be!==Rn||Re!==Hn)&&(i.stencilFunc(gt,Rn,Hn),ue=gt,be=Rn,Re=Hn)},setOp:function(gt,Rn,Hn){(fe!==gt||Ye!==Rn||Ve!==Hn)&&(i.stencilOp(gt,Rn,Hn),fe=gt,Ye=Rn,Ve=Hn)},setLocked:function(gt){z=gt},setClear:function(gt){St!==gt&&(i.clearStencil(gt),St=gt)},reset:function(){z=!1,Se=null,ue=null,be=null,Re=null,fe=null,Ye=null,Ve=null,St=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,_=[],y=null,p=!1,m=null,S=null,w=null,v=null,T=null,E=null,P=null,g=new Ge(0,0,0),b=0,C=!1,I=null,U=null,H=null,D=null,N=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,de=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=de>=1):ne.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=de>=2);let ae=null,oe={},De=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),G=new Pt().fromArray(De),X=new Pt().fromArray(O);function le(z,Se,ue,be){let Re=new Uint8Array(4),fe=i.createTexture();i.bindTexture(z,fe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ue;Ye++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Se+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return fe}let R={};R[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Ds),ce(!1),pe(Jc),W(i.CULL_FACE),J(ei);function W(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function ie(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function $(z,Se){return h[z]!==Se?(i.bindFramebuffer(z,Se),h[z]=Se,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function ee(z,Se){let ue=_,be=!1;if(z){ue=d.get(Se),ue===void 0&&(ue=[],d.set(Se,ue));let Re=z.textures;if(ue.length!==Re.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ye=Re.length;fe<Ye;fe++)ue[fe]=i.COLOR_ATTACHMENT0+fe;ue.length=Re.length,be=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,be=!0);be&&i.drawBuffers(ue)}function ge(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let tt={[os]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};tt[Jh]=i.MIN,tt[$h]=i.MAX;let k={[Zh]:i.ZERO,[jh]:i.ONE,[Kh]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[td]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[Kc]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[od]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function J(z,Se,ue,be,Re,fe,Ye,Ve,St,gt){if(z===ei){p===!0&&(ie(i.BLEND),p=!1);return}if(p===!1&&(W(i.BLEND),p=!0),z!==Xh){if(z!==m||gt!==C){if((S!==os||T!==os)&&(i.blendEquation(i.FUNC_ADD),S=os,T=os),gt)switch(z){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ys:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",z);break}else switch(z){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",z);break}w=null,v=null,E=null,P=null,g.set(0,0,0),b=0,m=z,C=gt}return}Re=Re||Se,fe=fe||ue,Ye=Ye||be,(Se!==S||Re!==T)&&(i.blendEquationSeparate(tt[Se],tt[Re]),S=Se,T=Re),(ue!==w||be!==v||fe!==E||Ye!==P)&&(i.blendFuncSeparate(k[ue],k[be],k[fe],k[Ye]),w=ue,v=be,E=fe,P=Ye),(Ve.equals(g)===!1||St!==b)&&(i.blendColor(Ve.r,Ve.g,Ve.b,St),g.copy(Ve),b=St),m=z,C=!1}function K(z,Se){z.side===Qt?ie(i.CULL_FACE):W(i.CULL_FACE);let ue=z.side===kt;Se&&(ue=!ue),ce(ue),z.blending===Xs&&z.transparent===!1?J(ei):J(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let be=z.stencilWrite;o.setTest(be),be&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(z){I!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),I=z)}function pe(z){z!==Gh?(W(i.CULL_FACE),z!==U&&(z===Jc?i.cullFace(i.BACK):z===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),U=z}function Be(z){z!==H&&(Z&&i.lineWidth(z),H=z)}function Pe(z,Se,ue){z?(W(i.POLYGON_OFFSET_FILL),(D!==Se||N!==ue)&&(D=Se,N=ue,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,ue))):ie(i.POLYGON_OFFSET_FILL)}function Ne(z){z?W(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function He(z){z===void 0&&(z=i.TEXTURE0+j-1),ae!==z&&(i.activeTexture(z),ae=z)}function L(z,Se,ue){ue===void 0&&(ae===null?ue=i.TEXTURE0+j-1:ue=ae);let be=oe[ue];be===void 0&&(be={type:void 0,texture:void 0},oe[ue]=be),(be.type!==z||be.texture!==Se)&&(ae!==ue&&(i.activeTexture(ue),ae=ue),i.bindTexture(z,Se||R[z]),be.type=z,be.texture=Se)}function st(){let z=oe[ae];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function V(){try{i.texSubImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function se(){try{i.compressedTexSubImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function xe(){try{i.texStorage2D(...arguments)}catch(z){et("WebGLState:",z)}}function ve(){try{i.texStorage3D(...arguments)}catch(z){et("WebGLState:",z)}}function re(){try{i.texImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function he(){try{i.texImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function ye(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function qe(z,Se){f[z]!==Se&&(i.pixelStorei(z,Se),f[z]=Se)}function Te(z){G.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),G.copy(z))}function Me(z){X.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function Xe(z,Se){let ue=c.get(Se);ue===void 0&&(ue=new WeakMap,c.set(Se,ue));let be=ue.get(z);be===void 0&&(be=i.getUniformBlockIndex(Se,z.name),ue.set(z,be))}function je(z,Se){let be=c.get(Se).get(z);l.get(Se)!==be&&(i.uniformBlockBinding(Se,be,z.__bindingPointIndex),l.set(Se,be))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ae=null,oe={},h={},d=new WeakMap,_=[],y=null,p=!1,m=null,S=null,w=null,v=null,T=null,E=null,P=null,g=new Ge(0,0,0),b=0,C=!1,I=null,U=null,H=null,D=null,N=null,G.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:ie,bindFramebuffer:$,drawBuffers:ee,useProgram:ge,setBlending:J,setMaterial:K,setFlipSided:ce,setCullFace:pe,setLineWidth:Be,setPolygonOffset:Pe,setScissorTest:Ne,activeTexture:He,bindTexture:L,unbindTexture:st,compressedTexImage2D:nt,compressedTexImage3D:A,texImage2D:re,texImage3D:he,pixelStorei:qe,getParameter:ye,updateUBOMapping:Xe,uniformBlockBinding:je,texStorage2D:xe,texStorage3D:ve,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:se,scissor:Te,viewport:Me,reset:rt}}function qx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,f=new Set,h,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return _?new OffscreenCanvas(A,x):Dr("canvas")}function p(A,x,V){let q=1,se=nt(A);if((se.width>V||se.height>V)&&(q=V/Math.max(se.width,se.height)),q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let xe=Math.floor(q*se.width),ve=Math.floor(q*se.height);h===void 0&&(h=y(xe,ve));let re=x?y(xe,ve):h;return re.width=xe,re.height=ve,re.getContext("2d").drawImage(A,0,0,xe,ve),Ke("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+ve+")."),re}else return"data"in A&&Ke("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function m(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,x,V,q,se,xe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve;q&&(ve=e.get("EXT_texture_norm16"),ve||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=x;if(x===i.RED&&(V===i.FLOAT&&(re=i.R32F),V===i.HALF_FLOAT&&(re=i.R16F),V===i.UNSIGNED_BYTE&&(re=i.R8),V===i.UNSIGNED_SHORT&&ve&&(re=ve.R16_EXT),V===i.SHORT&&ve&&(re=ve.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.R8UI),V===i.UNSIGNED_SHORT&&(re=i.R16UI),V===i.UNSIGNED_INT&&(re=i.R32UI),V===i.BYTE&&(re=i.R8I),V===i.SHORT&&(re=i.R16I),V===i.INT&&(re=i.R32I)),x===i.RG&&(V===i.FLOAT&&(re=i.RG32F),V===i.HALF_FLOAT&&(re=i.RG16F),V===i.UNSIGNED_BYTE&&(re=i.RG8),V===i.UNSIGNED_SHORT&&ve&&(re=ve.RG16_EXT),V===i.SHORT&&ve&&(re=ve.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RG8UI),V===i.UNSIGNED_SHORT&&(re=i.RG16UI),V===i.UNSIGNED_INT&&(re=i.RG32UI),V===i.BYTE&&(re=i.RG8I),V===i.SHORT&&(re=i.RG16I),V===i.INT&&(re=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGB8UI),V===i.UNSIGNED_SHORT&&(re=i.RGB16UI),V===i.UNSIGNED_INT&&(re=i.RGB32UI),V===i.BYTE&&(re=i.RGB8I),V===i.SHORT&&(re=i.RGB16I),V===i.INT&&(re=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),V===i.UNSIGNED_INT&&(re=i.RGBA32UI),V===i.BYTE&&(re=i.RGBA8I),V===i.SHORT&&(re=i.RGBA16I),V===i.INT&&(re=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&ve&&(re=ve.RGB16_EXT),V===i.SHORT&&ve&&(re=ve.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),x===i.RGBA){let he=xe?Lr:ht.getTransfer(se);V===i.FLOAT&&(re=i.RGBA32F),V===i.HALF_FLOAT&&(re=i.RGBA16F),V===i.UNSIGNED_BYTE&&(re=he===xt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ve&&(re=ve.RGBA16_EXT),V===i.SHORT&&ve&&(re=ve.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function T(A,x){let V;return A?x===null||x===Fn||x===Js?V=i.DEPTH24_STENCIL8:x===Tn?V=i.DEPTH32F_STENCIL8:x===Qs&&(V=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===Js?V=i.DEPTH_COMPONENT24:x===Tn?V=i.DEPTH_COMPONENT32F:x===Qs&&(V=i.DEPTH_COMPONENT16),V}function E(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){let x=A.target;x.removeEventListener("dispose",P),b(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function g(A){let x=A.target;x.removeEventListener("dispose",g),I(x)}function b(A){let x=n.get(A);if(x.__webglInit===void 0)return;let V=A.source,q=d.get(V);if(q){let se=q[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(A),Object.keys(q).length===0&&d.delete(V)}n.remove(A)}function C(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let V=A.source,q=d.get(V);delete q[x.__cacheKey],a.memory.textures--}function I(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let se=0;se<x.__webglFramebuffer[q].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[q][se]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=A.textures;for(let q=0,se=V.length;q<se;q++){let xe=n.get(V[q]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(V[q])}n.remove(A)}let U=0;function H(){U=0}function D(){return U}function N(A){U=A}function j(){let A=U;return A>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function Z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function de(A,x){let V=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let q=A.image;if(q===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function ne(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ie(V,A,x);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function ae(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ie(V,A,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function oe(A,x){let V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){$(V,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let De={[Ns]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},O={[qt]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},G={[gd]:i.NEVER,[Md]:i.ALWAYS,[_d]:i.LESS,[Il]:i.LEQUAL,[xd]:i.EQUAL,[Ll]:i.GEQUAL,[vd]:i.GREATER,[yd]:i.NOTEQUAL};function X(A,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===Yo||x.magFilter===ca||x.magFilter===ki||x.minFilter===$t||x.minFilter===Yo||x.minFilter===ca||x.minFilter===ki)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,De[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,De[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,De[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,O[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,O[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,G[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qt||x.minFilter!==ca&&x.minFilter!==ki||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));let q=x.source,se=d.get(q);se===void 0&&(se={},d.set(q,se));let xe=Z(x);if(xe!==A.__cacheKey){se[xe]===void 0&&(se[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[xe].usedTimes++;let ve=se[A.__cacheKey];ve!==void 0&&(se[A.__cacheKey].usedTimes--,ve.usedTimes===0&&C(x)),A.__cacheKey=xe,A.__webglTexture=se[xe].texture}return V}function R(A,x,V){return Math.floor(Math.floor(A/V)/x)}function W(A,x,V,q){let xe=A.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,q,x.data);else{xe.sort((qe,Te)=>qe.start-Te.start);let ve=0;for(let qe=1;qe<xe.length;qe++){let Te=xe[ve],Me=xe[qe],Xe=Te.start+Te.count,je=R(Me.start,x.width,4),rt=R(Te.start,x.width,4);Me.start<=Xe+1&&je===rt&&R(Me.start+Me.count-1,x.width,4)===je?Te.count=Math.max(Te.count,Me.start+Me.count-Te.start):(++ve,xe[ve]=Me)}xe.length=ve+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let qe=0,Te=xe.length;qe<Te;qe++){let Me=xe[qe],Xe=Math.floor(Me.start/4),je=Math.ceil(Me.count/4),rt=Xe%x.width,z=Math.floor(Xe/x.width),Se=je,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,rt,z,Se,ue,V,q,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function ie(A,x,V){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let se=le(A,x),xe=x.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+V);let ve=n.get(xe);if(xe.version!==ve.__version||se===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let ue=ht.getPrimaries(ht.workingColorSpace),be=x.colorSpace===_i?null:ht.getPrimaries(x.colorSpace),Re=x.colorSpace===_i||ue===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let he=p(x.image,!1,s.maxTextureSize);he=st(x,he);let ye=r.convert(x.format,x.colorSpace),qe=r.convert(x.type),Te=v(x.internalFormat,ye,qe,x.normalized,x.colorSpace,x.isVideoTexture);X(q,x);let Me,Xe=x.mipmaps,je=x.isVideoTexture!==!0,rt=ve.__version===void 0||se===!0,z=xe.dataReady,Se=E(x,he);if(x.isDepthTexture)Te=T(x.format===Hi,x.type),rt&&(je?t.texStorage2D(i.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Te,he.width,he.height,0,ye,qe,null));else if(x.isDataTexture)if(Xe.length>0){je&&rt&&t.texStorage2D(i.TEXTURE_2D,Se,Te,Xe[0].width,Xe[0].height);for(let ue=0,be=Xe.length;ue<be;ue++)Me=Xe[ue],je?z&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,ye,qe,Me.data):t.texImage2D(i.TEXTURE_2D,ue,Te,Me.width,Me.height,0,ye,qe,Me.data);x.generateMipmaps=!1}else je?(rt&&t.texStorage2D(i.TEXTURE_2D,Se,Te,he.width,he.height),z&&W(x,he,ye,qe)):t.texImage2D(i.TEXTURE_2D,0,Te,he.width,he.height,0,ye,qe,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){je&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Te,Xe[0].width,Xe[0].height,he.depth);for(let ue=0,be=Xe.length;ue<be;ue++)if(Me=Xe[ue],x.format!==An)if(ye!==null)if(je){if(z)if(x.layerUpdates.size>0){let Re=vu(Me.width,Me.height,x.format,x.type);for(let fe of x.layerUpdates){let Ye=Me.data.subarray(fe*Re/Me.data.BYTES_PER_ELEMENT,(fe+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,fe,Me.width,Me.height,1,ye,Ye)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,ye,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Te,Me.width,Me.height,he.depth,0,Me.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,ye,qe,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Te,Me.width,Me.height,he.depth,0,ye,qe,Me.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{je&&rt&&t.texStorage2D(i.TEXTURE_2D,Se,Te,Xe[0].width,Xe[0].height);for(let ue=0,be=Xe.length;ue<be;ue++)Me=Xe[ue],x.format!==An?ye!==null?je?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Te,Me.width,Me.height,0,Me.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?z&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,ye,qe,Me.data):t.texImage2D(i.TEXTURE_2D,ue,Te,Me.width,Me.height,0,ye,qe,Me.data)}else if(x.isDataArrayTexture)if(je){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Te,he.width,he.height,he.depth),z)if(x.layerUpdates.size>0){let ue=vu(he.width,he.height,x.format,x.type);for(let be of x.layerUpdates){let Re=he.data.subarray(be*ue/he.data.BYTES_PER_ELEMENT,(be+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,he.width,he.height,1,ye,qe,Re)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,qe,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,ye,qe,he.data);else if(x.isData3DTexture)je?(rt&&t.texStorage3D(i.TEXTURE_3D,Se,Te,he.width,he.height,he.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,qe,he.data)):t.texImage3D(i.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,ye,qe,he.data);else if(x.isFramebufferTexture){if(rt)if(je)t.texStorage2D(i.TEXTURE_2D,Se,Te,he.width,he.height);else{let ue=he.width,be=he.height;for(let Re=0;Re<Se;Re++)t.texImage2D(i.TEXTURE_2D,Re,Te,ue,be,0,ye,qe,null),ue>>=1,be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),he.parentNode!==ue){ue.appendChild(he),f.add(x),ue.onpaint=be=>{let Re=be.changedElements;for(let fe of f)Re.includes(fe.image)&&(fe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{let Re=i.RGBA,fe=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,fe,Ye,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(je&&rt){let ue=nt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Se,Te,ue.width,ue.height)}for(let ue=0,be=Xe.length;ue<be;ue++)Me=Xe[ue],je?z&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye,qe,Me):t.texImage2D(i.TEXTURE_2D,ue,Te,ye,qe,Me);x.generateMipmaps=!1}else if(je){if(rt){let ue=nt(he);t.texStorage2D(i.TEXTURE_2D,Se,Te,ue.width,ue.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,qe,he)}else t.texImage2D(i.TEXTURE_2D,0,Te,ye,qe,he);m(x)&&S(q),ve.__version=xe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,V){if(x.image.length!==6)return;let q=le(A,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let xe=n.get(se);if(se.version!==xe.__version||q===!0){t.activeTexture(i.TEXTURE0+V);let ve=ht.getPrimaries(ht.workingColorSpace),re=x.colorSpace===_i?null:ht.getPrimaries(x.colorSpace),he=x.colorSpace===_i||ve===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ye=x.isCompressedTexture||x.image[0].isCompressedTexture,qe=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let fe=0;fe<6;fe++)!ye&&!qe?Te[fe]=p(x.image[fe],!0,s.maxCubemapSize):Te[fe]=qe?x.image[fe].image:x.image[fe],Te[fe]=st(x,Te[fe]);let Me=Te[0],Xe=r.convert(x.format,x.colorSpace),je=r.convert(x.type),rt=v(x.internalFormat,Xe,je,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,Se=xe.__version===void 0||q===!0,ue=se.dataReady,be=E(x,Me);X(i.TEXTURE_CUBE_MAP,x);let Re;if(ye){z&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,rt,Me.width,Me.height);for(let fe=0;fe<6;fe++){Re=Te[fe].mipmaps;for(let Ye=0;Ye<Re.length;Ye++){let Ve=Re[Ye];x.format!==An?Xe!==null?z?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,0,0,Ve.width,Ve.height,Xe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,rt,Ve.width,Ve.height,0,Ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,0,0,Ve.width,Ve.height,Xe,je,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,rt,Ve.width,Ve.height,0,Xe,je,Ve.data)}}}else{if(Re=x.mipmaps,z&&Se){Re.length>0&&be++;let fe=nt(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,rt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(qe){z?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Te[fe].width,Te[fe].height,Xe,je,Te[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,rt,Te[fe].width,Te[fe].height,0,Xe,je,Te[fe].data);for(let Ye=0;Ye<Re.length;Ye++){let St=Re[Ye].image[fe].image;z?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,0,0,St.width,St.height,Xe,je,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,rt,St.width,St.height,0,Xe,je,St.data)}}else{z?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Xe,je,Te[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,rt,Xe,je,Te[fe]);for(let Ye=0;Ye<Re.length;Ye++){let Ve=Re[Ye];z?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,0,0,Xe,je,Ve.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,rt,Xe,je,Ve.image[fe])}}}m(x)&&S(i.TEXTURE_CUBE_MAP),xe.__version=se.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ee(A,x,V,q,se,xe){let ve=r.convert(V.format,V.colorSpace),re=r.convert(V.type),he=v(V.internalFormat,ve,re,V.normalized,V.colorSpace),ye=n.get(x),qe=n.get(V);if(qe.__renderTarget=x,!ye.__hasExternalTextures){let Te=Math.max(1,x.width>>xe),Me=Math.max(1,x.height>>xe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,xe,he,Te,Me,x.depth,0,ve,re,null):t.texImage2D(se,xe,he,Te,Me,0,ve,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,se,qe.__webglTexture,0,Ne(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,se,qe.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(A,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let q=x.depthTexture,se=q&&q.isDepthTexture?q.type:null,xe=T(x.stencilBuffer,se),ve=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(x),xe,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(x),xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,A)}else{let q=x.textures;for(let se=0;se<q.length;se++){let xe=q[se],ve=r.convert(xe.format,xe.colorSpace),re=r.convert(xe.type),he=v(xe.internalFormat,ve,re,xe.normalized,xe.colorSpace);He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(x),he,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(x),he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(A,x,V){let q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(x.depthTexture);if(se.__renderTarget=x,(!se.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(se.__webglInit===void 0&&(se.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),X(i.TEXTURE_CUBE_MAP,x.depthTexture);let ye=r.convert(x.depthTexture.format),qe=r.convert(x.depthTexture.type),Te;x.depthTexture.format===Xn?Te=i.DEPTH_COMPONENT24:x.depthTexture.format===Hi&&(Te=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Te,x.width,x.height,0,ye,qe,null)}}else de(x.depthTexture,0);let xe=se.__webglTexture,ve=Ne(x),re=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,he=x.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xn)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,re,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,he,re,xe,0);else if(x.depthTexture.format===Hi)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,re,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,he,re,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function k(A){let x=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",se)};q.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)tt(x.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?tt(x.__webglFramebuffer[0],A,0):tt(x.__webglFramebuffer,A,0)}else if(V){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),ge(x.__webglDepthbuffer[q],A,!1);else{let se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ge(x.__webglDepthbuffer,A,!1);else{let se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(A,x,V){let q=n.get(A);x!==void 0&&ee(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&k(A)}function K(A){let x=A.texture,V=n.get(A),q=n.get(x);A.addEventListener("dispose",g);let se=A.textures,xe=A.isWebGLCubeRenderTarget===!0,ve=se.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),xe){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let he=0;he<x.mipmaps.length;he++)V.__webglFramebuffer[re][he]=i.createFramebuffer()}else V.__webglFramebuffer[re]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)V.__webglFramebuffer[re]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ve)for(let re=0,he=se.length;re<he;re++){let ye=n.get(se[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&He(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<se.length;re++){let he=se[re];V.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[re]);let ye=r.convert(he.format,he.colorSpace),qe=r.convert(he.type),Te=v(he.internalFormat,ye,qe,he.normalized,he.colorSpace,A.isXRRenderTarget===!0),Me=Ne(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,V.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),X(i.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ee(V.__webglFramebuffer[re][he],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else ee(V.__webglFramebuffer[re],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,he=se.length;re<he;re++){let ye=se[re],qe=n.get(ye),Te=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Te=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,qe.__webglTexture),X(Te,ye),ee(V.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+re,Te,0),m(ye)&&S(Te)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),X(re,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ee(V.__webglFramebuffer[he],A,x,i.COLOR_ATTACHMENT0,re,he);else ee(V.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,re,0);m(x)&&S(re),t.unbindTexture()}A.depthBuffer&&k(A)}function ce(A){let x=A.textures;for(let V=0,q=x.length;V<q;V++){let se=x[V];if(m(se)){let xe=w(A),ve=n.get(se).__webglTexture;t.bindTexture(xe,ve),S(xe),t.unbindTexture()}}}let pe=[],Be=[];function Pe(A){if(A.samples>0){if(He(A)===!1){let x=A.textures,V=A.width,q=A.height,se=i.COLOR_BUFFER_BIT,xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(A),re=x.length>1;if(re)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let he=A.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);let qe=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,se,i.NEAREST),l===!0&&(pe.length=0,Be.length=0,pe.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pe.push(xe),Be.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);let qe=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ne(A){return Math.min(s.maxSamples,A.samples)}function He(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function st(A,x){let V=A.colorSpace,q=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Ir&&V!==_i&&(ht.getTransfer(V)===xt?(q!==An||se!==pn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",V)),x}function nt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=N,this.setTexture2D=de,this.setTexture2DArray=ne,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=J,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xx(i,e){function t(n,s=_i){let r,a=ht.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ou)return i.BYTE;if(n===lu)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===du)return i.RGB;if(n===An)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===ua||n===ha||n===da||n===fa)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol||n===ll||n===cl||n===pa||n===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pa)return r.COMPRESSED_RG11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Rl||n===ma||n===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:Yx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends Yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null,y=typeof XRWebGLBinding!="undefined",p=new Bu,m={},S=t.getContextAttributes(),w=null,v=null,T=[],E=[],P=new _e,g=null,b=null,C=new Wt;C.viewport=new Pt;let I=new Wt;I.viewport=new Pt;let U=[C,I],H=new Vo,D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let W=T[R];return W===void 0&&(W=new Bs,T[R]=W),W.getTargetRaySpace()},this.getControllerGrip=function(R){let W=T[R];return W===void 0&&(W=new Bs,T[R]=W),W.getGripSpace()},this.getHand=function(R){let W=T[R];return W===void 0&&(W=new Bs,T[R]=W),W.getHandSpace()};function j(R){let W=E.indexOf(R.inputSource);if(W===-1)return;let ie=T[W];ie!==void 0&&(ie.update(R.inputSource,R.frame,c||a),ie.dispatchEvent({type:R.type,data:R.inputSource}))}function Z(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",de);for(let R=0;R<T.length;R++){let W=E[R];W!==null&&(E[R]=null,T[R].disconnect(W))}D=null,N=null,p.reset();for(let R in m)delete m[R];if(e.setRenderTarget(w),d=null,h=null,f=null,s=null,v=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(P.width,P.height,!1),b!==null){let R=b.camera;R.fov=b.fov,R.zoom=b.zoom,R.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,$=null,ee=null;S.depth&&(ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?Hi:Xn,$=S.stencil?Js:Fn);let ge={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new dn(h.textureWidth,h.textureHeight,{format:An,type:pn,depthTexture:new Li(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new dn(d.framebufferWidth,d.framebufferHeight,{format:An,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function de(R){for(let W=0;W<R.removed.length;W++){let ie=R.removed[W],$=E.indexOf(ie);$>=0&&(E[$]=null,T[$].disconnect(ie))}for(let W=0;W<R.added.length;W++){let ie=R.added[W],$=E.indexOf(ie);if($===-1){for(let ge=0;ge<T.length;ge++)if(ge>=E.length){E.push(ie),$=ge;break}else if(E[ge]===null){E[ge]=ie,$=ge;break}if($===-1)break}let ee=T[$];ee&&ee.connect(ie)}}let ne=new F,ae=new F;function oe(R,W,ie){ne.setFromMatrixPosition(W.matrixWorld),ae.setFromMatrixPosition(ie.matrixWorld);let $=ne.distanceTo(ae),ee=W.projectionMatrix.elements,ge=ie.projectionMatrix.elements,tt=ee[14]/(ee[10]-1),k=ee[14]/(ee[10]+1),J=(ee[9]+1)/ee[5],K=(ee[9]-1)/ee[5],ce=(ee[8]-1)/ee[0],pe=(ge[8]+1)/ge[0],Be=tt*ce,Pe=tt*pe,Ne=$/(-ce+pe),He=Ne*-ce;if(W.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(He),R.translateZ(Ne),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),ee[10]===-1)R.projectionMatrix.copy(W.projectionMatrix),R.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let L=tt+Ne,st=k+Ne,nt=Be-He,A=Pe+($-He),x=J*k/st*L,V=K*k/st*L;R.projectionMatrix.makePerspective(nt,A,x,V,L,st),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function De(R,W){W===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(W.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let W=R.near,ie=R.far;p.texture!==null&&(p.depthNear>0&&(W=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),H.near=I.near=C.near=W,H.far=I.far=C.far=ie,(D!==H.near||N!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,N=H.far),H.layers.mask=R.layers.mask|6,C.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let $=R.parent,ee=H.cameras;De(H,$);for(let ge=0;ge<ee.length;ge++)De(ee[ge],$);ee.length===2?oe(H,C,I):H.projectionMatrix.copy(C.projectionMatrix),b===null&&R.isPerspectiveCamera&&(b={camera:R,fov:R.fov,zoom:R.zoom}),O(R,H,$)};function O(R,W,ie){ie===null?R.matrix.copy(W.matrixWorld):(R.matrix.copy(ie.matrixWorld),R.matrix.invert(),R.matrix.multiply(W.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(W.projectionMatrix),R.projectionMatrixInverse.copy(W.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Nr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(R){l=R,h!==null&&(h.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(R){return m[R]};let G=null;function X(R,W){if(u=W.getViewerPose(c||a),_=W,u!==null){let ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let $=!1;ie.length!==H.cameras.length&&(H.cameras.length=0,$=!0);for(let k=0;k<ie.length;k++){let J=ie[k],K=null;if(d!==null)K=d.getViewport(J);else{let pe=f.getViewSubImage(h,J);K=pe.viewport,k===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ce=U[k];ce===void 0&&(ce=new Wt,ce.layers.enable(k),ce.viewport=new Pt,U[k]=ce),ce.matrix.fromArray(J.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(J.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(K.x,K.y,K.width,K.height),k===0&&(H.matrix.copy(ce.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),$===!0&&H.cameras.push(ce)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let k=f.getDepthInformation(ie[0]);k&&k.isValid&&k.texture&&p.init(k,s.renderState)}if(ee&&ee.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let k=0;k<ie.length;k++){let J=ie[k].camera;if(J){let K=m[J];K||(K=new Wr,m[J]=K);let ce=f.getCameraImage(J);K.sourceTexture=ce}}}}for(let ie=0;ie<T.length;ie++){let $=E[ie],ee=T[ie];$!==null&&ee!==void 0&&ee.update($,W,c||a)}G&&G(R,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),_=null}let le=new tf;le.setAnimationLoop(X),this.setAnimationLoop=function(R){G=R},this.dispose=function(){}}},Jx=new ut,lf=new it;lf.set(-1,0,0,0,1,0,0,0,1);function $x(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,gu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),w=S.envMap,v=S.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(lf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let E=T.program;n.uniformBlockBinding(v,E)}function c(v,T){let E=s[v.id];E===void 0&&(p(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",S));let P=T.program;n.updateUBOMapping(v,P);let g=e.render.frame;r[v.id]!==g&&(h(v),r[v.id]=g)}function u(v){let T=f();v.__bindingPointIndex=T;let E=i.createBuffer(),P=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let T=s[v.id],E=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let g=0,b=E.length;g<b;g++){let C=E[g];if(Array.isArray(C))for(let I=0,U=C.length;I<U;I++)d(C[I],g,I,P);else d(C,g,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,T,E,P){if(y(v,T,E,P)===!0){let g=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let I=0;I<b.length;I++){let U=b[I],H=m(U);_(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function _(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function y(v,T,E,P){let g=v.value,b=T+"_"+E;if(P[b]===void 0)return typeof g=="number"||typeof g=="boolean"?P[b]=g:ArrayBuffer.isView(g)?P[b]=g.slice():P[b]=g.clone(),!0;{let C=P[b];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return P[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function p(v){let T=v.uniforms,E=0,P=16;for(let b=0,C=T.length;b<C;b++){let I=Array.isArray(T[b])?T[b]:[T[b]];for(let U=0,H=I.length;U<H;U++){let D=I[U],N=Array.isArray(D.value)?D.value:[D.value];for(let j=0,Z=N.length;j<Z;j++){let de=N[j],ne=m(de),ae=E%P,oe=ae%ne.boundary,De=ae+oe;E+=oe,De!==0&&P-De<ne.storage&&(E+=P-De),D.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=ne.storage}}}let g=E%P;return g>0&&(E+=P-g),v.__size=E,v.__cache={},this}function m(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),T}function S(v){let T=v.target;T.removeEventListener("dispose",S);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Kx(){return ti===null&&(ti=new Hr(jx,16,16,Vi,On),ti.name="DFG_LUT",ti.minFilter=$t,ti.magFilter=$t,ti.wrapS=Wn,ti.wrapT=Wn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Ol=class{constructor(e={}){let{canvas:t=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=pn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=d,p=new Set([el,Ko,jo]),m=new Set([pn,Fn,Qs,Js,Jo,$o]),S=new Uint32Array(4),w=new Int32Array(4),v=new F,T=null,E=null,P=[],g=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,U=null,H=null,D=null,N=null;this._outputColorSpace=an;let j=0,Z=0,de=null,ne=-1,ae=null,oe=new Pt,De=new Pt,O=null,G=new Ge(0),X=0,le=t.width,R=t.height,W=1,ie=null,$=null,ee=new Pt(0,0,le,R),ge=new Pt(0,0,le,R),tt=!1,k=new zs,J=!1,K=!1,ce=new ut,pe=new F,Be=new Pt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function He(){return de===null?W:1}let L=n;function st(M,B){return t.getContext(M,B)}let nt,A,x,V,q,se,xe,ve,re,he,ye,qe,Te,Me,Xe,je,rt,z,Se,ue,be,Re,fe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),L===null){let B="webgl2";if(L=st(B,M),L===null)throw st(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(M){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),et("WebGLRenderer: "+M.message),M}function Ye(){nt=new a_(L),nt.init(),be=new Xx(L,nt),A=new $g(L,nt,e,be),x=new Wx(L,nt),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),H=L.createFramebuffer(),D=L.createFramebuffer(),N=L.createFramebuffer(),V=new c_(L),q=new Px,se=new qx(L,nt,x,q,A,be,V),xe=new r_(C),ve=new hm(L),Re=new Qg(L,ve),re=new o_(L,ve,V,Re),he=new h_(L,re,ve,Re,V),z=new u_(L,A,se),Xe=new Zg(q),ye=new Rx(C,xe,nt,A,Re,Xe),qe=new $x(C,q),Te=new Lx,Me=new Bx(nt),rt=new Yg(C,xe,x,he,_,l),je=new Gx(C,he,A),fe=new Zx(L,V,A,x),Se=new Jg(L,nt,V),ue=new l_(L,nt,V),V.programs=ye.programs,C.capabilities=A,C.extensions=nt,C.properties=q,C.renderLists=Te,C.shadowMap=je,C.state=x,C.info=V}y!==pn&&(b=new f_(y,t.width,t.height,o,s,r));let Ve=new zu(C,L);this.xr=Ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(le,R,!1))},this.getSize=function(M){return M.set(le,R)},this.setSize=function(M,B,te=!0){if(Ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}le=M,R=B,t.width=Math.floor(M*W),t.height=Math.floor(B*W),te===!0&&(t.style.width=M+"px",t.style.height=B+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(le*W,R*W).floor()},this.setDrawingBufferSize=function(M,B,te){le=M,R=B,W=te,t.width=Math.floor(M*te),t.height=Math.floor(B*te),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(y===pn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(oe)},this.getViewport=function(M){return M.copy(ee)},this.setViewport=function(M,B,te,Y){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,B,te,Y),x.viewport(oe.copy(ee).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,B,te,Y){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,B,te,Y),x.scissor(De.copy(ge).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){x.setScissorTest(tt=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){$=M},this.getClearColor=function(M){return M.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,te=!0){let Y=0;if(M){let Q=!1;if(de!==null){let Ce=de.texture.format;Q=p.has(Ce)}if(Q){let Ce=de.texture.type,Oe=m.has(Ce),we=rt.getClearColor(),ze=rt.getClearAlpha(),We=we.r,at=we.g,ct=we.b;Oe?(S[0]=We,S[1]=at,S[2]=ct,S[3]=ze,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=We,w[1]=at,w[2]=ct,w[3]=ze,L.clearBufferiv(L.COLOR,0,w))}else Y|=L.COLOR_BUFFER_BIT}B&&(Y|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),rt.dispose(),Te.dispose(),Me.dispose(),q.dispose(),xe.dispose(),he.dispose(),Re.dispose(),fe.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",rh),Ve.removeEventListener("sessionend",ah),$i.stop()};function St(M){M.preventDefault(),pu("WebGLRenderer: Context Lost."),I=!0}function gt(){pu("WebGLRenderer: Context Restored."),I=!1;let M=V.autoReset,B=je.enabled,te=je.autoUpdate,Y=je.needsUpdate,Q=je.type;Ye(),V.autoReset=M,je.enabled=B,je.autoUpdate=te,je.needsUpdate=Y,je.type=Q}function Rn(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Hn(M){let B=M.target;B.removeEventListener("dispose",Hn),Qf(B)}function Qf(M){Jf(M),q.remove(M)}function Jf(M){let B=q.get(M).programs;B!==void 0&&(B.forEach(function(te){ye.releaseProgram(te)}),M.isShaderMaterial&&ye.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,te,Y,Q,Ce){B===null&&(B=Pe);let Oe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,we=jf(M,B,te,Y,Q);x.setMaterial(Y,Oe);let ze=te.index,We=1;if(Y.wireframe===!0){if(ze=re.getWireframeAttribute(te),ze===void 0)return;We=2}let at=te.drawRange,ct=te.attributes.position,ke=at.start*We,_t=(at.start+at.count)*We;Ce!==null&&(ke=Math.max(ke,Ce.start*We),_t=Math.min(_t,(Ce.start+Ce.count)*We)),ze!==null?(ke=Math.max(ke,0),_t=Math.min(_t,ze.count)):ct!=null&&(ke=Math.max(ke,0),_t=Math.min(_t,ct.count));let Ft=_t-ke;if(Ft<0||Ft===1/0)return;Re.setup(Q,Y,we,te,ze);let At,yt=Se;if(ze!==null&&(At=ve.get(ze),yt=ue,yt.setIndex(At)),Q.isMesh)Y.wireframe===!0?(x.setLineWidth(Y.wireframeLinewidth*He()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(Q.isLine){let en=Y.linewidth;en===void 0&&(en=1),x.setLineWidth(en*He()),Q.isLineSegments?yt.setMode(L.LINES):Q.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else Q.isPoints?yt.setMode(L.POINTS):Q.isSprite&&yt.setMode(L.TRIANGLES);if(Q.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let en=Q._multiDrawStarts,Ue=Q._multiDrawCounts,rn=Q._multiDrawCount,pt=ze?ve.get(ze).bytesPerElement:1,Sn=q.get(Y).currentProgram.getUniforms();for(let Vn=0;Vn<rn;Vn++)Sn.setValue(L,"_gl_DrawID",Vn),yt.render(en[Vn]/pt,Ue[Vn])}else if(Q.isInstancedMesh)yt.renderInstances(ke,Ft,Q.count);else if(te.isInstancedBufferGeometry){let en=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,en);yt.renderInstances(ke,Ft,Ue)}else yt.render(ke,Ft)};function sh(M,B,te,Y){U!==null&&M.isNodeMaterial&&U.setObject(Y,M),J===!0&&Xe.setState(M,te,!1),M.transparent===!0&&M.side===Qt&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,Ua(M,B,Y),M.side=Bi,M.needsUpdate=!0,Ua(M,B,Y),M.side=Qt):Ua(M,B,Y)}this.compile=function(M,B,te=null){te===null&&(te=M),U!==null&&U.renderStart(M,B,te),E=Me.get(te),E.init(B),g.push(E),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),M!==te&&M.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),K=this.localClippingEnabled,J=Xe.init(this.clippingPlanes,K),J===!0&&Xe.setGlobalState(this.clippingPlanes,B),U!==null&&je.render(E.state.shadowsArray,te,B);let Y=new Set;return M.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){let we=Ce[Oe];sh(we,te,B,Q),Y.add(we)}else sh(Ce,te,B,Q),Y.add(Ce)}),E=g.pop(),U!==null&&U.renderEnd(),Y},this.compileAsync=function(M,B,te=null){let Y=this.compile(M,B,te);return new Promise(Q=>{function Ce(){if(Y.forEach(function(Oe){let ze=q.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&Y.delete(Oe)}),Y.size===0){Q(M);return}setTimeout(Ce,10)}nt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let lc=null;function $f(M){lc&&lc(M)}function rh(){$i.stop()}function ah(){$i.start()}let $i=new tf;$i.setAnimationLoop($f),typeof self!="undefined"&&$i.setContext(self),this.setAnimationLoop=function(M){lc=M,Ve.setAnimationLoop(M),M===null?$i.stop():$i.start()},Ve.addEventListener("sessionstart",rh),Ve.addEventListener("sessionend",ah),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(M,B);let te=Ve.enabled===!0&&Ve.isPresenting===!0,Y=b!==null&&(de===null||te)&&b.begin(C,de);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(B),B=Ve.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,B,de),E=Me.get(M,g.length),E.init(B),E.state.textureUnits=se.getTextureUnits(),g.push(E),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(ce,Nn,B.reversedDepth),K=this.localClippingEnabled,J=Xe.init(this.clippingPlanes,K),T=Te.get(M,P.length),T.init(),P.push(T),Ve.enabled===!0&&Ve.isPresenting===!0){let Oe=C.xr.getDepthSensingMesh();Oe!==null&&cc(Oe,B,-1/0,C.sortObjects)}cc(M,B,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(ie,$),Ne=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ne&&rt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Xe.beginShadows();let Q=E.state.shadowsArray;if(je.render(Q,M,B),J===!0&&Xe.endShadows(),(Y&&b.hasRenderPass())===!1){let Oe=T.opaque,we=T.transmissive;if(E.setupLights(),B.isArrayCamera){let ze=B.cameras;if(we.length>0)for(let We=0,at=ze.length;We<at;We++){let ct=ze[We];lh(Oe,we,M,ct)}Ne&&rt.render(M);for(let We=0,at=ze.length;We<at;We++){let ct=ze[We];oh(T,M,ct,ct.viewport)}}else we.length>0&&lh(Oe,we,M,B),Ne&&rt.render(M),oh(T,M,B)}de!==null&&Z===0&&(se.updateMultisampleRenderTarget(de),se.updateRenderTargetMipmap(de)),Y&&b.end(C),M.isScene===!0&&M.onAfterRender(C,M,B),Re.resetDefaultState(),ne=-1,ae=null,g.pop(),g.length>0?(E=g[g.length-1],se.setTextureUnits(E.state.textureUnits),J===!0&&Xe.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,U!==null&&U.renderEnd()};function cc(M,B,te,Y){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)te=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(k)){Y&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);let Oe=he.update(M),we=M.material;we.visible&&T.push(M,Oe,we,te,Be.z,null,B)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(k))){let Oe=he.update(M),we=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Be.copy(Oe.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(we)){let ze=Oe.groups;for(let We=0,at=ze.length;We<at;We++){let ct=ze[We],ke=we[ct.materialIndex];ke&&ke.visible&&T.push(M,Oe,ke,te,Be.z,ct,B)}}else we.visible&&T.push(M,Oe,we,te,Be.z,null,B)}}let Ce=M.children;for(let Oe=0,we=Ce.length;Oe<we;Oe++)cc(Ce[Oe],B,te,Y)}function oh(M,B,te,Y){let{opaque:Q,transmissive:Ce,transparent:Oe}=M;E.setupLightsView(te),J===!0&&Xe.setGlobalState(C.clippingPlanes,te),Y&&x.viewport(oe.copy(Y)),Q.length>0&&Na(Q,B,te),Ce.length>0&&Na(Ce,B,te),Oe.length>0&&Na(Oe,B,te),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function lh(M,B,te,Y){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let ke=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new dn(1,1,{generateMipmaps:!0,type:ke?On:pn,minFilter:ki,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Ce=E.state.transmissionRenderTarget[Y.id],Oe=Y.viewport||oe;Ce.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),ze=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ce),C.getClearColor(G),X=C.getClearAlpha(),X<1&&C.setClearColor(16777215,.5),C.clear(),Ne&&rt.render(te);let at=C.toneMapping;C.toneMapping=Un;let ct=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),J===!0&&Xe.setGlobalState(C.clippingPlanes,Y),Na(M,te,Y),se.updateMultisampleRenderTarget(Ce),se.updateRenderTargetMipmap(Ce),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let _t=0,Ft=B.length;_t<Ft;_t++){let At=B[_t],{object:yt,geometry:en,material:Ue,group:rn}=At;if(Ue.side===Qt&&yt.layers.test(Y.layers)){let pt=Ue.side;Ue.side=kt,Ue.needsUpdate=!0,ch(yt,te,Y,en,Ue,rn),Ue.side=pt,Ue.needsUpdate=!0,ke=!0}}ke===!0&&(se.updateMultisampleRenderTarget(Ce),se.updateRenderTargetMipmap(Ce))}C.setRenderTarget(we,ze,We),C.setClearColor(G,X),ct!==void 0&&(Y.viewport=ct),C.toneMapping=at}function Na(M,B,te){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Q=0,Ce=M.length;Q<Ce;Q++){let Oe=M[Q],{object:we,geometry:ze,group:We}=Oe,at=Oe.material;at.allowOverride===!0&&Y!==null&&(at=Y),we.layers.test(te.layers)&&ch(we,B,te,ze,at,We)}}function ch(M,B,te,Y,Q,Ce){U!==null&&Q.isNodeMaterial&&U.setObject(M,Q),M.onBeforeRender(C,B,te,Y,Q,Ce),M.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Q.onBeforeRender(C,B,te,Y,M,Ce),Q.transparent===!0&&Q.side===Qt&&Q.forceSinglePass===!1?(Q.side=kt,Q.needsUpdate=!0,C.renderBufferDirect(te,B,Y,Q,M,Ce),Q.side=Bi,Q.needsUpdate=!0,C.renderBufferDirect(te,B,Y,Q,M,Ce),Q.side=Qt):C.renderBufferDirect(te,B,Y,Q,M,Ce),M.onAfterRender(C,B,te,Y,Q,Ce)}function Ua(M,B,te){B.isScene!==!0&&(B=Pe);let Y=q.get(M),Q=E.state.lights,Ce=E.state.shadowsArray,Oe=Q.state.version,we=ye.getParameters(M,Q.state,Ce,B,te,E.state.lightProbeGridArray),ze=ye.getProgramCacheKey(we),We=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let at=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=xe.get(M.envMap||Y.environment,at),Y.envMapRotation=Y.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,We===void 0&&(M.addEventListener("dispose",Hn),We=new Map,Y.programs=We);let ct=We.get(ze);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===Oe)return hh(M,we),ct}else we.uniforms=ye.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,te,we),M.onBeforeCompile(we,C),ct=ye.acquireProgram(we,ze),We.set(ze,ct),Y.uniforms=we.uniforms;let ke=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Xe.uniform),hh(M,we),Y.needsLights=ep(M),Y.lightsStateVersion=Oe,Y.needsLights&&(ke.ambientLightColor.value=Q.state.ambient,ke.lightProbe.value=Q.state.probe,ke.sunLights.value=Q.state.sun,ke.sunLightShadows.value=Q.state.sunShadow,ke.directionalLights.value=Q.state.directional,ke.directionalLightShadows.value=Q.state.directionalShadow,ke.spotLights.value=Q.state.spot,ke.spotLightShadows.value=Q.state.spotShadow,ke.rectAreaLights.value=Q.state.rectArea,ke.ltc_1.value=Q.state.rectAreaLTC1,ke.ltc_2.value=Q.state.rectAreaLTC2,ke.pointLights.value=Q.state.point,ke.pointLightShadows.value=Q.state.pointShadow,ke.hemisphereLights.value=Q.state.hemi,ke.sunShadowMatrix.value=Q.state.sunShadowMatrix,ke.sunShadowCascade.value=Q.state.sunShadowCascade,ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ke.spotLightMatrix.value=Q.state.spotLightMatrix,ke.spotLightMap.value=Q.state.spotLightMap,ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=ct,Y.uniformsList=null,ct}function uh(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=er.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function hh(M,B){let te=q.get(M);te.outputColorSpace=B.outputColorSpace,te.batching=B.batching,te.batchingColor=B.batchingColor,te.instancing=B.instancing,te.instancingColor=B.instancingColor,te.instancingMorph=B.instancingMorph,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}function Zf(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let te=0,Y=M.length;te<Y;te++){let Q=M[te];if(Q.texture!==null&&Q.boundingBox.containsPoint(v))return Q}return null}function jf(M,B,te,Y,Q){B.isScene!==!0&&(B=Pe),se.resetTextureUnits();let Ce=B.fog,Oe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,we=de===null?C.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ht.workingColorSpace,ze=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,We=xe.get(Y.envMap||Oe,ze),at=Y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ct=!!te.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!te.morphAttributes.position,_t=!!te.morphAttributes.normal,Ft=!!te.morphAttributes.color,At=Un;Y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(At=C.toneMapping);let yt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,en=yt!==void 0?yt.length:0,Ue=q.get(Y),rn=E.state.lights;if(J===!0&&(K===!0||M!==ae)){let bt=M===ae&&Y.id===ne;Xe.setState(Y,M,bt)}let pt=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==rn.state.version||Ue.outputColorSpace!==we||Q.isBatchedMesh&&Ue.batching===!1||!Q.isBatchedMesh&&Ue.batching===!0||Q.isBatchedMesh&&Ue.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ue.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ue.instancing===!1||!Q.isInstancedMesh&&Ue.instancing===!0||Q.isSkinnedMesh&&Ue.skinning===!1||!Q.isSkinnedMesh&&Ue.skinning===!0||Q.isInstancedMesh&&Ue.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ue.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ue.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ue.instancingMorph===!1&&Q.morphTexture!==null||Ue.envMap!==We||Y.fog===!0&&Ue.fog!==Ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Xe.numPlanes||Ue.numIntersection!==Xe.numIntersection)||Ue.vertexAlphas!==at||Ue.vertexTangents!==ct||Ue.morphTargets!==ke||Ue.morphNormals!==_t||Ue.morphColors!==Ft||Ue.toneMapping!==At||Ue.morphTargetsCount!==en||!!Ue.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ue.__version=Y.version);let Sn=Ue.currentProgram;pt===!0&&(Sn=Ua(Y,B,Q),U&&Y.isNodeMaterial&&U.onUpdateProgram(Y,Sn,Ue));let Vn=!1,Si=!1,gs=!1,vt=Sn.getUniforms(),Nt=Ue.uniforms;if(x.useProgram(Sn.program)&&(Vn=!0,Si=!0,gs=!0),Y.id!==ne&&(ne=Y.id,Si=!0),Ue.needsLights){let bt=Zf(E.state.lightProbeGridArray,Q);Ue.lightProbeGrid!==bt&&(Ue.lightProbeGrid=bt,Si=!0)}if(Vn||ae!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",M.projectionMatrix),vt.setValue(L,"viewMatrix",M.matrixWorldInverse);let Ei=vt.map.cameraPosition;Ei!==void 0&&Ei.setValue(L,pe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),ae!==M&&(ae=M,Si=!0,gs=!0)}if(Ue.needsLights&&(rn.state.sunShadowMap.length>0&&vt.setValue(L,"sunShadowMap",rn.state.sunShadowMap,se),rn.state.directionalShadowMap.length>0&&vt.setValue(L,"directionalShadowMap",rn.state.directionalShadowMap,se),rn.state.spotShadowMap.length>0&&vt.setValue(L,"spotShadowMap",rn.state.spotShadowMap,se),rn.state.pointShadowMap.length>0&&vt.setValue(L,"pointShadowMap",rn.state.pointShadowMap,se)),Q.isSkinnedMesh){vt.setOptional(L,Q,"bindMatrix"),vt.setOptional(L,Q,"bindMatrixInverse");let bt=Q.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),vt.setValue(L,"boneTexture",bt.boneTexture,se))}Q.isBatchedMesh&&(vt.setOptional(L,Q,"batchingTexture"),vt.setValue(L,"batchingTexture",Q._matricesTexture,se),vt.setOptional(L,Q,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",Q._indirectTexture,se),vt.setOptional(L,Q,"batchingColorTexture"),Q._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",Q._colorsTexture,se));let bi=te.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&z.update(Q,te,Sn),(Si||Ue.receiveShadow!==Q.receiveShadow)&&(Ue.receiveShadow=Q.receiveShadow,vt.setValue(L,"receiveShadow",Q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Nt.envMapIntensity.value=B.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=Kx()),Si){if(vt.setValue(L,"toneMappingExposure",C.toneMappingExposure),Ue.needsLights&&Kf(Nt,gs),Ce&&Y.fog===!0&&qe.refreshFogUniforms(Nt,Ce),qe.refreshMaterialUniforms(Nt,Y,W,R,E.state.transmissionRenderTarget[M.id]),Ue.needsLights&&Ue.lightProbeGrid){let bt=Ue.lightProbeGrid;Nt.probesSH.value=bt.texture,Nt.probesMin.value.copy(bt.boundingBox.min),Nt.probesMax.value.copy(bt.boundingBox.max),Nt.probesResolution.value.copy(bt.resolution)}er.upload(L,uh(Ue),Nt,se)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(er.upload(L,uh(Ue),Nt,se),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(L,"center",Q.center),vt.setValue(L,"modelViewMatrix",Q.modelViewMatrix),vt.setValue(L,"normalMatrix",Q.normalMatrix),vt.setValue(L,"modelMatrix",Q.matrixWorld),Y.uniformsGroups!==void 0){let bt=Y.uniformsGroups;for(let Ei=0,_s=bt.length;Ei<_s;Ei++){let fh=bt[Ei];fe.update(fh,Sn),fe.bind(fh,Sn)}}return Sn}function Kf(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function ep(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(M,B,te){let Y=q.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=B,q.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:te,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let te=q.get(M);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,te=0){de=M,j=B,Z=te;let Y=null,Q=!1,Ce=!1;if(M){let we=q.get(M);if(we.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,we.__webglFramebuffer),oe.copy(M.viewport),De.copy(M.scissor),O=M.scissorTest,x.viewport(oe),x.scissor(De),x.setScissorTest(O),ne=-1;return}else if(we.__webglFramebuffer===void 0)se.setupRenderTarget(M);else if(we.__hasExternalTextures)se.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let at=M.depthTexture;if(we.__boundDepthTexture!==at){if(at!==null&&q.has(at)&&(M.width!==at.image.width||M.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(M)}}let ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ce=!0);let We=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[B])?Y=We[B][te]:Y=We[B],Q=!0):M.samples>0&&se.useMultisampledRTT(M)===!1?Y=q.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[te]:Y=We,oe.copy(M.viewport),De.copy(M.scissor),O=M.scissorTest}else oe.copy(ee).multiplyScalar(W).floor(),De.copy(ge).multiplyScalar(W).floor(),O=tt;if(te!==0&&(Y=H),x.bindFramebuffer(L.FRAMEBUFFER,Y)&&x.drawBuffers(M,Y),x.viewport(oe),x.scissor(De),x.setScissorTest(O),Q){let we=q.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,te)}else if(Ce){let we=B;for(let ze=0;ze<M.textures.length;ze++){let We=q.get(M.textures[ze]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ze,We.__webglTexture,te,we)}}else if(M!==null&&te!==0){let we=q.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,te)}ne=-1};function dh(M){let B=q.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=A.textureFormatReadable(M.format),B.__typeReadable=A.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,te,Y,Q,Ce,Oe,we=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){x.bindFramebuffer(L.FRAMEBUFFER,ze);try{let We=M.textures[we],at=We.format,ct=We.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);let ke=dh(We);if(ke.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-Y&&te>=0&&te<=M.height-Q&&L.readPixels(B,te,Y,Q,be.convert(at),be.convert(ct),Ce)}finally{let We=de!==null?q.get(de).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(M,B,te,Y,Q,Ce,Oe,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(B>=0&&B<=M.width-Y&&te>=0&&te<=M.height-Q){x.bindFramebuffer(L.FRAMEBUFFER,ze);let We=M.textures[we],at=We.format,ct=We.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);let ke=dh(We);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.bufferData(L.PIXEL_PACK_BUFFER,Ce.byteLength,L.STREAM_READ),L.readPixels(B,te,Y,Q,be.convert(at),be.convert(ct),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ft=de!==null?q.get(de).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ft);let At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ed(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ce),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(_t),L.deleteSync(At),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,te=0){let Y=Math.pow(2,-te),Q=Math.floor(M.image.width*Y),Ce=Math.floor(M.image.height*Y),Oe=B!==null?B.x:0,we=B!==null?B.y:0;se.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,te,0,0,Oe,we,Q,Ce),x.unbindTexture()},this.copyTextureToTexture=function(M,B,te=null,Y=null,Q=0,Ce=0){let Oe,we,ze,We,at,ct,ke,_t,Ft,At=M.isCompressedTexture?M.mipmaps[Ce]:M.image;if(te!==null)Oe=te.max.x-te.min.x,we=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,We=te.min.x,at=te.min.y,ct=te.isBox3?te.min.z:0;else{let Nt=Math.pow(2,-Q);Oe=Math.floor(At.width*Nt),we=Math.floor(At.height*Nt),M.isDataArrayTexture?ze=At.depth:M.isData3DTexture?ze=Math.floor(At.depth*Nt):ze=1,We=0,at=0,ct=0}Y!==null?(ke=Y.x,_t=Y.y,Ft=Y.z):(ke=0,_t=0,Ft=0);let yt=be.convert(B.format),en=be.convert(B.type),Ue;B.isData3DTexture?(se.setTexture3D(B,0),Ue=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(se.setTexture2DArray(B,0),Ue=L.TEXTURE_2D_ARRAY):(se.setTexture2D(B,0),Ue=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let rn=x.getParameter(L.UNPACK_ROW_LENGTH),pt=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=x.getParameter(L.UNPACK_SKIP_PIXELS),Vn=x.getParameter(L.UNPACK_SKIP_ROWS),Si=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,We),x.pixelStorei(L.UNPACK_SKIP_ROWS,at),x.pixelStorei(L.UNPACK_SKIP_IMAGES,ct);let gs=M.isDataArrayTexture||M.isData3DTexture,vt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let Nt=q.get(M),bi=q.get(B),bt=q.get(Nt.__renderTarget),Ei=q.get(bi.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,bt.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let _s=0;_s<ze;_s++)gs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(M).__webglTexture,Q,ct+_s),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(B).__webglTexture,Ce,Ft+_s)),L.blitFramebuffer(We,at,Oe,we,ke,_t,Oe,we,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Q!==0||M.isRenderTargetTexture||q.has(M)){let Nt=q.get(M),bi=q.get(B);x.bindFramebuffer(L.READ_FRAMEBUFFER,D),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,N);for(let bt=0;bt<ze;bt++)gs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,Q,ct+bt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,Q),vt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bi.__webglTexture,Ce,Ft+bt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bi.__webglTexture,Ce),Q!==0?L.blitFramebuffer(We,at,Oe,we,ke,_t,Oe,we,L.COLOR_BUFFER_BIT,L.NEAREST):vt?L.copyTexSubImage3D(Ue,Ce,ke,_t,Ft+bt,We,at,Oe,we):L.copyTexSubImage2D(Ue,Ce,ke,_t,We,at,Oe,we);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Ue,Ce,ke,_t,Ft,Oe,we,ze,yt,en,At.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ue,Ce,ke,_t,Ft,Oe,we,ze,yt,At.data):L.texSubImage3D(Ue,Ce,ke,_t,Ft,Oe,we,ze,yt,en,At):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ce,ke,_t,Oe,we,yt,en,At.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ce,ke,_t,At.width,At.height,yt,At.data):L.texSubImage2D(L.TEXTURE_2D,Ce,ke,_t,Oe,we,yt,en,At);x.pixelStorei(L.UNPACK_ROW_LENGTH,rn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),x.pixelStorei(L.UNPACK_SKIP_ROWS,Vn),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Si),Ce===0&&B.generateMipmaps&&L.generateMipmap(Ue),x.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&se.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?se.setTextureCube(M,0):M.isData3DTexture?se.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?se.setTexture2DArray(M,0):se.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){j=0,Z=0,de=null,x.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var nr=Math.PI*2,Ie={r0:1.95,r1:3.05,h:1.02,a0:-Math.PI/2-1.75,a1:-Math.PI/2+1.75,doorR:2.5,door:.66},cf=[-Math.PI/2-1.02,-Math.PI/2-.34,-Math.PI/2+.34,-Math.PI/2+1.02],wn=(i,e,t=0)=>new F(Math.cos(e)*i,t,-Math.sin(e)*i);function ir(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");t&&t(s,i,e);let r=new ns(n);return r.colorSpace=an,r.anisotropy=4,r.userData.g=s,r.userData.c=n,r}function Hu(i,e,t,n,s,{sub:r="",bg:a=!0,t:o=0}={}){if(i.save(),i.translate(e,t),a){let c=i.createLinearGradient(0,0,n,s);c.addColorStop(0,"#7a0c2a"),c.addColorStop(.5,"#c21839"),c.addColorStop(1,"#4a0a5a"),i.fillStyle=c,i.fillRect(0,0,n,s);let u=n/9,f=u*.55;for(let d=-1;d<s/f+1;d++)for(let _=-1;_<10;_++){let y=_*u+d%2*u*.5+o*20%u,p=d*f;i.fillStyle=(d+_)%3?"rgba(255,170,90,.18)":"rgba(255,255,255,.12)",i.fillRect(y+3,p+3,u-6,f-6),i.strokeStyle="rgba(255,255,255,.15)",i.strokeRect(y+3,p+3,u-6,f-6)}let h=i.createRadialGradient(n/2,s/2,s*.1,n/2,s/2,n*.7);h.addColorStop(0,"rgba(255,255,255,.25)"),h.addColorStop(1,"rgba(0,0,0,.45)"),i.fillStyle=h,i.fillRect(0,0,n,s)}let l=(c,u,f,h,d)=>{i.font=`900 ${h}px "Arial Black", Impact, sans-serif`,i.textAlign="center",i.textBaseline="middle";for(let y=10;y>0;y--)i.fillStyle=`rgb(${70+y*6},${70+y*6},${90+y*6})`,i.fillText(c,u+y*.9,f+y*1.1,d);let _=i.createLinearGradient(0,f-h/2,0,f+h/2);_.addColorStop(0,"#ffffff"),_.addColorStop(.55,"#e9ecf5"),_.addColorStop(1,"#aab2c8"),i.fillStyle=_,i.fillText(c,u,f,d),i.lineWidth=Math.max(2,h/40),i.strokeStyle="#5a6078",i.strokeText(c,u,f,d)};l("ATRAPA",n*.4,s*.27,s*.27,n*.62),i.save(),i.translate(n*.79,s*.25),i.rotate(-.12),l("UN",0,0,s*.2,n*.2),i.restore(),l("MILL\xD3N",n*.5,s*.64,s*.42,n*.9),r&&(i.fillStyle="#1aa0d8",i.fillRect(n*.3,s*.84,n*.4,s*.13),i.font=`900 ${s*.1}px "Arial Black", sans-serif`,i.fillStyle="#fff",i.textAlign="center",i.fillText(r,n/2,s*.905,n*.38)),i.restore()}function Hl(i,e,t,n){let s=new mi,r=[-i/2,t/2],a=[i/2,t/2],o=[e/2,-t/2],l=[-e/2,-t/2],c=[r,a,o,l],u=c.length;for(let f=0;f<u;f++){let h=c[(f+u-1)%u],d=c[f],_=c[(f+1)%u],y=[h[0]-d[0],h[1]-d[1]],p=[_[0]-d[0],_[1]-d[1]],m=Math.hypot(...y),S=Math.hypot(...p),w=[d[0]+y[0]/m*n,d[1]+y[1]/m*n],v=[d[0]+p[0]/S*n,d[1]+p[1]/S*n];f===0?s.moveTo(...w):s.lineTo(...w),s.quadraticCurveTo(d[0],d[1],...v)}return s.closePath(),s}function ev(i){i.computeBoundingBox();let e=i.boundingBox,t=i.attributes.position,n=i.attributes.uv;for(let s=0;s<t.count;s++)n.setXY(s,(t.getX(s)-e.min.x)/(e.max.x-e.min.x),(t.getY(s)-e.min.y)/(e.max.y-e.min.y));return n.needsUpdate=!0,i}function uf(i,e,t,n,s=64){let r=new mi;for(let a=0;a<=s;a++){let o=t+(n-t)*a/s,l=Math.cos(o)*e,c=Math.sin(o)*e;a?r.lineTo(l,c):r.moveTo(l,c)}for(let a=s;a>=0;a--){let o=t+(n-t)*a/s;r.lineTo(Math.cos(o)*i,Math.sin(o)*i)}return r.closePath(),r}function ku(){let i=ir(256,512,(e,t,n)=>{e.fillStyle="#05030c",e.fillRect(0,0,t,n);for(let s=6;s<n;s+=24){let r=e.createLinearGradient(0,0,t,0);r.addColorStop(0,"rgba(255,255,255,.15)"),r.addColorStop(.5,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,.15)"),e.fillStyle=r,e.fillRect(0,s,t,5)}});return i.wrapS=i.wrapT=Ns,i}function hf(){return ir(256,128,(i,e,t)=>{i.fillStyle="#e88a3a",i.fillRect(0,0,e,t),i.fillStyle="#f6b26b";for(let n=0;n<8;n++)i.fillRect(n*32,0,14,t);i.fillStyle="rgba(120,50,10,.5)";for(let n=4;n<t;n+=6)i.fillRect(0,n,e,1);i.fillStyle="#f4f1e8",i.fillRect(e*.42,0,e*.16,t),i.fillStyle="#7a1030",i.font="bold 22px sans-serif",i.textAlign="center",i.save(),i.translate(e/2,t/2),i.rotate(Math.PI/2),i.fillText("25.000 \u20AC",0,7),i.restore()})}function df(){return ir(256,128,(i,e,t)=>{i.fillStyle="#efa45a",i.fillRect(0,0,e,t),i.fillStyle="#d97a2b",i.fillRect(10,10,e-20,t-20),i.fillStyle="#f7c58d",i.beginPath(),i.arc(e*.75,t/2,34,0,nr),i.fill(),i.fillStyle="#8a3c0a",i.font="900 48px sans-serif",i.textAlign="left",i.fillText("50",24,58),i.font="bold 18px sans-serif",i.fillText("EURO",24,90),i.fillStyle="#f4f1e8",i.fillRect(e*.42,0,e*.16,t)})}function Vl({shirt:i=14540253,pants:e=3355460,skin:t=1578e4,hair:n=2824720,tie:s=null,jacket:r=null,glasses:a=!1,long:o=!1,scale:l=1}={}){let c=new En,u=(g,b=.6)=>new jt({color:g,roughness:b,flatShading:!0}),f=new Tt(.09,.08,.8,6),h=new Ee(f,u(e));h.position.set(-.11,.4,0);let d=h.clone();d.position.x=.11;let _=new Ee(new Tt(.24,.2,.68,7),u(r||i));_.position.y=1.15;let y=new Tt(.06,.055,.62,6);y.translate(0,-.31,0);let p=new Ee(y,u(r||i));p.position.set(-.3,1.45,0),p.rotation.z=.12;let m=new Ee(y,u(r||i));m.position.set(.3,1.45,0),m.rotation.z=-.12;let S=new Ee(new ss(.17,1),u(t));S.position.y=1.68;let w=new Ee(new gi(.18,7,5,0,nr,0,Math.PI*(o?.75:.55)),u(n));w.position.y=1.71,S.add(w),w.position.set(0,.03,-.01);let v=new Ee(new Tt(.06,.07,.1,6),u(t));if(v.position.y=1.52,c.add(h,d,_,p,m,S,v),r){let g=new Ee(new Mt(.16,.5,.02),u(i));g.position.set(0,1.22,.205),c.add(g)}if(s){let g=new Ee(new Mt(.06,.38,.02),u(s));g.position.set(0,1.2,.218),c.add(g)}if(o){let g=new Ee(new Mt(.3,.32,.1),u(n));g.position.set(0,-.12,-.12),S.add(g)}if(a){let g=u(1118481,.3);[-.07,.07].forEach(C=>{let I=new Ee(new Kn(.045,.012,4,10),g);I.position.set(C,.02,.15),S.add(I)});let b=new Ee(new Mt(.05,.012,.012),g);b.position.set(0,.025,.155),S.add(b)}let T=u(1118481);[-.06,.06].forEach(g=>{let b=new Ee(new gi(.02,5,4),T);b.position.set(g,.02,.155),S.add(b)});let E=new Ee(new Mt(.07,.015,.01),u(8006186));E.position.set(0,-.07,.16),S.add(E);let P=new Ee(new Mt(.42,.06,.22),u(1118481));return P.position.set(0,.03,.03),c.add(P),c.scale.setScalar(l),c.userData={legL:h,legR:d,armL:p,armR:m,head:S,mouth:E,t:Math.random()*10,mood:null},c}function ff(i,e,t,n=!1){let s=i.userData;s.t+=e*(t?9:2);let r=t?Math.sin(s.t)*.5:0;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r*.8,s.armR.rotation.x=r*.8,s.armL.rotation.z=.12,s.armR.rotation.z=-.12,t||(s.armL.rotation.x=Math.sin(s.t)*.03,s.armR.rotation.x=n?-.9+Math.sin(s.t*3)*.35:Math.sin(s.t+1)*.03,s.mood==="cheer"?(s.armL.rotation.z=2.6+Math.sin(s.t*6)*.2,s.armR.rotation.z=-2.6-Math.sin(s.t*6)*.2):s.mood==="sad"?s.head.rotation.x=.35:s.mood==="think"?(s.armR.rotation.x=-2.2,s.armR.rotation.z=.5):s.mood==="point"&&(s.armR.rotation.x=-1.4)),s.mood!=="sad"&&(s.head.rotation.x=0),s.head.rotation.y=n?Math.sin(s.t*1.3)*.25:0,s.mouth.scale.y=n?1+Math.abs(Math.sin(s.t*9))*3:1}function pf(i,{lowQuality:e=!1}={}){let t=new Br;t.background=new Ge(328204),t.fog=new Or(328204,22,48);let n={scene:t,seats:[],doors:[],monitors:[],colliders:[]},s=k=>new jt(k);t.add(new ta(10124543,2099232,.9));let r=new sa(16777215,1.4);r.position.set(3,10,8),t.add(r),n.spots=[];for(let k=0;k<6;k++){let J=new ia(16777215,0,30,.5,.7,1.2);t.add(J,J.target),n.spots.push(J)}let a=s({color:1182238,metalness:.6,roughness:.25}),o=new mi;o.absarc(0,0,24,0,nr);let l=new $n;{let k=uf(Ie.r0+.05,Ie.r1-.05,Ie.a0+.04,Ie.a1-.04);l.setFromPoints(k.getPoints(64).reverse())}o.holes.push(l);let c=new Ee(new Ni(o,64),a);c.rotation.x=-Math.PI/2,t.add(c),n.floorLines=new Ee(new jn(4.35,4.5,96),new Et({color:12078335})),n.floorLines.rotation.x=-Math.PI/2,n.floorLines.position.y=.012,t.add(n.floorLines);let u=new Ee(new jn(5.6,5.75,96),new Et({color:16777215}));u.rotation.x=-Math.PI/2,u.position.y=.012,t.add(u),n.ring2=u;let f=new Ee(new pi(Ie.r0-.02,48),s({color:14275816,metalness:.2,roughness:.15}));f.rotation.x=-Math.PI/2,f.position.y=.01,t.add(f);let h=4.2;n.pitY=-h;let d=s({color:1706032,emissive:9054975,emissiveIntensity:.7,side:kt,roughness:.6}),_=new Ee(new Tt(Ie.r1,Ie.r1,h,64,1,!0,Math.PI/2+Ie.a0,Ie.a1-Ie.a0),d);_.position.y=-h/2,t.add(_);let y=ku();y.repeat.set(6,1);let p=new Ee(new Tt(Ie.r0,Ie.r0,h,64,1,!0),s({color:2230848,emissive:16722538,emissiveMap:y,emissiveIntensity:.5}));p.position.y=-h/2,t.add(p);let m=new Ee(new jn(Ie.r0,Ie.r1,64),new Et({color:9059583}));m.rotation.x=-Math.PI/2,m.position.y=-h+.01,t.add(m),n.pitFloor=m,n.pitGlow=new as(12607743,30,9,1.2),n.pitGlow.position.set(0,-2.2,2.3),t.add(n.pitGlow);let S=new as(16726666,18,7,1.2);S.position.set(0,-3.6,2.6),t.add(S);let w=uf(Ie.r0,Ie.r1,Ie.a0,Ie.a1);cf.forEach(k=>{let J=[Math.cos(k)*Ie.doorR,Math.sin(k)*Ie.doorR],K=Ie.door/2+.02,ce=Math.cos(k),pe=Math.sin(k),Be=[[-K,-K],[-K,K],[K,K],[K,-K]].map(([Pe,Ne])=>new _e(J[0]+Pe*ce-Ne*pe,J[1]+Pe*pe+Ne*ce));w.holes.push(new $n(Be.reverse()))});let v=new Vs(w,{depth:.07,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:48}),T=s({color:15921399,metalness:.15,roughness:.12}),E=new Ee(v,T);E.rotation.x=-Math.PI/2,E.position.y=Ie.h-.07,t.add(E);let P=new Et({color:14268671});n.edgeMat=P;for(let k of[Ie.r0,Ie.r1]){let J=new Kn(k,.025,6,96,Ie.a1-Ie.a0),K=new Ee(J,P);K.rotation.x=Math.PI/2,K.rotation.z=-Ie.a1+0,K.position.y=Ie.h-.09,t.add(K),K.rotation.set(-Math.PI/2,0,Ie.a0)}let g=new jr({color:13615359,metalness:0,roughness:.05,transparent:!0,opacity:.18,side:Qt,depthWrite:!1});for(let k of[Ie.r0+.04,Ie.r1-.04]){let J=new Tt(k,k,Ie.h-.1,64,1,!0,Math.PI/2+Ie.a0,Ie.a1-Ie.a0),K=new Ee(J,g);K.position.y=(Ie.h-.1)/2,t.add(K)}let b=s({color:13159128,metalness:.9,roughness:.25});for(let k=0;k<=10;k++){let J=Ie.a0+(Ie.a1-Ie.a0)*k/10;for(let K of[Ie.r0+.05,Ie.r1-.05]){let ce=new Ee(new Tt(.03,.03,Ie.h-.1,8),b);ce.position.copy(wn(K,J,(Ie.h-.1)/2)),t.add(ce)}}let C=new Mt(Ie.door,.04,Ie.door);C.translate(0,0,Ie.door/2);for(let k=0;k<4;k++){let J=cf[k],K=wn(Ie.doorR,J,Ie.h-.03),ce=new En,pe=wn(1,J).negate();ce.position.copy(K).addScaledVector(pe,-Ie.door/2*-1).addScaledVector(pe,-Ie.door/2*0),ce.position.copy(K).addScaledVector(pe,-Ie.door/2),ce.rotation.order="YXZ",ce.rotation.y=Math.atan2(pe.x,pe.z);let Be=new jt({color:16777215,emissive:16771316,emissiveIntensity:.9,roughness:.3}),Pe=new Ee(C,Be);ce.add(Pe),t.add(ce);let Ne=new Ee(new jn(Ie.door*.5,Ie.door*.5+.03,4,1,Math.PI/4),new Et({color:10132138,side:Qt}));Ne.rotation.x=-Math.PI/2,Ne.scale.set(Math.SQRT2,Math.SQRT2,1),Ne.rotation.z=J+Math.PI/2-Math.PI/2,Ne.position.copy(K).setY(Ie.h+.005),Ne.rotation.set(-Math.PI/2,0,J),t.add(Ne);let He=new as(16732064,0,3,2);He.position.copy(K).setY(Ie.h-.4),t.add(He);let L=new En,st=wn(Ie.r1-.12,J,Ie.h+.02);L.position.copy(st),L.rotation.y=Math.atan2(pe.x,pe.z);let nt=new Ee(new Mt(.8,.46,.05),s({color:1381660,metalness:.6,roughness:.3}));nt.position.y=.26,nt.rotation.x=-.35,L.add(nt);let A=ir(512,288),x=ir(512,288),V=new Ee(new Zn(.76,.42),new Et({map:A,toneMapped:!1}));V.position.set(0,0,.027),nt.add(V);let q=new Ee(new Zn(.76,.42),new Et({map:x,toneMapped:!1}));q.position.set(0,0,-.027),q.rotation.y=Math.PI,nt.add(q),t.add(L),n.doors.push({i:k,a:J,center:K,pivot:ce,door:Pe,mat:Be,light:He,open:0,target:0,mon:L,texF:A,texB:x,inward:pe})}n.bankPos=wn((Ie.r0+Ie.r1)/2,Ie.a0+.3,Ie.h);let I=(k,J,K,ce=1.1)=>{let pe=new Ee(new Kn(k,.035,6,96,K-J),b);pe.rotation.set(-Math.PI/2,0,J),pe.position.y=ce,t.add(pe);let Be=Math.max(2,Math.round((K-J)*k/1.2));for(let Ne=0;Ne<=Be;Ne++){let He=J+(K-J)*Ne/Be,L=new Ee(new Tt(.03,.03,ce,6),b);L.position.copy(wn(k,He,ce/2)),t.add(L)}let Pe=new Ee(new Tt(k,k,ce*.85,64,1,!0,Math.PI/2+J,K-J),g);Pe.position.y=ce*.45,t.add(Pe)};I(4.3,-Math.PI/2+.45,Math.PI*1.5-.45),I(7.2,.15,Math.PI-.15);let U=ku();U.repeat.set(3,2),n.ledTex=U,n.lowWallMat=s({color:656914,emissive:16777215,emissiveMap:U,emissiveIntensity:.35});let H=new Ee(new Tt(8.6,8.6,3.6,64,1,!0,Math.PI/2+.55,Math.PI-1.1),n.lowWallMat);H.material.side=kt,H.position.y=1.8,t.add(H);let D=new Jn(new gi(.07,8,6),new Et({color:16773840}),42),N=new ut,j=0;for(let k=0;k<7;k++)for(let J=0;J<6;J++)N.makeTranslation(-.75+J*.3,.5+k*.42,-8.2),D.setMatrixAt(j++,N);t.add(D),n.bulbs=D;let Z=new Ee(new Mt(2,3.3,.2),s({color:525838}));Z.position.set(0,1.75,-8.35),t.add(Z);let de=Hl(11.5,9.2,4.6,1.2),ne=Hl(12.3,10,5.3,1.45);ne.holes.push(new $n(de.getPoints(24).reverse()));let ae=new Vs(ne,{depth:.35,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,curveSegments:24}),oe=s({color:14210284,metalness:.4,roughness:.3}),De=new Ee(ae,oe),O=new En;O.position.set(0,6.6,-9.2),O.add(De);let G=Hl(11.9,9.6,4.95,1.3);G.holes.push(new $n(Hl(11.6,9.3,4.68,1.22).getPoints(24).reverse())),n.screenGlow=new Et({color:14723327});let X=new Ee(new Ni(G,24),n.screenGlow);X.position.z=.43,O.add(X),n.screenTex=ir(1280,512),n.ledMat=new Et({map:n.screenTex,toneMapped:!1});let le=new Ee(ev(new Ni(de,24)),n.ledMat);le.position.z=.2,O.add(le);let R=new Ee(new Ni(ne,24),s({color:657938}));R.position.z=-.01,R.rotation.y=Math.PI,O.add(R),O.rotation.x=.06,t.add(O),n.screen=O;let W=new Ee(new Mt(.5,4.2,.4),s({color:1380894,metalness:.5}));W.position.set(0,2.1+0,-9.4),t.add(W),n.tierMats=[];let ie=(k,J,K,ce,pe)=>{for(let He=0;He<K;He++){let L=ce+He*.95,st=pe+He*.55,nt=s({color:1314846,roughness:.8}),A=new Ee(new jn(L-.45,L+.5,32,1,k,J-k),nt);A.rotation.x=-Math.PI/2,A.position.y=st+.06,t.add(A);let x=new Ee(new Tt(L-.45,L-.45,st+.06,32,1,!0,Math.PI/2+k,J-k),nt);x.position.y=(st+.06)/2,t.add(x);let V=Math.floor((J-k)*L/.62);for(let q=0;q<V;q++)n.seats.push([L,k+(J-k)*(q+.5)/V,st+.06])}let Be=new Et({color:16777215});n.tierMats.push(Be);let Pe=new Ee(new Tt(ce-.42,ce-.42,.18,48,1,!0,Math.PI/2+k,J-k),Be);Pe.position.y=pe+.3,t.add(Pe);let Ne=new Ee(new Kn(ce-.42,.03,5,64,J-k),b);Ne.rotation.set(-Math.PI/2,0,k),Ne.position.y=pe+1.05,t.add(Ne)};ie(.25,1.15,e?3:5,9.6,1.4),ie(Math.PI-1.15,Math.PI-.25,e?3:5,9.6,1.4),ie(-.45,.2,e?2:4,10.2,1.4),ie(Math.PI-.2,Math.PI+.45,e?2:4,10.2,1.4);let $=new Ee(new Kn(12.35,.12,6,96),b);$.rotation.x=Math.PI/2,$.position.y=10,t.add($);let ee=new Ee(new Kn(11.4,.1,6,96),b);ee.rotation.x=Math.PI/2,ee.position.y=9.95,t.add(ee),n.glowDisc=new Ee(new jn(5.2,6.2,96),new Et({color:16777215,side:Qt})),n.glowDisc.rotation.x=Math.PI/2,n.glowDisc.position.y=10.6,t.add(n.glowDisc),n.ceilBase=new Ge(12611839);let ge=ku();ge.repeat.set(10,3),ge.rotation=0;let tt=new Ee(new Tt(16,16,12,64,1,!0),s({color:459790,emissive:8006399,emissiveMap:ge,emissiveIntensity:.25,side:kt}));tt.position.y=6,t.add(tt),n.outerMat=tt.material;for(let k=0;k<10;k++){let J=.15+k*(Math.PI-.3)/9,K=new Ee(new Mt(.12,8,.12),new Et({color:k%2?16719952:10502399}));K.position.copy(wn(15.5,J,6)),t.add(K)}return n.walkR=14.5,n}function mf(i,e){i.doors.forEach(t=>{t.open+=(t.target-t.open)*Math.min(1,e*7),t.pivot.rotation.x=t.open*1.45})}function Gl(i,e,t){let n=Math.hypot(e,t);if(n>i.walkR)return!0;let s=Math.atan2(-t,e),r=(a,o)=>{let l=(a-o)%nr;return l>Math.PI&&(l-=nr),l<-Math.PI&&(l+=nr),Math.abs(l)};return n>Ie.r0-.25&&n<Ie.r1+.25&&r(s,-Math.PI/2)<1.75+.08||Math.abs(n-4.3)<.2&&r(s,-Math.PI/2)>.45||Math.abs(n-7.2)<.2&&r(s,Math.PI/2)<Math.PI/2-.15||n>8.4&&r(s,Math.PI/2)<1.05}var sr=Math.PI*2,tv=["#ff0000","#ff5a00","#ff9a00","#ffd000","#a8ff00","#22ff22","#00ff9a","#00e5ff","#0090ff","#0030ff","#6a00ff","#b000ff","#ff00d0","#ff4f8a","#ffd6a0","#ffffff","rainbow"],gf={SSLOW:.06,SLOW:.15,MEDIUM:.35,FAST:.8};var nv="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",iv=`uniform vec3 color; uniform float inten; uniform float gobo; uniform float rot; varying vec2 vUv;
void main(){ float a = pow(vUv.y, 1.6) * inten; if (gobo > 0.5) a *= 0.25 + 0.75 * step(0.5, fract(vUv.x * 7.0 + rot)); gl_FragColor = vec4(color * a, 1.0); }`;function Vu(){return new ln({uniforms:{color:{value:new Ge},inten:{value:0},gobo:{value:0},rot:{value:0}},vertexShader:nv,fragmentShader:iv,transparent:!0,blending:Ys,depthWrite:!1,side:Qt})}function sv(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.6,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ns(i)}var _f=i=>({auto:!0,sel:"ALL",colA:i==="leds"?"#ffffff":"#ff1040",colB:i==="leds"?"#ffffff":"#9a30ff",rbA:!1,rbB:!1,cmode:null,ccue:0,state:"O",stateT:0,prevState:"O",icue:0,bright:1,beam:"BEAM",thick:1,spread:1,tilt:i==="bars"?20:30,pan:0,tiltSign:1,panSign:1,form:i==="heads"?"WIDE":null,freeze:!1,speed:"MEDIUM",move:i==="heads"?"CIRCLE":null,goboRot:!1,cueSpeed:1,fadeSpeed:1,loop:!0,grand:!1,overshoot:!1});function xf(i,{lowQuality:e=!1}={}){let t=i.scene,n=sv(),s={heads:{name:"Heads",fx:[]},bars:{name:"LineBars",fx:[]},washes:{name:"Washes",fx:[]},leds:{name:"LEDs",fx:[]}};for(let O in s)s[O].st=_f(O);let r=new jt({color:1710623,metalness:.7,roughness:.4}),a=e?12:16;for(let O=0;O<a;O++){let G=O/a*sr+.1,X=new F(Math.cos(G)*12.35,9.75,-Math.sin(G)*12.35),le=new Ee(new Mt(.35,.18,.35),r);le.position.copy(X).setY(9.92),t.add(le);let R=new Ee(new Tt(.16,.2,.38,10),r);R.position.copy(X),t.add(R);let W=new Et({color:16777215}),ie=new Ee(new pi(.13,12),W);t.add(ie);let $=new Di(1,1,20,1,!0);$.translate(0,-.5,0);let ee=Vu(),ge=new Ee($,ee);ge.position.copy(X),ge.frustumCulled=!1,t.add(ge);let tt=new Ee(new pi(1,20),new Et({map:n,transparent:!0,blending:Ys,depthWrite:!1}));tt.rotation.x=-Math.PI/2,tt.position.y=.02,t.add(tt),s.heads.fx.push({i:O,sub:O%2?"B":"A",pos:X,head:R,lens:ie,lensM:W,beam:ge,bm:ee,hit:tt,len:13,width:.55,down:!0,center:G,col:new Ge,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}let o=e?10:14;for(let O=0;O<o;O++){let G=-Math.PI/2+.75+(sr-1.5)*(O/(o-1)),X=new F(Math.cos(G)*14.6,.4,-Math.sin(G)*14.6),le=new Et({color:16777215}),R=new Ee(new Mt(1.6,.1,.12),le);R.position.copy(X),R.lookAt(0,X.y,0),t.add(R);let W=new Tt(.8,.05,1,4,1,!0);W.translate(0,.5,0),W.scale(1,1,.08);let ie=Vu(),$=new Ee(W,ie);$.position.copy(X),$.frustumCulled=!1,t.add($);let ee=W.attributes.uv;for(let ge=0;ge<ee.count;ge++)ee.setY(ge,1-ee.getY(ge));s.bars.fx.push({i:O,sub:O%2?"B":"A",pos:X,lensM:le,beam:$,bm:ie,len:7,width:1,down:!1,center:G,col:new Ge,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}let l=6;for(let O=0;O<l;O++){let G=O/l*sr+.3,X=new F(Math.cos(G)*11.4,9.7,-Math.sin(G)*11.4),le=new Ee(new Tt(.22,.25,.3,10),r);le.position.copy(X),t.add(le);let R=new Et({color:16777215}),W=new Ee(new pi(.2,12),R);t.add(W);let ie=new Di(1,1,20,1,!0);ie.translate(0,-.5,0);let $=Vu(),ee=new Ee(ie,$);ee.position.copy(X),ee.frustumCulled=!1,t.add(ee);let ge=i.spots[O];ge.position.copy(X),ge.angle=.5,ge.penumbra=.7,s.washes.fx.push({i:O,sub:O%2?"B":"A",pos:X,lens:W,lensM:R,beam:ee,bm:$,spot:ge,len:12,width:1.6,down:!0,center:G,col:new Ge,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}[{name:"Marco pantalla",sub:"A",apply:(O,G)=>{i.screenGlow.color.copy(O).multiplyScalar(.4+.6*G),i.edgeMat&&i.edgeMat.color.copy(O).multiplyScalar(.5+.5*G)}},{name:"Disco techo",sub:"B",apply(O,G){i.glowDisc.material.color.copy(i.ceilBase||O).multiply(O).multiplyScalar(G)}},{name:"Muro chevrones",sub:"A",apply:(O,G)=>{i.lowWallMat.emissive.copy(O),i.lowWallMat.emissiveIntensity=.35*G}},{name:"L\xEDneas suelo",sub:"B",apply:(O,G)=>{i.floorLines.material.color.copy(O).multiplyScalar(G)}}].forEach((O,G)=>s.leds.fx.push({i:G,sub:O.sub,apply:O.apply,col:new Ge(1,1,1),int:1,rnd:Math.random(),rt:0}));let u=new Ge,f=new Ge,h=new Ge,d=new Ge(1,1,1),_=0,y=0,p={kind:null,until:0};function m(O,G,X,le,R){let W=(le*.15*O.cueSpeed+G.i/X)%1;O.rbA?f.setHSL(W,1,.5):f.set(O.colA),O.rbB?h.setHSL((W+.5)%1,1,.5):h.set(O.colB);let ie=1.2*O.cueSpeed,$=G.sub==="A"?f:h;switch(O.cmode){case"SECOND":$=G.i%2?h:f;break;case"SWITCH":$=Math.floor(le*ie)%2?h:f;break;case"SMOOTH":return R.copy(f).lerp(h,.5+.5*Math.sin(le*ie*2));case"GRADIENT":return R.copy(f).lerp(h,X>1?G.i/(X-1):0);case"FLASH":if(le*ie*2%1<.18)return R.copy(d);break}switch(O.ccue){case 1:$=Math.floor(le*ie*4+G.i)%2?h:f;break;case 2:return R.setHSL((le*.3*O.cueSpeed+G.i/X)%1,1,.5);case 3:{let ee=Math.floor(le*ie*2);return R.setHSL((Math.sin(ee*12.9+G.i*78.2)*43758.5%1+1)%1,1,.5)}case 4:$=(G.i/X+le*ie*.25)%1<.5?f:h;break;case 5:$=Math.floor(le*ie*8)%2?h:f;break}return R.copy($)}function S(O,G,X,le){let R=O.cueSpeed,W=Math.max(.1,O.fadeSpeed),ie=le-O.stateT,$=Math.floor(le*3*R),ee=tt=>(Math.sin(tt*12.9898)*43758.5453%1+1)%1,ge;switch(O.state){case"X":ge=0;break;case"FO":ge=Math.min(1,ie/W);break;case"FX":ge=Math.max(0,1-ie/W);break;case"RAND":ge=ee($*7+G.i*3.1)>.5?1:0;break;case"FRAND":{let tt=ee($*7+G.i),k=ee(($+1)*7+G.i),J=le*3*R-$;ge=tt+(k-tt)*J;break}case"ORAND":ge=Math.floor(ee($*3.3)*X)===G.i?1:0;break;case"BRAND":ge=ee($*5.7+G.i*1.3)>.8?1:.08;break;case"STROBE":ge=Math.floor(le*14)%2;break;case"FLASH":ge=Math.max(0,1-ie/.5),ie>.5&&(O.state=O.prevState==="FLASH"?"O":O.prevState,O.stateT=le);break;default:ge=1}if(O.icue){let tt=O.icue,k=le*R*.8%1,J=X>1?G.i/(X-1):0,K=1;if(!O.loop&&le-O.stateT>1/(R*.8))K=1;else switch(tt){case 1:K=Math.max(0,1-Math.abs((J-k+1)%1-0)*4);break;case 2:K=Math.floor(le*R*2)%2===G.i%2?1:0;break;case 3:{let ce=Math.abs(le*R*.8%2-1);K=Math.max(0,1-Math.abs(J-ce)*5);break}case 4:K=J<=k?1:0;break;case 5:K=Math.abs(J-.5)*2<=k?1:0;break;case 6:K=ee(Math.floor(le*8*R)+G.i*9.1)>.7?1:.05;break;case 7:K=(Math.floor(le*R*2)+Math.floor(G.i/2))%2?1:0;break;case 8:K=.5+.5*Math.sin(le*R*6);break;case 9:K=Math.max(0,1-Math.abs((1-J-k+1)%1)*4);break;case 10:K=Math.floor(J*2.999)===Math.floor(le*R*1.5)%3?1:.05;break;case 11:K=Math.max(0,1-Math.min(Math.abs((J-k+1)%1),Math.abs((J-k+1.5)%1))*5);break;case 12:K=.5+.5*Math.sin(le*R*2+J*sr);break}ge*=K}return ge*O.bright}function w(O,G,X,le){let R=O.overshoot?1.6:1,W=gf[O.speed]*sr*O.cueSpeed,ie=O.grand?G.rnd*sr:G.i*.6,$=O.tilt*O.tiltSign,ee=O.pan*O.panSign;switch(O.form){case"WIDE":ee+=(G.i%2?1:-1)*18,$+=8;break;case"IN":ee=0,$=G.down?38:25;break;case"CROSS":ee+=(G.i%2?1:-1)*35;break;case"UD":$+=(G.i%2?1:-1)*20;break}let ge=y;switch(O.move){case"TILT":$+=25*R*Math.sin(ge*W+ie);break;case"SMTILT":$+=25*R*Math.sin(ge*W);break;case"SLTILT":$+=25*R*Math.sin(ge*W*.35+ie);break;case"PAN":ee+=40*R*Math.sin(ge*W+ie);break;case"SMPAN":ee+=40*R*Math.sin(ge*W);break;case"SLPAN":ee+=40*R*Math.sin(ge*W*.35+ie);break;case"CIRCLE":$+=18*R*Math.sin(ge*W+ie),ee+=30*R*Math.cos(ge*W+ie);break;case"RANDOM CIRCLE":$+=18*R*Math.sin(ge*W*(.7+G.rnd)+G.rnd*9),ee+=30*R*Math.cos(ge*W*(.7+G.rnd)+G.rnd*9);break;case"RTILT":case"RPAN":{ge-G.rt>1/(gf[O.speed]*2*O.cueSpeed)&&(G.rt=ge,G.rTilt=(Math.random()-.5)*50*R,G.rPan=(Math.random()-.5)*80*R),G.sTilt=(G.sTilt||0)+(G.rTilt-(G.sTilt||0))*.05,G.sPan=(G.sPan||0)+(G.rPan-(G.sPan||0))*.05,O.move==="RTILT"?$+=G.sTilt:ee+=G.sPan;break}}return[Math.max(-120,Math.min(130,$))*Math.PI/180,ee*Math.PI/180]}let v=new F,T=new F(0,1,0),E=new F(0,-1,0),P=new Zt,g={heads:1,bars:1,washes:1,leds:1};function b(O){_+=O,j(_);for(let X in s){let le=s[X],R=le.st,W=le.fx.length;R.freeze||(y+=0);let ie=Math.min(1,O*6/Math.max(.1,R.fadeSpeed));le.fx.forEach($=>{m(R,$,W,_,u),$.col.lerp(u,ie);let ee=g[X],ge=ee>=1?1:W>1?$.i/(W-1)<ee-.001?1:0:ee>0?1:0,tt=S(R,$,W,_)*ge;if($.int+=(tt-$.int)*(R.state==="STROBE"||R.state==="FLASH"||R.state==="BRAND"||R.state==="RAND"?1:ie),X==="leds"){$.apply(u.copy($.col),(.25+.75*$.int)*ge);return}$.lensM.color.copy($.col).multiplyScalar(.25+$.int*1.5);let k,J;!R.freeze||$.lastAim===void 0?([k,J]=w(R,$,W,_),$.lastAim=[k,J]):[k,J]=$.lastAim;let K=new F(-$.pos.x,0,-$.pos.z).normalize(),ce=Math.cos(J),pe=Math.sin(J),Be=K.x*ce-K.z*pe,Pe=K.x*pe+K.z*ce;$.down?v.set(Be*Math.sin(k),-Math.cos(k),Pe*Math.sin(k)):v.set(Be*Math.sin(k),Math.cos(k),Pe*Math.sin(k)),v.normalize(),P.setFromUnitVectors($.down?E:T,v),$.beam.quaternion.copy(P),$.head&&$.head.quaternion.copy(P),$.lens&&($.lens.position.copy($.pos).addScaledVector(v,.21),$.lens.lookAt($.lens.position.clone().add(v)));let Ne=R.beam!=="NO BEAM"&&$.int>.01;$.beam.visible=Ne;let He=$.len;$.down&&v.y<-.05&&(He=Math.min($.len*1.6,$.pos.y/-v.y));let L=$.width*R.spread*(.5+.5*R.thick);if($.beam.scale.set(L*He/10,He,L*He/10),$.bm.uniforms.color.value.copy($.col),$.bm.uniforms.inten.value=$.int*(X==="washes"?.12:.3)*R.thick,$.bm.uniforms.gobo.value=R.beam==="GOBO"?1:0,(R.goboRot||R.beam==="GOBO")&&($.bm.uniforms.rot.value+=O*(R.goboRot?.6:.1)),$.hit){let st=$.pos.y/Math.max(.05,-v.y);$.hit.visible=$.int>.02&&v.y<-.15&&st<30,$.hit.position.set($.pos.x+v.x*st,.02,$.pos.z+v.z*st),$.hit.scale.setScalar(Math.min(3,L*st/10*1.1)),$.hit.material.color.copy($.col).multiplyScalar($.int*.8)}$.spot&&($.spot.color.copy($.col),$.spot.intensity=$.int*70,$.spot.target.position.copy($.pos).addScaledVector(v,10))})}let G=!0;for(let X in s)s[X].st.freeze||(G=!1);G||(y+=O)}let C="menu",I=-99,U=0,H=[{heads:{move:"CIRCLE",form:"WIDE",cmode:null,ccue:0,icue:0,speed:"MEDIUM"},bars:{icue:1,cmode:null},washes:{cmode:"SMOOTH"}},{heads:{move:"PAN",form:"CROSS",cmode:"SWITCH",icue:0,speed:"SLOW"},bars:{icue:12,cmode:"GRADIENT"},washes:{cmode:null}},{heads:{move:"TILT",form:"UD",cmode:"GRADIENT",icue:1,speed:"MEDIUM"},bars:{icue:3,cmode:"SECOND"},washes:{cmode:"SWITCH"}},{heads:{move:"RANDOM CIRCLE",form:null,cmode:"SECOND",icue:0,speed:"SLOW"},bars:{icue:8,cmode:null},washes:{cmode:"SMOOTH"}}],D={colA:"#ff1040",colB:"#9a30ff",rbA:!1,rbB:!1,state:"O",bright:1,beam:"BEAM",tilt:30,pan:0};function N(O,G){let X=s[O].st;X.auto&&(G.state&&G.state!==X.state&&(X.prevState=X.state,X.stateT=_),Object.assign(X,G))}function j(O){if(p.kind&&O>p.until&&(p.kind=null,I=-99),p.kind||O-I<(C==="question"?6:9))return;I=O,U=(U+1)%H.length;let G=H[U],X=C==="final"?{colA:"#ffd000",colB:"#ffffff"}:D;for(let le of["heads","bars","washes"])N(le,{...D,...X,...G[le],tilt:le==="bars"?20:30,bright:C==="question"?.75:1});C==="question"&&N("heads",{move:"SLTILT",speed:"SLOW",icue:0}),N("leds",{colA:"#ffffff",colB:"#ffffff",rbA:!1,rbB:!1,state:"O",icue:C==="menu"?12:0,cmode:null,bright:1,cueSpeed:.4})}function Z(O){if(O==="menu"||O==="idle"||O==="question"||O==="final"){C=O,I=-99,p.kind=null;return}if(O==="fall"){p.kind="fall",p.until=_+2.6;for(let G of["heads","washes","bars"])N(G,{colA:"#ff0000",colB:"#ff0000",rbA:!1,rbB:!1,cmode:null,ccue:0,icue:0,state:"STROBE",stateT:_,move:G==="heads"?"RTILT":null,speed:"FAST"});N("leds",{colA:"#ff2020",colB:"#ff2020",state:"STROBE",icue:0})}if(O==="win"){p.kind="win",p.until=_+4;for(let G of["heads","washes","bars"])N(G,{rbA:!1,rbB:!1,colA:"#ffd000",colB:"#ff1040",cmode:"SWITCH",ccue:1,icue:0,state:"FLASH",prevState:"O",stateT:_,move:G==="heads"?"CIRCLE":null,speed:"FAST",form:"WIDE"});N("leds",{rbA:!1,rbB:!1,colA:"#ffd000",colB:"#ffffff",ccue:1,state:"O"})}if(O==="intro"){p.kind="intro",p.until=_+600;for(let G of["heads","washes","bars"])N(G,{colA:"#ff1040",colB:"#b040ff",rbA:!1,rbB:!1,cmode:"SECOND",ccue:1,icue:G==="bars"?1:0,state:"O",bright:1,move:G==="heads"?"CIRCLE":null,form:"WIDE",speed:"FAST",cueSpeed:1.5});N("leds",{colA:"#ffffff",colB:"#e0a8ff",state:"O",icue:12,cueSpeed:1.5})}if(O==="tension"){p.kind="tension",p.until=_+600;for(let G of["heads","washes","bars"])N(G,{colA:"#ff0030",colB:"#6a00ff",rbA:!1,rbB:!1,cmode:"SMOOTH",ccue:0,icue:G==="bars"?6:0,state:"O",bright:.55,move:G==="heads"?"SLTILT":null,form:G==="heads"?"IN":null,speed:"SSLOW"});N("leds",{colA:"#ff2050",colB:"#ff2050",state:"O",icue:8,cueSpeed:.6})}if(O==="release"&&(p.kind=null,I=-99),O==="correct"){p.kind="correct",p.until=_+1.2;for(let G of["heads","bars"])N(G,{colA:"#22ff22",colB:"#ffffff",state:"FLASH",prevState:"O",stateT:_,ccue:0})}}function de(O){let G=(le,R,W="")=>`<button class="gl-b ${W}" data-a="${R}">${le}</button>`,X=Object.entries(s).map(([le,R])=>{let W=le!=="leds",ie=le!=="leds",$=le==="bars";return`<div class="gl-panel" data-g="${le}">
      <div class="gl-head"><b>${R.name}</b><span class="gl-logo">GLIGHTS</span><span class="gl-ver">AUM3D</span><button class="gl-b gl-auto" data-a="auto">AUTO</button></div>
      <div class="gl-sec">Colours and functions</div>
      <div class="gl-sw">${tv.map(ee=>`<button class="gl-c ${ee==="rainbow"?"rb":""}" style="${ee!=="rainbow"?"background:"+ee:""}" data-a="col:${ee}"></button>`).join("")}</div>
      <div class="gl-row g8">${G("A","sel:A")}${G("B","sel:B")}${G("ALL","sel:ALL")}${["SECOND","SWITCH","SMOOTH","GRADIENT","FLASH"].map(ee=>G(ee,"cmode:"+ee)).join("")}</div>
      <div class="gl-row g6">${[1,2,3,4,5].map(ee=>G("CUE"+ee,"ccue:"+ee)).join("")}${G("NONE","ccue:0")}</div>
      <div class="gl-ab"><div class="gl-a">A</div><div class="gl-bb">B</div></div>
      <div class="gl-sec">Light state</div>
      <div class="gl-row g10">${["O","X","FO","FX","RAND","FRAND","ORAND","BRAND","STROBE","FLASH"].map(ee=>G(ee,"state:"+ee)).join("")}</div>
      <div class="gl-row g6">${Array.from({length:12},(ee,ge)=>G("CUE"+(ge+1),"icue:"+(ge+1))).join("")}</div>
      <div class="gl-row g1">${G("CUE OFF","icue:0")}</div>
      <label class="gl-sl">BRIGHTNESS: <span data-v="bright">100%</span><input type="range" min="0" max="100" value="100" data-s="bright"></label>
      ${W?`<div class="gl-sec">Beam controls</div>
      <div class="gl-row g3">${le!=="bars"?G("GOBO","beam:GOBO"):""}${G("BEAM","beam:BEAM")}${G("NO BEAM","beam:NO BEAM")}</div>
      <label class="gl-sl">THICKNESS: <span data-v="thick">100%</span><input type="range" min="10" max="400" value="100" data-s="thick"></label>
      ${le!=="bars"?'<label class="gl-sl">SPREAD: <span data-v="spread">100%</span><input type="range" min="20" max="300" value="100" data-s="spread"></label>':""}`:""}
      ${ie?`<div class="gl-sec">Positions</div>
      <div class="gl-row g14">${G("+/-","tsign")}<span class="gl-l">Tilt</span>${[0,10,20,30,40,50,60,70,80,90,100,110,120].map(ee=>G(ee,"tilt:"+ee)).join("")}</div>
      ${$?"":`<div class="gl-row g14">${G("+/-","psign")}<span class="gl-l">Pan</span>${[0,10,20,30,40,50,60,70,80,90,100,110,120].map(ee=>G(ee,"pan:"+ee)).join("")}</div>`}
      <div class="gl-row g9">${($?["UD"]:["WIDE","IN","CROSS","UD"]).map(ee=>G(ee==="UD"?"U/D":ee,"form:"+ee)).join("")}${G("FREEZE","freeze")}${["SSLOW","SLOW","MEDIUM","FAST"].map(ee=>G(ee,"speed:"+ee)).join("")}</div>
      <div class="gl-row g8">${($?["TILT","RTILT","SMTILT","SLTILT"]:["TILT","RTILT","SMTILT","SLTILT","PAN","RPAN","SMPAN","SLPAN"]).map(ee=>G(ee,"move:"+ee)).join("")}</div>
      ${$?"":`<div class="gl-row g3">${G("CIRCLE","move:CIRCLE")}${G("RANDOM CIRCLE","move:RANDOM CIRCLE")}${G("GOBO ROTATE","gobor")}</div>`}
      <div class="gl-row g1">${G("STOP MOVEMENT","move:")}</div>`:""}
      <div class="gl-sec">Modifiers</div>
      <div class="gl-row g12"><span class="gl-l">Cue speed</span>${[.1,.25,.5,.75,1,1.25,1.5,2,2.5,3,5,10].map(ee=>G(String(ee).replace(/^0/,""),"cs:"+ee)).join("")}</div>
      <div class="gl-row g12"><span class="gl-l">Fade speed</span>${[.1,.25,.33,.5,.66,.75,1,1.25,1.5,2,3,5].map(ee=>G(String(ee).replace(/^0/,""),"fs:"+ee)).join("")}</div>
      <div class="gl-row g4"><span class="gl-l">Other</span>${G("LOOP CUES","loop")}${G("GROUP RANDOM","grand")}${G("OVERSHOOT","over")}${G("RESET","reset")}</div>
      </div>`}).join("");O.innerHTML=`<div class="gl-tabs">${Object.entries(s).map(([le,R],W)=>`<button data-tab="${le}" class="${W?"":"on"}">${R.name}</button>`).join("")}<button class="gl-close" data-close>\u2715</button></div><div class="gl-wrap">${X}</div>`,O.querySelector(".gl-panel").classList.add("on"),O.querySelectorAll("[data-tab]").forEach(le=>le.onclick=()=>{O.querySelectorAll("[data-tab]").forEach(R=>R.classList.toggle("on",R===le)),O.querySelectorAll(".gl-panel").forEach(R=>R.classList.toggle("on",R.dataset.g===le.dataset.tab))}),O.querySelectorAll(".gl-panel").forEach(le=>{let R=le.dataset.g;le.addEventListener("click",W=>{let ie=W.target.closest("[data-a]");ie&&(ne(R,ie.dataset.a),ae(le,R))}),le.querySelectorAll("[data-s]").forEach(W=>W.addEventListener("input",()=>{let ie=s[R].st;ie.auto=!1,ie[W.dataset.s]=W.value/100,ae(le,R)})),ae(le,R)}),["pointerdown","pointermove","wheel","touchstart"].forEach(le=>O.addEventListener(le,R=>R.stopPropagation(),{passive:!0})),setInterval(()=>O.querySelectorAll(".gl-panel.on").forEach(le=>ae(le,le.dataset.g)),1e3)}function ne(O,G){let X=s[O].st,[le,R]=G.split(/:(.*)/s);if(le==="auto"){X.auto=!X.auto,I=-99;return}switch(X.auto=!1,le){case"col":{let W=R==="rainbow";X.sel!=="B"&&(X.rbA=W,W||(X.colA=R)),X.sel!=="A"&&(X.rbB=W,W||(X.colB=R)),X.ccue=0;break}case"sel":X.sel=R;break;case"cmode":X.cmode=X.cmode===R?null:R;break;case"ccue":X.ccue=+R;break;case"state":X.prevState=X.state,X.state=R,X.stateT=_;break;case"icue":X.icue=+R,X.stateT=_;break;case"beam":X.beam=R;break;case"tilt":X.tilt=+R;break;case"pan":X.pan=+R;break;case"tsign":X.tiltSign*=-1;break;case"psign":X.panSign*=-1;break;case"form":X.form=X.form===R?null:R;break;case"freeze":X.freeze=!X.freeze;break;case"speed":X.speed=R;break;case"move":X.move=R||null;break;case"gobor":X.goboRot=!X.goboRot;break;case"cs":X.cueSpeed=+R;break;case"fs":X.fadeSpeed=+R;break;case"loop":X.loop=!X.loop;break;case"grand":X.grand=!X.grand;break;case"over":X.overshoot=!X.overshoot;break;case"reset":Object.assign(X,_f(O),{auto:!1});break}}function ae(O,G){let X=s[G].st,le=R=>{let[W,ie]=R.split(/:(.*)/s);switch(W){case"auto":return X.auto;case"sel":return X.sel===ie;case"cmode":return X.cmode===ie;case"ccue":return X.ccue===+ie;case"state":return X.state===ie;case"icue":return X.icue===+ie;case"beam":return X.beam===ie;case"tilt":return X.tilt===+ie;case"pan":return X.pan===+ie;case"tsign":return X.tiltSign<0;case"psign":return X.panSign<0;case"form":return X.form===ie;case"freeze":return X.freeze;case"speed":return X.speed===ie;case"move":return(X.move||"")===ie;case"gobor":return X.goboRot;case"cs":return X.cueSpeed===+ie;case"fs":return X.fadeSpeed===+ie;case"loop":return X.loop;case"grand":return X.grand;case"over":return X.overshoot;case"col":return!1}return!1};O.querySelectorAll("[data-a]").forEach(R=>R.classList.toggle("on",le(R.dataset.a))),O.querySelector(".gl-a").style.background=X.rbA?"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta)":X.colA,O.querySelector(".gl-bb").style.background=X.rbB?"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta)":X.colB;for(let R of["bright","thick","spread"]){let W=O.querySelector(`[data-s="${R}"]`);W&&(W.value=Math.round(X[R]*100),O.querySelector(`[data-v="${R}"]`).textContent=Math.round(X[R]*100)+"%")}}function oe(O,G){D.colA=O||"#ff1040",D.colB=G||"#9a30ff",I=-99}function De(O){for(let G of["heads","bars","washes","leds"])O[G]&&N(G,O[G]);O.hold&&(p.kind="cine",p.until=_+O.hold)}return{update:b,event:Z,buildGUI:de,groups:s,setPalette:oe,power:g,cine:De}}var rv=[15087942,2792847,16032353,4553629,16777215,8599788,16760331,448160,3835647,16471559,2236962,13178954,9485933,6185166,14540253],av=[2236987,1914199,4014171,2829634,4869737,1118481,6045747],ov=[15843965,14724201,13010498,9262372,16767916,16108455],lv=[2824720,1118481,7029795,13934615,9118976,10066329,3877408],cv={esp10:[16727972,3400191,16766474,8599788,3920239],esp1000:[16764928,15133951,13938487,12632256]},uv={esp10:[16727972,3400191,16766474,16777215,8599788,3920239],esp1000:[16764928,15133951,1118481,13938487,16777215],prime:[1118481,16777215,13938487,1908026,7016218]},hv={clap:{p:.9,dl:.35},cheer:{p:.85,dl:.3},ooh:{p:.9,dl:.15},laugh:{p:.85,dl:.4},wave:{p:.6,dl:.6}};function vf(i,{lowQuality:e=!1}={}){let t=(i.seats||[]).filter((C,I)=>!e||I%2===0),n=t.length,s=new Kr({flatShading:!0}),r={seat:new Mt(.46,.4,.42).translate(0,.2,-.02),thigh:new Mt(.34,.15,.44).translate(0,.47,.17),shin:new Mt(.3,.44,.14).translate(0,.24,.36),torso:new Tt(.2,.17,.58,7).translate(0,.29,0),head:new ss(.15,0),hair:new gi(.16,6,4,0,Math.PI*2,0,Math.PI*.55),arm:new Tt(.05,.045,.5,5).translate(0,-.25,0),hat:new Di(.1,.3,6).translate(0,.15,0)},a=C=>{let I=new Jn(C,s,n);return I.instanceMatrix.setUsage(_a),I.frustumCulled=!1,i.scene.add(I),I},o={seat:a(r.seat),thigh:a(r.thigh),shin:a(r.shin),torso:a(r.torso),head:a(r.head),hair:a(r.hair),armL:a(r.arm),armR:a(r.arm),hat:a(r.hat)};o.seat.instanceMatrix.setUsage($s),o.thigh.instanceMatrix.setUsage($s),o.shin.instanceMatrix.setUsage($s);let l=C=>C[Math.floor(Math.random()*C.length)],c=new Ge,u=t.map(([C,I,U],H)=>{let D=new ut,N=C-.25,j=Math.cos(I)*N,Z=-Math.sin(I)*N,de=Math.atan2(-j,-Z);return D.compose(new F(j,U-.42,Z),new Zt().setFromAxisAngle(new F(0,1,0),de),new F(1,.92+Math.random()*.16,1)),{base:D,ph:Math.random()*6.28,sp:.7+Math.random()*.6,dl:Math.random(),pr:Math.random(),w:0,kind:null,hairOn:Math.random()<.85,hatOn:!1}}),f=C=>{let I=uv[C],U=cv[C];u.forEach((H,D)=>{o.torso.setColorAt(D,c.setHex(I&&Math.random()<.6?l(I):l(rv))),o.armL.setColorAt(D,c),o.armR.setColorAt(D,c),o.thigh.setColorAt(D,c.setHex(l(av))),o.shin.setColorAt(D,c),H.skin||(H.skin=l(ov)),o.head.setColorAt(D,c.setHex(H.skin)),H.hc||(H.hc=l(lv)),o.hair.setColorAt(D,c.setHex(H.hc)),o.seat.setColorAt(D,c.setHex(731770)),H.hatOn=!!U&&Math.random()<.8,o.hat.setColorAt(D,c.setHex(U?l(U):16777215))}),Object.values(o).forEach(H=>{H.instanceColor&&(H.instanceColor.needsUpdate=!0)}),o.hat.visible=!!U},h=new ut;u.forEach((C,I)=>{o.seat.setMatrixAt(I,C.base),o.thigh.setMatrixAt(I,C.base),o.shin.setMatrixAt(I,C.base)}),f(null);let d=null,_=[],y=new ut,p=new ut,m=new Zt,S=new fn,w=new F,v=new F(1,1,1),T=new ut().makeScale(0,0,0),E=(C,I,U,H,D,N,j)=>(S.set(H,D,N),m.setFromEuler(S),w.set(C,I,U),j.compose(w,m,v)),P=0,g=0;function b(C){if(P+=C,g++,!(e&&g%2)){d&&P>d.t0+d.dur+1.2&&(d=null),!d&&_.length&&(d=_.shift());for(let I=0;I<n;I++){let U=u[I],H=0,D=null;if(d){let le=hv[d.kind],R=P-d.t0-U.dl*le.dl;U.pr<le.p*d.amt&&R>0&&(H=Math.min(1,R/.25)*Math.min(1,Math.max(0,(d.dur-R)/.5+1)),D=d.kind)}U.w+=(H-U.w)*Math.min(1,C*8),D&&(U.kind=D),U.w<.01&&(U.kind=null);let N=U.w,j=P*U.sp+U.ph,Z=Math.sin(j*1.3)*.01,de=0,ne=Math.sin(j*.6)*.04,ae=Math.sin(j*.9)*.05,oe=Math.sin(j*.37)*.3,De=-.35,O=.12,G=-.35,X=-.12;if(N>0){let le=U.kind;if(le==="clap"){let R=Math.sin(P*17+U.ph)*.5+.5;De+=-1*N,G+=-1*N,O+=(.35+.35*R)*N,X-=(.35+.35*R)*N,Z+=.02*R*N,oe*=1-N}else if(le==="cheer"||le==="wave"){let R=Math.sin(P*9+U.ph);De+=-2.45*N,G+=-2.45*N,O+=(-.35+.25*R)*N,X-=(-.35-.25*R)*N,Z+=Math.abs(Math.sin(P*7+U.ph))*.12*N,de-=.12*N,ae-=.2*N,oe*=1-N}else if(le==="ooh")De+=-2.35*N,G+=-2.35*N,O+=.38*N,X-=.38*N,de-=.18*N,ae-=.15*N,oe*=1-N;else if(le==="laugh"){let R=Math.sin(P*14+U.ph);de+=(.15+.1*R)*N,ae+=.25*R*N,De+=-.2*N,G+=-.2*N,O+=.3*N,X-=.3*N,Z+=.015*R*N}}E(0,.5+Z,0,de,0,ne,p),y.multiplyMatrices(U.base,p),o.torso.setMatrixAt(I,y),E(0,.74,0,ae,oe,0,p),h.multiplyMatrices(y,p),o.head.setMatrixAt(I,h),U.hairOn?(E(0,.77,-.01,ae,oe,0,p),h.multiplyMatrices(y,p),o.hair.setMatrixAt(I,h)):o.hair.setMatrixAt(I,T),U.hatOn&&(E(0,.86,0,ae,oe,-.15,p),h.multiplyMatrices(y,p),o.hat.setMatrixAt(I,h)),E(-.25,.52,0,De,0,O,p),h.multiplyMatrices(y,p),o.armL.setMatrixAt(I,h),E(.25,.52,0,G,0,X,p),h.multiplyMatrices(y,p),o.armR.setMatrixAt(I,h)}o.torso.instanceMatrix.needsUpdate=o.head.instanceMatrix.needsUpdate=o.hair.instanceMatrix.needsUpdate=o.hat.instanceMatrix.needsUpdate=o.armL.instanceMatrix.needsUpdate=o.armR.instanceMatrix.needsUpdate=!0}}return{count:n,update:b,react(C,I=2.5,U=1,H=!1){let D={kind:C,dur:I,amt:U,t0:P};if(H&&d){_.push(D);return}_.length=0,d=D,u.forEach(N=>N.dl=Math.random())},theme(C){f(C)},meshes:o}}var dv={abrirWav:"wav",laser:"wav",saltar:"wav"},cn=null,Gi=new Set,Wl=!1,yn=null,Gu=localStorage.getItem("aum3d_voice")!=="0",rr=+(localStorage.getItem("aum3d_mvol")||.8),fv=/[?&]fast=1/.test(location.search);function pv(i){let e=new Audio(`assets/snd/${i}.${dv[i]||"mp3"}`);return e.preload="auto",e}var Ze={play(i,{loop:e=!1,volume:t=1}={}){let n=pv(i);return n.loop=e,n.volume=Math.min(1,t),n.muted=Wl,Gi.add(n),n.addEventListener("ended",()=>Gi.delete(n)),n.play().catch(()=>{}),n},voice(i,e){return new Promise(t=>{if(fv){setTimeout(t,60);return}if(!Gu||Wl||!i){setTimeout(t,e||1500);return}yn&&yn.pause();let n=new Audio(`assets/voz/${i}.mp3`);yn=n;let s=!1,r=()=>{s||(s=!0,cn&&(cn.volume=rr),yn===n&&(yn=null),t())};cn&&(cn.volume=rr*.35),n.onended=r,n.onerror=()=>{setTimeout(r,e||1500)},n.play().catch(()=>setTimeout(r,e||1500)),setTimeout(r,3e4)})},stopVoice(){yn&&(yn.pause(),yn=null),cn&&(cn.volume=rr)},get voiceOn(){return Gu},setVoice(i){Gu=i,localStorage.setItem("aum3d_voice",i?"1":"0"),i||this.stopVoice()},setMusicVol(i){rr=i,localStorage.setItem("aum3d_mvol",i),cn&&(cn.volume=i)},get musicVol(){return rr},music(i,e=!1){return this.stopMusic(),cn=this.play(i,{loop:e,volume:rr}),cn},stopMusic(){cn&&(cn.pause(),Gi.delete(cn),cn=null)},stopAll(){Gi.forEach(i=>i.pause()),Gi.clear(),cn=null,yn&&(yn.pause(),yn=null)},pauseAll(){Gi.forEach(i=>i.pause()),yn&&yn.pause()},resumeAll(){Gi.forEach(i=>i.play().catch(()=>{}))},setMuted(i){Wl=i,Gi.forEach(e=>e.muted=i)},get muted(){return Wl}};window.__audio=Ze;var yf={intro1:["\xA1Buenas noches y bienvenidos a Atrapa un mill\xF3n! El concurso en el que el dinero ya es vuestro... hasta que deja de serlo.","Boa noite e bem-vindos ao Atrapa un mill\xF3n! O programa em que o dinheiro j\xE1 \xE9 de voc\xEAs... at\xE9 deixar de ser."],intro2:["Esta noche hay en la mesa un mill\xF3n de euros en efectivo: cuarenta fajos de veinticinco mil euros.","Esta noite h\xE1 na mesa um milh\xE3o de euros em dinheiro: quarenta ma\xE7os de vinte e cinco mil euros."],intro2d:["En el diario empezamos con doscientos mil euros: cuarenta fajos de cinco mil.","No di\xE1rio come\xE7amos com duzentos mil euros: quarenta ma\xE7os de cinco mil."],intro2x:["Hoy es una noche especial: \xA1dos millones de euros! Cuarenta fajos de cincuenta mil.","Hoje \xE9 uma noite especial: dois milh\xF5es de euros! Quarenta ma\xE7os de cinquenta mil."],introAniv:["\xA1Esta noche celebramos el aniversario del programa! Y todas las preguntas ser\xE1n sobre Atrapa un mill\xF3n.","Esta noite celebramos o anivers\xE1rio do programa! E todas as perguntas ser\xE3o sobre o Atrapa un mill\xF3n."],introTele:["Bienvenidos a nuestro especial de concursos de la tele. Esta noche, todas las preguntas son sobre concursos.","Bem-vindos ao nosso especial de programas de audit\xF3rio. Esta noite, todas as perguntas s\xE3o sobre concursos."],pair:["Vamos a conocer a la pareja de esta noche. \xA1Un aplauso para ellos!","Vamos conhecer a dupla desta noite. Uma salva de palmas para eles!"],comp:["Y en la grada, sus dos acompa\xF1antes, que van a sufrir con cada trampilla. \xA1Saludad!","E na plateia, os dois acompanhantes, que v\xE3o sofrer a cada al\xE7ap\xE3o. Acenem!"],rules:["Las reglas son sencillas: ten\xE9is sesenta segundos para repartir el dinero en las trampillas. Pero ojo: al menos una tiene que quedar vac\xEDa.","As regras s\xE3o simples: voc\xEAs t\xEAm sessenta segundos para distribuir o dinheiro nos al\xE7ap\xF5es. Mas aten\xE7\xE3o: pelo menos um tem que ficar vazio."],money:["Aqu\xED ten\xE9is el dinero. Tocadlo, olerlo... que todav\xEDa es vuestro.","Aqui est\xE1 o dinheiro. Toquem, cheirem... que ainda \xE9 de voc\xEAs."],topics:["Elegid tema para la siguiente pregunta.","Escolham o tema da pr\xF3xima pergunta."],p1:["Pregunta n\xFAmero uno.","Pergunta n\xFAmero um."],p2:["Pregunta n\xFAmero dos.","Pergunta n\xFAmero dois."],p3:["Pregunta n\xFAmero tres.","Pergunta n\xFAmero tr\xEAs."],p4:["Pregunta n\xFAmero cuatro.","Pergunta n\xFAmero quatro."],p5:["Pregunta n\xFAmero cinco.","Pergunta n\xFAmero cinco."],p6:["Pregunta n\xFAmero seis.","Pergunta n\xFAmero seis."],p7:["Pregunta n\xFAmero siete.","Pergunta n\xFAmero sete."],p8:["Pregunta n\xFAmero ocho.","Pergunta n\xFAmero oito."],round3:["Empieza una nueva ronda: a partir de ahora, solo tres opciones.","Come\xE7a uma nova rodada: a partir de agora, s\xF3 tr\xEAs op\xE7\xF5es."],final:["Llegamos a la pregunta final. Solo dos opciones, y todo el dinero en una sola trampilla.","Chegamos \xE0 pergunta final. S\xF3 duas op\xE7\xF5es, e todo o dinheiro num s\xF3 al\xE7ap\xE3o."],go:["\xA1Tiempo! Repartid el dinero.","Valendo! Distribuam o dinheiro."],t30:["Quedan treinta segundos.","Faltam trinta segundos."],t10:["\xA1Diez segundos!","Dez segundos!"],stop:["Hab\xE9is parado el reloj. \xBFEst\xE1is seguros? Bueno, ya no hay vuelta atr\xE1s.","Voc\xEAs pararam o rel\xF3gio. T\xEAm certeza? Bom, agora n\xE3o tem volta."],timeUp:["Se acab\xF3 el tiempo. \xA1Manos fuera de la mesa!","Acabou o tempo. M\xE3os fora da mesa!"],unplaced:["El dinero que se ha quedado fuera de las trampillas, se pierde.","O dinheiro que ficou fora dos al\xE7ap\xF5es est\xE1 perdido."],open:["Vamos a abrir las trampillas de las respuestas incorrectas.","Vamos abrir os al\xE7ap\xF5es das respostas erradas."],open1:["Abrimos esta trampilla...","Abrimos este al\xE7ap\xE3o..."],safeAll:["\xA1Lo hab\xE9is salvado todo! \xA1Ni un solo billete al foso!","Voc\xEAs salvaram tudo! Nenhuma nota caiu!"],safe:["\xA1Correcta! Ese dinero sigue siendo vuestro.","Correta! Esse dinheiro continua sendo de voc\xEAs."],lostSome:["Eso se va al foso. Pero segu\xEDs en el juego.","Isso foi pro buraco. Mas voc\xEAs continuam no jogo."],lostAll:["Lo siento much\xEDsimo. Todo el dinero se ha ido al foso.","Sinto muit\xEDssimo. Todo o dinheiro caiu no buraco."],win:["\xA1Enhorabuena! \xA1Ese dinero es vuestro! \xA1Os lo llev\xE1is a casa!","Parab\xE9ns! Esse dinheiro \xE9 de voc\xEAs! V\xE3o levar para casa!"],empty:["\xA1Cuidado! Una trampilla tiene que quedar vac\xEDa.","Cuidado! Um al\xE7ap\xE3o tem que ficar vazio."],allIn:["En la \xFAltima pregunta, todo el dinero va a una sola trampilla.","Na \xFAltima pergunta, todo o dinheiro vai para um s\xF3 al\xE7ap\xE3o."],star:["\xA1Pregunta estrella! Os cambio la pregunta, pero el reloj vuelve a empezar.","Pergunta estrela! Troco a pergunta, mas o rel\xF3gio recome\xE7a."],solo:["Pregunta seis: Solo uno. Uno de vosotros baja al foso y el otro responde solo.","Pergunta seis: Solo uno. Um de voc\xEAs desce ao buraco e o outro responde sozinho."],soloBack:["Desde el foso, vuestro compa\xF1ero recupera cinco mil euros. \xA1Algo es algo!","L\xE1 do buraco, o parceiro recupera cinco mil euros. Melhor que nada!"],finChoice:["Para la \xFAltima pregunta pod\xE9is elegir: triplicar, con cuatro opciones; duplicar, con tres; o la cl\xE1sica, con dos.","Para a \xFAltima pergunta voc\xEAs podem escolher: triplicar, com quatro op\xE7\xF5es; dobrar, com tr\xEAs; ou a cl\xE1ssica, com duas."],finTriple:["\xA1Valientes! Si acert\xE1is, el dinero se multiplica por tres. Ten\xE9is veinte segundos.","Corajosos! Se acertarem, o dinheiro \xE9 multiplicado por tr\xEAs. Vinte segundos."],finDouble:["\xA1Duplicar! Tres opciones y diez segundos.","Dobrar! Tr\xEAs op\xE7\xF5es e dez segundos."],finClassic:["La cl\xE1sica: dos opciones, todo a una.","A cl\xE1ssica: duas op\xE7\xF5es, tudo numa s\xF3."],outro:["Esto ha sido Atrapa un mill\xF3n. \xA1Gracias por acompa\xF1arnos y hasta la pr\xF3xima!","Isto foi o Atrapa un mill\xF3n. Obrigado pela companhia e at\xE9 a pr\xF3xima!"],train:["Esto es un entrenamiento: aqu\xED no se pierde ni un euro. \xA1Practicad!","Isto \xE9 um treino: aqui n\xE3o se perde nem um euro. Pratiquem!"],hist:["Bienvenidos a la historia de Atrapa un mill\xF3n. Paseaos por el plat\xF3 y descubrid sus r\xE9cords.","Bem-vindos \xE0 hist\xF3ria do Atrapa un mill\xF3n. Passeiem pelo est\xFAdio e descubram os recordes."],j1:["\xBFSab\xE9is cu\xE1nto pesa un mill\xF3n en billetes de cincuenta? Unos veinte kilos. Hoy ven\xEDs al gimnasio gratis.","Sabem quanto pesa um milh\xE3o em notas de cinquenta? Uns vinte quilos. Hoje a academia \xE9 de gra\xE7a."],j2:["Tranquilos, que el foso no muerde. Solo se come el dinero.","Calma, o buraco n\xE3o morde. S\xF3 come o dinheiro."],j3:["Mi abuela dec\xEDa: no pongas todos los huevos en la misma cesta. Aqu\xED decimos: ni todos los fajos en la misma trampilla.","Minha av\xF3 dizia: n\xE3o ponha todos os ovos na mesma cesta. Aqui dizemos: nem todos os ma\xE7os no mesmo al\xE7ap\xE3o."],j4:["Debajo de la mesa hay un se\xF1or que cuenta los billetes que caen. Est\xE1 muy en forma.","Embaixo da mesa tem um senhor que conta as notas que caem. Ele est\xE1 em \xF3tima forma."],j5:["Si os tiembla el pulso, no pasa nada. Los fajos no se rompen.","Se a m\xE3o tremer, n\xE3o tem problema. Os ma\xE7os n\xE3o quebram."],j6:["P\xFAblico, \xBFvosotros lo sab\xE9is? Ya, claro, desde casa todo es m\xE1s f\xE1cil.","Plateia, voc\xEAs sabem? Pois \xE9, de casa tudo \xE9 mais f\xE1cil."],j7:["\xBFC\xF3mo vais? Respirad. Respirad, que el dinero no se mueve solo.","Como est\xE3o? Respirem. Respirem, que o dinheiro n\xE3o se mexe sozinho."],j8:["Me encanta esta pareja. Se nota que se quieren... hasta que uno elige mal.","Adoro esta dupla. D\xE1 para ver que se amam... at\xE9 um escolher errado."],sure1:["\xBFSeguro que no quer\xE9is mover nada?","T\xEAm certeza que n\xE3o querem mexer em nada?"],sure2:["Pensadlo bien, que esto no se puede deshacer.","Pensem bem, porque isso n\xE3o tem volta."],sure3:["Interesante reparto... muy interesante.","Distribui\xE7\xE3o interessante... muito interessante."],correctIs:["Y la respuesta correcta es...","E a resposta correta \xE9..."]},Ma=[["Luc\xEDa","F","Andr\xE9s","M","Hola, soy Luc\xEDa, de Zaragoza. Soy panadera y hoy vengo a por todas.","Y yo soy Andr\xE9s, su marido. Soy cartero y vengo a frenarla un poco.","matrimonio","casal"],["Marta","F","Elena","F","Hola, soy Marta, de C\xE1diz, y soy enfermera.","Y yo Elena, su hermana. Ella sabe de todo y yo s\xE9 de lo dem\xE1s.","hermanas","irm\xE3s"],["Javier","M","Pablo","M","Buenas, soy Javier, de Albacete. Trabajo de electricista.","Y yo soy Pablo, su mejor amigo desde el colegio. Soy cocinero.","amigos","amigos"],["Carmen","F","Sergio","M","Hola a todos, soy Carmen, de Murcia, profesora de m\xFAsica.","Y yo Sergio, su hijo. Estudio historia, as\xED que las fechas son m\xEDas.","madre e hijo","m\xE3e e filho"],["Nuria","F","Ra\xFAl","M","Hola, soy Nuria, de Tarragona. Soy veterinaria.","Yo soy Ra\xFAl, su pareja. Conduzco un autob\xFAs y me s\xE9 todas las calles.","pareja","casal"],["Diego","M","Roc\xEDo","F","Hola, soy Diego, de Burgos. Soy carpintero.","Y yo Roc\xEDo, su prima. Soy peluquera y en mi sal\xF3n se habla de todo.","primos","primos"],["Silvia","F","Laura","F","\xA1Hola! Soy Silvia, de Pamplona. Soy fisioterapeuta.","Y yo soy Laura, su compa\xF1era de piso. Soy arquitecta y muy cabezota.","amigas","amigas"],["\xD3scar","M","Hugo","M","Buenas, soy \xD3scar, de C\xE1ceres. Soy mec\xE1nico.","Y yo Hugo, su hermano peque\xF1o. Estudio ingenier\xEDa y hago los c\xE1lculos.","hermanos","irm\xE3os"]],Wu=["Yo creo que es esta, la tengo bastante clara.","No lo tengo nada claro, vamos a repartir.","Pon m\xE1s ah\xED, f\xEDate de m\xED.","\xA1Ay, que me da algo!","Esa la he visto en un documental, seguro.","Madre m\xEDa, madre m\xEDa...","Quita de esa, que esa no es.","Vale, vale, dejamos esa vac\xEDa.","\xBFY si nos la jugamos?","Mejor ir a lo seguro.","Esto lo sab\xEDa mi abuelo de memoria.","\xA1No toques nada m\xE1s!"],Mf=["Eu acho que \xE9 esta, tenho quase certeza.","N\xE3o tenho certeza nenhuma, vamos dividir.","P\xF5e mais a\xED, confia em mim.","Ai, vou ter um tro\xE7o!","Vi isso num document\xE1rio, com certeza.","Minha nossa, minha nossa...","Tira dessa, que n\xE3o \xE9 essa.","Ok, ok, deixamos essa vazia.","E se a gente arriscar?","Melhor ir no seguro.","Isso meu av\xF4 sabia de cor.","N\xE3o mexe em mais nada!"],qu={yes:["\xA1S\xED! \xA1S\xED! \xA1Lo sab\xEDa!","Sim! Sim! Eu sabia!"],no:["No puede ser... \xA1con lo claro que lo ten\xEDa!","N\xE3o pode ser... eu tinha tanta certeza!"],wow:["\xA1Ni un billete! \xA1Qu\xE9 nervios!","Nenhuma nota! Que nervoso!"]},Sf=["\xA1Vamos, chicos, que pod\xE9is!","Vamos, gente, voc\xEAs conseguem!"];var ql={es:[["El formato","Atrapa un mill\xF3n es un concurso creado por Endemol, producido por Gestmusic (Endemol Shine Iberia) y emitido por Antena 3. Es la adaptaci\xF3n de The Million Pound Drop Live, de Channel 4 (Reino Unido). A diferencia del original brit\xE1nico, la versi\xF3n espa\xF1ola no se emit\xEDa en directo."],["Presentadores","Carlos Sobera (2011-2014). Manel Fuentes en la nueva etapa, estrenada el 11 de enero de 2023. Juanra Bonet present\xF3 varios programas desde febrero de 2024 por problemas de agenda de Fuentes."],["Estreno y \xE9xito","Se estren\xF3 el viernes 4 de febrero de 2011 en prime time. Por su \xE9xito, desde el 4 de abril de 2011 tambi\xE9n se emiti\xF3 de lunes a jueves por la tarde; los viernes lleg\xF3 a haber doble emisi\xF3n. La versi\xF3n semanal se cancel\xF3 el 6 de abril de 2012."],["El relevo","El diario sigui\xF3 emiti\xE9ndose despu\xE9s de \xA1Ahora caigo! hasta 2014. Fue sustituido por \xA1Boom!, con Juanra Bonet, el martes 9 de septiembre de 2014. El 19 de julio de 2021 se anunci\xF3 su regreso."],["Versi\xF3n semanal","Una pareja recibe 1.000.000 \u20AC en 40 fajos de 25.000 \u20AC (500 billetes de 50 \u20AC). 8 preguntas: 4 con cuatro opciones, 3 con tres y la final con dos. Antes de cada pregunta eligen entre 2 temas. Tienen 60 segundos para repartir el dinero, dejando al menos una trampilla vac\xEDa."],["Versi\xF3n diaria","200.000 \u20AC en 40 fajos de 5.000 \u20AC. Pase al Mill\xF3n (hasta noviembre de 2011). Pregunta estrella (desde noviembre de 2012). \xABSolo uno\xBB en la pregunta 6 (desde mayo de 2013). Desde septiembre de 2013, en la final se puede triplicar (4 opciones, 20 s), duplicar (3 opciones, 10 s) o jugar la cl\xE1sica."],["R\xE9cords","Mayor premio: 550.000 \u20AC (24/02/2024). Mayor p\xE9rdida: 1.900.000 \u20AC (Atrapa dos millones). Los hermanos Mar\xEDa y Pablo Ferrandis se llevaron el bote de 200.000 \u20AC del diario el 23/09/2013 sin dividir el dinero ni una vez."],["Premios","Premio Ondas 2011 y TP de Oro 2011 al mejor programa de entretenimiento."]],pt:[["O formato","Atrapa un mill\xF3n \xE9 um programa criado pela Endemol, produzido pela Gestmusic (Endemol Shine Iberia) e exibido pela Antena 3. \xC9 a adapta\xE7\xE3o de The Million Pound Drop Live, do Channel 4 (Reino Unido). Ao contr\xE1rio do original brit\xE2nico, a vers\xE3o espanhola n\xE3o era ao vivo."],["Apresentadores","Carlos Sobera (2011-2014). Manel Fuentes na nova fase, estreada em 11 de janeiro de 2023. Juanra Bonet apresentou v\xE1rios programas desde fevereiro de 2024."],["Estreia e sucesso","Estreou na sexta-feira, 4 de fevereiro de 2011, no hor\xE1rio nobre. Pelo sucesso, a partir de 4 de abril de 2011 passou a ser exibido tamb\xE9m \xE0 tarde. A vers\xE3o semanal foi cancelada em 6 de abril de 2012."],["A substitui\xE7\xE3o","O di\xE1rio continuou depois do \xA1Ahora caigo! at\xE9 2014, quando foi substitu\xEDdo pelo \xA1Boom!, em 9 de setembro de 2014. Em 19 de julho de 2021 foi anunciada a sua volta."],["Vers\xE3o semanal","Uma dupla recebe 1.000.000 \u20AC em 40 ma\xE7os de 25.000 \u20AC (500 notas de 50 \u20AC). 8 perguntas: 4 com quatro op\xE7\xF5es, 3 com tr\xEAs e a final com duas. Antes de cada pergunta escolhem entre 2 temas. T\xEAm 60 segundos para distribuir o dinheiro, deixando pelo menos um al\xE7ap\xE3o vazio."],["Vers\xE3o di\xE1ria","200.000 \u20AC em 40 ma\xE7os de 5.000 \u20AC. Pergunta estrela, \xABSolo uno\xBB na pergunta 6 e, na final, triplicar (4 op\xE7\xF5es, 20 s), dobrar (3 op\xE7\xF5es, 10 s) ou a cl\xE1ssica."],["Recordes","Maior pr\xEAmio: 550.000 \u20AC (24/02/2024). Maior perda: 1.900.000 \u20AC (Atrapa dos millones). Os irm\xE3os Mar\xEDa e Pablo Ferrandis levaram os 200.000 \u20AC do di\xE1rio em 23/09/2013 sem dividir o dinheiro nenhuma vez."],["Pr\xEAmios","Pr\xEAmio Ondas 2011 e TP de Oro 2011 de melhor programa de entretenimento."]]};var bf={pools:{general:[{id:"Q1_1q",r:"1-3",c:0,es:["\xBFCu\xE1l de estas pel\xEDculas de animaci\xF3n se estren\xF3 en 2010?",["Megamind","Shrek, felices para siempre","Kung Fu Panda","Hormigaz"]],pt:["Qual destas anima\xE7\xF5es foi lan\xE7ada em 2010?",["Megamente","Shrek para sempre","Kung Fu Panda","FormiguinhaZ"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q2",r:"1-3",c:0,es:["\xBFEn qu\xE9 pa\xEDs se disput\xF3 el Mundial de f\xFAtbol de 2018?",["Rusia","Inglaterra","Espa\xF1a","Catar"]],pt:["Em qual pa\xEDs foi disputada a Copa do Mundo de 2018?",["R\xFAssia","Inglaterra","Espanha","Catar"]],t:["Deportes","Esportes"]},{id:"Q1_2q",r:"1-3",c:1,es:["\xBFQu\xE9 rey de los cuatro palos de la baraja no tiene bigote?",["Picas","Corazones","Diamantes","Tr\xE9boles"]],pt:["Qual rei dentre os quatro naipes de cartas n\xE3o possui bigode?",["Espadas","Copas","Ouros","Paus"]],t:["Variado","Variado"]},{id:"Q1_3q",r:"1-3",c:2,es:["La proclamaci\xF3n de la rep\xFAblica brasile\xF1a ocurri\xF3 en el a\xF1o:",["1822","1888","1889","1891"]],pt:["A proclama\xE7\xE3o da rep\xFAblica brasileira ocorreu no ano de:",["1822","1888","1889","1891"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_2q2",r:"1-3",c:1,es:["\xBFEn qu\xE9 siglo comenz\xF3 la Revoluci\xF3n Industrial?",["Siglo XVII","Siglo XVIII","Siglo XVI","Siglo XIX"]],pt:["Em qual s\xE9culo se iniciou a Revolu\xE7\xE3o Industrial?",["S\xE9culo XVII","S\xE9culo XVIII","S\xE9culo XVI","S\xE9culo XIX"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q3",r:"1-3",c:0,es:["La iguana es un tipo de:",["Reptil","Anfibio","Pez","Mam\xEDfero"]],pt:["A iguana \xE9 um tipo de:",["R\xE9ptil","Anf\xEDbio","Peixe","Mam\xEDfero"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q2",r:"1-3",c:2,es:["\xBFQu\xE9 actor sustituy\xF3 a Charlie Sheen como protagonista de la serie Dos hombres y medio?",["Matthew Perry","Bruce Willis","Ashton Kutcher","Will Smith"]],pt:["Qual ator substituiu Charlie Sheen como protagonista da s\xE9rie Two and a Half Men?",["Matthew Perry","Bruce Willis","Ashton Kutcher","Will Smith"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q3",r:"1-3",c:1,es:["La cadena de hamburgueser\xEDas Bob's es de origen:",["Estadounidense","Brasile\xF1o","Ingl\xE9s","Canadiense"]],pt:["A rede de lanchonetes Bob's \xE9 de origem:",["Americana","Brasileira","Inglesa","Canadense"]],t:["Variado","Variado"]},{id:"Q1_1q4",r:"1-3",c:0,es:["\xBFCu\xE1l de estos personajes es m\xE1s antiguo?",["Mickey Mouse","Superman","Scooby-Doo","Harry Potter"]],pt:["Qual destes personagens \xE9 o mais antigo?",["Mickey Mouse","Super-Homem","Scooby-Doo","Harry Potter"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_4q",r:"1-3",c:3,es:["\xBFCu\xE1l de estos pa\xEDses no pertenece al MERCOSUR?",["Ecuador","Colombia","Per\xFA","Cuba"]],pt:["Qual destes pa\xEDses n\xE3o faz parte do MERCOSUL?",["Equador","Col\xF4mbia","Peru","Cuba"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q5",r:"1-3",c:0,es:['\xBFCu\xE1l de estos personajes no pertenece a la serie "Los Simpson"?',["Peter Griffin","Julius Hibbert","Ned Flanders","Apu Nahasapeemapetilon"]],pt:['Qual destes personagens n\xE3o faz parte da s\xE9rie "Os Simpsons"?',["Peter Griffin","Julius Hibbert","Ned Flanders","Apu Nahasapeemapetilon"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q6",r:"1-3",c:0,es:["\xBFCu\xE1l de estas famosas construcciones es la m\xE1s antigua?",["Torre de Pisa","Torre Eiffel","Taj Mahal","Catedral de San Pablo"]],pt:["Qual destas constru\xE7\xF5es famosas \xE9 a mais antiga?",["Torre de Pisa","Torre Eiffel","Taj Mahal","Catedral de S\xE3o Paulo"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_3q3",r:"1-3",c:2,es:["\xBFA qu\xE9 filo pertenecen las lombrices?",["Celent\xE9reos","Moluscos","An\xE9lidos","Platelmintos"]],pt:["A que filo pertencem as minhocas?",["Celenterados","Moluscos","Anel\xEDdeos","Platelmintos"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q4",r:"1-3",c:2,es:["\xBFQu\xE9 deporte invent\xF3 James Naismith en 1891?",["Voleibol","F\xFAtbol","Baloncesto","Tenis"]],pt:["Qual esporte James Naismith inventou em 1891?",["V\xF4lei","Futebol","Basquete","T\xEAnis"]],t:["Deportes","Esportes"]},{id:"Q1_2q4",r:"1-3",c:1,es:["\xBFEn qu\xE9 a\xF1o gan\xF3 la selecci\xF3n brasile\xF1a de voleibol su primer oro ol\xEDmpico?",["1984","1992","1996","2004"]],pt:["Em que ano a sele\xE7\xE3o brasileira de v\xF4lei conquistou seu primeiro ouro ol\xEDmpico?",["1984","1992","1996","2004"]],t:["Deportes","Esportes"]},{id:"Q1_3q5",r:"1-3",c:2,es:["En 2011, \xBFhasta qu\xE9 edad o m\xE1s llegar\xEDa a vivir una de cada dos mil millones de personas?",["95","100","115","130"]],pt:["Em 2011, uma em cada dois bilh\xF5es de pessoas chegaria a viver at\xE9 que idade ou mais?",["95","100","115","130"]],t:["Variado","Variado"]},{id:"Q1_1q7",r:"1-3",c:0,es:["\xBFCu\xE1ntas veces fue campe\xF3n de la NBA Michael Jordan?",["6","5","4","3"]],pt:["Quantas vezes Michael Jordan foi campe\xE3o da NBA?",["6","5","4","3"]],t:["Deportes","Esportes"]},{id:"Q1_1q8",r:"1-3",c:0,es:["\xBFQu\xE9 pa\xEDs recibi\xF3 m\xE1s turistas en 2010?",["Francia","Brasil","Espa\xF1a","Estados Unidos"]],pt:["Qual pa\xEDs recebeu mais turistas em 2010?",["Fran\xE7a","Brasil","Espanha","Estados Unidos"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q2",r:"1-3",c:3,es:["\xBFC\xF3mo se llama el 44.\xBA presidente de los Estados Unidos?",["Jimmy Carter","Ronald Reagan","John Kennedy","Barack Obama"]],pt:["Qual \xE9 o nome do 44\xBA presidente dos Estados Unidos?",["Jimmy Carter","Ronald Reagan","John Kennedy","Barack Obama"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_4q3",r:"1-3",c:3,es:["\xBFEn qu\xE9 continente est\xE1n 9 de los 10 edificios m\xE1s altos del mundo?",["Am\xE9rica del Sur","Europa","Am\xE9rica del Norte","Asia"]],pt:["Em que continente est\xE3o 9 dos 10 pr\xE9dios mais altos do mundo?",["Am\xE9rica do Sul","Europa","Am\xE9rica do Norte","\xC1sia"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_2q5",r:"1-3",c:1,es:["\xBFCu\xE1l de estas razas es de perro?",["Persa","Pastor de Shetland","Scottish Fold","Siam\xE9s"]],pt:["Qual destas ra\xE7as \xE9 de cachorro?",["Persa","Pastor de Shetland","Scottish Fold","Siam\xEAs"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q6",r:"1-3",c:2,es:["Seg\xFAn la ley brasile\xF1a, \xBFcu\xE1nto tiempo como m\xE1ximo puede estar presa una persona?",["10 a\xF1os","25 a\xF1os","30 a\xF1os","40 a\xF1os"]],pt:["Pela lei brasileira, qual o tempo m\xE1ximo que uma pessoa pode ficar presa?",["10 anos","25 anos","30 anos","40 anos"]],t:["Variado","Variado"]},{id:"Q1_1q9",r:"1-3",c:0,es:["\xBFCu\xE1l fue la primera Spice Girl en sacar un single en solitario?",["Mel B","Mel C","Geri Halliwell","Emma Bunton"]],pt:["Qual foi a primeira Spice Girl a lan\xE7ar um single solo?",["Mel B","Mel C","Geri Halliwell","Emma Bunton"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_1q10",r:"1-3",c:0,es:["\xBFDe cu\xE1l de estas cantantes son las canciones Fallin' y Empire State of Mind?",["Alicia Keys","Mariah Carey","Lady Gaga","Fergie"]],pt:["De qual destas cantoras s\xE3o as m\xFAsicas Fallin' e Empire State of Mind?",["Alicia Keys","Mariah Carey","Lady Gaga","Fergie"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_3q7",r:"1-3",c:2,es:["\xBFEn qu\xE9 d\xE9cada se cre\xF3 la NASA (Administraci\xF3n Nacional de Aeron\xE1utica y del Espacio)?",["30","40","50","60"]],pt:["Em que d\xE9cada foi criada a NASA?",["30","40","50","60"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_2q6",r:"1-3",c:1,es:["\xBFCu\xE1l de estos n\xFAmeros no es primo?",["173","573","701","727"]],pt:["Qual destes n\xFAmeros n\xE3o \xE9 primo?",["173","573","701","727"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_1q11",r:"1-3",c:0,es:["El Monumento a las Banderas es obra de:",["Victor Brecheret","C\xE2ndido Caetano de Almeida Reis","Jackson Ribeiro","Franz Weissmann"]],pt:["O Monumento \xE0s Bandeiras \xE9 obra de:",["Victor Brecheret","C\xE2ndido Caetano de Almeida Reis","Jackson Ribeiro","Franz Weissmann"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_2q7",r:"1-3",c:1,es:["\xBFEn qu\xE9 d\xE9cada se cre\xF3 el disco compacto (CD)?",["60","70","80","90"]],pt:["Em que d\xE9cada foi criado o CD (disco compacto)?",["60","70","80","90"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_1q12",r:"1-3",c:0,es:["\xBFDe qu\xE9 ciudad fueron c\xF3nsules Craso, Pompeyo y Julio C\xE9sar?",["Roma","Viena","Mil\xE1n","Esparta"]],pt:["Crasso, Pompeu e J\xFAlio C\xE9sar foram c\xF4nsules de qual cidade?",["Roma","Viena","Mil\xE3o","Esparta"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q13",r:"1-3",c:0,es:["\xBFEl nacimiento de qu\xE9 web cuenta la pel\xEDcula La red social, de 2010?",["Facebook","Orkut","Twitter","MySpace"]],pt:["O filme A Rede Social, de 2010, conta o nascimento de qual site?",["Facebook","Orkut","Twitter","MySpace"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q8",r:"1-3",c:1,es:['\xBFDe qu\xE9 color es el pomp\xF3n del gorro de Wally en "\xBFD\xF3nde est\xE1 Wally?"?',["Blanco","Rojo","Amarillo","Marr\xF3n"]],pt:['De que cor \xE9 o pompom do gorro do Wally em "Onde est\xE1 Wally?"?',["Branco","Vermelho","Amarelo","Marrom"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_1q14",r:"1-3",c:0,es:["\xBFQu\xE9 significa la J del nombre de la autora J. K. Rowling?",["Joanne","Jane","Julie","Justine"]],pt:["O que significa o J do nome da autora J. K. Rowling?",["Joanne","Jane","Julie","Justine"]],t:["Variado","Variado"]},{id:"Q1_3q8",r:"1-3",c:2,es:["\xBFC\xF3mo se llama la primera pel\xEDcula de Harry Potter?",["Las Reliquias de la Muerte","La C\xE1mara Secreta","La Piedra Filosofal","La Orden del F\xE9nix"]],pt:["Qual \xE9 o nome do primeiro filme de Harry Potter?",["As Rel\xEDquias da Morte","A C\xE2mara Secreta","A Pedra Filosofal","A Ordem da F\xEAnix"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q9",r:"1-3",c:1,es:["\xBFCu\xE1l de estos nombres no es de los ping\xFCinos de Madagascar?",["Cabo","Maurice","Kowalski","Rico"]],pt:["Qual destes nomes n\xE3o \xE9 dos pinguins de Madagascar?",["Capit\xE3o","Maurice","Kowalski","Rico"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q15",r:"1-3",c:0,es:["\xBFEn qu\xE9 pa\xEDs naci\xF3 Pablo Picasso?",["Espa\xF1a","Italia","Francia","Suiza"]],pt:["Em que pa\xEDs nasceu Pablo Picasso?",["Espanha","It\xE1lia","Fran\xE7a","Su\xED\xE7a"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_3q9",r:"1-3",c:2,es:["\xBFEn qu\xE9 pa\xEDs est\xE1 Tombuct\xFA?",["Laos","Jordania","Mal\xED","Ruman\xEDa"]],pt:["Em que pa\xEDs fica Timbuktu?",["Laos","Jord\xE2nia","Mali","Rom\xEAnia"]],t:["Deportes","Esportes"]},{id:"Q1_3q10",r:"1-3",c:2,es:["\xBFQu\xE9 porcentaje del planeta Tierra est\xE1 cubierto de agua?",["25%","56%","71%","92%"]],pt:["Qual a porcentagem do planeta Terra coberta por \xE1gua?",["25%","56%","71%","92%"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4Q4",r:"1-3",c:3,es:["\xBFQu\xE9 n\xFAmero tiene la casa de Sherlock Holmes en Baker Street?",["21B","22B","211B","221B"]],pt:["Qual \xE9 o n\xFAmero da casa de Sherlock Holmes na Baker Street?",["21B","22B","211B","221B"]],t:["Variado","Variado"]},{id:"Q1_2q10",r:"1-3",c:1,es:["Sabamiki, Ishi Seki y Moyogi son t\xE9rminos relacionados con:",["Artes marciales","\xC1rboles bons\xE1i","Sushi","Origami"]],pt:["Sabamiki, Ishi Seki e Moyogi s\xE3o termos relacionados a:",["Artes marciais","\xC1rvores bonsai","Sushi","Origami"]],t:["Variado","Variado"]},{id:"Q1_4q5",r:"1-3",c:3,es:["La serie de televisi\xF3n El Chavo del 8 es originaria de:",["Colombia","Brasil","Argentina","M\xE9xico"]],pt:["A s\xE9rie de TV Chaves \xE9 origin\xE1ria do(a):",["Col\xF4mbia","Brasil","Argentina","M\xE9xico"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q11",r:"1-3",c:1,es:["\xBFCu\xE1l de estos personajes no sale en los dibujos de Scooby-Doo?",["Daphne","Barney","Velma","Fred"]],pt:["Qual destes personagens n\xE3o aparece no desenho Scooby-Doo?",["Daphne","Barney","Velma","Fred"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_2q12",r:"1-3",c:1,es:["\xBFCu\xE1l de estas personas no tiene un aeropuerto con su nombre?",["John Lennon","Diego Maradona","John F. Kennedy","Charles de Gaulle"]],pt:["Qual destas pessoas n\xE3o tem um aeroporto com seu nome?",["John Lennon","Diego Maradona","John F. Kennedy","Charles de Gaulle"]],t:["Variado","Variado"]},{id:"Q1_1q16",r:"1-3",c:0,es:["\xBFCu\xE1l es el nombre del Capit\xE1n Nascimento, personaje de la pel\xEDcula Tropa de \xE9lite?",["Roberto","Marcelo","Wagner","Ricardo"]],pt:["Qual \xE9 o nome do Capit\xE3o Nascimento, personagem do filme Tropa de Elite?",["Roberto","Marcelo","Wagner","Ricardo"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_2q13",r:"1-3",c:1,es:["\xBFCu\xE1ntos goles marc\xF3 Ronaldo Naz\xE1rio en los Mundiales?",["14","15","16","17"]],pt:["Quantos gols Ronaldo Naz\xE1rio marcou em Copas do Mundo?",["14","15","16","17"]],t:["Deportes","Esportes"]},{id:"Q1_1q17",r:"1-3",c:0,es:["\xBFCu\xE1l es el nombre de pila de la cantante Pitty?",["Priscilla","Paula","Fernanda","Patr\xEDcia"]],pt:["Qual \xE9 o primeiro nome da cantora Pitty?",["Priscilla","Paula","Fernanda","Patr\xEDcia"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_2q14",r:"1-3",c:1,es:["\xBFContra qu\xE9 equipo marc\xF3 Pel\xE9 su gol n\xFAmero mil?",["Corinthians","Vasco da Gama","Botafogo","Real Madrid"]],pt:["Contra qual time Pel\xE9 marcou seu mil\xE9simo gol?",["Corinthians","Vasco da Gama","Botafogo","Real Madrid"]],t:["Deportes","Esportes"]},{id:"Q1_2q15",r:"1-3",c:1,es:["\xBFCon cu\xE1l de estos pa\xEDses no tiene frontera Brasil?",["Guayana Francesa","Ecuador","Surinam","Venezuela"]],pt:["Com qual destes pa\xEDses o Brasil n\xE3o faz fronteira?",["Guiana Francesa","Equador","Suriname","Venezuela"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_2q16",r:"1-3",c:1,es:["\xBFEn qu\xE9 pa\xEDs est\xE1 el Taj Mahal?",["India","Marruecos","Egipto","Camer\xFAn"]],pt:["Em que pa\xEDs fica o Taj Mahal?",["\xCDndia","Marrocos","Egito","Camar\xF5es"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_2q17",r:"1-3",c:1,es:["\xBFCon cu\xE1l de estos famosos nunca tuvo una relaci\xF3n la modelo Gisele B\xFCndchen?",["Tom Brady","Ronaldo Naz\xE1rio","Kelly Slater","Leonardo DiCaprio"]],pt:["Com qual destes famosos a modelo Gisele B\xFCndchen nunca teve um relacionamento?",["Tom Brady","Ronaldo Naz\xE1rio","Kelly Slater","Leonardo DiCaprio"]],t:["Deportes","Esportes"]},{id:"Q1_2q18",r:"1-3",c:1,es:["\xBFC\xF3mo se llama la ciudad conocida como la Ciudad de la Luz?",["Londres","Par\xEDs","S\xE3o Paulo","Tokio"]],pt:["Qual cidade \xE9 conhecida como a Cidade Luz?",["Londres","Paris","S\xE3o Paulo","T\xF3quio"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q6",r:"1-3",c:3,es:["El futbolista Neymar naci\xF3 en:",["S\xE3o Paulo","Florian\xF3polis","Santos","Mogi das Cruzes"]],pt:["O jogador Neymar nasceu em:",["S\xE3o Paulo","Florian\xF3polis","Santos","Mogi das Cruzes"]],t:["Deportes","Esportes"]},{id:"Q1_2q19",r:"1-3",c:1,es:["\xBFCu\xE1ntos meses del a\xF1o tienen 31 d\xEDas?",["6","7","8","9"]],pt:["Quantos meses do ano t\xEAm 31 dias?",["6","7","8","9"]],t:["Variado","Variado"]},{id:"Q1_1q18",r:"1-3",c:0,es:["\xBFQu\xE9 lleva tatuado Popeye en el brazo?",["Un ancla","El nombre Olivia","Una calavera","Una lata de espinacas"]],pt:["O que o Popeye tem tatuado no bra\xE7o?",["Uma \xE2ncora","O nome Ol\xEDvia","Uma caveira","Uma lata de espinafre"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_2q20",r:"1-3",c:1,es:["\xBFCu\xE1l es la quinta letra del alfabeto griego?",["Delta","\xC9psilon","Sigma","Beta"]],pt:["Qual \xE9 a quinta letra do alfabeto grego?",["Delta","\xC9psilon","Sigma","Beta"]],t:["Variado","Variado"]},{id:"Q1_4Q7",r:"1-3",c:3,es:["\xBFQu\xE9 letra est\xE1 entre la Z y la C en el teclado de un ordenador?",["M","A","S","X"]],pt:["Que letra fica entre o Z e o C no teclado do computador?",["M","A","S","X"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_4q8",r:"1-3",c:3,es:["\xBFDe qu\xE9 color es la letra L del logo de Google?",["Azul","Amarillo","Rojo","Verde"]],pt:["De que cor \xE9 a letra L do logotipo do Google?",["Azul","Amarelo","Vermelho","Verde"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_2q21",r:"1-3",c:1,es:["\xBFDe qu\xE9 pa\xEDs es originario el krav mag\xE1?",["Jap\xF3n","Israel","Tailandia","Grecia"]],pt:["De qual pa\xEDs \xE9 origin\xE1rio o krav maga?",["Jap\xE3o","Israel","Tail\xE2ndia","Gr\xE9cia"]],t:["Deportes","Esportes"]},{id:"Q1_3q11",r:"1-3",c:2,es:["\xBFQui\xE9n gan\xF3 la primera edici\xF3n del reality American Idol?",["Jordin Sparks","Carrie Underwood","Kelly Clarkson","Jennifer Hudson"]],pt:["Quem venceu a primeira edi\xE7\xE3o do reality American Idol?",["Jordin Sparks","Carrie Underwood","Kelly Clarkson","Jennifer Hudson"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_1q19",r:"1-3",c:0,es:["\xBFC\xF3mo se llama el hijo de Gomez y Morticia, personajes de La familia Addams?",["Pugsley","Largo","Cosa","Chico"]],pt:["Qual \xE9 o nome do filho de Gomez e Mort\xEDcia, de A Fam\xEDlia Addams?",["Feioso","Trope\xE7o","M\xE3ozinha","Primo Itt"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_4q9",r:"1-3",c:3,es:["\xBFCu\xE1ntos estados forman la regi\xF3n Sudeste de Brasil?",["6","5","3","4"]],pt:["Quantos estados formam a regi\xE3o Sudeste do Brasil?",["6","5","3","4"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q10",r:"1-3",c:3,es:['\xBFC\xF3mo se llama el personaje "despistado" de la pel\xEDcula Buscando a Nemo?',["Darla","Doty","Boleta","Dory"]],pt:['Qual \xE9 o nome da personagem "esquecida" do filme Procurando Nemo?',["Darla","Doty","Boleta","Dory"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_3Q12",r:"1-3",c:2,es:["La creaci\xF3n del estado de Tocantins y el estallido de la Guerra de las Malvinas ocurrieron en la d\xE9cada de:",["60","70","80","90"]],pt:["A cria\xE7\xE3o do estado do Tocantins e a eclos\xE3o da Guerra das Malvinas ocorreram na d\xE9cada de:",["60","70","80","90"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_1q20",r:"1-3",c:0,es:["\xBFCu\xE1l es la lengua oficial de Angola?",["Portugu\xE9s","Franc\xE9s","Ingl\xE9s","Suajili"]],pt:["Qual \xE9 a l\xEDngua oficial de Angola?",["Portugu\xEAs","Franc\xEAs","Ingl\xEAs","Sua\xEDli"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_4q11",r:"1-3",c:3,es:["\xBFC\xF3mo se llamaba el cantante de los Mamonas Assassinas?",["Samuel","J\xFAlio","Bento","Dinho"]],pt:["Qual era o nome do vocalista dos Mamonas Assassinas?",["Samuel","J\xFAlio","Bento","Dinho"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_4q12",r:"1-3",c:3,es:["El \xD3scar a la mejor pel\xEDcula de 2009 fue para:",["Avatar","Mi nombre es Harvey Milk","El curioso caso de Benjamin Button","Slumdog Millionaire"]],pt:["O Oscar de melhor filme de 2009 ficou com:",["Avatar","Milk","O Curioso Caso de Benjamin Button","Quem Quer Ser um Milion\xE1rio?"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_1q21",r:"1-3",c:0,es:["\xBFQu\xE9 cargo ten\xEDa Dilma Rousseff antes de ser presidenta de Brasil?",["Ministra jefa de la Casa Civil","Ministra de Educaci\xF3n","Ministra de Ciencia y Tecnolog\xEDa","Ministra de Minas y Energ\xEDa"]],pt:["Qual cargo Dilma Rousseff ocupava antes de ser presidente do Brasil?",["Ministra-chefe da Casa Civil","Ministra da Educa\xE7\xE3o","Ministra da Ci\xEAncia e Tecnologia","Ministra de Minas e Energia"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_3q13",r:"1-3",c:2,es:["\xBFCu\xE1l de estos pa\xEDses no pertenece a la OTAN?",["Albania","Estados Unidos","Cuba","Turqu\xEDa"]],pt:["Qual destes pa\xEDses n\xE3o faz parte da OTAN?",["Alb\xE2nia","Estados Unidos","Cuba","Turquia"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_3q14",r:"1-3",c:2,es:["\xBFC\xF3mo se llama el cangrejo amigo de Ariel en La sirenita?",["Scuttle","Flounder","Sebasti\xE1n","Trit\xF3n"]],pt:["Qual \xE9 o nome do caranguejo amigo de Ariel em A Pequena Sereia?",["Sabid\xE3o","Linguado","Sebasti\xE3o","Trit\xE3o"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q1_3q15",r:"1-3",c:2,es:["\xBFC\xF3mo se llama la abuela del Pato Donald?",["Matilda","Linda","Donalda","Donilda"]],pt:["Qual \xE9 o nome da av\xF3 do Pato Donald?",["Matilda","Linda","Donalda","Donilda"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_1q22",r:"1-3",c:0,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 el billete de cien reales?",["1994","1996","1997","1999"]],pt:["Em que ano foi lan\xE7ada a nota de cem reais?",["1994","1996","1997","1999"]],t:["Variado","Variado"]},{id:"Q1_3Q16",r:"1-3",c:2,es:["\xBFCu\xE1l es la sigla del estado de Roraima?",["RA","RO","RR","RM"]],pt:["Qual \xE9 a sigla do estado de Roraima?",["RA","RO","RR","RM"]],t:["Geograf\xEDa","Geografia"]},{id:"Q1_3q17",r:"1-3",c:2,es:["\xBFEn qu\xE9 billete del real aparece el guacamayo?",["2 reales","5 reales","10 reales","50 reales"]],pt:["Em qual nota do real aparece a arara?",["2 reais","5 reais","10 reais","50 reais"]],t:["Variado","Variado"]},{id:"Q1_4q13",r:"1-3",c:3,es:["El andaluz y el mangalarga son razas de:",["Cerdo","Perro","Cabra","Caballo"]],pt:["Andaluz e mangalarga s\xE3o ra\xE7as de:",["Porco","Cachorro","Cabra","Cavalo"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_3q18",r:"1-3",c:2,es:["\xBFEn qu\xE9 a\xF1o naci\xF3 el cantante canadiense Justin Bieber?",["1996","1995","1994","1993"]],pt:["Em que ano nasceu o cantor canadense Justin Bieber?",["1996","1995","1994","1993"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q1_3q19",r:"1-3",c:2,es:["\xBFDe qu\xE9 superh\xE9roe es Hal Jordan el nombre verdadero?",["Lobezno","Flecha Verde","Linterna Verde","Hulk"]],pt:["Hal Jordan \xE9 o nome verdadeiro de qual super-her\xF3i?",["Wolverine","Arqueiro Verde","Lanterna Verde","Hulk"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_3q20",r:"1-3",c:2,es:["\xBFEn qu\xE9 mes se celebra la fiesta de San Juan?",["Agosto","Mayo","Junio","Julio"]],pt:["Em que m\xEAs se comemora a festa de S\xE3o Jo\xE3o?",["Agosto","Maio","Junho","Julho"]],t:["Variado","Variado"]},{id:"Q1_2q22",r:"1-3",c:1,es:["\xBFDel incendio de qu\xE9 ciudad fue responsable el emperador Ner\xF3n?",["Mil\xE1n","Roma","Venecia","Viena"]],pt:["O imperador Nero foi respons\xE1vel pelo inc\xEAndio de qual cidade?",["Mil\xE3o","Roma","Veneza","Viena"]],t:["Historia","Hist\xF3ria"]},{id:"Q1_3q21",r:"1-3",c:2,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 la primera versi\xF3n del iPhone?",["2005","2006","2007","2008"]],pt:["Em que ano foi lan\xE7ada a primeira vers\xE3o do iPhone?",["2005","2006","2007","2008"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q1_1q23",r:"1-3",c:0,es:["\xBFCu\xE1ntos a\xF1os tiene Ben en los dibujos animados Ben 10?",["10","12","14","17"]],pt:["Quantos anos Ben tem no desenho Ben 10?",["10","12","14","17"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q1_3q22",r:"1-3",c:2,es:["\xBFCu\xE1ntos n\xFAmeros primos hay del 1 al 10?",["2","3","4","5"]],pt:["Quantos n\xFAmeros primos existem de 1 a 10?",["2","3","4","5"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q",r:"4-6",c:1,es:["\xBFDe qu\xE9 saga son personajes C-3PO y R2-D2?",["Star Trek","Star Wars","Metroid"]],pt:["C-3PO e R2-D2 s\xE3o personagens de qual saga?",["Star Trek","Star Wars","Metroid"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q",r:"4-6",c:0,es:["\xBFEn qu\xE9 pa\xEDs fue ejecutado el Che Guevara?",["Bolivia","Argentina","Chile"]],pt:["Em que pa\xEDs Che Guevara foi executado?",["Bol\xEDvia","Argentina","Chile"]],t:["Historia","Hist\xF3ria"]},{id:"Q4_2q2",r:"4-6",c:1,es:["\xBFCada cu\xE1nto tiempo se puede ver el cometa Halley?",["76 meses","76 a\xF1os","26 a\xF1os"]],pt:["De quanto em quanto tempo o cometa Halley pode ser visto?",["76 meses","76 anos","26 anos"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q3",r:"4-6",c:1,es:["\xBFCu\xE1l de estas razas de perro es originaria de Alemania?",["Pug","Caniche","Malt\xE9s"]],pt:["Qual destas ra\xE7as de cachorro \xE9 origin\xE1ria da Alemanha?",["Pug","Poodle","Malt\xEAs"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1Q2",r:"4-6",c:0,es:["\xBFQui\xE9n fue el rival de Barack Obama en las elecciones presidenciales de EE. UU. de 2008?",["John McCain","Sarah Palin","Al Gore"]],pt:["Quem foi o advers\xE1rio de Barack Obama nas elei\xE7\xF5es presidenciais dos EUA de 2008?",["John McCain","Sarah Palin","Al Gore"]],t:["Historia","Hist\xF3ria"]},{id:"Q4_3q",r:"4-6",c:2,es:["\xBFQu\xE9 selecci\xF3n de rugby es conocida como los All Blacks?",["Inglaterra","Sud\xE1frica","Nueva Zelanda"]],pt:["Qual sele\xE7\xE3o de r\xFAgbi \xE9 conhecida como All Blacks?",["Inglaterra","\xC1frica do Sul","Nova Zel\xE2ndia"]],t:["Deportes","Esportes"]},{id:"Q4_2Q4",r:"4-6",c:1,es:["\xBFC\xF3mo se escribe 1999 en n\xFAmeros romanos?",["MDMLXIX","MCMXCIX","MCMLCIX"]],pt:["Como se escreve 1999 em algarismos romanos?",["MDMLXIX","MCMXCIX","MCMLCIX"]],t:["Variado","Variado"]},{id:"Q4_3q2",r:"4-6",c:2,es:["\xBFCu\xE1ntas semanas fue n\xFAmero 1 del ranking mundial el extenista Gustavo Kuerten?",["13","23","43"]],pt:["Por quantas semanas o ex-tenista Gustavo Kuerten foi n\xFAmero 1 do ranking mundial?",["13","23","43"]],t:["Deportes","Esportes"]},{id:"Q4_3q3",r:"4-6",c:2,es:['\xBFEn honor a qu\xE9 jugador se le puso el apodo "Magic" a la exjugadora de baloncesto Paula?',["Larry Bird","Michael Jordan","Earvin Johnson"]],pt:['Em homenagem a qual jogador a ex-jogadora de basquete Paula ganhou o apelido "Magic"?',["Larry Bird","Michael Jordan","Earvin Johnson"]],t:["Deportes","Esportes"]},{id:"Q4_1q3",r:"4-6",c:0,es:["\xBFCu\xE1ntos estados forman la regi\xF3n Norte de Brasil?",["7","6","5"]],pt:["Quantos estados formam a regi\xE3o Norte do Brasil?",["7","6","5"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_1q4",r:"4-6",c:0,es:["\xBFC\xF3mo se llama el primer boxeador que derrot\xF3 a Mike Tyson en un combate profesional?",["James Douglas","Evander Holyfield","Lennox Lewis"]],pt:["Qual o nome do primeiro boxeador a derrotar Mike Tyson numa luta profissional?",["James Douglas","Evander Holyfield","Lennox Lewis"]],t:["Deportes","Esportes"]},{id:"Q4_3q4",r:"4-6",c:2,es:["\xBFDe qu\xE9 raza es Copito, el perro de M\xF3nica y su pandilla?",["Pequin\xE9s","Bich\xF3n fris\xE9","Lhasa apso"]],pt:["Qual \xE9 a ra\xE7a do Floquinho, cachorro da Turma da M\xF4nica?",["Pequin\xEAs","Bichon fris\xE9","Lhasa apso"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q5",r:"4-6",c:1,es:["\xBFCu\xE1l es el \xFAnico de los siete enanitos que lleva gafas?",["Mudito","Sabio","Gru\xF1\xF3n"]],pt:["Qual \xE9 o \xFAnico dos sete an\xF5es que usa \xF3culos?",["Dunga","Mestre","Zangado"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_1q5",r:"4-6",c:0,es:["\xBFCu\xE1l de estos nombres no es de las Tortugas Ninja?",["William","Donatello","Leonardo"]],pt:["Qual destes nomes n\xE3o \xE9 de uma Tartaruga Ninja?",["William","Donatello","Leonardo"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_1q6",r:"4-6",c:0,es:["\xBFCu\xE1l de estos animales se mueve m\xE1s despacio?",["Caracol","Tortuga","Perezoso"]],pt:["Qual destes animais se move mais devagar?",["Caracol","Tartaruga","Bicho-pregui\xE7a"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1q7",r:"4-6",c:0,es:["El nombre de pila del actor Will Smith es:",["Willard","Wilson","William"]],pt:["O primeiro nome do ator Will Smith \xE9:",["Willard","Wilson","William"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_3q5",r:"4-6",c:2,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 la primera versi\xF3n del iPod?",["2003","2002","2001"]],pt:["Em que ano foi lan\xE7ada a primeira vers\xE3o do iPod?",["2003","2002","2001"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q6",r:"4-6",c:1,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 el billete de veinte reales?",["1994","2002","2000"]],pt:["Em que ano foi lan\xE7ada a nota de vinte reais?",["1994","2002","2000"]],t:["Variado","Variado"]},{id:"Q4_1q8",r:"4-6",c:0,es:["\xBFC\xF3mo se llama el caballo del P\xE1jaro Loco en los dibujos animados?",["Pie de Trapo","Picolino","Percy Delicado"]],pt:["Qual \xE9 o nome do cavalo do Pica-Pau no desenho animado?",["P\xE9 de Pano","Picolino","Percy Delicado"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q7",r:"4-6",c:1,es:["\xBFA cu\xE1ntos \xD3scar fue nominada la pel\xEDcula Titanic?",["11","8","14"]],pt:["A quantos Oscars o filme Titanic foi indicado?",["11","8","14"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q9",r:"4-6",c:0,es:["La novela de Clarice Lispector La hora de la estrella ten\xEDa como protagonista a:",["Macab\xE9a","Macabela","Suzana"]],pt:["O romance A Hora da Estrela, de Clarice Lispector, tinha como protagonista:",["Macab\xE9a","Macabela","Suzana"]],t:["Variado","Variado"]},{id:"Q4_2q8",r:"4-6",c:1,es:["\xBFC\xF3mo se llama el peri\xF3dico en el que trabaja Clark Kent, Superman?",["Diario de Metr\xF3polis","El Planeta Diario","Diario de Manhattan"]],pt:["Qual \xE9 o nome do jornal onde Clark Kent, o Super-Homem, trabalha?",["Di\xE1rio de Metr\xF3polis","Planeta Di\xE1rio","Di\xE1rio de Manhattan"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_3q6",r:"4-6",c:2,es:["\xBFQu\xE9 empresa fabrica las armas que usa el Coyote para intentar cazar al Correcaminos?",["Ace","Acm","Acme"]],pt:["Qual empresa fabrica as armas que o Coiote usa para tentar pegar o Papa-L\xE9guas?",["Ace","Acm","Acme"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_1q10",r:"4-6",c:0,es:["Adem\xE1s de en Brasil, \xBFen qu\xE9 pa\xEDs de Am\xE9rica del Sur viven los ind\xEDgenas yanomamis?",["Venezuela","Ecuador","Colombia"]],pt:["Al\xE9m do Brasil, em que pa\xEDs da Am\xE9rica do Sul vivem os \xEDndios ianom\xE2mis?",["Venezuela","Equador","Col\xF4mbia"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_2q9",r:"4-6",c:1,es:["\xBFEn qu\xE9 pa\xEDs se celebra el Festival de Jazz de Montreux?",["Canad\xE1","Suiza","Francia"]],pt:["Em que pa\xEDs acontece o Festival de Jazz de Montreux?",["Canad\xE1","Su\xED\xE7a","Fran\xE7a"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_1q11",r:"4-6",c:0,es:["El villano del Chapul\xEDn Colorado, Tripaseca, lo interpretaba el actor que tambi\xE9n hac\xEDa de:",["Don Ram\xF3n","Quico","Profesor Jirafales"]],pt:["O vil\xE3o do Chapolin Colorado, Tripa Seca, era interpretado pelo ator que tamb\xE9m fazia o:",["Seu Madruga","Quico","Professor Girafales"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_3q7",r:"4-6",c:2,es:["\xBFQu\xE9 puede provocar el \xF3xido nitroso?",["Sue\xF1o","Hinchaz\xF3n de la piel","Risa"]],pt:["O que o \xF3xido nitroso pode provocar?",["Sono","Incha\xE7o da pele","Riso"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1q12",r:"4-6",c:0,es:["\xBFCu\xE1l de estos hechos ocurri\xF3 en 1914?",["Apertura del canal de Panam\xE1","Hundimiento del Titanic","Primer hombre en la Luna"]],pt:["Qual destes fatos ocorreu em 1914?",["Abertura do Canal do Panam\xE1","Naufr\xE1gio do Titanic","Primeiro homem na Lua"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q13",r:"4-6",c:0,es:["\xBFCu\xE1l es el s\xEDmbolo qu\xEDmico del oro?",["Au","Ou","Ag"]],pt:["Qual \xE9 o s\xEDmbolo qu\xEDmico do ouro?",["Au","Ou","Ag"]],t:["Variado","Variado"]},{id:"Q4_2q10",r:"4-6",c:1,es:["\xBFA qu\xE9 filo pertenece Patricio, la estrella de mar de Bob Esponja?",["Celent\xE9reos","Equinodermos","Cordados"]],pt:["A que filo pertence o Patrick, a estrela-do-mar do Bob Esponja?",["Celenterados","Equinodermos","Cordados"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q11",r:"4-6",c:1,es:["\xBFCu\xE1l de estas lenguas es oficial en m\xE1s de 50 pa\xEDses?",["Espa\xF1ol","Ingl\xE9s","Suajili"]],pt:["Qual destas l\xEDnguas \xE9 oficial em mais de 50 pa\xEDses?",["Espanhol","Ingl\xEAs","Sua\xEDli"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_3q8",r:"4-6",c:2,es:["\xBFCu\xE1l de estos huesos est\xE1 m\xE1s cerca de la cabeza?",["Peron\xE9","Tibia","F\xE9mur"]],pt:["Qual destes ossos fica mais perto da cabe\xE7a?",["F\xEDbula","T\xEDbia","F\xEAmur"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_2q12",r:"4-6",c:1,es:["\xBFEn qu\xE9 a\xF1o se lanz\xF3 YouTube?",["2003","2005","2007"]],pt:["Em que ano o YouTube foi lan\xE7ado?",["2003","2005","2007"]],t:["Ciencia y naturaleza","Ci\xEAncia e natureza"]},{id:"Q4_1q14",r:"4-6",c:0,es:["\xBFEn qu\xE9 ciudad se entrega la Palma de Oro?",["Cannes","Londres","Par\xEDs"]],pt:["Em que cidade \xE9 entregue a Palma de Ouro?",["Cannes","Londres","Paris"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q4_1q15",r:"4-6",c:0,es:["\xBFEn cu\xE1l de estos lugares es menos probable que llueva?",["Ant\xE1rtida","Desierto del Sahara","Desierto de Gobi"]],pt:["Em qual destes lugares \xE9 menos prov\xE1vel que chova?",["Ant\xE1rtida","Deserto do Saara","Deserto de Gobi"]],t:["Geograf\xEDa","Geografia"]},{id:"Q4_2q13",r:"4-6",c:1,es:["\xBFCu\xE1ntas hamburguesas vende McDonald's, aproximadamente, por segundo en todo el mundo?",["19","190","1900"]],pt:["Quantos hamb\xFArgueres o McDonald's vende, aproximadamente, por segundo no mundo?",["19","190","1900"]],t:["Variado","Variado"]},{id:"Q4_2q14",r:"4-6",c:1,es:["\xBFDe qu\xE9 arte marcial era cintur\xF3n negro Elvis Presley?",["Aikido","K\xE1rate","Judo"]],pt:["Elvis Presley era faixa preta em qual arte marcial?",["Aikido","Carat\xEA","Jud\xF4"]],t:["Deportes","Esportes"]},{id:"Q4_3q9",r:"4-6",c:2,es:["\xBFQu\xE9 personaje interpretaba Roberto G\xF3mez Bola\xF1os en El Chavo del 8?",["Don Ram\xF3n","Quico","El Chavo"]],pt:["Qual personagem Roberto G\xF3mez Bola\xF1os interpretava em Chaves?",["Seu Madruga","Quico","Chaves"]],t:["Dibujos animados","Desenhos animados"]},{id:"Q4_2q15",r:"4-6",c:1,es:["\xBFCu\xE1l de estas personas naci\xF3 el 29 de agosto?",["Michael Jordan","Michael Jackson","Michael Schumacher"]],pt:["Qual destas pessoas nasceu em 29 de agosto?",["Michael Jordan","Michael Jackson","Michael Schumacher"]],t:["Deportes","Esportes"]},{id:"Q4_3q10",r:"4-6",c:2,es:["\xBFC\xF3mo se llama el inframundo en la mitolog\xEDa griega?",["Lucifer","Dante","Hades"]],pt:["Como se chama o mundo inferior na mitologia grega?",["L\xFAcifer","Dante","Hades"]],t:["Variado","Variado"]},{id:"Q4_1q16",r:"4-6",c:0,es:["\xBFEn qu\xE9 a\xF1o abri\xF3 McDonald's su primer restaurante en Brasil?",["1979","1985","1989"]],pt:["Em que ano o McDonald's abriu seu primeiro restaurante no Brasil?",["1979","1985","1989"]],t:["Variado","Variado"]},{id:"Q4_1q17",r:"4-6",c:0,es:["\xBFEn qu\xE9 a\xF1o se aprob\xF3 la primera Constituci\xF3n de Brasil?",["1824","1891","1934"]],pt:["Em que ano foi aprovada a primeira Constitui\xE7\xE3o do Brasil?",["1824","1891","1934"]],t:["Historia","Hist\xF3ria"]},{id:"Q7_2q",r:"7",c:0,es:["El rey Julien, de la pel\xEDcula Madagascar, es un:",["L\xE9mur","Aye-aye"]],pt:["O rei Julien, do filme Madagascar, \xE9 um:",["L\xEAmure","Aye-aye"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_2q2",r:"7",c:0,es:["\xBFCu\xE1l es el apellido de Jason, el asesino de la saga Viernes 13?",["Voorhees","Palmer"]],pt:["Qual \xE9 o sobrenome de Jason, o assassino da saga Sexta-Feira 13?",["Voorhees","Palmer"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_2q3",r:"7",c:0,es:["\xBFQui\xE9n naci\xF3 antes?",["Madonna","Michael Jackson"]],pt:["Quem nasceu primeiro?",["Madonna","Michael Jackson"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q7_2q4",r:"7",c:0,es:["\xBFEn qu\xE9 a\xF1o se celebr\xF3 el primer evento de UFC en Brasil?",["1998","2001"]],pt:["Em que ano aconteceu o primeiro evento do UFC no Brasil?",["1998","2001"]],t:["Deportes","Esportes"]},{id:"Q7_2q5",r:"7",c:0,es:["\xBFEn qu\xE9 a\xF1o sali\xF3 el perfume femenino Chanel n.\xBA 5?",["1921","1931"]],pt:["Em que ano foi lan\xE7ado o perfume feminino Chanel n\xBA 5?",["1921","1931"]],t:["Variado","Variado"]},{id:"Q7_3q",r:"7",c:1,es:["\xBFCu\xE1ntos n\xFAmeros 5 aparecen al contar del 1 al 100?",["10","19"]],pt:["Quantos n\xFAmeros 5 aparecem contando de 1 a 100?",["10","19"]],t:["Variado","Variado"]},{id:"Q7_3q2",r:"7",c:1,es:['\xBFDe qu\xE9 color est\xE1 escrita la frase "Ordem e Progresso" en la bandera de Brasil?',["Blanco","Verde"]],pt:['De que cor est\xE1 escrita a frase "Ordem e Progresso" na bandeira do Brasil?',["Branco","Verde"]],t:["Variado","Variado"]},{id:"Q7_2q6",r:"7",c:0,es:["\xBFEn qu\xE9 mes se celebra el Oktoberfest de M\xFAnich?",["Septiembre","Octubre"]],pt:["Em que m\xEAs acontece a Oktoberfest de Munique?",["Setembro","Outubro"]],t:["Variado","Variado"]},{id:"Q7_3q3",r:"7",c:1,es:["\xBFQu\xE9 pesa m\xE1s?",["100 libras","50 kilogramos"]],pt:["O que pesa mais?",["100 libras","50 quilos"]],t:["Variado","Variado"]},{id:"Q7_2q7",r:"7",c:0,es:["\xBFQu\xE9 animal aparece en el billete de cien reales?",["Mero","Tortuga"]],pt:["Qual animal aparece na nota de cem reais?",["Garoupa","Tartaruga"]],t:["Variado","Variado"]},{id:"Q7_2q8",r:"7",c:0,es:["\xBFQui\xE9n naci\xF3 antes, del d\xFAo Victor & L\xE9o?",["Victor","L\xE9o"]],pt:["Quem nasceu primeiro, da dupla Victor & Leo?",["Victor","Leo"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q7_3q4",r:"7",c:1,es:["\xBFD\xF3nde viven los ping\xFCinos?",["Polo Norte","Polo Sur"]],pt:["Onde vivem os pinguins?",["Polo Norte","Polo Sul"]],t:["Variado","Variado"]},{id:"Q7_2q9",r:"7",c:0,es:["\xBFCu\xE1ntas franjas horizontales tiene la bandera de los Estados Unidos?",["13","21"]],pt:["Quantas listras horizontais tem a bandeira dos Estados Unidos?",["13","21"]],t:["Variado","Variado"]},{id:"Q7_3q5",r:"7",c:1,es:["\xBFQui\xE9n naci\xF3 antes?",["Beethoven","Mozart"]],pt:["Quem nasceu primeiro?",["Beethoven","Mozart"]],t:["M\xFAsica","M\xFAsica"]},{id:"Q7_2q10",r:"7",c:0,es:["\xBFQu\xE9 d\xEDa de la semana fue el 11 de septiembre de 2001?",["Martes","Jueves"]],pt:["Em que dia da semana caiu o 11 de setembro de 2001?",["Ter\xE7a-feira","Quinta-feira"]],t:["Variado","Variado"]},{id:"Q7_2q11",r:"7",c:0,es:["\xBFEn qu\xE9 mes termin\xF3 la Segunda Guerra Mundial?",["Septiembre","Mayo"]],pt:["Em que m\xEAs terminou a Segunda Guerra Mundial?",["Setembro","Maio"]],t:["Deportes","Esportes"]},{id:"Q7_3q6",r:"7",c:1,es:["\xBFQu\xE9 tenemos m\xE1s en el cuerpo?",["Cromosomas","Huesos"]],pt:["O que temos mais no corpo?",["Cromossomos","Ossos"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_3q7",r:"7",c:1,es:["\xBFCu\xE1l es la moneda oficial de Vietnam?",["Ding","Dong"]],pt:["Qual \xE9 a moeda oficial do Vietn\xE3?",["Ding","Dong"]],t:["Geograf\xEDa","Geografia"]},{id:"Q7_3q8",r:"7",c:1,es:["\xBFFue 2009 un a\xF1o bisiesto?",["S\xED","No"]],pt:["2009 foi um ano bissexto?",["Sim","N\xE3o"]],t:["Variado","Variado"]},{id:"Q7_2q12",r:"7",c:0,es:["\xBFCu\xE1ntas veces gan\xF3 Ayrton Senna el Gran Premio de M\xF3naco de F\xF3rmula 1?",["6","7"]],pt:["Quantas vezes Ayrton Senna venceu o Grande Pr\xEAmio de M\xF4naco de F\xF3rmula 1?",["6","7"]],t:["Deportes","Esportes"]},{id:"Q7_2q13",r:"7",c:0,es:["Si hay un viernes 13, \xBFen qu\xE9 d\xEDa de la semana empieza el mes?",["Domingo","Jueves"]],pt:["Se h\xE1 uma sexta-feira 13, em que dia da semana come\xE7a o m\xEAs?",["Domingo","Quinta-feira"]],t:["Cine y series","Cinema e s\xE9ries"]},{id:"Q7_2q14",r:"7",c:0,es:["\xBFCu\xE1ntos puntos tendr\xEDa que ganar un tenista para vencer un partido individual en Wimbledon sin perder ning\xFAn punto?",["72","96"]],pt:["Quantos pontos um tenista teria de ganhar para vencer uma partida de simples em Wimbledon sem perder nenhum ponto?",["72","96"]],t:["Deportes","Esportes"]},{id:"Q7_2q15",r:"7",c:0,es:["\xBFC\xF3mo se llama el barco de Davy Jones en Piratas del Caribe: En el fin del mundo?",["The Flying Dutchman","The Black Pearl"]],pt:["Como se chama o navio de Davy Jones em Piratas do Caribe: No Fim do Mundo?",["The Flying Dutchman","The Black Pearl"]],t:["Cine y series","Cinema e s\xE9ries"]}],aniv:[{id:"aniv0",r:"any",c:2,es:["\xBFEn qu\xE9 cadena se emite Atrapa un mill\xF3n?",["Cuatro","Telecinco","Antena 3","La 1"]],pt:["Em que canal \xE9 exibido o Atrapa un mill\xF3n?",["Cuatro","Telecinco","Antena 3","La 1"]],t:["El programa","O programa"]},{id:"aniv1",r:"any",c:3,es:["\xBFQu\xE9 productora hace Atrapa un mill\xF3n?",["Globomedia","Boomerang TV","Zeppelin","Gestmusic"]],pt:["Qual produtora faz o Atrapa un mill\xF3n?",["Globomedia","Boomerang TV","Zeppelin","Gestmusic"]],t:["El programa","O programa"]},{id:"aniv2",r:"any",c:1,es:["\xBFDe qu\xE9 programa brit\xE1nico es adaptaci\xF3n Atrapa un mill\xF3n?",["The Chase","The Million Pound Drop Live","The Cube","Who Wants to Be a Millionaire?"]],pt:["De qual programa brit\xE2nico o Atrapa un mill\xF3n \xE9 adapta\xE7\xE3o?",["The Chase","The Million Pound Drop Live","The Cube","Who Wants to Be a Millionaire?"]],t:["Or\xEDgenes","Origens"]},{id:"aniv3",r:"any",c:2,es:["\xBFEn qu\xE9 cadena brit\xE1nica se emit\xEDa el formato original?",["Sky One","ITV","Channel 4","BBC One"]],pt:["Em qual canal brit\xE2nico era exibido o formato original?",["Sky One","ITV","Channel 4","BBC One"]],t:["Or\xEDgenes","Origens"]},{id:"aniv4",r:"any",c:1,es:["\xBFQu\xE9 empresa cre\xF3 el formato del programa?",["Disney","Endemol","Fremantle","Mediapro"]],pt:["Qual empresa criou o formato do programa?",["Disney","Endemol","Fremantle","Mediapro"]],t:["Or\xEDgenes","Origens"]},{id:"aniv5",r:"any",c:2,es:["\xBFQui\xE9n present\xF3 la primera etapa de Atrapa un mill\xF3n?",["Manel Fuentes","Roberto Leal","Carlos Sobera","Arturo Valls"]],pt:["Quem apresentou a primeira fase do Atrapa un mill\xF3n?",["Manel Fuentes","Roberto Leal","Carlos Sobera","Arturo Valls"]],t:["Presentadores","Apresentadores"]},{id:"aniv6",r:"any",c:3,es:["\xBFQui\xE9n presenta la nueva etapa estrenada en 2023?",["Carlos Sobera","Arturo Valls","Jorge Fern\xE1ndez","Manel Fuentes"]],pt:["Quem apresenta a nova fase estreada em 2023?",["Carlos Sobera","Arturo Valls","Jorge Fern\xE1ndez","Manel Fuentes"]],t:["Presentadores","Apresentadores"]},{id:"aniv7",r:"any",c:1,es:["\xBFQu\xE9 presentador se puso al frente de algunos programas en 2024?",["Jorge Fern\xE1ndez","Juanra Bonet","Carlos Sobera","Christian G\xE1lvez"]],pt:["Qual apresentador comandou alguns programas em 2024?",["Jorge Fern\xE1ndez","Juanra Bonet","Carlos Sobera","Christian G\xE1lvez"]],t:["Presentadores","Apresentadores"]},{id:"aniv8",r:"any",c:2,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 Atrapa un mill\xF3n?",["2009","2013","2011","2008"]],pt:["Em que ano estreou o Atrapa un mill\xF3n?",["2009","2013","2011","2008"]],t:["Fechas","Datas"]},{id:"aniv9",r:"any",c:3,es:["\xBFQu\xE9 d\xEDa de la semana se emit\xEDa al principio?",["Lunes","Mi\xE9rcoles","Domingo","Viernes"]],pt:["Em que dia da semana era exibido no in\xEDcio?",["Segunda-feira","Quarta-feira","Domingo","Sexta-feira"]],t:["Fechas","Datas"]},{id:"aniv10",r:"any",c:1,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 la nueva etapa del programa?",["2025","2023","2021","2019"]],pt:["Em que ano estreou a nova fase do programa?",["2025","2023","2021","2019"]],t:["Fechas","Datas"]},{id:"aniv11",r:"any",c:3,es:["\xBFQu\xE9 programa sustituy\xF3 a Atrapa un mill\xF3n en septiembre de 2014?",["La ruleta de la suerte","Pasapalabra","\xA1Ahora Caigo!","\xA1Boom!"]],pt:["Qual programa substituiu o Atrapa un mill\xF3n em setembro de 2014?",["La ruleta de la suerte","Pasapalabra","\xA1Ahora Caigo!","\xA1Boom!"]],t:["Fechas","Datas"]},{id:"aniv12",r:"any",c:2,es:["\xBFCu\xE1ntos fajos de billetes recibe la pareja en la versi\xF3n semanal?",["100","50","40","20"]],pt:["Quantos ma\xE7os de notas a dupla recebe na vers\xE3o semanal?",["100","50","40","20"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv13",r:"any",c:2,es:["\xBFCu\xE1nto vale cada fajo en la versi\xF3n semanal?",["10.000 \u20AC","5.000 \u20AC","25.000 \u20AC","50.000 \u20AC"]],pt:["Quanto vale cada ma\xE7o na vers\xE3o semanal?",["10.000 \u20AC","5.000 \u20AC","25.000 \u20AC","50.000 \u20AC"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv14",r:"any",c:3,es:["\xBFDe qu\xE9 valor son los billetes de los fajos?",["100 \u20AC","500 \u20AC","20 \u20AC","50 \u20AC"]],pt:["De que valor s\xE3o as notas dos ma\xE7os?",["100 \u20AC","500 \u20AC","20 \u20AC","50 \u20AC"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv15",r:"any",c:0,es:["\xBFCu\xE1ntos billetes tiene cada fajo?",["500","250","1.000","100"]],pt:["Quantas notas tem cada ma\xE7o?",["500","250","1.000","100"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv16",r:"any",c:0,es:["\xBFCu\xE1ntas preguntas hay en la versi\xF3n semanal?",["8","12","10","7"]],pt:["Quantas perguntas h\xE1 na vers\xE3o semanal?",["8","12","10","7"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv17",r:"any",c:1,es:["\xBFCu\xE1ntas opciones tiene la \xFAltima pregunta del semanal?",["5","2","3","4"]],pt:["Quantas op\xE7\xF5es tem a \xFAltima pergunta da vers\xE3o semanal?",["5","2","3","4"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv18",r:"any",c:1,es:["\xBFCu\xE1ntos segundos hay para repartir el dinero?",["120","60","90","30"]],pt:["Quantos segundos h\xE1 para distribuir o dinheiro?",["120","60","90","30"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv19",r:"any",c:3,es:["\xBFCu\xE1ntas trampillas hay que dejar vac\xEDas como m\xEDnimo?",["Tres","Ninguna","Dos","Una"]],pt:["Quantos al\xE7ap\xF5es \xE9 preciso deixar vazios, no m\xEDnimo?",["Tr\xEAs","Nenhum","Dois","Um"]],t:["Mec\xE1nica","Mec\xE2nica"]},{id:"aniv20",r:"any",c:0,es:["\xBFCon cu\xE1nto dinero empezaba la edici\xF3n diaria?",["200.000 \u20AC","100.000 \u20AC","1.000.000 \u20AC","500.000 \u20AC"]],pt:["Com quanto dinheiro come\xE7ava a edi\xE7\xE3o di\xE1ria?",["200.000 \u20AC","100.000 \u20AC","1.000.000 \u20AC","500.000 \u20AC"]],t:["El diario","O di\xE1rio"]},{id:"aniv21",r:"any",c:1,es:["\xBFCu\xE1nto val\xEDa cada fajo en el diario?",["25.000 \u20AC","5.000 \u20AC","10.000 \u20AC","1.000 \u20AC"]],pt:["Quanto valia cada ma\xE7o no di\xE1rio?",["25.000 \u20AC","5.000 \u20AC","10.000 \u20AC","1.000 \u20AC"]],t:["El diario","O di\xE1rio"]},{id:"aniv22",r:"any",c:3,es:["\xBFC\xF3mo se llamaba el comod\xEDn que cambiaba la pregunta en el diario?",["Pregunta extra","Pregunta bomba","Pregunta de oro","Pregunta estrella"]],pt:["Como se chamava o curinga que trocava a pergunta no di\xE1rio?",["Pergunta extra","Pergunta bomba","Pergunta de ouro","Pergunta estrela"]],t:["El diario","O di\xE1rio"]},{id:"aniv23",r:"any",c:1,es:["\xBFC\xF3mo se llamaba el tema en el que solo responde un concursante?",["En solitario","Solo uno","Uno para todos","Cara a cara"]],pt:["Como se chamava o tema em que s\xF3 um concorrente responde?",["Sozinho","Solo uno","Um por todos","Cara a cara"]],t:["El diario","O di\xE1rio"]},{id:"aniv24",r:"any",c:1,es:["\xBFEn qu\xE9 pregunta aparec\xEDa el tema \xABSolo uno\xBB?",["La 8","La 6","La 1","La 3"]],pt:["Em que pergunta aparecia o tema \xABSolo uno\xBB?",["A 8\xAA","A 6\xAA","A 1\xAA","A 3\xAA"]],t:["El diario","O di\xE1rio"]},{id:"aniv25",r:"any",c:3,es:["Al triplicar en la \xFAltima pregunta del diario, \xBFcu\xE1ntas opciones hab\xEDa?",["5","3","2","4"]],pt:["Ao triplicar na \xFAltima pergunta do di\xE1rio, quantas op\xE7\xF5es havia?",["5","3","2","4"]],t:["El diario","O di\xE1rio"]},{id:"aniv26",r:"any",c:0,es:["\xBFQu\xE9 permit\xEDa el \xABPase al Mill\xF3n\xBB tras la cuarta pregunta?",["Una pregunta extra pagando la mitad","Duplicar el dinero","Llamar a un amigo","Saltar una pregunta"]],pt:["O que permitia o \xABPase al Mill\xF3n\xBB depois da quarta pergunta?",["Uma pergunta extra pagando a metade","Dobrar o dinheiro","Ligar para um amigo","Pular uma pergunta"]],t:["El diario","O di\xE1rio"]},{id:"aniv27",r:"any",c:0,es:["\xBFTras qu\xE9 programa se emit\xEDa el diario por las tardes?",["\xA1Ahora Caigo!","Pasapalabra","Saber y ganar","El precio justo"]],pt:["Depois de qual programa era exibido o di\xE1rio \xE0 tarde?",["\xA1Ahora Caigo!","Pasapalabra","Saber y ganar","El precio justo"]],t:["El diario","O di\xE1rio"]},{id:"aniv28",r:"any",c:3,es:["\xBFCu\xE1l es el mayor premio repartido en el programa?",["325.000 \u20AC","1.000.000 \u20AC","750.000 \u20AC","550.000 \u20AC"]],pt:["Qual \xE9 o maior pr\xEAmio j\xE1 pago no programa?",["325.000 \u20AC","1.000.000 \u20AC","750.000 \u20AC","550.000 \u20AC"]],t:["R\xE9cords","Recordes"]},{id:"aniv29",r:"any",c:1,es:["\xBFCu\xE1nto dinero se perdi\xF3 en Atrapa dos millones, la mayor p\xE9rdida?",["2.000.000 \u20AC","1.900.000 \u20AC","950.000 \u20AC","1.500.000 \u20AC"]],pt:["Quanto dinheiro se perdeu no Atrapa dos millones, a maior perda?",["2.000.000 \u20AC","1.900.000 \u20AC","950.000 \u20AC","1.500.000 \u20AC"]],t:["R\xE9cords","Recordes"]},{id:"aniv30",r:"any",c:3,es:["\xBFQu\xE9 premio gan\xF3 el programa en 2011 junto al TP de Oro?",["Premio Max","Premio Goya","Premio Feroz","Premio Ondas"]],pt:["Que pr\xEAmio o programa ganhou em 2011, al\xE9m do TP de Oro?",["Pr\xEAmio Max","Pr\xEAmio Goya","Pr\xEAmio Feroz","Pr\xEAmio Ondas"]],t:["R\xE9cords","Recordes"]},{id:"aniv31",r:"any",c:0,es:["\xBFQu\xE9 parentesco ten\xEDan Mar\xEDa y Pablo, que se llevaron los 200.000 \u20AC del diario en 2013?",["Hermanos","Primos","Pareja","Padre e hija"]],pt:["Que parentesco tinham Mar\xEDa e Pablo, que levaram os 200.000 \u20AC do di\xE1rio em 2013?",["Irm\xE3os","Primos","Casal","Pai e filha"]],t:["R\xE9cords","Recordes"]}],tele:[{id:"tele0",r:"any",c:2,es:["\xBFQui\xE9n present\xF3 Pasapalabra en Telecinco?",["Carlos Sobera","Jaime Cantizano","Christian G\xE1lvez","Roberto Leal"]],pt:["Quem apresentou o Pasapalabra na Telecinco?",["Carlos Sobera","Jaime Cantizano","Christian G\xE1lvez","Roberto Leal"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele1",r:"any",c:2,es:["\xBFEn qu\xE9 cadena se estren\xF3 Pasapalabra en 2000?",["Telecinco","Cuatro","Antena 3","La 1"]],pt:["Em que canal estreou o Pasapalabra em 2000?",["Telecinco","Cuatro","Antena 3","La 1"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele2",r:"any",c:2,es:["\xBFCu\xE1ntas definiciones tiene el rosco de Pasapalabra?",["27","30","25","20"]],pt:["Quantas defini\xE7\xF5es tem o \xABrosco\xBB do Pasapalabra?",["27","30","25","20"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele3",r:"any",c:2,es:["\xBFCu\xE1nto sube el bote de Pasapalabra cada d\xEDa que no se gana?",["1.200 \u20AC","600 \u20AC","6.000 \u20AC","10.000 \u20AC"]],pt:["Quanto sobe o pr\xEAmio acumulado do Pasapalabra a cada dia sem vencedor?",["1.200 \u20AC","600 \u20AC","6.000 \u20AC","10.000 \u20AC"]],t:["Pasapalabra","Pasapalabra"]},{id:"tele4",r:"any",c:0,es:["\xBFQu\xE9 se corta en las bombas de \xA1Boom!?",["Cables","Cintas","Cuerdas","Mechas"]],pt:["O que se corta nas bombas do \xA1Boom!?",["Fios","Fitas","Cordas","Pavios"]],t:["\xA1Boom!","\xA1Boom!"]},{id:"tele5",r:"any",c:3,es:["\xBFCu\xE1ntos programas estuvieron Los Lobos en \xA1Boom!?",["250","350","150","505"]],pt:["Em quantos programas Los Lobos participaram no \xA1Boom!?",["250","350","150","505"]],t:["\xA1Boom!","\xA1Boom!"]},{id:"tele6",r:"any",c:0,es:["\xBFDe qu\xE9 pa\xEDs es el formato original de \xA1Boom!?",["Israel","Jap\xF3n","Italia","M\xE9xico"]],pt:["De que pa\xEDs \xE9 o formato original do \xA1Boom!?",["Israel","Jap\xE3o","It\xE1lia","M\xE9xico"]],t:["\xA1Boom!","\xA1Boom!"]},{id:"tele7",r:"any",c:0,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 \xA1Ahora caigo!?",["2011","2014","2005","2008"]],pt:["Em que ano estreou o \xA1Ahora caigo!?",["2011","2014","2005","2008"]],t:["Antena 3","Antena 3"]},{id:"tele8",r:"any",c:0,es:["\xBFQui\xE9n present\xF3 El precio justo en 1988?",["Joaqu\xEDn Prat","Juan y Medio","Carlos Lozano","Jordi Hurtado"]],pt:["Quem apresentou o El precio justo em 1988?",["Joaqu\xEDn Prat","Juan y Medio","Carlos Lozano","Jordi Hurtado"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele9",r:"any",c:2,es:["\xBFEn qu\xE9 cadena se emite Saber y ganar?",["Telecinco","Antena 3","La 2","La 1"]],pt:["Em que canal \xE9 exibido o Saber y ganar?",["Telecinco","Antena 3","La 2","La 1"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele10",r:"any",c:2,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 Saber y ganar?",["1985","2003","1997","1991"]],pt:["Em que ano estreou o Saber y ganar?",["1985","2003","1997","1991"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele11",r:"any",c:2,es:["\xBFCu\xE1ntos concursantes compiten en Saber y ganar?",["4","6","3","2"]],pt:["Quantos concorrentes competem no Saber y ganar?",["4","6","3","2"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele12",r:"any",c:0,es:["\xBFQui\xE9n present\xF3 el Millonario en Antena 3 en 2009?",["Antonio Garrido","Juanra Bonet","Arturo Valls","Carlos Sobera"]],pt:["Quem apresentou o Milion\xE1rio na Antena 3 em 2009?",["Antonio Garrido","Juanra Bonet","Arturo Valls","Carlos Sobera"]],t:["Millonarios","Milion\xE1rios"]},{id:"tele13",r:"any",c:3,es:["\xBFCu\xE1l era el premio m\xE1ximo de 50 por 15?",["100 millones de pesetas","15 millones de pesetas","5 millones de pesetas","50 millones de pesetas"]],pt:["Qual era o pr\xEAmio m\xE1ximo do 50 por 15?",["100 milh\xF5es de pesetas","15 milh\xF5es de pesetas","5 milh\xF5es de pesetas","50 milh\xF5es de pesetas"]],t:["Millonarios","Milion\xE1rios"]},{id:"tele14",r:"any",c:0,es:["\xBFQu\xE9 comod\xEDn del Millonario elimina dos respuestas incorrectas?",["50:50","La llamada","El cambio","El p\xFAblico"]],pt:["Qual ajuda do Milion\xE1rio elimina duas respostas erradas?",["50:50","A liga\xE7\xE3o","A troca","A plateia"]],t:["Millonarios","Milion\xE1rios"]},{id:"tele15",r:"any",c:1,es:["\xBFDe qu\xE9 concurso estadounidense viene La ruleta de la suerte?",["Jeopardy!","Wheel of Fortune","The Chase","The Price is Right"]],pt:["De qual programa americano vem La ruleta de la suerte?",["Jeopardy!","Wheel of Fortune","The Chase","The Price is Right"]],t:["Formatos","Formatos"]},{id:"tele16",r:"any",c:0,es:["\xBFQu\xE9 concurso brit\xE1nico adaptaba El cazador?",["The Chase","The Alphabet Game","The Million Pound Drop","The Cube"]],pt:["Qual programa brit\xE2nico El cazador adaptava?",["The Chase","The Alphabet Game","The Million Pound Drop","The Cube"]],t:["Formatos","Formatos"]},{id:"tele17",r:"any",c:0,es:["\xBFQu\xE9 dos juegos mezclaba Lingo?",["Bingo y Master Mind","Domin\xF3 y Ajedrez","Parch\xEDs y Oca","Mus y Tute"]],pt:["Quais dois jogos o Lingo misturava?",["Bingo e Master Mind","Domin\xF3 e Xadrez","Ludo e Jogo do Ganso","Mus e Tute"]],t:["Formatos","Formatos"]},{id:"tele18",r:"any",c:3,es:["\xBFQui\xE9n presenta Tu cara me suena?",["Roberto Leal","Jes\xFAs V\xE1zquez","Arturo Valls","Manel Fuentes"]],pt:["Quem apresenta o Tu cara me suena?",["Roberto Leal","Jes\xFAs V\xE1zquez","Arturo Valls","Manel Fuentes"]],t:["Antena 3","Antena 3"]},{id:"tele19",r:"any",c:3,es:["\xBFEn qu\xE9 a\xF1o se estren\xF3 Tu cara me suena?",["2005","2016","2019","2011"]],pt:["Em que ano estreou o Tu cara me suena?",["2005","2016","2019","2011"]],t:["Antena 3","Antena 3"]},{id:"tele20",r:"any",c:1,es:["\xBFC\xF3mo se llamaba la calabaza del Un, dos, tres?",["Crack","Ruperta","Petra","Botilde"]],pt:["Como se chamava a ab\xF3bora do Un, dos, tres?",["Crack","Ruperta","Petra","Botilde"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele21",r:"any",c:3,es:["\xBFQui\xE9n interpretaba a Don Cicuta en el Un, dos, tres?",["Chicho Ib\xE1\xF1ez Serrador","Joaqu\xEDn Prat","Kiko Ledgard","Valent\xEDn Tornos"]],pt:["Quem interpretava Don Cicuta no Un, dos, tres?",["Chicho Ib\xE1\xF1ez Serrador","Joaqu\xEDn Prat","Kiko Ledgard","Valent\xEDn Tornos"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele22",r:"any",c:3,es:["\xBFQu\xE9 era el gallifante de Juego de ni\xF1os?",["Mitad gallina, mitad jirafa","Mitad gato, mitad elefante","Mitad gallo, mitad le\xF3n","Mitad gallo, mitad elefante"]],pt:["O que era o gallifante do Juego de ni\xF1os?",["Metade galinha, metade girafa","Metade gato, metade elefante","Metade galo, metade le\xE3o","Metade galo, metade elefante"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele23",r:"any",c:3,es:["\xBFQui\xE9n present\xF3 El precio justo en Telecinco en 2021?",["Agust\xEDn Bravo","Jorge Javier V\xE1zquez","Joaqu\xEDn Prat","Carlos Sobera"]],pt:["Quem apresentou o El precio justo na Telecinco em 2021?",["Agust\xEDn Bravo","Jorge Javier V\xE1zquez","Joaqu\xEDn Prat","Carlos Sobera"]],t:["Cl\xE1sicos","Cl\xE1ssicos"]},{id:"tele24",r:"any",c:3,es:["\xBFQui\xE9n present\xF3 \xA1All\xE1 t\xFA! en el verano de 2005?",["Jordi Hurtado","Christian G\xE1lvez","Manel Fuentes","Arturo Valls"]],pt:["Quem apresentou o \xA1All\xE1 t\xFA! no ver\xE3o de 2005?",["Jordi Hurtado","Christian G\xE1lvez","Manel Fuentes","Arturo Valls"]],t:["Formatos","Formatos"]},{id:"tele25",r:"any",c:0,es:["\xBFCon cu\xE1nto dinero empezaban las parejas de Atrapa un mill\xF3n semanal?",["1 mill\xF3n de euros","2 millones de euros","100.000 \u20AC","500.000 \u20AC"]],pt:["Com quanto dinheiro come\xE7avam as duplas do Atrapa un mill\xF3n semanal?",["1 milh\xE3o de euros","2 milh\xF5es de euros","100.000 \u20AC","500.000 \u20AC"]],t:["Antena 3","Antena 3"]}]}};var Fe=i=>document.querySelector(i),pr=location.search,If=/[?&]fast=1/.test(pr),Wi=/[?&]bot=1/.test(pr),rc=If?.04:1,Mn=i=>new Promise(e=>setTimeout(e,i*rc)),Aa=i=>i[Math.floor(Math.random()*i.length)],Lf=i=>{i=i.slice();for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i},Je=(i,e,t)=>new F(i,e,t),ju=["A","B","C","D"],Xl={es:{m_mini:"Minijuego",m_train:"Entrenamiento",m_tv:"Programa TV",m_hist:"Historia del programa",m_walk:"Pasear por el plat\xF3",m_custom:"\u2699 Personalizar",m_specials:"Programas especiales:",sp_tele:"Prime Time: Concursos TV",sp_diario:"Diario 200.000 \u20AC",sp_aniv:"Especial Aniversario",sp_dos:"Atrapa dos millones",disc:"Remake no oficial hecho por un fan, sin \xE1nimo de lucro. Atrapa un mill\xF3n es un formato de Endemol / Gestmusic emitido por Antena 3. Sin relaci\xF3n oficial con el programa. Presentador y concursantes son personajes ficticios.",wm:"Remake de fans \xB7 no oficial",h_play:"EN JUEGO",h_bank:"SIN COLOCAR",stop:"PARAR",star:"\u2605 PREGUNTA ESTRELLA",all:"TODO",q:"Pregunta",of:"de",topicT:"Elegid tema",host:"Presentador",lost:"PERDIDO",safe:"\xA1SALVADO!",youWin:"\xA1OS LLEV\xC1IS!",gameOver:"FIN DEL JUEGO",menu:"Men\xFA",again:"Jugar otra vez",next:"Otra pregunta",trainT:"Entrenamiento",trainS:"Practica una pregunta: aqu\xED no se pierde dinero.",opts:"opciones",unlimited:"Tiempo ilimitado",pool:"Preguntas",p_general:"Cultura general",p_tele:"Concursos de TV",p_aniv:"Atrapa un mill\xF3n",wouldKeep:"Habr\xEDas conservado",emptyRule:"\xA1Deja al menos una trampilla vac\xEDa!",allInRule:"\xDAltima pregunta: todo el dinero en una sola trampilla",placeAll:"Coloca todo el dinero antes de parar",finT:"Elegid la pregunta final",triple:"TRIPLICAR",tripleS:"4 opciones \xB7 20 s \xB7 \xD73",double:"DUPLICAR",doubleS:"3 opciones \xB7 10 s \xB7 \xD72",classic:"CL\xC1SICA",classicS:"2 opciones \xB7 60 s",soloT:"SOLO UNO",custT:"Personalizar programa",c_pair:"Pareja",c_random:"Aleatoria",c_nameA:"Nombre concursante 1",c_nameB:"Nombre concursante 2",c_time:"Tiempo por pregunta",c_voice:"Voces (espa\xF1ol)",c_chat:"Charla de la pareja",c_jokes:"Bromas del presentador",dl3d:"Descargar APK (3D)",dlOrig:"Descargar APK (minijuego original)",c_music:"Volumen m\xFAsica",c_low:"Calidad baja (m\xF3viles lentos)",c_save:"Guardar",c_lang:"Idioma",histT:"Historia de Atrapa un mill\xF3n",histWalk:"Pasear por el plat\xF3",back:"Volver",walkHint:"Mu\xE9vete con WASD / flechas o el joystick. Arrastra para mirar.",skip:"Saltar",minT:"Minijuego",minS:"7 preguntas \xB7 60 s \xB7 usa las flechas azules \xB7 deja una mesa vac\xEDa \xB7 en la \xFAltima, todo a una",start:"EMPEZAR",rulesT:"Reglas",rules:["Empiezas con 1 mill\xF3n en 40 fajos.","Tienes 60 segundos para repartir el dinero con las flechas.","Siempre debes dejar una de las trampillas vac\xEDa.","El dinero de las trampillas incorrectas cae al foso.","En la \xFAltima pregunta, todo a una."],mult:"multiplicado",noVoicePt:""},pt:{m_mini:"Minijogo",m_train:"Treino",m_tv:"Programa de TV",m_hist:"Hist\xF3ria do programa",m_walk:"Passear pelo est\xFAdio",m_custom:"\u2699 Personalizar",m_specials:"Programas especiais:",sp_tele:"Hor\xE1rio nobre: Concursos TV",sp_diario:"Di\xE1rio 200.000 \u20AC",sp_aniv:"Especial Anivers\xE1rio",sp_dos:"Atrapa dos millones",disc:"Remake n\xE3o oficial feito por um f\xE3, sem fins lucrativos. Atrapa un mill\xF3n \xE9 um formato da Endemol / Gestmusic exibido pela Antena 3. Sem rela\xE7\xE3o oficial com o programa. Apresentador e concorrentes s\xE3o personagens fict\xEDcios.",wm:"Remake de f\xE3 \xB7 n\xE3o oficial",h_play:"EM JOGO",h_bank:"SEM COLOCAR",stop:"PARAR",star:"\u2605 PERGUNTA ESTRELA",all:"TUDO",q:"Pergunta",of:"de",topicT:"Escolham o tema",host:"Apresentador",lost:"PERDEU",safe:"SALVO!",youWin:"VOC\xCAS LEVAM!",gameOver:"FIM DE JOGO",menu:"Menu",again:"Jogar de novo",next:"Outra pergunta",trainT:"Treino",trainS:"Pratique uma pergunta: aqui n\xE3o se perde dinheiro.",opts:"op\xE7\xF5es",unlimited:"Tempo ilimitado",pool:"Perguntas",p_general:"Conhecimentos gerais",p_tele:"Concursos de TV",p_aniv:"Atrapa un mill\xF3n",wouldKeep:"Voc\xEA teria mantido",emptyRule:"Deixe pelo menos um al\xE7ap\xE3o vazio!",allInRule:"\xDAltima pergunta: todo o dinheiro num s\xF3 al\xE7ap\xE3o",placeAll:"Coloque todo o dinheiro antes de parar",finT:"Escolham a pergunta final",triple:"TRIPLICAR",tripleS:"4 op\xE7\xF5es \xB7 20 s \xB7 \xD73",double:"DOBRAR",doubleS:"3 op\xE7\xF5es \xB7 10 s \xB7 \xD72",classic:"CL\xC1SSICA",classicS:"2 op\xE7\xF5es \xB7 60 s",soloT:"SOLO UNO",custT:"Personalizar programa",c_pair:"Dupla",c_random:"Aleat\xF3ria",c_nameA:"Nome do concorrente 1",c_nameB:"Nome do concorrente 2",c_time:"Tempo por pergunta",c_voice:"Vozes (s\xF3 espanhol)",c_chat:"Conversa da dupla",c_jokes:"Piadas do apresentador",dl3d:"Baixar APK (3D)",dlOrig:"Baixar APK (minijogo original)",c_music:"Volume da m\xFAsica",c_low:"Qualidade baixa (celulares lentos)",c_save:"Salvar",c_lang:"Idioma",histT:"Hist\xF3ria do Atrapa un mill\xF3n",histWalk:"Passear pelo est\xFAdio",back:"Voltar",walkHint:"Ande com WASD / setas ou o joystick. Arraste para olhar.",skip:"Pular",minT:"Minijogo",minS:"7 perguntas \xB7 60 s \xB7 use as setas azuis \xB7 deixe uma mesa vazia \xB7 na \xFAltima, tudo numa s\xF3",start:"COME\xC7AR",rulesT:"Regras",rules:["Voc\xEA come\xE7a com 1 milh\xE3o em 40 ma\xE7os.","Tem 60 segundos para distribuir o dinheiro com as setas.","Sempre deve deixar um dos al\xE7ap\xF5es vazio.","O dinheiro dos al\xE7ap\xF5es errados cai no buraco.","Na \xFAltima pergunta, tudo numa s\xF3."],mult:"multiplicado"}},Jt=localStorage.getItem("aum3d_lang")||"es",Le=i=>Xl[Jt]&&Xl[Jt][i]!==void 0?Xl[Jt][i]:Xl.es[i],qi=()=>Jt==="pt"?1:0;function Df(){document.querySelectorAll("[data-i]").forEach(i=>{i.textContent=Le(i.dataset.i)}),document.documentElement.lang=Jt}var gv=i=>String(Math.round(i)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),zn=i=>gv(i)+" \u20AC",Ct=Object.assign({pair:-1,nameA:"",nameB:"",time:60,chat:!0,jokes:!0,low:!1},JSON.parse(localStorage.getItem("aum3d_cfg")||"{}")),_v=()=>localStorage.setItem("aum3d_cfg",JSON.stringify(Ct)),Ia=Ct.low||/[?&]low=1/.test(pr),Ji=new Ol({antialias:!Ia,powerPreference:"high-performance",preserveDrawingBuffer:/[?&]shot=1/.test(pr)});Ji.setPixelRatio(Math.min(devicePixelRatio,Ia?1:1.5));Ji.toneMapping=oa;Ji.toneMappingExposure=1.15;Fe("#app").appendChild(Ji.domElement);var Rt=pf(Ji,{lowQuality:Ia}),Xi=Rt.scene,cr=new Wt(60,1,.05,120);function Nf(){let i=innerWidth,e=innerHeight;Ji.setSize(i,e),cr.aspect=i/e,cr.fov=i/e<1.2?75:58,cr.updateProjectionMatrix()}addEventListener("resize",Nf);Nf();var un=xf(Rt,{lowQuality:Ia});window.__lights=un;var ar=vf(Rt,{lowQuality:Ia});un.buildGUI(Fe("#glights"));Fe("#glights").addEventListener("click",i=>{i.target.closest("[data-close]")&&Fe("#glights").classList.add("hidden")});var Kt=Vl({shirt:15790320,jacket:6949418,pants:1710626,tie:2105376,hair:1708560,skin:14726284,glasses:!0,scale:1.04}),mr=Je(-3.45,0,-1.75);Kt.position.copy(mr);Xi.add(Kt);var Ku=[Je(-.5,0,-.55),Je(.5,0,-.55)],xv=[3065014,16752412,10182117,15817653,48121,9095462,15146294,16704576],ec=0,zt=[],vi=[];function Ju(i){zt.forEach(t=>Xi.remove(t)),vi.forEach(t=>Xi.remove(t));let e=Ma[i];ec=i,zt=[0,1].map(t=>{let n=e[t*2+1]==="F",s=Vl({shirt:xv[(i*2+t)%8],pants:2236987,hair:[2824720,7029795,1118481,13934615][(i+t)%4],skin:[15911328,14264188,13010498,16176568][(i+t*3)%4],long:n});return s.position.copy(Ku[t]),s.userData.voice=e[t*2+1],s.userData.name=t?Ct.nameB||e[2]:Ct.nameA||e[0],Xi.add(s),s}),vi=[0,1].map(t=>{let n=Vl({shirt:[16777215,16726634][t],pants:3355460,hair:3810322,skin:1578e4,long:t===1,scale:.95}),s=wn(9.15,t?Math.PI-.62:.62,1.42);return n.position.copy(s),n.lookAt(0,s.y,0),n.userData.voice=t?"F":"M",n.userData.name=Jt==="pt"?"Acompanhante":"Acompa\xF1ante",Xi.add(n),n})}Ju(Ct.pair>=0?Ct.pair:Math.floor(Math.random()*Ma.length));var ur=new Map,ds=null;function Ea(i,e,t=1.6){return new Promise(n=>ur.set(i,{to:e.clone(),speed:t,res:n}))}function $l(i,e){i.rotation.y=Math.atan2(e.x-i.position.x,e.z-i.position.z)}function wa(){ur.clear(),zt.forEach((i,e)=>{i.position.copy(Ku[e]),i.rotation.set(0,0,0),i.visible=!0,i.userData.mood=null,i.userData.sink=0}),Kt.position.copy(mr),$l(Kt,Je(0,0,-.3)),Kt.visible=!0}wa();var La=40,vv=new Mt(.28,.062,.15),Yl=hf(),Ef=df(),yv=[new jt({map:Yl,roughness:.7}),new jt({map:Yl,roughness:.7}),new jt({map:Ef,roughness:.6}),new jt({map:Ef,roughness:.6}),new jt({map:Yl,roughness:.7}),new jt({map:Yl,roughness:.7})],Ca=new Jn(vv,yv,La);Ca.instanceMatrix.setUsage(_a);Ca.frustumCulled=!1;Xi.add(Ca);var kn=Array.from({length:La},()=>({loc:"bank",pos:Rt.bankPos.clone(),tgt:Rt.bankPos.clone(),yaw:0,ty:0,rx:0,rz:0,vel:null,vis:!0})),Tf=Ie.a0+.3;function Mv(i,e){let t,n,s;if(i==="bank")t=wn((Ie.r0+Ie.r1)/2,Tf,Ie.h),n=wn(1,Tf).negate(),s=Math.atan2(n.x,n.z);else{let c=Rt.doors[i];t=c.center.clone().setY(Ie.h-.01),n=c.inward,s=c.pivot.rotation.y}let r=Je(n.z,0,-n.x),a=Math.floor(e/4),o=e%4,l=t.clone().addScaledVector(r,o%2?.15:-.15).addScaledVector(n,o<2?-.085:.085);return l.y+=.035+a*.064,[l,s]}function eh(){let i={bank:0,0:0,1:0,2:0,3:0};kn.forEach(e=>{if(e.loc==="pit"||e.loc==="gone"||e.loc==="fall")return;let[t,n]=Mv(e.loc,i[e.loc]++);e.tgt.copy(t),e.ty=n})}var It=i=>kn.filter(e=>e.loc===i).length;function Qi(i,e,t){let n=0;for(let s=La-1;s>=0&&n<t;s--)kn[s].loc===i&&(kn[s].loc=e,n++);return eh(),n}function ac(i){kn.forEach((e,t)=>{e.vis=t<i,e.loc=t<i?"bank":"gone",e.vel=null,e.rx=e.rz=0}),eh(),kn.forEach(e=>e.pos.copy(e.tgt))}function Uf(i){let e=Rt.doors[i];kn.forEach(t=>{t.loc===i&&(t.loc="fall",t.vel=Je((Math.random()-.5)*.4,-.5-Math.random()*1.2,(Math.random()-.5)*.4),t.spin=Je(Math.random()*4,Math.random()*3,Math.random()*4),t.restY=Rt.pitY+.04+Math.random()*.25,t.door=i)})}var or=new ut,Ta=new Zt,tc=new fn,Ff=Je(1,1,1),Of=Je(0,0,0);function Sv(i){kn.forEach((e,t)=>{if(e.loc==="fall")e.vel.y-=9.8*i,e.pos.addScaledVector(e.vel,i),e.rx+=e.spin.x*i,e.rz+=e.spin.z*i,e.yaw+=e.spin.y*i,e.pos.y<e.restY&&(e.pos.y=e.restY,e.loc="pit",e.rx=(Math.random()-.5)*.6,e.rz=(Math.random()-.5)*.6);else if(e.loc!=="pit"&&e.loc!=="gone"){let s=e.tgt.clone().sub(e.pos).length();if(s>.002){let r=Math.min(1,i*9);e.pos.lerp(e.tgt,r),s>.3&&(e.pos.y+=i*2.2*Math.min(1,s))}e.yaw+=(e.ty-e.yaw)*Math.min(1,i*8),e.rx*=.9,e.rz*=.9}tc.set(e.rx,e.yaw,e.rz,"YXZ"),Ta.setFromEuler(tc),or.compose(e.pos,Ta,e.vis&&e.loc!=="gone"?Ff:Of),Ca.setMatrixAt(t,or)}),Ca.instanceMatrix.needsUpdate=!0}var Bf=350,hr=new Jn(new Zn(.09,.05),new Et({side:Qt}),Bf);hr.frustumCulled=!1;Xi.add(hr);var zf=Array.from({length:Bf},(i,e)=>(hr.setColorAt(e,new Ge().setHSL(Math.random()<.5?.12:Math.random(),.9,.6)),{p:Je(0,-50,0),v:Je(),r:Je(Math.random()*6,Math.random()*6,Math.random()*6),a:0}));function kf(){zf.forEach(i=>{i.p.set((Math.random()-.5)*12,9+Math.random()*4,(Math.random()-.5)*12),i.v.set((Math.random()-.5)*.6,-1-Math.random()*1.2,(Math.random()-.5)*.6)})}function bv(i){zf.forEach((e,t)=>{if(e.p.y<-1){or.compose(e.p,Ta.identity(),Of),hr.setMatrixAt(t,or);return}e.p.addScaledVector(e.v,i),e.p.x+=Math.sin(si*2+t)*i*.4,tc.set(si*e.r.x,si*e.r.y,si*e.r.z),Ta.setFromEuler(tc),or.compose(e.p,Ta,Ff),hr.setMatrixAt(t,or)}),hr.instanceMatrix.needsUpdate=!0}var Ev=Rt.screenTex.userData.g,Bt=1280,Zl=512,$e={mode:"logo",sub:"",q:null,topics:null,time:null,info:null,hist:0};function Sa(i,e,t,n,s,r,a=4){let o=String(e).split(" "),l=[],c="";for(let h of o){let d=c?c+" "+h:h;i.measureText(d).width>s&&c?(l.push(c),c=h):c=d}c&&l.push(c);let u=l.slice(0,a),f=n-(u.length-1)*r/2;return u.forEach((h,d)=>i.fillText(h,t,f+d*r)),u.length}function Ql(i){let e=i.createLinearGradient(0,0,0,Zl);e.addColorStop(0,"#3a0a5a"),e.addColorStop(1,"#12021e"),i.fillStyle=e,i.fillRect(0,0,Bt,Zl),i.strokeStyle="rgba(255,255,255,.05)";for(let t=0;t<Bt;t+=40)i.beginPath(),i.moveTo(t,0),i.lineTo(t,Zl),i.stroke()}function th(){let i=Ev;if(i.save(),i.textAlign="center",i.textBaseline="middle",$e.mode==="logo")Hu(i,0,0,Bt,Zl,{sub:$e.sub,t:si});else if($e.mode==="topics")Ql(i),i.fillStyle="#ffd34d",i.font="900 54px Arial",i.fillText(Le("topicT").toUpperCase(),Bt/2,90),$e.topics.forEach((e,t)=>{let n=Bt/2+(t?270:-270);i.fillStyle=t===$e.topicSel?"#ffd34d":"#ff2a6a",Xu(i,n-240,190,480,180,30),i.fill(),i.fillStyle=t===$e.topicSel?"#3a1a00":"#fff",i.font="900 52px Arial",Sa(i,e.toUpperCase(),n,280,440,56,2)});else if($e.mode==="question"&&$e.q){Ql(i);let e=$e.q;i.fillStyle="rgba(0,0,0,.35)",Xu(i,150,30,Bt-300,190,24),i.fill(),i.fillStyle="#fff",i.font="bold 46px Arial",Sa(i,e.text,Bt/2,125,Bt-360,52,3);let t=e.opts.length,n=Math.min(260,(Bt-260)/t-16);e.opts.forEach((s,r)=>{let a=Bt/2+(r-(t-1)/2)*(n+16),o=e.state?e.state[r]:null;i.fillStyle=o==="ok"?"#11a34a":o==="bad"?"#3a0a14":"#7a0a5a",Xu(i,a-n/2,250,n,150,18),i.fill(),i.strokeStyle="#e2c8ff",i.lineWidth=3,i.stroke(),i.fillStyle="#ffd34d",i.font="900 34px Arial",i.fillText(ju[r],a,278),i.fillStyle="#fff",i.font="bold 26px Arial",Sa(i,s,a,325,n-16,28,2),i.fillStyle="#ffd34d",i.font="900 30px Arial",i.fillText(e.amounts?zn(e.amounts[r]):"",a,378)}),i.font="900 40px Arial",i.fillStyle="#fff",i.fillText(`${Le("h_play")}: ${zn(e.total||0)}`,Bt/2-200,455),$e.time!==null&&(i.fillStyle=$e.time<=10?"#ff3a3a":"#ffd34d",i.beginPath(),i.arc(Bt/2+260,455,44,0,Math.PI*2),i.fill(),i.fillStyle="#1a0010",i.font="900 44px monospace",i.fillText(String(Math.ceil($e.time)),Bt/2+260,458))}else if($e.mode==="money")Ql(i),i.fillStyle="#fff",i.font="900 52px Arial",i.fillText($e.info[0],Bt/2,140),i.fillStyle="#ffd34d",i.font="900 150px Arial",i.fillText($e.info[1],Bt/2,300,Bt-200),$e.info[2]&&(i.fillStyle="#e2c8ff",i.font="bold 40px Arial",i.fillText($e.info[2],Bt/2,420));else if($e.mode==="hist"){Ql(i);let e=ql[Jt][$e.hist%ql[Jt].length];Hu(i,40,30,300,120,{bg:!1}),i.fillStyle="#ffd34d",i.font="900 56px Arial",i.fillText(e[0].toUpperCase(),Bt/2+120,90),i.fillStyle="#fff",i.font="bold 34px Arial",Sa(i,e[1],Bt/2,320,Bt-280,40,7)}i.restore(),Rt.screenTex.needsUpdate=!0}function Xu(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function nc(i){let e=Rt.doors[i],t=gr[i];for(let n of[e.texF,e.texB]){let s=n.userData.g,r=512,a=288,o=t.state==="ok"?["#18c45a","#04501e"]:t.state==="bad"?["#5a0a14","#200006"]:t.off?["#1a1a22","#08080c"]:["#a0207a","#3a0636"],l=s.createLinearGradient(0,0,0,a);l.addColorStop(0,o[0]),l.addColorStop(1,o[1]),s.fillStyle=l,s.fillRect(0,0,r,a),s.textAlign="center",s.textBaseline="middle",t.off?(s.strokeStyle="#ff2a4a",s.lineWidth=14,s.beginPath(),s.moveTo(170,60),s.lineTo(342,228),s.moveTo(342,60),s.lineTo(170,228),s.stroke()):(s.fillStyle="#fff",s.beginPath(),s.arc(52,52,36,0,Math.PI*2),s.fill(),s.fillStyle="#7a0040",s.font="900 46px Arial",s.fillText(ju[i],52,55),s.fillStyle="#fff",s.font="bold 40px Arial",Sa(s,t.text||"",270,105,400,44,3),s.fillStyle="#ffd34d",s.font="900 56px Arial",s.fillText(t.amount!=null?zn(t.amount):"",r/2,238)),n.needsUpdate=!0}e.mat.emissive.set(t.state==="ok"?4259712:t.state==="bad"?16719936:t.off?1052688:16771316),e.mat.emissiveIntensity=t.off?.1:.9}var gr=[0,1,2,3].map(()=>({text:"",amount:null,state:null,off:!0}));function hs(i){gr.forEach((e,t)=>{i(e,t),nc(t)})}hs(i=>{i.off=!0,i.state=null});var Qe={mode:"orbit",pos:Je(0,6,14),look:Je(0,1,0),tPos:Je(0,6,14),tLook:Je(0,1,0),yaw:0,pitch:.3,lerp:2.2};function Cn(i,e,t=!1,n=2.2){t=t||window.__snap,Qe.mode="show",Qe.tPos.copy(i),Qe.tLook.copy(e),Qe.lerp=n,t&&(Qe.pos.copy(i),Qe.look.copy(e))}var ft={wide:()=>Cn(Je(0,5.2,10.5),Je(0,2.2,-3)),overview:()=>Cn(Je(6.5,7.5,11),Je(0,1.8,-2.5)),desk:()=>Cn(Je(0,3.05,-2.35),Je(0,.8,2.7)),front:()=>Cn(Je(0,2.3,5.8),Je(0,1.2,-.5)),pair:()=>Cn(Je(.2,1.75,1.35),Je(0,1.45,-.55)),pairOne:i=>{let e=zt[i].position;Cn(Je(e.x*1.4,1.7,.75),Je(e.x,1.55,e.z))},host:()=>Cn(mr.clone().add(Je(1.7,1.7,1.6)),mr.clone().add(Je(0,1.5,0))),screen:()=>Cn(Je(0,4.2,1.5),Je(0,6.3,-9)),door:i=>{let e=Rt.doors[i];Cn(e.center.clone().addScaledVector(e.inward,1.15).add(Je(0,1.55,0)),e.center.clone().add(Je(0,-.4,0)))},pit:i=>{let e=Rt.doors[i];Cn(e.center.clone().addScaledVector(e.inward,.5).add(Je(0,2.4,0)),e.center.clone().add(Je(0,-3,0)).addScaledVector(e.inward,-.1),!1,3)},comps:(i=0)=>{let e=vi[i].position,t=Math.atan2(-e.z,e.x);Cn(wn(5.2,t+(i?-.25:.25),2.9),e.clone().add(Je(0,1.2,0)))},aud:()=>Cn(Je(0,2.4,1),Je(0,3,-9))},Af=["wide","desk","front","overview","pair","screen"],Yu=0;Fe("#tbCam").onclick=()=>{Qe.mode==="walk"&&vr(!1),Yu=(Yu+1)%Af.length,ft[Af[Yu]]()};var yi={x:0,y:0,keys:{}},ii=null,Dt=null,Jl=null;Ji.domElement.addEventListener("pointerdown",i=>{ii={id:i.pointerId,x:i.clientX,y:i.clientY}});addEventListener("pointermove",i=>{if(!ii||ii.id!==i.pointerId)return;let e=i.clientX-ii.x,t=i.clientY-ii.y;ii.x=i.clientX,ii.y=i.clientY,Qe.yaw-=e*.006,Qe.pitch=Math.max(-.3,Math.min(1.1,Qe.pitch+t*.004))});addEventListener("pointerup",i=>{ii&&ii.id===i.pointerId&&(ii=null)});var _r=Fe("#joy"),Hf=Fe("#knob"),ic=null;_r.addEventListener("pointerdown",i=>{ic=i.pointerId,_r.setPointerCapture(i.pointerId),Gf(i),i.stopPropagation()});_r.addEventListener("pointermove",i=>{i.pointerId===ic&&Gf(i)});var Vf=i=>{i.pointerId===ic&&(ic=null,yi.x=yi.y=0,Hf.style.transform="")};_r.addEventListener("pointerup",Vf);_r.addEventListener("pointercancel",Vf);function Gf(i){let e=_r.getBoundingClientRect(),t=i.clientX-(e.left+e.width/2),n=i.clientY-(e.top+e.height/2),s=Math.hypot(t,n),r=e.width/2-10;s>r&&(t*=r/s,n*=r/s),Hf.style.transform=`translate(${t}px,${n}px)`,yi.x=t/r,yi.y=n/r}addEventListener("keydown",i=>{yi.keys[i.code]=!0,Iv(i)});addEventListener("keyup",i=>{yi.keys[i.code]=!1});var Tv=matchMedia("(pointer:coarse)").matches;function vr(i){i?(Dt=zt[0],Jl={pos:Dt.position.clone(),rot:Dt.rotation.y,cam:Qe.mode},Dt.position.set(0,0,5.6),Qe.mode="walk",Qe.yaw=0,Qe.pitch=.25,Fe("#joy").classList.toggle("hidden",!Tv),fs(Le("walkHint"),3500,"")):(Dt&&Jl&&(Dt.position.copy(Jl.pos),Dt.rotation.y=Jl.rot),Dt=null,Fe("#joy").classList.add("hidden"),ft.wide())}Fe("#tbWalk").onclick=()=>vr(Qe.mode!=="walk");var jl=Fe("#sub"),wf=0;function fs(i,e,t=Le("host")){jl.innerHTML=t?`<b>${t}:</b> ${i}`:i,jl.classList.remove("hidden"),clearTimeout(wf),wf=setTimeout(()=>jl.classList.add("hidden"),e*rc)}var xr=i=>Math.max(1400,i.length*60);async function mt(i,e=""){let t=yf[i];if(!t)return;let n=t[qi()]+e;ds=Kt,fs(n,xr(n)+800),await Ze.voice(Jt==="es"?"h_"+i:null,xr(n)),ds=null}async function Ra(i,e,t){ds=i,fs(e,xr(e)+600,i.userData.name||""),await Ze.voice(Jt==="es"?t:null,xr(e)),ds=null}var xi=i=>{i==="cheer"?(ar.react("cheer",4),Ze.play("cheer",{volume:.7})):i==="clap"?(ar.react("clap",3),Ze.play("aplausos",{volume:.6})):i==="ooh"?(ar.react("ooh",2),Ze.play("ooh",{volume:.8})):i==="laugh"&&(ar.react("laugh",2.5),Ze.play("risas",{volume:.5}))},Av=new ra,si=0,Qu=0,ib=Je(0,0,0);function Wf(){let i=Math.min(.05,Av.getDelta());si+=i;let e=!1;if(Qe.mode==="walk"&&Dt){let t=yi.x,n=yi.y,s=yi.keys;(s.KeyW||s.ArrowUp)&&(n-=1),(s.KeyS||s.ArrowDown)&&(n+=1),(s.KeyA||s.ArrowLeft)&&(t-=1),(s.KeyD||s.ArrowRight)&&(t+=1);let r=Math.hypot(t,n);if(r>.1){let o=3.4*Math.min(1,r)*i/r,l=-Math.sin(Qe.yaw),c=-Math.cos(Qe.yaw),u=Math.cos(Qe.yaw),f=-Math.sin(Qe.yaw),h=(l*-n+u*t)*o,d=(c*-n+f*t)*o,_=Dt.position.x+h,y=Dt.position.z+d;Gl(Rt,_,y)?Gl(Rt,_,Dt.position.z)?Gl(Rt,Dt.position.x,y)||(Dt.position.z=y):Dt.position.x=_:(Dt.position.x=_,Dt.position.z=y),Dt.rotation.y=Math.atan2(h,d),e=!0}let a=4*Math.cos(Qe.pitch*.6);Qe.tPos.set(Dt.position.x+Math.sin(Qe.yaw)*a,1.7+Qe.pitch*2.6,Dt.position.z+Math.cos(Qe.yaw)*a),Qe.tLook.set(Dt.position.x,1.4,Dt.position.z),Qe.pos.lerp(Qe.tPos,Math.min(1,i*10)),Qe.look.lerp(Qe.tLook,Math.min(1,i*10))}else if(Qe.mode==="orbit"){let t=si*.07;Qe.pos.set(Math.sin(t)*12.5,5.6+Math.sin(si*.2),Math.cos(t)*12.5+1),Qe.look.set(0,2,-1)}else if(Qe.mode==="path"&&Qe.path){let t=Qe.path;t.t+=i/t.dur;let n=Math.min(1,t.t),s=n*n*(3-2*n);Qe.pos.copy(t.from).lerp(t.to,s),Qe.look.copy(t.lfrom).lerp(t.lto,s),n>=1&&(Qe.mode="show",Qe.tPos.copy(t.to),Qe.tLook.copy(t.lto),t.res())}else Qe.pos.lerp(Qe.tPos,Math.min(1,i*Qe.lerp)),Qe.look.lerp(Qe.tLook,Math.min(1,i*Qe.lerp));cr.position.copy(Qe.pos),cr.lookAt(Qe.look);for(let[t,n]of ur){let s=n.to.clone().sub(t.position);s.y=0;let r=s.length();if(r<.05){t.position.x=n.to.x,t.position.z=n.to.z,ur.delete(t),n.res();continue}s.normalize(),t.position.addScaledVector(s,Math.min(r,n.speed*i)),t.rotation.y=Math.atan2(s.x,s.z)}[Kt,...zt,...vi].forEach(t=>{ff(t,i,ur.has(t)||t===Dt&&e,ds===t),t.userData.sink!==void 0&&(t.position.y+=((t.userData.sink||0)-t.position.y)*Math.min(1,i*2))}),mf(Rt,i),Sv(i),bv(i),Rt.ledTex.offset.y=(Rt.ledTex.offset.y+i*.08)%1,Rt.bulbs.material.color.setHSL(.1,.6,.55+.25*Math.sin(si*3)),ar.update(i),un.update(i),Qu+=i,Qu>($e.mode==="logo"?.1:.25)&&(Qu=0,th()),Ji.render(Xi,cr),requestAnimationFrame(Wf)}function Cf(i,e,t,n,s){return new Promise(r=>{Qe.mode="path",Qe.path={from:i,to:e,lfrom:t,lto:n,dur:s*rc,t:0,res:r}})}var ps=0,wv={abort:!0},Ut=i=>{if(i!==ps)throw wv},Mi=Fe("#overlay");function oc(i){return Mi.innerHTML=i,Mi.classList.remove("hidden"),Mi}function ms(){Mi.classList.add("hidden"),Mi.innerHTML=""}function ba(i){return oc(i),new Promise(e=>Mi.querySelectorAll("[data-z]").forEach(t=>t.addEventListener("click",()=>{ms(),e(t.dataset.z)},{once:!0})))}var $u=!1;Fe("#skip").onclick=()=>{$u=!0,Ze.stopVoice()};var ai=i=>{["#menu","#langsel"].forEach(e=>Fe(e).classList.add("hidden")),i&&Fe(i).classList.remove("hidden")};function sc(i){Fe("#hud").classList.toggle("hidden",!i)}function ri(){ps++,Ze.stopAll(),ms(),Fe("#split").classList.add("hidden"),sc(!1),jl.classList.add("hidden"),Fe("#skip").classList.add("hidden"),Qe.mode==="walk"&&vr(!1),Qe.mode="orbit",$e.mode="logo",$e.sub="",un.event("menu"),ac(40),Rt.doors.forEach(i=>i.target=0),hs(i=>{i.off=!0,i.state=null}),wa(),Fe("#topBtns").classList.add("hidden"),Df(),ai("#menu"),Ze.music("abertura",!0)}Fe("#tbHome").onclick=ri;Fe("#tbLights").onclick=()=>Fe("#glights").classList.toggle("hidden");Fe("#tbMute").onclick=()=>{Ze.setMuted(!Ze.muted),Fe("#tbMute").textContent=Ze.muted?"\u{1F507}":"\u{1F50A}"};location.protocol!=="https:"&&location.protocol!=="http:"&&(Fe("#dlLinks").style.display="none");Fe("#btnLang").onclick=()=>qf().then(ri);function qf(){return ai("#langsel"),new Promise(i=>Fe("#langsel").querySelectorAll("button").forEach(e=>e.onclick=()=>{Jt=e.dataset.l,localStorage.setItem("aum3d_lang",Jt),Df(),i()}))}var Kl=bf.pools,lr=new Set;function Cv(i){return Jt==="pt"?i.pt:i.es}function dr(i,e,{round:t=null,exclude:n=[]}={}){let s=Kl[i].filter(a=>!lr.has(a.id)&&!n.includes(a.id));if(t){let a=s.filter(o=>o.r===t);a.length&&(s=a)}let r=s.filter(a=>a.es[1].length===e);return r.length&&i==="general"?s=r:s=s.filter(a=>a.es[1].length>=e),s.length?Aa(s):(lr.clear(),dr(i,e,{round:t,exclude:n}))}function Zu(i,e){let[t,n]=Cv(i),s=n.map((r,a)=>a);if(n.length>e){let r=Lf(s.filter(a=>a!==i.c)).slice(0,e-1);s=s.filter(a=>a===i.c||r.includes(a))}return{id:i.id,text:t,opts:s.map(r=>n[r]),correct:s.indexOf(i.c),topic:i.t[qi()]}}function Rv(i,e,t){let n=dr(i,e,{round:t}),s=null;for(let r=0;r<30;r++){let a=dr(i,e,{round:t,exclude:[n.id]});if(a.t[0]!==n.t[0]||r>25){s=a;break}}return[n,s||dr(i,e,{round:t,exclude:[n.id]})]}var me={n:4,packVal:25e3,sel:0,allIn:!1,active:!1,time:60,elapsed:0,unlimited:!1,stopRes:null,starRes:null,starOn:!1,q:null},Da=()=>[0,1,2,3].map(i=>It(i));function Pv(i){if(i>=me.n||It("bank")===0)return!1;let e=Da();return me.allIn?e.every((n,s)=>s===i||n===0):e[i]>0?!0:e.slice(0,me.n).filter(n=>n>0).length<me.n-1}function fr(i,e=1){if(!me.active)return;let t=0;for(;t<e&&Pv(i);)Qi("bank",i,1),t++;!t&&It("bank")>0?Xf():t&&Ze.play("saltar",{volume:.4}),Yi()}function nh(i,e=1){if(!me.active)return;Qi(i,"bank",Math.min(e,It(i)))&&Ze.play("saltar",{volume:.3}),Yi()}function ih(i){if(!me.active||i>=me.n)return;for(let t=0;t<4;t++)t!==i&&Qi(t,"bank",It(t));let e=Da();if(!me.allIn&&e.slice(0,me.n).filter((t,n)=>t>0||n===i).length>me.n-1){Xf();return}Qi("bank",i,La),Ze.play("saltar",{volume:.4}),Yi()}var Rf=0;function Xf(){performance.now()-Rf<2500||(Rf=performance.now(),fs(me.allIn?Le("allInRule"):Le("emptyRule"),2200,""),Ze.play("icon",{volume:.6}),me.showHost&&Jt==="es"&&Ze.voice(me.allIn?"h_allIn":"h_empty"))}function Yf(){let i=Fe("#cols");i.innerHTML="";for(let e=0;e<me.n;e++){let t=document.createElement("div");t.className="col",t.dataset.i=e,t.innerHTML=`<div class="op"><i>${ju[e]}</i><span></span></div><div class="am"></div><div class="ar"><button data-a="dn">\u25BC</button><button data-a="up">\u25B2</button><button data-a="all" class="all">${Le("all")}</button></div>`,t.querySelector("span").textContent=me.q.opts[e],t.addEventListener("click",n=>{me.sel=e;let s=n.target.closest("[data-a]");if(s){let r=s.dataset.a;r==="up"?fr(e):r==="dn"?nh(e):ih(e)}Yi()}),i.appendChild(t)}Fe("#split").classList.remove("hidden"),Yi()}function Yi(){let i=Da();document.querySelectorAll("#cols .col").forEach((t,n)=>{t.querySelector(".am").textContent=zn(i[n]*me.packVal),t.classList.toggle("sel",n===me.sel)});let e=It("bank")*me.packVal;Fe("#hBank").textContent=zn(e),Fe("#hTotal").textContent=zn((It("bank")+i.reduce((t,n)=>t+n,0))*me.packVal),Fe("#hBankRow").style.visibility=e>0?"visible":"hidden",me.q&&(me.q.amounts=i.slice(0,me.n).map(t=>t*me.packVal),me.q.total=(It("bank")+i.reduce((t,n)=>t+n,0))*me.packVal),gr.forEach((t,n)=>{n<me.n&&(t.amount=i[n]*me.packVal,nc(n))}),Fe("#btnStop").disabled=!me.active||me.elapsed<10||It("bank")>0}function Iv(i){if(!me.active)return;let e=i.key;/^[1-4]$/.test(e)?(me.sel=+e-1,Yi()):e==="ArrowUp"||e==="+"?(fr(me.sel),i.preventDefault()):e==="ArrowDown"||e==="-"?(nh(me.sel),i.preventDefault()):e==="ArrowRight"?(me.sel=Math.min(me.n-1,me.sel+1),Yi()):e==="ArrowLeft"?(me.sel=Math.max(0,me.sel-1),Yi()):e==="Enter"&&!Fe("#btnStop").disabled&&Fe("#btnStop").click()}Fe("#btnStop").onclick=()=>{me.stopRes&&me.stopRes("stop")};Fe("#btnStar").onclick=()=>{me.stopRes&&me.starOn&&me.stopRes("star")};function Lv(){let i=me.q.correct;if(me.allIn){ih(Math.random()<.8?i:(i+1)%me.n);return}let e=(i+1)%me.n;fr(i,28),fr(e,12),It("bank")&&fr(i,40)}async function Pf(i,e,{voice:t=!0}={}){me.active=!0,me.elapsed=0,me.sel=0,me.time=e,Yf(),Fe("#timer").classList.toggle("off",!isFinite(e));let n=e>=60?"tempo60":"tempo30",s=isFinite(e)?Ze.music(n):null;s&&e<30&&(s.currentTime=Math.max(0,33-e)),s&&e>=60&&(s.currentTime=Math.max(0,64.5-e-1));let r=!1,a=!1,o=6+Math.random()*6,l=!1,c=await new Promise(u=>{me.stopRes=u;let f=performance.now(),h=()=>{if(i!==ps){u("abort");return}let d=performance.now(),_=(d-f)/1e3/rc;if(f=d,me.elapsed+=_,isFinite(me.time)&&(me.time-=_),Fe("#timer").textContent=isFinite(me.time)?Math.max(0,Math.ceil(me.time)):"\u221E",Fe("#timer").classList.toggle("low",me.time<=10),$e.time=isFinite(me.time)?Math.max(0,me.time):null,Fe("#btnStop").disabled=me.elapsed<10||It("bank")>0,me.showHost&&t){if(!r&&me.time<=30&&e>=45&&(r=!0,mt("t30")),!a&&me.time<=10&&e>10&&(a=!0,mt("t10")),o-=_,Ct.chat&&o<=0&&me.time>12){o=9+Math.random()*8;let y=Math.floor(Math.random()*Wu.length),p=Aa(zt.filter(m=>m.visible&&!m.userData.inPit));p&&Ra(p,(Jt==="pt"?Mf:Wu)[y],`c${y}${p.userData.voice}`)}Ct.jokes&&!l&&me.time<40&&me.time>22&&Math.random()<.004&&(l=!0,mt(Aa(["j1","j2","j3","j4","j5","j6","j7","j8"])).then(()=>xi("laugh")))}if(Wi&&me.elapsed>.5&&!me.botDone&&(me.botDone=!0,Lv()),Wi&&me.elapsed>10.5&&It("bank")===0){u("stop");return}if(isFinite(me.time)&&me.time<=0){u("time");return}requestAnimationFrame(h)};requestAnimationFrame(h)});return me.stopRes=null,me.active=!1,me.botDone=!1,s&&Ze.stopMusic(),$e.time=null,c}async function Bn(i){let e=++ps;ai(null),ms(),lr.clear(),wa(),Fe("#topBtns").classList.remove("hidden"),me.packVal=i.packVal,me.showHost=i.showHost,ac(i.packs||40),Rt.doors.forEach(l=>l.target=0),hs(l=>{l.off=!0,l.state=null,l.amount=null}),$e.mode="logo",$e.sub=i.sub||"",Ze.stopAll(),un.event("idle"),i.intro&&await Dv(e,i),Ut(e),!i.intro&&!i.train&&(ft.wide(),Ze.play("introCurto"),await Mn(1500)),sc(!0);let t=i.rounds.length,n=1,s=!1,r=i.rounds[0];for(let l=0;l<t;l++){Ut(e);let c=i.rounds[l];me.allIn=l===t-1&&!i.train&&i.allInLast!==!1;let u=i.train?i.trainTime:Ct.time===0?1/0:i.secs||Ct.time;if(i.time0&&(u=i.time0),Fe("#hq").innerHTML=i.train?`<b>${Le("trainT")}</b>`:`${Le("q")} <b>${l+1}</b> ${Le("of")} ${t}`,i.finChoice&&l===t-1){ft.host(),i.showHost&&await mt("finChoice"),Ut(e);let g=Wi?"classic":await ba(`<div class="txt">${Le("finT")}</div><div class="ovb"><button class="ov-btn" data-z="triple">${Le("triple")}<small>${Le("tripleS")}</small></button><button class="ov-btn" data-z="double">${Le("double")}<small>${Le("doubleS")}</small></button><button class="ov-btn" data-z="classic">${Le("classic")}<small>${Le("classicS")}</small></button></div>`);Ut(e),g==="triple"?(c=4,u=20,n=3,await mt("finTriple")):g==="double"?(c=3,u=10,n=2,await mt("finDouble")):(c=2,u=60,await mt("finClassic")),me.allIn=!0}else i.showHost&&c<r&&c===3?(ft.host(),await mt("round3")):i.showHost&&me.allIn&&(ft.host(),await mt("final"));r=c,me.n=c,Ut(e);let f=!1;if(i.solo&&l===5){f=!0,ft.wide(),await mt("solo"),Ut(e);let g=zt[1];g.userData.inPit=!0,await Ea(g,Je(.9,0,1.2)),g.userData.sink=-2.2,fs(Le("soloT"),2e3,""),Ze.play("trampilla"),await Mn(1500)}let[h,d]=Rv(i.pool,c,i.kind==="mini"?["1-3","1-3","1-3","4-6","4-6","4-6","7"][l]:null),_=h.t[qi()],y=d.t[qi()];$e.mode="topics",$e.topics=[_,y],$e.topicSel=-1,ft.screen(),i.showHost&&mt("topics"),Ze.play("categoria");let p=Wi?"0":await ba(`<div class="txt">${Le("topicT")}</div><div class="ovb"><button class="ov-btn" data-z="0">${_}</button><button class="ov-btn" data-z="1">${y}</button></div>`);Ut(e),Ze.stopVoice(),$e.topicSel=+p,Ze.play("categoria2"),await Mn(900);let m=p==="0"?h:d;lr.add(h.id),lr.add(d.id);let S=Zu(m,c);me.q=S;let w=async()=>{hs((g,b)=>{g.off=b>=c,g.state=null,g.text=b<c?S.opts[b]:"",g.amount=b<c?0:null}),$e.mode="question",$e.q=S,S.state=null,ft.desk(),Ze.play("pergunta"),i.showHost?await mt("p"+(l+1)):await Mn(800),Ut(e),ds=Kt,fs(S.text,xr(S.text)+1500,i.showHost?Le("host"):""),Ze.play("alternativas",{volume:.6}),await Ze.voice(Jt==="es"&&i.showHost?"q_"+S.id:null,xr(S.text)),ds=null,Ut(e)};await w(),i.showHost&&!i.train&&await mt("go"),Ut(e),me.starOn=i.star&&!me.starUsed&&l<t-1,Fe("#btnStar").classList.toggle("hidden",!me.starOn);let v=await Pf(e,u);if(Ut(e),v==="star"){me.starUsed=!0,Fe("#btnStar").classList.add("hidden"),me.starOn=!1,await mt("star");let g=dr(i.pool,c);lr.add(g.id),S=Zu(g,c),me.q=S,await w(),v=await Pf(e,u),Ut(e)}if(Fe("#split").classList.add("hidden"),v==="time"){Ze.play("tempoEsgotado"),i.showHost&&await mt("timeUp");let g=It("bank");g&&(i.showHost&&await mt("unplaced"),i.train||Qi("bank","gone",g))}else i.showHost&&(Ze.play("icon"),await mt(Aa(["stop","sure1","sure2","sure3"])));Ut(e);let T=Da().slice(0,c).reduce((g,b)=>g+b,0)*me.packVal,E=It(S.correct)*me.packVal;un.event("tension"),i.showHost&&(ft.host(),await mt("open")),Ut(e);let P=Lf([...Array(c).keys()].filter(g=>g!==S.correct));P.sort((g,b)=>It(g)-It(b));for(let g of P){Ut(e),ft.door(g),Ze.play("resp",{volume:.5}),await Mn(If?100:1800+Math.random()*1200),Ze.stopAll();let b=It(g);i.showHost&&b&&mt("open1"),Rt.doors[g].target=1,Ze.play("trampilla"),Ze.play("abrir",{volume:.6}),un.event("fall"),b?(ft.pit(g),await Mn(250),Uf(g),Ze.play("drop"),xi("ooh"),zt.forEach(C=>C.userData.mood="sad")):xi("clap"),gr[g].state="bad",nc(g),$e.q.state=$e.q.opts.map((C,I)=>I===g?"bad":$e.q.state?$e.q.state[I]:null),await Mn(b?2600:1200),zt.forEach(C=>C.userData.mood=null),Rt.doors[g].target=0}if(Ut(e),un.event("release"),gr[S.correct].state="ok",nc(S.correct),$e.q.state=$e.q.opts.map((g,b)=>b===S.correct?"ok":"bad"),document.querySelectorAll("#cols .col").forEach((g,b)=>g.classList.add(b===S.correct?"correct":"wrong")),i.train)return ft.door(S.correct),un.event("correct"),Ze.play(E?"venceRodada":"perde"),(Wi?"menu":await ba(`<div class="txt">${Le(E?"safe":"lost")}</div><div class="sub2">${Le("wouldKeep")}: <b>${zn(E)}</b> / ${zn(T)}</div><div class="ovb"><button class="ov-btn" data-z="again">${Le("next")}</button><button class="ov-btn alt" data-z="menu">${Le("menu")}</button></div>`))==="again"?Bn(i):ri();if(ft.door(S.correct),E>0){if(un.event("correct"),Ze.play("venceRodada",{volume:.8}),xi("cheer"),zt.forEach(g=>g.userData.mood="cheer"),i.showHost?await mt(E===T&&P.length?"safeAll":"safe"):await Mn(2500),Ct.chat&&i.showHost&&Math.random()<.6){let g=Aa(zt.filter(b=>!b.userData.inPit));await Ra(g,qu.yes[qi()],"r_yes"+g.userData.voice)}zt.forEach(g=>g.userData.mood=null),i.showHost&&E<T&&await mt("lostSome")}else s=!0;if(Ut(e),f){let g=zt[1];if(E<T&&It("pit")>0){await mt("soloBack");let b=kn.find(C=>C.loc==="pit");b.loc="bank",b.rx=b.rz=0,eh(),Ze.play("fairydust"),xi("clap"),await Mn(800)}g.userData.sink=0,await Mn(1200),g.userData.inPit=!1,await Ea(g,Ku[1]),g.rotation.y=0,It(S.correct)===0&&It("bank")>0&&(s=!1)}if(s)break;Qi(S.correct,"bank",La),hs(g=>{g.state=null,g.amount=null,g.off=!0}),$e.mode="money",$e.info=[Le("h_play"),zn(It("bank")*me.packVal),`${Le("q")} ${l+1} / ${t}`],ft.screen(),await Mn(2200)}Ut(e),sc(!1),Fe("#split").classList.add("hidden");let a=It("bank")*me.packVal*(s?0:n);s||a===0?($e.mode="money",$e.info=[Le("gameOver"),"0 \u20AC",""],Ze.play("perde"),ft.pair(),zt.forEach(l=>l.userData.mood="sad"),un.event("fall"),i.showHost&&(await mt("lostAll"),Ct.chat&&await Ra(zt[0],qu.no[qi()],"r_no"+zt[0].userData.voice))):($e.mode="money",$e.info=[Le("youWin"),zn(a),n>1?`\xD7${n}`:""],Ze.play("vence"),kf(),un.event("win"),xi("cheer"),zt.forEach(l=>l.userData.mood="cheer"),ft.screen(),await Mn(2500),ft.pair(),i.showHost&&await mt("win")),Ut(e),i.showHost&&(ft.wide(),await mt("outro"));let o=Wi?"menu":await ba(`<div class="txt">${a?Le("youWin")+" "+zn(a):Le("gameOver")}</div><div class="ovb"><button class="ov-btn" data-z="again">${Le("again")}</button><button class="ov-btn alt" data-z="menu">${Le("menu")}</button></div>`);if(window.__lastResult={final:a,lostAll:s},o==="again")return Bn(i);ri()}async function Dv(i,e){$u=!1,Fe("#skip").classList.remove("hidden"),Ze.music("abertura"),un.event("intro");let t=[async()=>{await Cf(Je(0,12,16),Je(0,7.5,6),Je(0,4,-6),Je(0,6.4,-9),4.5)},async()=>{xi("cheer"),await Cf(Je(-9,4.5,3),Je(-4,2.6,4.5),Je(0,2.5,-9),Je(0,1.2,0),4)},async()=>{Kt.position.set(0,0,6.5),ft.front(),Ze.play("aplausos"),ar.react("clap",5),await Ea(Kt,Je(-1.6,0,2.6))},async()=>{ft.host(),$l(Kt,Je(0,1,6)),await mt("intro1")},async()=>{ft.overview(),await mt(e.introLine||"intro2"),e.special&&(ft.screen(),await mt(e.special))},async()=>{Ea(Kt,Je(-3.9,0,1.2)).then(()=>Ea(Kt,mr)),ft.pair(),await mt("pair"),xi("clap")},async()=>{for(let n=0;n<2;n++)ft.pairOne(n),await Ra(zt[n],Ma[ec][4+n],`pa${ec}${n?"b":"a"}`)},async()=>{ft.comps(0),vi.forEach(n=>n.userData.mood="cheer"),await mt("comp"),xi("cheer"),ft.comps(1),Ct.chat?await Ra(vi[1],Sf[qi()],"cheerF"):await Mn(1500),vi.forEach(n=>n.userData.mood=null)},async()=>{ft.host(),$l(Kt,Je(0,0,0)),await mt("rules")},async()=>{ft.door(1),await mt("money")}];for(let n of t){if($u)break;Ut(i),await n()}Ut(i),Fe("#skip").classList.add("hidden"),Ze.stopVoice(),Ze.stopMusic(),ur.clear(),Kt.position.copy(mr),$l(Kt,Je(0,0,-.3)),vi.forEach(n=>n.userData.mood=null),un.event("idle")}var Pa={mini:()=>{Nv().then(i=>i&&Bn({kind:"mini",pool:"general",rounds:[4,4,4,3,3,3,2],packVal:25e3,showHost:!1,sub:""}))},tv:()=>Bn({kind:"tv",pool:"general",rounds:[4,4,4,4,3,3,3,2],packVal:25e3,showHost:!0,intro:!0}),espTele:()=>Bn({kind:"esp",pool:"tele",rounds:[4,4,4,4,3,3,3,2],packVal:25e3,showHost:!0,intro:!0,special:"introTele",sub:"PRIME TIME"}),espDiario:()=>Bn({kind:"esp",pool:"general",rounds:[4,4,4,4,3,3,3,2],packVal:5e3,showHost:!0,intro:!0,introLine:"intro2d",star:!0,solo:!0,finChoice:!0,sub:"DIARIO"}),espAniv:()=>Bn({kind:"esp",pool:"aniv",rounds:[4,4,4,4,3,3,3,2],packVal:25e3,showHost:!0,intro:!0,special:"introAniv",sub:"ANIVERSARIO"}),espDos:()=>Bn({kind:"esp",pool:"tele",poolMix:!0,rounds:[4,4,4,4,3,3,3,2],packVal:5e4,showHost:!0,intro:!0,introLine:"intro2x",sub:"DOS MILLONES"}),entreno:()=>Uv(),historia:()=>Fv(),walk:()=>{ai(null),ps++,Fe("#topBtns").classList.remove("hidden"),$e.mode="logo",vr(!0)}};Kl.mezcla=Kl.general.filter(i=>i.r!=="7").concat(Kl.tele);Pa.espDos=()=>Bn({kind:"esp",pool:"mezcla",rounds:[4,4,4,4,3,3,3,2],packVal:5e4,showHost:!0,intro:!0,introLine:"intro2x",sub:"DOS MILLONES"});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Ze.stopMusic();let e=Pa[i.dataset.mode];e&&e()});async function Nv(){return ai(null),ft.wide(),(Wi?"go":await ba(`<div class="panel"><h3>${Le("rulesT")} \xB7 ${Le("minT")}</h3>${Le("rules").map(e=>`<div class="hcard">${e}</div>`).join("")}<div class="sub2">${Le("minS")}</div></div><div class="ovb"><button class="ov-btn" data-z="go">${Le("start")}</button><button class="ov-btn alt" data-z="back">${Le("back")}</button></div>`))!=="go"?(ri(),!1):!0}async function Uv(){ai(null),ft.desk(),oc(`<div class="panel"><h3>${Le("trainT")}</h3><div>${Le("trainS")}</div>
  <label>${Le("pool")}: <select id="trPool"><option value="general">${Le("p_general")}</option><option value="tele">${Le("p_tele")}</option><option value="aniv">${Le("p_aniv")}</option></select></label>
  <label><input type="checkbox" id="trUnl"> ${Le("unlimited")}</label></div>
  <div class="ovb"><button class="ov-btn" data-n="4">4 ${Le("opts")}</button><button class="ov-btn" data-n="3">3 ${Le("opts")}</button><button class="ov-btn" data-n="2">2 ${Le("opts")}</button><button class="ov-btn alt" data-n="0">${Le("back")}</button></div>`),Mi.querySelectorAll("[data-n]").forEach(i=>i.onclick=()=>{let e=+i.dataset.n,t=Fe("#trPool").value,n=Fe("#trUnl").checked;if(ms(),!e)return ri();Bn({kind:"train",pool:t,rounds:[e],packVal:25e3,showHost:!1,train:!0,trainTime:n?1/0:60})})}function Fv(){ai(null),ps++,Fe("#topBtns").classList.remove("hidden"),$e.mode="hist",$e.hist=0,ft.screen();let i=ql[Jt];Jt==="es"&&Ze.voice("h_hist"),oc(`<div class="panel"><h3>${Le("histT")}</h3>${i.map(t=>`<div class="hcard"><b>${t[0]}</b><br>${t[1]}</div>`).join("")}</div><div class="ovb"><button class="ov-btn" data-z="walk">${Le("histWalk")}</button><button class="ov-btn alt" data-z="menu">${Le("back")}</button></div>`);let e=setInterval(()=>{if($e.mode!=="hist"){clearInterval(e);return}$e.hist++},7e3);Mi.querySelectorAll("[data-z]").forEach(t=>t.onclick=()=>{ms(),t.dataset.z==="walk"?vr(!0):(clearInterval(e),ri())})}Fe("#btnCustom").onclick=()=>{ai(null),ft.pair(),oc(`<div class="panel"><h3>${Le("custT")}</h3>
  <label>${Le("c_pair")}: <select id="cPair"><option value="-1">${Le("c_random")}</option>${Ma.map((i,e)=>`<option value="${e}" ${Ct.pair===e?"selected":""}>${i[0]} y ${i[2]} (${i[6+qi()]})</option>`).join("")}</select></label>
  <label>${Le("c_nameA")}: <input type="text" id="cNA" maxlength="14" value="${Ct.nameA}"></label>
  <label>${Le("c_nameB")}: <input type="text" id="cNB" maxlength="14" value="${Ct.nameB}"></label>
  <label>${Le("c_time")}: <select id="cTime">${[[60,"60 s"],[90,"90 s"],[30,"30 s"],[0,"\u221E"]].map(([i,e])=>`<option value="${i}" ${Ct.time===i?"selected":""}>${e}</option>`).join("")}</select></label>
  <label><input type="checkbox" id="cVoice" ${Ze.voiceOn?"checked":""}> ${Le("c_voice")}</label>
  <label><input type="checkbox" id="cChat" ${Ct.chat?"checked":""}> ${Le("c_chat")}</label>
  <label><input type="checkbox" id="cJokes" ${Ct.jokes?"checked":""}> ${Le("c_jokes")}</label>
  <label>${Le("c_music")}: <input type="range" id="cMus" min="0" max="100" value="${Math.round(Ze.musicVol*100)}"></label>
  <label><input type="checkbox" id="cLow" ${Ct.low?"checked":""}> ${Le("c_low")}</label></div>
  <div class="ovb"><button class="ov-btn" data-z="save">${Le("c_save")}</button><button class="ov-btn alt" data-z="back">${Le("back")}</button></div>`),Fe("#cPair").onchange=()=>{let i=+Fe("#cPair").value;i>=0&&(Ju(i),wa())},Mi.querySelectorAll("[data-z]").forEach(i=>i.onclick=()=>{if(i.dataset.z==="save"){let e=Ct.low;if(Object.assign(Ct,{pair:+Fe("#cPair").value,nameA:Fe("#cNA").value.trim(),nameB:Fe("#cNB").value.trim(),time:+Fe("#cTime").value,chat:Fe("#cChat").checked,jokes:Fe("#cJokes").checked,low:Fe("#cLow").checked}),Ze.setVoice(Fe("#cVoice").checked),Ze.setMusicVol(Fe("#cMus").value/100),_v(),Ju(Ct.pair>=0?Ct.pair:ec),wa(),e!==Ct.low){location.reload();return}}ms(),ri()})};function Ov(i=[24,0,16,0],e="general",t=4){ps++,ai(null),ms();let n=dr(e,t),s=Zu(n,t);return me.q=s,me.n=t,me.packVal=25e3,ac(40),i.forEach((r,a)=>Qi("bank",a,r)),kn.forEach(r=>r.pos.copy(r.tgt)),hs((r,a)=>{r.off=a>=t,r.state=null,r.text=a<t?s.opts[a]:"",r.amount=a<t?It(a)*25e3:null}),$e.mode="question",$e.q=s,s.amounts=i.slice(0,t).map(r=>r*25e3),s.total=1e6,$e.time=37,sc(!0),Fe("#hq").innerHTML=`${Le("q")} <b>1</b> ${Le("of")} 8`,me.active=!0,Yf(),me.active=!1,s}window.__aum={addTo:fr,takeFrom:nh,allTo:ih,placed:Da,demo:Ov,sub:fs,say:mt,confetti:kf,S:Rt,cam:Qe,views:ft,G:me,playGame:Bn,MODES:Pa,goMenu:ri,fajos:kn,count:It,setFajoCount:ac,moveFajos:Qi,dropDoor:Uf,Lg:un,scr:$e,drawScreen:th,mon:gr,setMonitors:hs,enterWalk:vr,pair:zt,host:Kt,comps:vi,get T(){return si}};requestAnimationFrame(Wf);th();setTimeout(async()=>{Fe("#loading").classList.add("hidden"),!localStorage.getItem("aum3d_lang")&&!Wi&&!/[?&]shot=1/.test(pr)&&await qf(),ri();let i=pr.match(/[?&]mode=(\w+)/);i&&Pa[i[1]]&&(ai(null),Pa[i[1]]())},300);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
