//완주하지 못한 선수

function solution(participant, completion) {
  var sortPar = participant.sort();
  var sortCom = completion.sort();

  for (let i = 0; i < sortPar.length; i++) {
    if (sortCom[i] !== sortPar[i]) {
      return sortPar[i];
    }
  }
}

// sort() 생각도 못함,

// 요약버전, for in 메서드 추가, 필요없던부분 삭제

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (i in participant) {
    if (completion[i] !== participant[i]) return participant[i];
  }
}
