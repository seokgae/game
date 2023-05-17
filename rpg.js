class Monster {
    constructor(name ,hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    info() {
        document.write("name: "+this.name+"\r");br();
        document.write("hp: "+this.hp+"\r");br();
        document.write("attack: "+this.attack+"\r");br();
    }
}

class Character {
    constructor(name ,hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    info() {
        document.write("name: "+this.name+'\n\n');br();
        document.write("hp: "+this.hp+"\r");br();
        document.write("attack: "+this.attack+"\r");br();
    }
}

const orc = new Monster('Orc', 120, 20);
const elf = new Character('Elf', 100, 10);
orc.info(); br(); elf.info();
