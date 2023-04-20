//Дан масив 

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25,-37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1.Знайти суму та кількість позитивних елементів.

let result = 0;
let positiveN = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positiveN.push(array[i]);
        result += array[i];
    }
}
console.log('Сума позитивних елементів у масиві: ', result, 'Кількість позитивних елементів у масиві: ', positiveN.length);

//2.Знайти мінімальний елемент масиву та його порядковий номер.

let minElement = array[0, 0];
let elementN = (0, 0);

    for (i = 0; i < array.length; i++)
    {
        for (j = 0; j < array.length; j++)
        {
            if (minElement > array[i, j])
            {
                minElement = array[i, j];

                indexMin = (i, j);
            }
        }
    }

let minObj  = Math.min(...array);
console.log('Порядковий номер мінімального елементу масиву: ', indexMin, 'Мінімальний елемент масиву: ', minObj);  

//3.Знайти максимальний елемент масиву та його порядковий номер.

let maxElement = array[0, 0];
let elementMaxN = (0, 0);

    for (i = 0; i < array.length; i++)
    {
        for (j = 0; j < array.length; j++)
        {
            if (maxElement < array[i, j])
            {
                maxElement = array[i, j];

                indexMax = (i, j);
            }
        }
    }

let maxObj  = Math.max(...array);
console.log('Порядковий номер максимального елементу масиву: ', indexMax, 'Максимальний елемент масиву: ', maxObj);

//4.Визначити кількість негативних елементів.

let negativeN = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeN.push(array[i]);
    }
}
console.log('Кількість негативних елементів у масиві: ', negativeN.length);

//5.Знайти кількість непарних позитивних елементів.

let numbers = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        if (array[i] > 0) {
            numbers.push(array[i]);
        } 
    }
}
console.log('Кількість непарних позитивних елементів в масиві: ', numbers.length);

//6.Знайти кількість парних позитивних елементів.

let numbersEven = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        if (array[i] > 0) {
            numbersEven.push(array[i]);
        } 
    }
}
console.log('Кількість парних позитивних елементів в масиві: ', numbersEven.length);

//7.Знайти суму парних позитивних елементів.

let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        if (array[i] > 0) {
            sum += array[i];
        } 
    }
}
console.log('Сума парних позитивних елементів: ', sum);

//8.Знайти суму непарних позитивних елементів.

let sumUnP = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        if (array[i] > 0) {
            sumUnP += array[i];
        } 
    }
}
console.log('Сума непарних позитивних елементів: ', sumUnP);

//9.Знайти добуток позитивних елементів.

let resultSum = 1;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positiveN.push(array[i]);
        resultSum = resultSum * array[i];
    }
}
console.log('Добуток позитивних елементів масива: ', resultSum);

//Знайти найбільший серед елементів масиву, остальні обнулити.

let max = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }

  if (array[i] !== max) {
    array[i] = 0;
  }
}
console.log(max)
console.log(array);








