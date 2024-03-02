/* 厳格モードとなり、コードをより厳密な基準で解釈する */
"use strict";
var exports = {};
/* 問題 */
const questions = [
    "customer","servant","display","president","delivery","interview","receipt","enginner","dealer","path",
    "court","copyright","consultant","composer","secretary","seminar","laborer","message","journalist","employer",
    "lawyer","librarian","license","mall","performer","memo","receptionist","motorcycle","officer","operator",
    "owner","package","pamphlet","manager","attire","bookkeeper","telegram","blueprint","bonus","tour",
    "cashier","chairman","ballroom","auditorium","clerk","cash","guideline","appendix","grain","attorney",
    "goodwill","audit","firsthand","governor","agency","install","initiative","inhabitant","absentee","accountant",
    "headline","index","anniversary","identification","agenda","amateur","highlight","headquarters","harvest","indirect",
    "discount","chamber","commission","commitment","commuter","congressman","corporate","correspondence","cancel","brokerage",
    "brochure","breakdown","boycott","deposit","exchange","electrician","banquet","bargain","bid","debit",
    "enrollment","diplomat","employee","director","bond","educator","earnings","duplicate","distributor","extension",
    "commander","upcoming","refund","landlord","trade","internal","recruit","pharmacy","unemployment","tenant",
    "update","questionnaire","quarterly","utilities","province","superintendent","rear","secondhand","skyscraper","sightseeing",
    "supplier","shorthand","shipping","stockholder","registration","scandal","symposium","saving","retail","resort",
    "vessel","session","recipient","mechanics","predecessor","manufacturer","maestro","luncheon","lottery","reduction",
    "liability","millionaire","developer","exclusive","lawsuit","itinerary","invoice","inventory","lodging","peddler",
    "veteran","personnel","vice-president","pension","peer","pedestrian","minister","patron","warehouse","wholesale",
    "outdoors","option","workshop","visa","tariff","gratuity","supervise","dividend","infringement","obituary",
    "incur","nominal","fiscal","overdue","exempt","endorse","cuisine","petty","smuggle","proximity",
    "quota","deficit","defer","curtail","reimburse","remit","complimentary","jury","celebrity","perjury",
    "accommodate","afford","cater","colleague","delighted","donate","eliminate","estate","facility","insurance",
    "luggage","publicity","remove","proceed","regulate","resume","skyrocket","tidy","typo","waive",
];

const Japanese =[
    "客","使用人","(商品の)陳列","社長","配達","面接","領収書","技術者","貿易業者","歩道",
    "裁判所","著作権","コンサルタント","作曲家","秘書","研究会","作業員","伝言","ジャーナリスト","雇用者",
    "弁護士","図書館員","免許","モール","役者","メモ","受付係","オートバイ","役人","操作者",
    "所有者","梱包","パンフレット","経営者","衣装","帳簿係","電報","青写真","特別手当","視察",
    "勘定係","議長","(ホテルなどの)舞踊場","講堂","事務員","現金","指針","付録","穀物","弁護士",
    "親善","会計監査","直接に","州知事","代理店","取り付ける","進取の精神","居住者","欠席者","会計士",
    "大見出し","索引","記念日","身分証明","議題","素人","呼び物","本部","収穫","間接的な",
    "割引","集会場","手数料","委託","通勤者","下院議員","法人組織の","文通","取り消す","仲介手数料",
    "パンフレット","故障","不買運動","貯金する","両替する","電気技術者","宴会","有利な取引","入札","借方",
    "入会","修了証書","従業員","重役","拘束","教育学者","収入","複製する","販売代理店","(電話の)内線",
    "命令者","近く発表の","返済金","家主","商売","国内の","新入社員","薬局","失業","賃借人",
    "最新式にする","アンケート","年4回の","電気","州","管理者","背後","中古の","超高層ビル","観光",
    "部品製造業者","速記","船積み","株主","登録","スキャンダル","座談会","貯金","小売","行楽地",
    "船","会合","受取人","機構","前任者","製造業者","大家","昼食","宝くじ","割引",
    "負債","大金持ち","宅地開発業者","独占的な","訴訟","旅行計画","送り状","在庫調べ","宿泊","行商人",
    "退役軍人","人事課","副社長","年金","同僚","歩行者","大臣","顧客","倉庫","卸売り",
    "野外で","選択権","職場","ビザ","関税表","こころづけ","監督する","(株の)配当","法律違反","死亡記事",
    "(損害などを)招く","名目上の","会計の","支払期限を過ぎた","免除する","裏書する","料理","ささいな","密輸入する","近接",
    "割り当て","欠損","延期する","節減する","弁償する","送金する","無料の","陪審","名士","偽証",
    "収容する","余裕がある","料理を調達する","同僚","喜んで","贈与する","除く","財産","設備","保険",
    "旅行鞄","世間の注目","移動させる","続行する","取り締まる","再び初める","打ち上げ花火","きちんとした","誤植","放棄する",
]

