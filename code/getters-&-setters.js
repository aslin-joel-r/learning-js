// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//         //console.log(height*width)
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width=newWidth;
//         }
//         else{
//             console.error("Width should be a number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height=newHeight;
//         }
//         else{
//             console.error("Height is not valid")
//         }
//     }
//     get height(){
//         console.log(this._height.toFixed(2))
//     }
  
// }

// const rec=new Rectangle(177,8);
// console.log(rec.height)

class Person{
    constructor (firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName=='string' && newFirstName.length>0){
            this._firstName=newFirstName;
        }
        else{
            console.error("Firstname should be Alphabetic")
        }
    }
    set lastName(newLastName){
        if(typeof newLastName=='string' && newLastName.length>0){
            this._lastName=newLastName;
        }
        else{
            console.error("Lastname should be Alphabetic")
        }
    }
    set age(newAge){
        if(newAge>0){
            this._age=newAge;
        }
        else{
            console.error("Age is not valid")
        }
    }
    get age(){
        return `Your full Name is ${this._firstName+' '+this._lastName} and your age is ${this._age}`
    }
}

const person=new Person("Aslin",'Joel',1);
console.log(person.lastName)
console.log(person.age)