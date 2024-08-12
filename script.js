'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }

  // When Player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won!';
    document.querySelector('.message').style.color = '#60b347';
    document.querySelector('.message').style.fontSize = '4.6rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.message').style.color = 'red';
      document.querySelector('.message').style.fontSize = '4.6rem';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is high
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.message').style.color = 'red';
      document.querySelector('.message').style.fontSize = '4.6rem';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.restart').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').style.color = '#dfa800';
  document.querySelector('.message').style.fontSize = '1.8rem';
});
