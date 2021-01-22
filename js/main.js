const quizData = [
  {
    question: "What is the most used javascript framework?",
    a: "Angular",
    b: "React",
    c: "Vue",
    d: "Ember",
    correct: "b",
  },
  {
    question: "Who created javascript?",
    a: "Guido van Rossum",
    b: "John Resig",
    c: "Brendan Eich",
    d: "Douglas Crockford",
    correct: "c",
  },
  {
    question: "When react was released?",
    a: "2012",
    b: "2014",
    c: "2016",
    d: "2013",
    correct: "d",
  },
  {
    question: "Which platform isn't built with React?",
    a: "Facebook",
    b: "Gmail",
    c: "Myntra",
    d: "Discord",
    correct: "b",
  },
  {
    question: "Which year html released?",
    a: "2000",
    b: "1998",
    c: "1995",
    d: "1993",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");

let currentQuiz = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  dSelectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function dSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuestion();
    } else {
      // Showing the result
      quiz.innerHTML = `
      <h2 class="quiz-result">Your score is ${score} / ${quizData.length}</h2> 
      <button class="quiz-btn" onclick="location.reload()">Reload</button>`;
    }
  }
});
