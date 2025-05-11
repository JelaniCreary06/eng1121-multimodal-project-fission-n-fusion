let currentQuestion = 0, score = 0, shuffledChoices = [];
const correctSound = document.getElementById("correct-sound"), wrongSound = document.getElementById("wrong-sound");

function startGame() {
  if (document.getElementById('easy').checked) questions = questions.concat(easyQuestions);
  if (document.getElementById('medium').checked) questions = questions.concat(mediumQuestions);
  if (document.getElementById('hard').checked) questions = questions.concat(hardQuestions);
  if (questions.length == 0) {
    alert("Choose easy, medium or hard questions! You can also choose a mix!");
    restartQuiz();
  }

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  shuffleQuestions();
  showQuestion();
  document.getElementById("total").innerText = questions.length;
}

function showQuestion() {
  let q = questions[currentQuestion], choices = document.getElementById("choices");

  document.getElementById("question-title").innerText = q.q;
  document.getElementById("current").innerText = currentQuestion + 1;
  choices.innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("explanation").classList.add("hidden");
  document.getElementById("explanation").innerText = "";

  shuffledChoices = q.a.map((text, index) => ({ text, index }));
  for (let i = shuffledChoices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
  }

  shuffledChoices.forEach((choice, displayIndex) => {
    let btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => checkAnswer(displayIndex);
    choices.appendChild(btn);
  });

  document.getElementById("progress-bar").style.width = ((currentQuestion) / questions.length * 100) + "%";
}

function checkAnswer(selectedDisplayIndex) {
  let q = questions[currentQuestion];
  const selectedOriginalIndex = shuffledChoices[selectedDisplayIndex].index;

  document.querySelectorAll(".choices button").forEach((btn, idx) => {
    const originalIdx = shuffledChoices[idx].index;
    btn.className = originalIdx === q.c ? "correct" : idx === selectedDisplayIndex ? "wrong" : "";
  });

  if (selectedOriginalIndex === q.c) {
    score++;
    document.getElementById("feedback").innerText = "Correct!";
    correctSound.play();
  } else {
    document.getElementById("feedback").innerText = `Wrong! Correct answer: ${q.a[q.c]}`;
    wrongSound.play();
  }

  document.getElementById("score").innerText = score;
  document.getElementById("explanation").classList.remove("hidden");
  document.getElementById("explanation").innerText = q.exp || "";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else showSummary();
  
}

function showSummary() {
  document.getElementById('total-questions').textContent = questions.length;
  document.getElementById('correct-answers').textContent = score;
  document.getElementById('final-score').textContent = ((score / questions.length) * 100).toFixed(1);
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('end-screen').classList.remove('hidden');
}

function restartQuiz() {
  location.reload();
}

document.getElementById('easy').checked = true;
document.getElementById('medium').checked = true;
document.getElementById('hard').checked = true;

document.getElementById("restart-button").style.display = "inline-block";
document.getElementById("restart-button").addEventListener("click", () => {
  document.getElementById("restart-button").style.display = "none";
  restartQuiz();
});

document.getElementById("summary-button").addEventListener("click", () => {
  showSummary();
})