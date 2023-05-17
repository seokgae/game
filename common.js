var cha_fld;
var bat_fld;
var mon_fld;
var turn_indicator;

window.onload = function () {
        cha_fld = document.getElementById("player_txt");
        bat_fld = document.getElementById("battle_txt");
        mon_fld = document.getElementById("monster_txt");
        room_fld = document.getElementById("room_txt");
        turn_indicator = document.getElementById("turn_indicator");

}

function cha_tw(s) { // 캐릭터 정보창 출력
        cha_fld.value = s;
}
function bat_tw(s) { //전투정보 출력
        bat_fld.value = s;
}
function mon_tw(s) {//몬스터정보 출력
        mon_fld.value = s;
}
function room_tw(s) {//방정보출력
        room_fld.value = s;
}

function RandomizeAttack(value) {//공격력 랜덤화
        return Math.floor(Math.random() * value + 1);
}

function player_info(cha) {
         var str = cha.name + ":(" + cha.max_hp + "/" + cha.current_hp + ")(lv." + cha.level + ")\n" //[이름:(최대체력/현재체력)] 
                   + "exp:(" + cha.max_exp + "/" + cha.current_exp + ")\n"//[경험치:(최대/현재)] 
                   + "보유골드 : " + cha.gold + "\n"; //보유골드
        
        return str;  
}

function room_info(cha) { //rooms => 방 객체 배열 //cha : 플레이어 클래스
        temp = cha.currentRoom -1000;
        var str = "현재 방 : " + rooms[temp].RoomName+"\n"
                  +"연결된 방 : ";

        if( rooms[temp].CN != 0)
                str += "북쪽 ";
        if( rooms[temp].CE != 0)
                str += "동쪽 ";
        if( rooms[temp].CS != 0)
                str += "남쪽 ";
        if( rooms[temp].CW != 0)
                str += "서쪽 ";

        return str;       
}

function monster_info(mon) {
        var str = "" + mon.name + ":(" + mon.max_hp + "/" + mon.current_hp + ") ";

        return str;
}
