function Battle_turn(mon, cha) {
    // Battle_start();
    if (mon.current_hp > 0 && cha.current_hp > 0) {
        turn++;
        var mon_atk = RandomizeAttack(mon.attack);
        var cha_atk = RandomizeAttack(cha.attack);

        if (cha_atk >= mon.current_hp) { // 캐릭터가 몬스터 마격 --> 몬스터 사망 전투보상
            mon.current_hp = 0;
            Battle_End(cha, mon);
            cha_tw(player_info(elf));
            current_mode = "Idle";
        }
        else if (mon_atk >= cha.current_hp) { //몬스터가 캐릭터 마격 --> 플레이어 사망
            cha.current_hp = 0;
            cha_tw(player_info(elf));
            mon_tw(monster_info(orc));
            bat_tw("플레이어 사망");
            current_mode = "Idle";
        }
        else { // 전투진행
            mon.current_hp -= cha_atk;
            cha.current_hp -= mon_atk;
            str += cha.name + "이 " + mon.name + "에게 " + cha_atk + "의 피해를 입혔습니다.\n"
                + mon.name + "이 " + cha.name + "에게 " + mon_atk + "의 피해를 입혔습니다.\n----------------------------------turn"+turn+"\n"
            cha_tw(player_info(elf));
            mon_tw(monster_info(orc));
            bat_tw(str); bat_fld.scrollTop = bat_fld.scrollHeight;
        }
    }
}

function Battle_End(cha, mon) { //전투보상 계산
    cha.gold += mon.gold;
    cha.current_exp += mon.exp;
    if(cha.current_exp >= cha.max_exp){
        cha.level += 1;
        cha.current_exp -= cha.max_exp;
    }
    bat_tw("전투종료\n"+cha.name+"가"+mon.name+"을 잡고 경험치 "+mon.exp+"을 획득했습니다.\n"
    +cha.name+"가"+mon.name+"을 잡고 골드 "+mon.gold+"을 획득했습니다.") // 보상내역 출력
    mon_tw(""); //몬스터 정보창 비우기   
}

function LoadInfo() {
    str="";
    turn = 0; turn_indicator.value = "turn:"+turn;
    bat_tw("");
    orc.current_hp = orc.max_hp;
    elf.current_hp = elf.max_hp;

    cha_tw(player_info(elf));
    room_tw(room_info(elf));
    mon_tw(monster_info(orc));
}