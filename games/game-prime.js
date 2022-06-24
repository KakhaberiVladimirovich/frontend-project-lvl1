import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const primeNamb = (random) => {
  let rool = true;
  if (random === 1) {
    return rool;
  }
  for (let i = 2; i < random; i += 1) {
    if (random % i === 0) {
      rool = false;
      break;
    }
  }
  return rool;
};
const prime = () => {
  const noteToGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeNumber = () => {
    const randomnumber = getRandomIn(10);

    let result = '';
    if (primeNamb(randomnumber) === true) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [randomnumber, result];
  };
  basisOfGames(noteToGame, primeNumber);
};

export default prime;
