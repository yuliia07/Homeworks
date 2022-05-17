// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// console.log(a.length);
//
// let b = 'lorem ipsum';
// console.log(b.length);
//
// let c = 'javascript is cool';
// console.log(c.length);

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let a = 'hello world';
// console.log(a.toUpperCase());
//
// let b = 'lorem ipsum';
// console.log(b.toUpperCase());
//
// let c = 'javascript is cool';
// console.log(c.toUpperCase());

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = 'HELLO WORLD';
// console.log(a.toLowerCase());
//
// let b = 'LOREM IPSUM';
// console.log(b.toLowerCase());
//
// let c = 'JAVASCRIPT IS COOL';
// console.log(c.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від
// // зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll('  ', ''));

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ');
// arr = stringToArray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(arr);

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та
// // колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let newArr = arr.map(value => value + '');
// console.log(newArr);

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// // його від більшого до меньшого, або навпаки в залежності від значення
// // аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         nums.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         nums.sort((a, b) => b - a);
//     }
//     return nums;
// }
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]

// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let newSort = coursesAndDurationArray.sort((a, b) => a.monthDuration-b.monthDuration );
// console.log(newSort);
//
// let newFilter = newSort.filter(value => value.monthDuration>5);
// console.log(newFilter);

// // описати колоду карт
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
//
// let cards = [
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'quine',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'quine',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'quine',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'quine',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         value: 'joker',
//         color: 'black'
//     },
//     {
//         value: 'joker',
//         color: 'red'
//     },
// ]
// let a = cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(a);
// let b = cards.filter(value => value.value==='6');
// console.log(b);
// let c = cards.filter(value => value.color==='red');
// console.log(c);
// let d = cards.filter(value => value.cardSuit==='diamond');
// console.log(d);
// let sort = cards.sort((a, b) => a.value - b.value);
// console.log(sort);
// let e = cards.filter(value => value.cardSuit==='clubs'&& (value.value>8 || (value.value+''>'9')) );
// console.log(e);