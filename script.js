const questions = [

/* ================= PART 1 : MCQ (1–20) ================= */

{
  type: "mcq",
  q: "Organizing is considered the ________ step in the management process.",
  options: ["First", "Second", "Third", "Last"],
  a: 1
},
{
  type: "mcq",
  q: "The systematic arrangement of activities and grouping of tasks is:",
  options: ["Planning", "Organizing", "Directing", "Staffing"],
  a: 1
},
{
  type: "mcq",
  q: "Which type of organization is officially established by the management to achieve specific goals?",
  options: ["Informal organization", "Formal organization", "Social organization", "Creative organization"],
  a: 1
},
{
  type: "mcq",
  q: "The principle that states 'each subordinate should report to only one supervisor' is:",
  options: ["Span of control", "Unity of direction", "Unity of command", "Specialization"],
  a: 2
},
{
  type: "mcq",
  q: "The right to give orders and the power to exact obedience is:",
  options: ["Responsibility", "Accountability", "Authority", "Delegation"],
  a: 2
},
{
  type: "mcq",
  q: "Which organizational chart shows high-level management at the top and formal lines of authority moving down?",
  options: ["Horizontal chart", "Circular chart", "Vertical chart", "Diagonal chart"],
  a: 2
},
{
  type: "mcq",
  q: "The number of subordinates that a manager can efficiently supervise is called:",
  options: ["Chain of command", "Span of control", "Unity of command", "Scalar chain"],
  a: 1
},
{
  type: "mcq",
  q: "An informal organization is characterized by:",
  options: ["Written rules", "Spontaneous social relationships", "Planned structure", "Official hierarchy"],
  a: 1
},
{
  type: "mcq",
  q: "The process of assigning part of a manager's work to subordinates is:",
  options: ["Centralization", "Delegation", "Departmentalization", "Specialization"],
  a: 1
},
{
  type: "mcq",
  q: "A 'Manning Chart' is a type of organizational chart that shows:",
  options: ["Only titles of positions", "Personnel names in the boxes", "Functions of each department", "Relationships between hospitals"],
  a: 1
},
{
  type: "mcq",
  q: "Responsibility can be defined as:",
  options: ["The right to command", "The obligation to perform assigned duties", "The power to make decisions", "The process of grouping tasks"],
  a: 1
},
{
  type: "mcq",
  q: "When authority is kept at the top level of management, it is called:",
  options: ["Decentralization", "Centralization", "Departmentalization", "Span of control"],
  a: 1
},
{
  type: "mcq",
  q: "Which chart shows high-level management in the center and lower positions in successive circles?",
  options: ["Vertical chart", "Horizontal chart", "Circular chart", "Master chart"],
  a: 2
},
{
  type: "mcq",
  q: "The principle of 'Specialization' is also known as:",
  options: ["Division of work", "Unity of command", "Scalar chain", "Coordination"],
  a: 0
},
{
  type: "mcq",
  q: "What is the first step in the organizing process?",
  options: ["Grouping of activities", "Identification of activities", "Assignment of duties", "Delegation of authority"],
  a: 1
},
{
  type: "mcq",
  q: "The 'Skeleton Chart' typically shows:",
  options: ["Only the names of employees", "Only the titles of the positions", "Detailed job descriptions", "Financial plans"],
  a: 1
},
{
  type: "mcq",
  q: "Organizing helps to avoid ________ of efforts.",
  options: ["Coordination", "Duplication", "Efficiency", "Specialization"],
  a: 1
},
{
  type: "mcq",
  q: "In a 'Horizontal Chart', the highest level of management is placed at the:",
  options: ["Top", "Center", "Left side", "Right side"],
  a: 2
},
{
  type: "mcq",
  q: "Which of the following is NOT a purpose of an organizational chart?",
  options: [
    "Shows lines of authority",
    "Identifies who reports to whom",
    "Shows the informal social groups",
    "Indicates the range of different jobs"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Accountability means:",
  options: [
    "Transferring power to others",
    "Being answerable for the results of an action",
    "Grouping similar tasks together",
    "Drawing the organizational structure"
  ],
  a: 1
},

/* ================= PART 2 : TRUE / FALSE (21–40) ================= */

{ type: "tf", q: "Organizing follows planning in the management process.", a: true },
{ type: "tf", q: "Informal organization is created by management to ensure stability.", a: false },
{ type: "tf", q: "Responsibility can be delegated to subordinates, but authority cannot.", a: false },
{ type: "tf", q: "A wide span of control means a manager supervises a small number of people.", a: false },
{ type: "tf", q: "Unity of command prevents confusion and conflicting orders.", a: true },
{ type: "tf", q: "Organizational charts provide a visual representation of the formal structure.", a: true },
{ type: "tf", q: "The principle of objective states that every part of the organization should be geared toward a common goal.", a: true },
{ type: "tf", q: "Delegation increases the workload of the manager.", a: false },
{ type: "tf", q: "Decentralization means decision-making authority is pushed down to lower levels.", a: true },
{ type: "tf", q: "Master charts show the entire structure of the organization in one view.", a: true },
{ type: "tf", q: "The informal organization has no impact on the formal organization’s performance.", a: false },
{ type: "tf", q: "Scalar chain refers to the direct line of authority from the top to the bottom of the organization.", a: true },
{ type: "tf", q: "Coordination is the process of integrating activities to achieve objectives.", a: true },
{ type: "tf", q: "Functional charts show the names of the people occupying each position.", a: false },
{ type: "tf", q: "Division of work leads to increased efficiency and productivity.", a: true },
{ type: "tf", q: "Informal organizations have their own leaders who may not be official managers.", a: true },
{ type: "tf", q: "Span of control should be the same for every manager in the hospital.", a: false },
{ type: "tf", q: "Organizing involves the systematic arrangement of human and physical resources.", a: true },
{ type: "tf", q: "Written job descriptions are an essential element of organizing.", a: true },
{ type: "tf", q: "Responsibility is the right to give orders.", a: false },

/* ================= PART 3 : CRITICAL THINKING (41–50) ================= */

{
  type: "mcq",
  q: "Conflicting orders from two supervisors violate which principle?",
  options: ["Span of control", "Unity of command", "Specialization", "Departmentalization"],
  a: 1
},
{
  type: "mcq",
  q: "If a hospital is too centralized, the most likely negative outcome is:",
  options: [
    "Too much freedom",
    "Slower decision-making in emergencies",
    "Rapid career growth",
    "Over-specialization"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which chart best explains the functions and duties of each department?",
  options: ["Manning chart", "Skeleton chart", "Functional chart", "Vertical chart"],
  a: 2
},
{ type: "tf", q: "Authority and power are exactly the same in organizing.", a: false },
{
  type: "mcq",
  q: "Why is informal organization considered a hidden structure?",
  options: [
    "Because it is illegal",
    "Because it is based on social needs not official charts",
    "Because it exists only at top level",
    "Because it has no leaders"
  ],
  a: 1
},
{
  type: "mcq",
  q: "A manager with 50 subordinates has a ________ span of control leading to ________ supervision.",
  options: [
    "Narrow, effective",
    "Wide, difficult",
    "Wide, very close",
    "Narrow, loose"
  ],
  a: 1
},
{ type: "tf", q: "Accountability is upward in nature.", a: true },
{
  type: "mcq",
  q: "Breaking the scalar chain leads to:",
  options: [
    "Loss of social relationships",
    "Confusion in authority and communication",
    "Increase in staff numbers",
    "Improved specialization"
  ],
  a: 1
},
{
  type: "mcq",
  q: "When authority is delegated, who remains accountable?",
  options: [
    "The subordinate only",
    "The manager only",
    "Both manager and subordinate",
    "Neither of them"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which principle groups related activities under one head for a common goal?",
  options: ["Unity of command", "Unity of direction", "Span of control", "Decentralization"],
  a: 1
}

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