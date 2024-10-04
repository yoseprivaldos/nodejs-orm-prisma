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