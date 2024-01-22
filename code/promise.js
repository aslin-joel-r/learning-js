function dog() {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Dog walking finished");
    }, 1500);
   })
}

function sweep() {
    const sweeped=true;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(sweeped){
                resolve("Sweeping finished");
            }
            else{
                reject("Not Sweeped");
            }
        }, 3000);
    })
}

function trash() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Trash cleaned finished");
    }, 500);
  })
}

dog().then(value=>{console.log(value);sweep().then(value=>{
    console.log(value);trash().then(value=>{
        console.log(value)
    })
})}).catch(error=>console.log(error))
