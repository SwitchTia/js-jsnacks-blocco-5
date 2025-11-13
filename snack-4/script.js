const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const namesMap = posts.map(function(element, index){
  const {author, date} = element;
  return `${author}`;
})
console.log(namesMap);


const namesMap1 = posts.map(({author}, index) => `${author}`);

console.log(namesMap1);


// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']