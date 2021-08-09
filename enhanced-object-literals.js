// ES6 introduced some helpful enhanced object literals
// This is just an alternate syntax for object literal creation to reduce verbosity

function breakDownName(name = ''){
    const names = name.split(' ')
    const fname = names[0]
    const lname = names[1]

    // oldschool
    //return {fname:fname,lname:lname}

    // automatically creates a key value pair on the object using the variable name
    return {fname,lname}

}
const ar = breakDownName("Adam Ranieri")
console.log(ar)

// you can also define methods on an object literal without using the key

let ryan = {
    name:"Ryan",
    describeSelf(){
        console.log(this.name)
    }
}

ryan.describeSelf()