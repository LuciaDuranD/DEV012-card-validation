import validator from "./validator.js";

document.addEventListener("DOMContentLoaded", () => {
  const todos = document.getElementById("todos");
  const visa = document.getElementById("visa");
  const master = document.getElementById("masterC");
  const american = document.getElementById("americanE");
  const diners = document.getElementById("dinersC");

  const validarTarjeta = () => {
    const numeroTarjeta = todos.value.trim();

    if (!numeroTarjeta) {
      alert("No ingresaste ningún número");
      return;
    }

    if (validator.isValid(numeroTarjeta)) {
      const numeroEnmascarado = validator.maskify(numeroTarjeta);
      alert("El número de tarjeta es válido" + numeroEnmascarado);
    } else {
      alert("El número de tarjeta no es válido");
    }

    let mensajeFranquicia = "";

    if (visa.checked) {
      mensajeFranquicia += "Visa ";
    }
    if (master.checked) {
      mensajeFranquicia += "Mastercard ";
    }
    if (american.checked) {
      mensajeFranquicia += "American Express ";
    }
    if (diners.checked) {
      mensajeFranquicia += "Diners Club ";
    }

    if (!mensajeFranquicia) {
      mensajeFranquicia = "No seleccionaste ninguna franquicia";
    }

    alert(mensajeFranquicia);
  };

  const borrar = () => {
    todos.value = "";
    visa.checked = false;
    master.checked = false;
    american.checked = false;
    diners.checked = false;
  };

  const botonBorrar = document.getElementById("borrar");
  botonBorrar.addEventListener("click", borrar);

  const botonValidar = document.getElementById("validar");
  botonValidar.addEventListener("click", validarTarjeta);
});
