import validator from "./validator.js";

console.log(validator);

document.addEventListener("DOMContentLoaded", () => {
  const botonValidar = document.getElementById("validar");
  const primeros4 = document.getElementById("primeros4n");
  const segundos4 = document.getElementById("segundos4n");
  const terceros4 = document.getElementById("terceros4n");
  const ultimos4 = document.getElementById("ultimos4n");
  const visa = document.getElementById("visa");
  const master = document.getElementById("masterC");
  const american = document.getElementById("americanE");
  const diners = document.getElementById("dinersC");

  //BOTON DE VALIDAR//
  const borrarDatos = () => {
    //INGRESAN//
    primeros4.value = "";
    segundos4.value = "";
    terceros4.value = "";
    ultimos4.value = "";
    //INGRESAF//
    visa.checked = false;
    master.checked = false;
    american.checked = false;
    diners.checked = false;
  };

  botonValidar.addEventListener("click", borrarDatos);
});
