const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.className = 'highlight';
};

const blurHandler = event => {
  event.target.className = '';
};

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);


///// Notes on home work
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function spinElement(event) {
  //Applies spinning animation to button element
  event.target.className = "spin";
}
addEventListener('click', spinElement)
