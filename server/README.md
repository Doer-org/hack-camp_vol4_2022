# serverside

## 必要なAPI

- お菓子のランキングを返すAPI (上位30件)
- 条件に対してお菓子をレコメンドして返すAPI
- お菓子のidを指定していいねできるAPI

## API


### ランダムでお菓子を返すAPI

パラメータを指定しなければ

price=1000,cnt=3とする

```
curl http://localhost:8000/snack/random
```

```
{
    "message": "success",
    "data": [
        {
            "id": 17,
            "name": "カリッと食感のバナナチップス",
            "price": 184,
            "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4729990.jpg",
            "detail": "ココナッツオイルで味付けした、カリッとした食感が楽しめるバナナチップスです。",
            "likes": "0"
        },
        {
            "id": 49,
            "name": "こんがり揚げたカリッとにんにく",
            "price": 147,
            "imgUrl": "https://www.family.co.jp/content/dam/family/goods/5012732.jpg",
            "detail": "宮古島産雪塩を使用したカリっとした食感でにんにくの風味とほどよい塩味がクセになる味わいです。",
            "likes": "0"
        },
        {
            "id": 210,
            "name": "クリート　おたべ監修　生八つ橋グミ　抹茶味・ニッキ味",
            "price": 221,
            "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4726821.jpg",
            "detail": "話題となった「生八つ橋グミ」の第二弾です。　抹茶味の生八つ橋風グミが新登場です。ニッキ味、抹茶味が各2セット入り。",
            "likes": "0"
        }
    ]
}
```

<br>

### 指定したidのお菓子を取得するAPI

```
curl http://localhost:8000/snack/1
```

```
{
    "message": "success",
    "data": {
        "id": 1,
        "name": "カンロ　4Dグミ　モンキーバナナ",
        "price": 184,
        "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4727439.jpg",
        "detail": "モンキー型はコーラ味、バナナ型はバナナ味の味わいが楽しめる立体型グミです。",
        "likes": "0"
    }
}
```

<br>

### id を指定していいねをするAPI


```
curl http://localhost:8000/snack/like/1
```

```
{
    "message": "success",
    "data": {
        "id": 1,
        "name": "しっとり食感のご褒美ソフトチョコクッキー",
        "price": 156,
        "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4821939.jpg",
        "detail": "マカダミア、アーモンド、ココナッツ3種類の素材を使用した、濃厚なチョコ風味としっとり食感が特徴のソフトクッキーです。",
        "likes": 5
    }
}
```



## reference
- [Clean Architecture を用いた go + gin のバックエンド (API) 構築](http://psychedelicnekopunch.com/archives/1308)


## deploy memo

heroku createでアプリ作成

addsonでsql用意
heroku addons:create heroku-postgresql:hobby-dev

localからcsvのデータを挿入

herokuの環境変数設定

Dockerfileのディレクトリに移動し
heroku container:push web
イメージのデプロイ
