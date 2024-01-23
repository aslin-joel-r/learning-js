let type;
let temp;

let display=document.getElementById("display")

function tempCalculator(){

    let f=document.getElementById('kel');
    let fahrenheit,celcius;
    temp=document.getElementById("inp").value;
    temp=Number(temp);

    if(f.checked){
        celcius=(temp-32)*5/9;
        display.textContent=`${celcius.toFixed(2)} °C`;
    }
    else{
        fahrenheit=temp*(9/5)+32
        display.textContent=`${fahrenheit.toFixed(2)} °F`
    }
}