const formulario = document.getElementById("formulario");
const inputTitulo = document.getElementById("titulo");
const inputUrl = document.getElementById("url");
const galeria = document.getElementById("galeria");
const error = document.getElementById("error");
const total = document.getElementById("total");
const favoritas = document.getElementById("favoritas");
const noFavoritas = document.getElementById("noFavoritas");
const botonBorrar = document.getElementById("borrarGaleria");
const botonTodas = document.getElementById("mostrarTodas");
const botonFavoritas = document.getElementById("mostrarFavoritas");
const botonNoFavoritas = document.getElementById("mostrarNoFavoritas");

function actualizarContadores() {
    const tarjetas = document.querySelectorAll(".tarjeta");
    const destacadas = document.querySelectorAll(".tarjeta.destacada");
    total.textContent = tarjetas.length;
    favoritas.textContent = destacadas.length;
    noFavoritas.textContent = tarjetas.length - destacadas.length;
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const titulo = inputTitulo.value;
    const url = inputUrl.value;

    if (titulo === "" || url === "") {
        error.textContent = "Todos los campos son obligatorios";
        return;
    }

    error.textContent = "";

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const imagen = document.createElement("img");
    imagen.src = url;

    const nombre = document.createElement("h3");
    nombre.textContent = titulo;

    const botonFavorito = document.createElement("button");
    botonFavorito.textContent = "Favorito";
    botonFavorito.classList.add("favorito");
    botonFavorito.addEventListener("click", function() {
        tarjeta.classList.toggle("destacada");
        actualizarContadores();
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.addEventListener("click", function() {
        tarjeta.remove();
        actualizarContadores();
    });

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(botonFavorito);
    tarjeta.appendChild(botonEliminar);

    galeria.appendChild(tarjeta);

    inputTitulo.value = "";
    inputUrl.value = "";

    actualizarContadores();
});

botonBorrar.addEventListener("click", function() {
    galeria.innerHTML = "";
    actualizarContadores();
});

botonTodas.addEventListener("click", function() {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(function(tarjeta) {
        tarjeta.style.display = "block";
    });
});

botonFavoritas.addEventListener("click", function() {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains("destacada")) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});

botonNoFavoritas.addEventListener("click", function() {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(function(tarjeta) {
        if (!tarjeta.classList.contains("destacada")) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});
