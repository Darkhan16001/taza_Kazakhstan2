
"use strict";

/* ========================================
   ТАЗА ҚАЗАҚСТАН
   BY DARKHAN
   15 СЛАЙД + 15 АУЫЗША СҰРАҚ
======================================== */

const app = document.getElementById("app");
const scene = document.getElementById("scene");

/* ЖАСЫЛ ТАБИҒАТ */

const naturePhoto =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85";

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

/* ========================================
   ҚАЗАҚША ЭКОЛОГИЯЛЫҚ РОЛИКТЕР

   KÓKSHE телеарнасының
   "Таза Қазақстан" роликтері.

   Ұзақтығы автоматты кесілмейді.
======================================== */

const videos = [
  {
    id: "Qypp5k7qLpw",
    name: "Таза Қазақстан — әлеуметтік ролик",
    source: "KÓKSHE · Қазақша ролик 1"
  },
  {
    id: "lRPGEsdNC-U",
    name: "Табиғатты қорғау — ортақ міндет",
    source: "KÓKSHE · Қазақша ролик 2"
  },
  {
    id: "j0f5VbLqLtk",
    name: "Таза Қазақстан — тазалық мәдениеті",
    source: "KÓKSHE · Таза Қазақстан ролигі"
  }
];

/* ========================================
   15 ТАНЫСТЫРЫЛЫМ БЕТІ
======================================== */

