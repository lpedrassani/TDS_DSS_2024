const express = require("express");
const bodyParser = require("body-parser");
// baseUrl = http://localhost:8080/
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const clientes = [];

app.post("/cadastro", (request,response)=>{

    console.log(request.body);
    clientes.push(request.body);
    response.status(200).send("Usuario cadastrado com sucesso!");

});

app.get("/consulta", (request, response) =>{

    response.status(200).send(clientes);
});

app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080!");
});