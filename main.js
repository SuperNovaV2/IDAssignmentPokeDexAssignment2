const poke_container = document.getElementById('poke_container');

// Number of Pokemons
const pokemons_number = 151;
// Color coding for different pokemon types
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

const main_types = Object.keys(colors);

// To call all 150 pokemon 1 by 1
const fetchPokemon = async () => {
    for (let i=1; i<=pokemons_number; i++){
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon =  await res.json();
    createPokemonCard(pokemon);
};

function createPokemonCard(pokemon){
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add('pokemon');

    // Extract the more common/main pokemon type for color coding
    const poke_types = pokemon.types.map(el => el.type.name);
    //This essentially goes over the all the main types ive put above and finds the 1st one from the array in poke_types which is from the api this is to find out the main type the pokemon is
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    // Make first letter of names uppercase from everything after 1
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];
    pokemonEl.style.backgroundColor = color;
    // I use another api here for images as the images in the original api are not nice
    const pokeInnerHtml =  `
    <div class = "card" onclick="selectPokemon(${pokemon.id})">
    <div class = "img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokeName}" />
    </div>
    <div class = "info">
        <span class ="number">#${pokemon.id.toString().padStart(3,'0')}</span>
        <h3 class="name">${pokeName}</h3>
        <small class ="type">Type: <span>${type}</span></small>
    </div>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHtml;
    poke_container.appendChild(pokemonEl);
};

const selectPokemon = async (id) => {
    await fetchPokemon();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    displayPopup(pokemon);
}

const displayPopup = (pokemon) =>{
    $("#poke_container").empty();
    const popup = document.createElement("div");
    popup.classList.add('pokemon-popup');
    // Extract the more common/main pokemon type for color coding
    const poke_types = pokemon.types.map(el => el.type.name);
    //This essentially goes over the all the main types ive put above and finds the 1st one from the array in poke_types which is from the api this is to find out the main type the pokemon is
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    // Make first letter of names uppercase from everything after 1
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];
    popup.style.backgroundColor = color;
    const typeAll = pokemon.types.map((type) =>
    type.type.name).join(' and ');
    const ability = pokemon.abilities.map((ability) =>
    ability.ability.name).join(' and ');
    const pokeInfo = `
    <div class = "basic-info">
    <span class ="number">#${pokemon.id.toString().padStart(3,'0')}</span>
        <h3 class="name">${pokeName}</h3>
    </div>
        <button id="closeBtn" onclick="closePopup()">Close</button>
    <div class = "img-container2">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokeName}"/>
    </div>
    <div class = "info">
        <p><small>Type</small></p>   
        <p><small class ="type"><span>${typeAll}</span></small></p>
        <p><small>Height: </small>${pokemon.height} | <small>Weight: </small>${pokemon.weight}</p>
        <p><small>Ability: </small>${ability}
    </div>
    `
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [pokemon.stats[0].stat.name,pokemon.stats[1].stat.name,pokemon.stats[2].stat.name,pokemon.stats[3].stat.name,pokemon.stats[4].stat.name],
        datasets: [{
            label: 'Status',
            backgroundColor: ['#A569BD','#3498DB','#16A085','#E74C3C','#F39C12'],
            borderColor: ['#A569BD','#3498DB','#16A085','#E74C3C','#F39C12'],
            data: [pokemon.stats[0].base_stat,pokemon.stats[1].base_stat,pokemon.stats[2].base_stat,pokemon.stats[3].base_stat,pokemon.stats[4].base_stat]

        }]
    },

    // Configuration options go here
    options: {
    }
});
    popup.innerHTML = pokeInfo;
    poke_container.appendChild(popup);
    console.log(pokemon);
}

fetchPokemon();



