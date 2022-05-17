// //Все стірлочними!!!!!!!!!

// //     - створити функцію яка приймає масив чисел та повертає середнє
// //    арифметичне його значень.
// let nnn = (arr) => {
//     let a = 0;
// for (const arrayElement of arr) {
//     a+=arrayElement;
// } return a / arr.length}
// console.log(nnn([1, 2, 3,65,4,21,4]));

// //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// //а виводить найбільше (Math використовувати заборонено);
// let foo = (...num) => {
//     let a = num[0];
//     let b = num[0];
//
//     for (let item of num) {
//         if (a > item) {
//             a = item;
//         } else if (b<item){
//             b=item;
//         }
//     }
//     console.log(`Найбільше значення: ${b}`);
//     return a;
//
// }
// console.log(`Найменше значення: ${foo(1, 45, 3, -9, 4, 33)}`);

// //- створити функцію яка заповнює масив рандомними числами
// //(цей код генерує рандомні числа в діапазоні від 0 до 100 -
// //Math.round(Math.random()*100)) та виводить його.
//
// let ran = () => Math.round(Math.random() * 100);
// // num - довжина утвореного масиву)
// let gener = (num) => {
//     let res = [];
//     while (res.length<num){
//         res.push(ran())
//     }
//     return res;
// }
// console.log(gener(33));

// //- створити функцію яка заповнює масив рандомними числами в діапазоні від 0
// //до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let ran = (limit) => Math.round(Math.random() * limit);
// // num - довжина утвореного масиву)
// let gener = (limit, num) => {
//     let res = [];
//     while (res.length<num){
//         res.push(ran(limit))
//     }
//     return res;
// }
// console.log(gener(30, 5));

//  - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
//  [1,2,3] -> [3, 2, 1].
//
// let foo = (arr) => {
//     let res = [];
//     for (let i = arr.length - 1; arr[i] >= arr[0]; i--) {
//         res.push(arr[i]);
//     }
//     return res
// }
// console.log(foo([1, 2, 3, 5, 6, 7, 84, 32, 5]));
//     arr.reverse()
// console.log(foo([1, 2, 3,5,6,7,84,32,5]));


// //    Переробити на стрілочні функції з попереднього дз

//// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами
// а і б
// let square = (a,b) =>  a*b;
// console.log(square(6,7));

//// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let squareCircle = (r)=> 3.14 * (r**2);
// console.log(squareCircle(4));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та
// // радіутом r
// let squareCylinder = (h, r) =>  (2 * 3.14 * r * h) + (2 * 3.14 * (r ** 2));
// console.log(squareCylinder(3, 2));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let asd = (array) => {
//     for (const arrElement of array) {
//         console.log(arrElement);
//     }
// }
//
// asd([4, 3, 5, 7, 3, 9, 8, 6]);

// // - створити функцію яка створює параграф з текстом. Текст задати через
// // аргумент
// let par = (text) => {
//     document.write('<p>');
//     document.write(`${text}`);
//     document.write('</p>');
// }
// par('hdsgann');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати
// // через аргумент всім однаковий
// let list = (text) => {
//     document.write('<ul>')
//     document.write(`<li> ${text}</li>`);
//     document.write(`<li> ${text}</li>`);
//     document.write(`<li> ${text}</li>`);
//     document.write('</ul>');
// }
// list('item');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати
// // через аргумент всім однаковий. Кількість li визначається другим аргументом,
// // який є числовим (тут використовувати цикл)
// let countList = (text, number) => {
//     document.write(`<ul>`);
//     for (let i=0; i<number; i++){
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// countList('hello world!', 6);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,
// // булеві), та будує для них список
// let list = (arr) => {
//     document.write('<ul>');
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write('</ul>');
// }
// list([1,4,true,7,999,'jxdhgtt',false,55,'hsffdxe']);

// // - створити функцію яка приймає масив об'єктів з наступними полями id (name),
// // name (pages), age (genre), та виводить їх в документ. Для кожного об'єкту
// // окремий блок.
// let iterator = (array) => {
//     for (const item of array) {
//         document.write(`<div>Name - ${item.name} </br>Pages - ${item.pages}</br>Genre- ${item.genre} </br></div>`);
//     }
// }
//
// let books = [
//     {name: 'brayshaw', pages: 234, genre: 'novel' } ,
//     {name: 'reign of brayshaws', pages: 314, genre: 'novel' } ,
//     {name: 'figach and don`t cry', pages: 188, genre: 'psychology'}
// ]
//
// iterator(books);

// // - створити функцію яка повертає найменьше число з масиву
// let lessNumber = (arr) => {
//     let a = arr[0];
//     for (const item of arr) {
//         if(item<a){
//             a=item;
//         }
//     }
//     return a;
// }
// console.log(lessNumber([1, 4, 6, 4, -233, 555, 9]));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// // та повертає його. Приклад [1,2,10]->13
// sum = (arr) => {
//     let a = 0;
//     for (const arrElement of arr) {
//         a += arrElement;
//     }
//     return a;
// }
//
// console.log(sum([1, 2, 3, 666, 4235, 44]));

// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// change = (arr) => {
//     let a =[];
//     a.push(arr[1]);
//     a.push(arr[0]);
//     return a;
// }
// console.log(change([3, 5]));

