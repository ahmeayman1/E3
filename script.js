const questions = [

/* ================= PART 1 : MCQ ================= */

{
  type: "mcq",
  q: "Organizing is considered the ______ step in the management process.",
  options: ["First", "Second", "Third", "Last"],
  a: 1
},
{
  type: "mcq",
  q: "The outcome of the organizing process is a set of formal relationships known as:",
  options: ["Planning", "Leadership", "Organization structure", "Staffing"],
  a: 2
},
{
  type: "mcq",
  q: "Which principle states that an employee should have only one supervisor?",
  options: ["Principle of specialization", "Principle of span of control", "Principle of unity of command", "Principle of chain of command"],
  a: 2
},
{
  type: "mcq",
  q: "The visual picture of an organization that shows lines of authority is the:",
  options: ["Job description", "Policy manual", "Organizational chart", "Staffing schedule"],
  a: 2
},
{
  type: "mcq",
  q: "Which type of chart shows high-level management at the top and lines of authority downward?",
  options: ["Horizontal chart", "Circular chart", "Vertical chart", "Manning chart"],
  a: 2
},
{
  type: "mcq",
  q: "Informal organizations are formed primarily to satisfy:",
  options: ["Financial goals", "Organizational regulations", "Social and emotional needs", "Top management requirements"],
  a: 2
},
{
  type: "mcq",
  q: "The official power to act and direct the work of others is called:",
  options: ["Responsibility", "Accountability", "Authority", "Specialization"],
  a: 2
},
{
  type: "mcq",
  q: "Which chart lists the number and title of all positions in a specific unit?",
  options: ["Skeleton chart", "Functional chart", "Manning chart", "Master chart"],
  a: 2
},
{
  type: "mcq",
  q: "The principle of Span of Control refers to:",
  options: [
    "The number of departments in a hospital",
    "The number of subordinates a manager can effectively supervise",
    "The flow of authority from top to bottom",
    "The written duties of a nurse"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A written statement that describes the duties and functions of a specific job is a:",
  options: ["Organizational chart", "Job description", "Work schedule", "Mission statement"],
  a: 1
},
{
  type: "mcq",
  q: "Unity of command helps to diminish:",
  options: ["Specialization", "Employee morale", "Overlapping and contradiction of orders", "The chain of command"],
  a: 2
},
{
  type: "mcq",
  q: "Which of the following is an element of organizing?",
  options: ["Formulating a budget", "Developing job descriptions", "Setting long-term goals", "Controlling quality"],
  a: 1
},
{
  type: "mcq",
  q: "Formal organization structure is typically shown using:",
  options: ["Social gatherings", "Graphs and schemes", "Emotional attachments", "Informal elections"],
  a: 1
},
{
  type: "mcq",
  q: "In a circular chart, high-level management is placed:",
  options: ["At the top", "At the left", "In the center", "At the bottom"],
  a: 2
},
{
  type: "mcq",
  q: "The Skeleton Chart shows:",
  options: [
    "Detailed duties of each nurse",
    "Only the main divisions and administrative levels",
    "The names of all employees",
    "The social relationships between staff"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Accountability means that individuals are ______ for the consequences of their actions.",
  options: ["Legally forced", "Morally responsible", "Technically skilled", "Formally appointed"],
  a: 1
},
{
  type: "mcq",
  q: "Which step comes FIRST in the organizing function?",
  options: ["Grouping activities", "Delegating authority", "Establishing overall objectives", "Identifying necessary activities"],
  a: 3
},
{
  type: "mcq",
  q: "The authority of an informal leader depends on:",
  options: [
    "Regulations and rules",
    "Top management appointment",
    "Combined support of group members",
    "The organizational chart"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which type of chart shows high-level management on the left?",
  options: ["Vertical", "Left-to-right (Horizontal)", "Circular", "Functional"],
  a: 1
},
{
  type: "mcq",
  q: "Job descriptions are used for all the following EXCEPT:",
  options: ["Recruitment", "Performance evaluation", "Establishing social groups", "Orienting new employees"],
  a: 2
},

/* ================= PART 2 : CRITICAL THINKING ================= */

{
  type: "mcq",
  q: "If a nurse receives different instructions from two supervisors, which principle is violated?",
  options: ["Span of control", "Unity of command", "Specialization", "Chain of command"],
  a: 1
},
{
  type: "mcq",
  q: "Why might a manager seek cooperation of an informal leader?",
  options: [
    "To replace the formal structure",
    "To gain support for the formal organization",
    "To eliminate job descriptions",
    "To reduce span of control"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A highly competent nurse requires ______ supervision and allows a ______ span of control.",
  options: ["More / Narrower", "Less / Wider", "Constant / Fixed", "Technical / Vertical"],
  a: 1
},
{
  type: "mcq",
  q: "Which describes the informal organization correctly?",
  options: [
    "Works independently of formal organization",
    "Created by top management",
    "Depends on the formal organization",
    "Set by written regulations"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Reporting a medication error voluntarily demonstrates:",
  options: ["Authority", "Specialization", "Accountability", "Centralization"],
  a: 2
},
{
  type: "mcq",
  q: "As an organization grows larger, division of work:",
  options: [
    "Decreases",
    "Remains the same",
    "Further divides and subdivides",
    "Eliminates departments"
  ],
  a: 2
},
{
  type: "mcq",
  q: "A functional chart is more detailed because it:",
  options: [
    "Shows more administrative levels",
    "Lists principal duties of each position",
    "Uses circular lines",
    "Includes staff names"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Tying groups horizontally and vertically is done through:",
  options: [
    "Job descriptions only",
    "Social activities",
    "Authority relationships and information systems",
    "Reducing departments"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which principle confines work to a single leading function?",
  options: ["Unity of command", "Specialization", "Chain of command", "Span of control"],
  a: 1
},
{
  type: "mcq",
  q: "An organizational chart with names is BEST used for:",
  options: [
    "Budgeting",
    "Orienting new nurses",
    "Defining mission",
    "Changing structure"
  ],
  a: 1
},

/* ================= PART 3 : TRUE / FALSE ================= */

{ type: "tf", q: "Organizing follows planning in the management process.", a: true },
{ type: "tf", q: "The informal organization is created by top management.", a: false },
{ type: "tf", q: "Unity of command means one leader and one plan.", a: true },
{ type: "tf", q: "Authority flows from bottom to top.", a: false },
{ type: "tf", q: "Responsibility is the power to hire or fire.", a: false },
{ type: "tf", q: "Informal groups may include people from different departments.", a: true },
{ type: "tf", q: "Organizational charts show size of nursing department.", a: true },
{ type: "tf", q: "Formal organization is temporary.", a: false },
{ type: "tf", q: "Complex jobs require a narrower span of control.", a: true },
{ type: "tf", q: "Job descriptions guide performance evaluation.", a: true },
{ type: "tf", q: "Organizing involves grouping activities and assigning tasks.", a: true },
{ type: "tf", q: "Informal leaders have formal authority.", a: false },
{ type: "tf", q: "A master chart represents one specific unit.", a: false },
{ type: "tf", q: "Communication usually follows the line of authority.", a: true },
{ type: "tf", q: "Specialization increases confusion.", a: false },
{ type: "tf", q: "Formal organization is based on written rules.", a: true },
{ type: "tf", q: "Organizing helps manage time effectively.", a: true },
{ type: "tf", q: "Informal relationships are emotionally based.", a: true },
{ type: "tf", q: "Vertical charts are the most common.", a: true },
{ type: "tf", q: "Planning defines relationships while organizing sets standards.", a: false }

];

console.log(questions.length); 
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
let shuffledQuestions = [];
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = shuffledQuestions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ✅ اعمل نسخة بدل ما تغيّر الأصل
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
document.getElementById("questionsBtn").innerText =
  `Questions (${shuffledQuestions.length})`;
  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${shuffledQuestions.length}`;
  progress.style.width = ((index + 1) / shuffledQuestions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", q.a === true);
createOption("False", q.a === false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}
