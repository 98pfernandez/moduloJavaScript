const buttonJava = document.querySelector("#bttJava");
const buttonFull = document.querySelector("#bttFullStack");
const bttPython = document.querySelector("#bttPython");

const cursoComprado = document.querySelector("#cursoComprado");
const body = document.querySelector("body");
const nodoCarrito = document.querySelector("#contadorCarrito");

const cursosComprados = JSON.parse(localStorage.getItem("curso")) == null ? [] : JSON.parse(localStorage.getItem("curso"));



const carrito = document.querySelector("#bttCarrito");


body.onload = () => {
    //CUANDO CARGA EL HTML OBTIENE LA CANTIDAD DE ITEMS QUE HAY EN EL CARRITO. SI ES LA PRIMERA VEZ QUE SE EJECUTA SE CREA EL ITEM
    let numeroDeItemsCarrito = localStorage.getItem("cantidadItemCarrito");

    //USO DE OPERADOR AND
    (numeroDeItemsCarrito == null || numeroDeItemsCarrito == '') && localStorage.setItem("cantidadItemCarrito", "0");

    nodoCarrito.innerText = localStorage.getItem("cantidadItemCarrito");
}

carrito.onclick = () => {
    localStorage.setItem("curso", JSON.stringify(cursosComprados))

    //ALMACENAMOS EN LA SESSION STORAGEe EL NUMERO DE ITEMS DEL CARRITO 
    localStorage.setItem("cantidadItemCarrito", nodoCarrito.textContent);
}

buttonJava.onclick = () => {
    cursoComprado.style.visibility ="visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='red'>JAVA</FONT> AL CARRITO</h2> <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' width='80px' height='80px'>"
    setTimeout(() => {(cursoComprado.style.visibility = "hidden")}, 2500);
    sumarItemCarrito(nodoCarrito);

    agregarItemCarrito(1, "JAVA", 200, "../assets/JAVA.png")

    console.log(cursosComprados)
}


buttonFull.onclick = () => {
    cursoComprado.style.visibility ="visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE  EL CURSO  <FONT COLOR='blue'>FULL STACK</FONT> AL CARRITO</h2> <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1468442513/ntffgniiqfya5tvzbsol.png' width='80px' height='80px'>"
    setTimeout(() => {(cursoComprado.style.visibility = "hidden")}, 2500);
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(2, "FULL STACK", 500, "../assets/FULLSTACK.png")
    console.log(cursosComprados)
}

bttPython.onclick = () => {
    cursoComprado.style.visibility ="visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='yellow'>PYT</FONT><FONT COLOR='blue'>HON</FONT> AL CARRITO</h2> <img src='https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png' width='80px' height='80px'>"
    setTimeout(() => {(cursoComprado.style.visibility = "hidden")}, 2500);
    
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(3, "PYTHON", 150, "../assets/PYTHON.png")
}

function agregarItemCarrito(idProducto, nombreProducto, precioProducto, imagenProducto) {
    if (cursosComprados.some(curso => curso.id === idProducto)) {
        //SI EXISTE EL CURSO CON ID 1, LE SUMAMOS UNO A LA CANTIDAD
        cursosComprados.forEach(curso => {
            if (curso.id === idProducto) {
                curso.cantidad ++ ;
            }
        });
    } else {
        //SI NO EXISTE EL CURSO CON ID 1 LO CREAMOS
        cursosComprados.push(new Producto(idProducto, nombreProducto, precioProducto, imagenProducto))
    }
}

function sumarItemCarrito(carritoNumero) {
    carritoNumero.innerText = parseInt(carritoNumero.textContent) + 1
}

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img= img;
        this.cantidad = 1;
    }
}