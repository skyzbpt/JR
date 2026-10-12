<script>
/* ===================== 應用邏輯 ===================== */

/* ---------- SVG 圖示庫 ---------- */
const ICONS = {
 search:'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
 shield:'<path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z"/>',
 chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
 clapper:'<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
 sparkle:'<path d="M12 3l1.9 5.9 5.9 2.1-5.9 2.1L12 19l-1.9-5.9L4.2 11l5.9-2.1z"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
 route:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
 calcheck:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>',
 clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
 star:'<path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6L12 16.8l-5.4 2.8 1-6L3.3 9.4l6-.9z"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
 bulb:'<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
 warn:'<path d="M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
 share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>',
 menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
 close:'<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
 userplus:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
 home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
 hourglass:'<path d="M5 22h14M5 2h14"/><path d="M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22"/><path d="M7 2v4.2c0 .5.2 1 .6 1.4L12 12l4.4-4.4c.4-.4.6-.9.6-1.4V2"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-2.9 2.6-2.9 4"/><line x1="12" y1="17.5" x2="12.01" y2="17.5"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
 bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
 rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.18 2.18 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.5-3 2-4c1.6-1.1 5 0 5 0"/><path d="M12 15v5s3-.5 4-2c1.1-1.6 0-5 0-5"/>',
 refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 21H3v-5"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 up:'<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
 upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M5 21h14"/>',
 type:'<path d="M4 7V5h16v2"/><path d="M12 5v14"/><path d="M9 19h6"/>',
 arrow:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
 printer:'<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
};
function icon(name,cls){return '<svg class="ic'+(cls?" "+cls:"")+'" viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[name]||"")+'</svg>';}

const TABS = [
 {id:"search",  l:"搜尋",        ic:"search"},
 {id:"objections",l:"異議處理",  s:"異議", ic:"shield",   d:"常見異議＋JR 的回應與背後邏輯", n:()=>QA.filter(x=>x.type==="obj").length+" 題"},
 {id:"chat",    l:"JR 智囊",     ic:"chat",     d:"用對話方式提問，回答附出處"},
 {id:"script",  l:"劇本產生器",  s:"劇本", ic:"clapper",  d:"選情境，產出開場到收尾的劇本", n:()=>SCENARIOS.length+" 個情境"},
 {id:"stories", l:"金句故事",    ic:"sparkle",  d:"招牌比喻與故事，附使用時機", n:()=>STORIES.length+" 則"},
 {id:"browse",  l:"27 篇演講",   ic:"book",     d:"依主題瀏覽全部演講重點", n:()=>TRANSCRIPTS.length+" 篇"},
 {id:"sop",     l:"帶人 SOP",    ic:"route",    d:"從填滿漏斗到 ABC 深度複製", n:()=>SOP.length+" 步"},
 {id:"tracker", l:"90 天打卡",   s:"打卡", ic:"calcheck", d:"每日基本功，堆出瘋狂的 90 天"},
 {id:"quiz",    l:"主題測驗",    ic:"clipboard",d:"把每個主題講成一段話", n:()=>QUIZ.length+" 題"},
 {id:"fav",     l:"收藏",        ic:"star",     d:"收藏的內容，一鍵分享給夥伴"},
];
/* 手機底部導覽：最常用的四個 + 「更多」 */
const BNAV = ["search","objections","script","tracker"];

const $ = s=>document.querySelector(s);
const el = (tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store = {
  get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v;}catch(e){return d;}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
};
const finePointer = matchMedia("(hover:hover) and (pointer:fine)");
function toast(msg,act){
  const t=$("#toast"); t.textContent=msg;
  if(act){
    const b=el("button","toast-act",act.label); b.type="button";
    b.addEventListener("click",()=>{t.classList.remove("show","has-act");act.fn();});
    t.appendChild(b);
  }
  t.classList.toggle("has-act",!!act); t.classList.add("show");
  clearTimeout(toast._x); toast._x=setTimeout(()=>t.classList.remove("show","has-act"),act?4500:1800);
}
/* 問句本身有「」就不再包一層 */
const fmtQ = q=>/^「/.test(q)?q:"「"+q+"」";

/* ---------- 導覽（頁籤 + 抽屜選單 + 手機底部列） ---------- */
const tabsEl = $("#tabs"), drawerItems = $("#drawer-items"), bnav = $("#bnav");
TABS.forEach(t=>{
  const cnt=t.id==="fav"?'<span class="cnt" data-favcnt></span>':"";
  const b=el("button","tab",icon(t.ic)+t.l+cnt); b.id="tab-"+t.id; b.type="button";
  b.addEventListener("click",()=>show(t.id));
  tabsEl.appendChild(b);
  const d=el("button","drawer-item",icon(t.ic)+"<span>"+t.l+"</span>"+cnt); d.id="ditem-"+t.id; d.type="button";
  d.addEventListener("click",()=>{show(t.id);closeMenu();});
  drawerItems.appendChild(d);
  const h=$("#v-"+t.id+" h2.vh"); if(h)h.insertAdjacentHTML("afterbegin",'<span class="vbadge">'+icon(t.ic)+"</span>");
});
BNAV.forEach(id=>{
  const t=TABS.find(x=>x.id===id);
  const b=el("button","bn-item",'<span class="bn-ic">'+icon(t.ic)+"</span>"+(t.s||t.l)); b.id="bn-"+id; b.type="button";
  b.addEventListener("click",()=>show(id));
  bnav.appendChild(b);
});
const bnMore=el("button","bn-item",'<span class="bn-ic">'+icon("grid")+"</span>更多");
bnMore.type="button"; bnMore.setAttribute("aria-expanded","false"); bnMore.setAttribute("aria-controls","drawer");
bnMore.addEventListener("click",()=>openMenu(bnMore));
bnav.appendChild(bnMore);

let curView=null;
function show(id,opt){
  opt=opt||{};
  if(!TABS.some(t=>t.id===id))id="search";
  const prev=curView;
  document.querySelectorAll(".view.on").forEach(v=>v.classList.remove("on"));
  document.querySelectorAll(".tab.on,.drawer-item.on,.bn-item.on").forEach(b=>{b.classList.remove("on");b.removeAttribute("aria-current");});
  $("#v-"+id).classList.add("on");
  ["#tab-","#ditem-","#bn-"].forEach(p=>{const b=$(p+id);if(b){b.classList.add("on");b.setAttribute("aria-current","page");}});
  if(!BNAV.includes(id))bnMore.classList.add("on");
  document.body.dataset.view=id;
  curView=id;
  if(id==="fav")renderFav();
  if(id==="search")renderToday();
  if(id==="tracker"){if(prev!=="tracker")trkSel=null;renderTracker();}
  /* 每次切換都記入瀏覽紀錄，手機「返回鍵」可回到上一頁 */
  if(opt.push!==false&&prev!==null&&location.hash!=="#"+id){try{history.pushState(null,"","#"+id);}catch(e){}}
  revealTab(id);
  window.scrollTo({top:0});
  if(prev!==null&&prev!==id&&finePointer.matches){
    if(id==="search")$("#q").focus({preventScroll:true});
    if(id==="chat")$("#chatin").focus({preventScroll:true});
  }
}
window.addEventListener("popstate",()=>{
  const h=(location.hash||"").slice(1);
  if(TABS.some(t=>t.id===h))show(h,{push:false});
  else if(!h)show("search",{push:false});
});
/* 頁籤列：目前分頁捲到可見處，兩側有更多時淡出提示 */
function updTabFade(){
  const max=tabsEl.scrollWidth-tabsEl.clientWidth;
  tabsEl.classList.toggle("fade-l",tabsEl.scrollLeft>2);
  tabsEl.classList.toggle("fade-r",max-tabsEl.scrollLeft>2);
}
function revealTab(id){
  const b=$("#tab-"+id); if(!b||!tabsEl.clientWidth)return;
  const l=b.offsetLeft, r=l+b.offsetWidth, pad=40;
  if(l<tabsEl.scrollLeft+pad)tabsEl.scrollLeft=l-pad;
  else if(r>tabsEl.scrollLeft+tabsEl.clientWidth-pad)tabsEl.scrollLeft=r-tabsEl.clientWidth+pad;
  updTabFade();
}
tabsEl.addEventListener("scroll",updTabFade,{passive:true});
window.addEventListener("resize",updTabFade);
/* 回到頂端 */
const totop=$("#totop");
totop.innerHTML=icon("up");
totop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("scroll",()=>totop.classList.toggle("show",window.scrollY>700),{passive:true});
/* 選單開關 */
const menubtn=$("#menubtn"), drawer=$("#drawer"), backdrop=$("#backdrop");
let menuOpener=null;
menubtn.innerHTML=icon("menu")+"選單";
$("#drawer-close").innerHTML=icon("close");
drawer.inert=true;
function openMenu(from){
  menuOpener=from||menubtn;
  drawer.inert=false; drawer.classList.add("open"); backdrop.classList.add("open"); drawer.setAttribute("aria-hidden","false");
  menubtn.setAttribute("aria-expanded","true"); bnMore.setAttribute("aria-expanded","true");
  (drawer.querySelector(".drawer-item.on")||$("#drawer-close")).focus({preventScroll:true});
}
function closeMenu(){
  if(!drawer.classList.contains("open"))return;
  drawer.classList.remove("open"); backdrop.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); drawer.inert=true;
  menubtn.setAttribute("aria-expanded","false"); bnMore.setAttribute("aria-expanded","false");
  if(menuOpener)menuOpener.focus({preventScroll:true}); menuOpener=null;
}
menubtn.addEventListener("click",()=>drawer.classList.contains("open")?closeMenu():openMenu(menubtn));
$("#drawer-close").addEventListener("click",closeMenu);
backdrop.addEventListener("click",closeMenu);
/* 跳到主要內容（不改網址，避免被當成分頁切換） */
$(".skip").addEventListener("click",e=>{e.preventDefault();$("#main").focus();});
/* 鍵盤：Esc 關選單、/ 快速搜尋 */
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closeMenu();
  if(e.key==="/"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.isComposing){
    if(e.target.closest&&e.target.closest("input,textarea,select,[contenteditable]"))return;
    e.preventDefault(); closeMenu();
    if(curView!=="search")show("search");
    $("#q").focus(); $("#q").select();
  }
});

