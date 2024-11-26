-- Crear la base de datos
CREATE DATABASE PH;
USE PH;

-- Tabla de  pH y tiempo
CREATE TABLE LecturasPH (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    valor_ph DECIMAL(5, 2) NOT NULL,   
);

-- DATOS INGRESADOS A LA BASE DE DATOS--
INSERT INTO LecturasPH (valor_ph) VALUES
(7.50),
(4.00),
(12.00),
(7.00);
