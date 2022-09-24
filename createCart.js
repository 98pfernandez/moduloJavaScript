const body = document.querySelector("body");
const listaCarrito = document.querySelector("#listaCarrito");



body.onload= () => {
    sessionStorage.getItem("cantidadItemCarrito");
    const nodoCarrito = document.querySelector("#contadorCarrito");

    nodoCarrito.innerText = sessionStorage.getItem("cantidadItemCarrito");

    const productos = JSON.parse(sessionStorage.getItem("curso"));

    let divProductos;
    productos.forEach(element => {
        console.log(element)
        divProductos+="<div class='fila'><div class='nombreCarrito'>"+element.nombre +"</div>  <div class='cantidadCarrito'>"+ element.cantidad+"</div> <div class='precioCarrito'>"+element.precio+"</div> <div class='totalCarrito'></div></div>";

    });
    listaCarrito.innerHTML =divProductos;


/*
    let divProductos;
    productos.array.forEach(e => {
        divProductos+="<div class='item'>"+e.nombre+"</div>"
    });


    listaCarrito.innerHTML =divProductos;*/
   
}
