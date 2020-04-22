const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

    // Result: 4
const reduce1 = names.reduce((count, name) =>{
  if(name[0] === 'G'){
    return count +1;
  }else{
  return count;}
}, 0);

console.log(reduce1);


//-----------new code ----------//

const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const total = prices.reduce((sum, price)=> sum + price, 0);

console.log(total);

//-------New Code ---------//

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((totalNum, phoneNum)=>{
  if(phoneNum[1] === "5"){
    return totalNum +1;}
  else{return totalNum;}
}, 0)
