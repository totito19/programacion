let btnCambiarTitulo = document.getElementById("btnCambiarTitulo");
let tituloCambiable = document.getElementById("tituloCambiable");

btnCambiarTitulo.addEventListener("click", function() {
    tituloCambiable.textContent = "labubu";
});

let btnCambiarParrafo = document.getElementById("btnCambiarParrafo");
let parrafoCambiable = document.getElementById("parrafoCambiable");

btnCambiarParrafo.addEventListener("click", function() {
    parrafoCambiable.innerHTML = "<strong>labubu</strong>";
});

let btnCambiarImagen = document.getElementById("btnCambiarImagen");
let imagen = document.getElementById("imagen");

btnCambiarImagen.addEventListener("click", function() {
    imagen.src = "labubu 2.webp";
});

let btnMostrarMensaje = document.getElementById("btnMostrarMensaje");
let inputMensaje = document.getElementById("inputMensaje");

btnMostrarMensaje.addEventListener("click", function() {
    alert("Escribiste: " + inputMensaje.value);
});

let btnAgregarClase = document.getElementById("btnAgregarClase");
let btnQuitarClase = document.getElementById("btnQuitarClase");
let textoClase = document.getElementById("textoClase");

btnAgregarClase.addEventListener("click", function() {
    textoClase.classList.add("resaltado");
});

btnQuitarClase.addEventListener("click", function() {
    textoClase.classList.remove("resaltado");
});

let btnModoOscuro = document.getElementById("btnModoOscuro");

btnModoOscuro.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
});

let btnAgregarLista = document.getElementById("btnAgregarLista");
let inputLista = document.getElementById("inputLista");
let lista = document.getElementById("lista");

btnAgregarLista.addEventListener("click", function() {
    if (inputLista.value === "") {
        alert("Escribí algo para agregar");
        return;
    }
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = inputLista.value;
    lista.appendChild(nuevoItem);
    inputLista.value = "";
});

let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let color = document.getElementById("color");
let mensaje = document.getElementById("mensaje");
let errores = document.getElementById("errores");
let resultado = document.getElementById("resultado");
let tarjetas = document.getElementById("tarjetas");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    errores.textContent = "";

    if (nombre.value === "" || color.value === "" || mensaje.value === "") {
        errores.textContent = "Todos los campos son obligatorios";
        return;
    }

    resultado.innerHTML = "<strong>Nombre:</strong> " + nombre.value +
        "<br><strong>Color favorito:</strong> " + color.value +
        "<br><strong>Mensaje:</strong> " + mensaje.value;

    resultado.style.backgroundColor = color.value;

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.style.borderColor = color.value;
    tarjeta.innerHTML = "<h4>" + nombre.value + "</h4>" +
        "<p>" + mensaje.value + "</p>" +
        "<small>Color: " + color.value + "</small>";
    tarjetas.appendChild(tarjeta);

    formulario.reset();
});
