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

//  Crie uma função que retorna o tipo de dado do argumento passado nela (typeof)

//  addEventListener é uma função nativa do JavaScript
//  o primeiro parâmetro é o evento que ocorre e o segundo o Callback
//  utilize essa função para mostrar no console o seu nome completo
//  quando o evento "Click" ocorrer

//  Corrija o erro abaixo
function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

function precisoVisitar(visitar) {
    return `Ainda faltam ${totalPaises - visitar} paises para visitar`;
}