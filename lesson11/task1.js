const _ = require('lodash');

// задание 7-0
let a = [5, 2, -1, 9];
console.log('(№7-0) \n первый ' + a[0] + '\n' + 'третий ' + a[2] + '\n' + 'длина ' + a.length + '\n');

// задание 7-1
let a1 = [5, 2, -1, 9, 23];

console.log('(№7-1) \n Наибольшая цифра ' + _.max(a) + '\n' + 'Наименьшая цифра ' + _.min(a) + '\n');

// задание 7-2
let b = [3, 7, 12, 8, -10];

console.log('(№7-2) \n Сумма всех элементов массива = ' + _.sum(b) + '\n');

// задание 7-3
let c = [3, 7, 12, 8, -5, -10];

console.log('(№7-3) \n Сумма четных элементов массива = ' + _.sum(c.filter(x => x % 2 === 0)) + '\n');

// задание 7-4
let g = [3, 7, 12, 8, -5, -10];

console.log('(№7-4) \n Положительных чисел - ' + g.filter(x => x > 0).length + '\n');

// задание 7-5
let n = [6, -7, 13, 8, -5, -10];
let m = n.filter(x => x > 0);

console.log('(№7-5) \n Массив из положительных чисел  m - ' + m + '\n');

// задание 7-6
let j = [12, 3, -15, 7, -4, 11];
let o = j.reverse();

console.log('(№7-6) \n Зеркальный массив - ' + o + '\n');

// задание 7-7
let l = [6, 2, -1, 9, 5];
let min1 = l.indexOf(_.min(l));
let max1 = l.indexOf(_.max(l));

let mem1 = l[max1];
l[max1] = l[min1];
l[min1] = mem1;

console.log('(№7-7) \n Замена max и min местами - ' + l + '\n');

// задание 7-8
let y = [5, 5, 7, 8, 0, 0, 1, 5];
let u = [];
u = y.filter((element, index) => y.indexOf(element) === index);

console.log('(№7-8) \n Массив без повторов - ' + u);