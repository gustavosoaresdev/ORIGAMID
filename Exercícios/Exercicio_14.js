//  Exercício de JS #14



//  Verifique a distância da primeira imagem
//  em relação ao topo da página
const firstImage = document.querySelector('img');
const imageTop = firstImage.offsetTop;
console.log(imageTop);

//  Retorne a soma da largura de todas as imagens
function sumImages() {
    const allImages = document.querySelectorAll('img');
    let sum = 0;

    allImages.forEach(item => {
        sum += item.offsetWidth;
    });

    console.log(sum);
}

window.onload = function() {
    sumImages();
}

//  Verifique se os links da página possuem
//  o mínimo recomendado para telas utilizadas
//  com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(item => {
    const px48 = item.getBoundingClientRect();

    if(px48.width >= 48 && px48.height >= 48) {
        console.log(item, 'Possui boa acessibilidade');
    }   else {
            console.log(item, 'Não possui boa acessibilidade');
        }
});

//  Se o browser for menor que 720px,
//  adicione a classe menu-mobile ao menu
const menuMobile = window.matchMedia('(max-width: 720px)').matches;

if(menuMobile){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
};