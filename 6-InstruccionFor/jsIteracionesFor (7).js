function Mostrar()
{
    var rep=prompt("");
var cont=0;
var msj="los divisores son";
for(var i=0;i<rep;i++){
if(rep%i==0){
    console.log(i);
    cont++;
    msj=msj+i;
}
}


}//FIN DE LA FUNCIÓN