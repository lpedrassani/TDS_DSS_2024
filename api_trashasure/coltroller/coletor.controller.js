const conn = require("../mysql-connection");

module.exports = ({
    cadastro: async (req, res) =>{
        try {
            const {nome, telefone, email, cpf, endereco, numero, status} = req.body;

            if(!nome){
                return res.status(400).send("O campo nome esta faltando");
            }
            else if(!telefone){
                return res.status(400).send("O campo telefone esta faltando");
            }
            else if(!email){
                return res.status(400).send("O campo email esta faltando");
            }
            else if(!cpf){
                return res.status(400).send("O campo CPF esta faltando");
            }
            else if(!endereco){
                return res.status(400).send("O campo endereço esta faltando");
            }
            else if(!numero){
                return res.status(400).send("O campo numero esta faltando");
            }else if(!status){
                return res.status(400).send("O campo status esta faltando");
            }

            const data = await conn.select().from("coletor").where({ nome });

            if (data.length > 0) {
                return res.status(400).send("Esse coletor já está cadastrado no banco de dados");
            } else {
                await conn("coletor").insert({nome, telefone, email, cpf, endereco, numero, status});
                return res.send("O Coletor foi cadastrado com sucesso no banco de dados");
            }

        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível cadastrar esse coletor");
        }
    },
    consulta: async (req, res) =>{
        try {
            const data = await conn.raw("select * from coletor");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar a consulta");
        }
    },
    atualizar: async (req, res) =>{
        try {
            const {nome, telefone, email, cpf, endereco, numero, status} = req.body;

            if(!nome){
                return res.status(400).send("O campo nome esta faltando");
            }
            else if(!telefone){
                return res.status(400).send("O campo telefone esta faltando");
            }
            else if(!email){
                return res.status(400).send("O campo email esta faltando");
            }
            else if(!cpf){
                return res.status(400).send("O campo CPF esta faltando");
            }
            else if(!endereco){
                return res.status(400).send("O campo endereço esta faltando");
            }
            else if(!numero){
                return res.status(400).send("O campo numero esta faltando");
            }else if(!status){
                return res.status(400).send("O campo status esta faltando");
            }

                await conn("coletor").update({nome, telefone, email, cpf, endereco, numero, status});
                return res.send("O Cadastro do Coletor foi atualizado com sucesso!");

        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível cadastrar esse coletor");
        }
    },
    deletar: async (req, res) =>{
        try {
            const {id} = req.params;

            const data = await conn("coletor").delete({id});
            
            return res.status(200).send("O Coletor foi deletado do cadastro com sucesso");   
        } catch (error) {

            console.log(error);
            return res.status(500).send("Erro ao deletar o cadastro do coletor");
        }
    },
    consultaPorId: async (req, res) =>{
        try {
            const {id} = req.params;

            const data = await conn.select().from("coletor").where({id});
            return res.status(200).send(data[0]);
            
        } catch (error) {
            console.log(error);
            return res.status(500).send("Erro ao realizar a consulta do cadastro do coletor");
        }
    }
});