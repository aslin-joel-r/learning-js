

function clock(){
    const clock=document.getElementById('clock');
    const date=new Date();
    let hour=date.getHours()
    const minutes=date.getMinutes()
    const seconds=date.getSeconds()
    let meredian='AM';
    if(hour>12){
        hour=hour-12;
        meredian='PM'
    }

clock.textContent=`${hour} : ${minutes} : ${seconds} ${meredian}`
}

setInterval(clock,1000)