const routes = require("express").Router();
const produtoController = require("../controller/produto.controller");

//CRUD
routes.post("/", produtoController.cadastro);
routes.get("/", produtoController.consultar);
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", ()=>{});

module.exports = routes;