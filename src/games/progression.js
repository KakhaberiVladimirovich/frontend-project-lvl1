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
  const step = getRandomNumber(0, 10);
  const progressionLength = 10;

  const progression = getProgression(startingNumber, step, progressionLength);
  const randomIndex = getRandomNumber(0, step - 1);
  const answer = progression[randomIndex].toString();
  const question = progression;
  question[randomIndex] = '..';
  return [question.join(' '), answer];
};

const startGame = () => {
  start(description, generateRound);
};

export default startGame;
