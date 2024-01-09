let dice;
let image;

function roll(){
    let dices=[]
    dice=document.getElementById('text').value;
    console.log(dice);

    for(let i=0;i<dice;i++){
        di=Math.floor(Math.random()*5)+1;
        dices.push(di);
        image=document.createElement('img');
        image.src=`images/${di}.png`;
        document.body.appendChild(image)
    }
    document.getElementById('dis').textContent=`Dices : ${dices.join(',')}`;
   
   
    
}