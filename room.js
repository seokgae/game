//  1000 - 1001 - 1002
//    |     |       |
//  1003 - 1004 - 1005
//    |     |       |
//  1006 - 1007 - 1008
//

class Room {
    constructor(name, roomID, n, e, s, w) {
        this.RoomName = name;
        this.RoomID = roomID;
        this.CN = n;
        this.CE = e;
        this.CS = s;
        this.CW = w;
        this.mob = [];
        this.npc = [];
        this.root = [];
    }

    info() { //rooms => 방 객체 배열 //cha : 플레이어 클래스
        let str = "현재 방 : " + this.RoomName + "\n"
            + "연결된 방 : ";

        if (this.CN != 0)
            str += "북쪽 ";
        if (this.CE != 0)
            str += "동쪽 ";
        if (this.CS != 0)
            str += "남쪽 ";
        if (this.CW != 0)
            str += "서쪽 ";
        str += "\n현재 방의 몬스터 수: " + (this.mob).length;
        // for(i=0;i<rooms[temp].mob;i++){
        //         str += 
        // }

        return str;
    }

    checkmob() {
        if ((this.mob).length === 0)
            return "empty";
        else
            return this.mob;
    }
}
//N, E, S, W
const room1 = new Room("NW", 1000, 0, 1001, 1003, 0);
const room2 = new Room("NN", 1001, 0, 1002, 1004, 1000);
const room3 = new Room("NE", 1002, 0, 0, 1005, 1001);
const room4 = new Room("WW", 1003, 1000, 1004, 1006, 0);
const room5 = new Room("여관", 1004, 1001, 1005, 1007, 1003);
const room6 = new Room("EE", 1005, 1002, 0, 1008, 1004);
const room7 = new Room("SW", 1006, 1003, 1007, 0, 0);
const room8 = new Room("SS", 1007, 1004, 1008, 0, 1006);
const room9 = new Room("SE", 1008, 1001, 0, 0, 1007);

const rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9];

function load_root() { //root tabel에 드랍된 아이템 div생성
    drop_table.replaceChildren();

    for(i=0; i< cha_location.root.length;i++){ //방의 root배열 따라 div생성
        let newDiv = document.createElement("div");
        newDiv.id = cha_location.root[i].name
        newDiv.innerText = cha_location.root[i].name;
        newDiv.addEventListener('click', collect_root); 
        drop_table.insertBefore(newDiv, null);
    }
}

function collect_root() { // root table에 생성된 div클릭 시 아이템 획득
    
    for(i=0; i < cha_location.root.length;i++){
        if (this.id == cha_location.root[i].name){
            elf.inventory.push(cha_location.root[i]); // 클릭한 아이템을 캐릭터 인벤토리 배열에 삽입
            cha_location.root.splice(i, 1); break; // 삽입한 아이템 방의 루트아이템배열에서 제거          
        }
    }
    load_root();// 방의 루트테이블 재배치
}

function draw_map() { //맵 연결에 따라 맵 그리기
    if(cha_location.CN == 0){box_north.style.visibility = 'hidden'; line_north.style.visibility = 'hidden';}
    else{box_north.style.visibility = 'visible'; line_north.style.visibility = 'visible';}
    if(cha_location.CW == 0){box_west.style.visibility = 'hidden'; line_west.style.visibility = 'hidden';}
    else{box_west.style.visibility = 'visible'; line_west.style.visibility = 'visible';}
    if(cha_location.CE == 0){box_east.style.visibility = 'hidden'; line_east.style.visibility = 'hidden';}
    else{box_east.style.visibility = 'visible'; line_east.style.visibility = 'visible';}
    if(cha_location.CS == 0){box_south.style.visibility = 'hidden'; line_south.style.visibility = 'hidden';}
    else{box_south.style.visibility = 'visible'; line_south.style.visibility = 'visible';}
}

