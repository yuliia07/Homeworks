// - створити функцію яка обчислює та повертає площу прямокутника зі
// сторонами а і б
// function square (a,b) {
//     let result = a*b;
// return result;
// }
// let res = square(6,7);
// console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle (r){
//     console.log(3.14 * (r**2));
// }
// squareCircle(555);

// - створити функцію яка обчислює та повертає площу циліндру висотою
// h, та радіутом r
// function squareCylinder(h, r) {
//     let result = (2 * 3.14 * r * h) + (2 * 3.14 * (r ** 2));
//     console.log(result);
// }
// squareCylinder(3,2);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function asd(array) {
//     for (const arrElement of array) {
//         console.log(arrElement);
//     }
// }
// asd([4, 3, 5, 7, 3, 9, 8, 6]);

// - створити функцію яка створює параграф з текстом. Текст задати через
// аргумент
// function par (text){
//     let paragraph = text;
//     document.write('<p>');
//     document.write(paragraph);
//     document.write('</p>');
// }
// par('hdsgakdmmmsnhhdbnknn');

// - створити функцію яка створює ul з трьома елементами li. Текст li
// задати через аргумент всім однаковий
// function list(text) {
//     document.write('<ol>')
//     for (let i=0; i<3;  i++) {
//         document.write(`<li> ${text}</li>`);
//     }
//     document.write('</ol>');
// }
// list('item');

// - створити функцію яка створює ul з трьома елементами li. Текст li
// задати через аргумент всім однаковий. Кількість li визначається другим
// аргументом, який є числовим (тут використовувати цикл)
// function countList (text, number){
//     document.write(`<ul>`);
//     for (let i=0; i<number; i++){
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// countList('hello world!', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,
// стрінги,булеві), та будує для них список
// function list(arr) {
//     document.write('<ul>');
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write('</ul>');
// }
// let array = [1,4,true,7,999,'jxdhgtt',false,55,'hsffdxe'];
// list(array);
// let array1 = [33, ' kjdhdjf', 875, 'djggffd', false];
// list(array1)

// - створити функцію яка приймає масив об'єктів з наступними полями id (name),
// name (pages) ,age (genre), та виводить їх в документ. Для кожного об'єкту
// окремий блок.
//
// function iterator (array){
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

// - створити функцію яка повертає найменьше число з масиву
//
// function lessNumber(arr) {
//     let a = arr[0];
//     for (const item of arr) {
//         if(item<a){
//             a=item;
//         }
//     }
//     console.log(a);
// }
// lessNumber([1,4,6,4,-233,555,9]);

// - створити функцію яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад [1,2,10]->13
// function sum(arr) {
//     let a = 0;
//     for (const arrElement of arr) {
//         a += arrElement;
//     }
//     return a;
// }
//
// console.log(sum([1, 2, 3, 666, 4235, 44]));