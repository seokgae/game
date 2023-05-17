class hp_potion { //체력포션
    constructor() {
        this.name = '체력포션';
        this.ItemID = 2000;

        this.use = function () {
            if (elf.current_hp < elf.max_hp) {
                elf.current_hp += 50;
                if (elf.current_hp > elf.max_hp)
                    elf.current_hp = elf.max_hp;
                cha_tw();
                return true;
            }
            else { return false;}
        }
    }
}

function bag_click() { // 가방 창 클릭
    // if(bag_popup.style.visibility == "hidden")
              
    if(bag_popup.style.visibility == "visible")
        bag_popup.style.visibility = "hidden";
    else
        bag_popup.style.visibility = "visible";  

    load_bag();
}

function load_bag() { // 가방 창 오픈 시 div 생성 
    bag_popup.replaceChildren();// 초기화

    for(let item of elf.inventory){ // 캐릭터 인벤토리 배열참조
        let newDiv = document.createElement("div");
        newDiv.innerText = item.name;
        newDiv.addEventListener('click', use_item);// div클릭 시 아이템 사용하는 이벤트 배치 
        bag_popup.insertBefore(newDiv, null);//가방 창 안에 div 배치
    }
}

function use_item() { //아이템 사용
    for(i=0;i < elf.inventory.length;i++){ // 캐릭터 인벤토리 배열과 대조해서 일치하는 아이템 검색
        if(this.innerText == (elf.inventory[i]).name){
            used = elf.inventory[i].use(); // 사용 성공 시 true, 실패 시 false;

            if(used){elf.inventory.splice(i, 1); this.remove();break;} // 사용 성공 시 캐릭터 인벤토리 배열에서 제거 후 반복문탈출
            else{alert("그만먹어");break;}// 사용 실패 시 알림
            
        }
    }    
    
}


elf.inventory.push(new hp_potion());
elf.inventory.push(new hp_potion());////체력포션 2개 인벤에 푸쉬



