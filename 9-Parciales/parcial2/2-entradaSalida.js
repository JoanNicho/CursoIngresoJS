//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var importe=prompt("Ingrese importe");
	var imporFinal;
	var iva;
	iva=parseInt(importe)*0.21;
	imporFinal=parseInt(importe)+parseInt(iva);
	document.getElementById("importe").value=imporFinal;


}

