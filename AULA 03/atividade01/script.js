// lógicos
// >= maior ou igual
// != não igual
// ! não lógico
// && e lógico
// || ou lógico

function DoisNumeros(num1, num2) {
    // Verifica qual número é maior
    if (num1 > num2) {
        console.log("O primeiro número digitado é maior.");
    } else if (num2 > num1) {
        console.log("O segundo número digitado é maior.");
    } else if (num1 == num2) {
        console.log("Os dois números são iguais.");
    }
}
DoisNumeros(6, 5); 

// : else
//  ? if
// função resolvida usando 
// (a == b) ?
// console.log("os parametros são iguais");
// (a > b) ?
// console.log("o paramtro "a" é maior que "b"):
// console.log (" o parametro "b" é maior que "a")