import getBasisOfGames from '../index.js';
import getRandomIn from '../random.js';

const getTaskcalc = (randomNamber1, randomNamber2) => {
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

const startGame = () => {
  const noteToGame = 'Find the greatest common divisor of given numbers.';

  const substituteARandomNumber = () => {
    const random1 = getRandomIn(100);
    const random2 = getRandomIn(100);
    const expression = `${random1} ${random2}`;
    const result = getTaskcalc(random1, random2);
    return [expression, result];
  };
  getBasisOfGames(noteToGame, substituteARandomNumber);
};

export default startGame;
