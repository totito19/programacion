const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputDescripcion = document.getElementById("descripcion");

const inputTipo = document.getElementById("tipo");
const inputEstado = document.getElementById("estado");
const inputCalificacion = document.getElementById("calificacion");
const inputImagen = document.getElementById("imagen");
const error = document.getElementById("error");

const contador = document.getElementById("contador");
const coleccion = document.getElementById("coleccion");
const botonModo = document.getElementById("cambiarModo");
const botonesFiltro = document.querySelectorAll("#filtros button");
function actualizarContador() {
    const tarjetas = document.querySelectorAll(".tarjeta");
    contador.textContent = tarjetas.length;
}

function siguienteEstado(estado) {
    if (estado === "pendiente") {
        return "en progreso";
    }
    if (estado === "en progreso") {
        return "terminado";
    }

    return "pendiente";
}
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = inputNombre.value;
    const descripcion = inputDescripcion.value;
    const tipo = inputTipo.value;

    const estado = inputEstado.value;
    const calificacion = Number(inputCalificacion.value);
    const imagen = inputImagen.value;
    if (nombre === "") {
        error.textContent = "El nombre no puede estar vacío";
        return;
    }
    if (calificacion < 1 || calificacion > 5) {
        error.textContent = "La calificación debe estar entre 1 y 5";

        return;
    }
    error.textContent = "";
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.dataset.tipo = tipo;

    tarjeta.dataset.estado = estado;
    const imgTarjeta = document.createElement("img");
    imgTarjeta.src = imagen;
    const titulo = document.createElement("h3");
    titulo.textContent = nombre;
    titulo.classList.add("titulo");
    titulo.addEventListener("click", function() {
        titulo.classList.toggle("resaltado");
    });
    const descripcionTarjeta = document.createElement("p");

    descripcionTarjeta.textContent = descripcion;
    const tipoTarjeta = document.createElement("p");
    tipoTarjeta.textContent = "Tipo: " + tipo;
    const estadoTarjeta = document.createElement("p");
    estadoTarjeta.textContent = "Estado: " + estado;
    const calificacionTarjeta = document.createElement("p");
    calificacionTarjeta.textContent = "Calificación: " + calificacion + "/5";
    const botonEstado = document.createElement("button");
    botonEstado.textContent = "Cambiar estado";

    botonEstado.addEventListener("click", function() {
        const nuevoEstado = siguienteEstado(tarjeta.dataset.estado);
        tarjeta.dataset.estado = nuevoEstado;
        estadoTarjeta.textContent = "Estado: " + nuevoEstado;
    });
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function() {
        tarjeta.remove();
        actualizarContador();
    });
    tarjeta.appendChild(imgTarjeta);
    tarjeta.appendChild(titulo);

    tarjeta.appendChild(descripcionTarjeta);
    tarjeta.appendChild(tipoTarjeta);
    tarjeta.appendChild(estadoTarjeta);
    tarjeta.appendChild(calificacionTarjeta);
    tarjeta.appendChild(botonEstado);
    tarjeta.appendChild(botonEliminar);
    coleccion.appendChild(tarjeta);
    inputNombre.value = "";

    inputDescripcion.value = "";
    inputCalificacion.value = "";
    inputImagen.value = "";
    actualizarContador();
});
botonesFiltro.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const filtro = boton.dataset.filtro;
        const tarjetas = document.querySelectorAll(".tarjeta");

        tarjetas.forEach(function(tarjeta) {
            if (filtro === "todos") {
                tarjeta.style.display = "inline-block";
            } else if (tarjeta.dataset.tipo === filtro || tarjeta.dataset.estado === filtro) {
                tarjeta.style.display = "inline-block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
});

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");
});
