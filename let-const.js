// let and const are ES6 features

function blockScoping(num){
    if(num<100){    
        const h = "Hello"
        // h variable cannot be used outside of the brackets
        // more traditional scoping within programming
    }
    console.log(h) // error
}

function noHoisting(){
    console.log(z) // error
    const z = "No Hoist"
}

// one of JS biggest complaints is it's tendency NOT TO FAIL
// rather then throwing an error saying where and what went wrong you just get undefined
// which is terrible for debugging code

// const vs let
// const variables cannot be reassigned
// let variables can
// I reccomend defaulting to const in your code and then using let if you must
