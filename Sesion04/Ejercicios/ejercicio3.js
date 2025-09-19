var len     = document.getElementById('len');
var chkMay  = document.getElementById('mayus');
var chkMin  = document.getElementById('minus');
var chkNum  = document.getElementById('nums');
var chkSim  = document.getElementById('simb');
var out     = document.getElementById('pwd');
var btnCop  = document.getElementById('copiar');
var barra   = document.getElementById('barra');
var estado  = document.getElementById('estado');
var form    = document.getElementById('formPwd');


function generarCaracteres() {
  var may = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var min = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var sim = "!@#$%^&*()_+-=[]{};:,.?/|~";
  return { may: may, min: min, num: num, sim: sim };
}


function pick(cadena){
  var i = Math.floor(Math.random() * cadena.length);
  return cadena.charAt(i);
}


form.addEventListener('submit', function(e){
  e.preventDefault();


  var L = Number(len.value);
  if (isNaN(L) || L < 4) L = 4;
  if (L > 64) L = 64;


  var sets = generarCaracteres();
  var pool = "";
  if (chkMay.checked) pool += sets.may;
  if (chkMin.checked) pool += sets.min;
  if (chkNum.checked) pool += sets.num;
  if (chkSim.checked) pool += sets.sim;


  if (pool.length === 0) {
    out.value = "";
    estado.textContent = "Fuerza: —  (elige al menos 1 tipo)";
    barra.style.width = "0%";
    return;
  }


  // para asegurar al menos 1 de cada tipo marcado
  var obligatorios = [];
  if (chkMay.checked) obligatorios.push(pick(sets.may));
  if (chkMin.checked) obligatorios.push(pick(sets.min));
  if (chkNum.checked) obligatorios.push(pick(sets.num));
  if (chkSim.checked) obligatorios.push(pick(sets.sim));


  var pwd = obligatorios.join("");
  while (pwd.length < L) {
    pwd += pick(pool);
  }


  // mezclar
  var arr = pwd.split("");
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  out.value = arr.join("");


  actualizarFuerza(out.value);
});


btnCop.addEventListener('click', function(){
  if (!out.value) return;
  navigator.clipboard.writeText(out.value);
  btnCop.textContent = "Copiado";
  setTimeout(function(){ btnCop.textContent = "Copiar"; }, 900);
});


function actualizarFuerza(pwd){
  var puntos = 0;


  if (pwd.length >= 8)  puntos++;
  if (pwd.length >= 12) puntos++;
  if (pwd.length >= 16) puntos++;


  var tipos = 0;
  if (/[A-Z]/.test(pwd)) tipos++;
  if (/[a-z]/.test(pwd)) tipos++;
  if (/[0-9]/.test(pwd)) tipos++;
  if (/[^A-Za-z0-9]/.test(pwd)) tipos++;
  puntos += tipos - 1; // suma por diversidad


  // penalización simple por repeticiones largas
  if (/(.)\1{2,}/.test(pwd)) puntos--;


  var nivel = "Débil", w = 25;
  if (puntos >= 3){ nivel = "Media";  w = 50; }
  if (puntos >= 5){ nivel = "Fuerte"; w = 75; }
  if (puntos >= 6){ nivel = "Muy fuerte"; w = 100; }


  barra.style.width = w + "%";
  estado.textContent = "Fuerza: " + nivel;
}
