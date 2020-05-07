const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];


//let filterName = name => name[0] ==='S';
//let concatinateName = (name) => ({name: name,});
//
//let sNames = userNames
//.filter(filterName)
//.map(concatinateName);
//
//console.log(sNames);

//---New Code---//

    const usersNameAge = [
      {name: 'Samir', age: 27},
      {name: 'Angela', age: 33},
      {name: 'Beatrice', age: 42},
      {name: 'Shaniqua', age: 30},
      {name: 'Marvin', age: 23},
      {name: 'Sean', age: 47}
    ];

// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean']; exlude Samir Marvin
    let filterMap = users
    .filter(userName => userName.age >= 30)
    .map(userName => userName.name);

  //let filterMap = users
  //.filter(userName => userName.name !== "Samir").filter(userName => userName.name !== "Marvin")
  //.map(userName => userName.name);

    console.log(filterMap);

//---New Code---//

const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below
unfinishedTasks = todos
  .filter(item => item.done === false).map(item => item.todo);
