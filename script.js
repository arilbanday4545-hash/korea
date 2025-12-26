// EFEK TEKS MENGETIK
const text = "Portal Ujian Bahasa Korea Akademik";
let idx = 0;
function typeEffect() {
    if (idx < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(idx);
        idx++;
        setTimeout(typeEffect, 60);
    }
}
window.onload = typeEffect;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSfx(f, t) {
    const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.type = t; o.frequency.value = f; g.gain.setValueAtTime(0.1, audioCtx.currentTime);
    o.start(); g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5); o.stop(audioCtx.currentTime + 0.5);
}

// 30 SOAL LENGKAP
const quizData = [
    { q: "가: 이름이 무엇입니까?\n나: 저는 김민수_____.", opts: ["입니다", "입니까", "있어요", "하고"], ans: "입니다" },
    { q: "저는 아침마다 우유_____ 마십니다.", opts: ["를", "가", "에", "로"], ans: "를" },
    { q: "가: 이 가방은 _____예요?\n나: 삼만 원이에요.", opts: ["얼마", "누구", "어디", "무엇"], ans: "얼마" },
    { q: "가: 오늘 날씨가 어때요?\n나: 비가 _____.", opts: ["와요", "가요", "해요", "있어요"], ans: "와요" },
    { q: "커피 한 잔 _____.", opts: ["주세요", "가세요", "오세요", "하세요"], ans: "주세요" },
    { q: "어제는 _____가 많이 왔습니다.", opts: ["비", "눈", "바람", "구름"], ans: "비" },
    { q: "가: 한국어가 재미있어요?\n나: 네, 아주 _____.", opts: ["재미있어요", "어려워요", "나빠요", "싫어요"], ans: "재미있어요" },
    { q: "가: 어디에 가요?\n나: _____에 공부하러 가요.", opts: ["학교", "식당", "병원", "공원"], ans: "학교" },
    { q: "저는 학생들을 가르칩니다. 제 직업은 _____입니다.", opts: ["선생님", "의사", "경찰", "회사원"], ans: "선생님" },
    { q: "가: 지금 몇 시예요?\n나: 오전 10_____예요.", opts: ["시", "분", "일", "월"], ans: "시" },
    { q: "시장에서 사과 다섯 _____ 샀어요.", opts: ["개", "명", "병", "권"], ans: "개" },
    { q: "가: 식당에 사람이 많아요?\n나: 아니요, _____.", opts: ["적어요", "커요", "비싸요", "멀어요"], ans: "적어요" },
    { q: "주말에 백화점에서 _____을 했어요.", opts: ["쇼핑", "공부", "수영", "등산"], ans: "쇼핑" },
    { q: "머리가 아파서 _____에 갔습니다.", opts: ["병원", "은행", "서점", "꽃집"], ans: "병원" },
    { q: "가: 비빔밥이 _____?\n나: 네, 조금 매워요.", opts: ["매워요", "달아요", "짜요", "싱거워요"], ans: "매워요" },
    { q: "한국은 겨울에 눈이 오고 아주 _____.", opts: ["춥습니다", "덥습니다", "시원합니다", "따뜻합니다"], ans: "춥습니다" },
    { q: "내일은 친구와 영화를 _____ 거예요.", opts: ["볼", "먹을", "갈", "할"], ans: "볼" },
    { q: "가: 화장실이 어디에 있어요?\n나: 교실 _____에 있어요.", opts: ["옆", "위", "밑", "안"], ans: "옆" },
    { q: "매일 아침 공원에서 _____를 합니다.", opts: ["운동", "잠", "노래", "영화"], ans: "운동" },
    { q: "가: 인도네시아에서 왔습니까?\n나: 네, _____ 사람입니다.", opts: ["인도네시아", "한국", "미국", "일본"], ans: "인도네시아" },
    { q: "저는 고기를 안 먹어요. 그래서 _____을 좋아해요.", opts: ["채소", "불고기", "치킨", "삼겹살"], ans: "채소" },
    { q: "배가 고파서 _____에 갔습니다.", opts: ["식당", "약국", "우체국", "박물관"], ans: "식당" },
    { q: "생일에 친구에게 선물을 _____.", opts: ["받았습니다", "갔습니다", "왔습니다", "잤습니다"], ans: "받았습니다" },
    { q: "어제 책방에서 한국어 _____을 샀어요.", opts: ["책", "옷", "구두", "안경"], ans: "책" },
    { q: "가: 취미가 무엇입니까?\n나: 제 취미는 _____입니다.", opts: ["음악 감상", "이름", "나이", "고향"], ans: "음악 감상" },
    { q: "버스를 타려면 _____로 가야 합니다.", opts: ["정류장", "공항", "항구", "주차장"], ans: "정류장" },
    { q: "가: 한국 음식을 잘 먹어요?\n나: 아니요, 잘 _____.", opts: ["못 먹어요", "안 먹어요", "먹고 싶어요", "먹을게요"], ans: "못 먹어요" },
    { q: "약국은 백화점 _____층에 있습니다.", opts: ["일", "하나", "첫", "한"], ans: "일" },
    { q: "가: 어제 영화가 어땠어요?\n나: 아주 _____.", opts: ["재미있었어요", "매웠어요", "비쌌어요", "추웠어요"], ans: "재미있었어요" },
    { q: "가: 집에서 학교까지 얼마나 걸려요?\n나: 30분 _____ 걸려요.", opts: ["정도", "부터", "까지", "하고"], ans: "정도" }
];