const slides = [

  /* 1-БЕТ: ТҮСІНДІРМЕ */
  {
    type: "speech",
    theme: "meadow",
    title: "Таза Қазақстан дегеніміз не?",
    text: `Қайырлы күн, құрметті ұстаздар және студенттер!

Бүгінгі ашық тәрбие сағатымыздың тақырыбы — «Таза Қазақстан».

Таза Қазақстан — қоршаған ортаны қорғауға, туған жерді таза ұстауға және экологиялық мәдениетті дамытуға бағытталған қоғамдық бастама.

Тазалық тек қоқыс жинаумен шектелмейді. Ол суды үнемдеуден, табиғатқа жанашырлық көрсетуден және ортақ кеңістікті күтіп ұстаудан басталады.

Бүгін біз осы әрекеттердің маңызын түсініп, табиғатты сақтауға қалай үлес қоса алатынымызды талқылаймыз.`
  },

  /* 2-БЕТ: ТЕК 3 СУРЕТ */
  {
    type: "gallery",
    theme: "forest",
    title: "Қазақстанның әсем табиғаты",
    images: [
      photos[0],
      photos[2],
      photos[3]
    ]
  },

  /* 3-БЕТ: ВИДЕО */
  {
    type: "video",
    theme: "forest",
    title: "Таза Қазақстан бастамасы",
    video: videos[0],

    intro: `Құрметті студенттер, қазір табиғатты қорғауға арналған бейнероликті тамашалаймыз.

Көріп отырып, адам өзінің туған жеріне қандай қамқорлық көрсете алатынын ойланайық.`,

    after: `Таза Қазақстан — әр адамның ортақ ісі.

Табиғатты сақтау үшін үлкен өзгерісті күтудің қажеті жоқ. Күнделікті қарапайым әрекеттердің өзі маңызды.`
  },

  /* 4-БЕТ: ТҮСІНДІРМЕ */
  {
    type: "speech",
    theme: "meadow",
    title: "Экологиялық мәдениет",
    text: `Экологиялық мәдениет — адамның табиғатқа саналы әрі жауапкершілікпен қарауы.

Мысалы, саябақта демалғаннан кейін қалдықтарды жинап кету — экологиялық мәдениеттің қарапайым көрінісі.

Табиғатты қорғау тек экологтардың міндеті емес.

Әр адам суды, энергияны және басқа ресурстарды ұқыпты пайдалану арқылы қоршаған ортаға оң әсер ете алады.

Ең маңыздысы — пайдалы әдеттерді күнделікті өмірімізге енгізу.`
  },

  /* 5-БЕТ: СУРЕТ */
  {
    type: "gallery",
    theme: "flower",
    title: "Табиғатты аялау",
    images: [
      photos[1],
      photos[4],
      photos[6]
    ]
  },

  /* 6-БЕТ: ТҮСІНДІРМЕ */
  {
    type: "speech",
    theme: "sun",
    title: "Қалдықтарды сұрыптау",
    text: `Қалдықтарды сұрыптау — әртүрлі материалдарды бөлек жинау.

Мысалы, қағаз, пластик, шыны және металл қалдықтарын тиісті қабылдау ережелеріне сай бөлек жинауға болады.

Бұл қайта өңдеуге жарамды материалдардың басқа қалдықтармен араласып кетуін азайтады.

Бірақ барлық қалдықты бірдей қайта өңдеу мүмкін емес.

Сондықтан ең алдымен қажетсіз тұтынуды азайтып, пайдалануға жарамды заттарды қайта қолданған дұрыс.`
  },

  /* 7-БЕТ: СУРЕТ */
  {
    type: "gallery",
    theme: "forest",
    title: "Орман және жасыл желек",
    images: [
      photos[1],
      photos[8],
      photos[10]
    ]
  },

  /* 8-БЕТ: ТҮСІНДІРМЕ */
  {
    type: "speech",
    theme: "water",
    title: "Суды үнемдеу",
    text: `Су — тіршілік үшін аса маңызды табиғи ресурс.

Суды үнемдеу күнделікті әдеттерімізден басталады.

Мысалы, қажетсіз ағып тұрған кранды жабу, ақауды жауапты қызметкерлерге хабарлау және суды орнымен пайдалану маңызды.

Сонымен қатар өзендер мен көлдерді ластамау қажет.

Су ресурстарын қорғау арқылы біз табиғатқа ғана емес, болашақ ұрпаққа да қамқорлық көрсетеміз.`
  },

  /* 9-БЕТ: СУРЕТ */
  {
    type: "gallery",
    theme: "water",
    title: "Қазақстанның су көздері",
    images: [
      photos[7],
      photos[9],
      photos[2]
    ]
  },

  /* 10-БЕТ: ВИДЕО */
  {
    type: "video",
    theme: "water",
    title: "Табиғатты қорғау — ортақ міндет",
    video: videos[1],

    intro: `Келесі бейнероликті көріп, адам мен табиғат арасындағы байланысты ойланайық.

Өзіміз өмір сүретін ортаны қорғау үшін қандай әрекеттер жасау қажет?`,

    after: `Қоршаған ортаға қамқорлық жасау — саналы азаматтың белгісі.

Біздің күнделікті таңдауымыз табиғаттың болашағына әсер етуі мүмкін.`
  },

  /* 11-БЕТ: ТҮСІНДІРМЕ */
  {
    type: "speech",
    theme: "sun",
    title: "Таза ауа — ортақ байлық",
    text: `Ауаның тазалығы адам денсаулығы мен өмір сапасына әсер етеді.

Қала ауасының ластануына көлік, өндіріс және басқа факторлар ықпал етуі мүмкін.

Қоғамдық көлікті пайдалану, энергияны үнемдеу және табиғи аумақтарды сақтау — ауаға түсетін зиянды әсерді азайтуға көмектесетін әрекеттер.

Әрқайсымыз экологиялық сауаттылығымызды арттырып, қоршаған ортаға ұқыпты қарауымыз қажет.`
  },

  /* 12-БЕТ: СУРЕТ */
  {
    type: "gallery",
    theme: "flower",
    title: "Жасыл болашақ",
    images: [
      photos[3],
      photos[6],
      photos[11]
    ]
  },

  /* 13-БЕТ: ТҮСІНДІРМЕ */
  {
    type: "speech",
    theme: "forest",
    title: "Жасыл колледж",
    text: `Экологиялық мәдениет өзіміз оқитын колледжден басталады.

Аудиторияны таза ұстау, қағазды үнемдеу, электр энергиясын қажетсіз жұмсамау және ортақ мүлікті күтіп пайдалану — жауапты студенттің ісі.

Топ болып шағын экологиялық жоба жасауға болады.

Мысалы, қалдықтарды сұрыптау туралы түсіндіру жұмысын өткізу немесе көгалдандыруға қатысу.

Маңыздысы — тазалықты бір күндік шара емес, тұрақты әдетке айналдыру.`
  },

  /* 14-БЕТ: СУРЕТ */
  {
    type: "gallery",
    theme: "meadow",
    title: "Біздің таза болашағымыз",
    images: [
      photos[4],
      photos[10],
      photos[0]
    ]
  },

  /* 15-БЕТ: ҚОРЫТЫНДЫ ВИДЕО */
  {
    type: "video",
    theme: "meadow",
    title: "Таза Қазақстан — ортақ іс",
    video: videos[2],

    intro: `Құрметті студенттер, түсіндірме бөлімінің соңында тазалық пен экологиялық жауапкершілікке арналған роликті тамашалаймыз.`,

    after: `Бүгінгі тақырыптан шығатын қорытынды — табиғатты қорғау әрқайсымыздың жауапкершілігіміз.

Енді алған білімімізді командалық ауызша сұрақтар арқылы тексереміз.`
  }

];

/* ========================================
   3 КОМАНДА
======================================== */

const teams = [
  "Жасыл әлем",
  "Таза табиғат",
  "Эко болашақ"
];

/* ========================================
   15 АУЫЗША СҰРАҚ ЖӘНЕ ҮЛГІ ЖАУАП
======================================== */

