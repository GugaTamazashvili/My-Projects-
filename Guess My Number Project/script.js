'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// SOS: Functions

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// NOTE: Check button

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // NOTE: When there is no input

  if (!guess) {
    displayMessage(`⛔⛔⛔ No Number!`);

    // NOTE: When player wins
  } else if (guess === secretNumber) {
    displayMessage(
      `🎉 Congratulations! ${secretNumber} is the correct Nunmber`
    );
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // NOTE: HighScore

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `📈 That's High!` : `📉 That's Low!`
      );

      score--;
      document.querySelector(`.score`).textContent = score;

      // NOTE: When player loses
    } else {
      displayMessage(`😦 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = `#FF0000`;
      document.querySelector(`.number`).style.width = `30rem`;
    }
  }
});

// NOTE: Again button

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