/* ---------- 深淺色主題切換 ---------- */
const themebtn=$("#themebtn"), darkMQ=matchMedia("(prefers-color-scheme: dark)");
const THEME_COLOR={light:"#cbe5f8",dark:"#0f2740"};
const curTheme=()=>document.documentElement.dataset.theme||(darkMQ.matches?"dark":"light");
function syncTheme(){
  const t=curTheme(), forced=document.documentElement.dataset.theme;
  const lbl=t==="dark"?"切換為淺色主題":"切換為深色主題";
  themebtn.innerHTML=icon(t==="dark"?"sun":"moon");
  themebtn.setAttribute("aria-label",lbl); themebtn.title=lbl;
  document.querySelectorAll('meta[name="theme-color"]').forEach(m=>{
    if(!m.dataset.orig)m.dataset.orig=m.content;
    m.content=forced?THEME_COLOR[forced]:m.dataset.orig;
  });
}
themebtn.addEventListener("click",()=>{
  const next=curTheme()==="dark"?"light":"dark";
  /* 切回與系統相同時就恢復「跟隨系統」 */
  if(next===(darkMQ.matches?"dark":"light")){delete document.documentElement.dataset.theme;store.set("jrtheme",null);}
  else{document.documentElement.dataset.theme=next;store.set("jrtheme",next);}
  syncTheme();
});
if(darkMQ.addEventListener)darkMQ.addEventListener("change",syncTheme);
syncTheme();

/* ---------- 收藏 / 分享 ---------- */
const favs=()=>store.get("jrfav",[]);
function favKey(type,id){return type+":"+id;}
function isFaved(type,id){return favs().includes(favKey(type,id));}
function updFavCount(){const n=favs().length;document.querySelectorAll("[data-favcnt]").forEach(e=>e.textContent=n?String(n):"");}
function setFavBtn(btn,on){
  btn.classList.toggle("faved",on); btn.setAttribute("aria-pressed",on?"true":"false");
  btn.innerHTML=icon("star",on?"fill":"")+(on?"已收藏":"收藏");
}
function setFav(k,on,at){
  let f=favs(); const had=f.indexOf(k);
  if(on&&had<0){if(at!=null&&at>=0&&at<=f.length)f.splice(at,0,k);else f.push(k);}
  if(!on&&had>=0)f.splice(had,1);
  store.set("jrfav",f); updFavCount();
  /* 同一則內容可能同時出現在多處（搜尋結果、清單），一起更新 */
  document.querySelectorAll(".abtn[data-fav]").forEach(b=>{if(b.dataset.fav===k)setFavBtn(b,on);});
  if(curView==="fav")renderFav();
  return had;
}
function toggleFav(type,id){
  const k=favKey(type,id);
  if(!favs().includes(k)){setFav(k,true);toast("已收藏");}
  else{const at=setFav(k,false);toast("已取消收藏",{label:"復原",fn:()=>setFav(k,true,at)});}
}
/* 分享時附上網址，收到的夥伴可以直接打開（本機檔案開啟時沒有網址可附） */
const SITE_URL=/^https?:$/.test(location.protocol)?location.origin+location.pathname.replace(/index\.html$/,""):"";
async function shareText(text){
  const full=text+"\n\n—— 出自 JR 智庫（JR Ridinger 演講知識庫）"+(SITE_URL?"\n"+SITE_URL:"");
  if(navigator.share){try{await navigator.share({text:full});return;}catch(e){if(e.name==="AbortError")return;}}
  try{await navigator.clipboard.writeText(full);toast("已複製，直接貼給夥伴");}
  catch(e){toast("複製失敗，請手動選取文字");}
}
function actionRow(type,id,shareStr){
  const row=el("div","actions");
  const fb=el("button","abtn"); fb.type="button"; fb.dataset.fav=favKey(type,id);
  setFavBtn(fb,isFaved(type,id));
  fb.addEventListener("click",()=>toggleFav(type,id));
  const sb=el("button","abtn",icon("share")+"分享"); sb.type="button";
  sb.addEventListener("click",()=>shareText(shareStr));
  row.append(fb,sb); return row;
}

/* ---------- 跨頁連結（出處 → 演講、故事 → 搜尋、延伸 → 智囊） ---------- */
document.addEventListener("click",e=>{
  const a=e.target.closest&&e.target.closest("[data-tr],[data-q],[data-ask],[data-scen],[data-go]");
  if(!a)return;
  if(a.dataset.tr)gotoTranscript(a.dataset.tr);
  else if(a.dataset.q!=null)gotoSearch(a.dataset.q);
  else if(a.dataset.ask!=null)askChat(a.dataset.ask);
  else if(a.dataset.scen!=null){show("script");selectScen(+a.dataset.scen);}
  else if(a.dataset.go)show(a.dataset.go);
});
function flash(node){node.classList.remove("flash");void node.offsetWidth;node.classList.add("flash");}
function gotoSearch(q){show("search");$("#q").value=q;doSearch();}
function gotoTranscript(id){
  const t=TRANSCRIPTS.find(x=>x.id===id); if(!t)return;
  show("browse");
  if(trFilter.cur!=="全部"&&trFilter.cur!==t.cat)trFilter.set("全部");
  const card=document.querySelector('#tr-list [data-trid="'+id+'"]');
  if(card){card.scrollIntoView({block:"start"});flash(card);}
}
function storyLink(name){return '<button type="button" class="link" data-q="'+esc(name)+'">'+name+"</button>";}

