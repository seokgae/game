const orc = new Monster('Orc', 120, 20);
const elf = new Character('Elf', 200, 20);
var str="";
var turn = 0;
// orc.info(); br(); elf.info();

function Battle_turn(mon, cha) {
    // Battle_start();
    if (mon.current_hp > 0 && cha.current_hp > 0) {
        turn++;
        var mon_atk = RandomizeAttack(mon.attack);
        var cha_atk = RandomizeAttack(cha.attack);

        if (cha_atk > mon.current_hp) { // 캐릭터가 몬스터 마격 --> 몬스터 사망 전투보상
            mon.current_hp = 0;
            Battle_End(cha, mon);
            cha_tw(player_info(elf));
            mon_tw(monster_info(orc));
        }
        else if (mon_atk > cha.current_hp) { //몬스터가 캐릭터 마격 --> 플레이어 사망
            cha.current_hp = 0;
            cha_tw(player_info(elf));
            mon_tw(monster_info(orc));
            // Battle_EndText();
            bat_tw("플레이어 사망");
        }
        else { // 전투진행
            mon.current_hp -= cha_atk;
            cha.current_hp -= mon_atk;
            str += cha.name + "이 " + mon.name + "에게 " + cha_atk + "의 피해를 입혔습니다.\n"
                + mon.name + "이 " + cha.name + "에게 " + mon_atk + "의 피해를 입혔습니다.\n----------------------------------turn"+turn+"\n"
            cha_tw(player_info(elf));
            mon_tw(monster_info(orc));
            bat_tw(str); bat_fld.scrollTop = bat_fld.scrollHeight;
            // bat_tw(cha.name + "이 " + mon.name + "에게 " + cha_atk + "의 피해를 입혔습니다.\n"
            //         +mon.name + "이 " + cha.name + "에게 " + mon_atk + "의 피해를 입혔습니다."); 
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
    +cha.name+"가"+mon.name+"을 잡고 골드 "+mon.gold+"을 획득했습니다.")
    // document.write(cha.name+"가"+mon.name+"을 잡고 경험치 "+mon.exp+"을 획득했습니다.");br();
    // document.write(cha.name+"가"+mon.name+"을 잡고 골드 "+mon.gold+"을 획득했습니다.");br();
    // cha.info();document.write("[보유 골드:"+cha.gold+"]");hr();
}

function Battle() {
    Battle_turn(orc, elf);
}







