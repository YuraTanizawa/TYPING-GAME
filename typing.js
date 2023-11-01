//Node.jsのhttpモジュールの読み込み
var http = require("http");
//expressフレームワークの読み込み
var express = require("express");

var app = express();
//サーバの作成
var server = http.createServer(app);
//静的ファイルの提供を有効にし、クライアントに提供可能な状態を作っている。
//dirnameは現在のディレクトリを表表している
app.use(express.static(__dirname));

//コールバック関数で調べる(resにはhtmlファイルが入っているはず)
app.get("/", function (req, res) {
    return res.sendFile(__dirname + "/html/start.html");
});

app.get("/GameScreen", function (req, res) {
    return res.sendFile(__dirname + "/html/GameScreen.html");
});

//サーバーが特定のポートでリクエストを受け付けるように設定
server.listen(8000);