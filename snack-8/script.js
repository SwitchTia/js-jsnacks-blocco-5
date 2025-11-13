const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    clas: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    clas: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    clas: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'

const findStudentClass = students.find(function (element, index) {
  const {name, clas} = element;
  if(element.name === "Marco Lanci"){
    return element.clas;
  }
});
console.log(findStudentClass);

// Risultato: '3C'