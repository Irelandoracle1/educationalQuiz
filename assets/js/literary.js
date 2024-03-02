//first step: store questions, answers options
//in an array of obejects
let mathQuestions = [
    {
        question: "What is the occupation of the protagonist Guy Montag in Ray Bradburys Fahrenheit 451",
        answer: {
            a: "Fisherman",
            b: "Fireman",
            c: "Dentist",
            d: "Doctor"
        },

        rightAnswer: "b"

    },

    {
        question: "In what year was Of Mice and Men published",
        answer: {
            a: "1922",
            b: "1935",
            c: "1807",
            d: "1937"
        },

        rightAnswer: "d"

    },

    {
        question: "What classic written by Homer relates the adventures and life of Odysseus",
        answer: {
            a: "The Odyssey",
            b: "The Wagos",
            c: "The Beetles",
            d: "The Ark"
        },

        rightAnswer: "a"

    },

    {
        question: "How many of Ernest Hemingways ten novels were published posthumously",
        answer: {
            a: "Five",
            b: "Seven",
            c: "Three",
            d: "Twenty"
        },

        rightAnswer: "c"

    },

    {
        question: "John Keats wrote what poem to a singing bird",
        answer: {
            a: "The Kaftans",
            b: "Ode to A Nightingale",
            c: "Ode to A Night",
            d: "Ode to A gale"
        },

        rightAnswer: "b"
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