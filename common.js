
function cha_tw() { // 캐릭터 정보창 출력
        cha_fld.value = elf.info();
}

function bat_tw(s) { //전투정보 출력
        bat_fld.value = s;
        bat_fld.scrollTop = bat_fld.scrollHeight;
}

function room_tw() {//방정보출력
        let location = plyr_loc(elf);
        room_fld.value = location.info();
}

function RandomizeAttack(value) {//공격력 랜덤화
        return Math.floor(Math.random() * value + 1);
}

function plyr_loc(cha) {
        var inroomID; var retroom;
        for (let room of rooms){
                if (cha.currentRoom == room.RoomID)
                        {retroom = room; break;}
        }

        return retroom; //플레이어가 위치한 방 객체 리턴
}

function aggro_chk() { //방의 적대 몬스터 체크
        let location = plyr_loc(elf);

        for (let [divid, monster] of location.mob) {
                if (monster.aggression == 'H'){
                    inBattle = true;;
                }
        }

}

