const person = {
  firstName: "Marcus",
  lastName: "Filho",
  age: "22",
  hobbies: ["Assistir anime", "Jogar bastante", "Ler"],
  dog: {
    name: "Simba",
    age: 4,
  },
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// forma mais facil para acessar os dados do objeto
const {
  firstName,
  lastName,
  age,
  hobbies,
  dog: { name: dogName },
} = person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);

// person.dog = "Simba";
console.log(person.dog.age);
console.log(dogName);

// desafio

const read = person.hobbies[2];
console.log(read);

//========================================================================

const todos = [
  {
    id: 1,
    description: "Estudar programaçao",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const read2 = todos[2].description;
console.log(read2);
