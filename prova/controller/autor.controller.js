const conn = require("../db-conn");

// CRUD
module.exports = {
    cadastro: async (req, res) => {
        const { nome, exemplares } = req.body;

        if (!nome) {
            return res.status(309).send({ msg: "O campo nome é obrigatorio!" });
        }

        if (!exemplares) {
            return res.status(309).send({ msg: "O campo de exemplares é obrigatorio!" });
        }


        try {
            const livro = await conn("autor").insert({ nome, exemplares });

            return res.status(200).send({
                msg : "autor cadastrado com sucesso!"
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o autor!" });
        }


    },
    consultar: async (req, res) => {
        try {
            const data = await conn.select().from("autor");
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar o autor!" });
        }
    },
    atualizar: async (req, res) => {
        const { nome, exemplares } = req.body;
        const { id } = req.params;

        try {
            const produto = await conn.select().from("autor").where({ id });
            
            if (produto.length <= 0) {
                return res.status(404).send({ msg: `O código ${id} não existe!` })
            }

            await conn("autor").update({
                nome,
                exemplares
            }).where({ id });

            

            return res.status(200).send({ msg : "Autor atualizado com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o autor" });
        }

    },
    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("autor").where({ id }).del();
            return res.status(200).send({ msg: "Autor excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o Autor!" });
        }
    }
}