//htmlの1行すべてを読み込んでいる
const Countdown = document.getElementById("Countdown");
const Timelimit = document.getElementById("Timelimit");
const score = document.getElementById("Score");
const japanese = document.getElementById("japanese");
const entered = document.getElementById("entered");
const remained = document.getElementById("remained");
const inputText = document.getElementById("inputText");
const game = document.getElementById("game");
const message = document.getElementById("message");
const scoreResult = document.getElementById("scoreResult");
const home = document.getElementById("home");


//splitは文字を分割している 
//textContentは、spanタグの中身を取得している
let remainedTextWords = remained.textContent.split('');
//入力済みの配列
let enteredTextWords = [];
let currentKey;
let currentText;
//日本語の問題の番号を入れる変数
let japaneseText;
//カウントダウン用の変数
let currentCount = 60;
//得点用の変数
let currentScore = 0;
//最終得点用の変数 
let totalScore = 0;   


//新しい問題文をランダムにセットする関数
const setQuestion = () => {
    //配列[question]から、ランダムで問題文を1つ選ぶ
    currentKey = Math.floor( Math.random() * questions.length );
    currentText = questions[ currentKey ];
    japaneseText = Japanese[ currentKey ];
    //得点の表記
    Score.textContent = "得点：" + currentScore;
    totalScore = currentScore;
    console.log(totalScore);
    currentScore++;

    //一度選ばれた問題は配列から削除
    questions.splice(currentKey, 1);
    Japanese.splice(currentKey, 1);
    console.log(questions);
    console.log(Japanese);

    //現在の問題文をリセットして、新しい問題文を表示させる
    //画面に新しい問題文をリセット
    entered.textContent = "";
    remained.textContent = currentText; 
    japanese.textContent = japaneseText;

    //フォームを初期化する
    inputText.value = "";

    //入力済みの文字、未入力の文字の配列の中身をリセット
    enteredTextWords = [];
    remainedTextWords = currentText.split("");
};

//ページを読み込んだ際に表示させる問題文を生成する
setQuestion();


//カウントダウンの処理内容
Countdown.textContent = "制限時間：" + currentCount;
function executeMultipleTimeouts() {
    setTimeout(function() {
        if (currentCount == 1) {              
            var finalResult = document.createTextNode("あなたの得点は" + totalScore + "点です！");
            scoreResult.appendChild(finalResult);
            game.classList.add("hidden");//ゲーム画面を非表示
            message.classList.remove("hidden");//終了メッセージ表示
            return;
        }else if(currentCount >= 2 && currentCount <= 4){
            //elseの中の処理を見えないようにしている
            document.getElementById("Countdown").style.display = "none";
            currentCount--;
            Timelimit.textContent = "制限時間：" + currentCount;
            executeMultipleTimeouts();
        } else {
            //console.log(currentCount);
            currentCount--;
            Countdown.textContent = "制限時間：" + currentCount;
            // 次のsetTimeoutを設定して再帰的に呼び出す
            executeMultipleTimeouts();
        }
    }, 1000); // 1秒後に実行
}

// カウントダウンの関数の最初の呼び出し
executeMultipleTimeouts();


//"input"なのでフォームに値が入力された時の処理である
//eにinputで入力された値が代入されている
document.addEventListener("input", (e) => {
    //dataは入力された文字だけを取得することができるもの 
    if(remainedTextWords[0] === e.data){

        //入力済み文字の配列の最後に1文字追加
        enteredTextWords.push(remainedTextWords[0]);
        //未入力文字(問題文)の配列の先頭から1文字削除
        remainedTextWords.shift();

        //入力済みテキスト＆未入力テキストを連結して画面表示(joinはsplitの反対のイメージ)
        entered.textContent = enteredTextWords.join('');
        remained.textContent = remainedTextWords.join('');

        //全ての文字が正しく入力されたら新しい問題文をセット
        if(remainedTextWords.length <= 0){
            if(questions.length <= 0){
                game.classList.add("hidden");//ゲーム画面を非表示
                message.classList.remove("hidden");//終了メッセージ表示
            }else{
                setQuestion();//新しい問題文をセットするための関数
            }
        }

    }
});


//ホーム画面に戻るボタン
home.addEventListener("click", () => {
    //クエリパラメータとして、totalScoreを送るre
    window.location.href = '/Home?totalScore=' + totalScore;
    //window.location.href = "../html/start.html"
});