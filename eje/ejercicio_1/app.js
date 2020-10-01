
const obtenerChiste = require("./library");



function joker(haha) {
    let chiste = haha[0];
    console.log("Pregunta");
    console.log(chiste.setup);
    console.log("Respuesta");
    console.log(chiste.punchline);
}
obtenerChiste(joker);
