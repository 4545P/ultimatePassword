const minNum = document.querySelector(".minNum");
const maxNum = document.querySelector(".maxNum");
const input = document.querySelector("input");
const button = document.querySelector(".btn");


// button.addEventListener("click", function () {
//   const num = input.value;
//   minNum.innerText = num;
// })

// button.addEventListener("click", function () {
//   const num = input.value;
//   maxNum.innerText = num;
// })




let x = 0;
let y = 100;
const pwd = getRandomNumber(x, y);


function getRandomNumber(x, y) {
  return Math.floor(Math.random() * (y - x + 1) + x);
}

button.addEventListener("click", function () {
  const input = document.querySelector(".input");
  const num = Number(input.value);
  if (num === pwd) {
    window.alert("恭喜你猜對了");
  } else if (num > pwd && num < y) {
    maxNum.innerText = num;
    y = num;
  } else if (num < pwd && num > x) {
    minNum.innerText = num;
    x = num;
  }
});