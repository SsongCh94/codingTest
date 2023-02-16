// 평균 구하기

function solution(arr) {
  var arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum / arr.length;
}
