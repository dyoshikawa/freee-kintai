# 動作要件

- Linux or OSX
- Docker 導入済

# Getting Started

```
git clone https://github.com/dyoshikawa/freee-kintai
cd freee-kintai
cp .env.example .env
```

`.env` に各項目の値を記載。
その後、

```
bash run.sh
```

を実行し、完了後、本日の出勤が登録されていることを確認する。

# 定期実行

cron を下記のように設定。

```
# 毎日19時に実行
0 19 * * * root bash -c "cd /path/to/freee-kintai && bash run.sh"
```
# 参考
- https://qiita.com/UNILORN/items/a1a3f62409cdb4256219
- https://qiita.com/tomi_shinwatec/items/a68cf7840c3da002c6e0
