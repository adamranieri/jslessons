// ES6 introduced an arrow syntax
// arrow syntax allows you to shorten the syntax needed to write functions considerable
// this works VERY differtly compared to function defined using the function keyword
// I reccomend avoiding 'this' in arrow notation

function add(num1, num2){
    return num1 + num2
}

const add = (num1, num2) =>{
    return num1 + num2
}
// if your code is only one line then the result is automtaiclly returned
const add = (num1, num2) => num1 + num2

// if you only exactly one input then you do not need parentheses
const isEven = num => num%2 === 0

// using arrow functions over function keyword is usually preferred due to its brevity

const nums = [-1,20,45,-4,-56,100]
nums.filter(n => n<0)

nums.filter(function(n){ return n<0 })