function $(id){
    return document.getElementById(id);
}

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function calcular(valor1, valor2){

    var valor1 = $('valor1').value;
    var valor2 = $('valor2').value;
    var soma;
    var resultado;

    if(valor1 ==null || valor1 =="")
    {
        alert('O campo "valor 1" é obrigatório');
        return false;
    }

    if(valor2 ==null || valor2 =="")
    {
        alert('O campo "valor 2" é obrigatório');
        return false;
    }

    soma = parseFloat(valor1) + parseFloat(valor2);
    resultado = soma - (soma * 0.20);
    
    $("result").innerHTML = 'Valor com desconto: R$' + resultado;
    
}
function home(){
    $("section"). load('home.html');
}
function sobre(){
    $("section"). load('sobre.html');
}
function cadastro(){
    $("section"). load('cadastro.html');
}
function cadastro(){
    $("section"). load('contato.html');
}

