DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 1, 'shirt', 'clothing', 10, 22);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 2, 'refrigerator', 'appliances', 850, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 3, 'football', 'sports', 22, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 4, 'plates(4)', 'kitchen', 15, 11);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 5, 'jeans', 'clothing', 17, 33);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 6, 'key ring', 'accessories', 5, 63);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 7, 'basketball', 'sports', 25, 47);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 8, 'coffee table', 'furniture', 65, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 9, 'chair', 'furniture', 70, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 10, 'scarf', 'clothing', 30, 38);

