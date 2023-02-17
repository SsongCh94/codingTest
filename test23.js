// 자연수 뒤집어 배열로 만들기.


function solution(n) {
  arr = (n + "").split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  arr.join(",");

  return arr;
}
