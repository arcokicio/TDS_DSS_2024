var nome = "thiago martins";
var resultado = ""; // Variável para armazenar o resultado final

// leght conta tamanho
function contarCaracteres(nome) {
    return nome.length;
}
console.log(contarCaracteres(nome));

// function insere hifen
var resultado = ""; // Variável para armazenar o resultado final
for (let i = 0; i < nome.length; i++) {
    resultado += nome[i]; // Adiciona o caractere atual ao resultado
}
console.log(resultado);

// function maiúsculas
function emMaiusculas(nome) {
    return nome.toUpperCase();
}
console.log("Nome maiusculo:", emMaiusculas(nome))

// function minusculas
function emMinusculas(nome) {
    return nome.toLowerCase();
}
console.log("Nome minusculo", emMinusculas(nome))

//function primeira maiuscula
function primeiraMaiuscula(nome) {
    if (nome.length === 0) return nome;
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}
console.log(primeiraMaiuscula(nome))

let n = nome.length
let i = nome[0];

//function maiuscula pós espaço
function maiusculaPosEspaco(nome) {
    // Verifica se a string 'nome' é nula ou vazia
    if (!nome || nome.length === 0) return nome;

    // Inicializa uma variável para armazenar o resultado final
    let resultado = '';
    
    // A variável 'proxMaiusc' indica se o próximo caractere deve ser convertido em maiúsculo
    // Começa como true para garantir que o primeiro caractere da string seja maiúsculo
    let proxMaiusc = true;

    // Itera sobre cada caractere da string 'nome'
    for (let i = 0; i < nome.length; i++) {
        // Obtém o caractere na posição 'i'
        let caractere = nome.charAt(i);

        // Se o caractere atual for um espaço
        if (caractere === ' ') {
            // Adiciona o espaço ao resultado
            resultado += caractere;
            // Define 'proxMaiusc' como true, indicando que o próximo caractere após o espaço deve ser maiúsculo
            proxMaiusc = true;
        } else {
            // Se 'proxMaiusc' é true, a letra deve ser maiúscula
            if (proxMaiusc) {
                // Adiciona o caractere maiúsculo ao resultado
                resultado += caractere.toUpperCase();
                // Define 'proxMaiusc' como false, pois o próximo caractere não deve ser maiúsculo
                proxMaiusc = false;
            } else {
                // Adiciona o caractere normal ao resultado
                resultado += caractere;
            }
        }
    }

    // Retorna a string com as letras maiúsculas capitalizadas após cada espaço
    return resultado;
}

console.log(maiusculaPosEspaco(nome));
