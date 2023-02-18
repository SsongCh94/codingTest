// day 일 뒤의 날짜 구하기

function solution(month, day) {
  let base = new Date(2022, month - 1, day + 98);
  let month1 = base.getMonth() + 1;
  let day1 = base.getDate();

  let result = `${month1}월 ${day1}일`;

  return result;
}

console.log(solution(1, 18));
// 4월 26일

// 문제 링크
// https://teamsparta.notion.site/99-13-f6dc48e0230d4195828682c97da235dc