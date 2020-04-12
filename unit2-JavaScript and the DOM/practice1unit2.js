// 1: Select the element with the ID 'about'.
//    Store the element in the variable `about`.
const about = document.getElementById('about');
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const h2Color= document.querySelectorAll('h2');
for (let i=0; i<h2Color.length; i+=1)
{ h2Color[i].style.color = 'blue';}

// 3: Select all elements with the class '.card'.
//    Set their background color to the color of your choice.
const card= document.getElementsByClassName('card');
for (let i=0; i<card.length; i+=1){
  card[i].style.backgroundColor = 'red';}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul= document.querySelector('ul');
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container= document.getElementsByClassName("container")[1];
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.
const aTitle= document.querySelectorAll('a[title]');
for (let i=0; i<aTitle.length; i+=1)
{ aTitle[i].style.color = 'orange';}
