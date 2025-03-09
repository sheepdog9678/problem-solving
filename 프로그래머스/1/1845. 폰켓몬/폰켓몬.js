function solution(nums) {
    var answer = 0;
    const set = new Set(nums);
    answer = set.size >= Math.floor(nums.length/2) ? Math.floor(nums.length/2) : set.size;
    return answer;
}