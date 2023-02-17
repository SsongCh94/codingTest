//문자열 다루기 기본


function solution(s) {
  var answer = true;

  if (s.length == 4 || s.length == 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) {
        return false;
      }
    }
  } else return false;

  return answer;
}

//


function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    for (let i = 0, len = s.length; i < len; i++) {
      if (!Number.isInteger(parseInt(s[i], 10))) return false;
    }
  } else return false;

  return answer;
}
