const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

const findStudent = students.find(function(element,index){
  const {id} = element;
  if(id === 2){
    return element;
  }
})
console.log(findStudent);




const findStudent1 = students.find(({id}, index) => id === 2);

console.log(findStudent1);

// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }