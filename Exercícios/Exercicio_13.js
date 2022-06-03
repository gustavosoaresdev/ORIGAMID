//  Exercício de JS #13



//  Adicione a classe ativo a todos os itens do menu
const itemsDoMenu = document.querySelectorAll('.menu a');
itemsDoMenu.forEach(item => item.classList.add('ativo'));

//  Remove a classe ativo de todos os itens do menu
//  e mantenha apenas no primeiro
itemsDoMenu.forEach(item => item.classList.remove('ativo'));
itemsDoMenu[0].classList.add('ativo');

//  Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach(item => {
    const possuiAlt = item.hasAttribute('alt');
    console.log(possuiAlt);
});

//  Modifique o href do link externo do menu
const hrefMod = document.querySelector('a[href^="http"]');
hrefMod.setAttribute('href', 'https://www.google.com/');