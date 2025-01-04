function countFailures(stage, users){
    let cnt = 0
    for(let x of users){
        if(x > stage) return cnt
        else cnt++;
    }
    return cnt
}

function solution(N, stages) {
    var answer = [];
    let userNum = stages.length;
    
    stages = stages.sort((a,b) => a-b);
    
    for(let i = 1; i <= N; i++){
        let fail = countFailures(i, stages)
        answer.push({stage : i, failRate : fail/userNum})
      	// 통과하지 못한 유저 pop
        for(let j = 0; j < fail; j++){
            stages.shift();
            userNum--
        }
    }
    // 실패율로 정렬
    answer = answer.sort((a,b) => b.failRate - a.failRate);
    answer = answer.map(v => v.stage);
    return answer;
}
