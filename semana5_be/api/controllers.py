from connect import PgManager

pg = PgManager(
    dbname="postgres",
    user="postgres",
    password="7465Shkr",
    host="localhost",  
    port=5432
)

def create(table,object):
    columns=','.join(tuple(key for key in object.__dict__.keys() if key != 'id'))
    params=','.join(tuple('%s' for i in range(len(object.__dict__.keys())-1)))
    values=tuple(value for key,value in object.__dict__.items() if key != 'id')
    
    try:
        query=f"""INSERT INTO lyfter_car_rental.{table} ({columns})
        VALUES ({params});"""
        
        pg.execute(query,values)

        return f'{table.capitalize()} created'
    except Exception as e:      
        return str(e)
    
def read(table,filters):
    try:
        
        if filters:
            params=' and '.join(tuple(str(key)+'=%s' for key in filters.keys()))
            conditions=[]

            for value in filters.values():
                conditions.append(value)
            data=pg.execute(f"""SELECT * FROM lyfter_car_rental.{table} WHERE {params};""",conditions)

        else:
            data=pg.execute(f"""SELECT * FROM lyfter_car_rental.{table};""")
            
        return data
    except Exception as e:
        return str(e)
    
def update(table,object):
    columns='=%s,'.join(tuple(key for key in object.__dict__.keys() if key != 'id'))
    values=tuple(value for key,value in object.__dict__.items() if key != 'id')

    try:
        query=f"""UPDATE lyfter_car_rental.{table}
        SET {columns}=%s
        WHERE id=%s;"""
        print(query)
        print(values)
        pg.execute(query,values+tuple([object.id]))

        return 'User updated'
    
    except Exception as e:
        return str(e)