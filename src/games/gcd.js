import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (randomNumber1, randomNumber2) => {
  if (randomNumber1 !== 0) {
    getGCD(randomNumber2 % randomNumber1);
  }
  return randomNumber2.toString();
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const result = getGCD(number1, number2);
  const answer = result.toString();
  return [question, answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
