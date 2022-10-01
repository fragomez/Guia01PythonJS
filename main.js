function calcular(){
    const porc55 = 0.55;
    const porc30 = 0.30;
    const porc15 = 0.15;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let exmfin = parseFloat(document.getElementById('exmfin').value);
    let trbfin = parseFloat(document.getElementById('trbfin').value);
    let prom = ((nota1+nota2+nota3)/3) * porc55;
    let promExamFin = exmfin * porc30;
    let promTrbFin = trbfin * porc15;
    let notaFinal = prom + promExamFin + promTrbFin; 
    
    document.getElementById('resultado').innerHTML=notaFinal;
} 

function limpiar(){
    document.getElementById('miCalculadora').reset();
    document.getElementById('resultado').innerHTML="";
}