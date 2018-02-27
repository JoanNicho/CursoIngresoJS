//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var	num1=prompt("Ingrese el primer número");
var num2=prompt("Ingrese el segundo número");
num1=parseInt(num1);
num2=parseInt(num2);
var resultado
if(num1===num2){
resultado=parseInt(num1)*parseInt(num2);
document.write("El resultado es:"+resultado);
}
else{
	if(num1>num2){
resultado=parseInt(num1)-parseInt(num2);
document.write("El resultado es:"+resultado);
	}
	else{
		if(num1<num2){
			resultado=parseInt(num1)+parseInt(num2);
			document.write("El resultado es:"+resultado);
		}
	}
}















}

