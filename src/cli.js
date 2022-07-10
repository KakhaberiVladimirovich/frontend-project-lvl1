import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};
export default getName;
