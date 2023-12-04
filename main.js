const bingoArea = document.getElementById("bingoArea");

const BNumber = Math.floor(Math.random() * 14) + 1;
const INumber = Math.floor(Math.random() * 15) + 15;
const NNumber = Math.floor(Math.random() * 15) + 30;
const GNumber = Math.floor(Math.random() * 15) + 45;
const ONumber = Math.floor(Math.random() * 15) + 60;

let arr = [];
let numRange = [15, 30, 45, 60, 75];
let length = 5;

for (let g = 0; g < 5; g++) {
  arr.push(Math.floor(Math.random() * numRange[0]));
  console.log(arr);
}

for (let i = 0; i < 5; i++) {
    const bingoNumRow = document.createElement("tr");
    bingoArea.appendChild(bingoNumRow);
       
    for (let j = 0; j < 5; j++) {
        const bingoNumber = document.createElement("td");
        bingoNumRow.appendChild(bingoNumber);
        bingoNumber.className = j;
        bingoNumber.textContent = arr[j];
        
    }

}


