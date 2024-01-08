let num=Math.round(Math.random()*100)
let guess;
let d;
function submit(){
    guess=document.getElementById("input").value;
    if(guess==num){
        d=document.getElementById("tip")
        d.textContent="Your Guess is correct , You win the Match";
        d.style.color='green';
    }

    else if(guess <num){
        d=document.getElementById("tip")
        d.textContent="Your Guess is too low"
        d.style.color='red'
    }
    else{
        d=document.getElementById("tip")
        d.textContent="Your Guess is too high"
        d.style.color='red'
    }
   

}
console.log(num)
console.log(guess)