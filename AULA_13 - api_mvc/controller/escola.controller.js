var dataAluno = [
    {
        nome: "Thiago Martins",
        email: "thiago1@gmail.com",
        ra: "323242"
    }];

var dataProfessor = [
    {
        nome: "Geovane Terra", 
        email: "geovane@gmail.com",
        id: "234954"
    }];

const consultaidAluno = (request, response) => {
    response.send(dataAluno); // Retorna a lista de alunos
};

const consultaidProfessor = (request, response) => {
    response.send(dataProfessor); // Retorna a lista de alunos
};

const cadastraAluno = (request, response) => {
    let nomeProcurado = request.body.nome; // variável que recebe o nome do body
    const { nome, email, ra } = request.body; // desestruturação do body

    // Verifica se o nome contém caracteres inválidos usando expressões regulares
    if (/[^a-zA-Z\s]/.test(nomeProcurado)) {
        return response.status(400).send("O nome contém caracteres inválidos");
    }

    // Verifica se já existe um cadastro com o mesmo nome
    for (var i = 0; i < cadastraAluno.length; i++) {
        if (cadastraAluno[i].nome === nomeProcurado) {
            return response.send("Já existe o nome na lista");
        }
    }

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome) {
        return response.status(400).send("É obrigatório enviar o campo NOME");
    } else if (!email) {
        return response.status(400).send("É obrigatório enviar o campo EMAIL");
    }

    // Gera um novo ID aleatório
    const novoRA = Math.floor(100000 + Math.random() * 900000).toString();

    // Adiciona o novo cadastro com o ID gerado
    dataAluno.push({ ...request.body, id: novoRA });
    response.send(cadastraAluno); // Retorna a lista atualizada
};

const atualizaAluno = (request, response) => {
const { nome, email } = request.body;
}

const atualizaProfessor = (request, response) => {
const { nome, email } = request.body;
}

    // Encontra o índice do cadastro pelo ID
    const index = data.findIndex((algumacoisa) => algumacoisa.id === request.params.id);

    // Atualiza o cadastro com os novos dados
    dataClientes[index] = { ...dataClientes[index], nome, idade, email, telefone };
    response.send(novoCadastro1[index]); // Retorna o cadastro atualizado
};

const consultaNome = (request, response) => {
    const nomeconsulta = novoCadastro1.filter((algumacoisa) => algumacoisa.nome == request.params.nome);
    return response.send(nomeconsulta); // Retorna o cadastro correspondente
};

const deletar = (request, response) => {
    const nomeconsulta = novoCadastro1.filter((algumacoisa) => algumacoisa.nome == request.params.nome);
    // splice remove o item do array
    var removed = novoCadastro.splice(novoCadastro.indexOf(nomeconsulta[0]), 1);

    return response.send("Usuário deletado"); // Retorna mensagem de sucesso
};

module.exports = ({
    consulta,
    novoCadastro1,
    atualiza,
    consultaNome,
    deletar,
});