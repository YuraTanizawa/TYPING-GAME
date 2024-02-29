//Node.jsのhttpモジュールの読み込み
var http = require("http");
//expressフレームワークの読み込み
var express = require("express");
var ejs = require("ejs")
var app = express();
//サーバの作成
var server = http.createServer(app);
var score = 0;

//mysqlだとthrow err; // Rethrow non-MySQL errorsのエラーが出る
const mysql = require('mysql2');

//mysqlの接続を作成している
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '05Lineyura',
  //データベースと接続をしている(データベース名)
  database: "ranking_db"
});

//mysqlに接続しようとしている
con.connect(function(err) {
	if (err) throw err;
	console.log('Connected');
});


//静的ファイルの提供を有効にし、クライアントに提供可能な状態を作っている。
//dirnameは現在のディレクトリを表表している
app.use(express.static(__dirname));

app.set("view engine", "ejs");

//コールバック関数で調べる(resにはhtmlファイルが入っているはず)
app.get("/", function (req, res) {
    var sql = "SELECT * FROM ranking ORDER BY score DESC LIMIT 5"
    con.query(sql, function (err, result, fields){
        if (err) throw err;
        res.render('start',{rank:result});
        //res.render(__dirname + "/html/start.html",{ranking:result});
    });
    //return res.sendFile(__dirname + "/html/start.html");
});


app.get("/GameScreen", function (req, res) {
    return res.sendFile(__dirname + "/html/countdown.html");
});


app.get("/Home", function (req, res) {
    //クエリパラメータを取得
    score = req.query.totalScore;
    console.log(score);
    var sql = "INSERT INTO ranking (name,score) VALUES('tanizawa', ?)"
    con.query(sql, [score], function (err, result, fields){
        if (err) throw err;
        console.log(result)
    });

    //limitで5行までに制限している
    sql = "SELECT * FROM ranking ORDER BY score DESC LIMIT 5"
    //sql = "SELECT * FROM ranking ORDER BY id"
    con.query(sql, function (err, result, fields){
        if (err) throw err;
        console.log(result)
        res.render('start',{rank:result});
        //res.render(__dirname + "/html/start.html",{ranking:result});
    });
    //return res.sendFile(__dirname + "/html/start.html");
});


//サーバーが特定のポートでリクエストを受け付けるように設定
server.listen(8000);


//SELECT * FROM ranking ORDER BY score DESC

/*
//データを取得している
const sql = "select * from ranking"
//テーブルを作成している
//const sql = "CREATE TABLE ranking (score INT NOT NULL)";
//データベースに値を代入している
//INSERT INTO users (id, name, email) VALUES (1,"hogehoge","hogehoge");

データベースを作成している処理(1回作ったからもう一度する必要はない)
con.query("create database express_db", function(err, result){
if (err) throw err;
    console.log("database created");
});
*/