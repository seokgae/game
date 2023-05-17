
class Character {
    constructor(name, max_hp, attack) {
        this.name = name;//이름
        this.max_hp = max_hp;//최대체력
        this.attack = attack;//공격
        this.current_hp = max_hp;//현재체력
        this.level = 1; // 레벨
        this.max_exp = 300; // 레벨업 필요 경험치
        this.current_exp = 0; // 최대 경험치
        this.gold = 0; // 보유 골드
        this.currentRoom = 1000;
    }

    lvlup() {
        this.level++;
        this.max_hp += 50;
        this.current_hp = this.max_hp;
        this.attack += 3;
        this.current_exp -= this.max_exp;
    }

    info() {
        let str = this.name + ":(" + this.max_hp + "/" + this.current_hp + ")(lv." + this.level + ")" //[이름:(최대체력/현재체력)] 
            + "\n공격력: " + this.attack
            + "\nexp:(" + this.max_exp + "/" + this.current_exp + ")"//[경험치:(최대/현재)] 
            + "\n보유골드 : " + this.gold; //보유골드

        return str;
    }

}

const elf = new Character('플레이어', 400, 10); // 플레이어
