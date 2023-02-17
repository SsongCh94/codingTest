//콜라츠 추측

function solution(num) {
  if (num === 1) return 0;  // 넘버 1이면 0 리턴
    
  var count = 0;

  for (let i = 0; i < 500; i++) {
    if (num % 2 === 0) {     //짝수일 때
      num = num / 2;      //짝수/2
      count++;                  //카운트 추가
      if (num === 1) {       //넘버 1 되면,
        return count;           //카운트 리턴.
      }
    } else {                    //홀수일 때
       num = num * 3 + 1; //홀수*3 + 1
      count++;                  //카운트 추가
    }
  }

  if (count >= 500) {           //카운트 500 이상시 -1 리턴
     return -1;
  }

  return count;
}


// while, 삼항연산자 이용... 깔끔하다.

function solution(num) {
  var answer = 0;
  if (num == 1) return 0;
  while (num !== 1 && answer !== 500) {
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
    answer++;
  }

  return num == 1 ? answer : -1;
}