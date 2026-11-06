
"use strict";

/* ======================================
   ТАЗА ҚАЗАҚСТАН
   BY DARKHAN
====================================== */

const app = document.getElementById("app");

const natureImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=90";

/* ТАБИҒАТ ФОТОЛАРЫ */

const photos = [
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1497436072909-f5e4be235be5?auto=format&fit=crop&w=1200&q=85"
];

/*
  ВИДЕО:
  YouTube ID мәндерін өзің тексерген
  қысқа қазақша видеолардың ID-леріне
  ауыстыра аласың.
*/

const videos = [
  {
    id: "wPCDk-oJnhU",
    title: "Таза Қазақстан — экологиялық бастама",
    intro: "Табиғатты қорғау мен тазалық мәдениеті туралы бейнематериалды тамашалаймыз.",
    outro: "Қоршаған ортаны қорғау әр адамның күнделікті жауапкершілігінен басталады."
  },
  {
    id: "pNhJXlpoF_c",
    title: "Елімізді бірге таза етейік",
    intro: "Тазалық шараларына қатысу және қоршаған ортаға ұқыпты қарау туралы бейнематериалды көреміз.",
    outro: "Таза орта қалыптастыру үшін ортақ жауапкершілік пен тұрақты әрекет қажет."
  },
  {
    id: "Qypp5k7qLpw",
    title: "Экологиялық мәдениет",
    intro: "Табиғат пен адам арасындағы байланысты қарастырамыз.",
    outro: "Табиғатты сақтау — болашақ ұрпақ алдындағы ортақ міндет."
  }
];

/* ======================================
   15 СЛАЙД
====================================== */

