import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = (number) => {
  let result = true;
  if (number < 2) {
    result = false;
  } else if (number === 2) {
    result = true;
  } else {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
};

const startGame = () => {
  const substituteARandomNumber = () => {
    const randomnumber = getRandomNumber(0, 10);

    const result = generateRound(randomnumber) ? 'yes' : 'no';

    return [randomnumber, result];
  };
  start(description, substituteARandomNumber);
};

export default startGame;
