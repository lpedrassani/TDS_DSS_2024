import { useEffect, useState } from "react";
import Api from "../Api";

function Cliente() {

    const [cliente, setCliente] = useState();

    useEffect(() => {
        Api.get("cliente").then((response) => {
            setCliente(response.data)
            console.log(response.data);
        });
    }, []);



    return (
        <>
            <div className="container">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Status</th>
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

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cliente