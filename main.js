const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    posion: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: 'F5F5F5'
};

// To call all 150 pokemon 1 by 1
const fetchPokemon = async () => {
    for (let i=1; i<=pokemons_number; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon =  await res.json();
    createPokemonCard(pokemon);
}

function createPokemonCard(pokemon){
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add('pokemon');

    // Make first letter of names uppercase from everything after 1
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // I use another api here for images as the images in the original api are not nice
    const pokeInnerHtml =  `
    <div class = "img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
    </div>
    <div class = "info">
    <span class ="number">${pokemon.id}</span>
    <h3 class="name">${pokeName}</h3>
    <small class ="type">Type: <span>${type}</span></small>
    </div>`;
    pokemonEl.innerHTML = pokeInnerHtml
    poke_container.appendChild(pokemonEl);
}

fetchPokemon();
