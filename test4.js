function solution(a, b) {
  let result = 0;

  if (a > b) {
    for (let i = 0; i <= a - b; i++) {
      result += b + i;
    }
  } else if (a < b) {
    for (let i = 0; i <= b - a; i++) {
      result += a + i;
    }
  } else {
    result = a;
  }

  return result;
}

// 훨씬 간단한 방법.... for 반복문의 특성을 이용하자
function solution(a, b) {
  let x = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) x += i;
  return x;
}

//이렇게 간단한걸.....