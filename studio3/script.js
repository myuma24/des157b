const questions = [
  {
    "question": "When it comes to laundry, do you keep track of your laundry or do you let it happen and hope you remember?",
    "answer1": "When I remember",
    "answer1Total": "2",
    "answer2": "I will set a timer",
    "answer2Total": "1"
  },
  {
    "question": "When it comes to dishes, do you do it immediately after cooking or after eating/when you feel like it?",
    "answer1": "Immediately",
    "answer1Total": "1",
    "answer2": "Till I feel like it",
    "answer2Total": "2"
  },
  {
    "question": "How messy is your room?",
    "answer1": "Clean and organized",
    "answer1Total": "1",
    "answer2": "Messy",
    "answer2Total": "2"
  },
  {
    "question": "Do you wear shoes inside the house?",
    "answer1": "Yes",
    "answer1Total": "2",
    "answer2": "No",
    "answer2Total": "1"
  },
  {
    "question": "Do you pick up after others or just yourself?",
    "answer1": "Myself and others",
    "answer1Total": "1",
    "answer2": "Just myself",
    "answer2Total": "2"
  },
  {
    "question": "Do you use the dishwasher?",
    "answer1": "I hand wash",
    "answer1Total": "1",
    "answer2": "Yes",
    "answer2Total": "2"
  },
  {
    "question": "How often do you shower?",
    "answer1": "At least once a day",
    "answer1Total": "1",
    "answer2": "Not every day",
    "answer2Total": "10"
  }
];

let currentQuestion = 0;
let score = [];
const totalQuestions = questions.length;

const begin = document.querySelector('.begin');
const title = document.querySelector('.title');
const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const controls = document.querySelector('.controls');
const reload = document.querySelector('.reload');
const resultContainer = document.querySelector('.result-container');
const result = document.querySelector('.result');

begin.addEventListener('click', function showQuiz() {
  begin.style.display = 'none';
  title.style.display = 'none';
  questionEl.style.display = 'block';
  document.querySelectorAll('.option').forEach(option => option.style.display = 'flex');
  controls.style.display = 'block';
  generateQuestions(currentQuestion);
});

function generateQuestions(index) {
  const question = questions[index];
  const option1Total = question.answer1Total;
  const option2Total = question.answer2Total;

  questionEl.innerHTML = `${question.question}`;
  document.getElementById('option1').setAttribute('data-total', option1Total);
  document.getElementById('option2').setAttribute('data-total', option2Total);
  option1.innerHTML = `${question.answer1}`;
  option2.innerHTML = `${question.answer2}`;
}

function handleButtonClick(event) {
  const selectedOption = event.target.closest('.option-button');
  const answerTotal = Number(selectedOption.getAttribute('data-total'));
  console.log(`Selected Answer Total: ${answerTotal}`); // Debugging log

  score.push(answerTotal);
  const totalScore = score.reduce((total, currentNum) => total + currentNum, 0); // Ensure the initial value is 0
  console.log(`Total Score: ${totalScore}`); // Debugging log

  currentQuestion++;

  if (currentQuestion === totalQuestions) {
      container.style.display = 'none';
      resultContainer.style.display = "flex";

      // Display the result based on the total score
      if (totalScore <= 7) {
          result.innerHTML = `Microfiber Cloth
          <button class="restart">Restart Quiz</button>`;
      } else if (totalScore >= 8 && totalScore <= 9) { 
          result.innerHTML = `Bleach
          <button class="restart">Restart Quiz</button>`;
      } else if (totalScore >= 10 && totalScore <= 11) { 
          result.innerHTML = `Scrub Daddy 
          <button class="restart">Restart Quiz</button>`;
      } else if (totalScore >= 12 && totalScore <= 13) {
          result.innerHTML = `Clorox Wipe
          <button class="restart">Restart Quiz</button>`;
      } else {
          result.innerHTML = `Dr. Bronner's 18 in 1 Pure Castile Soap
          <button class="restart">Restart Quiz</button>`;
      }
  } else {
      // Generate the next question
      generateQuestions(currentQuestion);
  }
}

// Update event listener to attach to buttons
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

reload.addEventListener('click', function restartQuiz(e) {
    currentQuestion = 0;
    score = [];
    location.reload();
});

// Reset and restart the quiz
resultContainer.addEventListener('click', function restartQuiz(e) {
    if(e.target.matches('button')) {
        currentQuestion = 0;
        score = [];
        location.reload();
    }
});
