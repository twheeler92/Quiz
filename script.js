

var question = ["q1.html", "q2.html", "q3.html", "q4.html", "q5.html", "high-score.html"];
var questionCount = parseInt(localStorage.getItem("questionCount"));
var score = parseInt(localStorage.getItem("score"));
// var uName = localStorage.getItem("uName");

// var uName = parseString(localStorage.getItem("name"));

if (isNaN(questionCount) || questionCount > 5) {
    questionCount = 0;
}

if (isNaN(score)) {
    score = 0;
}



console.log("Score: ", score);
console.log("Question Number: ", questionCount);


// Tracks score and question number 
function wrongAnswer(){
    score = score - 100;
    localStorage.setItem("score", score);
    questionCount = questionCount + 1;
    localStorage.setItem("questionCount", questionCount);
    window.location=question[questionCount];
}

function correctAnswer(){
    score = score + 100;
    localStorage.setItem("score", score);
    questionCount = questionCount + 1;
    localStorage.setItem("questionCount", questionCount);
    window.location=question[questionCount];
}

function startQuiz(){
    localStorage.clear();
    // var uName = prompt("Please enter your name");
    // localStorage.setItem("uName", uName);

    
    window.location=question[0];
}

function test(){
    var uName = prompt("Please enter your name");
    // uName = localStorage.getItem("name");
    let printName = document.querySelector('#score-box');
    let printScore = document.querySelector('#score-box');
    console.log("test is working" , uName);
    printScore.append(uName);
    printScore.append(score);
}

function highScore(){
    
    // let test1 = document.querySelector('#test');
    // test1.append(score);
    // if (questionCount = 5) {
    //     ('test').append(score);
    // }
}