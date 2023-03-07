// 내적

// reduce 사용 추가
function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc += cur*b[idx], 0);
}

// 첫번째나온..

function solution(a, b) {
  var answer = a.reduce((acc, cur, idx) => {
    acc += cur * b[idx];
    return acc;
  }, 0);
  return answer;
}

// return acc 까먹지 말기..

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  console.log(answer);
  return answer;
}


