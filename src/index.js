let pokemonInstances;

function getUserInput() {
    let input = document.querySelector("input").value
    document.getElementById("pokemon-container").innerHTML = "";
    pokemonInstances = [];
    const matchingPokemons = findPokemons(input);
    pokemonInstances = makeAllPokemons(matchingPokemons);
    for (let poke of pokemonInstances) {
        poke.render();
    }
}

function inputListener() {
    document.querySelector("input").addEventListener("keyup", getUserInput)
}

function findPokemons(input) {
    const matchingPokemons = pokedata.pokemons.filter( pokemon => {
        if (pokemon.name.indexOf(input) != -1) {
            return pokemon
        }
    })
    return matchingPokemons;
}

function createAPokemon(rawPokemon) {
    let pokemon = new Pokemon(rawPokemon.name, rawPokemon.sprites.front, rawPokemon.sprites.back)
    return pokemon;
}

function makeAllPokemons(pokemonArray) {
    return pokemonArray.map( (pokemonObject) => {
        return createAPokemon(pokemonObject)
    })
}

function flipPokemon() {
    //fires only when flip card event is triggered
    let name = event.target.dataset.pokename;
    //iterate through global array of pokemon instances
    for (let poke of pokemonInstances) {
        if (poke.name === name) {
            if (!poke.flipped) {
                //pokemon had not been flipped, so show the back now
                event.target.parentNode.querySelector("img").src = poke.spriteback;
            } else {
               //pokemon was flipped, show the front again
                event.target.parentNode.querySelector("img").src = poke.spritefront;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    inputListener();
})
