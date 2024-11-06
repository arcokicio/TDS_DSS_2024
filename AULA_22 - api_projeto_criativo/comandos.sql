CREATE TABLE showdomiliao.perguntas(
    id INT NOT NULL PRIMARY KEY,
    perguntas VARCHAR(255) NOT NULL,
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE showdomiliao.respostas(
    id INT NOT NULL PRIMARY KEY,
    alternativas VARCHAR(255) NOT NULL,
    id_perguntas INT not null,
    FOREIGN KEY(id_perguntas) REFERENCES perguntas(id),
    status BOOLEAN DEFAULT TRUE
);

INSERT INTO showdomiliao.perguntas(id, perguntas)
VALUES("01", "Qual dessas palavras nao tem relacao com sustentacao?");

INSERT INTO showdomiliao.respostas (id, alternativas, id_perguntas)
VALUES("01", "a.Fundamento b.Base c.Alicerce d.Ruína", "01");


