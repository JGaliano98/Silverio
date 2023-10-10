def media (*numeros): #Para un numero indeterminado de parametros, se pone el asterisco
    nValores=len(numeros);
    total =0
    for v in numeros:
        total=total+v
    return total/nValores

print (media (2,4,6,8,10))

#Funcion factorial, pasandole un numero postivo, devuelve el factorial del número

def factorial (n):
    respuesta=1
    if n>1:
        respuesta = n * factorial (n-1)
    return respuesta

#Funcion que pasandole un número devuelve la media de los mismos

def media (*numeros): #Para un numero indeterminado de parametros, se pone el asterisco
    nValores=len(numeros);
    total =0
    for v in numeros:
        total=total+v
    return total/nValores