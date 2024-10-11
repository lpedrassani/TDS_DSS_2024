const routes = require("express").Router();
const clienteController = require("../controller/cliente.controller");
// CRUD

routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.put("/:id([0-9]+)", clienteController.atualizar);
routes.delete("/", clienteController.deletar);

module.exports = routes;