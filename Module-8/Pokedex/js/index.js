const mainEl = document.querySelector("main");

async function getAllPokemons(offset) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
    const data = await res.json();
    return data.results;
}

async function getPokemon(url) {
    const res = await fetch(url);
    const data = res.json();
    return data;
}

getAllPokemons()
    .then(allPokemons => {
        allPokemons.forEach(poke => {
            getPokemon(poke.url)
                .then(pokemon => {
                    mainEl.innerHTML += `
                    <div class="pokemon">
                        <div class="pokemon-id">${pokemon.id}</div>
                        <img src=" ${pokemon.sprites.front_default}" class="pokemon-img"> 
                        
                        <div class="pokemon-name">${pokemon.name}</div>
                        <div class="pokemon-type">${pokemon.types[0].type.name + "/" + pokemon.types[1].type.name}</div>
                        
                        
                        <div class="pokemon-stat">HP: ${pokemon.stats[0].base_stat}</div>
                        <div class="pokemon-stat">Attack: ${pokemon.stats[1].base_stat}</div>
                        <div class="pokemon-stat">Defense: ${pokemon.stats[2].base_stat}</div>
                        <div class="pokemon-stat">Speed: ${pokemon.stats[5].base_stat}</div>
                    </div>
                `;
                });
        });
    });
