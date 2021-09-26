var MBTI = 0;
function quiz1() {
  MBTI = 0;
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";

  document.querySelector("h2").innerHTML =
    "Câu hỏi 1: Sau 1 tuần căng thẳng, bạn thường dành thời gian cuối tuần để làm gì?";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F1.png?v=1632245118753";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz2()' onclick='getE()'>Đi ra ngoài cùng bạn bè</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz2()' onclick='getI()'>Ở nhà thư giản</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}

function getE() {
  if (MBTI == 0) MBTI += 1;
  answer();
}
function getI() {
  if (MBTI == 1) MBTI -= 1;
  answer();
}

function quiz2() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";

  document.querySelector("h2").innerHTML =
    "Câu hỏi 2: Câu nào sau đây mô tả đúng về tính cách của bạn:";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F2.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz3()' onclick='getS()'>Bạn quan tâm vào hiện tại, thích các giải pháp đơn giản và thực tế</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz3()' onclick='getN()'>Bạn thích mơ mộng về tương lai và dựa nhiều vào trực giác hơn là thông tin</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}
function getS() {
  if (parseInt(MBTI / 10) == 0) MBTI += 10;
}
function getN() {
  if (parseInt(MBTI / 10) == 1) MBTI -= 10;
}

function quiz3() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.querySelector("h2").innerHTML =
    "Câu hỏi 3: Khi đưa ra một quyết định bạn thường";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz4()' onclick='getT()'>Luôn tìm kiếm sự kiện và tính logic để đưa ra quyết định";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz4()' onclick='getF()'>Xem xét cảm xúc cá nhân và ảnh hưởng của một quyết định lên người khác trước khi đưa ra quyết định đó</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}
function getT() {
  if (parseInt(MBTI / 100) == 0) MBTI += 100;
}
function getF() {
  if (parseInt(MBTI / 100) == 1) MBTI -= 100;
}

