/* ============ CONFIG (à remplacer) ============ */
const EMAIL = "pierre@exemple.ch";
const LINKEDIN = "https://www.linkedin.com/";
const GITHUB = "https://github.com/";
/* Envoi direct : colle ici ton endpoint Formspree (ex. "https://formspree.io/f/abcdwxyz").
   Vide = mode mailto. Si l'envoi échoue (ex. aperçu Claude), repli automatique sur mailto. */
const FORM_ENDPOINT = "";

/* ============ TEXTES ============ */
const T = {
fr:{
  role:"Ingénieur des médias",
  nav_projects:"Projets", nav_about:"À propos", nav_contact:"Contact",
  hero_a:'Vos <span class="ins ins-img">{IMG}</span> idées,',
  hero_b:'<span style="white-space:nowrap">de A à Z <i class="ins ins-star"></i></span>',
  rot:["conçues","designées","développées","pilotées","communiquées"],
  sub:["Bachelor Ingénierie des médias · HEIG-VD","Basé à Neuchâtel"],
  see_projects:"Voir les projets", get_in_touch:"Me contacter",
  skills_eyebrow:"Compétences", skills_title:"Tout ce qu'il faut pour mener un projet digital de A à Z.",
  skills_intro:"Ma formation en ingénierie des médias couvre la technique, le design, la communication et la gestion. Je peux intervenir sur une partie du projet ou le suivre de bout en bout.",
  stack_eyebrow:"Stack & outils", stack_title:"Les outils que j'utilise au quotidien.",
  cats:{dev:"Développement",data:"Data",design:"Design & création",collab:"Collaboration"},
  sel_eyebrow:"Sélection", sel_title:"Projets récents", all_projects:"Tous les projets",
  cta_title:"Un projet, un stage, une idée ?", cta_text:"Écrivez-moi en quelques lignes. Je réponds rapidement.", cta_btn:"Démarrer la discussion",
  projects_title:"Projets", projects_intro:"Développement web, UX/UI, data visualisation et communication digitale. Survolez un nom pour aperçu.",
  all:"Tous", demo:"Exemple", demo_note:"Projet fictif · contenu de démonstration",
  back:"← Tous les projets",
  f_client:"Client", f_year:"Année", f_role:"Rôle", f_team:"Équipe", f_stack:"Stack & outils", f_deliv:"Livrables", f_links:"Liens",
  s_context:"Contexte", s_feat:"Réalisations", s_process:"Méthode", s_gallery:"Galerie", s_results:"Résultats & apprentissages",
  g_desk:"Site desktop", g_mob:"Version mobile", g_idn:"Identité visuelle", palette:"Palette",
  prev:"Projet précédent", next:"Projet suivant",
  about_title:"À propos",
  bio:["Je suis Pierre, étudiant en Bachelor Ingénierie des médias à la HEIG-VD. Je travaille à la frontière entre la technique et la communication : je développe des applications web, je conçois des interfaces et je construis les stratégies qui les font exister.","En projet d'équipe, j'occupe souvent le rôle de Scrum Master en parallèle du développement back-end. J'aime structurer un projet, faciliter les échanges entre client et équipe, et livrer un produit qui tient la route.","Je cherche aujourd'hui un stage ou un premier emploi, et je reste ouvert aux mandats ponctuels."],
  tl:[["En cours","Bachelor of Science HES-SO en Ingénierie des médias","HEIG-VD, Yverdon-les-Bains. Développement web et mobile, UX/UI, communication et marketing digital, gestion de projet."],["Projets","Mandats et projets en équipe","Plateforme web pour un partenaire hospitalier, analyse d'écosystème digital, stratégie réseaux sociaux, tests d'utilisabilité."]],
  values:[["Comprendre avant de produire","Chaque projet commence par le besoin réel des utilisateurs et du client."],["Livrer proprement","Code lisible, documentation, décisions justifiées. Ce qui est livré peut être repris."],["Faire avancer l'équipe","Rituels clairs, priorités visibles, communication directe."]],
  cv:"CV bientôt disponible", photo:"Votre photo ici",
  c_title1:"Parlons de votre", c_title2:'pr<i class="gl gl-o c-ink"></i>chain projet.',
  c_intro:"Un projet, une collaboration, un stage ou un emploi ? Écrivez-moi, je reviens vers vous rapidement.",
  c_type:"Votre demande concerne",
  types:["Projet","Collaboration","Stage / Emploi","Travail de Bachelor","Autre"],
  c_name:"Nom", c_email:"E-mail", c_company:"Entreprise (optionnel)", c_msg:"Votre message",
  c_send:FORM_ENDPOINT?"Envoyer le message":"Préparer le message", sending:"Envoi…", sent_t:"Message envoyé.", sent_p:"Merci, je vous réponds rapidement.", send_err:"L'envoi direct n'a pas fonctionné.",
  e_name:"Indiquez votre nom.", e_email:"Indiquez une adresse e-mail valide.", e_msg:"Écrivez quelques mots sur votre demande.",
  ready:"Votre message est prêt. Ouvrez-le dans votre messagerie, ou copiez-le et envoyez-le à l'adresse ci-contre.",
  open_mail:"Ouvrir dans ma messagerie", copy_msg:"Copier le message", copied:"Copié", copy:"Copier", open:"Ouvrir ↗",
  k_email:"E-mail", k_linkedin:"LinkedIn", k_github:"GitHub", k_loc:"Localisation", loc:"Neuchâtel, Suisse"
},
en:{
  role:"Media engineer",
  nav_projects:"Work", nav_about:"About", nav_contact:"Contact",
  hero_a:'Your <span class="ins ins-img">{IMG}</span> ideas,',
  hero_b:'<br><span style="white-space:nowrap">from start to finish <i class="ins ins-star"></i></span>',
  rot:["designed","prototyped","developed","managed","promoted"],
  sub:["BSc Media Engineering · HEIG-VD","Based in Neuchâtel, Switzerland"],
  see_projects:"See the work", get_in_touch:"Get in touch",
  skills_eyebrow:"Skills", skills_title:"Everything a digital project needs, from start to finish.",
  skills_intro:"My media engineering degree covers technology, design, communication and management. I can take on one part of a project or follow it end to end.",
  stack_eyebrow:"Stack & tools", stack_title:"The tools I use every day.",
  cats:{dev:"Development",data:"Data",design:"Design & content",collab:"Collaboration"},
  sel_eyebrow:"Selection", sel_title:"Recent work", all_projects:"All projects",
  cta_title:"A project, an internship, an idea?", cta_text:"Send me a few lines. I reply quickly.", cta_btn:"Start the conversation",
  projects_title:"Work", projects_intro:"Web development, UX/UI, data visualisation and digital communication. Hover a name for a preview.",
  all:"All", demo:"Sample", demo_note:"Fictional project · sample content",
  back:"← All projects",
  f_client:"Client", f_year:"Year", f_role:"Role", f_team:"Team", f_stack:"Stack & tools", f_deliv:"Deliverables", f_links:"Links",
  s_context:"Context", s_feat:"What I built", s_process:"Process", s_gallery:"Gallery", s_results:"Results & takeaways",
  g_desk:"Desktop site", g_mob:"Mobile version", g_idn:"Visual identity", palette:"Palette",
  prev:"Previous project", next:"Next project",
  about_title:"About",
  bio:["I'm Pierre, a BSc Media Engineering student at HEIG-VD in Switzerland. I work where technology meets communication: I build web applications, design interfaces and shape the strategies that bring them to life.","In team projects I often act as Scrum Master alongside back-end development. I like structuring a project, keeping client and team aligned, and shipping a product that holds up.","I'm currently looking for an internship or a first job, and I'm open to freelance work."],
  tl:[["Ongoing","BSc HES-SO in Media Engineering","HEIG-VD, Yverdon-les-Bains. Web and mobile development, UX/UI, digital communication and marketing, project management."],["Projects","Client work and team projects","Web platform for a hospital partner, digital ecosystem audit, social media strategy, usability testing."]],
  values:[["Understand before building","Every project starts with what users and the client actually need."],["Ship clean work","Readable code, documentation, decisions explained. What I deliver can be picked up by others."],["Move the team forward","Clear rituals, visible priorities, direct communication."]],
  cv:"CV coming soon", photo:"Your photo here",
  c_title1:"Let's talk about", c_title2:'y<i class="gl gl-o c-ink"></i>ur next project.',
  c_intro:"A project, a collaboration, an internship or a job? Write to me and I'll get back to you quickly.",
  c_type:"Your request is about",
  types:["Project","Collaboration","Internship / Job","Bachelor thesis","Other"],
  c_name:"Name", c_email:"Email", c_company:"Company (optional)", c_msg:"Your message",
  c_send:FORM_ENDPOINT?"Send the message":"Prepare the message", sending:"Sending…", sent_t:"Message sent.", sent_p:"Thanks, I'll get back to you soon.", send_err:"Direct sending didn't work.",
  e_name:"Enter your name.", e_email:"Enter a valid email address.", e_msg:"Write a few words about your request.",
  ready:"Your message is ready. Open it in your email app, or copy it and send it to the address on the right.",
  open_mail:"Open in my email app", copy_msg:"Copy the message", copied:"Copied", copy:"Copy", open:"Open ↗",
  k_email:"Email", k_linkedin:"LinkedIn", k_github:"GitHub", k_loc:"Location", loc:"Neuchâtel, Switzerland"
}};

