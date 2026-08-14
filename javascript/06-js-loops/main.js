//for (let index = 0; index < 20; index++) {
//  console.log(index);
//}

const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]);
}

for (const car of cars) {
  console.log(car);
}

cars.forEach(function (car, index) {
  console.log(car);
  console.log(index);
});

let index = 0;

while (index < 10) {
  console.log("index é menor do que 10!");
  index++;
}

const person = {
  name: "Jane",
  age: 21,
};

for (const property of person) {
  console.log(person[property]);
}
