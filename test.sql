DROP DATABASE IF EXISTS fuel_db;
CREATE DATABASE fuel_db;
USE fuel_db;
CREATE TABLE employees (
	id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);
USE fuel_db;
INSERT INTO employees (email, password)
VALUES ("John@email.com", "password" );
