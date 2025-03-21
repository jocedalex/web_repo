from connect import PgManager

pg = PgManager(
    dbname="postgres",
    user="postgres",
    password="7465Shkr",
    host="localhost",  
    port=5432
)


#Un script que agregue un usuario nuevo
pg.execute("""INSERT INTO lyfter_car_rental.users (full_name, email, username, password, birthdate, status)
    VALUES ('Joced Nieves', 'jnieves@example.com', 'jnieves', 'hashedpassword1', '1994-09-13', TRUE);""")

#Un script que agregue un automovil nuevo
pg.execute("""INSERT INTO lyfter_car_rental.cars (brand, model, year, status)
VALUES ('Jeep', 'Wrangler', 1998, 'Disponible');""")

#Un script que cambie el estado de un usuario
pg.execute("""UPDATE lyfter_car_rental.users
SET status = FALSE
WHERE username = 'jnieves';""")

#Un script que cambie el estado de un automovil
pg.execute("""UPDATE lyfter_car_rental.cars
SET status = 'No disponible'
WHERE brand = 'Jeep' AND model = 'Wrangler';""")

#Un script que genere un alquiler nuevo con los datos de un usuario y un automovil
pg.execute("""INSERT INTO lyfter_car_rental.rents (user_id, car_id, status)
VALUES (51, 11, 'Activo');""")

#Un script que confirme la devolución del auto al completar el alquiler, colocando el auto como disponible y completando el estado del alquiler
pg.execute("""UPDATE lyfter_car_rental.cars
SET status = 'Disponible'
WHERE id = 11;

UPDATE lyfter_car_rental.rents
SET status = 'Completado'
WHERE car_id = 11;""")

#Un script que deshabilite un automovil del alquiler
pg.execute("""UPDATE lyfter_car_rental.cars
SET status = 'No disponible'
WHERE id = 11;""")

#Un script que obtenga todos los automoviles alquilados, y otro que obtenga todos los disponibles.
rented_cars=pg.execute("""SELECT car.brand, car.model, car.year FROM lyfter_car_rental.cars car INNER JOIN lyfter_car_rental.rents ON car.id = rents.car_id WHERE rents.status = 'Activo';""")
available_cars=pg.execute("""SELECT brand, model, year FROM lyfter_car_rental.cars WHERE status = 'Disponible';""")
print(rented_cars)
print(available_cars)