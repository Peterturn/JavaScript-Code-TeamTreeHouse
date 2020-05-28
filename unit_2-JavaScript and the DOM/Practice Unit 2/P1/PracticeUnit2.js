// 1: Set the text of the <h1> element
let mainTitle = document.getElementById('mainTitle');
mainTitle.innerHTML = 'Hobbies';

// 2: Set the color of the <h1> to a different color
mainTitle.style.color = 'blue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
let pContent = document.querySelector('p.desc');
pContent.innerHTML = '<p>' +'my '+'<strong>' + 'List ' + '</strong>'+'of hobbies:'+ '</p>';

// 4: Set the class of the <ul> to 'list'
document.querySelector('ul').class += 'list';

// 5: Create a new list item and add it to the <ul>
let ul = document.querySelector('ul');
let li = document.createElement('li')
li.innerHTML += '<input> '+'Movies';;
ul.appendChild(li);

// 6: Change all <input> elements from text fields to checkboxes
let input = document.querySelectorAll("input");
for (i=0; i<input.length; i+=1){
input[i].type = "checkbox";
}


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

let deleteCont = document.querySelector('div.extra')
let btn = document.createElement('button');
btn.innerHTML= 'DELETE';
deleteCont.appendChild(btn);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
btn.addEventListener('click', ()=>{
let p = document.querySelector('div.extra p');
deleteCont.removeChild(p);
});
