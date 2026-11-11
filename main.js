const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$('.burger').onclick=()=>$('nav').classList.toggle('open');
const cv=$('#sparks');
if(cv){const c=cv.getContext('2d');let W,H,P=[],m={x:.7,y:.5,on:false};
const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight};rs();addEventListener('resize',rs);
const hero=$('#hero');hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top;m.on=true;burst(4)});
function burst(n){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=1+Math.random()*4;P.push({x:m.x,y:m.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1.5,l:1})}}
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function loop(){c.clearRect(0,0,W,H);if(!m.on&&!reduce&&Math.random()<.15){m.x=W*.7+Math.random()*60;m.y=H*.55;burst(2)}
P=P.filter(p=>p.l>0);for(const p of P){p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.l-=.02;c.fillStyle=`rgba(255,${150+p.l*90|0},${40+p.l*60|0},${p.l})`;c.fillRect(p.x,p.y,2.5,2.5)}requestAnimationFrame(loop)})()}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const t=+e.target.dataset.n,t0=performance.now();
(function f(n){const p=Math.min((n-t0)/1400,1);e.target.textContent=Math.round(t*(1-Math.pow(1-p,3))).toLocaleString('es');if(p<1)requestAnimationFrame(f)})(t0)}));
$$('[data-n]').forEach(n=>io.observe(n));
$$('.thumb').forEach(b=>b.onclick=()=>{b.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0" allow="autoplay;encrypted-media;fullscreen" allowfullscreen title="Video"></iframe>`;b.onclick=null});
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.toggle('on',x===b));$$('.vcard').forEach(v=>v.hidden=b.dataset.f!=='all'&&v.dataset.cat!==b.dataset.f)});
$$('.flip').forEach(f=>f.onclick=()=>f.classList.toggle('open'));
const cks=$$('.check input');if(cks.length)cks.forEach(k=>k.onchange=()=>{const n=cks.filter(x=>x.checked).length;$('#prog').style.width=n/cks.length*100+'%';$('#plab').textContent=n===cks.length?'¡Listo para soldar con seguridad!':`${n} de ${cks.length} reglas`});
