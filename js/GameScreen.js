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
        document.body.textContent = "";
        var newElement = document.createElement("div");
        newElement.textContent = "終了!"
        document.getElementById("newElement").style.classList.add("end");
        //newElement.classList.add("end");
        document.body.appendChild(newElement);
        exit;
    }
    document.getElementById("output").innerHTML = count;
    count--;
},1000)


