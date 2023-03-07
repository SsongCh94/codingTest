// 핸드폰 번호 가리기

function solution(phone_number) {
  let num = phone_number.split("");
  //배열화 시키기 위한 split

  let answer = num.map((x, index) => {
    if (index < num.length - 4) {
      x = "*";
    }
    return x;
  });
  // map 으로 마지막 네자리를 제외하고 *로 만들어줬다.

  let result = answer.join("");
  // 배열을 다시 합치면 끝!

  return result;
}

// 다른 답변 참고 후.
// 굳이 배열로 바꿔줄 필요가 없었다...
// 반복문으로 하나하나 찾아다니며 바꿔줄 필요도 없었다... 
// map과 배열 관련 메서드를 배우다 와서인지 써먹고싶었나보다.

function solution(phone_number) {
  let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}
