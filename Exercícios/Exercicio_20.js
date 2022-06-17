//  Exercício de JS #20



//  Utilizando o forEach no array abaixo,
//  some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    }
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach(item => {
    const valorLimpo = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += valorLimpo;
    }   else {
            recebimentoTotal += valorLimpo;
        }
});

console.log('Taxa total:', taxaTotal);
console.log('Recebimento total:', recebimentoTotal);

//  Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

//  Substitua todos os span's por a's
let html = `
    <ul>
        <li><span>Sobre</span></li>
        <li><span>Produtos</span></li>
        <li><span>Contato</span></li>
    </ul>
`;

const subs = html.replace(/[span]+/g, 'a');
//  OU
html = html.split('span').join('a');
console.log(html);

//  Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log('Último caracter da frase:', frase[frase.length - 1]);

//  Retorne o total de taxas
const transacoes2 = [
    'Taxa do Banco',
    '   TAXA DO PÃO',
    '  taxa do mercado', 
    'depósito Bancário',
    'TARIFA especial'
];