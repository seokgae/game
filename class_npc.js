class NPC{
    constructor(name) {
        this.name = name;
        this.currentRoom = 1004;
        this.lines = [];
    }

    info() {
        let str;
        str = this.name;
        
        return str;
    }

}

const inn_keeper = new NPC('여관주인'); inn_keeper.lines = ['환영합니다.', '안녕하세요', '그렇군요'];
// const yesman = new NPC('하우디'); yesman.lines = ['야', '뭘봐', '나가']; yesman.currentRoom = 1000;

const npcs = [inn_keeper];

function npc_distribution() { //맵에 몬스터 배포
    for (i = 0; i < rooms.length; i++) {
        for (j = 0; j < npcs.length; j++) { 
            if (rooms[i].RoomID == npcs[j].currentRoom) { 
                (rooms[i].npc).push([npcs[j].name, npcs[j]]); 
            } 
        }
    }
}