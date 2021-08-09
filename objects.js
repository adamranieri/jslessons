
// An object is a data structure where data is stored as key value pairs
// These key value pairs are called properties
// Objects in JS can be created WITHOUT a class/template
// objects are mutable and can have properties added edited or removed at anytime


let person = {
    fname:"Adam",
    lname:"Ranieri",
    describeSelf: function(){ // methods are functions attached as properties to an object
        console.log(`Hello my name is${this.fname}`)
    },
    age:19
}

console.log(person)

// properties can be accessed using dot notation
person.fname

// properties can be accessed via brackets
person['lname']




// objects are mutable and can have properties added or removed
// add a new property
person.location = "West Virginia"

// delete property
delete person.age
