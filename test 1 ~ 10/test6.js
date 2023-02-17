function solution(numbers) {
  var answer = 0;
  var origin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < origin.length; i++) {
    if (!numbers.includes(origin[i])) {
      answer += origin[i];
    }
  }

  return answer;
}

// origin 이라는 배열을 손수 만들어줄 필요가 없었다.

function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

//훨씬 직관적으로 바꾼 것 같다.