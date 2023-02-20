function solution(str){
	let answer= 0;
  let count = 0;

  for (let i = 0; i < str.length; i++){
    if (str[i] === 'O') {
      count += 1;
      answer += count;
    } else {
      count = 0;
    }
  }
  
	return answer;
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))

// O 나올때마다 카운트에 1 더해
// answer 에 카운트 더해
// 반복해

// X 나오면 카운트 0으로 돌려



//반복문 돌려서 arr[i-1] = 'O' 일때 카운트 더하는걸로했다가 실패.. 첫번째에서 막힌다.
// O를 전부 1, X를 0 으로 바꿔서 시도해봤지만... 안된다.. 뭐가문제인지 모르겠다.. 다른방법으로 바꾸자..