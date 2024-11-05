const conn = require("../mysql-connection");


module.exports = ({
    cadastro : async (req,res) =>{
        try{
            const {id_cliente, id_produto, quantidade} = req.body;

            if(!id_produto){
                return res.status(400).send("O ID do produto esta faltando");
            }else if(!id_cliente){
                return res.status(400).send("O ID do Cliente esta faltando");
            }
            else if(!quantidade){
                return res.status(400).send("Está faltando a quantidade do produto escolhido");
            }

            const produto = await conn.select("preco").from("produto").where({id: id_produto});
            const total = quantidade * produto[0].preco;
            const data = await conn("pedido").insert({id_cliente, id_produto, quantidade, total});

            return res.status(200).send("O Pedido foi realizado com sucesso!");

            
        }catch(error){
            console.log(error);
            return res.status(500).send("Ocorreu um erro ao realizar o pedido");
        };
    },

    atualizar: async (req,res) =>{
        try {
            const {id} = req.params;

            const {id_produto, quantidade} = req.body;

            if(!id_produto){
                return res.status(400).send("O ID do produto esta faltando");
            }else if(!quantidade){
                return res.status(400).send("Está faltando a quantidade do produto escolhido");
            }

            const produto = await conn.select("preco").from("produto").where({id: id_produto});
            const total = quantidade * produto[0].preco;
            const data = await conn("pedido").update({id_produto, quantidade, total}).where({id});

            return res.status(200).send("O Pedido foi atualizado com sucesso!");
        } catch (error) {
            console.log(error);
            return res.status(500).send("Erro ao realizar atualização do pedido");
        }
    },
    deletar: async (req,res) =>{
        try {
            const {id} = req.params;

            const data = await conn("pedido").delete({id});
            
            return res.status(200).send("O pedido foi deletado com sucesso");   
        } catch (error) {
            console.log(error);
            return res.status(500).send("Erro ao realizar atualização do pedido");
        }
    },
    consulta: async (req,res) =>{
        try{
            const data = await conn.raw(`select
                id_cliente as ID_do_Cliente,
                cliente.nome as Nome,
                cliente.telefone as Telefone,
                id_produto as ID_do_Produto,
                produto.nome as Nome_do_Produto,
                produto.preco as Preco,
                pedido.quantidade as Quantidade,
                pedido.total as Total
                from pedido
                join cliente on pedido.id_cliente = cliente.id
                join produto on pedido.id_produto = produto.id;`);

                return res.send(data[0]);
        }catch(error){
            console.log(error);
            return res.status(500).send("Ocorreu um erro ao realizar a Consulta");
        }
    }
});