// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//     пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//     необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.
// После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
  }
}

console.log(numbers);

for (const item of numbers) {
  total += item;
}
console.log(`Общая сумма чисел равна ${total}`);
