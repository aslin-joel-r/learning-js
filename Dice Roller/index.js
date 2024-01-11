let dice;
let image;

function roll(){
    const dices=[]
    dice=document.getElementById('text').value;
    const images=[]
    diceimages=document.getElementById('diceimages');

    for(let i=0;i<dice;i++){
        di=Math.round(Math.random()*5)+1;
        dices.push(di);
        images.push(`<img src="images/${di}.png" >`)
       
    }
    document.getElementById('dis').textContent=`Dices : ${dices.join(',')}`;
    diceimages.innerHTML=images.join('')
   
    
}