const slides = [
  {
    type: "speech",
    title: "Таза Қазақстан дегеніміз не?",
    text: `Қайырлы күн, құрметті ұстаздар және студенттер!

Бүгінгі ашық тәрбие сағатымыздың тақырыбы — «Таза Қазақстан».

«Таза Қазақстан» — қоршаған ортаны қорғауға, елді мекендер мен табиғи аумақтардың тазалығын сақтауға және экологиялық мәдениетті дамытуға бағытталған бастама.

Тазалық тек қоқыс жинаумен шектелмейді.

Ол су мен энергияны үнемдеуден, табиғатқа қамқорлық жасаудан және қоғамдық кеңістікті таза ұстаудан басталады.

Әр азаматтың күнделікті пайдалы әрекеті қоршаған ортаның жағдайын жақсартуға көмектеседі.

Бүгін табиғатты қорғаудың маңызын, нақты әрекеттерді және экологиялық жауапкершілікті талқылаймыз.`
  },

  {
    type: "gallery",
    title: "Қазақстанның жасыл табиғаты",
    images: [
      photos[0],
      photos[2],
      photos[4]
    ]
  },

  {
    type: "video",
    title: "Таза Қазақстан бастамасы",
    video: videos[0]
  },

  {
    type: "speech",
    title: "Экологиялық мәдениет",
    text: `Экологиялық мәдениет — адамның табиғатқа саналы әрі жауапкершілікпен қарауы.

Бұл мәдениет күнделікті әрекеттерден қалыптасады.

Мысалы, орманға немесе тауға демалуға барғанда қоқысты жинап кету, өсімдіктерді зақымдамау және қауіпсіздік ережелерін сақтау қажет.

Сонымен бірге суды, қағазды және электр энергиясын ұқыпты пайдалану маңызды.

Экологиялық мәдениеті жоғары адам тек өзіне ғана емес, қоғам мен болашақ ұрпаққа да жауапкершілікпен қарайды.

Табиғатты қорғау үлкен бастамалардан ғана емес, тұрақты жақсы әдеттерден басталады.`
  },

  {
    type: "gallery",
    title: "Орман мен жасыл желек",
    images: [
      photos[1],
      photos[6],
      photos[8]
    ]
  },

  {
    type: "speech",
    title: "Қалдықтарды сұрыптау",
    text: `Қалдықтарды сұрыптау — пайдаланылған материалдарды түріне қарай бөлек жинау.

Мысалы, қағаз, пластик, шыны және металл қалдықтарын арнайы талаптарға сәйкес бөлуге болады.

Сұрыптау қайта өңдеуге жарамды материалдарды жинауды жеңілдетеді.

Алайда қалдықтардың барлығы қайта өңделе бермейді.

Сондықтан ең алдымен артық тұтынуды азайтып, жарамды заттарды қайта пайдалану пайдалы.

Колледждерде қалдықтарды сұрыптау туралы түсіндіру жұмыстарын ұйымдастыру экологиялық мәдениетті дамытуға көмектеседі.`
  },

  {
    type: "gallery",
    title: "Таза табиғат",
    images: [
      photos[3],
      photos[5],
      photos[10]
    ]
  },

  {
    type: "speech",
    title: "Су — тіршілік көзі",
    text: `Су — адамдар, жануарлар және өсімдіктер үшін қажет табиғи ресурс.

Суды үнемдеу әр азаматтың күнделікті әрекетінен басталады.

Мысалы, қажетсіз ағып тұрған кранды жабу, ақаулы құрылғылар туралы жауапты мамандарға хабарлау және суды ұқыпты пайдалану маңызды.

Өзендер мен көлдерге қоқыс тастау табиғи ортаға зиян келтіруі мүмкін.

Су ресурстарын қорғау — табиғат пен болашақ ұрпақ алдындағы жауапкершіліктің белгісі.`
  },

  {
    type: "gallery",
    title: "Көлдер мен өзендер",
    images: [
      photos[7],
      photos[9],
      photos[2]
    ]
  },

  {
    type: "video",
    title: "Елімізді бірге таза етейік",
    video: videos[1]
  },

  {
    type: "speech",
    title: "Таза ауа және қоршаған орта",
    text: `Таза ауа — адам денсаулығы мен өмір сапасының маңызды шарты.

Қалалардағы ауа сапасына көлік қозғалысы, өндіріс және басқа факторлар әсер етуі мүмкін.

Қоғамдық көлікті пайдалану, энергияны үнемдеу және экологиялық талаптарды сақтау қоршаған ортаны қорғауға көмектеседі.

Жасыл желекті сақтау мен табиғи аумақтарды қорғаудың да маңызы зор.

Таза ауа — қоғамның барлық мүшесіне қажет ортақ құндылық.`
  },

  {
    type: "gallery",
    title: "Жасыл болашақ",
    images: [
      photos[11],
      photos[3],
      photos[6]
    ]
  },

  {
    type: "speech",
    title: "Жасыл колледж",
    text: `Экологиялық мәдениет өзіміз оқитын колледжден басталады.

Аудиторияны таза ұстау, электр энергиясын қажетсіз пайдаланбау және қағазды үнемдеу — қарапайым әрі пайдалы әрекеттер.

Колледж ішінде қалдықтарды сұрыптауға арналған түсіндіру материалдарын орналастыруға болады.

Студенттер көгалдандыру және тазалық бастамаларына қатыса алады.

Сонымен қатар баспа материалдарын алдын ала мұқият тексеру қағаздың артық шығынын азайтуы мүмкін.

Маңыздысы — тазалықты бір күндік шара емес, күнделікті мәдениетке айналдыру.`
  },

  {
    type: "gallery",
    title: "Болашақ ұрпаққа таза табиғат",
    images: [
      photos[4],
      photos[10],
      photos[0]
    ]
  },

  {
    type: "video",
    title: "Экологиялық мәдениет",
    video: videos[2]
  }
];

/* ======================================
   ҮШ КОМАНДА
====================================== */

const teams = [
  "Жасыл әлем",
  "Таза табиғат",
  "Эко болашақ"
];

/* ======================================
   15 АУЫЗША ТАПСЫРМА
====================================== */

