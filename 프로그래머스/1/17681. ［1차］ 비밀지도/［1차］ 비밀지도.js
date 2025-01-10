// 십진수 이진수로 초기화하는 함수
function init(n, arr){
    let map = [];
    for(let x of arr){
        let bin = x.toString(2);
        if(bin.length === n) map.push(bin)
      	// 길이가 작을때 앞에 0을 추가
        else {
            let blank = ""
            for(let i = 0; i < n - bin.length; i++){
                blank += "0"  
            }
            map.push(blank+bin)
        }
    }
    return map
}

function solution(n, arr1, arr2) {
    var answer = [];
    let map1 = init(n, arr1);
    let map2 = init(n, arr2);
    for(let i = 0; i < n; i++){
        let tmp = ""
        for(let j = 0; j < n; j++){
            if(map1[i][j] === "1" || map2[i][j] === "1") tmp += "#"
            else tmp += " "
        }
        answer.push(tmp);
    }
    return answer;
}