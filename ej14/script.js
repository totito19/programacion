const apikey = "live_9qZvW7TtpjzsTqpHJpPJMRXZzE8e1cOFbEmJjXXaALTIPlXIYPG7UHlZKVFznOrB";
const loadCatBtn = document.getElementById("load-cat");
const catImage = document.getElementById("cat-image");
const likeBtn = document.getElementById("like-cat");
const dislikeBtn = document.getElementById("dislike-cat");
const likes = document.getElementById("likes");
const dislikes = document.getElementById("dislikes");
const errorMessage = document.getElementById("error-message");

let likesCount = 0;
let dislikesCount = 0;

document.addEventListener("DOMContentLoaded", () => {
loadCatBtn.addEventListener("click", loadRandomCat);
likeBtn.addEventListener("click", () => handleVote("like"));
dislikeBtn.addEventListener("click", () => handleVote("dislike"));
});

async function loadRandomCat() {
try {
errorMessage.textContent = "";
    const response = await fetch(
        "https://api.thecatapi.com/v1/images/search",
        {
            headers: {
                "x-api-key": apikey
            }
        }
        
    );

    const data = await response.json();

    if (data.length > 0) {
        catImage.src = data[0].url;
        catImage.style.display = "block";
        catImage.dataset.catId = data[0].id;
    }
} catch (error) {
    errorMessage.textContent = "Error al cargar la imagen.";
    console.error(error);
}

}

async function handleVote(voteType) {
const catId = catImage.dataset.catId;

if (!catId) {
    alert("Por favor carga un gatito.");
    return;
}

try {
    const response = await fetch(
        "https://api.thecatapi.com/v1/votes",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apikey
            },
            body: JSON.stringify({
                image_id: catId,
                value: voteType === "like" ? 1 : -1
            })
        }
    );

    if (response.ok) {
        if (voteType === "like") {
            likesCount++;
            likes.textContent = likesCount;
        } else {
            dislikesCount++;
            dislikes.textContent = dislikesCount;
        }
    alert("Voto registrado. Cargando otro gatito...");
        await loadRandomCat();
    } else {
        errorMessage.textContent = "Error al registrar el voto.";
    }
} catch (error) {
    errorMessage.textContent = "Error al conectar con la API.";
    console.error(error);
}

}
