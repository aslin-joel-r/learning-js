function addTwoNums(a,b){
    try{
        if (typeof(a)!='number') throw new ReferenceError (console.log("a is not a number"));

        if (typeof(b)!='number')  throw new ReferenceError (console.log("b is not a number"));
        
        else console.log(a+b);
    }
    catch(err){
        console.log("Error : ",err);
    }
}

addTwoNums('5',8);

console.log("It still works...");