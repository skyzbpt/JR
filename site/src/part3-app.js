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
};
function icon(name,cls){return '<svg class="ic'+(cls?" "+cls:"")+'" viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[name]||"")+'</svg>';}

const TABS = [
 {id:"search",  l:"搜尋",        ic:"search"},
 {id:"objections",l:"異議處理",  ic:"shield"},
 {id:"chat",    l:"JR 智囊",     ic:"chat"},
 {id:"script",  l:"劇本產生器",  ic:"clapper"},
 {id:"stories", l:"金句故事",    ic:"sparkle"},
 {id:"browse",  l:"27 篇演講",   ic:"book"},
 {id:"sop",     l:"帶人 SOP",    ic:"route"},
 {id:"tracker", l:"90 天打卡",   ic:"calcheck"},
 {id:"quiz",    l:"主題測驗",    ic:"clipboard"},
 {id:"fav",     l:"收藏",        ic:"star"},
];

const $ = s=>document.querySelector(s);
const el = (tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
const store = {
  get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v;}catch(e){return d;}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
};
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast._x);toast._x=setTimeout(()=>t.classList.remove("show"),1800);}

/* ---------- 導覽（頁籤 + 抽屜選單） ---------- */
const tabsEl = $("#tabs");
const drawerItems = $("#drawer-items");
TABS.forEach(t=>{
  const b=el("button","tab",icon(t.ic)+t.l); b.id="tab-"+t.id;
  b.addEventListener("click",()=>show(t.id));
  tabsEl.appendChild(b);
  const d=el("button","drawer-item",icon(t.ic)+t.l); d.id="ditem-"+t.id;
  d.addEventListener("click",()=>{show(t.id);closeMenu();});
  drawerItems.appendChild(d);
});
function show(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("on"));
  document.querySelectorAll(".tab,.drawer-item").forEach(b=>b.classList.remove("on"));
  $("#v-"+id).classList.add("on"); $("#tab-"+id).classList.add("on");
  const di=$("#ditem-"+id); if(di)di.classList.add("on");
  if(id==="fav") renderFav();
  if(id==="tracker") renderTracker();
  try{history.replaceState(null,"","#"+id);}catch(e){}
  window.scrollTo({top:0});
}
/* 選單開關 */
const menubtn=$("#menubtn"), drawer=$("#drawer"), backdrop=$("#backdrop");
menubtn.innerHTML=icon("menu")+"選單";
$("#drawer-close").innerHTML=icon("close");
function openMenu(){drawer.classList.add("open");backdrop.classList.add("open");drawer.setAttribute("aria-hidden","false");menubtn.setAttribute("aria-expanded","true");}
function closeMenu(){drawer.classList.remove("open");backdrop.classList.remove("open");drawer.setAttribute("aria-hidden","true");menubtn.setAttribute("aria-expanded","false");}
menubtn.addEventListener("click",()=>drawer.classList.contains("open")?closeMenu():openMenu());
backdrop.addEventListener("click",closeMenu);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu();});

