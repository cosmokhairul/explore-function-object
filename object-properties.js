// var computer = {
//     price: 29000,
//     storage: '156gb',
//     color: 'silver',
//     processor: 'intel i5'
// };
// // console.log(computer);
// // console.log(computer.processor);
// var computerPrice = computer.price;

// //set a object property value
// computer.price = 22000;
// console.log(computer);

// var computer = {
//     price: 29000,
//     storage: '156gb',
//     color: 'silver',
//     processor: 'intel i5'
// };
// computer.price = 22000;
// console.log(computer);

// //different ways to set a value of an object property
// computer.price = 22000;
// computer['price'] = 25000;
// console.log(computer);

var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
};

var priceProperty = "price";
computer[priceProperty] = 30000;
console.log(computer);