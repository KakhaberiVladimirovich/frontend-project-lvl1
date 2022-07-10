import play from '../index.js';
import getRandomIn from '../helpers.js';

const getGenerateRound = (randomNamber1, randomNamber2, long) => {
  const consistency = [randomNamber1];
  let nextNumber = randomNamber1;
  for (let i = 0; i <= long; i += 1) {
    nextNumber += randomNamber2;
    consistency.push(nextNumber);
  }
  const result = consistency.splice(randomNamber1, 1, '..');
  const resultString = result.toString();
  const str = consistency.join(' ');
  return [str, resultString];
};

const startGame = () => {
  const description = 'What number is missing in the progression?';

  const substituteARandomNumber = () => {
    const random1 = getRandomIn(10);
    const random2 = getRandomIn(10);

    return getGenerateRound(random1, random2, 10);
  };

  play(description, substituteARandomNumber);
};

export default startGame;
