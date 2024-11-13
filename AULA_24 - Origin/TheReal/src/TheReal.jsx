import Titulo from "./Titulo.jsx"
import "./TheReal.css"
import { useState } from "react";

function TheReal() {
    const [contador, setContador] = useState(1);
    const [nome, setNome] = useState("Thiago");
    const [email, setEmail] = useState("Thiago@gmail.com");

    return (
        <>
            <Titulo />
            <h2>{contador}</h2>
            <button onClick={() => (
                setContador(contador + 1)
            )}>+</button>
            <button onClick={() => {
                setContador(contador - 1)
            }}>-</button>

            <h1>Cadastro</h1>
            {nome} - {email}
            <div>
                <input type="text"
                    placeholder="Nome"
                    onChange={(e) => (
                        setNome(e.target.value)
                    )} />

                <input type="email"
                    placeholder="E-mail"
                    onChange={(e) => (
                        setEmail(e.target.value)
                    )} />
            </div>

        </>

    )
}


export default TheReal