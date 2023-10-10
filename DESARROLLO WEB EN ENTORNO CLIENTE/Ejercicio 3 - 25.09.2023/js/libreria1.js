
//Elementos que intervienen en mi web (variables)

var tbody=document.getElementById("cuerpo");
var dni = document.getElementById("caja1");
var nombre = document.getElementById("caja2");
var apellido = document.getElementById("caja3");
var button = document.getElementById("boton");

var ordDni = document.getElementById("ordDni");
var ordNombre = document.getElementById("ordNombre");
var ordApellido = document.getElementById("ordApellido");

var personas=[]; //Creamos un array personas para almacenar los datos. Lo creamos vacío.

button.onclick=function(){

    personas.push({caja1:dni.value,
                   caja2:nombre.value,
                   caja3:apellido.value});

    dni.value="";
    nombre.value="";
    apellido.value="";
    dni.focus();

    tbody.innerHTML=muestra(personas); //Para mostrar los dni nombre y apellido introducidos

}

ordDni.onclick=function(){
    personas.sort(function(a,b){
        return a.caja1.localeCompare(b.caja1);
    })
    tbody.innerHTML=muestra(personas);
}

ordNombre.onclick=function(){
    personas.sort(function(a,b){
        return a.caja2.localeCompare(b.caja2);
    })
    tbody.innerHTML=muestra(personas);
}

ordApellido.onclick=function(){
    personas.sort(function(a,b){
        return a.caja3.localeCompare(b.caja3);
    })

    tbody.innerHTML=muestra(personas);
}

function muestra(personas){
    return personas.reduce(function(total,value){
        return total +
        "<tr><td>"+value.caja1+"</td>"+
            "<td>"+value.caja2+"</td>"+
            "<td>"+value.caja3+"</td></tr>\n";
    },"");
}