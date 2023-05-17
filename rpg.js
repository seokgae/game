class Monster {
    constructor(name ,hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    info() {
        document.write("name: "+this.name);br();
        document.write("hp: "+this.hp);br();
        document.write("attack: "+this.attack);br();
    }
}

class Character {
    constructor(name ,hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    info() {
        document.write("name: "+this.name);br();
        document.write("hp: "+this.hp);br();
        document.write("attack: "+this.attack);br();
    }
}

function Battle_turn(mon, cha) {
    var mon_atk = RandomizeAttack(cha.attack); var cha_atk = RandomizeAttack(mon.attack);
    mon.hp -= mon_atk;
    cha.hp -= cha_atk;
    document.write(cha.name+"이 "+mon.name+"에게 "+cha_atk+"의 피해를 입혔습니다."); br(); mon.info(); br(); 
    document.write(mon.name+"이 "+cha.name+"에게 "+mon_atk+"의 피해를 입혔습니다."); br(); cha.info(); br();
    hr();
}

const orc = new Monster('Orc', 120, 20);
const elf = new Character('Elf', 100, 10);
orc.info(); br(); elf.info();

Battle_start();Battle_turn(orc, elf); Battle_turn(orc, elf);






