function solution(sides) {
    var answer = 0;
    const sortSides = sides.sort((a, b) => a-b);
    answer = (sortSides[0] + sortSides[1]) > sortSides[2] ? 1 : 2
    return answer;
}