const SKILLS = [
 {sh:"o",c:"lilac",fr:["Développement web","Applications web complètes, du front-end au back-end : interfaces réactives, API, bases de données et intégration."],en:["Web development","Full web applications, front-end to back-end: reactive interfaces, APIs, databases and integration."],tags:["Vue.js","Laravel","PHP","MySQL","REST API","Responsive"]},
 {sh:"q",c:"peach",fr:["UX/UI & conception d'interfaces","Recherche utilisateur, arborescence, wireframes, prototypes interactifs et tests d'utilisabilité."],en:["UX/UI & interface design","User research, information architecture, wireframes, interactive prototypes and usability testing."],tags:["Figma","Tests utilisateurs","Prototypage","Accessibilité"]},
 {sh:"t",c:"mint",fr:["Data visualisation","Transformer des données en graphiques lisibles et interactifs qui racontent quelque chose."],en:["Data visualisation","Turning data into clear, interactive charts that tell a story."],tags:["D3.js","SVG","Storytelling","Excel"]},
 {sh:"s",c:"sky",fr:["Communication & marketing digital","Audit d'écosystème digital, stratégie réseaux sociaux, planification éditoriale et suivi des performances."],en:["Digital communication & marketing","Digital ecosystem audits, social media strategy, editorial planning and performance tracking."],tags:["Stratégie","Réseaux sociaux","SEO","Analytics"]},
 {sh:"x",c:"rose",fr:["Création de contenu","Photo, vidéo et graphisme pour le web et les réseaux, cohérents avec l'identité de la marque."],en:["Content creation","Photo, video and graphics for web and social media, consistent with the brand identity."],tags:["Photoshop","Illustrator","Premiere Pro","Lightroom","Canva"]},
 {sh:"o",c:"butter",fr:["Gestion de projet","Méthodes agiles, Scrum, planification, coordination entre client et équipe, documentation."],en:["Project management","Agile methods, Scrum, planning, client and team coordination, documentation."],tags:["Scrum","Taiga","GitHub","Miro"]}
];

