var clickedlinks = new Array();;
function quiz1(cha){
  if(cha==1)
    {
      window.clickedlinks.push("E");
    }
  if(cha==2)
    {
      window.clickedlinks.push("I");
      alert(JSON.stringify(clickedlinks));
    }
    
}
//alert(JSON.stringify(clickedlinks));
function quiz2(cha){
  if(cha==1)
    {
      window.clickedlinks.push("S");
    }
  if(cha==2)
    {
      window.clickedlinks.push("N");
      alert(JSON.stringify(clickedlinks));
    }
}
quiz1();
quiz2();
alert(JSON.stringify(clickedlinks));
