import basisOfGames from '../index.js';
import getRandomIn from '../random.js';

const GetgeneralFormulaPrime = (random) => {
  let rool = true;
  if (random === 0 || random === 1) {
    rool = false;
  } else if (random === 2) {
    rool = true;
  } else {
    for (let i = 2; i < random; i += 1) {
      if (random % i === 0) {
        rool = false;
        break;
      }
    }
  }
  return rool;
};
const Getprime = () => {
  const noteToGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = () => {
    const randomnumber = getRandomIn(10);

    let result = '';
    if (GetgeneralFormulaPrime(randomnumber) === true) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [randomnumber, result];
  };
  basisOfGames(noteToGame, isPrime);
};

export default Getprime;
