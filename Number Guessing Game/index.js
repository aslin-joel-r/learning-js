let num=Math.round(Math.random()*100)
let guess;
let d; // for displaying the info of input
let dis;

function submit(){
    guess=document.getElementById("input").value;
    dis=document.getElementById('display');
    d=document.getElementById("tip");
    
    if(isNaN(guess)){
        dis.textContent=guess;
        d.textContent=`Enter a Valid Number`;
        d.style.color='red';
        dis.style.color='red';
    }
    else{
        dis.textContent=guess;
    
        if(guess==num){
       
        d.textContent=` is correct , You win the Match`;
        dis.style.color='green';
        d.style.color='green';
    }

    else if(guess <num){
        d=document.getElementById("tip");
        d.textContent=`is too low`;
        d.style.color='purple';
        dis.style.color='purple';
    }
    else{
        d=document.getElementById("tip");
        d.textContent=`is too high`;
        d.style.color='purple';
        dis.style.color='purple';
    }
    }
   

}
// For checking the results correct or wrong
console.log(num)
console.log(guess)