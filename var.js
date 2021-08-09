
// for a long time JS only had global and var
// var allows a variable to be confined to the function it was created in

function createVariable(){
    var y = 100
    console.log(y)
}

//console.log(y)// error y is not defined

// var was quirky and had behaviors people did not like
// function scoping is not a scope found in almost any other programming language


function weirdScope(num){

    if(num < 100){
        var value ="less than 100" // the variable is created here 
        
    }
    console.log(value)
    // used outside of the curly brackets it was defined in. Not possible in most languages
    // can lead to confusion
}
weirdScope(30)

// var variables are "hoisted" better term would be 'defaulted'
// functions in JS go through a two pass system
// first BEFORE the function assigns all var variables the value of undefined
// undefined is the default value of any variable in JS
// second the code actually EXECUTES

function func(){
    var j;
    console.log(j) // prints undefined
}

function hoist(){
    // variable can be used without an error before being programmatically assigned a value
    console.log(z) // prints undefined
    var z = "Hi :)"
}
hoist()
