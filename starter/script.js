'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Love you all';
document.querySelector('.guess').value = 50;
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫No number!';
    displayMessage('🚫No number!');
  } //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct number!';
    displayMessage('🎉Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  }
  //when player not guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📈Too low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📈Too low!');
    } else {
      //document.querySelector('.message').textContent = '💥you loose the game!';
      displayMessage('💥you loose the game!');
    }
  } //when guess to high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📈Too high!';
  //   } else {
  //     document.querySelector('.message').textContent = '💥you loose the game!';
  //   }

  // } //when guess to low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📈Too low!';
  //   } else {
  //     document.querySelector('.message').textContent = '💥you loose the game!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
