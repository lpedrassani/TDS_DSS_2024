const turma = [];
//CRUD
module.exports = ({
    cadastrar: (req, res) => { 
        const {id, serie, letra} = req.body;

        if (!id) {
            return resp.status(400).send("É obrigatório enviar o campo ID");
        }
        else if (!serie) {
            return res.status(400).send("É obrigatório enviar o campo Serie");
        }
        else if (!letra) {
            return res.status(400).send("É obrigatório enviar o campo Letra");
        }
    
        const existe_id = turma.filter((item) => item.id == id);
    
        if (existe_id.length) {
            return res.status(404).send(`O ID ${id} já está em uso`);
        }
        else {
            turma.push(req.body);
        }
    
        return res.status(200).send("Turma cadastrada com sucesso!");
    },
    consultar: (req, res) => {
        return res.send(turma);
     },
    atualizar: (req, res) => { 
        const { id, serie, letra } = req.body;

        turma.filter(item => {
            if (item.id == id) {
                item.serie = serie;
                item.letra = letra;
                return res.send("Turma atualizada com sucesso!");
            }
        })
    },
    deletar: (req, res) => {
        const { id } = req.params;

        const index = turma.findIndex(item => item.id == id);

        if (index === -1) {
            return res.status(400).send("O ID da turma não existe")
        }

        turma.splice(index, 1);

        return res.send(turma);
     }
})