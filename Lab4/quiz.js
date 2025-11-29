// Lab 4 - Quiz Game using JavaScript
// Name: Vansh Negi 
// Section: A
// Roll No: 2501730158
//Subject: Web Development
//Course: Btech CSE AIML

// all questions in one array
const questions = [
    { q: "1) Capital of India?", a: "delhi" },
    { q: "2) What does HTML mean?", a: "hypertext markup language" },
    { q: "3) Which language is used for styling webpages?", a: "css" },
    { q: "4) Father of Computer?", a: "charles babbage" },
    { q: "5) 10 + 15 = ?", a: "25" },
    { q: "6) Planet known as Gas Giant?", a: "jupiter" },
    { q: "7) Tag for image in HTML?", a: "img" }
];

function startQuiz() {

    alert("Welcome to my Quiz Game!");
    let score = 0;

    for (let i = 0; i < questions.length; i++) {

        let ans = prompt(questions[i].q);

        // if nothing entered or cancelled
        if (!ans) {
            alert("No answer given.");
            continue;
        }

        // formatting answer
        ans = ans.toLowerCase().trim();

        if (ans === questions[i].a) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong. Correct answer: " + questions[i].a);
        }
    }

    alert("Your final score is: " + score + " out of " + questions.length);

    // asking to retry
    let retry = prompt("Do you want to play again? yes/no");

    if (retry && retry.toLowerCase().trim() === "yes") {
        startQuiz();
    } else {
        alert("Thanks for playing!");
    }
}

// running the quiz
startQuiz();
