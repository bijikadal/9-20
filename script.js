const vocabList = [
        { korean: "한훅인의 식사", indo: "makanan korea" },
        { korean: "구성된 식사", indo: "makanan yg terdiri dari" },
        { korean: "주식으로 쌀", indo: "nasi adalah makanan pokok" },
        { korean: "다양하다", indo: "berbagai macam" },
        { korean: "곁들다", indo: "melengkapi" },
        { korean: "나누다", indo: "membagi" },
        { korean: "소증하다", indo: "menghargai/berharga" },
        { korean: "최근", indo: "baru baru ini" },
        { korean: "증가하다", indo: "meningkat" },
        { korean: "결제", indo: "pembayaran" },
        { korean: "환료되면", indo: "jika selesai" },
        { korean: "출력되다", indo: "dicetak" },
        { korean: "자세하다", indo: "dengan rinci" },
        { korean: "무인 판매점", indo: "toko tanpa pegawai" },
        { korean: "자동화", indo: "otomatis" },
        { korean: "경제하다", indo: "melakukan pembayaran" },
        { korean: "운영", indo: "dioperasikan" },
        { korean: "고급화", indo: "kecanggihan" },
        { korean: "생수", indo: "air mineral" },
        { korean: "문구점", indo: "alat tulis" },
        { korean: "특정", indo: "tertentu" },
        { korean: "취급하다", indo: "menangani/menjual" },
        { korean: "이 외도", indo: "selain itu juga" },
        { korean: "이러한", indo: "seperti ini" },
        { korean: "또한", indo: "juga" },
        { korean: "장벽", indo: "penghalang" },
        { korean: "간편하게", indo: "dengan mudah/praktis" },
        { korean: "쓰레기 분리배출", indo: "pemilahan sampah" },
        { korean: "헌옷", indo: "pakaian bekas" },
        { korean: "대형", indo: "ukuran besar" },
        { korean: "종량제", indo: "sistem perhitungan" },
        { korean: "최대한도", indo: "batas maksimum" },
        { korean: "최대", indo: "tertinggi/terbanyak" },
        { korean: "제고하다", indo: "meningkat" },
        { korean: "닭뼈나 달결 껍", indo: "tulang ayam atau kulit telur" },
        { korean: "수거", indo: "pengumpulan" },
        { korean: "빈병", indo: "botol kosong" },
        { korean: "캔", indo: "kaleng" },
        { korean: "담요", indo: "selimut" },
        { korean: "한국의 대중교통", indo: "transportasi umum korea" },
        { korean: "뿐만 아니라", indo: "tidak hanya" },
        { korean: "이동하다", indo: "pergerakan" },
        { korean: "연결하는 노선", indo: "menghubungkan rute" },
        { korean: "주요", indo: "utama" },
        { korean: "우행", indo: "pengoperasian" },
        { korean: "거리", indo: "jarak" },
        { korean: "최남단 도시", indo: "kota paling selatan" },
        { korean: "이동할수 있습니다", indo: "bisa bergerak" },
        { korean: "교통수단", indo: "sarana transportasi" },
        { korean: "통해", indo: "melalui" },
        { korean: "한국인의 종교", indo: "agama orang korea" },
        { korean: "다종교", indo: "semua agama" },
        { korean: "개신교", indo: "protestan" },
        { korean: "천주교", indo: "katolik" },
        { korean: "신자", indo: "umat" },
        { korean: "비율", indo: "rasio" },
        { korean: "신앙생활을 하다", indo: "kehidupan beragama" },
        { korean: "도로명 주소", indo: "alamat nama jalan" },
        { korean: "주소를 표기하다", indo: "mencatat jalan" },
        { korean: "위의 예를 보면 알수", indo: "bisa tahu jika melihat contoh di atas" },
        { korean: "구성되다", indo: "terdiri dari" },
        { korean: "짝수로 표시하다", indo: "menunjukkan angka genap" },
        { korean: "한국의 전통 의사", indo: "pakaian tradisional korea" },
        { korean: "의상", indo: "pakaian" },
        { korean: "화려하며", indo: "mewah / mencolok" },
        { korean: "우아하다", indo: "anggun" },
        { korean: "조끼로", indo: "rompi" },
        { korean: "자연", indo: "natural" },
        { korean: "풍성하다", indo: "tebal" },
        { korean: "어울리다", indo: "berbaur/cocok" },
        { korean: "장점", indo: "kelebihan" },
        { korean: "다소", indo: "agak/sedikit/kecil" },
        { korean: "점이", indo: "hal" },
        { korean: "개량하다", indo: "penyempurnaan" },
        { korean: "단순하고 실용적", indo: "sederhana dan praktis" },
        { korean: "푸른색", indo: "warna terang" },
        { korean: "노력", indo: "usaha" },
        { korean: "한국의 주거 형태", indo: "tipe perumahan korea" },
        { korean: "보안", indo: "keamanan" },
        { korean: "갖추어", indo: "dilengkapi" },
        { korean: "구비되다", indo: "dilengkapi" },
        { korean: "필수적", indo: "wajib" },
        { korean: "부족하다", indo: "kekurangan" },
        { korean: "한국의 문화유산", indo: "warisan budaya korea" },
        { korean: "역사", indo: "sejarah" },
        { korean: "풍부하다", indo: "kaya/banyak" },
        { korean: "시대", indo: "generasi" },
        { korean: "보존되다", indo: "dilestarikan" },
        { korean: "건축 양식", indo: "bentuk bangunan" },
        { korean: "비원", indo: "taman indah" },
        { korean: "어우러지다", indo: "menyatu" },
        { korean: "더욱", indo: "lebih" },
        { korean: "보전되다", indo: "terjaga/terpelihara" },
        { korean: "상징하다", indo: "melambangkan" },
        { korean: "돌", indo: "batu" },
        { korean: "불상이", indo: "patung Budha" },
        { korean: "뛰어난 기술과 예술적 감각을 엿볼 수", indo: "menampilkan teknologi canggih dan kepekaan artistik masyarakat Silla" },
        { korean: "빼놓다", indo: "pengecualian/mencabut/melewatkan" },
        { korean: "유교", indo: "Konghucu" },
        { korean: "고스란히", indo: "seperti aslinya" },
        { korean: "가옥", indo: "rumah/tempat tinggal" },
        { korean: "개드로", indo: "seperti itu" },
        { korean: "정원", indo: "taman" },
        { korean: "감각", indo: "rasa" },
        { korean: "미적", indo: "estetika" },
        { korean: "보여주다", indo: "menunjukkan" },
        { korean: "한국인의 여가 생활", indo: "kehidupan waktu senggang orang korea" },
        { korean: "탄력적", indo: "fleksibel" },
        { korean: "유연근무제", indo: "kerja fleksibel" },
        { korean: "확대되다", indo: "diperluas" },
        { korean: "실시하다", indo: "melaksanakan" },
        { korean: "만족하다", indo: "puas" },
        { korean: "잡담", indo: "obrolan ringan" },
        { korean: "균횽", indo: "keseimbangan" },
        { korean: "중시하다", indo: "mengutamakan" },
        { korean: "사회적", indo: "sosial" },
        { korean: "확산하다", indo: "menyebar" },
        { korean: "질", indo: "kualitas/mutu" },
        { korean: "관심", indo: "minat/bakat" },
        { korean: "관하다", indo: "mengenai" },
        { korean: "전문", indo: "profesional/seluruh isi" },
        { korean: "서적", indo: "buku/bacaan" },
        { korean: "출간/출판", indo: "diterbitkan" },
        { korean: "학과", indo: "jurusan" },
        { korean: "개설되다", indo: "dibuka" },
        { korean: "여럿", indo: "banyak orang" },
        { korean: "증솔", indo: "diperluas/bertambah" },
        { korean: "특별한 날 먹는 음식", indo: "makanan yang dimakan pada hari yang khusus" },
        { korean: "원래", indo: "awal mula" },
        { korean: "은혜를기억하다", indo: "mengingat jasa" },
        { korean: "찹쌀", indo: "beras ketan" },
        { korean: "기운이 없을 때", indo: "ketika tidak ada energi" },
        { korean: "흐리다", indo: "mengucur" },
        { korean: "둘러앉아", indo: "duduk bersama" },
        { korean: "계란 지단이나 김", indo: "potongan telur atau rumput laut" },
        { korean: "배달 앱", indo: "aplikasi pengantar" },
        { korean: "등장으로", indo: "dengan kemunculan" },
        { korean: "더욱", indo: "semakin" },
        { korean: "정보를 손쉽게", indo: "informasi dengan mudah" },
        { korean: "평점과", indo: "rating dan..." },
        { korean: "참고하다", indo: "merujuk" },
        { korean: "게다가", indo: "selain itu" },
        { korean: "지원하다", indo: "mendukung" },
        { korean: "현재", indo: "saat ini" },
        { korean: "혜택", indo: "manfaat" },
        { korean: "실시간", indo: "real-time / waktu nyata" },
        { korean: "배달 중인지", indo: "sedang diantar" }
   ];
  
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  
  function createQuiz() {
    const quizForm = document.getElementById("quizForm");
    const shuffled = shuffle([...vocabList]);
  
    shuffled.forEach((vocab, index) => {
      const askKorean = Math.random() < 0.5;
      let questionText, correctAnswer, choices;
  
      if (askKorean) {
        questionText = `Apa arti dari <strong>${vocab.korean}</strong>?`;
        correctAnswer = vocab.indo;
        choices = [vocab.indo, ...shuffle(vocabList.filter(v => v.indo !== vocab.indo)).slice(0, 3).map(v => v.indo)];
      } else {
        questionText = `Apa bahasa Korea dari <strong>${vocab.indo}</strong>?`;
        correctAnswer = vocab.korean;
        choices = [vocab.korean, ...shuffle(vocabList.filter(v => v.korean !== vocab.korean)).slice(0, 3).map(v => v.korean)];
      }
  
      choices = shuffle(choices);
  
      const qDiv = document.createElement("div");
      qDiv.className = "question";
      qDiv.setAttribute("data-answer", correctAnswer);
      qDiv.innerHTML = `<p>${index + 1}. ${questionText}</p>` +
        choices.map(choice => `
          <label>
            <input type="radio" name="q${index}" value="${choice}"> ${choice}
          </label><br>`).join("");
  
      quizForm.appendChild(qDiv);
    });
  }
  
  function checkAnswers() {
    let score = 0;
    let wrongAnswers = [];
  
    const allQuestions = document.querySelectorAll(".question");
  
    allQuestions.forEach((qDiv, index) => {
      const correct = qDiv.getAttribute("data-answer");
      const questionText = qDiv.querySelector("p").innerHTML;
      const selected = qDiv.querySelector("input[type=radio]:checked");
      const selectedVal = selected ? selected.value : "Tidak dijawab";
  
      if (selected && selected.value === correct) {
        score++;
      } else {
        wrongAnswers.push({
          question: questionText,
          chosen: selectedVal,
          correct: correct
        });
      }
    });
  
    localStorage.setItem("skorKuis", score);
    localStorage.setItem("totalSoal", allQuestions.length);
    localStorage.setItem("wrongAnswers", JSON.stringify(wrongAnswers));
  
    // Tambahkan animasi keluar sebelum redirect
    document.body.classList.add("fade-out");
  
    setTimeout(() => {
      window.location.href = "hasil.html";
    }, 500); // waktu sesuai transisi CSS
    }
    
  function disableQuiz() {
    const inputs = document.querySelectorAll("input[type=radio]");
    inputs.forEach(input => input.disabled = true);
  }
  
  let timeLeft = 1000;
  const timerElement = document.getElementById("timer");
  
  function startCountdown() {
    const countdown = setInterval(() => {
      timerElement.textContent = `Waktu: ${timeLeft} detik`;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(countdown);
        timerElement.textContent = "Waktu habis!";
        disableQuiz();
        checkAnswers();
      }
    }, 1000);
  }
  
  createQuiz();
  startCountdown();
  