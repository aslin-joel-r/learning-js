const display=document.getElementById('display');
let t;
let num1;
let operator;

function numbers(value){
    if(display.value=='0'){
        display.value=value;
    }
   else{
    display.value+=value;
   }
}

function operation(symbol){
    operator=symbol
    console.log(typeof symbol)
    
    display.value+=symbol;

}

function equals(){
    let a = display.value;
    let calculate = new Function('return ' + a);
    let result = calculate();
    display.value=result
    console.log(result);
}
function reset(){
    display.value=0;
}
function point(){
    display.value+='.'
}
function del(){
    let dis=display.value;
    let len=dis.length;
    dis=dis.slice(0,len-1);
    display.value=dis;
}

