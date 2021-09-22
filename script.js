function quiz1() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 1: Sau 1 tuần căng thẳng, bạn thường dành thời gian cuối tuần để làm gì?";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F1.png?v=1632245118753";
  var answer=["Đi ra ngoài cùng bạn bè", "Ở nhà thư giản"];
  document.addEventListener("DOMContentLoaded", function(){

      document.querySelector('#answer1').innerHTML = "Đi ra ngoài cùng bạn bè";
      document.querySelector('#answer2').value = "Ở nhà thư giản";
    }
  )
}
