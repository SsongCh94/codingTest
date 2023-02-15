function solution(num) {
    if (num%2 == 0){
        return "Even"
    } else {
        return "Odd"
    }

}

// 아래의 한줄코드로도 가능하다!

function solution(num) {
    return num%2 ? "Odd" : "Even";
}

// 위 코드에서 num%2 가 0 이면 false 값이니까 Even을 반환하고, 1이면 true 가 되어 Odd 를 반환한다. 