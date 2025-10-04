// agrega o quita sombra a la barra cuando haces scroll
const barra = document.querySelector('.barra-vidrio');
function ponerSombra() {
  if (!barra) return;
  if (window.scrollY > 8) barra.classList.add('scrol');
  else barra.classList.remove('scrol');
}
document.addEventListener('scroll', ponerSombra);
ponerSombra();
