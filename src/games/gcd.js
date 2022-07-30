import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (number1, number2) => (number1 !== 0 ? nod(number2 % number1, number1) : number2);

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const result = nod(number1, number2);
  const answer = result.toString();
  return [question, answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
