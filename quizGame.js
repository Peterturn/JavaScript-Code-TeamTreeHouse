/*        Quiz Game
Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown:
3-4 is a silver crown;
1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

var score = 0;

    //1-5 questions prompts//
var question1= prompt('what is the first letter of the alphabet?');
  if (question1.toUpperCase()=== "A") {
    score += 1; alert('Good Job, you got it right! Your score is: ' + score);
  }

    else {alert('Incorrect. The answer is A. You score is: ' + score);
  }


var question2 = prompt('what is the name of a program that has the same name as a jewel?');
  if (question2.toUpperCase()=== "RUBY") {
     score += 1; alert('Good Job, you got it right! Your score is: ' +score);
   }

    else {alert('Incorrect. The answer is Ruby. You score is: ' + score);
  }


var question3= prompt('what is the name of a program that has the same name as a snake');
if (question3.toUpperCase()==='PYTHON') {
  score += 1; alert('Good Job, you got it right! Your score is: ' +score);
  }
  else {
    alert('Incorrect. The answer is Python. You score is: '+ score);
  }

var question4= prompt('what is the company that makes Iphones and and has the name of a fruit?');
if (question4.toUpperCase() === 'APPLE') {
  score+=1; alert('Good Job, you got it right! Your score is: ' +score);
}
  else {
    alert('Incorrect. The answer is Apple. You score is: '+ score);
  }

var question5= prompt('what how many letter in the word cat.?');
if (parseInt(question5)===3 || question5.toUpperCase()==='THREE') {
  score+=1; alert('Good Job, you got it right! Your score is: ' +score);
}
    else {alert('Incorrect. The answer is 3. You score is: '+ score);

    }

// Final message and score
// Found broken syntax string ... forgot a plus sign between [+score] -> + <- (error point) " Points."

    if (score ===5) {document.write('Good Job! you earned the Gold Crown you got 5 points!');
    }
      else if (score === 4){document.write("Good Job! you earned the Silver Crown you got " +score +" points!");
    }
        else if (score===3) {document.write("Good Job! you earned the Bronze Crown you got " +score + " points!");
    }
          else if (score === 2) {document.write("Not bad! you earned " +score +           " points.");
          }
            else {document.write("<p> Try again.  you didn't earn enough points.</p>");}
