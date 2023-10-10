//Obtiene las variables necesarias que van a intervenir
var cuerpo = document.getElementById("cuerpo");

//Variables de input
var dni = document.getElementById("dni");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");

//Botón para añadir
var boton = document.getElementById("boton");

//Variables para ordenar
var ordDNI = document.getElementById("ordDNI");
var ordNombre = document.getElementById("ordNombre");
var ordApellidos = document.getElementById("ordApellidos");

ordDNI.sentido = 1;
ordNombre.sentido = 1;
ordApellidos.sentido = 1;



//Crea un array vacío
var personas = [];

//Realiza el clic del botón Agregar
boton.onclick = function ()
                {
                    //Añade datos al array
                    personas.push({dni: dni.value, 
                                  nombre: nombre.value, 
                                  apellidos: apellidos.value
                                  })

                    //Vacía los valores 
                    dni.value = "";
                    nombre.value = "";
                    apellidos.value = "";

                    //Pone el foco en el dni
                    dni.focus();

                    //Añade en la tabla las personas
                    cuerpo.innerHTML = muestra(personas);
                }

//Realiza el clic del td DNI
ordDNI.onclick = function()
                 {
                    personas.sort(ordenarPor("dni", this.sentido));
                    this.sentido *= -1;
                    console.log(personas);
                    /*personas.sort(function(a, b)
                                  {
                                    return a.dni.localeCompare(b.dni);
                                  })*/
                    cuerpo.innerHTML = muestra(personas);

                 }

//Realiza el clic del td Nombre
ordNombre.onclick = function()
                    {
                        personas.sort(ordenarPor("nombre", this.sentido));
                        this.sentido *= -1;
                        /*personas.sort(function(a, b)
                                      {
                                        return a.nombre.localeCompare(b.nombre);
                                      })*/
                        cuerpo.innerHTML = muestra(personas);
                    }

//Realiza el clic del td Apellidos
ordApellidos.onclick = function()
                       {
                            personas.sort(ordenarPor("apellidos", this.sentido));
                            this.sentido *= -1;
                            /*personas.sort(function(a, b)
                                          {
                                            return a.apellidos.localeCompare(b.apellidos);
                                          })*/
                            cuerpo.innerHTML = muestra(personas);
                        }



//Función que ordena por valores.
function ordenarPor(valor, sentido)
{
    return function(a, b)
           {
                /*se multiplica por sentido debido a que, de esta manera, podremos ordenar de manera
                  ascendente y descendiente debido a que el número que le damos, es el clic que hemos dado
                  1 -> Ordenar ascendente
                  2 -> Ordenar descendente*/
                return a[valor].localeCompare(b[valor]) * sentido;
           }
}

//Función que muestra en pantalla los datos
function muestra(personas)
{
    return personas.reduce(function (total, value, index, arr)
                          {
                              return total + "<tr><td>" + value.dni + "</td>" +
                                                 "<td>" + value.nombre + "</td>" +
                                                 "<td>" + value.apellidos + "</td></tr>";
                          }, "")
}


