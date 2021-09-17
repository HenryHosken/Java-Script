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