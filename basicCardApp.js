var inquirer = require('inquirer');

var basic = require('./basic.js');

var questions = require('./questions.js').questions;

var basicQuestions = [];

for (var i =0; i<questions.length; i++){
	var q = new basic.BasicCard(questions[i].full)
	basicQuestions.push(q);
}

var currentQuestion = 0;

var rightAnswer = 0;

var wrongAnswer = 0;

function askQuestion(){
	inquirer.prompt([
	{

		type:'input',
		message:basicQuestions[currentQuestion].full +'\nAnswer:',
		name:'userGuess'

	}	

		]).then(function(answers){
			console.log('\n');
			if (answers.userGuess === basicQuestions[currentQuestion].cloze){
				console.log('Correct');
				rightAnswer++;
			} else {

				console.log('incorrect');
				wrongAnswer++;

			}
		console.log(basicQuestions[currentQuestion].cloze);


if (currentQuestion < basicQuestions.length - 1) {
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Game Over');
			console.log('Correct Answers: ' + rightAnswer);
			console.log('Incorrect Answers: ' + wrongAnswer);

inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					
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