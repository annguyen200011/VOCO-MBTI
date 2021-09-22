let mbti = 0;
let E = document.addEventListener("quiz1", quiz1).value;
alert(E);
function quiz1(cha) {
  if (cha == 1) {
    alert(cha);
    return 1;
  } else return 0;
}

function quiz2(cha) {
  if (cha == 1) {
    mbti += 10;
  }
}
