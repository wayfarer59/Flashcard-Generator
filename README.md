# Flashcard-Generator
11th Week Homework

## Description on how to use the app
There is a 2 kind of flash card generator;
-Basic and close card
-Run basicCardApp.js for basic card game
-Run clozeCardApp.js for the close card game
## Requirements
install inquirer npm package
- npm install inquirer

 HW requirements were

In this week's assignment, you will create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

## Technologies Used
- java Constructors
- Node js

## Code Explaination

I created a function use the inquirer prompt command to ask questions

```
function askQuestion() {
	inquirer.prompt([
	{
	type: 'input',
	message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
	name: 'userGuess'
		}


		

