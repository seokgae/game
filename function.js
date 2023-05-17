
function moveRoom() { // dir | 2:CN 3:CE 4:CS :CW //이동 시 방 내부 몬스터 체크
    // target_room = plyr_loc(cha); //target_room에 플레이어 위치 룸 객체 저장
    // this.id조회로 방향 버튼 파악해서 dir 지정할것
    let dir = this.id

    if (!inBattle) {
        switch (dir) {
            case 'box_north': //CN
                if (cha_location.CN != 0) { elf.currentRoom = cha_location.CN; cha_location = plyr_loc(elf); break; }
                else { alert("이동불가!"); break; }
            case 'box_east': //CE
                if (cha_location.CE != 0) { elf.currentRoom = cha_location.CE; cha_location = plyr_loc(elf); break; }
                else { alert("이동불가!"); break; }
            case 'box_south': //CS
                if (cha_location.CS != 0) { elf.currentRoom = cha_location.CS; cha_location = plyr_loc(elf); break; }
                else { alert("이동불가!"); break; }
            case 'box_west': //CW
                if (cha_location.CW != 0) { elf.currentRoom = cha_location.CW; cha_location = plyr_loc(elf); break; }
                else { alert("이동불가!"); break; }
        }
        advanceTurn(); turn_indicator.value = "턴: " + turn;
        LoadInfo(); load_root();
    }
    else
        alert("전투 중 이동불가!");
}

function LoadInfo() { //화면 갱신
    //전투창 초기화
    parentDiv.replaceChildren();
    npcparentDiv.replaceChildren();

    addElement(); 
    cha_tw();
    room_tw();
    aggro_chk();
    draw_map();
}

function addElement() { //location = 현재 방 객체   
    // i)object_monster div 조회 후 있으면 초기화
    // ii)현재 방 몹 배열 로딩
    // iii)배열대로 div 생성
    
    for (i = 0; i < (cha_location.mob).length; i++) {
        let newDiv = document.createElement("div");//div 생성
        newDiv.id = `${(cha_location.mob[i][1]).name}`;//div id에 몬스터이름할당
        newDiv.innerText = cha_location.mob[i][1].info();
        newDiv.addEventListener('click', BattleDiv); //생성하는 div에 클릭이벤트 할당
        parentDiv.insertBefore(newDiv, null);//object_monster에 디비전 삽입 
        
    }

    for (i = 0; i < (cha_location.npc).length; i++) {
        let newDiv2 = document.createElement("div");//div 생성
        newDiv2.id = `${cha_location.npc[i][0]}`;//div id에 npc이름할당
        newDiv2.innerText = cha_location.npc[i][1].info();
        newDiv2.addEventListener('click', NPC_interaction); //생성하는 div에 클릭이벤트 할당
        npcparentDiv.insertBefore(newDiv2, null);//object_monster에 디비전 삽입 
    }

}

function multiBattle() {

    if (inBattle) {
        for (let [divid, monster] of cha_location.mob) {
            let div = document.getElementById(`${divid}`);
            if (monster.aggression == 'H') {
                Battle_turn(elf, monster); //전투 턴 진행

                if (monster.current_hp > 0) { div.innerText = monster.info(); }
                else { Battle_End(div); aggro_chk();}//전투몹 디비전 삭제용 div 필요
            }
        }
        turn++;turn_indicator.value = "턴: " + turn;callrat();
        bat_tw(str);
    }
}
function BattleDiv() { //전투 턴진행 버튼연결    // turn_indicator.value = "turn:"+turn;
    let monster; //전투할 몬스터
    var idNow = this.id; // 클릭한 div id = 현재 위치 몹 배열 [div id, 몬스터]
    var div = this;
    for (let [divid, mons] of cha_location.mob){ //전투할 몬스터에 클릭한 몬스터 지정
        if (idNow == divid) { monster = mons;break; }
    }

    if (monster.aggression == 'F') {
        Battle_turn(elf, monster);//전투 턴 진행
        turn++;turn_indicator.value = "턴: " + turn;callrat();
        if (monster.current_hp > 0) { div.innerText = monster.info();}
        else { Battle_End(div); aggro_chk();}
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
            str += "『"+cha.name+"』" + "이 " + "『"+mon.name+"』" + "에게 " + cha_atk + "의 피해를 입혔습니다.💥\n"
                + "『"+mon.name+"』" + "이 " + "『"+cha.name+"』" + "에게 " + mon_atk + "의 피해를 입혔습니다.💔\n----------------------------------\n"
            cha_tw();
            bat_tw(str); 
}

function Battle_End(div) { //전투종료처리 // cha_location = 현재 방 객체
    // i)현재 방의 몹배열에서 몬스터 제거
    // ii)div 삭제
    let monster; let target_div = document.getElementById(`${div.id}`);
    for (i=0;i<(cha_location.mob).length;i++){
        if(div.id == cha_location.mob[i][0]){
            monster=cha_location.mob[i][1];
            (cha_location.mob).splice(i, 1);break;} // 현재 방 몹 배열에서 몬스터 삭제
    }
    parentDiv.removeChild(target_div);
//    div.remove();
    inBattle = false;
    BattleReward(elf, monster);cha_tw();//보상 지급 후 플레이어 정보창 갱신
    room_tw();//방정보 갱신
}

function BattleReward(cha, mon) {
    inBattle = false;
    cha.gold += mon.gold;
    cha.current_exp += mon.exp;
    str +="⁂⁂⁂"+mon.name+" 처치⁂⁂⁂\n"+cha.name+"가 "+mon.name+"을 잡고 경험치 "+mon.exp+"을 획득했습니다.\n"
    +cha.name+"가 "+mon.name+"을 잡고 골드 "+mon.gold+"을 획득했습니다.\n"
    +"----------------------------------\n";// 보상내역 출력
    if(cha.current_exp >= cha.max_exp){cha.lvlup();str += "\n🎉✨🎉레벨업!🎉✨🎉\n\n";}
    bat_tw(str);    

    let drop_number = Math.floor(Math.random()*3+1);
    let drop_rate = Math.floor(Math.random()*100+1);

    // console.log(mon.drop);
    if (drop_rate < 80){//weight
        for(i=0;i<drop_number;i++){
            cha_location.root.push(new hp_potion());
            // drop_table.innerText += "드랍성공";
        }
        load_root();
    }
    //몬스터 정보창 사망
}

function callrat() {     
        //10턴 마다 쥐 등장

        if ((turn % 10 == 0)&&(cha_location.RoomID != 1004)) {
            let rat_nest = [];
            rat_nest[0] = new Monster(`작은 쥐${turn / 10 + 1}`, 30, 3, 'H');
            
            (cha_location.mob).push([rat_nest[0].name, rat_nest[0]]);
            LoadInfo();
            rat_nest = [];
        }
}

function advanceTurn() {
    if(inBattle) alert("전투 중 대기불가!");
    else {
        turn++; callrat();
        
        if(elf.currentRoom == 1004){
            elf.current_hp++;
            cha_tw();
        }
       
        turn_indicator.value = "턴: " + turn;   
    }
}

function NPC_interaction() {
    let idNow = this.id; let npc_clicked;

    let line_number = Math.floor(Math.random()*3);

    for(let [name, npc] of cha_location.npc) {
        if(idNow == name){ npc_clicked = npc }
    }

    str += npc_clicked.lines[line_number]+"\n";
    bat_tw(str);
}