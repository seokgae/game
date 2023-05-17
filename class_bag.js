class hp_potion {
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

function bag_click() {
    // if(bag_popup.style.visibility == "hidden")
              
    if(bag_popup.style.visibility == "visible")
        bag_popup.style.visibility = "hidden";
    else
        bag_popup.style.visibility = "visible";  

    load_bag();
}

function load_bag() {
    bag_popup.replaceChildren();

    for(let item of elf.inventory){
        let newDiv = document.createElement("div");
        // newDiv.id = item//div 생성
        newDiv.innerText = item.name;
        newDiv.addEventListener('click', use_item); 
        bag_popup.insertBefore(newDiv, null);
    }
}

function use_item() {    
    for(i=0;i < elf.inventory.length;i++){
        if(this.innerText == (elf.inventory[i]).name){
            used = elf.inventory[i].use();

            if(used){elf.inventory.splice(i, 1); this.remove();break;}
            else{alert("그만먹어");break;}
            
        }
    }    
    
}


elf.inventory.push(new hp_potion());
elf.inventory.push(new hp_potion());////체력포션 2개 인벤에 푸쉬



