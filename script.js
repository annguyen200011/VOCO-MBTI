let MBTI = 0;
let dic = {
  I:"<b>I</b>ntroversion: ưa thích hướng nội nên thường có xu hướng thích sự yên tĩnh, chỉ thích tương tác với những người bạn thân thiết. <br>",
  E:"<b>E</b>xtraversion: ưa thích hướng ngoại, cảm giác được thúc đẩy và giàu năng lượng dành cho những người xunh quanh;<br>",
  S:"<b>S</b>ensing: Dùng cảm nhận cụ thể nhiều hơn là trực giác, vì vậy họ tập trung sự chú ý vào những chi tiết nhỏ nhặt, những điều xảy ra ngay tại thực tại hơn là những thứ có thể đến trong tương lai;<br>",
  N:"i<b>N</b>tuition: Dùng trực giác nhiều hơn là cảm nhận cụ thể, vì vậy họ tập trung sự chú ý vào bức tranh toàn cảnh cũng như là những điều có thể xảy ra trong tương lai hơn là chú ý vào thực tại;<br>",
  T:"<b>T</b>hinking: Suy nghĩ lý trí hơn là cảm xúc, xu hướng coi trọng các tiêu chí khách quan hơn là sở thích cá nhân. Khi đưa ra một quyết định thì thường dựa vào sự logic hơn là yếu tố xã hội;<br>",
  F:"<b>F</b>eeling: Đưa ra quyết định dựa vào cảm nhận, trạng thái cảm xúc tình cảm, giá trị cá nhân hơn là dựa vào các yếu tố khách quan hoặc quy luật logic;<br>",
  J:"<b>J</b>udgement: Họ đánh giá một cách rất nguyên tắc và khả năng dự đoán của mình, sớm lập kế hoặch và tuân thủ theo nó thay vì là những quyết định tự phát, linh hoạt.<br><br>",
  P:"<b>P</b>erception: Họ không vội đánh giá hay sớm ra một quyết định phán xét quan trọng nào đó ,thay vào đó luôn nhìn nhận một cách linh hoạt vấn đề và có thể thay đổi tùy hoàn cảnh.<br><br>"
};

function codeToPer(code){
  let per='';
  if(code%10 === 0)  {
    per+='I';
  }
  else per+='E';

  if(parseInt(code/10)%10 === 0)
    per+='N';
  else per+='S';

  if(parseInt(code/100)%10 === 0)
    per+='F';
  else per+='T';

  if(parseInt(code/1000) === 0)
    per+='P';
  else per+='J';

  return "Ý nghĩa của nhóm tính cách "+per+":<br> "+dic[per[0]]+dic[per[1]]+dic[per[2]]+dic[per[3]];
}
function quiz1() {
  MBTI = 0;
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";

  document.querySelector("h2").innerHTML =
    "Câu hỏi 1: Khi cảm thấy quá tải và cần sạc lại pin, bạn thường:";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F1.png?v=1632245118753";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz2()' onclick='getE()'>Đi ra ngoài cùng bạn bè</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz2()' onclick='getI()'>Dành thời thư giản một mình</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}

function getE() {
  if (MBTI === 0) MBTI += 1;
}
function getI() {
  if (MBTI === 1) MBTI -= 1;
}

function quiz2() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";

  document.querySelector("h2").innerHTML =
    "Câu hỏi 2: Mô tả nào phù hợp với bạn hơn:";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F2.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz3()' onclick='getS()'>Bạn thích tận hưởng mọi khoảnh khắc ở hiện tại, bạn hiện thực và dựa trên thực tế</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz3()' onclick='getN()'>Bạn là người yêu thích các ý tưởng và giả thuyết, bạn thích tưởng tượng và mơ mộng về tương lai</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}
function getS() {
  if (parseInt(MBTI / 10) === 0) MBTI += 10;
}
function getN() {
  if (parseInt(MBTI / 10) === 1) MBTI -= 10;
}

function quiz3() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.querySelector("h2").innerHTML =
    "Câu hỏi 3: Khi bạn đưa ra một quyết định lớn, như chọn trường đại học ở đâu hay liệu có nên chia tay ai đó không, bạn sẽ lựa chọn bằng cách:";
  document.querySelector("#imgChange").src =
    "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3.png?v=1632245118754";

  document.querySelector("#answer1").innerHTML =
    "<a href='javascript:quiz4()' onclick='getT()'>Sử dụng logic và lý trí để đưa ra quyết định</a>";
  document.querySelector("#answer2").innerHTML =
    "<a href='javascript:quiz4()' onclick='getF()'>Lắng nghe trái tim và cân nhắc cảm xúc của người khác</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}
function getT() {
  if (parseInt(MBTI / 100) === 0) MBTI += 100;
}
function getF() {
  if (parseInt(MBTI / 100) === 1) MBTI -= 100;
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
    "<a href='javascript:answer()' onclick='getP()'>Để mọi thứ phát triển một cách tự nhiên và linh hoạt</a>";
  document.querySelector("p").innerHTML = "";
  document.querySelector("i").innerHTML = "";
}
function getJ() {
  if (parseInt(MBTI / 1000) === 0) MBTI += 1000;
}
function getP() {
  if (parseInt(MBTI / 1000) === 1) MBTI -= 1000;
}

