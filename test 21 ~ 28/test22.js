// 자릿수 더하기

function solution(n) {
  var answer = 0;
  str = n + "";

  for (let i = 0; i < str.length; i++) {
    answer += str[i] * 1;
  }

  return answer;
}

// reduce 이용

function solution(n) {
  return (n + "").split("").reduce((acc, cur, idx) => acc + Number(cur), 0);
}
