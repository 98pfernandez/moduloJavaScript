const body = document.querySelector("body");
const carrito = document.querySelector("#bttCarrito");

//Botones de comprar por cada curso
const buttonJava = document.querySelector("#bttJava");
const buttonFull = document.querySelector("#bttFullStack");
const bttPython = document.querySelector("#bttPython");

//Numero de items del carrito
const nodoCarrito = document.querySelector("#contadorCarrito");

//Obtenemos el session storage con los cursos que tenemos en el carrito. Si no existe lo creamos
const cursosComprados = JSON.parse(sessionStorage.getItem("curso")) == null ? [] : JSON.parse(sessionStorage.getItem("curso"));

//DIV DONDE SE VAN A COLOCAR LOS CURSOS COMPRADOS
const cursoComprado = document.querySelector("#cursoComprado");


body.onload = () => {
    //Cuando carga el html obtiene la cantidad de items que hay en el carrito. Si es la primera vez que se ejecuta se setea en 0.
    let numeroDeItemsCarrito = sessionStorage.getItem("cantidadItemCarrito");

    if (numeroDeItemsCarrito == null || numeroDeItemsCarrito == '') {
        sessionStorage.setItem("cantidadItemCarrito", "0");
    }

    nodoCarrito.innerText = sessionStorage.getItem("cantidadItemCarrito");
}

carrito.onclick = () => {
    //Cuando clickeamos en el carrito guardamos el array con los cursos comprados y la cantidad de items en el carrito
    sessionStorage.setItem("curso", JSON.stringify(cursosComprados))
    sessionStorage.setItem("cantidadItemCarrito", nodoCarrito.textContent);
}

buttonJava.onclick = () => {
    //Mostramos el mensaje 2 segundos
    cursoComprado.style.visibility = "visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='red'>JAVA</FONT> AL CARRITO</h2> <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' width='80px' height='80px'>"
    setTimeout(() => { (cursoComprado.style.visibility = "hidden") }, 2000);

    //Sumamos item y creamos objeto que se almacenara en el session storage
    sumarItemCarrito(nodoCarrito);
    agregarItemCarrito(1, "JAVA", 200, "./JAVA.png")
}


buttonFull.onclick = () => {
    //Mostramos el mensaje 2 segundos
    cursoComprado.style.visibility = "visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE  EL CURSO  <FONT COLOR='blue'>FULL STACK</FONT> AL CARRITO</h2> <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1468442513/ntffgniiqfya5tvzbsol.png' width='80px' height='80px'>"
    setTimeout(() => { (cursoComprado.style.visibility = "hidden") }, 2000);

    //Sumamos item y creamos objeto que se almacenara en el session storage
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(2, "FULL STACK", 500, "./FULLSTACK.png")
}

bttPython.onclick = () => {
    //Mostramos el mensaje 2 segundos
    cursoComprado.style.visibility = "visible";
    cursoComprado.innerHTML = "<h2>AGREGASTE EL CURSO <FONT COLOR='yellow'>PYT</FONT><FONT COLOR='blue'>HON</FONT> AL CARRITO</h2> <img src='https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png' width='80px' height='80px'>"
    setTimeout(() => { (cursoComprado.style.visibility = "hidden") }, 2000);

    //Sumamos item y creamos objeto que se almacenara en el session storage
    sumarItemCarrito(nodoCarrito)
    agregarItemCarrito(3, "PYTHON", 150, "./PYTHON.png")
}

function agregarItemCarrito(idProducto, nombreProducto, precioProducto, imagenProducto) {
    if (cursosComprados.some(curso => curso.id === idProducto)) {
        //Si ya existe el curso con ID=x, para esa posicion le sumamos uno a la cantidad
        cursosComprados.forEach(curso => {
            if (curso.id === idProducto) {
                curso.cantidad += 1;
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
    }
}