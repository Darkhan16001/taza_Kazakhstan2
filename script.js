
// ======================================
// ТАЗА ҚАЗАҚСТАН | BY DARKHAN
// 1-26 ТОБЫ
// ======================================

const app = document.getElementById("app");

const natureImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85";

const photos = [
  "photo-1500534623283-312aade485b7",
  "photo-1441974231531-c6227db76b6e",
  "photo-1464822759023-fed622ff2c3b",
  "photo-1490750967868-88aa4486c946",
  "photo-1501854140801-50d01698950b",
  "photo-1470071459604-3b5ec3a7fe05",
  "photo-1472396961693-142e6e269027",
  "photo-1433086966358-54859d0ed716",
  "photo-1416879595882-3373a0480b5b",
  "photo-1501785888041-af3ef285b470",
  "photo-1469474968028-56623f02e42e",
  "photo-1497436072909-f5e4be235be5"
].map(id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`
);

// ======================================
// САБАҚТЫҢ МАҚСАТЫ
// ======================================

const goals = [
  "«Таза Қазақстан» бастамасының маңызын түсіндіру.",
  "Қоршаған ортаны қорғауға, табиғатты аялауға және тазалық сақтауға тәрбиелеу.",
  "Экологиялық мәдениет пен азаматтық жауапкершілікті қалыптастыру.",
  "Туған жерді таза ұстауға және қоғамдық тазалық шараларына белсенді қатысуға ынталандыру."
];

// ======================================
// 15 СЛАЙД
// ======================================

const slides = [
  {
    title: "Таза Қазақстан дегеніміз не?",
    text: "«Таза Қазақстан» — табиғатты қорғауға, елді мекендердің тазалығын сақтауға және халықтың экологиялық мәдениетін арттыруға бағытталған бастама. Тазалық әр адамның күнделікті әрекетінен басталады.",
    note: "Таза Қазақстан — табиғатты қорғау мен қоғамдық тазалықты дамыту бастамасы."
  },
  {
    title: "Табиғат — ортақ үйіміз",
    text: "Табиғат адамға таза ауа, су, азық-түлік және өмір сүруге қажетті ресурстар береді. Сондықтан табиғатты сақтау — әрбір азаматтың маңызды жауапкершілігі.",
    note: "Табиғатты қорғау — болашақ ұрпақ алдындағы жауапкершілік."
  },
  {
    title: "Экологиялық мәдениет",
    text: "Экологиялық мәдениет — адамның қоршаған ортаға саналы әрі жауапкершілікпен қарауы. Бұл қоқысты дұрыс тастау, суды үнемдеу, ағаштарды қорғау және табиғатқа зиян келтірмеу сияқты әрекеттерден көрінеді.",
    note: "Экологиялық мәдениет — табиғатқа жауапкершілікпен қарау."
  },
  {
    title: "Қоршаған ортаның ластануы",
    text: "Қоршаған ортаның ластануына өндіріс қалдықтары, көлік шығарындылары, тұрмыстық қоқыс және басқа факторлар әсер етеді. Ластану адамдарға, жануарларға және өсімдіктерге зиян келтіруі мүмкін.",
    note: "Ластанудың негізгі түрлері: ауа, су және топырақ ластануы."
  },
  {
    title: "Ауаның тазалығы",
    text: "Таза ауа адам денсаулығы үшін өте маңызды. Қоғамдық көлікті пайдалану, энергияны үнемдеу және өндірістік шығарындыларды азайту ауаның сапасын жақсартуға көмектеседі.",
    note: "Ауа сапасын жақсарту — қоршаған ортаны қорғаудың маңызды бағыты."
  },
  {
    title: "Су — тіршілік көзі",
    text: "Су барлық тіршілік иелеріне қажет. Суды үнемдеу үшін кранды ашық қалдырмау, құбыр ақауларын жөндеу және су көздерін ластамау керек.",
    note: "Суды үнемдеу — табиғи ресурстарды сақтау."
  },
  {
    title: "Қалдықтарды сұрыптау",
    text: "Қалдықтарды қағаз, пластик, шыны және металл сияқты түрлерге бөлу олардың қайта өңделуіне көмектеседі. Қайта өңдеу табиғи ресурстарды үнемдеуге мүмкіндік береді.",
    note: "Қалдықтарды сұрыптау — қайта өңдеудің алғашқы қадамы."
  },
  {
    title: "Ағаш отырғызу",
    text: "Ағаштар ауаны жақсартуға, көлеңке беруге және жануарлардың табиғи мекенін сақтауға көмектеседі. Көшет отырғызғаннан кейін оны күтіп-баптау да маңызды.",
    note: "Ағаш отырғызу және күту — табиғатты қорғаудың бір жолы."
  },
  {
    title: "Жасыл энергия",
    text: "Күн мен жел энергиясы — жаңартылатын энергия көздері. Оларды тиімді пайдалану қазба отынға тәуелділікті азайтуға көмектеседі. Электр қуатын үнемдеу де маңызды.",
    note: "Күн және жел — жаңартылатын энергия көздері."
  },
  {
    title: "Колледждегі тазалық",
    text: "Колледжді таза ұстау білім алушылардың ортақ міндеті. Оқу кабинеттерін күту, қоқысты арнайы жәшікке тастау және ортақ мүлікке ұқыпты қарау — жауапты студенттің әрекеттері.",
    note: "Таза колледж — білім алуға қолайлы орта."
  },
  {
    title: "Қоғамдық орындар",
    text: "Саябақ, көше, аялдама және демалыс орындары бәрімізге ортақ. Оларды таза ұстау — қоғамдық мәдениеттің белгісі.",
    note: "Қоғамдық орындарды сақтау — ортақ жауапкершілік."
  },
  {
    title: "Пластик қалдықтары",
    text: "Пластик қалдықтарының кейбір түрлері қоршаған ортада ұзақ уақыт сақталады. Қайта пайдаланылатын сөмкелер мен ыдыстарды қолдану қалдық көлемін азайтуға көмектеседі.",
    note: "Бірреттік пластикті азайту — пайдалы экологиялық әдет."
  },
  {
    title: "Экологиялық жауапкершілік",
    text: "Жауапкершілік әр адамның күнделікті әрекетінен басталады. Электр қуатын үнемдеу, қалдықтарды дұрыс жинау және табиғатты ластамау қоршаған ортаны қорғауға көмектеседі.",
    note: "Экологиялық жауапкершілік — саналы әрекет жасау."
  },
  {
    title: "Жастардың рөлі",
    text: "Жастар экологиялық жобалар мен тазалық шараларына белсенді қатыса алады. Колледжде табиғатты қорғау туралы ақпарат тарату да пайдалы бастама.",
    note: "Жастар экологиялық мәдениетті дамытуға үлес қоса алады."
  },
  {
    title: "Таза болашақ — өз қолымызда",
    text: "Таза Қазақстанды қалыптастыру үшін әр адам өз ортасына жауапкершілікпен қарауы қажет. Тазалық бір күндік жұмыс емес, күнделікті өмір салтына айналуы тиіс.",
    note: "Таза Қазақстан — жауапты азаматтардың ортақ жетістігі."
  }
];

// ======================================
// ҮШ БЕЙНЕБӨЛІМ
// Бұрынғы сайттағы сілтемелер
// ======================================

const videos = [
  {
    after: 3,
    title: "Таза Қазақстан бастамасы",
    id: "wPCDk-oJnhU",
    url: "https://www.youtube.com/shorts/wPCDk-oJnhU"
  },
  {
    after: 8,
    title: "Елімізді бірге таза етейік!",
    id: "pNhJXlpoF_c",
    url: "https://www.youtube.com/shorts/pNhJXlpoF_c"
  },
  {
    after: 12,
    title: "Тазалық пен тәртіп",
    url: "https://shuqa.kz/taza-aza-stan-tazaly-pen-t-rtipti-bastauy-4/"
  }
];

// ======================================
// 15 ОЙЫН СҰРАҒЫ
// ======================================

const questions = [
  {
    q: "Таза Қазақстан бастамасының мақсаты қандай?",
    a: ["Қоршаған ортаны қорғау", "Қоқысты көбейту", "Суды ластау", "Табиғатты бүлдіру"],
    c: 0
  },
  {
    q: "Экологиялық мәдениет дегеніміз не?",
    a: ["Табиғатты елемеу", "Табиғатқа жауапкершілікпен қарау", "Қоқысты шашу", "Ағаштарды сындыру"],
    c: 1
  },
  {
    q: "Табиғатты қорғауға қай әрекет жатады?",
    a: ["Суды ысырап ету", "Қоқысты шашу", "Ағаш отырғызу", "Өзенді ластау"],
    c: 2
  },
  {
    q: "Ауаның ластануына не әсер етеді?",
    a: ["Таза саябақ", "Суды үнемдеу", "Гүл отырғызу", "Көлік шығарындылары"],
    c: 3
  },
  {
    q: "Суды үнемдеудің дұрыс жолы?",
    a: ["Кранды жабу", "Суды босқа ағызу", "Құбыр ақауын елемеу", "Өзенді ластау"],
    c: 0
  },
  {
    q: "Қалдықтарды не үшін сұрыптаймыз?",
    a: ["Ластану үшін", "Қайта өңдеу үшін", "Қоқысты шашу үшін", "Табиғатты бүлдіру үшін"],
    c: 1
  },
  {
    q: "Жаңартылатын энергия көзі қайсы?",
    a: ["Мұнай", "Көмір", "Күн энергиясы", "Табиғи газ"],
    c: 2
  },
  {
    q: "Ағаштар қандай пайда әкеледі?",
    a: ["Ауаны ластайды", "Суды улайды", "Қоқысты арттырады", "Табиғи ортаны жақсартады"],
    c: 3
  },
  {
    q: "Колледжде тазалықты кім сақтауы керек?",
    a: ["Барлық студенттер мен қызметкерлер", "Тек күзетші", "Тек директор", "Тек бір топ"],
    c: 0
  },
  {
    q: "Қоқысты қайда тастау керек?",
    a: ["Көшеге", "Арнайы жәшікке", "Өзенге", "Орманға"],
    c: 1
  },
  {
    q: "Пластик қалдықтарын қалай азайтамыз?",
    a: ["Көбірек пластик сатып алу", "Қоқысты шашу", "Қайта пайдаланылатын сөмке қолдану", "Пластикті өртеу"],
    c: 2
  },
  {
    q: "Қоғамдық орындарды таза ұстау кімнің міндеті?",
    a: ["Тек мұғалімнің", "Тек әкімдіктің", "Тек тазалықшының", "Барлық азаматтың"],
    c: 3
  },
  {
    q: "Электр қуатын үнемдеу үшін не істеу керек?",
    a: ["Қажетсіз жарықты өшіру", "Барлық шамды жағу", "Құрылғыларды босқа қосу", "Энергияны ысырап ету"],
    c: 0
  },
  {
    q: "Жастар экологияға қалай үлес қоса алады?",
    a: ["Табиғатты ластау", "Тазалық акцияларына қатысу", "Қоқысты көбейту", "Ағаштарды бүлдіру"],
    c: 1
  },
  {
    q: "Таза Қазақстан неден басталады?",
    a: ["Қоқысты көбейтуден", "Табиғатты бүлдіруден", "Әр адамның жауапты ісінен", "Суды ластаудан"],
    c: 2
  }
];

// ======================================
// САЙТ КҮЙІ
// ======================================

let view = "home";
let slideIndex = 0;
let gameIndex = 0;
let activeTeam = 0;

let scores = [0, 0, 0];
let answers = {};
let revealed = {};

let timeLeft = 15 * 60;
let running = false;
let interval = null;
let phase = "lesson";

const sequence = [];

slides.forEach((slide, index) => {
  sequence.push({ type: "slide", index });

  videos.forEach((video, videoIndex) => {
    if (video.after === index) {
      sequence.push({
        type: "video",
        index: videoIndex
      });
    }
  });
});

// ======================================
// ТАЙМЕР
// ======================================

function updateClock() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;

  document.getElementById("clock").textContent =
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0");

  document.getElementById("timerButton").textContent =
    running ? "Ⅱ" : "▶";
}

function pauseTimer() {
  running = false;
  clearInterval(interval);
  interval = null;
  updateClock();
}

function startTimer() {
  if (running || timeLeft <= 0) return;

  running = true;

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateClock();
    } else {
      pauseTimer();
    }
  }, 1000);

  updateClock();
}

function toggleTimer() {
  if (running) pauseTimer();
  else startTimer();
}

function switchPhase(newPhase) {
  if (phase === newPhase) return;

  pauseTimer();
  phase = newPhase;
  timeLeft = newPhase === "game"
    ? 15 * 60
    : 15 * 60;

  updateClock();
}

// ======================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ======================================

function progress(current, total) {
  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${current / total * 100}%">
      </div>
    </div>
  `;
}

