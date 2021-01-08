const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

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

    const pokeInnerHtml =  `${pokemon.id}`;
    pokemonEl.innerHTML = pokeInnerHtml
    poke_container.appendChild(pokemonEl);
}

fetchPokemon();
