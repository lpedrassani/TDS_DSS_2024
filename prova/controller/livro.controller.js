const conn = require("../db-conn");

// CRUD
module.exports = {
    cadastro: async (req, res) => {
        const { nome, codigo, genero } = req.body;

        if (!nome) {
            return res.status(309).send({ msg: "O campo nome é obrigatorio!" });
        }

        if (!codigo) {
            return res.status(309).send({ msg: "O campo codigo é obrigatorio!" });
        }

        if (!genero) {
            return res.status(309).send({ msg: "O campo genero é obrigatorio!" });
        }


        try {
            const livro = await conn("livro").insert({ nome, codigo, genero });

            return res.status(200).send({
                msg : "Livro cadastrado com sucesso!"
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o livro!" });
        }


    },
    consultar: async (req, res) => {
        try {
            const data = await conn.select().from("livro");
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar o livro!" });
        }
    },
    atualizar: async (req, res) => {
        const { nome, codigo, genero } = req.body;
        const { id } = req.params;

        try {
            const produto = await conn.select().from("livro").where({ id });
            
            if (produto.length <= 0) {
                return res.status(404).send({ msg: `O código ${id} não existe!` })
            }

            await conn("livro").update({
                nome,
                codigo,
                genero
            }).where({ id });

            

            return res.status(200).send({ msg : "Livro atualizado com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o Livro" });
        }

    },
    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("livro").where({ id }).del();
            return res.status(200).send({ msg: "Livro excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o Livro!" });
        }
    }
}