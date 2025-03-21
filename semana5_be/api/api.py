from flask import Flask, request
from models import User, Car, Rent
from controllers import create, read, update as update_controller

app = Flask(__name__)

@app.route("/users", methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        try:
            data=read('users',request.args)
            users=[User(*item).__dict__ for item in data]
                        
            return users
        
        except Exception as e:
            return str(e)
        
    elif request.method == 'POST':

        new_user = User(id=None,**request.json)
        return create('users',new_user)

@app.route("/cars", methods=['GET', 'POST'])
def cars():
    if request.method == 'GET':
        try:
            print(request.args)
            data=read('cars',request.args)
            cars=[Car(*item).__dict__ for item in data]
                        
            return cars
        
        except Exception as e:
            return str(e)
        
    elif request.method == 'POST':

        new_car = Car(id=None,**request.json)
        return create('cars',new_car)
    
@app.route("/rents", methods=['GET', 'POST'])
def rents():
    if request.method == 'GET':
        try:
            data=read('rents',request.args)
            rents=[Rent(*item).__dict__ for item in data]
                        
            return rents
        
        except Exception as e:
            return str(e)
        
    elif request.method == 'POST':

        new_rent = Rent(id=None,**request.json)
        return create('rents',new_rent)
    
@app.route("/update/<item>/<id>", methods=['PUT'])
def update(item,id):
    if item=='user':
        new_user = User(id=id,**request.json)
        return update_controller('users',new_user)
    
    elif item=='car':
        new_car = Car(id=id,**request.json)
        return update_controller('cars',new_car)
    
    elif item=='rent':
        new_rent = Rent(id=id,**request.json)
        return update_controller('rents',new_rent)

if __name__ == '__main__':
    app.run(host="localhost", debug=True)