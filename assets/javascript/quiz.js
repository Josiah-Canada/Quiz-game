const quizQuestions = [
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "html", correct: true },
      { text: "javascript", correct: false },
      { text: "python", correct: false },
      { text: "java", correct: false },
    ],
  },
  {
    question:
      "Which of these tags do you use to connect your javascript file to the html?",
    answers: [
      { text: "<h1>", correct: false },
      { text: "<p>", correct: false },
      { text: "<link>", correct: false },
      { text: "<script>", correct: true },
    ],
  },
  {
    question: "What is the structure of a javascript function?",
    answers: [
      { text: "var example =", correct: false },
      { text: "console.log()", correct: false },
      { text: "function Example()", correct: true },
      { text: "if () {}", correct: false },
    ],
  },
  {
    question: "where do you place the tag linking your javascript and html?",
    answers: [
      { text: "top of the body", correct: false },
      { text: "bottom of the body", correct: true },
      { text: "in the head", correct: false },
      { text: "at the very bottom", correct: false },
    ],
  },
  {
    question: "what do you call the special caps rule for javascript?",
    answers: [
      { text: "camping caps", correct: false },
      { text: "karma caps", correct: false },
      { text: "camel caps", correct: true },
      { text: "caramel caps", correct: false },
    ],
  },
  {
    question: "What do you always name your variable in a function?",
    answers: [
      { text: "a", correct: false },
      { text: "q", correct: false },
      { text: "c", correct: false },
      { text: "i", correct: true },
    ],
  },
  {
    question: "Who invented javascript?",
    answers: [
      { text: "Harriet Tubman", correct: false },
      { text: "Brenden Eich", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Tim Berners-Lee", correct: false },
    ],
  },
  {
    question: "Which of these can javascript efect?",
    answers: [
      { text: "html", correct: false },
      { text: "css", correct: false },
      { text: "neither", correct: false },
      { text: "both", correct: true },
    ],
  },
  {
    question: "What is javascripts main function?",
    answers: [
      { text: "to make things look flashy and cool", correct: false },
      { text: "to create a well structured website", correct: false },
      { text: "to make your website perform tasks", correct: true },
      { text: "to make your coffee have words on in", correct: false },
    ],
  },
  {
    question: "Is programming fun?",
    answers: [
      { text: "yes!", correct: true },
      { text: "no!", correct: false },
      { text: "maybe", correct: false },
      { text: "I dont know?", correct: false },
    ],
  },
];

const begin = document.getElementById("begin");
const next = document.getElementById("next");
const questionDiv = document.getElementById("question-div");
let questions = document.getElementById("question");
let answerButton1 = document.getElementById("answer-button1");
let answerButton2 = document.getElementById("answer-button2");
let answerButton3 = document.getElementById("answer-button3");
let answerButton4 = document.getElementById("answer-button4");

function startQuiz(quizQuestions) {
    const showFirstQuestion = quizQuestions[0]
    begin.addEventListener('click', showFirstQuestion)
}

questions.textContent = quizQuestions[0].question;

answerButton1.textContent = quizQuestions[1].answers[1];

console.log(quizQuestions[0].question);
