const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
};
// Dot Notation
console.log(ernie.breed);
console.log(ernie.age);
console.log(ernie.bark());

//Bracket Notation
console.log(ernie['breed']);
console.log(ernie['age']);
ernie['bark']();

//updating an object
ernie.age = 2;
ernie['age']= 2 ;

//adding to an object
ernie.color ='black';
ernie['color']= 'black';

// log to console
console.log(ernie);

//other examples
const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if(this.isTurn){
        return player1['name'] + 'is now playing';
        }
    }
};

//How to call and assign to var properties of an object.
const myString = {
	string: "Programming with Treehouse is fun!",
  countWords: function(){
    return this.string.split(' ').length;
  }
};
var numWords = myString.countWords();
//var numWords = myString.['countWords']();

//create a property
myString.characters = myString.string.length;
//myString['characters'] = myString['string'].length;

//Change a value or properties
myString.string = "I love full stack JavaScript";
//myString['string'] = "I love full stack JavaScript";
