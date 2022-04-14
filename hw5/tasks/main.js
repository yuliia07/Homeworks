let hello = 'hello';
let owu = 'owu';
let com ='com';
let ua = 'ua';
let a = 1;
let b = 10;
let c = -999;
let d = 123;
let e = 3.14;
let f = 2.7;
let g = 16;
let h = true;
let i = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

document.write(hello + '</br>');
document.write(owu + '</br>');
document.write(com + '</br>');
document.write(ua + '</br>');
document.write(a + '</br>');
document.write(b + '</br>');
document.write(c + '</br>');
document.write(d + '</br>');
document.write(e + '</br>');
document.write(f + '</br>');
document.write(g + '</br>');
document.write(h + '</br>');
document.write(i);

// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);

let book = {
    name: 'brayshaw',
    pages: 234,
    genre: 'novel'}
console.log(book);

let book2 = {
    name: 'brayshaw',
    pages: 234,
    genre: 'novel',
    author: ['by', 'megan', 'brandy']}
console.log(book2.author[1]);

let firstName = 'Yuliia';
let middleName = 'Vitaliyivna';
let lastName = 'Kalynych';
console.log(`${firstName} ${middleName} ${lastName}`);

// let resultName = prompt('What is your name?');
// console.log(resultName);
//
// let resultSurname = prompt('What is your surname?');
// console.log(resultSurname);
//
// let resultAge = prompt('How old are you?');
// console.log(+resultAge);

let aa = 100;
let bb = '100';
let cc = true;
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);

let books = [
    {name: 'brayshaw', pages: 234, genre: 'novel',
        author: ['by', 'megan', 'brandy'] } ,
    {name: 'reign of brayshaws', pages: 314, genre: 'novel',
        author: ['by', 'megan', 'brandy'] } ,
    {name: 'figach and don`t cry', pages: 188, genre: 'psychology',
        author: ['by', 'jenn', 'sinsero'] }
]
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);