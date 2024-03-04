
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You played Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You played ${gameType}`);
            }
        });
    }
});




let mathQuestions = [
    {
        question:"What is the value of 45/9",
         answer:{
             a:6,
             b:8,
             c:5,
             d:3
         },
        //
         rightAnswer:"c"
        
        },
        
        {
        question:"What is the value of 50/5",
         answer:{
             a:2,
             b:10,
             c:2,
             d:7
         },
        
         rightAnswer:"b"
        
        },
        
        {
        question:"What is the value of 60/3",
         answer:{
             a:20,
             b:10,
             c:9,
             d:38
         },
        
         rightAnswer:"a"
        
        },
    
        {
            question:"Which is greater than 4",
            answer:{
                 a:+5,
                 b:-5,
                 c:-1/2,
                 d:-25.
        },
    
        rightAnswer:"a"
    
    },
    
        {
           question: "Simplify: (4 – 5) – (13 – 18 + 2)",
           answer:{
               a:22,
               b:30,
               c:22,
               d:29
        },
        
        rightAnswer:"d"
    },
]

// second step: store all dom containers in a variable

let  scoreContainer=document.getElementById('score');
let quizContainer=document.getElementById('quiz');
let  submitButton=document.getElementById('submit');

//step three: create  a quiz display function

//this function diplays questions and answers
//from a loop
//step three: create  a quiz display function

//this function diplays questions and answers
//from a loop
function displayQuestions(questions, quizcontainer){
    var displayOutput=[];
    var mathAnswers;
  try{
  for(var i=0; i<=questions.length; i++){
      mathAnswers=[];
  
    for(var letter in questions[i].answer){
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
   var userAnswerContainers=quizcontainer.querySelectorAll('.answers');
   
   //track users answers
   var userAnswer="";
   //initilize the right answers
   var numberOfCorrectAnswers=0;
  
   for(var v=0; v<=questions.length - 1; v++){
      
    userAnswer=(userAnswerContainers[v].querySelector('input[name=question'+v+']:checked')  || {}).value;
   if(userAnswer===questions[v].rightAnswer){
      numberOfCorrectAnswers++;
       //add correct answer image
       userAnswerContainers[v].innerHTML="<img src='assets/images/img/right.png'>";
  
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
