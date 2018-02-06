function Mostrar()
{
var precio1;
var precio2;
var precio3;
var suma;
var promedio;
precio1=document.getElementById("precioUno");
precio2=document.getElementById("precioDos");
precio3=document.getElementById("precioTres");
suma=parseInt(precio1.value)+parseInt(precio2.value)+parseInt(precio3.value);
promedio=suma/3;
alert("la suma es "+suma+ " y el promedio es "+promedio);
}
