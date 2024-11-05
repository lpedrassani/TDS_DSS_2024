const routes = require("express").Router();
const clienteColetorRouter = require("./clienteColetor.router");
const postoDeColetaRouter = require("./postoDeColeta.router");
const materiaisRouter = require("./materiais.router");

routes.use("/coletor", clienteColetorRouter);
routes.use("/coleta", postoDeColetaRouter);
routes.use("/materiais", materiaisRouter);


module.exports = routes;