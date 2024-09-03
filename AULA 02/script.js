// construa uma função que receberá dois parametros somar e apresentar
// node .\nomedoarquivo.js - para executar o codigo
// dir - mostra todas as no diretorio
// cd - "tab"
// cd .. - retorna diretorio
// console.log ("Ola Mundo"); - printa informacao dentro das aspas
// mkdir nome_pasta - cria pasta
// code. - abre diretorio no vscode
// CamelCase -  palavras compostas ou frases, onde cada palavra é iniciada com maiúsculas e unidas sem espaços
// SnakeCase - paalavras separadas por underline
// function () parentes representa os parametros da função se a função passar de 5 paramtros recomenda usar classe
// "" - textos
// !!a -  negação de a
//

function somaDoisNumeros(num1, num2) {
    // função que Calcula a soma dos dois números
    const resultado = num1 + num2;
    // Mostra o resultado no console
    console.log("Resultado da soma:", resultado);
}

// Exemplo de uso da função
somaDoisNumeros(5, 7); // Saída esperada: Resultado da soma: 12

//////////////////////////////////////////////////////////////////////////////////////////
// CORREÇÃO DO PROFESSOR COM VALIDAÇÃO SE 'A' E 'B' SÃO NUMERICOS E VALIDAÇÃO SE ESTÃO VAZIOS

function somaDoisNumeros(a, b) {
    if (a == undefined || b == undefined) {
        return "O parametro 'a' ou 'b' não pode ser vazio"
    }
    else if (typeof a !== "Number") {
        return "O parametro 'a' não é um numero"
    } 
    else if (typeof b !== "Number") {
        return "O parametro 'b' não é um numero"
    }
    return a + b
}

const resultado = somaDoisNumeros(1, 2);
console.log('O resultado da soma é:' + resultado);


