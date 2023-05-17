var cha_fld; 
var bat_fld;
var mon_fld;

window.onload = function() {
    cha_fld = document.getElementById("player_txt");
    bat_fld = document.getElementById("battle_txt");
    mon_fld = document.getElementById("monster_txt");
}

function cha_tw(s) {
        cha_fld.value = s;
}
function bat_tw(s) {
        bat_fld.value = s;
}
function mon_tw(s) {
        mon_fld.value = s;
}

// function br(){
//     document.write("<br>");
// }

// function hr(){
//     document.write("<hr>");
// }

function RandomizeAttack(value) {
    return Math.floor(Math.random()*value+1);
}

// function Battle_start() {
//     hr();document.write("전투시작");hr();
// }

// function Battle_EndText() {
//     hr();document.write("전투종료");hr();   
// }


