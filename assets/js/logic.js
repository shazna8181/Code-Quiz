let quizNumber = 0;
let seconds = 75;
let timerInterval;
let alertDisplay;

const timer = document.getElementById('time');

//Quiz logic starts
document.getElementById('start').onclick = function () {
    questions.hidden = false;
    // hide Quiz intro screen [or] document.getElementById('questions');
    document.getElementById('start-screen').hidden = true;
    setQuestion(0);
    timerInterval = setInterval(function () {
        timer.innerHTML = --seconds;
    }, 1000);
}

function alertDisplayMsg(type){
    if(type === "correct"){
        document.getElementById('correct').hidden = false;
        document.getElementById('wrong').hidden = true;
    } else {
        document.getElementById('correct').hidden = true;
        document.getElementById('wrong').hidden = false;
    }
    document.getElementById('feedback').hidden = false; 
    alertDisplay = setTimeout(function () {
        document.getElementById('feedback').hidden = true;
    }, 2000)

    console.log(type);
}

//compare user answer and loop continues till Quiz array end
function answer(userAnswer) {
    clearTimeout(alertDisplay);
    if (userAnswer === quizArray[quizNumber].correctAnswer) {
        //correct: sound applied, 
        alertDisplayMsg("correct")
        
    } else {
        //Incorrect: sound applied, time deducted
        seconds -= 20;
        timer.innerHTML = seconds; 
        alertDisplayMsg("wrong")
    }
    //move to next question in the array
    quizNumber += 1;
    if (quizNumber < quizArray.length) {
        setQuestion(quizNumber);
    } else {
        questions.hidden = true;
        document.getElementById('end-screen').hidden = false;
        clearInterval(timerInterval);
        if (seconds < 0) {
            seconds = 0
        }
        document.getElementById('final-score').innerHTML = seconds;
    }
}

document.getElementById('choice1').onclick = function () { answer(1) };
document.getElementById('choice2').onclick = function () { answer(2) };
document.getElementById('choice3').onclick = function () { answer(3) };
document.getElementById('choice4').onclick = function () { answer(4) };

document.getElementById('submit').onclick = function () {
    let initials = document.getElementById('initials').value;
    if (!initials){
        alertDisplayMsg("Wrong");
        return;
    }
    initials = initials.toUpperCase();
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    const score = { initials, seconds }
    scores.push(score);
    seconds = 0;
    scores.sort(function (a, b) {
        return b.seconds - a.seconds
    });
    localStorage.setItem("scores", JSON.stringify(scores))
    window.location.href = "./highscores.html";
};



// Reference: https://stackoverflow.com/questions/6242976/javascript-hide-show-element