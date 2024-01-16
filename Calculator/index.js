const display=document.getElementById('display');


function numbers(value){
    if(display.value=='0'){
        display.value=value;
    }
   else{
    display.value+=value;
   }
}
function operators(value){
   
    display.value+=value;
   
}
function equals(){
    try{
        const num = display.value;
        console.log(num)
        let result = math.evaluate(num);
        display.value=result
        console.log(result);
    }
    catch(e){
        console.error("Enter the valid expression")
    }
}

function reset(){
    display.value=0;
}

function del(){
    let dis=display.value;
    let len=dis.length;
    dis=dis.slice(0,len-1);
    display.value=dis;
}

