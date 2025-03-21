from connect import PgManager

# Create a new instance of PgManager
pg = PgManager(
    dbname="postgres",
    user="postgres",
    password="7465Shkr",
    host="localhost",  
    port=5432
)

pg.execute("""CREATE TABLE IF NOT EXISTS lyfter_car_rental.users(
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    status BOOLEAN DEFAULT TRUE);
           
    INSERT INTO lyfter_car_rental.users (full_name, email, username, password, birthdate, status)
    VALUES 
    ('Juan Pérez', 'juan.perez1@example.com', 'juanp1', 'hashedpassword1', '1990-05-15', TRUE),
    ('Maria Gomez', 'maria.gomez2@example.com', 'mariag2', 'hashedpassword2', '1985-07-21', TRUE),
    ('Carlos Ruiz', 'carlos.ruiz3@example.com', 'carlosr3', 'hashedpassword3', '1993-11-30', FALSE),
    ('Ana Torres', 'ana.torres4@example.com', 'anator4', 'hashedpassword4', '1988-04-10', TRUE),
    ('Pedro López', 'pedro.lopez5@example.com', 'pedrol5', 'hashedpassword5', '1995-12-03', FALSE),
    ('Sofia Ramirez', 'sofia.ramirez6@example.com', 'sofiar6', 'hashedpassword6', '1992-06-17', TRUE),
    ('Luis Fernández', 'luis.fernandez7@example.com', 'luisf7', 'hashedpassword7', '1991-09-22', TRUE),
    ('Elena Castro', 'elena.castro8@example.com', 'elenac8', 'hashedpassword8', '1984-03-25', FALSE),
    ('Jorge Morales', 'jorge.morales9@example.com', 'jorgem9', 'hashedpassword9', '1989-08-19', TRUE),
    ('Clara Méndez', 'clara.mendez10@example.com', 'claram10', 'hashedpassword10', '1996-01-11', TRUE),
    
    ('Usuario11', 'usuario11@example.com', 'user11', 'hashedpassword11', '1990-02-20', TRUE),
    ('Usuario12', 'usuario12@example.com', 'user12', 'hashedpassword12', '1988-07-14', FALSE),
    ('Usuario13', 'usuario13@example.com', 'user13', 'hashedpassword13', '1994-11-05', TRUE),
    ('Usuario14', 'usuario14@example.com', 'user14', 'hashedpassword14', '1997-03-09', FALSE),
    ('Usuario15', 'usuario15@example.com', 'user15', 'hashedpassword15', '1986-06-24', TRUE),
    ('Usuario16', 'usuario16@example.com', 'user16', 'hashedpassword16', '1991-12-29', TRUE),
    ('Usuario17', 'usuario17@example.com', 'user17', 'hashedpassword17', '1993-10-18', FALSE),
    ('Usuario18', 'usuario18@example.com', 'user18', 'hashedpassword18', '1985-05-07', TRUE),
    ('Usuario19', 'usuario19@example.com', 'user19', 'hashedpassword19', '1999-09-15', TRUE),
    ('Usuario20', 'usuario20@example.com', 'user20', 'hashedpassword20', '1990-07-04', FALSE),
    
    ('Usuario21', 'usuario21@example.com', 'user21', 'hashedpassword21', '1992-03-14', TRUE),
    ('Usuario22', 'usuario22@example.com', 'user22', 'hashedpassword22', '1983-08-21', FALSE),
    ('Usuario23', 'usuario23@example.com', 'user23', 'hashedpassword23', '1987-05-19', TRUE),
    ('Usuario24', 'usuario24@example.com', 'user24', 'hashedpassword24', '1998-01-23', TRUE),
    ('Usuario25', 'usuario25@example.com', 'user25', 'hashedpassword25', '1996-04-30', FALSE),
    ('Usuario26', 'usuario26@example.com', 'user26', 'hashedpassword26', '1989-11-02', TRUE),
    ('Usuario27', 'usuario27@example.com', 'user27', 'hashedpassword27', '1995-06-25', TRUE),
    ('Usuario28', 'usuario28@example.com', 'user28', 'hashedpassword28', '1984-12-07', FALSE),
    ('Usuario29', 'usuario29@example.com', 'user29', 'hashedpassword29', '1993-10-14', TRUE),
    ('Usuario30', 'usuario30@example.com', 'user30', 'hashedpassword30', '1990-08-06', TRUE),
    
    ('Usuario31', 'usuario31@example.com', 'user31', 'hashedpassword31', '1991-09-17', TRUE),
    ('Usuario32', 'usuario32@example.com', 'user32', 'hashedpassword32', '1982-05-28', FALSE),
    ('Usuario33', 'usuario33@example.com', 'user33', 'hashedpassword33', '1994-07-12', TRUE),
    ('Usuario34', 'usuario34@example.com', 'user34', 'hashedpassword34', '1997-02-01', TRUE),
    ('Usuario35', 'usuario35@example.com', 'user35', 'hashedpassword35', '1998-03-11', FALSE),
    ('Usuario36', 'usuario36@example.com', 'user36', 'hashedpassword36', '1992-06-14', TRUE),
    ('Usuario37', 'usuario37@example.com', 'user37', 'hashedpassword37', '1985-09-18', TRUE),
    ('Usuario38', 'usuario38@example.com', 'user38', 'hashedpassword38', '1996-10-09', FALSE),
    ('Usuario39', 'usuario39@example.com', 'user39', 'hashedpassword39', '1989-11-05', TRUE),
    ('Usuario40', 'usuario40@example.com', 'user40', 'hashedpassword40', '1993-04-27', TRUE),
    
    ('Usuario41', 'usuario41@example.com', 'user41', 'hashedpassword41', '1995-02-23', FALSE),
    ('Usuario42', 'usuario42@example.com', 'user42', 'hashedpassword42', '1987-08-12', TRUE),
    ('Usuario43', 'usuario43@example.com', 'user43', 'hashedpassword43', '1990-10-31', TRUE),
    ('Usuario44', 'usuario44@example.com', 'user44', 'hashedpassword44', '1998-05-22', FALSE),
    ('Usuario45', 'usuario45@example.com', 'user45', 'hashedpassword45', '1991-07-14', TRUE),
    ('Usuario46', 'usuario46@example.com', 'user46', 'hashedpassword46', '1984-11-09', TRUE),
    ('Usuario47', 'usuario47@example.com', 'user47', 'hashedpassword47', '1992-06-03', FALSE),
    ('Usuario48', 'usuario48@example.com', 'user48', 'hashedpassword48', '1993-09-29', TRUE),
    ('Usuario49', 'usuario49@example.com', 'user49', 'hashedpassword49', '1996-12-17', TRUE),
    ('Usuario50', 'usuario50@example.com', 'user50', 'hashedpassword50', '1990-07-25', FALSE);""")


