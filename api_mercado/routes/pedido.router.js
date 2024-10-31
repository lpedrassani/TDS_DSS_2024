const routes = require("express").Router();
const pedidoController = require("../controller/pedido.controller");

//CRUD
routes.post("/", pedidoController.cadastro);
routes.get("/", pedidoController.consulta);
routes.put("/:id([0-9]+)", pedidoController.atualizar);
routes.delete("/:id([0-9]+)", pedidoController.deletar);

module.exports = routes;