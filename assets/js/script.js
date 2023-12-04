const mainDiv = document.querySelector('#mainCard');
const header = document.querySelector('#mainText');
const begin = document.querySelector('#startButton');
const options = document.querySelector('#answers');
const choice1 = document.querySelector('#opt1');
const choice2 = document.querySelector('#opt2');
const choice3 = document.querySelector('#opt3');
const choice4 = document.querySelector('#opt4');
const result = document.querySelector('#result');


let questionBank = [{
    problem: 'what couldquestion goes here ___1____',
    ans1: 'answer1',
    ans2: 'answer2',
    ans3: 'answer3',
    ans4: 'answer4',
    correct:'answer1'
}, {
    problem: 'question goes here ____2___',
    ans1: 'answer5',
    ans2: 'answer6',
    ans3: 'answer7',
    ans4: 'answer8',
    correct:'answer6'
}, {
    problem: 'question goes here __3_____',
    ans1: 'answer9',
    ans2: 'answer10',
    ans3: 'answer11',
    ans4: 'answer12',
    correct:'answer11'
}, {
    problem: 'question goes here ___4____',
    ans1: 'answer13',
    ans2: 'answer14',
    ans3: 'answer15',
    ans4: 'answer16',
    correct:'answer16'
}, {
    problem: 'question goes here ___5____',
    ans1: 'answer17',
    ans2: 'answer18',
    ans3: 'answer19',
    ans4: 'answer20',
    correct: 'answer17' 
}];


var time = 0;
var score = 0;
var currentIndex = 0;

var init = function(){
    begin.textContent = 'Click to Begin Code Quiz';
    begin.addEventListener('click', startGame);
};

var displayQuestion = function(){
    var currentQuestion = questionBank[currentIndex];
    mainDiv.innerHTML = '';
    choice1.innerHTML = '';
    choice2.innerHTML = '';
    choice3.innerHTML = '';
    choice4.innerHTML = '';


    var questionElement = document.createElement('h1');
    questionElement.textContent = currentQuestion.problem;
    mainDiv.appendChild(questionElement);
    

    var option1 = document.createElement('button');
    option1.textContent = currentQuestion.ans1;
    choice1.appendChild(option1);
    option1.addEventListener('click', function(event){
        const clickedAnswer = event.target;
        const choice = clickedAnswer.textContent;
        if (choice === currentQuestion.correct){
            score++;
            correct();
        } else {
            time - 5;
            wrong();
        }
    });

    var option2 = document.createElement('button');
    option2.textContent = currentQuestion.ans2;
    choice2.appendChild(option2);
    option2.addEventListener('click', function(event){
        const clickedAnswer = event.target;
        const choice = clickedAnswer.textContent;
        if (choice === currentQuestion.correct){
            score++;
            correct();
        } else {
            time - 5;
            wrong();
        }
    });

    var option3 = document.createElement('button');
    option3.textContent = currentQuestion.ans3;
    choice3.appendChild(option3);
    option3.addEventListener('click', function(event){
        const clickedAnswer = event.target;
        const choice = clickedAnswer.textContent;
        if (choice === currentQuestion.correct){
            score++;
            correct();
        } else {
            time - 5;
            wrong();
        }
    });

    var option4 = document.createElement('button');
    option4.textContent = currentQuestion.ans4;
    choice4.appendChild(option4);
    option4.addEventListener('click', function(event){
        const clickedAnswer = event.target;
        const choice = clickedAnswer.textContent;
        if (choice === currentQuestion.correct){
            score++;
            correct();
        } else {
            time - 5;
            wrong();
        }
    });
}

var correct = function(){
    result.innerHTML = '';
    var cheer = document.createElement('h2');
    cheer.textContent = 'Correct!';
    result.appendChild(cheer);
    currentIndex++;
    displayQuestion();
};

var wrong = function(){
    result.innerHTML = '';
    var incorrect = document.createElement('h2');
    incorrect.textContent = 'Wrong Answer';
    result.appendChild(incorrect);
    currentIndex++;
    displayQuestion();
};

var startGame = function(){
    begin.style.display = 'none';
    displayQuestion();
    };


var nextQuestion = function(){

}

init();