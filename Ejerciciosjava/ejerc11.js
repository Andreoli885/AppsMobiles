/* 11  Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad. */
class Persona{
constructor(nombre,edad,telefono)
{
    
nombre=nombre;
edad=edad;
telefono=telefono;
}
presentar(nombre,edad,telefono)
{
   return "hola soy  "+nombre+" tengo "+edad+ " años"+" y mi telefono es "+telefono; 
}

}


/*12Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.*/


class Estudiante extends Persona
{

    constructor(nombre,edad,telefono,profesor)
    {
        super(nombre,edad,telefono);
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

console.log(p.presentar("Leonel","19","4255469"))
console.log(pr.estudiando()+ pr.setProfesor(" Nico"))


/* 13- Crea una clase Profesor (que herede de Persona) que tenga un  atributo estudiantes con un array de Estudiante.
 Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando y el método addEstudiante(unEstudiante)
 que agregue a ese estudiante a la lista. Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia) */






