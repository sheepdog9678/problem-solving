function solution(array) {
    var answer = 0;
    const sortArray = array.sort((a,b) => a -b);
    answer = sortArray[Math.floor(array.length/2)]
    return answer;
}