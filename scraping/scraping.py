import requests
from bs4 import BeautifulSoup
from utils.trim import shape_price
import time
import math

# db関連
from db.insert import insert_db

# pandas関連
from data.df import df_init,df_append,df_save_to_csv,df_ramen_append,df_ramen_init


# ファミリーマートの商品情報ページからお菓子データをスクレイピングする
def scraping():

    time.sleep(2)

    df = df_init()

    get_data_length = 200
    for i in range(1, get_data_length + 1):
        try:
            url = "https://www.family.co.jp/goods/snack.html"
            response = requests.get(url)
            soup = BeautifulSoup(response.text, "html.parser")

            name_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > p.ly-mod-infoset4-name"
            price_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > p.ly-mod-infoset4-price"
            img_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > div > p > img"
            detail_href_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a"
            
            name = soup.select(name_css_selector)[0].contents[0]
            price = soup.select(price_css_selector)[0].contents[0]
            img = soup.select(img_css_selector)[0]
            detail_url = soup.select(detail_href_css_selector)[0].get('href')

            # 詳細情報所得
            detail_response = requests.get(detail_url)
            detail_soup = BeautifulSoup(detail_response.text, "html.parser")

            detail_css_selector = f"#contents > div > div.goods_detail.goods_detail_module.parbase > div > div.ly-mod-layout-2clm > div:nth-child(2) > div > p.ly-goods-lead"
            detail = detail_soup.select(detail_css_selector)[0].contents[0]

            # データ整形
            price = shape_price(price)
            price = math.floor(price * 1.08)
            base_img_url = "https://www.family.co.jp"
            img_url = base_img_url + img['src']

            # dbに挿入
            # insert_db(name,price,img_url,detail)

            # pandas
            df = df_append(df,name,price,img_url,detail)

            df_save_to_csv(df, path="data/csv/snack.csv")

            print("ok")

        except:
            print("error")


# ファミリーマートの商品情報ページかららーめんデータをスクレイピングする
def scraping_ramen():

    time.sleep(2)

    df = df_ramen_init()

    print("ramen scraping start")

    get_data_length = 28
    # 予告を取り除くため3から
    for i in range(3, get_data_length + 1):
        try:
            url = "https://www.family.co.jp/goods/processed_foods.html"
            response = requests.get(url)
            soup = BeautifulSoup(response.text, "html.parser")

            name_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > p.ly-mod-infoset4-name"
            price_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > p.ly-mod-infoset4-price"
            img_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > div > p > img"
            detail_href_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a"


            name = soup.select(name_css_selector)[0].contents[0]
            price = soup.select(price_css_selector)[0].contents[0]
            img = soup.select(img_css_selector)[0]
            detail_url = soup.select(detail_href_css_selector)[0].get('href')

            # print(name,price,img,detail_url)

            # 詳細情報所得
            detail_response = requests.get(detail_url)
            detail_soup = BeautifulSoup(detail_response.text, "html.parser")

            detail_css_selector = f"#contents > div > div.goods_detail.goods_detail_module.parbase > div > div.ly-mod-layout-2clm > div:nth-child(2) > div > p.ly-goods-lead"
            detail = detail_soup.select(detail_css_selector)[0].contents[0]

            # データ整形
            price = shape_price(price)
            price = math.floor(price * 1.08)
            base_img_url = "https://www.family.co.jp"
            img_url = base_img_url + img['src']

            # dbに挿入
            # insert_db(name,price,img_url,detail)

            # pandas
            df = df_ramen_append(df,name,price,img_url,detail)

            df_save_to_csv(df, path="data/csv/ramen.csv")

            print("ok")

        except:
            print("error")