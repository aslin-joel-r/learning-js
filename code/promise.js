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

async function all(){
  let a= await dog();
    console.log(a)
let b= await sweep();
console.log(b)
let c=await trash();
console.log(c);
console.log("All Done !")

}
all();
