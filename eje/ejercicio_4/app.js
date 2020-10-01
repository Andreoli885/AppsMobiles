const obtenerPokemon = require("./library");


obtenerPokemon("butterfree").then((pokemon) => {
   console.log(pokemon.name);
   console.log("")
   console.log("Habilidades")
   pokemon.abilities.forEach(element => {
       console.log(element.ability.name);
   });
}).catch((err)=>{
console.log('no se encontro');
});

