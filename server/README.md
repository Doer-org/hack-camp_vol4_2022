# serverside

## 必要なAPI

- お菓子のランキングを返すAPI (上位30件)
- 条件に対してお菓子をレコメンドして返すAPI
- お菓子のidを指定していいねできるAPI

## API


### ランダムでお菓子を返すAPI

パラメータを指定しなければ

price=1000,emotionとする

```
curl http://localhost:8000/snack/random
```

パラメータの使い方 例
```
curl http://localhost:8000/snack/random?price=2000&emotion=1
```

emotion param
```go
// emotion
// 0 : normal
// 1 : sad
// 2 : angry
// 3 : happy
```

response example

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

response example

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

いいねをまとめて更新

0<=value<=100

```
curl http://localhost:8000/snack/like/1?value=100
```

response example

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


### お菓子Top10を返すAPI


```
curl http://localhost:8000/snack/ranking
```


response example

```
{
    "message": "success",
    "data": [
        {
            "id": 2,
            "name": "カンロ　4Dグミ　モンキーバナナ",
            "price": 198,
            "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4727439.jpg",
            "detail": "モンキー型はコーラ味、バナナ型はバナナ味の味わいが楽しめる立体型グミです。",
            "likes": 0,
            "flavor": 1
        },
        {
            "id": 3,
            "name": "森永　大粒ラムネ　うめソルト味",
            "price": 140,
            "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4729402.jpg",
            "detail": "粒の大きさが通常の約1.5倍の大粒ラムネです。ほんのり塩味と甘酸っぱいうめの味わいが楽しめます。",
            "likes": 0,
            "flavor": 3
        },
        {
            "id": 4,
            "name": "パイン　塩スイカアメ",
            "price": 178,
            "imgUrl": "https://www.family.co.jp/content/dam/family/goods/4733850.jpg",
            "detail": "熊本県産のスイカ果汁を使用した、ちょっぴり塩味のきいた、ジューシーなスイカ味のキャンディです。パインアメシリーズです。",
            "likes": 0,
            "flavor": 3
        },
        .
        .
        .
        略
    ]
}
```

<br>

### お菓子Top10を返すAPI


```
curl http://localhost:8000/snack/all
```


<br>


### らーめんを1つ返すAPI


```
curl http://localhost:8000/ramen/random
```


response example


```
{
    "message": "success",
    "data": {
        "id": 7,
        "name": "ソース焼そば",
        "price": 198,
        "imgUrl": "https://www.family.co.jp/content/dam/family/goods/3815281.jpg",
        "detail": "ウスターソースと中濃ソースをブレンドし、ポークエキスの旨みを加えた風味豊かな焼そばソースが特徴です。別添で「からしマヨネーズ」付きです。"
    }
}
```


## reference
- [Clean Architecture を用いた go + gin のバックエンド (API) 構築](http://psychedelicnekopunch.com/archives/1308)
