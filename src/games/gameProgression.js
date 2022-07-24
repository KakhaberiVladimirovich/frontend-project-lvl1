import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getGenerateRound = (number1, number2, long) => {
  const consistency = [number1];
  let nextNumber = number1;
  for (let i = 0; i <= long; i += 1) {
    nextNumber += number2;
    consistency.push(nextNumber);
  }
  const result = consistency.splice(number1, 1, '..');
  const resultString = result.toString();
  const joinString = consistency.join(' ');
  return [joinString, resultString];
};

const startGame = () => {
  const substituteARandomNumber = () => {
    const number1 = getRandomNumber(0, 10);
    const number2 = getRandomNumber(0, 10);

    return getGenerateRound(number1, number2, 10);
  };

  start(description, substituteARandomNumber);
};

export default startGame;
