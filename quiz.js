// Quiz application
alert("Welcome to Nick's Javascript Quiz!");



// Ask quiz questions and count correct answers
var numCorrect = 0;

var answer1 = "TRUE";
var answer2 = "FALSE";
var answer3 = "VARIABLE";
var answer4 = "MOZILLA DEVELOPER NETWORK";
var answer5 = "LOGICAL";


var question1 = prompt("True or False: Most modern web browsers have a JavaScript interpreter built in.");
if (question1.toUpperCase() === answer1) {
  numCorrect ++;
}
console.log("Answers correct: " + numCorrect);

var question2 = prompt("True or False: JavaScript is the same as Java.");
if (question2.toUpperCase() === answer2) {
  numCorrect ++;
}
console.log("Answers correct: " + numCorrect);

var question3 = prompt("In JavaScript, a ________ is a way of storing and keeping track of information ina program.");
if (question3.toUpperCase() === answer3) {
  numCorrect ++;
}
console.log("Answers correct: " + numCorrect);

var question4 = prompt("What does 'MDN' stand for? (Hint: Developers may use it as a reference when programming in JavaScript or other web languages.");
if (question4.toUpperCase() === answer4) {
  numCorrect ++;
}
console.log("Answers correct: " + numCorrect);

var question5 = prompt("In JavaScript, 'Comparison Operators' compare two values and always result in a true or false value, while '_______ Operators' allow you to compare the results of more than one comparison operator.");
if (question5.toUpperCase() === answer5) {
  numCorrect ++;
}
console.log("Answers correct: " + numCorrect);



// Provide final message after quiz letting player know how many questions correct.
alert("You got " + numCorrect + " answers correct out of 5 questions.");



// Rank the player (if 5/5 Gold Crown; 3-4 Silver Crown; 1-2 Bronze Cornw; 0 no crown.
if (numCorrect === 5) {
  document.write("<p>CONGRATULATIONS! You got a perfect score! 5/5 answers correct! You get a gold crown!</p>");
} else if (numCorrect >= 3) {
    document.write("<p>You got " + numCorrect + "/5 answers correct. You get a silver crown!</p>");
} else if (numCorrect >= 1) {
    document.write("<p>You got " + numCorrect + "/5 answers correct. You get a bronze crown!</p>");
} else {
  document.write("<p>Sorry to hear that you got 0 questions correct. You get no crown. Better luck next time.</p>");
}


// Show the correct answers




