document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You played Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You played ${gameType}`);
            }
        });
    }
});
//first step: store questions, answers options
//in an array of obejects

let mathQuestions = [
    {
        question: "How many bones are in the human body?",
        answer: {
            a: 206,
            b: 80,
            c: 209,
            d: 399
        },
        rightAnswer: "a"
    },
    {
        question: "Which famous British physicist wrote A Brief History of Time?",
        answer: {
            a: "oracle john",
            b: "Stephen Hawking",
            c: "Godwin stallion",
            d: "Lucad samuel"
        },
        rightAnswer: "b"
    },
    {
        question: "Which Apollo moon mission was the first to carry a lunar rover?",
        answer: {
            a: "Apollo 1",
            b: "Apollo 19",
            c: "Apollo 17",
            d: "Apollo 15"
        },
        rightAnswer: "d"
    },
    {
        question: "Which oath of ethics taken by doctors is named after an Ancient Greek physician?",
        answer: {
            a: "Frank Whittle",
            b: "Sans Adams",
            c: "Hippocratic Oath",
            d: "Gaay core"
        },
        rightAnswer: "c"
    },
    {
        question: "What modern day country was Marie Curie born in",
        answer: {
            a: "Poland",
            b: "France",
            c: "Norway",
            d: "Nigeria"
        },
        rightAnswer: "a"
    },
];
// second step: store all dom containers in a variable

let scoreContainer = document.getElementById('score');
let quizContainer = document.getElementById('quiz');
let submitButton = document.getElementById('submit');

//step three: create  a quiz display function
//this function diplays questions and answers
//from a loop
function displayQuestions(questions, quizcontainer) {
    let displayOutput = [];
    let mathAnswers;
    try {
        for (let i = 0; i <= questions.length; i++) {
            mathAnswers = [];

            for (let letter in questions[i].answer) {
                if (questions[i].answer !== null) {
                    mathAnswers.push(
                        '<div>' +
                        '<input type="radio" class="radio-button" name="question' + i + '" value="' + letter + '">' + '<span>' + letter + " : " + questions[i].answer[letter] + '</span>' + '</div>');
                }
            } //this the end of the answers loop

            displayOutput.push(
                '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + mathAnswers.join('') + '</div>'
            );
            quizcontainer.innerHTML = displayOutput.join('');
        } //end of main for loop
    } catch (e) { }
}
// this function helps us to display answers
//once the get quiz result button is clicked
function displayResults(questions, quizcontainer, scorecontainer) {
    // Grab all the answer containers
    let userAnswerContainers = quizcontainer.querySelectorAll('.answers');
    // Track users' answers
    let userAnswer = "";
    // Initialize the number of correct answers
    let numberOfCorrectAnswers = 0;
    for (let v = 0; v < questions.length; v++) {
        // Check if any radio button is checked
        let checkedRadioButton = userAnswerContainers[v].querySelector('input[name=question' + v + ']:checked');
        if (checkedRadioButton !== null) {
            userAnswer = checkedRadioButton.value;
            if (userAnswer === questions[v].rightAnswer) {
                numberOfCorrectAnswers++;
                userAnswerContainers[v].innerHTML = "<img src='assets/images/img/right.png'>";
            } else {
                userAnswerContainers[v].innerHTML = "<img src='assets/images/img/wrong.png'>";
            }
        } else {
            // If no answer is selected, display a message
            userAnswerContainers[v].innerHTML = "<i style='color:orange;'>Choose an answer</i>";
        }
    }
    // Display the score
    scorecontainer.innerHTML = numberOfCorrectAnswers + "/" + questions.length;
}
//call to the dsiplay question function
displayQuestions(mathQuestions, quizContainer);
submitButton.addEventListener("click", function () {
    displayResults(questions, quizcontainer, scorecontainer) ;
});
