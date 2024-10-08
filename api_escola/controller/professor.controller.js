const professor = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {
        const { cdi, nome, email } = req.body;

    if (!cdi) {
        return resp.status(400).send("É obrigatório enviar o campo CDI");
    }
    else if (!nome) {
        return res.status(400).send("É obrigatório enviar o campo nome");
    }
    else if (!email) {
        return res.status(400).send("É obrigatório enviar o campo email");
    }

    const existe_cdi = professor.filter((item) => item.cdi == cdi);

    if (existe_cdi.length) {
        return res.status(404).send(`A Carteira de Identificação ${cdi} já está em uso`);
    }
    else {
        professor.push(req.body);
    }

    return res.status(200).send("Professor cadastrado com sucesso!");
     },
    consultar: (req, res) => { 
        return res.send(professor);
    },
    atualizar: (req, res) => {
        const { nome, email, cdi } = req.body;

        professor.filter(item => {
            if (item.cdi == cdi) {
                item.nome = nome;
                item.email = email;
                return res.send("Professor atualizado com sucesso!");
            }
        })

        return res.status(400).send("Professor não encontrado!");
     },
    deletar: (req, res) => {
        const { cdi } = req.params;

        const index = professor.findIndex(item => item.cdi == cdi);

        if (index === -1) {
            return res.status(400).send("CDI do professor não existe")
        }

        professor.splice(index, 1);

        return res.send(professor);
     },
     buscaPorCDI: (req, res) => {

        const { cdi } = req.params;

        const aluno = professor.filter(item => item.cdi == cdi);

        if (!professor.length) {
            res.status(400).send("Aluno não encontrado!");
        }

        res.send(professor);

    }
})