import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = (startingNumber, step, length) => {
  const consistency = [];
  for (let i = 0; i < length; i += 1) {
    const nextNumber = startingNumber + step * [i];
    consistency.push(nextNumber);
  }
  return consistency;
};

const generateRound = () => {
  const startingNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const length = 10;
  const randomIndex = getRandomNumber(0, length - 1);

  const progression = getProgression(startingNumber, step, length);

  const answer = progression[randomIndex].toString();
  const question = progression;
  question[randomIndex] = '..';
  return [question.join(' '), answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
