let value=0;

function reset(){
    value=0;
    document.getElementById("display").textContent=value;
}
function add(){
    value+=1;
    document.getElementById("display").textContent=value;
}
function dec(){
    value-=1;
    document.getElementById("display").textContent=value;
}