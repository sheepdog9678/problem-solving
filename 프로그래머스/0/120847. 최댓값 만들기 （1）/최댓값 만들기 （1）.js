function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a, b)  {
        return a - b;
    });
    const length = numbers.length - 1;
    answer = numbers[length] * numbers[length - 1];
    return answer;
}