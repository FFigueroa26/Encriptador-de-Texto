function encriptar(){
    var frase = document.getElementById("textoPorCifrar").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar(){
    var frase = document.getElementById("textoPorCifrar").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function copiar(){
    var mensaje = document.querySelector("#texto2");
    mensaje.select();
    document.execCommand("copy");
    alert("Has copiado el mensaje");
}