const STACK = {
 dev:["HTML","CSS","JavaScript","Vue.js","Laravel","PHP","MySQL","WordPress","Git","GitHub","VS Code"],
 data:["D3.js","SVG","Excel"],
 design:["Figma","Photoshop","Illustrator","InDesign","Premiere Pro","After Effects","Lightroom","Canva"],
 collab:["Microsoft 365","Word","PowerPoint","Teams","Miro","Taiga"]
};
const CAT = {dev:["o","lilac"],data:["t","mint"],design:["q","peach"],collab:["s","butter"]};
/* Projets : chargés depuis data/projects.json */
let P = [];
const CATS = {web:{fr:"Web",en:"Web"},data:{fr:"Data viz",en:"Data viz"},ux:{fr:"UX/UI",en:"UX/UI"},com:{fr:"Communication",en:"Communication"},design:{fr:"Design",en:"Design"}};

/* ============ OUTILS ============ */
let lang = "fr";
try{ const s = localStorage.getItem("pf-lang"); if(s==="en"||s==="fr") lang = s; }catch(e){}
const t = k => T[lang][k];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const COL = {lilac:"#C9BBF3",mint:"#B6E0C6",peach:"#F7C2A3",butter:"#F2DC86",sky:"#B5D1EE",rose:"#F2B7C7",ink:"#211F2C",cream:"#F3EDE2",paper:"#FAF6EE"};
const shapeEl = (sh,c,cls="") => `<i class="${cls} sh-${sh}" style="background:${COL[c]}" aria-hidden="true"></i>`;

