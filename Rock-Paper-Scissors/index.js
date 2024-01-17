const choices=['Rock','Paper','Scissors']

const clicked=document.querySelectorAll('.role');
const player=document.getElementById('player');
const computerChoice=document.getElementById('computer');
let statu=document.getElementById('status');
let pScore=document.getElementById('pscore');
let cScore=document.getElementById('cscore');

let playerScore=0;
let computerScore=0;

clicked.forEach(element=>{
  
    let current='';
    let computer ='';

    element.addEventListener('click',(event)=>{
        current=event.target.name;
        player.textContent=`Player : ${current}`;
        console.log(current)

        let ran=Math.round(Math.random() *2);
        console.log(ran);
        let computer=choices[ran]
        console.log('computer')
        computerChoice.textContent=`Computer : ${computer}`

        if(current==computer){
            statu.textContent=`Status : Draw`;
        }
       else{
        if(current=='Scissors' && computer=='Paper'){
            statu.textContent=`Status : You Won`;
            playerScore+=1;
        }
        else if(current=='Rock' && computer=='Scissors'){
            statu.textContent=`Status : You Won`;
            playerScore+=1;
        }
        else if(current=='Paper' && computer=='Rock'){
            statu.textContent=`Status : You Won`;
            playerScore+=1;
        }
        else if(current=='Paper' && computer=='Scissors'){
            statu.textContent=`Status : Computer Won`;
            computerScore+=1;
        }
        else if(current=='Rock' && computer=='Paper'){
            statu.textContent=`Status : Computer Won`;
            computerScore+=1;
        }
        else if(current=='Scissors' && computer=='Rock'){
            statu.textContent=`Status : Computer Won`;
            computerScore+=1;
        }
       }
       pScore.textContent=`Player Score : ${playerScore}`;
       cScore.textContent=`Computer Score : ${computerScore}`;

    })
})


console.log(clicked)