/* ---------- 搜尋核心（雙字元檢索 + 關鍵詞加權） ---------- */
function bigrams(s){
  s=(s||"").toLowerCase().replace(/[\s，。！？、,.!?;:「」『』（）()\/／-]+/g,"");
  const set=new Set(); for(let i=0;i<s.length-1;i++)set.add(s.slice(i,i+2));
  if(s.length===1)set.add(s); return set;
}
function scoreText(qb,text){
  if(!text)return 0; const t=text.toLowerCase(); let hit=0;
  qb.forEach(g=>{if(t.includes(g))hit++;});
  return qb.size?hit/qb.size:0;
}
function searchAll(q){
  const qb=bigrams(q); if(!qb.size)return [];
  const ql=q.toLowerCase(); const out=[];
  QA.forEach((it,i)=>{
    let s=0;
    (it.kw||[]).forEach(k=>{const kl=k.toLowerCase();if(ql.includes(kl)||kl.includes(ql))s+=3;else if(scoreText(qb,kl)>=.6)s+=1.2;});
    s+=scoreText(qb,it.q)*4+scoreText(qb,it.a)*1.5;
    if(s>0.55)out.push({type:"qa",id:i,score:s,item:it});
  });
  STORIES.forEach((it,i)=>{
    const s=scoreText(qb,it.t)*4+scoreText(qb,it.s)*1.6+scoreText(qb,it.u)*2;
    if(s>0.55)out.push({type:"story",id:i,score:s,item:it});
  });
  TRANSCRIPTS.forEach(it=>{
    const full=(typeof FULLTR!=="undefined"&&FULLTR[it.id])||null;
    const extra=full?(full.faqs.join("")+full.pts.join("")).replace(/<[^>]+>/g,""):it.pts.join("");
    const s=scoreText(qb,it.zh)*4+scoreText(qb,it.one)*2+scoreText(qb,extra)*1.2;
    if(s>0.55)out.push({type:"tr",id:it.id,score:s,item:it});
  });
  SCENARIOS.forEach((sc,i)=>{
    const s=scoreText(qb,sc.t)*4+scoreText(qb,sc.open+sc.key.join("")+sc.avoid)*1.2;
    if(s>0.55)out.push({type:"scen",id:i,score:s,item:sc});
  });
  out.sort((a,b)=>b.score-a.score);
  return out.slice(0,12);
}
function scenResultCard(sc,i){
  const c=el("div","card");
  c.appendChild(el("h3",null,icon(ICONS[sc.icon]?sc.icon:"clapper")+" 情境劇本：「"+sc.t+"」"));
  c.appendChild(el("div","quote serif",sc.open));
  c.appendChild(el("p",null,"完整劇本（關鍵句、可用故事、收尾、地雷）在「劇本產生器」。"));
  const row=el("div","actions",'<button type="button" class="abtn" data-scen="'+i+'">'+icon("clapper")+"看完整劇本</button>");
  c.appendChild(row);
  return c;
}
function srcLinks(srcs,plain){
  return (srcs||[]).map(s=>{
    const t=TRANSCRIPTS.find(x=>x.id===s);
    if(!t)return esc(s);
    return plain?"《"+t.zh+"》":'<button type="button" class="link" data-tr="'+t.id+'">《'+t.zh+"》</button>";
  }).join("、");
}
function qaCard(it,i){
  const c=el("div","card");
  c.appendChild(el("h3",null,(it.type==="obj"?icon("shield"):icon("compass"))+" "+it.q));
  c.appendChild(el("div",null,'<span class="answer-label">JR 的做法</span>'));
  c.appendChild(el("p",null,it.a));
  if(it.story)c.appendChild(el("div","quote",icon("bulb")+" 可搭配的故事："+storyLink(it.story)));
  c.appendChild(el("div","src","出處："+srcLinks(it.src)));
  c.appendChild(actionRow("qa",i,"【"+it.q+"】\n\nJR 的做法："+it.a+"\n\n出處："+srcLinks(it.src,true)));
  return c;
}
const SRC_ALIAS={"closing-merc-2019":"closing-presentation-merc-2019"};
function storySrcName(src,plain){
  return String(src).split("/").map(s=>{
    const id=SRC_ALIAS[s.trim()]||s.trim();
    const t=TRANSCRIPTS.find(x=>x.id===id)||TRANSCRIPTS.find(x=>x.id.startsWith(id+"-"));
    if(!t)return esc(id);
    return plain?"《"+t.zh+"》":'<button type="button" class="link" data-tr="'+t.id+'">《'+t.zh+"》</button>";
  }).join("、");
}
function storyCard(it,i){
  const c=el("div","card");
  c.appendChild(el("h3",null,icon("sparkle")+" "+it.t));
  c.appendChild(el("div","quote serif",it.s));
  c.appendChild(el("p",null,"<b>什麼時候用：</b>"+it.u));
  c.appendChild(el("div","src","出處："+storySrcName(it.src)));
  c.appendChild(actionRow("story",i,"【"+it.t+"】\n"+it.s+"\n\n什麼時候用："+it.u));
  return c;
}
function trCard(it){
  const full=(typeof FULLTR!=="undefined"&&FULLTR[it.id])||null;
  const pts=full?full.pts:it.pts;
  const c=el("div","card"); c.dataset.trid=it.id;
  c.appendChild(el("h3",null,icon("book")+" "+it.zh+' <span style="color:var(--muted);font-weight:400;font-size:13px">'+it.id+"</span>"));
  c.appendChild(el("div","tagrow",'<span class="chip static">'+it.cat+"</span>"));
  c.appendChild(el("p",null,"<b>"+it.one+"</b>"));
  const d1=el("details",null,"<summary class='more'>核心重點（"+pts.length+" 條）</summary>");
  d1.appendChild(el("ul",null,pts.map(p=>"<li>"+p+"</li>").join("")));
  d1.open=!full; c.appendChild(d1);
  if(it.quote)c.appendChild(el("div","quote serif","「"+it.quote+"」"));
  if(full&&full.stories.length){
    const d2=el("details",null,"<summary class='more'>經典金句／故事（"+full.stories.length+"）</summary>");
    d2.appendChild(el("ul",null,full.stories.map(p=>"<li>"+p+"</li>").join("")));
    c.appendChild(d2);
  }
  if(full&&full.faqs.length){
    const d3=el("details",null,"<summary class='more'>這篇可回答的問題（"+full.faqs.length+"）</summary>");
    d3.appendChild(el("ul",null,full.faqs.map(p=>"<li>"+p+"</li>").join("")));
    c.appendChild(d3);
  }
  const plain=s=>s.replace(/<[^>]+>/g,"");
  c.appendChild(actionRow("tr",it.id,"《"+it.zh+"》\n"+it.one+"\n\n"+pts.map(p=>"• "+plain(p)).join("\n")));
  return c;
}

/* ---------- 篩選標籤（附數量） ---------- */
function chipFilter(box,cats,count,onPick){
  const api={cur:cats[0],set(c){
    api.cur=c;
    box.querySelectorAll(".chip").forEach(x=>{const on=x.dataset.v===c;x.classList.toggle("on",on);x.setAttribute("aria-pressed",on?"true":"false");});
    onPick(c);
  }};
  cats.forEach(c=>{
    const b=el("button","chip",esc(c)+'<span class="n">'+count(c)+"</span>"); b.type="button"; b.dataset.v=c;
    b.addEventListener("click",()=>api.set(c));
    box.appendChild(b);
  });
  api.set(cats[0]);
  return api;
}

