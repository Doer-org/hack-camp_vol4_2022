# hack-camp_vol4_2022


<br>

<!-- ## member
- @mahiro72
- @kengo__du
- @react0307
- @meow_520
- @kanbarusuruga07
 -->
 
## member
<table>
  <tr>
    <th>開発人数</th>
    <td>
      5人<br>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
<!--       <b><a href="https://github.com/knknk98"><img src="https://github.com/knknk98.png" width="50px;" /></b>
      <b><a href="https://github.com/zwwaa-ku"><img src="https://github.com/zwwaa-ku.png" width="50px;" /></b>
      <b><a href="https://github.com/yuta-ike"><img src="https://github.com/yuta-ike.png" width="50px;" /></b> -->
    </td>
  </tr>
  <tr>
    <th>担当</th>
    <td>
      <a href="https://github.com/mahiro72">@mahiro72</a> : aaaaa <br>
      <a href="https://github.com/mahiro72">@mahiro72</a> : aaaaa <br>
      <a href="https://github.com/mahiro72">@mahiro72</a> : aaaaa <br>
      <a href="https://github.com/mahiro72">@mahiro72</a> : aaaaa <br>
      <a href="https://github.com/mahiro72">@mahiro72</a> : aaaaa <br>
<!--       <a href="https://github.com/knknk98">@knknk98</a> : フロントエンド(UI)<br>
      <a href="https://github.com/zwwaa-ku">@Nobuaki-M</a> : フロントエンド(UI)<br>
      <a href="https://github.com/yuta-ike">@yuta-ike</a>：メンター、アイデア出し、一部フロントエンドの実装<br> -->
    </td>
  </tr>
</table>


<br>

## Getting Started

```docker-compose.env```をトップディレクトリに用意する

例
```
POSTGRES_USER=<USERNAME>
POSTGRES_PASSWORD=<PASSWORD>
PGPASSWORD=<PASSWORD>
POSTGRES_DB=<DBNAME>
TZ=<TIMEZONE>
```


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

do'erからのメッセージ

```
make doer
```

<br>


## reference
- [golang+reactなアプリの開発環境をモノレポで作る](https://zenn.dev/karabiner/articles/golang_react_monorepo)
- [Webサイトのバックエンドアーキテクチャとは？](https://jp.indeed.com/career-advice/career-development/what-is-backend-web-architecture)
- ...