const questions = [

  /* 1 */
  {
    title: "Пластикті азайту",
    text: "Колледжде бір реттік пластик бөтелкелердің қолданылуын азайту үшін қандай екі нақты ұсыныс айтар едіңдер?",
    answer: `Біріншіден, студенттер көп рет қолданылатын су бөтелкесін пайдалана алады.

Екіншіден, колледжде қауіпсіз ауызсу құюға арналған орын ұйымдастыруды ұсынуға болады.

Бұл бір реттік бөтелкелерді сатып алуды және пластик қалдықтарының көлемін азайтуға көмектеседі.`
  },

  /* 2 */
  {
    title: "Қалдықтарды сұрыптау",
    text: "Қағаз, пластик және шыны қалдықтарын неліктен бөлек жинау маңызды?",
    answer: `Қалдықтарды бөлек жинау оларды қайта өңдеуге дайындауды жеңілдетеді.

Мысалы, таза қағаз басқа қалдықтармен араласпаса, оны қабылдау және қайта өңдеу мүмкіндігі жоғарырақ болады.

Сұрыптау талаптарын сақтау маңызды, себебі барлық материал бірдей қабылдана бермейді.`
  },

  /* 3 */
  {
    title: "Колледждегі мәселе",
    text: "Колледжде сұрыптау жәшіктері бар, бірақ студенттер қалдықтарды дұрыс тастамайды. Қандай шешім ұсынар едіңдер?",
    answer: `Әр жәшікке қандай қалдық тасталатынын анық көрсететін белгілер орнатуға болады.

Студенттерге қысқаша түсіндіру жұмысын өткізіп, жәшіктерді қолайлы орынға орналастыру қажет.

Сондай-ақ қалдықтарды жинау қызметінің оларды бөлек қабылдайтынын тексеру маңызды.`
  },

  /* 4 */
  {
    title: "Электр энергиясын үнемдеу",
    text: "Сабақ аяқталғаннан кейін аудиторияда жарық пен компьютерлер қосулы қалды. Мұндай жағдайды болдырмау үшін не істеуге болады?",
    answer: `Сабақ аяқталғанда жарықты және қауіпсіз түрде өшіруге болатын құрылғыларды тексеру тәртібін енгізуге болады.

Оған жауапты кезекші тағайындалып, мұғаліммен келісілген қысқа тексеру тізімі жасалады.

Бұл энергияны үнемдеуге көмектеседі.`
  },

  /* 5 */
  {
    title: "Табиғат аясындағы демалыс",
    text: "Достарың табиғатта демалғаннан кейін қоқысын қалдырып кетті. Оларға қалай түсіндірер едің?",
    answer: `Табиғатта қалған қоқыстың жануарларға, өсімдіктерге және басқа демалушыларға зиян келтіруі мүмкін екенін түсіндіруге болады.

Достарға қоқысты бірге жинап, тиісті жерге жеткізуді ұсынған дұрыс.

Мақсат — жанжал емес, дұрыс әдет қалыптастыру.`
  },

  /* 6 */
  {
    title: "Ағаш отырғызу",
    text: "Колледж ауласына ағаш отырғызылды. Олардың жақсы өсуі үшін әрі қарай қандай жұмыстар қажет?",
    answer: `Ағаштарға жергілікті климат пен түріне сәйкес күтім қажет.

Суару, топырақ жағдайын бақылау және көшеттерді зақымданудан қорғау маңызды.

Сонымен бірге күтімге жауапты адамдар мен тұрақты жоспар болуы керек.`
  },

  /* 7 */
  {
    title: "Ауаның тазалығы",
    text: "Қаладағы ауа ластануын азайтуға студенттер қандай күнделікті әрекеттерімен үлес қоса алады?",
    answer: `Мүмкіндік болғанда қоғамдық көлікпен жүруге, жаяу баруға немесе велосипед пайдалануға болады.

Электр энергиясын үнемдеу де ресурстарға сұранысты азайтуға көмектеседі.

Ауаны қорғауға қатысты қоғамдық бастамаларға қатысу да пайдалы.`
  },

  /* 8 */
  {
    title: "Тұрақты тазалық",
    text: "Колледждегі сенбілік бір күндік шара болып қалмауы үшін қандай жоспар құру керек?",
    answer: `Тазалықты сақтау үшін тұрақты жұмыс кестесін ұйымдастыруға болады.

Аумақтарды бөліп, жауапты адамдарды анықтау және қажетті құралдарды қамтамасыз ету маңызды.

Жиналған қалдықтардың тиісті қызмет арқылы әкетілуін және тазалық нәтижесін бақылау керек.`
  },

  /* 9 */
  {
    title: "Өзенді қорғау",
    text: "Өзен жағасында қоқыс жиі жиналады. Бұл мәселені ұзақ мерзімге қалай шешуге болады?",
    answer: `Қоқысты бір рет жинау жеткіліксіз.

Қолайлы жерлерге қалдық жәшіктерін орнату, оларды уақытында босату, түсіндіру жұмысын өткізу қажет.

Жауапты мекемелермен бірігіп, аумақтың тазалығын тұрақты бақылауға болады.`
  },

  /* 10 */
  {
    title: "Қайта пайдалану және қайта өңдеу",
    text: "Затты қайта пайдалану мен қайта өңдеудің айырмашылығы қандай? Мысал келтіріңдер.",
    answer: `Қайта пайдалану — затты бастапқы қалпында қайта қолдану.

Мысалы, көп рет қолданылатын сөмкені дүкенге қайта алып бару.

Қайта өңдеу — қалдық материалды өңдеп, жаңа өнім немесе шикізат алу.

Мысалы, қабылдауға жарамды қағаз қалдықтарынан қайта өңделген қағаз жасау.`
  },

  /* 11 */
  {
    title: "Экологиялық өнім",
    text: "Дүкендегі өнімнің қаптамасында «экологиялық таза» деп жазылған. Бұл сөзге бірден сенуге бола ма? Қалай тексереміз?",
    answer: `Қаптамадағы жазудың өзі өнімнің экологиялық артықшылығын дәлелдемейді.

Өндірушінің нақты мәліметтерін, құрамы мен қолданылатын сертификаттарын тексеру қажет.

Экологиялық талаптардың қайсысына сәйкес келетінін анықтау маңызды.`
  },

  /* 12 */
  {
    title: "Артық тұтыну",
    text: "Жұмыс істеп тұрған затты жиі жаңасына ауыстыру табиғатқа қандай әсер етуі мүмкін?",
    answer: `Жаңа затты өндіру үшін шикізат, энергия және басқа ресурстар қажет.

Ал бұрынғы зат қалдыққа айналуы мүмкін.

Сондықтан затты дұрыс күтіп пайдалану, жөндеу және қажет болғанда қайта қолдану ресурстарды үнемдеуге көмектеседі.`
  },

  /* 13 */
  {
    title: "Мамандық және экология",
    text: "Болашақ маман ретінде өз жұмысыңда қағазды, электр энергиясын және материалдарды қалай үнемдер едің?",
    answer: `Мысалы, баспа саласында макетті алдын ала мұқият тексеру қате басылымдар санын азайтады.

Қажетсіз сынақ басылымдарын қысқарту, қағазды орнымен пайдалану және құрылғыларды пайдалану ережесін сақтау маңызды.

Ресурстарды тиімді қолдану кәсіби жауапкершілікті көрсетеді.`
  },

  /* 14 */
  {
    title: "Суды үнемдеу",
    text: "Колледждегі су краны ақауланып, су үздіксіз ағып тұр. Қандай тиімді әрі қауіпсіз әрекет жасайсыңдар?",
    answer: `Ақау туралы колледждің жауапты қызметкеріне дереу хабарлау қажет.

Су жүйесін жөндеуді тиісті маман орындауы керек.

Мұндай жағдайлар қайталанбауы үшін жабдықтың жағдайын жүйелі тексеру пайдалы.`
  },

  /* 15 */
  {
    title: "Біздің экологиялық жобамыз",
    text: "Команда колледжде бір ай ішінде жүзеге асыратын экологиялық жоба ұсынсын. Мақсаты, үш қадамы және нәтижесін бағалау жолы қандай?",
    answer: `Мысал жоба: «Қағазды үнемдейтін колледж».

Мақсаты — оқу кезінде қағаз ысырабын азайту.

Бірінші қадам: қай жерде қағаз көп жұмсалатынын анықтау.

Екінші қадам: қажетсіз басылымдарды қысқарту туралы ұсыныстар жасау.

Үшінші қадам: студенттерге ақпараттық түсіндіру өткізу.

Нәтиже: жобаға дейінгі және кейінгі қағаз шығынын салыстыру.`
  }

];

