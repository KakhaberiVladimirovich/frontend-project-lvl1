import play from '../index.js';
import getRandomIn from '../helpers.js';

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGenerateRound = () => {
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
    const resultString = result.toString();
    return [randomnumber, resultString];
  };
  play(description, getGenerateRound);
};

export default startGame;
