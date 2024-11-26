const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoutes = require("./routes/index.routes");

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080!');
});