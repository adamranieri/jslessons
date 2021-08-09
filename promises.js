// JS is an event driven asynchronous language
// Sometimes your code will execute function that will take a while to return
// NOT because it is tough to process but because of something OUTSIDE of the program takes a while to give back a response
// Many of these functions return promises.
// A promise is like an empty object that will eventually hold a value
const { readFile } = require('fs/promises');

function getFile(){
    const filePromise = readFile("hello.txt")
    console.log(filePromise) // Promise is pending. Essentially an object with nothing in it NOT HELPFUL
    // option 1. attach a callback to the promise. What to execute when it actually has a value
    filePromise.then( buffer =>console.log(buffer.toString()))
    // rather then waiting for return value 
    // a function is defined to be used when the return value becomes available
}
getFile()

// option 2 use async await
// Syntatic sugar for promises that allows us to write asynchronous code as if* it was synchronous
// you can tell JS to wait for the promise to become real then continue regularly

async function getFile2(){
    const buffer = await readFile("hello.txt");
    console.log(buffer.toString())
}

getFile2()

// common things that return promises
// reading, editing, creating files
// making http requests
// communicating with a database

