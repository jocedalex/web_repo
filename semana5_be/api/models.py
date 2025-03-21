from datetime import datetime

class User:
    def __init__(self,id,full_name, email, username, password, birthdate, status):
        self.id = id
        self.full_name = full_name
        self.email = email
        self.username = username
        self.password = password

        try:
            self.birthdate = datetime.strptime(birthdate, '%m-%d-%y')
        except:
            self.birthdate = birthdate
        self.status = status

class Car:
    def __init__(self,id,brand, model, year, status):
        self.id = id
        self.brand = brand
        self.model = model
        self.year = year
        self.status = status

class Rent:
    def __init__(self,id,user_id, car_id, status):
        self.id = id
        self.user_id = user_id
        self.car_id = car_id
        self.status = status