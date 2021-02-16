player1_name = localStorage.getItem("player1_namekey");
player2_name = localStorage.getItem("player2_namekey");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+": ";
document.getElementById("player2_name").innerHTML = player2_name+": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;

function sendWord(){
    get_word = document.getElementById("sendWord").value;

    word = get_word.toLowerCase();

    console.log("Word lowercased is: "+word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    index_middle = Math.floor(word.length/2);
    charAt2 = word.charAt(index_middle);
    console.log(charAt2);

    index_last = word.length - 1;
    charAt3 = word.charAt(index_last);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question = "<h4 class='word_display'>Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check = "<br><br><button id='check_button' class='btn btn-info' onclick='checkAnswer()'>Check</button";

    row = question + input_box + check;

    document.getElementById("output").innerHTML = row;
    document.getElementById("sendWord").innerHTML = "";
}

question_turn = "player1_name";
answer_turn = "player2_name";

function checkAnswer(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("The lowercase answer is - "+answer);

    if(answer == word){
        if(answer_turn == "player1_name"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1_name"){
        question_turn = "player2_name";
        document.getElementById("player_question").innerHTML = "Question Turn - "+player2_name;
    }
    else{
        question_turn = "player1_name";
        document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
    }

    if(answer_turn == 'player1_name'){
        answer_turn = "player2_name";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;
    }
    else{
        answer_turn = "player1_name";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player1_name;
    }

    document.getElementById("output").innerHTML = "";
}

