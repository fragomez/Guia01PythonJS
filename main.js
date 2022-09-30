function velocidad(){
    let espacio = 2*1000;
    let tiempo = 5*60;
    let velocidad = espacio/tiempo;
    
    document.getElementById('resultado').innerHTML="La velocidad es de: "+velocidad+" m/s";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}