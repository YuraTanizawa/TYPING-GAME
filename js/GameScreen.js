var count = 5;
/* 
setInterval(() => {
    if(count == 0){
        //画面をクリア
        document.body.textContent = "";
        //新しい要素を作成
        var newElement = document.createElement("div");
        newElement.textContent = "終了!";
        newElement.style.textAlign = "center";
        //ページに要素を追加
        document.body.appendChild(newElement);
        exit;
    }
    document.getElementById("output").innerHTML = count;
    count--;
},1000)
*/
setInterval(() => {
    if(count == 0){
        //画面をクリア
        document.body.textContent = "";
        //HTMLのdivタグを表している
        var newElement = document.createElement("div");
        //表示したい文字を代入している
        newElement.textContent = "終了!"
        //HTMLのdivタグに名前を追加→cssで変更することができる
        newElement.classList.add("end");
        //div要素がbody要素に追加される
        document.body.appendChild(newElement);
        //処理を終了
        exit;
    }
    var CountElement = document.createElement("div");
    CountElement.textContent  = count;
    CountElement.classList.add("count");
    document.body.textContent = "";
    document.body.appendChild(CountElement);
    count--;
},1000)