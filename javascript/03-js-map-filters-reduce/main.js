//=========================================================================
// #map
//=========================================================================



const numbers = [1, 2, 3, 4, 5];

const numebersMultipliedByTwo = numbers.map(function(number){ //esse map fez uma nova lista baseado no return
    return number*2; // posso transformar a lista em string ou qualquer outra coisa que eu quiser
});

console.log(numebersMultipliedByTwo);




//=========================================================================
// #filters
//=========================================================================


const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age){ //filtra e altera apaenas os dados que satisfazem o 'age % 2 === 0'.
    return age % 2 === 0
});

console.log(evenAges);



//=========================================================================
// reduce
//=========================================================================

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 1);

console.log(sumOfAges);
