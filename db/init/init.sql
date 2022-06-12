-- DB切り替え
\c "omikuji"

--テーブルを作成
CREATE TABLE "snack" (
  "id"      SERIAL NOT NULL, 
  "name"    VARCHAR(255) NOT NULL,
  "price"   INTEGER NOT NULL,
  "img_url" VARCHAR(255) NOT NULL,
  "detail"    VARCHAR(255) NOT NULL,
  "likes"   INTEGER NOT NULL,
  PRIMARY KEY("id")
);

-- --テーブルにデータを挿入
-- INSERT INTO snack (name,price,img_url) 
-- VALUES ('test',100,'https://google.com',0);

-- INSERT INTO snack (name,price,img_url) 
-- VALUES ('test2',100,'https://google.com',1);

-- INSERT INTO snack (name,price,img_url) 
-- VALUES ('test3',100,'https://google.com',2);
