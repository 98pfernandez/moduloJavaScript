let condicionRepetir = true;
let pagoConTarjeta = false;

class Compra {
  constructor(nombreSolucion, precio, moneda, metodoPago, descuento) {
    this.nombreSolucion = nombreSolucion;
    this.precioBase = precio;
    this.moneda = moneda;
    this.metodoPago = metodoPago;
    this.descuento = descuento;
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

  switch (parseInt(numCurso)) {
    case 1:
      pagoConTarjeta = usaTarjeta(pagoConTarjeta);
      var com = new Compra(
        "software de finanzas",
        1000,
        "USD",
        pagoConTarjeta,
        descuento10(1000, pagoConTarjeta)
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
      pagoConTarjeta = usaTarjeta(pagoConTarjeta);
      var com = new Compra(
        "eCommerce",
        3000,
        "UYU",
        pagoConTarjeta,
        descuento10(3000, pagoConTarjeta)
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
      pagoConTarjeta = usaTarjeta(pagoConTarjeta);
      var com = new Compra(
        "portal de noticias",
        15000,
        "UYU",
        pagoConTarjeta,
        descuento10(15000, pagoConTarjeta)
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

function usaTarjeta(pagoConTarjeta) {
  var answer = window.confirm(
    "¿Desea pagar con credito? (Se aplicara un descuento adicional del 10%)"
  );

  if (answer) {
    pagoConTarjeta = true;
    return pagoConTarjeta;
  } else {
    return pagoConTarjeta;
  }
}

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
