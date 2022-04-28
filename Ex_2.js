// Задание 2
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
// определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.

let num = 111;
checkPrime(num);

function checkPrime(num) {
  if (num > 1000 || num < 0) {
    console.log("данные неверны");
  } else if (num === 0 || num === 1) {
    console.log("число не является простым или составным")
  } else {
    let flag = true;
    for (let i = 2; i < num; i++) {
      let remainder = num % i;
      if (remainder === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      console.log("число является простым")
    } else {
      console.log("число не является простым")
    }
  }
}

