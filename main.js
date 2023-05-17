var str="";
var turn = 0;
var inBattle;// 전투상태 플래그
var cha_fld;var parentDiv;
var bat_fld;var fight;
var mon_fld;
var turn_indicator;


window.onload = function () {
    cha_fld = document.getElementById("player_txt");
    bat_fld = document.getElementById("battle_txt");
    room_fld = document.getElementById("room_txt");
    turn_indicator = document.getElementById("turn_indicator");
    fight = document.getElementById("battlestart");
    parentDiv = document.getElementById("object_monster");
    LoadInfo();

    fight.addEventListener('click', multiBattle);
}


Monster_distribution();










