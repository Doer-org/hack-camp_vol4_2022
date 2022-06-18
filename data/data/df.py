import pandas as pd

# Dataframe初期化
def df_init():
    df = pd.DataFrame(
                columns = ["name","price","img_url","detail","flavor"]
            )
    return df


# dfにデータ追加
def df_append(df,name,price,img_url,detail):

    d = {
        'name':name,
        'price':price,
        'img_url':img_url,
        'detail':detail,
        'flavor':'NULL'
    }

    df = df.append(d,ignore_index=True)
    return df


# Dataframe初期化
def df_ramen_init():
    df = pd.DataFrame(
                columns = ["name","price","img_url","detail"]
            )
    return df


# dfにデータ追加
def df_ramen_append(df,name,price,img_url,detail):

    d = {
        'name':name,
        'price':price,
        'img_url':img_url,
        'detail':detail,
    }

    df = df.append(d,ignore_index=True)
    return df


# dfをcsv形式で保存
def df_save_to_csv(df:pd.DataFrame,path):
    df.to_csv(path)


# csv形式のデータを読み込み
def df_read_csv(path):
    df = pd.read_csv(path)
    return df
