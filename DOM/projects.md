
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

project 3 : Guess the number

``` javascript



```