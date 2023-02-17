// 정수 내림차순으로 배치하기

function solution(n) {
    a = parseInt((n + '').split('').sort().reverse().join(''));
    return a;
}