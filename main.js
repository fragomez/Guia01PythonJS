function calcular(){
    const pagoHora = 15300;
    
    let nombre = document.getElementById('nombre').value;
    let horas = parseInt(document.getElementById('horas').value);
    let total = horas * pagoHora; 
    
    document.getElementById('resultado').innerHTML="El sueldo total de "+nombre+" es de $" + total + " pesos";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}