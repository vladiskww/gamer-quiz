// Банк вопросов. answer — индекс правильного варианта (счёт с 0).
const QUESTIONS = [
  {
    question: 'Как зовут главного героя The Witcher 3?',
    options: ['Геральт из Ривии', 'Цири', 'Лютик', 'Йеннифэр'],
    answer: 0,
    explanation: 'Геральт из Ривии — ведьмак, охотник на чудовищ и главный герой всей трилогии.'
  },
  {
    question: 'В какой игре есть блоки, крипер и Эндер-дракон?',
    options: ['Terraria', 'Minecraft', 'Roblox', 'Fortnite'],
    answer: 1,
    explanation: 'Minecraft. Крипер — зелёный монстр, который взрывается рядом с игроком.'
  },
  {
    question: 'Какая компания создала серию The Legend of Zelda?',
    options: ['Sony', 'Sega', 'Nintendo', 'Capcom'],
    answer: 2,
    explanation: 'Nintendo. Первая Zelda вышла в 1986 году.'
  },
  {
    question: 'Как называется вымышленный город в GTA V?',
    options: ['Вайс-Сити', 'Либерти-Сити', 'Лос-Сантос', 'Сан-Фиерро'],
    answer: 2,
    explanation: 'Лос-Сантос — пародия на Лос-Анджелес.'
  },
  {
    question: 'Сколько игроков в одной команде в стандартном матче CS2?',
    options: ['4', '5', '6', '10'],
    answer: 1,
    explanation: 'Пять на пять: команда атаки против команды защиты.'
  },
  {
    question: 'Какой персонаж — талисман Sega?',
    options: ['Марио', 'Соник', 'Крэш', 'Спайро'],
    answer: 1,
    explanation: 'Ёжик Соник появился в 1991 году как ответ Nintendo и Марио.'
  },
  {
    question: 'В какой игре нужно собирать души, а смерть — обычное дело?',
    options: ['Dark Souls', 'FIFA', 'The Sims', 'Tetris'],
    answer: 0,
    explanation: 'Dark Souls знаменита сложностью: после смерти теряешь души и должен вернуться за ними.'
  },
  {
    question: 'Как называется режим в Fortnite, где остаётся один победитель?',
    options: ['Deathmatch', 'Battle Royale', 'Capture the Flag', 'Co-op'],
    answer: 1,
    explanation: 'Battle Royale: 100 игроков, зона сужается, побеждает последний выживший.'
  },
  {
    question: 'Как зовут маленького рыцаря-жука из Hollow Knight?',
    options: ['Рыцарь', 'Хорнет', 'Зот', 'Квиррел'],
    answer: 0,
    explanation: 'Главного героя Hollow Knight так и зовут — Рыцарь. Хорнет — его сестра и соперница.'
  },
  {
    question: 'В какой инди-игре нужно выращивать урожай на ферме деда?',
    options: ['Terraria', 'Stardew Valley', 'Celeste', 'Hades'],
    answer: 1,
    explanation: 'Stardew Valley: герой уходит из офиса и восстанавливает старую ферму деда.'
  },
  {
    question: 'Какая игра — про скалолазку Мадлен и гору?',
    options: ['Undertale', 'Cuphead', 'Celeste', 'Limbo'],
    answer: 2,
    explanation: 'Celeste — платформер о том, как Мадлен поднимается на гору и справляется с тревогой.'
  }
];