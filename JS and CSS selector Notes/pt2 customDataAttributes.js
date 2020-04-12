Custom Data Attributes
Attribute selectors target HTML elements based on an attribute and value. For example, the following targets all <label> elements with a title attribute:

CSS:
label[title] {
  color: indigo;
}
HTML provides custom data- attributes that allow you to store extra information on any element. Data attributes are regular HTML attributes that begin with the data- prefix followed by a custom name. For example, the following data attributes store information about a teacher:

<ul>
  <li data-topic="javascript" data-id="1">Guil</li>
  <li data-topic="python" data-id="2">Ashley</li>
  <li data-topic="ios" data-id="3">Pasan</li>
<ul>
You can target custom data-* attributes with CSS, also by wrapping them in square brackets:

[data-topic="javascript"] {
  background-color: #3659a2;
}
[data-topic="python"] {
  background-color: #008297;
}
[data-topic="ios"] {
  background-color: #30826C;
}
You can also use attribute selectors in your CSS to set styles based on the data.

html:

<div data-columns="8">...</div>
<div data-columns="6">...</div>
css:

[data-columns="8"] {
  width: 60%;
}
[data-columns="6"] {
  width: 40%;
}
Data Attributes and JavaScript
You learned that when selecting an element with JavaScript, it's recommended that you avoid using a selector that's also used in your CSS. It's also common to select an element using a data attribute. For example, let's say that you're showing and hiding a list based on button clicks. Consider the following HTML:

<button class="btn-sm" data-toggle-controller>Toggle Teachers</button>
<ul class="list-teachers" data-toggle-content>
  ...
</ul>
Instead of selecting the <button> and <ul> with JavaScript using their class, select their data- attribute:

assign the element with the data attribute 'data-toggle-controller' to the variable 'toggler'

var toggler = document.querySelector('[data-toggle-controller]');

assign the element with the data attribute 'data-toggle-controller' to the variable 'toggledContent'
var toggledContent = document.querySelector('[data-toggle-content]');
This separates concerns: the class has the job of styling, and the data- attribute has the job of providing functionality with JavaScript. That way, if you ever need to change a class name, it's not going to affect the JavaScript.
