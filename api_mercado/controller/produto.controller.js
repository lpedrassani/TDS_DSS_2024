const conn = require("../mysql-connection");


module.exports = ({
    cadastro: async (req, res) => {
        try {
            const { nome, preco } = req.body;

            if (!nome) {
                return res.status(400).send("O campo nome está faltando");
            }
            else if (!preco) {
                return res.status(400).send("O campo preço está faltando!");
            }
            else if(typeof preco !== "number"){
                return res.status(400).send("O campo preço precisar estar no formato numérico");
            }

            const data = await conn.select().from("produto").where({ nome });

            if (data.length > 0) {
                return res.status(400).send("Produto já cadastrado");
            } else {
                await conn.raw(`insert into produto (nome, preco) values ("${nome}", ${preco})`);
                return res.send("Os dados foram inseridos com sucesso no banco de dados");
            }

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao cadastrar os produtos!" });
        };
    },
    consultar: async (req, res) => {

        try {
            const data = await conn.raw("select * from produto");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar os produtos!" });
        };
    },
    atualizar: async (req, res) =>{
        try{
            const {nome, preco, id, status} = req.body;

            if(!nome){
                return res.status(400).send({msg: "O campo nome está faltando!"});
            }else if(!preco){
                return res.status(400).send({msg: "O campo preço está faltando!"});
            }else if(!id){
                return res.status(400).send({msg: "O campo ID está faltando!"});
            }else if(!status){
                return res.status(400).send({msg: "O campo STATUS está faltando!"});
            }

            const data = await conn.raw(`update produto set nome = '${nome}',
                 preco = '${preco}',
                 status = ${status} where id = ${id}`);

                 return res.send({nome,preco,status,id});


        }catch(error){
            console.log(error);
            return res.status(500).send({msg: "Erro ao realizar atualização do produto"});
        };
    },
    deletar: async (req, res) =>{
        try{
            const {id} = req.body;

            if(!id){
                return res.status(400).send("O campo ID do produto está faltando");
            }

            await conn.raw(`delete from produto where id = ${id}`);

            return res.status(200).send({msg: "O produto foi deletado com sucesso"});
        }catch(error){
            console.log(error);
            return res.status(500).send({msg: "Erro ao deletar o produto"});
        };
    },
    buscaPorId: async (req,res) =>{
        try{
            const {id} = req.params;

            const data = await conn.raw(`select * from produto where id = ${id}`);
            return res.status(200).send(data[0]);
        }catch(error){
            console.log(error);
            return res.status(500).send({msg: "Erro ao consultar o ID"});
        };
    }
});