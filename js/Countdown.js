/* 厳格モードとなり、コードをより厳密な基準で解釈する */
"use strict";

let count = 3;
let imageURL = "../picture/" + count + ".png";
let picture = document.getElementById("picture");
picture.src = imageURL;
count--;

setInterval(() => {
    if(count == 0){
        window.location.href = "../html/GameScreen.html";
        //処理を終了
        return;
    }
    imageURL = "../picture/" + count + ".png";
    picture = document.getElementById("picture");
    picture.src = imageURL;
    count--;
},1000)