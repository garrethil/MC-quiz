const mainDiv = document.querySelector('#mainCard');
const header = document.querySelector('#mainText');
const begin = document.querySelector('#startButton');
const options = document.querySelector('#answers');
const choice1 = document.querySelector('#opt1');
const choice2 = document.querySelector('#opt2');
const choice3 = document.querySelector('#opt3');
const choice4 = document.querySelector('#opt4');
const result = document.querySelector('#result');
const timer = document.querySelector('#time');
const submit = document.querySelector('#submit');
const scoreBoard = document.querySelector('#scoreBoard');

var savedScores = [];

let questionBank = [{
    problem: 'What method can you use to count at a stated interval?',
    ans1: '.setTimer()',
    ans2: '.setInt',
    ans3: '.setClock',
    ans4: '.setInterval',
    correct:'.setInterval'
}, {
    problem: 'What data type allows us to store a collection of key-value pairs?',
    ans1: 'Array',
    ans2: 'Object',
    ans3: 'Table',
    ans4: 'Function',
    correct:'Object'
}, {
    problem: 'What conversion method allows us to convert an object to a string?',
    ans1: 'JSON',
    ans2: 'JQuery',
    ans3: 'BootStrap',
    ans4: 'ConvertIt',
    correct:'JSON'
}, {
    problem: 'In an object the correct separator between key-value Pairs is?',
    ans1: '"."',
    ans2: '","',
    ans3: '"|"',
    ans4: '"/"',
    correct:'","'
}, {
    problem: 'The proper syntax to append a child to a parent is?',
    ans1: 'parentElement.appendChild(childElement);',
    ans2: 'childElement.appendChild(parentElement)',
    ans3: 'childElement + parentElement;',
    ans4: 'parentElement(childElement);',
    correct: 'parentElement.appendChild(childElement);' 
}];


var timeEl = 60;
var score = 0;
var currentIndex = 0;

var init = function(){
    begin.textContent = 'Click to Begin JS Quiz';
    begin.addEventListener('click', startGame);
    timer.textContent = 60;
};

var startGame = function(){
    begin.style.display = 'none';
    setTime();
    displayQuestion();
    };

var setTime = function(){
    const timeInterval = setInterval(function() {
        timeEl--;
        timer.textContent = timeEl;

        if(timeEl === 0 || currentIndex === questionBank.length){
            clearInterval(timeInterval);
            endScreen();

        }
        
    }, 1000);
}

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
            wrong();
        }
    });

}

var endScreen = function() {
    mainDiv.innerHTML = '';
    choice1.innerHTML = '';
    choice2.innerHTML = '';
    choice3.innerHTML = '';
    choice4.innerHTML = '';
    result.innerHTML = '';  
    var finalScore = document.createElement('h2');
    finalScore.textContent = 'Score: ' + score;
    mainDiv.appendChild(finalScore);
    
    var inputText = document.createElement('h3');
    inputText.textContent = "Initials:";
    result.appendChild(inputText);

    var initialInput = document.createElement('input');
    result.appendChild(initialInput);
    var submitButton = document.createElement('button');
    submitButton.textContent = "Save Score";
    submit.appendChild(submitButton);

    submit.addEventListener('click', function(event){
        event.preventDefault();
        var userScore = {
            user: initialInput.value,
            finalScore: score
        };
        var savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];
        savedScores.push(userScore);
        localStorage.setItem('savedScores', JSON.stringify(savedScores));
        mainDiv.innerHTML = '';
        result.innerHTML = '';
        submit.innerHTML = '';
        var scoreHeader = document.createElement('h3');
        scoreHeader.textContent = 'HighScores';
        result.appendChild(scoreHeader);

        savedScores = JSON.parse(localStorage.getItem('savedScores'));
    var highScores = document.createElement('ul');
    
    savedScores.forEach(function(score) {
      var listItem = document.createElement('li');
      listItem.textContent = score.user + ' - ' + score.finalScore;
      highScores.appendChild(listItem);
    });

    result.appendChild(highScores);

clearScores();
playAgain();
    });



    
};

var clearScores = function() {
    var clearButton = document.createElement('button');
    clearButton.textContent = "Clear Scores";
    result.appendChild(clearButton);
    
    clearButton.addEventListener('click', function() {
        localStorage.removeItem('savedScores');
        highScores.innerHTML = "";
      });
}

var playAgain = function() {
    var retryButton = document.createElement('button');
    retryButton.textContent = "Play Again";
    result.appendChild(retryButton);
    
    retryButton.addEventListener('click', function() {
location.reload();
      });
}




var correct = function(){
    result.innerHTML = '';
    
    var resultTime = function(){
        const timeInterval = setInterval(function() {

    
            if(timeEl === 0 || currentIndex === questionBank.length){
                clearInterval(resultTime);
    
                gameOver();
            }
            
        }, 1000);
    }
    var cheer = document.createElement('h2');
    cheer.textContent = 'Correct!';
    result.appendChild(cheer);
    currentIndex++;
    if (currentIndex < questionBank.length){
        displayQuestion(); 
    } else {
        endScreen();
    };
};

var wrong = function(){
    result.innerHTML = '';
    var incorrect = document.createElement('h2');
    incorrect.textContent = 'Wrong Answer';
    result.appendChild(incorrect);
    currentIndex++;
    timeEl -= 4;
    if (currentIndex < questionBank.length){
        displayQuestion(); 
    } else {
        endScreen();
    };
};


init();