let cur = 0, correctCount = 0, user = {n: ""};

function nextPage(h, s) {
    document.getElementById(h).classList.remove('active');
    document.getElementById(s).classList.add('active');
}

function startQuiz() {
    user.n = document.getElementById('username').value;
    if(!user.n) return alert("Silakan isi nama Anda.");
    nextPage('p-data', 'p-quiz');
    loadQ();
}

function loadQ() {
    const d = quizData[cur];
    document.getElementById("main-question").innerText = d.q;
    document.getElementById("q-counter").innerText = `Soal ${cur + 1}/${quizData.length}`;
    document.getElementById("progress-fill").style.width = ((cur / quizData.length) * 100) + "%";
    
    const optCon = document.getElementById("options");
    optCon.innerHTML = "";
    
    const shuffled = [...d.opts].sort(() => Math.random() - 0.5);
    shuffled.forEach(o => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.innerText = o;
        btn.onclick = () => check(o, d.ans, btn);
        optCon.appendChild(btn);
    });
}

function check(uAns, rAns, btn) {
    const all = document.querySelectorAll(".opt-btn");
    all.forEach(b => b.disabled = true);

    if(uAns === rAns) {
        correctCount++;
        btn.classList.add("ans-correct");
        playSfx(880, 'sine');
    } else {
        btn.classList.add("ans-wrong");
        all.forEach(b => { if(b.innerText === rAns) b.classList.add("ans-correct"); });
        playSfx(200, 'square');
    }

    setTimeout(() => {
        cur++;
        if(cur < quizData.length) loadQ();
        else finish();
    }, 1100);
}

function finish() {
    const total = quizData.length;
    const finalScore = Math.round((correctCount / total) * 100);
    
    let records = JSON.parse(localStorage.getItem('k-final-score-db')) || [];
    records.push({ name: user.n, score: finalScore, count: `${correctCount}/${total}` });
    records.sort((a, b) => b.score - a.score);
    localStorage.setItem('k-final-score-db', JSON.stringify(records));
    
    updateBoard();
    
    document.getElementById('grade-display').innerText = finalScore >= 85 ? "A" : finalScore >= 70 ? "B" : "C";
    document.getElementById('final-score-text').innerText = `Skor: ${finalScore} (Benar: ${correctCount} dari ${total})`;
    nextPage('p-quiz', 'p-result');
}

function updateBoard() {
    let records = JSON.parse(localStorage.getItem('k-final-score-db')) || [];
    let html = "";
    records.slice(0, 10).forEach((r, i) => {
        html += `<tr><td>${i+1}</td><td>${r.name}</td><td><b>${r.score}</b> <span style="font-size:10px; color:#aaa;">(${r.count})</span></td></tr>`;
    });
    document.getElementById('leaderboard-body').innerHTML = html;
}

function showBoard() { updateBoard(); nextPage('p-data', 'p-result'); }

function clearBoard() {
    if(prompt("Password Admin:") === "admin123") {
        localStorage.removeItem('k-final-score-db');
        location.reload();
    }
}

function speakText() {
    const msg = new SpeechSynthesisUtterance(quizData[cur].q);
    msg.lang = 'ko-KR'; window.speechSynthesis.speak(msg);
}