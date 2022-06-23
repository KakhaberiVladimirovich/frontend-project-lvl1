import readlineSync from 'readline-sync';

const basisOfGames = (noteToGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // задача игры
  console.log(noteToGame);

  // Общий цикл включающий в себя 3 игры
  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('Question:', pairOfQuestionAndResult[0]);
    const answerUser = readlineSync.question('Your answer: ');

    // Правильный ответ
    const rightAnswer = pairOfQuestionAndResult[1].toString();

    // Проверка
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default basisOfGames;
