function Mostrar()
{
  var importe;
  var impdes
  var porcentaje
  importe=prompt("importe");
  porcentaje=(importe*25)/100; 
  impdes=importe-porcentaje;
  document.getElementById("importeFinal").value=impdes;
}
