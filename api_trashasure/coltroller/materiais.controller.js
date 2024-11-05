const routes = require("express").Router();

module.exports = ({
    cadastro: async (req, res) =>{
        try {
            const {nome, classificacao, negociavel} = req.body;
        } catch (error) {
            console.log(error);
            return res.status(500).send("Não foi possível realizar o cadastro desse material");
        }
    },
    consulta: (req, res) =>{

    },
    atualizar: (req, res) =>{

    },
    deletar: (req, res) =>{

    },
    consultaPorId: (req, res) =>{

    }
});