/* ---------- 搜尋頁 ---------- */
const qIn=$("#q");
function doSearch(){
  const q=qIn.value.trim(); const box=$("#results"); box.innerHTML="";
  $("#shortcuts").hidden=!!q;
  if(!q)return;
  const rs=searchAll(q);
  if(!rs.length){
    const e=el("div","empty","找不到「"+esc(q)+"」的直接對應內容。<br>換個說法試試（用對方的原話通常最準），或交給 JR 智囊用對話方式問。");
    e.appendChild(el("div","actions",'<button type="button" class="abtn" data-ask="'+esc(q)+'">'+icon("chat")+"問 JR 智囊</button>"));
    box.appendChild(e); return;
  }
  box.appendChild(el("div","rmeta","找到 <b>"+rs.length+"</b> 筆相關內容"));
  const qa=rs.filter(r=>r.type==="qa"),st=rs.filter(r=>r.type==="story"),tr=rs.filter(r=>r.type==="tr"),sc=rs.filter(r=>r.type==="scen");
  if(qa.length){box.appendChild(el("div","secttl","對應的問答（"+qa.length+"）"));qa.forEach(r=>box.appendChild(qaCard(r.item,r.id)));}
  if(sc.length){box.appendChild(el("div","secttl","情境劇本（"+sc.length+"）"));sc.forEach(r=>box.appendChild(scenResultCard(r.item,r.id)));}
  if(st.length){box.appendChild(el("div","secttl","可用的故事（"+st.length+"）"));st.forEach(r=>box.appendChild(storyCard(r.item,r.id)));}
  if(tr.length){box.appendChild(el("div","secttl","相關演講（"+tr.length+"）"));tr.forEach(r=>box.appendChild(trCard(r.item)));}
  highlight(box,hlTerms(q,rs));
}
/* 要標示的字：查詢裡的詞、命中的關鍵詞；整句查詢再拆出 3 字以上的片段（2 字片段如「的人」太容易誤標） */
function hlTerms(q,rs){
  const out=new Set(), ql=q.toLowerCase();
  q.split(/[\s，。！？、,.!?;:「」『』（）()\/／-]+/).filter(x=>x.length>=2).forEach(seg=>{
    out.add(seg);
    if(seg.length>=4)for(let i=0;i<seg.length;i++)for(let j=i+3;j<=seg.length;j++)out.add(seg.slice(i,j));
  });
  rs.forEach(r=>{if(r.type==="qa")(r.item.kw||[]).forEach(k=>{const kl=k.toLowerCase();if(k.length>=2&&(ql.includes(kl)||kl.includes(ql)))out.add(k);});});
  return [...out].sort((a,b)=>b.length-a.length);
}
function highlight(root,terms){
  if(!terms.length)return;
  const re=new RegExp(terms.map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),"gi");
  const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>
    n.parentElement.closest("button,summary,.src,mark,svg,.rmeta,.secttl")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
  const nodes=[]; while(tw.nextNode())nodes.push(tw.currentNode);
  nodes.forEach(n=>{
    const t=n.nodeValue; re.lastIndex=0; if(!re.test(t))return;
    const frag=document.createDocumentFragment(); let last=0, m; re.lastIndex=0;
    while((m=re.exec(t))){
      if(m.index>last)frag.appendChild(document.createTextNode(t.slice(last,m.index)));
      const mk=document.createElement("mark"); mk.textContent=m[0]; frag.appendChild(mk);
      last=m.index+m[0].length;
    }
    if(last<t.length)frag.appendChild(document.createTextNode(t.slice(last)));
    n.parentNode.replaceChild(frag,n);
  });
}
/* 邊打邊搜；中文輸入法選字時不觸發 */
let qTimer=null;
const schedSearch=()=>{clearTimeout(qTimer);qTimer=setTimeout(doSearch,250);};
qIn.addEventListener("input",e=>{if(!e.isComposing)schedSearch();});
qIn.addEventListener("compositionend",schedSearch);
qIn.addEventListener("keydown",e=>{
  if(e.key!=="Enter"||e.isComposing)return;
  clearTimeout(qTimer); doSearch(); addRecent(qIn.value);
  if(!finePointer.matches)qIn.blur();
});
$("#qbtn").addEventListener("click",()=>{clearTimeout(qTimer);doSearch();addRecent(qIn.value);});
/* 邊打邊搜的半截字不記；離開搜尋框時才把有結果的查詢記進「最近搜尋」。
   延後重畫，避免點結果卡片上的按鈕時，按鈕在點下去的瞬間被換掉 */
qIn.addEventListener("blur",()=>{if(addRecent(qIn.value,true))setTimeout(renderRecent,400);});
function addRecent(q,later){
  q=String(q).trim();
  if(!q||q.length>40||HOTQ.includes(q)||!searchAll(q).length)return false;
  const r=store.get("jrrecent",[]).filter(x=>x!==q); r.unshift(q);
  store.set("jrrecent",r.slice(0,6));
  if(!later)renderRecent();
  return true;
}
function renderRecent(){
  const r=store.get("jrrecent",[]), box=$("#recentq"); box.innerHTML="";
  $("#recent-row").hidden=!r.length;
  r.forEach(q=>{
    const b=el("button","chip"); b.type="button"; b.textContent=q;
    b.addEventListener("click",()=>{qIn.value=q;doSearch();addRecent(q);});
    box.appendChild(b);
  });
  const clr=el("button","link","清除"); clr.type="button";
  clr.addEventListener("click",()=>{store.set("jrrecent",[]);renderRecent();});
  box.appendChild(clr);
}
renderRecent();
const qclear=$("#qclear");
qclear.innerHTML=icon("close");
qclear.addEventListener("click",()=>{qIn.value="";doSearch();qIn.focus();});
HOTQ.forEach(h=>{
  const b=el("button","chip",h); b.type="button";
  b.addEventListener("click",()=>{qIn.value=h;doSearch();});
  $("#hotq").appendChild(b);
});
/* 尚未搜尋時：功能捷徑 */
(function(){
  const box=$("#shortcuts");
  box.appendChild(el("div","secttl","或直接前往"));
  const grid=el("div","sc-grid");
  TABS.filter(t=>t.d).forEach(t=>{
    const b=el("button","sc-card",'<span class="sc-ic">'+icon(t.ic)+'</span><span class="sc-txt"><b>'+t.l+(t.n?"<em>"+t.n()+"</em>":"")+"</b><small>"+t.d+"</small></span>");
    b.type="button";
    b.addEventListener("click",()=>show(t.id));
    grid.appendChild(b);
  });
  box.appendChild(grid);
})();

/* ---------- 異議處理頁 ---------- */
function qaDetails(it,i){
  const d=el("details","qa");
  d.appendChild(el("summary",null,it.q));
  const b=el("div","qa-body");
  b.appendChild(el("div",null,'<span class="answer-label">JR 的做法</span>'));
  b.appendChild(el("p",null,it.a));
  if(it.story)b.appendChild(el("div","quote",icon("bulb")+" 可搭配的故事："+storyLink(it.story)));
  b.appendChild(el("div","src","出處："+srcLinks(it.src)));
  b.appendChild(actionRow("qa",i,"【"+it.q+"】\n\nJR 的做法："+it.a));
  d.appendChild(b);
  return d;
}
const objList=$("#obj-list"), objToggle=$("#obj-toggle");
function updObjToggle(){
  const ds=[...objList.querySelectorAll("details.qa")];
  const allOpen=ds.length&&ds.every(d=>d.open);
  objToggle.hidden=!ds.length;
  objToggle.textContent=allOpen?"全部收合":"全部展開";
}
function renderObjections(filter){
  objList.innerHTML="";
  const pick=type=>QA.map((it,i)=>[it,i]).filter(([it])=>it.type===type&&(filter==="全部"||it.cat===filter));
  let n=0;
  [["obj","對方的異議"],["coach","帶團隊的問題（輔導）"]].forEach(([type,label])=>{
    const items=pick(type); if(!items.length)return;
    n+=items.length;
    objList.appendChild(el("div","secttl",label+"（"+items.length+"）"));
    items.forEach(([it,i])=>objList.appendChild(qaDetails(it,i)));
  });
  $("#obj-meta").innerHTML="共 <b>"+n+"</b> 題";
  if(!n)objList.appendChild(el("div","empty","此分類目前沒有題目。"));
  updObjToggle();
}
objList.addEventListener("toggle",updObjToggle,true);
objToggle.addEventListener("click",()=>{
  const ds=[...objList.querySelectorAll("details.qa")];
  const open=!ds.every(d=>d.open);
  ds.forEach(d=>d.open=open);
  updObjToggle();
});
chipFilter($("#obj-filter"),["全部",...new Set(QA.map(x=>x.cat))],
  c=>QA.filter(x=>c==="全部"||x.cat===c).length, renderObjections);

