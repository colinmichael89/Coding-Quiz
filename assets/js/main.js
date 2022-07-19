// when user clicks "Start Game"
// welcome message and start button disappear
// first question appears - multiple choice (4 clickable answers)
// timer starts (for (let i = 60; i > 0; i--)) else - game ends

// when an answer is clicked:
// if answer is correct - display "Correct" beneath line under question - delay - next question presented
// else time is deducted (10 sec) - "wrong" displayed beneath question - delay - next question presented
// if there are no more quetions - game ends

// variable declaration
var secondsLeft = 76;

var currentQuestion = 0;

var currentScore = 0;

let questionsEl = document.getElementById("questions");

let showAnswers = document.querySelector("#showAnswer");

var questionArea = document.querySelector(".questiions");

var correctIncorrect = document.getElementById;

var initialsInput = document.querySelector(".initials");

var submitButton = document.querySelector(".submit");

var scoresEl = document.querySelector(".view-scores");

var timerEl = document.querySelector(".timer-count");

var startButton = document.querySelector(".start-button");

var goBack = document.getElementById("go-back");

var rightWrong = document.getElementById("correct-incorrect");

var clearScores = document.getElementById("clear-scores");

var highScores = document.getElementById("high-scores");

var highScoresArray = [];

const questionsArray = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<header>"],
    correctAnswer: "<script>",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onclick", "onmouseclick", "onchange", "onmouseover"],
    correctAnswer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: ["variable carName", "v carName", "var carName", "Variable"],
    correctAnswer: "var carName",
  },
  {
    question: "JavaScript is a ______ -side programming language.",
    answers: ["Client", "Server", "Both", "None"],
    correctAnswer: "Both",
  },
  {
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    answers: ["Catch", "Label", "Try", "Default"],
    correctAnswer: "Deafult",
  },
];

// functions
function hideQuestions() {
  var questionArea = document.querySelector(".question-container");
  questionArea.setAttribute("style", "display:none");
}

function hideWelcome() {
  var welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.setAttribute("style", "display:none");
}

function showWelcome() {
  var welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.setAttribute("style", "display:block");
}

function hideInitials() {
  var hideInitialsContainer = document.querySelector(".initials-container");
  hideInitialsContainer.setAttribute("style", "display:none");
}

function showInitials() {
  var showInitialsContainer = document.querySelector(".initials-container");
  showInitialsContainer.setAttribute("style", "display:block");
}

function showScores() {
  var showScores = document.querySelector(".high-scores-box");
  showScores.setAttribute("style", "display:block");
}

function hideScores() {
  var hideScores = document.querySelector(".high-scores-box");
  hideScores.setAttribute("style", "display:none");
}

function displayScore() {
  console.log(currentScore);
  console.log(initialsInput.value);
}
function displayQuestion() {
  if (currentQuestion > questionsArray.length - 1) {
    endGame();
  } else {
    questionsEl.textContent = questionsArray[currentQuestion].question;

    showAnswers.innerHTML = "";

    for (let index = 0; index < 4; index++) {
      let answerChoice = document.createElement("li");

      answerChoice.textContent = questionsArray[currentQuestion].answers[index];

      showAnswers.append(answerChoice);
    }
  }
}
var timerInterval;

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "";
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      {
        endGame();
      }
    }
  }, 1000);
}

function endGame() {
  var scoreEl = document.querySelector(".your-score");
  var score = secondsLeft;

  scoreEl.textContent = score;
  timerEl.textContent = 0;
  clearInterval(timerInterval);
  showAnswers.innerHTML = "";
  questionsEl.innerHTML = "";
  rightWrong.innerHTML = "";
  showInitials();
}

// Event Listeners
goBack.addEventListener("click", () => {
  hideScores();
  showWelcome();
});

clearScores.addEventListener("click", () => {
  localStorage.clear();
  hideScores();
  showWelcome();
  // renderLocalstorage(listItem);

  // var points = document.querySelector("#high-scores");
  // points.appendChild("");
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = initialsInput.value.trim();
  var userScore = secondsLeft;

  if (initialsInput === "") {
    var enterInitials = document.getElementById("enter-initials");
    enterInitials.textContent = "What do we call you?";
    // showInitials();
  } else {
    renderLocalstorage();
    var initScore = initials + " " + userScore;
    highScoresArray.push(initScore);

    localStorage.setItem("highScoresArray", JSON.stringify(highScoresArray));

    showHighScore(highScoresArray);
    hideInitials();
    showScores();
  }
});

function showHighScore(array) {
  for (var i = 0; i < array.length; i++) {
    var userEntry = array[i];
    var listItem = document.createElement("li");

    listItem.textContent = userEntry;
    highScores.appendChild(listItem);
  }
}
function renderLocalstorage() {
  var localstorageArray = JSON.parse(localStorage.getItem("highScoresArray"));
  console.log(localstorageArray);
  if (localstorageArray !== null) {
    highScoresArray = localstorageArray;
  }
}

// function timeFunction() {
//   setTimeout(function () {
//     console.log("delay");
//   }, 1000);
// }

// Attach event listener to start button to call
startButton.addEventListener("click", () => {
  hideWelcome();
  // currentQuestion needs to be set back to 0 (index)
  secondsLeft = 75;
  currentQuestion = 0;
  setTime();
  displayQuestion();
});

scoresEl.addEventListener("click", () => {
  hideWelcome();
  showScores();
  hideInitials();
  hideQuestions();
});

showAnswers.addEventListener("click", function (event) {
  if (
    event.target.textContent === questionsArray[currentQuestion].correctAnswer
  ) {
    // text appears below - correct - delay then next question
    rightWrong.textContent = "Correct!";
    currentQuestion++;
    displayQuestion();
  } else {
    rightWrong.textContent = "Incorrect";
    secondsLeft = secondsLeft - 10;
    currentQuestion++;
    // timeFunction();
    displayQuestion();
    // text appears below - incorrect - delay then next question
  }
});
hideScores();
hideInitials();
