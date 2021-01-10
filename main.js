const poke_container = document.getElementById('poke_container');

// Color coding for different pokemon types
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#Fff1ba',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#f7cdf7',
    bug: '#e0e8a2',
    dragon: '#97b3e6',
    psychic: '#ffc9da',
    flying: '#eae3ff',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    steel: "#e6eaf0",
    ice: "e8feff",
    ghost: "dbbaff",
    dark: "a9abb0"

};

const main_types = Object.keys(colors);
const region = ($("input[name=rdo]:checked").val());

$("#submit-button1").on("click", function(event){
    event.preventDefault();
    const pokemonName = $("#search").val()
    .trim();
    $("#poke_container").empty();
    searchgetPokemon(pokemonName);   
});      

$("#submit-button").on("click", function(event){
    event.preventDefault();
    const region = ($("input[name=rdo]:checked").val());
    $("#poke_container").empty();
    fetchPokemon(region);
});       

// To call pokemon
const fetchPokemon = async (region) => {
    if (region == 'kanto'){
        for (let i=1; i<=151; i++){
        getPokemon(i);
    }
}
    else if (region == 'johto'){
        for (let i=152; i<=251; i++){
        getPokemon(i);
    }
}
    else if (region == 'hoenn'){
        for (let i=252; i<=386; i++){
        getPokemon(i);
    }
}
    else if (region == 'sinnoh'){
        for (let i=387; i<=487; i++){
        getPokemon(i);
    }
}
    else if (region == 'unova'){
        for (let i=494; i<=649; i++){
        getPokemon(i);
    }
}
    else if (region == 'kalos'){
        for (let i=650; i<=718; i++){
        getPokemon(i);
    }
}
    else if (region == 'alola'){
        for (let i=722; i<=807; i++){
        getPokemon(i);
    }
}
    else if (region == 'galar'){
        for (let i=810; i<=890; i++){
        getPokemon(i);
    }
}
};

const searchgetPokemon = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(url);
    const pokemon =  await res.json();
    createPokemonCard(pokemon);
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon =  await res.json();
    createPokemonCard(pokemon);
};

function createPokemonCard(pokemon){
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add('pokemon');
    // Extract the more common/main pokemon type for color coding
    const poke_types = pokemon.types.map(type => type.type.name);
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
        <small class ="type"><span>${type[0].toUpperCase() + type.slice(1)}</span></small>
    </div>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHtml;
    poke_container.appendChild(pokemonEl);
};

const selectPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    displayPopup(pokemon);
};

const displayPopup = async (pokemon) =>{
    $("#poke_container").empty();
    $("#cntr").addClass('hidden');
    $("#search-bar").addClass('hidden');    
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
    type.type.name).join(' / ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
    const ability = pokemon.abilities.map((ability) =>
    ability.ability.name).join(' / ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
    const height = (pokemon.height / 10) + "m"
    const weight = (pokemon.weight / 10) + "kg"
    const pokeInfo = `
    <div class = "basic-info">
    <span class ="number">#${pokemon.id.toString().padStart(3,'0')}</span>
        <h3 class="name">${pokeName}</h3>
    </div>
        <button id="closeBtn" onclick="closePopup()">Back</button>
    <div class = "img-container2">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokeName}"/>
    </div>
    <div class = "info2">
        <p>Type</p>   
        <p><span>${typeAll}</span></p>
        <p>Height: <small>${height}</small> | Weight: <small>${weight}</small></p>
        <p>Ability: ${ability}</p>
    </div>
    `
    popup.innerHTML = pokeInfo;
    poke_container.appendChild(popup);
    createChart(pokemon);
};

const createChart = (pokemon) =>{
    var ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
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

};

const closePopup = () =>{
    $("#cntr").removeClass('hidden');
    $("#search-bar").removeClass('hidden'); 
    $("#poke_container").empty();
    $("#myChart").remove();
    const newChart = document.createElement("canvas");
    newChart.id = "myChart";
    document.body.appendChild(newChart);
    fetchPokemon(region);
}

fetchPokemon(region);






