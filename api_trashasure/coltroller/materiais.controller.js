const conn = require("../mysql-connection");

module.exports = ({
    cadastro: async (req, res) =>{
        try {
            const {nome, classificacao, negociavel} = req.body;

            if(!nome){
                return res.status(400).send("O campo nome está faltando");
            }else if(!classificacao){
                return res.status(400).send("O campo classificacao está faltando");
            }else if(!negociavel){
                return res.status(400).send("O campo negociavel está faltando");
            }

            const data = await conn.select().from("materiais").where({ nome });

            if (data.length > 0) {
                return res.status(400).send("Esse tipo de material já está cadastrado no banco de dados");
            } else {
                await conn.raw(`insert into materiais (nome, classificacao, negociavel) values ("${nome}", "${classificacao}", ${negociavel})`);
                return res.send("O material foi cadastrado com sucesso no banco de dados");
            }


        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar o cadastro desse material");
        }
    },
    consulta: async (req, res) =>{
        try {
            const data = await conn.raw("select * from materiais");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar a consulta desse material");
        }
    },
    atualizar: async (req, res) =>{
        try {
            const {id} = req.params;

            const {nome, classificacao, negociavel} = req.body;
            
            if(!nome){
                return res.status(400).send("O campo nome está faltando");
            }else if(!classificacao){
                return res.status(400).send("O campo classificacao está faltando");
            }else if(!negociavel){
                return res.status(400).send("O campo negociavel está faltando");
            }

            const data = await conn("materiais").update({nome, classificacao, negociavel}).where({id});

            return res.status(200).send("O Material foi atualizado com sucesso!");

        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar a atualização desse material");
        }
    },
    deletar: async (req, res) =>{
        try {
            const {id} = req.params;

            const data = await conn("materiais").delete({id});
            
            return res.status(200).send("O material foi deletado com sucesso");   
        } catch (error) {

            console.log(error);
            return res.status(500).send("Erro ao deletar o material");
        }
    },
    consultaPorId: async (req, res) =>{
        try {
            const {id} = req.params;

            const data = await conn.select().from("materiais").where({id});
            return res.status(200).send(data[0]);
            
        } catch (error) {
            console.log(error);
            return res.status(500).send("Erro ao realizar a consulta deste material");
        }
    }
});