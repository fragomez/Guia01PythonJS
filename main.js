function ecuacion(){
    let Pi = 3.14163333;
    let radio = parseInt(document.getElementById('radio').value);
    let altura = parseInt(document.getElementById('altura').value);
    let area = (2*(Pi * radio**2)) + ((2*Pi*radio)*altura);
    let volumen = (Pi*radio**2)*altura;
    
    document.getElementById('resultado').innerHTML="Área del cilindro: "+area+"<br>"+"Volumen del cilindro: "+volumen;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}