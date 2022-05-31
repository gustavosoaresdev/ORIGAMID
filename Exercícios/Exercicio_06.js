//  Exercício de JS #6



//  Nomeie 3 propriedades ou métodos de string
var nome = 'Gustbo';
var verifyNome = nome.replace('tbo', 'tavo');   //  1

console.log(verifyNome);
console.log(verifyNome.toUpperCase());          //  2
console.log(verifyNome.length);                 //  3

//  Nomeie 5 propriedades ou métodos de elementos do DOM
var btnA = document.querySelector('.btnA');

btnA.innerText;                         //  Texto do elemento - Click                       //  1
btnA.classList.add('color-blue');       //  Adicionando uma classe para o elemento          //  2
btnA.classList.remove('color-blue');    //  Removendo a classe (color-blue) do elemento     //  3

document.body.appendChild(btnA);        //  Colocando o elemento dentro do body             //  4

//  Adicionando evento de click para o elemento e retornado Clicked no console              //  5
btnA.addEventListener('click', function() {
    console.log('Clicked!');
});

//  Busque na web um objeto (método) capaz de interagir com o clipboard,
//  clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//  Eu não só busquei, eu aprendi e fiz!
function copy() {
    var $textarea = document.querySelector('#textarea');
    $textarea.select();

    if($textarea) {
        document.execCommand('copy');
        alert('Texto copiado');
    }   else {
            alert('Error: texto não copiado');
        }
}

var $btn = document.querySelector('#btn').addEventListener('click', copy);