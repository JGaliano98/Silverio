/*

    CONSTRUCTOR PERSONA

*/

 function Persona (nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;


 }

 Persona.prototype.nombreCompleto=function(){
    return this.nombre + " " + this.apellido;
 }

 Persona.prototype.nacionalidad="Español";
 

 p1= new Persona("Silverio", "vilchez",120);
 p2=new Persona ("Juan","Perez",150);



/*

PROTOTIPOS

*/

 var fecha=new Date();

Date.prototype.toString()=function(){
    return fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
}

//Creamos el objeto coche, con atributos:
//Matricula, marca, modelo, puertas, color, fecha de matriculación
//Métodos:
//Pintar (color)

//Creamos otro objeto Concesionario:
//Nombre, coches, teléfono
//Métodos:
//Ordenar por marca
//Ordenar por edad
//Ordenar por color
//vender (coche)
//mostrar coches (tbody)
//cargar coches (jSOn)

//pagina web que tiene que salir


