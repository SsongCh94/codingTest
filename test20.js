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