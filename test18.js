// 서울에서 김서방 찾기

function solution(seoul) {
  console.log(seoul);
  var answer = "";

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] == "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}

// indexOf 메서드 추가

function solution(seoul) {
  var answer = seoul.indexOf("Kim");
  return `김서방은 ${answer}에 있다`;
}
