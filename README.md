# hack-camp_vol4_2022

### Date

2022/6/18 ~ 6/19

<br>

### About

[技育CAMP vol.4](https://talent.supporterz.jp/events/bb31fa1b-da48-4c57-8376-70f2e7129cd7/?utm_source=next&utm_medium=geekcamp) 用のリポジトリです

テーマは「**世の中を楽しくする**」を選びました

<img width="600px" src="https://user-images.githubusercontent.com/70263039/174615877-2af51df9-b7d1-44c1-aa26-c7f0d7de756e.png" />

<br>

結果！！

### **努力賞**を受賞しました👏👏

https://twitter.com/du_doer/status/1538491383157207040

<a href="https://twitter.com/du_doer/status/1538491383157207040">
  <img width="400px" src="https://user-images.githubusercontent.com/70263039/174616465-569b8880-440a-4625-9b4b-2d1b25f7dd56.png" />
</a>

<br>

### アプリ

このアプリは「おかし🍩」×「おみくじ」をテーマにした

#### 「おかしおみくじ」というアプリです！

<br>

### 機能

- 感情と予算から、おかしのレコメンド
- アニメーション機能
- 運がいいほどお菓子への愛を伝えられるいいね機能
- 深夜0時から2時にサイトが変貌する仕様

<br>
 
## member

<table>
  <tr>
    <th>開発人数</th>
    <td>
      5人<br>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/nisi0929"><img src="https://github.com/nisi0929.png" width="50px;" /></b>
      <b><a href="https://github.com/kai-0307"><img src="https://github.com/kai-0307.png" width="50px;" /></b>
      <b><a href="https://github.com/Meow520"><img src="https://github.com/Meow520.png" width="50px;" /></b>
      <b><a href="https://github.com/hikari-8"><img src="https://github.com/hikari-8.png" width="50px;" /></b>
    </td>
  </tr>
  <tr>
    <th>担当</th>
    <td>
      <a href="https://github.com/mahiro72">@mahiro72</a> : backend / infra <br>
      <a href="https://github.com/nisi0929">@nisi0929</a> : frontend / design <br>
      <a href="https://github.com/kai-0307">@kai-0307</a> : backend / frontend <br>
      <a href="https://github.com/Meow520">@Meow520</a> : frontend / design <br>
      <a href="https://github.com/hikari-8">@hikari-8</a> : frontend / design<br>
    </td>
  </tr>
</table>

<br>
       
## slide
       
<img width="600px" src="https://user-images.githubusercontent.com/70263039/174618357-7f17a091-3dc5-4b0d-b485-9669a12184a2.png" />

       
https://docs.google.com/presentation/d/1rMhm8yX-bwOKEwYL25DTuYTgPkUsRlQdMh0ilsdFCWU/edit#slide=id.g1334bf17701_0_423
       
<br>
        
## Getting Started

```docker-compose.env```をトップディレクトリに用意する
       
詳しくはトップディレクトリの```docker-compose.env.sample```をご覧ください

例
```
POSTGRES_USER=<USERNAME>
POSTGRES_PASSWORD=<PASSWORD>
PGPASSWORD=<PASSWORD>
POSTGRES_DB=<DBNAME>
TZ=<TIMEZONE>
PORT=<PORT>
```

<br>

## Make

docker-compose 環境を立ち上げます

```
make
```

<br>

dbやcacheは保持したまま再起動

```
make restart
```

<br>

dbやcacheも削除してから再起動

```
make re
```


<br>

docker環境のdbにアクセスします

```
make attach-db
```

<br>

lint

```
make lint
```

<br>
       
do'erからのメッセージ

```
make doer
```

<br>


## reference
- [golang+reactなアプリの開発環境をモノレポで作る](https://zenn.dev/karabiner/articles/golang_react_monorepo)
- [Webサイトのバックエンドアーキテクチャとは？](https://jp.indeed.com/career-advice/career-development/what-is-backend-web-architecture)