/* ---------- 收藏 / 分享 ---------- */
function favKey(type,id){return type+":"+id;}
function isFaved(type,id){return store.get("jrfav",[]).includes(favKey(type,id));}
function toggleFav(type,id,btn){
  let f=store.get("jrfav",[]); const k=favKey(type,id);
  if(f.includes(k)){f=f.filter(x=>x!==k);toast("已取消收藏");}
  else{f.push(k);toast("已收藏");}
  store.set("jrfav",f);
  if(btn){btn.classList.toggle("faved");btn.innerHTML=btn.classList.contains("faved")?icon("star","fill")+"已收藏":icon("star")+"收藏";}
}
async function shareText(text){
  const full=text+"\n\n—— 出自 JR 智庫（JR Ridinger 演講知識庫）";
  if(navigator.share){try{await navigator.share({text:full});return;}catch(e){if(e.name==="AbortError")return;}}
  try{await navigator.clipboard.writeText(full);toast("已複製，直接貼給夥伴");}
  catch(e){toast("複製失敗，請手動選取文字");}
}
function actionRow(type,id,shareStr){
  const row=el("div","actions");
  const fb=el("button","abtn"+(isFaved(type,id)?" faved":""),icon("star",isFaved(type,id)?"fill":"")+(isFaved(type,id)?"已收藏":"收藏"));
  fb.addEventListener("click",()=>toggleFav(type,id,fb));
  const sb=el("button","abtn",icon("share")+"分享");
  sb.addEventListener("click",()=>shareText(shareStr));
  row.append(fb,sb); return row;
}

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
  out.sort((a,b)=>b.score-a.score);
  return out.slice(0,12);
}
function srcLinks(srcs){
  return (srcs||[]).map(s=>{
    const t=TRANSCRIPTS.find(x=>x.id===s);
    return t?("《"+t.zh+"》"):s;
  }).join("、");
}
function qaCard(it,i){
  const c=el("div","card");
  c.appendChild(el("h3",null,(it.type==="obj"?icon("shield"):icon("compass"))+" "+it.q));
  c.appendChild(el("div",null,'<span class="answer-label">JR 的做法</span>'));
  c.appendChild(el("p",null,it.a));
  if(it.story)c.appendChild(el("div","quote",icon("bulb")+" 可搭配的故事：<b>"+it.story+"</b>（到「金句故事」查完整版）"));
  c.appendChild(el("div","src","出處："+srcLinks(it.src)));
  c.appendChild(actionRow("qa",i,"【"+it.q+"】\n\nJR 的做法："+it.a+"\n\n出處："+srcLinks(it.src)));
  return c;
}
function storyCard(it,i){
  const c=el("div","card");
  c.appendChild(el("h3",null,icon("sparkle")+" "+it.t));
  c.appendChild(el("div","quote serif",it.s));
  c.appendChild(el("p",null,"<b>什麼時候用：</b>"+it.u));
  c.appendChild(el("div","src","出處："+it.src));
  c.appendChild(actionRow("story",i,"【"+it.t+"】\n"+it.s+"\n\n什麼時候用："+it.u));
  return c;
}
const REPO_TR_URL="https://github.com/skyzbpt/JR/blob/claude/new-session-4j1sij/transcripts/";
function trCard(it){
  const full=(typeof FULLTR!=="undefined"&&FULLTR[it.id])||null;
  const pts=full?full.pts:it.pts;
  const c=el("div","card");
  c.appendChild(el("h3",null,icon("book")+" "+it.zh+' <span style="color:var(--muted);font-weight:400;font-size:13px">'+it.id+"</span>"));
  c.appendChild(el("div","tagrow",'<span class="chip static">'+it.cat+"</span>"));
  c.appendChild(el("p",null,"<b>"+it.one+"</b>"));
  const d1=el("details",null,"<summary style='cursor:pointer;color:var(--accent);font-size:14.5px;padding:4px 0'>核心重點（"+pts.length+" 條）▾</summary>");
  d1.appendChild(el("ul",null,pts.map(p=>"<li>"+p+"</li>").join("")));
  d1.open=!full; c.appendChild(d1);
  if(it.quote)c.appendChild(el("div","quote serif","「"+it.quote+"」"));
  if(full&&full.stories.length){
    const d2=el("details",null,"<summary style='cursor:pointer;color:var(--accent);font-size:14.5px;padding:4px 0'>經典金句／故事（"+full.stories.length+"）▾</summary>");
    d2.appendChild(el("ul",null,full.stories.map(p=>"<li>"+p+"</li>").join("")));
    c.appendChild(d2);
  }
  if(full&&full.faqs.length){
    const d3=el("details",null,"<summary style='cursor:pointer;color:var(--accent);font-size:14.5px;padding:4px 0'>這篇可回答的問題（"+full.faqs.length+"）▾</summary>");
    d3.appendChild(el("ul",null,full.faqs.map(p=>"<li>"+p+"</li>").join("")));
    c.appendChild(d3);
  }
  c.appendChild(el("div","src",'逐字稿：<a href="'+REPO_TR_URL+it.id+'.md" target="_blank" rel="noopener" style="color:var(--accent)">閱讀完整逐字稿 →</a>'));
  const plain=s=>s.replace(/<[^>]+>/g,"");
  c.appendChild(actionRow("tr",it.id,"《"+it.zh+"》\n"+it.one+"\n\n"+pts.map(p=>"• "+plain(p)).join("\n")));
  return c;
}

