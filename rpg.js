const orc = new Monster('Orc', 120, 20);
const elf = new Character('플레이어', 200, 20);
var str="";
var turn = 0;
var current_mode = "";// Battle || Idle || 
const rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9];


function Battle() {
    current_mode = "Battle";
    Battle_turn(orc, elf);turn_indicator.value = "turn:"+turn;
}