function quiz4() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.querySelector("h2").innerHTML =
    "Câu hỏi 4: Nếu còn 2 tuần nữa là dự đám cưới của bạn thân, bạn sẽ";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F4.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:answer()' onclick='getJ()'>Chuẩn bị chu đáo quà tặng và quần áo sẽ bận</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:answer()' onclick='getP()'>Sao phải chuẩn bị? Tôi thích mọi thứ diễn ra tự nhiên và thoải </a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
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
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fkisspng-infp-personality-type-personality-test-human-behav-5aff9773c244a0.3040150515266998917957.png?v=1632320410336";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INFP: Người hòa giải";
      document.querySelector("p").innerHTML =
        "Nhóm tính cách này thường được coi là bình tĩnh và dè dặt, tuy nhiên, ngọn lửa và niềm đam mê bên trong họ rất lớn, không giống như các loại tính cách khác, họ thực sự tình cảm và có lòng trắc ẩn cao.";

      break;

    case 1:
      document.querySelector("#imgChange").src =
        "https://static.neris-assets.com/images/personality-types/headers/diplomats_Campaigner_ENFP_personality_header.svg";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENFP: Người truyền cảm hứng/ Người dẫn dắt";
      document.querySelector("p").innerHTML =
        "Họ thường rất tò mò, duy tâm và khá bí ẩn vì họ tìm kiếm ý nghĩa và thực sự quan tâm đến động cơ của người khác, vì vậy họ thấy cuộc sống rất rộng lớn và có nhiều câu đố chưa được giải mã mà trong đó mọi thứ đều liên hệ với nhau.";
      break;

    case 10:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F2c4fba2f-4cdb-4e2c-a7d9-00ea87bca33a.image.png?v=1632304804237";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISFP: Người nghệ sĩ";
      document.querySelector("p").innerHTML =
        "Họ thường được liên hệ với tính tự phát và không thể đoán trước nhất trong tất cả các loại tính cách hướng nội, vì vậy nét đặc trưng nổi bật của họ là sự thay đổi.";
      break;
    case 11:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F964f2a87-7938-4e8b-bc65-789bd36ad879.image.png?v=1632304745573";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESFP: Người trình diễn";
      document.querySelector("p").innerHTML =
        "Họ thích là trung tâm của sự chú ý và cũng thích những điều đơn giản nhất. Sự vui vẻ và bản chất nồng nhiệt của họ thường rất hấp dẫn người khác, vì vậy họ không bao giờ cạn ý tưởng và sự tò mò của họ là vô hạn.";
      break;
    case 100:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F4606e440-1a9c-4ebd-87a5-9c05b97a137b.image.png?v=1632305057067";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INTP: Nhà tư duy";
      document.querySelector("p").innerHTML =
        "Bạn thích những học thuyết và tin rằng mọi thứ đều có thể được phân tích và cải thiện, vì vậy họ không quan tâm đến thế giới trần tục và những điều thực tế khác – họ nghĩ rằng nó ít thú vị hơn so với những ý tưởng hoặc hành trình theo đuổi kiến thức.<br><br>INTP là những cá nhân trầm tính, chu đáo, có niềm đam mê mãnh liệt với phân tích logic, hệ thống phức tạp và thiết kế. Họ thường tò mò và thích tìm hiểu về các hệ thống, lý thuyết phức tạp và cách mọi thứ hoạt động. INTP thông thường không phải kiểu người truyền thống, họ có những suy nghĩ riêng và không chạy theo đám đông. Do tính chất độc lập nên họ thích làm việc tách biệt hơn là trong một nhóm, tuy nhiên họ có thể thể hiện kỹ năng vượt trội trong việc giải thích các khái niệm, ý tưởng phức tạp cho người khác. Đối với những The Architect, cuộc sống là một hành trình khám phá những bí ẩn của vũ trụ.<br><br>INTP là người hoạt động độc lập tốt hoặc một nhóm nhỏ đồng nghiệp có năng lực, thông minh và logic. Họ thích một môi trường linh hoạt, cho phép họ xử lý các vấn đề một cách sáng tạo, không bị ràng buộc bởi các quy tắc truyền thống. Họ phù hợp với các nhóm ngành sau đây:Nhóm ngành công nghệ IT (Phát triển phần mềm, nhà phát triển web,…)Kỹ sư kỹ thuật;Khoa học (Nhà khoa học, nhà tâm lý học, giáo sư tiến sỹ,…);Kinh doanh và tài chính (chuyên gia tài chính, kỹ sư bán hàng, Nghiên cứu thị trường,..);Giải trí và nghệ thuật (Nhiếp ảnh gia, Biên tập viên, Nhạc sỹ,…).";
      break;
    case 101:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Faecb77c9-079f-4b9c-b1fc-0af0ea8032ca.image.png?v=1632305215539";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENTP: Người có tầm nhìn xa";
      document.querySelector("p").innerHTML =
        "Nhóm tính cách này rất nhanh nhạy và độc đáo, điều này mang lại cho họ một lợi thế lớn trong các cuộc tranh luận, các lĩnh vực học thuật và chính trị. Tuy nhiên họ cũng có xu hướng làm rất tốt trong nhiều lĩnh vực khác đòi hỏi phải sẵn sàng thách thức các ý tưởng hiện có và tổ chức nhiều cuộc tranh luận.<br><br>ENTP được mô tả là những người thông minh, lanh lợi, hướng ngoại, sáng tạo, linh hoạt và tháo vát. Họ luôn xuất sắc trong việc đưa ra các giải pháp mới mẻ và độc đáo trước các vấn đề khó khăn, thường thì họ không lên kế hoặch trước cho một dự án. ENTP cũng có một sự hiểu biết sâu sắc về cách mà mọi thứ cũng như các mối quan hệ hoạt động và làm cách nào để cải thiện chúng. Họ không thích phán xét, cởi mở, khéo léo trong giao tiếp với đầu óc thông minh và khả năng ngôn ngữ linh hoạt. Với sự sáng tạo không ngừng và kỹ năng giao tiếp xã hội tuyệt vời, The Inventor hoàn toàn xứng đáng với vai trò của một người lãnh đạo trong một tổ chức hay tập thể.<br><br>ENTP là người quan tâm đến việc áp dụng các giải pháp sáng tạo cho các vấn đề thách thức trong công việc nhằm mang lại hiệu quả tối ưu nhất có thể. Một môi trường luôn tạo sự thách thức trí tuệ, đòi hỏi liên tục sự nâng cao kiến thức cùng với những người đồng nghiệp thông minh là ưa thích đối với ENTP. Họ phù hợp với các nhóm ngành sau đây:Kinh doanh và lãnh đạo (Quản lý kinh doanh, quản trị nhân sự, giám đốc điều hành,…);Nghệ thuật và thiết kế (Kiến trúc sư, Nhà sản xuất nghệ thuật,….);Khoa học và kỹ thuật (Nhà khoa học, kỹ sư, giáo sư tiến sỹ,…).";
      break;
    case 110:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fc724e988-5534-4e75-8e3f-c40e88978931.image.png?v=1632304955624";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISTP: Nhà cơ học";
      document.querySelector("p").innerHTML =
        "Nhóm tính cách này sở hữu nhiều đặc điểm thú vị, họ thường suy nghĩ rất hợp lý và logic, nhưng cũng có thể khiến mọi người ngạc nhiên khi đột nhiên trở nên tự phát và nhiệt tình hơn.";
      break;
    case 111:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F698e486f-2362-4606-92ab-b7f94e4ca977.image.png?v=1632304705625";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESTP: Người đề xướng";
      document.querySelector("p").innerHTML =
        "Những người thuộc nhóm này rất có tính tập thể, tự phát, thẳng thắn, thích hành động và luôn đi thẳng vào cốt lõi của vấn đề, vì vậy họ không thích những cuộc tranh luận lý thuyết hay suy nghĩ về tương lai - họ chỉ tập trung vào thời điểm hiện tại và nỗ lực hết mình cho những thứ họ thích.";
      break;
    case 1000:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F9e483f09-7e2f-4d65-bbf2-9b6c696c9de4.image.png?v=1632305250908";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INFJ: Người che chở";
      document.querySelector("p").innerHTML =
        "Nhóm tính cách này thường có những quan điểm mạnh mẽ, đặc biệt là khi liên quan đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống, vì vậy nếu nhóm INFJ đấu tranh vì điều gì đó, lý do chính là họ tin vào lý tưởng của chính mình.";
      break;
    case 1001:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F414e3a1c-eafb-42b1-82cc-64baf30e548e.image.png?v=1632305318770";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENFJ: Người chỉ dạy";
      document.querySelector("p").innerHTML =
        "Những người thuộc nhóm tính cách này có sức ảnh hưởng lớn bởi vì họ thường rất lôi cuốn và có tài hùng biện. Họ chăm sóc mọi người một cách chân thành, dễ dàng truyền đạt ý tưởng và ý kiến của họ cho mọi người xung quanh.";
      break;
    case 1010:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F0d321081-ac82-4ddf-9820-bc3f281d7c07.image.png?v=1632304339199";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISFJ: Người nuôi dưỡng";
      document.querySelector("p").innerHTML =
        "Đây là nhóm tính cách vị tha nhất, do đó họ thường tìm kiếm con đường sự nghiệp trong lĩnh vực học thuật, y tế, công tác xã hội hoặc tư vấn; họ cũng tỏa sáng ở các vị trí hành chính và văn phòng, hoặc thậm chí trong các lĩnh vực hơi bất ngờ như thiết kế nội thất.";
      break;
    case 1011:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3855f80b-e455-46ed-be22-f9264f6238b1.image.png?v=1632304060128";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESFJ: Người quan tâm";
      document.querySelector("p").innerHTML =
        "Nhóm tính cách này là những người thực tế, vị tha, giỏi làm việc nhóm, truyền thống và làm hết sức mình để hỗ trợ và bảo vệ lẽ phải và quyền lợi của họ, vì vậy họ có xu hướng rất tận tụy ngay cả khi họ đóng vai trò là người chủ trì của một bữa tiệc hoặc một nhân viên xã hội.";
      break;
    case 1100:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fab54ddd0-ff22-4369-b139-e32eb878d2e9.image.png?v=1632304024089";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INTJ: Nhà khoa học";
      document.querySelector("p").innerHTML =
        "Nhóm này thường được xem là rất thông minh và khó hiểu một cách bí ẩn, vì vậy họ thường tỏa ra sự tự tin, dựa trên kho kiến thức rộng lớn của họ bao gồm nhiều lĩnh vực và khía cạnh khác nhau.";
      break;
    case 1101:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Ff0e8034a-3e33-47db-ad1c-e8680f20b3a2.image.png?v=1632305436434";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENTJ: Nhà điều hành";
      document.querySelector("p").innerHTML =
        "Nhóm tính cách này thường rất lôi cuốn, lý trí và nhạy bén vì họ rất giỏi trong việc lãnh đạo và truyền cảm hứng cho người khác, vì vậy nhóm ENTJ có khả năng lãnh đạo tốt nhất trong tất cả các loại tính cách và họ tin rằng nếu có quyết tâm, mọi thứ đều có thể.<br><br>ENTJ có tố chức để trở thành một nhà lãnh đạo, thiết lập chiến lược và tạo ra động lực cho tổ chức đạt được sự tiến bộ. Họ nổi bật trong việc phân tích, lý luận logic và đầu óc tư duy xuất sắc. Ngoài ra, họ còn rất quyết đoán, bộc trực và luôn thích chịu trách nhiệm khi phát sinh vấn đề lỗi. ENTJ tự tin về khả năng của mình, áp đảo người khác bởi đầu óc lập luận sắc bén và ngôn từ sắc sảo. Tuy nhiên họ cũng rất khách quan và không bị ảnh hưởng bởi các vấn đề xung đột hoặc sự chỉ trích xung quanh. Đôi lúc, một vài người có thể cho rằng ENTJ kiêu ngạo, vô cảm nhưng đó là bản năng của họ, suy cho cùng thì họ vẫn muốn tập trung vào kết quả của công việc với năng suất cao nhất.<br><br>ENTJ mong muốn ngồi vào các vị trí lãnh đạo nơi mà cho họ đủ quyền lực để thực thi các chiến lược của mình. Một môi trường được cấu trúc bởi những người có năng lượng, tư duy và thông minh là lý tưởng cho ENTJ. Họ phù hợp với các nhóm ngành sau đây:Kinh doanh và tài chính (Quản lý kinh doanh, chuyên gia tài chính , giám đốc điều hành,…);Lãnh đạo và quản lý (Quản lý nhân sự, Chủ tịch hội đồng,…);Kiến trúc và kỹ thuật (Kỹ sư, Kiến trúc sư, Kiểm soát viên, Nhà thầu xây dựng…);Khoa học và đời sống (Nhà kinh tế, Nhà tâm lý, Nhà khoa học,…);Nghệ thuật và truyền thông (Quan hệ công chúng, Giám đốc sản xuất nghệ thuật,…);Chăm sóc sức khỏe (Bác sỹ, quản lý dịch vụ y tế,…);Giáo dục và đào tạo (Giảng viên, Giáo sư tiến sỹ,…);Giải trí và thể thao (Huấn luyện viên, Nhà sản xuất,..);Nhóm ngàng IT;Pháp luật (Thanh tra, Luật sư, Cảnh sát điều tra,…).";
      break;
    case 1110:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fa2a90f65-0761-4234-8d1f-87745d06b6f9.image.png?v=1632304557705";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISTJ: Người kiểm duyệt";
      document.querySelector("p").innerHTML =
        "Đây là nhóm tính cách phổ biến nhất, họ hướng đến chân lý, tôn trọng sự thật và có xu hướng tiếp thu nhiều thông tin và ghi nhớ chúng trong một thời gian dài.";
      break;
    case 1111:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F18056633-8c0a-474a-9341-ae9ca32d580c.image.png?v=1632304264503";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESTJ: Người giám sát";
      document.querySelector("p").innerHTML =
        "Họ là những người thiên về nguyên tắc, truyền thống, sự ổn định và họ cảm thấy cần phải gắn kết với điều gì đó – đó có thể là một gia đình, một cộng đồng hoặc một nhóm xã hội khác; vì vậy họ thích sự tổ chức của người khác và đảm bảo rằng họ sẽ tuân thủ các quy tắc truyền thống mà được ban hành bởi những người có thẩm quyền.<br><br>ESTJ là những người lễ nghi, thực tế, chăm chỉ và trách nhiệm cao với một bộ óc nhạy bén trong việc kinh doanh, tổ chức quản lý cũng như con mắt nhìn người. Họ làm việc có trật tự, quy tắc và một hệ thống phương pháp rõ ràng. ESTJ luôn muốn mang đến một cấu trúc được tổ chức hoàn hảo và các hoạt động được vận hành một cách trơn tru cho môi trường xung quanh. Họ đặc biệt giỏi với vai trò của một người quản lý, giám sát với. Với khả năng giao tiếp đối ngoại tốt, họ không khó khăn để truyền đạt ý kiến, hướng dẫn, giúp đợ và thiết lập được một quy trình làm việc có hiệu suất tốt nhất cho mọi người cũng như hệ thống xã hội.<br><br>ESTJ rất giỏi trong việc tổ chức con người, dự án và các quy trình hoạt động. Họ muốn mọi việc luôn trong tầm kiểm soát và vì thế họ thường phù hợp với các vị trí quản lý để có thể đưa ra những quyết định về chính sách, thủ tục. ESTJ phù hợp với các nhóm ngành sau đây:Kinh doanh, bán hàng và tài chính (Cố vấn tài chính, Kế toán, Quản lý kinh doanh,…);Văn phòng và hành chính;Quản lý;Kiến trúc sư, kỹ thuật viên và kỹ sư kỹ thuật;Khoa học và đời sống (Kỹ thuật viên nông lâm nghiệp, nhà sinh học môi trường,…);Nông lâm nghiệp;Kỹ thuật bảo trì và sửa chữa (Cơ khí ô tô, nhân viên điện lạnh, điện tử,…);Vận chuyển;Sản xuất;Giải trí, thể thao;Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên, nhân viên xã hội…);Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ, Y tá, Điều dưỡng…);Giáo dục (Giáo viên, Quản trị viên, Thủ thư…);Cảnh sát, vệ sỹ, lính cứu hỏa, quân đội;Pháp luật (Tòa án, luật sư…).";
      break;
  }

  document.querySelector("#answer1").innerHTML = "<a></a>";
  document.querySelector("#answer2").innerHTML = "<a></a>";
  document.getElementById("start-button").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.querySelector("#start-button").innerHTML = "Làm lại";
  document.querySelector("i").innerHTML =
    "Mẹo: Bạn có thể làm lại lần nữa để có tham khảo các nhóm tính cách khác! Ngoài ra bạn có thể tìm hiểu thêm và phát triển bản thân qua Fanpage(https://www.facebook.com/VOCOCenter) và Khóa học của VOCO(https://tesse.io/vococenter?tab=courses) ";
}
