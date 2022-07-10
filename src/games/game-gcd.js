import play from '../index.js';
import getRandomIn from '../helpers.js';

const getGenerateRound = (randomNamber1, randomNamber2) => {
  let algebraicFormula = '';
  let rand1 = randomNamber1;
  let rand2 = randomNamber2;

  while (rand1 !== rand2) {
    if (rand1 > rand2) {
      rand1 -= rand2;
    } else {
      rand2 -= rand1;
    }
  }
  algebraicFormula = rand1;
  return algebraicFormula;
};

const startGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const substituteARandomNumber = () => {
    const random1 = getRandomIn(100);
    const random2 = getRandomIn(100);
    const expression = `${random1} ${random2}`;
    const result = getGenerateRound(random1, random2);
    const resultString = result.toString();
    return [expression, resultString];
  };
  play(description, substituteARandomNumber);
};

export default startGame;
