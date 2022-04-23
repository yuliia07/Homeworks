// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть
//     'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//  let x = + prompt("write your number:");
// if (x!=0){
//     document.write('Вірно');
// } else {
//     document.write('Невірно');
// }


// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// // який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// let hour = +prompt('Choose number from 0 to 59:');
// if (hour >= 0 && hour < 15) {
//     document.write('It`s first quarter of hour');
// } else if (hour >= 15 && hour < 30) {
//     document.write('It`s second quarter of hour');
// } else if (hour >= 30 && hour < 45) {
//     document.write('It`s third quarter of hour');
// } else if (hour >= 45 && hour < 60) {
//     document.write('It`s fourth quarter of hour');
// } else {
//     document.write('Try again');
// }


// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// // у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Choose day of month from 1 to 31:');
// if (day >= 1 && day < 11) {
//     document.write('It`s first part of month');
// } else if (day >= 11 && day < 21) {
//     document.write('It`s second part of month');
// } else if (day >= 21 && day <= 31) {
//     document.write('It`s third part of month');
// } else {
//     document.write('Try again');
// }


// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// // порядковий номер дня тижня і на екрані відображається інфа що заплановано
// // на цей день (можна замість плану на день, назву дня англійською).
// let dayOfWeek = + prompt('Введи номер дня тижня, щоб переглянути план');
// switch (dayOfWeek){
//     case 1:
//         document.write('It`s monday');
//         break;
//     case 2:
//         document.write('It`s tuesday');
//         break;
//     case 3:
//         document.write('It`s wednesday');
//         break;
//     case 4:
//         document.write('It`s thursday');
//         break;
//     case 5:
//         document.write('It`s friday');
//         break;
//     case 6:
//         document.write('It`s saturday');
//         break;
//     case 7:
//         document.write('It`s sunday');
//         break;
//     default:
//         document.write('Something wrong. Try again!');
// }


// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Write first number');
let b = +prompt('Write second number');
if (a !== b) {
    let res = (a > b) ? a : b;
    console.log(res);
} else {
    console.log('Your numbers are equal');
}