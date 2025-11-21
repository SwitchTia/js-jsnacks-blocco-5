const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. 
// Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const lengthMinArray = [];
const lenghtRestArray = [];

for (let i = 1; i < zucchine.length; i++){
  let currentElement = zucchine[i];
  if (currentElement.length >= 15){
    lengthMinArray.push(currentElement);
  }
  else{
    lenghtRestArray.push(currentElement);
  }
}
console.log(lengthMinArray,lenghtRestArray);


// const newArray = zucchine.filter(function(element){
//   const {length} = element;
  
//   if(length >= 15){
//     return element;
//   }
//   else{
//     restArray.push(element);
//   }
// })
// console.log(newArray);
// console.log(restArray);



// const restArray1 = []; 

// const newArray1 = zucchine.filter((element, index) => element.length >= 15 ? element : restArray.push(element)); //need help
// console.log(newArray1);
// console.log(restArray1);