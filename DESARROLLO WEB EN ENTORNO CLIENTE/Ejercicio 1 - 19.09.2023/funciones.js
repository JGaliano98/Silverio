//OPERADOR 1 DE 
var oper1="0";
//OPERADOR 2
var oper2="0";

var operacion="";

var operActual=1;



function pulsado(numero){

    var display=document.getElementById("display");

    if (operActual==1){

        oper1=((oper1==0)?"":oper1)+numero;
        display.innerHTML=oper1;
    } else{
        oper2=((oper2==0)?"":oper2)+numero;
        display.innerHTML=oper2;
    }

}

function operador(numero){

     operacion=numero;
    operActual=(operActual++)%2;
    
    if(numero==4){
        var display=document.getElementById("display");
        switch (operacion) {
            case 1:
                display.innerHTML=(oper1-0)+(oper2-0);             
                break;
        
            default:
                break;
        }
    } else{
        operacion=numero;
    }

}