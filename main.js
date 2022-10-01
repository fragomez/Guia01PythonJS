function ecuacion(){
    let a = parseInt(document.getElementById('valorA').value);
    let b = parseInt(document.getElementById('valorB').value);
    let c = parseInt(document.getElementById('valorC').value);
    let resultado = (a+7*c)/(b+2-a)+2*b;
    
    document.getElementById('resultado').innerHTML=resultado;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}