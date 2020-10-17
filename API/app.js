const buscanumero = require("./libraryCurrency.js");

let traducnumero = function (numero) {
    console.log("El Pais es "+numero.country_name + " \nEl codigo es "+numero.country_code + "\nSu numero prefijo es "+numero.country_prefix);
}

var numero= "+541130960120";

buscanumero(numero)
  .then((number) => {
    traducnumero(number);
  }).catch((err) => {
    console.log("ese numero no existe, asegurese de poner el prefijo");
  });
  