pg.execute("""CREATE TABLE IF NOT EXISTS lyfter_car_rental.cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(20) NOT NULL,
    model VARCHAR(20) NOT NULL,
    year INT NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO lyfter_car_rental.cars (brand, model, year, status)
VALUES 
    ('Toyota', 'Corolla', 2018, 'Disponible'),
    ('Honda', 'Civic', 2020, 'En reparación'),
    ('Ford', 'Mustang', 2016, 'Disponible'),
    ('Chevrolet', 'Camaro', 2019, 'Vendido'),
    ('Nissan', 'Altima', 2017, 'Disponible'),
    ('BMW', 'X5', 2021, 'Disponible'),
    ('Audi', 'A4', 2015, 'Vendido'),
    ('Mercedes-Benz', 'C-Class', 2019, 'Disponible'),
    ('Hyundai', 'Elantra', 2020, 'En reparación'),
    ('Kia', 'Sorento', 2018, 'Disponible');""")

pg.execute("""CREATE TABLE IF NOT EXISTS lyfter_car_rental.rents (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    car_id INT NOT NULL,
    rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES lyfter_car_rental.users(id) ON DELETE CASCADE,
    FOREIGN KEY (car_id) REFERENCES lyfter_car_rental.cars(id) ON DELETE CASCADE
);

INSERT INTO lyfter_car_rental.rents (user_id, car_id, status)
VALUES 
    (1, 5, 'Activo'),
    (2, 1, 'Finalizado'),
    (3, 3, 'Cancelado'),
    (4, 3, 'Activo'),
    (5, 1, 'Finalizado'),
    (6, 6, 'Activo');""")

pg.close()