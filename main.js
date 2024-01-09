// allNumArraysという配列を初期化
const allNumArr = [];
const table = document.getElementById("bingoArea");
const PlusRowNum = [1, 16, 31, 46, 61];
const tdArr = [];

const randomNumberFactory = function (i) {
  let randomNumber;

  while (true) {
    randomNumber = Math.floor(Math.random() * 15) + PlusRowNum[i];

    if (!allNumArr.includes(randomNumber)) {
      allNumArr.push(randomNumber);
      break;
    }
  }
  return randomNumber;
};

// for文で5回繰り返す処理を記述
const AllRandomnumber = () => {
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < 5; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      const randomNumber = randomNumberFactory(j);
      td.id = `num${i}-${j}`;
      tdArr.push({ id: td.id, num: randomNumber });
      td.textContent = randomNumber;

      if (j === 2 && i === 2) {
        td.className = "colorChange";
        td.textContent = "FREE";
      }
    }
  }
};

//domからとってきて数値を確認する方法も考える
const startBtn = document.querySelector(".startBtn");

const numberAleat = function () {
  startBtn.addEventListener("click", function () {
    const hitNum = Math.floor(Math.random() * 75) + 1;
    alert(`数字は${hitNum}です！`);

    const tdFind = tdArr.find((tdObj) => {
      return tdObj.num === hitNum;
    });

    if (tdFind) {
      document.getElementById(tdFind.id).className = "colorChange";
    }
  });
};

AllRandomnumber();
numberAleat();
