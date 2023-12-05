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
        // 変数randoumNumberにnumRange(15)をかけて
        randomNumber = Math.floor(Math.random() * numRange) + i * numRange + 1;
    } while (arr.includes(randomNumber));
    arr.push(randomNumber);
}

allNumArrays.push(arr);
}

for (let i = 0; i < 5; i++) {
  const bingoNumRow = document.createElement("tr");
  bingoArea.appendChild(bingoNumRow);
  bingoNumRow.className = `Row${i}`;

  for (let j = 0; j < 5; j++) {
    const bingoNumber = document.createElement("td");
    bingoNumRow.appendChild(bingoNumber);
    bingoNumber.className = `num${j}`;
    bingoNumber.textContent = allNumArrays[j][i];
  }
}

const freeArea = document.querySelectorAll("td");
freeArea[12].textContent = "FREE";