function card(title, content) {
  return `
    <div class="card">
      <h2>${title}</h2>
      ${content}
    </div>
  `;
}

function updateRail() {
  const back = document.getElementById("backButton");
  const next = document.getElementById("nextButton");
  const phaseLabel = document.getElementById("phaseLabel");

  back.disabled = view === "home";
  next.disabled = view === "final";

  phaseLabel.textContent = ({
    home: "БАСТЫ БЕТ",
    lesson: "ТҮСІНДІРУ",
    game: "ОЙЫН",
    final: "ҚОРЫТЫНДЫ"
  })[view] || "ТҮСІНДІРУ";
}

function photoError(img) {
  img.style.display = "none";
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen?.();
  }
}

// ======================================
// БІРІНШІ БЕТ
// ======================================

function showHome() {
  pauseTimer();
  view = "home";

  app.innerHTML = `
    <section class="hero page-enter">

      <div>
        <div class="eyebrow">
          ТАБИҒАТ · ТАЗАЛЫҚ · ЖАУАПКЕРШІЛІК
        </div>

        <h1>
          ТАЗА<br>
          <span>ҚАЗАҚСТАН</span>
        </h1>

        <p>
          Жасыл табиғат — жарқын болашақ!
          Бірінші курс студенттеріне арналған
          интерактивті ашық тәрбие сағаты.
        </p>

        <p>
          <strong>Топ: 1-26</strong>
        </p>

        <!-- ЖАҢА БӨЛІМ -->
        <div class="lesson-goal">
          <h2>🎯 Сабақтың мақсаты</h2>

          <p>
            Білім алушыларға қоршаған ортаны
            қорғаудың, табиғатты аялаудың және
            тазалықты сақтаудың маңыздылығын
            түсіндіру.
          </p>

          <ul>
            ${goals.map(g => `<li>${g}</li>`).join("")}
          </ul>
        </div>

        <div class="actions">
          <button class="btn"
                  onclick="showGame(0)">
            Командалық ойын
          </button>

          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>
        </div>

        <div class="stats">
          <div><b>15</b><small>Слайд</small></div>
          <div><b>3</b><small>Бейнебөлім</small></div>
          <div><b>15</b><small>Сұрақ</small></div>
          <div><b>3</b><small>Команда</small></div>
        </div>
      </div>

      <div class="hero-image">
        <img src="${natureImage}"
             alt="Қазақстан табиғаты"
             onerror="photoError(this)">

        <div class="hero-quote">
          Табиғатты қорғайық!<br>
          Болашақты сақтайық!
        </div>
      </div>
    </section>
  `;

  updateRail();
  window.scrollTo(0, 0);
}

