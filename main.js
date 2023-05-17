var str="";
var turn = 0;
var inBattle;// 전투상태 플래그
var cha_fld;var parentDiv; var npcparentDiv;
var bat_fld;var fight;
var mon_fld;
var turn_indicator;
var bag; var bag_popup;
var drop_table;
var line_north;var line_west;var line_east;var line_south;
var box_north; var box_west; var box_east; var box_south;


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
    line_north = document.getElementById("line_north");line_west = document.getElementById("line_west");
    line_east = document.getElementById("line_east");line_south = document.getElementById("line_south");
    box_north = document.getElementById("box_north");box_west = document.getElementById("box_west");
    box_east = document.getElementById("box_east");box_south = document.getElementById("box_south");
    LoadInfo();

    battelstart.addEventListener('click', multiBattle);
    turn_advance.addEventListener('click', advanceTurn);  
    bag.addEventListener('click', bag_click);

    box_east.addEventListener('click', moveRoom);
    box_west.addEventListener('click', moveRoom);
    box_north.addEventListener('click', moveRoom);
    box_south.addEventListener('click', moveRoom);

}

Monster_distribution();
npc_distribution();













