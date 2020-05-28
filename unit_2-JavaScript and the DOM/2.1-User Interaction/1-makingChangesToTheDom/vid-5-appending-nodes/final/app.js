
const toggleButton = document.getElementById('toggleHideList');
const toggleDiv = document.querySelector('.list');
const input = document.querySelector('input.discription');
const p = document.querySelector('p.description');
const button = document.querySelector('button.discription');
const buttonAddItem = document.getElementById('buttonAddListItem');
const addItemInput = document.querySelector('input.addListItem');

//On Off list display
toggleButton.addEventListener('click', () => {
  if(toggleDiv.style.display == 'none')
{toggleButton.textContent = 'Hide List';
 toggleDiv.style.display = 'block';
} else {
toggleButton.textContent = 'Show List';
 toggleDiv.style.display = 'none';
}
});


//Change List Discription
button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
  input.value = '';
});


//Add List Item
buttonAddItem.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value= '';
});

//home Work Project
var contentDiv = document.getElementById('content');
var newParagraph = document.createElement('p');
newParagraph.className = 'panel';
contentDiv.appendChild(newParagraph);
