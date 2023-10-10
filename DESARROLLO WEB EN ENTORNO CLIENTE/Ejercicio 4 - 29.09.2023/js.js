function esValidaFecha(fecha){
    //Dividimos la fecha introducida en 3 partes con la funcion split
    var partes = fecha.split("/");
    //Creamos las variables
    var ano = parseInt(partes[0],10);
    var mes = parseInt(partes[1],10)-1; //se resta 1 porque los meses en javascript van de 0 a 11
    var dia = parseInt(partes[2],10);

    //Creamos el objeto con la fecha proporcionada
    var fechaObj = new Date (ano, mes, dia);

    if (fechaObj.getFullYear()===ano && fechaObj.getMonth()===mes && fechaObj.getDate()===dia){

        return true;

    } else {

        return false;

    }
}

function diaNacimiento(fecha){

    var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

     //Dividimos la fecha introducida en 3 partes con la funcion split
     var partes = fecha.split("/");
     //Creamos las variables
     var ano = parseInt(partes[0],10);
     var mes = parseInt(partes[1],10)-1; //se resta 1 porque los meses en javascript van de 0 a 11
     var dia = parseInt(partes[2],10);
 
     //Creamos el objeto con la fecha proporcionada
     var fechaObj = new Date (ano, mes, dia);

     // Obtenemos el número correspondiente al día de la semana (0 para domingo, 1 para lunes, etc.)
     var numeroDia = fechaObj.getDay();

     // Obtenemos el nombre del día de la semana
     var nombreDia = dias[numeroDia];
 
     return nombreDia;

}



function esMayorDeEdad(fechaNacimiento){

    // Parsea la fecha de nacimiento y la fecha actual
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var fechaActual = new Date();
  
  // Calcula la diferencia en milisegundos entre las dos fechas
  var diferenciaMilisegundos = fechaActual - fechaNacimientoDate;
  
  // Convierte la diferencia en años
  var añosDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
  
  // Comprueba si la persona tiene al menos 18 años

  if (añosDiferencia >= 18) {
    return console.log("Es mayor de edad.");
  } else {
    return console.log("No es mayor de edad.");
  }
    

}

function contadorJubilacion(fechaNacimiento, edadJubilacion) {

    // Parsea la fecha de nacimiento y la fecha actual
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
  
    // Calcula la fecha de jubilación
    var fechaJubilacion = new Date(fechaNacimientoDate.getFullYear() + edadJubilacion, fechaNacimientoDate.getMonth(), fechaNacimientoDate.getDate());
  
    // Calcula la diferencia en milisegundos entre la fecha de jubilación y la fecha actual
    var diferenciaMilisegundos = fechaJubilacion - fechaActual;
  
    // Convierte la diferencia en años, días, minutos y segundos
    var milisegundosEnUnAño = 1000 * 60 * 60 * 24 * 365.25;
    var añosRestantes = Math.floor(diferenciaMilisegundos / milisegundosEnUnAño);
    var milisegundosRestantes = diferenciaMilisegundos % milisegundosEnUnAño;
    var diasRestantes = Math.floor(milisegundosRestantes / (1000 * 60 * 60 * 24));
    var minutosRestantes = Math.floor((milisegundosRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60));
    var segundosRestantes = Math.floor((milisegundosRestantes % (1000 * 60)) / 1000);
  
    return {
        años: añosRestantes,
        días: diasRestantes,
        minutos: minutosRestantes,
        segundos: segundosRestantes
      };        
    
  }

