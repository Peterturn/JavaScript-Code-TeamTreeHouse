// const users = [
//   {name: 'Samir'},
//   {name: 'Angela'},
//   {name: 'Beatrice'}
// ];
//
// //let filter1 = users.filter(user => user.name[0]!== 'S')
// let filter1 = users.filter(user => user.name!== 'Samir'); //case sensitve
//
// console.log(filter1);

//-----New Code-----//

const users = [
  {name: 'Samir', age: 17},
  {name: 'Angela', age: 35},
  {name: 'Beatrice', age: 12},
];
//
// let userAge = users.map( user => `${user.name} is ${user.age} years old.`)
// console.log(userAge);
//

//-----New Code-----//

const usersObject = users
  .reduce((usersObject, user) => {usersObject[user.name] = user.age;
    return acc;
  }, {});
