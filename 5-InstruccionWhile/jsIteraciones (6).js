function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var num=prompt("Ingrese 5 números.");
	while(num)
	{
		num=parseInt(num);
		contador++;
		acumulador+=num;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN