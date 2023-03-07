// 정수 내림차순으로 배치하기

function solution(n) {
    a = parseInt((n + '').split('').sort().reverse().join(''));
    return a;
}


// 배열도 아니고 그냥 숫자처럼 생긴 문자열이었기 때문에 그냥 사칙연산자 하나 붙여두면 숫자열로 바뀐다.


function solution(n) {
    a = (n + '').split('').sort().reverse().join('');
    return +a;
}