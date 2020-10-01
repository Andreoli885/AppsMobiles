  

const obtenerChiste = require("./library");


obtenerChiste().then((haha)=>{
    let joker = haha[0];
    console.log(joker.setup);
    console.log(joker.punchline);
}).catch((err)=>{
    console.log('Joker no tiene mas chistes');
});