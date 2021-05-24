

var question = ["index.html", "q2.html", "q3.html", "q4.html", "q5.html", "high-score.html"];
var questionCount = parseInt(localStorage.getItem("questionCount"));
var score = parseInt(localStorage.getItem("score"));

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
