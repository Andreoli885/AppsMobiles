const esPar = [32, 33, 16, 40, 4, 2, 6];


const nuevoArr = (element) => element %2 === 0;

console.log(esPar.filter(nuevoArr));