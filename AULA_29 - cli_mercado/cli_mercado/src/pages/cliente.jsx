import { useEffect, useState } from "react"
import Api from "../Api"

function Cliente() {
    
    const [cliente, setCliente] = useState();


    useEffect(() => {})
    Api.get("cliente").then((response)=>
    {
        setCliente(response.data);
        console.log(response)
    }
    )
    
    return (
        <>
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Nome</th>
      <th scope="col">Telefone</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
    </tr>
    <tr>
      
    </tr>
    <tr>
     
    </tr>
  </tbody>
</table>
        </>
    )
}

export default Cliente