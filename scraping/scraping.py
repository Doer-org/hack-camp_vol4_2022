import requests
from bs4 import BeautifulSoup
from utils.trim import shape_price
from db.conn import connect_to_db,disconnect_to_db
import time


# ファミリーマートの商品情報ページからデータをスクレイピングする
def scraping():

    time.sleep(2)

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
            base_img_url = "https://www.family.co.jp"
            img_url = base_img_url + img['src']


            # db接続とデータの挿入
            conn = connect_to_db()
            cur = conn.cursor()

            insert_sql = f"\
                INSERT INTO snack (name,price,img_url,detail,likes) \
                VALUES ('{name}','{price}','{img_url}','{detail}', 0);\
            "

            cur.execute(insert_sql)
            conn.commit()

            cur.close()

            disconnect_to_db(conn)

            print("ok")

        except:
            print("error")

