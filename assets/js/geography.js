
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});


//first step: store questions, answers options
//in an array of obejects
let mathQuestions = [
    {
      question : "What is the smallest county in the island of Ireland",
       answer : {
         a : "County Carlow",
         b : "County Dublin",
         c : "County  Louth",
         d : "County Cork",
        
     },
    
     rightAnswer:"c"
    
    },
    
    {
    question:"Which of these is Ireland longest river",
    answer:{
         a:"River dommy",
         b:"river shannon",
         c:"River Liffey",
         d:"River Bendel"
     },
    
     rightAnswer:"b"
    
    },
    
    {
    question:"Which county in Ireland takes its name from the Vikings",
    answer:{
         a:"County cork",
         b:"County Dublin",
         c:"County Waterford",
         d:"County Sligo"
     },
    
     rightAnswer:"c"
    
    },

    {
        question:"What county is river Garavogue",
        answer:{
             a: "Drogeda",
             b: "Galway",
             c: "Dublin",
             d: "Sligo"
    },

    rightAnswer:"a"

},

    {
       question: "The majestic Mourne Mountains are an Area of Outstanding Natural Beauty Which writer was inspired by this magical landscape",
       answer:{
           a: "Seamus Heaney",
           b: "James Joyce",
           c: "CS Lewis",
           d: "WB Yeats"
    },
    
    rightAnswer:"d"
},
    
];
    
// second step: store all dom containers in a variable

let scoreContainer=document.getElementById('score');
let quizContainer=document.getElementById('quiz');
let submitButton=document.getElementById('submit');



//step three: create  a quiz display function

//this function diplays questions and answers
//from a loop
 function displayQuestions(questions, quizcontainer){
  let displayOutput=[];
  let mathAnswers;
try{
for(let i=0; i<=questions.length; i++){
    mathAnswers=[];

  for(let letter in questions[i].answer){
    if(questions[i].answer !==null){
        mathAnswers.push(
            '<div>'+
          '<input type="radio" class="radio-button" name="question'+i+'" value="'+letter+'">'+'<span>' +letter+" : "+questions[i].answer[letter] +'</span>'+'</div>');
        
    }
    } //this the end of the answers loop
     
    displayOutput.push(
        '<div class="question">'+questions[i].question +'</div>'+'<div class="answers">'+mathAnswers.join('')+'</div>'
    );
    quizcontainer.innerHTML=displayOutput.join('');
} //end of main for loop
}catch(e){}
}
// this function helps us to display answers
//once the get quiz result button is clicked
function displayResults(questions, quizcontainer, scorecontainer){
  //grab all the answers div
 let userAnswerContainers=quizcontainer.querySelectorAll('.answers');
 
 //track users answers
 let userAnswer="";
 //initilize the right answers
 let numberOfCorrectAnswers=0;

 for(let v=0; v<=questions.length - 1; v++){
    
  userAnswer=(userAnswerContainers[v].querySelector('input[name=question'+v+']:checked')  || {}).value;
 if(userAnswer===questions[v].rightAnswer){
    numberOfCorrectAnswers++;
     //add correct answer image
     userAnswerContainers[v].innerHTML="<img src='assets/images/img/right.jpg'>";

 }else if(userAnswer==null || userAnswer=="undefined"){
    userAnswerContainers[v].innerHTML="<i style='color:orange;'>Choose an answer</i>";
    }
 else{
    userAnswerContainers[v].innerHTML="<img src='assets/images/img/wrong.png'>";
 }

 }
 scorecontainer.innerHTML=numberOfCorrectAnswers + "/" +questions.length;

 }



//call to the dsiplay question function

displayQuestions(mathQuestions, quizContainer);

submitButton.onclick=function(){

    displayResults(mathQuestions, quizContainer, scoreContainer);
};