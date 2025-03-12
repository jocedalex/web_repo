-- #2 Exercise---------------------------------
-- CREATE TABLE `Products`(
--     `id` INTEGER PRIMARY KEY,
--     `code` VARCHAR(255) NOT NULL,
--     `name` VARCHAR(255) NOT NULL,
--     `price` FLOAT(53) NOT NULL,
--     `entry_date` DATE NOT NULL,
--     `brand` VARCHAR(255) NOT NULL
-- );
-- CREATE TABLE `Bills`(
--     `id` INTEGER PRIMARY KEY,
--     `purchase_date` DATE NOT NULL,
--     `user_email` VARCHAR(255) NOT NULL,
--     `total` FLOAT(53) NOT NULL
-- );
-- CREATE TABLE `Bill Product`(
--     `id` INTEGER PRIMARY KEY,
--     `product_id` INT NOT NULL REFERENCES `Products`(`id`),
--     `bill_id` INT NOT NULL REFERENCES `Bills`(`id`),
--     `quantity` INT NOT NULL,
--     `total` FLOAT(53) NOT NULL
-- );
-- CREATE TABLE `Cart`(
--     `id` INTEGER PRIMARY KEY,
--     `user_email` CHAR(255) NOT NULL
-- );
-- CREATE TABLE `Cart Product`(
--     `id` INTEGER PRIMARY KEY,
--     `cart_id` INT NOT NULL REFERENCES `Cart`(`id`),
--     `product_id` INT NOT NULL REFERENCES `Products`(`id`)
-- );

--SQLite hace automaticamente el incremento de la llave primaria si se crea como INTEGER


-- #3 Exercise---------------------------------
-- ALTER TABLE Bills ADD COLUMN user_phone VARCHAR(255) NOT NULL;
-- ALTER TABLE Bills ADD COLUMN cashier_id INT NOT NULL;

-- insert into Products (code, name, price, entry_date, brand) values ('123', 'Coca Cola', 30000, '2022-02-15', 'Coca Cola'),
-- ('124', 'Pepsi', 25000, '2022-02-15', 'Pepsi'),
-- ('125', 'Sprite', 35000, '2022-02-15', 'Coca Cola'),
-- ('126', 'Fanta', 58000, '2022-02-15', 'Coca Cola'),
-- ('127', '7up', 25000, '2022-02-15', 'Pepsi'),
-- ('128', 'Mirinda', 41000, '2022-02-15', 'Pepsi'),
-- ('129', 'Manzanita', 60000, '2022-02-15', 'Coca Cola'),
-- ('130', 'Squirt', 50000, '2022-02-15', 'Pepsi'),
-- ('131', 'Boing', 48000, '2022-02-15', 'Boing'),
-- ('132', 'Jumex', 30000, '2022-02-15', 'Jumex');

--update Products set brand = 'Boing' where id = 9;

--delete from Products where id = 10;

-- INSERT INTO Bills (purchase_date, user_email, total, user_phone, cashier_id) VALUES ('2022-02-15', 'test@mail.com', 100000, '123456789', 1),
-- ('2022-02-12', 'new@tumail.com', 200000, '987654321', 2),
-- ('2022-02-10', 'this@gmail.com', 300000, '123456789', 3);

-- INSERT INTO `Bill Product` (product_id, bill_id, quantity, total) VALUES (3, 1, 2, 60000),
-- (3, 1, 1, 25000),
-- (6, 2, 3, 105000),
-- (7, 2, 1, 58000),
-- (1, 2, 1, 25000),
-- (1, 1, 2, 82000),
-- (1, 1, 1, 60000),
-- (9, 3, 1, 50000),
-- (5, 1, 1, 48000),
-- (5, 1, 1, 30000);


-- #4 Exercise---------------------------------
-- SELECT * FROM Products where brand = 'Coca Cola';

-- SELECT name,price FROM Products WHERE price > 50000;

-- SELECT bl.purchase_date, bl.user_email, bl.total, bl.user_phone, SUM(bp.total) AS total_calculated FROM Bills bl JOIN `Bill Product` bp ON bl.id = bp.bill_id WHERE bp.product_id = 1;

-- SELECT bl.id, bl.purchase_date, bl.user_email, bl.user_phone, bp.product_id, SUM(bp.total) AS total_calculated FROM Bills bl JOIN `Bill Product` bp ON bl.id = bp.bill_id GROUP BY bp.product_id;

-- SELECT user_email,COUNT(id) AS amount FROM Bills GROUP BY user_email;

-- SELECT * FROM Bills ORDER BY total DESC;

-- SELECT * FROM Bills WHERE id=1;

--Select us.username,rm.name from user us join room rm on us.room_id = rm.id;