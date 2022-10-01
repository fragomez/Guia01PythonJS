function ecuacion(){
    const x = 15;
    let a = parseInt(document.getElementById('valorA').value);
    let b = parseInt(document.getElementById('valorB').value);
    let c = parseInt(document.getElementById('valorC').value);
    let formula = a *  Math.pow(x,2) + b * x + c;
    formula = Math.sqrt(formula);
    
    
    document.getElementById('resultado').innerHTML=formula;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}