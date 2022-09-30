/* Función flecha
let limpiar = () => document.getElementById('miCalculadora').reset(); document.getElementById('resultado').innerHTML="";
return limpiar; */

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML= "";
}

function sumar(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let suma = numero1 + numero2;
    document.getElementById('resultado').innerHTML = suma;
}

function restar(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let resta = numero1 - numero2;
    document.getElementById('resultado').innerHTML = resta;
}

function multiplicar(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let multiplicacion = numero1 * numero2;
    document.getElementById('resultado').innerHTML = multiplicacion;
}

function dividir(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let division = numero1 / numero2;
    document.getElementById('resultado').innerHTML = division;
}