import play from '../index.js';
import getRandomIn from '../helpers.js';

// noteToGameCalc(Вопрос задачи),  taskCalc(вопрос, Решение)(решение задачи), Random1/Random2

const startGame = () => {
  const description = 'What is the result of the expression?';

  const getGenerateRound = () => {
    const random1 = getRandomIn(10);
    const random2 = getRandomIn(10);

    const operand = ['-', '+', '*'];
    const randomoperand = operand[getRandomIn(3)];

    const expression = `${random1} ${randomoperand} ${random2}`;

    let result = 0;
    switch (randomoperand) {
      case '-':
        result = random1 - random2;
        break;
      case '+':
        result = random1 + random2;
        break;
      case '*':
        result = random1 * random2;
        break;
      default:
        result = null;
    }
    const resultString = result.toString();
    return [expression, resultString];
  };
  play(description, getGenerateRound);
};

export default startGame;
