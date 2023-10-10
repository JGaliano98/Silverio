#funcion valida dni
def validaDNI(dni):
    numero=dni[0:len(dni)-1]
    letra=dni[-1:]
   
    return "El número es {} y la letra es {}".format(numero,letra)

print(validaDNI("26515381s"))
