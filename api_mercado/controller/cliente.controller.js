const connection = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => { 
        const {nome, telefone} = req.body;

        if(!nome){
            return res.status(400).send("Deve haver o campo nome");
        }
        else if(!telefone){
            return res.status(400).send("Deve haver o campo telefone");
        }
    },
    consultar: (req, res) => {
        connection.raw("SELECT * FROM CLIENTE").then((data) => {
            res.send(data[0]);
        }).catch((erro) => {
            res.send("Erro ao consultar os clientes!");
        });
    },
    atualizar: (req, res) => { },
    deletar: (req, res) => { }
})