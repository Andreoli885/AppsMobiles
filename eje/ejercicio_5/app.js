
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function robaridentidad(persona){
    let per = persona.results[0];
    console.log("Nombre: " + per.name.first);
    console.log("Genero: " + per.gender);
    console.log("Pais: " + per.location.country+ " Estado: " + per.location.state+ " Ciudad: " + per.location.city+ " Calle: " + per.location.street.name+" "+ " Numero: " +
     per.location.street.number+ " Codigo postal: " +per.location.postcode);
    console.log("Email: " + per.email);
    console.log("Username: " + per.login.username);
    console.log("Password: " + per.login.password);
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(robaridentidad);
