import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const prime = () => {
  const noteToGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeNumber = () => {
    const randomnumber = getRandomIn(100);

    const num = randomnumber;

    let rool = true;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        rool = false;
        break;
      }
    }
    let result = '';
    if (rool === true) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [randomnumber, result];
  };
  basisOfGames(noteToGame, primeNumber);
};

export default prime;
