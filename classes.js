
// JS added classes in ES6
// classes allow for us to create objects via a template 
class Person{

    // static variables belong to the class itself not the object created in the constructor
    static counter = 0

    // you can only have one constructor
    // instance variables can be declared in the body
    constructor(name,age){
        this.name = name
        this.age = age
        Person.counter++
    }

    describeSelf(){
        console.log(`Hello My name is ${this.name}`)
    }
}

const adam = new Person("Adam", 19)

