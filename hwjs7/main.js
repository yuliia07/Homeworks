// // - Створити функцію конструктор для об'єктів User з полями id, name,
// // surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// // залишивши тільки об'єкти з парними id (filter)
//// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.
//// по зростанню (sort)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// let user1 = new User(1, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user2 = new User(2, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user3 = new User(3, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user4 = new User(4, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user5 = new User(5, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user6 = new User(6, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user7 = new User(7, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user8 = new User(8, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user9 = new User(9, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
// let user10 = new User(10, 'yura', 'kalynych', 'yyy@gmail.com', 9999999999);
//
// array = [user5, user6, user7, user8,user1, user2, user3, user4,  user9, user10];
//
// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);
//
// let sort = array.sort((a,b) => a.id-b.id);
// console.log(sort);

// // - створити класс для об'єктів Client з полями id, name, surname , email,
// // phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати
// // його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
//
// let client1 = new Client(1, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple']);
// let client2 = new Client(2, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice', 'paper']);
// let client3 = new Client(3, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice']);
// let client4 = new Client(4, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice', 'paper', 'cheese']);
// let client5 = new Client(5, 'vasya', 'full', 'fff@gmail.com', 99999, ['milk']);
// let client6 = new Client(6, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice', 'paper', 'cheese', 'milk']);
// let client7 = new Client(7, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice']);
// let client8 = new Client(8, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice', 'paper', 'juice', 'paper', 'milk']);
// let client9 = new Client(9, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple', 'juice', 'paper']);
// let client10 = new Client(10, 'vasya', 'full', 'fff@gmail.com', 99999, ['apple']);
//
// array = [client3, client10, client4, client1, client5, client6, client2, client7, client9, client8];
//
// let sort = array.sort((a,b) => a.order.length - b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна
// швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва
// поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної
// швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором
// полів, і додає його в поточний об'єкт car

function Car(model, produser, year, maxspeed, volume) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function () {
        return 'Їдемо зі швидкістю:' + this.maxspeed;
    };
    this.info = function () {
        for (let item in this) {
            console.log(`${item} - ${this[item]}`);
        }
    };
    this.increaseMaxSpeed = function (newSpeed){
       this.maxspeed = newSpeed;
       return `new speed is ${this.maxspeed}`
    };

}

let newCar = new Car('audi', 'italy', 2020, 250, 3);
// console.log(newCar.drive());
// newCar.info()
// console.log(newCar.increaseMaxSpeed(300));


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
