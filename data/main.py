import sys
from venv import create
from data.df import df_read_csv
from db.insert import insert_db,insert_ramen_db
import time
from db.create import create_table
from settings.settings import DEPLOY_FLAG

def main(s):

    if DEPLOY_FLAG:
        print("deploy mode ")

    if s == "insert":
        # time.sleep(60)

        # お菓子データをinsert
        df = df_read_csv('./data/csv/snack.csv')

        get_data_length = 200
        for i in range(1, get_data_length + 1):
            try:
                tmp_df = df.loc[i,:]

                name    = tmp_df['name']
                price   = tmp_df['price']
                img_url = tmp_df['img_url']
                detail  = tmp_df['detail']
                flavor  = tmp_df['flavor']

                # dbに挿入
                insert_db(name,price,img_url,detail,flavor)

                print("insert snacks ok")

            except:
                print("insert snacks error")


        # らーめんデータをinsert
        df = df_read_csv('./data/csv/ramen.csv')

        get_data_length = 20
        for i in range(1, get_data_length + 1):
            try:
                tmp_df = df.loc[i,:]

                name    = tmp_df['name']
                price   = tmp_df['price']
                img_url = tmp_df['img_url']
                detail  = tmp_df['detail']

                # dbに挿入
                insert_ramen_db(name,price,img_url,detail)

                print("insert ramen ok")

            except:
                print("insert ramen error")

    elif s == "create":
        create_table()

if __name__=="__main__":
    args = sys.argv

    if len(args)==2 and args[1]=="insert":
        exit(main("insert"))
    elif len(args)==2 and args[1]=="create":
        exit(main("create"))
    
    while True:
        pass
