function triangulo(){
    let base = parseInt(document.getElementById('base').value);
    let altura = parseInt(document.getElementById('altura').value);
    area = (base*altura)/2;
    document.getElementById('resultado').innerHTML=area;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}