--ユーザーの作成
CREATE USER doer;

--DBの作成
CREATE DATABASE doer;

--ユーザーにDBの権限をまとめて付与
GRANT ALL PRIVILEGES ON DATABASE doer TO doer;

--ユーザーを切り替え
\c doer

--テーブルを作成
CREATE TABLE okashi (
  id    integer, 
  name  varchar(30)
);

--テーブルにデータを挿入
INSERT INTO okashi (id,name)
 SELECT 
     i, format('okashi_%s', i)
 FROM
     generate_series(1,1000) as i
;

