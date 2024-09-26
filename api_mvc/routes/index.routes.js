const express = require('express');
const clienteRouter = require('./cliente.router');
const notaRouter = require('./nota.router');

const routes  = express.Router();

routes.use("/clientes", clienteRouter);
routes.use("/notas", notaRouter);

module.exports = routes;