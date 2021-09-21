var mbti;
var E =document.getElementById('E');
var I =document.getElementById('E');
var S =document.getElementById('E');
var N =document.getElementById('E');
var T =document.getElementById('E');
var F =document.getElementById('E');
var J =document.getElementById('E');
var P =document.getElementById('E');
E.onclick = add(E);

function add(cha) {
  mbti+=cha;
  if(cha=="J" || cha=="P")
    {
      alert(mbti);
    }
}





