document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    // for (let button of buttons) {
    //     button.addEventListener("click", function () {
    //         if (this.getAttribute("data-type") === "submit") {
    //             alert("You played Submit!");
    //         } else {
    //             let gameType = this.getAttribute("");
    //             alert(`You played ${gameType}`);
    //         }
    //     });
    // }
});

let mathQuestions = [
    {
        question: "What is the value of 45/9",
        answer: {
            "a": 6,
            "b": 8,
            "c": 5,
            "d": 3
        },
        rightAnswer: "c"

    },
    {
        question: "What is the value of 50/5",
        answer: {
            "a": 2,
            "b": 10,
            "c": 2,
            "d": 7
        },
        rightAnswer: "b"
    },
    {
        question: "What is the value of 60/3",
        answer: {
            a: 20,
            b: 10,
            c: 9,
            d: 38
        },
        rightAnswer: "a"
    },
    {
        question: "Which is greater than 4",
        answer: {
            a: +5,
            b: -5,
            c: -1 / 2,
            d: -25.
        },
        rightAnswer: "a"
    },
    {
        question: "Simplify: (4 – 5) – (13 – 18 + 2)",
        answer: {
            a: 22,
            b: 30,
            c: 22,
            d: 29
        },
        rightAnswer: "d"
    },
    
]

let currentQuestionIndex = 0;
let userScore = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const resultList = document.getElementById("result-list");
const userScoreDisplay = document.getElementById("user-score")


function renderQuestion() {
    // document.getElementById("question-container").hidden = false;
    const currentQuestion = mathQuestions[currentQuestionIndex]
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    for (const optionKey  in currentQuestion.answer) {
        if (currentQuestion.answer.hasOwnProperty(optionKey)) {
            const option = currentQuestion.answer[optionKey]

            const optionElement = document.createElement("input");
            optionElement.type = "radio";
            optionElement.name = "answer";
            optionElement.value = optionKey;
            optionsElement.appendChild(optionElement);

            const label = document.createElement("label")
            label.textContent = `${optionKey.toUpperCase()}. ${option}`;
            optionsElement.appendChild(label);
            optionsElement.appendChild(document.createElement("br"))
        }
    }
}

function submitAnswer() {
    const selectedOptionKey = document.querySelector('input[name="answer"]:checked');
    const userAnswer = selectedOptionKey ? selectedOptionKey.value : null;

    if (userAnswer === null) {
        alert("Please select an answer.")
    }

    const currentQuestion = mathQuestions[currentQuestionIndex];

    if (currentQuestion.rightAnswer === userAnswer) {
        userScore++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < mathQuestions.length){
        renderQuestion();
    } else {
        alert("End of Question");
        displayResults();
    }
}

function displayResults() {
    // document.getElementById("question-container").hidden = true
    // document.getElementById("result-container").hidden = false

    document.getElementById("question-container").style.display = "none";
    resultContainer.style.display = "block";
    userScoreDisplay.textContent = `Your score: ${userScore}/${mathQuestions.length}`;
    mathQuestions.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${question.question} - Correct Answer: ${question.answer[question.rightAnswer]}`;
        resultList.appendChild(listItem);;
    });
}

//call to the dsiplay question function
renderQuestion();
submitButton.addEventListener("click", submitAnswer)