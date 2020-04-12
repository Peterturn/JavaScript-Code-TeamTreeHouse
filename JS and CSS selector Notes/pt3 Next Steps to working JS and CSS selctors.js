Next Steps with CSS Selectors and JavaScript
In this final step, we'll wrap things up by going over more best practices and suggestions for working with CSS selectors and JavaScript.

Elements, IDs or classes?
Markup can be unstable. For example, a change in the design could mean that your HTML tags also change, which could break your styles and functionality. You will have to update your CSS and JavaScript each time you change a tag.

Since IDs provide a unique selector for an element, you are not able to reuse it in the interface. This prevents you from reusing CSS or any logic provided by JavaScript.

Most developers use classes because they are reusable. An element can have several classes assigned to it (for styling and JavaScript behavior), and you can use the same class on multiple elements. It's recommended that you do not share the same class with CSS and JavaScript. Doing so would couple your styling classes with your logic classes, making your code difficult to debug and maintain.

If you're sure that only one element needs to match your selector, selecting by ID should be OK. If you're unsure, or think that at some point you might need to share styles or functionality with multiple elements, then it's best to use a class or data-* attribute.

Naming classes
Naming classes can be challenging. Developers often use a naming convention like BEM (Block, Element, Modifier) to make their code scalable, reusable and predictable. With BEM, you describe the markup in terms of blocks, elements and modifiers.

html:

<ul class="nav">
  <li class="nav__item"><a href="#type">Typography</a></li>
  <li class="nav__item"><a href="#buttons">Buttons</a></li>
  <li class="nav__item--current"><a href="#nav">Navigation</a></li>
</ul>
css:

.nav {...}
.nav__item {...}
.nav__item--current {...}
The class nav is considered a 'block' -- an independent component of the page
The class nav__item is an 'element' that belongs to the nav block only
nav__item--current is a 'modifier' class that makes changes to a block and its elements
Finally, you learned that it's common to use a dedicated prefix (or hook), like js-, if a class will be used by JavaScript only. This helps distinct between classes used for styling and those for JavaScript functionality. For example:

<ul class="nav js-site-nav">
  ...
</ul>

let navigationLinks = document.querySelectorAll('nav a');
let galleryLinks = document.querySelectorAll('#gallery a');
var inputValue = document.querySelector('input').value;


/*
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});
*/



let inputValue = document.querySelector('input').value;
let hRef = document.getElementById("link");

hRef.innerHTML = inputValue;
