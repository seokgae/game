
function Battle_turn(mon, cha) {
    
    while (true) {
        var mon_atk = RandomizeAttack(mon.attack); 
        var cha_atk = RandomizeAttack(cha.attack);
        console.log(cha.current_hp);
        document.write(cha.name + "이 " + mon.name + "에게 " + cha_atk + "의 피해를 입혔습니다."); br();
        document.write(mon.name + "이 " + cha.name + "에게 " + mon_atk + "의 피해를 입혔습니다."); br();
        if(cha_atk > mon.current_hp){
            mon.current_hp = 0;
            mon.info(); cha.info(); hr();
            return cha;
        }
        else if(mon_atk > cha.current_hp){
            cha.current_hp = 0;
            mon.info(); cha.info(); hr();
            return mon;
        }
        else{
            mon.current_hp -= cha_atk;
            cha.current_hp -= mon_atk;            
            mon.info(); cha.info(); hr();
        }
        console.log(cha.current_hp);        
    }
}

const orc = new Monster('Orc', 120, 20);
const elf = new Character('Elf', 100, 10);
orc.info(); br(); elf.info();

Battle_start();Battle_turn(orc, elf);





