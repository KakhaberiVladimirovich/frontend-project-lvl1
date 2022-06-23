import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const gcdt = (randomNamber1, randomNamber2) => {
  let result = '';
  let rand1 = randomNamber1;
  let rand2 = randomNamber2;

  while (rand1 !== rand2) {
    if (rand1 > rand2) {
      rand1 -= rand2;
    } else {
      rand2 -= rand1;
    }
  }
  result = rand1;
  return result;
};

const gcd = () => {
  const noteToGame = 'Find the greatest common divisor of given numbers.';

  const gcd1 = () => {
    const random1 = getRandomIn(100);
    const random2 = getRandomIn(100);
    const expression = `${random1} ${random2}`;

    return [expression, gcdt(random1, random2)];
  };
  basisOfGames(noteToGame, gcd1);
};

export default gcd;