const questions = [
  {
    title: "Пластикті азайту",
    question: "Колледжде бір реттік пластик бөтелкелерді азайту үшін қандай екі нақты ұсыныс жасар едіңдер?",
    answer: `Біріншіден, көп рет қолданылатын су бөтелкелерін пайдалануға болады.

Екіншіден, қауіпсіз ауызсу құюға арналған орын ұйымдастыруды ұсынуға болады.

Бұл бір реттік бөтелкелердің қолданылуын азайтуға көмектеседі.`
  },

  {
    title: "Қалдықтарды сұрыптау",
    question: "Қағаз, пластик және шыны қалдықтарын бөлек жинаудың қандай артықшылықтары бар?",
    answer: `Материалдарды бөлек жинау оларды қайта өңдеуге дайындауды жеңілдетеді.

Бұл жарамды материалдардың басқа қалдықтармен араласуын азайтады.

Сұрыптау кезінде жергілікті қабылдау талаптарын сақтау қажет.`
  },

  {
    title: "Колледждегі тазалық",
    question: "Студенттер сұрыптау жәшіктерін дұрыс пайдаланбайды. Бұл мәселені қалай шешуге болады?",
    answer: `Жәшіктерге түсінікті белгілер орналастыру керек.

Түсіндіру жұмыстарын өткізіп, қалдықтарды қайда тастау керектігін мысалмен көрсетуге болады.

Жиналған материалдарды тиісті орынға жеткізу де ұйымдастырылуы керек.`
  },

  {
    title: "Энергияны үнемдеу",
    question: "Сабақтан кейін жарық пен компьютерлер қосулы қалды. Мұндай жағдайды қалай болдырмауға болады?",
    answer: `Қауіпсіз түрде өшіруге болатын құрылғыларды тексеру тәртібін енгізуге болады.

Жауапты кезекшіні белгілеп, қысқа тексеру тізімін дайындауға болады.

Барлық әрекет колледждің қауіпсіздік талаптарына сай болуы қажет.`
  },

  {
    title: "Табиғаттағы демалыс",
    question: "Демалыстан кейін достарың табиғатта қоқыс қалдырды. Қандай әрекет дұрыс болады?",
    answer: `Қоқыстың табиғатқа зиян келтіруі мүмкін екенін түсіндіру қажет.

Қалдықтарды бірге жинап, тиісті қабылдау орнына жеткізу ұсынылады.

Мәселені өзара сыйластықпен шешкен дұрыс.`
  },

  {
    title: "Ағаш отырғызу",
    question: "Ағаш отырғызғаннан кейін оның жақсы өсуі үшін қандай жұмыстар жасалуы керек?",
    answer: `Ағаштың түріне және ауа райына сәйкес күтім жасау қажет.

Суару, көшеттің жағдайын бақылау және зақымданудан қорғау маңызды.

Тұрақты күтімге жауапты адамдар белгіленуі тиіс.`
  },

  {
    title: "Қаланың ауасы",
    question: "Қаладағы ауаның ластануын азайтуға студенттер қалай үлес қоса алады?",
    answer: `Мүмкіндікке қарай қоғамдық көлікті пайдалану, жаяу жүру және энергияны үнемдеу пайдалы.

Экологиялық мәдениетті дамытуға арналған қоғамдық бастамаларға қатысуға болады.`
  },

  {
    title: "Тұрақты тазалық",
    question: "Колледждегі тазалық шаралары тұрақты болуы үшін қандай жоспар жасау қажет?",
    answer: `Тазалық кестесін жасап, жауапты адамдарды белгілеуге болады.

Қажетті құралдарды қамтамасыз ету және қалдықтарды уақытында әкету маңызды.

Нәтижені тұрақты бақылау қажет.`
  },

  {
    title: "Өзенді қорғау",
    question: "Өзен жағасында қоқыс жиі жиналады. Мәселенің ұзақ мерзімді шешімін ұсыныңдар.",
    answer: `Қоқыс жәшіктерін қолайлы орындарға орналастыру және оларды тұрақты босату қажет.

Ақпараттық белгілер қойып, түсіндіру жұмыстарын жүргізуге болады.

Жауапты ұйымдармен бірлескен бақылау маңызды.`
  },

  {
    title: "Қайта пайдалану",
    question: "Затты қайта пайдалану мен қайта өңдеудің айырмашылығы қандай? Мысал келтіріңдер.",
    answer: `Қайта пайдалану — затты өңдемей, бірнеше рет қолдану.

Мысалы, көп рет қолданылатын сөмке.

Қайта өңдеу — қалдық материалды өңдеп, жаңа өнім немесе шикізат алу.

Мысалы, қағаз қалдықтарын қайта өңдеу.`
  },

  {
    title: "Экологиялық тауар",
    question: "Өнімде «экологиялық таза» деп жазылған. Бұл ақпараттың дұрыстығын қалай тексеруге болады?",
    answer: `Өндірушінің мәліметтерін және өнімнің құрамын тексеру қажет.

Қажет болса, сертификаттар мен тәуелсіз бағалау мәліметтерін қарастыруға болады.

Тек жарнамалық сөзге сүйенбеу маңызды.`
  },

  {
    title: "Артық тұтыну",
    question: "Жұмыс істеп тұрған затты жиі жаңасына ауыстыру қоршаған ортаға қалай әсер етуі мүмкін?",
    answer: `Жаңа заттарды өндіруге шикізат, энергия және басқа ресурстар қажет.

Ал ескі заттар қалдыққа айналуы мүмкін.

Сондықтан затты жөндеу, қайта пайдалану және қажетсіз сатып алуды азайту пайдалы.`
  },

  {
    title: "Мамандық және экология",
    question: "Болашақ маман ретінде қағаз бен электр энергиясын қалай үнемдер едіңдер?",
    answer: `Баспа жұмыстарында макетті алдын ала тексеру артық басылымдарды азайтуы мүмкін.

Қағазды тиімді жоспарлау және құрылғыларды қауіпсіз әрі дұрыс пайдалану маңызды.

Ресурстарды үнемдеу кәсіби жауапкершіліктің бір бөлігі.`
  },

  {
    title: "Суды үнемдеу",
    question: "Колледжде кран ақауланып, су үздіксіз ағып тұр. Қандай қауіпсіз әрекет жасау қажет?",
    answer: `Ақау туралы жауапты қызметкерге хабарлау керек.

Жөндеу жұмысын тиісті маман орындауы қажет.

Жабдықтарды тұрақты тексеру мұндай мәселелердің алдын алуға көмектеседі.`
  },

  {
    title: "Экологиялық жоба",
    question: "Колледжде бір айда іске асыруға болатын экологиялық жоба ойластырыңдар. Мақсаты, үш қадамы және нәтижесі қандай?",
    answer: `Мысал: «Қағазды үнемдейтін колледж».

Мақсаты — қажетсіз қағаз шығынын азайту.

Бірінші қадам — қағаздың қай жерде көп жұмсалатынын анықтау.

Екінші қадам — артық басылымдарды азайтуға ұсыныс жасау.

Үшінші қадам — түсіндіру жұмысын өткізу.

Нәтиже қағаз шығынын бұрынғы кезеңмен салыстыру арқылы бағаланады.`
  }
];

