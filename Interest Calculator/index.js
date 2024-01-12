

function interestCalulate(){
    let principal=document.getElementById('pa').value;
    let rate=document.getElementById('rate').value;
    let year=document.getElementById('year').value;
    let result;
    const display=document.getElementById('display')

    
    if(principal>0 && !isNaN(principal) && rate>0 && !isNaN(rate) && year>0 && !isNaN(year)){
        rate=rate/100;
        result=principal*(1+rate/1)**(1*year);
        console.log(result)
        display.textContent=result.toLocaleString('en-IN',{style:'currency',currency:"INR"})
    }
    else{
        if(principal<0){
            principal
        }
    }
    
}
function reset(){
    location.reload()
}