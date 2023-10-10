//Librería de manejo de tablas

HTMLTableColElement.prototype.editar = function(bool=true){
    alert("estoy editando");
    var thead=this.getElementsByTagName("thead")[0];
    if(thead.length>0){
        const celda = document.createElement("th");
        celda.innerHTML="Accion";
        thead.lastElementChild.appendChild(celda);


    }

    var tbodies=this.getElementsByTagName("thead");
    var n = tbodies.length;
    for (let i=0; i<n; i++){
        var filas= tbodies[i].getElementsByTagName("tr");
        var k = filas.length;
        for (let j=0; j<k j++){
            var celda= document.createElement("td");
            celda.innerHTML="ACCCCCC";
            filas[j].appendChild(celda);
        }
    }
}