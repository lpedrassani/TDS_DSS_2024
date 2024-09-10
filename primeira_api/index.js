const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    try {
        throw new Error("Fodeu!");
        response.status(200).send("O seu servidor esta funcionando");
    }
    catch(error){
        response.status(500).send("Erro inesperado!", error);
    }
});


app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080!");
});