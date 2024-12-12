import { useEffect, useState } from "react"
import Api from "../Api"

function Pedido() {

    const [clientes, setClientes] = useState();
    const [produtos, setProdutos] = useState();

    useEffect(() => {
        carregarClientes();
        carregarProdutos();
    }, []);

    function carregarClientes() {
        Api.get("cliente").then((response) => {
            setClientes(response.data);
            // console.log(response.data)
        });
    }

    function carregarProdutos() {
        Api.get("produto").then((response) => {
            setProdutos(response.data);
            // console.log(response.data)
        });
    }

    return (
        <>
            <h1>Pedido</h1>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Cliente</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Escolher...</option>
                    {clientes?.map((item, index) => (
                        <option>{item.nome}</option>
                        ))}
                </select>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Produto</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Escolher...</option>
                    {produtos?.map((item, index) => (
                        <option>{item.nome}</option>
                        ))}
                </select>
            </div>

            

            
            
        </>
    )
}

export default Pedido