/* ---------- 主題瀏覽頁 ---------- */
function renderTr(filter){
  const list=$("#tr-list");list.innerHTML="";
  CATS.forEach(cat=>{
    if(filter!=="全部"&&cat!==filter)return;
    const items=TRANSCRIPTS.filter(t=>t.cat===cat);
    if(!items.length)return;
    list.appendChild(el("div","secttl",cat+"（"+items.length+"）"));
    items.forEach(t=>list.appendChild(trCard(t)));
  });
}
const trFilter=chipFilter($("#tr-filter"),["全部",...CATS.filter(c=>TRANSCRIPTS.some(t=>t.cat===c))],
  c=>TRANSCRIPTS.filter(t=>c==="全部"||t.cat===c).length, renderTr);

/* ---------- JR 智囊（檢索式對話） ---------- */
const CHAT_WHO='<div class="who"><span class="who-av">'+icon("chat")+"</span>JR 智囊</div>";
function moreLink(m){
  if(m.type==="qa")return '<button type="button" class="link" data-ask="'+esc(m.item.q)+'">'+fmtQ(m.item.q)+"</button>";
  if(m.type==="story")return '<button type="button" class="link" data-q="'+esc(m.item.t)+'">故事《'+m.item.t+"》</button>";
  if(m.type==="scen")return '<button type="button" class="link" data-scen="'+m.id+'">劇本「'+m.item.t+"」</button>";
  return '<button type="button" class="link" data-tr="'+m.item.id+'">演講《'+m.item.zh+"》</button>";
}
function chatReply(q){
  const rs=searchAll(q);
  const best=rs.find(r=>r.type==="qa");
  let html="";
  if(best&&best.score>=1){
    const it=best.item;
    html+="<p style='margin:0 0 8px'><b>"+it.q+"</b></p><p style='margin:0'>"+it.a+"</p>";
    if(it.story)html+='<div class="quote" style="margin:10px 0 0">'+icon("bulb")+" 可搭配的故事："+storyLink(it.story)+"</div>";
    html+='<div class="src">出處：'+srcLinks(it.src)+"</div>";
    const more=rs.filter(r=>r!==best).slice(0,3);
    if(more.length)html+='<div style="margin-top:10px;font-size:13.5px;color:var(--muted)">延伸：'+more.map(moreLink).join("・")+"</div>";
  }else{
    const st=rs.find(r=>r.type==="story"),tr=rs.find(r=>r.type==="tr");
    if(st){
      html+="<p style='margin:0 0 8px'>這個情況可以用 JR 的故事——<b>"+st.item.t+"</b>：</p><p style='margin:0'>"+st.item.s+"</p><p style='margin:8px 0 0'><b>什麼時候用：</b>"+st.item.u+"</p><div class='src'>出處："+storySrcName(st.item.src)+"</div>";
    }else if(tr){
      html+="<p style='margin:0 0 8px'>這題在"+srcLinks([tr.item.id])+"裡有完整教學：</p><p style='margin:0'><b>"+tr.item.one+"</b></p><ul>"+tr.item.pts.map(p=>"<li>"+p+"</li>").join("")+"</ul>";
    }else{
      html+="<p style='margin:0'>這個問題我還對不上 JR 的哪一篇教學。試試換個說法（例如「夥伴說不認識人」「被問是不是老鼠會」），或點上面的快速問題。</p>";
    }
  }
  return html;
}
function askChat(q){
  if(curView!=="chat")show("chat");
  q=String(q).trim(); if(!q)return;
  const um=el("div","msg user"); um.textContent=q;
  $("#chatlog").appendChild(um);
  $("#chatlog").appendChild(el("div","msg jr",CHAT_WHO+chatReply(q)));
  /* 從提問開始捲，長回答才不會被切掉開頭 */
  um.scrollIntoView({behavior:"smooth",block:"start"});
}
$("#chatform").addEventListener("submit",e=>{
  e.preventDefault();
  const q=$("#chatin").value.trim(); if(!q)return;
  $("#chatin").value="";
  askChat(q);
});
HOTQ.forEach(h=>{
  const b=el("button","chip",h); b.type="button";
  b.addEventListener("click",()=>askChat(h));
  $("#quickq").appendChild(b);
});
$("#chatlog").appendChild(el("div","msg jr",CHAT_WHO+"<p style='margin:0'>把你遇到的狀況直接打出來，例如「新人說他沒時間」——我會從 JR 的 27 篇演講裡找出對應做法與出處。</p>"));

/* ---------- 劇本產生器 ---------- */
function scenText(s){
  return s.t+"\n\n【開場】"+s.open+"\n\n【關鍵】\n"+s.key.map(k=>"• "+k).join("\n")+"\n\n【收尾】"+s.close+"\n\n【避免】"+s.avoid;
}
function scenCard(i){
  const s=SCENARIOS[i];
  const c=el("div","card");
  c.appendChild(el("h3",null,icon(ICONS[s.icon]?s.icon:"clapper")+" "+s.t+" — JR 式劇本"));
  const sec=(label,html)=>{const d=el("div","script-sec");d.appendChild(el("span","answer-label",label));d.appendChild(el("div",null,html));c.appendChild(d);};
  sec("開場白","<div class='quote serif'>"+s.open+"</div>");
  sec("關鍵句與心法","<ul>"+s.key.map(k=>"<li>"+k+"</li>").join("")+"</ul>");
  sec("可用故事",s.story);
  sec("收尾","<div class='quote serif'>"+s.close+"</div>");
  sec("地雷（別做）","<div class='warnbox'>"+icon("warn")+" "+s.avoid+"</div>");
  c.appendChild(el("div","src","出處："+storySrcName(s.src)));
  c.appendChild(actionRow("scen",i,scenText(s)));
  return c;
}
const scenPick=$("#scen-pick");
SCENARIOS.forEach((s,i)=>{
  const b=el("button",null,icon(s.icon)+" "+s.t); b.type="button"; b.setAttribute("aria-pressed","false");
  b.addEventListener("click",()=>selectScen(i));
  scenPick.appendChild(b);
});
function selectScen(i){
  scenPick.querySelectorAll("button").forEach((x,ix)=>{x.classList.toggle("on",ix===i);x.setAttribute("aria-pressed",ix===i?"true":"false");});
  const out=$("#scen-out"); out.innerHTML="";
  const c=scenCard(i);
  const again=el("button","abtn",icon("refresh")+"換一個情境"); again.type="button";
  again.addEventListener("click",()=>scenPick.scrollIntoView({behavior:"smooth",block:"start"}));
  const pr=el("button","abtn",icon("printer")+"列印"); pr.type="button";
  pr.addEventListener("click",()=>window.print());
  c.querySelector(".actions").append(again,pr);
  out.appendChild(c);
  out.scrollIntoView({behavior:"smooth",block:"start"});
}

