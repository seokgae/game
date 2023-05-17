function player_info(cha) {
    return (""+cha.name+":("+cha.max_hp+"/"+cha.current_hp+")(lv."+cha.level+")\n" //[이름:(최대체력/현재체력)] 
    +"exp:("+cha.max_exp+"/"+cha.current_exp+")\n"
    +"보유골드 : "+cha.gold); //[경험치:(최대/현재)]  
}

function monster_info(mon) {
    return (""+mon.name+":("+mon.max_hp+"/"+mon.current_hp+") ");
}

// function damage_done(cha, target){
//     return (cha.name + "이 " + target.name + "에게 " + cha.atk + "의 피해를 입혔습니다.");
// }


function info_load(){
    

}