function rng(seed){let h=1779033703^seed.length;for(let i=0;i<seed.length;i++){h=Math.imul(h^seed.charCodeAt(i),3432918353);h=h<<13|h>>>19}return function(){h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);return((h^=h>>>16)>>>0)/4294967296}}
/* Composition géométrique (couvertures, visuels) */
function art(seed, pal, cols, rows){
  const r = rng(seed), colors = [...pal, COL.ink, COL.cream, COL.paper];
  const pick = () => colors[Math.floor(r()*colors.length)];
  let s = `<svg viewBox="0 0 ${cols*10} ${rows*10}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">`;
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const X=x*10,Y=y*10,cx=X+5,cy=Y+5; let bg=pick(), fg=pick(); while(fg===bg) fg=pick();
    const rot = Math.floor(r()*4)*90, k = Math.floor(r()*6);
    s += `<rect x="${X}" y="${Y}" width="10" height="10" fill="${bg}"/>`;
    const g = d => `<g transform="rotate(${rot} ${cx} ${cy})">${d}</g>`;
    if(k===0) s += `<circle cx="${cx}" cy="${cy}" r="4.2" fill="${fg}"/>`;
    else if(k===1) s += g(`<path d="M${X} ${Y}A5 5 0 0 1 ${X} ${Y+10}Z" fill="${fg}"/><path d="M${X+10} ${Y}A5 5 0 0 0 ${X+10} ${Y+10}Z" fill="${fg}"/>`);
    else if(k===2) s += g(`<path d="M${X} ${Y}H${X+10}A10 10 0 0 1 ${X} ${Y+10}Z" fill="${fg}"/>`);
    else if(k===3) s += g(`<path d="M${X} ${Y+10}A5 5 0 0 1 ${X+10} ${Y+10}Z" fill="${fg}"/><circle cx="${cx}" cy="${Y+3}" r="1.6" fill="${fg}"/>`);
    else if(k===4) s += `<path d="M${cx} ${Y+1}L${X+9} ${cy}L${cx} ${Y+9}L${X+1} ${cy}Z" fill="${fg}"/>`;
  }
  return s + `</svg>`;
}
/* Maquettes d'écrans */
function screenDesk(p){
  const a = art(p.slug+"d", p.pal, 8, 3);
  return `<svg viewBox="0 0 320 200" aria-hidden="true"><rect width="320" height="200" fill="${COL.paper}"/>
  <rect x="14" y="12" width="40" height="8" rx="4" fill="${COL.ink}"/><rect x="230" y="12" width="22" height="8" rx="4" fill="${COL.ink}"/><rect x="256" y="12" width="22" height="8" rx="4" fill="${COL.ink}"/><rect x="282" y="12" width="24" height="8" rx="4" fill="${p.pal[0]}"/>
  <rect x="14" y="36" width="150" height="14" rx="3" fill="${COL.ink}"/><rect x="14" y="56" width="110" height="14" rx="3" fill="${COL.ink}"/>
  <rect x="14" y="80" width="140" height="5" rx="2" fill="#DCD3C4"/><rect x="14" y="90" width="120" height="5" rx="2" fill="#DCD3C4"/>
  <rect x="14" y="104" width="54" height="14" rx="7" fill="${p.pal[1]}"/>
  <svg x="180" y="34" width="126" height="90" viewBox="0 0 80 30" preserveAspectRatio="xMidYMid slice">${a.replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}</svg>
  <rect x="14" y="140" width="92" height="46" rx="6" fill="${p.pal[0]}"/><rect x="114" y="140" width="92" height="46" rx="6" fill="${p.pal[2]}"/><rect x="214" y="140" width="92" height="46" rx="6" fill="${p.pal[1]}"/></svg>`;
}
function screenMob(p){
  return `<svg viewBox="0 0 120 230" aria-hidden="true"><rect width="120" height="230" fill="${COL.paper}"/>
  <rect x="10" y="14" width="26" height="7" rx="3.5" fill="${COL.ink}"/><circle cx="104" cy="17" r="5" fill="${p.pal[0]}"/>
  <rect x="10" y="34" width="86" height="10" rx="2" fill="${COL.ink}"/><rect x="10" y="48" width="64" height="10" rx="2" fill="${COL.ink}"/>
  <rect x="10" y="68" width="100" height="70" rx="10" fill="${p.pal[1]}"/><circle cx="60" cy="103" r="22" fill="${p.pal[0]}"/><path d="M60 81A22 22 0 0 1 82 103H60Z" fill="${COL.ink}"/>
  <rect x="10" y="148" width="48" height="34" rx="8" fill="${p.pal[2]}"/><rect x="62" y="148" width="48" height="34" rx="8" fill="${p.pal[0]}"/>
  <rect x="10" y="192" width="100" height="22" rx="11" fill="${COL.ink}"/><rect x="40" y="200" width="40" height="6" rx="3" fill="${COL.paper}"/></svg>`;
}

