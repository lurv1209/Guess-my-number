'use strict';

let secretNum = Math.trunc(20 * Math.random() + 1);
let score = 20;
let highscore = 0;

function checkAnswer() {
  let guessedNum = document.querySelector('.guess').value;

  if (!guessedNum || guessedNum == 0) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (Number(guessedNum) === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNum;
    //document.getElementsByClassName('.check').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.newHighScore').textContent = '🏆 New Highscore!';
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    score--;
    document.querySelector('.score').textContent = score;

    if (document.querySelector('.score').textContent <= 0) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😕 Game Over!';
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('body').style.backgroundColor = '#F10000';
    } else {
      if (guessedNum < secretNum) {
        document.querySelector('.message').textContent = '⬆ Higher!';
      } else {
        document.querySelector('.message').textContent = '⬇ Lower!';
      }
    }
  }
}

function resetGame() {
  score = 20;
  secretNum = Math.trunc(20 * Math.random() + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.newHighScore').textContent = '';
}

document.querySelector('.check').addEventListener('click', checkAnswer);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