/* ======================================
   ҰПАЙ ЖҮЙЕСІ
====================================== */

const pointOptions = [
  55, 60, 65, 70, 75,
  80, 85, 90, 95, 100
];

const SAVE_KEY = "taza-qazaqstan-darkhan-notepad-v1";

let grades = Array(15).fill(null);
let revealed = Array(15).fill(false);

/* ======================================
   САЙТ КҮЙІ
====================================== */

let view = "home";
let slideIndex = 0;
let gameIndex = 0;
let videoPlaying = false;

let phase = "lesson";
const remaining = {
  lesson: 900,
  game: 600
};

let timerRunning = false;
let deadline = 0;

let typingFrame = null;
let fullText = "";

/* ======================================
   ҰПАЙЛАРДЫ САҚТАУ
====================================== */

function saveProgress() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({grades, revealed})
    );
  } catch (error) {
    console.warn("Ұпай сақтау қолжетімсіз.");
  }
}

function loadProgress() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(SAVE_KEY)
    );

    if (!saved) return;

    if (Array.isArray(saved.grades) &&
        saved.grades.length === 15) {

      grades = saved.grades.map(n =>
        pointOptions.includes(n) ? n : null
      );
    }

    if (Array.isArray(saved.revealed) &&
        saved.revealed.length === 15) {

      revealed = saved.revealed.map(Boolean);
    }

    grades.forEach((n, i) => {
      if (n !== null) revealed[i] = true;
    });

  } catch (error) {
    grades = Array(15).fill(null);
    revealed = Array(15).fill(false);
  }
}

/* ======================================
   ТАЙМЕР
====================================== */

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return (
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0")
  );
}

function updateTimer() {
  document.getElementById("clock").textContent =
    formatTime(remaining[phase]);

  document.getElementById("phase").textContent =
    phase === "lesson" ? "ТҮСІНДІРУ" : "ОЙЫН";

  document.getElementById("timerButton").textContent =
    timerRunning ? "Ⅱ" : "▶";
}

function startTimer() {
  if (timerRunning || remaining[phase] <= 0) return;
  if (view === "home" || view === "final") return;

  timerRunning = true;
  deadline = Date.now() + remaining[phase] * 1000;

  updateTimer();
}

