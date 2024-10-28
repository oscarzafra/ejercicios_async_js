const characterSelect = document.getElementById("character-list");
const characterImage = document.querySelector(".character-image");

async function fetchCharacters() {
    try {
        const response = await fetch("https://thronesapi.com/api/v2/Characters");
        if (!response.ok) {
            throw new Error("Error en la solicitud a la API");
        }
        const characters = await response.json();

        characters.forEach(character => {
            const option = document.createElement("option");
            option.value = character.imageUrl; 
            option.textContent = character.fullName; 
            characterSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
}

function displayCharacterImage(imageUrl) {
    if (imageUrl) {
        characterImage.src = imageUrl;
    } else {
        characterImage.src = ""; 
    }
}

characterSelect.addEventListener("change", () => {
    const imageUrl = characterSelect.value;
    displayCharacterImage(imageUrl);
});

fetchCharacters();