/* ---------- 搜尋頁 ---------- */
function doSearch(){
  const q=$("#q").value.trim(); const box=$("#results"); box.innerHTML="";
  if(!q){box.appendChild(el("div","empty","輸入你遇到的狀況，例如「新人說他很忙」"));return;}
  const rs=searchAll(q);
  if(!rs.length){box.appendChild(el("div","empty","找不到直接對應的內容——換個說法試試，或到「JR 智囊」用對話方式問。"));return;}
  const qa=rs.filter(r=>r.type==="qa"),st=rs.filter(r=>r.type==="story"),tr=rs.filter(r=>r.type==="tr");
  if(qa.length){box.appendChild(el("div","secttl","對應的問答（"+qa.length+"）"));qa.forEach(r=>box.appendChild(qaCard(r.item,r.id)));}
  if(st.length){box.appendChild(el("div","secttl","可用的故事（"+st.length+"）"));st.forEach(r=>box.appendChild(storyCard(r.item,r.id)));}
  if(tr.length){box.appendChild(el("div","secttl","相關演講（"+tr.length+"）"));tr.forEach(r=>box.appendChild(trCard(r.item)));}
}
$("#qbtn").addEventListener("click",doSearch);
$("#q").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch();});
HOTQ.forEach(h=>{
  const b=el("button","chip",h);
  b.addEventListener("click",()=>{$("#q").value=h;doSearch();});
  $("#hotq").appendChild(b);
});

/* ---------- 異議處理頁 ---------- */
function renderObjections(filter){
  const list=$("#obj-list");list.innerHTML="";
  QA.forEach((it,i)=>{
    if(it.type!=="obj")return;
    if(filter&&filter!=="全部"&&it.cat!==filter)return;
    const d=el("details","qa");
    d.appendChild(el("summary",null,it.q));
    const b=el("div","qa-body");
    b.appendChild(el("div",null,'<span class="answer-label">JR 的做法</span>'));
    b.appendChild(el("p",null,it.a));
    if(it.story)b.appendChild(el("div","quote",icon("bulb")+" 可搭配的故事：<b>"+it.story+"</b>"));
    b.appendChild(el("div","src","出處："+srcLinks(it.src)));
    b.appendChild(actionRow("qa",i,"【"+it.q+"】\n\nJR 的做法："+it.a));
    d.appendChild(b); list.appendChild(d);
  });
  const coach=el("div","secttl","帶團隊的問題（輔導）");list.appendChild(coach);
  QA.forEach((it,i)=>{
    if(it.type!=="coach")return;
    if(filter&&filter!=="全部"&&it.cat!==filter)return;
    const d=el("details","qa");
    d.appendChild(el("summary",null,it.q));
    const b=el("div","qa-body");
    b.appendChild(el("div",null,'<span class="answer-label">JR 的做法</span>'));
    b.appendChild(el("p",null,it.a));
    if(it.story)b.appendChild(el("div","quote",icon("bulb")+" 可搭配的故事：<b>"+it.story+"</b>"));
    b.appendChild(el("div","src","出處："+srcLinks(it.src)));
    b.appendChild(actionRow("qa",i,"【"+it.q+"】\n\nJR 的做法："+it.a));
    d.appendChild(b); list.appendChild(d);
  });
}
(function(){
  const cats=["全部",...new Set(QA.map(x=>x.cat))];
  cats.forEach((c,ix)=>{
    const b=el("button","chip"+(ix===0?" on":""),c);
    b.addEventListener("click",()=>{
      document.querySelectorAll("#obj-filter .chip").forEach(x=>x.classList.remove("on"));
      b.classList.add("on"); renderObjections(c);
    });
    $("#obj-filter").appendChild(b);
  });
  renderObjections("全部");
})();

