function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    var result = [];
    for (let j = 0; j < arr1[i].length; j++)
      result.push(arr1[i][j] + arr2[i][j]);
    answer.push(result);
  }

  return answer;
}

// 고통스럽다... map 이나 reduce 사용해서 푸는 방법도 알고싶다..

function solution(arr1, arr2) {
  return arr1.map((cur1, idx1) =>
    cur1.map((val, idx2) => val + arr2[idx1][idx2])
  );
}
