function esFechaValida(fechaStr) {
  // Intenta analizar la cadena como una fecha
  var fecha = new Date(fechaStr);
  
  // Comprueba si la fecha analizada es válida
  if (isNaN(fecha)) {
    return false;
  }
  
  return true;
}

function mostrarFechaConAsteriscos() {
  // Obtiene el valor del textarea
  var textarea = document.getElementById("miTextArea");
  var fechaIntroducida = textarea.value;

  if (esFechaValida(fechaIntroducida)) {
    var fechaConAsteriscos = `${fechaIntroducida} (**)`;
    
    // Actualiza el contenido del textarea con la fecha modificada
    textarea.value = fechaConAsteriscos;
  } else {
    alert("La fecha introducida no es válida.");
  }
}

function eliminarMarcasAsteriscos(cadenaConMarcas) {
  // Utiliza la función replace para eliminar las marcas "(**)"
  var cadenaSinMarcas = cadenaConMarcas.replace(/\(\*\*\)/g, '');

  return cadenaSinMarcas;
}

function eliminaMarcas() {
  // Obtiene el valor del textarea
  var textarea = document.getElementById("miTextArea");
  
  // Obtiene el contenido del textarea
  var contenido = textarea.value;
  
  // Elimina las marcas "(**)" y actualiza el contenido del textarea
  var contenidoSinMarcas = eliminarMarcasAsteriscos(contenido);
  textarea.value = contenidoSinMarcas;
}

function marcarTextoNoFecha() {
  // Obtiene el valor del textarea
  var textarea = document.getElementById("miTextArea");
  var contenido = textarea.value;

  // Divide el contenido en palabras usando espacios como separadores
  var palabras = contenido.split(' ');

  // Recorre las palabras y verifica si son una fecha o no
  var contenidoMarcado = palabras.map((palabra) => {
    // Utiliza una función para verificar si la palabra es una fecha válida
    if (esFechaValida(palabra)) {
      return palabra; // Si es una fecha, no se marca
    } else {
      return `*${palabra}`; // Si no es una fecha, se marca con "*"
    }
  });

  // Une las palabras nuevamente en una cadena y actualiza el contenido del textarea
  textarea.value = contenidoMarcado.join(' ');
}


function eliminarTextoNoFecha() {
  // Obtiene el valor del textarea
  var textarea = document.getElementById("miTextArea");
  var contenido = textarea.value;

  // Divide el contenido en palabras usando espacios como separadores
  var palabras = contenido.split(' ');

  // Filtra las palabras que sean fechas válidas
  var fechasValidas = palabras.filter(function(palabra) {
    return esFechaValida(palabra);
  });

  // Une las fechas válidas en una cadena y actualiza el contenido del textarea
  textarea.value = fechasValidas.join(' ');
}


function ordenaFechas(fecha1,fecha2){
  return ((new Date(fecha1).getTime())-(new Date(fecha2).getTime()));  
}

