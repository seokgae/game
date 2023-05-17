
class Character {
    constructor(name, max_hp, attack) {
        this.name = name;//이름
        this.max_hp = max_hp;//최대체력
        this.attack = attack;//공격
        this.current_hp = max_hp;//현재체력
        this.level = 0; // 레벨
        this.max_exp = 300; // 레벨업 필요 경험치
        this.current_exp = 0; // 최대 경험치
        this.gold = 0; // 보유 골드
    }

    info() {
        document.write("["+this.name+":("+this.max_hp+"/"+this.current_hp+")" //[이름:(최대체력/현재체력)] 
        +"|exp:("+this.max_exp+"/"+this.current_exp+")]"); //[경험치:(최대/현재)]
    }
    
}

class Monster {
    constructor(name, max_hp, attack) {
        this.name = name;//이름
        this.max_hp = max_hp;//최대체력
        this.attack = attack;//공격
        this.current_hp = max_hp;//현재체력
        this.exp = 100;//주는 경험치
        this.gold = 50;// 주는
    }

    info() {
        document.write("["+this.name+":("+this.max_hp+"/"+this.current_hp+")] ");
    }
    
}
