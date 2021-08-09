// Guarding
// JS is a dynamic language and programmers want to ensure that code runs propery or that 
// certain values are checked

// && and || in JS are not your typical 'and' 'or' operators
// They select the appropriate value using truthy falsy

const t = true
const f = false
const result = t || f
console.log(result) // return the truthy variable

const hello = "Hello"
const empty = ""
const selected = hello || empty
console.log(selected) // return the truthy variable "Hello"

// && works similarly to select the second value if both are true
// select the first value if one is false

const x = 1 && 100
console.log(x)

// Why use guards? Guards can be used to reduce boilerplate, increase readability and address
// common use cases
// Null checks. 
// Type Safety. 
// Default Values.

const adam = {
    fname:"Adam",
    mi:"C",
    lname:"Ranieri"
}

function greet(person){
    const fname = person.fname || "No First Name"
    const mi = person.mi || "No Middle Initial"
    const lname = person.lname || "No Last Name"

    console.log(`Hello ${fname} ${mi} ${lname}`)
}


greet(adam)





