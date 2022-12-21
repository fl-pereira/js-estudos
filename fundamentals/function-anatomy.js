const greet = (person) => 'Hello, ' + person
const greetMsg = greet("Felipe")

const greetReference = greet
console.log(greetReference("Daphne"))