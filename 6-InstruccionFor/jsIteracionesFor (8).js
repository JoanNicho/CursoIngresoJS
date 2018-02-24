function Mostrar()
{
var cont=0;
var rta="es primo";
var num=prompt("");
for(var i=2;i<num;i++){
    if(num%i==0){
        rta="no es primo";
break;
}

}
alert(rta);

}//FIN DE LA FUNCIÓN