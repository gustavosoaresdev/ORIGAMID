//  Exercício de JS #15



//  Quando o usuário clicar nos links internos do site,
//  adicione a clase ativo ao item clicado e remova dos
//  demais itens caso eles possuam a mesma. Previna
//  o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    
    linksInternos.forEach(link => {
        link.classList.remove('ativo');
    });

    this.classList.add('ativo');
    //  OU
    // event.currentTarget.classList.add('ativo');

};

linksInternos.forEach(item => {
    item.addEventListener('click', handleLink);
});

//  Selecione todos os elementos do site começando a partir do body,
//  ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleElement(event) {
    console.log(event.currentTarget);
};

allElements.forEach(element => {
    element.addEventListener('click', handleElement);
    element.addEventListener('click', handleRemoveElement);
});

//  Utilizando o código anterior, ao invés de mostrar no console,
//  remova o elemento que está sendo clicado, o método remove() remove um elemento

//  Se o usuário clicar na tecla (t), aumente todo o texto do site