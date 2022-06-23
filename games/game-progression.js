import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const ArithmeticProgression = (randomNamber1, randomNamber2, long) => {
  const consistency = [randomNamber1];
  let nextNumber = randomNamber1;
  for (let i = 0; i <= long; i += 1) {
    nextNumber += randomNamber2;
    consistency.push(nextNumber);
  }
  const resultt = consistency.splice(randomNamber1, 1, '..');
  const str = consistency.join(' ');
  return [str, resultt];
};

const progression = () => {
  const noteToGame = 'What number is missing in the progression?';

  const taskcalc = () => {
    const random1 = getRandomIn(10);
    const random2 = getRandomIn(10);

    return ArithmeticProgression(random1, random2, 10);
  };

  basisOfGames(noteToGame, taskcalc);
};

export default progression;
