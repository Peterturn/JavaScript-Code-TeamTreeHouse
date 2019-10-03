var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p> hello my name is ' + person.name + '.</p>';
message+= '<p>I live in ' + person.country + '.</p>';
person.name+= 'Rainbow Dash';
message+= '<p>But I wish my name was ' + person.name + '.</p>';
person.age += 1;
message+= '<p>I am now ' + person.age + ' years old.</p>';
message+= '<p>I have ' + person.skills.length + ' Skills.</p>';
message+= '<p>I am skilled in ' + person.skills.join(', ') + '.</p>';

print (message);


///////////////

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
};


/////////////// dif code

var questions = [
  {
    question: 'How many states are in the United States?',
   answer: 50
  },

  {
    question: 'How many continents are there?',
    answer: 7
  },

  {
    question: 'How many legs does an insect have?',
    answer: 6
  }
];

var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
