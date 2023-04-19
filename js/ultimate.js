const minNode = document.querySelector("#min");
const maxNode = document.querySelector("#max");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const numArea = document.querySelector(".numInfo");


// button.addEventListener("click", function () {
//   const num = input.value;
//   minNum.innerText = num;
// })

// button.addEventListener("click", function () {
//   const num = input.value;
//   maxNum.innerText = num;
// })




let minNum = 1;
let maxNum = 100;
const pwd = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(pwd);

//語法糖
button.addEventListener("click", () => {

  //字串轉數字
  let guessNum = +input.value;

  //清空number
  input.value = null;

  if (guessNum < minNum || guessNum > maxNum) {
    alert("請輸入正確的數字")
    return;
  }

  if (guessNum < pwd) {
    minNum = guessNum;
    minNode.innerText = guessNum;
  }
  if (guessNum > pwd) {
    maxNum = guessNum;
    maxNode.innerText = guessNum;
  }
  if (guessNum === pwd) {
    numArea.innerHTML = `<h1>恭喜答對,${pwd}</h1>`;
  }
});