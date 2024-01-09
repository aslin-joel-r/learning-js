
// let a=['apple','orange','mango']
// let e=['grapes','tomato','berry']

// create a 5 variables each  which stores any food
let a='apple'
let b='orange'
let c='mango'
let d='grapes'
let e='tomato'
let f='berry'

function hello(...foods){
    console.log(...foods)
}

hello(a,b,c,d,e,f)

function add(...nums){
    let sum=0;
    for(let i of nums){
        sum+=i;
    }
    
    console.log(sum);
}

add(2,3,4,5,6,7,8,9,0)

let user=[1,1,2,3,4,5,6]

console.log(...user)
