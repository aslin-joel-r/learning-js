const choices=['Rock','Paper','Scissors']

const clicked=document.querySelectorAll('.role');
const player=document.getElementById('player');
const computerChoice=document.getElementById('computer');

clicked.forEach(element=>{
    let current='';
    let computer ='';

    element.addEventListener('click',(event)=>{
        current=event.target.name;
        player.textContent=`Player : ${current}`;
        //console.log(current)

        let ran=Math.round(Math.random() *2);
        console.log(ran);
        let computer=choices[ran]

        computerChoice.textContent=`Computer : ${computer}`
    
    })
})


console.log(clicked)