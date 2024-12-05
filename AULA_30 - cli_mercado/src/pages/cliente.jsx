import { useEffect, useState } from "react";
import Api from "../Api"

function Cliente() {

    const [cliente, setCliente] = useState();
    const [nome, setNome] = useState();
    const [telefone, setTelefone] = useState();
    const [mensagemErro, setMensagemErro] = useState(""); // Para armazenar a mensagem de erro
    const [mensagemSucess, setMensagemSucess] = useState ("")



    useEffect(() => {
        carregarDados()
    }, []);

    function carregarDados() {
        Api.get("cliente").then((response) => {
            setCliente(response.data);
            // console.log(response.data)
        });
    }

    function salvar() {
        Api.post('cliente', { nome, telefone }).then((response) => {
            console.log(response.status)

            if (response.status === 200) {
                setMensagemSucess("Inserido com sucesso")
                setTimeout(() => {
                    setMensagemSucess(""); // Limpar a mensagem após 3 segundos
                  }, 3000);
                // Recarregar os dados após salvar
                carregarDados();
                setNome(""); // Limpar o campo de nome após salvar
                setTelefone(""); // Limpar o campo de telefone após salvar
              }
        

            if ( response.status == 500 ) {
                setMensagemErro("Você não preencheu o nome!");
          
                // Exibir a mensagem de erro por 3 segundos
                setTimeout(() => {
                  setMensagemErro(""); // Limpar a mensagem após 3 segundos
                }, 3000);
          
                return; // Não faz o POST se o nome estiver vazio
              }
          

        });
    }

    return (
        <div className="container">
          {/* Exibir a mensagem de erro se houver */}
          {mensagemErro && (
            <div className="alert alert-warning" role="alert">
              {mensagemErro}
            </div>
          )}
              

            <h1 className="text-uppercase display-6">Cliente</h1>
            {nome} - {telefone}
            <form action="#">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome"
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input type="number" className="form-control" placeholder="Telefone"
                        onChange={(e) => {
                            setTelefone(e.target.value)
                        }}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={() => {
                            salvar()
                        }}
                    >Salvar</button>
                </div>
            </form>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">NOME</th>
                        <th scope="col">TELEFONE</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody>

                    {cliente?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}

                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Cliente