from db.conn import connect_to_db,disconnect_to_db,connect_to_herokudb
from settings.settings import DEPLOY_FLAG

def create_table():
    # db接続とデータの挿入
    conn = None
    if DEPLOY_FLAG:
        conn = connect_to_herokudb()
    else:
        conn = connect_to_db()


    # snacks

    cur = conn.cursor()

    create_snacks_sql = f"\
        CREATE TABLE snacks (\
        id       SERIAL NOT NULL, \
        name     VARCHAR(255) NOT NULL,\
        price    INTEGER NOT NULL,\
        img_url  VARCHAR(255) NOT NULL,\
        detail   VARCHAR(255) NOT NULL,\
        likes    INTEGER NOT NULL,\
        flavor   INTEGER NOT NULL,\
        PRIMARY KEY(id)\
        );\
    "

    cur.execute(create_snacks_sql)
    conn.commit()

    cur.close()



    # ramen
    cur = conn.cursor()

    create_ramens_sql = f"\
        CREATE TABLE ramens (\
        id       SERIAL NOT NULL, \
        name     VARCHAR(255) NOT NULL,\
        price    INTEGER NOT NULL,\
        img_url  VARCHAR(255) NOT NULL,\
        detail   VARCHAR(255) NOT NULL,\
        PRIMARY KEY(id)\
        );\
    "

    cur.execute(create_ramens_sql)
    conn.commit()

    cur.close()





    disconnect_to_db(conn)

