
const numeros = ([7,9,25,42]);

var cuantosCumplen = numeros.reduce(function(contador, numeros)
{
    if(numeros % 2 == 0)
    {
        return contador + 1;
    }else{
        return contador;
    }
}, 0);
console.log(cuantosCumplen);    

mal

const array=[1,2,3];

const even = (element) => element %2 === 0;

console.log(array.some(even));