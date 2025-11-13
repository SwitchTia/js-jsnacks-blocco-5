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



const findStudent = students.find(function (element, index) {
  return element.name === "Marco Lanci"
});
console.log(findStudent1);


const findStudent1 = students.find((element, index) => element.name === "Marco Lanci");
console.log(findStudent);


if(findStudent){
    console.log(findStudent.clas);
}


// Risultato: '3C'