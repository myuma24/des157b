const questions = [
    {
      "question": "when it comes to laundry do you keep track of your laundry or do you let it happen and hope you remember?",
      "answer1": "i'll take it out when i remember",
      "answer1Total": "1",
      "answer2": "i will set a timer",
      "answer2Total": "2"
    },
    {
      "question": "when it comes to dishes, do you do it immediately after cooking or after eating/when you feel like it?",
      "answer1": "immediately",
      "answer1Total": "1",
      "answer2": "after i eat or just leave it till i feel ike it",
      "answer2Total": "2"
    },
    {
        "question": "how messy is your room?",
        "answer1": "clean and organized",
        "answer1Total": "1",
        "answer2": "organized messy",
        "answer2Total": "2"
    },
    {
        "question": "luffa/rag or no luffa during shower",
        "answer1": "hands only",
        "answer1Total": "1",
        "answer2": "i must exfoliate",
        "answer2Total": "2"
    },
    {
        "question": "do you wear shoes inside the house?",
        "answer1": "yes i wear my shoes inside the house",
        "answer1Total": "1",
        "answer2": "no i take off my shoes",
        "answer2Total": "2"
    },
    {
        "question": "when it comes to dishes, do you do it immediately after cooking or after eating/when you feel like it?",
        "answer1": "immediately",
        "answer1Total": "1",
        "answer2": "after i eat or just leave it till i feel ike it",
        "answer2Total": "2"
    },
    {
        "question": "when it comes to dishes, do you do it immediately after cooking or after eating/when you feel like it?",
        "answer1": "immediately",
        "answer1Total": "1",
        "answer2": "after i eat or just leave it till i feel ike it",
        "answer2Total": "2"
    }
]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const begin = document.querySelector('.begin');
const title = document.querySelector('.title');
const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const controls = document.querySelector('.controls');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

begin.addEventListener('click', function showQuiz(){
  begin.style.display = 'none';
  title.style.display = 'none';
  questionEl.style.display = 'block';
  document.querySelectorAll('.option').forEach(option => option.style.display = 'flex');
  controls.style.display = 'block';
});

function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    //Populate html elements 
    questionEl.innerHTML = `${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
}

generateQuestions(currentQuestion);

nextButton.addEventListener('click',   function loadNextQuestion () {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }

    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    score.push(answerScore);

    selectedAnswersData.push()

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    currentQuestion++;
  
    selectedOption.checked = false;
    
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          
          if(totalScore <= 5){
            result.innerHTML = `you're bleach
            <button class="restart">Restart Quiz</button>`;
          } else if (5 < totalScore >= 10 ) {
            result.innerHTML = `you're clorox
            <button class="restart">Restart Quiz</button>`;

          } else if (10 < totalScore >= 15 ) {
            result.innerHTML = `you're a scrubdaddy 
            <button class="restart">Restart Quiz</button>`;

          } else if (15 < totalScore >= 30 ) {
            result.innerHTML = `you're a feather duster
            <button class="restart">Restart Quiz</button>`;
            
          } else {
            result.innerHTML = `you're a wet rag
            <button class="restart">Restart Quiz</button> `;
          }
          return;
      }
      generateQuestions(currentQuestion);
  });
  
previousButton.addEventListener('click',  function loadPreviousQuestion() {
  currentQuestion--;
  score.pop();
  generateQuestions(currentQuestion);
});

//reset and restart the quiz;
result.addEventListener('click', function restartQuiz(e){
  if(e.target.matches('button')) {
  currentQuestion = 0;
  score = [];
  location.reload();
  }
});