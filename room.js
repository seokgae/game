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
    }
}
                                  //N, E, S, W
const room1 = new Room("NW", 1000 , 0, 1001, 1003, 0);
const room2 = new Room("NN", 1001 , 0, 1002, 1004, 1000);
const room3 = new Room("NE", 1002 , 0, 0, 1005, 1001);
const room4 = new Room("WW", 1003 , 1000, 1004, 1006, 0);
const room5 = new Room("CC", 1004 , 1004, 1005, 1007, 1003);
const room6 = new Room("EE", 1005 , 1002, 0, 1008, 1004);
const room7 = new Room("SW", 1006 , 1003, 1007, 0, 0);
const room8 = new Room("SS", 1007 , 1004, 1008, 0, 1006);
const room9 = new Room("SE", 1008 , 1001, 0, 0, 1007);

function moveRoom(dir, cha) { // dir | 2:CN 3:CE 4:CS :CW
    temp = cha.currentRoom - 1000;
    switch (dir) {
        case 2: //CN
            if (rooms[temp].CN != 0)
                {cha.currentRoom = rooms[temp].CN; break;}
            else 
                {alert("이동불가!");break;}
        case 3: //CE
            if (rooms[temp].CE != 0)
                {cha.currentRoom = rooms[temp].CE; break;}
                else 
                {alert("이동불가!");break;}
        case 4: //CS
            if (rooms[temp].CS != 0)
                {cha.currentRoom = rooms[temp].CS; break;}
                else 
                {alert("이동불가!");break;}
        case 5: //CW
            if (rooms[temp].CW != 0)
                {cha.currentRoom = rooms[temp].CW; break;}
                else 
                {alert("이동불가!");break;}
    }
    LoadInfo();
}

