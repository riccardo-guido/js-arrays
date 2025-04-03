const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

//***/ 1. Utilizzando un indice sull'array teachers, cambia il valore della
//***/ variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

let tempFourthTeacher; 

for (let i = 0; i < teachers.length; i++) {
  if (i === 3) {
    tempFourthTeacher = teachers[i];
  }
}
const fourthTeacher = tempFourthTeacher;
console.log(fourthTeacher);


//***/ 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

for (let i = 0; i < teachers.length; i++) {
  if (i === 4) {
    teachers[i] = 'Patrick'; // Sostituisce 'Carlo' con 'Patrick'
  }
}

console.table(teachers);


//***/ 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers[teachers.length - 1]; // Salva l'ultimo insegnante

for (let i = 0; i < teachers.length; i++) {
  if (i === teachers.length - 1) {
    teachers.splice(i, 1); // Rimuove l'ultimo elemento dall'array
  }
}

console.log(lastTeacher); // Output: 'Luca'
console.log(teachers); // Array aggiornato senza 'Luca'

//***/ 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = teachers[0]; // Salva il primo insegnante

for (let i = 0; i < teachers.length; i++) {
  if (i === 0) {
    teachers.splice(i, 1); // Rimuove il primo elemento dall'array
  }
}

console.log(firstTeacher); // Output: 'Nathan'
console.log(teachers); // Array aggiornato senza 'Nathan'

//***/ 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers


teachers.splice(6, 0, 'Vanessa'); // Aggiunge 'Vanessa' alla fine dell'array

console.log(teachers);

//***/ 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.splice(0, 0, 'Sarah'); // Aggiunge 'Sarah' all'inizio  dell'array

console.log(teachers);

//***/ 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

const lewisIndex = teachers.indexOf('Lewis'); // Usa indexOf per trovare l'indice

console.log(lewisIndex); // Output: 5

//***/ 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = teachers.length === 0;

console.log(isTeachersEmpty); // Output: false