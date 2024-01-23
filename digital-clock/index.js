

function clock(){
    const clock=document.getElementById('clock');
    const date=new Date();
    let hour=date.getHours()
    const minutes=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0)
    let meredian='AM';
    if(hour>12){
        hour=hour-12;
        hour=hour.toString().padStart(2,0)
        meredian='PM'
    }

clock.textContent=`${hour} : ${minutes} : ${seconds} ${meredian}`
}

setInterval(clock,1000)