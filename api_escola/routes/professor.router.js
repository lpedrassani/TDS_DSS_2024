const express = require("express");
const professorController = require("../controller/professor.controller");

const routes = express.Router();

//CRUD
routes.post("/", professorController.cadastrar);
routes.get("/", professorController.consultar);
routes.put("/", professorController.atualizar);
routes.delete("/:id([0-9]+)", professorController.deletar)

module.exports = routes;