/* Importa o componente Titulo de outro arquivo. Isso permite reutilizar o componente Titulo em várias partes do projeto. */
import Titulo from "../Titulo.jsx";

/* Importa o arquivo de estilo CSS específico para este componente, permitindo customizar a aparência do TheReal. */
import "../TheReal.css";

/* Importa a função useState do React, que permite adicionar estado no componente funcional. */
import { useEffect, useState } from "react";

/* importa axios */
import axios from "axios";


/*  */
/* Configura objeto */
const therealApi = axios.create({
    baseURL: "http://localhost:8080/"
})

/* Define o componente funcional TheReal */
function Alunos() {

    /* Declara três variáveis de estado utilizando o hook useState:
       1. contador: começa com o valor 1, controla o valor de um contador.
       2. nome: começa com o valor "Thiago", armazena o nome de um usuário.
       3. email: começa com o valor "Thiago@gmail.com", armazena o e-mail de um usuário.
       
       setContador injeta
       useState atualiza variavel contador
       
       */
    const [contador, setContador] = useState(1);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [alunos, setAlunos] = useState([]);


    /* 
    useEffect - obrigatoriamente o arquivo vai executar primeira essa função
    useEffect - Obriga a passar por esta função antes de avançar */
    /* [] segunda funcao nesse caso vazia do useEffect */
    useEffect(() => {
        therealApi.get("aluno").then((res) => {
            console.log(response.data)
            setNome(responde.data[0].nome)
        }).catch((erro) => {
            setAlunos([])
        })
    }, [])

    function salvarAluno() {
        therealApi.post("aluno", { nome, email }).then((response) => {
            console.log(response.data)
        });
    }



    /* O JSX abaixo define o layout da interface que será exibida na tela */
    return (
        /* Fragmento vazio (<>...</>) é usado para agrupar múltiplos elementos sem adicionar nós extras ao DOM */
        <>


            {/* Chama o componente Titulo. Ele pode exibir algo como o título principal da página */}
            <Titulo />

            {/* Exibe o valor atual de contador dentro de uma tag <h2> */}
            <h2>{contador}</h2>

            {/* Botão de incremento do contador */}
            <button onClick={() => (
                setContador(contador + 1)  // Incrementa o valor do contador em 1
            )}>+</button>

            {/* Botão de decremento do contador */}
            <button onClick={() => {
                setContador(contador - 1)  // Decrementa o valor do contador em 1
            }}>-</button>

            {/* Título "Cadastro" exibido dentro de uma tag <h1> */}
            <h1>Cadastro</h1>


            {/* .map percorre e retorna lista*/}
            {/*  validacao de entrada ? usa a variavel mesmo se o tipo nao for definida */}
            {/* Lastro de repeticao para retornar lista automaticamente*/}
            <ol>
                {alunos?.map((item) => (
                    <li key={index}>{item.nome}</li>
                ))}
            </ol>

            {/* Exibe o nome e o e-mail do usuário na tela */}
            {nome} - {email}


            {/* Container para os campos de entrada (input) */}
            <div>
                {/* Campo de entrada para o nome. Sempre que o valor do campo mudar, o nome será atualizado */}
                <input type="text"
                    placeholder="Nome"  // Texto de sugestão que aparece quando o campo está vazio
                    onChange={(e) => (
                        setNome(e.target.value)  // Atualiza o estado 'nome' com o valor digitado
                    )} />

                {/* Campo de entrada para o e-mail. Sempre que o valor do campo mudar, o e-mail será atualizado */}
                <input type="email"
                    placeholder="E-mail"  // Texto de sugestão para o e-mail
                    onChange={(e) => (
                        setEmail(e.target.value)  // Atualiza o estado 'email' com o valor digitado
                    )} />

                <button onClick={() => {
                    salvarAluno()
                }}>
                    Salvar
                </button>
            </div>

        </>
    )

}

export default Alunos