import readlineSync from 'readline-sync';

const play = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [Question, Result] = generateRound();
    console.log('Question:', Question);
    const answerUser = readlineSync.question('Your answer: ');

    const rightAnswer = Result;

    if (answerUser !== rightAnswer) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default play;
