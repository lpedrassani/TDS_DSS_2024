const routes = require("express").Router();
const coletaController = require("../coltroller/coleta.controller");

routes.post("/", coletaController.cadastro);
routes.get("/", coletaController.consulta);
routes.get("/:id([0-9]+)", coletaController.consultaPorId);
routes.put("/", coletaController.atualizar);
routes.delete("/:id([0-9]+)", coletaController.deletar);

module.exports = routes;