const express = require("express");
const pessoaController = require("../controllers/pessoa.controller");

const routes = express.Router();

//CRUD

routes.post("/", pessoaController.inserir);
routes.get("/", pessoaController.consultar);
routes.put("/:id([0-9]+)", pessoaController.atualizar);
routes.delete("/:id([0-9]+)", pessoaController.deletar);

module.exports = routes;
