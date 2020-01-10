'use strict';
/**
 * Example store structure
 */

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How is the function called in JavaScript?',
      answers: [
        'call ThinkfulFn();',
        'call function ThinkfulFn();',
        'ThinkfulFn();',
        'function ThinfulFn();'
      ],
      correctAnswer: 'ThinkfulFn();'
    },
    {
      question: 'How to write (If “i” is NOT equal to 8) code?',
      answers: [
        'if(i<>8)',
        'if i<8',
        'if(i!=8)',
        'if i!=8'
      ],
      correctAnswer: 'if(i!=8)'
    },
    {
      question: 'What does CSS stand for?',
      answers: [
        'Colorful Style Sheets',
        'Cascading Style Sheets',
        'Computer System Sheets',
        'Cooperation Style System'
      ],
      correctAnswer: 'Cascading Style Sheets'
    },
    {
      question: 'Which function of an Array object calls a function for each element in the array?',
      answers: [
        'map()',
        'function()',
        'forEveryItem()',
        'if()'
      ],
      correctAnswer: 'map()'
    },
    {
      question: 'Choose the correct HTML element for the largest heading:',
      answers: [
        '<head>',
        '<heading>',
        '<h1>',
        '<ul>'
      ],
      correctAnswer: '<h1>'
    }
  ],
  questionNumber: 0,
  score: 0
};

function startQuiz() {
  // The starting screen should have a button that users can click to start the quiz.
}

function preventNoAns() {
  // Users should not be able to skip questions.
}

function displayQuesNum() {
  // Users should also be able to see which question they're on and current score 
  //**SPLIT FUNCTIONS FOR SCORE AND QUESTION NUMBER??**
}

function displayTotalScore() {
  // Users should be shown their overall score at the end of the quiz (correct out of total)
}

function restartQuiz() {
  // Users should be able to start a new quiz
}

function render() {
  //Your app should include a render() function, that regenerates the view each time the store is updated.
}

function main() {

}

$(main);

/*
CHECKLIST:

-Render answer choices in a <form>
-Follow a11y best practices
-Use responsive design
-Be fully usable by keyboard (which will be easy enough if you start with a form)
-Use for= attributes on labels that match the ID of the matching input.
 */