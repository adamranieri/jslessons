// There are three scopes of variables in JS
// Scopes are defined by the keyword or lack thereof in front of a variable
// Global no keyword
// function var
// block let or const

function create(){
    x = 1000 // global variable created..If this line executes then this variable is accessible 
    // anywhere in the program
}
create()
console.log(x)

function otherFunc(){
    console.log("I am another function " + x)
}
otherFunc()
function editGlobal(){
    x = 90 // reassigning global varirable
}
editGlobal()
otherFunc()
// Global variables are an execellent way to make your code hard to debug and follow along with what is going on
// I strongly discourage using global variables
