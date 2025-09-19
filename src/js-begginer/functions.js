// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// let x = random(4);

// console.log(x);
"use strict"; // forca a declarar varaiveis

function soma(a,b){

    return a+b;
}

let result = soma(4,2); // eh um boa pratica declarar as variaveis
console.log(result);


///
let pokemons = ["bubassauro","charmander","charizard","squirtle"]

console.log(pokemons);
console.log(pokemons.length);
console.log(pokemons[0]);
console.log(pokemons[pokemons.length-1]);

//add element to pokemons array
pokemons.push("pikachu")
console.log(pokemons);

//remove elemento to pokemons array (end of list)
pokemons.pop("pikachu")
console.log(pokemons);
