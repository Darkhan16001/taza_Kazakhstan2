
"use strict";

/* =====================================
   ТАЗА ҚАЗАҚСТАН
   BY DARKHAN
   15 СЛАЙД + 15 СҰРАҚ
===================================== */

const app = document.getElementById("app");

const natureImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85";

const photos = [
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1497436072909-f5e4be235be5?auto=format&fit=crop&w=1100&q=85"
];

/* =====================================
   3 ВИДЕО
===================================== */

/*
   Алғашқы екі сілтеме бұрынғы
   Таза Қазақстан нұсқасынан алынған.

   Үшінші бейне сыртқы сайтта орналасқан.

   Видеолардың қолжетімділігі мен дыбыс
   тілі алдын ала тексерілуі қажет.
*/

const videos = [
  {
    type: "youtube",
    id: "wPCDk-oJnhU",
    title: "Таза Қазақстан бастамасы",
    intro: "Табиғатты қорғау мен экологиялық тазалық туралы бейнероликті тамашалаймыз.",
    outro: "Тазалық мәдениеті адамдардың күнделікті жауапты әрекетінен басталады.",
    url: "https://www.youtube.com/shorts/wPCDk-oJnhU"
  },
  {
    type: "youtube",
    id: "pNhJXlpoF_c",
    title: "Елімізді бірге таза етейік!",
    intro: "Қоғамдық тазалық бастамасына қатысудың маңызына назар аударамыз.",
    outro: "Ортақ кеңістікті таза ұстауға әр адам үлес қоса алады.",
    url: "https://www.youtube.com/shorts/pNhJXlpoF_c"
  },
  {
    type: "mp4",
    src: "https://shuqa.kz/wp-content/uploads/2026/10/whatsapp-video-2026-10-29-at-16.34.27.mp4",
    title: "Тазалық пен тәртіп",
    intro: "Сабақтың соңғы бейнебөлімінде тазалық пен жауапкершіліктің байланысын қарастырамыз.",
    outro: "Табиғатты қорғау — болашақ үшін маңызды ортақ іс.",
    url: "https://shuqa.kz/taza-aza-stan-tazaly-pen-t-rtipti-bastauy-4/"
  }
];

/* =====================================
   15 СЛАЙД
===================================== */

