
var upper = 10000;

var randomNumber=getRandomNumber(upper);
var guess;
attempts=0;


function getRandomNumber(upper) {return Math.floor( Math.random() * upper ) + 1;
}
//guess vs. randomNumber creates two var that both call the same function until they are equal.//
while (guess!==randomNumber){
//guess calls to var guess in global scope and makes it call to the function//
   guess=getRandomNumber(upper);attempts+=1;
        }

document.write("<p>The random number was "  +randomNumber + ".</p>" );
document.write("<p>The Computer's number of attempts " +attempts +".</p>");


//New code//
//var secret exist globally but is updated from the "do while loop"//
var secret;

do{ secret=prompt("What is the secret password?") ;}
while ( secret !== "sesame" );
document.write("You know the secret password. Welcome.");
