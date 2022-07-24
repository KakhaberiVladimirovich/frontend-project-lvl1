import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const getEquation = (randomOperand, number1, number2) => {
  let result = 0;
  switch (randomOperand) {
    case '-':
      result = number1 - number2;
      break;
    case '+':
      result = number1 + number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`unknown operand state: '${randomOperand}'!`);
  }
  return result;
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operandNumber = getRandomNumber(0, 3);

  const operand = ['-', '+', '*'];
  const randomOperand = operand[operandNumber];

  const expression = `${number1} ${randomOperand} ${number2}`;

  const resultString = getEquation(randomOperand, number1, number2).toString();
  return [expression, resultString];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
