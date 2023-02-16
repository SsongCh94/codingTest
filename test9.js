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
