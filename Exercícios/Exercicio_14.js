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

//  Se o browser for menor que 720px,
//  adicione a classe menu-mobile ao menu