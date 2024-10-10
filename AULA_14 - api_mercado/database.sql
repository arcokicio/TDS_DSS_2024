/*
//CONFIGS BANCO DE DADOS  MARIADB senha:admin
//show database
//show tables

localhost:3306
user:admin

CREATE DATABASE mercado;
USE mercado;

CREATE TABLE mercado.produto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    preco DECIMAL(9,2),
    status BOOLEAN default TRUE
);

CREATE TABLE mercado.cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,    
    telefone VARCHAR(30),
    status BOOLEAN default TRUE
);

CREATE TABLE mercado.pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id),
    id_produto INT NOT NULL,    
    FOREIGN KEY(id_produto) REFERENCES produto(id),
    quantidade INT,
    total DECIMAL (9,2)
);


*/