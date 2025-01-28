create database registro;
use registro;

create table pessoas(
    id int not null primary key auto_increment,
    nome varchar(255),
    telefone varchar(255),
    endereço varchar(255),
    email varchar(255)
)