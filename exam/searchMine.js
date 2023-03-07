function solution(N, arr1) {
  let x = [1, -1, 0, 0, 1, 1, -1, -1];
  let y = [0, 0, 1, -1, 1, -1, 1, -1];
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === ".") arr1[i][j] = 0;
      if (arr1[i][j] > 0) arr1[i][j] = +arr1[i][j];
    }
  }

  console.log(arr1);

  for (let i = 0; i < arr1.length; i++) {
    con: for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] > 0) {
        answer.push("*");
        continue con;
      }

      if (arr1[i] === arr1[0]) {
        if (arr1[i][j] === arr1[i][0] && arr1[i][j] === 0) {
          answer.push(arr1[i][j + 1] + arr1[i + 1][j] + arr1[i + 1][j + 1]);
          continue con;
        } else if (arr1[i][arr1[i].length - 1] && arr1[i][j] === 0) {
          answer.push(arr1[i][j - 1] + arr1[i + 1][j] + arr1[i + 1][j - 1]);
          continue con;
        } else if (arr1[i][j] === 0) {
          answer.push(
            arr1[i][j - 1] +
              arr1[i][j + 1] +
              arr1[i + 1][j - 1] +
              arr1[i + 1][j] +
              arr1[i + 1][j + 1]
          );
          continue con;
        }
      }

      if (arr1[i] === arr1[arr1.length - 1]) {
        if (arr1[i][j] === arr1[i][0] && arr1[i][j] === 0) {
          answer.push(arr1[i][j + 1] + arr1[i - 1][j] + arr1[i - 1][j + 1]);
          continue con;
        } else if (
          arr1[i][j] === arr1[i][arr1[i].length - 1] &&
          arr1[i][j] === 0
        ) {
          answer.push(arr1[i][j - 1] + arr1[i - 1][j] + arr1[i - 1][j - 1]);
          continue con;
        } else if (arr1[i][j] === 0) {
          answer.push(
            arr1[i][j - 1] +
              arr1[i][j + 1] +
              arr1[i - 1][j - 1] +
              arr1[i - 1][j] +
              arr1[i - 1][j + 1]
          );
          continue con;
        }
      }

      if (arr1[i] !== arr1[arr1.length - 1] && arr1[i] !== arr1[0]) {
        if (arr1[i][j] === arr1[i][0] && arr1[i][j] === 0) {
          answer.push(
            arr1[i][j + 1] +
              arr1[i - 1][j] +
              arr1[i - 1][j + 1] +
              arr1[i + 1][j] +
              arr1[i + 1][j + 1]
          );
          continue con;
        } else if (
          arr1[i][j] === arr1[i][arr1[i].length - 1] &&
          arr1[i][j] === 0
        ) {
          answer.push(
            arr1[i][j - 1] +
              arr1[i - 1][j] +
              arr1[i - 1][j - 1] +
              arr1[i + 1][j] +
              arr1[i + 1][j - 1]
          );
          continue con;
        } else if (arr1[i][j] === 0) {
          answer.push(
            arr1[i][j - 1] +
              arr1[i][j + 1] +
              arr1[i - 1][j - 1] +
              arr1[i - 1][j] +
              arr1[i - 1][j + 1] +
              arr1[i + 1][j - 1] +
              arr1[i + 1][j] +
              arr1[i + 1][j + 1]
          );
          continue con;
        }
      }
    }
  }
  let result = [];
  for (let i = 0; i < answer.length; i += 5) {
    result.push(answer.slice(i, i + 5));
  }
  return answer;
}
let N = 5;
let arr1 = [
  ["1", ".", ".", ".", "."],
  [".", ".", "3", ".", "."],
  [".", ".", ".", ".", "."],
  [".", "4", ".", ".", "."],
  [".", ".", ".", "9", "."],
];
console.log(solution(N, arr1));

// . 을 0 으로 바꿔주고, 0인놈의 주변 숫자들을 찾아서 0에 더해줌.
// 그럼 다른 0인 애들이 바뀐 애들에게 또 영향을 받을텐데.
// 안바꾸고 그냥 앤서에 푸쉬박아버리면 안되나??

// arr1 을 N 만큼의 배열로 나눠주고, N1 N2 N3 ... NN;
// 숫자인 애들을 먼저 찾아내.

[
    ["*", 1, 3, 3, 0],
    [1, 3, "*", 0, NaN],
    [4, 7, 3, 0, NaN],
    [4, "*", 9, 9, NaN],
    [4, 4, 9, "*", NaN],
];

['*', 4,  3,  3, NaN,
   1, 3, '*', 0, NaN,
   4, 7,  3,  0, NaN,
   4,'*', 9,  9, NaN,
   4, 4,  9, '*', NaN]

   
//   [[*, 4, 3, 3, 0],
//    [1, 4, *, 3, 0],
//    [4, 7, 7, 3, 0],
//    [4, *, M. 9, 9],
//    [4, 4, M, *, 9]]

//정신나갈것같아...
