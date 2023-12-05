// bingoAreaという変数にid名bingoAreaの要素を取得
const bingoArea = document.getElementById("bingoArea");

// allNumArraysという配列を初期化
let allNumArrays = [];

// numRangeという変数に15を代入
let numRange = 15;

// for文で5回繰り返す処理を記述
for (let i = 0; i < 5; i++) {
    // arrという定数に配列を宣言、都度初期化させて5回分の配列の値を保持させる
const arr = [];

// for文で5回繰り返す処理
for (let j = 0; j < 5; j++) {
    // randomNumberという変数を定義
    let randomNumber;

    // do while文で25回繰り返し処理する
    do {
      // 変数randoumNumberにnumRange(15)をかけた値にi(0-4)×numRange(15)を足し、1を足す
      // randomNumber = (ランダムに生成された数値(0-1の間)：例えば0.4) * numRange(15) (= 6) + i(0) * numRange(15) (= 0) + 1 =7 
      // これを5回、5配列分繰り返す
      randomNumber = Math.floor(Math.random() * numRange) + i * numRange + 1;

      // 数値の重複を確認
      // 配列arrにrandomNumberの数値が入って行く中で、同じ数値
    } while (arr.includes(randomNumber));

    // do-whileのループ文を抜けた後じゃないと重複の確認ができないらしい
    arr.push(randomNumber);
}

allNumArrays.push(arr);
}

for (let i = 0; i < 5; i++) {
  const bingoNumRow = document.createElement("tr");
  bingoArea.appendChild(bingoNumRow);
  bingoNumRow.className = `Row${i}`;

  for (let j = 0; j < 5; j++) {
    bingoNumber = document.createElement("td");
    bingoNumRow.appendChild(bingoNumber);
    bingoNumber.className = `num${j} bingoNumber`;
    bingoNumber.textContent = allNumArrays[j][i];
  }
}

const freeArea = document.querySelectorAll("td");
freeArea[12].textContent = "FREE";
freeArea[12].style.backgroundColor = "gray";

const startBtn = document.querySelector(".startBtn");
const bingoNumbers = document.querySelectorAll(".bingoNumber");

let hitNumArr = [];

startBtn.addEventListener("click", function () {
  hitNumArr = [];

  for (let j = 1; j < 76; j++) {
    let hitNum;

    do {
      hitNum = Math.floor(Math.random() * 75) + 1;
    } while (hitNumArr.includes(hitNum));

    hitNumArr.push(hitNum);
  }

  alert(`数字は${hitNumArr[hitNumArr.length - 1]}です！`);

  bingoNumbers.forEach((bingoNumber) => {
    if (bingoNumber.textContent == hitNumArr[hitNumArr.length - 1]) {
      bingoNumber.style.backgroundColor = "gray";
    }
  });
});

