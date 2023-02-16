// 날짜로 요일 구하기

function solution(a, b) {
    var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
    var answer = days[date.getDay()];
    return answer;
}