window.addEventListener("load", function(){

 //Capturamos los elementos que intervienen en la tabla

    const tabla = document.getElementById("tabla"); //Capturamos la tabla
    const tfoot = tabla.getElementsByTagName("tfoot")[0];//capturamos eltfoot
    const tbody = tabla.getElementsByTagName("tbody")[0]; //capturamos el tbody
    const inputs = tfoot.getElementsByTagName("input"); //capturamos todos los inputs
    const btnGuardar = tfoot.querySelector("span.boton"); //Capturamos el boton guardar

//Ponemos un escuchador para el boton guardar, para que esté a la espera de que se pulse para reaccionar

    btnGuardar.addEventListener("click", guardarDatos );

    function editar(){ //FUncion para que cuando se pulse el boton E se edite
        
        //Oculto el boton editar y borrar

        this.style.display="none";

        this.nextElementSibling.style.display="block";

        //Hago aparecer el boton Guardar.

        this.parentNode.lastElementChild.style.display="none";

        var fila = this.parentNode.parentNode; //Cogemos la fila

        var celdas = fila.getElementsByTagName("td"); //Cogemos las celdas de la fila.


        var n=celdas.length-1; //Para saber la longitud del array de los inputs

        for(let i=0; i<n; i++){ //Bucle for para ir recorriendo las filas y las celdas

            var input=document.createElement("input");  //crea la caja de texto
            input.setAttribute("type","text"); //Lo crea tipo texto
            input.value = celdas[i].innerHTML; //Mete el valor de la celda en la caja de texto
            celdas[i].innerHTML=""; //Borra el contenido de la celda (anterior)
            celdas[i].appendChild(input); //Introduce el input a la celda (Nuevo valor de la celda)
        }              

    }

    function guardar (){

        var fila = this.parentNode.parentNode; //Cogemos la fila

        var celdas = fila.getElementsByTagName("td"); //Cogemos las celdas de la fila.

        var inputs = fila.getElementsByTagName("input"); //Cogemos las celdas de la fila.

        var n=celdas.length;

        for (let i = 0; i < n; i++) {

            celdas[i]=innerHTML=inputs[0].value; 
            
        }

        this.style.display="none";
        this.previousElementSibling.style.display="";
        //this.previousElementSibling.previousElementSibling.style.display="";
        this.nextElementSibling.style.display="";

    }

    function guardarDatos(){ //Para guardar los datos en las celdas y flas

        const fila = document.createElement("tr"); //Creamos la fila
        let n = inputs.length; //Tamaño del array
        for(let i=0; i<n; i++){
            var td = document.createElement("td"); //Creamos celda
            td.innerHTML=inputs[i].value; //LLenamos la celda
            fila.appendChild(td); //Incorporarlo a la fila
            tbody.appendChild(fila);
        }
    
        const botonE=document.createElement("span"); //Creamos el boton Editar
        botonE.className="boton";
        botonE.innerHTML="E";
        botonE.onclick=editar;

        const botonB=document.createElement("span"); //Creamos el boton Borrar
        botonB.className="boton";
        botonB.innerHTML="B";
        botonB.onclick=function(){ //Funcion para que cuando pulse el boton B borre
            this.parentNode.parentNode.remove();
        }

        const botonG=document.createElement("span"); //Creamos el boton Guardar
        botonG.className="boton";
        botonG.innerHTML="G";
        botonG.style.display="none";
        botonG.onclick=guardar;

        const celda = document.createElement("td"); //Creamos la celda donde estarán los botones
        celda.appendChild(botonE);
        celda.appendChild(botonG);
        celda.appendChild(botonB);

        fila.appendChild(celda); //añado la celda a la fila

        tbody.appendChild(fila); //Lo añadimos al tbody

        //Para borrar
        inputs[0].form.reset();


    }

});

