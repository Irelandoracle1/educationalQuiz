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