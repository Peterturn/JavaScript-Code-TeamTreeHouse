const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach(item => {
let capitalizedFruit = item.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);


//


const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let totalPrice = 0;

prices.forEach( amount => {
  totalPrice += amount;
});

console.log(totalPrice);

///

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

    // Result: ['Selma', 'Sam', 'Sharon'];

    const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
    let sNames = [];
        // Result: ['Selma', 'Sam', 'Sharon'];

    names.forEach(name =>{
      if (name.charAt(0) === 'S'){
        sNames.push(name);
      }
    });

    console.log(sNames);


//---New Code---//

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below

// stringPrices.forEach((cost) => {
//   const price = parseFloat(cost);
//   priceTotal += price
// });
        //---Same Thing Simplified---//
stringPrices.forEach((cost) => priceTotal += parseFloat(cost));


//---New Code---//

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Write your code below

alphabet.forEach(letter => {
  if(letter !=='L'){
    noel.push(letter);
  }
});

//---New Code---//
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

// upperRange should be: [67, 90, 82, 99]
// Write your code below

percentages.forEach(higher => {
  if(higher >=50){
    upperRange.push(higher);
  }
});

//---New Code---//
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// Write your code below

colors.forEach(ffColor => {
  if( ffColor.startsWith("#F")){
    filteredColors.push(ffColor);
  }
});

  //Optional Solution
// colors.forEach(fColor => {
//   if( ffColor[1]==='F'){
//     filteredColors.push(fColor);
//   }
// });

//---New Code---//
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// capitalizedMonths should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below

months.forEach(capMonth => {
   capitalizedMonths.push(capMonth.toUpperCase())
  });
