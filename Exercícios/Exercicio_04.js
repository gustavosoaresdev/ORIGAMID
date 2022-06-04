//  Exercício de JS #4



//  Crie uma função para verificar se um valor é truthy
function verificarValor(valor) {
    return !!valor;
}

console.log(verificarValor('gg'));      //  true

//  Crie uma função matemática que retorne o perimetro de um quadrado
//  Lembrando: perimetro é a soma dos quatro lados do quadrado
function quadrado(square) {
    return square * 4;
}

console.log(quadrado(5));       //  20

//  Crie uma função que retorne o seu nome completo
//  Ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('gustavo', 'soares thomann'));

//  Crie uma função que verifica se um número é par
function isEven(value) {
    if(value % 2 === 0) {
        return 'PAR';
    }   else{
            return 'IMPAR';
        }
}

console.log(isEven(20));

//  Crie uma função que retorna o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}

console.log(tipoDeDado('Hello World!'));    //  string

//  addEventListener é uma função nativa do JavaScript
//  o primeiro parâmetro é o evento que ocorre e o segundo o Callback
//  utilize essa função para mostrar no console o seu nome completo
//  quando o evento "Click" ocorrer
addEventListener('click', function() {
    console.log('gustavo soares thomann');
});

//  Corrija o erro abaixo
var totalPaises = 193;
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

function precisoVisitar(visitar) {
    return `Ainda faltam ${totalPaises - visitar} paises para visitar`;
}