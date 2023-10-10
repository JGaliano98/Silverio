window.addEventListener("DOMContentLoaded",function(){


    var tbody=document.getElementById("cuerpo");
    var nombreconcesionario=document.getElementById("concesionario");
    var mostrar=document.getElementById("mostrar");
    var ordenaMarca=this.document.getElementById("marca");
    var ordenaEdad=this.document.getElementById("edad");
    var ordenaColor=this.document.getElementById("color");
    var coche1=new Coche("1885HST","DACIA","DOCKKER",4,"GRIS","20/01/2013");
    var coche2=new Coche("8585MCM","VOLKSWAGEN","TIGUAN",5,"BLANCO","20/01/2023")
    //var coche3=new Coche("2406BJW","NISSAN","PATROL",3,"ROJO","30/08/2005")
    var concesionario=new Concesionario(nombreconcesionario,[coche1,coche2],"620573098");
    var vende=this.document.getElementById("vende");
    var matricula=this.document.getElementById("mat");
    var json=this.document.getElementById("json");


    mostrar.addEventListener("click",function(){
        concesionario.MostrarCoches(tbody);
    });

    ordenaMarca.addEventListener("click",function(){
        var array=concesionario.coches;
        array.sort(concesionario.OrdenarPorMarca);
        concesionario.MostrarCoches(tbody);
    });

    ordenaEdad.addEventListener("click",function(){
        var array=concesionario.coches;
        array.sort(concesionario.OrdenarPorEdad);
        concesionario.MostrarCoches(tbody);
    });

    ordenaColor.addEventListener("click",function(){
        var array=concesionario.coches;
        array.sort(concesionario.OrdenarPorColor);
        concesionario.MostrarCoches(tbody);
    });

    vende.addEventListener("click",function(){
        debugger;
        var mat=matricula.value;
        var coche=null;
        var array=concesionario.coches;

        for (let i=0;i<array.length;i++){
            if (array[i].matricula===mat){
                coche=array[i];
            }
        }


        concesionario.Vender(coche,concesionario);

        concesionario.MostrarCoches(tbody);
    });

    json.addEventListener("click",function(){
        concesionario.CargarCoches("prueba.json");
    });


});

//clase Coche
function Coche(matricula,marca,modelo,puertas,color,fecha_mat) {
    this.matricula=matricula;
    this.marca=marca;
    this.modelo=modelo;
    this.puertas=puertas;
    this.color=color;
    this.fecha_mat=fecha_mat;
}

//metodo común para todos los coches
Coche.prototype.pintar=function(colordistinto){
    this.color=colordistinto;
}

//clase concesionario
function Concesionario(nombre,coches,tlf) {
    this.nombre=nombre;
    this.coches=coches;
    this.tlf=tlf;
}

//metodos comunes para todos los objetos de la clase
Concesionario.prototype.OrdenarPorMarca=function(a,b){
    if (a.marca>b.marca){
        return 1;
    }else if (a.marca<b.marca){
        return -1;
    }else{
        return 0;
    }
}
Concesionario.prototype.OrdenarPorEdad=function(a,b){
    var fecha1=new Date(a.fecha_mat);
    var fecha2=new Date(b.fecha_mat);
    return fecha1.getTime()-fecha2.getTime();
}

Concesionario.prototype.OrdenarPorColor=function(a,b){
    if (a.color>b.color){
        return 1;
    }else if (a.color<b.color){
        return -1;
    }else{
        return 0;
    }
}
Concesionario.prototype.Vender=function(coche,concesionario){
    var array=concesionario.coches;

    var indiceAEliminar = array.findIndex(function (elemento) {
        return elemento.matricula === coche.matricula; // Compara por la propiedad matricula
    });

    if (indiceAEliminar !== -1) {
        array.splice(indiceAEliminar, 1); // Elimina el objeto en el índice encontrado
    }
}
Concesionario.prototype.MostrarCoches=function(tbody){
    var array=this.coches;
    var length=array.length;

    //borrar para que no se duplique
    tbody.innerHTML="";

    for (var i=0;i<length;i++){
        // Crea una nueva fila (tr)
        var fila = document.createElement("tr");

        // Crea celdas (td) para cada propiedad del objeto
        var tdMatricula = document.createElement("td");
        tdMatricula.textContent = array[i].matricula;

        var tdMarca = document.createElement("td");
        tdMarca.textContent = array[i].marca;

        var tdModelo = document.createElement("td");
        tdModelo.textContent = array[i].modelo;

        var tdPuertas = document.createElement("td");
        tdPuertas.textContent = array[i].puertas;

        var tdColor = document.createElement("td");
        tdColor.textContent = array[i].color;

        var tdFecha_Mat = document.createElement("td");
        tdFecha_Mat.textContent = array[i].fecha_mat;

        // Agrega las celdas a la fila
        fila.appendChild(tdMatricula);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdPuertas);
        fila.appendChild(tdColor);
        fila.appendChild(tdFecha_Mat);

        // Agrega la fila al cuerpo de la tabla
        tbody.appendChild(fila);
    }
}
Concesionario.prototype.CargarCoches=function(json){
    var array=Concesionario.coches;
    JSON.parse(objeto);
}
