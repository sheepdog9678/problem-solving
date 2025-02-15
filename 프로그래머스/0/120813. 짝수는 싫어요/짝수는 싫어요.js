function solution(n) {
    var answer = [];
    for(let i = 1; i < n + 1; i++){
        i%2 === 1 && answer.push(i);
    }
    return answer;
}