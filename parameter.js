// function bringSingara(taka) {
//     console.log('Singara er jony dise', taka);
//     console.log('Mama singara den');
// }

// bringSingara(money);

// function bringSingara(taka) {
//     console.log('Singara er jony dise', taka);
//     console.log('Mama singara den');
// }

// var money = 250;
// bringSingara(money);

function bringSingara(taka) {
    console.log('Singara er jonno dise', taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log('Ai nen Singara', singara);