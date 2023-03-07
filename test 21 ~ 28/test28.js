// 하샤드 수

function solution(x) {
  let arr = x + "";
  var total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += +arr[i];
  }

  if (x % total == 0) {
    return true;
  } else {
    return false;
  }
}


// 위에꺼 압축본... 훠얼씬 깔끔하다. 다른사람 답 안봤다.

function solution(x) {
  let arr = x + "";
  var total = 0;

  for (i in arr) total += +arr[i];

  return x % +total == 0 ? true : false;
}