/* ---------- 主題瀏覽頁 ---------- */
function renderTr(filter){
  const list=$("#tr-list");list.innerHTML="";
  CATS.forEach(cat=>{
    if(filter&&filter!=="全部"&&cat!==filter)return;
    const items=TRANSCRIPTS.filter(t=>t.cat===cat);
    if(!items.length)return;
    list.appendChild(el("div","secttl",cat+"（"+items.length+"）"));
    items.forEach(t=>list.appendChild(trCard(t)));
  });
}
(function(){
  const cats=["全部",...CATS.filter(c=>TRANSCRIPTS.some(t=>t.cat===c))];
  cats.forEach((c,ix)=>{
    const b=el("button","chip"+(ix===0?" on":""),c);
    b.addEventListener("click",()=>{
      document.querySelectorAll("#tr-filter .chip").forEach(x=>x.classList.remove("on"));
      b.classList.add("on"); renderTr(c);
    });
    $("#tr-filter").appendChild(b);
  });
  renderTr("全部");
})();

/* ---------- JR 智囊（檢索式對話） ---------- */
function chatReply(q){
  const rs=searchAll(q);
  const best=rs.find(r=>r.type==="qa");
  let html="";
  if(best&&best.score>=1){
    const it=best.item;
    html+="<p style='margin:0 0 8px'><b>"+it.q+"</b></p><p style='margin:0'>"+it.a+"</p>";
    if(it.story)html+='<div class="quote" style="margin:10px 0 0">'+icon("bulb")+' 可搭配的故事：<b>'+it.story+"</b></div>";
    html+='<div class="src">出處：'+srcLinks(it.src)+"</div>";
    const more=rs.filter(r=>r!==best).slice(0,3);
    if(more.length){
      html+='<div style="margin-top:10px;font-size:13.5px;color:var(--muted)">延伸：'+
        more.map(m=>m.type==="qa"?("「"+m.item.q+"」"):m.type==="story"?("故事《"+m.item.t+"》"):("演講《"+m.item.zh+"》")).join("・")+"</div>";
    }
  }else{
    const st=rs.find(r=>r.type==="story"),tr=rs.find(r=>r.type==="tr");
    if(st){
      html+="<p style='margin:0 0 8px'>這個情況可以用 JR 的故事——<b>"+st.item.t+"</b>：</p><p style='margin:0'>"+st.item.s+"</p><p style='margin:8px 0 0'><b>什麼時候用：</b>"+st.item.u+"</p><div class='src'>出處："+st.item.src+"</div>";
    }else if(tr){
      html+="<p style='margin:0 0 8px'>這題在《"+tr.item.zh+"》裡有完整教學：</p><p style='margin:0'><b>"+tr.item.one+"</b></p><ul>"+tr.item.pts.map(p=>"<li>"+p+"</li>").join("")+"</ul>";
    }else{
      html+="<p style='margin:0'>這個問題我還對不上 JR 的哪一篇教學。試試換個說法（例如「夥伴說不認識人」「被問是不是老鼠會」），或點上面的快速問題。</p>";
    }
  }
  return html;
}
$("#chatform").addEventListener("submit",e=>{
  e.preventDefault();
  const q=$("#chatin").value.trim(); if(!q)return;
  $("#chatin").value="";
  $("#chatlog").appendChild(el("div","msg user",q));
  const m=el("div","msg jr",'<div class="who">JR 智囊</div>'+chatReply(q));
  $("#chatlog").appendChild(m);
  m.scrollIntoView({behavior:"smooth",block:"end"});
});
HOTQ.forEach(h=>{
  const b=el("button","chip",h);
  b.addEventListener("click",()=>{$("#chatin").value=h;$("#chatform").dispatchEvent(new Event("submit"));});
  $("#quickq").appendChild(b);
});

