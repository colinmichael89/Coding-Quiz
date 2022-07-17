// when user clicks "Start Game"
// welcome message and start button disappear
// first question appears - multiple choice (4 clickable answers)
// timer starts (for (let i = 60; i > 0; i--)) else - game ends

// when an answer is clicked:
// if answer is correct - display "Correct" beneath line under question - delay - next question presented
// else time is deducted (10 sec) - "wrong" displayed beneath question - delay - next question presented
// if there are no more quetions - game ends

// variable declaration
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

var secondsLeft = 76;

var currentQuestion = 0;

var rightWrong = document.getElementById("correct-incorrect");

var clearScores = document.getElementById("clear-scores");

const highScoresArray = [];

const questionsArray = [
  {
    question: "This is Question #1",
    answers: [
      "This is Answer #1",
      "This is Answer #2",
      "This is Answer #3",
      "This is Answer #4",
    ],
    correctAnswer: "This is Answer #1", // Test answer
  },
  {
    question: "This is Question #2",
    answers: [
      "This is Answer #1/Question#2",
      "This is Answer #2/Question#2",
      "This is Answer #3/Question#2",
      "This is Answer #4",
    ],
    correctAnswer: "This is Answer #1/Question#2", // Test answer
  },
  {
    question: "This is Question #3",
    answers: [
      "This is Answer #1/Question#3",
      "This is Answer #2/Question#3",
      "This is Answer #3/Question#3",
      "This is Answer #4/Question#3",
    ],
    correctAnswer: "This is Answer #1/Question#3", // Test answer
  },
  {
    question: "This is Question #4",
    answers: [
      "This is Answer #1/Question#4",
      "This is Answer #2/Question#4",
      "This is Answer #3/Question#4",
      "This is Answer #4/Question#4",
    ],
    correctAnswer: "This is Answer #1/Question#4", // Test answer
  },
  {
    question: "This is Question #5",
    answers: [
      "This is Answer #1/Question#5",
      "This is Answer #2/Question#5",
      "This is Answer #3/Question#5",
      "This is Answer #4/Question#5",
    ],
    correctAnswer: "This is Answer #1/Question#5", // Test answer
  },
];

// Insert question into the div question as a p tag
// Create an ordered list with answers in li
// Add data attributes to the answers with the question number and the answer

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

function scoreList() {
  var highScores = document.querySelector(".high-scores");
  //   for (let index = 0; index < 4; index++) {
  let highScore = document.createElement("li");
  highScores.highScore.textContent = highScoresArray;
  index++;
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

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
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

// function expressions
// when game ends;
// timer stops
// final question/answers disappear
// display end game content
//high score input element
// high score submit button
// store the input into local storage
// reset and return to welcome message - (hide end game content)
// resetting clears all variables
function endGame() {
  var scoreEl = document.querySelector(".your-score");
  var score = secondsLeft;

  scoreEl.textContent = score;

  showAnswers.innerHTML = "";
  questionsEl.innerHTML = "";
  rightWrong.innerHTML = "";
  showInitials();
}

// // logic
goBack.addEventListener("click", () => {
  hideScores();
  showWelcome();
});

clearScores.addEventListener("click", () => {
  localStorage.clear();
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = initialsInput.value.trim();

  highScoresArray.push(initials);

  localStorage.setItem("highSoresArray", JSON.stringify(highScoresArray));
  hideInitials();
  showScores();
});

// Attach event listener to start button to call
startButton.addEventListener("click", () => {
  hideWelcome();
  setTime();
  displayQuestion();
});

scoresEl.addEventListener("click", () => {
  hideWelcome();
  showScores();
  hideInitials();
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
    displayQuestion();
    // text appears below - incorrect - delay then next question
  }
});
hideScores();
hideInitials();
// scoresEl.addEventListener("click", viewScores);

// / Add styling to list element
// listEl.setAttribute("style", "background:#333333; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
