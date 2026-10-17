(function(){
  var btn = document.querySelector('.menu');
  var nav = document.getElementById('mobile-links');
  if (!btn || !nav) return;
  function setOpen(open){
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar navegação' : 'Abrir navegação');
  }
  btn.addEventListener('click', function(){ setOpen(nav.hidden); });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !nav.hidden) { setOpen(false); btn.focus(); }
  });
})();

(function(){
  var y = document.getElementById('year');
  if (!y) return;
  var now = String(new Date().getFullYear());
  y.textContent = now;
  y.setAttribute('datetime', now);
})();
