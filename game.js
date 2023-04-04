
Player_1_name = localStorage.getItem("player1_name");
Player_2_name = localStorage.getItem("player2_name");
Player1score = 0;
Player2score = 0;
document.getElementById("player1_name").innerHTML=Player_1_name + ":";
document.getElementById("player2_name").innerHTML=Player_2_name + ":";
document.getElementById("player1_score").innerHTML=Player1score;
document.getElementById("player2_score").innerHTML=Player2score;
document.getElementById("player_question").innerHTML="Question Turn:  " + Player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:  " + Player_2_name;
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br> Answer:  <input type='text' id='input_checkbox'>";
    check_button = "<br><br> <button class='btn btn-primary' onclick='check()'> Check </button>";
    row=question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer= document.getElementById("input_checkbox").value;
    if (get_answer==actual_answer) {
        if (answer_turn=="player1") {
            Player1score = Player1score + 1;
            document.getElementById("player1_score").innerHTML=Player1score;
        }
        else {
            Player2score = Player2score + 1;
            document.getElementById("player2_score").innerHTML=Player2score; 
        }
    }
    if (question_turn=="player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn:  " + Player_2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Question Turn:  " + Player_1_name;   
    }
    if (answer_turn=="player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn:  " + Player_2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn:  " + Player_1_name;   
    }
    document.getElementById("output").innerHTML="";
}