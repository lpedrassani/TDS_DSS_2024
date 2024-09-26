const express = require('express');
const routes = require('./cliente.router');

const router = express.Router();

router.get("/nota", (req,res)=>{
    return response.status(200).send("Deu Serto");
});

module.exports = routes;