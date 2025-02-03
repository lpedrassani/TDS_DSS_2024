create database biblioteca;
use biblioteca;

create table livro(
    id int not null primary key auto_increment,
    nome varchar(255),
    codigo int,
    genero varchar(255)
);

create table autor(
    id int not null primary key auto_increment,
    nome varchar(255),
    exemplares int
);