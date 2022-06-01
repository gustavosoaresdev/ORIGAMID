//  Exercício de JS #11



//  Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);

//  Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll('img[src^="/img/imagem"]');
console.log(palavraImagem);

//  Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//  Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);
//  OU
const firsttH2 = document.querySelector('.animais-descricao');
const h2 = firsttH2.querySelector('h2');
console.log(h2);

//  Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);
//  OU
console.log(ultimoP[--ultimoP.length]);