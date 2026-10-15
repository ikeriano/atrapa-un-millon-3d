/* 1.7: modo «Ultra ligero» (por defecto en móvil). Materiales básicos con luz horneada, 1-2 luces, sin sombras, reflejos ni posproceso. */
(()=>{'use strict';
const Q=window.__quality;if(!Q||Q.level!=='ligero')return;
document.documentElement.classList.add('ligero');
const st=document.createElement('style');st.textContent='html.ligero *,html.ligero *::before,html.ligero *::after{box-shadow:none!important;text-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;filter:none!important;animation-duration:0s!important}html.ligero .screen{background:rgba(8,2,12,.82)!important}html.ligero #app canvas{image-rendering:auto}';document.head.appendChild(st);
const A=window.__aum;if(!A||!A.S)return;const S=A.S,R=Q.renderer;
try{R.shadowMap.enabled=false}catch(e){}
if(window.__post)window.__post.enabled=false;
if(S.reflector)S.reflector.visible=false;
const Basic=S.edgeMat.constructor,L=[.35,.85,.4],ll=Math.hypot(...L);L.forEach((v,i)=>L[i]=v/ll);
const cache=new Map(),baked=new WeakSet();
function bake(g){if(baked.has(g)||!g.attributes||!g.attributes.normal||g.attributes.color)return;baked.add(g);
 const n=g.attributes.normal,c=new Float32Array(n.count*3);
 for(let i=0;i<n.count;i++){const d=n.getX(i)*L[0]+n.getY(i)*L[1]+n.getZ(i)*L[2];const k=.72+.45*Math.max(0,d)+.1*Math.max(0,n.getY(i));c[i*3]=c[i*3+1]=c[i*3+2]=Math.min(1.25,k)}
 g.setAttribute('color',new g.attributes.normal.constructor(c,3))}
const small=t=>{if(!t||t.__lig)return;t.__lig=1;const im=t.image;if(!im||im instanceof HTMLCanvasElement||t.isVideoTexture)return;const w=im.width||0,h=im.height||0;if(Math.max(w,h)<=512)return;
 try{const k=512/Math.max(w,h),cv=document.createElement('canvas');cv.width=Math.round(w*k);cv.height=Math.round(h*k);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);t.image=cv;t.needsUpdate=true}catch(e){}};
function conv(m,geo,inst){if(!m||m.isMeshBasicMaterial||m.isShaderMaterial||m.isRawShaderMaterial||m.isPointsMaterial||m.isLineBasicMaterial||m.isSpriteMaterial)return m;
 const key=m.uuid+(inst?'i':'');if(cache.has(key))return cache.get(key);
 const em=m.emissive&&(m.emissive.r+m.emissive.g+m.emissive.b)*(m.emissiveIntensity||1)>.15;
 const b=new Basic({map:m.map||m.emissiveMap||null,transparent:m.transparent,opacity:m.opacity,side:m.side,alphaTest:m.alphaTest,depthWrite:m.depthWrite,depthTest:m.depthTest,blending:m.blending,vertexColors:!em&&!m.vertexColors});
 if(m.color)b.color.copy(m.color);if(em){b.color.multiplyScalar(.4).add(m.emissive.clone().multiplyScalar(Math.min(1.5,m.emissiveIntensity||1)))}
 if(m.vertexColors)b.vertexColors=true;small(b.map);cache.set(key,b);pares.push([m,b,em]);return b}
const pares=[];function sync(){for(const[m,b,em] of pares){if(m.color){b.color.copy(m.color);if(em||(m.emissive&&(m.emissive.r+m.emissive.g+m.emissive.b)*(m.emissiveIntensity||1)>.15)){b.color.multiplyScalar(.4).add(m.emissive.clone().multiplyScalar(Math.min(1.5,m.emissiveIntensity||1)))}}b.opacity=m.opacity;b.visible=m.visible;if(m.map!==b.map&&m.map){b.map=m.map;b.needsUpdate=true}}}
setInterval(()=>{if(!document.hidden)sync()},66);
function pasa(){S.scene.traverse(o=>{if(o.isLight&&!o.isHemisphereLight&&o!==S.key){o.visible=false}
 if(o.isLight)o.castShadow=false;
 if(!o.isMesh||o.userData.__lig)return;o.userData.__lig=1;o.castShadow=o.receiveShadow=false;if(o.isSkinnedMesh)return;
 const mats=Array.isArray(o.material)?o.material:[o.material];const nm=mats.map(m=>conv(m,o.geometry,o.isInstancedMesh));
 if(nm.some(m=>m.vertexColors&&!(m.map&&false)))bake(o.geometry);
 o.material=Array.isArray(o.material)?nm:nm[0]})}
pasa();setInterval(pasa,2500);window.__ligero={pasa,cache};
})();
