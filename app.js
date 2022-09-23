const buttonJava = document.querySelector("#bttJava");
const buttonFull = document.querySelector("#bttFullStack");
const bttPython = document.querySelector("#bttPython");

const cursoComprado = document.querySelector("#cursoComprado");
const body=document.querySelector("body");
const nodoCarrito = document.querySelector("#contadorCarrito");

const cursosComprados = [];



const carrito = document.querySelector("#bttCarrito");
carrito.onclick = () => {
    alert("PASE")
    sessionStorage.setItem("curso", JSON.stringify(cursosComprados))
    
    sessionStorage.setItem("cantidadItemCarrito", nodoCarrito.textContent);
    /*cursosComprados.forEach(curso => {
        sessionStorage.setItem("curso", JSON.stringify(curso))

    })*/
}

buttonJava.onclick = () => {
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='red'>JAVA</FONT> AL CARRITO</h2> <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' width='80px' height='80px'>"
    sumarItemCarrito(nodoCarrito);

    agregarItemCarrito(1, "CURSO JAVA", 900)

    console.log(cursosComprados)
}


buttonFull.onclick = () => {
    cursoComprado.innerHTML = "<h2>AGREGASTE  EL CURSO  <FONT COLOR='blue'>FULL STACK</FONT> AL CARRITO</h2> <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1468442513/ntffgniiqfya5tvzbsol.png' width='80px' height='80px'>"
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(2, "CURSO FULL STACK", 900)
    console.log(cursosComprados)
}

bttPython.onclick = () => {
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='yellow'>PYT</FONT><FONT COLOR='blue'>HON</FONT> AL CARRITO</h2> <img src='https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png' width='80px' height='80px'>"
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(3, "CURSO PYTHON", 9000)
}

function agregarItemCarrito(idProducto, nombreProducto, precioProducto) {
    if (cursosComprados.some(curso => curso.id === idProducto)) {
        //SI EXISTE EL CURSO CON ID 1, LE SUMAMOS UNO A LA CANTIDAD
        cursosComprados.forEach(curso => {
            if (curso.id === idProducto) {
                curso.cantidad += 1;
            }
        });
    } else {
        //SI NO EXISTE EL CURSO CON ID 1 LO CREAMOS
        cursosComprados.push(new Producto(idProducto, nombreProducto, precioProducto))
    }
}

function sumarItemCarrito(carritoNumero) {
    carritoNumero.innerText = parseInt(carritoNumero.textContent) + 1
}

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }
}