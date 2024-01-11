class Address{
    constructor(street,city,country,continent){
        this.street=street;
        this.city=city;
        this.country=country;
        this.continent=continent;
    }

}

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
        //console.log(address)
    }
}

const person1=new Person("Aslin",21,"Nevisnagar",'monday market','india','asia');
console.log(person1.address)