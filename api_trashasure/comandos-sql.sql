create database trashasure;

use trashasure;

create table coletor(

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255),
    telefone varchar(255),
    email varchar(255),
    cpf varchar(255),
    endereco varchar(255),
    numero int,
    status boolean
);

create table postoDeColeta(

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255),
    telefone varchar(255),
    email varchar(255),
    cnpj varchar(255),
    endereco varchar(255),
    numero int,
    status boolean,
);

create table materiais(

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    nome varchar(255),
    classificacao varchar(255),
    negociavel boolean
);