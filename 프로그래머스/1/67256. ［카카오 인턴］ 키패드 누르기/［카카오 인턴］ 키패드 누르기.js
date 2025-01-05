// 오른쪽인지 확인하는 함수
function isRight(num) {
  if (num === 3 || num === 6 || num === 9) return true;
  else false;
}
// 왼쪽인지 확인하는 함수
function isLeft(num) {
  if (num === 1 || num === 4 || num === 7) return true;
  else false;
}
// 키패드
let keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];
// 좌표화 해주는 함수
function convertToCoordinates(num) {
  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[0].length; j++) {
      if (num === keypad[i][j]) return [i, j];
    }
  }
}
// 거리를 반환해주는 함수
function getDistance(num, num2) {
  return Math.abs(num[0] - num2[0]) + Math.abs(num[1] - num2[1]);
}

function solution(numbers, hand) {
  var answer = "";
  // 초기 왼손, 오른손 position
  let lp = [3, 0];
  let rp = [3, 2];
  for (let num of numbers) {
    if (isRight(num)) {
      // 오른쪽 일때
      answer += "R";
      rp = convertToCoordinates(num);
    } else {
      if (isLeft(num)) {
        // 왼쪽 일때
        answer += "L";
        lp = convertToCoordinates(num);
      } else {
        // 중간 일때
        let nump = convertToCoordinates(num);
        if (getDistance(nump, lp) === getDistance(nump, rp)) {
          if (hand === "right") {
            answer += "R";
            rp = convertToCoordinates(num);
          } else {
            answer += "L";
            lp = convertToCoordinates(num);
          }
        } else {
          if (getDistance(nump, lp) > getDistance(nump, rp)) {
            answer += "R";
            rp = convertToCoordinates(num);
          } else {
            answer += "L";
            lp = convertToCoordinates(num);
          }
        }
      }
    }
  }
  return answer;
}