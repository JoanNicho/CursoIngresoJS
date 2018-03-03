/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
var edad=document.getElementById("Edad").value;
var sexo=document.getElementById("Sexo").value;
var ecivil=document.getElementById("EstadoCivil").value;
var sueldo=document.getElementById("Sueldo").value;
var legajo=document.getElementById("Legajo").value;
var nacionalidad=document.getElementById("Nacionalidad").value;

edad=prompt("ingrese edad entre 18 y 90 años");
while((edad>0 && edad<18) || edad>90 || isNaN(edad))
{
edad=prompt("ingrese edad entre 18 y 90 años");
}
document.getElementById("Edad").value=edad;

sexo=prompt("ingrese sexo F o M");
while(sexo!="F" && sexo!="M" && sexo!=null)
{
sexo=prompt("ingrese sexo F o M");
}
document.getElementById("Sexo").value=sexo;

ecivil=prompt("ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
switch(ecivil){
    case "1":document.getElementById("EstadoCivil").value="Soltero"
    break;
    case "2":document.getElementById("EstadoCivil").value="Casado"
    break;
    case "3":document.getElementById("EstadoCivil").value="Divorciados"
    break;
    case "4":document.getElementById("EstadoCivil").value="Viudos"
    break;
}

sueldo=prompt("ingrese sueldo no menor a 8000");
while((sueldo>0 && sueldo<8000) || isNaN(sueldo)){
sueldo=prompt("ingrese sueldo no menora 8000");
sueldo=parseInt(sueldo);
}
document.getElementById("Sueldo").value=sueldo

legajo=prompt("ingrese el numero de legajos(sin ceros a la izquierda)");
while(legajo>0 && legajo<1000){
    legajo=prompt("ingrese el numero de legajos(sin ceros a la izquierda)");
}
document.getElementById("Legajo").value=legajo;

nacionalidad=prompt("Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
switch(nacionalidad){
    case "A": document.getElementById("Nacionalidad").value="Argentinos"
    break;
    case "E": document.getElementById("Nacionalidad").value="Extrajeros"
    break;
    case "N": document.getElementById("Nacionalidad").value="Nacionalizados"
    break;
}
































}
