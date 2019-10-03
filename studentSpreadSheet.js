

var student = [
  {
  name: 'elle elephant' ,
    track:'JavaScript' ,
    achievements: 20,
    points: 10850
  },
  {
  name: 'susie sheep' ,
    track:['PHP ', 'JavaScript ', 'Python '],
    achievements: 30,
    points: 20721

  },
  {
   name: 'danny dog' ,
    track:['CSS ', 'JavaScript ', 'HTML '],
    achievements: 23,
    points: 14787
  },
  {
   name: 'pedro pony' ,
    track:['PHP ', 'JavaScript '],
    achievements: 12,
    points: 5209
  },
  {
   name: 'peppa pig' ,
    track:['Ruby ', 'IOS ', 'Swift '],
    achievements: 40,
    points: 31157
  }
];


var message;
var search;

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

//Search Student data base
function searchStudents(input){
for (var i=0; i<student.length; i++ ){

  if (search === student[i].name){
  message+='<p> Student Name: ' + student[i].name + ',<br>'+ 'Track: ';
  message+= student[i].track+ ',<br>' + 'Achievements: ' + student[i].achievements +',<br>';
  message+= 'Points: '+student[i].points +',</p><br>';
  print(message);
  }
}
}

// search prompt loop
do {search=prompt('Type a name to search for a student. Type "quit" to exit. ');
search=search.toLowerCase();
searchStudents(search);}

while(search !== 'quit');