/* ---------- 劇本產生器 ---------- */
(function(){
  const pick=$("#scen-pick");
  SCENARIOS.forEach((s,i)=>{
    const b=el("button",null,icon(s.icon)+" "+s.t);
    b.addEventListener("click",()=>{
      document.querySelectorAll("#scen-pick button").forEach(x=>x.classList.remove("on"));
      b.classList.add("on"); renderScen(i);
    });
    pick.appendChild(b);
  });
  function renderScen(i){
    const s=SCENARIOS[i]; const out=$("#scen-out"); out.innerHTML="";
    const c=el("div","card");
    c.appendChild(el("h3",null,icon(s.icon)+" "+s.t+" — JR 式劇本"));
    const sec=(label,html)=>{const d=el("div","script-sec");d.appendChild(el("span","answer-label",label));d.appendChild(el("div",null,html));c.appendChild(d);};
    sec("開場白","<div class='quote serif'>"+s.open+"</div>");
    sec("關鍵句與心法","<ul>"+s.key.map(k=>"<li>"+k+"</li>").join("")+"</ul>");
    sec("可用故事",s.story);
    sec("收尾","<div class='quote serif'>"+s.close+"</div>");
    sec('地雷（別做）',"<div class='warnbox'>"+icon("warn")+" "+s.avoid+"</div>");
    c.appendChild(el("div","src","出處："+s.src));
    const txt=s.t+"\n\n【開場】"+s.open+"\n\n【關鍵】\n"+s.key.map(k=>"• "+k).join("\n")+"\n\n【收尾】"+s.close+"\n\n【避免】"+s.avoid;
    const row=el("div","actions"); const sb=el("button","abtn",icon("share")+"分享劇本");
    sb.addEventListener("click",()=>shareText(txt)); row.appendChild(sb); c.appendChild(row);
    out.appendChild(c); out.scrollIntoView({behavior:"smooth",block:"start"});
  }
})();

/* ---------- 金句故事頁 ---------- */
function renderStories(filter){
  const list=$("#st-list");list.innerHTML="";
  STORIES.forEach((it,i)=>{
    if(filter&&filter!=="全部"&&it.cat!==filter)return;
    list.appendChild(storyCard(it,i));
  });
}
(function(){
  const cats=["全部",...new Set(STORIES.map(x=>x.cat))];
  cats.forEach((c,ix)=>{
    const b=el("button","chip"+(ix===0?" on":""),c);
    b.addEventListener("click",()=>{
      document.querySelectorAll("#st-filter .chip").forEach(x=>x.classList.remove("on"));
      b.classList.add("on"); renderStories(c);
    });
    $("#st-filter").appendChild(b);
  });
  renderStories("全部");
})();

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
    c.appendChild(el("div","src","出處："+s.src));
    step.appendChild(c); list.appendChild(step);
  });
})();

