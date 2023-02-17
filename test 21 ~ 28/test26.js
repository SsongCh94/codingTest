// 제일 작은 수 제거하기


function solution(arr) {
  var answer = [];
  var min = arr[0];

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= min) {
        min = arr[i];
      }
    }

    arr.splice(arr.indexOf(min), 1);

    answer = arr;
  } else {
    answer.push(-1);
  }

  return answer;
}


// 답 참고... 깔끔해짐, Math.min 메서드 추가

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  if (arr.length < 1) arr.push(-1);
  return arr;
}
