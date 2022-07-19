const form = document.querySelector(".formulario");

export function encriptar() {
    const texto = document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("texto-transformado").innerHTML = txtCifrado;
    document.getElementById("imagen-ocultar").style.display = "none";
    form.reset();
};

export function desencriptar() {
    const texto = document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("texto-transformado").innerHTML = txtCifrado;
    form.reset();
};