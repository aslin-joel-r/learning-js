

function interestCalulate(){
    let principal=document.getElementById('pa').value;
    let rate=document.getElementById('rate').value;
    let year=document.getElementById('year').value;
    const display=document.getElementById('display')
    let result;
    

    principal=(principal>0 && !isNaN(principal))?principal:0;
    rate=(rate>0 && !isNaN(rate))?rate:0;
    year=(year>0 && !isNaN(year))?year:0;
    
    
        rate=rate/100;
        result=principal*(1+rate/1)**(1*year);
        console.log(result)
        display.textContent=result.toLocaleString('en-IN',{style:'currency',currency:"INR"})
  
    
}
function reset(){
    location.reload()
}