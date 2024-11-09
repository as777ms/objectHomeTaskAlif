// const library = {
//     name: 'My Library',
//     location: 'New York',
//     books: {
//       total: 100,
//       genres: [ 'Fiction', 'Non-Fiction', 'Biography', 'Mystery', 'Thriller' ]
//     }
// }
// console.log(library.books.genres)



//2
// function grades(){
//     let student = [
//         {
//             name: "Anisa",
//             age: 10,
//             grades: [2,3,2,2]
//         },
//         {
//             name: "Person",
//             age: 10,
//             grades: [5,4,5,4]
//         },
//         {
//             name: "Contain",
//             age: 10,
//             grades: [5,5,5,5]
//         }
//     ]
//     let averages= []
//     student.forEach((el)=>{
//         let cnt = el.grades.reduce((a, b) => a + b, 0)
//         let average = cnt / el.grades.length
//         averages.push(`${el.name}'s average grade is ${average}`)
//     })  
//     return averages
// }
// console.log(grades())

// //3
// const store = {
//     products: [
//         { name: "Телевизор", price: 300 },
//         { name: "Ноутбук", price: 800 },
//         { name: "Смартфон", price: 500 },
//         { name: "Наушники", price: 100 }
//     ]
// };

// function printProductNames(store) {
//     console.log("Названия всех товаров:");
//     store.products.forEach(product => {
//         console.log(product.name);
//     });
// }

// function calculateTotalPrice(store) {
//     let totalPrice = 0;
//     store.products.forEach(product => {
//         totalPrice += product.price;
//     });
//     return totalPrice;
// }

// printProductNames(store);

// const totalPrice = calculateTotalPrice(store);
// console.log("Общая стоимость всех товаров:", totalPrice);


//4
// const car = {
//     make: "Toyota",
//     model: "Camry",
//     engine: {
//         power: "200 л.с.",
//         type: "Бензиновый"
//     },
//     start: function() {
//         console.log(`Двигатель ${this.engine.type} мощностью ${this.engine.power} запущен.`);
//     }
// };
// car.start();


//5
// const team = {
//     name: "Динамо",
//     players: [
//         { name: "Алексей", position: "Вратарь" },
//         { name: "Иван", position: "Защитник" },
//         { name: "Сергей", position: "Полузащитник" },
//         { name: "Дмитрий", position: "Нападающий" }
//     ]
// };
// function printPlayers(team) {
//     console.log(`Игроки команды ${team.name}:`);
//     team.players.forEach(player => {
//         console.log(`${player.name} - ${player.position}`);
//     });
// }

// printPlayers(team);