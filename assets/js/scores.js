const scores = JSON.parse(localStorage.getItem("scores"));
const highScore = document.getElementById("highscores")
if(scores){
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        const li = document.createElement("li");
        li.innerHTML = score.initials + " - " + score.seconds
        highScore.appendChild(li);
    } 
}

document.getElementById('clear').onclick = function(){
localStorage.removeItem("scores");
highScore.remove();
}

