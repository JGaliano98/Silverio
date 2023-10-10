#funcion valida dni
def validaDNI(dni):
    numero=dni[0:len(dni)-1]
    letra=dni[-1:].upper()
    letras='TRWAGMYFPDXBNJZSQVHLCKE'
    return letras[int(numero)%23]==letra
            
   

print(validaDNI("26515381p"))
