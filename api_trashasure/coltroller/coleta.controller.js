const conn = require("../mysql-connection");

module.exports = ({
    cadastro: async (req, res) =>{
        try {
            const {nome, telefone, email, cnpj, endereco, numero, status} = req.body;

            if(!nome){
                return res.status(400).send("O campo nome esta faltando");
            }
            else if(!telefone){
                return res.status(400).send("O campo telefone esta faltando");
            }
            else if(!email){
                return res.status(400).send("O campo email esta faltando");
            }
            else if(!cnpj){
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

            const data = await conn.select().from("postoDeColeta").where({ nome });

            if (data.length > 0) {
                return res.status(400).send("Esse posto de coleta já está cadastrado no banco de dados");
            } else {
                await conn("postoDeColeta").insert({nome, telefone, email, cnpj, endereco, numero, status});
                return res.send("Posto de coleta cadastrado com sucesso no banco de dados");
            }

        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível cadastrar esse posto de coleta");
        }
    },
    consulta: async (req, res) =>{
        try {
            const data = await conn.raw("select * from postoDeColeta");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar a consulta");
        }
    },
    atualizar: async (req, res) =>{
        try {
            const {id} = req.params;

            const {nome, telefone, email, cnpj, endereco, numero, status} = req.body;

            if(!nome){
                return res.status(400).send("O campo nome esta faltando");
            }
            else if(!telefone){
                return res.status(400).send("O campo telefone esta faltando");
            }
            else if(!email){
                return res.status(400).send("O campo email esta faltando");
            }
            else if(!cnpj){
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

            const data = await conn("postoDeColeta").update({nome, telefone, email, cnpj, endereco, numero, status});
            return res.send("Atualização Realizada com sucesso!");

        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar a atualização");
        }
    },
    deletar: async (req, res) =>{
        try {
            const {id} = req.params;

            const data = await conn("postoDeColeta").delete({id});
            
            return res.status(200).send("O Posto de Coleta foi deletado com sucesso");   
        } catch (error) {

            console.log(error);
            return res.status(500).send("Erro ao deletar o Posto de Coleta");
        }
    },
    consultaPorId: async (req, res) =>{
        try {
            const {id} = req.params;

            const data = await conn.select().from("postoDeColeta").where({id});
            return res.status(200).send(data[0]);
            
        } catch (error) {
            console.log(error);
            return res.status(500).send("Erro ao realizar a consulta deste material");
        }
    }
});