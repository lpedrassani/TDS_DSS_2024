const routes = require("express").Router();
const coletorController = require("../coltroller/coletor.controller");

routes.post("/", coletorController.cadastro);
routes.get("/", coletorController.consulta);
routes.get("/:id([0-9]+)", coletorController.consultaPorId);
routes.put("/", coletorController.atualizar);
routes.delete("/:id([0-9]+)", coletorController.deletar);

module.exports = routes;