/* ---------- 90 天追蹤器 ---------- */
function trkState(){
  let s=store.get("jr90",null);
  if(!s){s={start:new Date().toISOString().slice(0,10),days:{}};store.set("jr90",s);}
  return s;
}
function dayNum(s){
  const start=new Date(s.start+"T00:00:00");
  const n=Math.floor((Date.now()-start.getTime())/86400000)+1;
  return Math.min(Math.max(n,1),90);
}
function renderTracker(){
  const s=trkState(); const d=dayNum(s);
  $("#trk-daynum").textContent=d;
  const today=s.days[d]||{};
  const doneCount=CHECKS.filter(c=>today[c.k]).length;
  $("#trk-bar").style.width=Math.round(d/90*100)+"%";
  const box=$("#trk-checks");box.innerHTML="";
  CHECKS.forEach(c=>{
    const lab=el("label","ck"+(today[c.k]?" done":""));
    const cb=document.createElement("input");cb.type="checkbox";cb.checked=!!today[c.k];
    cb.addEventListener("change",()=>{
      const st=trkState(); const dd=st.days[d]||{}; dd[c.k]=cb.checked; st.days[d]=dd; store.set("jr90",st); renderTracker();
      if(cb.checked&&CHECKS.every(x=>dd[x.k]))toast("今日全數完成！90 天就是這樣堆出來的");
    });
    const t=el("div","ck-t","<b>"+c.t+"</b><span>"+c.d+"</span>");
    lab.append(cb,t); box.appendChild(lab);
  });
  const grid=$("#daygrid");grid.innerHTML="";
  for(let i=1;i<=90;i++){
    const cell=el("div",null,"");
    const dd=s.days[i]||{}; const n=CHECKS.filter(c=>dd[c.k]).length;
    if(n>=CHECKS.length)cell.classList.add("p3");
    else if(n>=3)cell.classList.add("p2");
    else if(n>=1)cell.classList.add("p1");
    if(i===d)cell.classList.add("today");
    cell.title="第 "+i+" 天："+n+"/"+CHECKS.length;
    grid.appendChild(cell);
  }
}
$("#trk-reset").addEventListener("click",()=>{
  if(confirm("確定要歸零、從今天重新開始 90 天嗎？")){
    store.set("jr90",{start:new Date().toISOString().slice(0,10),days:{}});
    renderTracker(); toast("新的 90 天，開始！");
  }
});

/* ---------- 主題測驗 ---------- */
function renderQuiz(){
  const rate=store.get("jrquiz",{});
  const list=$("#qz-list");list.innerHTML="";
  QUIZ.forEach((qz,i)=>{
    const c=el("div","card");
    c.appendChild(el("h3",null,"題 "+(i+1)+"：請用一段話，向一個完全不懂的人解釋——<b>"+qz.t+"</b>"));
    const d=el("details",null,"<summary style='cursor:pointer;color:var(--accent);font-size:14.5px'>先自己說一遍，再展開對照 JR 的版本 ▾</summary>");
    const inner=el("div","quote serif",qz.m); d.appendChild(inner); c.appendChild(d);
    const rateRow=el("div","qz-rate");
    ["還不熟","答得出一半","能教別人了"].forEach((lbl,lv)=>{
      const b=el("button",rate[i]===lv?("sel-"+lv):"",lbl);
      b.addEventListener("click",()=>{const r=store.get("jrquiz",{});r[i]=lv;store.set("jrquiz",r);renderQuiz();});
      rateRow.appendChild(b);
    });
    c.appendChild(rateRow); list.appendChild(c);
  });
  const done=Object.values(rate).filter(v=>v===2).length;
  $("#qz-score").innerHTML="目前自評：<b>"+done+" / "+QUIZ.length+"</b> 個主題「能教別人了」。JR：「這個考試通過了會讓你賺錢。」";
}
renderQuiz();

/* ---------- 收藏頁 ---------- */
function renderFav(){
  const f=store.get("jrfav",[]); const list=$("#fav-list");list.innerHTML="";
  if(!f.length){list.appendChild(el("div","empty","還沒有收藏。到任何卡片點「收藏」就會出現在這裡。"));return;}
  f.forEach(k=>{
    const [type,id]=k.split(":");
    if(type==="qa"&&QA[+id])list.appendChild(qaCard(QA[+id],+id));
    if(type==="story"&&STORIES[+id])list.appendChild(storyCard(STORIES[+id],+id));
    if(type==="tr"){const t=TRANSCRIPTS.find(x=>x.id===id);if(t)list.appendChild(trCard(t));}
  });
}

/* ---------- 啟動 ---------- */
(function(){
  const h=(location.hash||"").replace("#","");
  show(TABS.some(t=>t.id===h)?h:"search");
})();
</script>
