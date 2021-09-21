var mbti = 0;
function quiz1(cha) {
  if (cha == 1) {
    return 1;
  } else return 0;
}
function quiz2(cha) {
  if (cha == 1) {
    return 10;
  } else return 0;
}
mbti=quiz1()+quiz2();
alert(mbti);
