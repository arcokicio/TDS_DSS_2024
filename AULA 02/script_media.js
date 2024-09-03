
function somaNumeros(num1, num2, num3, num4, num5) {
    // função que Calcula a soma dos números
    const resultado = num1 + num2 + num3 + num4 + num5;
    // Mostra o resultado no console
    console.log("Resultado da soma:", resultado);
    return resultado
}

// lógica para imprimir a média 
const mediaNumeros = somaNumeros(5, 7, 5, 7, 4) / 5;
console.log(mediaNumeros)