const form  = document.getElementById('formConv');
const boxN  = document.getElementById('num');
const boxU  = document.getElementById('uni');
const boxD  = document.getElementById('det');


function cToF(c){ return (c * 9/5) + 32; }
function fToC(f){ return (f - 32) * 5/9; }


form.addEventListener('submit', function(e){
  e.preventDefault();


  const valor = Number(document.getElementById('valor').value);
  const modo  = document.querySelector('input[name="modo"]:checked').value;


  if(isNaN(valor)){
    boxN.textContent = '—';
    boxU.textContent = '°—';
    boxD.textContent = 'Ingresa un número válido.';
    return;
  }


  let result, desde, hacia;
  if(modo === 'CF'){ result = cToF(valor); desde='C'; hacia='F'; }
  else            { result = fToC(valor); desde='F'; hacia='C'; }


  boxN.textContent = result.toFixed(2);
  boxU.textContent = '°' + hacia;
  boxD.textContent = 'De ' + valor.toFixed(2) + ' °' + desde + ' → °' + hacia;
});
