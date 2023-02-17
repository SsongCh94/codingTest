// 수박수박수박수박수

function solution(n) {
  if (n % 2 == 0) {
    return "수박".repeat(n / 2);
  } else {
    return "수박".repeat(n / 2) + "수";
  }
}

//코드 멀미난다.... 왜 이모양이냐

function solution(n) {
  return n % 2 ? "수박".repeat(n / 2) + "수" : "수박".repeat(n / 2);
}

// 삼항연산자 깔끔..