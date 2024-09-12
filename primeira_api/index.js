const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (request, response) => {
        response.status(200).send("O seu servidor esta funcionando");
});

app.get("/novaRota", (request,response) => {
    response.send("Essa é a nova rota!");
});

app.get("/clientes", (request,response)=>{

    const clientes = [
        {
            nome: "Leonardo",
            idade: 19
        },
        {
            nome: "Espiriguidiberto",
            idade: 2467
        }
    ]



    response.send(clientes);
})

app.post("/cliente", (request, response) =>{

    const cliente = request.body;

    response.send(cliente);
});

app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080!");
});