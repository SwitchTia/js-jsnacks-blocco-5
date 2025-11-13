const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

const newArray = numbers.map(function(number, index){
    return number + 1;
})
console.log(newArray);


const newArray1 = numbers.map((number, index) => number + 1);

console.log(newArray);

// Risultato: [3, 9, 5, 8, 3, 88]