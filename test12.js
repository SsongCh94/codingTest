//부족한 금액 계산하기

function solution(price, money, count) {
    var answer = 0;
var result = 0;
for (let i = 1; i <= count; i++) {
    answer += price*i;
}
(money - answer >= 0) ? result = 0 : result = Math.abs(money - answer);

return result;
}