var dataProfessor = [
    {
        nome: "Geovane Terra", 
        email: "geovane@gmail.com",
        id: "234954"
    }
];

const consultaidProfessor = (request, response) => {
    response.status(200).send(dataProfessor); // Retorna a lista de professores
};
