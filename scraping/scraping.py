import requests
from bs4 import BeautifulSoup
from utils.trim import shape_price
from db.conn import connect_to_db,disconnect_to_db


# ファミリーマートの商品情報ページからデータをスクレイピングする
def scraping():

    get_data_length = 200
    for i in range(1, get_data_length + 1):
        try:
            url = "https://www.family.co.jp/goods/snack.html"
            response = requests.get(url)
            soup = BeautifulSoup(response.text, "html.parser")

            name_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > p.ly-mod-infoset4-name"
            price_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > p.ly-mod-infoset4-price"
            img_css_selector = f"#contents > div > div.ly-wrp-contents > div.ly-contents-main-area > div > div.free_html_element.parbase.section > div > div > div.famicolle_goodcategoy_module.parbase.section > div > div > div > div:nth-child({i}) > div > a > div > p > img"

            name = soup.select(name_css_selector)[0].contents[0].strip(' ').strip('\t').strip('\r')
            price = soup.select(price_css_selector)[0].contents[0]
            img = soup.select(img_css_selector)[0]

            # データ整形
            price = shape_price(price)
            base_img_url = "https://www.family.co.jp"
            img_url = base_img_url + img['src']


            # db接続とデータの挿入
            conn = connect_to_db()
            cur = conn.cursor()

            insert_sql = f"\
                INSERT INTO okashi (name,price,img_url,likes) \
                VALUES ('{name}',{price},'{img_url}', 0);\
            "
            cur.execute(insert_sql)
            conn.commit()

            cur.close()

            disconnect_to_db(conn)

            print("ok")

        except:
            print("error")