function answer() {
  switch (MBTI) {
    case 0:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fkisspng-infp-personality-type-personality-test-human-behav-5aff9773c244a0.3040150515266998917957.png?v=1632320410336";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INFP: Người hòa giải";
      document.querySelector("p").innerHTML = codeToPer(0)+
        "Nhóm tính cách này thường được coi là bình tĩnh và dè dặt, tuy nhiên, ngọn lửa và niềm đam mê bên trong họ rất lớn, không giống như các loại tính cách khác, họ thực sự tình cảm và có lòng trắc ẩn cao.<br><br>INFP là những nhà lý tưởng giàu trí tưởng tượng được dẫn dắt bởi chính niềm tin và các giá trị cốt lõi của họ. Họ tập trung nhiều năng lượng vào các cảm giác mãnh liệt và các giá trị đạo đức sâu sắc. INFP thường rất nhạy cảm, đồng cảm, có lòng vị tha và quan tâm đến sự phát triển của bản thân cũng như những người khác, và mong đợi mọi người cũng làm như vậy. Mang tư tưởng cá nhân nhưng cũng rất sáng tạo, linh hoạt và có hơi hướng nghệ thuật, và không hề phán xét trong việc đối xử với người khác vì họ biết rằng mỗi người có một con đường riêng của bản thân. INFP thật chất là những người có thể trao đổi cởi mở, hợp tác hỗ trợ nhưng có thể sẽ không thích khi các giá trị riêng của bản thân bị vi phạm.<br><br>Đúng với tính cách của một INFP, khi họ tìm kiếm một công việc, họ luôn chú tâm đến điều mà họ thích làm nhất, đó là công việc tự chủ, sáng tạo, phù hợp với các giá trị cá nhân của họ để giúp đỡ, cải thiện hoàn cảnh cho người khác. INFP luôn được thúc đẩy bởi tầm nhìn và cảm hứng, muốn được đặt dấu ấn cá nhân vào công việc nhưng cũng rất hợp tác, hỗ trợ và linh hoạt với mọi người. Họ phù hợp với các nhóm ngành sau đây:<br>-Nghệ thuật và thiết kế (thiết kế thời trang, thiết kế mỹ thuật,…);<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, quản lý dịch vụ cộng đồng,…);<br>-Giáo dục (Giáo viên, Quản trị viên, Thủ thư…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ vật lý trị liệu,…);<br>-Kinh doanh, quản lý và bán hàng (Marketing, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Phương tiện – truyền thông (Biên tập viên, Quan hệ công chúng, Tác giả,…);<br>-Khoa học (Nhà tâm lý học, nhà xã hội học,…).";

      break;

    case 1:
      document.querySelector("#imgChange").src =
        "https://static.neris-assets.com/images/personality-types/headers/diplomats_Campaigner_ENFP_personality_header.svg";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENFP: Người truyền cảm hứng/ Người dẫn dắt";
      document.querySelector("p").innerHTML =codeToPer(1)+
        "Họ thường rất tò mò, duy tâm và khá bí ẩn vì họ tìm kiếm ý nghĩa và thực sự quan tâm đến động cơ của người khác, vì vậy họ thấy cuộc sống rất rộng lớn và có nhiều câu đố chưa được giải mã mà trong đó mọi thứ đều liên hệ với nhau.<br><br>ENFP là những người sáng tạo, giàu năng lượng, đam mê  hứng thú với mọi người và khả năng của họ. ENFP luôn mang đến những ý tưởng, sinh lực và kích thích người khác phát triển bằng sự nhiệt tình trong những hơi thở của họ. ENFP thích những sự khởi đầu của một dự án nào đó hoặc là một mối quan hệ mới, họ có khả năng giao tiếp thông minh, óc phán đoán nhanh nhạy để biết được nhu cầu của người khác để có thể đưa ra những giúp đỡ, tư vấn cần thiết. Họ không thích tập trung quá vào chi tiết và lặp đi lăp lại các quá trình cũ kỹ. ENFP thích sự mới lạ, luôn lạc quan, hang hái và cảm xúc mạnh mẽ. Ho khát khao dành chiến thắng và chia sẻ kinh nghiệm của họ đến những người khác.<br><br>Đúng với tính cách của một ENFP, khi họ tìm kiếm một công việc, họ luôn chú tâm đến điều mà họ thích làm nhất, đó là dùng óc sáng tạo của mình để mang lại lợi ích cho mọi người. ENFP phù hợp với các nhóm ngành sau đây:<br>-Nghệ thuật, thiết kế và giải trí (Diễn viên, nhạc sỹ, ca sỹ,…);<br>Kinh doanh, quản lý và bán hàng (Marketing, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Dịch vụ chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu, Thợ cắt tóc…);<br>-Phương tiện – truyền thông (Biên tập viên, Quan hệ công chúng, Tác giả,…);<br>-Khoa học (Nhà tâm lý học, nhà xã hội học,…);<br>-Giáo dục (Giáo viên, Quản trị viên,…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ vật lý trị liệu,…);<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên hôn nhân gia đình,…).";
      break;

    case 10:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F2c4fba2f-4cdb-4e2c-a7d9-00ea87bca33a.image.png?v=1632304804237";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISFP: Người nghệ sĩ";
      document.querySelector("p").innerHTML =codeToPer(10)+
        "Họ thường được liên hệ với tính tự phát và không thể đoán trước nhất trong tất cả các loại tính cách hướng nội, vì vậy nét đặc trưng nổi bật của họ là sự thay đổi.<br><br>ISFP là những người hòa bình, thân thiện, dễ tính. Với phương châm sống là để tận hưởng những khoảnh khắc của cuộc sống, họ luôn lạc quan, vui vẻ và linh hoạt một cách tự phát với dòng chảy  để tận hưởng những gì cuộc sống mang lại. ISFP có tính thẩm mỹ cao, luôn tìm kiếm cái đẹp, họ đặc biệt xuất sắc trong việc sử dụng sự sáng tạo, tài năng tự nhiên trong nghệ thuật. ISFP mặc dù yên tĩnh, khiêm tốn, dễ chịu nhưng vẫn có giá trị đóng góp riêng của mình. Họ không thích là tâm điểm của sự chú ý và thích đóng vai trò hỗ trợ, chia sẻ kinh nghiệm trong cuộc sống.<br><br>ISFP thích một môi trường làm việc hợp tác, lịch sự nơi họ có thể làm việc một cách yên tĩnh với sự hỗ trợ khi cần thiết. Mặc dù thích làm việc độc lập nhưng khi làm việc với người khác ISFP muốn các đồng  nghiệp linh hoạt, hỗ trợ và trung thành. ISFP phù hợp với các nhóm ngành sau đây:<br>-Giáo dục (Giáo viên mầm non, Quản trị viên,…);<br>-Kinh doanh, quản lý và bán hàng (Marketing, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Giải trí, nghệ thuật và thiết kế (Ca sỹ, Nhạc sỹ, Thiết kế thời trang,…);<br>-Dịch vụ sức khỏe và chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu, Y tá…);<br>-Cảnh sát, lính cứu hỏa;<br>-Kiến trúc sư, thợ mộc, thợ may, đầu bếp, thợ kim hoàn.";
      break;
    case 11:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F964f2a87-7938-4e8b-bc65-789bd36ad879.image.png?v=1632304745573";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESFP: Người trình diễn";
      document.querySelector("p").innerHTML =codeToPer(11)+
        "Họ thích là trung tâm của sự chú ý và cũng thích những điều đơn giản nhất. Sự vui vẻ và bản chất nồng nhiệt của họ thường rất hấp dẫn người khác, vì vậy họ không bao giờ cạn ý tưởng và sự tò mò của họ là vô hạn.<br><br>ESFP luôn hoạt bát, quyến rũ và thu hút những người xung quanh khiến họ cảm thấy vui vẻ. Họ rất ấm áp, hài hước và thích được là trung tâm của sự chú ý. ESFP sống trong những khoảnh khắc của hiện tại và muốn tận hưởng tối đa những gì mà cuộc sống mang lại. Họ đặc biệt giỏi trong việc quan sát, cảm nhận, giúp đỡ và huy động thuyết phục mọi người để cùng giải quyết vấn đề theo những cách rất thực tế. ESFP thích một cuộc sống tự nhiên mà không cần phải lên kế hoặch trước, muốn thoải mái vui vẻ cũng các hoạt động, sở thích với bạn bè mà không cần các nguyên tắc, quy ước can thiệp vào. Tính tình rộng lượng, lạc quan và giỏi thuyết phục, họ là những người tương tác cá nhân tuyệt vời.<br><br>ESFP là dạng người có tính nghệ thuật, luôn muốn được thực hành trong một môi trường làm việc xã hội năng động, linh hoạt nơi mà họ có thể tự do làm việc vui vẻ bên cạnh những người đồng nghiệp thân thiện, hòa đồng và nhiệt tình. ESFP phù hợp với các nhóm ngành sau đây:<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên,…);<br>-Phương tiện – truyền thông (Biên tập viên, Quan hệ công chúng, Tác giả,…);<br>-Giáo dục (Giáo viên, Quản trị viên,…);<br>-Kinh doanh, quản lý và bán hàng (Marketing, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Giải trí, nghệ thuật và thiết kế (Ca sỹ, Nhạc sỹ, Thiết kế thời trang,…);<br>-Dịch vụ sức khỏe và chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu, Y tá…);<br>-Cảnh sát, lính cứu hỏa.";
      break;
    case 100:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F4606e440-1a9c-4ebd-87a5-9c05b97a137b.image.png?v=1632305057067";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INTP: Nhà tư duy";
      document.querySelector("p").innerHTML =codeToPer(100)+
        "Bạn thích những học thuyết và tin rằng mọi thứ đều có thể được phân tích và cải thiện, vì vậy họ không quan tâm đến thế giới trần tục và những điều thực tế khác – họ nghĩ rằng nó ít thú vị hơn so với những ý tưởng hoặc hành trình theo đuổi kiến thức.<br><br>INTP là những cá nhân trầm tính, chu đáo, có niềm đam mê mãnh liệt với phân tích logic, hệ thống phức tạp và thiết kế. Họ thường tò mò và thích tìm hiểu về các hệ thống, lý thuyết phức tạp và cách mọi thứ hoạt động. INTP thông thường không phải kiểu người truyền thống, họ có những suy nghĩ riêng và không chạy theo đám đông. Do tính chất độc lập nên họ thích làm việc tách biệt hơn là trong một nhóm, tuy nhiên họ có thể thể hiện kỹ năng vượt trội trong việc giải thích các khái niệm, ý tưởng phức tạp cho người khác. Đối với những The Architect, cuộc sống là một hành trình khám phá những bí ẩn của vũ trụ.<br><br>INTP là người hoạt động độc lập tốt hoặc một nhóm nhỏ đồng nghiệp có năng lực, thông minh và logic. Họ thích một môi trường linh hoạt, cho phép họ xử lý các vấn đề một cách sáng tạo, không bị ràng buộc bởi các quy tắc truyền thống. Họ phù hợp với các nhóm ngành sau đây:<br>-Nhóm ngành công nghệ IT (Phát triển phần mềm, nhà phát triển web,…)<br>-Kỹ sư kỹ thuật;<br>-Khoa học (Nhà khoa học, nhà tâm lý học, giáo sư tiến sỹ,…);<br>-Kinh doanh và tài chính (chuyên gia tài chính, kỹ sư bán hàng, Nghiên cứu thị trường,..);<br>-Giải trí và nghệ thuật (Nhiếp ảnh gia, Biên tập viên, Nhạc sỹ,…).";
      break;
    case 101:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Faecb77c9-079f-4b9c-b1fc-0af0ea8032ca.image.png?v=1632305215539";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENTP: Người có tầm nhìn xa";
      document.querySelector("p").innerHTML =codeToPer(101)+
        "Nhóm tính cách này rất nhanh nhạy và độc đáo, điều này mang lại cho họ một lợi thế lớn trong các cuộc tranh luận, các lĩnh vực học thuật và chính trị. Tuy nhiên họ cũng có xu hướng làm rất tốt trong nhiều lĩnh vực khác đòi hỏi phải sẵn sàng thách thức các ý tưởng hiện có và tổ chức nhiều cuộc tranh luận.<br><br>ENTP được mô tả là những người thông minh, lanh lợi, hướng ngoại, sáng tạo, linh hoạt và tháo vát. Họ luôn xuất sắc trong việc đưa ra các giải pháp mới mẻ và độc đáo trước các vấn đề khó khăn, thường thì họ không lên kế hoặch trước cho một dự án. ENTP cũng có một sự hiểu biết sâu sắc về cách mà mọi thứ cũng như các mối quan hệ hoạt động và làm cách nào để cải thiện chúng. Họ không thích phán xét, cởi mở, khéo léo trong giao tiếp với đầu óc thông minh và khả năng ngôn ngữ linh hoạt. Với sự sáng tạo không ngừng và kỹ năng giao tiếp xã hội tuyệt vời, The Inventor hoàn toàn xứng đáng với vai trò của một người lãnh đạo trong một tổ chức hay tập thể.<br><br>ENTP là người quan tâm đến việc áp dụng các giải pháp sáng tạo cho các vấn đề thách thức trong công việc nhằm mang lại hiệu quả tối ưu nhất có thể. Một môi trường luôn tạo sự thách thức trí tuệ, đòi hỏi liên tục sự nâng cao kiến thức cùng với những người đồng nghiệp thông minh là ưa thích đối với ENTP. Họ phù hợp với các nhóm ngành sau đây:<br>-Kinh doanh và lãnh đạo (Quản lý kinh doanh, quản trị nhân sự, giám đốc điều hành,…);<br>-Nghệ thuật và thiết kế (Kiến trúc sư, Nhà sản xuất nghệ thuật,….);<br>-Khoa học và kỹ thuật (Nhà khoa học, kỹ sư, giáo sư tiến sỹ,…).";
      break;
    case 110:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fc724e988-5534-4e75-8e3f-c40e88978931.image.png?v=1632304955624";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISTP: Nhà cơ học";
      document.querySelector("p").innerHTML =codeToPer(110)+
        "Nhóm tính cách này sở hữu nhiều đặc điểm thú vị, họ thường suy nghĩ rất hợp lý và logic, nhưng cũng có thể khiến mọi người ngạc nhiên khi đột nhiên trở nên tự phát và nhiệt tình hơn.<br><br>ISTP rất giỏi về các vấn đề cơ khí, sửa chữa, khắc phục sự cố và có xu hướng nghiên cứu cách mọi thứ hoạt động. Họ độc lập, logic, linh hoạt và dễ thích nghi, vì vậy họ rất giỏi ứng phó và tìm kiếm các giải pháp thực tế cho các vấn đề trong tầm tay cũng như các tình huống khẩn cấp. ISTP thích hành động, chú ý đến các chi tiết và tương tác với thế giới xung quanh theo cách tự định hướng, tự phát. Họ làm việc khá độc lập, tách rời và có phần khép kín, họ muốn được làm việc một cách tự do trong một không gian cá nhân để có thể đi theo sự dẫn dắt của chính bản thân mình.<br><br>ISTP là dạng người thích làm việc trong môi trường chuyên môn kỹ thuật, đam mê làm chủ và điều khiển các công cụ, thiết bị cơ khí hoặc các công cụ kinh doanh, công nghệ hiện đại. Họ coi trọng tính hiệu quả và sự logic và muốn có sự linh hoạt trong công việc. ISTP phù hợp với một số nhóm ngành sau đây:<br>-Phân tích tài chính, chứng khoán, nhà kinh tế;<br>-Nhà sinh vật học, nhà địa chất;<br>-Dịch vụ sức khỏe và chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu, Y tá…);<br>-Cảnh sát, lính cứu hỏa, sỹ quan quân đội, hình sự;<br>-Kiến trúc sư, thợ mộc, thợ may, đầu bếp, thợ kim hoàn;<br>-Phi công, thuyền trưởng;<br>-IT (Phát triển phần mềm, quản trị cơ sở dữ liệu,….).";
      break;
    case 111:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F698e486f-2362-4606-92ab-b7f94e4ca977.image.png?v=1632304705625";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESTP: Người đề xướng";
      document.querySelector("p").innerHTML =codeToPer(111)+
        "Những người thuộc nhóm này rất có tính tập thể, tự phát, thẳng thắn, thích hành động và luôn đi thẳng vào cốt lõi của vấn đề, vì vậy họ không thích những cuộc tranh luận lý thuyết hay suy nghĩ về tương lai - họ chỉ tập trung vào thời điểm hiện tại và nỗ lực hết mình cho những thứ họ thích.<br><br>ESTP là những người tích cực, có xu hướng thực hành để giải quyết vấn đề hơn là chỉ thảo luận về chúng. Họ còn lão làng một cách nghệ thuật trong việc thúc đẩy, tạo sức ảnh hưởng để người khác cùng hành động. Cụ thể trong lời nói và thực dụng trong hành động, họ luôn mang đến một nguồn năng lượng dồi dào cho tập thể. ESTP thích tập trung vào các kết quả rõ ràng trước mắt hơn là suy nghĩ về những mục tiêu dài hạn. Họ có khả năng tháo nút thắt cho các vấn đề để mang người khác đồng hành với mình qua đó đem lại những điều tốt đẹp cho cuộc sống. Vì thế mà ESTP được gọi là những Promoter – Người đề xướng.<br><br>ESTP là người có động lực với các vấn đề mang tính logic, họ thường chọn nghề nghiệp liên quan tới kỹ năng cơ khí, thể thao hoặc đàm phán đối ngoại. Họ cũng muốn được linh hoạt xử lý các vấn đề mà không cần phải tuân theo một quy tắc có sẵn. ESTP phù hợp với các nhóm ngành sau đây:<br>-Khoa học và đời sống (Kỹ thuật viên nông lâm nghiệp, nhà sinh học môi trường,…);<br>-Giáo dục (Giáo viên dạy nghề, Quản trị viên,…);<br>-Kinh doanh, bán hàng và tài chính (Cố vấn tài chính, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Kỹ thuật bảo trì và sửa chữa (Cơ khí ô tô, nhân viên điện lạnh, điện tử,…);<br>-Sản xuất (Thợ mộc, thợ làm bánh, thanh tra giám sát chất lượng);<br>-Kiến trúc sư và kỹ sư kỹ thuật;<br>-Cảnh sát, vệ sỹ, lính cứu hỏa, sỹ quan quân đội, phi công;<br>-Xây dựng.";
      break;
    case 1000:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F9e483f09-7e2f-4d65-bbf2-9b6c696c9de4.image.png?v=1632305250908";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INFJ: Người che chở";
      document.querySelector("p").innerHTML =codeToPer(1000)+
        "Nhóm tính cách này thường có những quan điểm mạnh mẽ, đặc biệt là khi liên quan đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống, vì vậy nếu nhóm INFJ đấu tranh vì điều gì đó, lý do chính là họ tin vào lý tưởng của chính mình.<br><br>INFJ là những người rất tận tâm và có định hướng rõ ràng, họ luôn tìm kiếm các ý nghĩa trong các mối quan hệ, ý tưởng và các sự kiện để mong muốn hiểu được bản thân và những người xung quanh. Bằng các kỹ năng trực quan, tầm nhìn và sự tự tin để phát triển cải thiện cuộc sống của mọi người. Cũng khá tương tự với đối tác INTJ, INFJ luôn nhìn nhận các vấn đê gặp phải như là cơ hội để thách thức sự phát triển, sáng tạo. Tuy là một người hướng nội thật sự nhưng INFJ vẫn có đủ những kiến thức để thích ứng tốt trong các tình huống xã hội. Họ quan tâm đến sự hạnh phúc của người khác, có thể hợp tác và sáng tạo để giải quyết những sự khác biệt. Nhìn chung INFJ là người sống nội tâm phong phú, sống động nhưng cũng rất cởi mở và quan tâm mọi người. Đặc biệt, INFJ có những khả năng độc đáo để truyền cảm xúc và động lực cho người khác.<br><br>Đúng với tính cách của một INFJ, khi họ tìm kiếm một công việc, họ luôn chú tâm đến điều mà họ thích làm nhất, đó là việc cải thiện tình trạng con người. Họ thích lập kế hoặch, tổ chức có quy trình, sáng tạo trong môi trường độc lập để thực hiện các sứ mệnh nhân đạo. INFJ phù hợp với các nhóm ngành sau đây:<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên hôn nhân gia đình,…);<br>-Giáo dục (Giáo viên, Quản trị viên,…);<br>-Dịch vụ chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu,…);<br>-Khoa học (Nhà tâm lý học, nhà xã hội học,…);<br>-Pháp luật (Luật sư,…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ vật lý trị liệu,…);<br>Giải trí, nghệ thuật và thiết kế;<br>-Nhân sự.";
      break;
    case 1001:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F414e3a1c-eafb-42b1-82cc-64baf30e548e.image.png?v=1632305318770";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENFJ: Người chỉ dạy";
      document.querySelector("p").innerHTML =codeToPer(1001)+
        "Những người thuộc nhóm tính cách này có sức ảnh hưởng lớn bởi vì họ thường rất lôi cuốn và có tài hùng biện. Họ chăm sóc mọi người một cách chân thành, dễ dàng truyền đạt ý tưởng và ý kiến của họ cho mọi người xung quanh.<br><br>ENFJ là những nhà tổ chức lý tưởng, định hướng và thực hiện những tầm nhìn tốt nhất của họ cho tập thể, nhân loại. Họ vượt trội nhờ khả năng chọn ra các giá trị và khả năng của người khác, những giá trị chia sẻ từ tập thể và áp dụng nó cho một nhóm xã hội tập thể để tạo nên sự hài hòa.ENFJ là những người giàu năng lượng, có định hướng và rất nhiều khả năng sâu bên trong. Họ có khả năng tự điều chỉnh theo nhu cầu của nhiều người khác trong tập thể, bằng sự dự đoán và nhận thức, cảm giác sâu sắc và sự đồng cảm về những vấn đề của người khác. Và bằng trực giác cũng như xu hướng lạc quan nên luôn suy nghĩ về tương lai để cải thiện chúng. ENFJ luôn muốn kết nối chặt chẽ với mọi người, hỗ trợ và hợp tác với họ trong công việc. ENFJ cũng rất tham vọng, nhưng tham vọng của họ không phải cá nhân mà luôn hướng tới cộng đồng để giúp mọi người cùng tốt hơn. Chính vì vậy ENFJ còn được gọi là The Givers – Người cho đi.<br><br>Đúng với tính cách của một ENFJ, khi họ tìm kiếm một công việc, họ luôn chú tâm đến điều mà họ thích làm nhất, đó là việc giúp đỡ người khác. ENFJ phù hợp với các nhóm ngành sau đây:<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên hôn nhân gia đình,…);<br>-Phương tiện – truyền thông (Biên tập viên, Quan hệ công chúng, Tác giả,…);<br>-Giáo dục (Giáo viên, Quản trị viên,…);<br>-Kinh doanh, quản lý và bán hàng (Marketing, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Giải trí, nghệ thuật và thiết kế;<br>-Dịch vụ chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu,…);<br>-Khoa học (Nhà tâm lý học, nhà xã hội học,…);<br>-Pháp luật (Luật sư,…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ vật lý trị liệu,…);<br>-Văn phòng và hành chính.";
      break;
    case 1010:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F0d321081-ac82-4ddf-9820-bc3f281d7c07.image.png?v=1632304339199";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISFJ: Người nuôi dưỡng";
      document.querySelector("p").innerHTML =codeToPer(1010)+
        "Đây là nhóm tính cách vị tha nhất, do đó họ thường tìm kiếm con đường sự nghiệp trong lĩnh vực học thuật, y tế, công tác xã hội hoặc tư vấn; họ cũng tỏa sáng ở các vị trí hành chính và văn phòng, hoặc thậm chí trong các lĩnh vực hơi bất ngờ như thiết kế nội thất.<br><br>ISFJ thật sự đề cao đến việc duy trì trật tự và sự hài hòa trong mọi khía cạnh của cuộc sống, họ là những người kiên định, tỉ mỉ và có trách nhiệm trong công việc. Mặc dù là người sống hướng nội nhưng họ rất giỏi trong việc quan sát và định hướng con người, họ không chỉ nhớ rõ các chi tiết của những người xung quanh mà con nhạy bén trong việc theo dõi cảm xúc của người khác. Mọi người thường mô tả ISFJ là dạng người chu đáo, có lòng thương cảm quan tâm người khác và đáng tin cậy, luôn quan tâm chăm sóc cho mọi người để giữ họ luôn an toàn bằng những hành động thực tế. Đôi khi bản chất hướng nội khiến cho người khác hiểu lầm về ISFJ nhưng nếu đã là bạn bè và gia đình thì sẽ hoàn toàn ngược lại.<br><br>ISFJ chú tâm đến điều mà họ thích làm nhất, đó là việc giúp đỡ người khác theo những cách thực tế, có tổ chức, có sự theo dõi quan sát và xem kết quả. Môi trường làm việc thích hợp của họ đòi hỏi các quy trình thiết lập rõ ràng và chi tiết. ISFJ phù hợp với các nhóm ngành sau đây:<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên, nhân viên xã hội…);<br>-Khoa học và đời sống (Kỹ thuật viên nông lâm nghiệp, nhà sinh học môi trường,…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ, Y tá, Điều dưỡng…);<br>-Giáo dục (Giáo viên, Quản trị viên, Thủ thư…);<br>-Văn phòng và hành chính;<br>-Dịch vụ chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu, Thợ làm móng…);<br>-Kinh doanh, bán hàng và tài chính (Cố vấn tài chính, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Kỹ thuật bảo trì và sửa chữa (Cơ khí ô tô, nhân viên điện lạnh, điện tử,…);<br>-Sản xuất (Thợ mộc, thợ làm bánh, thanh tra giám sát chất lượng);<br>-Kiến trúc sư và kỹ sư kỹ thuật;<br>-Vận chuyển;<br>-Cảnh sát, vệ sỹ, lính cứu hỏa;<br>-Pháp luật (Tòa án, luật sư…).";
      break;
    case 1011:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F3855f80b-e455-46ed-be22-f9264f6238b1.image.png?v=1632304060128";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESFJ: Người quan tâm";
      document.querySelector("p").innerHTML =codeToPer(1011)+
        "Nhóm tính cách này là những người thực tế, vị tha, giỏi làm việc nhóm, truyền thống và làm hết sức mình để hỗ trợ và bảo vệ lẽ phải và quyền lợi của họ, vì vậy họ có xu hướng rất tận tụy ngay cả khi họ đóng vai trò là người chủ trì của một bữa tiệc hoặc một nhân viên xã hội.<br><br>ESFJ có xu hướng tập trung vào thế giới bên ngoài nhiều và đánh giá những kinh nghiệm của họ một cách chủ quan. Phần lớn đánh giá của họ dựa trên hệ thống niềm tin. ESFJ rất thích sự cụ thể, tin tưởng vào những thông tin chi tiết, thực tế được thu thập dựa trên các giác quan sinh lý. ESFJ ấm áp và thích quan tâm đến hạnh phúc của người khác, hài lòng khi chứng người khác được hạnh phúc Họ coi trọng giá trị truyền thống và sự đảm bảo nó mang lại. Cũng gần giống ENFJ, giá trị của các ESFJ tập trung nhiều hơn vào các tổ chức xã hội. Họ vượt trội trong môi trường tiêu chuẩn đạo đức cao vì có xu hướng thể hiện được sự rộng lượng và sự tốt bụng tử tế. Họ cũng đánh giá cao các quy tắc luật lệ và mong muốn người khác cũng vậy. ESFJ có thể ít quan tâm đến các khái niệm đằng sau các quy tắc, né tránh sự trừu tượng và nhân hóa.<br><br>ESFJ chú tâm đến điều mà họ thích làm nhất, đó là việc giúp đỡ người khác theo những cách thực tế, có thể theo dõi quan sát và xem kết quả. Môi trường làm việc thích hợp với họ khi các giá trị và kỹ năng giao tiếp của họ được chuẩn hóa để tổ chức con người và các quy trình. ESFJ phù hợp với các nhóm ngành sau đây:<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên,…);<br>-Phương tiện – truyền thông (Biên tập viên, Quan hệ công chúng, Tác giả,…);<br>-Giáo dục (Giáo viên, Quản trị viên,…);<br>-Kinh doanh, quản lý và bán hàng (Marketing, Quản trị nhân sự, Quản lý kinh doanh,…);<br>-Giải trí, nghệ thuật và thiết kế;<br>-Dịch vụ chăm sóc cá nhân (Huấn luyện viên cá nhân, bảo mẫu,…);<br>-Khoa học (Nhà tâm lý học, nhà xã hội học,…);<br>-Pháp luật (Cảnh sát, tòa án…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ, Y tá…);<br>-Văn phòng và hành chính.";
      break;
    case 1100:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fab54ddd0-ff22-4369-b139-e32eb878d2e9.image.png?v=1632304024089";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là INTJ: Nhà khoa học";
      document.querySelector("p").innerHTML =codeToPer(1100)+
        "Nhóm này thường được xem là rất thông minh và khó hiểu một cách bí ẩn, vì vậy họ thường tỏa ra sự tự tin, dựa trên kho kiến thức rộng lớn của họ bao gồm nhiều lĩnh vực và khía cạnh khác nhau.<br><br>INTJ có một niềm đam mê mạnh mẽ với việc phân tích, giải quyết vấn đề, cải thiện các hệ thống và quy trình bằng các ý tưởng sáng tạo của họ. Họ luôn khát khao nâng cao kiến thức và cố gắng không ngừng nghỉ, luôn cầu toàn với tiêu chuẩn hiệu suất cực cao dành cho bản thân và cả những người đồng nghiệp. Sự độc lập trong tính cách và tư tưởng đôi khi khiến INTJ bị xa cách nhưng họ luôn là những đối tác trung thành. INTJ nhận thức về các hệ thống và lên chiến lược cho nó, và thông thường thì mọi thứ sẽ được định hướng rõ ràng như trên một bàn cờ. Với khả năng tư duy logic, sự tự tin và tài năng, The Mastermind hoàn toàn có thể đảm nhận vai trò lãnh đạo, cố vấn chiến lược tài ba.<br><br>INTJ vượt trội trong việc tạo ra và thực hiện các giải pháp sáng tạo cho các vấn đề cần phải phân tích. Họ thường thích làm việc độc lập hoặc một nhóm nhỏ, thực hiện các bước chiến lược và đo lường để tạo rat hay đổi. Môi trường làm việc lý tưởng của INTJ cần điều kiện có sư logic, hiệu quả, cấu trúc và phân tích cùng các đồng nghiệp thông minh, có năng lực. Họ phù hợp với các nhóm ngành sau đây:<br>-Kinh doanh và tài chính (Kế toán, Chuyên gia phân tích tài chính , giám đốc điều hành,…);<br>-Toán học ( Nhà toán học, Nhà thống kê, phân tích nghiên cứu hoạt động,…);<br>-Kiến trúc và kỹ thuật (Kỹ sư, Kiến trúc sư, Kiểm soát viên, Nhà thầu xây dựng…);<br>-Khoa học và đời sống (Nhà kinh tế, Nhà tâm lý, Nhà khoa học,…);<br>-Nghệ thuật và truyền thông (Quan hệ công chúng, Giám đốc sản xuất nghệ thuật,…);<br>-Chăm sóc sức khỏe (Bác sỹ, quản lý dịch vụ y tế,…);<br>-Giáo dục và đào tạo (Giảng viên, Giáo sư tiến sỹ,…);<br>-Giải trí và thể thao (Huấn luyện viên, Nhà sản xuất,..);<br>-Nhóm ngành IT;<br>-Pháp luật (Thẩm phán, Luật sư, Cảnh sát điều tra,…).";
      break;
    case 1101:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Ff0e8034a-3e33-47db-ad1c-e8680f20b3a2.image.png?v=1632305436434";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ENTJ: Nhà điều hành";
      document.querySelector("p").innerHTML =codeToPer(1101)+
        "Nhóm tính cách này thường rất lôi cuốn, lý trí và nhạy bén vì họ rất giỏi trong việc lãnh đạo và truyền cảm hứng cho người khác, vì vậy nhóm ENTJ có khả năng lãnh đạo tốt nhất trong tất cả các loại tính cách và họ tin rằng nếu có quyết tâm, mọi thứ đều có thể.<br><br>ENTJ có tố chức để trở thành một nhà lãnh đạo, thiết lập chiến lược và tạo ra động lực cho tổ chức đạt được sự tiến bộ. Họ nổi bật trong việc phân tích, lý luận logic và đầu óc tư duy xuất sắc. Ngoài ra, họ còn rất quyết đoán, bộc trực và luôn thích chịu trách nhiệm khi phát sinh vấn đề lỗi. ENTJ tự tin về khả năng của mình, áp đảo người khác bởi đầu óc lập luận sắc bén và ngôn từ sắc sảo. Tuy nhiên họ cũng rất khách quan và không bị ảnh hưởng bởi các vấn đề xung đột hoặc sự chỉ trích xung quanh. Đôi lúc, một vài người có thể cho rằng ENTJ kiêu ngạo, vô cảm nhưng đó là bản năng của họ, suy cho cùng thì họ vẫn muốn tập trung vào kết quả của công việc với năng suất cao nhất.<br><br>ENTJ mong muốn ngồi vào các vị trí lãnh đạo nơi mà cho họ đủ quyền lực để thực thi các chiến lược của mình. Một môi trường được cấu trúc bởi những người có năng lượng, tư duy và thông minh là lý tưởng cho ENTJ. Họ phù hợp với các nhóm ngành sau đây:Kinh doanh và tài chính (Quản lý kinh doanh, chuyên gia tài chính , giám đốc điều hành,…);<br>-Lãnh đạo và quản lý (Quản lý nhân sự, Chủ tịch hội đồng,…);<br>-Kiến trúc và kỹ thuật (Kỹ sư, Kiến trúc sư, Kiểm soát viên, Nhà thầu xây dựng…);<br>-Khoa học và đời sống (Nhà kinh tế, Nhà tâm lý, Nhà khoa học,…);<br>-Nghệ thuật và truyền thông (Quan hệ công chúng, Giám đốc sản xuất nghệ thuật,…);<br>-Chăm sóc sức khỏe (Bác sỹ, quản lý dịch vụ y tế,…);<br>-Giáo dục và đào tạo (Giảng viên, Giáo sư tiến sỹ,…);<br>-Giải trí và thể thao (Huấn luyện viên, Nhà sản xuất,..);<br>-Nhóm ngàng IT;<br>-Pháp luật (Thanh tra, Luật sư, Cảnh sát điều tra,…).";
      break;
    case 1110:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2Fa2a90f65-0761-4234-8d1f-87745d06b6f9.image.png?v=1632304557705";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ISTJ: Người kiểm duyệt";
      document.querySelector("p").innerHTML =codeToPer(1110)+
        "Đây là nhóm tính cách phổ biến nhất, họ hướng đến chân lý, tôn trọng sự thật và có xu hướng tiếp thu nhiều thông tin và ghi nhớ chúng trong một thời gian dài.<br><br>ISTJ là mẫu người của sự logic, có tổ chức, hợp lý và nghiêm túc, thích giữ cho cuộc sống và môi trường làm việc của họ được điều tiết tốt. Họ sống khá dè dặt và nghiêm nghị, thành công đến với họ nhờ sự thấu đáo và đáng tin cậy. ISTJ sống rất thực tế và luôn có trách nhiệm, họ như một con ong thợ chăm chỉ và luôn cố gắng phấn đấu cho mục tiêu của mình. Là dạng người sống hướng nội nên cũng dễ hiểu khi các ISTJ gặp khó khăn trong việc đáp ứng nhu cầu chia sẻ cảm xúc với mọi người xung quanh nhưng không phải là dạng cô lập hoặc tách biệt hẳn với người khác. Nhìn chung, ISTJ là dạng người truyền thống, quy tắc, luôn quan tâm đến việc duy trì trật tự xã hội và các tiêu chuẩn.<br><br>ISTJ là những người tỉ mỉ, chi tiết và đáng tin tưởng trong công việc. Một công việc lý tưởng cho ISTJ phải đảm bảo các yếu tố logic, quy tắc rõ ràng . Họ có khả năng làm việc độc lập tốt nhưng cũng đánh giá cao giá trị của việc làm việc tập thể. ISTJ phù hợp với một số nhóm ngành như sau:<br>-Kinh doanh, bán hàng và tài chính (Cố vấn tài chính, Kế toán, Quản lý kinh doanh,…);<br>-Văn phòng và hành chính;<br>-Quản lý;<br>-Kiến trúc sư, kỹ thuật viên và kỹ sư kỹ thuật;<br>-Khoa học và đời sống (Kỹ thuật viên nông lâm nghiệp, nhà sinh học môi trường,…);<br>-Nông lâm nghiệp;<br>-Kỹ thuật bảo trì và sửa chữa (Cơ khí ô tô, nhân viên điện lạnh, điện tử,…);<br>-Vận chuyển;<br>-Sản xuất;<br>-Giải trí, thể thao;<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên, nhân viên xã hội…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ, Y tá, Điều dưỡng…);<br>-Giáo dục (Giáo viên, Quản trị viên, Thủ thư…);<br>-Cảnh sát, vệ sỹ, lính cứu hỏa, quân đội;<br>-Pháp luật (Tòa án, luật sư…).";
      break;
    case 1111:
      document.querySelector("#imgChange").src =
        "https://cdn.glitch.com/69eb61fe-1076-43a5-80fc-df6b2454d550%2F18056633-8c0a-474a-9341-ae9ca32d580c.image.png?v=1632304264503";
      document.querySelector("h2").innerHTML =
        "Nhóm tích cách của bạn là ESTJ: Người giám sát";
      document.querySelector("p").innerHTML = codeToPer(1111)+
        "Họ là những người thiên về nguyên tắc, truyền thống, sự ổn định và họ cảm thấy cần phải gắn kết với điều gì đó – đó có thể là một gia đình, một cộng đồng hoặc một nhóm xã hội khác; vì vậy họ thích sự tổ chức của người khác và đảm bảo rằng họ sẽ tuân thủ các quy tắc truyền thống mà được ban hành bởi những người có thẩm quyền.<br><br>ESTJ là những người lễ nghi, thực tế, chăm chỉ và trách nhiệm cao với một bộ óc nhạy bén trong việc kinh doanh, tổ chức quản lý cũng như con mắt nhìn người. Họ làm việc có trật tự, quy tắc và một hệ thống phương pháp rõ ràng. ESTJ luôn muốn mang đến một cấu trúc được tổ chức hoàn hảo và các hoạt động được vận hành một cách trơn tru cho môi trường xung quanh. Họ đặc biệt giỏi với vai trò của một người quản lý, giám sát với. Với khả năng giao tiếp đối ngoại tốt, họ không khó khăn để truyền đạt ý kiến, hướng dẫn, giúp đợ và thiết lập được một quy trình làm việc có hiệu suất tốt nhất cho mọi người cũng như hệ thống xã hội.<br><br>ESTJ rất giỏi trong việc tổ chức con người, dự án và các quy trình hoạt động. Họ muốn mọi việc luôn trong tầm kiểm soát và vì thế họ thường phù hợp với các vị trí quản lý để có thể đưa ra những quyết định về chính sách, thủ tục. ESTJ phù hợp với các nhóm ngành sau đây:<br>-Kinh doanh, bán hàng và tài chính (Cố vấn tài chính, Kế toán, Quản lý kinh doanh,…);<br>-Văn phòng và hành chính;<br>-Quản lý;<br>-Kiến trúc sư, kỹ thuật viên và kỹ sư kỹ thuật;<br>-Khoa học và đời sống (Kỹ thuật viên nông lâm nghiệp, nhà sinh học môi trường,…);<br>-Nông lâm nghiệp;<br>-Kỹ thuật bảo trì và sửa chữa (Cơ khí ô tô, nhân viên điện lạnh, điện tử,…);<br>-Vận chuyển;<br>-Sản xuất;<br>-Giải trí, thể thao;<br>-Dịch vụ cộng đồng và xã hội (Giáo dục sức khỏe, Tư vấn viên, nhân viên xã hội…);<br>-Chăm sóc sức khỏe (Chuyên gia dinh dưỡng, Bác sỹ, Y tá, Điều dưỡng…);<br>-Giáo dục (Giáo viên, Quản trị viên, Thủ thư…);<br>-Cảnh sát, vệ sỹ, lính cứu hỏa, quân đội;<br>-Pháp luật (Tòa án, luật sư…).";
      break;
  }

  document.querySelector("#answer1").innerHTML = "<a></a>";
  document.querySelector("#answer2").innerHTML = "<a></a>";
  document.getElementById("start-button").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.querySelector("#start-button").innerHTML = "Làm lại";
  document.querySelector("i").innerHTML =
    "Mẹo: Bạn có thể làm lại lần nữa để có tham khảo các nhóm tính cách khác!";
}

