player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player_1name").innerHTML=player1_name+":";
document.getElementById("player_2name").innerHTML=player2_name+":";
document.getElementById("player_1score").innerHTML=player1_score;
document.getElementById("player_2score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
function send(){
get_WORD=document.getElementById("word").value;
word=get_WORD.toLowerCase();


a1=word.charAt(1);
length2=Math.floor(word.length/2);
a2=word.charAt(length2);
length3=word.length-1;
a3=word.charAt(length3);

remove_a1=word.replace(a1,"_");
remove_a2=remove_a1.replace(a2,"_");
remove_a3=remove_a2.replace(a3,"_");

question_word = "<h4 id='word_display'> Q. "+remove_a3+"</h4>"; 
input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn ="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
console.log(answer);
if (answer==word){
    if (answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player_1score").innerHTML=player1_score;
       }
    else{
        player2_score=player2_score+1;
        document.getElementById("player_2score").innerHTML=player2_score;

    }

}
if (question_turn=="player1"){
    question_turn ="player2";
    document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
  
}
else{
    question_turn ="player1";
    document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
  
}

if (answer_turn=="player1"){
    answer_turn ="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
  
}
else{
    answer_turn ="player1";
    document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
    
}
document.getElementById("oudput").innerHTML="";
}