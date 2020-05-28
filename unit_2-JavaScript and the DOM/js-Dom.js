
//const myHeading= document.getElementsByTagName('h1')[0];

//const myButton= document.getElementById('myButton');
//const myTextInput= document.getElementById("myTextInput")

//myButton.addEventListener('click', ()=>{myHeading.style.color = myTextInput.values;
//});

const myList= document.getElementsByTagName("li");

for (let i=0; i<myList.length; i+=1){
 myList[i].style.color = 'purple';
  }

const errorNotPurple= document.getElementsByClassName("error-not-purple");

for (let i=0; i<errorNotPurple.length; i+=1)

{ errorNotPurple[i].style.color = 'red';
}


const evens= document.querySelectorAll("li:nth-child(even)");

for (let i=0; i<errorNotPurple.length; i+=1)

{ evens[i].style.backgroundColor = 'lightgrey';}

//selecting titles
// document.querySelector('[title=MyTitleDavidHasselhof]');

// selecting a Class with querySelector
//document.querySelectorAll('.student-info')

// selecting an ID with querySelectors
//const myElement = document.querySelector('#myId');

// Selecting a decendant and ID with querySelectors (body, div, input, nav are all classified as a tags.)
// document.querySelectorAll('nav a') and document.querySelectorAll('footer img');
// document.querySelectorAll('#IDName a')
// document.getElementById('linkName').value;
// document.querySelector('a').innerHTML = whatever you want to the 'a' to be.;
