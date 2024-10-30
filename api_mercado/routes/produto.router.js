const routes = require("express").Router();
const produtoController = require("../controller/produto.controller");

//CRUD
routes.post("/", produtoController.cadastro);
routes.get("/", produtoController.consultar);
routes.put("/", produtoController.atualizar);
routes.delete("/", produtoController.deletar);
routes.get("/:id([0-9]+)", produtoController.buscaPorId);

module.exports = routes;