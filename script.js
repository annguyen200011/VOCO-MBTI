var clickedlinks = new Array();;
function quiz1(cha){
  if(cha==1)
    {
      clickedlinks.push("E");
      alert(JSON.stringify(clickedlinks));
    }
  else
    {
      clickedlinks.push("I");
      alert(JSON.stringify(clickedlinks));
    }
    
}
//alert(JSON.stringify(clickedlinks));
function quiz2(cha){
  if(cha==1)
    {
      clickedlinks.push("S");
      alert(JSON.stringify(clickedlinks));
    }
  else
    {
      clickedlinks.push("N");
      alert(JSON.stringify(clickedlinks));
    }
    
}
alert(JSON.stringify(clickedlinks));
