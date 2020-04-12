
/*Q&A game designed to ask three or more questions and track score.*/

//Vars and basic functions
var qANDa = [
  ['what is the first letter of the alphabet?', 'a', ],
  ['what is the 2nd letter of the alphabet?', 'b',],
  ['what is the 3rd letter of the alphabet?', 'c',]
];
var q_a;
var score=0;
var outputDiv;

//Function to print directly to HTML ID tag.
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}


// Game Q&A Engine
function askQuestions (ask){
  for (i=0; i<ask.length; i+=1){
      q_a=prompt(ask[i][0]);
        q_a=q_a.toLowerCase();

        if (q_a===ask[i][1]){

  score+=1;
  message += '<p> Great Job, the answer to '+ ask[i][0] + ' is ' + ask[i][1] + ' Your score is ' + score + '.</p><br>';
  print(message);
}

  else {
    message+='<p> BAD DOG, the answer to '+ ask[i][0] + ' is ' + ask[i][1] + ' Your score is ' + score + '.</p><br>';
    print(message);
  }
}
}

//Activate the test.
askQuestions(qANDa);
