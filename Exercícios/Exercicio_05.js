//  Exercício de JS #5



//  Crie um objeto com o seus dados pessoais
//  Deve possuir pelo menos duas propriedades, nome e sobrenome
var meusDados = {
    nome: 'Gustavo',
    sobrenome: 'Soares Thomann',
    age: 19,
    cpf: '999.999.999-99',
};

//  Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function() {
    console.log(`${this.nome} ${this.sobrenome}`);
}

meusDados.nomeCompleto();

//  Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//  Crie um objeto de um cachorro que represente um labrador,
//  preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,

    latir: function(pessoa) {
        if(pessoa === 'homem' || pessoa === 'Homem'){
            return 'Latir';
        }   else{
                return 'Nada';
            }
    },
}

console.log(cachorro.latir('Homem'));