import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = (startingNumber, step, length) => {
  const consistency = [];
  for (let stepNumber = 0; stepNumber < length; stepNumber += 1) {
    const nextNumber = startingNumber + step * [stepNumber];
    consistency.push(nextNumber);
  }
  return consistency;
};

const generateRound = () => {
  const startingNumber = getRandomNumber(0, 10);
  const progressionLength = getRandomNumber(0, 10);
  const length = 10;

  const progression = getProgression(startingNumber, progressionLength, length);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex].toString();
  const question = progression;
  question[randomIndex] = '..';
  return [question.join(' '), answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
