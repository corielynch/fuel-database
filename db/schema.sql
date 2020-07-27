DROP DATABASE IF EXISTS fuel_db;

CREATE DATABASE fuel_db;
USE fuel_db;

CREATE TABLE User 
(
	id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR (255) NOT NULL,
    lastname VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    status VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Fuel 
(
	id INT AUTO_INCREMENT NOT NULL,
    submit_time INT (255) NOT NULL,
    fuel VARCHAR (255) NOT NULL,
    vehicle VARCHAR (255) NOT NULL,
    gallons INT DECIMAL(10,4) NOT NULL,
    PRIMARY KEY (id)
);