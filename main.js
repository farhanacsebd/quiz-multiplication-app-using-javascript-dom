// random calculation start from here 

const num1 = Math.round(Math.random()*10);
const num2 = Math.round(Math.random()*10);
   

const question = document.getElementById('question');


const userInput = document.getElementById('input');


const formE1 = document.getElementById('form');


let scoreE1 = document.getElementById('score');


let score = JSON.parse(localStorage.getItem("score"));


if(!score){
    score = 0;
}

scoreE1.innerText = `score: ${score}`;

question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnus = num1 * num2;

formE1.addEventListener('submit',function(){

    const userAns = +userInput.value;     // ( + ) means typeof number
     
    if(userAns === correctAnus){
        score++;
        updateLocalStorage()     //call the function from localstorage
    }
    else{
        score--;
        updateLocalStorage()    //call the function from localstorage
    }

});



// localstorage
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}