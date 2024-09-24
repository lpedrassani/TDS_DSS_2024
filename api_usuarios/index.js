const express = require("express");
const bodyParser = require("body-parser");
// baseUrl = http://localhost:8080/
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const clientes = [];

app.post("/cadastro", (request,response)=>{
        
    const {id, nome, email, senha} = request.body;

    if(!id){
        return response.status(400).send("É obrigatório enviar o campo id");
    }
    else if(!nome){
        return response.status(400).send("É obrigatório enviar o campo nome");
    }
    else if(!email){
        return response.status(400).send("É obrigatório enviar o campo email");
    }
    else if(!senha){
        return response.status(400).send("É obrigatório enviar o campo senha");
    }

    // for(let i=0;i<clientes.length;i++)
    // {
    //     if(clientes[i].id == id){
    //         return response.status(404).send(`O código ${id} já está em uso`);
    //     }
    // }

    // clientes.filter((item)=>{
    //     if(item.id == id){
    //         return response.status(404).send(`O código ${id} já está em uso`);
    //     }
    // })

    const existe_id = clientes.filter((item) => item.id == id);

    if(existe_id.length){
        return response.status(404).send(`O código ${id} já está em uso`);
    }
    else{
        clientes.push(request.body);
    }
    
    return response.status(200).send("Usuario cadastrado com sucesso!");
        
});

app.get("/consulta", (request, response) =>{
    response.status(200).send(clientes);
});

app.get("/cliente/:id([0-9]+)", (request,response) =>{

    const {id} = request.params;
    const cliente = clientes.filter((item) => item.id == id)

    return response.send(cliente);
});

app.delete("/cliente/:id([0-9]+)", (request,response)=>{

    const {id} = request.params;

    const cliente = clientes.filter((item) => item.id = id)

    clientes.splice(cliente,1);

    return response.status(200).send("Cliente");
});

app.listen(8080, (err) => {
    console.log("O servidor esta rodando na porta 8080!");
});