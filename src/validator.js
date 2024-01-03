const validator = {
  isValid: function (numeros) {
    if (numeros === "" || isNaN(numeros)) {
      return false;
    }
    const espacios = numeros.replace(/\s/g, "").split("").reverse().map(Number);

    let suma = 0;
    for (let i = 0; i < espacios.length; i++) {
      let digitoAct = espacios[i];
      //PASO 1 identificar los numeros en posicion par//
      if (i % 2 !== 0) {
        //PASO 2 Multiplicar las posiciones pares por 2//
        digitoAct *= 2;
      }
      //PASO 3 si el resultado es mayor a 10, sumar los digitos si me da 12 = 3//
      if (digitoAct > 9) {
        digitoAct -= 9;
      }
      suma += digitoAct;
    }
    //PASO 4 Sumar todos los números y el resultado sea multiplo de 10//
    return suma % 10 === 0;
  },

  maskify: function (numeros) {
    if (typeof numeros !== "string" || numeros.length !== 16) {
      return false;
    }

    let enmascarado = "";

    for (let i = 0; i < numeros.length - 4; i++) {
      enmascarado += "*";
    }

    const ultimosCuatro = numeros.slice(-4);
    const numerosResueltos = enmascarado + ultimosCuatro;

    return numerosResueltos;
  },
};

export default validator;