// ======================================
// САБАҚ СЛАЙДТАРЫ
// ======================================

function showSlide(index) {
  switchPhase("lesson");
  slideIndex = Math.max(
    0, Math.min(sequence.length - 1, index)
  );

  view = "lesson";
  renderSlide();
  startTimer();
}

function renderSlide() {
  const item = sequence[slideIndex];

  if (item.type === "video") {
    renderVideo(item.index);
    return;
  }

  const s = slides[item.index];
  const photo = photos[item.index % photos.length];

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        ТҮСІНДІРУ · ${item.index + 1}/15
      </div>

      <h1 class="section-title">${s.title}</h1>

      ${progress(slideIndex + 1, sequence.length)}

      <img class="slide-image"
           src="${photo}"
           alt="${s.title}"
           loading="lazy"
           onerror="photoError(this)">

      ${card(
        "📖 Тақырыпты түсіндіру",
        `<p>${s.text}</p>`
      )}

      ${card(
        "📝 Дәптерге жазып ал",
        `<div class="note">${s.note}</div>`
      )}

      <div class="actions">
        <button class="btn primary"
                onclick="nextSlide()">
          Келесі бет →
        </button>
      </div>
    </section>
  `;

  updateRail();
  window.scrollTo(0, 0);
}

// ======================================
// БЕЙНЕБӨЛІМ
// ======================================

function renderVideo(index) {
  const v = videos[index];

  const videoHtml = v.id
    ? `
      <iframe class="video-frame"
        src="https://www.youtube.com/embed/${v.id}"
        title="${v.title}"
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    `
    : "";

  app.innerHTML = `
    <section class="page-enter">
      <div class="eyebrow">
        БЕЙНЕМАТЕРИАЛ · ${index + 1}/3
      </div>

      <h1 class="section-title">🎬 ${v.title}</h1>

      ${progress(slideIndex + 1, sequence.length)}

      ${card(
        "Бейнематериал",
        `
          ${videoHtml}
          <p>
            Бейнені қарап, негізгі ойды анықтаңдар.
          </p>

          <div class="actions">
            <a class="btn primary"
               href="${v.url}"
               target="_blank"
               rel="noopener noreferrer">
              ▶ Видеоны ашу
            </a>
          </div>

          <p>
            Егер бейне сайт ішінде ашылмаса,
            «Видеоны ашу» батырмасын пайдаланыңдар.
          </p>
        `
      )}

      ${card(
        "🎤 Ауызша тапсырма",
        `
          <p>
            Видеода қандай мәселе қозғалды?
            Табиғатты қорғау үшін қандай
            әрекеттер жасауға болады?
          </p>
        `
      )}

      <div class="actions">
        <button class="btn primary"
                onclick="nextSlide()">
          Келесі →
        </button>
      </div>
    </section>
  `;

  updateRail();
  window.scrollTo(0, 0);
}

function nextSlide() {
  if (slideIndex < sequence.length - 1) {
    showSlide(slideIndex + 1);
  } else {
    showGame(0);
  }
}

function previousSlide() {
  if (slideIndex > 0) {
    showSlide(slideIndex - 1);
  } else {
    showHome();
  }
}

// ======================================
// ТОПТАР ЖӘНЕ ҰПАЙЛАР
// ======================================

function teamCards() {
  return `
    <div class="teams">
      ${scores.map((score, i) => `
        <div class="team">
          <h3>${i + 1}-топ</h3>
          <div class="score">${score}</div>
          <button onclick="changeScore(${i},-1)">−1</button>
          <button onclick="changeScore(${i},1)">+1</button>
        </div>
      `).join("")}
    </div>
  `;
}

function changeScore(team, amount) {
  scores[team] = Math.max(0, scores[team] + amount);

  if (view === "game") renderGame();
  else if (view === "final") showFinal();
}

function selectTeam(team) {
  if (answers[gameIndex]) return;
  activeTeam = team;
  renderGame();
}

// ======================================
// ОЙЫН
// ======================================

function showGame(index) {
  switchPhase("game");
  gameIndex = Math.max(
    0, Math.min(questions.length - 1, index)
  );

  view = "game";
  renderGame();
  startTimer();
}

function renderGame() {
  const q = questions[gameIndex];
  const result = answers[gameIndex];

  const options = q.a.map((answer, i) => {
    let className = "option";

    if (result) {
      if (i === q.c) className += " correct";
      else if (i === result.choice) className += " wrong";
    }

    return `
      <button class="${className}"
        ${result ? "disabled" : ""}
        onclick="chooseAnswer(${i})">

        ${String.fromCharCode(65 + i)}. ${answer}
      </button>
    `;
  }).join("");

  app.innerHTML = `
    <section class="page-enter">
      <div class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН · ${gameIndex + 1}/15
      </div>

      <h1 class="section-title">
        🏆 Экологиялық сайыс
      </h1>

      ${progress(gameIndex + 1, questions.length)}

      ${card(
        "Сұрақ",
        `
          <p><strong>${q.q}</strong></p>

          <div class="options">
            ${options}
          </div>

          ${
            result
              ? `<div class="feedback">
                  ${
                    result.choice === q.c
                      ? "✅ Дұрыс жауап! +1 ұпай"
                      : "❌ Қате жауап!"
                  }
                 </div>`
              : ""
          }
        `
      )}

      ${card(
        "Жауап беретін топ",
        `
          <div class="team-choice">
            ${scores.map((_, i) => `
              <button
                class="btn ${activeTeam === i ? "active" : ""}"
                ${result ? "disabled" : ""}
                onclick="selectTeam(${i})">
                ${i + 1}-топ
              </button>
            `).join("")}
          </div>
        `
      )}

      ${teamCards()}

      <div class="actions">
        <button class="btn primary"
                onclick="nextGame()">
          ${
            gameIndex === questions.length - 1
              ? "Қорытынды →"
              : "Келесі сұрақ →"
          }
        </button>
      </div>
    </section>
  `;

  updateRail();
  window.scrollTo(0, 0);
}

function chooseAnswer(choice) {
  if (answers[gameIndex]) return;

  const q = questions[gameIndex];

  answers[gameIndex] = {
    choice,
    team: activeTeam
  };

  if (choice === q.c) {
    scores[activeTeam]++;
  }

  renderGame();
}

function nextGame() {
  if (gameIndex < questions.length - 1) {
    showGame(gameIndex + 1);
  } else {
    showFinal();
  }
}

function previousGame() {
  if (gameIndex > 0) {
    showGame(gameIndex - 1);
  } else {
    showSlide(sequence.length - 1);
  }
}

// ======================================
// ҚОРЫТЫНДЫ
// ======================================

function showFinal() {
  pauseTimer();
  view = "final";

  const max = Math.max(...scores);

  const winners = scores
    .map((score, i) => ({ score, team: i + 1 }))
    .filter(item => item.score === max);

  const winnerText = max === 0
    ? "Ұпайлар әлі берілген жоқ"
    : winners.length === 1
      ? `${winners[0].team}-топ жеңімпаз!`
      : "Тең нәтиже: " +
        winners.map(w => w.team + "-топ").join(", ");

  app.innerHTML = `
    <section class="page-enter">
      <div class="eyebrow">
        САБАҚТЫҢ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="section-title">
        🏆 Қорытынды нәтижелер
      </h1>

      ${teamCards()}

      ${card(
        "Жеңімпаз",
        `<div class="winner">🎉 ${winnerText}</div>`
      )}

      ${card(
        "Бүгінгі сабақтан не түсіндік?",
        `
          <p>
            Біз табиғатты қорғаудың,
            экологиялық мәдениеттің және
            жауапкершіліктің маңызын түсіндік.
          </p>

          <p>
            Енді әр топ «Таза Қазақстанға
            қандай үлес қосамыз?» деген сұраққа
            өз ойын ауызша айтсын.
          </p>
        `
      )}

      ${card(
        "Үй тапсырмасы",
        `
          <p>
            «Менің Таза Қазақстанға қосатын үлесім»
            тақырыбында 10–12 сөйлем жазып келіңдер.
          </p>
        `
      )}

      <div class="actions">
        <button class="btn primary"
                onclick="showGoodbye()">
          Сабақты аяқтау →
        </button>
      </div>
    </section>
  `;

  updateRail();
  window.scrollTo(0, 0);
}

function showGoodbye() {
  view = "final";

  app.innerHTML = `
    <section class="page-enter"
             style="text-align:center;padding:70px 0">

      <div style="font-size:75px">🌿🇰🇿</div>

      <h1 class="section-title">
        Назарларыңызға рақмет!
      </h1>

      <p style="font-size:24px;line-height:1.8">
        Табиғатты қорғайық!<br>
        Қазақстанымызды таза ұстайық!
      </p>

      <h2 style="color:var(--green)">
        Сау болыңыздар!
      </h2>

      <p>BY DARKHAN</p>

      <div class="actions">
        <button class="btn primary"
                onclick="showHome()">
          Басты бетке оралу
        </button>
      </div>
    </section>
  `;

  updateRail();
}

// ======================================
// ОҢ ЖАҚТАҒЫ БАТЫРМАЛАР
// ======================================

function goNext() {
  if (view === "home") showSlide(0);
  else if (view === "lesson") nextSlide();
  else if (view === "game") nextGame();
}

function goBack() {
  if (view === "lesson") previousSlide();
  else if (view === "game") previousGame();
  else if (view === "final") showGame(14);
}

// ======================================
// ІСКЕ ҚОСУ
// ======================================

updateClock();
showHome();