function pauseTimer() {
  if (!timerRunning) return;

  remaining[phase] = Math.max(
    0,
    Math.ceil((deadline - Date.now()) / 1000)
  );

  timerRunning = false;
  updateTimer();
}

function toggleTimer() {
  if (timerRunning) pauseTimer();
  else startTimer();
}

function setPhase(next) {
  if (phase !== next) {
    pauseTimer();
    phase = next;
  }

  updateTimer();
}

setInterval(() => {
  if (!timerRunning) return;

  remaining[phase] = Math.max(
    0,
    Math.ceil((deadline - Date.now()) / 1000)
  );

  if (remaining[phase] === 0) {
    timerRunning = false;
  }

  updateTimer();

}, 250);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen?.()
      .catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* ======================================
   КӨМЕКШІ ФУНКЦИЯЛАР
====================================== */

function progress(n, total) {
  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${n / total * 100}%"></div>
    </div>
  `;
}

function stopTyping() {
  if (typingFrame !== null) {
    cancelAnimationFrame(typingFrame);
    typingFrame = null;
  }
}

function typeText(text) {
  stopTyping();

  const el = document.getElementById("typedText");
  if (!el) return;

  fullText = text.trim();

  if (matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) {
    el.textContent = fullText;

    const btn = document.getElementById("showText");
    if (btn) btn.hidden = true;

    return;
  }

  el.textContent = "";
  el.classList.add("typing");

  const begin = performance.now();

  function animate(now) {
    if (!el.isConnected) return;

    const count = Math.min(
      fullText.length,
      Math.floor((now - begin) / 1000 * 130)
    );

    el.textContent = fullText.slice(0, count);

    if (count < fullText.length) {
      typingFrame = requestAnimationFrame(animate);
    } else {
      typingFrame = null;
      el.classList.remove("typing");

      const btn = document.getElementById("showText");
      if (btn) btn.hidden = true;
    }
  }

  typingFrame = requestAnimationFrame(animate);
}

function showFullText() {
  stopTyping();

  const el = document.getElementById("typedText");

  if (el) {
    el.textContent = fullText;
    el.classList.remove("typing");
  }

  const btn = document.getElementById("showText");
  if (btn) btn.hidden = true;
}

/* ======================================
   СУРЕТ ҚАТЕСІН ӨҢДЕУ
====================================== */

function photoError(img) {
  const fallback = [
    photos[10],
    photos[4],
    photos[1]
  ];

  const attempt =
    Number(img.dataset.retry || 0);

  if (attempt >= fallback.length) {
    img.onerror = null;
    img.alt = "Сурет жүктелмеді";
    return;
  }

  img.dataset.retry = attempt + 1;
  img.src = fallback[attempt];
}

/* ======================================
   БАСТЫ БЕТ
====================================== */

function showHome() {
  stopTyping();
  pauseTimer();

  view = "home";
  videoPlaying = false;

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

          1-курс студенттеріне арналған
          интерактивті ашық тәрбие сағаты.
        </p>

        <div class="actions">

          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>

          <button class="btn"
                  onclick="showGame(0)">
            Командалық ойын
          </button>

        </div>

        <div class="stats">

          <div>
            <b>15</b>
            <small>Слайд</small>
          </div>

          <div>
            <b>3</b>
            <small>Бейнебөлім</small>
          </div>

          <div>
            <b>15</b>
            <small>Сұрақ</small>
          </div>

          <div>
            <b>3</b>
            <small>Команда</small>
          </div>

        </div>
      </div>

      <div class="hero-image">

        <img
          src="${natureImage}"
          alt="Жасыл табиғат"
          data-retry="0"
          onerror="photoError(this)">

        <div class="hero-quote">
          Табиғатты қорғайық!<br>
          Болашақты сақтайық!
        </div>

      </div>

    </section>
  `;

  window.scrollTo(0, 0);
}

/* ======================================
   НАВИГАЦИЯ
====================================== */

function showSlide(index) {
  stopTyping();
  setPhase("lesson");

  slideIndex = Math.max(
    0,
    Math.min(slides.length - 1, index)
  );

  videoPlaying = false;
  view = "slide";

  renderSlide();
  startTimer();

  window.scrollTo(0, 0);
}

