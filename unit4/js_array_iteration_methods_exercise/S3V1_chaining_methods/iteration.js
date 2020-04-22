const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below
const greaterThan2000 = year => year >= 2001;
const yearAD = year => year + " A.D.";
displayYears = years.filter(greaterThan2000).map(yearAD);

//-----New Code-----//

// const arr = [1,2,3];
//
// const smallerArr = arr.filter(number => number !== 2);
// const incrementedArr = smallerArr.map(number => number + 1);
//
// console.log(incrementedArr); // => [2,4]


//-----New Code-----//

const arr = [1,2,3];

const smallerArr = arr //the chain continues below.
//javaScript ignores white space that is why you can seperate the chain.
  .filter(number => number !== 2)
  .map(number => number + 1);

console.log(smallerArr); // => [2,4]

//-----New Code Example-----//

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
