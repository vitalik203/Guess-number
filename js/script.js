"use strict";
const body = document.querySelector("body");
const again = document.querySelector(".header__again");
const input = document.getElementById("main__col1_input");
const check = document.querySelector(".main__col1_button");
const result = document.querySelector(".main__col2_result");
const scoreBox = document.querySelector(".main__col2_score");
const guessedNum = document.querySelector(".main__guessed_number");

again.addEventListener("click", function () {
  location.reload();
});

function generateNum() {
  return Math.floor(Math.random() * 25 + 1);
}

let score = 20;
scoreBox.innerHTML = `Кількість очок: ${score}`;
let genValue = generateNum();

console.log(genValue);

check.addEventListener("click", function () {
  let clicks = 0;
  let trying = Number(input.value);
  console.log(typeof trying);
  clicks++;
  if (trying === genValue) {
    result.innerText = "Ура, ви вгадали!!!";
    result.innerHTML = `Спроб залишилося: ${
      score - clicks < 0 ? 0 : score - clicks
    }`;
    guessedNum.innerHTML = `<h2 style="display: inline-block">${genValue}</h2> - це число яке було задумане`;
    check.removeEventListener(
      "click",
      function () {
        input.value = "";
      },
      false
    );
  } else if (trying < genValue) {
    result.innerText = "Замало";
  } else if (trying > genValue) {
    result.innerText = "Забагато";
  }
  scoreBox.innerHTML = "";
  if (trying !== genValue) {
    score--;
    scoreBox.innerHTML = `Кількість очок: ${score}`;
  }
  if (score < 1) {
    result.innerText = "Гра програна!";
    scoreBox.innerHTML = "";
  }
});
