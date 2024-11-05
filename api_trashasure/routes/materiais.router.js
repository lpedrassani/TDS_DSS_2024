const routes = require("express").Router();
const materiaisController = require("../coltroller/materiais.controller");

routes.post("/", materiaisController.cadastro);
routes.get("/", materiaisController.consulta);
routes.get("/:id([0-9]+)", materiaisController.consultaPorId);
routes.put("/", materiaisController.atualizar);
routes.delete("/:id([0-9]+)", materiaisController.deletar);

module.exports = routes;