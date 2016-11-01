var quiz = [{
  question: "Question 0 place holder?",
  choices:["Correct", "Wrong", "Double Wrong"],
  correctAnswer: 0
  }, {
  question: "Question 1 place holder?",
  choices: ["Double Wrong", "Correct", "Wrong"],
  correctAnswer: 1
  }, {
  question: "Question 2 place holder?",
  choices: ["Wrong", "Double Wrong", "Correct"],
  correctAnswer: 2
  }
];

var correctlyAnswered = 0;
var setCounter = 0;

function printSet(set) {
  console.log(quiz[set].question); // display question

  for (var i = 0; i < quiz[set].choices.length; i++) {
    console.log(i, quiz[set].choices[i]); // display choices
  }
}

function answer(choice) {
  if (choice === quiz[setCounter].correctAnswer) {
    correctlyAnswered++;
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  setCounter++; // next feature
  if (setCounter >= quiz.length) {
    grade(); // print grade once you submit last answer
  } else {
    printSet(setCounter); // print next question
  }
}

function grade() { // display the final grade
  console.log(correctlyAnswered + ' Out Of ' + quiz.length);
}

printSet(setCounter); // initializing the first question
