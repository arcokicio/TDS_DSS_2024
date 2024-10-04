var dataAluno = [
    {
        nome: "Thiago Martins",
        email: "thiago1@gmail.com",
        ra: "323242"
    }
];

const consultaidAluno = (request, response) => {
    response.status(200).send(dataAluno); // Retorna a lista de alunos
};


const cadastraAluno = (request, response) => {
    const { nome, email } = request.body; // Desestruturação do body

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome) {
        return response.status(400).send("É obrigatório enviar o campo NOME");
    }
    if (!email) {
        return response.status(400).send("É obrigatório enviar o campo EMAIL");
    }

    // Verifica se o nome contém caracteres inválidos usando expressões regulares
    if (/[^a-zA-Z\s]/.test(nome)) {
        return response.status(400).send("O nome contém caracteres inválidos");
    }

    // Verifica se já existe um cadastro com o mesmo nome
    const alunoExistente = dataAluno.find(aluno => aluno.nome === nome);
    if (alunoExistente) {
        return response.status(400).send("Já existe o nome na lista");
    }

    // Gera um novo RA aleatório
    const novoRA = Math.floor(100000 + Math.random() * 900000).toString();

    // Adiciona o novo cadastro com o RA gerado
    dataAluno.push({ nome, email, ra: novoRA });
    response.status(201).send(dataAluno); // Retorna a lista atualizada com status 201
};

const atualizaAluno = (request, response) => {
    const { nome, email } = request.body;

    // Encontra o índice do cadastro pelo RA
    const index = dataAluno.findIndex(aluno => aluno.ra === request.params.ra);

    if (index === -1) {
        return response.status(404).send("Aluno não encontrado");
    }

    // Atualiza o cadastro com os novos dados
    dataAluno[index] = { ...dataAluno[index], nome, email };
    response.status(200).send(dataAluno[index]); // Retorna o cadastro atualizado
};

const consultaNome = (request, response) => {
    const nomeConsulta = dataAluno.filter(aluno => aluno.nome === request.params.nome);
    if (nomeConsulta.length === 0) {
        return response.status(404).send("Aluno não encontrado");
    }
    return response.status(200).send(nomeConsulta); // Retorna o cadastro correspondente
};

const deletar = (request, response) => {
    const index = dataAluno.findIndex(aluno => aluno.id === request.params.id);
    if (index === -1) {
        return response.status(404).send("Usuário não encontrado");
    }

    dataAluno.splice(index, 1); // Remove o item do array
    return response.status(200).send("Usuário deletado"); // Retorna mensagem de sucesso
};

module.exports = {
    consultaidAluno,
    consultaidProfessor,
    cadastraAluno,
    atualizaAluno,
    consultaNome,
    deletar,
};

