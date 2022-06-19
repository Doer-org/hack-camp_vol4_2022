from db.conn import connect_to_db,disconnect_to_db,connect_to_herokudb
from settings.settings import DEPLOY_FLAG

def insert_db(name,price,img_url,detail,flavor):
    # db接続とデータの挿入
    conn = None
    if DEPLOY_FLAG:
        conn = connect_to_herokudb()
    else:
        conn = connect_to_db()

    cur = conn.cursor()

    insert_sql = f"\
        INSERT INTO snacks (name,price,img_url,detail,likes,flavor) \
        VALUES ('{name}','{price}','{img_url}','{detail}', 0,'{flavor}');\
    "

    cur.execute(insert_sql)
    conn.commit()

    cur.close()

    disconnect_to_db(conn)


def insert_ramen_db(name,price,img_url,detail):
    # db接続とデータの挿入
    conn = None
    if DEPLOY_FLAG:
        conn = connect_to_herokudb()
    else:
        conn = connect_to_db()

    cur = conn.cursor()

    insert_sql = f"\
        INSERT INTO ramens (name,price,img_url,detail) \
        VALUES ('{name}','{price}','{img_url}','{detail}');\
    "

    cur.execute(insert_sql)
    conn.commit()

    cur.close()

    disconnect_to_db(conn)