/* ============ VUES ============ */
function rowsHTML(list){
  return `<div class="index">` + list.map(p => {
    const L = p[lang], n = p.name.toUpperCase(), m = Math.ceil(n.length/2);
    return `<a class="row" href="#p-${p.slug}">
      <span class="meta">${esc(p.year)}</span>
      <span class="name" aria-label="${esc(p.name)}"><span>${esc(n.slice(0,m))}</span><span class="pop">${art(p.slug, p.pal, 6, 2)}</span><span>${esc(n.slice(m))}</span></span>
      <span class="meta r"><span>${esc(L.cat)}</span><span class="demo">${t("demo")}</span></span></a>`;
  }).join("") + `</div>`;
}
function cta(){
  return `<div class="wrap"><div class="cta"><div><h2>${t("cta_title")}</h2><p>${t("cta_text")}</p></div><a class="pill" href="#contact">${t("cta_btn")}</a></div></div>`;
}
let rotTimer = null;
function viewHome(){
  const words = t("rot"), wcol = ["lilac","mint","peach","sky","butter"];
  const subc = ["lilac","mint","peach"];
  const chips = cats => cats.flatMap(c => STACK[c].map(n => `<span class="chip">${shapeEl(CAT[c][0],CAT[c][1])}${esc(n)}</span>`)).join("");
  const r1 = chips(["dev","data"]), r2 = chips(["design","collab"]);
  return `
  <section class="hero">
    <div class="wrap fade">
    <h1>${t("hero_a").replace("{IMG}", art("hero", [COL.lilac,COL.peach,COL.mint], 4, 2))} <span class="rot" id="rot">${words.map((w,i)=>`<span class="c-${wcol[i]}${i===0?" on":""}">${esc(w)}</span>`).join("")}</span> ${t("hero_b").replace("{IMG}", art("hero", [COL.lilac,COL.peach,COL.mint], 4, 2))}</h1>
    <div class="sub mono">${t("sub").map((s,i)=>`<span><i class="c-${subc[i]}"></i>${esc(s)}</span>`).join("")}</div>
    <div class="actions"><a class="pill" href="#projets">${t("see_projects")}</a><a class="pill ghost" href="#contact">${t("get_in_touch")}</a></div>
  </div>
  </section>

  <section class="block wrap">
    <div class="skills">
      <div class="intro"><span class="mono">${t("skills_eyebrow")}</span><h2 style="font-size:clamp(1.7rem,3.4vw,2.6rem);margin-top:10px">${t("skills_title")}</h2><p>${t("skills_intro")}</p></div>
      <div class="acc">${SKILLS.map((s,i)=>`<div class="sk" tabindex="0"><div class="sk-head">${shapeEl(s.sh,s.c,"shape")}<span>${esc(s[lang][0])}</span></div><div class="bw"><div class="body"><p>${esc(s[lang][1])}</p><div class="tags">${s.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div></div></div></div>`).join("")}</div>
    </div>
  </section>

  <section class="stack">
    <div class="wrap">
      <div class="sec-head"><div><span class="mono">${t("stack_eyebrow")}</span><h2 style="margin-top:10px">${t("stack_title")}</h2></div>
        <div class="legend">${Object.keys(CAT).map(c=>`<span><i class="sh-${CAT[c][0]}" style="width:12px;height:12px;display:inline-block;background:${COL[CAT[c][1]]}" aria-hidden="true"></i>${t("cats")[c]}</span>`).join("")}</div>
      </div>
    </div>
    <div class="marquee">
      <div class="track">${r1}<span aria-hidden="true" style="display:contents">${r1}</span></div>
      <div class="track rev">${r2}<span aria-hidden="true" style="display:contents">${r2}</span></div>
    </div>
  </section>

  <section class="block wrap">
    <div class="sec-head" style="border:0;padding:0"><div><span class="mono">${t("sel_eyebrow")}</span><h2 style="margin-top:10px">${t("sel_title")}</h2></div></div>
    ${rowsHTML(P.slice(0,4))}
    <div class="more"><a class="pill ghost" href="#projets">${t("all_projects")}</a></div>
  </section>
  ${cta()}`;
}
function startRot(){
  const box = document.getElementById("rot"); if(!box) return;
  const items = [...box.children]; let i = 0;
  /* largeur fixe = mot le plus long : le nombre de lignes ne change jamais */
  const fit = () => {
    box.style.width = ""; box.style.fontSize = "";
    const max = box.getBoundingClientRect().width, avail = box.parentElement.clientWidth;
    const k = max > avail ? avail / max : 1;
    if(k < 1) box.style.fontSize = k + "em";
    box.style.width = (max * k) + "px";
  };
  fit();
  window.onresize = fit;
  if(document.fonts) document.fonts.ready.then(fit);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const EASE = "transform .6s cubic-bezier(.65,0,.25,1)";
  rotTimer = setInterval(() => {
    if(document.hidden) return;
    const cur = items[i], nx = items[(i+1) % items.length];
    /* le mot suivant repart toujours d'en bas, sans transition */
    nx.style.transition = "none"; nx.style.transform = "translateY(115%)";
    void nx.offsetHeight;
    nx.style.transition = EASE; cur.style.transition = EASE;
    nx.style.transform = "translateY(0)"; cur.style.transform = "translateY(-115%)";
    i = (i+1) % items.length;
  }, 2600);
}
let filter = "all";
function viewProjects(){
  const list = filter==="all" ? P : P.filter(p=>p.cat===filter);
  const btn = (k,l) => `<button type="button" data-filter="${k}" aria-pressed="${filter===k}">${esc(l)}</button>`;
  return `<section class="wrap page-head fade"><span class="mono">${P.length} ${lang==="fr"?"projets":"projects"} · 2025–2026</span><h1 style="margin-top:10px">${t("projects_title")}</h1><p>${t("projects_intro")}</p>
    <div class="filters">${btn("all",t("all"))}${Object.keys(CATS).map(k=>btn(k,CATS[k][lang])).join("")}</div></section>
    <section class="wrap" style="padding-bottom:20px">${rowsHTML(list)}</section>${cta()}`;
}
function viewProject(p){
  const L = p[lang], i = P.indexOf(p), prev = P[(i-1+P.length)%P.length], next = P[(i+1)%P.length];
  const shapes = ["o","q","t","s"];
  const gal = p.gal.map((g,k) => {
    const solo = p.gal.length===1 ? " solo" : "";
    if(g==="desk") return `<figure class="g-item desk${solo}" style="margin:0"><div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="screen">${screenDesk(p)}</div></div><figcaption class="mono">${t("g_desk")}</figcaption></figure>`;
    if(g==="mob") return `<figure class="g-item mob${solo}" style="margin:0"><div class="frame" style="height:100%;display:grid;place-items:center;padding:24px"><div class="phone"><div class="screen">${screenMob(p)}</div></div></div><figcaption class="mono">${t("g_mob")}</figcaption></figure>`;
    return `<figure class="g-item idn" style="margin:0"><div class="idn-box"><div class="frame" style="padding:0;overflow:hidden;aspect-ratio:16/9">${art(p.slug+"i",p.pal,8,4.5|0)}</div>
      <div class="swatches">${[...p.pal, COL.ink].map(c=>`<div class="sw" style="background:${c};color:${c===COL.ink?COL.paper:COL.ink}">${c}</div>`).join("")}</div></div><figcaption class="mono" style="margin-top:10px">${t("g_idn")} · ${t("palette")}</figcaption></figure>`;
  }).join("");
  return `
  <section class="wrap p-hero fade">
    <a class="back mono" href="#projets">${t("back")}</a>
    <div class="eyebrow"><span class="mono">${esc(L.cat)} · ${esc(p.year)}</span><span class="demo-note">${t("demo_note")}</span></div>
    <h1>${esc(p.name)}</h1>
    <p class="tagline">${esc(L.tag)}</p>
  </section>
  <div class="wrap"><div class="cover">${art(p.slug, p.pal, 16, 7)}</div></div>
  <div class="wrap"><dl class="facts">
    <div><dt class="mono">${t("f_client")}</dt><dd>${esc(L.client)}</dd></div>
    <div><dt class="mono">${t("f_year")}</dt><dd>${esc(p.year)}</dd></div>
    <div><dt class="mono">${t("f_role")}</dt><dd>${esc(L.role)}</dd></div>
    <div><dt class="mono">${t("f_team")}</dt><dd>${esc(L.team)}</dd></div>
    <div class="wide"><dt class="mono">${t("f_stack")}</dt><dd class="tags">${p.stack.map(s=>`<span class="tag">${esc(s)}</span>`).join("")}</dd></div>
    <div><dt class="mono">${t("f_deliv")}</dt><dd>${esc(L.deliv)}</dd></div>
    <div><dt class="mono">${t("f_links")}</dt><dd><a href="https://github.com/" target="_blank" rel="noopener">GitHub ↗</a><a href="https://example.com/" target="_blank" rel="noopener">Live ↗</a></dd></div>
  </dl></div>
  <section class="wrap"><div class="p-sec"><span class="mono">${t("s_context")}</span><p class="lead">${esc(L.ctx)}</p></div></section>
  <section class="wrap quote"><div class="mark">${p.pal.map((c,k)=>`<i style="background:${c}" class="sh-${shapes[k]}"></i>`).join("")}</div><blockquote>${esc(L.quote)}</blockquote></section>
  <section class="wrap"><div class="p-sec" style="border-top:1px solid var(--line)"><span class="mono">${t("s_feat")}</span>
    <div class="feat">${L.feat.map((f,k)=>`<article><div class="vis">${art(p.slug+"f"+k, p.pal, 4, 3)}</div><div><span class="n">0${k+1}</span><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p></div></article>`).join("")}</div></div></section>
  <section class="wrap"><div class="p-sec"><span class="mono">${t("s_process")}</span>
    <div class="steps">${L.proc.map((s,k)=>`<div class="step">${shapeEl(shapes[k],["lilac","mint","peach","butter"][k])}<span class="k">${k+1} / ${L.proc.length}</span><b>${esc(s[0])}</b><p>${esc(s[1])}</p></div>`).join("")}</div></div></section>
  <section class="wrap"><div class="p-sec"><span class="mono">${t("s_gallery")}</span><div class="gallery">${gal}</div></div></section>
  <section class="wrap"><div class="p-sec"><span class="mono">${t("s_results")}</span><div>
    <div class="metrics">${L.met.map((m,k)=>`<div class="metric" style="background:${p.pal[k%3]}"><b>${esc(m[0])}</b><span>${esc(m[1])}</span></div>`).join("")}</div>
    <p class="lead">${esc(L.learn)}</p></div></div></section>
  <div class="wrap"><nav class="pn" aria-label="Projets"><a href="#p-${prev.slug}"><span class="mono">← ${t("prev")}</span><b>${esc(prev.name)}</b></a><a href="#p-${next.slug}"><span class="mono">${t("next")} →</span><b>${esc(next.name)}</b></a></nav></div>
  ${cta()}`;
}
function viewAbout(){
  const vc = [["o","lilac"],["q","mint"],["s","peach"]];
  return `<section class="wrap page-head fade"><span class="mono">Pierre · ${t("role")}</span><h1 style="margin-top:10px">${t("about_title")}</h1></section>
  <section class="wrap about">
    <div><div class="portrait">${art("portrait",[COL.lilac,COL.peach,COL.mint],4,5)}<span class="demo-note">${t("photo")}</span></div></div>
    <div class="bio">${t("bio").map(p=>`<p>${esc(p)}</p>`).join("")}
      <div class="tl">${t("tl").map(r=>`<div><span class="mono">${esc(r[0])}</span><div><b>${esc(r[1])}</b><p>${esc(r[2])}</p></div></div>`).join("")}</div>
      <div class="values">${t("values").map((v,k)=>`<div class="value">${shapeEl(vc[k][0],vc[k][1])}<b>${esc(v[0])}</b><p>${esc(v[1])}</p></div>`).join("")}</div>
      <div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap"><span class="pill ghost" aria-disabled="true" style="opacity:.6;cursor:default">${t("cv")}</span><a class="pill" href="#contact">${t("get_in_touch")}</a></div>
    </div>
  </section>`;
}
function viewContact(){
  return `<section class="contact is-contact"><div class="wrap fade">
    <h1>${t("c_title1")}<strong>${t("c_title2")}</strong></h1>
    <p class="intro">${t("c_intro")}</p>
    <div class="c-grid">
      <form id="cform" novalidate>
        <fieldset><legend class="mono" style="color:var(--ink)">${t("c_type")}</legend>
          <div class="types">${t("types").map((x,i)=>`<label><input type="radio" name="type" id="type-${i}" value="${esc(x)}"${i===0?" checked":""}><span>${esc(x)}</span></label>`).join("")}</div>
        </fieldset>
        <div class="fields">
          <div class="field"><label for="f-name">${t("c_name")} *</label><input id="f-name" name="name" autocomplete="name"><span class="err" id="e-name"></span></div>
          <div class="field"><label for="f-email">${t("c_email")} *</label><input id="f-email" name="email" type="email" autocomplete="email"><span class="err" id="e-email"></span></div>
          <div class="field full"><label for="f-company">${t("c_company")}</label><input id="f-company" name="company" autocomplete="organization"></div>
          <div class="field full"><label for="f-msg">${t("c_msg")} *</label><textarea id="f-msg" name="msg"></textarea><span class="err" id="e-msg"></span></div>
        </div>
        <input type="text" name="_gotcha" id="f-gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px">
        <div class="send"><button class="pill" type="submit" id="f-submit">${t("c_send")}</button></div>
        <div class="ready" id="sent" hidden><b style="font-family:var(--f-display);font-size:1.3rem">${t("sent_t")}</b><p>${t("sent_p")}</p></div>
        <div class="ready" id="ready" hidden><p><span id="err-pre"></span>${t("ready")}</p><div style="display:flex;gap:8px;flex-wrap:wrap"><a class="pill" id="mailto" href="#">${t("open_mail")}</a><button class="pill ghost" type="button" id="copymsg">${t("copy_msg")}</button></div></div>
      </form>
      <div class="coords">
        <div class="coord"><i></i><div><div class="k">${t("k_email")}</div><div class="v" id="mail-v">${esc(EMAIL)}</div></div><button type="button" data-copy="${esc(EMAIL)}">${t("copy")}</button></div>
        <div class="coord"><i style="border-radius:50%"></i><div><div class="k">${t("k_linkedin")}</div><div class="v">linkedin.com/in/…</div></div><a class="go" href="${LINKEDIN}" target="_blank" rel="noopener">${t("open")}</a></div>
        <div class="coord"><i style="border-radius:12px 12px 12px 50%"></i><div><div class="k">${t("k_github")}</div><div class="v">github.com/…</div></div><a class="go" href="${GITHUB}" target="_blank" rel="noopener">${t("open")}</a></div>
        <div class="coord"><i style="border-radius:50% 50% 12px 12px"></i><div><div class="k">${t("k_loc")}</div><div class="v">${t("loc")}</div></div></div>
      </div>
    </div>
  </div></section>`;
}

/* ============ ROUTEUR ============ */
const app = document.getElementById("app");
function route(){
  clearInterval(rotTimer); window.onresize = null;
  const h = location.hash.replace("#","");
  let html, nav = "";
  if(h==="projets"){ html = viewProjects(); nav="projets"; }
  else if(h==="a-propos"){ html = viewAbout(); nav="a-propos"; }
  else if(h==="contact"){ html = viewContact(); nav="contact"; }
  else if(h.startsWith("p-") && P.find(p=>p.slug===h.slice(2))){ html = viewProject(P.find(p=>p.slug===h.slice(2))); nav="projets"; }
  else html = viewHome();
  app.innerHTML = html;
  document.querySelectorAll("[data-nav]").forEach(a => { a.classList.toggle("on", a.dataset.nav===nav); if(a.dataset.nav===nav) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  document.querySelector("footer").style.marginTop = nav==="contact" ? "0" : "";
  bind(); startRot();
  window.scrollTo({top:0, behavior:"instant"});
}
function applyStatic(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(el => el.innerHTML = t(el.dataset.t));
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang===lang));
}
async function copyText(txt, btn){
  try{ await navigator.clipboard.writeText(txt); if(btn){ const o=btn.innerHTML; btn.textContent=t("copied"); setTimeout(()=>btn.innerHTML=o,1400);} }
  catch(e){ const el=document.getElementById("mail-v"); if(el){ const r=document.createRange(); r.selectNodeContents(el); const s=getSelection(); s.removeAllRanges(); s.addRange(r);} }
}
function bind(){
  app.querySelectorAll("[data-filter]").forEach(b => b.onclick = () => { filter = b.dataset.filter; app.innerHTML = viewProjects(); bind(); });
  if(matchMedia("(hover: none)").matches) app.querySelectorAll(".sk").forEach(el => el.onclick = () => el.classList.toggle("open"));
  app.querySelectorAll("[data-copy]").forEach(b => b.onclick = () => copyText(b.dataset.copy, b));
  const f = document.getElementById("cform"); if(!f) return;
  let body = "";
  f.addEventListener("submit", async e => {
    e.preventDefault();
    const v = id => f.querySelector(id).value.trim();
    const name=v("#f-name"), mail=v("#f-email"), comp=v("#f-company"), msg=v("#f-msg"), type=f.querySelector("input[name=type]:checked").value;
    const errs = {name: name?"":t("e_name"), email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)?"":t("e_email"), msg: msg?"":t("e_msg")};
    Object.keys(errs).forEach(k => document.getElementById("e-"+k).textContent = errs[k]);
    if(Object.values(errs).some(Boolean)) return;
    const subject = `[${type}] ${name}${comp?" — "+comp:""}`;
    body = `${msg}\n\n${name}${comp?" · "+comp:""}\n${mail}`;
    const btn = document.getElementById("f-submit");
    if(FORM_ENDPOINT){
      const label = btn.textContent; btn.textContent = t("sending"); btn.disabled = true;
      try{
        const res = await fetch(FORM_ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
          body: JSON.stringify({type, name, email:mail, company:comp, message:msg, _subject:subject, _replyto:mail, _gotcha:v("#f-gotcha")})});
        if(!res.ok) throw new Error(res.status);
        f.querySelector(".fields").hidden = true; f.querySelector("fieldset").hidden = true; f.querySelector(".send").hidden = true;
        document.getElementById("ready").hidden = true; document.getElementById("sent").hidden = false;
        return;
      }catch(err){
        btn.textContent = label; btn.disabled = false;
        document.getElementById("err-pre").textContent = t("send_err") + " ";
      }
    }
    document.getElementById("mailto").href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("ready").hidden = false;
    document.getElementById("copymsg").onclick = ev => copyText(`${subject}\n\n${body}`, ev.currentTarget);
  });
}
document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang; try{ localStorage.setItem("pf-lang", lang); }catch(e){}
  applyStatic(); const y = scrollY; route(); window.scrollTo(0,y);
}));
window.addEventListener("hashchange", route);

fetch("data/projects.json")
  .then(r => r.json())
  .then(d => { P = d; applyStatic(); route(); });
