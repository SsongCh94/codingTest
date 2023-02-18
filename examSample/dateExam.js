// day 일 뒤의 날짜 구하기

// ## 1번. 신대륙 발견

// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

function solution(month, day) {
  let base = new Date(2022, month - 1, day + 98);
  let month1 = base.getMonth() + 1;
  let day1 = base.getDate();

  let result = `${month1}월 ${day1}일`;

  return result;
}

// 문제 링크
// https://teamsparta.notion.site/99-13-f6dc48e0230d4195828682c97da235dc