function showGame(index) {
  stopTyping();
  setPhase("game");

  gameIndex = Math.max(
    0,
    Math.min(questions.length - 1, index)
  );

  videoPlaying = false;
  view = "game";

  renderGame();
  startTimer();

  window.scrollTo(0, 0);
}

function nextSlide() {
  if (slideIndex === slides.length - 1) {
    showGame(0);
  } else {
    showSlide(slideIndex + 1);
  }
}

function previousSlide() {
  if (slideIndex === 0) {
    showHome();
  } else {
    showSlide(slideIndex - 1);
  }
}

function nextGame() {
  if (grades[gameIndex] === null) return;

  if (gameIndex === questions.length - 1) {
    showFinal();
  } else {
    showGame(gameIndex + 1);
  }
}

function previousGame() {
  if (gameIndex === 0) {
    showSlide(slides.length - 1);
  } else {
    showGame(gameIndex - 1);
  }
}

/* ======================================
   СЛАЙД БАТЫРМАЛАРЫ
====================================== */

function slideButtons() {
  return `
    <div class="controls">

      <button class="btn"
              onclick="previousSlide()">
        ← Артқа
      </button>

      <button class="btn primary"
              onclick="nextSlide()">

        ${slideIndex === slides.length - 1
          ? "Ойынға өту →"
          : "Келесі бет →"}

      </button>

    </div>
  `;
}

/* ======================================
   СЛАЙДТАРДЫ ШЫҒАРУ
====================================== */

function renderSlide() {
  const slide = slides[slideIndex];

  let content = "";

  if (slide.type === "speech") {

    content = `
      <section class="card speech-card">

        <span class="presenter">
          ✦ ТАҚЫРЫПТЫ ТҮСІНДІРУ
        </span>

        <h2>${slide.title}</h2>

        <div id="typedText"
             class="speech-text"></div>

        <div class="actions">

          <button class="btn"
                  id="showText"
                  onclick="showFullText()">
            Мәтінді толық ашу
          </button>

        </div>

      </section>
    `;
  }

  if (slide.type === "gallery") {

    content = `
      <div class="photo-grid">

        ${slide.images.map((src, i) => `
          <div class="photo" style="--i:${i}">

            <img src="${src}"
                 alt="Табиғат суреті ${i + 1}"
                 loading="eager"
                 data-retry="0"
                 onerror="photoError(this)">

          </div>
        `).join("")}

      </div>
    `;
  }

  if (slide.type === "video") {

    const video = slide.video;

    const player = videoPlaying
      ? `
        <iframe
          src="https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0"
          title="${video.title}"
          allow="autoplay;encrypted-media;picture-in-picture"
          allowfullscreen>
        </iframe>
      `
      : `
        <div class="video-placeholder">
          <b>▶</b>
          <h2>${video.title}</h2>
          <p>Бейнематериалды бастау</p>
        </div>
      `;

    content = `
      <section class="card video-card">

        <div class="note">
          <strong>БЕЙНЕРОЛИККЕ КІРІСПЕ</strong>
          <p>${video.intro}</p>
        </div>

        <div class="video-screen">
          ${player}
        </div>

        <div class="actions">

          <button class="btn primary"
                  onclick="toggleVideo()">
            ${videoPlaying
              ? "■ Тоқтату"
              : "▶ Видеоны бастау"}
          </button>

          <a class="btn"
             href="https://www.youtube.com/watch?v=${video.id}"
             target="_blank"
             rel="noopener noreferrer">
            YouTube-та ашу
          </a>

        </div>

        <div class="note">
          <strong>ҚОРЫТЫНДЫ</strong>
          <p>${video.outro}</p>
        </div>

      </section>
    `;
  }

  app.innerHTML = `
    <div class="page-enter">

      ${slide.type === "gallery" ? "" : `
        <div class="row">

          <div>
            <div class="eyebrow">
              ТАЗА ҚАЗАҚСТАН
            </div>

            <h1>${slide.title}</h1>
          </div>

          <span class="chip">
            ${slideIndex + 1} / ${slides.length}
          </span>

        </div>
      `}

      ${progress(slideIndex + 1, slides.length)}

      ${content}

      ${slideButtons()}

    </div>
  `;

  if (slide.type === "speech") {
    typeText(slide.text);
  }
}

function toggleVideo() {
  videoPlaying = !videoPlaying;
  renderSlide();
}

