const body = document.querySelector("body");
const listaCarrito = document.querySelector("#listaCarrito");

//CUANDO CARGA LA PAGINA SE GENERA EL CARRITO
body.onload= () => {
    sessionStorage.getItem("cantidadItemCarrito");
    const nodoCarrito = document.querySelector("#contadorCarrito");

    nodoCarrito.innerText = sessionStorage.getItem("cantidadItemCarrito");

    const productos = JSON.parse(sessionStorage.getItem("curso"));

    let divProductos='';
    let precioTotal=0;
    let cantidadTotal=0;
    productos.forEach(element => {
        console.log(productos)
        precioTotal+=(element.precio*element.cantidad);
        cantidadTotal+=element.cantidad;
        divProductos+="<div class='fila'><div class='imagenCarrito'><img class='imgCurso' src="+element.img+"></div><div class='nombreCarrito'>"+element.nombre +"</div>  <div class='cantidadCarrito'>"+ element.cantidad+"</div> <div class='precioCarrito'>"+element.precio+ " USD"+"</div> <div class='totalCarrito'>"+(element.precio*element.cantidad) +" USD"+"</div></div>";

    });
    //AGREGAMOS TOTALES DE CANTIDAD Y EFECTIVO
    divProductos+="<div class='fila'><div class='imagenCarrito'><img style=width:200px src='./Transparent.gif'></div><div class='nombreCarrito'></div>  <div class='cantidadCarrito'>"+cantidadTotal+"</div> <div class='precioCarrito'></div> <div class='totalCarrito'>"+precioTotal +" USD"+"</div></div>";
   
   //AGREGAMOS BOTON
   divProductos+="<div><button id='botonComprar'>Comprar</button></div>"
    listaCarrito.innerHTML+=divProductos;

}