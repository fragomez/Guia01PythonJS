function calcular(){
    let velocidad = parseInt(document.getElementById('velocidad').value);
    let velmts = velocidad / 3.6;
    
    document.getElementById('resultado').innerHTML=velmts+" m/s";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}