const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 },
];

    // Result: { name: 'paper towels', price: 6.99 }
//---New Code---//

    // Result: { name: 'paper towels', price: 6.99 }

 let lowestPrice = products
  .filter(item => item.price < 10 )

  .reduce((highest, prices)=> {
    if (highest.price > item.price){
      return highest;
     }else{
    return item;}
  });

  console.log(lowestPrice);

  let highestPriceTot = products
   .filter(prices => prices.price > 10 )
   .reduce((sum, prices) => sum + prices.price, 0)
   .toFixed(2)
   console.log(highestPriceTot);

   //---New Code---//

   const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

// groceryTotal should be: 9.47
// Write your code below
groceryTotal = purchaseItems
  .filter(foodItem => foodItem.dept === 'groceries')
  .reduce((sum, money)=> sum + money.price, 0)
  .toFixed(2);
