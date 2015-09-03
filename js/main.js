// Problem: Create an Awesome Web App quiz using an object full of questions...
// Solution: Add interactivity to our app using events...

var quiz = document.getElementById('quiz');
var btnStart = document.getElementById('start-quiz');
var questionsHit = 0,
questionsNumber = 0;


// Array of Questions...
var questions = [
	{
		question: 'What is the capital of Canada?',
		choices: ['São Paulo', 'Madrid', 'Ottawa', 'Cairo'],
		correctAnswer: 2,
	},
	{
		question: 'What is the capital of Sweeden?',
		choices: ['Tokyio', 'Estocolmo', 'Moscow', 'Havana'],
		correctAnswer: 1,
	},
	{
		question: 'What is the capital of Germany?',
		choices: ['Berlim', 'Paris', 'Lyon', 'Montevideu'],
		correctAnswer: 0,
	},
	{
		question: 'What is the capital of Argentina?',
		choices: ['Munique', 'Kiev', 'New York', 'Bueno Aires'],
		correctAnswer: 3,
	},
];

// Creating question Structure...
var createQuestionElements = function(currentQuestion) {
	var option, radio, label, btn;

	var questionHolder = document.createElement('div');
	var question = document.createElement('p');

	questionHolder.classList.add('question');

	question.innerHTML = currentQuestion.question;

	questionHolder.appendChild(question);

	for (var i = 0; i < 4; i++) {
		option = document.createElement('div');
		radio = document.createElement('input');
		label = document.createElement('label');
		btn = document.createElement('a');

		option.classList.add('option');

		radio.type = 'radio';
		radio.name = 'choice';

		option.appendChild(radio);
		option.appendChild(label);

		label.innerHTML = currentQuestion.choices[i];

		questionHolder.appendChild(option);
	}

	quiz.appendChild(questionHolder);

 	btn.classList.add('btn');
	btn.classList.add('btn-small');
	btn.innerHTML = 'Submit';

	btn.addEventListener('click', function() {
		checkAnswer(currentQuestion);
		quiz.innerHTML = '';
		getQuestion();
	});

	quiz.appendChild(btn);
}

var checkAnswer = function(currentQuestion) {
	var answer = document.querySelector('.option input:checked');

	console.log(currentQuestion.choices[currentQuestion.correctAnswer]);

	if (answer.nextSibling.innerHTML === currentQuestion.choices[currentQuestion.correctAnswer]) {
		questionsHit = questionsHit + 1;
	}

	questionsNumber = questionsNumber + 1;
}

var showScore = function() {
	var firstHeading = document.createElement('h2');
	firstHeading.innerHTML = 'Congratulations for finish the Quiz!!!';

	var secondHeading = document.createElement('h3');
	secondHeading.innerHTML = 'Your score is ' + questionsHit + ' out of ' + questionsNumber;

	quiz.appendChild(firstHeading);
	quiz.appendChild(secondHeading)
}

var getQuestion = function() {
	if (typeof questions !== undefined && questions.length > 0) {
		var currentQuestion = questions.shift();
		createQuestionElements(currentQuestion);
	} else {
		showScore();
	} 
}

btnStart.addEventListener('click', function() {
	quiz.innerHTML = '';
	getQuestion();
});
