import getBasisOfGames from '../index.js';
import getRandomIn from '../random.js';

const getTaskcalc = (randomNamber1, randomNamber2, long) => {
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

const startGame = () => {
  const noteToGame = 'What number is missing in the progression?';

  const substituteARandomNumber = () => {
    const random1 = getRandomIn(10);
    const random2 = getRandomIn(10);

    return getTaskcalc(random1, random2, 10);
  };

  getBasisOfGames(noteToGame, substituteARandomNumber);
};

export default startGame;
