// 11
class Persona{
constructor(nombre,edad)
{
    
nombre=nombre;
edad=edad;
}
presentar(nombre,edad)
{
   return "hola soy  "+nombre+" tengo "+edad+ "años"; 
}

}


//12

class Estudiante extends Persona
{

    constructor(nombre,edad,profesor)
    {
        super(nombre,edad);
        profesor = profesor;

    }
    setProfesor(profesor)
    {
        return profesor;
    }
    estudiando()
    {
        return "Estudiando con";
    }
}

var p =new Persona();
var pr = new Estudiante();

console.log(p.presentar("Leonel","19"))
console.log(pr.estudiando()+ pr.setProfesor(" Nico"))

