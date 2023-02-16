// 날짜로 요일 구하기

function solution(a, b) {
    var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date('2016', a - 1, b);
    var answer = days[date.getDay()];
    return answer;
}

// 보기 쉽게 바꿈,
// 자바스크립트에서 월은 0 월부터 11월까지로 하기 때문에 (왜인지 모름) a-1 월로 해줌.