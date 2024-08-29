const lista = [3, 5, 7, 9, 10, 4, 2, 1, 6, 11, 8]

// mostra a lista
console.log(lista)

// mostra o tipo da variável
console.log(typeof lista)

function OrdenaLista(parametro) {
    // Armazena o comprimento do array em uma variável n
    let n = array.length;
    // Implementação do algoritmo Insertion Sort
    for (let i = 1; i < n; i++) {
        let chave = array[i];
        let j = i - 1;

        // Move elementos que são maiores que a chave para uma posição à frente
        while (j >= 0 && array[j] > chave) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = chave;
    }
}
console.log();
