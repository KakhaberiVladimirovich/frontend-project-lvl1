import play from '../index.js';
import getRandomIn from '../helpers.js';

const getGenerateRound = (random) => {
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
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const substituteARandomNumber = () => {
    const randomnumber = getRandomIn(10);

    let result = '';
    if (getGenerateRound(randomnumber) === true) {
      result = 'yes';
    } else {
      result = 'no';
    }
    const resultString = result.toString();
    return [randomnumber, resultString];
  };
  play(description, substituteARandomNumber);
};

export default startGame;
