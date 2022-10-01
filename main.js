function llamadas(){
    const minuto = 355;
    const iva = 0.20;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let minutos = cantidad * minuto;
    let subtotal = minutos * iva;
    let total = minutos + subtotal;
    
    document.getElementById('resultado').innerHTML="$"+total+" pesos";
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}