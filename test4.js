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