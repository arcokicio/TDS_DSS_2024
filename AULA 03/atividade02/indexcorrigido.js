var nome = "thiago";
var resultado = ""; // Variável para armazenar o resultado final

for (let i = 0; i < nome.length; i++) {
    resultado += nome[i]; // Adiciona o caractere atual ao resultado
    if (i < nome.length - 1) { // Adiciona o hífen apenas se não for o último caractere
        resultado += "-";
    }
}

console.log(resultado);