/* ---------- 金句故事頁 ---------- */
let stCat="全部";
function renderStories(){
  const list=$("#st-list");list.innerHTML="";
  const kw=$("#st-q").value.trim().toLowerCase();
  let total=0;
  TRANSCRIPTS.forEach(tr=>{
    const items=[];
    STORIES.forEach((it,i)=>{
      if(String(it.src).trim()!==tr.id)return;
      if(stCat!=="全部"&&it.cat!==stCat)return;
      if(kw&&!(it.t+it.s+it.u).toLowerCase().includes(kw))return;
      items.push([it,i]);
    });
    if(!items.length)return;
    total+=items.length;
    list.appendChild(el("div","secttl","《"+tr.zh+"》（"+items.length+"）"));
    const grid=el("div","grid2");
    items.forEach(([it,i])=>grid.appendChild(storyCard(it,i)));
    list.appendChild(grid);
  });
  $("#st-meta").innerHTML=(kw||stCat!=="全部")?"符合 <b>"+total+"</b> 則":"共 <b>"+total+"</b> 則";
  if(!total)list.appendChild(el("div","empty",kw?"沒有包含「"+esc(kw)+"」的故事，換個關鍵字試試。":"此分類目前沒有故事。"));
}
chipFilter($("#st-filter"),["全部",...new Set(STORIES.map(x=>x.cat))],
  c=>STORIES.filter(x=>c==="全部"||x.cat===c).length, c=>{stCat=c;renderStories();});
let stTimer=null;
$("#st-q").addEventListener("input",e=>{if(e.isComposing)return;clearTimeout(stTimer);stTimer=setTimeout(renderStories,200);});
$("#st-q").addEventListener("compositionend",()=>{clearTimeout(stTimer);stTimer=setTimeout(renderStories,200);});

/* ---------- 帶人 SOP ---------- */
(function(){
  const list=$("#sop-list");
  SOP.forEach((s,i)=>{
    const step=el("div","sopstep");
    step.appendChild(el("div","sopnum",String(i+1)));
    const c=el("div","card");
    c.appendChild(el("h3",null,s.t));
    c.appendChild(el("p",null,s.d));
    c.appendChild(el("div","warnbox",icon("warn")+" "+s.w));
    c.appendChild(el("div","src","出處："+storySrcName(s.src)));
    step.appendChild(c); list.appendChild(step);
  });
})();

/* ---------- 90 天追蹤器 ---------- */
let trkSel=null; /* 正在補登的第幾天；null＝今天 */
const pad2=n=>String(n).padStart(2,"0");
/* 一律用「本地」日期，避免台灣早上 8 點前被算成前一天 */
const ymd=dt=>dt.getFullYear()+"-"+pad2(dt.getMonth()+1)+"-"+pad2(dt.getDate());
function parseYmd(s){const p=String(s).split("-").map(Number);return new Date(p[0],p[1]-1,p[2]);}
function todayMid(){const t=new Date();return new Date(t.getFullYear(),t.getMonth(),t.getDate());}
const fmtDate=dt=>dt.getFullYear()+"/"+pad2(dt.getMonth()+1)+"/"+pad2(dt.getDate());
const WEEK="日一二三四五六";
function trkState(){
  let s=store.get("jr90",null);
  if(!s||!s.start||isNaN(parseYmd(s.start))){s={start:ymd(new Date()),days:{}};store.set("jr90",s);}
  if(!s.days)s.days={};
  return s;
}
function rawDay(s){return Math.round((todayMid()-parseYmd(s.start))/86400000)+1;}
function dayNum(s){return Math.min(Math.max(rawDay(s),1),90);}
function dateOfDay(s,n){const d=parseYmd(s.start);d.setDate(d.getDate()+n-1);return d;}
function doneOf(s,n){const dd=s.days[n]||{};return CHECKS.filter(c=>dd[c.k]).length;}
/* 連續打卡：今天還沒勾不算中斷，從昨天往回數 */
function streakOf(s,d){let n=d,k=0;if(!doneOf(s,n))n--;while(n>=1&&doneOf(s,n)){k++;n--;}return k;}
function renderTracker(){
  const s=trkState(), raw=rawDay(s), d=dayNum(s);
  if(trkSel!=null&&(trkSel<1||trkSel>=d))trkSel=null;
  const sel=trkSel||d, past=sel!==d;
  const pct=Math.round(d/90*100);
  $("#trk-daynum").textContent=d;
  $("#trk-pct").textContent=pct+"%";
  $("#trk-bar").style.width=pct+"%";
  $("#trk-left").innerHTML=raw>90?"<b>已完成 90 天</b>":"還剩 <b>"+(90-d)+"</b> 天";
  const si=$("#trk-start"); si.value=s.start; si.max=ymd(new Date());
  $("#trk-end").textContent=fmtDate(dateOfDay(s,90));
  let full=0; for(let i=1;i<=d;i++)if(doneOf(s,i)===CHECKS.length)full++;
  $("#trk-done").innerHTML=doneOf(s,d)+"<small>/ "+CHECKS.length+"</small>";
  $("#trk-streak").innerHTML=streakOf(s,d)+"<small>天</small>";
  $("#trk-full").innerHTML=full+"<small>天</small>";
  /* JR：每週展示計畫 1-2 次是最低標——以 90 天的第幾週計算 */
  const wk=Math.floor((d-1)/7); let plans=0;
  for(let i=wk*7+1;i<=Math.min(wk*7+7,90);i++)if((s.days[i]||{}).plan)plans++;
  $("#trk-wklbl").textContent="第 "+(wk+1)+" 週展示";
  $("#trk-week").innerHTML=plans+"<small>/ 2 次</small>";
  $("#trk-fin").hidden=raw<=90;
  const dt=dateOfDay(s,sel);
  $("#trk-ckhead").classList.toggle("past",past);
  $("#trk-ckttl").textContent=past?"補登：第 "+sel+" 天":"今天的基本功";
  $("#trk-ckdate").textContent=(dt.getMonth()+1)+"/"+dt.getDate()+"（週"+WEEK[dt.getDay()]+"）· 第 "+sel+" 天 · 完成 "+doneOf(s,sel)+"/"+CHECKS.length;
  $("#trk-edit").hidden=!past;
  const box=$("#trk-checks");box.innerHTML="";
  const cur=s.days[sel]||{};
  CHECKS.forEach(c=>{
    const lab=el("label","ck"+(cur[c.k]?" done":""));
    const cb=document.createElement("input");cb.type="checkbox";cb.checked=!!cur[c.k];cb.dataset.k=c.k;
    cb.addEventListener("change",()=>setCheck(sel,c.k,cb.checked));
    lab.append(cb,el("div","ck-t","<b>"+c.t+"</b><span>"+c.d+"</span>")); box.appendChild(lab);
  });
  const grid=$("#daygrid");grid.innerHTML="";
  for(let i=1;i<=90;i++){
    const n=doneOf(s,i);
    const b=el("button",n>=CHECKS.length?"p3":n>=3?"p2":n>=1?"p1":null,String(i)); b.type="button";
    if(i===d)b.classList.add("today");
    if(past&&i===sel)b.classList.add("sel");
    const lbl=fmtDate(dateOfDay(s,i))+"（第 "+i+" 天）："+n+"/"+CHECKS.length+(i>d?"，還沒到":"");
    b.title=lbl; b.setAttribute("aria-label",lbl);
    if(i>d)b.disabled=true;
    else b.addEventListener("click",()=>{trkSel=i===d?null:i;renderTracker();$("#trk-ckhead").scrollIntoView({behavior:"smooth",block:"nearest"});});
    grid.appendChild(b);
  }
}
function setCheck(n,k,v){
  const st=trkState(); const dd=st.days[n]||{}; dd[k]=v; st.days[n]=dd; store.set("jr90",st);
  renderTracker();
  const cb=document.querySelector('#trk-checks input[data-k="'+k+'"]'); if(cb)cb.focus({preventScroll:true});
  if(v&&CHECKS.every(x=>dd[x.k]))toast(n===dayNum(st)?"今日全數完成！90 天就是這樣堆出來的":"第 "+n+" 天補登完成");
}
function resetTracker(){
  if(!confirm("確定要歸零、從今天重新開始 90 天嗎？目前的打卡紀錄會清除。"))return;
  store.set("jr90",{start:ymd(new Date()),days:{}}); trkSel=null;
  renderTracker(); window.scrollTo({top:0,behavior:"smooth"}); toast("新的 90 天，開始！");
}
$("#trk-start").addEventListener("change",e=>{
  const v=e.target.value; if(!v)return;
  if(parseYmd(v)>todayMid()){toast("開始日期不能是未來");renderTracker();return;}
  const st=trkState(); st.start=v; store.set("jr90",st); trkSel=null; renderTracker();
  toast("開始日期已更新："+v.replace(/-/g,"/"));
});
$("#trk-back").addEventListener("click",()=>{trkSel=null;renderTracker();});
$("#trk-reset").innerHTML=icon("refresh")+"重新開始 90 天";
$("#trk-backup").innerHTML=icon("download")+"備份紀錄";
$("#trk-backup").addEventListener("click",backupData);
$("#trk-reset").addEventListener("click",resetTracker);
$("#trk-again").addEventListener("click",resetTracker);

