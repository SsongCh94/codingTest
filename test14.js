//나누어 떨어지는 숫자 배열


function solution(arr, divisor) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0){
            answer.push(arr[i])
        }
    }
    if (answer.length == 0) {
        answer.push(-1)
    }
    answer.sort(function(a, b) {
        return a - b
    });
    console.log(answer)
    return answer;
}

// sort() 함수에 대해 알아보자.

function solution(arr, divisor) {
    var answer = arr.filter(x => x % divisor == 0)
    return answer.length ? answer.sort((a, b) => a-b) : [-1];
}

// filter 메서드로 압축