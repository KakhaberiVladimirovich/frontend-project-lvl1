import getBasisOfGames from '../index.js';
import getRandomIn from '../random.js';

const getTaskcalc = (random) => {
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
const startGame = () => {
  const noteToGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const substituteARandomNumber = () => {
    const randomnumber = getRandomIn(10);

    let result = '';
    if (getTaskcalc(randomnumber) === true) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [randomnumber, result];
  };
  getBasisOfGames(noteToGame, substituteARandomNumber);
};

export default startGame;
