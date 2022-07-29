import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const question = getRandomNumber(0, 10);

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
