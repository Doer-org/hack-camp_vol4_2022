from data.df import df_read_csv
from db.insert import insert_db
import time

def main():
    time.sleep(60)

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

            print("ok")

        except:
            print("error")

if __name__=="__main__":
    main()

