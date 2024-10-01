const clientes = [];

module.exports = ({
    deletaID: (request, response) => {
        const { id } = request.params;

        const cliente = clientes.filter((item) => item.id = id)

        clientes.splice(cliente, 1);

        return response.status(200).send(`O cliente com id ${id} foi deletado`);
    },
    consultaID: (request, response) => {
        const { id } = request.params;
        const cliente = clientes.filter((item) => item.id == id)

        return response.send(cliente);
    },
    cadastro: (request,response)=>{
        const { id, nome, email, senha } = request.body;

    if (!id) {
        return response.status(400).send("É obrigatório enviar o campo id");
    }
    else if (!nome) {
        return response.status(400).send("É obrigatório enviar o campo nome");
    }
    else if (!email) {
        return response.status(400).send("É obrigatório enviar o campo email");
    }
    else if (!senha) {
        return response.status(400).send("É obrigatório enviar o campo senha");
    }

    // for(let i=0;i<clientes.length;i++)
    // {
    //     if(clientes[i].id == id){
    //         return response.status(404).send(`O código ${id} já está em uso`);
    //     }
    // }

    // clientes.filter((item)=>{
    //     if(item.id == id){
    //         return response.status(404).send(`O código ${id} já está em uso`);
    //     }
    // })

    const existe_id = clientes.filter((item) => item.id == id);

    if (existe_id.length) {
        return response.status(404).send(`O código ${id} já está em uso`);
    }
    else {
        clientes.push(request.body);
    }

    return response.status(200).send("Usuario cadastrado com sucesso!");
    },
    consulta : (request,response)=>{
        response.status(200).send(clientes);
    }
})