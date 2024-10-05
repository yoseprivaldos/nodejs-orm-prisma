CREATE Table sample (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL, 
    PRIMARY KEY(id)
) ENGINE InnoDB;


CREATE Table customers(
    id VARCHAR(100) NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    phone VARCHAR(100) NOT NULL, 
    PRIMARY KEY (id), 
    CONSTRAINT customer_email_unique UNIQUE (email),
    CONSTRAINT customer_phone_unique UNIQUE (phone)  
) ENGINE InnoDB;


CREATE TABLE products
(
    id          VARCHAR(100) NOT NULL,
    name        VARCHAR(100) NOT NULL, 
    price       INT          NOT NULL,   
    stock       INT          NOT NULL, 
    category    VARCHAR(100) NOT NULL, 
    PRIMARY KEY(id)
)ENGINE InnoDB;

INSERT INTO products (id, name, price, stock, category)
VALUES     
('P0001', 'A', 1000, 100, 'K1'),
('P0002', 'B', 2000, 200, 'K2'),
('P0003', 'C', 3000, 300, 'K3'), 
('P0004', 'D', 4000, 400, 'K4'),
('POOO5', 'E', 5000, 500, 'K5');

CREATE TABLE categories
(
    id INT  NOT NULL AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) engine InnoDB;

use belajar_nodejs_database;

CREATE TABLE wallet 
(
    id VARCHAR (100) NOT NULL, 
    balance INT  NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE InnoDB;

SHOW TABLES;

CREATE TABLE COMMENTS
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT comments_customers_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE InnoDB;


INSERT INTO comments(customer_id, title, description)
VALUES
('yosep', 'comment 1', 'sample comment 1'),
('yosep', 'comment 2', 'sample comment 2'),
('endop', 'comment 1', 'sample comment 1'),
('endop', 'comment 2', 'sample comment 2');

CREATE TABLE LIKES
(
    customer_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, product_id),
    CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
) ENGINE InnoDB;


select customers.name, products.name from likes 
join customers on likes.customer_id = customers.id 
join products on likes.product_id = products.id;

CREATE DATABASE belajar_nodejs_prisma;
use belajar_nodejs_prisma;

show tables;

