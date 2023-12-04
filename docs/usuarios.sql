DROP DATABASE IF EXISTS usuarios;
CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE user(
    id INTEGER(5) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    nascto DATE NOT NULL,
    cep VARCHAR(9) NOT NULL,
    numero INTEGER(5) NOT NULL,
    complemento VARCHAR(50) NOT NULL,
    telefones VARCHAR(100)
);

INSERT INTO user VALUES
(123, "Marcelo Ortega", "789.153.356-35", "marcelinho@email.com", password("marcelinho123"), "2006-05-16", "13917-490", "225", "BL03 AP1004", "19-99268-3698, 19-99163-8541"),
(333, "Naldo Benny", "849.6259.3596-69", "emailespecial@email.com", password("senhaespecialparapessoasespeciais"), "1979-04-19",  "45851-754", "789", "BL15 AP12", "19-99582-1478"),
(011, "Charles do Bronxs", "123.689.254-63", "sebatervaiapagar@email.com", password("dobronxsoliveira"), "1989-10-17",  "79654-360", "914", "casa 4", "19-99531-4852");

SELECT * FROM user;