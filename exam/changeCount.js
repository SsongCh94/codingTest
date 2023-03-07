function solution(num){
  let change = 1000 - num;
  
  for (var count = 0; ; count++) {
    if (change >= 500) {
      change -= 500;
      continue;
    }
    if (change >= 100) {
      change -= 100;
      continue;
    }
    if (change >= 50) {
      change -= 50;
      continue;
    }
    if (change >= 10) {
      change -= 10;
      continue;
    }
    if (change === 0) break;
  }

	return count;
}


let num1 = 550;
console.log(solution(num1))

    // 1000 에서 num1 뺌. 받을 잔돈 가격 나옴
    // 반복문 돌려. 500 이상이면 카운트 하나 늘리고, 잔돈에서 500 빼줘
    // 100, 50, 10도 반복,,
    // 0원되면 끝내
    // 카운트 출력해