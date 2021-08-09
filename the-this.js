
// this in JS is very misunderstood and operates differently then almost any other language
// what 'this' refers to depends how the function is CALLED.  NOT HOW IT IS DEFINED 
// 1. standalone function = this will refer to a gloabl context
// 2. method (attached to an object) = this will refer to the object
fname = "I am a global variable"

function hello(){
    console.log("Hi my name is :" + this.fname)
}
hello() // if called as a standalone function 'this' refers to the global context

let person= {
    fname:"Adam",
    describeSelf:hello
}
person.describeSelf() // if called as a method attached to an object. 'this' refers to the object


let person2 = {
    fname:"Julia",
    describeSelf:hello
}
person2.describeSelf()

// the this keyword can get difficult to use correctly due to this DYNAMIC BINDING
let person3 = {
    fname:"Rob",
    greeting: function(){
        console.log("Greetigs I am " + this.fname)
        hello() // prints global becuase being called as a standalone function
    }
}
person3.greeting()

const greet = person3.greeting
greet()// both 'this' are global because it is a standalone function now