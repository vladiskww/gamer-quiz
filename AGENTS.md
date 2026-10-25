# AGENTS.md — правила проекта Gamer Quiz

## Правила
- Только HTML, CSS и vanilla JS. Без фреймворков, библиотек и сборки.
- Динамические тексты задаются через `textContent`, не через `innerHTML`, потому что `innerHTML` с текстом вопроса — дыра в безопасности и источник багов.
- Интерфейс на русском языке.
- Структура папок:
  - `index.html` — разметка экранов
  - `src/css/style.css` — стили
  - `src/js/questions.js` — банк вопросов
  - `src/js/app.js` — логика игры
  - `docs/architecture.md` — описание устройства проекта

## Роли
- **UI/UX Designer** — меняет только `style.css` и разметку в `index.html`. Логику не трогает.
- **Logic Engineer** — меняет `app.js`. Вопросы в `questions.js` не трогает.
- **Content Creator** — меняет только `questions.js` по схеме из `docs/architecture.md`.
