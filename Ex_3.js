// Задание 3
// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.

let a = 5;

function getSum(num) {
  let b = 7;
  return function () {
    let result = num + b;
    return result;
  }
}

let sum = getSum(a);
console.log(sum());

