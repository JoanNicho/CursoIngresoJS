/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{var uno;
 var dos;
 var tres;
uno=document.getElementById("numeroUno");
dos=document.getElementById("numeroDos");
tres=parseInt(uno.value)+parseInt(dos.value);
alert("la suma es "+tres);
}

function restar()
{
	var uno;
var dos;
var tres;
uno=document.getElementById("numeroUno");
dos=document.getElementById("numeroDos");
tres=parseInt(uno.value)-parseInt(dos.value);
alert("la resta es "+tres);
}

function multiplicar()
{ var uno
	var dos
var tres
uno=document.getElementById("numeroUno");
dos=document.getElementById("numeroDos");
tres=parseInt(uno.value)*parseInt(dos.value);
alert("la multiplicaciòn es "+tres);
}

function dividir()
{var uno
var dos
	var tres
uno=document.getElementById("numeroUno");
dos=document.getElementById("numeroDos");
tres=parseInt(uno.value)/parseInt(dos.value);
alert("la division es "+tres);
}

