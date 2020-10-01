const obtenerPersonaFake = require("./library");

// Codigo funcion callback
 obtenerPersonaFake().then(persona => {
    
    console.log("Nombre: " + persona.results[0].name.first);
    console.log("Genero: " + persona.results[0].gender);
    console.log("Pais: " + persona.results[0].location.country+ " Estado: " + persona.results[0].location.state+ " Ciudad: " + persona.results[0].location.city+ " Calle: " + persona.results[0].location.street.name+" "+ " Numero: " + persona.results[0].location.street.number+ " Codigo postal: " +persona.results[0].location.postcode);
    console.log("Email: " + persona.results[0].email);
    console.log("Username: " + persona.results[0].login.username);
    console.log("Password: " + persona.results[0].login.password);
}).catch((err)=>{
    console.log('persona erronea');
});





  




