
var inquirer = require('inquirer');

var cloze = require('./cloze.js');

var questions = require('./questions.js').questions;

//variable for qustions with blank
var closeQuestions = [];

//creates the questions list
	for (var i = 0; i < questions.length; i++) {
	var q = new cloze.ClozeCard(questions[i].full, questions[i].cloze);
		closeQuestions.push(q);
}

//question the user is on
var currentQuestion = 0;
//right answer counter
var rightAnswer = 0;
//wronganswer counter
var wrongAnswer = 0;

function askQuestion() {
	inquirer.prompt([
	{
	type: 'input',
	message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
	name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		//check if the answer is correct
	if (answers.userGuess === closeQuestions[currentQuestion].cloze){
		console.log('Correct!');
		rightAnswer++;
	} else {
		console.log('Incorrect!');
		wrongAnswer++
		}

		// show the correct answer
		console.log(closeQuestions[currentQuestion].full);
		

		
	if (currentQuestion < closeQuestions.length - 1) {
			currentQuestion++;
			askQuestion();
	} else {
		console.log('Game Over');
		console.log('Correct Answers: ' + rightAnswer);
		console.log('Incorrect Answers: ' + wrongAnswer);

			
		//ask the user that wants to play again
		inquirer.prompt([
		{
			type: 'confirm',
			message: 'Would you like to play again?',
			name: 'playAgain'
				}
		]).then(function (answers) {
	if (answers.playAgain) {
		// reset
		currentQuestion = 0;
		rightAnswer = 0;
		wrongAnswer = 0;

				
	askQuestion();
	} else {
				
		console.log('Thanks for playing! Goodbye');
				}
			})
		}
	})
}


	askQuestion();
