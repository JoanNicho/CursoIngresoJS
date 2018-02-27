//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{var largo=document.getElementById("largo").value*2;
	var ancho=document.getElementById("ancho").value*2;
	var perimetro=(parseInt(largo)+parseInt(ancho))*6;
	alert("la cantidad de alambrado que se necesita es de:"+perimetro);
	
}

