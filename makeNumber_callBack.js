//Для реализации использовано: callBack + рекурсия
'use strict'
const askQuestion = function  (userNumber = null, number) {
  
    //Сверяем введенное пользователем число с выбранным случайно:
    switch (true) {
        case userNumber === null:
            break;                      
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
    
    //Запрашиваем новое число:
    const readline = require('node:readline');
    const { stdin: input, stdout: output } = require('node:process');
    const rl = readline.createInterface({ input, output });
     
    rl.question('Отгадайте число от 0 до 100? (a/abort прервать): ', (answer) => {        
        rl.close();
        askQuestion(answer, number); //Рекурсивный вызов      
        });
}

const max = 100;
const min = 0;
const number = Math.floor(Math.random() * (max - min + 1)) + min
askQuestion(null, number);

