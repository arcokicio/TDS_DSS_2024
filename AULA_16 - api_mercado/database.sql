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


// INSTALANDO O BANCO DE DADOS

FERRAMENTA DE ACESSO AO BANCO DE DADOS
knex.js 

npm install mysql
npm install knex

FERRAMENTA DE ACESSO AO BANCO DE DADOS
knex.js 

///// Try Catch base
try {
	const data = await conn.raw("SELECT * FROM cliente");
	res.send(data[0]);
} catch (error){
	res.send("Erro ao consultar");
}

Clientes -----------
SELECT * FROM CLIENTE
INSERT INTO CLIENTE(NOME, TELEFONE) VALUES ("","");
UPDATE CLIENTE SET (NOME) = "", TELEFONE="" WHERE ID =1;
DELETE FROM CLIENTE WHERE ID =1;

Pedidos ------------
INSERT INTO PEDIDO(ID_CLIENTE, ID_PRODUTO, QUANTIDADE, TOTAL)
VALUES ("","");
SELECT * FROM PEDIDO;
UPDATE PEDIDO SET QUANTIDADE=1 WHERE ID=1;

*/

