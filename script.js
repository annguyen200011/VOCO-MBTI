let MBTI="xxxx";
function quiz1() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 1: Sau 1 tuần căng thẳng, bạn thường dành thời gian cuối tuần để làm gì?";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F1.png?v=1632245118753";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz2()' onclick='getE()'>Đi ra ngoài cùng bạn bè</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz2()' onclick='getI()'>Ở nhà thư giản</a>";
}

function getE() {
  if(!MBTI.includes("E") || MBTI.includes("I"))
    {
      MBTI[0]="E";
    }
}
function getI() {
  MBTI += "I";
}

function quiz2() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 2: Câu nào sau đây mô tả đúng về tính cách của bạn:";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F2.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz3()' onclick='getS()'>Bạn quan tâm vào hiện tại, thích các giải pháp đơn giản và thực tế</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz3()' onclick='getN()'>Bạn thích mơ mộng về tương lai và dựa nhiều vào trực giác hơn là thông tin</a>";
}
function getS() {
  MBTI += "S";
}
function getN() {
  MBTI += "N";
}


function quiz3() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 3: Khi đưa ra một quyết định bạn thường";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz4()' onlick='quiz2()'>Luôn tìm kiếm sự kiện và tính logic để đưa ra quyết định";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz4()' onlick='quiz2()'>Xem xét cảm xúc cá nhân và ảnh hưởng của một quyết định lên người khác trước khi đưa ra quyết định đó</a>";
}



function quiz4() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 4: Nếu còn 2 tuần nữa là dự đám cưới của bạn thân, bạn sẽ";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F4.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:answer()' onlick='quiz2()'>Chuẩn bị chu đáo quà tặng và quần áo sẽ bận</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:answer()' onlick='quiz2()'>Sao phải chuẩn bị? Tôi thích mọi thứ diễn ra tự nhiên và thoải </a>";
}
function answer() {
  document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là: " + MBTI;
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2Fillustration.svg?v=1618177344016";

  document.querySelector("#answer1").innerHTML = "<a></a>";
  document.querySelector("#answer2").innerHTML = "<a></a>";
}
