// strings
const firstName = 'Marcus'
const lastName = 'Filho'
// const names = 'Felipe,Joao,Julia'

console.log('Meu nome é '+ firstName + ' ' + lastName)
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)
// console.log(names.split(","))

//numbers
const number = 5
console.log(number.toString())

//booleans
false
true

console.log(2 == 3)
console.log(2 == 2)

//null & undefined

const x = null;
const y = undefined;
console.log(x);

//list

const names = ["Felipe", "João", "Julia", 10, false];
const joao = names[1];
console.log(joao);

names.push('Pedro');
names.unshift('Fernanda');

names.pop();
names.pop();
names.pop();

names[3] = 'Gustavo';

const indexOfFelipe = names.indexOf('Felipe');
const sortedNames = names.sort();
const namesIsArrays = Array.isArray(names);

console.log(names);
console.log(sortedNames);
console.log(namesIsArrays);
