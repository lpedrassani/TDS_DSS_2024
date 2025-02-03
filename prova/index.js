const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.routes");

const conn = require("./db-conn.js");

const app = express();

app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(8080, () => {
    console.log(`O servidor está rodando na porta 8080! 🚀`);
});