import { BrowserRouter, Route, Routes } from "react-router-dom"
import Alunos from "./pages/alunos.jsx"
import Professores from "./pages/professores.jsx"
import Turmas  from "./pages/turmas.jsx"


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Alunos/>}></Route>
                    <Route path="/alunos" element={<Alunos />}></Route>
                    <Route path="/professores" element={<Professores />}></Route>
                    <Route path="/turmas" element={<Turmas />}></Route>                    
                </Routes>
            </BrowserRouter>
        </>
    )

}

/* Exporta o componente TheReal para ser utilizado em outras partes da aplicação */
export default App
