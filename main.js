var str="";
var turn = 0;
var inBattle;// 전투상태 플래그
var cha_fld;var parentDiv; var npcparentDiv;
var bat_fld;var fight;
var mon_fld;
var turn_indicator;
var bag; var bag_popup;
var drop_table;


window.onload = function () {
    cha_fld = document.getElementById("player_txt");
    bat_fld = document.getElementById("battle_txt");
    room_fld = document.getElementById("room_txt");
    turn_indicator = document.getElementById("turn_indicator");
    battelstart = document.getElementById("battlestart");
    turn_advance = document.getElementById("turn_advance");
    bag = document.getElementById("bag"); bag_popup = document.getElementById("bag_popup");
    drop_table = document.getElementById("drop_table");
    parentDiv = document.getElementById("object_monster");
    npcparentDiv = document.getElementById("object_npc");
    LoadInfo();

    battelstart.addEventListener('click', multiBattle);
    turn_advance.addEventListener('click', advanceTurn);  
    bag.addEventListener('click', bag_click);

}

Monster_distribution();
npc_distribution();













