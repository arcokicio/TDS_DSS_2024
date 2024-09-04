// Define um array chamado lista com alguns números inteiros desordenados
var lista = [5, 3, 8, 4, 23, 6, 0];

// Função para ordenar a lista usando o algoritmo de ordenação por inserção
function OrdenaLista(lista) {
    // Armazena o comprimento do array em uma variável n
    let n = lista.length;

    // Insertion Sort (Ordenação por Inserção)
    // i - itera (causa) sobre cada elemento da lista, começando do índice 0 até n-1
    for (let i = 0; i < n; i++) {
        // Armazena o valor atual em uma variável chave
        let chave = lista[i];

        // Define j como o índice do elemento anterior ao atual
        let j = i - 1;

        // Move elementos que são maiores que a chave para uma posição à frente
        // Isso cria o espaço necessário para inserir a chave na posição correta
        while (j >= 0 && lista[j] > chave) {
            // Move o elemento para a posição à frente
            lista[j + 1] = lista[j];
            // Decrementa j para continuar verificando os elementos anteriores
            j--;
        }
        // Insere a chave na posição correta
        lista[j + 1] = chave;
    }
}

// Função para encontrar o maior número na lista (assumindo que a lista está ordenada)
function encontraMaior(lista) {
    // O maior número estará no último índice da lista ordenada
    return lista[lista.length - 1];
}

// Função para encontrar o menor número na lista (assumindo que a lista está ordenada)
function encontraMenor(lista) {
    // O menor número estará no primeiro índice da lista ordenada
    return lista[0];
}

// Chama a função de ordenação para ordenar a lista
OrdenaLista(lista);

// Testando as funções e exibindo os resultados no console
console.log("Lista ordenada:", lista); // Exibe a lista ordenada
console.log("O maior número é:", encontraMaior(lista)); // Saída esperada: O maior número é: 22
console.log("O menor número é:", encontraMenor(lista)); // Saída esperada: O menor número é: 2




