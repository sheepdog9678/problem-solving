function solution(survey, choices) {
  var answer = "";
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    const [l, r] = survey[i].split("");
    const score = Math.abs(choices[i] - 4)
    if (choices[i] < 4) {
      // 왼쪽일때
      types[l] += score;
    } else if (choices[i] > 4) {
      // 오른쪽일때
      types[r] += score;
    }
  }

  answer += types.R >= types.T ? "R" : "T";
  answer += types.C >= types.F ? "C" : "F";
  answer += types.J >= types.M ? "J" : "M";
  answer += types.A >= types.N ? "A" : "N";

  return answer;
}