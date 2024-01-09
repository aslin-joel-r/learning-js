let password=[];
let isLower;
let isUpper;
let isSymbols;
let length;
let char=[];

function passwordGenerator(){
    password=[];
    char=[]

    const lower="abcdefghijklmnopqrstuvwxyz"
    const upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special="!@#$%^&*()-=+{}[];_:'\"|\\,./?`~<>"
   
    isLower=document.getElementById('lower');
    isUpper=document.getElementById('upper');
    isSymbols=document.getElementById('symbols');
   
    let dis=document.getElementById('display')
    
    isLower.checked?char.push(lower):'';
    isUpper.checked?char.push(upper):'';
    isSymbols.checked?char.push(special):'';
    
    length = document.getElementById('pass-length').value;
      length = length === '' ? 10 : length;

    char=char.join('');

    for(let i=0;i<length;i++){
        let val=Math.floor(Math.random()*char.length)+1;
        password.push(char[val])
    }
    password=password.join('')
    dis.textContent=password;
}

function copyToClipboard() {
    var content = document.getElementById("display");
    var textArea = document.createElement("textarea");
    textArea.value = content.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }