import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const gcd = () => {
  const noteToGame = 'Find the greatest common divisor of given numbers.';

  const taskcalc = () => {
    const random1 = getRandomIn(100);
    const random2 = getRandomIn(100);
    const expression = `${random1} ${random2}`;

    let result = '';
    let Number1 = random1;
    let Number2 = random2;
    while (Number1 !== Number2) {
      if (Number1 > Number2) {
        Number1 -= Number2;
      } else {
        Number2 -= Number1;
      }
    }
    result = Number1;
    return [expression, result];
  };
  basisOfGames(noteToGame, taskcalc);
};

export default gcd;
