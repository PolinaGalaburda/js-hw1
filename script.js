"use strict";

// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

/* const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = userNames.map(name => {
  const nameParts = name.split(' '); // Розбиваємо ім'я на окремі частини по пробілам
  const initials = nameParts.map(part => part[0]).join('.'); // Витягуємо першу літеру кожної частини та об'єднуємо їх крапками
  return initials;
});

initials.sort(); // Сортуємо ініціали в алфавітному порядку

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
*/

// 2. Задача на фільтрування масиву

// (через умовну конструкцію) за допомогою циклу for та умовного оператора if

/* const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
for (let i = 0; i < userNames.length; i++) {
   const firstLetter = userNames[i][0].toLowerCase(); // отримуємо першу літеру кожного імені, а потім перетворюємо її на нижній регістр за допомогою методу 'toLowerCase()'

   if (['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'].includes(firstLetter)) {
      filteredNames.push(userNames[i]);
   }
   // Умова if перевіряє, чи перша літера належить до масиву голосних літер ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'].
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
*/

// (через вбудований метод масивів)

/* const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

const filteredNames = userNames.filter(name => {
   const firstLetter = name[0].toLowerCase(); // отримуємо першу літеру кожного імені, а потім перетворюємо її на нижній регістр за допомогою методу 'toLowerCase()'
   return ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'].includes(firstLetter); // маємо масив з голосними літерами. Функція includes() перевіряє, чи входить отримана перша літера (firstLetter) у цей масив.
});

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена'];
*/

// 3. Задача на розворот числа

/* const currentMaxValue = 4589;
let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));
// currentMaxValue.toString(): перетворює змінну currentMaxValue в рядкове значення для того, щоб мати можливість застосувати методи рядків, такі як split() (перетворює рядок на масив цифр), reverse() (перевертає порядок елементів у масиві) та join() (отримуємо рядок, у якому цифри числа знаходяться в зворотньому порядку).

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'
*/

// 4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
// за допомогою методів масиву flat() та reduce()

/* const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const calculateProduct = (arr) => {
  productOfArray = arr.flat(Infinity).reduce((product, element) => product * element, 1);
};
// 'flat(Infinity)' - перетворення вкладених масивів на масив з одним рівнем глибини, [1, 2, [3, [4]]].flat(Infinity) поверне [1, 2, 3, 4]
// 'reduce()' - використовується для обчислення добутку елементів масиву, '(product, element) => product * element' виконує множення кожного елемента масиву на акумулятор product

calculateProduct(resultsArray); // виконується розрахунок добутку елементів масиву
console.log(productOfArray); // 24
*/
