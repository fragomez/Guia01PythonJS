function circunferencia(){
    let  Pi = 3.14163333;
    let longitud = 2*Pi*parseInt(document.getElementById('radio').value);
    let area = Pi*parseInt(document.getElementById('radio').value)**2;
    
    document.getElementById('resultado').innerHTML="Longitud: "+longitud+"<br>"+"Área: "+area;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}