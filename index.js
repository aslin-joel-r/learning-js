// using the classes

class Animals{
   
    constructor(name,types){
      this.name=name;
      this.type=types;
    }
    hunts(){
        console.log(`I like hunting `);
    }
    living(){
        console.log(`${this.name}  lives in ${this.type}`);
    }
}

let lion=new Animals("lion",'land');
console.log(lion.name);
lion.hunts();
lion.living();

// Using the inheritance 

class Birds extends Animals{

    constructor (name,type){
        super(name,type); // using super keyword to access the parent properties
        super.living();
    }

    living(){
        
        console.log("I am a method from the bird class");
    }
    
}

var pigeon = new Birds("pigeon",'trees');

pigeon.living();
console.log("done")