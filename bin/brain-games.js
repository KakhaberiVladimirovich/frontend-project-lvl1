#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// Ждем ответ пользователя и добавляем его в приветствие.
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!`);
