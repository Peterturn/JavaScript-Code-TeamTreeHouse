const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);

//---------New Code--------------//

const fruits = ['apple', 'pear', 'cherry'];


capitalizedFruits = fruits.map(string => string.toUpperCase(string));

console.log(capitalizedFruits);

//------New Code--------//
const prices = [5, 4.23, 6.4, 8.09, 3.20];

    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

let map1 = prices.map(num => '$'+num.toFixed(2));

console.log(map1);

//---------New Code---------//
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

const only3 = string => string.slice(0,3);
abbreviatedDays = daysOfWeek.map(only3);
