const body = document.querySelector("body");
const listaCarrito = document.querySelector("#listaCarrito");



body.onload= () => {
    sessionStorage.getItem("cantidadItemCarrito");
    const nodoCarrito = document.querySelector("#contadorCarrito");

    nodoCarrito.innerText = sessionStorage.getItem("cantidadItemCarrito");

    const productos = JSON.parse(sessionStorage.getItem("curso"));
    console.log(productos)

    let divProductos;
    productos.array.forEach(e => {
        divProductos+="<div class='item'>"+e.nombre+"</div>"
    });


    listaCarrito.innerHTML =divProductos;
   
}
