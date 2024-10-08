
const alunos = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {

        const { ra, nome, email } = req.body;

    if (!ra) {
        return resp.status(400).send("É obrigatório enviar o campo RA");
    }
    else if (!nome) {
        return res.status(400).send("É obrigatório enviar o campo nome");
    }
    else if (!email) {
        return res.status(400).send("É obrigatório enviar o campo email");
    }

    const existe_ra = alunos.filter((item) => item.ra == ra);

    if (existe_ra.length) {
        return res.status(404).send(`O Registro Acadêmico ${ra} já está em uso`);
    }
    else {
        alunos.push(req.body);
    }

    return res.status(200).send("Aluno cadastrado com sucesso!");
    },

    consultar: (req, res) => {
        return res.send(alunos);
    },

    atualizar: (req, res) => {

        const { nome, email, ra } = req.body;

        alunos.filter(item => {
            if (item.ra == ra) {
                item.nome = nome;
                item.email = email;
                return res.send("Aluno atualizado com sucesso!");
            }
        })

        return res.status(400).send("Aluno não encontrado!");

    },
    deletar: (req, res) => {

        const { ra } = req.params;

        const index = alunos.findIndex(item => item.ra == ra);

        if (index === -1) {
            return res.status(400).send("Ra do aluno não existe")
        }

        alunos.splice(index, 1);

        return res.send(alunos);
    },
    buscaPorRa: (req, res) => {

        const { ra } = req.params;

        const aluno = alunos.filter(item => item.ra == ra);

        if (!aluno.length) {
            res.status(400).send("Aluno não encontrado!");
        }

        res.send(aluno);

    }
})