# hack-camp_vol4_2022


<br>

## member
- @mahiro72
- @kengo__du
- @react0307
- @meow_520
- @kanbarusuruga07


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
