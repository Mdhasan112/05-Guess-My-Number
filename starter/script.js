'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Love you all';
document.querySelector('.guess').value = 50;
*/
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉Too low!';
  }
});
