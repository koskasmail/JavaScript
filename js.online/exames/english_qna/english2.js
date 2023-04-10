let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: 0
  },
  {
    question: "Which is the largest ocean in the world?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2
  }
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

loadQuestion();

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;
  choicesElement.innerHTML = "";
  currentQuestionData.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => {
      submitAnswer(index);
    });
    choicesElement.appendChild(li);
  });
}

function submitAnswer(selectedAnswer) {
  const currentQuestionData = questions[currentQuestion];
  if (selectedAnswer === currentQuestionData.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";
  submitButton.style.display = "none";
  resultElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
}
