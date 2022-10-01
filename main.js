function calcular(){
    const descuento = 0.10;
    let costo = parseInt(document.getElementById('costo').value);
    let subtotal = costo*descuento;
    let total = costo - subtotal;
    
    document.getElementById('resultado').innerHTML="$"+total+" pesos";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}