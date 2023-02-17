//문자열 내 p와 y의 개수

function solution(s) {
  var row = s.toLowerCase();
  var row1 = row.split("");

  var answerP = row1.filter((x) => x == "p");
  var answerY = row1.filter((x) => x == "y");

  return answerP.length == answerY.length ? true : false;
}

// 다른사람 풀이 - split 사용!
function solution(s) {
  return s.toLowerCase().split("p").length == s.toLowerCase().split("y").length;
}
