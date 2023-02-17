//이상한 문자 만들기


function solution(s) {
    arr = s.split(' ')   // 공백기준으로 나눠서 배열화..
    var result = [];
    
    for (let i = 0; i < arr.length; i++){
        arr[i] += ' ';  //이거 **
        for (let j = 0; j < arr[i].length; j++){
            if (j%2 == 0) {
                result += arr[i][j].toUpperCase()
            } else {
                result += arr[i][j].toLowerCase()
            }
        }
    }
    return result.slice(0, -1);
}


// 공백넣기 생각 못함, slice 메서드 다시보기.