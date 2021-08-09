
function login(){

    const executor = (func1, func2)=>{
        setTimeout(() => {
            func1("Huzzah") //func1 is a function put in the .then()
        }, 2000);
    }

    const promise = new Promise(executor)
    return promise
}

login().then(s =>  console.log(s))