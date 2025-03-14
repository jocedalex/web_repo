from flask import Flask, request
import json

app = Flask(__name__)

@app.route("/tasks", methods=['GET', 'POST'])
def tasks():
    if request.method == 'GET':
        
        try:
            with open('tasks.json') as f:
                data = json.load(f)
            
            filter_data = request.args.get('status')
            if filter_data:
                data = filter(lambda x: x['status'] == filter_data, data)

            return data
        
        except FileNotFoundError:
            return 'No tasks created'
        
    elif request.method == 'POST':
        return create_task(request)

def create_task(request):
    try:
        with open('tasks.json') as f:
            data = json.load(f)
        
        new_task = request.json
        new_task['status'] = new_task['status'].lower()

        if new_task['id'] in [task['id'] for task in data]:
            raise ValueError('Id already exists')
        
        elif new_task['status'] not in ['pending', 'in progress', 'done']:
            raise ValueError('Invalid status')
        
        elif not isinstance(new_task['id'], int) or new_task['id'] < 0:
            raise ValueError('Id must be a positive integer')
        
        elif new_task["title"] == "":
            raise ValueError('Title cannot be empty')
        
        elif new_task["description"] == "":
            raise ValueError('Description cannot be empty')
        

        data.append(new_task)

        with open('tasks.json', 'w') as f:
            json.dump(data, f)

        return 'Task created'
    
    except FileNotFoundError:
        with open('tasks.json', 'w') as f:
            new_task = request.json
            json.dump([new_task], f)

        return 'Task created'
    
    except ValueError as e:
        return str(e)

@app.route("/tasks/<id>", methods=['PUT', 'DELETE'])
def update_task(id):
    if request.method == 'PUT':
        try:
            with open('tasks.json') as f:
                data = json.load(f)
            
            task = next((task for task in data if task['id'] == int(id)), None)

            if task is None:
                raise ValueError('Task not found')
            
            new_task = request.json
            new_task['status'] = new_task['status'].lower()

            if new_task['status'] not in ['pending', 'in progress', 'done']:
                raise ValueError('Invalid status')
            
            elif new_task["title"] == "":
                raise ValueError('Title cannot be empty')
            
            elif new_task["description"] == "":
                raise ValueError('Description cannot be empty')
            
            task.update(new_task)

            with open('tasks.json', 'w') as f:
                json.dump(data, f)

            return 'Task updated'
        
        except FileNotFoundError:
            return 'No tasks created'
        
        except ValueError as e:
            return str(e)
    elif request.method == 'DELETE':
        return delete_task(id)

def delete_task(id):
    try:
        with open('tasks.json') as f:
            data = json.load(f)
        
        task = next((task for task in data if task['id'] == int(id)), None)

        if task is None:
            raise ValueError('Task not found')
        
        data.remove(task)

        with open('tasks.json', 'w') as f:
            json.dump(data, f)

        return 'Task deleted'
    
    except FileNotFoundError:
        return 'No tasks created'
    
    except ValueError as e:
        return str(e)

if __name__ == '__main__':
    app.run(host="localhost", debug=True)