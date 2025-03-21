import psycopg2


class PgManager:
    def __init__(self, dbname, user, password, host,port):
        self.dbname = dbname
        self.user = user
        self.password = password
        self.host = host
        self.port= port
        self.cur = None
        self.conn = self.connect()
        

    def connect(self):
        try:
            self.conn = psycopg2.connect(
                dbname=self.dbname,
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port
            )
            self.cur = self.conn.cursor()

            return self.conn
        
        except Exception as e:
            print("Error connecting to DataBase: ", e)
            return None
        
    def close(self):
        if self.conn:
            self.conn.close()
        if self.cur:
            self.cur.close()

    def execute(self, query,args=[]):
        try:
            self.cur.execute(query,args)
            self.conn.commit()
            
            if self.cur.description:
                return self.cur.fetchall()
            
        except Exception as e:
            print("Error executing query: ", e)
            return None