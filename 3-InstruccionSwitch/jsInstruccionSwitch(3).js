function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Febrero":alert("Este dia tiene 28 días")
    break;
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":alert("Este mes tiene 30 días o más")
    break;
}


	
	


}//FIN DE LA FUNCIÓN