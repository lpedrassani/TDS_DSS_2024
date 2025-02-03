const express = require("express");
const autorRoute = require("./autor.route");
const livroRoute = require("./livro.route");

const routes = express.Router();

routes.use("/autor", autorRoute);
routes.use("/livro", livroRoute);

module.exports = routes;