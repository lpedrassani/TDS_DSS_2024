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
    }
})