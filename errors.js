// It would be great if programs always worked the way we wanted called "happy path"
// However things can and will go wrong. 
// Errors are objects that hold information that might be useful to a programmer
// 1. Where something went wrong
// 2. Information on exactly what went wrong 
// 3. Information on how you might fix the error

// Unlike other programming languages, Errors in JS are not a specific type of object
// There is an error consturctor function but it is not mandatory

// Without errors if the username is invalid we would not kow why
// or how to fix it. We could also not enforce that problems are handled
function validUsername(username = '') {
    if(username.length < 6 ){
        return false
    }
    if( username.includes("?") || username.includes("/")){
        return false
    }
    return true
}

function validUsername(username = '') {
    if(username.length < 6 ){
        throw {name:"Invalid Username length", cause: `username was of length ${username.length} but minimum length of 7 requried`, solution:"Use a username of length 7 or longer"}
    }
    if( username.includes("?") || username.includes("/")){
        throw {name:"Invalid Username Character", cause: `username contained illegal character`, solution:"Do not use the following characters / ?"}
    }
    return true
}

try {
    validUsername("adamgator?")
} catch (error ) {
    console.log("yea we have a problem")
}


