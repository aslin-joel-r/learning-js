let value=0;
let min;
let max;

function reset(){
    value=0;
    document.getElementById("display").textContent=value;
}
function generate(){
    min=document.getElementById('min').value;
    max=document.getElementById('max').value;
    value=Math.round(Math.random()*(max-min))+Number(min);
    document.getElementById("display").textContent=value;
}