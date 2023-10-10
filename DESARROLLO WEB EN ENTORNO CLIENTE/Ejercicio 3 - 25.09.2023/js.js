


const persona = [];

window.addEventListener("DOMContentLoaded",function(){
    var dni=document.getElementById("caja1");
    var nombre=document.getElementById("caja2");
    var apellido=document.getElementById("caja3");
    var boton=document.getElementById("caja4");
    var body=document.getElementById("body");
    boton.addEventListener("click",function(){

        persona.push({dni:caja1.value,nombre:caja2.value,apellido:caja3.value}); 
    
    });
});







function ordenaPorDni(a,b){
    return a.dni.localeCompare(b.dni);
}
function ordenaPorNombre(a,b){
    return a.nombre.localeCompare(b,nombre);
}
function ordenaPorApellido(a,b){
    return a.apellido.localeCompare(b,apellido);
}



function arrayToHTML(array){

    var n = array.lenght;
    var texto="";

    for (var i=0; i<length; i++){

        
    }
}