const slides = [
  {
    type: "speech",
    title: "Таза Қазақстан дегеніміз не?",
    text: `Қайырлы күн, құрметті ұстаздар және студенттер!

Бүгінгі ашық тәрбие сағатымыздың тақырыбы — «Таза Қазақстан».

«Таза Қазақстан» — қоршаған ортаны қорғауға, елді мекендердің тазалығын сақтауға және экологиялық мәдениетті қалыптастыруға бағытталған бастама.

Тазалық тек қоқыс жинаумен шектелмейді.

Ол табиғи ресурстарды үнемдеу, қоғамдық орындарды таза ұстау, табиғатқа қамқорлық жасау және айналамыздағы адамдарға үлгі болу сияқты әрекеттерден басталады.

Әр азамат өз ісіне жауапкершілікпен қараса, қоғамдағы тазалық мәдениеті де дамиды.

Бүгін біз табиғат, су, ауа, қалдықтар және экологиялық жауапкершілік туралы сөйлесеміз.`
  },

  {
    type: "gallery",
    title: "Қазақстан табиғаты",
    images: [photos[0],photos[2],photos[4]]
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

Экологиялық мәдениеті жоғары адам табиғатқа зиян келтірмеуге және табиғи ресурстарды ұқыпты пайдалануға ұмтылады.

Мысалы, орманға немесе тауға демалуға барғаннан кейін қалдықтарды жинап кету керек.

Сондай-ақ өсімдіктерді зақымдамау, табиғи аумақтардағы ережелерді сақтау маңызды.

Экологиялық мәдениетті қалыптастыру тек үлкен акциялар арқылы жүзеге аспайды.

Күнделікті жақсы әдеттер де үлкен маңызға ие.`
  },

  {
    type: "gallery",
    title: "Орман мен жасыл желек",
    images: [photos[1],photos[6],photos[8]]
  },

  {
    type: "speech",
    title: "Қалдықтарды сұрыптау",
    text: `Қалдықтарды сұрыптау — әртүрлі материалдарды бөлек жинау үдерісі.

Қағаз, пластик, шыны және металл қалдықтары жергілікті қабылдау талаптарына сай бөлек жиналуы мүмкін.

Бұл қайта өңдеуге жарамды материалдарды ажыратуды жеңілдетеді.

Дегенмен барлық қалдық бірдей қайта өңделмейді.

Сондықтан артық тұтынуды азайту және жарамды заттарды қайта пайдалану маңызды.

Колледжде қалдықтарды дұрыс сұрыптау туралы түсіндіру жұмыстарын ұйымдастыруға болады.`
  },

  {
    type: "gallery",
    title: "Таза табиғат",
    images: [photos[3],photos[5],photos[10]]
  },

  {
    type: "speech",
    title: "Су — тіршілік көзі",
    text: `Су — адам, жануарлар және өсімдіктер үшін қажет табиғи ресурс.

Суды үнемдеу күнделікті әрекеттерден басталады.

Қажетсіз ағып тұрған кранды жабу, су ақауы туралы жауапты қызметкерге хабарлау және суды тиімді пайдалану маңызды.

Өзендер мен көлдердің ластануына жол бермеу қажет.

Су ресурстарын қорғау — болашақ ұрпақ алдындағы жауапкершіліктің көрінісі.

Табиғатқа құрмет суды дұрыс пайдаланудан да байқалады.`
  },

  {
    type: "gallery",
    title: "Өзендер мен көлдер",
    images: [photos[7],photos[9],photos[2]]
  },

  {
    type: "video",
    title: "Елімізді бірге таза етейік",
    video: videos[1]
  },

  {
    type: "speech",
    title: "Таза ауа — ортақ байлық",
    text: `Ауаның тазалығы адам денсаулығы мен өмір сапасына әсер етеді.

Қалаларда ауаның ластануына көлік қозғалысы, өндіріс және басқа факторлар ықпал етуі мүмкін.

Қоғамдық көлікті пайдалану, энергияны үнемдеу және экологиялық талаптарды сақтау қоршаған ортаны қорғауға көмектеседі.

Жасыл желекті сақтау және табиғи аумақтарды қорғау да маңызды.

Әр адам қоршаған ортаға саналы көзқарас қалыптастыру арқылы ортақ іске үлес қоса алады.`
  },

  {
    type: "gallery",
    title: "Жасыл болашақ",
    images: [photos[11],photos[3],photos[6]]
  },

  {
    type: "speech",
    title: "Жасыл колледж",
    text: `Экологиялық мәдениет өзіміз оқитын колледжден басталады.

Аудиторияны таза ұстау, қағазды үнемдеу, электр энергиясын қажетсіз пайдаланбау және ортақ мүлікті күтіп сақтау — қарапайым әрі маңызды әрекеттер.

Колледжде экологиялық ақпараттық бұрыш ұйымдастыруға болады.

Студенттер тазалық пен көгалдандыру шараларына қатыса алады.

Баспа жұмыстарында материалды алдын ала тексеру артық қағаз шығынын азайтуға көмектеседі.

Таза колледж — студенттердің ортақ жауапкершілігінің нәтижесі.`
  },

  {
    type: "gallery",
    title: "Таза болашақ",
    images: [photos[4],photos[10],photos[0]]
  },

  {
    type: "video",
    title: "Тазалық пен тәртіп",
    video: videos[2]
  }
];

/* =====================================
   КОМАНДАЛАР
===================================== */

const teams = [
  "Жасыл әлем",
  "Таза табиғат",
  "Эко болашақ"
];

/* =====================================
   15 СҰРАҚ ЖӘНЕ ҮЛГІ ЖАУАП
===================================== */

const questions = [
  {
    title: "Пластикті азайту",
    question: "Колледжде бір реттік пластик бөтелкелерді азайту үшін қандай екі нақты ұсыныс жасар едіңдер?",
    answer: `Біріншіден, көп рет қолданылатын су бөтелкелерін пайдалануға болады.

Екіншіден, қауіпсіз ауызсу құюға арналған орын ұйымдастыруды ұсынуға болады.

Бұл бір реттік пластик бөтелкелердің қолданылуын азайтады.`
  },
  {
    title: "Қалдықтарды сұрыптау",
    question: "Қағаз, пластик және шыны қалдықтарын бөлек жинаудың артықшылықтарын түсіндіріңдер.",
    answer: `Материалдарды бөлек жинау олардың қайта өңдеуге жарамды бөлігін ажыратуға көмектеседі.

Бұл материалдардың басқа қалдықтармен араласуын азайтады.

Жергілікті қабылдау талаптарын сақтау маңызды.`
  },
  {
    title: "Колледждегі мәселе",
    question: "Колледжде сұрыптау жәшіктері бар, бірақ студенттер оларды дұрыс қолданбайды. Мәселені қалай шешуге болады?",
    answer: `Жәшіктерге түсінікті белгілер орнату керек.

Студенттерге қысқаша түсіндіру өткізіп, қандай қалдықты қайда салу қажеттігін көрсетуге болады.

Сұрыпталған қалдықтарды бөлек алып кету де ұйымдастырылуы қажет.`
  },
  {
    title: "Энергияны үнемдеу",
    question: "Сабақтан кейін жарық пен компьютерлер қосулы қалды. Мұндай жағдайды қалай болдырмауға болады?",
    answer: `Сабақ аяқталған соң қауіпсіз өшіруге болатын құрылғыларды тексеру тәртібін енгізуге болады.

Жауапты кезекші белгілеп, тексеру тізімін дайындау пайдалы.

Барлық әрекет қауіпсіздік ережелеріне сай орындалуы тиіс.`
  },
  {
    title: "Табиғаттағы демалыс",
    question: "Демалыстан кейін достарың табиғатта қоқыс қалдырды. Қандай әрекет дұрыс болады?",
    answer: `Қоқыстың табиғатқа зияны туралы түсіндіру қажет.

Қалдықтарды бірге жинап, тиісті орынға жеткізу ұсынылады.

Мәселені өзара сыйластықпен шешу маңызды.`
  },
  {
    title: "Ағаш отырғызу",
    question: "Ағаш отырғызғаннан кейін оның жақсы өсуі үшін қандай жұмыстар жүргізілуі керек?",
    answer: `Ағаш түріне және жергілікті климатқа сәйкес суару мен күтім жасау қажет.

Көшеттің жағдайын бақылап, оны зақымданудан қорғау маңызды.

Тұрақты күтімге жауапты адамдар белгіленуі тиіс.`
  },
  {
    title: "Қаланың ауасы",
    question: "Қаланың ауасын таза ұстауға студенттер қалай үлес қоса алады?",
    answer: `Мүмкіндікке қарай қоғамдық көлікті пайдалану, жаяу жүру және электр энергиясын үнемдеу пайдалы.

Экологиялық бастамаларға қатысу да қоршаған ортаны қорғау мәдениетін арттырады.`
  },
  {
    title: "Тұрақты тазалық",
    question: "Колледждегі тазалық шаралары тұрақты болуы үшін қандай жоспар жасау қажет?",
    answer: `Жұмыс кестесін жасап, жауапты адамдарды белгілеуге болады.

Қажетті құралдар қамтамасыз етіліп, қалдықтарды шығару ұйымдастырылуы тиіс.

Нәтиже жүйелі түрде бақылануы керек.`
  },
  {
    title: "Өзенді қорғау",
    question: "Өзен жағасында қоқыс жиі жиналады. Осы мәселенің ұзақ мерзімді шешімін ұсыныңдар.",
    answer: `Қоқыс жәшіктерін қолайлы жерге орнатып, тұрақты босату қажет.

Ақпараттық белгілер қойып, түсіндіру жұмыстарын жүргізуге болады.

Жауапты ұйымдармен бірлескен бақылау пайдалы.`
  },
  {
    title: "Қайта пайдалану",
    question: "Затты қайта пайдалану мен қайта өңдеудің айырмашылығы қандай? Мысал келтіріңдер.",
    answer: `Қайта пайдалану — затты өңдемей бірнеше рет қолдану.

Мысал: көп рет қолданылатын сөмке.

Қайта өңдеу — қалдық материалдан жаңа шикізат немесе өнім алу.

Мысал: қағаз қалдықтарын қайта өңдеу.`
  },
  {
    title: "Экологиялық тауар",
    question: "Өнім қаптамасында «экологиялық таза» деп жазылған. Мұндай ақпаратты қалай тексеруге болады?",
    answer: `Өндіруші туралы мәліметтерді, өнім құрамын және тиісті сертификаттарды қарастыру қажет.

Жарнамалық сөзден гөрі нақты тексерілетін дәлелдерге сүйенген дұрыс.`
  },
  {
    title: "Артық тұтыну",
    question: "Жұмыс істеп тұрған затты жиі жаңасына ауыстыру қоршаған ортаға қалай әсер етуі мүмкін?",
    answer: `Жаңа заттарды өндіруге шикізат пен энергия қажет.

Ескі заттар қалдыққа айналуы мүмкін.

Сондықтан жөндеу, қайта пайдалану және қажетсіз сатып алуды азайту пайдалы.`
  },
  {
    title: "Мамандық және экология",
    question: "Болашақ маман ретінде қағаз бен электр энергиясын қалай үнемдер едіңдер?",
    answer: `Баспа саласында макеттерді алдын ала мұқият тексеру қате басылымдарды азайтады.

Материалдарды жоспарлап пайдалану және құрылғыларды ережеге сай қолдану маңызды.

Бұл кәсіби әрі экологиялық жауапкершілікті көрсетеді.`
  },
  {
    title: "Суды үнемдеу",
    question: "Колледжде кран ақауланып, су үздіксіз ағып тұр. Қандай қауіпсіз әрекет жасау керек?",
    answer: `Ақау туралы жауапты қызметкерге хабарлау қажет.

Жөндеуді тиісті маман орындауы керек.

Жабдықты тұрақты тексеру осындай жағдайлардың алдын алуға көмектеседі.`
  },
  {
    title: "Экологиялық жоба",
    question: "Колледжде бір айда іске асыруға болатын экологиялық жоба ұсыныңдар. Оның мақсаты, үш қадамы және нәтижесі қандай?",
    answer: `Мысал: «Қағазды үнемдейтін колледж».

Мақсат — артық қағаз шығынын азайту.

1. Қағаздың қайда көп жұмсалатынын анықтау.

2. Қажетсіз басылымдарды қысқарту жолдарын ұсыну.

3. Студенттерге түсіндіру жұмысын өткізу.

Нәтиже қағаз шығынын жобадан бұрынғы кезеңмен салыстыру арқылы бағаланады.`
  }
];

/* =====================================
   ҰПАЙ САҚТАУ
===================================== */

const gradesAllowed = [
  55,60,65,70,75,80,85,90,95,100
];

const SAVE_KEY = "taza-darkhan-right-panel-v1";

let grades = Array(15).fill(null);
let revealed = Array(15).fill(false);

function saveProgress() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({grades,revealed})
    );
  } catch(e) {}
}

function loadProgress() {
  try {
    const data = JSON.parse(
      localStorage.getItem(SAVE_KEY)
    );

    if (!data) return;

    if (
      Array.isArray(data.grades) &&
      data.grades.length === 15
    ) {
      grades = data.grades.map(value =>
        gradesAllowed.includes(value)
          ? value
          : null
      );
    }

    if (
      Array.isArray(data.revealed) &&
      data.revealed.length === 15
    ) {
      revealed = data.revealed.map(Boolean);
    }

    grades.forEach((value,index) => {
      if (value !== null) revealed[index] = true;
    });
  } catch(e) {}
}

/* =====================================
   БЕТ КҮЙІ
===================================== */

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

/* =====================================
   ТАЙМЕР
===================================== */

function formatTime(n) {
  const m = Math.floor(n / 60);
  const s = n % 60;

  return (
    String(m).padStart(2,"0") + ":" +
    String(s).padStart(2,"0")
  );
}

function updateTimer() {
  document.getElementById("clock").textContent =
    formatTime(remaining[phase]);

  document.getElementById("phaseLabel").textContent =
    phase === "lesson" ? "ТҮСІНДІРУ" : "ОЙЫН";

  document.getElementById("timerButton").textContent =
    timerRunning ? "Ⅱ" : "▶";
}

function startTimer() {
  if (timerRunning) return;
  if (remaining[phase] <= 0) return;
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

function switchPhase(next) {
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
},250);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen?.()
      .catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* =====================================
   МӘТІН АНИМАЦИЯСЫ
===================================== */

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
    return;
  }

  el.textContent = "";
  el.classList.add("typing");

  const start = performance.now();

  function frame(now) {
    if (!el.isConnected) return;

    const count = Math.min(
      fullText.length,
      Math.floor((now-start)/1000*130)
    );

    el.textContent = fullText.slice(0,count);

    if (count < fullText.length) {
      typingFrame = requestAnimationFrame(frame);
    } else {
      typingFrame = null;
      el.classList.remove("typing");
    }
  }

  typingFrame = requestAnimationFrame(frame);
}

function showFullText() {
  stopTyping();

  const el = document.getElementById("typedText");

  if (el) {
    el.textContent = fullText;
    el.classList.remove("typing");
  }
}

/* =====================================
   СУРЕТ ЖҮКТЕУ
===================================== */

function photoError(img) {
  const backups = [
    photos[10],
    photos[4],
    photos[1]
  ];

  const attempt = Number(img.dataset.retry || 0);

  if (attempt >= backups.length) {
    img.onerror = null;
    img.alt = "Сурет жүктелмеді";
    return;
  }

  img.dataset.retry = String(attempt + 1);
  img.src = backups[attempt];
}

/* =====================================
   ОҢ ЖАҚТАҒЫ НАВИГАЦИЯ
===================================== */

function updateRail() {
  const back = document.getElementById("backButton");
  const next = document.getElementById("nextButton");

  back.disabled = view === "home" || view === "final";

  next.disabled =
    view === "final" ||
    (view === "game" && grades[gameIndex] === null);

  if (view === "home") {
    next.disabled = false;
  }

  const nextText = next.querySelector("small");

  if (view === "home") {
    nextText.textContent = "Бастау";
  } else if (view === "slide" && slideIndex === 14) {
    nextText.textContent = "Ойынға";
  } else if (view === "game" && gameIndex === 14) {
    nextText.textContent = "Нәтиже";
  } else {
    nextText.textContent = "Келесі";
  }
}

function goNext() {
  if (view === "home") {
    showSlide(0);
  } else if (view === "slide") {
    nextSlide();
  } else if (view === "game") {
    nextGame();
  }
}

function goBack() {
  if (view === "slide") {
    previousSlide();
  } else if (view === "game") {
    previousGame();
  }
}

/* =====================================
   БЕТТЕРДІ БАСҚАРУ
===================================== */

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

          Бірінші курс студенттеріне арналған
          интерактивті ашық тәрбие сағаты.
        </p>

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
          alt="Қазақстан табиғаты"
          data-retry="0"
          onerror="photoError(this)">

        <div class="hero-quote">
          Табиғатты қорғайық!<br>
          Болашақты сақтайық!
        </div>
      </div>
    </section>
  `;

  updateRail();
  window.scrollTo(0,0);
}

function showSlide(index) {
  stopTyping();
  switchPhase("lesson");

  slideIndex = Math.max(
    0,
    Math.min(slides.length-1,index)
  );

  view = "slide";
  videoPlaying = false;

  renderSlide();
  startTimer();

  window.scrollTo(0,0);
}

function showGame(index) {
  stopTyping();
  switchPhase("game");

  gameIndex = Math.max(
    0,
    Math.min(questions.length-1,index)
  );

  view = "game";
  videoPlaying = false;

  renderGame();
  startTimer();

  window.scrollTo(0,0);
}

function nextSlide() {
  if (slideIndex === slides.length-1) {
    showGame(0);
  } else {
    showSlide(slideIndex+1);
  }
}

function previousSlide() {
  if (slideIndex === 0) {
    showHome();
  } else {
    showSlide(slideIndex-1);
  }
}

function nextGame() {
  if (grades[gameIndex] === null) return;

  if (gameIndex === questions.length-1) {
    showFinal();
  } else {
    showGame(gameIndex+1);
  }
}

function previousGame() {
  if (gameIndex === 0) {
    showSlide(slides.length-1);
  } else {
    showGame(gameIndex-1);
  }
}

/* =====================================
   ПРОГРЕСС
===================================== */

function progress(current,total) {
  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${100*current/total}%">
      </div>
    </div>
  `;
}

/* =====================================
   СЛАЙД БАТЫРМАЛАРЫ
===================================== */

function slideControls() {
  return `
    <div class="controls">
      <button class="btn"
              onclick="previousSlide()">
        ← Артқа
      </button>

      <button class="btn primary"
              onclick="nextSlide()">
        ${slideIndex === slides.length-1
          ? "Ойынға өту →"
          : "Келесі бет →"}
      </button>
    </div>
  `;
}

/* =====================================
   ТҮСІНДІРМЕ, СУРЕТ ЖӘНЕ ВИДЕО
===================================== */

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
          <button class="btn primary"
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
        ${slide.images.map((src,i) => `
          <div class="photo" style="--i:${i}">
            <img src="${src}"
                 alt="Табиғат суреті ${i+1}"
                 data-retry="0"
                 onerror="photoError(this)">
          </div>
        `).join("")}
      </div>
    `;
  }

  if (slide.type === "video") {
    const video = slide.video;

    let player = `
      <div class="video-poster">
        <b>▶</b>
        <h2>${video.title}</h2>
        <p>Бейнематериалды бастау</p>
      </div>
    `;

    if (videoPlaying) {
      if (video.type === "youtube") {
        player = `
          <iframe
            src="https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0"
            title="${video.title}"
            allow="autoplay;encrypted-media;picture-in-picture"
            allowfullscreen>
          </iframe>
        `;
      } else {
        player = `
          <video controls autoplay playsinline
                 style="width:100%;height:100%">
            <source src="${video.src}"
                    type="video/mp4">
            Бұл браузер видеоны қолдамайды.
          </video>
        `;
      }
    }

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
              ? "■ Видеоны тоқтату"
              : "▶ Видеоны бастау"}
          </button>

          <a class="btn"
             href="${video.url}"
             target="_blank"
             rel="noopener noreferrer">
            Бөлек ашу
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
            ${slideIndex+1} / ${slides.length}
          </span>
        </div>
      `}

      ${progress(slideIndex+1,slides.length)}
      ${content}
      ${slideControls()}
    </div>
  `;

  if (slide.type === "speech") {
    typeText(slide.text);
  }

  updateRail();
}

