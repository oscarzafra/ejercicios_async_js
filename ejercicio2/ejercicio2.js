document.addEventListener('DOMContentLoaded', async () => {
    const imageElement = document.querySelector('.random-image');
    
    const randomId = Math.floor(Math.random() * 151) + 1;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        imageElement.src = data.sprites.front_default; 
        imageElement.alt = data.name; 

    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
    }
});
