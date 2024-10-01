const express = require('express');
const clienteController = require('../controller/cliente.controller');

const routes = express.Router();

routes.post("/cadastro", clienteController.cadastro);
routes.get("/consulta", clienteController.consulta);
routes.get("/consultaID/:id([0-9]+)", clienteController.consultaID);
routes.delete("/deletaID/:id([0-9]+)", clienteController.deletaID);

module.exports = routes;