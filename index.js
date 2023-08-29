var arr=[]

function collector(a,b,c,d){
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
    arr.pop();
    
    return arr
}

console.log(collector('aslin','joel','r','cse15'))