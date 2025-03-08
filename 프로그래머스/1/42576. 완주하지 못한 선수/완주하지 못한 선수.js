function solution(participant, completion) {
    var answer = '';
    let ph = new Map();
    for (let player of participant) {
      if (ph.has(player)) {
        ph.set(player, ph.get(player) + 1);
      } else {
        ph.set(player, 1);
      }
    }
    for(let player of completion){
        if(ph.has(player)) ph.set(player, ph.get(player) - 1)
    }
    ph.forEach((value, key) => {
      if (value === 1) answer = key
    });
    return answer
}