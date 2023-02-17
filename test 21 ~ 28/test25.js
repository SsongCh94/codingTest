// 정수 제곱근 판별
// Math.sqrt(), Math.pow() 메서드

function solution(n) {
  var answer = 0;
  sqrt = Math.sqrt(n);

  Number.isInteger(sqrt) ? (answer = Math.pow(sqrt + 1, 2)) : (answer = -1);
  return answer;
}



function solution(n) {
  var answer = 0;
  var sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    answer = (sqrt + 1) * (sqrt + 1);
  } else answer = -1;
  return answer;
}

// 한줄코드
solution = (n) => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1, 2) : -1;