const choices=['Scissors','Rock','Paper'];

const clicked=document.querySelectorAll('.role');
const player=document.getElementById('player');
const computerChoice=document.getElementById('computer');
let gameStatus=document.getElementById('status');
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

        let random=Math.round(Math.random() *2);
        console.log(random);
        let computer=choices[random]
        computerChoice.textContent=`Computer : ${computer}`

        if(current==computer){
            gameStatus.textContent=`Status : Draw`;
        }
       else{

        if(current=='Scissors' && computer=='Paper'){
            gameStatus.textContent=`Status : You Won`;
            playerScore+=1;
        }
        else if(current=='Rock' && computer=='Scissors'){
            gameStatus.textContent=`Status : You Won`;
            playerScore+=1;
        }
        else if(current=='Paper' && computer=='Rock'){
            gameStatus.textContent=`Status : You Won`;
            playerScore+=1;
        }
        else if(current=='Paper' && computer=='Scissors'){
            gameStatus.textContent=`Status : Computer Won`;
            computerScore+=1;
        }
        else if(current=='Rock' && computer=='Paper'){
            gameStatus.textContent=`Status : Computer Won`;
            computerScore+=1;
        }
        else if(current=='Scissors' && computer=='Rock'){
            gameStatus.textContent=`Status : Computer Won`;
            computerScore+=1;
        }
       }
       pScore.textContent=`Your  Score : ${playerScore}`;
       cScore.textContent=`Computer Score : ${computerScore}`;

    })
})


console.log(clicked)