/* ========================================
   БАҒАЛАУ ЖҮЙЕСІ
======================================== */

const pointOptions = [
  55, 60, 65, 70, 75,
  80, 85, 90, 95, 100
];

let grades = Array(15).fill(null);
let revealed = Array(15).fill(false);

/* ҰПАЙЛАРДЫ БРАУЗЕРДЕ САҚТАУ */

const SAVE_KEY = "taza-qazaqstan-darkhan-oral-v2";

function loadProgress() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(SAVE_KEY)
    );

    if (!saved) return;

    if (
      Array.isArray(saved.grades) &&
      saved.grades.length === 15
    ) {
      grades = saved.grades.map(value =>
        pointOptions.includes(value) ? value : null
      );
    }

    if (
      Array.isArray(saved.revealed) &&
      saved.revealed.length === 15
    ) {
      revealed = saved.revealed.map(Boolean);
    }

    grades.forEach((value, index) => {
      if (value !== null) revealed[index] = true;
    });

  } catch (error) {
    // Сақталған дерек оқылмаса,
    // сайт жаңадан басталады.
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({ grades, revealed })
    );
  } catch (error) {
    // Жергілікті сақтау қолжетімсіз
    // болса да, ойын жалғасады.
  }
}

/* ========================================
   САЙТ КҮЙІ
======================================== */

