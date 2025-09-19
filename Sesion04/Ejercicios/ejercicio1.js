   // Valida que el valor sea numerico y no exceda el maximo
    function validarNumero(input, max) {

      input.value = input.value.replace(/\D/g, '');
      if (input.value === '') return;
      let num = parseInt(input.value, 10);
      if (num > max) {
        input.value = max.toString();
      } else {
        input.value = num.toString(); 
      }
    }

    
    function calcularPropina() {
        const cuentaStr = document.getElementById('cuenta').value;
        const porcentajeStr = document.getElementById('porcentaje').value;
        const resultadoDiv = document.getElementById('resultado');

        const cuenta = parseFloat(cuentaStr);
        const porcentaje = parseFloat(porcentajeStr);

        if (
            isNaN(cuenta) || isNaN(porcentaje) ||
            cuenta < 0 || porcentaje < 0 ||
            cuenta > 99999 || porcentaje > 100
        ) {
            resultadoDiv.innerHTML = "<p>Valores inválidos D:</p>";
        } else {
            const propina = cuenta * (porcentaje / 100);
            const total = cuenta + propina;

            if (porcentaje === 0) {
            resultadoDiv.innerHTML = `<p>Por que no quieres dejar propina ? :c</p>`;
            } else {
            resultadoDiv.innerHTML = `
                <p>Propina: <strong>S/. ${propina.toFixed(2)}</strong></p>
                <p>Total a pagar: <strong>S/. ${total.toFixed(2)}</strong></p>
            `;
            }
        }

        // Reiniciar animacion
        resultadoDiv.style.animation = "none";
        void resultadoDiv.offsetWidth;
        resultadoDiv.style.animation = "aparecer 0.5s forwards";
    }

