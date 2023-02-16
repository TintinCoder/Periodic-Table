const quizDB = [
    {
        question: "Q1: What is the chemical name for Iron",
        a: "Fe",
        b: "Io",
        c: "FE",
        d: "Ir",
        ans: "ans1"
    },
    {
        question: "Q2: What is the chemical name for Lawrencium",
        a: "Lr",
        b: "La",
        c: "Lc",
        d: "Lm",
        ans: "ans1"
    },
    {
        question: "Q3: What is the chemical name for Argon",
        a: "Ar",
        b: "AR",
        c: "Ag",
        d: "As",
        ans: "ans1"
    },
    {
        question: "Q4: What is the chemical name for Beryllium",
        a: "Be",
        b: "Br",
        c: "Bl",
        d: "Bli",
        ans: "ans2"
    },
    {
        question: "Q5: What is the chemical name for Carbon",
        a: "C",
        b: "Ca",
        c: "Cr",
        d: "Cb",
        ans: "ans1"
    },
    {
        question: "Q6: What is the chemical name for Hafnium",
        a: "Hr",
        b: "Hf",
        c: "Hn",
        d: "Hm",
        ans: "ans2"
    },
    {
        question: "Q7: What is the chemical name for Actinium",
        a: "At",
        b: "An",
        c: "Am",
        d: "Ac",
        ans: "ans4"
    },
    {
        question: "Q8: What is the chemical name for Europium",
        a: "Er",
        b: "Ep",
        c: "Eu",
        d: "Ep",
        ans: "ans3"
    },
    {
        question: "Q9: What is the chemical name for Titanium",
        a: "Ti",
        b: "Tt",
        c: "Tn",
        d: "Tu",
        ans: "ans1"
    },
    {
        question: "Q10: What is the chemical name for Magnesium",
        a: "Mg",
        b: "Mn",
        c: "Ms",
        d: "Mm",
        ans: "ans1"
    }
]

let questionCount = 0;
let score = 0;

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const sumbit = document.getElementById('submit')
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

const loadQuestion = ()=>{
    let questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheck = ()=>{
    let answer;
    answers.forEach(checkedAns=>{
        if(checkedAns.checked){
            answer = checkedAns.id;
        }
    })
    return answer;
}

const deselectAll = ()=>{
    answers.forEach(element => element.checked = false)
}


sumbit.addEventListener('click', ()=>{
    const checkedAnswer = getCheck()
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll()

    if(questionCount < quizDB.length){
        loadQuestion()
    } else {
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>
        `
        showScore.classList.remove('showArea')
    }
})