//  Exercício de JS #3



//  Verifique se a sua idade é maior do que a de algum parente
//  Dependendo do resultado coloque no console 'É maior', 'É igual'
var minhaIdade = 19;
var idadeDoMeuIrmao = 30;

if (minhaIdade > idadeDoMeuIrmao) {
    console.log("É maior");
} else if (minhaIdade === idadeDoMeuIrmao) {
    console.log("É igual");
} else {
    console.log("É menor");
}

//  Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
if (expressao) {
  console.log("trueeeeeee");
}

//  O resultado é true

//  Verifique se as seguintes variáveis são truthy ou falsy
var nome = "gustavo";               //  true
var idade = 19;                     //  true
var possuiDoutorado = false;        //  false
var empregoFuturo;                  //  false
var dinheiroNaConta = 0;            //  false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//  Compare o total de habitantes do Brasil com a China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log("Hà muitos mais habitantes no Brasil do que na China");
} else {
    console.log("Hà muitos mais habitantes na China do que no Brasil");
}

//  Oque irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

//  Oque irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}