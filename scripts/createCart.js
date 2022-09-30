const body = document.querySelector("body");
const listaCarrito = document.querySelector("#listaCarrito");

//CUANDO CARGA LA PAGINA SE GENERA EL CARRITO
body.onload= () => {
    localStorage.getItem("cantidadItemCarrito");
    const nodoCarrito = document.querySelector("#contadorCarrito");

    nodoCarrito.innerText = localStorage.getItem("cantidadItemCarrito");

    const productos = JSON.parse(localStorage.getItem("curso"));

    let divProductos = '';
    let precioTotal = 0;
    let cantidadTotal = 0;
    productos.forEach(element => {
        cantidadTotal+=element.cantidad;

        let{nombre:nombreConDesestructuracion}=element;

        divProductos+="<div class='fila'><div class='imagenCarrito'><img class='imgCurso' src="+element.img+"></div><div class='nombreCarrito'>"+nombreConDesestructuracion +"</div>  <div class='cantidadCarrito'>"+ element.cantidad+"</div> <div class='precioCarrito'>"+element.precio+ " USD"+"</div> <div class='totalCarrito'>"+(element.precio*element.cantidad) +" USD"+"</div></div>";

    });
    //AGREGAMOS TOTALES DE CANTIDAD Y EFECTIVO
    divProductos+="<div class='fila'><div class='imagenCarrito'><img style=width:200px src='../assets/Transparent.gif'></div><div class='nombreCarrito'></div>  <div class='cantidadCarrito'>"+cantidadTotal+"</div> <div class='precioCarrito'></div> <div class='totalCarrito'>"+precioTotal +" USD"+"</div></div>";
   
   //AGREGAMOS BOTON
   divProductos+="<div><button id='botonComprar'>Comprar</button></div>"
    listaCarrito.innerHTML+=divProductos;
}

const bttComprar= document.body.querySelector("#botonComprar");

bttComprar.onclick=() => {
    swal({
        title: "¿Desea comprar estos cursos?",
        text: "Una vez que compre perdera sus items del carrito",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            localStorage.clear;
          swal("Gracias por su compra!", {
            icon: "success",
          });
        } else {
          swal("Cancelo su compra");
        }
      });
}



