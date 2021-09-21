const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#submit-btn");
const output = document.querySelector("#output-score");

const correct = ["90°" , "right angled" , "3" , "80°" ,"scalene"];

function calculateScore(){
    
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correct[index]){
            score=score+1;
        }
        index=index+1;
    }
    output.style.display="block";
    output.innerText = "You Scored  " + score ;
}
btnSubmit.addEventListener("click" , calculateScore);