const express = require("express");
const autorController = require("../controller/autor.controller");

const routes = express.Router();

//CRUD

routes.post("/", autorController.cadastro);
routes.get("/", autorController.consultar);
routes.put("/:id([0-9]+)", autorController.atualizar);
routes.delete("/:id([0-9]+)", autorController.deletar);

module.exports = routes;
