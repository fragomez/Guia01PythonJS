function ecuacion(){
    const x = 15;
    let altura = parseInt(document.getElementById('altura').value);
    let largo = parseInt(document.getElementById('largo').value);
    let ancho = parseInt(document.getElementById('ancho').value);
    let volumen = (4/3) * Math.PI * altura * largo * ancho;
    
    document.getElementById('resultado').innerHTML=volumen;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}