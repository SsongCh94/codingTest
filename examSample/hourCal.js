// 몇시간 공부했는지 계산하기.


let arr1 = [9, 9, 8, 8, 7, 8, 9];
let arr2 = [21, 25, 30, 29, 22, 23, 30];

function solution(arr1, arr2) {
  let answer = 0;

  answer = arr1.reduce((acc, cur, idx) =>{
    arr2[idx] < 29 ? acc += Math.abs(cur - arr2[idx]) :acc += Math.abs(cur - 21);
    return acc
  }, 0)

  return answer;
}

console.log(solution(arr1, arr2));


// 지저분하고 가독성 떨어지지만 한줄코드

let arr3 = [11, 9, 8, 8, 7, 8, 9];
let arr4 = [21, 25, 30, 29, 22, 23, 30];

solution = (arr3, arr4) => arr3.reduce((acc, cur, idx) => {
    arr4[idx] < 29 ? acc += Math.abs(cur - arr4[idx]) : acc += Math.abs(cur - 21);
    return acc
  }, 0);

console.log(solution(arr3, arr4));