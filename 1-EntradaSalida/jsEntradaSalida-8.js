/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{var dividendo;
    var divisor;
    var total;
dividendo=document.getElementById("numeroDividendo");
divisor=document.getElementById("numeroDivisor");
total=parseInt(dividendo.value)%parseInt(divisor.value);
alert(total);
}
