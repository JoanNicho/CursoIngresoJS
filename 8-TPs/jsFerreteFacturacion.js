/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1;
var p2;
var p3;
var resultado;
p1=document.getElementById("PrecioUno");
p2=document.getElementById("PrecioDos");
p3=document.getElementById("PrecioTres");
resultado=parseInt(p1.value)+parseInt(p2.value)+parseInt(p3.value);
alert(resultado);
}
function Promedio () 
{
    var p1;
var p2;
var p3;
var	promedio;
p1=document.getElementById("PrecioUno");
p2=document.getElementById("PrecioDos");
p3=document.getElementById("PrecioTres");
promedio=parseInt(p1.value)+parseInt(p2.value)+parseInt(p3.value);
alert(promedio/3);


}
function PrecioFinal () 
{
    var p1;
var p2;
var p3;
var prefi;
var suma;
p1=document.getElementById("PrecioUno");
p2=document.getElementById("PrecioDos");
p3=document.getElementById("PrecioTres");
suma=parseInt(p1.value)+parseInt(p2.value)+parseInt(p3.value);
prefi=suma*1.21;
alert(prefi);
}