class Monster {
    constructor(name, max_hp, attack) {
        this.name = name;//이름
        this.max_hp = max_hp;//최대체력
        this.attack = attack;//공격
        this.current_hp = max_hp;//현재체력
    }

    info() {
        document.write("["+this.name+":("+this.max_hp+"/"+this.current_hp+")] ");
    }
}

class Character {
    constructor(name, max_hp, attack) {
        this.name = name;
        this.max_hp = max_hp;
        this.attack = attack;
        this.current_hp = max_hp;
    }

    info() {
        document.write("["+this.name+":("+this.max_hp+"/"+this.current_hp+")] ");
    }
}