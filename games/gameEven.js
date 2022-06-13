import basisOfGames from '../src/index.js';
import getRandomIn from '../src/random.js';

const yesAndNo = () => {
  const noteToGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskcalc = () => {
    const randomnumber = getRandomIn(10);

    let result = '';
    switch (randomnumber % 2 === 0) {
      case true:
        result = 'yes';
        break;
      case false:
        result = 'no';
        break;
      default:
        result = 'you entered an invalid answer, the answer can be "yes" or "no"';
    }
    return [randomnumber, result];
  };
  basisOfGames(noteToGame, taskcalc);
};

export default yesAndNo;
