let password=[];
let isLower=true;
let isUpper=true;
let isSymbols=true;
let length=25;

function passwordGenerator(){
    // const lower="abcdefghijklmnopqrstuvwxyz"
    // const upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const special="!@#$%^&*()-=+{}[];_:'\"|\\,./?`~<>"
    const char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=+{}[];_:'\"|\\,./?`~<>"
    // console.log(lower)
    // console.log(upper)
    console.log(char.length)

    for(let i=0;i<length;i++){
        let val=Math.floor(Math.random()*char.length)+1;
        password.push(char[val])
    }
    password=password.join('')
    console.log(password)
}

passwordGenerator()