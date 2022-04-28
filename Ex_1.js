// Задание 1
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.

let arr = [0, 0, "2f", 2, 1, -1];
let countZero = 0;
let countOdd = 0;
let countEven = 0;

checkParity(arr);

function checkParity(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    } else {
      let parityСhecker = arr[i] % 2;
      if (parityСhecker === 0) {
        countEven++;
      } else if (typeof (arr[i]) === "number" && parityСhecker !== 0) {
        countOdd++;
      }
    }
  }
  console.log(`Odd: ${countOdd}, Even: ${countEven}, Zero: ${countZero}`)
}

