const body = document.querySelector("body");
const carrito = document.querySelector("#bttCarrito");

//Botones de comprar por cada curso
const buttonJava = document.querySelector("#bttJava");
const buttonFull = document.querySelector("#bttFullStack");
const bttPython = document.querySelector("#bttPython");

//Numero de items del carrito
const nodoCarrito = document.querySelector("#contadorCarrito");

const cursosComprados = JSON.parse(localStorage.getItem("curso")) == null ? [] : JSON.parse(localStorage.getItem("curso"));

//DIV DONDE SE VAN A COLOCAR LOS CURSOS COMPRADOS
const cursoComprado = document.querySelector("#cursoComprado");


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
    //Mostramos el mensaje 2 segundos
    cursoComprado.style.visibility = "visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='red'>JAVA</FONT> AL CARRITO</h2> <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' width='80px' height='80px'>"
    setTimeout(() => {(cursoComprado.style.visibility = "hidden")}, 2500);
    sumarItemCarrito(nodoCarrito);

    agregarItemCarrito(1, "JAVA", 200, "../assets/JAVA.png")
}


buttonFull.onclick = () => {
    //Mostramos el mensaje 2 segundos
    cursoComprado.style.visibility = "visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE  EL CURSO  <FONT COLOR='blue'>FULL STACK</FONT> AL CARRITO</h2> <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1468442513/ntffgniiqfya5tvzbsol.png' width='80px' height='80px'>"
    setTimeout(() => {(cursoComprado.style.visibility = "hidden")}, 2500);
    sumarItemCarrito(nodoCarrito)
    
    agregarItemCarrito(2, "FULL STACK", 500, "../assets/FULLSTACK.png")

}

bttPython.onclick = () => {
    //Mostramos el mensaje 2 segundos
    cursoComprado.style.visibility = "visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='yellow'>PYT</FONT><FONT COLOR='blue'>HON</FONT> AL CARRITO</h2> <img src='https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png' width='80px' height='80px'>"
    setTimeout(() => {(cursoComprado.style.visibility = "hidden")}, 2500);
    
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(3, "PYTHON", 150, "../assets/PYTHON.png")
}

function agregarItemCarrito(idProducto, nombreProducto, precioProducto, imagenProducto) {
    if (cursosComprados.some(curso => curso.id === idProducto)) {
        //Si ya existe el curso con ID=x, para esa posicion le sumamos uno a la cantidad
        cursosComprados.forEach(curso => {
            if (curso.id === idProducto) {
                curso.cantidad ++ ;
            }
        });
    } else {
        //Si no existe el curso con ID=x lo creamos y lo pusheamos al Array
        cursosComprados.push(new Producto(idProducto, nombreProducto, precioProducto, imagenProducto))
    }
}

function sumarItemCarrito(carritoNumero) {
    //Aumenta en 1 la cantidad de items del carrito.
    carritoNumero.innerText = parseInt(carritoNumero.textContent) + 1
}

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
        this.moneda= "USD";
    }
}