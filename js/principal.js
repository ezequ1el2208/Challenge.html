var form = document.querySelector(".formulario");

function encriptar() {
    var texto = document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("texto-transformado").innerHTML = txtCifrado;
    document.getElementById("imagen-ocultar").style.display = "none"
    form.reset();
}

function desencriptar() {
    var texto = document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("texto-transformado").innerHTML = txtCifrado;
    form.reset();
}

var botonCopiar = document.querySelector(".copiar-texto");

botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    var copiar = document.getElementById("texto-transformado").innerHTML;
    navigator.clipboard.writeText(copiar);
});




