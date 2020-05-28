
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



///////////

var quotes =[
  {
    //Quote 1
  author: 'Peppa Pig' ,
    quote:'Everyone loves jumping up and down in muddy puddles!',
    citation: 'The Peppa Pig Series',
    number:1
  },
  {
    //Quote 2
  author: 'King David Benjessi, ' ,
    quote:'God is our refuge and strength, an ever-present help in trouble.',
    citation: 'NKJV Bible, Psalm 46:1-3',
    number:2


  },
  {
    //Quote 3
    author: 'Steve Jobs' ,
      quote:'Design is not just what it looks like and feels like. Design is how it works. Innovation distinguishes between a leader and a follower. I want to put a ding in the universe.',
      number:3
  },
  {
    //Quote 4
    author: 'Bill Gates' ,
      quote:'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
      number:4
  },
  {
    //Quote 5
    author: 'Mother Teresa' ,
      quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier. Kind words can be short and easy to speak, but their echoes are truly endless.',
      number:5
  },
  {
    //Quote 6
    author: 'Bob Marley' ,
      quote:'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.',
      number:6
  },
  {
    //Quote 7
    author: 'Jesus Christ' ,
      quote:'For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?',
      number:7
  },
  {
    //Quote 8
    author: 'David Hasselhoff' ,
      quote:'I am a cheesy over-the-top megalomaniac with a deep voice and the most amazing pecs.',
      number:8
  },
  {
    //Quote 9
    author: 'George W. Bush' ,
      quote:'Some folks look at me and see a certain swagger, which in Texas is called "walking."',
      number:9
  },
  {
    //Quote 10
    author: 'Donald Trump' ,
      quote:'No dream is too big. No challenge is too great. Nothing we want for our future is beyond our reach.',
      year: 'Nov 9, 2016',
      number:10

  },
  {
    //Quote 11
    author: 'Britney Spears' ,
      quote:'The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff.',
      number:11
  },
  {
    //Quote 12
    author: 'Barack Obama' ,
      quote: 'If you are walking down the right path and you are willing to keep walking, eventually you will make progress.',
      number:12
  }
];

console.log(quotes);

var message;


function getRandomQuote(){

    var randomNum = Math.floor(Math.random() * quotes.length );

for ( var i=0; i<quotes.length; i++ ){

    var grabQuote = quotes[randomNum] ;
  return grabQuote;}
}

console.log(getRandomQuote());