function toggleVideo() {
  videoPlaying = !videoPlaying;
  renderSlide();
}

/* =====================================
   КОМАНДА ҰПАЙЛАРЫ
===================================== */

function getScore(teamIndex) {
  return grades.reduce((total,value,index) => {
    if (
      index%3 === teamIndex &&
      value !== null
    ) {
      return total+value;
    }
    return total;
  },0);
}

function getAnswered(teamIndex) {
  return grades.filter((value,index) =>
    index%3 === teamIndex &&
    value !== null
  ).length;
}

function renderTeams(active) {
  return `
    <div class="team-board">
      ${teams.map((name,index) => `
        <section class="card team
          ${index === active ? "active" : ""}">

          <div>
            <small>
              ${index+1}-КОМАНДА ·
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

/* =====================================
   ОЙЫН
===================================== */

function renderGame() {
  const q = questions[gameIndex];
  const team = gameIndex%3;
  const open = revealed[gameIndex];
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
          ${gameIndex+1} / ${questions.length}
        </span>
      </div>

      ${renderTeams(team)}
      ${progress(gameIndex+1,questions.length)}

      <div class="game-layout">

        <section class="card">
          <span class="chip">
            АУЫЗША ТАПСЫРМА
          </span>

          <h2>${q.title}</h2>

          <p class="question">
            ${q.question}
          </p>

          <p class="hint">
            Команда сұрақты талқылап,
            өз жауабын ауызша түсіндіреді.
          </p>

          ${!open ? `
            <div class="actions">
              <button class="btn primary"
                      onclick="revealAnswer()">
                👁 Жауапты көру
              </button>
            </div>
          ` : `
            <div class="answer-card">
              <h3>✓ Үлгі жауап</h3>

              <p>${q.answer}</p>

              <div class="actions">
                <button class="btn"
                        onclick="hideAnswer()">
                  Жауапты жасыру
                </button>
              </div>
            </div>
          `}

          ${open || grade !== null ? `
            <h3>Ұпай қою</h3>

            <div class="grades">
              ${gradesAllowed.map(n => `
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

          <h2>${team+1}-КОМАНДА</h2>
          <h3>${teams[team]}</h3>

          <p class="hint">
            Әр команда 5 сұраққа жауап береді.
            Сұрақтар кезектесіп беріледі.
          </p>

          <div class="rubric">
            <strong>Бағалау өлшемі</strong>
            <p>55–65 — толық емес жауап</p>
            <p>70–80 — негізгі ой дұрыс</p>
            <p>85–95 — дәлел мен мысал бар</p>
            <p>100 — толық әрі нақты жауап</p>
          </div>

          <h3>
            Жалпы ұпай: ${getScore(team)}
          </h3>

          <p>
            Бағаланғаны:
            ${getAnswered(team)}/5
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
          ${gameIndex === questions.length-1
            ? "Қорытынды →"
            : "Келесі сұрақ →"}
        </button>
      </div>
    </div>
  `;

  updateRail();
  window.scrollTo(0,0);
}

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

function setGrade(value) {
  if (!gradesAllowed.includes(value)) return;
  if (!revealed[gameIndex] &&
      grades[gameIndex] === null) return;

  grades[gameIndex] = value;
  saveProgress();
  renderGame();
}

/* =====================================
   ҚОРЫТЫНДЫ
===================================== */

function showFinal() {
  pauseTimer();
  stopTyping();

  view = "final";
  renderFinal();
}

function renderFinal() {
  const scores = teams.map((_,i) => getScore(i));
  const max = Math.max(...scores);

  const winners = teams.filter(
    (_,i) => scores[i] === max
  );

  const evaluated = grades.filter(
    value => value !== null
  ).length;

  app.innerHTML = `
    <section class="final page-enter">

      <div class="eyebrow">
        ТАЗА ҚАЗАҚСТАН · ҚОРЫТЫНДЫ
      </div>

      <h1>
        ТАЗА ТАБИҒАТ —<br>
        <span>ЖАРҚЫН БОЛАШАҚ!</span>
      </h1>

      <h2>
        ${evaluated === 15
          ? "Үздік нәтиже: " + winners.join(", ")
          : evaluated > 0
            ? "Ағымдағы үздік нәтиже: " + winners.join(", ")
            : "Әзірге нәтиже жоқ"}
      </h2>

      <div class="results">

        ${teams.map((name,i) => `
          <section class="card">
            <span class="chip">
              ${i+1}-КОМАНДА
            </span>

            <h3>${name}</h3>

            <b>${getScore(i)}</b>

            <p>
              ${getAnswered(i)}/5
              сұрақ бағаланды
            </p>
          </section>
        `).join("")}

      </div>

      <section class="card">
        <h2>Сабақтың қорытындысы</h2>

        <p class="question">
          Табиғатты қорғау —
          әрқайсымыздың ортақ міндетіміз.
        </p>

        <p class="question">
          Таза қоршаған орта —
          жарқын болашақтың негізі.
        </p>

        <h2>Назарларыңызға рақмет!</h2>
        <h1>Сау болыңыздар!</h1>

        <div class="actions">
          <button class="btn"
                  onclick="restartGame()">
            Ойынды қайта бастау
          </button>

          <button class="btn primary"
                  onclick="showHome()">
            Басты бет
          </button>
        </div>

        <h3 style="margin-top:35px">
          BY DARKHAN
        </h3>
      </section>
    </section>
  `;

  updateRail();
  window.scrollTo(0,0);
}

function restartGame() {
  if (!confirm(
    "Барлық ұпайды өшіріп, ойынды қайта бастаймыз ба?"
  )) return;

  pauseTimer();

  grades = Array(15).fill(null);
  revealed = Array(15).fill(false);

  remaining.game = 600;

  saveProgress();
  showGame(0);
}

/* =====================================
   ПЕРНЕТАҚТАМЕН БАСҚАРУ
===================================== */

document.addEventListener("keydown",event => {
  const tag = document.activeElement?.tagName;

  if (["INPUT","TEXTAREA","SELECT"].includes(tag)) {
    return;
  }

  if (event.key === "ArrowRight") {
    if (
      view === "home" ||
      view === "slide" ||
      view === "game"
    ) {
      goNext();
    }
  }

  if (event.key === "ArrowLeft") {
    goBack();
  }
});

/* =====================================
   САЙТТЫ БАСТАУ
===================================== */

loadProgress();
updateTimer();
showHome();
