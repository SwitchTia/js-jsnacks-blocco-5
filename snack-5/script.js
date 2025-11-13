const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const newArray = nums.filter(function(number, index){
    return number % 2 === 0;
});
console.log(newArray);


const newArray1 = nums.filter((number, index) => number % 2 === 0);

console.log(newArray1);

// Risultato: [2, 8, 4, 12]