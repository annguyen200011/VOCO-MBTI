var MBTI = 0;
function quiz1() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 1: Sau 1 tuần căng thẳng, bạn thường dành thời gian cuối tuần để làm gì?";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F1.png?v=1632245118753";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz2()' onclick='getE()'>Đi ra ngoài cùng bạn bè</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz2()' onclick='getI()'>Ở nhà thư giản</a>";
  document.querySelector("p").innerHTML = "";
}

function getE() {
  if (MBTI == 0) MBTI += 1;
}
function getI() {
  if (MBTI == 1) MBTI -= 1;
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
  document.querySelector("p").innerHTML = "";
}
function getS() {
  if (parseInt(MBTI / 10) == 0) MBTI += 10;
}
function getN() {
  if (parseInt(MBTI / 10) == 1) MBTI -= 10;
}

function quiz3() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 3: Khi đưa ra một quyết định bạn thường";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz4()' onclick='getT()'>Luôn tìm kiếm sự kiện và tính logic để đưa ra quyết định";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz4()' onclick='getF()'>Xem xét cảm xúc cá nhân và ảnh hưởng của một quyết định lên người khác trước khi đưa ra quyết định đó</a>";
  document.querySelector("p").innerHTML = "";
}
function getT() {
  if (parseInt(MBTI / 100) == 0) MBTI += 100;
}
function getF() {
  if (parseInt(MBTI / 100) == 1) MBTI -= 100;
}

function quiz4() {
  document.querySelector("h2").innerHTML =
    "Câu hỏi 4: Nếu còn 2 tuần nữa là dự đám cưới của bạn thân, bạn sẽ";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F4.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:answer()' onclick='getJ()'>Chuẩn bị chu đáo quà tặng và quần áo sẽ bận</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:answer()' onclick='getP()'>Sao phải chuẩn bị? Tôi thích mọi thứ diễn ra tự nhiên và thoải </a>";
  document.querySelector("p").innerHTML = "";
}
function getJ() {
  if (parseInt(MBTI / 1000) == 0) MBTI += 1000;
}
function getP() {
  if (parseInt(MBTI / 1000) == 1) MBTI -= 1000;
}

function answer() {
  switch (MBTI) {
    case 0:
      document.querySelector("#imgChange").src =
        "https://static.neris-assets.com/images/personality-types/headers/diplomats_Mediator_INFP_personality_header.svg";
    
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là INFP";
      document.querySelector("p").innerHTML =
        "Bạn thích những học thuyết và tin rằng mọi thứ đều có thể được phân tích và cải thiện, vì vậy họ không quan tâm đến thế giới trần tục và những điều thực tế khác – họ nghĩ rằng nó ít thú vị hơn so với những ý tưởng hoặc hành trình theo đuổi kiến thức.";
      break;

    case 1:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ENFP";
      document.querySelector("p").innerHTML = "";
      break;

    case 10:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ISFP";
      document.querySelector("p").innerHTML = "";
      break;
    case 11:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ESFP";
      document.querySelector("p").innerHTML = "";
      break;
    case 100:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là INTP";
      document.querySelector("p").innerHTML = "";
      break;
    case 101:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ENTP";
      document.querySelector("p").innerHTML = "";
      break;
    case 110:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ISTP";
      document.querySelector("p").innerHTML = "";
      break;
    case 111:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ESTP";
      document.querySelector("p").innerHTML = "";
      break;
    case 1000:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là INFJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1001:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ENFJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1010:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ISFJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1011:
      document.querySelector("#imgChange").src = "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3855f80b-e455-46ed-be22-f9264f6238b1.image.png?v=1632304060128";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ESFJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1100:
      document.querySelector("#imgChange").src = "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fab54ddd0-ff22-4369-b139-e32eb878d2e9.image.png?v=1632304024089";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là INTJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1101:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ENTJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1110:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ISTJ";
      document.querySelector("p").innerHTML = "";
      break;
    case 1111:
      document.querySelector("#imgChange").src = "";
      document.querySelector("h2").innerHTML = "Nhóm tích cách của bạn là ESTJ";
      document.querySelector("p").innerHTML = "";
      break;
  }

  document.querySelector("#answer1").innerHTML = "<a></a>";
  document.querySelector("#answer2").innerHTML = "<a></a>";
}
