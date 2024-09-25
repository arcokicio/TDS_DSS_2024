// Deleta um cadastro
app.delete("/delete/:id([0-9]+)", (request, response) => {
    const index = novoCadastro.findIndex((algumacoisa) => algumacoisa.nome === request.params.nome);

    if (index === -1) {
        return response.status(404).send("Cadastro não encontrado");
    }

    novoCadastro.splice(index, 1);
    return response.send("Usuário deletado com sucesso");
});
