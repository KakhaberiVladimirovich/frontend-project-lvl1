import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// Определение функции запроса имени
const getName = () => readlineSync.question('May I have your name? ');

// Определение функции приветствия
const PlayerName = getName();
export const greeting = () => {
  console.log(`Hello, ${PlayerName}!`);
};

// функция поиска рандомного целого числа
const getRandomInt = (max) => Math.floor(Math.random() * max);

// функция определения четности числа и спопоставления с ответом пользователя.
export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const UserNumber = getRandomInt(100);
    console.log('Question: ', UserNumber);
    const answerUser = readlineSync.question('Your answer: ');
    const option1 = (UserNumber % 2 === 0) && (answerUser === 'yes');
    const option2 = (UserNumber % 2 !== 0) && (answerUser === 'no');

    if (option1 === true || option2 === true) {
      console.log('Correct!');
    } else if (answerUser === 'yes') {
      return console.log(`"yes" is wrong answer .\n Correct answer was "no". Let's try again, ${PlayerName}!`);
    } else if (answerUser === 'no') {
      return console.log(`"no" is wrong answer .\n Correct answer was "yes". Let's try again, ${PlayerName}!`);
    } else if (answerUser !== 'no' || answerUser !== 'yes') {
      return console.log('you entered an invalid answer, the answer can be "yes" or "no"');
    }
  }
  return console.log(`Congratulations, ${PlayerName}!`);
};
