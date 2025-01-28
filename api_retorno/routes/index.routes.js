const express = require("express");
const pessoaRoute = require("./pessoa.route");

const routes = express.Router();

routes.use("/pessoas", pessoaRoute);

module.exports = routes;