/* ======================================
   КОМАНДАЛАРДЫҢ ҰПАЙЫ
====================================== */

function getScore(teamIndex) {
  return grades.reduce((total, grade, index) => {

    if (
      index % teams.length === teamIndex &&
      grade !== null
    ) {
      return total + grade;
    }

    return total;

  }, 0);
}

function getAnswered(teamIndex) {
  return grades.filter((grade, index) =>
    index % teams.length === teamIndex &&
    grade !== null
  ).length;
}

function renderTeams(activeIndex) {
  return `
    <div class="team-board">

      ${teams.map((name, index) => `
        <section class="card team
          ${index === activeIndex ? "active" : ""}">

          <div>
            <small>
              ${index + 1}-КОМАНДА ·
              ${getAnswered(index)}/5
            </small>

            <strong>${name}</strong>
          </div>

          <span class="team-score">
            ${getScore(index)}
          </span>

        </section>
      `).join("")}

    </div>
  `;
}

/* ======================================
   ОЙЫНДЫ КӨРСЕТУ
====================================== */

function renderGame() {
  const q = questions[gameIndex];
  const team = gameIndex % teams.length;

  const isRevealed = revealed[gameIndex];
  const grade = grades[gameIndex];

  app.innerHTML = `
    <div class="page-enter">

      <div class="row">

        <div>
          <div class="eyebrow">
            3 КОМАНДА · АУЫЗША САЙЫС
          </div>

          <h1>Эко ой додасы</h1>
        </div>

        <span class="chip">
          ${gameIndex + 1} / ${questions.length}
        </span>

      </div>

      ${renderTeams(team)}

      ${progress(gameIndex + 1, questions.length)}

      <div class="game-grid">

        <section class="card">

          <span class="chip">
            ОРТАША ДЕҢГЕЙ
          </span>

          <h2>${q.title}</h2>

          <p class="question">
            ${q.question}
          </p>

          <p class="hint">
            Команда жауабын ауызша түсіндіреді.
            Содан кейін үлгі жауап ашылады.
          </p>

          ${!isRevealed ? `
            <button class="btn primary"
                    style="width:100%"
                    onclick="revealAnswer()">
              👁 Жауапты көру
            </button>
          ` : `

            <div class="answer-card">
              <h3>✓ Үлгі жауап</h3>

              <p>${q.answer}</p>

              <button class="btn"
                      onclick="hideAnswer()">
                Жауапты жасыру
              </button>
            </div>

          `}

          ${isRevealed || grade !== null ? `
            <h3>Ұпай қою</h3>

            <div class="grades">

              ${pointOptions.map(n => `
                <button class="grade
                  ${grade === n ? "selected" : ""}"
                  aria-pressed="${grade === n}"
                  onclick="setGrade(${n})">
                  ${n}
                </button>
              `).join("")}

            </div>
          ` : ""}

          ${grade !== null ? `
            <div class="feedback">
              ✓ ${teams[team]} —
              ${grade} ұпай
            </div>
          ` : ""}

        </section>

        <aside class="card">

          <div class="eyebrow">
            КЕЗЕКТЕГІ КОМАНДА
          </div>

          <h2>${team + 1}-КОМАНДА</h2>

          <h3>${teams[team]}</h3>

          <p class="hint">
            Әр командаға 5 сұрақ беріледі.
            Әр жауап жеке бағаланады.
          </p>

          <div class="rubric">
            <strong>Бағалау өлшемі</strong><br>
            55–65 — жауап толық емес<br>
            70–80 — негізгі ой дұрыс<br>
            85–95 — дәлел мен мысал бар<br>
            100 — толық әрі нақты жауап
          </div>

          <h3>
            Жалпы ұпай: ${getScore(team)}
          </h3>

          <p>
            Бағаланғаны:
            ${getAnswered(team)} / 5
          </p>

        </aside>

      </div>

      <div class="controls">

        <button class="btn"
                onclick="previousGame()">
          ← Артқа
        </button>

        <button class="btn primary"
                onclick="nextGame()"
                ${grade === null ? "disabled" : ""}>

          ${gameIndex === questions.length - 1
            ? "Қорытынды →"
            : "Келесі сұрақ →"}

        </button>

      </div>

    </div>
  `;

  window.scrollTo(0, 0);
}

