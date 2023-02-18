function solution(s) {
    let arr = s.split(' ');
    console.log(arr);
    let max = Math.min(...arr)
    let min = Math.max(...arr)

    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (a(arr[i]) == 'x') {
        if (arr[i] <= min) min = arr[i];
      } else {
        if (arr[i] >= max) max = arr[i];
      }
    }

    function a(n) {
      let answer = [];

      for (let j = 2; j <= n / 2; j++) {
        if (n !== 2) {
          if (n % j == 0) {
            answer.push('x');
          } else {
            answer.push('y');
          }
        } 
        else {
          answer.push('y')
        }
      }


      if (answer.includes('x')) {
        return 'x';
      }
      else {
        return 'y';
      }

    }

    console.log(min)
    console.log(max)
    return;
  }

  let s = "2 3 4 5";

  console.log(solution(s))
