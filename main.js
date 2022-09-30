function area(){
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    area = lado1*lado2;
    document.getElementById('resultado').innerHTML=area;
}  