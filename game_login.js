function adduser(){
   var player_1name=document.getElementById("player1_name_input").value;
   var player_2name=document.getElementById("player2_name_input").value;
   localStorage.setItem("player1",player_1name);
   localStorage.setItem("player2",player_2name);
   window.location="game_page.html";
}