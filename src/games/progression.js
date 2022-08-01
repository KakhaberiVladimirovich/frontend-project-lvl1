import start from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = (startingNumber, step, length) => {
  const consistency = [];
  for (let stepNumber = 0; stepNumber < length; stepNumber += 1) {
    const nextNumber = startingNumber + step * stepNumber;
    consistency.push(nextNumber);
  }
  return consistency;
};

const generateRound = () => {
  const startingNumber = getRandomNumber(0, 10);
  const progressionStep = getRandomNumber(0, 10);
  const progressionLength = 10;

  const progression = getProgression(startingNumber, progressionStep, progressionLength);
  const randomIndex = getRandomNumber(0, progressionStep - 1);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  return [progression.join(' '), answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