/* ======================================
   ЖАУАПТЫ АШУ / ЖАСЫРУ
====================================== */

function revealAnswer() {
  revealed[gameIndex] = true;
  saveProgress();
  renderGame();
}

function hideAnswer() {
  revealed[gameIndex] = false;
  saveProgress();
  renderGame();
}

/* ======================================
   ҰПАЙ ҚОЮ
====================================== */

function setGrade(value) {
  if (!pointOptions.includes(value)) return;

  if (
    !revealed[gameIndex] &&
    grades[gameIndex] === null
  ) {
    return;
  }

  grades[gameIndex] = value;

  saveProgress();
  renderGame();
}

/* ======================================
   ҚОРЫТЫНДЫ
====================================== */

function showFinal() {
  stopTyping();
  pauseTimer();

  view = "final";
  renderFinal();
}

function renderFinal() {
  const scores = teams.map(
    (_, index) => getScore(index)
  );

  const maxScore = Math.max(...scores);

  const evaluated = grades.filter(
    grade => grade !== null
  ).length;

  const winners = teams.filter(
    (_, index) => scores[index] === maxScore
  );

  const winnerText =
    evaluated === 0
      ? "Әзірге бағаланған жауап жоқ"
      : evaluated < questions.length
        ? "Ағымдағы үздік нәтиже: " + winners.join(", ")
        : "Үздік нәтиже: " + winners.join(", ");

  app.innerHTML = `
    <section class="final page-enter">

      <div class="eyebrow">
        ТАЗА ҚАЗАҚСТАН · ҚОРЫТЫНДЫ
      </div>

      <h1>
        ТАЗА ТАБИҒАТ —<br>
        <span>ЖАРҚЫН БОЛАШАҚ!</span>
      </h1>

      <h2>${winnerText}</h2>

      <div class="results">

        ${teams.map((name, index) => `
          <div class="card">

            <span class="chip">
              ${index + 1}-КОМАНДА
            </span>

            <h3>${name}</h3>

            <b>${getScore(index)}</b>

            <p>
              ${getAnswered(index)} / 5
              сұрақ бағаланды
            </p>

          </div>
        `).join("")}

      </div>

      <section class="card">

        <h2>Сабақтың қорытындысы</h2>

        <p style="font-size:21px;line-height:1.8">
          Қоршаған ортаны қорғау —
          әр адамның ортақ жауапкершілігі.

          Табиғатты таза ұстау,
          суды үнемдеу және
          ресурстарды ұқыпты пайдалану
          болашақ үшін маңызды.
        </p>

        <h2>Назарларыңызға рақмет!</h2>

        <h1>Сау болыңыздар!</h1>

        <div class="actions"
             style="justify-content:center">

          <button class="btn primary"
                  onclick="showHome()">
            Басты бет
          </button>

          <button class="btn"
                  onclick="restartGame()">
            Ойынды қайта бастау
          </button>

        </div>

        <h3 style="color:#208449;margin-top:35px">
          BY DARKHAN
        </h3>

      </section>

    </section>
  `;

  window.scrollTo(0, 0);
}

/* ======================================
   ОЙЫНДЫ ҚАЙТА БАСТАУ
====================================== */

function restartGame() {
  if (!confirm(
    "Барлық ұпайды өшіріп, ойынды қайта бастаймыз ба?"
  )) {
    return;
  }

  grades = Array(15).fill(null);
  revealed = Array(15).fill(false);

  saveProgress();
  pauseTimer();

  remaining.game = 600;
  phase = "game";

  updateTimer();
  showGame(0);
}

/* ======================================
   ПЕРНЕТАҚТА БАСҚАРУ
====================================== */

document.addEventListener("keydown", event => {

  const tag = document.activeElement?.tagName;

  if (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT"
  ) {
    return;
  }

  if (view === "slide") {

    if (event.key === "ArrowRight") {
      nextSlide();
    }

    if (event.key === "ArrowLeft") {
      previousSlide();
    }
  }

  if (view === "game") {

    if (
      event.key === "ArrowRight" &&
      grades[gameIndex] !== null
    ) {
      nextGame();
    }

    if (event.key === "ArrowLeft") {
      previousGame();
    }
  }

});

/* ======================================
   САЙТТЫ ІСКЕ ҚОСУ
====================================== */

loadProgress();
updateTimer();
showHome();
