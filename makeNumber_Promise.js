//Для реализации использовано: Промисы, async/await
'use strict'

//Генерирует случайно число в заданном диапазоне:
const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//Запрашивает у пользователя число:
const getUserNumber = async () => {
  const readline = require('node:readline/promises');
  const { stdin: input, stdout: output } = require('node:process');
  const rl = readline.createInterface({ input, output });
  const number= await rl.question('Отгадайте число от 0 до 100? (a/abort прервать): ');
  rl.close();
  return number;
 } 

 //Основной блок программы
 const main = async () => {
 const number = generateNumber (1, 100) // генерируем число
 let userNumber = 0
do {
      //Запрашиваем у пользователя число:
      userNumber = await getUserNumber();
      //Сверяем введенное пользователем число с выбранным случайно:
      switch (true) {
        case userNumber == 'a' || userNumber == 'abort':
          return;                      
        case +userNumber == number:
          console.log(`Верно, было загадано число: ${number}`);
          return;
        case userNumber < number:
          console.log('Больше.');
          break;
        case userNumber > number:
          console.log('Меньше.');
          break;
        default: 
          console.log('Нужно указывать числовое значение.');
      }
         
   }
while (number !== userNumber)
  }

main();