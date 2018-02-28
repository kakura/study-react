# setup 

### 必要モジュールインストール

`npm install`

# watch(変更監視) 

ファイルが変更されれば、自動でトランスパイルします。

`./node_modules/.bin/webpack -w --mode development`

### Rails開発者もわざわざJSビルド用の別プロセスを起動しておかなくていいようにforemanを利用

`gem install foreman`

# Start 

これで`rails`と`webpach -w`がどちらも起動します。

`foreman start`

