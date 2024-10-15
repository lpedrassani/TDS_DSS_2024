const connection = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => { 
        const { nome, telefone } = req.body;
    if (!nome) {
        return res.status(400).send("Deve haver o campo nome");
    } else if (!telefone) {
        return res.status(400).send("Deve haver o campo telefone");
    }

    connection.raw(`SELECT * FROM CLIENTE WHERE telefone = ${telefone}`)
        .then((data) => {
            if (data[0].length > 0) {
                return res.status(400).send("Cliente já cadastrado");
            } else {
                 connection.raw(`INSERT INTO CLIENTE(nome, telefone) VALUES ("${nome}", "${telefone}");`);
            }
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao cadastrar o cliente");
        });
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