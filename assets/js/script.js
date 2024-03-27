document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


});


function questionnaire(questions) {
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
        const currentQuestion = questions[currentQuestionIndex]
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
    
        const currentQuestion = questions[currentQuestionIndex];
    
        if (currentQuestion.rightAnswer === userAnswer) {
            userScore++;
        }
    
        if(userAnswer !== null){
            currentQuestionIndex++;
    
        }
    
        
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
        userScoreDisplay.textContent = `Your score: ${userScore}/${questions.length}`;
        questions.forEach((question, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${question.question} - Correct Answer: ${question.answer[question.rightAnswer]}`;
            resultList.appendChild(listItem);;
        });
    }
    
    //call to the dsiplay question function
    renderQuestion();

    submitButton.addEventListener("click", submitAnswer)
}