import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomnumber) => (randomnumber % 2 === 0);

const generateRound = () => {
  const randomnumber = getRandomNumber(0, 10);

  const result = isEven(randomnumber) ? 'yes' : 'no';

  return [randomnumber, result];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
