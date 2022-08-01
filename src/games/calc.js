import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`unknown operand state: '${operator}'!`);
  }
};

const generateRound = () => {
  const operators = ['-', '+', '*'];
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operandNumber = getRandomNumber(0, operators.length - 1);

  const randomOperand = operators[operandNumber];

  const question = `${number1} ${randomOperand} ${number2}`;

  const answer = calculate(randomOperand, number1, number2).toString();
  return [question, answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
