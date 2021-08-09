// Functions in JS allows us to create reusable code chunks
// Functions can be defined using the function keyword or arrow syntax

function sayHello(){
    console.log("Hello")
}
sayHello()

// functions can have parameters
function greetPerson(name){
    console.log("Hello " + name)
}

function mulitHello(name, times){

    for(let i = 0; i< times; i++){
        console.log("hello " + times)
    }
}