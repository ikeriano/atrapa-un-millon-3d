/* 1.6: animación ligera del plató (sólo uniformes/transformaciones, sin crear materiales ni luces). */
(()=>{'use strict';
function init(){const A=window.__aum;if(!A||!A.S||!A.S.scene)return setTimeout(init,500);
 const S=A.S,Q=window.__quality||{},lig=Q.level==='ligero',low=Q.level==='media'||lig;
 if(low){if(S.reflector)S.reflector.visible=false}
 const spots=[];S.scene.traverse(o=>{if(o.isSpotLight)spots.push({l:o,x:o.target.position.x,z:o.target.position.z,c:o.color.clone(),h:Math.random()})});
 const base=m=>m&&m.color?m.color.clone():null;const led0=base(S.ledMat),glow0=base(S.screenGlow),edge0=base(S.edgeMat);
 const host=A.host,hb=host&&host.children[0]?host.children[0].position.y:0;
 let cheer=0,drift=null,prevD={x:0,y:0},fall=[];
 // reacciones
 const wrap=(k,f)=>{const o=A[k];if(typeof o!='function')return;A[k]=function(){try{f.apply(null,arguments)}catch(e){}return o.apply(this,arguments)}};
 wrap('dropDoor',i=>{cheer=Math.max(cheer,.6);suelta(i)});wrap('confetti',()=>{cheer=2.5});
 function suelta(i){const d=S.doors&&S.doors[i];if(d&&d.light&&d.light.isLight){fl.push({l:d.light,i0:d.light.intensity,t:0})}}
 let fl=[];
 let t0=performance.now(),last=t0,hostRot=0,audY=null;
 const aud=[];S.scene.traverse(o=>{if(o.isInstancedMesh&&o.count>=100)aud.push(o)});
 function f(now){requestAnimationFrame(f);if(document.hidden)return;const dt=Math.min(.05,(now-last)/1000);last=now;const t=(now-t0)/1000;
  if(!lig)spots.forEach((s,i)=>{s.l.target.position.x=s.x+Math.sin(t*.6+i*1.3)*1.6;s.l.target.position.z=s.z+Math.cos(t*.45+i)*1.1;
   s.l.color.copy(s.c).offsetHSL(Math.sin(t*.2+s.h*6)*.08,0,0)});
  if(led0)S.ledMat.color.copy(led0).offsetHSL((t*.05)%1,0,0);if(edge0)S.edgeMat.color.copy(edge0).offsetHSL(Math.sin(t*.3)*.1,0,Math.sin(t*2)*.05);
  if(glow0)S.screenGlow.color.copy(glow0).multiplyScalar(.85+.15*Math.sin(t*3));
  if(S.ring2)S.ring2.rotation.z+=dt*.15;if(S.glowDisc)S.glowDisc.material.opacity!==undefined&&(S.glowDisc.scale.setScalar(1+.03*Math.sin(t*2.2)));
  if(S.pitGlow)S.pitGlow.intensity=S.pitGlow.userData.i0===undefined?(S.pitGlow.userData.i0=S.pitGlow.intensity):S.pitGlow.userData.i0*(.8+.2*Math.sin(t*1.7));
  // presentador: respiración y balanceo
  if(!lig&&host&&host.children[0]){host.children[0].position.y=hb+Math.sin(t*1.6)*.012;const r=Math.sin(t*.5)*.06;host.children[0].rotation.y=r}
  // público: vaivén y salto al aplaudir
  cheer=Math.max(0,cheer-dt);const bob=.015*Math.sin(t*2)+(cheer>0?Math.abs(Math.sin(t*14))*.06*Math.min(1,cheer):0);
  if(!lig)aud.forEach(o=>{if(o.userData.y0===undefined)o.userData.y0=o.position.y;o.position.y=o.userData.y0+bob});
  // cámara: deriva suave cuando está quieta
  const C=A.cam;if(!lig&&C&&C.mode==='show'){const d={x:Math.sin(t*.23)*.25,y:Math.sin(t*.31)*.08};C.tPos.x+=d.x-prevD.x;C.tPos.y+=d.y-prevD.y;prevD=d}else prevD={x:0,y:0};
  fl.forEach(o=>{o.t+=dt;o.l.intensity=o.i0*(1+3*Math.max(0,1-o.t)*Math.abs(Math.sin(o.t*18)))});fl=fl.filter(o=>o.t<1.2||(o.l.intensity=o.i0,false));
  // (los fajos ya caen con la física del juego)
  for(let k=fall.length-1;k>=0;k--){const o=fall[k];o.t+=dt;o.v+=9.8*dt;o.m.position.y-=o.v*dt;o.m.rotation.x+=o.r*dt;o.m.rotation.z+=o.r*.7*dt;
   if(o.t>1.6){S.scene.remove(o.m);fall.splice(k,1)}}}
 requestAnimationFrame(f)}
document.readyState==='complete'?setTimeout(init,800):addEventListener('load',()=>setTimeout(init,800));
})();
