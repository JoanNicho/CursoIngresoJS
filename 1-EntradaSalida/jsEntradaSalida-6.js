/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var uno;
var dos;
var tres
uno=document.getElementById("numeroUno");
dos=document.getElementById("numeroDos");
tres=parseInt(uno.value)+parseInt(dos.value);
alert("la suma es "+tres);

}

