function calcular(){
    const sueldoBase = 1014980;
    const comision = 0.10;

    let v1 = parseInt(document.getElementById('v1').value);
    let v2 = parseInt(document.getElementById('v1').value);
    let v3 = parseInt(document.getElementById('v1').value);
    let subTotal = (v1 + v2 + v3) * comision;
    let total = sueldoBase+ subTotal;
    
    document.getElementById('resultado').innerHTML="El sueldo total es de $" + total + " pesos <br>Comisión: $"+subTotal+" pesos";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}