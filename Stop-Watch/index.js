const display=document.getElementById('clock');
let timer=null;
let startTime=0;
let elapsedTime=0
let isRunning=false;

function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
      
        timer=setInterval(update,10)
        isRunning=true
        console.log(timer)
    }
}

function stop(){
if(isRunning){
    clearInterval(timer);
    elapsedTime=Date.now()-startTime;
    isRunning=false;
}
}

function reset(){
    clearInterval(timer)
    display.textContent=`00 : 00 : 00 : 00`;
    isRunning=false;
    startTime=elapsedTime=0;
    timer=null;

}

function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime/(1000*60*60)).toLocaleString().padStart(2,0);
    let minutes=Math.floor(elapsedTime/(1000*60)%60).toLocaleString().padStart(2,0);
    let seconds=Math.floor(elapsedTime/(1000)%60).toLocaleString().padStart(2,0);
    let milliseconds=Math.floor(elapsedTime % 1000 /10).toLocaleString().padStart(2,0);
    display.textContent=`${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
    console.log('h :',hours,'m :',minutes,'s :',seconds,"ms :",milliseconds)
}