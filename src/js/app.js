// Основная логика приложения: состояние игры, DOM и случайная сборка раунда.

const QUESTIONS_PER_ROUND = 5;

// --- Элементы страницы ---
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const explanationScreen = document.getElementById('explanation-screen');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const counterEl = document.getElementById('counter');
const scoreEl = document.getElementById('score');
const comboEl = document.getElementById('combo');
const questionTextEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options');
const verdictEl = document.getElementById('verdict');
const explanationTextEl = document.getElementById('explanation-text');
const finalScoreEl = document.getElementById('final-score');

// --- Состояние игры ---
let round = [];
let currentIndex = 0;
let score = 0;
let comboStreak = 0;

// Показывает один экран и прячет остальные.
function showScreen(screen) {
  [startScreen, questionScreen, explanationScreen, resultScreen].forEach((s) => {
    s.classList.remove('active');
  });
  screen.classList.add('active');
}

// Перемешивает копию массива и возвращает первые count элементов.
function pickRandom(list, count) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function startGame() {
  round = pickRandom(QUESTIONS, QUESTIONS_PER_ROUND);
  currentIndex = 0;
  score = 0;
  comboStreak = 0;
  renderQuestion();
}

function renderQuestion() {
  const q = round[currentIndex];
  counterEl.textContent = `${currentIndex + 1}/${round.length}`;
  scoreEl.textContent = `Очки: ${score}`;
  comboEl.textContent = `Комбо: ${comboStreak}`;
  questionTextEl.textContent = q.question;

  optionsEl.textContent = '';
  q.options.forEach((text, index) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = text;
    btn.addEventListener('click', () => handleAnswer(index));
    optionsEl.appendChild(btn);
  });

  showScreen(questionScreen);
}

function handleAnswer(chosenIndex) {
  const q = round[currentIndex];
  const isCorrect = chosenIndex === q.answer;

  if (isCorrect) {
    comboStreak++;
    score += 10 * comboStreak;
    verdictEl.textContent = comboStreak > 1 ? `Верно! Комбо x${comboStreak}` : 'Верно!';
  } else {
    comboStreak = 0;
    verdictEl.textContent = `Неверно. Правильный ответ: ${q.options[q.answer]}`;
  }

  explanationTextEl.textContent = q.explanation;
  btnNext.textContent = currentIndex === round.length - 1 ? 'Узнать результат' : 'Следующий вопрос';
  showScreen(explanationScreen);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < round.length) {
    renderQuestion();
  } else {
    finalScoreEl.textContent = `Твой счёт: ${score}`;
    showScreen(resultScreen);
  }
}

btnStart.addEventListener('click', startGame);
btnNext.addEventListener('click', nextQuestion);
btnRestart.addEventListener('click', startGame);
