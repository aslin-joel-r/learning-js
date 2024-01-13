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
    num1=display.value;
    console.log(typeof num1)
    t=num1.length;
    
    num1=num1.slice(0,t-1)
    console.log(t)
    num1=Number(num1)
    console.log(num1)

}

function equals(){
    let num2=display.value;
    num2=num2.slice(t,)
    console.log(num2)
    num2=Number(num2);
    let ans;
    
  
    if(operator=='+'){
        ans=num1+num2;
    }
    else if(operator=='-'){
        ans=num1-num2;
    }
    else if(operator=='*'){
        ans=num1*num2;
    }
    else if(operator=='/'){
        ans=num1/num2;
        console.log(typeof ans)

      if(ans%1!=0){ // checking is the number is float or not
        ans=ans.toFixed(3)
      }
      
    }
     if(isNaN(ans)){
        ans="Math Error"
    }
    display.value=ans;
    console.log(ans)
}
function reset(){
    display.value=0;
}
function point(){
    display.value+='.'
}
