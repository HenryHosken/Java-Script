function verde(){
    document.querySelector('#exemplo').classList.remove('amarelo');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('roxo');
    document.querySelector('#exemplo').classList.add('verde');
}

function amarelo(){
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('roxo');
    document.querySelector('#exemplo').classList.add('amarelo');
}

function roxo(){
    document.querySelector('#exemplo').classList.remove('amarelo');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('roxo');
}

function vermelho(){
    document.querySelector('#exemplo').classList.remove('amarelo');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('roxo');
    document.querySelector('#exemplo').classList.add('vermelho');
}

var nome = "Henry Hosken";
var idade = 18;
var salvo = true; 
var cidade;
var tipo = typeof idade;

console.log(tipo);

//comentario simples de uma linha;
/*Comentario avançando podendo conter mais de uma linha de escrita */

function alterar() {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

function somar (x, y, z) {
    let total = x + y / z;
    return total;
}
var resultado = somar(10, 15, 5);

console.log(resultado);

function trocarimagem(filename, carname) {
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename);
    document.querySelector('.imagem').setAttribute('data-car', carname);
}

function PegarCarro(){
    let car = document.querySelector('.imagem').getAttribute('data-car');
    alert ("O carro"+ " " +  car  + " "+ "foi selecionado");
}

