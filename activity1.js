score = 0;

function updateScore(){

    score = score + 1;
    document.getElementById("score_label").innerHTML = "Score: "+score;
}

function saveScore(){
    localStorage.setItem("scorekey",score);
}

function nextPage(){
    window.location = "activity2.html";
}