
project1 : color changer

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    // console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});

```
project 2 : BMI calculator

``` javascript

const form = document.querySelector('form');

form.addEventListener( 'click' , function(e){
  e.preventDefault();
height = parseInt(document.querySelector('#height').value);
weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')
if(height === '' || isNaN(height) || height === 0){
  results.innerHTML = 'Please give a valid height';
}
else if(weight === '' || isNaN(weight) || weight === 0){
  results.innerHTML = 'Please give a valid weight'; 
}
else{
 const bmi = (weight/((height*height)/10000)).toFixed(2)
 results.innerHTML = `<span>${bmi}</span>`
}
})

```

project 3 : world clock

```
const button = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  button.innerHTML = date.toLocaleTimeString();
}, 1000);

```

project 4 : Guess the number

``` javascript
let playgame = true;
let guessnumber = parseInt(Math.random() * 100 + 1);
let prevguess = [];
let numberofguess = 0;

const input = document.querySelector('#guessField');
const submitbtn = document.getElementById('subt');
const allguess = document.querySelector('.guesses');
const remaining = document.querySelector('lastResult');
const dismsg = document.querySelector('.lowOrHi');
const dispbtn = document.querySelector('#resultParas');

if (playgame) {
  submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let submitnum = parseInt(input.value);
    // console.log(submitnum);
    validateguess(submitnum);
  });
}

function validateguess(num) {
  if (isNaN(num)) {
    alert('Please enter a valid number');
  } else if (num > 100) {
    alert(`Please enter a number less than 100`);
  } else if (num < 1) {
    alert(`Please enter a number greater than 1`);
  } else {
    if (numberofguess == 11) {
      dismsg.innerHTML = `Guess limit is reached. Random number is ${guessnumber}`;
      endgame();
    } else {
      prevguess.push(num);
      numberofguess += 1;
      displaymessage(num);
    }
  }
}

function displaymessage(num) {
  allguess.innerHTML = prevguess;
  input.value = '';
  remaining.innerHTML = `${11 - numGuess}`;
  if (num > guessnumber) {
    dismsg.innerHTML = `Please enter a number less than ${num}`;
  } else if (num < guessnumber) {
    dismsg.innerHTML = `Please enter a number greater than ${num}`;
  } else {
    dismsg.innerHTML = 'Your guess is right. You won the game';
    endgame();
  }
}

function endgame() {
  input.setAttribute('disabled', '');
  let p = document.createElement('p');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  dispbtn.appendChild(p);
  allguess.innerHTML = '';
  playgame = false;
  startgame();
}

function startgame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    guessnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    dismsg.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    input.removeAttribute('disabled');
    dispbtn.removeChild(p);

    playgame = true;
  });
}



```