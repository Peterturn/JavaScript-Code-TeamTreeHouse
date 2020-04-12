Prefix Classes for JavaScript
It's recommended that you do not share the same selector with CSS and JavaScript. For instance, if you're selecting an element with JavaScript, avoid relying on a selector that's also used in your CSS.

If a class is going to be used by JavaScript only, it's common to use a dedicated prefix, like js-. Consider the following button element:

HTML:
<button class="btn-lg js-modal">Click Me!</button>
Use the class .btn-lg to apply styling to the button:

CSS:
.btn-lg {
  font-size: 2.5em;
  display: block;
}

Use the class .js-modal to target the button and apply functionality with JavaScript:

// assign the element with the class 'js-modal' to the variable 'modalBtn'
var modalBtn = document.querySelector('.js-modal');

// logic to popup the modal on the 'click' event
modalBtn.addEventListener('click', function (event) {
  ...
});
This also makes it easier to change the design of the button using the .btn-lg class, without having to worry that it will mess up the modal behavior. Likewise, in your JavaScript, you can manage the modal behavior and never break any existing CSS. In other words, using the .js- prefix separates your styling classes from your logic classes.

Js Dom selectors
let navigationLinks = document.querySelectorAll('nav a');
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages= document.querySelectorAll('footer img');
