function solution(s) {
  let result = 0;
  let arr = s.split("");

  arrLen = arr.length;

  let middle = Math.floor(arrLen / 2);
  //Math.floor() 는 받은 숫자값의 소숫점 아래를 버리고 정수로 반환한다.

  if (arrLen % 2 === 0) {
    result = arr[middle - 1] + arr[middle];
  } else {
    result = arr[middle];
  }

  var answer = result;
  return answer;
}

//착각해서 오래걸린 부분.
// Math.floor(arrLen / 2); 에서 값이 홀수면 잘 나오고! 짝수면 두개의 중간값 중 앞에가 나오겠지! 했는데.. 생각해보니 중간값 중 뒤에가 나온다.. 배열은 0부터 시작하기 때문!

function solution(s) {
  let middle = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[middle] : s[middle - 1] + s[middle];
}

// 다른 답 참고 후 재작성! 이해하며 완료

