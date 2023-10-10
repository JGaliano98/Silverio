#te da una fecha y te da un array devuelve en dia mes y año

from datetime import date


def muestraFecha(fechaIni):
    fecha = date(fechaIni[0], fechaIni[1], fechaIni[2])
    dia = fecha.day
    mes = fecha.month
    anio = fecha.year

    return "Fecha introducida: Día: {}, Mes: {}, Año: {}.".format(dia,mes,anio)

print (muestraFecha((2023,1,10)))

