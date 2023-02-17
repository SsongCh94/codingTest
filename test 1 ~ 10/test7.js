//음양 더하기

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

// for 문 map 으로 변환

function solution(absolutes, signs) {
  var answer = 0;
  signs.map((x, index) => {
    x ? (answer += absolutes[index]) : (answer -= absolutes[index]);
  });
  return answer;
}

//reduce 메서드 공부 후 다시보기