/* ---------- 主題測驗 ---------- */
const RATES=["還不熟","答得出一半","能教別人了"];
function renderQuizSum(){
  const r=store.get("jrquiz",{}), N=QUIZ.length;
  const c=[0,1,2].map(lv=>Object.keys(r).filter(k=>r[k]===lv&&QUIZ[k]).length);
  const w=n=>(n/N*100).toFixed(2)+"%";
  $("#qz-score").innerHTML='<div class="qz-sum"><div class="qz-n">'+c[2]+"<small> / "+N+' 個主題能教別人了</small></div>'+
    '<div class="bar stack" role="img" aria-label="能教別人 '+c[2]+"、答得出一半 "+c[1]+"、還不熟 "+c[0]+'"><i class="g" style="width:'+w(c[2])+'"></i><i class="a" style="width:'+w(c[1])+'"></i><i class="w" style="width:'+w(c[0])+'"></i></div>'+
    '<div class="qz-leg"><span><i class="g"></i>能教別人 '+c[2]+'</span><span><i class="a"></i>答得出一半 '+c[1]+'</span><span><i class="w"></i>還不熟 '+c[0]+'</span><span><i></i>還沒自評 '+(N-c[0]-c[1]-c[2])+"</span></div>"+
    "<p>JR：「這個考試通過了會讓你賺錢。」</p></div>";
}
const QZ_FILTERS=[["all","全部"],["0","還不熟"],["1","答得出一半"],["2","能教別人了"],["none","還沒自評"]];
let qzFilter="all";
function qzMatch(f,v){return f==="all"||(f==="none"?v==null:v===+f);}
function updQuizFilter(applyHide){
  const r=store.get("jrquiz",{});
  $("#qz-filter").querySelectorAll(".chip").forEach(b=>{
    b.querySelector(".n").textContent=QUIZ.filter((_,i)=>qzMatch(b.dataset.v,r[i])).length;
  });
  if(!applyHide)return;
  let shown=0;
  $("#qz-list").querySelectorAll(".card").forEach(c=>{const ok=qzMatch(qzFilter,r[c.dataset.i]);c.hidden=!ok;if(ok)shown++;});
  $("#qz-empty").hidden=!!shown;
}
QZ_FILTERS.forEach(([v,l])=>{
  const b=el("button","chip"+(v===qzFilter?" on":""),l+'<span class="n"></span>'); b.type="button"; b.dataset.v=v;
  b.setAttribute("aria-pressed",v===qzFilter?"true":"false");
  b.addEventListener("click",()=>{
    qzFilter=v;
    $("#qz-filter").querySelectorAll(".chip").forEach(x=>{const on=x===b;x.classList.toggle("on",on);x.setAttribute("aria-pressed",on?"true":"false");});
    updQuizFilter(true);
  });
  $("#qz-filter").appendChild(b);
});
function renderQuiz(){
  const rate=store.get("jrquiz",{});
  const list=$("#qz-list");list.innerHTML="";
  QUIZ.forEach((qz,i)=>{
    const c=el("div","card"+(rate[i]!=null?" rated-"+rate[i]:"")); c.dataset.i=i;
    c.appendChild(el("h3",null,'<span class="qz-no">'+(i+1)+"</span>請用一段話，向一個完全不懂的人解釋——<b>"+qz.t+"</b>"));
    const d=el("details",null,"<summary class='more'>先自己說一遍，再展開對照 JR 的版本</summary>");
    d.appendChild(el("div","quote serif",qz.m)); c.appendChild(d);
    const rateRow=el("div","qz-rate");
    RATES.forEach((lbl,lv)=>{
      const b=el("button",rate[i]===lv?"sel-"+lv:"",lbl); b.type="button"; b.setAttribute("aria-pressed",rate[i]===lv?"true":"false");
      /* 原地更新，不重畫整份清單——展開的 JR 版本不會被收起來 */
      b.addEventListener("click",()=>{
        const r=store.get("jrquiz",{}); r[i]=lv; store.set("jrquiz",r);
        c.className="card rated-"+lv;
        rateRow.querySelectorAll("button").forEach((x,ix)=>{x.className=ix===lv?"sel-"+ix:"";x.setAttribute("aria-pressed",ix===lv?"true":"false");});
        /* 剛自評完的卡片先留在畫面上，換篩選時才重新套用，免得卡片突然消失 */
        renderQuizSum(); updQuizFilter(false);
      });
      rateRow.appendChild(b);
    });
    c.appendChild(rateRow); list.appendChild(c);
  });
  renderQuizSum(); updQuizFilter(true);
}
renderQuiz();

/* ---------- 收藏頁 ---------- */
function renderFav(){
  const f=favs().slice().reverse(); /* 最新收藏在前 */
  const list=$("#fav-list");list.innerHTML="";
  [["qa","問答"],["scen","情境劇本"],["story","金句故事"],["tr","演講"]].forEach(([type,label])=>{
    const cards=[];
    f.forEach(k=>{
      const at=k.indexOf(":"), ty=k.slice(0,at), id=k.slice(at+1);
      if(ty!==type)return;
      if(type==="qa"&&QA[+id])cards.push(qaCard(QA[+id],+id));
      else if(type==="scen"&&SCENARIOS[+id])cards.push(scenCard(+id));
      else if(type==="story"&&STORIES[+id])cards.push(storyCard(STORIES[+id],+id));
      else if(type==="tr"){const t=TRANSCRIPTS.find(x=>x.id===id);if(t)cards.push(trCard(t));}
    });
    if(!cards.length)return;
    list.appendChild(el("div","secttl",label+"（"+cards.length+"）"));
    cards.forEach(c=>list.appendChild(c));
  });
  if(!list.children.length){
    const e=el("div","empty","還沒有收藏。<br>看到好用的問答、故事或劇本，點卡片下方的「收藏」就會出現在這裡。");
    e.appendChild(el("div","actions",
      '<button type="button" class="abtn" data-go="objections">'+icon("shield")+"逛逛異議處理</button>"+
      '<button type="button" class="abtn" data-go="stories">'+icon("sparkle")+"逛逛金句故事</button>"));
    list.appendChild(e);
  }
}
updFavCount();

