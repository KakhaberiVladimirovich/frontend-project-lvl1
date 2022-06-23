import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const gcdt = (randomNamber1, randomNamber2) => {
  let resultS = '';
  let rand1 = randomNamber1;
  let rand2 = randomNamber2;

  while (rand1 !== rand2) {
    if (rand1 > rand2) {
      rand1 -= rand2;
    } else {
      rand2 -= rand1;
    }
  }
  resultS = rand1;
  return resultS;
};

const gcd = () => {
  const noteToGame = 'Find the greatest common divisor of given numbers.';

  const gcd1 = () => {
    const random1 = getRandomIn(100);
    const random2 = getRandomIn(100);
    const expression = `${random1} ${random2}`;
    const result = gcdt(random1, random2);
    return [expression, result];
  };
  basisOfGames(noteToGame, gcd1);
};

export default gcd;
