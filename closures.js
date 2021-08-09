// closures are functions that return a new function
// this new function still has access to a variable in the original function

// Common use cases
// Factory Functions
// Decorators

function greetPerson(name){

    const person = name;
    let counter = 0

    function greeter(){
        console.log(`Hello ${person} This function has been called ${++counter} times`)
    }

    return greeter
}

const adamGreeter = greetPerson("Adam")
const shelbyGreeter = greetPerson("Shelby")

adamGreeter()
shelbyGreeter()
adamGreeter()
adamGreeter()
adamGreeter()

