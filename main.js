function esfera(){
    let Pi = 3.14163333;
    let volumen = 4/3 * Pi * parseInt(document.getElementById('radio').value**3);
    
    document.getElementById('resultado').innerHTML="El volumen de la esfera es: "+volumen+" m3";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}