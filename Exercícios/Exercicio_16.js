//  Exercício de JS #16



//  Duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

//  Selecione o primeiro DT da DL de faq
const faq = document.querySelector('.faq');
const firstDT = faq.querySelector('dt');
console.log(firstDT);

//  Selecione o DD referente ao primeiro DT
const nextDT = firstDT.nextElementSibling;
console.log(nextDT);

//  Substitua o conteúdo HTML de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;