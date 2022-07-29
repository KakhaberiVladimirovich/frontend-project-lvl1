import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (randomNumber1, randomNumber2) => {
  let algebraicFormula = '';
  let number1 = randomNumber1;
  let number2 = randomNumber2;

  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  algebraicFormula = number1;
  return algebraicFormula;
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
