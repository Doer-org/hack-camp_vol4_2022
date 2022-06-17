from db.conn import connect_to_db,disconnect_to_db

def insert_db(name,price,img_url,detail,flavor):
    # db接続とデータの挿入
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
