import { encriptar } from "./funciones.js";
import { desencriptar } from "./funciones.js";

const botonEncriptar = document.querySelector(".encriptar");
botonEncriptar.addEventListener('click', encriptar);

const botonDesencriptar = document.querySelector(".desencriptar");
botonDesencriptar.addEventListener('click', desencriptar);

const botonCopiar = document.querySelector(".copiar-texto");
botonCopiar.addEventListener("click", (event) => {
    event.preventDefault();
    const copiar = document.getElementById("texto-transformado").innerHTML;
    navigator.clipboard.writeText(copiar);
});




