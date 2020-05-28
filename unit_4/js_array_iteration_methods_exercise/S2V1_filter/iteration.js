const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

names.forEach(name => {
  if(name.charAt(0) === 'S') {
    sNames.push(name);
  }
});

console.log(sNames);
//-------New Code------//

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);
