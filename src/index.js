import readlineSync from 'readline-sync';

const roundsCount = 3;

const play = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      const showError = () => {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
        console.log(`Let's try again, ${userName}!`);
      };
      return showError();
    }
    console.log('Correct!');
  }

  const finish = console.log(`Congratulations, ${userName}!`);
  /**  Возвращал console.log совместно с return из-за того что выскакивала ошибка линтера -
   * - ( стрелочная функция ожидает возврат значения в конце (return)).
   * Написать console.log и вернуть после этого return -
   * - появляется другая ошибка (return без значения)
   * */
  return finish;
};

export default play;
