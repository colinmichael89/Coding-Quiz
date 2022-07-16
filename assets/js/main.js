// when page loads - welcome message - "Java Coding Quiz" with instructions how to play displayed
// "View Highscore" clickable text - top left corner
// "Time: 0 " - displayed top tight
// "Start Game" button

// when user clicks "Start Game"
// welcome message and start button disappear
// first question appears - multiple choice (4 clickable answers)
// timer starts (for (let i = 60; i > 0; i--)) else - game ends

// when an answer is clicked, the next question is presented
// if answer is correct - next question presented
// else time is deducted (15 sec), next question presented
// if there are no more quetions - game ends

// when game ends;
// timer stops
// final question/answers disappear
// display end game content
//high score input element
// high score submit button
// store the input into local storage
// reset and return to welcome message - (hide end game content)
// resetting clears all variables

// variable declaration
var timerEl = document.querySelector(".timer-count");

var highScore = document.querySelector(".win");

var startButton = document.querySelector(".start-button");

var secondsLeft = 61;

// function clearTimer() {
//   var clear = document.querySelector(".timer-count");
//   clear.textContent = " ";
// }

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "";
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      {
        console.log("game over..");
        // Calls function to send message
        sendMessage();
      }
    }
  }, 1000);
}

// function expressions

function sendMessage() {
  alert("game over..");
}

// custom functions - event listeners

// logic

// Attach event listener to start button to call
startButton.addEventListener("click", setTime);

// Can attach multtiple funtions to single event listener
// startButton.addEventListener("click", () => {
//     invokeMe();
//     alsoInvokeMe();
// });