let view = "home";
let slideIndex = 0;
let gameIndex = 0;

let phase = "lesson";
let secondsLeft = 15 * 60;

let timerStarted = false;
let timerRunning = false;

let videoPlaying = false;

let typingFrame = null;
let typingFullText = "";

/* ========================================
   ТАЙМЕР
======================================== */

function updateTimer() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  document.getElementById("clock").textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  document.getElementById("timerToggle").textContent =
    timerRunning ? "Ⅱ" : "▶";

  document.getElementById("phase").textContent =
    phase === "lesson" ? "ТҮСІНДІРУ" : "ОЙЫН";
}

setInterval(() => {
  if (!timerRunning || secondsLeft <= 0) return;

  secondsLeft--;

  if (secondsLeft === 0) {
    timerRunning = false;
  }

  updateTimer();
}, 1000);

function setPhase(nextPhase) {
  if (phase !== nextPhase) {
    phase = nextPhase;

    secondsLeft =
      nextPhase === "lesson" ? 900 : 600;

    timerStarted = true;
    timerRunning = true;

  } else if (!timerStarted) {
    timerStarted = true;
    timerRunning = true;
  }

  updateTimer();
}

function toggleTimer() {
  if (!timerStarted) {
    timerStarted = true;
    timerRunning = true;
  } else {
    timerRunning =
      !timerRunning && secondsLeft > 0;
  }

  updateTimer();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen?.()
      .catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* ========================================
   КӨМЕКШІ ФУНКЦИЯЛАР
======================================== */

function setTheme(name) {
  scene.className = "scene theme-" + name;
}

function progress(current, total) {
  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${current / total * 100}%">
      </div>
    </div>
  `;
}

function stopTyping() {
  if (typingFrame !== null) {
    cancelAnimationFrame(typingFrame);
    typingFrame = null;
  }
}

function startTyping(text) {
  stopTyping();

  const el = document.getElementById("typedText");
  if (!el) return;

  typingFullText = text.trim();

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    el.textContent = typingFullText;

    const btn = document.getElementById("revealText");
    if (btn) btn.hidden = true;

    return;
  }

  el.textContent = "";
  el.classList.add("typing");

  const startedAt = performance.now();
  const speed = 145;

  function frame(now) {
    if (!el.isConnected) return;

    const count = Math.min(
      typingFullText.length,
      Math.floor(
        ((now - startedAt) / 1000) * speed
      )
    );

    el.textContent = typingFullText.slice(0, count);

    if (count < typingFullText.length) {
      typingFrame = requestAnimationFrame(frame);
    } else {
      typingFrame = null;
      el.classList.remove("typing");

      const btn = document.getElementById("revealText");
      if (btn) btn.hidden = true;
    }
  }

  typingFrame = requestAnimationFrame(frame);
}

function showFullText() {
  stopTyping();

  const el = document.getElementById("typedText");

  if (el) {
    el.textContent = typingFullText;
    el.classList.remove("typing");
  }

  const btn = document.getElementById("revealText");
  if (btn) btn.hidden = true;
}

/* СУРЕТ АШЫЛМАСА, БАСҚА СУРЕТ ҚОЮ */

function photoError(img) {
  const backups = [
    photos[10],
    photos[4],
    photos[1]
  ];

  const attempt = Number(img.dataset.attempt || 0);

  if (attempt < backups.length) {
    img.dataset.attempt = String(attempt + 1);
    img.src = backups[attempt];

  } else {
    img.onerror = null;
    img.style.display = "none";
  }
}

/* ========================================
   НАВИГАЦИЯ
======================================== */

function showHome() {
  stopTyping();

  videoPlaying = false;
  view = "home";

  render();
}

function showSlide(index) {
  stopTyping();
  setPhase("lesson");

  slideIndex = Math.max(0, Math.min(14, index));
  videoPlaying = false;
  view = "slide";

  render();
}

function showGame(index) {
  stopTyping();
  setPhase("game");

  gameIndex = Math.max(0, Math.min(14, index));
  videoPlaying = false;
  view = "game";

  render();
}

function nextSlide() {
  if (slideIndex === 14) {
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
  if (gameIndex === 14) {
    showFinal();
  } else {
    showGame(gameIndex + 1);
  }
}

function previousGame() {
  if (gameIndex === 0) {
    showSlide(14);
  } else {
    showGame(gameIndex - 1);
  }
}

function render() {
  if (view === "home") renderHome();
  if (view === "slide") renderSlide();
  if (view === "game") renderGame();
  if (view === "final") renderFinal();

  window.scrollTo(0, 0);
}

/* ========================================
   БАСТЫ БЕТ
======================================== */

function renderHome() {
  setTheme("meadow");

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
          Жасыл табиғат — таза болашақ!

          Бірінші курс студенттеріне арналған
          интерактивті ашық тәрбие сағаты.
        </p>

        <div class="actions">
          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>

          <button class="btn"
                  onclick="showGame(0)">
            Ауызша ойынға өту
          </button>
        </div>

        <div class="stats">
          <div>
            <b>15</b>
            <small>Слайд</small>
          </div>

          <div>
            <b>3</b>
            <small>Видео</small>
          </div>

          <div>
            <b>15</b>
            <small>Ауызша сұрақ</small>
          </div>

          <div>
            <b>3</b>
            <small>Команда</small>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img src="${naturePhoto}"
             alt="Жасыл табиғат">

        <div class="hero-quote">
          Таза Қазақстан —<br>
          жарқын болашақ!
        </div>
      </div>

    </section>
  `;
}

/* ========================================
   ТҮСІНДІРМЕ БЕТТЕРІ
======================================== */

function slideHeader(slide) {
  return `
    <div class="heading">
      <div>
        <div class="eyebrow">
          ТАЗА ҚАЗАҚСТАН · ТҮСІНДІРУ
        </div>

        <h1 class="page-title">
          ${slide.title}
        </h1>
      </div>

      <span class="chip">
        ${slideIndex + 1} / 15
      </span>
    </div>

    ${progress(slideIndex + 1, 15)}
  `;
}

function slideControls() {
  return `
    <div class="controls">
      <button class="btn"
              onclick="previousSlide()">
        ← Артқа
      </button>

      <button class="btn primary"
              onclick="nextSlide()">
        ${slideIndex === 14
          ? "Ойынға өту →"
          : "Келесі бет →"}
      </button>
    </div>
  `;
}

function renderSlide() {
  const slide = slides[slideIndex];

  setTheme(slide.theme);

  if (slide.type === "speech") {
    renderSpeech(slide);
  }

  if (slide.type === "gallery") {
    renderGallery(slide);
  }

  if (slide.type === "video") {
    renderVideo(slide);
  }
}

/* АПАЙДЫҢ ТҮСІНДІРМЕСІ */

function renderSpeech(slide) {
  app.innerHTML = `
    <div class="page-enter">

      ${slideHeader(slide)}

      <section class="card speech-card">

        <div class="teacher-label">
          ✦ АПАЙ ОҚИТЫН ТҮСІНДІРМЕ
        </div>

        <h2>${slide.title}</h2>

        <div id="typedText"
             class="teacher-text"></div>

        <div class="actions">
          <button id="revealText"
                  class="btn"
                  onclick="showFullText()">
            Мәтінді толық ашу
          </button>
        </div>

      </section>

      ${slideControls()}

    </div>
  `;

  startTyping(slide.text);
}

/* ТЕК 3 ФОТО — ЕШҚАНДАЙ ЖАЗУ ЖОҚ */

function renderGallery(slide) {
  app.innerHTML = `
    <div class="page-enter">

      <div class="photo-grid">

        ${slide.images.map((src, i) => `
          <div class="photo-box"
               style="--i:${i}">

            <img
              src="${src}"
              alt="Табиғат суреті ${i + 1}"
              loading="eager"
              data-attempt="0"
              onerror="photoError(this)">

          </div>
        `).join("")}

      </div>

      ${slideControls()}

    </div>
  `;
}

/* ҚАЗАҚША РОЛИКТЕР */

function renderVideo(slide) {
  const video = slide.video;

  const embed =
    "https://www.youtube-nocookie.com/embed/" +
    video.id + "?autoplay=1&rel=0";

  const watch =
    "https://www.youtube.com/watch?v=" +
    video.id;

  app.innerHTML = `
    <div class="page-enter">

      ${slideHeader(slide)}

      <section class="card video-card">

        <div class="teacher-note">
          <strong>
            ✦ АПАЙДЫҢ КІРІСПЕ СӨЗІ
          </strong>

          <p>${slide.intro}</p>
        </div>

        <div class="video-screen">

          ${videoPlaying ? `
            <iframe
              src="${embed}"
              title="${video.name}"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
          ` : `
            <div class="video-poster">
              <span class="play">▶</span>

              <h2>${video.name}</h2>

              <p>
                Бастау үшін батырманы басыңыз
              </p>
            </div>
          `}

        </div>

        <div class="actions">

          <button class="btn primary"
                  onclick="toggleVideo()">

            ${videoPlaying
              ? "■ Видеоны тоқтату"
              : "▶ Видеоны бастау"}

          </button>

          <a class="btn"
             href="${watch}"
             target="_blank"
             rel="noopener noreferrer">
            YouTube-та ашу
          </a>

        </div>

        <p class="video-warning">
          ${video.source}.
          Видео толық ойнатылады.
          Келесі бетке апай өзі өтеді.
        </p>

        <div class="teacher-note">
          <strong>
            ✦ ВИДЕОДАН КЕЙІНГІ СӨЗ
          </strong>

          <p>${slide.after}</p>
        </div>

      </section>

      ${slideControls()}

    </div>
  `;
}

function toggleVideo() {
  videoPlaying = !videoPlaying;
  renderVideo(slides[slideIndex]);
}

/* ========================================
   КОМАНДАЛАРДЫҢ ҰПАЙЫ
======================================== */

function teamScore(team) {
  return grades.reduce((sum, grade, index) => {

    if (
      grade !== null &&
      index % 3 === team
    ) {
      return sum + grade;
    }

    return sum;

  }, 0);
}

function teamAnswered(team) {
  return grades.filter((grade, index) =>
    index % 3 === team && grade !== null
  ).length;
}

function renderTeams(activeTeam) {
  return `
    <div class="team-board">

      ${teams.map((name, i) => `
        <div class="card team
          ${i === activeTeam ? "active" : ""}">

          <div>
            <small>
              ${i + 1}-ТОП ·
              ${teamAnswered(i)}/5
            </small>

            <strong>${name}</strong>
          </div>

          <span class="team-score">
            ${teamScore(i)}
          </span>

        </div>
      `).join("")}

    </div>
  `;
}

/* ========================================
   15 АУЫЗША ОЙЫН
======================================== */

function renderGame() {
  const q = questions[gameIndex];
  const team = gameIndex % 3;
  const grade = grades[gameIndex];
  const isRevealed = revealed[gameIndex];

  const themes = [
    "forest",
    "meadow",
    "water",
    "flower",
    "sun"
  ];

  setTheme(themes[gameIndex % themes.length]);

  app.innerHTML = `
    <div class="page-enter">

      <div class="heading">
        <div>
          <div class="eyebrow">
            3 КОМАНДА · АУЫЗША САЙЫС
          </div>

          <h1 class="page-title">
            Эко ой додасы
          </h1>
        </div>

        <span class="chip">
          Сұрақ ${gameIndex + 1} / 15
        </span>
      </div>

      ${renderTeams(team)}
      ${progress(gameIndex + 1, 15)}

      <div class="game-layout">

        <section class="card question-card">

          <span class="chip">
            ОРТАША ДЕҢГЕЙ · АУЫЗША ЖАУАП
          </span>

          <h2>${q.title}</h2>

          <p class="question-text">
            ${q.text}
          </p>

          <p class="question-help">
            Команда ауызша жауап береді.
            Жауап аяқталғаннан кейін апай
            төмендегі батырманы басады.
          </p>

          ${!isRevealed ? `

            <button class="btn primary reveal-btn"
                    onclick="revealAnswer()">
              <span>👁</span>
              Жауапты көру
            </button>

          ` : `

            <div class="answer-card"
                 aria-live="polite">

              <h3>
                <span>✓</span>
                Дайын үлгі жауап
              </h3>

              <p>
                ${q.answer}
              </p>

              <button class="btn"
                      onclick="hideAnswer()">
                Жауапты жасыру
              </button>

            </div>

            <h3 class="grade-title">
              Апайдың ұпай қоюы:
            </h3>

            <div class="grade-buttons">

              ${pointOptions.map(points => `

                <button
                  class="grade
                    ${grade === points
                      ? "selected"
                      : ""}"
                  aria-pressed="${grade === points}"
                  onclick="setGrade(${points})">

                  ${points}

                </button>

              `).join("")}

            </div>

            ${grade !== null ? `
              <div class="feedback"
                   aria-live="polite">

                <strong>
                  ✓ ${teams[team]}:
                  ${grade} ұпай берілді!
                </strong>

                <p>
                  Қажет болса, басқа ұпайды
                  таңдап, бағалауды өзгертуге болады.
                </p>

              </div>
            ` : ""}

          `}

        </section>

        <aside class="card side-card">

          <div class="eyebrow">
            КЕЗЕКТЕГІ КОМАНДА
          </div>

          <h2>${team + 1}-ТОП</h2>

          <h3>${teams[team]}</h3>

          <p>
            Әр команда 5 сұраққа жауап береді.
          </p>

          <p>
            Оқушылар өз ойларын ауызша
            түсіндіреді, апай өзі бағалайды.
          </p>

          <div class="rubric">
            <strong>Бағалау үлгісі</strong>
            <br>
            55–65 — жауап толық емес
            <br>
            70–80 — негізгі ой дұрыс
            <br>
            85–95 — нақты дәлел, мысал бар
            <br>
            100 — толық әрі түсінікті жауап
          </div>

          <h3>
            Жалпы ұпай: ${teamScore(team)}
          </h3>

          <p>
            Бағаланған сұрақ:
            ${teamAnswered(team)} / 5
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

          ${gameIndex === 14
            ? "Нәтижені көру →"
            : "Келесі сұрақ →"}

        </button>

      </div>

    </div>
  `;
}

/* ЖАУАПТЫ КӨРУ */

function revealAnswer() {
  revealed[gameIndex] = true;
  saveProgress();
  renderGame();
}

/* ЖАУАПТЫ ЖАСЫРУ */

function hideAnswer() {
  revealed[gameIndex] = false;
  saveProgress();
  renderGame();
}

/* АПАЙ ҰПАЙ ҚОЯДЫ */

function setGrade(points) {
  if (!revealed[gameIndex]) return;

  if (!pointOptions.includes(points)) return;

  grades[gameIndex] = points;

  saveProgress();
  renderGame();
}

/* ========================================
   ҚОРЫТЫНДЫ
======================================== */

function showFinal() {
  stopTyping();

  view = "final";
  videoPlaying = false;

  render();
}

function renderFinal() {
  setTheme("meadow");

  const allScores = teams.map(
    (_, index) => teamScore(index)
  );

  const maxScore = Math.max(...allScores);

  const answeredCount =
    grades.filter(value => value !== null).length;

  const winners = teams.filter(
    (_, index) => teamScore(index) === maxScore
  );

  app.innerHTML = `
    <section class="final page-enter">

      <div class="eyebrow">
        ТАЗА ҚАЗАҚСТАН · ҚОРЫТЫНДЫ
      </div>

      <h1>
        ЖАСЫЛ ТАБИҒАТ —<br>
        <span>ЖАРҚЫН БОЛАШАҚ!</span>
      </h1>

      <h2>
        ${answeredCount === 0
          ? "Әзірге ұпай қойылған жоқ"
          : "Үздік нәтиже: " + winners.join(", ")}
      </h2>

      <div class="results">

        ${teams.map((name, index) => `
          <div class="card">

            <span class="chip">
              ${index + 1}-КОМАНДА
            </span>

            <h3>${name}</h3>

            <b>${teamScore(index)}</b>

            <p>
              ${teamAnswered(index)} / 5
              сұрақ бағаланды
            </p>

            ${answeredCount > 0 &&
              teamScore(index) === maxScore
              ? `
                <strong style="color:#19854a">
                  ★ ҮЗДІК НӘТИЖЕ
                </strong>
              `
              : ""}

          </div>
        `).join("")}

      </div>

      <p class="question-text">
        Табиғатты қорғау —
        әрқайсымыздың міндетіміз!
      </p>

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

      <h3 style="margin-top:40px;color:#20834a">
        BY DARKHAN
      </h3>

    </section>
  `;
}

/* ========================================
   ОЙЫНДЫ ҚАЙТА БАСТАУ
======================================== */

function restartGame() {
  const approved = confirm(
    "Барлық ұпайды өшіріп, ойынды қайта бастаймыз ба?"
  );

  if (!approved) return;

  grades = Array(15).fill(null);
  revealed = Array(15).fill(false);

  saveProgress();

  phase = "lesson";
  secondsLeft = 15 * 60;
  timerStarted = false;
  timerRunning = false;

  updateTimer();
  showGame(0);
}

/* ========================================
   ПЕРНЕТАҚТАМЕН БАСҚАРУ
======================================== */

document.addEventListener("keydown", event => {
  const tag = document.activeElement.tagName;

  if (tag === "INPUT" || tag === "TEXTAREA") {
    return;
  }

  if (event.key === "ArrowRight") {
    if (view === "slide") {
      nextSlide();
    } else if (
      view === "game" &&
      grades[gameIndex] !== null
    ) {
      nextGame();
    }
  }

  if (event.key === "ArrowLeft") {
    if (view === "slide") {
      previousSlide();
    } else if (view === "game") {
      previousGame();
    }
  }
});

/* ========================================
   ІСКЕ ҚОСУ
======================================== */

loadProgress();
updateTimer();
showHome();
