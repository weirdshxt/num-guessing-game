// let h3 = document.querySelector(".user");
// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let name = input.value;
//   h3.textContent = `Hello, ${name}!`;

//   input.value ="";

//    max();
// });

// let maxRange = 0;

// function max() {

//     input.placeholder = "Enter your max Range number.....";
//     input.type = "number";

//     btn.addEventListener("click", ()=>{
//         let maxRange = input.value;
//         console.log(maxRange);
//         let random = Math.floor(Math.random() * maxRange) + 1;

//         input.placeholder = "Guess the number!";
//         btn.innerText="Guess";

//         h3.textContent = `Your random number is ${random}`
//         });

//     }

let h3 = document.querySelector(".user");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let userName;
let maxRange;
let randomNumber;
let score = 0;

btn.addEventListener("click", () => {
  if (!userName) {
    userName = input.value;
    h3.innerText = `Hello, ${userName}!`;
    input.value = "";

    input.placeholder = "Enter your max Range number.....";
    input.type = "number";
    btn.innerText = "Set Max Range";
  } else if (!maxRange) {
    maxRange = parseInt(input.value);
    input.value = "";

    input.placeholder = "Guess the number!";
    btn.innerText = "Guess";

    randomNumber = Math.floor(Math.random() * maxRange) + 1;
    h3.innerText = `Guess a number between 1 and ${maxRange}!`;
  } else {
    let userGuess = parseInt(input.value);
    input.value = "";

    if (userGuess === randomNumber) {
      h3.innerHTML = ` Congratulations, ${userName}!<br>You guessed the number!`;

      document.querySelector("#score").innerText = `Score : ${randomNumber}`;
      document.querySelector("#msge").innerText = `Thank you for playing ${userName}!`;

      btn.disabled = true;
    } else if (userGuess < randomNumber) {
      h3.innerText = `Too low, ${userName}! Try again!`;

      gameFlash(wrng);
      falseGame(wrong);
    } else {
      h3.innerText = `Too high, ${userName}! Try again!`;

      gameFlash(wrng);
      falseGame(wrong);
    }
  }
});

let wrng = document.querySelector("#popup");

function gameFlash(wrng) {
  wrng.classList.add("alert");
  wrng.innerText = "WRONG!";

  setTimeout(function () {
    wrng.classList.remove("alert");
    wrng.innerText = "";
  }, 200);
}

let wrong = document.querySelector("#popup2");

function falseGame(wrong) {
  wrong.classList.add("alert");
  wrong.innerText = "WRONG!";

  setTimeout(function () {
    wrong.classList.remove("alert");
    wrong.innerText = "";
  }, 200);
}

let refreshBtn = document.querySelector("#refresh-btn");

refreshBtn.addEventListener("click", refreshPage);

function refreshPage() {
  window.location.reload();
}
