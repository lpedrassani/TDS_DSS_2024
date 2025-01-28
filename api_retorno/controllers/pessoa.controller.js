const express = require("express");


module.exports = ({
    inserir: (req, res)=>{
        res.status(200).send({msg: "ola mundo"});
    },
    consultar: (req, res)=>{},
    atualizar: (req, res)=>{},
    deletar: (req, res)=>{},
})