/* ---------- 列印 ---------- */
$("#sop-print").innerHTML=icon("printer")+"列印";
$("#sop-print").addEventListener("click",()=>window.print());
let printOpened=[];
addEventListener("beforeprint",()=>{
  printOpened=[...document.querySelectorAll(".view.on details:not([open])")];
  printOpened.forEach(d=>d.open=true);
});
addEventListener("afterprint",()=>{printOpened.forEach(d=>d.open=false);printOpened=[];});

/* ---------- 首頁「今天」：每日金句 + 打卡進度 ---------- */
let todayOff=0;
function renderToday(){
  let box=$("#today");
  if(!box){box=el("div","today");box.id="today";$("#shortcuts").prepend(box);}
  box.innerHTML="";
  /* 每天換一則；步長與故事總數互質，169 天內不重複 */
  const dayNo=Math.floor(todayMid().getTime()/86400000);
  const i=((dayNo*37+todayOff)%STORIES.length+STORIES.length)%STORIES.length, it=STORIES[i];
  const q=el("div","card today-q");
  q.appendChild(el("span","answer-label",todayOff?"再來一則":"今日金句"));
  q.appendChild(el("h3",null,icon("sparkle")+" "+it.t));
  q.appendChild(el("div","quote serif",it.s));
  q.appendChild(el("p",null,"<b>什麼時候用：</b>"+it.u));
  q.appendChild(el("div","src","出處："+storySrcName(it.src)));
  const row=actionRow("story",i,"【"+it.t+"】\n"+it.s+"\n\n什麼時候用："+it.u);
  const nx=el("button","abtn",icon("refresh")+"換一則"); nx.type="button";
  nx.addEventListener("click",()=>{todayOff++;renderToday();});
  row.appendChild(nx); q.appendChild(row);
  box.appendChild(q);
  /* 打卡進度：沒開始過就不要偷偷幫他開始 */
  const st=store.get("jr90",null);
  const t=el("button","today-trk"); t.type="button";
  if(st&&st.start){
    const s=trkState(), d=dayNum(s);
    t.innerHTML='<span class="answer-label">今日打卡</span><b>'+doneOf(s,d)+"<small>/ "+CHECKS.length+" 項</small></b>"+
      '<div class="bar"><i style="width:'+Math.round(doneOf(s,d)/CHECKS.length*100)+'%"></i></div>'+
      '<span class="tt">90 天的第 '+d+" 天 · 連續 "+streakOf(s,d)+" 天</span>"+
      '<span class="go">'+(doneOf(s,d)>=CHECKS.length?"今天全數完成":"去打卡")+icon("arrow")+"</span>";
  }else{
    t.innerHTML='<span class="answer-label">90 天快速起步</span><b style="font-size:20px">還沒開始</b>'+
      '<span class="tt">每天 6 項基本功，堆出瘋狂的 90 天</span><span class="go">開始打卡'+icon("arrow")+"</span>";
  }
  t.addEventListener("click",()=>show("tracker"));
  box.appendChild(t);
}

/* ---------- 我的資料：備份 / 還原 ---------- */
const DATA_KEYS=["jrfav","jr90","jrquiz","jrrecent","jrtheme","jrfont"];
async function backupData(){
  const data={}; DATA_KEYS.forEach(k=>{const v=store.get(k,null);if(v!=null)data[k]=v;});
  const json=JSON.stringify({app:"jr-zhiku",v:1,at:new Date().toISOString(),data},null,1);
  const name="jr-zhiku-backup-"+ymd(new Date())+".json"; /* 中文檔名在部分瀏覽器會變成 download */
  closeMenu();
  /* 手機優先用分享（可存到雲端硬碟、傳 LINE 給自己）；電腦直接下載 */
  try{
    const file=new File([json],name,{type:"application/json"});
    if(!finePointer.matches&&navigator.canShare&&navigator.canShare({files:[file]})){
      await navigator.share({files:[file],title:"JR 智庫備份"}); return;
    }
  }catch(e){if(e&&e.name==="AbortError")return;}
  const a=el("a"); a.href=URL.createObjectURL(new Blob([json],{type:"application/json"})); a.download=name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  toast("備份檔已下載，換手機時用「從備份還原」");
}
function restoreData(file){
  const rd=new FileReader();
  rd.onload=()=>{
    let pkg=null; try{pkg=JSON.parse(rd.result);}catch(e){}
    if(!pkg||pkg.app!=="jr-zhiku"||!pkg.data||typeof pkg.data!=="object"){toast("這不是 JR 智庫的備份檔");return;}
    const when=pkg.at?fmtDate(new Date(pkg.at)):"";
    if(!confirm("要用"+(when?" "+when+" 的":"")+"備份取代目前的收藏、打卡與測驗紀錄嗎？"))return;
    DATA_KEYS.forEach(k=>{if(k in pkg.data)store.set(k,pkg.data[k]);});
    try{sessionStorage.setItem("jrtoast","資料已還原");}catch(e){}
    location.reload();
  };
  rd.readAsText(file);
}
$("#backupbtn").innerHTML=icon("download")+"<span>備份我的資料</span>";
$("#backupbtn").addEventListener("click",backupData);
$("#restorebtn").innerHTML=icon("upload")+"<span>從備份還原</span>";
$("#restorebtn").addEventListener("click",()=>$("#restorefile").click());
$("#restorefile").addEventListener("change",e=>{const f=e.target.files[0];e.target.value="";if(f){closeMenu();restoreData(f);}});
try{const m=sessionStorage.getItem("jrtoast");if(m){sessionStorage.removeItem("jrtoast");setTimeout(()=>toast(m),300);}}catch(e){}

/* ---------- 字級 ---------- */
(function(){
  $("#fs-lbl").innerHTML=icon("type")+"字級";
  const seg=$("#fs-seg");
  const apply=v=>{
    if(v)document.documentElement.dataset.fs=v; else delete document.documentElement.dataset.fs;
    seg.querySelectorAll("button").forEach((b,ix)=>{b.classList.toggle("on",ix===v);b.setAttribute("aria-pressed",ix===v?"true":"false");});
  };
  ["標準","大","特大"].forEach((l,ix)=>{
    const b=el("button",null,l); b.type="button";
    b.addEventListener("click",()=>{store.set("jrfont",ix||null);apply(ix);});
    seg.appendChild(b);
  });
  const f=store.get("jrfont",0); apply(f===1||f===2?f:0);
})();

/* ---------- 加到主畫面 + 離線使用 ---------- */
(function(){
  const btn=$("#installbtn"), row=btn;
  btn.innerHTML=icon("download")+"<span>加到手機主畫面</span>";
  const standalone=matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
  const isIOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
  let deferred=null;
  if(!standalone&&isIOS)row.hidden=false;
  addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;row.hidden=false;});
  addEventListener("appinstalled",()=>{row.hidden=true;deferred=null;toast("已加到主畫面，之後沒網路也能開");});
  btn.addEventListener("click",async()=>{
    if(deferred){
      closeMenu(); deferred.prompt();
      try{const r=await deferred.userChoice;if(r.outcome==="accepted")row.hidden=true;}catch(e){}
      deferred=null;
    }else{
      closeMenu(); toast("在 Safari 點下方「分享」→「加入主畫面」");
    }
  });
  /* 網站本身就是單一檔案，開著時斷網內容照常可用 */
  addEventListener("offline",()=>toast("目前沒有網路，已載入的內容照常可用"));
  if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)&&!/\/site\//.test(location.pathname)){
    addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
  }
})();

/* ---------- 啟動 ---------- */
(function(){
  const h=(location.hash||"").replace("#","");
  show(TABS.some(t=>t.id===h)?h:"search",{push:false});
})();
</script>
