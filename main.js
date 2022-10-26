const question = document.getElementById('question');
const userInput = document.getElementById('input');
let score = document.getElementById('score');


document.getElementById('submit').addEventListener('click',function(){
    const num1 = Math.round(Math.random()*10);
    const num2 = Math.round(Math.random()*10);

    
    question.innerText = `What is ${num1} multiply by ${num2}?`
    
    const correctAnus = num1 * num2;

    const userAns = Number(userInput.value);
     
    if(userAns === correctAnus){
        score++;
    }
    else{
        score--;
    }



})