/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var resultado;
var total;
sueldo=document.getElementById("sueldo").value;
document.getElementById("resultado").value=resultado;
total=sueldo.value*1.21;
resultado(total);
}
