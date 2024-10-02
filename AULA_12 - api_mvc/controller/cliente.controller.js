var dataClientes = [
    {
        nome: "Thiago Martins",
        idade: "21",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581",
        id: "323242"
    }];

const consulta = (request, response) => {
    response.send(dataClientes); // Retorna a lista de cadastros
};

const cadastro = (request, response) => {
    const { nome, idade, email, telefone } = request.body; // desestruturação do body

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome) {
        return response.status(400).send("É obrigatório enviar o campo NOME");
    } else if (!idade) {
        return response.status(400).send("É obrigatório enviar o campo IDADE");
    } else if (!email) {
        return response.status(400).send("É obrigatório enviar o campo EMAIL");
    } else if (!telefone) {
        return response.status(400).send("É obrigatório enviar o campo TELEFONE");
    }

    // Verifica se o nome contém caracteres inválidos usando expressões regulares
    if (/[^a-zA-Z\s]/.test(nome)) {
        return response.status(400).send("O nome contém caracteres inválidos");
    }

    /// Verifica se já existe um cadastro com o mesmo nome
    for (var i = 0; i < dataClientes.length; i++) {
        if (dataClientes[i].nome === nome) {
            return response.send("Já existe o nome na lista");
        }
    }

    // Gera um novo ID aleatório
    const novoId = Math.floor(100000 + Math.random() * 900000).toString();

    const novoUsuario = { ...request.body, id: novoId };

    // Adiciona o novo cadastro com o ID gerado
    dataClientes.push(novoUsuario);
    return response.send(novoUsuario); // Retorna a lista atualizada
};

const atualiza = (request, response) => {
    const { nome, idade, email, telefone } = request.body;

    // Encontra o índice do cadastro pelo ID
    const index = dataClientes.findIndex((algumacoisa) => algumacoisa.id === request.params.id);

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
    cadastro,
    atualiza,
    consultaNome,
    deletar,
});