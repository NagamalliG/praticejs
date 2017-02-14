// Your JavaScript goes here
var randomNumber = Math.floor(Math.random() * 10) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

//pratice
var myNumber = [123, 124];
var add = { abc: '1234' };
var bool = true;
var num = 1.8;
var bigmouth = 'I\'ve got no right to take my place...';
var myString = 'abc';
var myNum = Number(myString);
var browserType = 'mozilla     ';

var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myarr = myData.split(',');
console.log('myarr=' + myarr[0]);
var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray.pop(); //delete the latest value in any arry
myArray.push('Cardiff'); //put new data into an arry
myArray.unshift('London'); // move the spcified the value to one step back
myArray.shift(); // move the unshift  value to one step forward
console.log('myArray=' + myArray);
random[0] = 'malli';
console.log(random);
console.log(random[2][1]);
console.log(browserType.indexOf('zilla'));
console.log(browserType.length - 1);
console.log(browserType[0]);
console.log(typeof(myNum));
console.log(bigmouth);
console.log(typeof(myNumber));
console.log(typeof(add));
console.log(typeof(bool));
console.log(typeof(num));