'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log((document.querySelector('.guess').value = 23));
document.querySelector('.guess').value;*/

//Manipulating CSS styles
//Changing the background to green when the correct number is picked. The dash notation on CSS when there is two words doesnt work for javaScript so it adopts the camel case instead (background color)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Higher!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Lower!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
