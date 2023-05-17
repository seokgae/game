function Monster_distribution() { //맵에 몬스터 배포
    for (i = 0; i < monsters.length; i++) {
        var designation = Math.floor(Math.random() * rooms.length) + 1000;
        monsters[i].location = designation;
        (rooms[designation - 1000].mob).push(['0', monsters[i]]); //방의 몹 배열 [[divid, monster],....]
    }
}


function moveRoom(cha, dir) { // dir | 2:CN 3:CE 4:CS :CW //이동 시 방 내부 몬스터 체크
    target_room = plyr_loc(cha); //target_room에 플레이어 위치 룸 객체 저장
    // this.id조회로 방향 버튼 파악해서 dir 지정할것

    if(!inBattle){
        switch (dir) {
            case 2: //CN
                if (target_room.CN != 0) { cha.currentRoom = target_room.CN; advanceTurn(); break;}
                else { alert("이동불가!"); break; }
            case 3: //CE
                if (target_room.CE != 0) { cha.currentRoom = target_room.CE; advanceTurn(); break;}
                else { alert("이동불가!"); break; }
            case 4: //CS
                if (target_room.CS != 0) { cha.currentRoom = target_room.CS; advanceTurn(); break;}
                else { alert("이동불가!"); break; }
            case 5: //CW
                if (target_room.CW != 0) { cha.currentRoom = target_room.CW; advanceTurn(); break;}
                else { alert("이동불가!"); break; }
        }
        LoadInfo();
    }
    else
        alert("전투 중 이동불가!");
}


function LoadInfo() { //화면 갱신
    // const parentDiv = document.getElementById("object_monster");
    var location = plyr_loc(elf);
    bat_tw("");//전투창 초기화
    parentDiv.replaceChildren();

    addElement(location); 
    cha_tw();
    room_tw();
    aggro_chk();
    // i)object_monster div 조회 후 있으면 초기화
    // ii)현재 방 몹 배열 로딩
    // iii)배열대로 div 생성
}

function addElement(location) { //location = 현재 방 객체   
    // const parentDiv = document.getElementById("object_monster");

    for (i = 0; i < (location.mob).length; i++) {
        var newDiv = document.createElement("div");//div 생성
        newDiv.id = `${(location.mob[i][1]).name}`;//div id에 몬스터이름할당
        newDiv.innerText = location.mob[i][1].info();
        newDiv.addEventListener('click', BattleDiv); //생성하는 div에 클릭이벤트 할당
        location.mob[i][0] = newDiv.id;//현재 방의 몹 배열을 div id, 몬스터 객체 꼴로 변경
        //반복 실행시 배열 중첩됨!
        parentDiv.insertBefore(newDiv, null);//object_monster에 디비전 삽입 
    }
}

function multiBattle() {
    let location = plyr_loc(elf);

    if (inBattle) {
        for (let [divid, monster] of location.mob) {
            let div = document.getElementById(`${divid}`);
            if (monster.aggression == 'H') {
                Battle_turn(elf, monster); //전투 턴 진행

                if (monster.current_hp > 0) { div.innerText = monster.info(); }
                else { Battle_End(location, div); aggro_chk(); }//전투몹 디비전 삭제용 div 필요
            }
        }
        advanceTurn();
        str += "----------------------------------\n";
        bat_tw(str);
    }
}
function BattleDiv() { //전투 턴진행 버튼연결    // turn_indicator.value = "turn:"+turn;
    let location = plyr_loc(elf); //현재 위치 방 객체
    let monster; //전투할 몬스터
    var idNow = this.id; // 클릭한 div id = 현재 위치 몹 배열 [div id, 몬스터]
    var div = this;
    for (let [divid, mons] of location.mob){ //전투할 몬스터에 클릭한 몬스터 지정
        if (idNow == divid) { monster = mons;break; }
    }

    if (monster.aggression == 'F') {
        Battle_turn(elf, monster);//전투 턴 진행
        advanceTurn();

        if (monster.current_hp > 0) { 
            this.innerText = monster.info(); 
            str += "----------------------------------\n";
            bat_tw(str);}
        else { Battle_End(location, div); aggro_chk(); }
    }
    
//     3)전투종료 계산(사망조회)
}

function Battle_turn(cha, mon) {
        var mon_atk = RandomizeAttack(mon.attack);
        var cha_atk = RandomizeAttack(cha.attack);
        inBattle = true;

        // 전투진행
            mon.current_hp -= cha_atk;
            cha.current_hp -= mon_atk;
            str += cha.name + "이 " + mon.name + "에게 " + cha_atk + "의 피해를 입혔습니다.\n"
                + mon.name + "이 " + cha.name + "에게 " + mon_atk + "의 피해를 입혔습니다.\n\n"
            cha_tw();
            bat_tw(str); 
}


function Battle_End(location, div) { //전투종료처리 // location = 현재 방 객체
    // i)현재 방의 몹배열에서 몬스터 제거
    // ii)div 삭제
    var monster;
    for (i=0;i<(location.mob).length;i++){
        if(div.id == location.mob[i][0]){
            monster=location.mob[i][1];
            (location.mob).splice(i, 1);break;} // 현재 방 몹 배열에서 몬스터 삭제
    }
    div.remove();inBattle = false;
    BattleReward(elf, monster);cha_tw();//보상 지급 후 플레이어 정보창 갱신
    room_tw();//방정보 갱신
}


function BattleReward(cha, mon) {
    inBattle = false;
    cha.gold += mon.gold;
    cha.current_exp += mon.exp;
    str +=mon.name+" 처치\n"+cha.name+"가 "+mon.name+"을 잡고 경험치 "+mon.exp+"을 획득했습니다.\n"
    +cha.name+"가 "+mon.name+"을 잡고 골드 "+mon.gold+"을 획득했습니다.\n";// 보상내역 출력
    if(cha.current_exp >= cha.max_exp){cha.lvlup();str += "\n레벨업!\n";}
    bat_tw(str);    
    //몬스터 정보창 사망
}

function advanceTurn() {
    turn++; turn_indicator.value = turn
}
