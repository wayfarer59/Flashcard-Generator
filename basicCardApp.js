var inquirer = require('inquirer');

var basic = require('./basic.js');

var questions = require('./questions.js').questions;
//variable for qustions with blank
var basicQuestions = [];
//creates the questions list
	for (var i =0; i<questions.length; i++){
	var q = new basic.BasicCard(questions[i].full, questions[i].cloze);
		basicQuestions.push(q);
}
//question the user is on
var currentQuestion = 0;
//right answer counter
var rightAnswer = 0;
//wronganswer counter
var wrongAnswer = 0;

function askQuestion(){
	inquirer.prompt([
	{

	type:'input',
	message:basicQuestions[currentQuestion].partial +'\nAnswer:',
	name:'userGuess'

	}	
 
	]).then(function(answers){
		console.log('\n');
	//check if the answer is correct
	if (answers.userGuess === basicQuestions[currentQuestion].back){
		console.log('Correct');
		rightAnswer++;
	} else {

		console.log('incorrect');
		//show the back of the card and answer 
		console.log('Answer is:'+ basicQuestions[currentQuestion].back);
		wrongAnswer++;

	}
		
	if (currentQuestion < basicQuestions.length - 1) {
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
		//reset
		currentQuestion = 0;
		rightAnswer = 0;
		wrongAnswer = 0;

		askQuestion();
	} else {
					
		console.log('Thanks for playing! Goodbye!');
			}
			
			})
		}
	})
}


askQuestion();