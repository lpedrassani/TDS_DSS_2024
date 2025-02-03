const express = require("express");
const livroController = require("../controller/livro.controller");

const routes = express.Router();

//CRUD

routes.post("/", livroController.cadastro);
routes.get("/", livroController.consultar);
routes.put("/:id([0-9]+)", livroController.atualizar);
routes.delete("/:id([0-9]+)", livroController.deletar);

module.exports = routes;
