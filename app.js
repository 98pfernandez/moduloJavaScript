const buttonJava = document.querySelector("#bttJava");
const buttonFull = document.querySelector("#bttFullStack");
const bttPython = document.querySelector("#bttPython");

const cursoComprado = document.querySelector("#cursoComprado");

buttonJava.onclick = () => { cursoComprado.innerHTML = "<h2>COMPRASTE EL CURSO <FONT COLOR='red'>JAVA</FONT></h2> <img src='https://cdn-icons-png.flaticon.com/512/226/226777.png' width='80px' height='80px'>" }

buttonFull.onclick = () => { cursoComprado.innerHTML = "<h2>COMPRASTE EL CURSO  <FONT COLOR='blue'>FULL STACK </FONT></h2> <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1468442513/ntffgniiqfya5tvzbsol.png' width='80px' height='80px'>" }

bttPython.onclick = () => { cursoComprado.innerHTML = "<h2>COMPRASTE EL CURSO <FONT COLOR='yellow'>PYT</FONT><FONT COLOR='blue'>HON</FONT></h2> <img src='https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png' width='80px' height='80px'>" }


