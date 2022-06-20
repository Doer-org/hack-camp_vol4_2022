import psycopg2
from settings.settings import POSTGRES_DB,POSTGRES_USER,POSTGRES_PASSWORD,DATABASE_URL

#DBへの接続
def connect_to_db():
    conn = psycopg2.connect(
        host="psql-db",
        port=5432,
        dbname=POSTGRES_DB,
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD
    )

    return conn


#herokuDBへの接続
def connect_to_herokudb():
    conn = psycopg2.connect(DATABASE_URL)
    return conn



# DBとの接続を切断
def disconnect_to_db(conn):
    conn.close()
    return

