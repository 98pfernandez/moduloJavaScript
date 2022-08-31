/*let nombre=prompt("Ingrese su nombre")

console.log("Hola como estas hoy "+ nombre.charAt(0).toUpperCase() + nombre.slice(1) );

let numero1=prompt("Ingrese un numero");
let numero2=Number(prompt("Ingrese otro numero")) ;

console.log(parseInt(numero1)+numero2);



let texto=prompt("Ingrese primer texto");
let texto2=prompt("Ingrese segundo texto");

alert(texto+"  "+texto2);
*/
let condicionRepetir = true;
let pagoConTarjeta = false;

class Compra {
  constructor(nombreSolucion, precio, descuento, moneda, metodoPago) {
    this.nombreSolucion = nombreSolucion;
    this.precioBase = precio;
    this.descuento = descuento;
    this.moneda = moneda;
    this.metodoPago = metodoPago;
  }
}

do {
  let numCurso = 0;
  numCurso = prompt(
    "¡Bienvenido a Soluciones Informaticas!\n \n" +
      "Seleccione la solución informatica a adquirir: \n \n" +
      "1)Software de finanzas (1000 USD) \n" +
      "2)ECommerce (3000 USD) \n" +
      "3)Portal de noticias (15000 UYU)"
  );

  var answer = window.confirm(
    "¿Desea pagar con credito? (Se aplicara un descuento adicional del 10%)"
  );

  if (answer) {
    pagoConTarjeta = true;
  }

  switch (parseInt(numCurso)) {
    case 1:
      var com = new Compra(
        "software de finanzas",
        1000,
        descuento10(1000, pagoConTarjeta),
        "USD",
        pagoConTarjeta
      );
      alert(
        "Gracias por tu compra de " +
          com.nombreSolucion +
          ", el valor es de: " +
          (parseInt(com.precioBase) -
            parseInt(com.descuento) +
            " " +
            com.moneda)
      );

      condicionRepetir = false;
      break;

    case 2:
      var com = new Compra(
        "eCommerce",
        3000,
        descuento10(3000, pagoConTarjeta),
        "UYU",
        pagoConTarjeta
      );
      alert(
        "Gracias por tu compra de " +
          com.nombreSolucion +
          ", el valor es de: " +
          (parseInt(com.precioBase) -
            parseInt(com.descuento) +
            " " +
            com.moneda)
      );

      condicionRepetir = false;
      break;

    case 3:
      var com = new Compra(
        "portal de noticias",
        15000,
        descuento10(15000, pagoConTarjeta),
        "UYU",
        pagoConTarjeta
      );
      alert(
        "Gracias por tu compra de " +
          com.nombreSolucion +
          ", el valor es de: " +
          (parseInt(com.precioBase) -
            parseInt(com.descuento) +
            " " +
            com.moneda)
      );

      condicionRepetir = false;
      break;

    default:
      var answer = window.confirm(
        "Ninguna opción corresponde al valor ingresado. ¿Desea ingresar otro valor?"
      );
      if (!answer) {
        alert("Adios!");
        condicionRepetir = false;
      }
  }
} while (condicionRepetir);

function descuento10(precioBase, aplicarDescuento) {
  if (aplicarDescuento) {
    let descuento;
    descuento = precioBase * 0.1;
    return descuento;
  } else {
    //NO SE REALIZA DESCUENTO
    return 0;
  }
}
