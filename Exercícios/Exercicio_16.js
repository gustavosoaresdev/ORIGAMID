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

//  Substitua o conteúdo HTML de .faq pelo de .animais