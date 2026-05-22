// ====================================
// MINI GAMES SYSTEM
// ====================================

console.log("Games System Loaded 🎮");

// LOVE QUIZ

const questions = [

  "What is Lampy's favorite color?",

  "What is Rose's favorite song?",

  "Where did we first meet?"

];

// RANDOM QUESTION

function randomQuestion() {

  const question =
    questions[
      Math.floor(
        Math.random() * questions.length
      )
    ];

  alert(question);

}

// TEST BUTTON

document.addEventListener("keydown", (e) => {

  if (e.key === "g") {

    randomQuestion();

  }

});
