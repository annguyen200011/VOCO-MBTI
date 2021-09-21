var mbti="";
var E =document.getElementById('E').value;
var I =document.getElementById('I');
var S =document.getElementById('S');
var N =document.getElementById('N');
var T =document.getElementById('T');
var F =document.getElementById('F');
var J =document.getElementById('J');
var P =document.getElementById('P');
E.onclick = add(E);
I.onclick = add(I);
S.onclick = add(S);
N.onclick = add(N);
T.onclick = add(T);
F.onclick = add(F);
J.onclick = add(J);
P.onclick = add(P);


function add(cha) {
  mbti+=cha;
  alert(mbti);
  if(length(mbti)==4){
    alert(mbti);
  }
}





