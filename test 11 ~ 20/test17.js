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
  let num = Number(s);
  let spl = s.split("");
  var result = [];
  var answer = 0;

  if (num.length == 4 || 6) {
    result = spl.reduce((acc, cur, idx) => {
      Number.isInteger(Number(cur)) ? acc.push(true) : acc.push(false);
      return acc;
      console.log(acc);
    }, []);
    console.log(result);
    if (result.includes(false)) {
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }

  return answer;
}

function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    for (let i = 0, len = s.length; i < len; i++) {
      if (!Number.isInteger(parseInt(s[i], 10))) return false;
    }
  } else return false;

  return answer;
}
