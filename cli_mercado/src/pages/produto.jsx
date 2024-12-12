import { useEffect, useState } from "react"
import Api from "../Api"

function Produto() {

    const [produto, setProduto] = useState();

    const [id, setId] = useState();
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [status, setStatus] = useState(true);

    const [msgAviso, setMsgAviso] = useState("");
    const [msgSucesso, setMsgSucesso] = useState("");

    useEffect(() => {
        carregarDados()
    }, []);

    function carregarDados() {
        Api.get("produto").then((response) => {
            setProduto(response.data);
        });
    }

    function salvar() {

        if (id) {
            Api.put("produto", { id, nome, preco, status }).then((response) => {
                if (response.status == 200) {
                    carregarDados();
                    //Limpo as variaveis
                    setId();
                    setNome("");
                    setPreco("");
                    setStatus(true)

                    dispararMsgSucesso(response.data.msg);
                }
            });
        } else {
            Api.post('produto', { nome, telefone }).then((response) => {

                if (response.status == 200) {
                    carregarDados();
                    setNome("");
                    setPreco("");

                    dispararMsgSucesso(response.data.msg);

                } else if (response.status == 309) {
                    dispararMsgAviso(response.data.msg);
                }
            });
        }

    }

    function deletar(id) {
        Api.delete(`produto/${id}`).then((response) => {
            if (response.status == 200) {
                carregarDados();
                dispararMsgSucesso(response.data.msg);
            }
        });
    }

    function editar(item) {
        setId(item.id)
        setNome(item.nome);
        setPreco(item.telefone);
        setStatus(item.status);
    }

    function dispararMsgSucesso(msg) {
        setMsgSucesso(msg);
        setTimeout(() => {
            setMsgSucesso("")
        }, "5000")
    }

    function dispararMsgAviso(msg) {
        setMsgAviso(msg);
        setTimeout(() => {
            setMsgAviso("")
        }, "5000");
    }

    return (
        <div className="container">

            {msgAviso == ""
                ? ""
                : <div className="alert alert-warning" role="alert">
                    {msgAviso}
                </div>
            }

            {msgSucesso == ""
                ? ""
                : <div className="alert alert-success" role="alert">
                    {msgSucesso}
                </div>
            }

            <h1 className="text-uppercase display-6">Produto</h1>
            {id}- {nome} - {preco} - {status}
            <form action="#">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome"
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}
                        value={nome}
                    />
                </div>
                <div className="form-group">
                    <label>Preço</label>
                    <input type="number" className="form-control" placeholder="Preço"
                        onChange={(e) => {
                            setPreco(e.target.value)
                        }}
                        value={preco}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={() => {
                            salvar()
                        }}
                    >Salvar</button>
                </div>
            </form >

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">NOME</th>
                        <th scope="col">PREÇO</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">AÇÃO</th>
                    </tr>
                </thead>
                <tbody>

                    {produto?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.nome}</td>
                            <td>{item.preco}</td>
                            <td>{item.status}</td>
                            <td>
                                <button type="button" className="btn btn-danger"
                                    onClick={() => {
                                        deletar(item.id)
                                    }}
                                >
                                    Excluir
                                </button>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => {
                                        editar(item);
                                    }}
                                >
                                    Editar
                                </button>
                            </td>
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
        </div >
    )
}

export default Produto