
var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

// "For-In-Loop" works on objects

for (var key in person){
console.log(key, ': ', person[key]);
}
