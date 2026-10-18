/* ===== Routeur (navigation par #) et thème clair/sombre ===== */
var TITLES={'':'Accueil',experience:'Expérience',projets:'Projets',competences:'Compétences',formation:'Formation',contact:'Contact'};
var NAV=[['','Accueil'],['experience','Expérience'],['projets','Projets'],['competences','Compétences'],['formation','Formation'],['contact','Contact']];
function render(){
  var parts=(location.hash.replace(/^#\/?/,'')).split('/'),page=parts[0],id=parts[1],html,title;
  if(id){var d=detail(page,id);if(d){html=d.h;title=d.t}}
  if(!html){if(!ROUTES.hasOwnProperty(page))page='';html=ROUTES[page]();title=TITLES[page]}
  var app=document.getElementById('app');app.innerHTML=html;
  document.title=title+' – Yassine Mounacir';
  document.getElementById('menu').innerHTML=NAV.map(function(n){return '<a href="#/'+n[0]+'"'+(n[0]===page?' aria-current="page"':'')+'>'+n[1]+'</a>'}).join('');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);render();
(function(){
  var root=document.documentElement,btn=document.getElementById('theme');
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
  btn.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme');var dark=cur?cur==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
    var next=dark?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next)}catch(e){}
  });
})();
