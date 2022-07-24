import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = (number1, number2, long) => {
  const consistency = [number1];
  let nextNumber = number1;
  for (let i = 0; i <= long; i += 1) {
    nextNumber += number2;
    consistency.push(nextNumber);
  }
  return consistency;
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const long = 10;

  const result = getProgression(number1, number2, long);
  const resultString = result.splice(number1, 1, '..').toString();
  const joinString = result.join(' ');
  return [joinString, resultString];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
