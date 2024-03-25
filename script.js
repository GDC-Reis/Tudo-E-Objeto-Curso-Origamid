let nome = 'Gustavo';

let nomeMinusculo = nome.toLowerCase();

let nomeMaisculo = nome.toUpperCase();

// Document -> Objeto
// querySelector -> Método do Objeto
let btn = document.querySelector('.btn');

console.log(btn.classList.add('azul')); // Adiciona a classe azul
console.log(btn.innerText); //Clique
btn.addEventListener('click', function (){
    console.log('Ola mundo');
})

// Exercicios 

// Nomeie 3 propriedades ou métodos de string
let teste1 = 'Gustavo'
console.log(teste1.toLowerCase());
console.log(teste1.toUpperCase());
console.log(teste1.substring(2));
console.log(teste1.length);
console.log(teste1.slice(1, 4));

// Nomeie 5 propriedades ou métodos de elemtos do DOM

let btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', function () {
    console.log('Clicou');
})

// Mostra o Id do Elemento
console.log(btn1.id);

// Altera o valor do elemento após o click
let btn2 = document.querySelector('.btn1');
btn2.addEventListener('click', function(){
    document.getElementById('btn1').innerHTML = 'Alterando o valor do botão';
});

// Busque na web um objeto (método) capaz de interagir com o clipboard
// clipboard é a parte do seu computador que lida com o CTRL + C 

function clipboard() {
    // Obtém o campo de texto
    var copiarTexto = document.getElementById("myInput");
  
    //Selecione o campo de texto
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); // Para dispositivos mobile
  
    // Copie o texto dentro do campo de texto
    navigator.clipboard.writeText(copiarTexto.value);
  
    // Mostra o Alert com o texto copiado
    alert("Texto Copiado: " + copiarTexto.value);
  }