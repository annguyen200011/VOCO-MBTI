var clickedlinks = new Array();;
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('quiz1').onclick = function(){
    clickedlinks.push(this.value);
  }
})

alert(JSON.stringify(clickedlinks));